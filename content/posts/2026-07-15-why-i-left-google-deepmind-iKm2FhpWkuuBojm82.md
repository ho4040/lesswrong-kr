---
title: "[요약] 제가 구글 딥마인드를 떠난 이유"
date: 2026-07-15T17:42:46.355Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Why I Left Google DeepMind"
  url: "https://www.lesswrong.com/posts/iKm2FhpWkuuBojm82/why-i-left-google-deepmind"
  author: "TurnTrout"
  date: 2026-07-15
  score: 291
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Why I Left Google DeepMind](https://www.lesswrong.com/posts/iKm2FhpWkuuBojm82/why-i-left-google-deepmind)
> **작성자**: TurnTrout · 2026-07-15 · 👍 291
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 저자는 DHS의 시민 사살 사건을 계기로 Google이 Pentagon과 무제한적 군사 AI 계약을 맺는 것을 막으려 사내외에서 광범위한 캠페인을 벌였으나, AI 윤리를 표방해온 유명 인사들과 리더십이 모두 침묵·불행동으로 일관해 계약이 체결되자 Google DeepMind를 사직했다.**

## 배경: DHS 문제와 Google의 연루

2026년 1월 DHS 요원들이 최소 두 명의 시민(Renée Good, Alex Pretti)을 살해한 사건 이후, 저자는 Google이 Cloud 서비스를 통해 DHS/ICE 공급망에 관여하고 있으며, ICE 활동 경고 앱 삭제·학생 시위자 계정 정보를 무통보로 ICE에 넘긴 사실 등을 발견한다. 이후 Pentagon이 Anthropic 등 AI 기업들에 "모든 합법적 사용(all lawful use)" 조건 — 자율살상무기·대량 AI 감시 제한 없음 — 계약을 강요하자, 저자의 활동은 Google이 이런 계약에 서명하는 것을 막는 것으로 확대된다.

## 전략과 실행

저자의 계획: 100명의 엔지니어를 모으는 것보다, 대체 불가능한 소수의 스타 — 특히 자율살상무기 반대 서약(2018)에 서명하고 ICE를 공개 비판해온 **Jeff Dean** (Google 최고 과학자) — 을 움직이는 것.

**주요 시도들:**
- Sundar Pichai, Demis Hassabis, Thomas Kurian에게 직접 이메일 → 응답 없음
- Jeff Dean과 점심 약속 성사
- 250명 이상의 GDM 서명이 담긴 청원서를 Jeff에게 전달
- 사내 채널에 지속적으로 문제 제기 (125+ 이상의 "❤️" 반응)
- 25페이지 분량의 **"군사 AI 레드라인 및 감독 프레임워크"** 초안 작성 — 군사/감시법 전문가로부터 "실제로 꽤 좋다"는 평가를 받음
- Demis Hassabis에게 직접 DM

## IASEAI의 침묵

파리에서 열린 IASEAI 컨퍼런스에서:
- **Stuart Russell**: 10년간 자율살상무기 반대 운동을 이끈 인물. 회원 투표를 열고 성명을 내겠다고 공언, "Pentagon의 협박(extortion racket)"이라 언급했으나 이후 투표는 조용히 취소, 성명도 없음
- **Yoshua Bengio**: 성명 거부, 이유 설명 없음
- **Geoffrey Hinton**: Google을 떠나 자유롭게 발언하겠다고 했지만 침묵
- IASEAI 임시 상임이사 Mark Nitzberg는 저자의 후속 메시지를 무시

Stuart는 저자에게 Google 의사결정자에게 조용한 개인적 소개조차 해주지 않았다 — "정치적 자본 아끼기"로 설명되지 않는 저비용 도움 거부.

## Jeff Dean의 부분적 행동

Jeff는 Anthropic을 지지하는 amicus brief에 공개 서명 — Pentagon이 Google에 대해 주저하게 만든 한 요인. 그러나 저자와의 점심에서 Review Body 의장직을 맡는 것은 거부. Sundar에게 사임 위협으로 압박하지 않은 것으로 보임.

## 계약 체결과 사직

2026년 4월 27일, Google은 "모든 합법적 정부 목적" 조항으로 계약 체결. 자율무기/대량감시 관련 문구는 **비구속적**("should not")이어서 OpenAI 계약보다도 약함. Demis는 인터뷰에서 "우리 원칙은 바뀌지 않았다"고 주장했지만, 2025년 2월 무기·감시에 대한 명시적 금지 조항이 원칙에서 삭제된 상태.

## 성찰

- **GDM은 거버넌스 실험이었고 실패했다.** Anthropic에서는 윤리가 이겼고 GDM에서는 압력이 이겼다. 결론: 사회는 윤리적 개인의 강경함에 의존할 수 없다.
- **Demis의 "테이블 안에 앉기" 철학 비판**: 그는 낮은 신뢰 요구 구조(스핀오프) 시도가 실패한 후 개인적 신뢰로 방향을 틀었으나, 그 자리에서 얻어낸 실질적 구속 조항은 없다. 사람은 시스템과 똑같은 압박에 노출되지만 지분·사회적 유대·자기이미지라는 더 나쁜 인센티브를 갖게 된다.
- **서약 서명자의 딜레마**: Jeff Dean 등 자율살상무기 반대 서약자들이 사용 제한 없이 AI를 파는 회사에 머무는 것은 서약과 모순. 정직한 선택지는 공개 설명, 서약 철회, 또는 사직뿐.
- **역할 깨기(defying roles)**: 저자는 Alex Pretti의 사진을 리마인더로 삼아 "책임 있는 연구원"이라는 자기 이미지의 경계를 넘었다고 회고.

## AI 실존 위험과의 연결

- 정렬된 AI를 위한 안전 사례(safety case)는 chain-of-thought 모니터링에 크게 의존
- 격리된 군사 데이터센터(IL-6 등)에서 훈련된 감시자 없이 운영되면 기만적 AI 탐지 불가
- "모든 합법적 사용" 배치는 rogue AI에게 약한 감독 + 강력한 인프라 접근이라는 최적 조건 제공

## 부록 요지

- "API 접근일 뿐"이라는 회사 발언은 오도. 온프레미스 배치에서는 Google의 중앙 감독이 사실상 없음.
- Jeff·Bengio·Hinton·Stuart 등은 일반적으로 겁쟁이가 아니다. 그렇다면 왜 침묵했는가? Hinton 본인이 시사한 바: **트럼프 행정부의 보복에 대한 두려움**.
- 저자는 다른 AI 랩으로 이직하지 않고 무직 상태로 사직.

> "나는 저항했고 그 다음에 이겼다"고 말하러 온 것이 아니라, "나는 저항했다"고 말하러 왔다.
