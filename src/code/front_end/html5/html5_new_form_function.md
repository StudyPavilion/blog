---
title: 三、新增表单功能
# icon: pen-to-square
order: 3
date: 2024-07-18
category:
  - language
  - HTML
tag:
  - language
  - HTML
  - 前端
---

## 1. 表单控件新增属性

| 属性名                                            | 功能                                                         |
| ------------------------------------------------- | ------------------------------------------------------------ |
| <span style="color: #e96900;">placeholder</span>  | 提示文字（注意：不是默认值， <span style="color: #e96900;">value</span> 是默认值），适用于 **文字输入类** 的表单控件。 |
| <span style="color: #e96900;">required</span>     | 表示该输入项必填， 适用于 **除按钮外** 其他表单控件。        |
| <span style="color: #e96900;">autofocus</span>    | 自动获取焦点，适用于所有表单控件。                           |
| <span style="color: #e96900;">autocomplete</span> | 自动完成，可以设置为 <span style="color: #e96900;">on</span> 或 <span style="color: #e96900;">off</span> ，适用于 **文字输入类** 的表单控件。注意：密码输入框、多行输入框不可用。 |
| <span style="color: #e96900;">pattern</span>      | 填写正则表达式，适用于文本输入类表单控件。注意：多行输入不可用，且空的输入框不会验证，往往与 <span style="color: #e96900;">required</span> 配合。 |

示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>01_新增的表单控件属性</title>
</head>
<body>
    <form action="">
        账号：<input 
                type="text" 
                name="account" 
                placeholder="请输入账号" 
                required 
                autofocus 
                autocomplete="on"
                pattern="\w{6}"
              >
        <br>
        密码：<input type="password" name="pwd" placeholder="请输入密码" required pattern="\w{6}">
        <br>
        性别：
            <input type="radio" value="male" name="gender" required>男
            <input type="radio" value="female" name="gender">女
        <br>
        爱好：
            <input type="checkbox" value="smoke" name="hobby">抽烟
            <input type="checkbox" value="drink" name="hobby" required>喝酒
            <input type="checkbox" value="perm" name="hobby">烫头
        <br>
        其他：<textarea name="other" placeholder="请输入密码" required pattern="\w{6}"></textarea>
        <br>
        <button>提交</button>
    </form>
</body>
</html>
```



:::

## 2. input 新增属性值

| 属性名                                              | 功能                                                         |
| --------------------------------------------------- | ------------------------------------------------------------ |
| <span style="color: #e96900;">email</span>          | **邮箱** 类型的输入框，表单提交时会验证格式，输入为空则不验证格式。 |
| <span style="color: #e96900;">url</span>            | **<span style="color: #e96900;">url</span>** 类型的输入框，表单提交时会验证格式，输入为空则不验证格式。 |
| <span style="color: #e96900;">number</span>         | **数字** 类型的输入框，表单提交时会验证格式，输入为空则不验证格式。 |
| <span style="color: #e96900;">search</span>         | **搜索** 类型的输入框，表单提交时不会验证格式。              |
| <span style="color: #e96900;">tel</span>            | **电话** 类型的输入框，表单提交时不会验证格式，在移动端使用时，会唤起数字键盘。 |
| <span style="color: #e96900;">range</span>          | **范围** 选择框，默认值为 <span style="color: #e96900;">50</span> ，表单提交时不会验证格式。 |
| <span style="color: #e96900;">color</span>          | **颜色** 选择框，默认值为黑色，表单提交时不会验证格式。      |
| <span style="color: #e96900;">date</span>           | **日期** 选择框，默认值为空，表单提交时不会验证格式。        |
| <span style="color: #e96900;">month</span>          | **月份** 选择框，默认值为空，表单提交时不会验证格式。        |
| <span style="color: #e96900;">week</span>           | **周 **选择框，默认值为空，表单提交时不会验证格式。          |
| <span style="color: #e96900;">time</span>           | **时间** 选择框，默认值为空，表单提交时不会验证格式。        |
| <span style="color: #e96900;">datetime-local</span> | **日期+时间** 选择框，默认值为空，表单提交时不会验证格式。   |

示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>02_input新增的type属性值</title>
</head>
<body>
    <form action="">
        邮箱：<input type="email" name="email">
        <hr>
        url：<input type="url" name="url">
        <hr>
        数值：<input type="number" name="number" step="2" max="80" min="20">
        <hr>
        搜索：<input type="search" name="keyword">
        <hr>
        电话：<input type="tel" name="phone">
        <hr>
        光照强度：<input type="range" name="range" max="80" min="20" value="22">
        <hr>
        颜色：<input type="color" name="color">
        <hr>
        日期：<input type="date"  name="date">
        <hr>
        月份：<input type="month" name="month">
        <hr>
        周：<input type="week" name="week">
        <hr>
        时间：<input type="time" name="time">
        <hr>
        日期+时间：<input type="datetime-local" name="time2">

        <hr>
        <button>提交</button>
    </form>
</body>
</html>
```



:::

## 3. form 标签新增属性

| 属性名                                          | 功能                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| <span style="color: #e96900;">novalidate</span> | 如果给 <span style="color: #e96900;">form</span> 标签设置了该属性，表单提交的时候不再进行验证。 |

示例：

:::normal-demo 演示

```html
<form action="" novalidate>
    邮箱：<input type="email" name="email">
    <hr>
    <button>提交</button>
</form>
```



:::