---
title: "[요약] 미국 정부, 클로드 우화를 끌어내리다"
date: 2026-06-13T19:40:48.891Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "American Government Takes Down Claude Fable"
  url: "https://www.lesswrong.com/posts/DQNSqCzuoeutoQ5RG/american-government-takes-down-claude-fable"
  author: "Zvi"
  date: 2026-06-13
  score: 102
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [American Government Takes Down Claude Fable](https://www.lesswrong.com/posts/DQNSqCzuoeutoQ5RG/american-government-takes-down-claude-fable)
> **작성자**: Zvi · 2026-06-13 · 👍 102
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 미국 상무부가 Anthropic의 Fable 5/Mythos 5에 갑작스럽게 수출통제를 부과해 외국인 직원·고객의 접근을 차단했고, 그 명분(좁은 jailbreak 하나)이 부실해 실질적으로 모델 전면 중단으로 이어졌다. Zvi는 이 조치가 무능하거나 악의적이며, 향후 AI 거버넌스에 위험한 선례를 남긴다고 본다.**

## 사건 개요

금요일 오후 5시 21분, 상무장관 Howard Lutnick의 서한으로 Fable 5와 Mythos 5가 수출통제 대상으로 분류됨. 미국 내에 있는 외국인(Anthropic 직원 포함)조차 접근 불가. Anthropic은 시민권 확인 수단이 없어 결국 **모든 사용자에 대해** 모델을 전면 중단해야 했다.

명분은 Amazon이 발견한 것으로 추정되는 좁은 jailbreak이지만, Anthropic에 따르면:
- 해당 취약점은 사소하고 이미 알려진 것
- GPT-5.5 등 다른 공개 모델도 별다른 우회 없이 동일한 정보를 찾을 수 있음
- 출시 전 미국 정부, 영국 AISI, 다수 제3자가 수천 시간 레드팀 수행
- **universal jailbreak는 아직 누구도 발견하지 못함**
- "심층 방어(defense in depth)" 전략을 채택, 30일 데이터 보존도 그 일환

## 조치의 비합리성

- 대중국 칩 수출통제는 **완화**하면서, 영국인을 포함한 모든 비미국인의 최고 모델 사용은 금지하는 모순적 입장
- 비미국인 Anthropic 직원이 자사 모델을 못 쓰게 되어 사실상 **재귀적 자기개선에 대한 최초 규제**가 우연히 탄생
- 동일 기준을 산업 전반에 적용하면 모든 프런티어 모델 배포가 중단됨
- "중국이 미국 최첨단 모델을 distill 못하게 하려면, 최첨단 모델 자체를 없애면 된다" — 자해성 국가안보

## David Sacks의 공식 해명

행정부 입장을 대변한 Sacks의 요약:
1. 신뢰할 만한 파트너(추정상 Amazon)가 jailbreak 발견
2. Amazon·백악관은 심각하다고 봤고, Anthropic은 그렇지 않다고 봄
3. Dario에게 수정 또는 모델 철회를 요구했으나 거부 → 수출통제 발동
4. 수정하면 통제는 해제될 것

Zvi의 반박:
- "사이버 무기 작동성을 허용하는 jailbreak는 무조건 심각하다"는 논리라면 GPT-5.5도 동일한 통제 대상이어야 함
- Anthropic이 안전과 상업적 제공 사이에서 균형을 잡는 것은 당연하며, "완벽히 안전한 모델 = 완벽히 쓸모없는 모델"
- 요구가 "이 특정 jailbreak를 막아라"라면 월요일까지 해결 가능. 그러나 "이 수준의 모든 jailbreak가 다시는 없도록 보장하라"라면 불가능

## 더 큰 함의

**유럽·중급국 입장**: 자국 이익과 무관하게 결정이 이뤄진다는 신호. 대응 수단은 거의 없음 — Opus 4.8/GPT-5.5보다 강한 자체 모델이 없는 한.

**인재 유출 위험**: OpenAI, Google, Anthropic의 비미국 시민 연구자들이 모델 접근권을 잃으면 외국 랩으로 이직할 유인 발생. Amanda Askell, Andrej Karpathy 같은 핵심 인재가 즉시 Mythos 5 사용 불가. "1955년 Qian Xuesen 추방 이래 최악의 비확산 실패" 우려.

**기업 인센티브 왜곡**: 통제를 피하려 모델 역량을 의도적으로 축소 발표(sandbagging)할 유인.

## 니힐리즘 비판

"Anthropic이 규제를 요청했으니 자업자득"이라는 반응이 만연. Zvi는 이를 강하게 비판:
- "집이 너무 춥다고 불평했다고, 누가 집을 태웠을 때 불평할 권리가 없는 것은 아니다"
- Marc Andreessen은 Biden의 가벼운 보고 요구를 "실존적 위협"이라 했으면서 이번 글로벌 수출통제는 "based"라 함 — **심층적 위선과 니힐리즘**
- Adam Thierer처럼 자기 이익에 반해도 원칙을 지키는 사람들에 대한 존경 표명

## Yudkowsky와 Soares의 균형 잡힌 시각

- **좋은 측면**: "정부는 절대 AI에 손대지 못한다"는 불가피주의(inevitabilism) 신화가 깨짐. 초지능 금지 같은 조치도 가능함을 시사
- **나쁜 측면**: 선택적 적용, 무능한 실행, 글로벌 경쟁 격화 신호, Anthropic과 정부 관계 악화
- Yudkowsky: "내가 이 일을 자축한다고 트윗하지 말라. 1년 후 결과가 중요하다"

## 결론

이것은 **현명한 안전 조정과 정반대**다 — 다른 모두를 잘라내고, 자기 발을 쏘면서 경주에 뛰어드는 행위. 현 정부 역량에 대한 부정적 갱신이며, 향후 더 나아가 보안 인가 요구, 지분 압류, 직접 감독으로 확장될 위험이 있다.

긴급히 필요한 것: **관련 국가 역량 구축**, **정부 감독을 위한 입법 프레임워크**, **핵심 의사결정자 교육** — 이런 일이 재발하지 않도록.
