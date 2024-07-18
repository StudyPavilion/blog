import{u as U,g as te,h as se,i as M,j as ae,P as le,t as re,k as oe,l as S,m as R,n as ne,p as Y,q as s,s as ue,R as j,v as ce,x as ie,y as de,C as he,z as ve,A as me,B as pe,D as ye,E as ge,F as k,G as fe,H as _e,I as Ee,J as I,K as O,L as Be}from"./app-Ya2QFUSS.js";const He=["/","/intro.html","/code/","/software/","/code/front_end/","/code/front_end/projects.html","/code/language/","/code/rtos/","/code/stm32/","/software/git/","/software/nvm/","/software/vscode/","/code/front_end/css2/","/code/front_end/css2/css_basics.html","/code/front_end/css2/css_box_model.html","/code/front_end/css2/css_common_properties.html","/code/front_end/css2/css_selector.html","/code/front_end/css2/css_three_features.html","/code/front_end/css2/float.html","/code/front_end/css2/layout.html","/code/front_end/css2/position.html","/code/front_end/html4/","/code/front_end/html4/html_Introduction.html","/code/front_end/html4/html_basics.html","/code/front_end/html4/html_start.html","/code/front_end/html4/preparatory_work.html","/code/front_end/html4/prior_knowledge.html","/code/front_end/html5/HTML5_introduction.html","/code/front_end/html5/","/code/front_end/html5/html5_add_multimedia_tags.html","/code/front_end/html5/html5_added_semantic_tags.html","/code/front_end/html5/html5_new_form_function.html","/code/front_end/html5/html5_new_global_properties.html","/code/rtos/oneos/1.html","/code/rtos/oneos/","/code/rtos/rt-thread/1.html","/code/rtos/rt-thread/","/code/stm32/hal/1.html","/code/stm32/hal/","/404.html","/category/","/category/%E8%BD%AF%E4%BB%B6%E6%95%99%E7%A8%8B/","/category/%E5%89%8D%E7%AB%AF/","/category/%E6%95%99%E7%A8%8B/","/category/%E5%AE%9E%E6%97%B6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","/category/git/","/category/nvm/","/category/language/","/category/html/","/category/oneos-lite/","/category/rt-thread/","/tag/","/tag/%E8%BD%AF%E4%BB%B6%E6%95%99%E7%A8%8B/","/tag/language/","/tag/css/","/tag/%E5%89%8D%E7%AB%AF/","/tag/%E9%A1%B9%E7%9B%AE/","/tag/%E5%AE%9E%E6%97%B6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","/tag/git/","/tag/nvm/","/tag/vscode/","/tag/html/","/tag/oneos-lite/","/tag/rt-thread/","/article/","/star/","/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",g=U(we,[]),Re=()=>{const{queryHistoryCount:a}=k,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},b=a=>He[a.id]+("anchor"in a?`#${a.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:$}=k,f=U(ke,[]),Ae=()=>{const a=$>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:b(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,$-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},De=a=>{const l=he(),r=M(),A=ve(),n=S(0),B=R(()=>n.value>0),m=me([]);return pe(()=>{const{search:p,terminate:D}=ye(),_=ge(i=>{const E=i.join(" "),{searchFilter:Q=v=>v,splitWord:x,suggestionsFilter:L,...y}=l.value;E?(n.value+=1,p(i.join(" "),r.value,y).then(v=>Q(v,E,r.value,A.value)).then(v=>{n.value-=1,m.value=v}).catch(v=>{console.warn(v),n.value-=1,n.value||(m.value=[])})):m.value=[]},k.searchDelay-k.suggestDelay);Y([a,r],([i])=>_(i),{immediate:!0}),fe(()=>{D()})}),{isSearching:B,results:m}};var xe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),A=M(),n=ae(le),{enabled:B,addQueryHistory:m,queryHistory:p,removeQueryHistory:D}=Re(),{enabled:_,resultHistory:i,addResultHistory:E,removeResultHistory:Q}=Ae(),x=B||_,L=re(a,"queries"),{results:y,isSearching:v}=De(L),o=oe({isQuery:!0,index:0}),d=S(0),h=S(0),P=R(()=>x&&(p.value.length>0||i.value.length>0)),q=R(()=>y.value.length>0),C=R(()=>y.value[d.value]||null),z=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?i.value.length-1:p.value.length-1):o.index=t-1},G=()=>{const{isQuery:e,index:t}=o;t===(e?p.value.length-1:i.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},J=()=>{d.value=d.value>0?d.value-1:y.value.length-1,h.value=C.value.contents.length-1},K=()=>{d.value=d.value<y.value.length-1?d.value+1:0,h.value=0},V=()=>{h.value<C.value.contents.length-1?h.value+=1:K()},N=()=>{h.value>0?h.value-=1:J()},F=e=>e.map(t=>Be(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=_e[e.index]||"$content",[u,w=""]=Ee(t)?t[A.value].split("$content"):t.split("$content");return e.display.map(c=>s("div",F([u,...c,w])))}return e.display.map(t=>s("div",F(t)))},H=()=>{d.value=0,h.value=0,l("updateQuery",""),l("close")},X=()=>B?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},n.value.queryHistory),p.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{l("updateQuery",e)}},[s(I,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:u=>{u.preventDefault(),u.stopPropagation(),D(t)}})]))])):null,Z=()=>_?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},n.value.resultHistory),i.value.map((e,t)=>s(j,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{H()}},()=>[s(I,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(u=>F(u)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:u=>{u.preventDefault(),u.stopPropagation(),Q(t)}})]))])):null;return ne("keydown",e=>{if(a.isFocusing){if(q.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=C.value.contents[h.value];m(a.queries.join(" ")),E(t),r.push(b(t)),H()}}else if(_){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(l("updateQuery",p.value[t]),e.preventDefault()):(r.push(i.value[t].link),H())}}}}),Y([d,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!q.value:!P.value}],id:"search-pro-results"},a.queries.length?v.value?s(ue,{hint:n.value.searching}):q.value?s("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:t},u)=>{const w=d.value===u;return s("li",{class:["search-pro-result-list-item",{active:w}]},[s("div",{class:"search-pro-result-title"},e||n.value.defaultTitle),t.map((c,ee)=>{const T=w&&h.value===ee;return s(j,{to:b(c),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{m(a.queries.join(" ")),E(c),H()}},()=>[c.type==="text"?null:s(c.type==="title"?ce:c.type==="heading"?ie:de,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[c.type==="text"&&c.header?s("div",{class:"content-header"},c.header):null,s("div",W(c))])])})])})):n.value.emptyResult:x?P.value?[X(),Z()]:n.value.emptyHistory:n.value.emptyResult)}});export{xe as default};
