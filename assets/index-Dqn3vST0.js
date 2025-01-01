(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();const gn=!1;var mn=Array.isArray,yn=Array.from,wn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,qt=Object.getOwnPropertyDescriptors,Vt=Object.getPrototypeOf;function On(t){return t()}function It(t){for(var n=0;n<t.length;n++)t[n]()}const b=2,jt=4,ot=8,gt=16,T=32,G=64,dt=128,M=256,lt=512,m=1024,I=2048,V=4096,it=8192,j=16384,bn=32768,xn=65536,Sn=1<<17,Tn=1<<19,Ut=1<<20,pt=Symbol("$state"),Dn=Symbol("legacy props");function Yt(t){return t===this.v}function Nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Kt(t){return!Nn(t,this.v)}function An(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function In(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Pn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Cn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let H=!1;function Mn(){H=!0}const kn=1,Bn=2,Ln=8,qn=2;function Gt(t,n){var r={f:0,v:t,reactions:null,equals:Yt,version:0};return r}function Vn(t,n=!1){var e;const r=Gt(t);return n||(r.equals=Kt),H&&h!==null&&h.l!==null&&((e=h.l).s??(e.s=[])).push(r),r}function U(t,n=!1){return jn(Vn(t,n))}function jn(t){return d!==null&&d.f&b&&(x===null?rr([t]):x.push(t)),t}function O(t,n){return d!==null&&bt()&&d.f&(b|gt)&&(x===null||!x.includes(t))&&Fn(),Un(t,n)}function Un(t,n){return t.equals(n)||(t.v=n,t.version=cn(),Ht(t,I),bt()&&c!==null&&c.f&m&&!(c.f&T)&&(g!==null&&g.includes(t)?(D(c,I),_t(c)):A===null?er([t]):A.push(t))),n}function Ht(t,n){var r=t.reactions;if(r!==null)for(var e=bt(),i=r.length,l=0;l<i;l++){var s=r[l],o=s.f;o&I||!e&&s===c||(D(s,n),o&(m|M)&&(o&b?Ht(s,V):_t(s)))}}let Yn=!1;var Pt,Xt,Wt;function Kn(){if(Pt===void 0){Pt=window;var t=Element.prototype,n=Node.prototype;Xt=vt(n,"firstChild").get,Wt=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Gn(t=""){return document.createTextNode(t)}function $t(t){return Xt.call(t)}function zt(t){return Wt.call(t)}function w(t,n){return $t(t)}function C(t,n=1,r=!1){let e=t;for(;n--;)e=zt(e);return e}function mt(t){var n=b|I;c===null?n|=M:c.f|=Ut;var r=d!==null&&d.f&b?d:null;const e={children:null,ctx:h,deps:null,equals:Yt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??c};return r!==null&&(r.children??(r.children=[])).push(e),e}function Hn(t){const n=mt(t);return n.equals=Kt,n}function Jt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&b?yt(e):F(e)}}}function Xn(t){for(var n=t.parent;n!==null;){if(!(n.f&b))return n;n=n.parent}return null}function Qt(t){var n,r=c;P(Xn(t));try{Jt(t),n=_n(t)}finally{P(r)}return n}function Zt(t){var n=Qt(t),r=(R||t.f&M)&&t.deps!==null?V:m;D(t,r),t.equals(n)||(t.v=n,t.version=cn())}function yt(t){Jt(t),K(t,0),D(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function tn(t){c===null&&d===null&&Pn(),d!==null&&d.f&M&&In(),Ot&&An()}function Wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function X(t,n,r,e=!0){var i=(t&G)!==0,l=c,s={ctx:h,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:i?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var o=L;try{Rt(!0),ct(s),s.f|=bn}catch(_){throw F(s),_}finally{Rt(o)}}else n!==null&&_t(s);var u=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&Ut)===0;if(!u&&!i&&e&&(l!==null&&Wn(s,l),d!==null&&d.f&b)){var a=d;(a.children??(a.children=[])).push(s)}return s}function Ct(t){tn();var n=c!==null&&(c.f&T)!==0&&h!==null&&!h.m;if(n){var r=h;(r.e??(r.e=[])).push({fn:t,effect:c,reaction:d})}else{var e=nn(t);return e}}function $n(t){return tn(),wt(t)}function zn(t){const n=X(G,t,!0);return(r={})=>new Promise(e=>{r.outro?tr(n,()=>{F(n),e(void 0)}):(F(n),e(void 0))})}function nn(t){return X(jt,t,!1)}function st(t,n){var r=h,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=wt(()=>{t(),!e.ran&&(e.ran=!0,O(r.l.r2,!0),dn(n))})}function rn(){var t=h;wt(()=>{if(S(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&m&&D(r,V),W(r)&&ct(r),n.ran=!1}t.l.r2.v=!1}})}function wt(t){return X(ot,t,!0)}function en(t){return Jn(t)}function Jn(t,n=0){return X(ot|gt|n,t,!0)}function Qn(t,n=!0){return X(ot|T,t,!0,n)}function ln(t){var n=t.teardown;if(n!==null){const r=Ot,e=d;Ft(!0),q(null);try{n.call(null)}finally{Ft(r),q(e)}}}function sn(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)yt(n[r])}}function un(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function Zn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Tn)&&t.nodes_start!==null){for(var e=t.nodes_start,i=t.nodes_end;e!==null;){var l=e===i?null:zt(e);e.remove(),e=l}r=!0}un(t,n&&!r),sn(t),K(t,0),D(t,j);var s=t.transitions;if(s!==null)for(const u of s)u.stop();ln(t);var o=t.parent;o!==null&&o.first!==null&&an(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function an(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function tr(t,n){var r=[];on(t,r,!0),nr(r,()=>{F(t),n()})}function nr(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var i of t)i.out(e)}else n()}function on(t,n,r){if(!(t.f&it)){if(t.f^=it,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var i=e.next,l=(e.f&xn)!==0||(e.f&T)!==0;on(e,n,l?r:!1),e=i}}}let nt=!1,ut=!1,at=null,L=!1,Ot=!1;function Rt(t){L=t}function Ft(t){Ot=t}let ht=[],Y=0;let d=null;function q(t){d=t}let c=null;function P(t){c=t}let x=null;function rr(t){x=t}let g=null,y=0,A=null;function er(t){A=t}let fn=1,R=!1,h=null;function cn(){return++fn}function bt(){return!H||h!==null&&h.l===null}function W(t){var s,o;var n=t.f;if(n&I)return!0;if(n&V){var r=t.deps,e=(n&M)!==0;if(r!==null){var i;if(n&lt){for(i=0;i<r.length;i++)((s=r[i]).reactions??(s.reactions=[])).push(t);t.f^=lt}for(i=0;i<r.length;i++){var l=r[i];if(W(l)&&Zt(l),e&&c!==null&&!R&&!((o=l==null?void 0:l.reactions)!=null&&o.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||c!==null&&!R)&&D(t,m)}return!1}function lr(t,n){for(var r=n;r!==null;){if(r.f&dt)try{r.fn(t);return}catch{r.f^=dt}r=r.parent}throw nt=!1,t}function ir(t){return(t.f&j)===0&&(t.parent===null||(t.parent.f&dt)===0)}function ft(t,n,r,e){if(nt){if(r===null&&(nt=!1),ir(n))throw t;return}r!==null&&(nt=!0);{lr(t,n);return}}function _n(t){var v;var n=g,r=y,e=A,i=d,l=R,s=x,o=h,u=t.f;g=null,y=0,A=null,d=u&(T|G)?null:t,R=!L&&(u&M)!==0,x=null,h=t.ctx;try{var a=(0,t.fn)(),_=t.deps;if(g!==null){var f;if(K(t,y),_!==null&&y>0)for(_.length=y+g.length,f=0;f<g.length;f++)_[y+f]=g[f];else t.deps=_=g;if(!R)for(f=y;f<_.length;f++)((v=_[f]).reactions??(v.reactions=[])).push(t)}else _!==null&&y<_.length&&(K(t,y),_.length=y);return a}finally{g=n,y=r,A=e,d=i,R=l,x=s,h=o}}function sr(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var i=r.length-1;i===0?r=n.reactions=null:(r[e]=r[i],r.pop())}}r===null&&n.f&b&&(g===null||!g.includes(n))&&(D(n,V),n.f&(M|lt)||(n.f^=lt),K(n,0))}function K(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)sr(t,r[e])}function ct(t){var n=t.f;if(!(n&j)){D(t,m);var r=c,e=h;c=t;try{n&gt?Zn(t):un(t),sn(t),ln(t);var i=_n(t);t.teardown=typeof i=="function"?i:null,t.version=fn}catch(l){ft(l,t,r,e||t.ctx)}finally{c=r}}}function ur(){if(Y>1e3){Y=0;try{Cn()}catch(t){if(at!==null)ft(t,at,null);else throw t}}Y++}function ar(t){var n=t.length;if(n!==0){ur();var r=L;L=!0;try{for(var e=0;e<n;e++){var i=t[e];i.f&m||(i.f^=m);var l=[];vn(i,l),or(l)}}finally{L=r}}}function or(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(j|it)))try{W(e)&&(ct(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?an(e):e.fn=null))}catch(i){ft(i,e,null,e.ctx)}}}function fr(){if(ut=!1,Y>1001)return;const t=ht;ht=[],ar(t),ut||(Y=0,at=null)}function _t(t){ut||(ut=!0,queueMicrotask(fr)),at=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|T)){if(!(r&m))return;n.f^=m}}ht.push(n)}function vn(t,n){var r=t.first,e=[];t:for(;r!==null;){var i=r.f,l=(i&T)!==0,s=l&&(i&m)!==0,o=r.next;if(!s&&!(i&it))if(i&ot){if(l)r.f^=m;else try{W(r)&&ct(r)}catch(f){ft(f,r,null,r.ctx)}var u=r.first;if(u!==null){r=u;continue}}else i&jt&&e.push(r);if(o===null){let f=r.parent;for(;f!==null;){if(t===f)break t;var a=f.next;if(a!==null){r=a;continue t}f=f.parent}}r=o}for(var _=0;_<e.length;_++)u=e[_],n.push(u),vn(u,n)}function S(t){var _;var n=t.f,r=(n&b)!==0;if(r&&n&j){var e=Qt(t);return yt(t),e}if(d!==null){x!==null&&x.includes(t)&&Rn();var i=d.deps;g===null&&i!==null&&i[y]===t?y++:g===null?g=[t]:g.push(t),A!==null&&c!==null&&c.f&m&&!(c.f&T)&&A.includes(t)&&(D(c,I),_t(c))}else if(r&&t.deps===null)for(var l=t,s=l.parent,o=l;s!==null;)if(s.f&b){var u=s;o=u,s=u.parent}else{var a=s;(_=a.deriveds)!=null&&_.includes(o)||(a.deriveds??(a.deriveds=[])).push(o);break}return r&&(l=t,W(l)&&Zt(l)),t.v}function dn(t){const n=d;try{return d=null,t()}finally{d=n}}const cr=~(I|V|m);function D(t,n){t.f=t.f&cr|n}function xt(t,n=!1,r){h={p:h,c:null,e:null,m:!1,s:t,x:null,l:null},H&&!n&&(h.l={s:null,u:null,r1:[],r2:Gt(!1)})}function St(t){const n=h;if(n!==null){const s=n.e;if(s!==null){var r=c,e=d;n.e=null;try{for(var i=0;i<s.length;i++){var l=s[i];P(l.effect),q(l.reaction),nn(l.fn)}}finally{P(r),q(e)}}h=n.p,n.m=!0}return{}}function rt(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)Et(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&Et(r)}}}function Et(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Et(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=qt(r);for(let i in e){const l=e[i].get;if(l)try{l.call(t)}catch{}}}}}const _r=["touchstart","touchmove"];function vr(t){return _r.includes(t)}const dr=new Set,Mt=new Set;function Q(t){var J;var n=this,r=n.ownerDocument,e=t.type,i=((J=t.composedPath)==null?void 0:J.call(t))||[],l=i[0]||t.target,s=0,o=t.__root;if(o){var u=i.indexOf(o);if(u!==-1&&(n===document||n===window)){t.__root=n;return}var a=i.indexOf(n);if(a===-1)return;u<=a&&(s=u)}if(l=i[s]||t.target,l!==n){wn(t,"currentTarget",{configurable:!0,get(){return l||r}});var _=d,f=c;q(null),P(null);try{for(var v,E=[];l!==null;){var p=l.assignedSlot||l.parentNode||l.host||null;try{var N=l["__"+e];if(N!==void 0&&!l.disabled)if(mn(N)){var[$,...z]=N;$.apply(l,[t,...z])}else N.call(l,t)}catch(k){v?E.push(k):v=k}if(t.cancelBubble||p===n||p===null)break;l=p}if(v){for(let k of E)queueMicrotask(()=>{throw k});throw v}}finally{t.__root=n,delete t.currentTarget,q(_),P(f)}}}function pr(t){var n=document.createElement("template");return n.innerHTML=t,n.content}function hr(t,n){var r=c;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=n)}function Tt(t,n){var r=(n&qn)!==0,e,i=!t.startsWith("<!>");return()=>{e===void 0&&(e=pr(i?t:"<!>"+t),e=$t(e));var l=r?document.importNode(e,!0):e.cloneNode(!0);return hr(l,l),l}}function Dt(t,n){t!==null&&t.before(n)}function et(t,n){var r=n==null?"":typeof n=="object"?n+"":n;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function Er(t,n){return gr(t,n)}const B=new Map;function gr(t,{target:n,anchor:r,props:e={},events:i,context:l,intro:s=!0}){Kn();var o=new Set,u=f=>{for(var v=0;v<f.length;v++){var E=f[v];if(!o.has(E)){o.add(E);var p=vr(E);n.addEventListener(E,Q,{passive:p});var N=B.get(E);N===void 0?(document.addEventListener(E,Q,{passive:p}),B.set(E,1)):B.set(E,N+1)}}};u(yn(dr)),Mt.add(u);var a=void 0,_=zn(()=>{var f=r??n.appendChild(Gn());return Qn(()=>{if(l){xt({});var v=h;v.c=l}i&&(e.$$events=i),a=t(f,e)||{},l&&St()}),()=>{var p;for(var v of o){n.removeEventListener(v,Q);var E=B.get(v);--E===0?(document.removeEventListener(v,Q),B.delete(v)):B.set(v,E)}Mt.delete(u),f!==r&&((p=f.parentNode)==null||p.removeChild(f))}});return mr.set(a,_),a}let mr=new WeakMap;function yr(t,n,r,e){var i=t.__attributes??(t.__attributes={});i[n]!==(i[n]=r)&&("__styles"in t&&(t.__styles={}),r==null?t.removeAttribute(n):typeof r!="string"&&wr(t).includes(n)?t[n]=r:t.setAttribute(n,r))}var kt=new Map;function wr(t){var n=kt.get(t.nodeName);if(n)return n;kt.set(t.nodeName,n=[]);for(var r,e=t,i=Element.prototype;i!==e;){r=qt(e);for(var l in r)r[l].set&&n.push(l);e=Vt(e)}return n}function Or(t,n,r){var e=t.__className,i=br(n);(e!==i||Yn)&&(n==null&&!r?t.removeAttribute("class"):t.className=i,t.__className=i)}function br(t,n){return(t??"")+""}function pn(t=!1){const n=h,r=n.l.u;if(!r)return;let e=()=>rt(n.s);if(t){let i=0,l={};const s=mt(()=>{let o=!1;const u=n.s;for(const a in u)u[a]!==l[a]&&(l[a]=u[a],o=!0);return o&&i++,i});e=()=>S(s)}r.b.length&&$n(()=>{Bt(n,e),It(r.b)}),Ct(()=>{const i=dn(()=>r.m.map(On));return()=>{for(const l of i)typeof l=="function"&&l()}}),r.a.length&&Ct(()=>{Bt(n,e),It(r.a)})}function Bt(t,n){if(t.l.s)for(const r of t.l.s)S(r);n()}let Z=!1;function xr(t){var n=Z;try{return Z=!1,[t(),Z]}finally{Z=n}}function Sr(t){for(var n=c,r=c;n!==null&&!(n.f&(T|G));)n=n.parent;try{return P(n),t()}finally{P(r)}}function tt(t,n,r,e){var E;var i=(r&kn)!==0,l=!H||(r&Bn)!==0,s=(r&Ln)!==0;xr(()=>t[n]);var o=pt in t||Dn in t;((E=vt(t,n))==null?void 0:E.set)??(o&&s&&n in t);var u=e,a=!0,_=()=>(a&&(a=!1,u=e),u),f;if(l)f=()=>{var p=t[n];return p===void 0?_():(a=!0,p)};else{var v=Sr(()=>(i?mt:Hn)(()=>t[n]));v.f|=Sn,f=()=>{var p=S(v);return p!==void 0&&(u=void 0),p===void 0?u:p}}return f}const Tr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Tr);Mn();var Dr=Tt('<div class="status-bar-wrapper svelte-11imuxc"><div class="status-bar-text-container svelte-11imuxc"><span> </span> <span> </span></div> <div class="status-bar-container svelte-11imuxc"><div class="status-bar svelte-11imuxc"><div class="numeric-value svelte-11imuxc"> </div></div></div> <div class="status-bar-text-container svelte-11imuxc"><span></span> <span></span></div></div>');function Lt(t,n){xt(n,!1);const r=U();let e=tt(n,"title",8),i=tt(n,"range",8),l=tt(n,"value",8),s=tt(n,"status_ranges",8);const o=i()[0]||0,u=i()[1]||0;let a=U("BAD");st(()=>rt(l()),()=>{O(r,l()/(u/100))}),st(()=>(rt(l()),rt(s())),()=>{console.log("update"),l()>=s().BAD&&l()<s().OK?O(a,"BAD"):l()>=s().OK&&l()<s().GOOD?O(a,"OK"):l()>=s().GOOD&&l()<s().EXCESSIVE?O(a,"GOOD"):l()>=s().EXCESSIVE&&O(a,"EXCESSIVE")}),rn(),pn();var _=Dr(),f=w(_),v=w(f),E=w(v),p=C(v,2),N=w(p),$=C(f,2),z=w($),J=w(z),k=w(J),hn=C($,2),At=w(hn);At.textContent=o;var En=C(At,2);En.textContent=u,en(()=>{et(E,e()),Or(p,`${`status ${S(a)}`??""} svelte-11imuxc`),et(N,S(a)),yr(z,"style",`width: ${S(r)}%`),et(k,l())}),Dt(t,_),St()}const Nr="http://192.168.0.7/",Ar="name",Ir="temp",Pr="humidity",Nt=()=>Nr,Cr=async()=>await fetch(Nt()+Ar),Rr=async()=>await fetch(Nt()+Ir),Fr=async()=>await fetch(Nt()+Pr);var Mr=Tt('<div class="main-container svelte-1v6pl1n"><div class="heading svelte-1v6pl1n"><h1></h1></div> <div class="box-name svelte-1v6pl1n"> </div> <div class="container svelte-1v6pl1n"><!> <!></div></div>');function kr(t,n){xt(n,!1);const r=U(),e=U();let i="SMART TEA BOX",l=U("BOX #1");async function s(){O(l,await(await Cr()).text()),O(r,parseFloat(await(await Rr()).text())),O(e,parseFloat(await(await Fr()).text()))}setInterval(()=>{s()},2e3),st(()=>{},()=>{O(r,0)}),st(()=>{},()=>{O(e,0)}),rn(),pn();var o=Mr(),u=w(o),a=w(u);a.textContent=i;var _=C(u,2),f=w(_),v=C(_,2),E=w(v);Lt(E,{title:"TEMPERATURE",range:[0,50],get value(){return S(r)},status_ranges:{GOOD:22,OK:19,BAD:18,EXCESSIVE:32}});var p=C(E,2);Lt(p,{title:"HUMIDITY",range:[0,100],get value(){return S(e)},status_ranges:{GOOD:65,OK:50,BAD:45,EXCESSIVE:82}}),en(()=>et(f,S(l))),Dt(t,o),St()}var Br=Tt("<main><!></main>");function Lr(t){var n=Br(),r=w(n);kr(r,{}),Dt(t,n)}Er(Lr,{target:document.getElementById("app")});