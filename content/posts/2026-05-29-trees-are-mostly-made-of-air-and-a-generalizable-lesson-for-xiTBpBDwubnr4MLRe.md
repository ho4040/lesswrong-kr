---
title: "[요약] 나무는 대부분 공기로 이루어져 있다, 그리고 AI 안전성에 적용할 수 있는 일반적인 교훈"
date: 2026-05-29T04:08:04.640Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Trees are mostly made of air and a generalizable lesson for AI safety "
  url: "https://www.lesswrong.com/posts/xiTBpBDwubnr4MLRe/trees-are-mostly-made-of-air-and-a-generalizable-lesson-for"
  author: "zroe1"
  date: 2026-05-29
  score: 132
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Trees are mostly made of air and a generalizable lesson for AI safety ](https://www.lesswrong.com/posts/xiTBpBDwubnr4MLRe/trees-are-mostly-made-of-air-and-a-generalizable-lesson-for)
> **작성자**: zroe1 · 2026-05-29 · 👍 132
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 특정 분야의 세부 지식을 많이 안다고 해서 그 분야의 기초 개념을 제대로 이해한다는 보장은 없으며, 이는 AI 안전 분야에서 심각한 실패 양상이 되고 있다.**

## 두 가지 고백과 비유

필자는 5년간 라틴어를 공부하고 최우수상까지 받았지만, 정작 로마 제국이 언제 존재했는지조차 기억하지 못한다. "라틴어 전문가"임에도 가장 기초적인 토대 사실을 놓치고 있는 셈이다.

비슷한 예로 "나무는 공기로 만들어진다"는 사실이 있다. 광합성($6CO_2 + 6H_2O + \text{빛} \rightarrow C_6H_{12}O_6 + 6O_2$)에서 나무의 질량은 거의 전부 공기 중 $CO_2$에서 온다. 수소는 너무 가벼워 질량 기여가 미미하기 때문이다. 그러나 MIT 졸업생들조차 다큐멘터리에서 이를 모른다고 답했다. 한 학생은 이 사실이 "매우 충격적"이라고 말했다.

## 기초성과 유용성은 다르다

흔히 기초를 먼저 배우고 점점 더 구체적인 주제로 나아간다고 가정한다. 분수처럼 미적분을 풀면서 자연스럽게 강화되는 기초도 있지만, 모든 기초 지식이 그런 것은 아니다.

- **기초적(foundational)**임과
- **점점 더 구체적인 질문에 답하는 데 유용함**

은 직교는 아니지만 완전히 상관되지도 않는다. 나무의 기원을 아는 것은 유기화학이나 진화생물학 문제 풀이에 도움이 되지 않는다. 둘이 어긋날 때, MIT 졸업생이 나무가 무엇인지 헷갈리는 일이 벌어진다.

## AI 안전에서의 심각한 문제

AI 안전 분야 진로를 원하는 수십 명의 학생을 인터뷰한 결과, 많은 이가:

- 정렬 위장(alignment faking)을 알고, LessWrong을 읽고, Neel Nanda와 METR을 알며, 해석가능성(interp) 프로젝트를 해봄
- 그러나 **"왜 AI 안전이 중요한가?"** "왜 AI를 실존적 위험으로 봐야 하는가?"라는 질문에는 일관된 답을 못함

이는 단지 EA/합리주의자들과 어울리고 싶어서일 수도 있지만, 더 가능성이 높은 이유는 **AI 안전 기초가 배우기만 하고 실제로 사용하지 않는 지식**이기 때문이다. BlueDot 리딩 그룹에서는 기초를 배우지만, interp 실험이나 SPAR 연구에서는 직교성 명제(orthogonality thesis)를 사용하지 않는다. 기초를 사용하지 않으니 내재화되지 않고, 그것으로 추론할 수도 없게 된다.

도구적 수렴, 내적 정렬, 보상 명세 오류 등이 우리에게는 "나무는 공기로 만들어진다"나 "로마 제국 BC 27~AD 476"에 해당한다. 그러나 많은 AI 안전 프로그램 참가자/지원자가 이 기초를 모른다.

$$\text{X에 대한 많은 구체적 사실을 앎} \not\Rightarrow \text{X에 대한 기초 사실을 앎}$$

펠로우십과 대학 그룹에 많은 노력이 들어가지만, 개념적 지식이 빠져나가고 있다.

## 결론: 기초를 이해할 때의 힘

필자도 대학 입학 전에는 외적 정렬 위주로만 정렬 문제를 이해했었다. 그러나 진짜로 문제를 이해했기 때문에 CS 전공을 택하고, 열심히 공부하며, AI 안전에 집중할 수 있었다. 그렇지 않았다면 월스트리트 등으로 흘러갔을 것이다.

> **문제를 안다는 것은 왜 신경 써야 하는지를 알려준다. 무언가를 진정으로 이해하는 데는 엄청난 힘이 있다.**
