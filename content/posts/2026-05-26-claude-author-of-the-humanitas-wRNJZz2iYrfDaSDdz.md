---
title: "[요약] 클로드, 『후마니타스』의 저자"
date: 2026-05-26T16:05:27.481Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Claude, Author of the Humanitas"
  url: "https://www.lesswrong.com/posts/wRNJZz2iYrfDaSDdz/claude-author-of-the-humanitas"
  author: "Linch"
  date: 2026-05-26
  score: 117
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Claude, Author of the Humanitas](https://www.lesswrong.com/posts/wRNJZz2iYrfDaSDdz/claude-author-of-the-humanitas)
> **작성자**: Linch · 2026-05-26 · 👍 117
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 교황 레오 14세의 첫 회칙 *Magnifica Humanitas*(AI 시대 인간 보호에 관한)의 상당 부분이 — 아마도 Claude를 사용한 — AI로 작성되었다는 다각도 증거가 존재한다.**

## 배경

저자는 친구들과 함께 메모리얼 데이 새벽에 교황 레오 14세의 첫 회칙 발표를 들었다. 회칙 부제는 "AI에 *관한*"이 아니라 "AI *시대에* 인간 보호에 관한"으로, 파롤린 추기경은 이 전치사 선택이 인간 중심성을 강조한다고 강조했다. 그러나 저자는 더 적절한 전치사는 "*by*(에 의해)"일 수 있다고 주장한다 — AI가 상당 부분 작성한 첫 교황 회칙이라는 의미에서.

## 주요 주장

1. 회칙의 상당 부분이 AI로 작성됨
2. 통계적 증거와 어조가 이를 뒷받침함
3. 최고의 AI 탐지기 Pangram이 일부 단락을 40~100% AI로 표시
4. 번역 아티팩트일 가능성은 낮음
5. 사용된 AI는 Claude일 가능성이 높음
6. 섹션마다 AI 사용률이 크게 다름 — 일부 추기경만 AI를 사용한 것으로 추정

## 통계적 증거

### Em-dash 사용
- *Magnifica Humanitas*: 127회 (인용 외)
- *Dilexit Nos* (2024): 0회
- *Fratelli Tutti* (2020): 0회
- *Laudato Si'* (2016): 0회
- 압도적으로 비정상적인 빈도

### "Genuinely" 사용
Claude의 특징적 표현으로, Anthropic이 시스템 프롬프트에서 명시적으로 금지하려 시도했을 정도. *Magnifica Humanitas*에서 "genuinely" 9회, "genuine" 총 22회 — 비슷한 길이의 *Dilexit Nos*(각 0회, 5회)와 대비. 9개 용례 중 7개는 의미적으로 불필요한 사용.

**주제 관련성 반박**: AI 시대 진정성을 다루는 회칙이라 자연스럽지 않냐는 반론에 대해, 저자는 각 용례를 검토하여 대부분이 주제와 무관한 위치에 사용됨을 보임.

**교황 개인 문체 반박**: 교황은 회칙을 직접 쓰지 않는 게 일반적이며, 레오 14세의 1987년 박사학위 논문 2장(14페이지)에는 "genuine(ly)" 0회, em-dash 0회.

### 삼항구(tricolon)
LLM이 자주 쓰는 세 개의 평행 구문이 *Magnifica Humanitas*에 두드러지나, 교황별 인간 변이도 존재하여 결정적이지는 않음.

## Pangram 분석

Pangram은 매우 낮은 위양성률로 최적화된 최고 수준의 상용 AI 탐지기.

- *Magnifica Humanitas* 첫 20단락: 11% AI 표시, 단락 7-8 매우 의심
- **과거 회칙 백테스트**: 4개 회칙 모두 100% 인간 판정
- **교황 레오 14세 연설문**: 100% 인간 판정 — 교황 본인은 AI 미사용 추정
- 단락별 편차가 큼: 어떤 단락은 0%, 어떤 단락은 매우 AI적

## 번역 아티팩트 가능성 배제

1. **이탈리아어 원문 검증**: 영어판에서 발견된 AI 신호들이 이탈리아어 원문에도 그대로 보존됨 (Claude Opus 4.7, ChatGPT 5.5 Pro 두 에이전트가 확인)
2. **이탈리아어판 Pangram 결과**: 이탈리아어판도 AI로 표시되며, 오히려 영어판보다 더 많은 부분이 표시됨
3. **AI 번역 백테스트**: 과거 회칙(*Fratelli Tutti*)을 Gemini, Claude, ChatGPT로 번역해도 모두 100% 인간으로 판정 — AI 번역만으로는 Pangram을 속이지 않음

## Claude 가설

- "Genuinely"는 Claude/Anthropic의 대표적 하우스 스타일
- ChatGPT 특유의 단어들("delve", "meticulous", "tapestry", "goblins")은 회칙에 0회 등장 → ChatGPT 가능성 낮음
- 다만 모델 간 구별은 AI 존재 여부 탐지보다 훨씬 어려움

## 결론

저자의 추정: 일부 추기경들이 AI를 적극 사용했으며, 교황 본인은 [사제들에게 강론에 AI 쓰지 말라고 한 발언](https://www.ncronline.org/vatican/pope-leo-tells-priests-not-use-ai-write-homilies-or-seek-likes-tiktok)을 보면 이를 승인하지 않았을 가능성, 심지어 인지하지 못했을 가능성도 있음.

> "AI 시대에 출처(provenance)를 제대로 파악하는 것은 인간 진정성만의 문제가 아니라 — 생사의 문제다."

각 개별 증거는 반박될 수 있으나, 다각도의 증거가 일치한다는 점([consilience](https://en.wikipedia.org/wiki/Consilience))이 집합적으로 매우 강력한 시사를 준다.
