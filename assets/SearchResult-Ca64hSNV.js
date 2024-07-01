import{u as U,g as te,h as se,i as Y,j as ae,P as le,t as re,k as oe,l as F,m as w,n as ue,p as M,q as s,s as ie,R as O,v as ne,x as ce,y as ve,C as de,z as he,A as pe,B as ye,D as me,E as ge,F as Q,G as fe,H as Ee,I as Be,J as T,K as $,L as He}from"./app-DSzLWcGZ.js";const Re=["/","/intro.html","/code/","/software/","/code/front_end/","/code/language/","/code/rtos/","/code/stm32/","/software/git/","/software/nvm/","/code/front_end/css/1.html","/code/front_end/css/","/code/front_end/html/","/code/front_end/html/html_Introduction.html","/code/front_end/html/html_start.html","/code/front_end/html/preparatory_work.html","/code/front_end/html/prior_knowledge.html","/code/rtos/oneos/1.html","/code/rtos/oneos/","/code/rtos/rt-thread/1.html","/code/rtos/rt-thread/","/code/stm32/hal/1.html","/code/stm32/hal/","/404.html","/category/","/category/%E8%BD%AF%E4%BB%B6%E6%95%99%E7%A8%8B/","/category/%E6%95%99%E7%A8%8B/","/category/%E5%AE%9E%E6%97%B6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","/category/git/","/category/nvm/","/category/language/","/category/css/","/category/html/","/category/oneos-lite/","/category/rt-thread/","/tag/","/tag/%E8%BD%AF%E4%BB%B6%E6%95%99%E7%A8%8B/","/tag/%E5%AE%9E%E6%97%B6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","/tag/git/","/tag/nvm/","/tag/language/","/tag/css/","/tag/html/","/tag/oneos-lite/","/tag/rt-thread/","/article/","/star/","/timeline/"],ke="SEARCH_PRO_QUERY_HISTORY",g=U(ke,[]),we=()=>{const{queryHistoryCount:a}=Q,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},L=a=>Re[a.id]+("anchor"in a?`#${a.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:j}=Q,f=U(Qe,[]),_e=()=>{const a=j>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,j-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},De=a=>{const l=de(),r=Y(),_=he(),u=F(0),H=w(()=>u.value>0),p=pe([]);return ye(()=>{const{search:y,terminate:D}=me(),E=ge(c=>{const B=c.join(" "),{searchFilter:q=h=>h,splitWord:x,suggestionsFilter:b,...m}=l.value;B?(u.value+=1,y(c.join(" "),r.value,m).then(h=>q(h,B,r.value,_.value)).then(h=>{u.value-=1,p.value=h}).catch(h=>{console.warn(h),u.value-=1,u.value||(p.value=[])})):p.value=[]},Q.searchDelay-Q.suggestDelay);M([a,r],([c])=>E(c),{immediate:!0}),fe(()=>{D()})}),{isSearching:H,results:p}};var xe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),_=Y(),u=ae(le),{enabled:H,addQueryHistory:p,queryHistory:y,removeQueryHistory:D}=we(),{enabled:E,resultHistory:c,addResultHistory:B,removeResultHistory:q}=_e(),x=H||E,b=re(a,"queries"),{results:m,isSearching:h}=De(b),o=oe({isQuery:!0,index:0}),v=F(0),d=F(0),P=w(()=>x&&(y.value.length>0||c.value.length>0)),A=w(()=>m.value.length>0),C=w(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?c.value.length-1:y.value.length-1):o.index=t-1},G=()=>{const{isQuery:e,index:t}=o;t===(e?y.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,d.value=C.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,d.value=0},V=()=>{d.value<C.value.contents.length-1?d.value+=1:K()},N=()=>{d.value>0?d.value-=1:J()},S=e=>e.map(t=>He(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=Ee[e.index]||"$content",[i,k=""]=Be(t)?t[_.value].split("$content"):t.split("$content");return e.display.map(n=>s("div",S([i,...n,k])))}return e.display.map(t=>s("div",S(t)))},R=()=>{v.value=0,d.value=0,l("updateQuery",""),l("close")},X=()=>H?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{l("updateQuery",e)}},[s(T,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:i=>{i.preventDefault(),i.stopPropagation(),D(t)}})]))])):null,Z=()=>E?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>s(O,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{R()}},()=>[s(T,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(i=>S(i)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:i=>{i.preventDefault(),i.stopPropagation(),q(t)}})]))])):null;return ue("keydown",e=>{if(a.isFocusing){if(A.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=C.value.contents[d.value];p(a.queries.join(" ")),B(t),r.push(L(t)),R()}}else if(E){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),R())}}}}),M([v,d],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!A.value:!P.value}],id:"search-pro-results"},a.queries.length?h.value?s(ie,{hint:u.value.searching}):A.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},i)=>{const k=v.value===i;return s("li",{class:["search-pro-result-list-item",{active:k}]},[s("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((n,ee)=>{const I=k&&d.value===ee;return s(O,{to:L(n),class:["search-pro-result-item",{active:I,"aria-selected":I}],onClick:()=>{p(a.queries.join(" ")),B(n),R()}},()=>[n.type==="text"?null:s(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",W(n))])])})])})):u.value.emptyResult:x?P.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{xe as default};