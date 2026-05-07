# LessWrong 인기글 번역

[LessWrong](https://www.lesswrong.com/) 인기 게시글을 한국어로 자동 번역해 공유하는 사이트.

라이브: https://ho4040.github.io/lesswrong-kr/

## 구조

- **사이트**: Hugo + [PaperMod](https://github.com/adityatelange/hugo-PaperMod)
- **번역**: Claude API (`scripts/translate.ts`)
- **배포**: GitHub Pages (`.github/workflows/hugo.yml`)
- **자동 번역**: 주간 cron (`.github/workflows/translate.yml`) — 매주 일요일 자동 커밋

## 로컬 개발

```bash
# 서브모듈 포함 클론
git clone --recursive https://github.com/ho4040/lesswrong-kr.git
cd lesswrong-kr

# Hugo 서버
hugo server -D
# → http://localhost:1313/lesswrong-kr/
```

## 수동 번역 실행

```bash
cd scripts
npm install
ANTHROPIC_API_KEY=sk-... npm run translate
```

환경 변수:
- `TOP_N` (기본 3) — 번역할 글 개수
- `MIN_SCORE` (기본 80) — LessWrong baseScore 하한
- `DAYS` (기본 7) — 최근 며칠 내 글 대상
- `MODEL` (기본 `claude-opus-4-7`)

## 설정

GitHub repo Settings에서:
1. **Pages** → Source를 `GitHub Actions`로 설정
2. **Secrets and variables → Actions** → `ANTHROPIC_API_KEY` 추가
3. **Actions → General → Workflow permissions** → `Read and write permissions` 체크 (자동 커밋용)

## 라이선스

번역본은 원문 라이선스를 따른다 (대부분 CC BY 또는 CC BY-NC-SA).
모든 글에 원문 링크, 작성자, 점수가 표시된다.
