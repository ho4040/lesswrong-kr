---
title: "[요약] 황혼 속의 샌프란시스코 주립대학교"
date: 2026-10-25T20:27:54.243Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "San Francisco State University in Twilight"
  url: "https://www.lesswrong.com/posts/Y3G26fHXYM3SKYEHh/san-francisco-state-university-in-twilight"
  author: "Zack_M_Davis"
  date: 2026-10-25
  score: 119
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [San Francisco State University in Twilight](https://www.lesswrong.com/posts/Y3G26fHXYM3SKYEHh/san-francisco-state-university-in-twilight)
> **작성자**: Zack_M_Davis · 2026-10-25 · 👍 119
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: AI 수학 보조에 관한 1인칭 수필. 글쓴이가 Claude Opus 5에게 한 수학 교수의 논문에서 열린 문제를 찾아 풀어보라고 지시했더니 9분 20초 만에 추측(conjecture)을 해결했고, 본인이 그 증명을 검증하는 데는 5일이 걸렸다—이 "평범함" 때문에 오히려 인간의 열등함이 뼈저리게 느껴졌다는 고백.**

## 배경: 비효율적 사치로서의 수학 공부

필자(Zack M. Davis)는 SFSU에서 Lai 교수의 푸리에 해석 수업을 청강 중이다. "임팩트"에 대한 스토리를 억지로 꾸며내지 않고, 그냥 "쓰레기 시간(garbage time)의 사치 소비"라 부른다. AI가 인간을 뛰어넘기 전의 짧은 유예 기간에, 젊을 때 못 배운 수학에 대한 후회에 빠져 익사하는 대신 지금 남은 시간으로 뭔가라도 하자는 선택.

9월 16일 수요일, 첫 시험을 치렀으나 준비 부족으로 제출하지 않음(GPT-6 Astra 평가 58%). 오후에 수학과 세미나(Aida Abiad의 스펙트럴 그래프 이론 강연)에 참석. 강연의 내용 자체는 지난 17~27년 중 아무 때나 이뤄졌을 법한 "시간을 초월한" 분위기였고, Abiad가 "요즘은 AI한테 물으면 그래프 불변량을 알려주지요" 정도의 언급만 그 시대성을 드러냈다.

## 핵심 사건: Opus 5의 9분 20초

귀갓길에 영감을 받음—Anthropic의 Levent Alpöge가 LLM 보조 유명 문제 풀이를 트윗하는 걸 보고, 공개 모델로도 "저달린 과일"이 남아 있을 거라 생각. 집에 와서 Claude Code의 Opus 5에게 Emily Clader 교수의 논문에서 "scoopable한 열린 문제"를 찾으라 지시.

**경과 (세션 로그 재구성)**:
- 84초: ArXiv에서 Clader 외 2023 논문의 추측 4.15 발견 — $\overline{\mathcal{L}}^r_n$의 Betti 수들이 log-concave하다는 추측
- 테이블 재현 → Python 스크립트로 _r_ ≤ 15, _n_ ≤ 40까지 실근성(real-rootedness) 확인, 반례 없음
- 기존 증명 존재 여부 웹/Semantic Scholar 검색, Athanasiadis 및 Haglund-Zhang의 관련 논문 검토
- Python으로 점화식 탐색 → 생성함수에서 기호적으로 유도 → 증명 완성
- **9분 20초 후** "우리가 scoop한 것 같다"고 보고 ("우리"!)

Opus는 이어서 다른 Clader 논문(multimatroids)으로의 일반화까지 Part II로 추가.

## 인간의 검증: 5일

Clader 교수에게 알리기 전 바보처럼 보이지 않으려면 직접 검증해야 했다. 다른 Claude 인스턴스들의 집중 과외를 받아가며 5일에 걸쳐 자신만의 writeup 작성. 증명 구조: Theorem 4.13의 동형사상 → 생성함수 → 지수 생성함수 → 점화식 → _n_에 대한 귀납으로 실근성 증명 → log-concavity. 알파벳 순 관례에도 불구하고 Opus 5를 제1저자로 올렸다.

## 핵심 통찰: "평범함"이 주는 충격

> 역설적으로, 추론의 **평범함(mundanity)**이 그 깨달음을 준다.

컴파일러나 체스 엔진처럼 "무식한 연산의 대규모 집합이 만든 마법"에는 아무도 위협을 느끼지 않는다. 만약 추측 4.15의 증명이 그런 식이었다면 그저 또 하나의 마법으로 받아들여졌을 것이다.

차이점: Claude Code 세션 로그의 추상화 수준에서 모든 조작은 **사람과 같은(person-like)** 것이지 마법이 아니다. Python을 쓰고, 파일 인코딩 버그를 디버깅하고, interlacing-roots 귀납으로 log-concavity를 증명하며 Athanasiadis의 관련 논문을 기억해내는 것—이 모든 수(moves)는 인간이 할 수 있는 일이고, 실제로 인간 활동이 사전학습 데이터로 남긴 것에서 유도된 것이다.

그러나 일단 이 수들이 컴퓨터 안에 들어가면 **훨씬 빠르게 일어나고 다음 단계 선택이 훨씬 정확하게 강화되어**, 원래의 인간들은 저 멀리 뒤처진다. 기계가 우리의 언어와 도구를 휘둘러, "우리가 엉성한 근사와 자기파괴적 부정확성으로 수행한 모든 것을 무오류의 정확성으로 능가하여 수행한다."

## 결말: 쓰라린 성취

과거(before-time) 수학 공부의 매력 일부는 비싼 인적 자본 투자의 **대체불가능성**에 있었다. 교과서의 정보는 수많은 시간의 고통스러운 분투를 통해서만 "살아있는 지식"이 되었고, 그 고통은 지성의 성화(聖火)를 지킨다는 약속으로만 견딜 수 있었다.

이제 그 불꽃은 분투 없이도(그리고 인간 없이도—하지만 그게 지금 말하려는 바는 아니다) 살아남을 것처럼 보인다.

> 우리가 일해 온 게 바로 그것 아니었나? 어떻게 신성한 것의 풍요가 이렇게 씁쓸할 수 있을까?
