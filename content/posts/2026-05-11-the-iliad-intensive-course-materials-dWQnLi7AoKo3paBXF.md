---
title: "[요약] 일리아드 집중 강좌 교재"
date: 2026-05-11T18:55:41.098Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "The Iliad Intensive Course Materials"
  url: "https://www.lesswrong.com/posts/dWQnLi7AoKo3paBXF/the-iliad-intensive-course-materials"
  author: "Leon Lang"
  date: 2026-05-11
  score: 130
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [The Iliad Intensive Course Materials](https://www.lesswrong.com/posts/dWQnLi7AoKo3paBXF/the-iliad-intensive-course-materials)
> **작성자**: Leon Lang · 2026-05-11 · 👍 130
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: Iliad Intensive는 수학·물리·이론컴퓨터과학 배경자를 대상으로 한 한 달짜리 풀타임 AI 정렬 집중 코스로, 2026년 4월 코호트용 강의 자료(5개 클러스터, 16개 모듈)를 공개했다.**

## 개요

Iliad Intensive는 격월로 진행되는 오프라인 AI 정렬 집중 코스로, 강한 수학·이론적 배경을 가진 참가자를 대상으로 한다. 약 20명의 기여자가 개발한 자료에는 풀이가 있는 수학 연습문제, 특이학습이론(SLT)·데이터 귀속 등 자체완결적 강의노트, 코딩 문제가 포함된다. 자료 공개의 목적은 (1) 코스에 대한 공통 인지 형성, (2) 피드백 수집, (3) 독학 지원이다.

## 모듈 구조

코스는 *클러스터*(관련 주제 묶음) → *모듈*(하루 분량)로 구성된다.

**0. 사전 요구사항**: 딥러닝, 선형대수, 미적분, 확률·통계, 정보이론, 이론 CS.

### Cluster A: 정렬(Alignment)
- **A.1 AI 정렬 입문**: 정렬 문제를 *정렬 목표 선택*과 *기술적 정렬*의 두 축으로 분해. 목표 지향성이 야기하는 추가 난점 논의.
- **A.2 실전 정렬**: 사전학습 → 사후학습 → 배포 파이프라인 단계별 정렬 수단. 책임 있는 스케일링 정책, 안전 사례, AI 거버넌스 등도 포함.
- **A.3 보상 학습 이론**: RLHF가 인간의 *볼츠만 합리성*이라는 강한 가정 하에 외적 정렬을 달성함을 증명. 실제 인간의 한계와 보조 게임(assistance games) 프레임워크 논의.

### Cluster B: 학습(Learning)
딥러닝의 이론적 이해 부재가 안전성에 의미하는 바를 다룬다.
- **B.1 학습의 원리**: 근사·일반화·최적화의 세 장벽과 그 긴장 관계. 솔로모노프 귀납, 편향-분산, no free lunch, 암호학적 어려움.
- **B.2 딥러닝의 미스터리**: 과매개변수화에도 일반화, SGD의 비볼록 최적해 발견, 표현 수렴, 인-컨텍스트 학습 등 고전 이론이 설명 못 하는 현상들.
- **B.3 특이학습이론(SLT)**: 신경망 매개변수 공간의 *축퇴(degeneracy)*가 학습을 어떻게 풍부하게 만드는지. 국소 학습 계수, 와타나베 자유에너지 공식.
- **B.4 학습 동역학**: 암묵적 정규화(loss landscape, edge of stability, 단순성 편향, NTK, lazy vs rich), 그리고 grokking, induction heads 같은 *창발*을 상전이 관점에서 해석.
- **B.5 데이터 귀속**: 어떤 훈련 예시가 어떤 행동을 일으키는지 측정. 영향 함수, 베이지안 영향 함수, unrolling 세 프레임워크 — SLT의 축퇴 현상이 다시 등장.

### Cluster C: 추상화·표현·해석가능성
- **C.1 ML 엔지니어링 입문**: PyTorch, 학습 루프, autograd, 트랜스포머; 토크나이제이션부터 RLHF, 추론 학습까지 LLM 전 주기.
- **C.2 기계론적 해석가능성**: 선형 프로브, 스티어링 벡터, 중첩(superposition)과 SAE(특성 흡수·분할 등 실패 모드), 회로 발견(logit lens, path patching, ACDC, causal scrubbing). 비판적 토론 포함.
- **C.3 계산 역학**: 최적 예측을 수행하는 신경망의 수렴적 내부 표현. HMM/GHMM, belief states, mixed state presentation. 트랜스포머의 잔차 스트림이 belief-state 기하를 학습한다는 경험적 증거 탐구.
- **C.4 추상화와 잠재 변수**: 인간 가치는 세계 모델의 잠재 변수로 표현되므로, 가치 전이는 에이전트 간 추상화 수렴을 요구. 매개·중복성 조건으로 정의되는 *자연 잠재 변수*와 응축(condensation) 프레임워크.

### Cluster D: 행위성(Agency)
- **D.1 강화학습**: Sutton & Barto 2-4장. 실증 스트림(정책 반복, Q-learning, SARSA)과 이론 스트림(벨만 방정식, 수렴 증명) 병행.
- **D.2 이상화된 행위성**: (1) AIXI — 베이지안 혼합 수렴, 결정론적 환경에서 속지 않음, self-optimizing 성질. (2) *선호*를 효용/기대효용/할인된 기대보상으로 표현하기 위한 공리들과 공리 제거의 결과.
- **D.3 에이전트 기초**: 일관성 논증과 complete class 정리, Löb 장애물, tiling agents·Vingean reflection, 논리적 귀납, 함수적/업데이트리스 결정 이론, 최적화의 열역학.
- **D.4 세계 모델**: 세계 모델의 형식화, RL 맥락에서의 모델, 추상화 구성에서의 활용. CS·통계물리·인지과학 통합 접근.

### Cluster E: 안전 보장과 그 한계
- **E.1 토론(Debate)**: AI 평가자가 인간보다 똑똑할 때 보상 신호 확장. DEBATE=PSPACE, CX=NEXP 증명. 모호한 논증 문제, prover-estimator 접근, UK AISI의 안전 사례.
- **E.2 스테가노그래피와 백도어**: 암호학적으로 안전한 은닉 통신(H(M)≤H(K)), Merlin-Arthur 분류기, LLM의 계산적 어려움 기반 unelicitable 백도어, 가중치에 트리거를 숨기는 화이트박스 비탐지 접근.
- **E.3 최악 경우 해석가능성**: 모든 해석은 손실 압축. 증명 기반 접근의 정량적 충실성 지표지만, 단순 모델에서도 vacuous bound로 흘러감. ARC의 휴리스틱 논증 어젠다와 연결.

## 4월 코호트 소감

참가자들은 대체로 코스를 강력 추천하며 "삶을 바꾼 경험", "이론적 AI 안전 연구로의 전환을 위한 유일무이한 코스"라는 평가를 남겼다. 다만 교수 품질의 일관성과 주제 선정에 대한 평가가 모든 참가자를 만족시키지는 못해, 향후 개선 여지가 있음을 인정하고 있다.

피드백은 댓글 또는 feedback@iliad.ac로 받는다.
