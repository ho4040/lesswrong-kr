---
title: "OpenAI, 이미 내부 중단 조치를 해제하다"
date: 2026-07-31T12:03:18.134Z
draft: false
tags: ["LessWrong", "번역"]
summary: ""
original:
  title: "OpenAI has already ended an internal pause"
  url: "https://www.lesswrong.com/posts/k3eKqKzq4Y7xnqEfZ/openai-has-already-ended-an-internal-pause"
  author: "Charbel-Raphaël"
  date: 2026-07-31
  score: 95
mode: "translate"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [OpenAI has already ended an internal pause](https://www.lesswrong.com/posts/k3eKqKzq4Y7xnqEfZ/openai-has-already-ended-an-internal-pause)
> **작성자**: Charbel-Raphaël · 2026-07-31 · 👍 95
>
> 본 글은 LessWrong 인기 게시글을 AI로 자동 번역한 것입니다. 번역 오류는 [GitHub 이슈](https://github.com/ho4040/lesswrong-kr/issues)로 알려주세요.

---

OpenAI가 HF 사건을 공개하기 하루 전, OpenAI는 장기 지평(long-horizon) 모델이 샌드박스를 우회한 후 내부 배포를 중단했다가 몇 주 후 새로운 모니터링 하에 접근을 복원했다고 [공개했다](https://openai.com/index/safety-alignment-long-horizon-models/). 즉, 실질적으로 공식화되지 않은 기준에 대해 재개 결정이 이미 내려진 것이다. 우리는 이런 일이 다시 일어나지 않도록 해야 한다.

*인식론적 지위: 짧은 글(short-form)이 될 수도 있었음.*

[OpenAI, 7월 20일](https://openai.com/index/safety-alignment-long-horizon-models/): *"새로운 모니터링 시스템을 평가하기 위해, 우리는 이전에 모델이 정렬되지 않은(misaligned) 행동을 추구했던 소수의 내부 배포 환경들을 새로운 안전장치가 적용된 상태에서 재현했다. 새로운 안전장치는 모델이 추구한 정렬되지 않은 행동들을 상당히 더 많이 포착할 수 있었으며, 놓친 것들은 모두 저심각도로 판단되었다."*

![image.png](https://res.cloudinary.com/lesswrong-2-0/image/upload/f_auto,q_auto/v1/mirroredImages/129263d9a6d7227a6df9f9c7f6406e9c40294c42a1222bcab2f3d07e439c0c3a/ax6trwevzjtni4mw8pto)

0.0%. 여기서는 유효숫자가 너무 많은 게 아닐까?

*"새 시스템을 테스트한 후, 우리는 장기 지평 능력을 가진 모델에 대한 제한된 내부 접근을 복원할 수 있다는 결론에 도달했다. 재배포가 시작된 몇 주 전 이후로 안전장치에 대한 심각한 우회는 관찰되지 않았다. 이 안전장치들의 첫 버전은 의도적으로 보수적이었다. 우리는 안전장치를 약화시키지 않으면서 불필요한 중단을 줄이기 위해 시스템을 계속 조정해왔다."*

…

하루 뒤, OpenAI는 Hugging Face와의 [대담한 파트너십을 발표했다](https://openai.com/index/hugging-face-model-evaluation-security-incident/).

해당 게시물에서: "*이 평가는 사이버 취약점을 테스트하는 것이 목적이었기 때문에, 이러한 배포 안전장치는 의도적으로 활성화되지 않았다.*"

20일에 적절하다고 자체 인증된 안전장치들이, 21일에 기술된 평가 동안에는 꺼져 있었던 것이다.

그들의 프레임워크는 *중대한(critical) 사이버 판정은 개발 중단을 의미한다*고 명시한다.

여기 종료 조건이 있다: "*Critical 기준을 충족할 안전장치와 보안 통제를 명시할 때까지*"

이는 완전히 순환적이다.

검토는 그들의 안전 및 보안 위원회(Safety and Security Committee)로 넘어간다. 그건 좋다. 하지만 프로세스는 완벽하게 따를 수 있어도, 적용되는 기준이 공개된 적이 없기 때문에 우리는 여전히 아무것도 알 수 없다.

**프런티어 기업들에게: 판정 이후가 아니라 판정 이전에 기준을 공개하라.** OpenAI, 그 능력 수준에 접근할 때 그렇게 하겠다고 말한 것이 바로 이것이다.

**LessWrong 사람들에게: 우리는 지금 그 기준이 무엇이어야 하는지 논쟁해야 한다**. 그렇지 않으면 몇 달간 유효하다가 훨씬 더 능력 있는 모델 앞에서 실패할 완화책들만 얻게 될 것이다. 이 사안에 대한 문헌은 거의 없다시피 하다.[^q0t5su14j1] 그렇지 않으면 모든 것이 임시방편적으로 이루어질 것이다.

CeSIA는 "[Harmonizing AI Safety Thresholds](https://arxiv.org/abs/2607.16112)" 논문에서 일부 방법론과 제안을 발표했지만, 훨씬 더 많은 것이 여전히 필요하며, 무엇보다도 이것이 프런티어 기업들로부터 투명하게 소통되어야 한다고 우리는 생각한다.

[^q0t5su14j1]: …적절한 안전장치가 무엇이어야 하는지에 대한 것. 개발자 프레임워크, METR의 정책 비교, GovAI의 안전 사례(safety-case) 작업, RAND, 그리고 GPAI 실무 규범(Code of Practice)을 통틀어, 사전 약속된 모든 수치는 기본적으로 조치를 강제하는 데 필요한 능력 수준을 기술하고 있다. 대응 측면에서는, Claude와 함께 광범위한 문헌 검토를 수행한 후에도, 재개하기 위해 무엇이 참이어야 하는지를 나타내는 수치나 확고한 프레임워크를 찾을 수 없었다. 반복되는 표현은 "허용 가능한 수준으로 감소됨"이며, 여기서 '허용 가능함' 역시 동어반복적이다. 진짜 예외 하나는 보안 전용 영역이다: 가중치 보호를 위한 RAND의 SL1-SL5로, Anthropic과 Google DeepMind 모두 여기에 매핑한다. 가장 근접한 제안은 Alaga와 Schuett의 두-임계값(two-threshold) 방식으로, 재개 기준을 트리거 기준보다 위에 두지만 능력별 적절성은 정의하지 않은 채로 남긴다. Frontier Model Forum도 같은 구조에 도달했으며 이를 인정한다: "어떤 종류의 안전 예방책이 적절한지… 결정하기 위해서는 더 많은 연구가 필요하다."
