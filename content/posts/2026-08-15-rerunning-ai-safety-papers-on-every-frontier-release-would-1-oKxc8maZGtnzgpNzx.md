---
title: "[요약] 모든 프런티어 모델 출시마다 AI 안전성 논문을 재실행하는 것은 꽤 쉽고 가치 있는 일이다"
date: 2026-08-15T05:14:54.879Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Rerunning AI safety papers on every frontier release would be pretty easy and valuable"
  url: "https://www.lesswrong.com/posts/oKxc8maZGtnzgpNzx/rerunning-ai-safety-papers-on-every-frontier-release-would-1"
  author: "Zephaniah Roe"
  date: 2026-08-15
  score: 118
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Rerunning AI safety papers on every frontier release would be pretty easy and valuable](https://www.lesswrong.com/posts/oKxc8maZGtnzgpNzx/rerunning-ai-safety-papers-on-every-frontier-release-would-1)
> **작성자**: Zephaniah Roe · 2026-08-15 · 👍 118
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 중요한 AI 안전 연구 결과들이 최신 모델에서 재검증되지 않은 채 방치되고 있으며, Second Look Research(SLR)는 신뢰할 수 있는 학부생 1명과 소규모 컴퓨팅 예산으로 기존에 재현해둔 실험들을 신모델에 즉시 재실행하는 파일럿을 제안한다.**

## 문제 의식

많은 AI 안전 연구가 새로운 모델 세대로 넘어가면서 재실행되지 않는다. 그러나 이런 결과들은 시간이 지나도 가치를 잃지 않는다. 예를 들어:

- Google의 **CoT 모니터링 실험**이 GPT-5.5 같은 더 강력한 모델에서도 성립하는지 추적하는 것은 유용하다.
- Ryan Greenblatt의 **filler token 결과**를 계속 추적하면, 신모델이 무해해 보이는 토큰에 얼마나 많은 추가 추론을 숨길 수 있는지에 대한 신호를 얻을 수 있다.

재실행의 걸림돌은 코드베이스가 불완전하거나, 파라미터가 논문과 다르거나, 오픈소스가 아닐 수 있다는 점이다. 하지만 SLR은 이미 여러 영향력 있는 안전 논문을 재현해뒀기 때문에, 신모델 추가는 **터미널 명령 하나 혹은 Claude 프롬프트 하나** 수준으로 가능하다.

## 실행 방식

신모델이 출시되면, 신뢰할 수 있는 학부생이 선정된 실험들을 하룻밤 안에 실행하고 결과를 검토한다. 논문당 비용은 **$0~$5,000** 수준. 중요한 변화가 발견되면 관계자에게 즉시 공유하고, 별다른 것이 없다면 웹사이트에 "예상과 다르지 않다"는 결과를 게시한다. 모든 커뮤니케이션은 시니어 팀원이 검토한다. 결과들은 트렌드 트래커에 축적되어 미묘한 안전 관련 흐름을 드러낼 수 있다.

## 이게 정말 가치가 있는가?

가장 중요한 평가는 이미 model system card에 포함되지 않는가? 전통적 evals(역량·리스크)에서는 그렇다. 하지만 SLR의 재현 작업은 METR, Apollo, Palisade 등 외부 평가자나 프론티어 랩이 다루는 질문과 다르다. Anthropic 모델 카드에도 일관되게 빠지는 저비용 테스트가 있고, OpenAI/GDM/xAI의 시스템 카드는 매우 제한적이다. 특히 **evals 형태가 아닌 연구**—internal state control, peer preservation, filler token evals 등—는 시스템 카드에 잘 포함되지 않으며, SLR이 이 공백을 메울 수 있다고 본다.

## 타겟 예시

1. Anthropic의 "Teaching Claude Why" 미드트레이닝 실험 (오픈소스 신모델용)
2. CoT hint following 실험
3. Single-forward pass filler token evals
4. Internal state control on 신 오픈소스 모델
5. Hidden role games (불확실성 하 적대적 추론 측정)
6. Subliminal learning (신 오픈웨이트 모델에서의 정량적 트렌드)

## 로지스틱스 과제

- **인센티브 부재**: 이 작업은 논문화되기 어려워 최상위 인재는 관심이 없다. 하지만 유일한 병목은 결과 분석 역량이며, 신뢰할 만한 학부생 1명이면 해소된다. 신규 진입자에게 입문 펠로우십과 임팩트 있는 연구 사이의 디딤돌이 될 수 있다.
- **재실행의 기술적 어려움**: 오픈소스라도 재실행이 사소하지 않다. SLR은 **이미 재현해둔 논문**에 집중할 계획.
- **연구 커뮤니케이션의 어려움**: 최종 결과 작성이 재현 엔지니어링보다 오래 걸릴 수 있다. 멘토링과 피드백으로 해결 가능하며 투자 가치가 있다고 판단.

## 결론

가을에 파트타임 학부생 1명과 소규모 컴퓨팅 예산으로 파일럿을 시작하며, 반응에 따라 스케일을 조정할 계획이다.
