---
title: "[요약] 기계적 해석가능성 워크숍에 제출된 AI 생성 콘텐츠 분석"
date: 2026-07-14T18:06:42.961Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "An analysis of AI-generated content at the Mechanistic Interpretability Workshop"
  url: "https://www.lesswrong.com/posts/r7FBQ8XDs6qBYc4K4/an-analysis-of-ai-generated-content-at-the-mechanistic"
  author: "Andy Arditi"
  date: 2026-07-14
  score: 111
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [An analysis of AI-generated content at the Mechanistic Interpretability Workshop](https://www.lesswrong.com/posts/r7FBQ8XDs6qBYc4K4/an-analysis-of-ai-generated-content-at-the-mechanistic)
> **작성자**: Andy Arditi · 2026-07-14 · 👍 111
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: Mechanistic Interpretability Workshop 제출 논문 수가 2년 만에 143편에서 801편으로 폭증했고, 2026년판에서는 약 3분의 1이 대부분 AI로 생성된 텍스트로 판정됐다. 다만 최상위 논문은 여전히 인간이 쓴 글이 압도적이며, AI가 쓴 리뷰는 AI가 쓴 논문을 후하게 평가하는 경향이 관찰됐다.**

## 배경

ChatGPT 초기(2023–2024)에는 AI가 아이디어 사운딩보드나 편집자 역할에 그쳤으나, 최근 Claude Code 시대에는 코딩 에이전트가 실험을 자동 수행하고 박사급 프로젝트의 상당 부분을 처리할 수 있게 됐다. 이런 도구는 연구자의 생산성을 확장하지만, 동시에 누구든 프롬프트만으로 학회 논문 형태의 결과물을 만들어낼 수 있게 만들었다.

**Mechanistic Interpretability Workshop**의 program chair들은 2026년판에서 제출 수가 급증하고 "AI slop"에 가까운 논문이 눈에 띄게 늘어났음을 관찰했다. 이에 모든 제출 논문과 리뷰를 **Pangram**(AI 텍스트 탐지기, v3.3.2)에 돌려 정량 분석을 수행했다.

## 주요 관찰

### 제출량의 폭발적 증가
- 2024: 143편 → 2025: 320편 → 2026: **801편** (매 반복마다 두 배 이상)
- 두 번 더 두 배가 되면 ICLR 2022 규모(약 3,200편)에 도달. 워크숍이 소규모 학회 수준이 됨.
- 물리적 제약으로 2026년판에는 *virtual poster* 등급을 신설.

### 단독 저자·중복 first-author 증가
- 단독 저자 논문: 9%(2024) → 24%(2026), 약 200편.
- 2026년에는 62명이 최소 2편을 first-author로 냈고, **한 명이 6편을 first-author**로 낸 사례까지 존재.

### AI 생성 텍스트 측정 방법론
NeurIPS 2026 포지션 페이퍼 트랙 분석과 동일한 방법:
1. PDF에서 본문만 추출(그림, 표, 참고문헌, 부록 제외).
2. Pangram이 ~250–350단어 chunk로 분할, 각 chunk에 0(인간)–1(AI) 점수 부여. **0.75 이상이면 flagged**.
3. 논문 점수 = flagged된 chunk의 비율.

이는 **작성 스타일**만 측정하며, 연구 전 과정에서 AI 사용 여부를 직접 판정하지는 않음.

### AI 생성 글쓰기 확산
- 2024: 사실상 어떤 논문도 실질적 AI 생성으로 분류되지 않음.
- 2026: **약 33%**의 논문이 텍스트 대부분이 flagged됨. "완전 인간 작성"(0% flagged) 비율은 98% → 32%로 급락.

### 최상위 논문은 여전히 인간 중심
- **스포트라이트 23편 중 91%가 완전/대체로 인간 작성** (전체 풀에서는 ~50%).
- Desk-reject된 논문일수록 AI 생성 비율이 높음. 티어 간 뚜렷한 그래디언트 관찰.
- Fully human 논문 억셉률 34.9% vs Fully AI 논문 4.2%.

### 단독/중복 first-author 논문의 AI 편향
단독 저자 논문과 중복 first-author 논문은 전체 baseline보다 AI 생성 텍스트 비율이 눈에 띄게 높음.

### 리뷰도 점점 AI 생성
- 2024: 96%가 완전 인간 작성.
- 2026: **50%의 리뷰가 최소 한 chunk 이상 flagged, 17%는 전체가 flagged**.

### AI 리뷰가 AI 논문을 더 후하게 평가
확실히 분류된 논문·리뷰만 대상으로 비교:
- 강하게 AI 생성된 논문에 대해 AI 리뷰 평균 추천점수 **3.82** vs 인간 리뷰 **3.08**.
- 같은 AI 논문 24편에 대한 페어 비교에서 AI 리뷰가 평균 **1.38점 더 높게** 평가했고, 네 가지 세부 항목(명확성, 정확성, 이해 증진, 워크숍 적합성) 모두에서 높게 매김.

## AI 생성 abstract의 특징적 패턴

Claude Opus 4.8을 이용해 고득점/저득점 초록을 비교한 결과:
- **통계 수치의 남발**: p-value, 신뢰구간, AUROC, Cohen's d 등을 과도하게 나열. 예: *"By epoch 6, mid-layer probe accuracy surpassed 79.4%, with an AUROC of 0.817 (Cohen's d = 2.64; Wilcoxon p < 10⁻¹⁰)."*
- **마케팅풍 method 이름**: "SpectraLens, a unified framework for…" 같은 브랜드형 명명.
- **정형화된 구조와 상투 표현**: "remains largely unexplained", "not merely X, but Y", "Taken together, these results…" 등.

## AI 시대의 연구에 관한 생각

### AI 지원 연구는 되돌릴 수 없다
낭만적이지만 비현실적. 커뮤니티는 적응해야 함. AI는 실험 셋업, 시각화, 버그 발견, 관련 연구 조사, 그림·문장 정제에 유용하며 특히 비영어권 연구자에게 큰 도움. AI가 [Erdős 추측 반례를 생성해 수학자들이 검증](https://openai.com/index/model-disproves-discrete-geometry-conjecture/)한 사례처럼, 인간 없이 생성된 연구 결과도 읽을 만한 시대가 오고 있음.

### 저자는 자신의 이름을 건 결과에 책임져야
arXiv 정책 인용:
> "저자는 자신의 이름을 건 논문의 모든 내용에 대해, 그것이 어떻게 생성되었든, 전적인 책임을 진다. 생성형 AI 도구가 부적절한 언어, 표절, 오류, 잘못된 참고문헌 등을 만들었다면 그 책임은 저자에게 있다."

### 피어리뷰의 적응 방향
- **모든 제출물(거절 포함) 저자 공개**: double-blind 종료 후 거절된 논문도 deanonymize하면 저자가 책임감을 갖게 됨. ICLR은 이미 시행 중.
- 리뷰 공개, AI 탐지 점수·환각 인용 검사 결과 공표 등도 가능. 반복적으로 저품질 논문을 대량 제출하는 연구자는 공개 평판을 형성하게 됨.
- 기타 시도: NeurIPS 포지션 트랙·ACL의 AI 생성물/환각 인용 desk-reject, arXiv의 무검증 LLM 결과물 저자 일시 정지, TMLR의 연간 제출 한도.
