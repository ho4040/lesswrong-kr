---
title: "[요약] Astra는 사고 과정 없이도 우려스러울 만큼 많은 일을 할 수 있다"
date: 2026-09-10T02:31:26.208Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Astra can do a concerning amount with no chain of thought"
  url: "https://www.lesswrong.com/posts/eRmzz8J8Qkzqvzrgg/astra-can-do-a-concerning-amount-with-no-chain-of-thought"
  author: "Neel Nanda"
  date: 2026-09-10
  score: 177
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Astra can do a concerning amount with no chain of thought](https://www.lesswrong.com/posts/eRmzz8J8Qkzqvzrgg/astra-can-do-a-concerning-amount-with-no-chain-of-thought)
> **작성자**: Neel Nanda · 2026-09-10 · 👍 177
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR:** Astra는 CoT(사고 사슬) 없이 문제를 풀 확률이 차순위 모델(Fable 5.1)의 8.6배에 달하며, 단일 forward pass에서 7.2단계의 직렬 산술 연산을 수행할 수 있다(차순위 4.1단계). 이는 아키텍처(루프 트랜스포머) 변경 때문일 가능성이 높다.

## 배경 및 문제의식

UK AISI가 Astra 보고서에서 발견한 no-CoT 추론 능력의 급격한 도약을 저자가 독립적으로 만든 벤치마크로 검증한 결과, **재현됨**. Astra는 전반적 성능 향상이 예측하는 수준을 크게 뛰어넘는 no-CoT 추론 능력을 보인다.

## No CoT Reasoning Index (NCRI)

- 19개 태스크(대부분 합성 생성되어 암기 불가) 구성: 룩업 테이블 반복 적용, 프로그램 출력 예측, 최단 경로, 다단계 사실 회상, GPQA, 수학 경시대회 등
- Epoch Capability Index의 **benchmark stitching** 방법으로 단일 점수화. 10점 상승 = 임의 문제 해결 확률 2배
- Astra는 Fable 5.1보다 **31점 앞섬(약 8.6배 확률)**
- Time horizon 방식 대신 benchmark stitching을 택한 이유: no-CoT 태스크의 시간 추정이 원칙적으로 어렵기 때문. 다만 LLM 추정 시간 지평선과 NCRI는 강한 상관관계

## Astra는 무엇을 잘하는가

대부분 모델은 태스크 전반에 걸쳐 성능이 강하게 상관되지만(g-factor 유사), **Astra는 편향된 프로필**을 보임:

- **합성 태스크 NCRI가 비합성 태스크보다 25점 높음(6배 확률)**
- 특히 고직렬/고병렬 계산에서 압도적, 사실 회상·뉘앙스 감지는 "매우 좋은" 수준
- **모호한 지식(obscure knowledge)에서는 최상위권이지만 압도적이지 않음** — 지식은 파라미터 수와 상관되지만, 루프 모델은 지식 측면에선 N-파라미터 모델, NCRI 측면에선 2N-파라미터 모델처럼 행동한다는 가설과 부합

## 직렬 깊이(Serial Depth) 정량화

각 문제에 대해 실행 중 값을 nudge해 종속 단계 수를 측정하고, 모델의 정확도를 시그모이드로 피팅하여 **50% 성공 지점의 산술 단계 수**를 추정:

- **Astra: 7.2단계** vs Gemini 3.8 Flash/Fable 5.1: 4.1단계
- 다단계 사실 회상에서도 Astra 3.6 hop, Gemini 3.8 Flash 2.8 hop (격차는 다소 축소)
- 직렬 깊이는 NCRI로 잘 예측됨

## 왜? 그리고 안전성 함의

**루프 트랜스포머 아키텍처 때문일 가능성이 매우 높음.** OpenAI는 시스템 카드에서 "CoT 통제성 변화는 아키텍처 변경에 *차등적으로* 기인하지 않는다"고 주장했으나, 저자는 "차등적으로"라는 단어에 주목:
- 루핑이 사전학습 손실 전반을 개선하는 것과, 직렬 계산에 불균형한 부스트를 주는 것은 다를 수 있음
- 결과의 편향성은 후자를 시사

**안전성 관점**: NCRI가 높을수록 모델이 CoT에 의존할 기계적 압력이 줄어들어 CoT 감시가능성이 낮아짐. OpenAI가 이미 직접 측정한 Astra의 감시가능성은 매우 나쁨. **단발성 도약이면 괜찮지만, 루프 수를 스케일링해 불투명하게 임의의 추론 컴퓨트를 쓸 수 있게 되는 것이 우려**.

## 부록 주요 결과

### 개념 구분: no-CoT 추론 vs 감시가능성 vs 통제성
- **감시가능성 = "모델이 은밀하지 않으려 함" + "복잡한 작업에 CoT가 기계적으로 필요"**
- 통제성(원하는 형식으로 CoT 형성 가능한가)과 NCRI는 34개 오픈웨이트 모델에서 **상관 없음(Spearman 0.10)**. 통제성은 후처리 세부사항에 크게 좌우됨. 따라서 OpenAI의 "루핑이 CoT 통제성 급증의 차등 원인이 아니다"는 주장은 사실이면서도 루핑이 NCRI 급증의 차등 원인일 수 있음

### 토큰 언롤링 효과
동일한 직렬 깊이 작업을 루프 대신 언롤된 코드로 주면 Astra는 4.2 → 5.5단계로 개선. **하지만 단일 토큰에서도 매우 잘 수행**

### 오픈웨이트 루프 모델
Huginn, Ouro, Nanbeige 등에서 지식보다 NCRI가 트렌드 위에 위치하는 경향이 관찰되나 결과가 노이지함

### Pareto 우위
76개 하위 평가 중 Astra가 Fable 5.1을 5점 이상 앞선 것이 46개, 뒤진 것은 2개뿐. 가장 큰 격차는 어려운 계산 태스크, 가장 작은 격차는 수학·지식

### Astra만 푼 문제 예시
6단계 상태 기계, 11개 연산 중첩 산술식, 36개 곱셈 중 최빈값 찾기, 12노드 가중 그래프 최단 경로, 18개 거리 진술 중 1개 오류 찾기 등을 **다른 35개 모델은 모두 실패, Astra는 CoT 없이 한 번에 정답**
