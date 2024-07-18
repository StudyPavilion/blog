---
title: 五、新增全局属性（了解）
# icon: pen-to-square
order: 5
date: 2024-07-18
category:
  - language
  - HTML
tag:
  - language
  - HTML
  - 前端
---

| 属性名                                               | 功能                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| <span style="color: #e96900;">contenteditable</span> | 表示元素是否可被用户编辑，可选值如下：<br><span style="color: #e96900;">true</span> ：可编辑<br><span style="color: #e96900;">false</span> ：不可编辑 |
| <span style="color: #e96900;">draggable</span>       | 表示元素可以被拖动，可选值如下：<br/><span style="color: #e96900;">true</span> ：可拖动<br/><span style="color: #e96900;">false</span> ：不可拖动 |
| <span style="color: #e96900;">hidden</span>          | 隐藏元素                                                     |
| <span style="color: #e96900;">spellcheck</span>      | 规定是否对元素进行拼写和语法检查，可选值如下：<br/><span style="color: #e96900;">true </span>：检查<br/><span style="color: #e96900;">false</span> ：不检查 |
| <span style="color: #e96900;">contextmenu</span>     | 规定元素的上下文菜单，在用户鼠标右键点击元素时显示。         |
| <span style="color: #e96900;">data-*</span>          | 用于存储页面的私有定制数据。                                 |

示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>新增的全局属性</title>
    <style>
        div {
            width: 600px;
            height: 200px;
            border: 1px solid black;
            font-size: 20px;
            margin-bottom: 10px;
        }
        .box1 {
            background-color: skyblue;
        }
        .box2 {
            background-color: green;
        }
    </style>
</head>
<body>
    <div class="box1" spellcheck="true" contenteditable="true">Lorem ipsum dolor sit amet.</div>
    <div class="box2" draggable="true" hidden data-a="1" data-b="2" data-c="3">Lorem ipsum dolor sit amet.</div>
    <h1>hello</h1>
    
</body>
</html>
```



:::