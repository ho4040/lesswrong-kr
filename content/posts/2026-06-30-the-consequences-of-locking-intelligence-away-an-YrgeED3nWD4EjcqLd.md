---
title: "지능을 가둬두는 것의 결과: 중국의 클로드 릴레이(Claude relay) 서비스 입문"
date: 2026-06-30T22:48:17.508Z
draft: false
tags: ["LessWrong", "번역"]
summary: ""
original:
  title: "The consequences of locking intelligence away: an introduction to Claude relays in China"
  url: "https://www.lesswrong.com/posts/YrgeED3nWD4EjcqLd/the-consequences-of-locking-intelligence-away-an"
  author: "CMLKevin"
  date: 2026-06-30
  score: 108
mode: "translate"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [The consequences of locking intelligence away: an introduction to Claude relays in China](https://www.lesswrong.com/posts/YrgeED3nWD4EjcqLd/the-consequences-of-locking-intelligence-away-an)
> **작성자**: CMLKevin · 2026-06-30 · 👍 108
>
> 본 글은 LessWrong 인기 게시글을 AI로 자동 번역한 것입니다. 번역 오류는 [GitHub 이슈](https://github.com/ho4040/lesswrong-kr/issues)로 알려주세요.

---

최근 Hacker News에서 중국의 API 릴레이 스테이션에 대한 담론이 돌고 있습니다. 이들은 서구 VC가 보조금을 지원하는 모든 저렴한 토큰 채널(Claude/ChatGPT 구독, AWS/Azure 크레딧, Kiro, Google Antigravity 등)을 활용해 이를 API로 중국 내수 시장에 재판매합니다.

2024년 중반부터, 특히 2025년 이후 이러한 추세가 증가하는 것을 지켜본 중국 시민으로서 말하자면, 이는 사실입니다. 타오바오(중국의 아마존)에 접속해 키워드를 검색하면, 공식 서구 API 가격의 1/5에서 1/10 수준으로 판매하는 수십 개의 릴레이 서비스가 나옵니다.

실제로 이러한 릴레이 중 상당수는 저렴한 모델을 진짜 서구 모델로 위장했을 수 있어서, 중국 테크 커뮤니티에는 [linux.do](https://linux.do/c/welfare/36/l/hot) 같은 포럼 전체가 릴레이 서비스를 가격, 품질, 가용성 기준으로 논의하고 평가하는 장소로 사용되며, [hvoy.ai](https://www.hvoy.ai/en) 같은 웹사이트는 다양한 자동화 테스트 스위트를 활용해 릴레이 제공자의 품질을 벤치마크합니다. 심지어 릴레이 운영자와 사용자 간의 신사협정식 데이터 수집 방식으로만 존재하는 무료 릴레이도 있습니다 — 중국 내 일부에서는 가장 인기 있는 릴레이 중 하나가 Zhipu에 의해 운영된다고 추측하는데, 이는 그들 모델이 Claude스러운 특징을 보이는 이유를 설명할지도 모릅니다.

이것이 또한 중국산 LLM이 평균적으로 훨씬 저렴한 이유입니다: 이들은 서로 경쟁해야 할 뿐만 아니라, 내수 시장에서 공격적으로 보조금 지원된 가격으로 외국 모델을 서비스하는 회색 시장 릴레이와도 경쟁해야 합니다. GLM-5.2의 출력 100만 토큰당 $4.2 가격조차도 가장 평판 좋은 API 릴레이 서비스에서 출력 100만 토큰당 $7.5에 제공되는 Opus 4.8과 경쟁하는 데 어려움을 겪고 있습니다.

돌이켜보면, 이는 현 시대 중국 AI 금지 조치의 자연스러운 종착점입니다.

서구 사람들이 Anthropic이 중국 기업들을 자사 모델의 증류(distilling) 혐의로 고발한다는 이야기를 들으면, 이를 전형적인 기업 스파이 사례에 대입합니다: 혁신적인 미국 기업들이 지능의 최전선을 만들어내면, 중국이 대규모 정부 보조금 캠페인으로 이를 복제한다는 식입니다. 하지만 실상은 이와 크게 다릅니다. Claude Opus 4.8을 1/10 가격에 파는 서드파티 릴레이를 도입할 만한 시장 유인이 테크 기업과 개인 개발자 모두에게 충분히 존재할 뿐입니다.

제 이해상충을 밝힙니다: Anthropic이 VPN 사용자를 단속해왔기 때문에 그들의 서비스에 합법적으로 접근할 수 없다는 것에 자연스럽게 좌절감을 느끼고 있으며, 따라서 이 채널이 제가 SOTA 모델과 상호작용할 수 있는 생명줄입니다. 그러나 저는 이 회색 시장을 둘러싼 수많은 데이터 위험도 매우 잘 인식하고 있습니다(이것이 릴레이가 중국 관영 매체에서 우려 영역으로 지목된 이유입니다 — 흥미롭게도, 중국은 GFW에 관해 프로그래머와 STEM 학생들에게는 항상 관대했기 때문에, "외국 모델이 대만을 국가라고 말한다" 같은 문제는 언급되지 않았습니다).

아마도 Mythos 이후, GPT-5.6 이후 시대의 KYC가 이러한 현상을 줄일 수 있을지도 모르지만, 이미 우회 방법이 만들어지고 있으므로(예를 들면 서드파티 에이전틱 코딩 서비스의 API를 리버스 엔지니어링하는 것), 그 효과가 어떨지는 지켜봐야 할 것입니다.

댓글 섹션의 질문을 기꺼이 받겠습니다.
