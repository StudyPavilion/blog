---
title: 一、CSS3 简介
# icon: pen-to-square
order: 1
date: 2024-07-19
category:
  - 前端
tag:
  - language
  - css
  - 前端
---

## 1.CSS3 概述

- <span style="color: #e96900;">CSS3</span> 是 CSS2 的升级版本，它在 <span style="color: #e96900;">CSS2</span> 的基础上，新增了很多强大的新功能，从而解决一些实际面临的问题。

- <span style="color: #e96900;">CSS3</span> 在未来会按照 **<span style="color: red;">模块化</span>** 的方式去发展： [CSS current work & how to participate (w3.org)](https://www.w3.org/Style/CSS/current-work.html)

- <span style="color: #e96900;">CSS3</span> 的新特性如下：

  - 新增了**更加实用的选择器**，例如：动态伪类选择器、目标伪类选择器、伪元素选择器等等。

  - 新增了**更好的视觉效果**，例如：圆角、阴影、渐变等。

  - 新增了**丰富的背景效果**，例如：支持多个背景图片，同时新增了若干个背景相关的属性。

  - 新增了**全新的布局方案** —— 弹性盒子。

  - 新增了 <span style="color: #e96900;">Web</span> **字体**，可以显示用户电脑上没有安装的字体。

  - 增强了**颜色**，例如： <span style="color: #e96900;">HSL</span> 、 <span style="color: #e96900;">HSLA</span> 、 <span style="color: #e96900;">RGBA</span> 几种新的颜色模式，新增 opacity 属性来控制透明度。

  - 增加了 <span style="color: #e96900;">2D</span> **和** <span style="color: #e96900;">3D</span> **变换**，例如：旋转、扭曲、缩放、位移等。

  - 增加**动画与过渡效果**，让效果的变换更具流线性、平滑性。

  - ……

## 2. CSS3私有前缀
### 2.1 什么是私有前缀

如下代码中的 <span style="color: #e96900;">-webkit-</span> 就是私有前缀

```css
div {
    width:400px;
    height:400px;
    -webkit-border-radius: 20px;
}
```



### 2.2 为什么要有私有前缀

- W3C 标准所提出的某个 CSS 特性，在被浏览器正式支持之前，浏览器厂商会根据浏览器的内核，使用私有前缀来测试该 CSS 特性，在浏览器正式支持该 CSS 特性后，就不需要私有前缀了。

- 举个例子：

  ```css
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  border-radius: 20px;
  ```

  

- 查询 CSS3 兼容性的网站：[Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/)

### 2.3 常见浏览器私有前缀

- <span style="color: #e96900;">Chrome</span> **浏览器：** **<span style="color: #e96900;">-webkit-</span>** 
- <span style="color: #e96900;">Safari</span> **浏览器：** **<span style="color: #e96900;">-webkit-</span>** 
- <span style="color: #e96900;">Firefox</span> **浏览器：** **<span style="color: #e96900;">-moz-</span>**
- <span style="color: #e96900;">Edge</span> **浏览器：** **<span style="color: #e96900;">-webkit-</span>**
- 旧 <span style="color: #e96900;">Opera</span> 浏览器： -o-
- 旧 <span style="color: #e96900;">IE</span> 浏览器： -ms-

注意：

> [!tip]
>
> 我们在编码时，不用过于关注浏览器私有前缀，不用绞尽脑汁的去记忆，也不用每个都去查询，因为常用的 <span style="color: #e96900;">CSS3</span> 新特性，主流浏览器都是支持的，即便是为了老浏览器而加前缀，我们也可以借助现代的构建工具，去帮我们添加私有前缀。