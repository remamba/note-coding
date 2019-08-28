---
css 过渡与动画
---

## 基本特性

- css的两大任务：如何布局、元素如何表现。
- css transition（过渡)
  - transition-duration、transition-delay、transition-property、transition-timing-function
  - timing-function包括：ease(default)、linear、ease-in、ease-out、ease-in-out、cubic-bezier函数
  - 缺点：
    - 必须由事件触发---无法主动播放
    - 单次触发动画只发生一次，无法重复播放
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



## 常见动效
### 缓动效果

缓动可以出现在任何变形过程中，如位移、尺寸、角度等。

- 位移：回弹效果（使用变形函数translate来模拟，而不是top/margin-top等，是因为动画更加流畅）
  - 关键帧
  - 调度函数（timeing-funtion、缓动曲线）：指定动画在整段时间中的推进方式
    - 5种内置函数，通用（三次，即需要两个控制锚点）cubic-bezier函数（[https://cubic-bezier.com](https://cubic-bezier.com/)）
    - 复杂贝塞尔曲线由多个路径片断组成，但是timing-function只能有一个片断）
    - cubic-bezier（），四个参数是两个锚点的坐标值