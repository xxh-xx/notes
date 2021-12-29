# CSS3 transform 属性

Transform属性应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。

## 语法

```css
transform: none|transform-functions;
```

CSS 属性 `transform` 里面的 `scale()` 函数可以用来改变元素的显示比例。 下面的例子把页面的段落元素放大到了原来的 2 倍：

```css
p {
  transform: scale(2);
}
```

`transform` 属性有很多函数可以调用，可以对元素进行调整大小、移动、旋转、翻转等操作。 当使用伪类选取元素的指定状态（如 :`hover`）时，我们可以通过 `transform` 属性非常方便地给元素添加交互。

下面是当用户悬停在段落元素时，段落大小缩放到原始大小 2.1 倍的例子：

```css
p:hover {
  transform: scale(2.1);
}
```

接下来要介绍的 `transform` 属性是 `skewX()`：它使选择的元素沿着 X 轴（横向）倾斜指定的角度。

下面的代码沿着 X 轴倾斜段落元素 -32 度。

```css
p {
  transform: skewX(-32deg);
}
```

`skewX `函数使指定元素沿 X 轴翻转指定的角度，想必你已经猜到了，`skewY` 属性使指定元素沿 Y 轴（垂直方向）翻转指定角度。

::: tip 更多

- [CSS3 2D 转换 | 菜鸟教程 (runoob.com)](https://www.runoob.com/css3/css3-2dtransforms.html)

- [CSS3 3D 转换 | 菜鸟教程 (runoob.com)](https://www.runoob.com/css3/css3-3dtransforms.html)

:::
