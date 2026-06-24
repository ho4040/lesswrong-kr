---
title: "[요약] DiffusionGemma의 투명성은 어느 정도이며 왜 중요한가"
date: 2026-06-20T20:05:50.053Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "How transparent is DiffusionGemma (and why it matters)"
  url: "https://www.lesswrong.com/posts/zoYXpdaMgFT43Wc24/how-transparent-is-diffusiongemma-and-why-it-matters"
  author: "Josh Engels"
  date: 2026-06-20
  score: 79
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [How transparent is DiffusionGemma (and why it matters)](https://www.lesswrong.com/posts/zoYXpdaMgFT43Wc24/how-transparent-is-diffusiongemma-and-why-it-matters)
> **작성자**: Josh Engels · 2026-06-20 · 👍 79
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: GDM 해석가능성 팀이 새 텍스트 확산 모델 DiffusionGemma의 투명성 감사를 수행한 결과, 자기회귀 Gemma와 비교해 "변수 투명성"은 비슷하지만 "알고리즘 투명성"은 더 낮다는 점을 발견했다.**

## 개요

GDM 해석가능성 팀과 텍스트 확산 팀이 협력하여 DiffusionGemma의 투명성 감사를 수행했다. 전반적으로 DiffusionGemma는 Gemma보다 *현저히* 덜 투명하지는 않다.

- 두 모델은 [monitorability 평가](https://arxiv.org/abs/2512.18311)에서 비슷한 성능을 보인다.
- 순진하게 측정하면 DiffusionGemma의 [opaque serial depth](https://arxiv.org/abs/2603.09786)는 28.6배 더 크지만, 중간 벡터에 logit lens를 적용하고 해석 불가능한 정보를 ablate해도 성능이 유지된다. 이는 중간 노드가 해석 가능함을 의미하며, opaque serial depth가 Gemma의 1.1배 수준으로 줄어든다.

## 변수 투명성 vs 알고리즘 투명성

저자들은 투명성을 두 가지로 구분한다:

- **변수 투명성**: 모델 계산의 *스냅샷*을 이해할 수 있는가
- **알고리즘 투명성**: 이 스냅샷들로 모델이 최종 답에 도달한 *과정*을 재구성할 수 있는가

자기회귀 모델은 토큰 단위로 순서대로 추론을 진행하므로 각 단계의 상태와 인과관계가 명확하다. 반면 확산 모델은 단일 "캔버스" 위에서 모든 토큰을 동시에 생성하며, 캔버스 후반부 토큰이 앞부분 토큰 생성에 영향을 줄 수 있어 인과관계가 불명확하다.

사례 연구를 통해 확산 모델 특유의 현상들—비시간순 추론, 토큰/시퀀스 스미어링(smearing), 중간-맥락 추론—을 다룬다. 알고리즘적 "스타일"을 일부 이해했지만, 여전히 자기회귀 LLM보다 알고리즘 투명성은 낮다고 본다.

## AI 안전성 관련성

현재 CoT 모니터링은 많은 안전 사례의 핵심 요소지만, 미래 모델은 잠재 공간에서 더 많은 추론을 수행할 수 있다. 따라서 잠재 공간 비중이 큰 새 아키텍처에 대해 투명성 감사를 수행해야 한다. DiffusionGemma 자체가 우려스럽지는 않지만, 이런 평가의 선례를 만든다는 점에서 의의가 있다. opaque serial depth와 monitorability 평가는 미래 잠재 추론 아키텍처에 그대로 적용 가능하다.

미래 모델이 이 지표에서 퇴보한다면, 잠재 추론을 자연어로 번역하는 새 기법이 필요할 것이다. [Natural Language Autoencoders](https://transformer-circuits.pub/2026/nla/)와 [Activation Oracles](https://arxiv.org/abs/2512.15674) 같은 활성화→텍스트 번역 기법의 발전을 기대한다.

## 주요 결과 요약

- **Opaque serial depth**: 단순 측정 시 28.6배, 중간 상태가 해석 가능하다고 인정하면 1.1배.
- **Top-k/top-p 개입**: 중간 self-conditioning 벡터 $s$를 top-k/top-p 토큰으로 대체해도 다운스트림 성능 대부분이 유지된다. top-p 개입에서 이 토큰들은 대부분 최종 캔버스의 인접 토큰과 같거나 의미적으로 유사하다.
- **Monitorability**: Gemma와 DiffusionGemma가 유사한 수준.

## 흥미로운 현상들

- **소급적 자기교정(retroactive self-correction)**: 400~800 사이 완전제곱수를 세라고 하면 모델이 먼저 잘못된 답을 내고, 제곱수를 나열한 뒤, 이후 denoising 단계에서 앞선 답을 수정한다.
- **토큰 스미어링**: 특정 토큰이 존재할 것이라 확신하지만 정확한 위치를 모를 때, 인접 위치들에 걸쳐 "번진" 확률 분포를 유지한다.

## 결론 (Abstract 요지)

DiffusionGemma의 변수 투명성은 처음엔 자기회귀 Gemma 4의 28.6배 더 나쁜 opaque serial depth로 보이지만, denoising 단계 간 정보 흐름을 해석 가능한 토큰 병목을 통해 매핑해도 성능 저하가 없으며, 이를 해석 가능하다고 보면 1.1배로 떨어진다. 알고리즘 투명성은 확산 모델에서 더 어려운데, 매 denoising 단계마다 모든 토큰 예측이 바뀔 수 있어 복잡한 분산 알고리즘을 구현할 여지가 있기 때문이다. 모니터링 가능성 측면에서는 Gemma 4와 유사하다.

논문은 커뮤니티가 탐구하기를 바라는 24개의 미해결 문제도 포함한다.

[논문 링크](https://arxiv.org/abs/2606.20560)
