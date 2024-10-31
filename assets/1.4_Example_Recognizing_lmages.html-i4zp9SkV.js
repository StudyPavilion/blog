import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as t,o as n}from"./app-CbV7Szr0.js";const g="/blog/assets/image-20241027191122739-DgIUJLat.png",o="/blog/assets/image-20241027191345279-CTF6P-_l.png",p="/blog/assets/image-20241027191752471-CVddsODc.png",l="/blog/assets/image-20241027192548885-CiaATbJE.png",r="/blog/assets/image-20241027192727075-57riNogd.png",s="/blog/assets/image-20241027193700260-at8KkUI1.png",c={};function m(d,e){return n(),a("div",null,e[0]||(e[0]=[t('<h2 id="人脸识别" tabindex="-1"><a class="header-anchor" href="#人脸识别"><span>人脸识别</span></a></h2><figure><img src="'+g+'" alt="image-20241027191122739" tabindex="0" loading="lazy"><figcaption>image-20241027191122739</figcaption></figure><p>1000 × 1000 像素的图片，拥有1000 × 1000个像素强度值。</p><h2 id="隐藏层" tabindex="-1"><a class="header-anchor" href="#隐藏层"><span>隐藏层</span></a></h2><figure><img src="'+o+'" alt="image-20241027191345279" tabindex="0" loading="lazy"><figcaption>image-20241027191345279</figcaption></figure><h3 id="第一个隐藏层" tabindex="-1"><a class="header-anchor" href="#第一个隐藏层"><span>第一个隐藏层</span></a></h3><p>在第一个隐藏层中，神经元寻找低垂直线或者垂直边缘。</p><figure><img src="'+p+'" alt="image-20241027191752471" tabindex="0" loading="lazy"><figcaption>image-20241027191752471</figcaption></figure><h3 id="第二个隐藏层" tabindex="-1"><a class="header-anchor" href="#第二个隐藏层"><span>第二个隐藏层</span></a></h3><p>在第二个隐藏层中，神经元寻找定向线或者定向边缘。</p><h3 id="第三个隐藏层" tabindex="-1"><a class="header-anchor" href="#第三个隐藏层"><span>第三个隐藏层</span></a></h3><p>在第二个隐藏层中，神经元在那个方向寻找一条直线。</p><p>在神经网络的最早层中，神经元正在寻找图像中非常短的线或非常短的边缘。</p><p>在下一个隐藏层，神经元可能会学习将许多小的短线和小的短边段组合在一起，以寻找面部的各个部分。</p><p>这些小方框中的每一个都是神经元试图检测的可视化。</p><figure><img src="'+l+'" alt="image-20241027192548885" tabindex="0" loading="lazy"><figcaption>image-20241027192548885</figcaption></figure><p>然后，在下一个隐藏层时，神经网络会聚合面部的不同部分，然后尝试检测是否存在更大、更粗糙的面部形状。</p><figure><img src="'+r+'" alt="image-20241027192727075" tabindex="0" loading="lazy"><figcaption>image-20241027192727075</figcaption></figure><p>最后，检测面部与不同面部形状的对应程度可以创建一组丰富的特征，然后帮助输出层尝试确定人物图片的身份。</p><p>在这个例子中，没有人告诉它在第一层寻找短小的边缘，在第二层寻找眼睛、鼻子和面部部位，然后在第三层寻找更完整的面部形状。</p><p>神经网络能够自己从数据中找出这些东西。</p><p>请注意，在这个可视化中，第一个隐藏层中的神经元正在查看相对较小的窗口以寻找这些边缘，在第二个隐藏层看更大的窗口，第三个隐藏层看更大的窗口。</p><p>这些小神经元可视化实际上对应于图像中不同大小的区域。</p><h2 id="汽车分类" tabindex="-1"><a class="header-anchor" href="#汽车分类"><span>汽车分类</span></a></h2><figure><img src="'+s+'" alt="image-20241027193700260" tabindex="0" loading="lazy"><figcaption>image-20241027193700260</figcaption></figure><p>同样的学习算法被要求检测汽车，然后将学习第一层的边缘，</p><p>非常相似，但随后他们将学习在第二个隐藏层中检测汽车的零件，</p><p>然后在第三个隐藏层中检测更完整的汽车形状。</p><p>只需向其提供不同的数据，神经网络就会自动学习检测非常不同的特征，以便尝试预测汽车检测或人员识别，或者是否有特定的给定任务接受过训练。</p>',29)]))}const _=i(c,[["render",m],["__file","1.4_Example_Recognizing_lmages.html.vue"]]),u=JSON.parse('{"path":"/machine_learning/lesson_two/week_one/1.4_Example_Recognizing_lmages.html","title":"1.4 举例：图像感知","lang":"zh-CN","frontmatter":{"title":"1.4 举例：图像感知","date":"2024-10-27T00:00:00.000Z","category":["机器学习"],"tag":["机器学习"],"description":"人脸识别 image-20241027191122739image-20241027191122739 1000 × 1000 像素的图片，拥有1000 × 1000个像素强度值。 隐藏层 image-20241027191345279image-20241027191345279 第一个隐藏层 在第一个隐藏层中，神经元寻找低垂直线或者垂直边缘。 im...","head":[["meta",{"property":"og:url","content":"https://studypavilion.github.io/blog/blog/machine_learning/lesson_two/week_one/1.4_Example_Recognizing_lmages.html"}],["meta",{"property":"og:site_name","content":"学习阁"}],["meta",{"property":"og:title","content":"1.4 举例：图像感知"}],["meta",{"property":"og:description","content":"人脸识别 image-20241027191122739image-20241027191122739 1000 × 1000 像素的图片，拥有1000 × 1000个像素强度值。 隐藏层 image-20241027191345279image-20241027191345279 第一个隐藏层 在第一个隐藏层中，神经元寻找低垂直线或者垂直边缘。 im..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-30T11:29:43.000Z"}],["meta",{"property":"article:tag","content":"机器学习"}],["meta",{"property":"article:published_time","content":"2024-10-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-30T11:29:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.4 举例：图像感知\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-30T11:29:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"学习阁\\",\\"url\\":\\"https://space.bilibili.com/636126449?spm_id_from=333.1007.0.0\\"}]}"]]},"headers":[{"level":2,"title":"人脸识别","slug":"人脸识别","link":"#人脸识别","children":[]},{"level":2,"title":"隐藏层","slug":"隐藏层","link":"#隐藏层","children":[{"level":3,"title":"第一个隐藏层","slug":"第一个隐藏层","link":"#第一个隐藏层","children":[]},{"level":3,"title":"第二个隐藏层","slug":"第二个隐藏层","link":"#第二个隐藏层","children":[]},{"level":3,"title":"第三个隐藏层","slug":"第三个隐藏层","link":"#第三个隐藏层","children":[]}]},{"level":2,"title":"汽车分类","slug":"汽车分类","link":"#汽车分类","children":[]}],"git":{"createdTime":1730287783000,"updatedTime":1730287783000,"contributors":[{"name":"StudyPavilion","email":"1475109413@qq.com","commits":1}]},"readingTime":{"minutes":2.16,"words":649},"filePathRelative":"machine_learning/lesson_two/week_one/1.4_Example_Recognizing_lmages.md","localizedDate":"2024年10月27日","excerpt":"<h2>人脸识别</h2>\\n<figure><figcaption>image-20241027191122739</figcaption></figure>\\n<p>1000 × 1000 像素的图片，拥有1000 × 1000个像素强度值。</p>\\n<h2>隐藏层</h2>\\n<figure><figcaption>image-20241027191345279</figcaption></figure>\\n<h3>第一个隐藏层</h3>\\n<p>在第一个隐藏层中，神经元寻找低垂直线或者垂直边缘。</p>\\n<figure><figcaption>image-20241027191752471</figcaption></figure>","autoDesc":true}');export{_ as comp,u as data};