---
title: "스케일링 가설 #2: 인간은 그저 더 과매개변수화된 존재일 뿐인가?"
date: 2026-06-17T02:53:07.417Z
draft: false
tags: ["LessWrong", "번역"]
summary: ""
original:
  title: "Scaling Hypothesis #2: Are Humans Just More Over-Parameterized?"
  url: "https://www.lesswrong.com/posts/Eg7caxofhxZGnhgBD/scaling-hypothesis-2-are-humans-just-more-over-parameterized"
  author: "gwern"
  date: 2026-06-17
  score: 81
mode: "translate"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Scaling Hypothesis #2: Are Humans Just More Over-Parameterized?](https://www.lesswrong.com/posts/Eg7caxofhxZGnhgBD/scaling-hypothesis-2-are-humans-just-more-over-parameterized)
> **작성자**: gwern · 2026-06-17 · 👍 81
>
> 본 글은 LessWrong 인기 게시글을 AI로 자동 번역한 것입니다. 번역 오류는 [GitHub 이슈](https://github.com/ho4040/lesswrong-kr/issues)로 알려주세요.

---

(2024-04-21) 딥러닝과 인간 지능에는 많은 미스터리가 있지만, 가장 큰 변칙을 다음과 같이 표현할 수 있다: 왜 인공 신경망은 멍청한 방식으로 똑똑하고, 생물학적 뇌는 똑똑한 방식으로 멍청한가?

나는 딥러닝 스케일링 패러다임의 큰 변화를 제안한다: 인간 뇌와 신경망(특히 LLM) 사이의 아키텍처적 차이는 편향-분산 트레이드오프에서 기인할 수 있으며, LLM은 분산을 최소화하고 인간 뇌는 편향을 최소화한다.
인간 뇌는 이를 deep double descent 스타일의 과매개변수화(overparameterization)와, 극도로 과매개변수화된 모델을 작고 다양하며 고도로 필터링된 데이터셋에 극도로 높은 학습률로 훈련하는 스케일링 전략을 채택함으로써 달성한다.
이 접근법은 모델 손실 지형(loss landscape)에서 고도로 일반화하는 인간 같은 분지(basin)로 샘플 효율적이고 계산 효율적으로 이동(혹은 **사출(catapulting)**)하게 하면서도, 마지막 시점까지는 성능이 낮고 많은 데이터를 암기하지 못하게 한다.

이것이 사실이라면, 인간/신경망이 잘/못 수행하는 방식에 관한 여러 이상한 정형화된 사실들을 설명할 수 있을 것이다.

이러한 '사출된(catapulted) LLM'은 기존 신경망보다 훨씬 잘 일반화하고, 적대적 공격에 면역이 있으며, 더 나은 경제성을 갖고 복제에 더 저항적이며, 잠재적으로 극도로 효율적인 MLP 아키텍처를 가능하게 하고, 진정한 일반화를 제공함으로써 *올바른* 이유로 정렬되고 안전한 유용한 신경망이라는 형태로 AI 안전성의 견고한 기반을 제공할 수 있다.

이는 수조 개 매개변수 모델을 높은 주기적 학습률 스케줄로 비교적 적은 스텝 동안 훈련하고, 산술이나 작은 이미지 분류 같은 작업에서 적대적 예제와 어려운 예제를 벤치마킹함으로써 실현 가능하게 테스트될 수 있다.
