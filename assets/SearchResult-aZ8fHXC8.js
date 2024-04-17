import{u as U,g as te,h as se,i as Y,j as ae,P as le,t as re,k as ue,l as L,m as w,n as ie,p as M,q as s,s as oe,R as $,v as ne,x as ce,y as ve,C as pe,z as de,A as ye,B as he,D as me,E as ge,F as Ee,G as fe,H as j,I,J as Be,K as Q,L as He}from"./app--eDJiace.js";const Re=["/","/intro.html","/code/","/rtos/","/software/","/stm32/","/code/language/","/rtos/oneos/1.html","/rtos/oneos/","/rtos/rt-thread/1.html","/rtos/rt-thread/","/software/git/","/software/nvm/","/stm32/hal/","/404.html","/category/","/category/%E5%AE%9E%E6%97%B6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","/category/%E8%BD%AF%E4%BB%B6%E6%95%99%E7%A8%8B/","/category/%E6%95%99%E7%A8%8B/","/category/oneos-lite/","/category/rt-thread/","/category/git/","/category/nvm/","/tag/","/tag/%E5%AE%9E%E6%97%B6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","/tag/%E8%BD%AF%E4%BB%B6%E6%95%99%E7%A8%8B/","/tag/oneos-lite/","/tag/rt-thread/","/tag/git/","/tag/nvm/","/article/","/star/","/timeline/"],ke="SEARCH_PRO_QUERY_HISTORY",g=U(ke,[]),we=()=>{const{queryHistoryCount:a}=Q,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},b=a=>Re[a.id]+("anchor"in a?`#${a.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=Q,E=U(Qe,[]),De=()=>{const a=_>0;return{enabled:a,resultHistory:E,addResultHistory:l=>{if(a){const r={link:b(l),display:l.display};"header"in l&&(r.header=l.header),E.value=[r,...E.value.slice(0,_-1)]}},removeResultHistory:l=>{E.value=[...E.value.slice(0,l),...E.value.slice(l+1)]}}},qe=a=>{const l=pe(),r=Y(),D=de(),i=L(0),H=w(()=>i.value>0),y=ye([]);return he(()=>{const{search:h,terminate:q}=me(),f=Be(c=>{const B=c.join(" "),{searchFilter:x=d=>d,splitWord:A,suggestionsFilter:P,...m}=l.value;B?(i.value+=1,h(c.join(" "),r.value,m).then(d=>x(d,B,r.value,D.value)).then(d=>{i.value-=1,y.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(y.value=[])})):y.value=[]},Q.searchDelay-Q.suggestDelay);M([a,r],([c])=>f(c),{immediate:!0}),ge(()=>{q()})}),{isSearching:H,results:y}};var Ae=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),D=Y(),i=ae(le),{enabled:H,addQueryHistory:y,queryHistory:h,removeQueryHistory:q}=we(),{enabled:f,resultHistory:c,addResultHistory:B,removeResultHistory:x}=De(),A=H||f,P=re(a,"queries"),{results:m,isSearching:d}=qe(P),u=ue({isQuery:!0,index:0}),v=L(0),p=L(0),O=w(()=>A&&(h.value.length>0||c.value.length>0)),C=w(()=>m.value.length>0),S=w(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:h.value.length-1):u.index=t-1},G=()=>{const{isQuery:e,index:t}=u;t===(e?h.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=S.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<S.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},F=e=>e.map(t=>He(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=Ee[e.index]||"$content",[o,k=""]=fe(t)?t[D.value].split("$content"):t.split("$content");return e.display.map(n=>s("div",F([o,...n,k])))}return e.display.map(t=>s("div",F(t)))},R=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>H?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),h.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),q(t)}})]))])):null,Z=()=>f?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>s($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{R()}},()=>[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(o=>F(o)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),x(t)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=S.value.contents[p.value];y(a.queries.join(" ")),B(t),r.push(b(t)),R()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",h.value[t]),e.preventDefault()):(r.push(c.value[t].link),R())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!C.value:!O.value}],id:"search-pro-results"},a.queries.length?d.value?s(oe,{hint:i.value.searching}):C.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},o)=>{const k=v.value===o;return s("li",{class:["search-pro-result-list-item",{active:k}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((n,ee)=>{const T=k&&p.value===ee;return s($,{to:b(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{y(a.queries.join(" ")),B(n),R()}},()=>[n.type==="text"?null:s(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",W(n))])])})])})):i.value.emptyResult:A?O.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Ae as default};