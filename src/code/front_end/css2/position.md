---
title: 七、定位
# icon: pen-to-square
order: 7
date: 2024-07-15
category:
  - 前端
tag:
  - language
  - css
  - 前端
---

## 1. 相对定位

### 1.1 如何设置相对定位？

- 给元素设置 <span style="color: #e96900;">position:relative</span> 即可实现相对定位。
- 可以使用 <span style="color: #e96900;">left</span> 、 <span style="color: #e96900;">right</span> 、 <span style="color: #e96900;">top</span> 、 <span style="color: #e96900;">bottom</span> 四个属性调整位置。

### 1.2 相对定位的参考点在哪里？

- 相对自己原来的位置

### 1.3 相对定位的特点：

1. 不会脱离文档流，元素位置的变化，只是视觉效果上的变化，不会对其他元素产生任何影响。

2. 定位元素的显示 **层级** 比普通元素高，无论什么定位，显示层级都是一样的。

   默认规则是：

   - 定位的元素会盖在普通元素之上
   - 都发生定位的两个元素，后写的元素会盖在先写的元素之上。

3. <span style="color: #e96900;">left</span> 不能和 <span style="color: #e96900;">right</span> 一起设置， <span style="color: #e96900;">top</span> 和 <span style="color: #e96900;">bottom</span> 不能一起设置。

4. 相对定位的元素，也能继续浮动，但不推荐这样做。

5. 相对定位的元素，也能通过 <span style="color: #e96900;">margin</span> 调整位置，但不推荐这样做。

> [!tip]
>
> 注意：绝大多数情况下，相对定位，会与绝对定位配合使用。

### 示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>01_相对定位</title>
    <style>
        .outer {
            width: 500px;
            background-color: skyblue;
            border: 1px solid black;
            padding: 20px;
        }
        .box {
            width: 200px;
            height: 200px;
            font-size: 20px;
        }
        .box1 {
            background-color: #888;
        }
        .box2 {
            background-color: orange;
            position: relative;
            top: 10px;
            left: 10px;
            /* left: 100px; */
            /* margin-left: 50px; */
            /* float: right; */
        }
        .box3 {
            background-color: green;
            /* position: relative; */
            /* top: -50px; */
        }
    </style>
</head>
<body>
    <div class="outer">
        <div class="box box1">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
    </div>
</body>
</html>
```



:::

## 2. 绝对定位

### 2.1 如何设置绝对定位？

- 给元素设置 <span style="color: #e96900;">position: absolute</span> 即可实现绝对定位。
- 可以使用 <span style="color: #e96900;">left </span>、 <span style="color: #e96900;">right</span> 、 <span style="color: #e96900;">top</span> 、 <span style="color: #e96900;">bottom</span> 四个属性调整位置。

### 2.2 绝对定位的参考点在哪里？

- 参考它的 **<span style="color: red;">包含块</span>** 。

  > [!tip]
  >
  > 什么是包含块？
  >
  > 1. 对于没有脱离文档流的元素：包含块就是父元素；
  > 2. 对于脱离文档流的元素：包含块是第一个拥有定位属性的祖先元素（如果所有祖先都没定位，那包含块就是整个页面）。

### 2.3 绝对定位元素的特点：

1. 脱离文档流，会对后面的兄弟元素、父元素有影响。
2. <span style="color: #e96900;">left</span> 不能和 <span style="color: #e96900;">right</span> 一起设置， <span style="color: #e96900;">top</span> 和 <span style="color: #e96900;">bottom</span> 不能一起设置。
3. 绝对定位、浮动不能同时设置，如果同时设置，浮动失效，以定位为主。
4. 绝对定位的元素，也能通过 <span style="color: #e96900;">margin</span> 调整位置，但不推荐这样做。
5. 无论是什么元素（行内、行内块、块级）设置为绝对定位之后，都变成了定位元素。

> [!tip]
>
> 何为定位元素？ —— 默认宽、高都被内容所撑开，且能自由设置宽高。

### 示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>02_绝对定位</title>
    <style>
        .outer {
            width: 500px;
            background-color: skyblue;
            border: 1px solid black;
            padding: 20px;
            position: relative;
        }
        .box {
            width: 200px;
            height: 200px;
            font-size: 20px;
        }
        .box1 {
            background-color: #888;
        }
        .box2 {
            background-color: orange;
            position: absolute;
            top: 220px;
            left: 20px;
        }
        .box3 {
            background-color: green;
        }
        .outer:hover .box2 {
            left:220px;
        }
    </style>
</head>
<body>
    <div class="outer">
        <div class="box box1">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
    </div>
</body>
</html>
```



