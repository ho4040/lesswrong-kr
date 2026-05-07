import Anthropic from "@anthropic-ai/sdk";
import { writeFileSync, existsSync, readdirSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LW_GRAPHQL = "https://www.lesswrong.com/graphql";
const POSTS_DIR = process.env.POSTS_DIR ?? "content/posts";
const TOP_N = parseInt(process.env.TOP_N ?? "3", 10);
const MIN_SCORE = parseInt(process.env.MIN_SCORE ?? "80", 10);
const DAYS = parseInt(process.env.DAYS ?? "7", 10);
const MODEL = process.env.MODEL ?? "claude-opus-4-7";
const SITE_BASE_URL = process.env.SITE_BASE_URL ?? "https://ho4040.github.io/lesswrong-kr";
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const SLACK_CHANNEL = process.env.SLACK_CHANNEL ?? "news";

interface LWPostMeta {
  _id: string;
  title: string;
  slug: string;
  baseScore: number;
  postedAt: string;
  user: { displayName: string };
}

interface LWPost extends LWPostMeta {
  contents: { markdown: string };
}

async function gql<T>(query: string): Promise<T> {
  const res = await fetch(LW_GRAPHQL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) throw new Error(`GraphQL HTTP ${res.status}`);
  const json = (await res.json()) as { data: T; errors?: unknown };
  if (json.errors) throw new Error(`GraphQL error: ${JSON.stringify(json.errors)}`);
  return json.data;
}

async function fetchCandidates(): Promise<LWPostMeta[]> {
  const data = await gql<{ posts: { results: LWPostMeta[] } }>(`{
    posts(input:{terms:{view:"new",limit:100}}){
      results{ _id title slug baseScore postedAt user{displayName} }
    }
  }`);
  const cutoff = Date.now() - DAYS * 24 * 60 * 60 * 1000;
  return data.posts.results
    .filter(p => new Date(p.postedAt).getTime() >= cutoff && p.baseScore >= MIN_SCORE)
    .sort((a, b) => b.baseScore - a.baseScore);
}

async function fetchPostBody(id: string): Promise<string> {
  const data = await gql<{ post: { result: { contents: { markdown: string } } } }>(`{
    post(input:{selector:{_id:"${id}"}}){ result{ contents{ markdown } } }
  }`);
  return data.post.result.contents.markdown;
}

function alreadyTranslated(postId: string): boolean {
  if (!existsSync(POSTS_DIR)) return false;
  return readdirSync(POSTS_DIR).some(f => f.endsWith(`-${postId}.md`));
}

const SYSTEM_PROMPT = `당신은 LessWrong 글을 한국어로 번역하는 전문 번역가입니다.

번역 원칙:
- 원문의 논리 구조와 톤을 충실히 보존
- 합리주의 커뮤니티 핵심 용어집:
  - rationality → 합리성, rationalist → 합리주의자
  - alignment → 정렬, inner/outer alignment → 내적/외적 정렬
  - prior → 사전 확률, posterior → 사후 확률
  - update / updating → 갱신, 신념 갱신
  - bayesian → 베이지안, utility → 효용
  - agent → 에이전트, mesa-optimizer → 메사 최적화
  - steelman → 강한 반론(steelman), epistemics → 인식론
  - AGI / ASI → 그대로 표기
- 마크다운 문법(헤더, 링크, 코드, 인용)은 그대로 유지
- 인용 출처, 링크, 각주는 그대로 보존
- 의역보다 직역에 가깝게, 단 어색하지 않은 한국어 어순으로
- 번역 결과만 출력. 설명이나 메타 코멘트 금지.`;

async function translateBody(client: Anthropic, markdown: string): Promise<string> {
  const msg = await client.messages.create({
    model: MODEL,
    max_tokens: 16000,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: `다음 LessWrong 글을 한국어로 번역하세요:\n\n${markdown}` }],
  });
  const block = msg.content[0];
  if (block.type !== "text") throw new Error("expected text block");
  return block.text;
}

