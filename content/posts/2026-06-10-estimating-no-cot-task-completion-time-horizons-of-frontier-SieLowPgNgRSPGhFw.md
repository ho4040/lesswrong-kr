---
title: "[요약] 프런티어 AI 모델의 비-CoT 작업 완료 시간 지평 추정"
date: 2026-06-10T17:58:18.938Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Estimating No-CoT Task-Completion Time Horizons of Frontier AI Models"
  url: "https://www.lesswrong.com/posts/SieLowPgNgRSPGhFw/estimating-no-cot-task-completion-time-horizons-of-frontier"
  author: "Anders Cairns Woodruff"
  date: 2026-06-10
  score: 176
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Estimating No-CoT Task-Completion Time Horizons of Frontier AI Models](https://www.lesswrong.com/posts/SieLowPgNgRSPGhFw/estimating-no-cot-task-completion-time-horizons-of-frontier)
> **작성자**: Anders Cairns Woodruff · 2026-06-10 · 👍 176
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 프런티어 모델이 chain-of-thought(CoT) 없이 풀 수 있는 과제의 "시간 지평"(time horizon, TH)이 매년 약 2배씩 증가하고 있으며, 현재 GPT-5.5는 CoT 없이 약 3분 분량의 인간 추론에 해당하는 문제를 50% 신뢰도로 풀 수 있다. 이 추세가 계속되면 2030년에는 약 25분에 달해 CoT 모니터링의 안전성 효과가 크게 약화될 수 있다.**

## 동기: 왜 CoT 없는 추론을 측정하나

METR이 작년에 보여준 "프런티어 모델의 과제 지평이 몇 달마다 두 배가 된다"는 결과는 **CoT를 사용한** 경우다. 안전성 관점에서 더 중요한 질문은 모델이 **CoT 없이** 얼마나 추론할 수 있는가이다. 이유는:

- 만약 모델이 CoT 없이 광범위한 추론을 할 수 있다면, 개발자나 배포 단계 모니터가 모델의 동기와 위험한 계획을 포착하기 어려워진다.
- CoT 없는 내부 추론은 사전학습 텍스트 분포의 제약을 덜 받아 인간 사고 패턴에서 멀어지고, 해석 가능성이 떨어지며 스킴(scheming)할 가능성이 높아질 수 있다.

저자들은 AI 기업에 **no-CoT TH를 명시적으로 추적할 것**을 권장한다.

## 방법

- GPT-2(2019)부터 GPT-5.5(2026)까지 14개의 프런티어 모델을 수학·코딩·지식·에이전트적 도구 사용·스테가노그래피/스킴 추론 등 안전 관련 항목을 포함한 **43개 벤치마크**로 평가.
- 벤치마크별 프롬프트와 구조화된 출력 제약을 통해 답변 이전에 추론 토큰이 나오지 않도록 강제.
- 난이도 측정 두 가지:
  1. **인간 풀이 시간**(human solve time): 직접 측정하거나 Claude Opus 4.7의 추정치를 사용.
  2. **추론 토큰 앵커**(reasoning token anchor): o3-mini가 문제를 푸는 데 필요한 최소 추론 토큰 수.
- Kwa et al.의 방법대로 성공률에 대한 로지스틱 곡선을 적합해 **50% 시간 지평**을 추정. 부트스트랩으로 불확실성 정량화.

## 결과

- **시간 지평이 약 373일(95% CI: 167–691)마다** 두 배가 됨.
- **토큰 지평은 약 437일(95% CI: 341–571)마다** 두 배.
- 최신 GPT-5.5의 50% no-CoT TH는 **약 3분 / o3-mini 토큰 약 1,500개**.
- 추세 외삽: 2028년 ~7분 / ~3.7k 토큰, 2030년 ~25분 / ~12k 토큰. CI 하한도 2030년 거의 10분 수준.
- 결과는 벤치마크 구성 변화(긴 생성·에이전트 과제 추가, 단일 모델 제거, 도메인별 분해 등)에 대해 강건함. 도메인별 두 배 시간 246–387일.

## METR 추세와의 비교

- METR(with-CoT)의 두 배 시간은 ~182일로 본 연구(no-CoT) ~373일보다 약 2배 빠르다.
- GPT-4까지는 with/without-CoT 추세가 유사했으나, GPT-4 이후 능력 향상의 대부분은 **외부화된 추론**에서 나왔기 때문에 격차가 벌어진다.

## FAQ 요약

- **암기 측정 아닌가?** 일부 사실 회상 문제가 포함되지만, 추론 중심 문제가 많아 헤드라인 수치는 추론을 근사적으로 잘 추적한다.
- **모델이 실제로 추론을 숨기고 있나?** 아니다. 측정한 것은 "숨길 수 있는 잠재적 양"의 **하한**이지 실제 행동이 아니다. 일부 모델은 불필요할 때도 추론을 외부화한다.
- **하한 의미?** 짧은 답변 강제가 분포 외(out-of-distribution) 상황일 수 있어 모델 능력을 과소평가할 수 있고, 스테가노그래피로 외부 출력에 추론을 인코딩하면 이 하한을 넘길 수 있다.

## 결론

프런티어 모델은 이미 CoT 없이 비자명한 양의 추론이 가능하며, 그 양은 지수적으로 증가하고 있다.

- 3분의 인간 추론은 단발성 결정(지시 따를지, 평가 상황인지 식별, 옵션 선택)에는 충분할 수 있으나, 훈련 게이밍이나 인스턴스 간 공모 같은 **장기 권력 추구 추론**에는 부족.
- 그러나 추세가 지속되면 2030년경 25분 수준의 잠재적 추론이 가능해져 훨씬 복잡한 전복(subversion) 행동이 가능해진다.
- 뉴럴리즈(neuralese) 없이도, **CoT 모니터링의 안전성 효용은 향후 몇 년 안에 크게 줄어들 수 있다.**
