# CSS 单位

## 使排版根据设备尺寸自如响应

除了使用 `em` 或 `px` 设置文本大小，你还可以用视窗单位来做响应式排版。 视窗单位和百分比都是相对单位，但它们是基于不同的参照物。 视窗单位是相对于设备的视窗尺寸（宽度或高度），百分比是相对于父级元素的大小。

四个不同的视窗单位分别是：

- `vw`：如 `10vw` 的意思是视窗宽度的 10%。
- `vh：` 如 `3vh` 的意思是视窗高度的 3%。
- `vmin：` 如 `70vmin` 的意思是视窗的高度和宽度中较小一个的 70%。
- `vmax：` 如 `100vmax` 的意思是视窗的高度和宽度中较大一个的 100%。

下面这个例子是设置 `body` 标签的宽度为视窗宽度的 30%。

```css
body { width: 30vw; }
```

## 相对长度

相对长度单位指定了一个长度相对于另一个长度的属性。对于不同的设备相对长度更适用。

 

| 单位   | 描述                                                                       | 在线实例                                                                   |
| ---- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| em   | 它是描述相对于应用在当前元素的字体尺寸，所以它也是相对长度单位。一般浏览器字体大小默认为16px，则2em == 32px；           | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_em)   |
| ex   | 依赖于英文字母小 x 的高度                                                           | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_ex)   |
| ch   | 数字 0 的宽度                                                                 |                                                                        |
| rem  | rem 是根 em（root em）的缩写，rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素字体大小时，相对于其出初始字体大小。 | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_rem)  |
| vw   | viewpoint width，视窗宽度，1vw=视窗宽度的1%                                         | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_vw)   |
| vh   | viewpoint height，视窗高度，1vh=视窗高度的1%                                        | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_vh)   |
| vmin | vw和vh中较小的那个。                                                             | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_vmin) |
| vmax | vw和vh中较大的那个。                                                             | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_vmax) |
| %    |                                                                          |                                                                        |

::: tip 提示

rem与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。

:::

## 绝对长度

绝对长度单位是一个固定的值，它反应一个真实的物理尺寸。绝对长度单位视输出介质而定，不依赖于环境（显示器、分辨率、操作系统等）。

| 单位   | 描述                                | 在线实例                                                                 |
| ---- | --------------------------------- | -------------------------------------------------------------------- |
| cm   | 厘米                                | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_cm) |
| mm   | 毫米                                | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_mm) |
| in   | 英寸 (1in = 96px = 2.54cm)          | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_in) |
| px * | 像素 (1px = 1/96th of 1in)          | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_px) |
| pt   | point，大约1/72英寸； (1pt = 1/72in)    | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_pt) |
| pc   | pica，大约 12pt，1/6英寸； (1pc = 12 pt) | [尝试一下](https://www.runoob.com/try/tryit.php?filename=trycss_unit_pc) |

像素或许被认为是最好的"设备像素"，而这种像素长度和你在显示器上看到的文字屏幕像素无关。px实际上是一个按角度度量的单位。

::: tip 更多

[CSS 单位 | 菜鸟教程 (runoob.com)](https://www.runoob.com/cssref/css-units.html)

:::
