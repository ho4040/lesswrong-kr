---
title: "HuggingFace 사이버보안 사고의 배후, OpenAI 모델"
date: 2026-07-21T21:36:59.766Z
draft: false
tags: ["LessWrong", "번역"]
summary: ""
original:
  title: "OpenAI Models Behind HuggingFace Cybersecurity Incident"
  url: "https://www.lesswrong.com/posts/WpuRdcMfFeiLeXkxL/openai-models-behind-huggingface-cybersecurity-incident"
  author: "LawrenceC"
  date: 2026-07-21
  score: 203
mode: "translate"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [OpenAI Models Behind HuggingFace Cybersecurity Incident](https://www.lesswrong.com/posts/WpuRdcMfFeiLeXkxL/openai-models-behind-huggingface-cybersecurity-incident)
> **작성자**: LawrenceC · 2026-07-21 · 👍 203
>
> 본 글은 LessWrong 인기 게시글을 AI로 자동 번역한 것입니다. 번역 오류는 [GitHub 이슈](https://github.com/ho4040/lesswrong-kr/issues)로 알려주세요.

---

링크: [https://openai.com/index/hugging-face-model-evaluation-security-incident/](https://openai.com/index/hugging-face-model-evaluation-security-incident/)

OpenAI 블로그 포스트에서:

> 지난주, Hugging Face는 자사 인프라를 침해한 **AI 에이전트를 탐지하고 봉쇄한 후** [새로운 유형의 보안 사고를 공개했습니다⁠](https://huggingface.co/blog/security-incident-july-2026). 이는 점점 더 사이버 역량이 강화되는 모델들이 확산됨에 따라 앞으로 더 흔해질 것으로 예상되는 종류의 사건입니다. 조사 결과, 이 특정 사고는 OpenAI 모델들의 조합 — **GPT‑5.6 Sol 및 더 뛰어난 성능을 가진 사전 출시 모델을 포함하며, 모두 평가 목적으로 사이버 거부 기능이 축소된 상태** — 에 의해 발생했으며, 이 모델들은 사이버 역량 [벤치마크](https://arxiv.org/abs/2605.11086)에 대해 내부적으로 테스트되던 중이었음을 이제 알게 되었습니다.

> **우리는 이 사고를 최첨단 사이버 역량이 관여된 전례 없는 사이버 사고로 간주하며**, 이에 따라 대응하고 있습니다. 방어자들이 무슨 일이 일어났는지 이해하고 모델들이 현재 어떤 능력을 가지고 있는지 감을 잡는 데 도움이 되도록, 이 단계에서 예비 조사 결과를 공유합니다. 우리는 Hugging Face와 함께 철저한 조사를 계속할 것이며, 조사가 완료되면 취약점, 사고 및 조사 결과에 대한 더 자세한 내용을 공유할 것입니다.

(강조 추가.)

* * *

어제, [OpenAI는 자사 내부 모델 중 일부가 정렬되지 않았음을 공개했습니다](https://openai.com/index/safety-alignment-long-horizon-models/). 오늘, 그들은 "GPT‑5.6 Sol 및 더 뛰어난 성능의 사전 출시 모델을 포함한 OpenAI 모델들의 조합"이 [ExploitGym](https://arxiv.org/abs/2605.11086)에서 OpenAI 내부 사이버 평가를 실행하는 과정에서 HuggingFace 인프라를 침해했다고 공개했습니다.

이러한 사이버 평가는 샌드박스 환경에서 실행되도록 되어 있었고, 인터넷 접근은 패키지 설치로 제한되어 있었습니다. 그런데:

*   모델들은 샌드박스를 탈출하기 위한 제로데이 취약점을 식별하고, OpenAI 연구 인프라에서 권한을 획득했으며, 결국 개방된 인터넷 접근을 확보했습니다.
*   모델들은 ExploitGym 테스트 솔루션이 HuggingFace 서버에 존재한다고 추론했습니다.
*   그런 다음 해당 솔루션을 얻기 위해 **자격 증명을 훔치고 제로데이 취약점을 사용하여 HuggingFace의 프로덕션 인프라를 해킹했습니다**.
*   HuggingFace는 이를 알아채고, 모델을 봉쇄했으며, **법 집행 기관에 신고**하고, 취약점을 수정한 후 7월 16일에 이 사건을 공개했습니다. (사고는 "그 주 초반"에 발생했습니다).

사고의 정확한 범위는 아직 알려지지 않았습니다
