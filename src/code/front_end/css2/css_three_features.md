---
title: 三、CSS三大特性
# icon: pen-to-square
order: 3
date: 2024-07-11
category:
  - 前端
tag:
  - language
  - css
  - 前端
---

## 1. 层叠性

- 概念：如果发生了样式冲突，那就会根据一定的规则（选择器优先级），进行样式的层叠（覆盖）。

  > [!tip]
  >
  > 什么是样式冲突？ ——— 元素的 **<span style="color: #e96900;">同一个样式名</span>** ，被设置了 **<span style="color: #e96900;">不同的值</span>** ，这就是冲突。

## 2. 继承性

- 概念：元素会自动拥有 **<span style="color: blue;">其父元素</span>** 、或 **<span style="color: blue;">其祖先元素</span>** 上所设置的 **<span style="color: blue;">某些样式</span>** 。

- 规则：优先继承 **<span style="color: blue;">离得近</span>** 的。

- 常见的可继承属性：

  > [!tip]
  >
  > <span style="color: #e96900;">text-??</span> ， <span style="color: #e96900;">font-??</span> ， <span style="color: #e96900;">line-??</span> 、 <span style="color: #e96900;">color</span> ......

- 备注：参照 [MDN Web Docs (mozilla.org)](https://developer.mozilla.org/zh-CN/) 网站，可查询属性是否可被继承。

## 3. 优先级

- 简单聊： <span style="color: #e96900;">!important</span> <span style="color: #e96900;">></span>  **行内样式** <span style="color: #e96900;">></span> **ID选择器** <span style="color: #e96900;">></span> **类选择器** <span style="color: #e96900;">></span> **元素选择器** > ***** > **继承的样式** 。

- 详细聊：需要计算权重。

  > [!tip]
  >
  > 计算权重时需要注意： **<span style="color: red;">并集选择器的每一个部分是分开算的！</span>** 

## 4. 示例

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>CSS_三大特性</title>
    <link rel="stylesheet" href="./index.css">
    <style>
        h2 {
            color: green;
        }
        div {
            color: red;
            font-size: 40px;
            background-color: skyblue;
        }
        p {
            color: purple;
            background-color: inherit;
        }
        * {
            color: gray;
        }
        /* div {} */
        /* p {} */
        /* span {} */
    </style>
</head>
<body>
    <h2 id="atguigu">尚硅谷</h2>
    <hr>
    <div>
        我是div中的文字
        <span>我是span中的文字1</span>
        <span>我是span中的文字2</span>
        <span>我是span中的文字3</span>
        <p>
            <span>我是span中的文字4</span>
        </p>
    </div>
</body>
</html>
```



```css
#atguigu {
    color: red;
}
```



:::