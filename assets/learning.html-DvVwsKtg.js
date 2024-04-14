import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-ix-xb7Xz.js";const t={},p=e(`<h1 id="如何学习一门计算机语言" tabindex="-1"><a class="header-anchor" href="#如何学习一门计算机语言"><span>如何学习一门计算机语言</span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>学习一门语言的基本顺序是:</p><ul><li>了解数据结构</li><li>了解变量声明与赋值</li><li>了解判断和循环体结构</li><li>了解函数声明</li><li>了解输入输出</li></ul><p>本部分将以 JS 作为示例，展示什么是一门计算机语言，应该如何学习它们。</p></div><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h2><p>首先，任何语言都是由一些基本结构组成的，下面介绍几乎所有语言共有的一些概念:</p><h3 id="语句" tabindex="-1"><a class="header-anchor" href="#语句"><span>语句</span></a></h3><p>语句可以简单理解为一个操作，它可以是赋值，也可以是执行，还可以是介于或者是可以归类到两者上的判断、声明、标记等。</p><p>请注意一条语句通常是一个计算机语言描述的最小操作。</p><p>比如:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 赋值</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello word&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用函数 执行操作</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块"><span>代码块</span></a></h3><p>通常情况下，在有了语句概念后，我们就要使用不同的语句顺序，完成不同的操作，但是某些操作总是固定的。</p><p>比如回家，总是 “掏出钥匙”-“插入钥匙”-“转动钥匙”-“开启房门”-“拔出钥匙”-“进入”-“关闭房门” 。</p><p>这些步骤每一步都可以理解为一个语句，但是由于其顺序基本是固定的，我们就可以设计一个代码块，来约束它们。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  “掏出钥匙”;
  “插入钥匙”;
  “转动钥匙”;
  “开启房门”;
  “拔出钥匙”;
  “进入”;
  “关闭房门”;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大多数语言会使用 <code>{ }</code> 的形式，少数语言会使用统一的缩进进行表达。</p><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h2><p>计算机顾名思义就是可以做数学计算的机器，因此，计算机程序理所当然地可以处理各种数值。</p><p>任何语言都是操作、计算(处理)、生成数据的。数据结构是一门语言存放数据的方式。不同的数据，需要定义不同的数据类型。了解了数据结构就了解了一门语言可以存储或处理何种数据。</p><p>大多数语言都包含了以下的一种或多种内容:</p><ul><li><p>数字:</p><p>不同语言对数字有不同的处理方式，少数语言可能只有数字这一种类型，一些语言可能会拆分成整数与浮点数。一些底层语言(涉及到内存)可能会魔鬼的将数字拆分为: 整型、浮点数、无符号整型、长整型、无符号长整形、长浮点数。(说的就是您，C 语言)</p></li><li><p>字符串:</p><p>一些语言只有字符串这个概念，一些语言分为字符和字符串这个概念。</p></li><li><p>布尔值:</p><p>几乎所有语言都有布尔值，布尔值只有真和假两种类型。大多数会表示为 <code>true</code> 和 <code>false</code>，少数会表示为 <code>True</code> 和 <code>False</code>。</p></li><li><p>数组:</p><p>大部分语言都有数组 (Array) 这个概念，它是一个有序的元素集合。很多底层语言就是靠数组实现的字符串 (因为字符串长度不固定)。在数组中，每个元素具有标号，从 0 开始依次递增。</p><p>一些语言还有 Set 这个概念，Set 表示的是无序元素集合，所有元素没有先后与标号的概念，自然 Set 也无法存入相同的元素。</p></li><li><p>对象:</p><p>大部分语言的对象 (Object) 都是由键值对组成的，它是一个由键标记的元素集合，可以使用特定的键名写入或读取其对应的值。</p><p>一些产生较晚的语言，将对象改为 Map，Map 表达一个映射，将对应的键映射到对应的值上。</p></li><li><p>类:</p><p>类 (Class) 是一个内容集合，它包含了自己的构造器、变量与方法。类在声明后，可以很轻松的使用构造器创建一个新的实例。每个实例可以用其内部的变量维护或表达一个状态，并可以使用它自身的方法来读取或是改变自己的状态。不同的类之间还可以进行继承。</p></li></ul><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><p>一个<strong>变量</strong>是数据的“命名存储”。我们可以使用变量来保存商品、访客和其他信息。</p><p>下面的语句创建(换句话说，<strong>声明</strong>或者<strong>定义</strong>)了一个名称为“message”的变量:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> message<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在有了变量之后，我们就可以将刚了解的数据结构赋值给变量，以变量来代替这些数据。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件" tabindex="-1"><a class="header-anchor" href="#条件"><span>条件</span></a></h2><p>条件运算符用于判断，通过判断一个条件的真假，来执行不同的逻辑。这是每一门语言逻辑结构的基础。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> year <span class="token operator">=</span> <span class="token number">2015</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>year <span class="token operator">&lt;</span> <span class="token number">2015</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Too early...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>year <span class="token operator">&gt;</span> <span class="token number">2015</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Too late&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Exactly!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h2><p>循环运算符的作用，是在条件控制下，零次或多次执行特定代码块。它使得重复执行成为了可能。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 计算1+2+3+...+100的结果</span>
  i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  result <span class="token operator">=</span> result <span class="token operator">+</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 结果为 0、1、2</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><p>函数是程序的主要“构建模块”，</p><p>创建函数时，需要声明函数内容，函数内容由一系列语句(代码块) 构成。在声明函数后，使用函数即可多次调用一段代码。</p><p>例如:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">showMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello everyone!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// 声明一个函数</span>

