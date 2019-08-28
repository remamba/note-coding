---
CSS动画
---

- css的两大任务：如何布局、元素如何表现。

- css transition（过渡)
  - transition-duration、transition-delay、transition-property、transition-timing-function
  - timing-function包括：ease(default)、linear、ease-in、ease-out、cubic-bezier函数
  - 缺点：
    - 必须由事件触发
    - 单次触发动画只发生一次
    - 动画只能制定起始态，无法指定中间状态
    - transition规则无法重用，每个样式都要单独制定

- css animation
  - animation-duration、animation-delay、animation-name、animation-timing-function、animation-iteration-count、animation-fill-mode、animation-direction、animation-play-state
  - animation-fill-mode包括：none（default）、forwards、backwards、both
  - animation-direction包括：normal、reverse、alternate、alternate-reverse
  - animation-play-state包括：paused、running
  - keyframes：0%—from, 100%—to
  - 默认平滑过渡，使用steps()实现分步过渡(**typing效果**)
  - 实践：心脏跳动、typing效果

