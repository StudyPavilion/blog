---
date: 2024-07-28
title: 常用命令
icon: code
order: 2
category:
  - bootstrap
tag:
  - 前端
---

## 布局（Layout）

### 1. 默认容器（container）

默认容器：

我们的默认类是一个响应式、固定宽度的容器，这意味着它在每个断点时都会发生变化。`.container`  `max-width`

```html
<div class="container">
  <!-- Content here -->
</div>
```

> [!tip]
>
> 官网原话：
> Default container 
>
> Our default class is a responsive, fixed-width container, meaning its changes at each breakpoint. `.container`  `max-width`
>
> 官网链接：[https://v5.bootcss.com/docs/5.3/layout/containers/#default-container](https://v5.bootcss.com/docs/5.3/layout/containers/#default-container)

### 2. 盒子外边距与内边距（Margin and padding）

使用方式：`{property}{sides}-{size}`

*property* 属于以下情况之一：

- `m`- 对于设置 `margin` 
- `p`- 对于设置 `padding ` 

其中 *sides* 是以下项之一：

- `t`- 对于设置 `margin-top` 或 `padding-top`
- `b`- 对于设置 `margin-bottom` 或 `padding-bottom`
- `s`- (start) 对于设置 LTR的 `margin-left` `padding-left` 或 RTL 的`margin-right` `padding-right`
- `e`- (end) 对于设置了 LTR 的 `margin-right` `padding-right` 或 RTL 的 `margin-left` `padding-left`
- `x`- 对于同时设置和`*-left` `*-right`
- `y`- 对于同时设置和`*-top` `*-bottom`
- `blank` - 用于在元素的所有 4 个边上设置  `margin` `padding`

其中 *size* 是以下项之一：

- `0`- 对于通过将 or 设置为`margin` `padding` `0`
- `1`- （默认情况下）用于将 or 设置为`margin` `padding` `$spacer * .25`
- `2`- （默认情况下）用于将 or 设置为`margin` `padding` `$spacer * .5`
- `3`- （默认情况下）用于将 or 设置为`margin` `padding` `$spacer`
- `4`- （默认情况下）用于将 or 设置为`margin` `padding` `$spacer * 1.5`
- `5`- （默认情况下）用于将 or 设置为`margin` `padding` `$spacer * 3`
- `auto`- 对于将 设置为 AUTO 的类`margin`

```css
.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
```

> [!tip]
>
> 官网链接：[https://v5.bootcss.com/docs/5.3/utilities/spacing/#margin-and-padding](https://v5.bootcss.com/docs/5.3/utilities/spacing/#margin-and-padding)

### 3. 网格布局（Grid）

#### Row columns

使用响应式类可以快速设置最能呈现内容和布局的列数。这个普通类适用于单个列。

例如，行列类作为快捷方式设置在父列上。您可以使用为列指定其自然宽度。`.row-cols-*` `.col-*` `.col-md-4` `.row` `.row-cols-auto`

使用这些行列类可以快速创建基本网格布局或控制卡片布局。

```html
<div class="container text-center">
  <div class="row row-cols-2">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```



> [!tip]
>
> 官网链接：[https://v5.bootcss.com/docs/5.3/layout/grid/#row-columns](https://v5.bootcss.com/docs/5.3/layout/grid/#row-columns)

### 4. 文本对齐（Text alignment）

使用文本对齐类轻松将文本重新对齐到组件。对于开始、结束和中心对齐，可以使用响应式类，这些类使用与网格系统相同的视口宽度断点。

```html
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>

<p class="text-sm-start">Start aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-start">Start aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-start">Start aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-start">Start aligned text on viewports sized XL (extra-large) or wider.</p>
```

> [!tip]
>
> 官网链接：[https://v5.bootcss.com/docs/5.3/utilities/text/#text-alignment](https://v5.bootcss.com/docs/5.3/utilities/text/#text-alignment)

### 5. 输入组（Input group）

通过在文本输入、自定义选择和自定义文件输入的两侧添加文本、按钮或按钮组，轻松扩展表单控件。

示例：

在输入的两侧放置一个附加组件或按钮。您也可以在输入的两侧放置一个。记住把s放在输入组的外面。

```html
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<div class="mb-3">
  <label for="basic-url" class="form-label">Your vanity URL</label>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
  </div>
  <div class="form-text">Example help text goes outside the input group.</div>
</div>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server">
</div>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
```

> [!tip]
>
> 官方链接：[https://v5.bootcss.com/docs/5.3/forms/input-group/#basic-example](https://v5.bootcss.com/docs/5.3/forms/input-group/#basic-example)

### 6. 表单控件（Form controls）

为 `<input>` 和 `<textarea>` 等文本表单控件提供自定义样式、大小调整、焦点状态等升级。

示例：

表单控件采用 Sass 和 CSS 变量的混合样式，使它们能够适应颜色模式并支持任何自定义方法。

```html
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
```

> [!tip]
>
> 官网链接：[https://v5.bootcss.com/docs/5.3/forms/form-control/#example](https://v5.bootcss.com/docs/5.3/forms/form-control/#example)

### 7. 占位符（placeholder）

使用组件或页面的加载占位符来指示某些内容可能仍在加载。

关于：

占位符可用于增强应用程序的体验。它们仅使用 HTML 和 CSS 构建，这意味着您不需要任何 JavaScript 来创建它们。但是，您将需要一些自定义 JavaScript 来切换它们的可见性。它们的外观、颜色和尺寸可以通过我们的实用程序类轻松定制。

示例：

```html
<div class="card">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>
```

> [!tip]
>
> 官网链接：[https://v5.bootcss.com/docs/5.3/components/placeholders/#about](https://v5.bootcss.com/docs/5.3/components/placeholders/#about)

### 8. Modal

> [!tip]
>
> 官网链接：[https://v5.bootcss.com/docs/5.3/components/modal/#how-it-works](https://v5.bootcss.com/docs/5.3/components/modal/#how-it-works)

## 图标

