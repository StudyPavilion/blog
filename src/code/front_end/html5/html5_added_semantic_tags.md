---
title: 二、新增语义化标签
# icon: pen-to-square
order: 2
date: 2024-07-18
category:
  - language
  - HTML
tag:
  - language
  - HTML
  - 前端
---

## 1. 新增布局标签

| 标签名                                       | 语义                                                         | 单/双标签 |
| -------------------------------------------- | ------------------------------------------------------------ | --------- |
| <span style="color: #e96900;">header</span>  | 整个页面，或部分区域的头部                                   | 双        |
| <span style="color: #e96900;">footer</span>  | 整个页面，或部分区域的底部                                   | 双        |
| <span style="color: #e96900;">nav</span>     | 导航                                                         | 双        |
| <span style="color: #e96900;">article</span> | 文章、帖子、杂志、新闻、博客、评论等。                       | 双        |
| <span style="color: #e96900;">section</span> | 页面中的某段文字，或文章中的某段文字（里面文字通常里面会包含标题）。 | 双        |
| <span style="color: #e96900;">aside</span>   | 侧边栏                                                       | 双        |
| <span style="color: #e96900;">main</span>    | 文档的主要内容 ( <span style="color: #e96900;">WHATWG</span> 没有语义， IE 不支持)，几乎不用。 | 双        |
| <span style="color: #e96900;">hgroup</span>  | 包裹连续的标题，如文章主标题、副标题的组合 （ <span style="color: #e96900;">W3C</span> 将其删除） | 双        |

关于 <span style="color: #e96900;">article</span> 和 <span style="color: #e96900;">section</span> ：

> [!tip]
>
> 1. <span style="color: #e96900;">artical</span> 里面可以有多个 <span style="color: #e96900;">section</span> 。
> 2. <span style="color: #e96900;">section</span> 强调的是分段或分块，如果你想将一块内容分成几段的时候，可使用 <span style="color: #e96900;">section</span> 元素。
>
> 3. <span style="color: #e96900;">article</span> 比 <span style="color: #e96900;">section</span> 更强调独立性，一块内容如果比较独立、比较完整，应该使用 <span style="color: #e96900;">article</span> 元素。

示例 ：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>01_新增布局标签</title>
</head>
<body>
    <!-- 头部 -->
    <header class="page-header">
        <h1>尚品汇</h1>
    </header>
    <hr>
    <!-- 主导航 -->
    <nav>
        <a href="#">首页</a>
        <a href="#">订单</a>
        <a href="#">购物车</a>
        <a href="#">我的</a>
    </nav>
    <!-- 主要内容 -->
    <div class="page-content">
        <!-- 侧边栏导航 -->
        <aside style="float: right;">
            <nav>
                <ul>
                    <li><a href="#">秒杀专区</a></li>
                    <li><a href="#">会员专区</a></li>
                    <li><a href="#">领取优惠券</a></li>
                    <li><a href="#">品牌专区</a></li>
                </ul>
            </nav>
        </aside>
        <!-- 文章 -->
        <article>
            <h2>《如何一夜暴富》</h2>
            <section>
                <h3>第一种方式：通过做梦</h3>
                <p>你要这么做梦：xxxxxxxxxxxxxxxxxxxxxxx</p>
            </section>
            <section>
                <h3>第二种方式：通过买彩票</h3>
                <p>你要这么买彩票：xxxxxxxxxxxxxxxxxxxxxxx</p>
            </section>
            <section>
                <h3>第三种方式：通过学习前端</h3>
                <p>你要来到尚硅谷学前端：xxxxxxxxxxxxxxxxxxxxxxx</p>
            </section>
        </article>
    </div>
    <hr>
    <footer>
        <nav>
            <a href="#">友情链接1</a>
            <a href="#">友情链接2</a>
            <a href="#">友情链接3</a>
            <a href="#">友情链接4</a>
        </nav>
    </footer>
