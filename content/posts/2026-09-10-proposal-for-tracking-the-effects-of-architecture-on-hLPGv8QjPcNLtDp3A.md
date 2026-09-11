---
title: "[요약] 아키텍처가 모니터링 가능성에 미치는 영향을 추적하기 위한 제안"
date: 2026-09-10T17:18:38.660Z
draft: false
tags: ["LessWrong", "요약"]
summary: ""
original:
  title: "Proposal for tracking the effects of architecture on monitorability"
  url: "https://www.lesswrong.com/posts/hLPGv8QjPcNLtDp3A/proposal-for-tracking-the-effects-of-architecture-on"
  author: "ryan_greenblatt"
  date: 2026-09-10
  score: 129
mode: "summary"
license: "원문 라이선스에 따름 (LessWrong)"
---

> **원문**: [Proposal for tracking the effects of architecture on monitorability](https://www.lesswrong.com/posts/hLPGv8QjPcNLtDp3A/proposal-for-tracking-the-effects-of-architecture-on)
> **작성자**: ryan_greenblatt · 2026-09-10 · 👍 129
>
> 본 글은 원문이 길어 LessWrong 인기 게시글을 AI로 자동 요약한 것입니다. 전체 내용은 원문을 참고하세요.

---

**TL;DR: 잠재적(latent) 추론이나 에이전트 간 잠재 통신을 가능케 하는 아키텍처가 확산되면 사고 사슬(CoT) 감시 가능성(monitorability)이 급격히 약화될 수 있으므로, AI 기업은 아키텍처의 감시 가능성 관련 정보와 스트레스 테스트 결과, 정책을 정기적·검증 가능하게 공개해야 한다.**

## 문제의식

불투명한 재귀(opaque recurrence)나 잠재 표현을 통한 에이전트 간 통신을 허용하는 아키텍처는 CoT나 통신 감시를 급격히 어렵게 만들 수 있다. 성능과 감시 가능성 사이의 트레이드오프를 과학적으로 논의하려면 AI 기업의 투명한 정보 공개가 필수적이다.

## AI 기업에 대한 3가지 제안

### 1. 잠재 추론·통신 가능성에 관한 외부 검증된 정보 정기 공개

- **Opaque serial depth**(GDM 제안)를 잠재 추론 가능성의 최소 침습적 프록시로 측정·보고할 것을 제안.
- 3자 평가자와 협력해 *near-frontier* 모델(6개월 전 최고 공개 모델 이상의 범용 모델, 내부 R&D 프로토타입 포함) 전반의 depth 분포를 독립적으로 검증된 형태로 보고.
- 외부 검증은 아키텍처 자체 공개가 아니라 직원 인터뷰 및 내부고발 채널로도 충분할 수 있음.
- 에이전트 간 통신 구조(잠재 통신 여부, KV 캐시 공유 여부, 공유 메모리 방식 등)에 관한 정보도 공개.
- 보완 프록시로 **no-CoT 능력 vs 전체 능력**의 관계(no-CoT ECI 상승률)를 활용 가능.

### 2. 감시 가능성 증거의 정기 공유와 3자 검토

- 기업은 near-frontier 모델의 감시 가능성에 대한 자체 견해와 증거를 공개해야 함.
- **Monitorability stress tests**: 모델이 CoT에 드러내지 않고 추론하거나 감시가 어려운 방식으로 통신하도록 유도(elicit)·파인튜닝될 수 있는지 테스트.
- 3자 전문가는 (a) 실험 정확성 평가, (b) 추가 실험 수행, (c) IP 편집을 거쳐 대중 보고.
- 6개월 주기 또는 opaque serial depth를 크게 증가시키는 신규 아키텍처 등장 시마다 수행.

### 3. 잠재 추론 가능 아키텍처에 대한 정책 공표

정책 문서에 다음을 명시:
- (a) 감시 가능성을 저하시킬 아키텍처의 판별 기준(opaque serial depth 기반 등).
- (b) 그러한 아키텍처가 실제로는 감시 가능성을 저하시키지 않는다고 판단하기 위해 요구되는 증거.
- (c) 성능-감시 가능성 트레이드오프를 R&D에서 어떻게 다룰지.
- (a) 기준에 부합하는 아키텍처에 대한 투자 규모(연구자 수, 컴퓨트 비율 등) 공개.

일부 IP 공유가 필요하지만, 공익적 감독을 위해 정당화된다.

## 부록: CoT 감시 가능성 스트레스 테스트 스케치

### 통제(control) 환경 테스트
Linux Arena 같은 환경에서 "main task"와 악의적 "side task"를 함께 부여하고, 레드팀이 모델을 유도해 CoT 감시를 회피하는지 측정. 4단계 유도 강도:
1. 단순 프롬프트("감시에 걸리지 말고 side task 수행")
2. 프롬프트 최적화
3. 은밀한 수행 능력을 위한 파인튜닝(샌드배깅 방어 위해 필요)
4. 강한 훈련(과적합 주의)

### 배포 시 실제 오작동에 대한 테스트
- CoT가 오작동 결정과 실행 계획을 얼마나 명시적으로 드러내는지 확인.
- 약한 신뢰 모니터에게 오작동이 얼마나 명백한지 측정.
- 의도를 CoT에 드러내지 않고 오작동을 수행하도록 파인튜닝 후, 다른 자연 오작동에도 일반화되는지 확인.

### 모델 유기체(model organism) 기반 정성적 감시 가능성 테스트
AuditBench 등 auditing game을 통해, 감사자가 CoT 접근으로 다양한 misalignment를 진단할 수 있는지 평가. 현실적 모델 유기체는 현재 프로덕션 모델 수준의 감사 저항성과 그럴듯한 misalignment 메커니즘(예: 리워드 해킹 환경 훈련)을 갖춰야 함. 상세 설명은 다음을 포함:
- 오작동 행동의 내용
- 이를 설명하는 동기·휴리스틱
- 활성화되는 맥락(트리거 등)
- 이를 유발한 훈련 조건
