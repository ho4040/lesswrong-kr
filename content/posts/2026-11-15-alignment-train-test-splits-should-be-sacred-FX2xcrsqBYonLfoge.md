---
title: "[요약] 얼라인먼트의 '학습/테스트 분할'은 신성불가침이어야 한다"
date: 2026-11-15T18:22:03.711Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Alignment 'train/test splits' should be sacred"
  url: "https://www.lesswrong.com/posts/FX2xcrsqBYonLfoge/alignment-train-test-splits-should-be-sacred"
  author: "draganover"
  date: 2026-11-15
  score: 79
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Alignment 'train/test splits' should be sacred](https://www.lesswrong.com/posts/FX2xcrsqBYonLfoge/alignment-train-test-splits-should-be-sacred)
> **작성자**: draganover · 2026-11-15 · 👍 79
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 정렬(alignment) 기법은 모델을 '조형(sculpt)'하는 데 쓰거나 '평가(assess)'하는 데 쓸 수 있지만, 둘 다에 쓸 수는 없다. 머신러닝에서 train/test 분할을 지켜야 하듯, 일부 정렬 기법은 반드시 평가 전용으로 떼어놓아야 한다.**

## 핵심 원칙: 두 원칙은 사실 하나다

두 가지 지도 원칙이 있다:
1. **정렬 관점**: 모델에게 사용자에게 보이지 않는 미정렬 행동을 하도록 가르치는 것을 최대한 피해야 한다.
2. **ML 관점**: 전체 데이터셋에 훈련시키고 test split을 떼어놓지 않는 것을 피해야 한다.

저자는 **이 둘이 같은 원칙**이라고 주장한다. 모든 정렬 평가 기법을 훈련에 사용하면, 전통적 ML에서 검증 데이터로 훈련하는 것과 같은 실패가 발생한다 — 성능은 좋아 보이지만 모델 행동을 검증할 능력을 잃는다.

## 두 종류의 정렬 기법

1. **조형(sculpt) 기법**: steering, SFT/RL 일반화 기법(RLHF, RLAIF, GRAFT, inoculation prompting), 프롬프트 엔지니어링, 추론 시 안전 분류기
2. **평가(assess/monitor) 기법**: 사람 분석, CoT 모니터링, 활성값 모니터링, SAE 등 해석도구, honeypot, 자동화된 audit, universal jailbreak

**중요한 점**: 이 모든 기법은 양쪽 모두로 재용도 가능하다. 예시:
- CoT: 스키밍 언어화를 훈련으로 제거 vs. CoT 모니터로 스키밍 감지
- Honeypot: honeypot 회피 훈련 vs. 모델이 걸리는지 관찰용으로 보존
- Probe: deception probe에 대한 훈련 vs. 분류기로 배포 시 활용

**모니터에 대해 훈련하는 순간, 그 모니터의 효용은 필연적으로 희생된다.** 모델은 이제 그 모니터가 잡을 수 있는 미정렬을 절대 드러내지 않는다. 극단에서는 모든 모니터를 훈련에 써버려 '측정한 대로 얻는' 문제가 발생: 모델은 반드시 정렬된 것처럼 보이게 되는데, 평가할 수단을 전부 훈련에 써버렸기 때문이다.

진정으로 보류되고 있는 거의 유일한 예는 CoT monitorability인데, 이것마저 사라지고 있다.

## 두 개의 독립적 데이터셋

정렬 기법 집합과 정렬 환경 집합은 독립적이다. 단일 환경(예: 표준 reward-hacking honeypot) 안에서 CoT 스키밍 제거, 사람 피드백 기반 업데이트, probe 훈련, honeypot 회피 RL, 자동화된 audit 훈련을 모두 할 수 있다.

따라서 우리는 두 종류의 "데이터셋"을 가진다: **정렬 샘플**(표준 ML 데이터)과 **정렬 기법**. 모델은 양쪽 모두에 걸쳐 일반화하지만, 우리는 기법에 대한 train/test 분할 위생이 훨씬 나쁘다.

## 사례: GRAFT

Anthropic MATS의 최근 [GRAFT 논문](https://alignment.anthropic.com/2026/graft/)은 미정렬 행동을 "Forget" 어댑터로 gradient routing하여 제거한다. 저자는 이 아이디어 자체는 좋다고 평가하지만, **평가 기법으로 더 잘 작동할 수 있다**고 지적한다 — 어댑터를 제거하지 않고 추론 시 모델이 그 어댑터로 계산을 라우팅하는지 관찰하면 미행동을 포착할 수 있다. 그러나 이 가능성은 탐구되지 않았다.

더 근본적으로, 모니터 기반 gradient routing도 결국 모니터가 잡을 수 있는 것에 의존하며, 그 모니터가 보는 미정렬을 제거함으로써 그 모니터(테스트셋)를 폐기한다.

## 반론: "왜 모든 기법으로 훈련하지 않는가?"

전체 데이터에 훈련하면 더 나은 모델이 나오지만, 결과 모델이 근본적으로 결함이 있는지 판별할 수 없게 된다. test-set 없이는 배포 중 시행착오로만 정렬을 확인할 수 있는데, **AGI/ASI 체제에서는 시행착오로 정렬에 의존할 수 없다**. ASI 정렬은 '모델을 이해하는 능력'이 '인류 멸종 여부'와 직결되기에, train/test 분할을 가장 엄격히 존중해야 하는 과학 분야다.

## 제안

1. **투명성 요구**: 프론티어 AI 회사들이 어떤 정렬 기법을 평가 전용으로 보류하는지 공개해야 한다. "모델이 전혀 본 적 없는 깨끗이 분리된 정렬 환경과 기법 세트가 하나라도 있는가?"에 답할 수 있어야 한다.
2. **문화적 구분**: 각 기법이 훈련용인지 평가용인지 판별하려 노력해야 한다. RLHF는 조형에, CoT 모니터링은 평가에 어울린다. 활성값 모니터에 훈련하는 것은 모호하고 위험할 수 있으니 우선 연구 대상.
3. **기법 집합 확장 + 상당 비율을 테스트용 격리**: looped transformer 아키텍처 채택은 평가 성격의 귀중한 정렬 기법(CoT 가시성)을 제거하므로 끔찍한 결정이다.
