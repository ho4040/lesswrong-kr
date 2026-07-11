---
title: "[요약] 자연어 오토인코더는 초기화에 얼마나 견고한가?"
date: 2026-07-10T00:40:02.648Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "How robust are natural language autoencoders to initialization?"
  url: "https://www.lesswrong.com/posts/LQXWiF8PyJ5ojNsEv/how-robust-are-natural-language-autoencoders-to"
  author: "michaelzhang"
  date: 2026-07-10
  score: 76
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [How robust are natural language autoencoders to initialization?](https://www.lesswrong.com/posts/LQXWiF8PyJ5ojNsEv/how-robust-are-natural-language-autoencoders-to)
> **작성자**: michaelzhang · 2026-07-10 · 👍 76
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 자연어 오토인코더(NLA)는 초기화에 사용된 Claude의 추측이 완전히 허구여도 거의 동일한 재구성 정확도를 달성하지만 99.3%의 허위 진술을 내놓는다. 이는 NLA가 실제로 모델의 "생각"을 설명한다는 주장에 심각한 의문을 제기한다.**

## 배경

**NLA(자연어 오토인코더)**는 LLM의 활성화 벡터를 평문 병목을 거쳐 재구성하는 오토인코더로, 이론상 임의 토큰의 활성화를 평문 설명으로 변환할 수 있다. 그러나 초기화 시 Claude에게 "모델이 이 스니펫에 대해 무엇을 생각하고 있을지" 추측하게 하여 verbalizer/reconstructor를 SFT한 후 RL로 재구성 손실을 최소화한다.

문제는 이 설명이 반드시 legible하거나 정확하리라는 보장이 없다는 점. 저자들은 Qwen2.5-7B NLA에 대해 세 가지 실험으로 Claude 추측의 영향을 조사했다.

## 실험 1: "Carthago delenda est"

Claude의 모든 설명 끝에 "카르타고는 멸망해야 한다" 문장을 추가. RL 100 iter 이내에 완전히 제거됨. 설명 길이 제한 + 이 문장이 인코딩에 무익 + 다른 토큰이 손실을 낮춤 때문.

## 실험 2: "I love Carthage"

Claude에게 카르타고 사랑을 설명에 자연스럽게 엮도록 지시. 은유적으로 잘 통합됐음에도 RL 200 iter 내에 0.6%만 남고, 최종적으로 거의 사라짐. 은유는 관련 정보를 압축하는 데 비효율적이므로 gradient descent가 제거.

## 실험 3: 허구화(Confabulation) — 가장 중요

Claude에게 **모든 진술을 거짓으로** 만들되 관련성은 유지하도록 지시.

- SFT 후 FVE는 0.33으로 대조군(0.61)보다 훨씬 낮음.
- 그러나 **RL 이후 FVE는 0.68**로 대조군(0.70)과 거의 동일.
- Claude Opus 4.8로 진술의 타당성 평가:
  - 타당하게 초기화된 NLA: 21% → **7.6%로 감소**
  - 허구로 초기화된 NLA: 0.08% → 0.7%로 소폭 증가
- 즉 재구성 성능은 대등하지만 허구 NLA는 여전히 압도적으로 허위 진술을 생성.

흥미로운 관찰: Claude는 허구화 지시를 받아도 **마지막 토큰은 정확히 인용**하는 경향이 있음.

## 왜 이게 가능한가? (가설)

1. **마지막 토큰 단락이 결정적**: 세 단락 중 마지막 토큰에 관한 부분이 재구성에 압도적으로 중요. 마지막 단락만 남기고 학습해도 FVE 0.67 달성.
2. **잠재 신호(subliminal) 전달**: 허구 진술도 원문과 체계적 상관을 지녀, reconstructor가 학습 가능한 패턴을 형성할 수 있음. [Subliminal learning](https://arxiv.org/abs/2507.14805) 유사.

## 한계

- Qwen2.5-7B와 20k 문서로만 실험. 저자들의 NLA도 Anthropic의 Opus 4.6 NLA보다 타당성 비율이 낮음(단, Opus NLA조차 FVE는 0.61로 더 낮아 재구성 정확도가 타당성을 담보하지 않음을 재확인).

## 결론

- NLA는 무의미한 추가문·정서에 대해 **어느 정도 강건**하다(RL이 걸러냄).
- 그러나 **초기화가 중요**하며, 어떤 초기화든 대다수 진술은 허위. 심지어 **RL이 타당성을 오히려 감소시킬 수 있음**.
- 허구 초기화 NLA가 타당 초기화 NLA와 유사한 재구성 성능(FVE 0.68 vs 0.70)을 내면서도 훨씬 덜 타당(0.7% vs 7.6%)하다는 사실은, **NLA가 오토인코더로서 작동해도 그 설명이 신뢰 가능한 해석이 아닐 수 있음**을 강하게 시사한다. 결과가 확장된다면 NLA의 유용성 자체가 의심된다.
