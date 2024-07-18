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

## 3. form 标签新增属性