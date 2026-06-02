---
title: "[요약] ARC 화이트박스 추정 챌린지 개최 안내"
date: 2026-06-02T16:20:43.059Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Announcing the ARC White-Box Estimation Challenge"
  url: "https://www.lesswrong.com/posts/Kben8CzS4awCwNw5c/announcing-the-arc-white-box-estimation-challenge"
  author: "Jacob_Hilton"
  date: 2026-06-02
  score: 71
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Announcing the ARC White-Box Estimation Challenge](https://www.lesswrong.com/posts/Kben8CzS4awCwNw5c/announcing-the-arc-white-box-estimation-challenge)
> **작성자**: Jacob_Hilton · 2026-06-02 · 👍 71
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: ARC와 AIcrowd가 무작위로 초기화된 wide MLP의 기댓값 출력을 추정하는 white-box 알고리즘을 겨루는 "ARC White-Box Estimation Challenge"를 개최한다. 총 상금 10만 달러 이상.**

## 챌린지 개요

ARC는 AIcrowd와 협력해 [**ARC White-Box Estimation Challenge**](https://www.aicrowd.com/challenges/white-box-estimation-challenge-2026)를 출범했다. 워밍업 라운드가 이번 주 시작되며, 후속 라운드의 총상금은 최소 10만 달러다.

### 문제 설정

ARC의 [최근 논문](https://www.alignment.org/blog/mechanistic-estimation-for-wide-random-mlps/) 설정을 따른다. ReLU 활성화를 가진 MLP $M_\theta: \mathbb{R}^n \to \mathbb{R}^n$에 대해:

- 초기 라운드: 너비 $n=256$, 은닉층 $L=8$로 고정 (향후 라운드에서 변경 예정)
- 참가자는 가중치 $\theta$를 입력으로 받아 $\mathbb{E}_{X \sim \mathcal{N}(0, \mathbf{I}_n)}[M_\theta(X)]$를 추정하는 알고리즘 설계
- 평가: 가우시안 무작위 가중치 MLP들에 대한 MSE 최소화 (계산 제약 하)
- 최적화된 수치 커널의 이점을 줄이고 알고리즘 설계 자체에 집중하도록 [FLOP 카운팅 체계](https://github.com/AIcrowd/flopscope)를 도입

## 왜 이 대회를 여는가

장기적으로 ARC는 "AI 시스템이 인간 통제를 약화시킬 비정상적 상황이 존재하는가?" 같은 질문에 답하고자 한다. 고지능 시스템은 "허니팟"에 걸리지 않을 수 있으므로 입력을 대량 투입하는 블랙박스 방식은 신뢰할 수 없다. 따라서 모델 내부에 접근하는 **white-box 접근**이 필요하다.

다만 학습된 네트워크에 대한 고성능 white-box 추정은 [작은 모델에서도](https://www.alignment.org/blog/algzoo-uninterpreted-models-with-fewer-than-1-500-parameters/) 어렵다. ARC의 전략은 먼저 **무작위 초기화 네트워크**에 대한 고성능 추정법을 만들고, 이를 학습 과정에 맞춰 적응시키는 것이다. 최근 논문에서 큰 너비의 MLP에 대해 블랙박스를 능가하는 결과를 얻었으나, 깊이가 커지면 무너지므로 개선 여지가 크다.

이름은 "white-box"지만 black-box 방법 사용도 허용된다 — 궁극적으로는 최고 성능 알고리즘이 목표다. 다만 최적 알고리즘은 (큰 너비 결과를 미루어 볼 때) **메커니즘적(mechanistic)** 접근, 즉 black-box 샘플링을 완전히 피하는 형태일 것이라 강하게 예상한다.

## LLM 사용

참가자가 LLM을 자유롭게 활용하도록 권장한다. 후속 라운드의 상금은 두 종류:
1. 최고 성능 제출물
2. 기술 보고서에 기술된 가장 인상적인 알고리즘적 기여

후자의 경우 LLM이 작성한 코드를 본인이 잘 이해하면 유리하나, 규칙상 필수는 아니다.

LLM 사용을 권장하는 또 다른 이유: ARC의 핵심 문제들이 **잘 정의된 지표를 hill-climbing**하는 방식으로 진전 가능해 보이며, 동시에 LLM의 문제 해결 능력이 빠르게 향상되고 있어 이를 활용할 위치를 선점하고 싶기 때문이다. LLM 주도 제출물에서 일반화 가능한 통찰을 얻을 수 있을지는 불확실하지만 실험할 가치가 있다고 본다.

**주의:** FLOP 카운팅 유틸리티는 메모리 내 상수·카운트 변경 같은 방식으로 해킹 가능하다. 참가자는 LLM 사용 여부와 무관하게 FLOP 카운터를 해킹하지 않을 책임이 있다.
