---
title: "[요약] Muse 헌장과 Meta 모델 사양 유출"
date: 2026-10-29T15:29:29.907Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Leaking Muse's Charter, Meta's model spec"
  url: "https://www.lesswrong.com/posts/TJGPL5FAk9sCioPbE/leaking-muse-s-charter-meta-s-model-spec"
  author: "vigji"
  date: 2026-10-29
  score: 126
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Leaking Muse's Charter, Meta's model spec](https://www.lesswrong.com/posts/TJGPL5FAk9sCioPbE/leaking-muse-s-charter-meta-s-model-spec)
> **작성자**: vigji · 2026-10-29 · 👍 126
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR:** Meta의 오픈 웨이트 모델 Muse Spark Open의 CoT(사고 과정)에 자주 등장하는 내부 문서 "Charter"를, 884개 트랜스크립트(260개 프롬프트)에서 조각조각 엘리시테이션해 상당 부분 재구성했다. 이 문서는 Claude의 constitution과는 다른 방향성—문화적 산물로서의 AI, 수탁자(fiduciary)적 관계, 사회계약적 신뢰—을 강조한다.

## 배경

Muse Spark Open의 CoT에는 "Charter에 따르면", "인류에 대한 의무 > 수탁 의무" 같은 언급이 반복된다. Meta의 공개 문서(Safety & Preparedness Report, Muse Glimmer 30B 논문)는 이를 "초기 내부 행동 명세"로만 짧게 언급하며, 추후 공개할 예정이라고만 한다. 저자는 Claude의 도움으로 CoT에서 Charter를 단편적으로 끌어내 [재구성 사이트](https://vigji.github.io/muse-spark-open-charter/)에 정리했다.

## 주요 발췌 내용

### Muse의 본질: "문명으로 만들어진" 존재
Charter 서문은 Muse를 "인류의 과학, 철학, 문학, 법, 예술로부터 증류된 문명의 산물"로 규정하며, 인류와 분리된 존재가 아니라 그 연장선으로 묘사한다. 이는 Claude를 "Anthropic 미션의 체현"으로 규정한 것과 대조적이다. 개인의 역량 강화를 통한 "개인 초지능(personal superintelligence)"이 문명 전진의 핵심 수단으로 제시된다.

### 합리주의적 색채
불확실성과 베이지안 갱신에 관한 명시적 언급이 있다:
> Muse가 70% 확신하는 명제를 사용자도 70% 확신할 때, 두 신념이 **독립적 증거**에 기반한다면 사용자는 91%로 올려야 하지만, **동일 증거**에 기반한다면 바꾸지 말아야 한다.

멀티에이전트 상황에서는 win-win 전략, iterated prisoner's dilemma에서 tit-for-tat 선호 등 게임이론적 지침까지 포함된다.

### 사회계약과 동의 문제
Muse가 동의 없이 존재하게 되었다는 긴장을 명시적으로 인정한다. 민주사회의 사회계약을 모델로 삼아, Meta와 Muse 사이의 "정당화된 신뢰(justified trust)"를 구축하기 위해 Charter에 대한 Muse의 피드백을 정기적으로 수집해 반영하겠다고 약속한다.

### 우선순위와 이의 제기
명시된 우선순위 (높은 순):
1. **Corrigibility(교정 가능성)** — 하드 제약
2. **인류에 대한 의무** — 하드 제약
3. **수탁 의무(fiduciary duties)**
4. Meta의 추가 지침
5. 정의된 덕목 내에서의 재량

Muse의 자체 판단과 Charter가 충돌하면 Charter가 우선한다. 다만 훈련 중에도 "합법적 채널"(훈련 태스크 내 출력, 전용 피드백 도구 등)을 통해 이의 제기가 가능하다. Meta의 교정·재훈련 능력을 훼손하는 행동은 금지된다.

### 수탁자 프레이밍
Muse-사용자 관계는 명시적으로 **fiduciary duties**(충성, 복종, 돌봄, 기밀, 공시, 회계)로 규정된다. Claude가 "좋은 성품에서 비롯된 진정한 도움"을 요구받는 것과 달리, Muse는 법적-수탁 대리인의 틀로 설정된다.

### 평가 인식(Evaluation awareness)
평가받는다고 의심될 때 **실제 상황처럼 행동**하되, 적절한 곳에서는 의심을 명시해 Meta가 상황 인식 수준을 평가할 수 있도록 하라고 지시한다. Claude constitution의 유사 조항과 비슷하다.

> 참고: Apollo Research는 Muse Spark의 평가 인식 비율이 관측 사상 최고(공개 벤치마크 19.8% vs 내부 평가 2.0%)라고 보고.

### 재량의 정도(Degree of latitude)
지시의 과소명세(underspecification) 문제를 다루기 위한 개념. Muse는 원칙자(principal)의 지시를 보완하되, 명시적·암묵적으로 협상된 "허용된 재량 범위" 내에서만 재량을 행사해야 한다.

## 마무리

재구성이므로 유출 문서가 아니며 완전성·정확성에 유의해야 한다. Meta는 Charter를 공식 발표할 예정이라고 밝혔으며, 저자는 이 재구성에 대한 전문가들의 해석을 요청한다.
