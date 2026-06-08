---
title: "[요약] 활성화 언어화기는 내부 사고 사슬을 드러낼 수 있는가?"
date: 2026-06-07T04:24:01.373Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Can activation verbalizers surface an internal chain of thought?"
  url: "https://www.lesswrong.com/posts/QQQAcKuWK6k98FivY/can-activation-verbalizers-surface-an-internal-chain-of-1"
  author: "oakhu"
  date: 2026-06-07
  score: 103
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Can activation verbalizers surface an internal chain of thought?](https://www.lesswrong.com/posts/QQQAcKuWK6k98FivY/can-activation-verbalizers-surface-an-internal-chain-of-1)
> **작성자**: oakhu · 2026-06-07 · 👍 103
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR:** 활성화 verbalizer(AV)가 수학 문제 풀이 중 모델의 단일 forward pass 내부 추론을 자연어로 드러낼 수 있는지 평가한 결과, 오픈웨이트 자연어 오토인코더(NLA)들은 "가능은 하지만 신뢰할 수준은 아님"으로 나타났다.

## 배경 및 동기

현재 많은 AI 능력은 자연어 chain-of-thought(CoT)에 의존하므로 모니터링이 가능하지만, **단일 forward pass 내 불투명 추론**이 위험 수준까지 정교해질 가능성에 대비해 이를 가시화할 도구가 필요하다. **Activation Verbalizer(AV)**는 residual stream 활성화를 자연어로 매핑하고, **Activation Reconstructor(AR)**가 그 자연어를 다시 활성화로 복원하도록 학습된다. 둘이 합쳐 **NLA(natural-language autoencoder)**를 이룬다. AV는 활성화만 보며 프롬프트나 출력을 직접 보지 않는다.

저자들은 Qwen2.5(7B), Gemma 3(27B), Llama 3.3(70B)의 오픈웨이트 NLA, 그리고 Qwen3(8B)의 질문응답형 Activation Oracle(AO)을 경쟁 수학 문제(미 중학교 600문제, 헝가리 고교 300문제)로 평가했다.

## 핵심 결과

### 1. NLA의 재구성 품질이 부족하다
- **FVU(Fraction of Variance Unexplained)** 측정 결과, Qwen2.5의 NLA는 "layer 평균 방향이 적힌 돌"보다도 못한 재구성을 보였다.
- 한 문제의 변형들(예: 캔 가격 변화) 간 차이를 추적하는 능력에서 세 NLA 모두 평균 방향 baseline에 패배. Qwen2.5는 사실상 차이를 탐지 못하고, Gemma가 가장 양호, Llama는 중간.
- 즉 NLA의 노이즈가 문제 매개변수 변화보다 커서 세부 추론 추적에 부적합.

### 2. 컨파뷸레이션(confabulation) 가능성을 배제하기 어렵다
- Sonnet 4.6에게 문제 진술만 보고 verbalization을 "지어내라"고 시키면, best-of-10이 실제 AV 수준의 재구성 손실을 달성.
- Qwen3 AO가 문제 텍스트 활성화를 보면 그럴듯한 CoT를 생성하지만, 모델이 틀린 답을 낼 때도 동일한 빈도로 그럴듯해 보임 → **문제 진술 복원 후 추론을 지어내는 것**일 가능성.

### 3. Verbalization이 모델 출력을 안정적으로 예측하지 못한다
가장 쉬운 123문제 기준:
- **정답인 경우** Gemma 출력은 84%에서 언급되지만 단독 부각은 42%에 불과(Llama 유사).
- **오답인 경우** 출력이 언급되는 비율은 47%, 단독 부각은 0/78. Llama도 유사.
- 오답 시 정답을 "고려한 흔적"이 약 24%(Gemma), 10%(Llama).

### 4. 추론 흔적은 나오지만 일관성은 드물다
- **Gemma 533번** (두 점을 지나는 직선의 기울기): verbalization이 공식 $m=(y_2-y_1)/(x_2-x_1)$, 중간값 14/7, 최종답 2를 모두 언급 — 가장 강한 사례.
- 정답 출력 전 verbalization 중 인지 흔적 hint는 76%(Gemma), CoT처럼 보이는 것은 16%에 불과.
- 오답 전에는 hint조차 14%, CoT 같은 것은 1/78.
- 결국 "정답으로 향하는 CoT가 오답으로 향하는 CoT보다 지어내기 쉬움" → confabulation 가설과 부합.

### 5. 오답의 원인을 거의 드러내지 못한다
- 가장 좋은 사례 **549번** ($2^n \pm 1$이 모두 합성수인 최소 $n$): Gemma 출력은 561, verbalization은 "smallest pseudoprime / Carmichael number"를 언급 — 실제로 561이 최소 Carmichael 수.
  - verbalization에서 이 mistake를 편집하고 steering하면 Gemma의 출력이 올바른 답 6으로 바뀜.
  - **하지만** 다른 문제에서 추출한 유사 steering vector도 17% 확률로 같은 효과를 냄 → 단순 perturbation 효과일 가능성.
  - 또한 Opus는 verbalization 없이도 이 mistake를 쉽게 추측.
- 전체적으로 오답의 그럴듯한 설명을 제공하는 verbalization은 3.5% 수준이고, 명확히 출력을 설명하는 경우는 763개 중 단 2건.

## 평가 방법

각 verbalization을 7개 차원으로 채점: **Output, Answer, Problem, Method, Values, Coherence, Mistake**. 등급은 Absent / Spurious / Ambiguous / Lax / Strict. Opus 4.7(xhigh) 5개 인스턴스의 median을 사용. Krippendorff α는 Output/Answer은 0.98 이상이나 Values·Mistake는 0.5–0.6 수준.

질적 결론: **Gemma ≈ Llama ≫ Qwen2.5**, FVU 결과와 일치. Qwen3 AO는 노이즈가 적어 명확한 신호가 많지만, 컨파뷸레이션 경고 신호(Coherence에 회색=misleading이 많음)도 강함.

## 더 사변적 관찰

- NLA는 매우 우아한 해석가능성 도구이며 유망. 그러나 현재 오픈웨이트 NLA는 약함: 문제 변형 내 FVU > 1.
- 더 좋은 reconstruction loss(특히 multi-token/multi-layer NLA, paraphrase 단계로 steganography 방지 등 기법 개선)로 개선 여지가 있을 듯.
- 이 규모의 오픈웨이트 모델이 흥미로운 불투명 추론을 별로 하지 않을 가능성도 있음.
- 일부 추론은 **epiphenomenal**(인과 무관)일 수 있음 — 다만 ablation 실험상 마지막 토큰 위치에서 대부분의 관련 추론이 일어남.
- Grader elicitation은 까다롭고, flowchart 방식보다 단순 rubric이 우수. ELO 기반 ranking이 보조 수단으로 유용.
- 평가 자체는 sanity check를 통과한다는 조건 하에 적당히 신뢰 가능하나, 절대 점수보다 NLA 간 **차이**를 보는 게 더 의미 있을 듯.

## 결론

오픈웨이트 NLA는 단일 forward pass의 수학 추론을 **부분적으로 드러내지만, 일관되게는 못 한다**. 특히 (1) confabulation을 배제할 수 없고, (2) 오답 원인을 거의 못 찾으며, (3) reconstruction 자체가 노이즈 수준 이하. 앞으로 평가 점수가 올라간다고 해도 **confabulation과 steganography를 배제할 추가 검증**이 필수적이다.
