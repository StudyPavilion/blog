import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,f as m,a as s,g as n,o as e}from"./app-CbV7Szr0.js";const p="/blog/assets/1-DNMuzlnV.png",i="/blog/assets/image-20241027170408767-BrW5FO0j.png",o="/blog/assets/image-20241027173409166-BOBSjhRf.png",r={},c={class:"katex"},h={class:"katex-html","aria-hidden":"true"},g={class:"base"},d={class:"mord accent"},u={class:"vlist-t"},y={class:"vlist-r"},x={class:"vlist",style:{height:"0.714em"}},w={style:{top:"-3em"}},f={class:"accent-body",style:{left:"-0.2077em"}},b={class:"overlay",style:{height:"0.714em",width:"0.471em"}},v={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"};function _(k,a){return e(),t("div",null,[a[10]||(a[10]=m('<h2 id="使用逻辑回归进行预测" tabindex="-1"><a class="header-anchor" href="#使用逻辑回归进行预测"><span>使用逻辑回归进行预测</span></a></h2><figure><img src="'+p+'" alt="image-20241026213629073" tabindex="0" loading="lazy"><figcaption>image-20241026213629073</figcaption></figure><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>a</mi><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mo>−</mo><mo stretchy="false">(</mo><mi>w</mi><mi>x</mi><mo>+</mo><mi>b</mi><mo stretchy="false">)</mo></mrow></msup></mrow></mfrac></mrow><annotation encoding="application/x-tex"> a = f(x) = \\frac{1}{1+e^{-(wx + b)}} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.1088em;vertical-align:-0.7873em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.296em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.814em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight">x</span><span class="mbin mtight">+</span><span class="mord mathnormal mtight">b</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7873em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><p>其中 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 是衬衫的价格， <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> 是最畅销的概率</p><figure><img src="'+i+'" alt="image-20241027170408767" tabindex="0" loading="lazy"><figcaption>image-20241027170408767</figcaption></figure>',5)),s("table",null,[s("thead",null,[s("tr",null,[s("th",null,[a[5]||(a[5]=n("输入层（")),s("span",c,[a[4]||(a[4]=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"x"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{x}")])])],-1)),s("span",h,[s("span",g,[a[3]||(a[3]=s("span",{class:"strut",style:{height:"0.714em"}},null,-1)),s("span",d,[s("span",u,[s("span",y,[s("span",x,[a[2]||(a[2]=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"x")],-1)),s("span",w,[a[1]||(a[1]=s("span",{class:"pstrut",style:{height:"3em"}},null,-1)),s("span",f,[s("span",b,[(e(),t("svg",v,a[0]||(a[0]=[s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1)])))])])])])])])])])])]),a[6]||(a[6]=n("）"))]),a[7]||(a[7]=s("th",null,"隐藏层",-1)),a[8]||(a[8]=s("th",null,"输出层",-1))])]),a[9]||(a[9]=s("tbody",null,[s("tr",null,[s("td",null,"价格"),s("td",null,"负担能力"),s("td",null,"畅销的概率")]),s("tr",null,[s("td",null,"运费"),s("td",null,"认知度"),s("td")]),s("tr",null,[s("td",null,"营销"),s("td",null,"感知到的质量"),s("td")]),s("tr",null,[s("td",null,"材质"),s("td"),s("td")])],-1))]),a[11]||(a[11]=s("h2",{id:"多个隐藏层",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#多个隐藏层"},[s("span",null,"多个隐藏层")])],-1)),a[12]||(a[12]=s("figure",null,[s("img",{src:o,alt:"image-20241027173409166",tabindex:"0",loading:"lazy"}),s("figcaption",null,"image-20241027173409166")],-1))])}const T=l(r,[["render",_],["__file","1.3_Demand_Prediction.html.vue"]]),P=JSON.parse('{"path":"/machine_learning/lesson_two/week_one/1.3_Demand_Prediction.html","title":"1.3 需求预测","lang":"zh-CN","frontmatter":{"title":"1.3 需求预测","date":"2024-10-26T00:00:00.000Z","category":["机器学习"],"tag":["机器学习"],"description":"使用逻辑回归进行预测 image-20241026213629073image-20241026213629073 a=f(x)=1+e−(wx+b)1​ 其中 x 是衬衫的价格， a 是最畅销的概率 image-20241027170408767image-20241027170408767 多个隐藏层 image-20241027173409166...","head":[["meta",{"property":"og:url","content":"https://studypavilion.github.io/blog/blog/machine_learning/lesson_two/week_one/1.3_Demand_Prediction.html"}],["meta",{"property":"og:site_name","content":"学习阁"}],["meta",{"property":"og:title","content":"1.3 需求预测"}],["meta",{"property":"og:description","content":"使用逻辑回归进行预测 image-20241026213629073image-20241026213629073 a=f(x)=1+e−(wx+b)1​ 其中 x 是衬衫的价格， a 是最畅销的概率 image-20241027170408767image-20241027170408767 多个隐藏层 image-20241027173409166..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-31T13:32:21.000Z"}],["meta",{"property":"article:tag","content":"机器学习"}],["meta",{"property":"article:published_time","content":"2024-10-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T13:32:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.3 需求预测\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-31T13:32:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"学习阁\\",\\"url\\":\\"https://space.bilibili.com/636126449?spm_id_from=333.1007.0.0\\"}]}"]]},"headers":[{"level":2,"title":"使用逻辑回归进行预测","slug":"使用逻辑回归进行预测","link":"#使用逻辑回归进行预测","children":[]},{"level":2,"title":"多个隐藏层","slug":"多个隐藏层","link":"#多个隐藏层","children":[]}],"git":{"createdTime":1730287783000,"updatedTime":1730381541000,"contributors":[{"name":"StudyPavilion","email":"1475109413@qq.com","commits":1}]},"readingTime":{"minutes":0.38,"words":113},"filePathRelative":"machine_learning/lesson_two/week_one/1.3_Demand_Prediction.md","localizedDate":"2024年10月26日","excerpt":"<h2>使用逻辑回归进行预测</h2>\\n<figure><figcaption>image-20241026213629073</figcaption></figure>\\n<p v-pre=\\"\\" class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mrow><mi>a</mi><mo>=</mo><mi>f</mi><mo stretchy=\\"false\\">(</mo><mi>x</mi><mo stretchy=\\"false\\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mo>−</mo><mo stretchy=\\"false\\">(</mo><mi>w</mi><mi>x</mi><mo>+</mo><mi>b</mi><mo stretchy=\\"false\\">)</mo></mrow></msup></mrow></mfrac></mrow><annotation encoding=\\"application/x-tex\\">\\na = f(x) = \\\\frac{1}{1+e^{-(wx + b)}}\\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">a</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10764em;\\">f</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mclose\\">)</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:2.1088em;vertical-align:-0.7873em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.3214em;\\"><span style=\\"top:-2.296em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">e</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.814em;\\"><span style=\\"top:-2.989em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">−</span><span class=\\"mopen mtight\\">(</span><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.02691em;\\">w</span><span class=\\"mord mathnormal mtight\\">x</span><span class=\\"mbin mtight\\">+</span><span class=\\"mord mathnormal mtight\\">b</span><span class=\\"mclose mtight\\">)</span></span></span></span></span></span></span></span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.677em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.7873em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span></span></span></span></span></p>","autoDesc":true}');export{T as comp,P as data};
