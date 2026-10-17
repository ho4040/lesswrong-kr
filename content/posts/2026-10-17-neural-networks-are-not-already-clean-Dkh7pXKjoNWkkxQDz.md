---
title: "[요약] 신경망은 아직 깔끔하지 않다"
date: 2026-10-17T01:17:47.479Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Neural networks are not already clean"
  url: "https://www.lesswrong.com/posts/Dkh7pXKjoNWkkxQDz/neural-networks-are-not-already-clean"
  author: "leogao"
  date: 2026-10-17
  score: 270
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Neural networks are not already clean](https://www.lesswrong.com/posts/Dkh7pXKjoNWkkxQDz/neural-networks-are-not-already-clean)
> **작성자**: leogao · 2026-10-17 · 👍 270
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 뉴런의 활성화 예시에서 패턴이 보인다고 해서 그 뉴런을 이해했다고 할 수 없다. 진짜 이해를 입증하려면 시뮬레이션(KL 기반)으로 모델 성능을 보존해야 한다.**

## Nick Cammarata의 주장과 그 한계

Nick Cammarata는 최근 [글](https://already-clean.goodfire.com/)에서, 과거 사람들이 뉴런을 다의적(polysemantic)이라고 성급히 판단했지만 자세히 보면 단순한 패턴이 있는 경우가 많다고 지적했다. 이는 타당한 지적이고 신념 갱신이 필요하지만, 뉴런의 작동을 대부분 이해했다거나 해석가능성 문제가 해결됐다는 결론으로 비약해서는 안 된다.

## 뉴런을 설명한다는 것의 의미

활성화 예시에 맞는 단순한 패턴을 찾았다 해도 설명이 옳다는 보장은 없다. 예컨대 "자전거 탄 개"로 보이는 뉴런이 있다 치자. 상위 활성화·중위 활성화·약한 활성화를 모두 봐도 그럴듯해 보일 수 있다. 하지만:

1. **역방향 함의가 성립하지 않을 수 있다.** 뉴런이 활성화되는 모든 예시가 패턴에 맞는다고 해서, 패턴에 맞는 모든 예시가 뉴런을 활성화시키는 것은 아니다. 실제로는 "맑은 날 자전거 탄 개"처럼 훨씬 좁은 하위집합에서만 발화할 수 있다. 이는 [auto interp 논문](https://openaipublic.blob.core.windows.net/neuron-explainer/paper/index.html#sec-revisions)에서도 큰 문제였다. 뉴런을 X 전체에 발화하도록 강제하면 모델 성능이 떨어진다.

2. **활성화 크기(magnitude) 자체가 중요한 정보를 담을 수 있다.** 약한 활성화를 무시한 채 ablate하면 모델 성능이 상당히 저하된다는 것이 저자의 관찰이다.

## 시뮬레이션 점수가 진짜 이해를 가늠한다

뉴런을 "이해했다"고 주장하려면, 모델 성능을 크게 해치지 않으면서 뉴런을 *시뮬레이션*할 수 있어야 한다. 즉 평가 루브릭("개가 자전거 위에 있으면 4.5, 개와 자전거가 있지만 타지 않으면 3.2…")을 만들고, 이를 실제 입력에 적용해 뉴런 값을 대체했을 때 모델이 유지되는지 보는 것이다.

Nick은 시뮬레이션 점수가 너무 가혹하다고 비판하지만, 저자는 이것이 원 논문의 조악한 상관 기반 점수의 산물일 뿐이며 다음으로 거의 완전히 해결된다고 본다:

- (a) **downstream KL divergence로 측정**하기
- (b) 큰 데이터셋에서 채점하기

KL은 활성화 구간을 세심하게 나눌 필요도 피해준다. 모델 행동에 영향을 주지 않는 세부사항(어느 구두점에 문장 정보가 저장되는지 등)은 KL이 벌점을 주지 않고, 중요한 것은 정당하게 설명을 요구한다. 또한 이 방법론을 일찍 적용했다면 Nick이 예시로 든 V자 뉴런의 "자동차와 개"식 다의적 설명도 애초에 나쁜 설명으로 걸러졌을 것이다 — 수많은 V자 물체에 발화하지 않고, 둥근 개·차에 잘못 발화할 테니까.

시뮬레이션 KL이 완벽하지는 않지만, 활성화 예시의 "분위기(vibe check)"로는 포착할 수 없는 두 가지 실패 양상을 모두 잡아낸다.

## 뉴런 이해를 넘어서

뉴런을 설명하는 것은 신경망 전체를 [이해하는 것](https://www.lesswrong.com/posts/Hy6PX43HGgmfiTaKu/an-ambitious-vision-for-interpretability)의 일부일 뿐이다. 궁극적으로는 뉴런 간 계산을 이해해야 하는데, 과거의 회로 연구는 여전히 크고 복잡하며 중복이 많고 모델 행동의 분산을 대부분 설명하지 못한다. 저자의 현재 최선의 가설은 개념이 중첩(superposition)으로 저장되고 MLP가 뉴런당 둘 이상의 계산을 수행한다는 것이다.

해석가능성 분야는 역사적으로 엄밀성 부족 때문에 자주 정체되어 왔다 — 실제 이해 수준을 과장하는 멋져 보이는 결과에 집중하면서. 인상적인 질적 예시와 엄밀한 논증 사이의 균형을 잡는 것이 과제다.
