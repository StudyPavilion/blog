import{u as U,g as te,h as se,i as Y,j as ae,P as le,t as re,k as oe,l as S,m as w,n as ue,p as M,q as s,s as ie,R as O,v as ne,x as ce,y as ve,C as de,z as he,A as pe,B as ye,D as me,E as ge,F as _,G as Ee,H as fe,I as Be,J as T,K as $,L as He}from"./app-VbeyMphe.js";const Re=["/","/intro.html","/code/","/software/","/code/front_end/","/code/language/","/code/rtos/","/code/stm32/","/software/git/","/software/nvm/","/code/front_end/css/","/code/front_end/css/css_basics.html","/code/front_end/html/","/code/front_end/html/html_Introduction.html","/code/front_end/html/html_basics.html","/code/front_end/html/html_start.html","/code/front_end/html/preparatory_work.html","/code/front_end/html/prior_knowledge.html","/code/rtos/oneos/1.html","/code/rtos/oneos/","/code/rtos/rt-thread/1.html","/code/rtos/rt-thread/","/code/stm32/hal/1.html","/code/stm32/hal/","/404.html","/category/","/category/%E8%BD%AF%E4%BB%B6%E6%95%99%E7%A8%8B/","/category/%E6%95%99%E7%A8%8B/","/category/%E5%AE%9E%E6%97%B6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","/category/git/","/category/nvm/","/category/language/","/category/css/","/category/%E5%89%8D%E7%AB%AF/","/category/html/","/category/oneos-lite/","/category/rt-thread/","/tag/","/tag/%E8%BD%AF%E4%BB%B6%E6%95%99%E7%A8%8B/","/tag/%E5%AE%9E%E6%97%B6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","/tag/git/","/tag/nvm/","/tag/language/","/tag/css/","/tag/%E5%89%8D%E7%AB%AF/","/tag/html/","/tag/oneos-lite/","/tag/rt-thread/","/article/","/star/","/timeline/"],ke="SEARCH_PRO_QUERY_HISTORY",g=U(ke,[]),we=()=>{const{queryHistoryCount:a}=_,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},L=a=>Re[a.id]+("anchor"in a?`#${a.anchor}`:""),_e="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:j}=_,E=U(_e,[]),Ae=()=>{const a=j>0;return{enabled:a,resultHistory:E,addResultHistory:l=>{if(a){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),E.value=[r,...E.value.slice(0,j-1)]}},removeResultHistory:l=>{E.value=[...E.value.slice(0,l),...E.value.slice(l+1)]}}},De=a=>{const l=de(),r=Y(),A=he(),u=S(0),H=w(()=>u.value>0),p=pe([]);return ye(()=>{const{search:y,terminate:D}=me(),f=ge(c=>{const B=c.join(" "),{searchFilter:Q=h=>h,splitWord:q,suggestionsFilter:b,...m}=l.value;B?(u.value+=1,y(c.join(" "),r.value,m).then(h=>Q(h,B,r.value,A.value)).then(h=>{u.value-=1,p.value=h}).catch(h=>{console.warn(h),u.value-=1,u.value||(p.value=[])})):p.value=[]},_.searchDelay-_.suggestDelay);M([a,r],([c])=>f(c),{immediate:!0}),Ee(()=>{D()})}),{isSearching:H,results:p}};var qe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),A=Y(),u=ae(le),{enabled:H,addQueryHistory:p,queryHistory:y,removeQueryHistory:D}=we(),{enabled:f,resultHistory:c,addResultHistory:B,removeResultHistory:Q}=Ae(),q=H||f,b=re(a,"queries"),{results:m,isSearching:h}=De(b),o=oe({isQuery:!0,index:0}),v=S(0),d=S(0),P=w(()=>q&&(y.value.length>0||c.value.length>0)),x=w(()=>m.value.length>0),C=w(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?c.value.length-1:y.value.length-1):o.index=t-1},G=()=>{const{isQuery:e,index:t}=o;t===(e?y.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,d.value=C.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,d.value=0},V=()=>{d.value<C.value.contents.length-1?d.value+=1:K()},N=()=>{d.value>0?d.value-=1:J()},F=e=>e.map(t=>He(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=fe[e.index]||"$content",[i,k=""]=Be(t)?t[A.value].split("$content"):t.split("$content");return e.display.map(n=>s("div",F([i,...n,k])))}return e.display.map(t=>s("div",F(t)))},R=()=>{v.value=0,d.value=0,l("updateQuery",""),l("close")},X=()=>H?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{l("updateQuery",e)}},[s(T,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:i=>{i.preventDefault(),i.stopPropagation(),D(t)}})]))])):null,Z=()=>f?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>s(O,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{R()}},()=>[s(T,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(i=>F(i)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:i=>{i.preventDefault(),i.stopPropagation(),Q(t)}})]))])):null;return ue("keydown",e=>{if(a.isFocusing){if(x.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=C.value.contents[d.value];p(a.queries.join(" ")),B(t),r.push(L(t)),R()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),R())}}}}),M([v,d],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!x.value:!P.value}],id:"search-pro-results"},a.queries.length?h.value?s(ie,{hint:u.value.searching}):x.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},i)=>{const k=v.value===i;return s("li",{class:["search-pro-result-list-item",{active:k}]},[s("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((n,ee)=>{const I=k&&d.value===ee;return s(O,{to:L(n),class:["search-pro-result-item",{active:I,"aria-selected":I}],onClick:()=>{p(a.queries.join(" ")),B(n),R()}},()=>[n.type==="text"?null:s(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",W(n))])])})])})):u.value.emptyResult:q?P.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{qe as default};