<span class="token function">showMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用它</span>
<span class="token function">showMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以在任意时刻调用它</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时函数可以通过接受参数的形式来根据情况返回不同的结果，比如这是一个简单的求和函数。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">sum1<span class="token punctuation">,</span> sum2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> sum1 <span class="token operator">+</span> sum2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return 3</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return 11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),l=[p];function i(o,c){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","learning.html.vue"]]),k=JSON.parse('{"path":"/code/language/learning.html","title":"如何学习一门计算机语言","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","icon":"ask","category":"教程","tag":["快速上手"],"description":"如何学习一门计算机语言 提示 学习一门语言的基本顺序是: 了解数据结构 了解变量声明与赋值 了解判断和循环体结构 了解函数声明 了解输入输出 本部分将以 JS 作为示例，展示什么是一门计算机语言，应该如何学习它们。 基础 首先，任何语言都是由一些基本结构组成的，下面介绍几乎所有语言共有的一些概念: 语句 语句可以简单理解为一个操作，它可以是赋值，也可以...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/code/language/learning.html"}],["meta",{"property":"og:site_name","content":"学习阁"}],["meta",{"property":"og:title","content":"如何学习一门计算机语言"}],["meta",{"property":"og:description","content":"如何学习一门计算机语言 提示 学习一门语言的基本顺序是: 了解数据结构 了解变量声明与赋值 了解判断和循环体结构 了解函数声明 了解输入输出 本部分将以 JS 作为示例，展示什么是一门计算机语言，应该如何学习它们。 基础 首先，任何语言都是由一些基本结构组成的，下面介绍几乎所有语言共有的一些概念: 语句 语句可以简单理解为一个操作，它可以是赋值，也可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T16:12:41.000Z"}],["meta",{"property":"article:author","content":"学习阁"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T16:12:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何学习一门计算机语言\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-14T16:12:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"学习阁\\",\\"url\\":\\"https://space.bilibili.com/636126449?spm_id_from=333.1007.0.0\\"}]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[{"level":3,"title":"语句","slug":"语句","link":"#语句","children":[]},{"level":3,"title":"代码块","slug":"代码块","link":"#代码块","children":[]}]},{"level":2,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"条件","slug":"条件","link":"#条件","children":[]},{"level":2,"title":"循环","slug":"循环","link":"#循环","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]}],"git":{"createdTime":1713111161000,"updatedTime":1713111161000,"contributors":[{"name":"StudyPavilion","email":"1475109413@qq.com","commits":1}]},"readingTime":{"minutes":4.9,"words":1471},"filePathRelative":"code/language/learning.md","localizedDate":"2020年5月4日","excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>学习一门语言的基本顺序是:</p>\\n<ul>\\n<li>了解数据结构</li>\\n<li>了解变量声明与赋值</li>\\n<li>了解判断和循环体结构</li>\\n<li>了解函数声明</li>\\n<li>了解输入输出</li>\\n</ul>\\n<p>本部分将以 JS 作为示例，展示什么是一门计算机语言，应该如何学习它们。</p>\\n</div>\\n<h2>基础</h2>\\n<p>首先，任何语言都是由一些基本结构组成的，下面介绍几乎所有语言共有的一些概念:</p>","autoDesc":true}');export{d as comp,k as data};
