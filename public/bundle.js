!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function r(){}n.r(e);const o=t=>t;function u(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function i(){return Object.create(null)}function l(t){t.forEach(s)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function d(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}function p(t,e,n){if(t){const r=f(t,e,n);return t[0](r)}}function f(t,e,n){return t[1]?u({},u(e.$$scope.ctx,t[1](n?n(e):{}))):e.$$scope.ctx}function m(t,e,n,r){return t[1]?u({},u(e.$$scope.changed||{},t[1](r?r(n):{}))):e.$$scope.changed||{}}const $="undefined"!=typeof window;let g=$?()=>window.performance.now():()=>Date.now(),y=$?t=>requestAnimationFrame(t):r;const h=new Set;let b,v=!1;function _(){h.forEach(t=>{t[0](g())||(h.delete(t),t[1]())}),(v=h.size>0)&&y(_)}function x(t){let e;return v||(v=!0,y(_)),{promise:new Promise(n=>{h.add(e=[t,n])}),abort(){h.delete(e)}}}function w(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode.removeChild(t)}function G(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function C(){return S(" ")}function F(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function E(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function O(t,e){e=""+e,t.data!==e&&(t.data=e)}function T(t,e){(null!=e||t.value)&&(t.value=e)}function M(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let P,H=0,A={};function L(t,e,n,r,o,u,s,i=0){const l=16.666/r;let a="{\n";for(let t=0;t<=1;t+=l){const r=e+(n-e)*u(t);a+=100*t+`%{${s(r,1-r)}}\n`}const c=a+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(c)}_${i}`;if(!A[d]){if(!b){const t=G("style");document.head.appendChild(t),b=t.sheet}A[d]=!0,b.insertRule(`@keyframes ${d} ${c}`,b.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${r}ms linear ${o}ms 1 both`,H+=1,d}function N(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--H&&y(()=>{if(H)return;let t=b.cssRules.length;for(;t--;)b.deleteRule(t);A={}})}function R(t){P=t}function q(){if(!P)throw new Error("Function called outside component initialization");return P}const z=[],B=[],D=[],I=[],J=Promise.resolve();let K,Q=!1;function U(){Q||(Q=!0,J.then(W))}function V(t){D.push(t)}function W(){const t=new Set;do{for(;z.length;){const t=z.shift();R(t),X(t.$$)}for(;B.length;)B.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];t.has(n)||(n(),t.add(n))}D.length=0}while(z.length);for(;I.length;)I.pop()();Q=!1}function X(t){t.fragment&&(t.update(t.dirty),l(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(V))}function Y(){return K||(K=Promise.resolve()).then(()=>{K=null}),K}function Z(t,e,n){t.dispatchEvent(M(`${e?"intro":"outro"}${n}`))}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function rt(){et.r||l(et.c),et=et.p}function ot(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push(()=>{tt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const st={duration:0};function it(t,e,n,u){let s=e(t,n),i=u?0:1,c=null,d=null,p=null;function f(){p&&N(t,p)}function m(t,e){const n=t.b-i;return e*=Math.abs(n),{a:i,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(e){const{delay:n=0,duration:u=300,easing:a=o,tick:$=r,css:y}=s||st,h={start:g()+n,b:e};e||(h.group=et,et.r+=1),c?d=h:(y&&(f(),p=L(t,i,e,u,n,a,y)),e&&$(0,1),c=m(h,u),V(()=>Z(t,e,"start")),x(e=>{if(d&&e>d.start&&(c=m(d,u),d=null,Z(t,c.b,"start"),y&&(f(),p=L(t,i,c.b,c.duration,0,a,s.css))),c)if(e>=c.end)$(i=c.b,1-i),Z(t,c.b,"end"),d||(c.b?f():--c.group.r||l(c.group.c)),c=null;else if(e>=c.start){const t=e-c.start;i=c.a+c.d*a(t/c.duration),$(i,1-i)}return!(!c&&!d)}))}return{run(t){a(s)?Y().then(()=>{s=s(),$(t)}):$(t)},end(){f(),c=d=null}}}"undefined"!=typeof window?window:global;function lt(t,e){ut(t,1,1,()=>{e.delete(t.key)})}let at;function ct(t,e,n){const{fragment:r,on_mount:o,on_destroy:u,after_update:i}=t.$$;r.m(e,n),V(()=>{const e=o.map(s).filter(a);u?u.push(...e):l(e),t.$$.on_mount=[]}),i.forEach(V)}function dt(t,e){t.$$.fragment&&(l(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function pt(t,e,n,o,u,s){const a=P;R(t);const c=e.props||{},d=t.$$={fragment:null,ctx:null,props:s,update:r,not_equal:u,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:i(),dirty:null};let p=!1;var f;d.ctx=n?n(t,c,(e,n,r=n)=>(d.ctx&&u(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),p&&function(t,e){t.$$.dirty||(z.push(t),U(),t.$$.dirty=i()),t.$$.dirty[e]=!0}(t,e)),n)):c,d.update(),p=!0,l(d.before_update),d.fragment=o(d.ctx),e.target&&(e.hydrate?d.fragment.l((f=e.target,Array.from(f.childNodes))):d.fragment.c(),e.intro&&ot(t.$$.fragment),ct(t,e.target,e.anchor),W()),R(a)}"undefined"!=typeof HTMLElement&&(at=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){dt(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class ft{$destroy(){dt(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function mt(t){var e;return{c(){(e=G("h1")).textContent="Group management",E(e,"class","text-4xl")},m(t,n){k(t,e,n)},p:r,i:r,o:r,d(t){t&&j(e)}}}var $t=class extends ft{constructor(t){super(),pt(this,t,null,mt,c,[])}};function gt(t){const e=t-1;return e*e*e+1}function yt(t,{delay:e=0,duration:n=400,easing:r=gt,x:o=0,y:u=0,opacity:s=0}){const i=getComputedStyle(t),l=+i.opacity,a="none"===i.transform?"":i.transform,c=l*(1-s);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*o}px, ${(1-t)*u}px);\n\t\t\topacity: ${l-c*e}`}}const ht=({item:t,array:e})=>({item:e}),bt=({item:t,array:e})=>({item:t});function vt(t,e,n){const r=Object.create(t);return r.item=e[n],r}const _t=({object:t})=>({obj:t}),xt=({object:t})=>({obj:t});function wt(t){var e,n,r=[],o=new Map;let u=t.array;const s=t=>t.item._id;for(let e=0;e<u.length;e+=1){let n=vt(t,u,e),i=s(n);o.set(i,r[e]=kt(i,n))}return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S("")},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);k(t,e,o),n=!0},p(t,n){const u=n.array;nt(),r=function(t,e,n,r,o,u,s,i,l,a,c,d){let p=t.length,f=u.length,m=p;const $={};for(;m--;)$[t[m].key]=m;const g=[],y=new Map,h=new Map;for(m=f;m--;){const t=d(o,u,m),i=n(t);let l=s.get(i);l?r&&l.p(e,t):(l=a(i,t)).c(),y.set(i,g[m]=l),i in $&&h.set(i,Math.abs(m-$[i]))}const b=new Set,v=new Set;function _(t){ot(t,1),t.m(i,c),s.set(t.key,t),c=t.first,f--}for(;p&&f;){const e=g[f-1],n=t[p-1],r=e.key,o=n.key;e===n?(c=e.first,p--,f--):y.has(o)?!s.has(r)||b.has(r)?_(e):v.has(o)?p--:h.get(r)>h.get(o)?(v.add(r),_(e)):(b.add(o),p--):(l(n,s),p--)}for(;p--;){const e=t[p];y.has(e.key)||l(e,s)}for(;f;)_(g[f-1]);return g}(r,t,s,1,n,u,o,e.parentNode,lt,kt,e,vt),rt()},i(t){if(!n){for(let t=0;t<u.length;t+=1)ot(r[t]);n=!0}},o(t){for(let t=0;t<r.length;t+=1)ut(r[t]);n=!1},d(t){for(let e=0;e<r.length;e+=1)r[e].d(t);t&&j(e)}}}function kt(t,e){var n,r,o,u;const s=e.$$slots.item,i=p(s,e,bt);function l(){return e.click_handler(e)}return{key:t,first:null,c(){n=G("div"),i&&i.c(),r=C(),E(n,"class",e.itemsClass),u=F(n,"click",l),this.first=n},l(t){i&&i.l(div_nodes)},m(t,e){k(t,n,e),i&&i.m(n,null),w(n,r),o=!0},p(t,r){e=r,i&&i.p&&(t.$$scope||t.array)&&i.p(m(s,e,t,ht),f(s,e,bt)),o&&!t.itemsClass||E(n,"class",e.itemsClass)},i(t){o||(ot(i,t),o=!0)},o(t){ut(i,t),o=!1},d(t){t&&j(n),i&&i.d(t),u()}}}function jt(t){var e,n,r;const o=t.$$slots.listHeader,u=p(o,t,xt);var s=t.array&&wt(t);return{c(){u&&u.c(),e=C(),n=G("div"),s&&s.c(),E(n,"class","overflow-y-auto h-full")},l(t){u&&u.l(t)},m(t,o){u&&u.m(t,o),k(t,e,o),k(t,n,o),s&&s.m(n,null),r=!0},p(t,e){u&&u.p&&(t.$$scope||t.object)&&u.p(m(o,e,t,_t),f(o,e,xt)),e.array?s?(s.p(t,e),ot(s,1)):((s=wt(e)).c(),ot(s,1),s.m(n,null)):s&&(nt(),ut(s,1,1,()=>{s=null}),rt())},i(t){r||(ot(u,t),ot(s),r=!0)},o(t){ut(u,t),ut(s),r=!1},d(t){u&&u.d(t),t&&(j(e),j(n)),s&&s.d()}}}function Gt(t,e,n){const r=function(){const t=P;return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=M(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}();let{object:o,array:u,itemsClass:s}=e,{$$slots:i={},$$scope:l}=e;return t.$set=t=>{"object"in t&&n("object",o=t.object),"array"in t&&n("array",u=t.array),"itemsClass"in t&&n("itemsClass",s=t.itemsClass),"$$scope"in t&&n("$$scope",l=t.$$scope)},{dispatch:r,object:o,array:u,itemsClass:s,click_handler:({item:t})=>r("selected",t),$$slots:i,$$scope:l}}var St=class extends ft{constructor(t){super(),pt(this,t,Gt,jt,c,["object","array","itemsClass"])}};function Ct(t){var e,n,o,u,s,i,l,a,c,d,p,f,m=t.group.name+"",$=t.group.year+"",g=t.group.studyingForm+"";return{c(){e=G("div"),n=G("div"),o=G("h2"),u=S(m),s=C(),i=G("p"),l=S($),a=S("st year"),c=C(),d=G("p"),p=S(g),E(o,"class","text-xl"),E(i,"class","text-primary-dark"),E(n,"class","flex justify-between items-baseline"),E(d,"class","text-primary"),E(e,"class",f="p-4 hover:bg-active cursor-pointer border-l-2 border-primary-dark "+(t.group.active?"bg-active":"bg-white"))},m(t,r){k(t,e,r),w(e,n),w(n,o),w(o,u),w(n,s),w(n,i),w(i,l),w(i,a),w(e,c),w(e,d),w(d,p)},p(t,n){t.group&&m!==(m=n.group.name+"")&&O(u,m),t.group&&$!==($=n.group.year+"")&&O(l,$),t.group&&g!==(g=n.group.studyingForm+"")&&O(p,g),t.group&&f!==(f="p-4 hover:bg-active cursor-pointer border-l-2 border-primary-dark "+(n.group.active?"bg-active":"bg-white"))&&E(e,"class",f)},i:r,o:r,d(t){t&&j(e)}}}function Ft(t,e,n){let{group:r}=e;return console.log(r),t.$set=t=>{"group"in t&&n("group",r=t.group)},{group:r}}var Et=class extends ft{constructor(t){super(),pt(this,t,Ft,Ct,c,["group"])}};const Ot=({value:t})=>({output:t}),Tt=({value:t})=>({output:t});function Mt(t){var e,n;return{c(){E(e=G("input"),"class","w-full"),E(e,"focused",""),E(e,"type","text"),n=[F(e,"input",t.input_1_input_handler),F(e,"blur",t.blur_handler),F(e,"keyup",t.keyup_handler)]},m(n,r){k(n,e,r),T(e,t.value),t.input_1_binding(e)},p(t,n){t.value&&e.value!==n.value&&T(e,n.value)},i:r,o:r,d(r){r&&j(e),t.input_1_binding(null),l(n)}}}function Pt(t){var e;const n=t.$$slots.default,r=p(n,t,Tt);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&(t.$$scope||t.value)&&r.p(m(n,e,t,Ot),f(n,e,Tt))},i(t){e||(ot(r,t),e=!0)},o(t){ut(r,t),e=!1},d(t){r&&r.d(t)}}}function Ht(t){var e,n,r,o,u,s=[Pt,Mt],i=[];function l(t,e){return e.editing?1:0}return n=l(0,t),r=i[n]=s[n](t),{c(){e=G("div"),r.c(),E(e,"class","cursor-pointer"),u=F(e,"click",t.click_handler)},m(t,r){k(t,e,r),i[n].m(e,null),o=!0},p(t,o){var u=n;(n=l(0,o))===u?i[n].p(t,o):(nt(),ut(i[u],1,1,()=>{i[u]=null}),rt(),(r=i[n])||(r=i[n]=s[n](o)).c(),ot(r,1),r.m(e,null))},i(t){o||(ot(r),o=!0)},o(t){ut(r),o=!1},d(t){t&&j(e),i[n].d(),u()}}}function At(t,e,n){let r,{value:o}=e,u=!1,{$$slots:s={},$$scope:i}=e;return t.$set=t=>{"value"in t&&n("value",o=t.value),"$$scope"in t&&n("$$scope",i=t.$$scope)},t.$$.update=(t={input:1})=>{t.input&&r&&r.focus()},{value:o,input:r,editing:u,input_1_input_handler:function(){o=this.value,n("value",o)},input_1_binding:function(t){B[t?"unshift":"push"](()=>{n("input",r=t)})},blur_handler:()=>n("editing",u=!1),keyup_handler:t=>{"Enter"===t.key&&n("editing",u=!1)},click_handler:()=>n("editing",u=!0),$$slots:s,$$scope:i}}var Lt=class extends ft{constructor(t){super(),pt(this,t,At,Ht,c,["value"])}};const Nt=[];function Rt(t,e=r){let n;const o=[];function u(e){if(c(t,e)&&(t=e,n)){const e=!Nt.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),Nt.push(n,t)}if(e){for(let t=0;t<Nt.length;t+=2)Nt[t][0](Nt[t+1]);Nt.length=0}}}return{set:u,update:function(e){u(e(t))},subscribe:function(s,i=r){const l=[s,i];return o.push(l),1===o.length&&(n=e(u)||r),s(t),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(n(),n=null)}}}}const qt={groups:[{_id:"1",name:"Group 1",studyingForm:"fullTime",year:1},{_id:"2",name:"Group 2",studyingForm:"fullTime",year:2},{_id:"3",name:"Group 3",studyingForm:"extramural",year:3},{_id:"4",name:"Group 4",studyingForm:"extramural",year:4},{_id:"5",name:"Group 1",studyingForm:"fullTime",year:1},{_id:"6",name:"Group 2",studyingForm:"fullTime",year:2},{_id:"7",name:"Group 3",studyingForm:"extramural",year:3},{_id:"8",name:"Group 4",studyingForm:"extramural",year:4},{_id:"9",name:"Group 1",studyingForm:"fullTime",year:1},{_id:"10",name:"Group 2",studyingForm:"fullTime",year:2},{_id:"11",name:"Group 3",studyingForm:"extramural",year:3},{_id:"12",name:"Group 4",studyingForm:"extramural",year:4},{_id:"13",name:"Group 1",studyingForm:"fullTime",year:1},{_id:"14",name:"Group 2",studyingForm:"fullTime",year:2},{_id:"15",name:"Group 3",studyingForm:"extramural",year:3},{_id:"16",name:"Group 4",studyingForm:"extramural",year:4}],students:[{_id:"St-1-1",name:"Student 1-1",group:"1"},{_id:"St-1-2",name:"Student 1-2",group:"1"},{_id:"St-1-3",name:"Student 1-3",group:"1"},{_id:"St-2-1",name:"Student 2-1",group:"2"},{_id:"St-2-2",name:"Student 2-2",group:"2"},{_id:"St-2-3",name:"Student 2-3",group:"2"},{_id:"St-3-1",name:"Student 3-1",group:"3"},{_id:"St-3-2",name:"Student 3-2",group:"3"},{_id:"St-3-3",name:"Student 3-3",group:"3"}]};let zt=Rt({groups:[],selectedGroup:null,student:null});zt.subscribe(t=>{!t.student||t.selectedGroup&&t.student.group===t.selectedGroup.group._id||zt.set({...t,student:null})});n(0);function Bt(t){var e,n,r=new Et({props:{group:t.item}});return{c(){e=G("div"),r.$$.fragment.c(),E(e,"slot","item")},m(t,o){k(t,e,o),ct(r,e,null),n=!0},p(t,e){var n={};t.item&&(n.group=e.item),r.$set(n)},i(t){n||(ot(r.$$.fragment,t),n=!0)},o(t){ut(r.$$.fragment,t),n=!1},d(t){t&&j(e),dt(r)}}}function Dt(t){return{c:r,m:r,p:r,i:r,o:r,d:r}}function It(t){var e,n,r,o=new St({props:{object:t.$store.selectedGroup.group,array:t.$store.selectedGroup.students,$$slots:{default:[Ut],item:[Qt,({item:t})=>({item:t})],listHeader:[Kt,({obj:t})=>({obj:t})]},$$scope:{ctx:t}}});return o.$on("selected",t.selected_handler_1),{c(){e=G("div"),o.$$.fragment.c()},m(t,n){k(t,e,n),ct(o,e,null),r=!0},p(t,e){var n={};t.$store&&(n.object=e.$store.selectedGroup.group),t.$store&&(n.array=e.$store.selectedGroup.students),(t.$$scope||t.item||t.obj)&&(n.$$scope={changed:t,ctx:e}),o.$set(n)},i(t){r||(ot(o.$$.fragment,t),V(()=>{n||(n=it(e,yt,{delay:0,duration:250,x:100,y:0,opacity:0,easing:gt},!0)),n.run(1)}),r=!0)},o(t){ut(o.$$.fragment,t),n||(n=it(e,yt,{delay:0,duration:250,x:100,y:0,opacity:0,easing:gt},!1)),n.run(0),r=!1},d(t){t&&j(e),dt(o),t&&n&&n.end()}}}function Jt(t){var e,n,r=t.output+"";return{c(){e=G("h2"),n=S(r),E(e,"class","text-3xl")},m(t,r){k(t,e,r),w(e,n)},p(t,e){t.output&&r!==(r=e.output+"")&&O(n,r)},d(t){t&&j(e)}}}function Kt(t){var e,n,r,o,u,s=new Lt({props:{value:t.obj.name,$$slots:{default:[Jt,({output:t})=>({output:t})]},$$scope:{ctx:t}}});return{c(){e=G("div"),(n=G("button")).textContent="Close",r=C(),s.$$.fragment.c(),E(e,"slot","listHeader"),E(e,"class","p-2"),u=F(n,"click",t.click_handler)},m(t,u){k(t,e,u),w(e,n),w(e,r),ct(s,e,null),o=!0},p(t,e){var n={};t.obj&&(n.value=e.obj.name),t.$$scope&&(n.$$scope={changed:t,ctx:e}),s.$set(n)},i(t){o||(ot(s.$$.fragment,t),o=!0)},o(t){ut(s.$$.fragment,t),o=!1},d(t){t&&j(e),dt(s),u()}}}function Qt(t){var e,n,r=t.item.name+"";return{c(){e=G("div"),n=S(r),E(e,"slot","item")},m(t,r){k(t,e,r),w(e,n)},p(t,e){t.item&&r!==(r=e.item.name+"")&&O(n,r)},d(t){t&&j(e)}}}function Ut(t){var e;return{c(){e=C()},m(t,n){k(t,e,n)},p:r,i:r,o:r,d(t){t&&j(e)}}}function Vt(t){var e,n,r,o=new St({props:{object:t.$store.student,$$slots:{default:[Xt],listHeader:[Wt,({obj:t})=>({obj:t})]},$$scope:{ctx:t}}});return{c(){e=G("div"),o.$$.fragment.c()},m(t,n){k(t,e,n),ct(o,e,null),r=!0},p(t,e){var n={};t.$store&&(n.object=e.$store.student),(t.$$scope||t.obj)&&(n.$$scope={changed:t,ctx:e}),o.$set(n)},i(t){r||(ot(o.$$.fragment,t),V(()=>{n||(n=it(e,yt,{delay:0,duration:250,x:100,y:0,opacity:0,easing:gt},!0)),n.run(1)}),r=!0)},o(t){ut(o.$$.fragment,t),n||(n=it(e,yt,{delay:0,duration:250,x:100,y:0,opacity:0,easing:gt},!1)),n.run(0),r=!1},d(t){t&&j(e),dt(o),t&&n&&n.end()}}}function Wt(t){var e,n,r,o,u,s,i=t.obj.name+"";return{c(){e=G("div"),(n=G("button")).textContent="Close",r=C(),o=G("h2"),u=S(i),E(o,"class","text-xl"),E(e,"slot","listHeader"),E(e,"class","flex"),s=F(n,"click",t.click_handler_1)},m(t,s){k(t,e,s),w(e,n),w(e,r),w(e,o),w(o,u)},p(t,e){t.obj&&i!==(i=e.obj.name+"")&&O(u,i)},d(t){t&&j(e),s()}}}function Xt(t){return{c:r,m:r,p:r,d:r}}function Yt(t){var e,n,r,o,u,s,i,l,a,c=new St({props:{array:t.$store.groups,itemsClass:"border-b border-primary last:border-b-0",$$slots:{default:[Dt],item:[Bt,({item:t})=>({item:t})]},$$scope:{ctx:t}}});c.$on("selected",t.selected_handler);var d=t.$store.selectedGroup&&It(t),p=t.$store.student&&Vt(t);return{c(){e=G("div"),n=G("div"),c.$$.fragment.c(),r=C(),o=G("div"),d&&d.c(),s=C(),i=G("div"),p&&p.c(),E(n,"class","absolute md:static w-full md:w-3/12 lg:w-1/5 h-full"),E(o,"class",u="tr-list absolute md:static w-full md:w-4/12 lg:w-2/5 h-full bg-white "+(t.$store.selectedGroup?"opacity-100 right-0":"opacity-0 -right-full")+"\r\n        md:opacity-100 border-l border-primary-dark svelte-fo01bx"),E(i,"class",l="tr-list absolute md:static w-full md:w-5/12 lg:w-2/5 h-full bg-white border-l border-primary-dark "+(t.$store.student?"opacity-100 right-0":"opacity-0 -right-full")+"\r\n        md:opacity-100 svelte-fo01bx"),E(e,"class","h-full w-full overflow-hidden relative md:flex")},m(t,u){k(t,e,u),w(e,n),ct(c,n,null),w(e,r),w(e,o),d&&d.m(o,null),w(e,s),w(e,i),p&&p.m(i,null),a=!0},p(t,e){var n={};t.$store&&(n.array=e.$store.groups),(t.$$scope||t.item)&&(n.$$scope={changed:t,ctx:e}),c.$set(n),e.$store.selectedGroup?d?(d.p(t,e),ot(d,1)):((d=It(e)).c(),ot(d,1),d.m(o,null)):d&&(nt(),ut(d,1,1,()=>{d=null}),rt()),a&&!t.$store||u===(u="tr-list absolute md:static w-full md:w-4/12 lg:w-2/5 h-full bg-white "+(e.$store.selectedGroup?"opacity-100 right-0":"opacity-0 -right-full")+"\r\n        md:opacity-100 border-l border-primary-dark svelte-fo01bx")||E(o,"class",u),e.$store.student?p?(p.p(t,e),ot(p,1)):((p=Vt(e)).c(),ot(p,1),p.m(i,null)):p&&(nt(),ut(p,1,1,()=>{p=null}),rt()),a&&!t.$store||l===(l="tr-list absolute md:static w-full md:w-5/12 lg:w-2/5 h-full bg-white border-l border-primary-dark "+(e.$store.student?"opacity-100 right-0":"opacity-0 -right-full")+"\r\n        md:opacity-100 svelte-fo01bx")||E(i,"class",l)},i(t){a||(ot(c.$$.fragment,t),ot(d),ot(p),a=!0)},o(t){ut(c.$$.fragment,t),ut(d),ut(p),a=!1},d(t){t&&j(e),dt(c),d&&d.d(),p&&p.d()}}}function Zt(t,e,n){let r;var o;!function(t,e,n){t.$$.on_destroy.push(d(e,n))}(t,zt,t=>{n("$store",r=t)}),o=()=>void zt.update(t=>(t.groups=qt.groups,t)),q().$$.on_mount.push(o);return{$store:r,selected_handler:t=>(function(t){zt.update(e=>(e.selectedGroup={group:t,students:qt.students.filter(e=>e.group===t._id)},e.groups=e.groups.map(t=>({...t,active:t===e.selectedGroup.group})),e))})(t.detail),click_handler:()=>zt.set({...r,selectedGroup:null}),selected_handler_1:t=>(function(t){zt.update(e=>(e.student=t,e))})(t.detail),click_handler_1:()=>zt.set({...r,student:null})}}var te=class extends ft{constructor(t){super(),pt(this,t,Zt,Yt,c,[])}};function ee(t){var e,n,o,u,s,i=new $t({}),l=new te({});return{c(){e=G("div"),n=G("div"),i.$$.fragment.c(),o=C(),u=G("div"),l.$$.fragment.c(),E(n,"class","h-20"),E(u,"class","h-full"),E(e,"class","h-screen pl-4 flex flex-col")},m(t,r){k(t,e,r),w(e,n),ct(i,n,null),w(e,o),w(e,u),ct(l,u,null),s=!0},p:r,i(t){s||(ot(i.$$.fragment,t),ot(l.$$.fragment,t),s=!0)},o(t){ut(i.$$.fragment,t),ut(l.$$.fragment,t),s=!1},d(t){t&&j(e),dt(i),dt(l)}}}var ne=class extends ft{constructor(t){super(),pt(this,t,null,ee,c,[])}};n(1);const re=new ne({target:document.body,props:{name:"world"}});e.default=re}]);