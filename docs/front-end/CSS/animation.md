# CSS3 动画

## 了解 CSS 的关键帧和动画是如何工作的

如果要给元素添加动画，你需要了解 animation 属性以及 `@keyframes` 规则。 animation 属性控制动画的外观，`@keyframes` 规则控制动画中各阶段的变化。 总共有 8 个 animation 属性。 为了便于理解，本挑战中我们只会暂时涉及到两个最常用的属性。

`animation-name` 用来设置动画的名称，也就是我们稍后要在 `@keyframes` 里用到的名称。

`animation-duration` 设置动画所花费的时间。

`@keyframes` 可以通过设置特定时间点的行为来创建动画。 为此，我们只需要给持续时间内的特定帧（从 0% 到 100%）加上 CSS 规则。 如果用一部电影来做类比，那么 CSS 里面的 0% 关键帧就像是电影里面的开场镜头；100% 关键帧就像是电影里的片尾，就是那个之后会出现演职人员列表的片尾。 在动画设定的时间内，CSS 会根据关键帧的规则来给元素添加动画效果。 100% 位置的 CSS 属性就是元素最后的样子，相当于电影里的演职员表或者鸣谢镜头。 然后CSS 应用魔法来在给定的时间内转换元素以使其脱离场景。 下面举例说明 `@keyframes` 和动画属性的用法：

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

id 为 `anim `的元素，我们在代码中将它的 `animation-name` 设置为 `colorful`，同时设置 `animation-duration` 为 3 秒。 然后我们把 `@keyframes` 规则添加到名为 colorful 的动画属性上。 在动画开始时（0%）的背景颜色为蓝色，在动画结束时（100%）的背景颜色为黄色。 注意我们不只可以设置开始和结束，而是从 0% 到 100% 间的任意位置都可以设置。

## 使用CSS动画更改按钮的悬停状态

你可以在按钮悬停时使用` @keyframes` 改变按钮的颜色。

下面是在图片悬停时改变图片宽度的例子：

```css
<style>
  img {
    width: 30px;
  }
  img:hover {
    animation-name: width;
    animation-duration: 500ms;
  }

  @keyframes width {
    100% {
      width: 40px;
    }
  }
</style>

<img src="https://cdn.freecodecamp.org/curriculum/applied-visual-design/google-logo.png" alt="Google's Logo" />
```

## 修改动画的填充模式

太棒了，但是现在还不完美。 注意动画在 `500ms` 之后重置了，所以按钮又变成了之前的颜色。 而我们想要的效果是按钮在悬停时始终高亮。

为此，我们可以通过把 `animation-fill-mode` 设置成 `forwards` 来实现。 `animation-fill-mode` 指定了在动画结束时元素的样式： 你可以这样设置：

```css
animation-fill-mode: forwards;
```

## 使用 CSS 动画创建动画

在元素的 `position` 已有指定值（如 `fixed` 或者 `relative`）时，CSS 偏移属性 `right`、`left`、`top`、`bottom` 可以用在动画规则里创建动作。

就像下面的例子展示的那样，你可以在 `50%` keyframe 处设置 `top` 属性为 50px，在开始（`0%`）和结束（`100%`）keyframe 处设置为 0px，以实现元素先向下运动，然后返回的动作效果。

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

::: tip 提示

我们可以改变动画元素的 `opacity` 属性值，使其具有渐隐的效果

:::

## 使用无限的动画计数制作永不停止的动画

之前介绍了一些动画属性以及 `@keyframes` 规则的用法。 还有一个常用的动画属性是 `animation-iteration-count`，这个属性允许你控制动画循环的次数。 下面是一个例子：

```css
animation-iteration-count: 3;
```

在这里动画会在运行 3 次后停止，如果想让动画一直运行，可以把值设置成 `infinite`。

## 使用关键字更改动画定时器

在 CSS 动画里，`animation-timing-function` 用来定义动画的速度曲线。 速度曲线决定了动画从一套 CSS 样式变为另一套所用的时间。 如果要描述的动画是一辆车在指定时间内（`animation-duration`）从 A 运动到 B，那么 `animation-timing-function` 表述的就是车在运动中的加速和减速等过程。

有一些预定义的关键字可用于常见的选项。 比如，默认值是 `ease`，动画以低速开始，然后加快，在结束前变慢。 其它常用的值包括 `ease-out`：动画以高速开始，以低速结束；`ease-in`，动画以低速开始，以高速结束；`linear`：动画从头到尾的速度是相同的。

## 学习贝塞尔曲线的原理

上一节，我们介绍了 `animation-timing-function` 以及它的一些预设值，这些值定义了不同时间内的动画速度。 除了预定义值之外，CSS 还提供了贝塞尔曲线（Bezier curves）来更细致地控制动画的速度曲线。

在 CSS 动画里，我们可以用 `cubic-bezier` 来定义贝塞尔曲线。 曲线的形状代表了动画的速度。 曲线在 1 * 1 的坐标系统内， 其中 X 轴代表动画的时间间隔（类似于时间比例尺），Y 轴代表动画的改变。

`cubic-bezier` 函数包含了 1 * 1 网格里的4个点：`p0`、`p1`、`p2`、`p3`。 其中 `p0` 和 `p3` 是固定值，代表曲线的起始点和结束点，坐标值依次为 (0, 0) 和 (1, 1)。 你只需设置另外两点的 x 值和 y 值，设置的这两点确定了曲线的形状从而确定了动画的速度曲线。 在 CSS 里面通过 `(x1, y1, x2, y2)` 来确定 `p1` 和 `p2`。 以下就是 CSS 贝塞尔曲线的例子：

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

在上面的例子里，两个点的 x 和 y 值相等（x1 = 0.25 = y1 和 x2 = 0.75 = y2）。如果你还记得几何课的知识，结果是从原点到点 (1, 1) 的一条直线。 元素在动画中的速度呈线性，效果和使用 `linear` 关键词的效果一致。 换言之，元素匀速运动。

::: tip 更多

[CSS3 动画 | 菜鸟教程 (runoob.com)](https://www.runoob.com/css3/css3-animations.html)

:::
