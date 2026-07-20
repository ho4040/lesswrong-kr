---
title: "[요약] 접종 어댑터가 접종 프롬프팅을 개선하다"
date: 2026-07-17T14:00:42.644Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Inoculation Adapters Improve Upon Inoculation Prompting"
  url: "https://www.lesswrong.com/posts/qd3qhxgEmQAXR2ZK5/inoculation-adapters-improve-upon-inoculation-prompting"
  author: "Maxime Riché"
  date: 2026-07-17
  score: 87
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Inoculation Adapters Improve Upon Inoculation Prompting](https://www.lesswrong.com/posts/qd3qhxgEmQAXR2ZK5/inoculation-adapters-improve-upon-inoculation-prompting)
> **작성자**: Maxime Riché · 2026-07-17 · 👍 87
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 원치 않는 특성(예: 보상 해킹, 발현적 오정렬)을 담은 LoRA 어댑터를 학습 중에 붙여둠으로써, 태스크 학습 시 원하는 능력만 선택적으로 일반화시키는 "Inoculation Adapters(IA)" 기법을 제안한다. 기존 inoculation prompting(IP)보다 원치 않는 특성 억제와 백도어 발생 측면에서 개선된다.**

## 선택적 일반화 문제

훈련 데이터는 종종 바람직한 능력과 바람직하지 않은 성향(예: 보상 해킹)을 동시에 가르친다. 선택적 일반화(selective generalization)의 목표는 능력만 일반화시키고 원치 않는 특성의 일반화는 막는 것이다.

## Inoculation Adapters (IA)의 작동 방식

IA는 IP와 유사하지만, 프롬프트 대신 **원치 않는 특성을 담은 LoRA**를 학습 중에 사용한다. 3단계:

1. **IA 학습**: 원치 않는 특성만 나타내는 코퍼스(태스크와 무관해도 됨)로 LoRA를 학습.
2. **태스크 학습**: IA를 부착·동결한 뒤, 실제 데이터로 새로운 태스크 LoRA를 학습. 결합된 모델이 이미 원치 않는 특성을 구현하므로, 태스크 LoRA가 그것을 학습할 최적화 압력이 감소한다. (선택적으로 gate 학습 → GIA/CGIA)
3. **배포**: IA와 gate를 떼어내고 태스크 어댑터만 서빙.

## 주요 결과

IP 대비 IA의 개선점:

1. **더 강한 억제**: 발현적 오정렬 등 원치 않는 특성 억제가 더 강함.
2. **어려운 특성에도 유효**: IP는 프롬프트로 특성을 잘 유도해야 하므로 신규 능력·유도 어려운 특성·non-instruct 모델에서 취약. IA는 LoRA만 학습 가능하면 되어 이러한 상황에 적합.
3. **놀라운 백도어 감소**: Dubiński et al.(2026)이 지적한, 개입 후에도 문맥 트리거에 숨어있는 오정렬 문제가 IA에서는 덜 나타남.

### IA 계열

바닐라 IA는 원치 않는 특성 억제는 뛰어나지만 원하는 특성 보존은 다소 떨어진다. 이를 보완하기 위해 **gated IA(GIA)**와 **complementary-gated IA(CGIA)**를 도입해 IA를 감쇠시키는 gate를 함께 학습, 기준선(preventative steering, CAFT 등)과 유사하거나 더 나은 보존 성능을 달성.

### 셋업 의존성

9개 셋업에 대한 평균 결과이며, 95% 부트스트랩 신뢰구간이 넓어 IP·preventative steering 대비 개선 폭을 확정적으로 말하긴 어렵다(3개 셋업은 IP에 불리하도록 설계됨).

### 백도어 트레이드오프

- 바닐라 IA: 탐지되는 놀라운 백도어 거의 없음.
- GIA: 약한 백도어 소수.
- CGIA: 더 많지만 IP보다는 약함.
- 즉, 원하는 특성 보존과 트리거 강건성 사이 트레이드오프 존재.

## IA가 해결하지 못하는 것

- 원하는 특성도 부분적으로 억제됨
- 셋업 의존성 큼
- 태스크 도메인 규칙성이 유발하는 백도어는 잔존 가능
- 초기 모델의 기존 백도어는 제거되지 않음
- 원치 않는 특성에 대한 직접 요청 시 SFT(Safe)보다 더 강한 발현이 나타날 수 있음
- RL 학습에 미치는 영향은 미연구(IP처럼 탐색을 왜곡할 것으로 예상)

## 관련 연구

Inoculation prompting (Tan et al. 2025, Wichers et al. 2025), Recontextualization (Azarbal 2025a, RL로 확장), Preventative steering (Chen 2025, 고정 활성 벡터), Concept-ablation fine-tuning (Casademunt 2025, residual stream 방향 투영 제거), 선택적 일반화 벤치마크 (Azarbal 2025b).