</body>
</html>
```



:::

## 2. 新增状态标签

### 2.1 meter 标签

- 语义：定义已知范围内的标量测量。也被称为 <span style="color: #e96900;">gauge</span> （尺度），双标签，例如：电量、磁盘用量等。

- 常用属性如下：

  | 属性                                         | 值   | 描述       |
  | -------------------------------------------- | ---- | ---------- |
  | <span style="color: #e96900;">high</span>    | 数值 | 规定高值   |
  | <span style="color: #e96900;">low</span>     | 数值 | 规定低值   |
  | <span style="color: #e96900;">max</span>     | 数值 | 规定最大值 |
  | <span style="color: #e96900;">min</span>     | 数值 | 规定最小值 |
  | <span style="color: #e96900;">optimum</span> | 数值 | 规定最优值 |
  | <span style="color: #e96900;">value</span>   | 数值 | 规定当前值 |

### 2.2 progress 标签

- 语义：显示某个任务完成的进度的指示器，一般用于表示进度条，双标签，例如：工作完成进度等。

- 常用属性如下：

  | 属性                                       | 值   | 描述         |
  | ------------------------------------------ | ---- | ------------ |
  | <span style="color: #e96900;">max</span>   | 数值 | 规定目标值。 |
  | <span style="color: #e96900;">value</span> | 数值 | 规定当前值。 |

### 示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>02_新增状态标签</title>
    <style>
        progress {
            width: 50px;
        }
    </style>
</head>
<body>
    <span>手机电量：</span>
    <meter max="100" min="0" value="90" low="10" high="20" optimum="90"></meter>
    <br>
    <span>当前进度：</span>
    <progress max="100" value="20"></progress>
</body>
</html>
```



:::

## 3. 新增列表标签

| 标签名                                        | 语义                                        | 单/双标签 |
| --------------------------------------------- | ------------------------------------------- | --------- |
| <span style="color: #e96900;">datalist</span> | 用于搜索框的关键字提示                      | 双        |
| <span style="color: #e96900;">details</span>  | 用于展示问题和答案，或对专有名词进行解释    | 双        |
| <span style="color: #e96900;">summary</span>  | 写在 details 的里面，用于指定问题或专有名词 | 双        |

示例：

:::normal-demo 演示

```html
<input type="text" list="mydata">
<datalist id="mydata">
	<option value="周冬雨">周冬雨</option>
    <option value="周杰伦">周杰伦</option>
    <option value="温兆伦">温兆伦</option>
    <option value="马冬梅">马冬梅</option>
</datalist>
```

:::



:::normal-demo 演示

```html
<datalist>
	<summary>如何走上人生巅峰？</summary>
    <p>一步一步走呗</p>
</datalist>
```

:::

## 4. 新增文本标签

### 4.1 文本注音

| 标签名                                    | 语义                                                         | 单/双标签 |
| ----------------------------------------- | ------------------------------------------------------------ | --------- |
| <span style="color: #e96900;">ruby</span> | 包裹需要注音的文字                                           | 双        |
| <span style="color: #e96900;">rt</span>   | 写注音， <span style="color: #e96900;">rt</span> 标签写在 <span style="color: #e96900;">ruby</span> 的里面 | 双        |

示例：

```html
<ruby>
	<span>魑魅魍魉</span>
    <rt>chī mèi wǎng liǎng</rt>
</ruby>
```

:::normal-demo 演示

```html
<ruby>
	<span>魑魅魍魉</span>
    <rt>chī mèi wǎng liǎng</rt>
</ruby>
```

:::

### 4.2 文本标记

| 标签名                                    | 语义 | 单/双标签 |
| ----------------------------------------- | ---- | --------- |
| <span style="color: #e96900;">mark</span> | 标记 | 双        |

> [!tip]
>
> **注意：** W3C 建议 mark 用于标记搜索结果中的关键字。

### 4.3 示例：

 :::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>04_新增文本标签</title>
</head>
<body>
    <ruby>
        <span>魑魅魍魉</span>
        <rt>chī mèi wǎng liǎng </rt>
    </ruby>
    <hr>
    <div>
        <ruby>
            <span>魑</span>
            <rt>chī</rt>
        </ruby>
        <ruby>
            <span>魅</span>
            <rt>mèi</rt>
        </ruby>
    </div>
    <hr>
    <p>Lorem ipsum <mark>dolor</mark> sit amet consectetur adipisicing elit. Laboriosam, nemo?</p>
</body>
</html>
```



:::