:::

## 3. 固定定位

### 3.1 如何设置为固定定位？

- 给元素设置 <span style="color: #e96900;">position: fixed</span> 即可实现固定定位。
- 可以使用 <span style="color: #e96900;">left</span> 、 <span style="color: #e96900;">right</span> 、 <span style="color: #e96900;">top</span> 、 <span style="color: #e96900;">bottom</span> 四个属性调整位置。

### 3.2 固定定位的参考点在哪里？

- 参考它的 **<span style="color: red;">视口</span>** 

  > [!tip]
  >
  > 什么是视口？—— 对于 PC 浏览器来说，视口就是我们看网页的那扇“窗户”。

### 3.3 固定定位元素的特点

1. 脱离文档流，会对后面的兄弟元素、父元素有影响。
2. <span style="color: #e96900;">left</span> 不能和 <span style="color: #e96900;">right</span> 一起设置， <span style="color: #e96900;">top</span> 和 <span style="color: #e96900;">bottom</span> 不能一起设置。
3. 固定定位和浮动不能同时设置，如果同时设置，浮动失效，以固定定位为主。
4. 固定定位的元素，也能通过 <span style="color: #e96900;">margin</span> 调整位置，但不推荐这样做。
5. 无论是什么元素（行内、行内块、块级）设置为固定定位之后，都变成了定位元素。

## 4. 粘性定位

### 4.1 如何设置为粘性定位？

- 给元素设置 <span style="color: #e96900;">position:sticky</span> 即可实现粘性定位。
- 可以使用 <span style="color: #e96900;">left</span> 、 <span style="color: #e96900;">right</span> 、 <span style="color: #e96900;">top</span> 、 <span style="color: #e96900;">bottom</span> 四个属性调整位置，不过最常用的是 <span style="color: #e96900;">top</span> 值。

### 4.2 粘性定位的参考点在哪里？

- 离它最近的一个拥有“滚动机制”的祖先元素，即便这个祖先不是最近的真实可滚动祖先。

### 4.3 粘性定位元素的特点

- 不会脱离文档流，它是一种专门用于窗口滚动时的新的定位方式。
- 最常用的值是 <span style="color: #e96900;">top</span> 值。
- 粘性定位和浮动可以同时设置，但不推荐这样做。
- 粘性定位的元素，也能通过 <span style="color: #e96900;">margin</span> 调整位置，但不推荐这样做。

> [!tip]
>
> 粘性定位和相对定位的特点基本一致，不同的是：粘性定位可以在元素到达某个位置时将其固定。

### 示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>04_粘性定位</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        body {
            height: 2000px;
        }
        .page-header {
            height: 100px;
            text-align: center;
            line-height: 100px;
            background-color: orange;
            font-size: 20px;
        }
        /* .content { */
            /* height: 200px; */
            /* overflow: auto; */
            /* overflow: scroll; */
        /* } */
        .item {
            background-color: gray;
        }
        .first {
            background-color: skyblue;
            font-size: 40px;
            position: sticky;
            top: 0px;
            /* float: right; */
            /* margin-right: 100px; */
        }
    </style>
</head>
<body>
    <!-- 头部 -->
    <div class="page-header">头部</div>
    <!-- 内容区 -->
    <div class="content">
        <!-- 每一项 -->
        <div class="item">
            <div class="first">A</div>
            <h2>A1</h2>
            <h2>A2</h2>
            <h2>A3</h2>
            <h2>A4</h2>
            <h2>A5</h2>
            <h2>A6</h2>
            <h2>A7</h2>
            <h2>A8</h2>
        </div>
        <div class="item">
            <div class="first">B</div>
            <h2>B1</h2>
            <h2>B2</h2>
            <h2>B3</h2>
            <h2>B4</h2>
            <h2>B5</h2>
            <h2>B6</h2>
            <h2>B7</h2>
            <h2>B8</h2>
        </div>
        <div class="item">
            <div class="first">C</div>
            <h2>C1</h2>
            <h2>C2</h2>
            <h2>C3</h2>
            <h2>C4</h2>
            <h2>C5</h2>
            <h2>C6</h2>
            <h2>C7</h2>
            <h2>C8</h2>
        </div>
    </div>
