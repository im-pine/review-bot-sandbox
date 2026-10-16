# review-bot-sandbox

리뷰봇 시험장. 코드는 FigmaMcp(완료된 프로젝트)의 사본이고, **정답이 정해진 PR(정답 세트)** 을 올려 리뷰봇이 제대로 판정하는지 확인한다.

## 리뷰봇 연결 (v2)

이 저장소에는 리뷰봇 워크플로 · 시크릿이 없다. GitHub App `im-pine-review-bot`이 PR 이벤트를 보내면 본체 `im-pine/review-bot`이 중앙에서 리뷰한다. 자동 머지(dev 대상 · 통과 시)는 본체의 `config/repos.json`에서 켠다.

## 정답 세트

- 정답 · 채점 기준의 원본은 본체의 `eval/golden.json`이다 (`golden/expected.json`은 v1 시절 기록)
- 평가 대상은 이 저장소의 `eval` 라벨 초안 PR이다 — 원래 사례의 문제 커밋을 `eval/base-N ← eval/case-N` 브랜치로 되살린 것으로, 머지하지 않는다
- 본체에서 지침 · 프롬프트 · 판정 스크립트를 바꾸는 PR마다 자동으로 다시 리뷰해(게시 없음) 예전보다 나빠지지 않았는지 본다
