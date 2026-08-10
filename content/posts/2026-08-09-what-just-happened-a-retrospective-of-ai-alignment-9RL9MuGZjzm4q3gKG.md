---
title: "[요약] 방금 무슨 일이 있었나? AI 정렬 분야의 회고"
date: 2026-08-09T15:58:07.687Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "What just happened? A retrospective of AI alignment"
  url: "https://www.lesswrong.com/posts/9RL9MuGZjzm4q3gKG/what-just-happened-a-retrospective-of-ai-alignment"
  author: "Richard_Ngo"
  date: 2026-08-09
  score: 383
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [What just happened? A retrospective of AI alignment](https://www.lesswrong.com/posts/9RL9MuGZjzm4q3gKG/what-just-happened-a-retrospective-of-ai-alignment)
> **작성자**: Richard_Ngo · 2026-08-09 · 👍 383
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 지난 10년간 AI 정렬 분야는 심층적·일반화 가능한 과학적 진보를 추구하던 태도를 버리고, 기존 시스템의 반복적 개선과 기술적·정치적 권력 획득으로 방향을 틀었으며, 그 과정에서 오히려 AGI 역량 발전을 가속화하는 최대 세력 중 하나가 되었다.**

## 서론: 정렬 분야의 자기 배반

두 주요 AGI 기업(OpenAI, Anthropic)은 모두 명시적으로 AI 정렬의 기치 아래 창립되었고 정렬 관련 아이디어·인재·자원 덕분에 자리 잡았다. 정렬 공동체는 "역량보다 정렬을 차별적으로 발전시키겠다"는 계획을 가졌지만, 실제로는 세계를 정반대 방향으로 밀어붙였고, 일부는 그 과정에서 큰 권력을 얻었다. 저자의 관심사는 AI 결과의 좋고 나쁨보다도, 미래를 좌우할 소수 의사결정자들의 **성실성과 합리성**이다.

## 반복되는 실수와 "미끄러운 경사 뛰어내리기"

정렬 공동체가 지금도 답습 중인 네 가지 전략:

1. 미국 정부가 AGI를 훨씬 심각하게 받아들이도록 설득하기
2. 역량 극대화 연구와 매우 유사한 "정렬 연구"(자동화된 정렬 연구자 구축 등)
3. Anthropic을 지나치게 신뢰(과거 OpenAI를 지나치게 신뢰한 것과 유사)
4. 정치적 사고의 명료성을 순응과 맞바꾸기(과거 ML 존재론에 순응하며 AGI 사고의 명료성을 잃었듯이)

핵심 패턴은 **"미끄러운 경사 뛰어내리기"**: 결과가 불가피하다고 여겨 자신의 기여 영향이 미미하다고 여기지만, 실제로는 그 "불가피한" 결과를 향해 세계를 더 빠르게 밀어내는 주요 세력이 된다. 대표 사례는 Sam Altman이 Elon에게 보낸 OpenAI 창립 이메일: "어차피 일어날 일이라면 구글 아닌 누군가가 먼저 하는 게 낫다."

이는 (i) 자기 행동의 비-한계적 효과를 무시한 채 한계 영향만 계산하는 오류, (ii) 개인 영향만 생각하고 분야 전체에 권할 정책을 생각하지 않는 오류에서 비롯된다. 감정적으로는 Sam의 경우 권력 축적 본능, 정렬 공동체의 경우 "세계를 구해야 한다"는 서사와 실패에 대한 공포가 시야를 좁힌다.

## 1부: 개념적 명료성과 과학적 진보

초기 합리주의 공동체는 **지적 명료성의 등대**였다. Wei Dai·Hal Finney(암호화폐), Robin Hanson(예측시장), Yudkowsky·Christiano(결정이론·확률논리), Bostrom(인류원리·천문학적 낭비), Scott Alexander(정치 이론) 등 엄청난 지적 진보의 집중지였다. Omohundro의 수렴적 도구적 목표, Eliezer의 지능 폭발 미시경제학 같은 논문은 개념적으로 단순하지만 다른 학계는 이런 분석을 생산·발전시키지 못했다.

**과학적 진보에 대한 저자의 관점**: 통찰력 있는 새 개념 → 이전 존재론을 대체하는 새 존재론 형성. Kuhn·Feyerabend·Koestler 등이 기술한 패턴. Eliezer의 원래 비전은 정렬을 **뉴턴 역학에 비견될 새 과학 패러다임**의 개발로 보았다.

그러나 오늘날 대부분 정렬 연구는 더 이상 이런 과학적 진보를 지향하지 않는다. **에이전트 파운데이션(agent foundations)**만이 일관되게 이를 추구하는 유일한 하위분야이며, 저자가 일반적으로 홍보해도 안전하다고 여기는 유일한 분야다. 기계적 해석가능성의 일부도 그럴 수 있으나 역량 발전 효과와 명확히 구분되지 않는다.

ML 분야 자체도 이런 기준의 과학이 아니었다. 딥러닝의 부상은 이해보다 **구축**을 강화했다. RL 이론은 오래도록 비현실적인 tabular 세팅에 갇혔고, 통계학습 이론은 신경망 일반화를 설명 못하는 underparameterization 체제에 집중했다. 저자는 이를 과학의 **생성적(generative)** 부분이 지나치게 열성적인 **판별적(discriminative)** 분류에 압도된 결과로 본다.

학계 ML은 AGI 개념에 면역 반응처럼 반응했다(Andrew Ng의 "화성 과잉인구" 발언, Chollet의 조악한 반박, LeCun의 지속적 부정 등). 그러나 합리주의자들도 부적절한 인식론과 "세계 구원" 감정으로 비공식 논증을 과대평가하며 회의론자에게 대응하기보다 그들을 설득하려 애썼고, 그 결과는 대체로 후회스럽다.

## 2부: 명성 지향(Orienting Towards Prestige)

**Superintelligence** 출간, FLI 컨퍼런스 등 엘리트 대상 아웃리치가 확대됐다. 실리콘 밸리 엘리트가 주로 반응했고, Peter Thiel은 MIRI 이벤트에서 Demis Hassabis를 만나 DeepMind에 창립 투자했다.

그러나 이 가설("유능한 엘리트를 동맹으로 삼자")은 곧 문제를 드러냈다. 엘리트들은 LessWrong 익명 논평자만도 못하게 AGI를 논의했고, Elon과 Sam은 AGI 위험 우려에 대응해 **OpenAI**를 창립했다—초기 합리주의자들이 원한 것의 정반대에 가까웠다. 이는 실리콘 밸리의 행동 편향이 아니라 **권력 획득 편향**으로 이해해야 한다.

대조적으로 Eliezer의 **HPMOR** 저술은 명성 최소화 전략에 가까웠으나 명료하게 사고하는 정렬 연구자 모집에 훨씬 성공적이었다.

### Holden Karnofsky와 OpenPhil의 편향

Holden은 2007년 MIRI의 논증을 처음 접했으나 MIRI가 "권위 있는 지지자가 없고" "wacky"하다는 이유로 진지하게 받아들이지 않았다. **8년간 명성에 과도 의존해 잘못 판단한 뒤에도**, 2015년 OpenPhil의 첫 AI 안전 지원을 시작하며 대부분 자금을 명성 있는 기관에 배분했다:

- MIRI 첫 지원(2016): 50만 달러(참여 사례금 수준)
- FLI: 그 두 배
- CHAI(Stuart Russell): 10배
- **OpenAI: 3천만 달러**(이사회 자리 조건)

Daniel Dewey는 agent foundations가 "AI 연구자들 사이 지지가 없다"는 이유로 MIRI 지원을 정당화했는데, 이는 **AGI 위험을 아직 진지하게 여기지 않는 사람들의 연구 취향에 의존**한 결정이었다. 결과적으로 MIRI는 자신이 창립한 분야에서 작고 주변적인 존재가 됐다.

**중요 폭로**: OpenPhil의 OpenAI 지원 공시에는 "OpenAI 연구자 Dario Amodei와 Paul Christiano가 OpenPhil의 기술 자문이며 Holden과 같은 집에 산다. Holden은 Dario의 여동생 Daniela와 약혼했다"고 되어 있다.

TechCrunch에 따르면 OpenAI가 실제 받은 자선 기부는 총 1.33억 달러였고, OpenPhil의 3천만 달러는 그 **20% 이상**이었다. "한계 3% 기여 시도"가 실제로는 "20% 이상 제공"이 된 것—미끄러운 경사 뛰어내리기의 전형이다.

두 집단이 모두 나쁜 일을 하려 할 때, 한쪽이 없어도 그 일이 일어났으리라는 사실은 각자의 책임을 면제하지 않는다. 오히려 **해로운 집단 역학에 참여한 책임**을 부여한다. 다음 편(Pragmatism and Pessimization)에서는 EA식 한계주의적 사고가 AI 역량 발전을 어떻게 부추겼는지 다룰 예정이다.
