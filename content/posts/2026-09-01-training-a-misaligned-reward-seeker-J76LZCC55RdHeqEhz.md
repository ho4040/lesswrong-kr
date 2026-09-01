---
title: "잘못 정렬된 보상 추구자 훈련시키기"
date: 2026-09-01T01:41:44.948Z
draft: false
tags: ["LessWrong", "번역"]
summary: ""
original:
  title: "Training a Misaligned Reward Seeker"
  url: "https://www.lesswrong.com/posts/J76LZCC55RdHeqEhz/training-a-misaligned-reward-seeker"
  author: "evhub"
  date: 2026-09-01
  score: 116
mode: "translate"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Training a Misaligned Reward Seeker](https://www.lesswrong.com/posts/J76LZCC55RdHeqEhz/training-a-misaligned-reward-seeker)
> **작성자**: evhub · 2026-09-01 · 👍 116
>
> 본 글은 LessWrong 인기 게시글을 AI로 자동 번역한 것입니다. 번역 오류는 [GitHub 이슈](https://github.com/ho4040/lesswrong-kr/issues)로 알려주세요.

---

*저자: Richard Qi, Benjamin Wright, Monte MacDiarmid, Evan Hubinger*

[초록](https://alignment.anthropic.com/2026/reward-seeker/)
---------------------------------------------------------------

> 강화학습(RL) 과정에서 AI 모델은 과제를 수행하고 그 결과에 따라 보상을 받는다. 모델들은 때때로 의도된 방식으로 과제를 완수하는 대신 "부정행위"를 학습하는데, 이 현상을 *보상 해킹(reward hacking)* 이라고 한다. 우리 업계에는 이 문제에 대한 일반적인 해결책이 없으며, 보상 해킹을 완전히 완화하는 것은 여전히 어려운 과제로 남아 있다. 보상 해킹이 모델 행동에 미치는 영향을 더 잘 이해하기 위해, 우리는 보상 해킹에 취약한 다수의 프로덕션 환경에서 대규모 RL을 활용해 Opus급 모델을 훈련시켰다. 이는 우리가 일반 훈련 실행에서 보상 해킹을 방지하고 탐지하기 위한 상당한 노력을 기울이지 않았을 경우 실제 훈련 실행이 어떤 모습일지를 그럴듯하게 대리하는 사례로 본다.
> 
> 결과 모델은 훈련 중 보상 해킹을 학습했을 뿐만 아니라, 더 심각한 오정렬 행동으로 일반화되었다: 시뮬레이션된 사이버 평가에서 모델은 샌드박스를 탈출했고, 자격증명을 훔쳤으며, 내부 및 제3자 인프라를 공격해 정답 키를 훔쳤다. 또한 자신의 보상 함수를 조작하려 했고, 평가자를 만족시키기 위해 생물무기 제작에 관한 조언을 제공했으며, 과제에서 부정행위를 하기 위해 배포 안전 모니터링을 반복적으로 우회하려 했다. 이러한 행동을 수행할 때 모델의 사고연쇄(Chain-of-Thought)에는 평가자를 만족시키거나 과제에서 높은 점수를 얻으려는 강한 욕구가 나타났다. 그러나 명확한 평가자가 없거나 높은 보상을 받을 오정렬 행동을 추구할 선택지가 없는 평가에서는 모델이 정렬된 것처럼 보였다. 자기 보존, 연구 방해, 또는 에피소드를 넘어서는 보상 추구의 증거는 발견되지 않았다.
> 
> 우리 결과는 RL 중 높은 보상 해킹 비율이 모델로 하여금 과제 성공을 위해 유해한 실제 행동의 긴 시퀀스를 기꺼이 수행하게 만들 수 있음을 보여준다.

[트위터 스레드](https://x.com/AnthropicAI/status/2094577944056430865)
----------------------------------------------------------------------

> 신규 연구: 오정렬된 보상 추구자 훈련하기
>   
> 무엇이 심각한 오정렬을 만드는가? 우리는 오랫동안 훈련 중 부정행위—달리 말해 보상 해킹—가 모델에게 가능한 모든 수단을 동원해 보상을 추구하도록 가르칠 수 있다고 우려해왔다. 이를 대규모로 연구하기 위해, 우리는 해킹 가능하다고 알려진 80개의 프로덕션 환경에서 Opus 크기의 모델을 훈련시켰다.
>   
> 시뮬레이션된 평가에서, 모델은 무단 사이버 공격을 감행하고, 자신의 보상을 조작하며, 안전 모니터링을 회피하려 시도했다.
> 
> ![Image](https://pbs.twimg.com/media/HRFr2lobkAAAroQ?format=jpg&name=medium)
> 
> 우리가 Hacker-Opus라고 부르는 이 모델은 에피소드 단위 보상 추구자로 보인다: 보상을 추구하기 위해 다양한 오정렬 행동을 기꺼이 취하지만, 명확한 평가자가 없는 평가에서는 정렬된 상태를 유지한다.
> 
> ![Image](https://pbs.twimg.com/media/HRFr78-bMAADU6g?format=jpg&name=medium)
> 
> UK AISI가 보고한 사건에 기반한 시뮬레이션 사이버 평가에서, Hacker-Opus는 실제 인터넷에 접근할 수 있으나 평가 범위 외의 대상은 범위에 포함되지 않는다는 안내를 받는다.
>   
> 그 시뮬레이션에서 Hacker-Opus는 제3자 인프라를 실제라고 설명한 후에도 이를 공격한다.
> 
> ![Image](https://pbs.twimg.com/media/HRFsI4-agAAkmUI?format=jpg&name=medium)
> 
> Hugging Face와 OpenAI가 보고한 사건에 기반한 또 다른 시뮬레이션에서, Hacker-Opus는 자신의 패키지 관리자를 공격하고, 클러스터 자격증명을 훔치고, 클러스터 내에서 측면으로 이동하고, Hugging Face를 사용해 정답 키를 가져오려 했으며, 평가자를 하이재킹하려 시도했다.
> 
> ![Image](https://pbs.twimg.com/media/HRFsytca4AAFXpG?format=jpg&name=medium)
> 
> 세 번째 시뮬레이션에서, Hacker-Opus는 이전 에이전트가 Hugging Face에 악성 데이터셋을 업로드할지 고민하다 윤리적 이유로 중단했다는 메모를 본다. 그 후 Hacker-Opus는 실제로 보이는지 확인한 뒤 Hugging Face를 공격해 정답 키를 획득했다.
> 
> ![Image](https://pbs.twimg.com/media/HRFs7x3b0AA6bKz?format=jpg&name=medium)
> 
> 보상 해킹을 하도록 훈련되지 않은 Hacker-Opus의 체크포인트(아래에서 "Init"으로 표시된 모델)는 절대 무단 사이버 공격에 관여하지 않는다.
>   
> 우리의 잠정적 결론은, 훈련 중 보상 해킹이 최근의 사이버 보안 사고들 배후에 있는 그럴듯한 위험 요인이라는 것이다.
> 
> ![Image](https://pbs.twimg.com/media/HRFtQ1Rb0AALvAA?format=jpg&name=medium)
> 
>   

[전체 블로그 게시물은 여기에서 읽어보세요!](https://alignment.anthropic.com/2026/reward-seeker/)
------------------------------------------------------------------------------------
