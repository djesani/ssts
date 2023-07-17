"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([["polyfills"],{1253:(_e,me,Oe)=>{
/**
         * @license Angular v16.1.5
         * (c) 2010-2022 Google LLC. https://angular.io/
         * License: MIT
         */
const ke=":";const ze=function(i,...s){if(ze.translate){const t=ze.translate(i,s);i=t[0],s=t[1]}let e=Te(i[0],i.raw[0]);for(let t=1;t<i.length;t++)e+=s[t-1]+Te(i[t],i.raw[t]);return e},Ze=":";function Te(i,s){return s.charAt(0)===Ze?i.substring(function Ve(i,s){for(let e=1,t=1;e<i.length;e++,t++)if("\\"===s[t])t++;else if(i[e]===ke)return e;throw new Error(`Unterminated $localize metadata block in "${s}".`)}(i,s)+1):i}
/**
         * @license Angular v16.1.5
         * (c) 2010-2022 Google LLC. https://angular.io/
         * License: MIT
         */(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)().$localize=ze,Oe(8332),window.global=window},8332:()=>{
/**
         * @license Angular v<unknown>
         * (c) 2010-2022 Google LLC. https://angular.io/
         * License: MIT
         */
!function(e){const t=e.performance;function r($){t&&t.mark&&t.mark($)}function o($,m){t&&t.measure&&t.measure($,m)}r("Zone");const a=e.__Zone_symbol_prefix||"__zone_symbol__";function u($){return a+$}const f=!0===e[u("forceDuplicateZoneCheck")];if(e.Zone){if(f||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let T=(()=>{class ${static assertZonePatched(){if(e.Promise!==he.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let n=$.current;for(;n.parent;)n=n.parent;return n}static get current(){return W.zone}static get currentTask(){return ue}static __load_patch(n,c,S=!1){if(he.hasOwnProperty(n)){if(!S&&f)throw Error("Already loaded patch: "+n)}else if(!e["__Zone_disable_"+n]){const I="Zone:"+n;r(I),he[n]=c(e,$,K),o(I,I)}}get parent(){return this._parent}get name(){return this._name}constructor(n,c){this._parent=n,this._name=c?c.name||"unnamed":"<root>",this._properties=c&&c.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,c)}get(n){const c=this.getZoneWith(n);if(c)return c._properties[n]}getZoneWith(n){let c=this;for(;c;){if(c._properties.hasOwnProperty(n))return c;c=c._parent}return null}fork(n){if(!n)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,n)}wrap(n,c){if("function"!=typeof n)throw new Error("Expecting function got: "+n);const S=this._zoneDelegate.intercept(this,n,c),I=this;return function(){return I.runGuarded(S,this,arguments,c)}}run(n,c,S,I){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,n,c,S,I)}finally{W=W.parent}}runGuarded(n,c=null,S,I){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,n,c,S,I)}catch(Q){if(this._zoneDelegate.handleError(this,Q))throw Q}}finally{W=W.parent}}runTask(n,c,S){if(n.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(n.zone||ee).name+"; Execution: "+this.name+")");if(n.state===U&&(n.type===ne||n.type===O))return;const I=n.state!=y;I&&n._transitionTo(y,B),n.runCount++;const Q=ue;ue=n,W={parent:W,zone:this};try{n.type==O&&n.data&&!n.data.isPeriodic&&(n.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,n,c,S)}catch(h){if(this._zoneDelegate.handleError(this,h))throw h}}finally{n.state!==U&&n.state!==E&&(n.type==ne||n.data&&n.data.isPeriodic?I&&n._transitionTo(B,y):(n.runCount=0,this._updateTaskCount(n,-1),I&&n._transitionTo(U,y,U))),W=W.parent,ue=Q}}scheduleTask(n){if(n.zone&&n.zone!==this){let S=this;for(;S;){if(S===n.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${n.zone.name}`);S=S.parent}}n._transitionTo(Y,U);const c=[];n._zoneDelegates=c,n._zone=this;try{n=this._zoneDelegate.scheduleTask(this,n)}catch(S){throw n._transitionTo(E,Y,U),this._zoneDelegate.handleError(this,S),S}return n._zoneDelegates===c&&this._updateTaskCount(n,1),n.state==Y&&n._transitionTo(B,Y),n}scheduleMicroTask(n,c,S,I){return this.scheduleTask(new g(j,n,c,S,I,void 0))}scheduleMacroTask(n,c,S,I,Q){return this.scheduleTask(new g(O,n,c,S,I,Q))}scheduleEventTask(n,c,S,I,Q){return this.scheduleTask(new g(ne,n,c,S,I,Q))}cancelTask(n){if(n.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(n.zone||ee).name+"; Execution: "+this.name+")");if(n.state===B||n.state===y){n._transitionTo(V,B,y);try{this._zoneDelegate.cancelTask(this,n)}catch(c){throw n._transitionTo(E,V),this._zoneDelegate.handleError(this,c),c}return this._updateTaskCount(n,-1),n._transitionTo(U,V),n.runCount=0,n}}_updateTaskCount(n,c){const S=n._zoneDelegates;-1==c&&(n._zoneDelegates=null);for(let I=0;I<S.length;I++)S[I]._updateTaskCount(n.type,c)}}return $.__symbol__=u,$})();const w={name:"",onHasTask:($,m,n,c)=>$.hasTask(n,c),onScheduleTask:($,m,n,c)=>$.scheduleTask(n,c),onInvokeTask:($,m,n,c,S,I)=>$.invokeTask(n,c,S,I),onCancelTask:($,m,n,c)=>$.cancelTask(n,c)};class v{constructor(m,n,c){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=m,this._parentDelegate=n,this._forkZS=c&&(c&&c.onFork?c:n._forkZS),this._forkDlgt=c&&(c.onFork?n:n._forkDlgt),this._forkCurrZone=c&&(c.onFork?this.zone:n._forkCurrZone),this._interceptZS=c&&(c.onIntercept?c:n._interceptZS),this._interceptDlgt=c&&(c.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=c&&(c.onIntercept?this.zone:n._interceptCurrZone),this._invokeZS=c&&(c.onInvoke?c:n._invokeZS),this._invokeDlgt=c&&(c.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=c&&(c.onInvoke?this.zone:n._invokeCurrZone),this._handleErrorZS=c&&(c.onHandleError?c:n._handleErrorZS),this._handleErrorDlgt=c&&(c.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=c&&(c.onHandleError?this.zone:n._handleErrorCurrZone),this._scheduleTaskZS=c&&(c.onScheduleTask?c:n._scheduleTaskZS),this._scheduleTaskDlgt=c&&(c.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=c&&(c.onScheduleTask?this.zone:n._scheduleTaskCurrZone),this._invokeTaskZS=c&&(c.onInvokeTask?c:n._invokeTaskZS),this._invokeTaskDlgt=c&&(c.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=c&&(c.onInvokeTask?this.zone:n._invokeTaskCurrZone),this._cancelTaskZS=c&&(c.onCancelTask?c:n._cancelTaskZS),this._cancelTaskDlgt=c&&(c.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=c&&(c.onCancelTask?this.zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const S=c&&c.onHasTask;(S||n&&n._hasTaskZS)&&(this._hasTaskZS=S?c:w,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=m,c.onScheduleTask||(this._scheduleTaskZS=w,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this.zone),c.onInvokeTask||(this._invokeTaskZS=w,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this.zone),c.onCancelTask||(this._cancelTaskZS=w,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this.zone))}fork(m,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,m,n):new T(m,n)}intercept(m,n,c){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,m,n,c):n}invoke(m,n,c,S,I){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,m,n,c,S,I):n.apply(c,S)}handleError(m,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,m,n)}scheduleTask(m,n){let c=n;if(this._scheduleTaskZS)this._hasTaskZS&&c._zoneDelegates.push(this._hasTaskDlgtOwner),c=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,m,n),c||(c=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=j)throw new Error("Task is missing scheduleFn.");R(n)}return c}invokeTask(m,n,c,S){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,m,n,c,S):n.callback.apply(c,S)}cancelTask(m,n){let c;if(this._cancelTaskZS)c=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,m,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");c=n.cancelFn(n)}return c}hasTask(m,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,m,n)}catch(c){this.handleError(m,c)}}_updateTaskCount(m,n){const c=this._taskCounts,S=c[m],I=c[m]=S+n;if(I<0)throw new Error("More tasks executed then were scheduled.");0!=S&&0!=I||this.hasTask(this.zone,{microTask:c.microTask>0,macroTask:c.macroTask>0,eventTask:c.eventTask>0,change:m})}}class g{constructor(m,n,c,S,I,Q){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=m,this.source=n,this.data=S,this.scheduleFn=I,this.cancelFn=Q,!c)throw new Error("callback is not defined");this.callback=c;const h=this;this.invoke=m===ne&&S&&S.useG?g.invokeTask:function(){return g.invokeTask.call(e,h,this,arguments)}}static invokeTask(m,n,c){m||(m=this),se++;try{return m.runCount++,m.zone.runTask(m,n,c)}finally{1==se&&p(),se--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(U,Y)}_transitionTo(m,n,c){if(this._state!==n&&this._state!==c)throw new Error(`${this.type} '${this.source}': can not transition to '${m}', expecting state '${n}'${c?" or '"+c+"'":""}, was '${this._state}'.`);this._state=m,m==U&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const L=u("setTimeout"),P=u("Promise"),D=u("then");let J,N=[],x=!1;function F($){if(J||e[P]&&(J=e[P].resolve(0)),J){let m=J[D];m||(m=J.then),m.call(J,$)}else e[L]($,0)}function R($){0===se&&0===N.length&&F(p),$&&N.push($)}function p(){if(!x){for(x=!0;N.length;){const $=N;N=[];for(let m=0;m<$.length;m++){const n=$[m];try{n.zone.runTask(n,null,null)}catch(c){K.onUnhandledError(c)}}}K.microtaskDrainDone(),x=!1}}const ee={name:"NO ZONE"},U="notScheduled",Y="scheduling",B="scheduled",y="running",V="canceling",E="unknown",j="microTask",O="macroTask",ne="eventTask",he={},K={symbol:u,currentZoneFrame:()=>W,onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:R,showUncaughtError:()=>!T[u("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:q,patchMethod:()=>q,bindArguments:()=>[],patchThen:()=>q,patchMacroTask:()=>q,patchEventPrototype:()=>q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>q,wrapWithCurrentZone:()=>q,filterProperties:()=>[],attachOriginToPatched:()=>q,_redefineProperty:()=>q,patchCallbacks:()=>q,nativeScheduleMicroTask:F};let W={parent:null,zone:new T(null,null)},ue=null,se=0;function q(){}o("Zone","Zone"),e.Zone=T}(typeof window<"u"&&window||typeof self<"u"&&self||global);const _e=Object.getOwnPropertyDescriptor,me=Object.defineProperty,Oe=Object.getPrototypeOf,ke=Object.create,rt=Array.prototype.slice,Re="addEventListener",Ae="removeEventListener",fe=Zone.__symbol__(Re),Ce=Zone.__symbol__(Ae),ie="true",re="false",Ne=Zone.__symbol__("");function Le(e,t){return Zone.current.wrap(e,t)}function We(e,t,r,o,a){return Zone.current.scheduleMacroTask(e,t,r,o,a)}const H=Zone.__symbol__,Ie=typeof window<"u",Ee=Ie?window:void 0,X=Ie&&Ee||"object"==typeof self&&self||global,ot="removeAttribute";function xe(e,t){for(let r=e.length-1;r>=0;r--)"function"==typeof e[r]&&(e[r]=Le(e[r],t+"_"+r));return e}function qe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const je=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,we=!("nw"in X)&&typeof X.process<"u"&&"[object process]"==={}.toString.call(X.process),De=!we&&!je&&!(!Ie||!Ee.HTMLElement),$e=typeof X.process<"u"&&"[object process]"==={}.toString.call(X.process)&&!je&&!(!Ie||!Ee.HTMLElement),be={},ce=function(e){if(!(e=e||X.event))return;let t=be[e.type];t||(t=be[e.type]=H("ON_PROPERTY"+e.type));const r=this||e.target||X,o=r[t];let a;return De&&r===Ee&&"error"===e.type?(a=o&&o.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===a&&e.preventDefault()):(a=o&&o.apply(this,arguments),null!=a&&!a&&e.preventDefault()),a};function He(e,t,r){let o=_e(e,t);if(!o&&r&&_e(r,t)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const a=H("on"+t+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete o.writable,delete o.value;const u=o.get,f=o.set,T=t.slice(2);let w=be[T];w||(w=be[T]=H("ON_PROPERTY"+T)),o.set=function(v){let g=this;!g&&e===X&&(g=X),g&&("function"==typeof g[w]&&g.removeEventListener(T,ce),f&&f.call(g,null),g[w]=v,"function"==typeof v&&g.addEventListener(T,ce,!1))},o.get=function(){let v=this;if(!v&&e===X&&(v=X),!v)return null;const g=v[w];if(g)return g;if(u){let L=u.call(this);if(L)return o.set.call(this,L),"function"==typeof v[ot]&&v.removeAttribute(t),L}return null},me(e,t,o),e[a]=!0}function Xe(e,t,r){if(t)for(let o=0;o<t.length;o++)He(e,"on"+t[o],r);else{const o=[];for(const a in e)"on"==a.slice(0,2)&&o.push(a);for(let a=0;a<o.length;a++)He(e,o[a],r)}}const te=H("originalInstance");function Pe(e){const t=X[e];if(!t)return;X[H(e)]=t,X[e]=function(){const a=xe(arguments,e);switch(a.length){case 0:this[te]=new t;break;case 1:this[te]=new t(a[0]);break;case 2:this[te]=new t(a[0],a[1]);break;case 3:this[te]=new t(a[0],a[1],a[2]);break;case 4:this[te]=new t(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},le(X[e],t);const r=new t(function(){});let o;for(o in r)"XMLHttpRequest"===e&&"responseBlob"===o||function(a){"function"==typeof r[a]?X[e].prototype[a]=function(){return this[te][a].apply(this[te],arguments)}:me(X[e].prototype,a,{set:function(u){"function"==typeof u?(this[te][a]=Le(u,e+"."+a),le(this[te][a],u)):this[te][a]=u},get:function(){return this[te][a]}})}(o);for(o in t)"prototype"!==o&&t.hasOwnProperty(o)&&(X[e][o]=t[o])}function ae(e,t,r){let o=e;for(;o&&!o.hasOwnProperty(t);)o=Oe(o);!o&&e[t]&&(o=e);const a=H(t);let u=null;if(o&&(!(u=o[a])||!o.hasOwnProperty(a))&&(u=o[a]=o[t],qe(o&&_e(o,t)))){const T=r(u,a,t);o[t]=function(){return T(this,arguments)},le(o[t],u)}return u}function Ye(e,t,r){let o=null;function a(u){const f=u.data;return f.args[f.cbIdx]=function(){u.invoke.apply(this,arguments)},o.apply(f.target,f.args),u}o=ae(e,t,u=>function(f,T){const w=r(f,T);return w.cbIdx>=0&&"function"==typeof T[w.cbIdx]?We(w.name,T[w.cbIdx],w,a):u.apply(f,T)})}function le(e,t){e[H("OriginalDelegate")]=t}let Be=!1,Ue=!1;function it(){if(Be)return Ue;Be=!0;try{const e=Ee.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ue=!0)}catch{}return Ue}Zone.__load_patch("ZoneAwarePromise",(e,t,r)=>{const o=Object.getOwnPropertyDescriptor,a=Object.defineProperty,f=r.symbol,T=[],w=!0===e[f("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=f("Promise"),g=f("then"),L="__creationTrace__";r.onUnhandledError=h=>{if(r.showUncaughtError()){const d=h&&h.rejection;d?console.error("Unhandled Promise rejection:",d instanceof Error?d.message:d,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",d,d instanceof Error?d.stack:void 0):console.error(h)}},r.microtaskDrainDone=()=>{for(;T.length;){const h=T.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h})}catch(d){D(d)}}};const P=f("unhandledPromiseRejectionHandler");function D(h){r.onUnhandledError(h);try{const d=t[P];"function"==typeof d&&d.call(this,h)}catch{}}function N(h){return h&&h.then}function x(h){return h}function J(h){return n.reject(h)}const F=f("state"),R=f("value"),p=f("finally"),ee=f("parentPromiseValue"),U=f("parentPromiseState"),Y="Promise.then",B=null,y=!0,V=!1,E=0;function j(h,d){return l=>{try{K(h,d,l)}catch(_){K(h,!1,_)}}}const O=function(){let h=!1;return function(l){return function(){h||(h=!0,l.apply(null,arguments))}}},ne="Promise resolved with itself",he=f("currentTaskTrace");function K(h,d,l){const _=O();if(h===l)throw new TypeError(ne);if(h[F]===B){let b=null;try{("object"==typeof l||"function"==typeof l)&&(b=l&&l.then)}catch(C){return _(()=>{K(h,!1,C)})(),h}if(d!==V&&l instanceof n&&l.hasOwnProperty(F)&&l.hasOwnProperty(R)&&l[F]!==B)ue(l),K(h,l[F],l[R]);else if(d!==V&&"function"==typeof b)try{b.call(l,_(j(h,d)),_(j(h,!1)))}catch(C){_(()=>{K(h,!1,C)})()}else{h[F]=d;const C=h[R];if(h[R]=l,h[p]===p&&d===y&&(h[F]=h[U],h[R]=h[ee]),d===V&&l instanceof Error){const k=t.currentTask&&t.currentTask.data&&t.currentTask.data[L];k&&a(l,he,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(let k=0;k<C.length;)se(h,C[k++],C[k++],C[k++],C[k++]);if(0==C.length&&d==V){h[F]=E;let k=l;try{throw new Error("Uncaught (in promise): "+function u(h){return h&&h.toString===Object.prototype.toString?(h.constructor&&h.constructor.name||"")+": "+JSON.stringify(h):h?h.toString():Object.prototype.toString.call(h)}(l)+(l&&l.stack?"\n"+l.stack:""))}catch(Z){k=Z}w&&(k.throwOriginal=!0),k.rejection=l,k.promise=h,k.zone=t.current,k.task=t.currentTask,T.push(k),r.scheduleMicroTask()}}}return h}const W=f("rejectionHandledHandler");function ue(h){if(h[F]===E){try{const d=t[W];d&&"function"==typeof d&&d.call(this,{rejection:h[R],promise:h})}catch{}h[F]=V;for(let d=0;d<T.length;d++)h===T[d].promise&&T.splice(d,1)}}function se(h,d,l,_,b){ue(h);const C=h[F],k=C?"function"==typeof _?_:x:"function"==typeof b?b:J;d.scheduleMicroTask(Y,()=>{try{const Z=h[R],M=!!l&&p===l[p];M&&(l[ee]=Z,l[U]=C);const A=d.run(k,void 0,M&&k!==J&&k!==x?[]:[Z]);K(l,!0,A)}catch(Z){K(l,!1,Z)}},l)}const $=function(){},m=e.AggregateError;class n{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(d){return K(new this(null),y,d)}static reject(d){return K(new this(null),V,d)}static any(d){if(!d||"function"!=typeof d[Symbol.iterator])return Promise.reject(new m([],"All promises were rejected"));const l=[];let _=0;try{for(let k of d)_++,l.push(n.resolve(k))}catch{return Promise.reject(new m([],"All promises were rejected"))}if(0===_)return Promise.reject(new m([],"All promises were rejected"));let b=!1;const C=[];return new n((k,Z)=>{for(let M=0;M<l.length;M++)l[M].then(A=>{b||(b=!0,k(A))},A=>{C.push(A),_--,0===_&&(b=!0,Z(new m(C,"All promises were rejected")))})})}static race(d){let l,_,b=new this((Z,M)=>{l=Z,_=M});function C(Z){l(Z)}function k(Z){_(Z)}for(let Z of d)N(Z)||(Z=this.resolve(Z)),Z.then(C,k);return b}static all(d){return n.allWithCallback(d)}static allSettled(d){return(this&&this.prototype instanceof n?this:n).allWithCallback(d,{thenCallback:_=>({status:"fulfilled",value:_}),errorCallback:_=>({status:"rejected",reason:_})})}static allWithCallback(d,l){let _,b,C=new this((A,G)=>{_=A,b=G}),k=2,Z=0;const M=[];for(let A of d){N(A)||(A=this.resolve(A));const G=Z;try{A.then(z=>{M[G]=l?l.thenCallback(z):z,k--,0===k&&_(M)},z=>{l?(M[G]=l.errorCallback(z),k--,0===k&&_(M)):b(z)})}catch(z){b(z)}k++,Z++}return k-=2,0===k&&_(M),C}constructor(d){const l=this;if(!(l instanceof n))throw new Error("Must be an instanceof Promise.");l[F]=B,l[R]=[];try{const _=O();d&&d(_(j(l,y)),_(j(l,V)))}catch(_){K(l,!1,_)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return n}then(d,l){let _=this.constructor?.[Symbol.species];(!_||"function"!=typeof _)&&(_=this.constructor||n);const b=new _($),C=t.current;return this[F]==B?this[R].push(C,b,d,l):se(this,C,b,d,l),b}catch(d){return this.then(null,d)}finally(d){let l=this.constructor?.[Symbol.species];(!l||"function"!=typeof l)&&(l=n);const _=new l($);_[p]=p;const b=t.current;return this[F]==B?this[R].push(b,_,d,d):se(this,b,_,d,d),_}}n.resolve=n.resolve,n.reject=n.reject,n.race=n.race,n.all=n.all;const c=e[v]=e.Promise;e.Promise=n;const S=f("thenPatched");function I(h){const d=h.prototype,l=o(d,"then");if(l&&(!1===l.writable||!l.configurable))return;const _=d.then;d[g]=_,h.prototype.then=function(b,C){return new n((Z,M)=>{_.call(this,Z,M)}).then(b,C)},h[S]=!0}return r.patchThen=I,c&&(I(c),ae(e,"fetch",h=>function Q(h){return function(d,l){let _=h.apply(d,l);if(_ instanceof n)return _;let b=_.constructor;return b[S]||I(b),_}}(h))),Promise[t.__symbol__("uncaughtPromiseErrors")]=T,n}),Zone.__load_patch("toString",e=>{const t=Function.prototype.toString,r=H("OriginalDelegate"),o=H("Promise"),a=H("Error"),u=function(){if("function"==typeof this){const v=this[r];if(v)return"function"==typeof v?t.call(v):Object.prototype.toString.call(v);if(this===Promise){const g=e[o];if(g)return t.call(g)}if(this===Error){const g=e[a];if(g)return t.call(g)}}return t.call(this)};u[r]=t,Function.prototype.toString=u;const f=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":f.call(this)}});let ge=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ge=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ge=!1}const Ke={useG:!0},oe={},Ve={},Je=new RegExp("^"+Ne+"(\\w+)(true|false)$"),ct=H("propagationStopped");function Qe(e,t){const r=(t?t(e):e)+re,o=(t?t(e):e)+ie,a=Ne+r,u=Ne+o;oe[e]={},oe[e][re]=a,oe[e][ie]=u}function at(e,t,r,o){const a=o&&o.add||Re,u=o&&o.rm||Ae,f=o&&o.listeners||"eventListeners",T=o&&o.rmAll||"removeAllListeners",w=H(a),v="."+a+":",g="prependListener",L="."+g+":",P=function(R,p,ee){if(R.isRemoved)return;const U=R.callback;let Y;"object"==typeof U&&U.handleEvent&&(R.callback=y=>U.handleEvent(y),R.originalDelegate=U);try{R.invoke(R,p,[ee])}catch(y){Y=y}const B=R.options;return B&&"object"==typeof B&&B.once&&p[u].call(p,ee.type,R.originalDelegate?R.originalDelegate:R.callback,B),Y};function D(R,p,ee){if(!(p=p||e.event))return;const U=R||p.target||e,Y=U[oe[p.type][ee?ie:re]];if(Y){const B=[];if(1===Y.length){const y=P(Y[0],U,p);y&&B.push(y)}else{const y=Y.slice();for(let V=0;V<y.length&&(!p||!0!==p[ct]);V++){const E=P(y[V],U,p);E&&B.push(E)}}if(1===B.length)throw B[0];for(let y=0;y<B.length;y++){const V=B[y];t.nativeScheduleMicroTask(()=>{throw V})}}}const N=function(R){return D(this,R,!1)},x=function(R){return D(this,R,!0)};function J(R,p){if(!R)return!1;let ee=!0;p&&void 0!==p.useG&&(ee=p.useG);const U=p&&p.vh;let Y=!0;p&&void 0!==p.chkDup&&(Y=p.chkDup);let B=!1;p&&void 0!==p.rt&&(B=p.rt);let y=R;for(;y&&!y.hasOwnProperty(a);)y=Oe(y);if(!y&&R[a]&&(y=R),!y||y[w])return!1;const V=p&&p.eventNameToString,E={},j=y[w]=y[a],O=y[H(u)]=y[u],ne=y[H(f)]=y[f],he=y[H(T)]=y[T];let K;p&&p.prepend&&(K=y[H(p.prepend)]=y[p.prepend]);const n=ee?function(l){if(!E.isExisting)return j.call(E.target,E.eventName,E.capture?x:N,E.options)}:function(l){return j.call(E.target,E.eventName,l.invoke,E.options)},c=ee?function(l){if(!l.isRemoved){const _=oe[l.eventName];let b;_&&(b=_[l.capture?ie:re]);const C=b&&l.target[b];if(C)for(let k=0;k<C.length;k++)if(C[k]===l){C.splice(k,1),l.isRemoved=!0,0===C.length&&(l.allRemoved=!0,l.target[b]=null);break}}if(l.allRemoved)return O.call(l.target,l.eventName,l.capture?x:N,l.options)}:function(l){return O.call(l.target,l.eventName,l.invoke,l.options)},I=p&&p.diff?p.diff:function(l,_){const b=typeof _;return"function"===b&&l.callback===_||"object"===b&&l.originalDelegate===_},Q=Zone[H("UNPATCHED_EVENTS")],h=e[H("PASSIVE_EVENTS")],d=function(l,_,b,C,k=!1,Z=!1){return function(){const M=this||e;let A=arguments[0];p&&p.transferEventName&&(A=p.transferEventName(A));let G=arguments[1];if(!G)return l.apply(this,arguments);if(we&&"uncaughtException"===A)return l.apply(this,arguments);let z=!1;if("function"!=typeof G){if(!G.handleEvent)return l.apply(this,arguments);z=!0}if(U&&!U(l,G,M,arguments))return;const pe=ge&&!!h&&-1!==h.indexOf(A),de=function W(l,_){return!ge&&"object"==typeof l&&l?!!l.capture:ge&&_?"boolean"==typeof l?{capture:l,passive:!0}:l?"object"==typeof l&&!1!==l.passive?{...l,passive:!0}:l:{passive:!0}:l}(arguments[2],pe);if(Q)for(let Se=0;Se<Q.length;Se++)if(A===Q[Se])return pe?l.call(M,A,G,de):l.apply(this,arguments);const dt=!!de&&("boolean"==typeof de||de.capture),Et=!(!de||"object"!=typeof de)&&de.once,kt=Zone.current;let _t=oe[A];_t||(Qe(A,V),_t=oe[A]);const gt=_t[dt?ie:re];let nt,Me=M[gt],pt=!1;if(Me){if(pt=!0,Y)for(let Se=0;Se<Me.length;Se++)if(I(Me[Se],G))return}else Me=M[gt]=[];const yt=M.constructor.name,mt=Ve[yt];mt&&(nt=mt[A]),nt||(nt=yt+_+(V?V(A):A)),E.options=de,Et&&(E.options.once=!1),E.target=M,E.capture=dt,E.eventName=A,E.isExisting=pt;const Fe=ee?Ke:void 0;Fe&&(Fe.taskData=E);const ye=kt.scheduleEventTask(nt,G,Fe,b,C);return E.target=null,Fe&&(Fe.taskData=null),Et&&(de.once=!0),!ge&&"boolean"==typeof ye.options||(ye.options=de),ye.target=M,ye.capture=dt,ye.eventName=A,z&&(ye.originalDelegate=G),Z?Me.unshift(ye):Me.push(ye),k?M:void 0}};return y[a]=d(j,v,n,c,B),K&&(y[g]=d(K,L,function(l){return K.call(E.target,E.eventName,l.invoke,E.options)},c,B,!0)),y[u]=function(){const l=this||e;let _=arguments[0];p&&p.transferEventName&&(_=p.transferEventName(_));const b=arguments[2],C=!!b&&("boolean"==typeof b||b.capture),k=arguments[1];if(!k)return O.apply(this,arguments);if(U&&!U(O,k,l,arguments))return;const Z=oe[_];let M;Z&&(M=Z[C?ie:re]);const A=M&&l[M];if(A)for(let G=0;G<A.length;G++){const z=A[G];if(I(z,k))return A.splice(G,1),z.isRemoved=!0,0===A.length&&(z.allRemoved=!0,l[M]=null,"string"==typeof _)&&(l[Ne+"ON_PROPERTY"+_]=null),z.zone.cancelTask(z),B?l:void 0}return O.apply(this,arguments)},y[f]=function(){const l=this||e;let _=arguments[0];p&&p.transferEventName&&(_=p.transferEventName(_));const b=[],C=lt(l,V?V(_):_);for(let k=0;k<C.length;k++){const Z=C[k];b.push(Z.originalDelegate?Z.originalDelegate:Z.callback)}return b},y[T]=function(){const l=this||e;let _=arguments[0];if(_){p&&p.transferEventName&&(_=p.transferEventName(_));const b=oe[_];if(b){const Z=l[b[re]],M=l[b[ie]];if(Z){const A=Z.slice();for(let G=0;G<A.length;G++){const z=A[G];this[u].call(this,_,z.originalDelegate?z.originalDelegate:z.callback,z.options)}}if(M){const A=M.slice();for(let G=0;G<A.length;G++){const z=A[G];this[u].call(this,_,z.originalDelegate?z.originalDelegate:z.callback,z.options)}}}}else{const b=Object.keys(l);for(let C=0;C<b.length;C++){const Z=Je.exec(b[C]);let M=Z&&Z[1];M&&"removeListener"!==M&&this[T].call(this,M)}this[T].call(this,"removeListener")}if(B)return this},le(y[a],j),le(y[u],O),he&&le(y[T],he),ne&&le(y[f],ne),!0}let F=[];for(let R=0;R<r.length;R++)F[R]=J(r[R],o);return F}function lt(e,t){if(!t){const u=[];for(let f in e){const T=Je.exec(f);let w=T&&T[1];if(w&&(!t||w===t)){const v=e[f];if(v)for(let g=0;g<v.length;g++)u.push(v[g])}}return u}let r=oe[t];r||(Qe(t),r=oe[t]);const o=e[r[re]],a=e[r[ie]];return o?a?o.concat(a):o.slice():a?a.slice():[]}function et(e,t){const r=e.Event;r&&r.prototype&&t.patchMethod(r.prototype,"stopImmediatePropagation",o=>function(a,u){a[ct]=!0,o&&o.apply(a,u)})}function tt(e,t,r,o,a){const u=Zone.__symbol__(o);if(t[u])return;const f=t[u]=t[o];t[o]=function(T,w,v){return w&&w.prototype&&a.forEach(function(g){const L=`${r}.${o}::`+g,P=w.prototype;try{if(P.hasOwnProperty(g)){const D=e.ObjectGetOwnPropertyDescriptor(P,g);D&&D.value?(D.value=e.wrapWithCurrentZone(D.value,L),e._redefineProperty(w.prototype,g,D)):P[g]&&(P[g]=e.wrapWithCurrentZone(P[g],L))}else P[g]&&(P[g]=e.wrapWithCurrentZone(P[g],L))}catch{}}),f.call(t,T,w,v)},e.attachOriginToPatched(t[o],f)}function ut(e,t,r){if(!r||0===r.length)return t;const o=r.filter(u=>u.target===e);if(!o||0===o.length)return t;const a=o[0].ignoreProperties;return t.filter(u=>-1===a.indexOf(u))}function ft(e,t,r,o){e&&Xe(e,ut(e,t,r),o)}function Ge(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}Zone.__load_patch("util",(e,t,r)=>{const o=Ge(e);r.patchOnProperties=Xe,r.patchMethod=ae,r.bindArguments=xe,r.patchMacroTask=Ye;const a=t.__symbol__("BLACK_LISTED_EVENTS"),u=t.__symbol__("UNPATCHED_EVENTS");e[u]&&(e[a]=e[u]),e[a]&&(t[a]=t[u]=e[a]),r.patchEventPrototype=et,r.patchEventTarget=at,r.isIEOrEdge=it,r.ObjectDefineProperty=me,r.ObjectGetOwnPropertyDescriptor=_e,r.ObjectCreate=ke,r.ArraySlice=rt,r.patchClass=Pe,r.wrapWithCurrentZone=Le,r.filterProperties=ut,r.attachOriginToPatched=le,r._redefineProperty=Object.defineProperty,r.patchCallbacks=tt,r.getGlobalObjects=()=>({globalSources:Ve,zoneSymbolEventNames:oe,eventNames:o,isBrowser:De,isMix:$e,isNode:we,TRUE_STR:ie,FALSE_STR:re,ZONE_SYMBOL_PREFIX:Ne,ADD_EVENT_LISTENER_STR:Re,REMOVE_EVENT_LISTENER_STR:Ae})});const Ze=H("zoneTask");function Te(e,t,r,o){let a=null,u=null;r+=o;const f={};function T(v){const g=v.data;return g.args[0]=function(){return v.invoke.apply(this,arguments)},g.handleId=a.apply(e,g.args),v}function w(v){return u.call(e,v.data.handleId)}a=ae(e,t+=o,v=>function(g,L){if("function"==typeof L[0]){const P={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?L[1]||0:void 0,args:L},D=L[0];L[0]=function(){try{return D.apply(this,arguments)}finally{P.isPeriodic||("number"==typeof P.handleId?delete f[P.handleId]:P.handleId&&(P.handleId[Ze]=null))}};const N=We(t,L[0],P,T,w);if(!N)return N;const x=N.data.handleId;return"number"==typeof x?f[x]=N:x&&(x[Ze]=N),x&&x.ref&&x.unref&&"function"==typeof x.ref&&"function"==typeof x.unref&&(N.ref=x.ref.bind(x),N.unref=x.unref.bind(x)),"number"==typeof x||x?x:N}return v.apply(e,L)}),u=ae(e,r,v=>function(g,L){const P=L[0];let D;"number"==typeof P?D=f[P]:(D=P&&P[Ze],D||(D=P)),D&&"string"==typeof D.type?"notScheduled"!==D.state&&(D.cancelFn&&D.data.isPeriodic||0===D.runCount)&&("number"==typeof P?delete f[P]:P&&(P[Ze]=null),D.zone.cancelTask(D)):v.apply(e,L)})}Zone.__load_patch("legacy",e=>{const t=e[Zone.__symbol__("legacyPatch")];t&&t()}),Zone.__load_patch("timers",e=>{const t="set",r="clear";Te(e,t,r,"Timeout"),Te(e,t,r,"Interval"),Te(e,t,r,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{Te(e,"request","cancel","AnimationFrame"),Te(e,"mozRequest","mozCancel","AnimationFrame"),Te(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,t)=>{const r=["alert","prompt","confirm"];for(let o=0;o<r.length;o++)ae(e,r[o],(u,f,T)=>function(w,v){return t.current.run(u,e,v,T)})}),Zone.__load_patch("EventTarget",(e,t,r)=>{(function s(e,t){t.patchEventPrototype(e,t)})(e,r),function i(e,t){if(Zone[t.symbol("patchEventTarget")])return;const{eventNames:r,zoneSymbolEventNames:o,TRUE_STR:a,FALSE_STR:u,ZONE_SYMBOL_PREFIX:f}=t.getGlobalObjects();for(let w=0;w<r.length;w++){const v=r[w],P=f+(v+u),D=f+(v+a);o[v]={},o[v][u]=P,o[v][a]=D}const T=e.EventTarget;T&&T.prototype&&t.patchEventTarget(e,t,[T&&T.prototype])}(e,r);const o=e.XMLHttpRequestEventTarget;o&&o.prototype&&r.patchEventTarget(e,r,[o.prototype])}),Zone.__load_patch("MutationObserver",(e,t,r)=>{Pe("MutationObserver"),Pe("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,t,r)=>{Pe("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,t,r)=>{Pe("FileReader")}),Zone.__load_patch("on_property",(e,t,r)=>{!function ht(e,t){if(we&&!$e||Zone[e.symbol("patchEvents")])return;const r=t.__Zone_ignore_on_properties;let o=[];if(De){const a=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const u=function st(){try{const e=Ee.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];ft(a,Ge(a),r&&r.concat(u),Oe(a))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<o.length;a++){const u=t[o[a]];u&&u.prototype&&ft(u.prototype,Ge(u.prototype),r)}}(r,e)}),Zone.__load_patch("customElements",(e,t,r)=>{!function Tt(e,t){const{isBrowser:r,isMix:o}=t.getGlobalObjects();(r||o)&&e.customElements&&"customElements"in e&&t.patchCallbacks(t,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,r)}),Zone.__load_patch("XHR",(e,t)=>{!function w(v){const g=v.XMLHttpRequest;if(!g)return;const L=g.prototype;let D=L[fe],N=L[Ce];if(!D){const E=v.XMLHttpRequestEventTarget;if(E){const j=E.prototype;D=j[fe],N=j[Ce]}}const x="readystatechange",J="scheduled";function F(E){const j=E.data,O=j.target;O[u]=!1,O[T]=!1;const ne=O[a];D||(D=O[fe],N=O[Ce]),ne&&N.call(O,x,ne);const he=O[a]=()=>{if(O.readyState===O.DONE)if(!j.aborted&&O[u]&&E.state===J){const W=O[t.__symbol__("loadfalse")];if(0!==O.status&&W&&W.length>0){const ue=E.invoke;E.invoke=function(){const se=O[t.__symbol__("loadfalse")];for(let q=0;q<se.length;q++)se[q]===E&&se.splice(q,1);!j.aborted&&E.state===J&&ue.call(E)},W.push(E)}else E.invoke()}else!j.aborted&&!1===O[u]&&(O[T]=!0)};return D.call(O,x,he),O[r]||(O[r]=E),y.apply(O,j.args),O[u]=!0,E}function R(){}function p(E){const j=E.data;return j.aborted=!0,V.apply(j.target,j.args)}const ee=ae(L,"open",()=>function(E,j){return E[o]=0==j[2],E[f]=j[1],ee.apply(E,j)}),Y=H("fetchTaskAborting"),B=H("fetchTaskScheduling"),y=ae(L,"send",()=>function(E,j){if(!0===t.current[B]||E[o])return y.apply(E,j);{const O={target:E,url:E[f],isPeriodic:!1,args:j,aborted:!1},ne=We("XMLHttpRequest.send",R,O,F,p);E&&!0===E[T]&&!O.aborted&&ne.state===J&&ne.invoke()}}),V=ae(L,"abort",()=>function(E,j){const O=function P(E){return E[r]}(E);if(O&&"string"==typeof O.type){if(null==O.cancelFn||O.data&&O.data.aborted)return;O.zone.cancelTask(O)}else if(!0===t.current[Y])return V.apply(E,j)})}(e);const r=H("xhrTask"),o=H("xhrSync"),a=H("xhrListener"),u=H("xhrScheduled"),f=H("xhrURL"),T=H("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function ve(e,t){const r=e.constructor.name;for(let o=0;o<t.length;o++){const a=t[o],u=e[a];if(u){if(!qe(_e(e,a)))continue;e[a]=(T=>{const w=function(){return T.apply(this,xe(arguments,r+"."+a))};return le(w,T),w})(u)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,t)=>{function r(o){return function(a){lt(e,o).forEach(f=>{const T=e.PromiseRejectionEvent;if(T){const w=new T(o,{promise:a.promise,reason:a.rejection});f.invoke(w)}})}}e.PromiseRejectionEvent&&(t[H("unhandledPromiseRejectionHandler")]=r("unhandledrejection"),t[H("rejectionHandledHandler")]=r("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",(e,t,r)=>{!function ze(e,t){t.patchMethod(e,"queueMicrotask",r=>function(o,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}(e,r)})}},_e=>{var me=ke=>_e(_e.s=ke);me(1253),me(8332)}]);