async function translateTitle(client: Anthropic, title: string): Promise<string> {
  const msg = await client.messages.create({
    model: MODEL,
    max_tokens: 200,
    system: "LessWrong 글의 제목을 자연스러운 한국어로 번역하세요. 번역만 한 줄로 출력.",
    messages: [{ role: "user", content: title }],
  });
  const block = msg.content[0];
  if (block.type !== "text") throw new Error("expected text block");
  return block.text.trim().replace(/^["']|["']$/g, "");
}

function postSiteUrl(filename: string): string {
  // Hugo lowercases filename-derived URLs; strip .md
  const slug = filename.replace(/\.md$/, "").toLowerCase();
  return `${SITE_BASE_URL}/posts/${slug}/`;
}

async function notifySlack(args: {
  titleKo: string;
  postUrl: string;
  original: { title: string; url: string; author: string; score: number };
}): Promise<void> {
  if (!SLACK_BOT_TOKEN) {
    console.log("  (slack: SLACK_BOT_TOKEN not set, skipping)");
    return;
  }
  const { titleKo, postUrl, original } = args;
  const text = `📝 새 LessWrong 번역: <${postUrl}|${titleKo}>`;
  const blocks = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `📝 *새 LessWrong 번역*\n*<${postUrl}|${titleKo}>*`,
      },
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: `원문: <${original.url}|${original.title}> · ${original.author} · 👍 ${original.score}`,
        },
      ],
    },
  ];
  const res = await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
    },
    body: JSON.stringify({
      channel: SLACK_CHANNEL,
      text,
      blocks,
      unfurl_links: false,
      unfurl_media: false,
    }),
  });
  const data = (await res.json()) as { ok: boolean; error?: string };
  if (!data.ok) {
    console.warn(`  ⚠ slack post failed: ${data.error}`);
  } else {
    console.log(`  ✓ slack notified (#${SLACK_CHANNEL})`);
  }
}

function buildMarkdown(post: LWPost, titleKo: string, bodyKo: string): { filename: string; content: string } {
  const date = post.postedAt.slice(0, 10);
  const filename = `${date}-${post.slug}-${post._id}.md`;
  const url = `https://www.lesswrong.com/posts/${post._id}/${post.slug}`;
  const yamlEsc = (s: string) => JSON.stringify(s);

  const frontmatter = `---
title: ${yamlEsc(titleKo)}
date: ${post.postedAt}
draft: false
tags: ["LessWrong", "번역"]
summary: ""
original:
  title: ${yamlEsc(post.title)}
  url: ${yamlEsc(url)}
  author: ${yamlEsc(post.user.displayName)}
  date: ${date}
  score: ${post.baseScore}
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [${post.title}](${url})
> **작성자**: ${post.user.displayName} · ${date} · 👍 ${post.baseScore}
>
> 본 글은 LessWrong 인기 게시글을 AI로 자동 번역한 것입니다. 번역 오류는 [GitHub 이슈](https://github.com/ho4040/lesswrong-kr/issues)로 알려주세요.

---

`;
  return { filename, content: frontmatter + bodyKo + "\n" };
}

async function main() {
  if (!existsSync(POSTS_DIR)) mkdirSync(POSTS_DIR, { recursive: true });

  const client = new Anthropic();
  const candidates = await fetchCandidates();
  console.log(`Found ${candidates.length} candidates (last ${DAYS}d, score >= ${MIN_SCORE})`);

  const fresh = candidates.filter(p => !alreadyTranslated(p._id)).slice(0, TOP_N);
  console.log(`Will translate ${fresh.length} new posts (TOP_N=${TOP_N})`);

  for (const meta of fresh) {
    console.log(`\n→ ${meta.title} (score ${meta.baseScore})`);
    const markdown = await fetchPostBody(meta._id);
    if (markdown.length < 200) {
      console.log("  skip: body too short");
      continue;
    }
    const [titleKo, bodyKo] = await Promise.all([
      translateTitle(client, meta.title),
      translateBody(client, markdown),
    ]);
    const post: LWPost = { ...meta, contents: { markdown } };
    const { filename, content } = buildMarkdown(post, titleKo, bodyKo);
    writeFileSync(join(POSTS_DIR, filename), content);
    console.log(`  ✓ ${filename}`);

    await notifySlack({
      titleKo,
      postUrl: postSiteUrl(filename),
      original: {
        title: meta.title,
        url: `https://www.lesswrong.com/posts/${meta._id}/${meta.slug}`,
        author: meta.user.displayName,
        score: meta.baseScore,
      },
    });
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
