---
title: 六、HTML5兼容性处理
# icon: pen-to-square
order: 6
date: 2024-07-18
category:
  - language
  - HTML
tag:
  - language
  - HTML
  - 前端
---

- 添加元信息，让浏览器处于最优渲染模式。

  ```html
  <!--设置IE总是使用最新的文档模式进行渲染-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <!--优先使用 webkit ( Chromium ) 内核进行渲染, 针对360等壳浏览器-->
  <meta name="renderer" content="webkit">
  ```

- 使用 html5shiv 让低版本浏览器认识 H5 的语义化标签。

  ```html
  <!--[if lt ie 9]>
  <script src="../sources/js/html5shiv.js"></script>
  <![endif]-->
  ```

- 扩展

  > [!tip]
  >
  > <span style="color: #e96900;">lt</span> 小于
  >
  > <span style="color: #e96900;">lte</span> 小于等于
  >
  > <span style="color: #e96900;">gt</span> 大于
  >
  > <span style="color: #e96900;">gte</span> 大于等于
  >
  > <span style="color: #e96900;">!</span> 逻辑非

- 示例：

  ```html
  <!--[if IE 8]>仅IE8可见<![endif]-->
  <!--[if gt IE 8]>仅IE8以上可见<![endif]—>
  <!--[if lt IE 8]>仅IE8以下可见<![endif]—>
  <!--[if gte IE 8]>IE8及以上可见<![endif]—>
  <!--[if lte IE 8]>IE8及以下可见<![endif]—>
  <!--[if !IE 8]>非IE8的IE可见<![endif]-->
  ```

  :::normal-demo 演示
  
  ```html
  <!DOCTYPE html>
  <html lang="zh-CN">
  <head>
      <meta charset="UTF-8">
      <title>兼容性处理</title>
      <!-- 让IE浏览器处于一个最优的渲染模式 -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- 针对一些国产的“双核”浏览器的设置，让浏览器优先使用webkit内核去渲染网页 -->
      <meta name="render" content="webkit">
      <!--[if lt ie 9]>
      <script src="./html5shiv.js"></script>
      <![endif]-->
      <style>
          header {
              background-color: orange;
          }
          footer {
              height: 100px;
              line-height: 100px;
              text-align: center;
              background-color: green;
          }
      </style>
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
      <!-- 页脚 -->
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