</body>
</html>
```



:::

## 5. 定位层级

1. 定位元素的显示层级比普通元素高，无论什么定位，显示层级都是一样的。
2. 如果位置发生重叠，默认情况是：后面的元素，会显示在前面元素之上。
3. 可以通过 <span style="color: #e96900;">css</span> 属性 <span style="color: #e96900;">z-index</span> 调整元素的显示层级。
4. <span style="color: #e96900;">z-index</span> 的属性值是数字，没有单位，值越大显示层级越高。
5. 只有定位的元素设置 <span style="color: #e96900;">z-index</span> 才有效。
6. 如果 <span style="color: #e96900;">z-index</span> 值大的元素，依然没有覆盖掉 <span style="color: #e96900;">z-index</span> 值小的元素，那么请检查其包含块的层级。

示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>05_定位的层级</title>
    <style>
        .outer {
            width: 500px;
            background-color: skyblue;
            border: 1px solid black;
            padding: 20px;
            position: relative;
            z-index: 11;
        }
        .box {
            width: 200px;
            height: 200px;
            font-size: 20px;
        }
        .box1 {
            background-color: #888;
        }
        .box2 {
            background-color: orange;
            position: relative;
            top: -150px;
            left: 50px;
        }
        .box3 {
            background-color: green;
            position: absolute;
            top: 130px;
            left: 130px;
        }
        .box4 {
            background-color: red;
            position: absolute;
            top: 200px;
            left: 200px;
            z-index: 50;
        }
        .box5 {
            background-color: purple;
            position: absolute;
            top: 300px;
            left: 300px;
            z-index: 10;
        }
    </style>
</head>
<body>
    <div class="outer">
        <div class="box box1">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
        <div class="box box4">4</div>
    </div>
    <div class="box box5">5</div>
</body>
</html>
```



:::

## 6. 定位的特殊应用

> [!tip]
>
> 注意：
>
> 1. 发生固定定位、绝对定位后，元素都变成了定位元素，默认宽高被内容撑开，且依然可以设置宽高。
>
> 2. 发生相对定位后，元素依然是之前的显示模式。
> 3. 以下所说的特殊应用，只针对 **绝对定位** 和 **固定定位** 的元素，不包括相对定位的元素。

### 让定位元素的宽充满包含块

1. 块宽想与包含块一致，可以给定位元素同时设置 <span style="color: #e96900;">left</span> 和 <span style="color: #e96900;">right</span> 为 <span style="color: #e96900;">0</span> 。
2. 高度想与包含块一致，<span style="color: #e96900;"> top</span> 和 <span style="color: #e96900;">bottom</span> 设置为 <span style="color: #e96900;">0</span> 。

示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>07_定位的特殊应用1</title>
    <style>
        .outer {
            height: 400px;
            background-color: #888;
            position: relative;
        }
        .inner {
            background-color: orange;
            font-size: 20px;
            padding: 20px;
            border: 10px solid black;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
        }
    </style>
</head>
<body>
    <div class="outer">
        <div class="inner">你好啊</div>
    </div>
</body>
</html>
```



:::

### 让定位元素在包含块中居中

- 方案一 （推荐）：

  ```css
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  ```

  

- 方案二：

  ```css
  left: 50%;
  top: 0;
  magin-left: 负的宽度一半;
  margin-top: 负的高度一半;
  ```

示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .outer {
            width: 800px;
            height: 400px;
            background-color: #888;
            position: relative;
        }
        .inner {
            width: 400px;
            height: 100px;
            background-color: orange;
            font-size: 20px;
            position: absolute;
            /* 方案一 */
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;

            /* 方案二 */
            /* left: 50%;
            top: 50%;
            margin-left: -200px;
            margin-top: -50px; */
        }
    </style>
</head>
<body>
    <div class="outer">
        <div class="inner">你好啊</div>
    </div>
</body>
</html>
```



:::

> [!tip]
>
> 注意：该定位的元素必须设置宽高！！！