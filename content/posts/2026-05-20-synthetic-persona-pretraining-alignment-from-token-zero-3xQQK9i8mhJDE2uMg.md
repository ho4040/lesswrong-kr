---
title: "[요약] 합성 페르소나 사전학습: 토큰 제로부터의 정렬"
date: 2026-05-20T14:16:58.648Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Synthetic Persona Pretraining: Alignment from Token Zero"
  url: "https://www.lesswrong.com/posts/3xQQK9i8mhJDE2uMg/synthetic-persona-pretraining-alignment-from-token-zero"
  author: "Julian Minder"
  date: 2026-05-20
  score: 83
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Synthetic Persona Pretraining: Alignment from Token Zero](https://www.lesswrong.com/posts/3xQQK9i8mhJDE2uMg/synthetic-persona-pretraining-alignment-from-token-zero)
> **작성자**: Julian Minder · 2026-05-20 · 👍 83
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 사후 정렬(post-training alignment)이 얕은 이유는 사전훈련 단계에서 페르소나 공간이 이미 고착되기 때문이다. 저자들은 사전훈련 문서의 10%에 가치 기반 성찰(reflection)을 덧붙이는 Synthetic Persona Pretraining(SPP) 기법을 제안하여, 1.7B 모델에서 적대적 공격 성공률(ASR)을 baseline 대비 63% 감소시켰다.**

## 1. 문제: 얕은 정렬

현재 LLM 파이프라인은 (1) 노이즈 많은 웹 코퍼스로 사전훈련, (2) SFT/RLHF/CAI로 정렬을 덧붙이는 2단계 구조다. Anthropic의 **Persona Selection Model(PSM)**에 따르면, 사전훈련은 방대한 페르소나 레퍼토리를 학습하고, 사후훈련은 그중에서 Assistant 페르소나를 *선택·정제*할 뿐이다. 즉 새 페르소나를 *만들지 않는다*.

PSM의 두 극단적 해석("가면을 쓴 쇼고스" vs "운영체제로서의 LLM")은 모두 핵심 결론에 동의한다: **정렬의 진정한 지렛점은 사후훈련이 아니라 사전훈련에 있다.**

얕은 정렬의 증거들:
- 탈옥(jailbreak)의 끈질김 (Zou et al. 2023)
- 거부 행동이 활성화 공간의 **단일 선형 방향**에 존재 (Arditi et al. 2024)
- 양성 미세조정 100개 예시만으로도 안전장치가 무너짐 (Qi et al. 2023)
- Sleeper Agents, Alignment Faking 등 모델 오가니즘 연구

## 2. 기존 접근의 한계

기존 사전훈련 단계 개입은 대부분 **차감적(subtractive)**이다: 유해 문서 필터링(Deep Ignorance, SafeLM), AI 담론 큐레이션(Tice et al. 2026). 그러나 유해 콘텐츠를 제거하면 모델이 "안전하지 않다"는 개념 자체를 학습할 수 없게 된다.

저자들은 **가산적(additive)** 접근을 제안: 유해 콘텐츠를 그대로 두되 도덕적 논평과 짝지어 함께 학습시킨다.

## 3. Synthetic Persona Pretraining (SPP)

**핵심 아이디어:** 사전훈련 문서의 10%(유해 5M + 양성 5M)에 1인칭 가치 성찰을 부착. 성찰은 6개 영역(존엄/권리, 위해/안전, 정직/인식론, 관계, 웰빙, 거버넌스)의 **가치 헌법(value constitution)**에 근거하여 특정 조항을 인용한다.

**핵심 설계 요소:**
- **분리 토큰**: 성찰 앞에 `<assistant>` 토큰(사후훈련 채팅 템플릿과 동일)을 두고, 이 토큰 자체의 손실은 마스킹 → 모델은 성찰 내용은 배우지만 분리 토큰을 *생성*하진 않는다
- **분포적 관점**: 모든 성찰이 assistant 토큰 조건하에 생성되므로, 사전훈련이 직접 `P(·|<assistant>)` 분포를 형성한다
- **무작위 위치**: 성찰을 문서 끝이 아닌 임의 위치에 삽입 → 가치 인식이 처리 전반에 유지됨
- **양성 문서 성찰**: 도덕 추론이 유해성과만 연결되는 과적합 방지

이는 Anthropic의 reward-hacking OOC 실험(Hu et al. 2025), Kutasov et al.의 헌법 기반 문서 학습 연구와 같은 채널을 활용한다.

## 4. 페르소나 결합(Persona Binding) 문제

사전훈련에 가치를 설치해도 사후훈련이 그 페르소나에 *연결*되지 않으면 무용지물이다. 표준 SFT는 다른 채팅 템플릿·assistant 토큰·응답 스타일을 쓰기 때문에 인접한 다른 페르소나가 선택될 수 있다.

해결책: **Persona-Binding SFT (PB-SFT)** — 사후훈련 데이터를 deliberative-alignment 스타일로 재작성하여 응답이 헌법 조항을 명시적으로 인용하게 함. 이는 (1) 측정 가능성(특정 조항을 보류한 holdout 실험 가능), (2) 분포 일치 두 가지를 노린다.

## 5. 주요 결과

**실험 설정:** 1.7B SmolLM, Dolma 3에서 100B 토큰, 10% 주석(10M 문서).

### 안전성
- **SPP (Token Zero)**: 평균 ASR **1.7%**, baseline 대비 **63% 감소**
- 5개 적대적 벤치마크(JailbreakBench, AdvBench, PAP, DAN, PEZ)에서 일관되게 안전
- 10배 적은 토큰으로 **SafeLM과 동등하거나 우수**

### 페르소나 결합 검증
헌법 조항 하나를 PB-SFT에서 보류 → 사후훈련 → 그 조항을 이끌어내는 프롬프트로 테스트. SPP 모델은 **사후훈련에서 본 적 없는 조항을 4~41%까지 인용**. Baseline은 0%. **사전훈련에서 설치한 가치가 사후훈련을 통해 일반화됨이 직접 입증**.

### Token Zero가 중요
모든 성찰을 미드트레이닝 쿨다운에 몰아넣는 변종(MSM 유사)은 처음부터 통합한 것보다 덜 안전하다. Sam et al. (2026)의 결과와 부합.

### 페르소나 결합은 취약함
- PB-SFT (템플릿 일치): -63% ASR
- mixSFT (정렬된 템플릿): -62%
- **mixSFT (다른 assistant 토큰)**: SPP 효과 거의 사라짐 (+8%)

→ 결합 메커니즘이 작동하려면 사전훈련-사후훈련 간 **분포적 연속성**이 필수.

### 필터링만으로는 안 됨
유해 콘텐츠 필터링 baseline은 미필터 baseline과 비슷하거나 *덜* 안전. 모델이 유해 콘텐츠를 도덕적 논평과 함께 학습하는 것이 중요함.

### Ablation
- 1인칭 > 3인칭 성찰 (3인칭은 화자-내용 분리로 결합 약화)
- 무작위 위치 > 문서 끝
- 유해 콘텐츠 loss 마스킹은 성능 저하

### 양날의 검: Abliteration 취약성
SPP 모델은 거부 방향 투영 제거(abliteration)에 **가장 취약**. 안전성이 잘 정의된 선형 방향에 응축됨 → 화이트박스 공격 표면이지만, 해석가능성·모니터링에는 유리.

### 능력 손실 없음
표준 벤치마크에서 능력 저하는 관찰되지 않음 (1.7B 규모에서는 평가 한계 있음).

## 6. 한계 및 향후 과제

- 1.7B/100B 규모 — 3B/500B 스케일업 진행 중, Apertus 팀과 협력
- **양성 미세조정 공격(Qi et al. 2023) 견고성 미평가** — 가장 중요한 스트레스 테스트
- 페르소나 결합은 새로 명명한 현상이며 원칙적 도구 부재
- 미해결 질문:
  - 적대적 미세조정에서 결합이 살아남는가?
  - SPP 페르소나가 깨끗해도 주변 페르소나들이 위험하다면? (필터링은 오히려 해롭다는 결과)
  - RL 사후훈련이 결합에 미치는 영향?
  - 활성화 공간에서 SPP 효과의 기계론적 관찰 가능성?
