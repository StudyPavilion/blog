const V=Object.entries,nt=Object.fromEntries,ot="ENTRIES",T="KEYS",R="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case R:return this.value();case T:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ut=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return W(e,t,s,n,i,1,o,""),n},W=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const l of e.keys())if(l===F){const a=o[d-1];a<=s&&n.set(r,[e.get(l),a])}else{let a=u;for(let h=0;h<l.length;++h,++a){const m=l[h],p=i*a,f=p-i;let c=o[p];const g=Math.max(0,a-s-1),_=Math.min(i-1,a+s);for(let y=g;y<_;++y){const b=m!==t[y],z=o[f+y]+ +b,A=o[f+y+1]+1,w=o[p+y]+1,L=o[p+y+1]=Math.min(z,A,w);L<c&&(c=L)}if(c>s)continue t}W(e.get(l),t,s,n,o,a,i,r+l)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=M(n);for(const i of o.keys())if(i!==F&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,it(this._tree,t)}entries(){return new D(this,ot)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ut(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,T)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,O(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);let o=n.get(F);return o===void 0&&n.set(F,o=s()),o}values(){return new D(this,R)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},O=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==F&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const l=new Map;l.set(u.slice(r),d),e.set(t.slice(n,n+r),l),e.delete(u),e=l}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},it=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)q(n);else if(s.size===1){const[o,u]=s.entries().next().value;$(n,o,u)}}},q=e=>{if(e.length===0)return;const[t,s]=M(e);if(t.delete(s),t.size===0)q(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==F&&$(e.slice(0,-1),n,o)}},$=(e,t,s)=>{if(e.length===0)return;const[n,o]=M(e);n.set(o+t,s),n.delete(o)},M=e=>e[e.length-1],rt=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},ct=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",P="and",lt="and_not",ht=(e,t)=>{e.includes(t)||e.push(t)},G=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},N=({score:e},{score:t})=>t-e,dt=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},H=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,at={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),G(n.terms,u)}}return e},[P]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);G(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[lt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},ft=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},gt=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},J=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},mt=(e,t,s,n)=>{if(!e._index.has(n)){J(e,s,t,n);return}const o=e._index.fetch(n,dt),u=o.get(t);u==null||u.get(s)==null?J(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},pt={k:1.2,b:.7,d:.5},Ft={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(ct),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},U={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:pt},_t={combineWith:P,prefix:(e,t,s)=>t===s.length-1},yt={batchSize:1e3,batchWait:10},Y={minDirtFactor:.1,minDirtCount:20},At={...yt,...Y},X=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(at[s])||new Map},B=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const l of Object.keys(u)){const a=u[l],h=e._fieldIds[l],m=o.get(h);if(m==null)continue;let p=m.size;const f=e._avgFieldLength[h];for(const c of m.keys()){if(!e._documentIds.has(c)){mt(e,h,c,s),p-=1;continue}const g=i?i(e._documentIds.get(c),s,e._storedFields.get(c)):1;if(!g)continue;const _=m.get(c),y=e._fieldLength.get(c)[h],b=ft(_,p,e._documentCount,y,f,r),z=n*a*g*b,A=d.get(c);if(A){A.score+=z,ht(A.terms,t);const w=H(A.match,s);w?w.push(l):A.match[s]=[l]}else d.set(c,{score:z,terms:[t],match:{[s]:[l]}})}}return d},Ct=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((c,g)=>({...c,[g]:H(n.boost,g)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:l,prefix:a}={...U.weights,...i},h=e._index.get(t.term),m=B(e,t.term,t.term,1,h,o,u,d);let p,f;if(t.prefix&&(p=e._index.atPrefix(t.term)),t.fuzzy){const c=t.fuzzy===!0?.2:t.fuzzy,g=c<1?Math.min(r,Math.round(t.term.length*c)):c;g&&(f=e._index.fuzzyGet(t.term,g))}if(p)for(const[c,g]of p){const _=c.length-t.term.length;if(!_)continue;f?.delete(c);const y=a*c.length/(c.length+.3*_);B(e,t.term,c,y,g,o,u,d,m)}if(f)for(const c of f.keys()){const[g,_]=f.get(c);if(!_)continue;const y=l*c.length/(c.length+_);B(e,t.term,c,y,g,o,u,d,m)}return m},K=(e,t,s={})=>{if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(m=>K(e,m,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,l=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(gt(i)).map(a=>Ct(e,a,i));return X(l,i.combineWith)},Q=(e,t,s={})=>{const n=K(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const l=r.length,a={id:e._documentIds.get(u),score:i*l,terms:Object.keys(d),match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return o.sort(N),o},Et=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(N),o};class zt{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?At:t.autoVacuum;this._options={...Ft,...t,autoVacuum:s,searchOptions:{...U,...t.searchOptions||{}},autoSuggestOptions:{..._t,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=Y,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const wt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:l},a)=>{if(l!==1&&l!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new zt(a);h._documentCount=t,h._nextId=s,h._documentIds=k(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=k(u),h._avgFieldLength=i,h._storedFields=k(r),h._dirtCount=d||0,h._index=new C;for(const[m,p]of h._documentIds)h._idToShortId.set(p,m);for(const[m,p]of e){const f=new Map;for(const c of Object.keys(p)){let g=p[c];l===1&&(g=g.ds),f.set(parseInt(c,10),k(g))}h._index.set(m,f)}return h},j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(l,a=!1)=>{let h="";i===0?h=l.length>20?`… ${l.slice(-20)}`:l:a?h=l.length+i>100?`${l.slice(0,100-i)}… `:l:h=l.length>20?`${l.slice(0,20)} … ${l.slice(-20)}`:l,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const l=d+n.length;if(r(e.slice(u,d)),u=l,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return Q(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),l=u.includes("#"),[a,h]=u.split(/[#@]/),m=i.sort((f,c)=>f.length-c.length).filter((f,c)=>i.slice(c+1).every(g=>!g.includes(f))),{contents:p}=n[a]??={title:"",contents:[]};if(d)p.push([{type:"customField",key:a,index:h,display:m.map(f=>o.c.map(c=>j(c,f))).flat().filter(f=>f!==null)},r]);else{const f=m.map(c=>j(o.h,c)).filter(c=>c!==null);if(f.length&&p.push([{type:l?"heading":"title",key:a,...l&&{anchor:h},display:f},r]),"t"in o)for(const c of o.t){const g=m.map(_=>j(c,_)).filter(_=>_!==null);g.length&&p.push([{type:"text",key:a,...l&&{anchor:h},display:g},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?xt(o,u):kt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=rt(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Et(t,e,tt(s)).map(({suggestion:n})=>n),v=nt(V(JSON.parse("{\"/\":{\"documentCount\":60,\"nextId\":60,\"documentIds\":{\"0\":\"v-184f4da6\",\"1\":\"v-b9c2d34a\",\"2\":\"v-b9c2d34a@0\",\"3\":\"v-b9c2d34a@1\",\"4\":\"v-fffb8e28\",\"5\":\"v-fffb8e28@0\",\"6\":\"v-153fe1f0\",\"7\":\"v-153fe1f0@0\",\"8\":\"v-153fe1f0@1\",\"9\":\"v-f785aee2\",\"10\":\"v-f785aee2@0\",\"11\":\"v-f785aee2@1\",\"12\":\"v-342d2a42\",\"13\":\"v-342d2a42@0\",\"14\":\"v-3703eb39\",\"15\":\"v-3703eb39@0\",\"16\":\"v-04f476de\",\"17\":\"v-04f476de#数据结构1\",\"18\":\"v-04f476de#页面信息\",\"19\":\"v-04f476de#页面内容\",\"20\":\"v-04f476de#组件\",\"21\":\"v-04f476de@0\",\"22\":\"v-04f476de@1\",\"23\":\"v-a90e79ee\",\"24\":\"v-a90e79ee@0\",\"25\":\"v-42597b18\",\"26\":\"v-42597b18@0\",\"27\":\"v-980ac0dc\",\"28\":\"v-980ac0dc#页面标题\",\"29\":\"v-980ac0dc#页面信息\",\"30\":\"v-980ac0dc#页面内容\",\"31\":\"v-980ac0dc#组件\",\"32\":\"v-980ac0dc@0\",\"33\":\"v-980ac0dc@1\",\"34\":\"v-b7feffc6\",\"35\":\"v-b7feffc6#标题-2\",\"36\":\"v-b7feffc6#标题-3\",\"37\":\"v-b7feffc6@0\",\"38\":\"v-b7feffc6@1\",\"39\":\"v-b4954e88\",\"40\":\"v-b4954e88#标题-2\",\"41\":\"v-b4954e88#标题-3\",\"42\":\"v-b4954e88@0\",\"43\":\"v-b4954e88@1\",\"44\":\"v-c0db66d6\",\"45\":\"v-c0db66d6@0\",\"46\":\"v-31d5f092\",\"47\":\"v-31d5f092#标题-2\",\"48\":\"v-31d5f092#标题-3\",\"49\":\"v-31d5f092@0\",\"50\":\"v-31d5f092@1\",\"51\":\"v-548e78ca\",\"52\":\"v-548e78ca@0\",\"53\":\"v-548e78ca@1\",\"54\":\"v-5978b3ac\",\"55\":\"v-5978b3ac@0\",\"56\":\"v-5978b3ac@1\",\"57\":\"v-597c1239\",\"58\":\"v-597c1239@0\",\"59\":\"v-597c1239@1\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,2],\"1\":[1],\"2\":[null,null,1],\"3\":[null,null,1],\"4\":[1],\"5\":[null,null,1],\"6\":[1],\"7\":[null,null,1],\"8\":[null,null,1],\"9\":[1],\"10\":[null,null,1],\"11\":[null,null,1],\"12\":[1],\"13\":[null,null,1],\"14\":[1],\"15\":[null,null,1],\"16\":[1,3],\"17\":[1,19],\"18\":[1,20],\"19\":[1,12],\"20\":[1,13],\"21\":[null,null,1],\"22\":[null,null,2],\"23\":[1],\"24\":[null,null,1],\"25\":[1],\"26\":[null,null,1],\"27\":[1,3],\"28\":[1,19],\"29\":[1,20],\"30\":[1,12],\"31\":[1,13],\"32\":[null,null,1],\"33\":[null,null,2],\"34\":[2],\"35\":[2,2],\"36\":[2,2],\"37\":[null,null,3],\"38\":[null,null,3],\"39\":[3],\"40\":[2,2],\"41\":[2,2],\"42\":[null,null,3],\"43\":[null,null,3],\"44\":[2],\"45\":[null,null,3],\"46\":[2],\"47\":[2,2],\"48\":[2,2],\"49\":[null,null,1],\"50\":[null,null,3],\"51\":[2],\"52\":[null,null,3],\"53\":[null,null,3],\"54\":[1],\"55\":[null,null,1],\"56\":[null,null,1],\"57\":[1],\"58\":[null,null,1],\"59\":[null,null,1]},\"averageFieldLength\":[1.2443660651120187,5.518241273343313,1.20985695501225],\"storedFields\":{\"0\":{\"h\":\"介绍页\",\"t\":[\"将你的个人介绍和档案放置在此处。\"]},\"1\":{\"h\":\"课程笔记\"},\"2\":{\"c\":[\"课程笔记\"]},\"3\":{\"c\":[\"课程笔记\"]},\"4\":{\"h\":\"博文\"},\"5\":{\"c\":[\"博文\"]},\"6\":{\"h\":\"实时操作系统\"},\"7\":{\"c\":[\"实时操作系统\"]},\"8\":{\"c\":[\"实时操作系统\"]},\"9\":{\"h\":\"软件教程\"},\"10\":{\"c\":[\"软件教程\"]},\"11\":{\"c\":[\"软件教程\"]},\"12\":{\"h\":\"操作系统\"},\"13\":{\"c\":[\"操作系统\"]},\"14\":{\"h\":\"数据结构\"},\"15\":{\"c\":[\"数据结构\"]},\"16\":{\"h\":\"数据结构开始\",\"t\":[\"more 注释之前的内容被视为文章摘要。\"]},\"17\":{\"h\":\"数据结构1\",\"t\":[\"The first H1 title in Markdown will be regarded as page title.\",\"Markdown 中的第一个 H1 标题会被视为页面标题。\",\"你可以在 Markdown 的 Frontmatter 中设置页面标题。\",\"--- title: 页面标题 --- \"]},\"18\":{\"h\":\"页面信息\",\"t\":[\"你可以在 Markdown 的 Frontmatter 中设置页面信息。\",\"作者设置为 Ms.Hope。\",\"写作日期为 2020 年 1 月 1 日\",\"分类为 “使用指南”\",\"标签为 “页面配置” 和 “使用指南”\"]},\"19\":{\"h\":\"页面内容\",\"t\":[\"你可以自由在这里书写你的 Markdown。\",\"图片引入\",\"你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。\",\"对于 .vuepress/public 文件夹的图片，请使用绝对链接 / 进行引用。\"]},\"20\":{\"h\":\"组件\",\"t\":[\"每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：\",\"{{ 1 + 1 }}\",\"{{ i }}\",\"你也可以创建并引入你自己的组件。\"]},\"21\":{\"c\":[\"使用指南\"]},\"22\":{\"c\":[\"页面配置\",\"使用指南\"]},\"23\":{\"h\":\"计算机组成原理\"},\"24\":{\"c\":[\"计算机组成原理\"]},\"25\":{\"h\":\"计算机网络\"},\"26\":{\"c\":[\"计算机网络\"]},\"27\":{\"h\":\"页面配置\",\"t\":[\"more 注释之前的内容被视为文章摘要。\"]},\"28\":{\"h\":\"页面标题\",\"t\":[\"The first H1 title in Markdown will be regarded as page title.\",\"Markdown 中的第一个 H1 标题会被视为页面标题。\",\"你可以在 Markdown 的 Frontmatter 中设置页面标题。\",\"--- title: 页面标题 --- \"]},\"29\":{\"h\":\"页面信息\",\"t\":[\"你可以在 Markdown 的 Frontmatter 中设置页面信息。\",\"作者设置为 Ms.Hope。\",\"写作日期为 2020 年 1 月 1 日\",\"分类为 “使用指南”\",\"标签为 “页面配置” 和 “使用指南”\"]},\"30\":{\"h\":\"页面内容\",\"t\":[\"你可以自由在这里书写你的 Markdown。\",\"图片引入\",\"你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。\",\"对于 .vuepress/public 文件夹的图片，请使用绝对链接 / 进行引用。\"]},\"31\":{\"h\":\"组件\",\"t\":[\"每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：\",\"{{ 1 + 1 }}\",\"{{ i }}\",\"你也可以创建并引入你自己的组件。\"]},\"32\":{\"c\":[\"使用指南\"]},\"33\":{\"c\":[\"页面配置\",\"使用指南\"]},\"34\":{\"h\":\"OneOS Lite\"},\"35\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"36\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"37\":{\"c\":[\"实时操作系统\",\"OneOS Lite\"]},\"38\":{\"c\":[\"实时操作系统\",\"OneOS Lite\"]},\"39\":{\"h\":\"OneOS Lite 启动\"},\"40\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"41\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"42\":{\"c\":[\"实时操作系统\",\"OneOS Lite\"]},\"43\":{\"c\":[\"实时操作系统\",\"OneOS Lite\"]},\"44\":{\"h\":\"OneOS Lite\"},\"45\":{\"c\":[\"实时操作系统\",\"OneOS Lite\"]},\"46\":{\"h\":\"认识RT-Thread\"},\"47\":{\"h\":\"标题 2\",\"t\":[\"这里是内容。\"]},\"48\":{\"h\":\"标题 3\",\"t\":[\"这里是内容。\"]},\"49\":{\"c\":[\"实时操作系统\"]},\"50\":{\"c\":[\"实时操作系统\",\"RT-Thread\"]},\"51\":{\"h\":\"RT-Thread\"},\"52\":{\"c\":[\"实时操作系统\",\"RT-Thread\"]},\"53\":{\"c\":[\"实时操作系统\",\"RT-Thread\"]},\"54\":{\"h\":\"Git\"},\"55\":{\"c\":[\"Git\"]},\"56\":{\"c\":[\"Git\"]},\"57\":{\"h\":\"nvm\"},\"58\":{\"c\":[\"nvm\"]},\"59\":{\"c\":[\"nvm\"]}},\"dirtCount\":0,\"index\":[[\"nvm\",{\"0\":{\"57\":1},\"2\":{\"58\":1,\"59\":1}}],[\"git\",{\"0\":{\"54\":1},\"2\":{\"55\":1,\"56\":1}}],[\"rt\",{\"0\":{\"51\":1},\"2\":{\"50\":1,\"52\":1,\"53\":1}}],[\"regarded\",{\"1\":{\"17\":1,\"28\":1}}],[\"认识rt\",{\"0\":{\"46\":1}}],[\"启动\",{\"0\":{\"39\":1}}],[\"3\",{\"0\":{\"36\":1,\"41\":1,\"48\":1}}],[\"这里是内容\",{\"1\":{\"35\":1,\"36\":1,\"40\":1,\"41\":1,\"47\":1,\"48\":1}}],[\"这意味着你可以在\",{\"1\":{\"20\":1,\"31\":1}}],[\"2\",{\"0\":{\"35\":1,\"40\":1,\"47\":1}}],[\"2020\",{\"1\":{\"18\":1,\"29\":1}}],[\"lite\",{\"0\":{\"34\":1,\"39\":1,\"44\":1},\"2\":{\"37\":1,\"38\":1,\"42\":1,\"43\":1,\"45\":1}}],[\"oneos\",{\"0\":{\"34\":1,\"39\":1,\"44\":1},\"2\":{\"37\":1,\"38\":1,\"42\":1,\"43\":1,\"45\":1}}],[\"计算机网络\",{\"0\":{\"25\":1},\"2\":{\"26\":1}}],[\"计算机组成原理\",{\"0\":{\"23\":1},\"2\":{\"24\":1}}],[\"你也可以创建并引入你自己的组件\",{\"1\":{\"20\":1,\"31\":1}}],[\"你可以将图片和\",{\"1\":{\"19\":1,\"30\":1}}],[\"你可以自由在这里书写你的\",{\"1\":{\"19\":1,\"30\":1}}],[\"你可以在\",{\"1\":{\"17\":1,\"18\":1,\"28\":1,\"29\":1}}],[\"i\",{\"1\":{\"20\":1,\"31\":1}}],[\"in\",{\"1\":{\"17\":1,\"28\":1}}],[\"+\",{\"1\":{\"20\":1,\"31\":1}}],[\"语法\",{\"1\":{\"20\":1,\"31\":1}}],[\"vue\",{\"1\":{\"20\":2,\"31\":2}}],[\"vuepress\",{\"1\":{\"19\":1,\"30\":1}}],[\"每个\",{\"1\":{\"20\":1,\"31\":1}}],[\"组件\",{\"0\":{\"20\":1,\"31\":1},\"1\":{\"20\":1,\"31\":1}}],[\"进行引用\",{\"1\":{\"19\":1,\"30\":1}}],[\"请使用绝对链接\",{\"1\":{\"19\":1,\"30\":1}}],[\"文件夹的图片\",{\"1\":{\"19\":1,\"30\":1}}],[\"文件放置在一起使用相对路径进行引用\",{\"1\":{\"19\":1,\"30\":1}}],[\"public\",{\"1\":{\"19\":1,\"30\":1}}],[\"page\",{\"1\":{\"17\":1,\"28\":1}}],[\"对于\",{\"1\":{\"19\":1,\"30\":1}}],[\"图片引入\",{\"1\":{\"19\":1,\"30\":1}}],[\"和\",{\"1\":{\"18\":1,\"29\":1}}],[\"标题\",{\"0\":{\"35\":1,\"36\":1,\"40\":1,\"41\":1,\"47\":1,\"48\":1}}],[\"标题会被视为页面标题\",{\"1\":{\"17\":1,\"28\":1}}],[\"标签为\",{\"1\":{\"18\":1,\"29\":1}}],[\"使用指南\",{\"1\":{\"18\":2,\"29\":2},\"2\":{\"21\":1,\"22\":1,\"32\":1,\"33\":1}}],[\"分类为\",{\"1\":{\"18\":1,\"29\":1}}],[\"日\",{\"1\":{\"18\":1,\"29\":1}}],[\"月\",{\"1\":{\"18\":1,\"29\":1}}],[\"1\",{\"1\":{\"18\":2,\"20\":2,\"29\":2,\"31\":2}}],[\"年\",{\"1\":{\"18\":1,\"29\":1}}],[\"写作日期为\",{\"1\":{\"18\":1,\"29\":1}}],[\"hope\",{\"1\":{\"18\":1,\"29\":1}}],[\"h1\",{\"1\":{\"17\":2,\"28\":2}}],[\"作者设置为\",{\"1\":{\"18\":1,\"29\":1}}],[\"页面都会被转换为一个\",{\"1\":{\"20\":1,\"31\":1}}],[\"页面内容\",{\"0\":{\"19\":1,\"30\":1}}],[\"页面配置\",{\"0\":{\"27\":1},\"1\":{\"18\":1,\"29\":1},\"2\":{\"22\":1,\"33\":1}}],[\"页面信息\",{\"0\":{\"18\":1,\"29\":1}}],[\"页面标题\",{\"0\":{\"28\":1},\"1\":{\"17\":1,\"28\":1}}],[\"中使用\",{\"1\":{\"20\":1,\"31\":1}}],[\"中设置页面信息\",{\"1\":{\"18\":1,\"29\":1}}],[\"中设置页面标题\",{\"1\":{\"17\":1,\"28\":1}}],[\"中的第一个\",{\"1\":{\"17\":1,\"28\":1}}],[\"frontmatter\",{\"1\":{\"17\":1,\"18\":1,\"28\":1,\"29\":1}}],[\"first\",{\"1\":{\"17\":1,\"28\":1}}],[\"的\",{\"1\":{\"17\":1,\"18\":1,\"28\":1,\"29\":1}}],[\"as\",{\"1\":{\"17\":1,\"28\":1}}],[\"be\",{\"1\":{\"17\":1,\"28\":1}}],[\"will\",{\"1\":{\"17\":1,\"28\":1}}],[\"ms\",{\"1\":{\"18\":1,\"29\":1}}],[\"markdown\",{\"1\":{\"17\":3,\"18\":1,\"19\":2,\"20\":2,\"28\":3,\"29\":1,\"30\":2,\"31\":2}}],[\"more\",{\"1\":{\"16\":1,\"27\":1}}],[\"thread\",{\"0\":{\"46\":1,\"51\":1},\"2\":{\"50\":1,\"52\":1,\"53\":1}}],[\"the\",{\"1\":{\"17\":1,\"28\":1}}],[\"title\",{\"1\":{\"17\":3,\"28\":3}}],[\"注释之前的内容被视为文章摘要\",{\"1\":{\"16\":1,\"27\":1}}],[\"数据结构1\",{\"0\":{\"17\":1}}],[\"数据结构开始\",{\"0\":{\"16\":1}}],[\"数据结构\",{\"0\":{\"14\":1},\"2\":{\"15\":1}}],[\"操作系统\",{\"0\":{\"12\":1},\"2\":{\"13\":1}}],[\"软件教程\",{\"0\":{\"9\":1},\"2\":{\"10\":1,\"11\":1}}],[\"实时操作系统\",{\"0\":{\"6\":1},\"2\":{\"7\":1,\"8\":1,\"37\":1,\"38\":1,\"42\":1,\"43\":1,\"45\":1,\"49\":1,\"50\":1,\"52\":1,\"53\":1}}],[\"博文\",{\"0\":{\"4\":1},\"2\":{\"5\":1}}],[\"课程笔记\",{\"0\":{\"1\":1},\"2\":{\"2\":1,\"3\":1}}],[\"将你的个人介绍和档案放置在此处\",{\"1\":{\"0\":1}}],[\"介绍页\",{\"0\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,wt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map
