"use strict";(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[5188],{33745:(n,e,t)=>{t.d(e,{$E:()=>v,EL:()=>c,Ib:()=>h,NB:()=>f,OR:()=>g,Vd:()=>y,aM:()=>L,d1:()=>o,d9:()=>E,eo:()=>x,iP:()=>m,rP:()=>k});var r=t(89810),i="undefined"!=typeof window;function u(n){return i?requestAnimationFrame(n):-1}function o(n){u((function(){return u(n)}))}var a=function(n,e){return{top:0,left:0,right:n,bottom:e,width:n,height:e}},c=function(n){var e=(0,r.unref)(n);if(e===window){var t=e.innerWidth,i=e.innerHeight;return a(t,i)}return(null==e?void 0:e.getBoundingClientRect)?e.getBoundingClientRect():a(0,0)};function f(n){var e=(0,r.inject)(n,null);if(e){var t=(0,r.getCurrentInstance)(),i=e.link,u=e.unlink,o=e.internalChildren;return i(t),(0,r.onUnmounted)((function(){return u(t)})),{parent:e,index:(0,r.computed)((function(){return o.indexOf(t)}))}}return{parent:null,index:(0,r.ref)(-1)}}var d=function(n,e){var t=n.indexOf(e);return-1===t?n.findIndex((function(n){return void 0!==e.key&&null!==e.key&&n.type===e.type&&n.key===e.key})):t};function l(n,e,t){var i,u,o=(i=n.subTree.children,u=[],function n(e){Array.isArray(e)&&e.forEach((function(e){var t;(0,r.isVNode)(e)&&(u.push(e),(null==(t=e.component)?void 0:t.subTree)&&(u.push(e.component.subTree),n(e.component.subTree.children)),e.children&&n(e.children))}))}(i),u);t.sort((function(n,e){return d(o,n.vnode)-d(o,e.vnode)}));var a=t.map((function(n){return n.proxy}));e.sort((function(n,e){return a.indexOf(n)-a.indexOf(e)}))}function v(n){var e=(0,r.reactive)([]),t=(0,r.reactive)([]),i=(0,r.getCurrentInstance)();return{children:e,linkChildren:function(u){(0,r.provide)(n,Object.assign({link:function(n){n.proxy&&(t.push(n),e.push(n.proxy),l(i,e,t))},unlink:function(n){var r=t.indexOf(n);e.splice(r,1),t.splice(r,1)},children:e,internalChildren:t},u))}}}var s,p;function h(n){var e;(0,r.onMounted)((function(){n(),(0,r.nextTick)((function(){e=!0}))})),(0,r.onActivated)((function(){e&&n()}))}function g(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(i){var u,o,a=t.target,c=void 0===a?window:a,f=t.passive,d=void 0!==f&&f,l=t.capture,v=void 0!==l&&l,s=!1,p=function(t){if(!s){var i=(0,r.unref)(t);i&&!u&&(i.addEventListener(n,e,{capture:v,passive:d}),u=!0)}},g=function(t){if(!s){var i=(0,r.unref)(t);i&&u&&(i.removeEventListener(n,e,v),u=!1)}};return(0,r.onUnmounted)((function(){return g(c)})),(0,r.onDeactivated)((function(){return g(c)})),h((function(){return p(c)})),(0,r.isRef)(c)&&(o=(0,r.watch)(c,(function(n,e){g(e),p(n)}))),function(){null==o||o(),g(c),s=!0}}}function y(n,e){if(i){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).eventName;g(void 0===t?"click":t,(function(t){(Array.isArray(n)?n:[n]).every((function(n){var e=(0,r.unref)(n);return e&&!e.contains(t.target)}))&&e(t)}),{target:document})}}function m(){if(!s&&(s=(0,r.ref)(0),p=(0,r.ref)(0),i)){var n=function(){s.value=window.innerWidth,p.value=window.innerHeight};n(),window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",n,{passive:!0})}return{width:s,height:p}}var w,b=/scroll|auto|overlay/i,C=i?window:void 0;function A(n){return"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType}function k(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,t=n;t&&t!==e&&A(t);){var r=window.getComputedStyle(t).overflowY;if(b.test(r))return t;t=t.parentNode}return e}function x(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,t=(0,r.ref)();return(0,r.onMounted)((function(){n.value&&(t.value=k(n.value,e))})),t}function E(){if(!w&&(w=(0,r.ref)("visible"),i)){var n=function(){w.value=document.hidden?"hidden":"visible"};n(),window.addEventListener("visibilitychange",n)}return w}var O=Symbol("van-field");function L(n){var e=(0,r.inject)(O,null);e&&!e.customValue.value&&(e.customValue.value=n,(0,r.watch)(n,(function(){e.resetValidation(),e.validateWithTrigger("onChange")})))}},75566:(n,e,t)=>{t.d(e,{U2:()=>a,ZT:()=>i,_f:()=>o,ei:()=>c,l7:()=>u,qo:()=>f});var r=t(43500);function i(){}var u=Object.assign,o="undefined"!=typeof window;function a(n,e){var t=e.split("."),i=n;return t.forEach((function(n){var e;i=(0,r.Kn)(i)&&null!=(e=i[n])?e:""})),i}function c(n,e,t){return e.reduce((function(e,r){return t&&void 0===n[r]||(e[r]=n[r]),e}),{})}var f=function(n){return Array.isArray(n)?n:[n]}},50729:(n,e,t)=>{t.d(e,{do:()=>g});var r=t(75566),i=t(24638),u=t(43500),o=t(41638),a=t(89810),c=Object.prototype.hasOwnProperty;function f(n,e){return Object.keys(e).forEach((function(t){!function(n,e,t){var r=e[t];(0,u.Xq)(r)&&(c.call(n,t)&&(0,u.Kn)(r)?n[t]=f(Object(n[t]),r):n[t]=r)}(n,e,t)})),n}var d=(0,a.ref)("zh-CN"),l=(0,a.reactive)({"zh-CN":{name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:function(n,e){return"".concat(n,"年").concat(e,"月")},rangePrompt:function(n){return"最多选择 ".concat(n," 天")}},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:function(n){return"".concat(n,"折")},condition:function(n){return"满".concat(n,"元可用")}},vanCouponCell:{title:"优惠券",count:function(n){return"".concat(n,"张可用")}},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码不正确",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}}}),v={messages:function(){return l[d.value]},use:function(n,e){d.value=n,this.add((0,o.Z)({},n,e))},add:function(){f(l,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}};function s(n){var e=(0,i._A)(n)+".";return function(n){for(var t=v.messages(),i=(0,r.U2)(t,e+n)||(0,r.U2)(t,n),o=arguments.length,a=new Array(o>1?o-1:0),c=1;c<o;c++)a[c-1]=arguments[c];return(0,u.mf)(i)?i.apply(void 0,a):i}}function p(n,e){return e?"string"==typeof e?" ".concat(n,"--").concat(e):Array.isArray(e)?e.reduce((function(e,t){return e+p(n,t)}),""):Object.keys(e).reduce((function(t,r){return t+(e[r]?p(n,r):"")}),""):""}function h(n){return function(e,t){return e&&"string"!=typeof e&&(t=e,e=""),e=e?"".concat(n,"__").concat(e):n,"".concat(e).concat(p(e,t))}}function g(n){var e="van-".concat(n);return[e,h(e),s(e)]}},64338:(n,e,t)=>{t.d(e,{PF:()=>a,bn:()=>d,cx:()=>u,uK:()=>l,xj:()=>c});var r=t(33745),i=t(89810);function u(n){var e="scrollTop"in n?n.scrollTop:n.pageYOffset;return Math.max(e,0)}(0,t(43500).gn)();var o=function(n){return n.stopPropagation()};function a(n,e){("boolean"!=typeof n.cancelable||n.cancelable)&&n.preventDefault(),e&&o(n)}function c(n){var e=(0,i.unref)(n);if(!e)return!1;var t=window.getComputedStyle(e),r="none"===t.display,u=null===e.offsetParent&&"fixed"!==t.position;return r||u}var f=(0,r.iP)(),d=f.width,l=f.height},24638:(n,e,t)=>{t.d(e,{As:()=>f,GL:()=>p,LU:()=>l,Nn:()=>a,Xn:()=>c,_A:()=>s,uZ:()=>h});var r,i=t(75566),u=t(64338),o=t(43500);function a(n){if((0,o.Xq)(n))return(0,o.kE)(n)?"".concat(n,"px"):String(n)}function c(n){if((0,o.Xq)(n)){if(Array.isArray(n))return{width:a(n[0]),height:a(n[1])};var e=a(n);return{width:e,height:e}}}function f(n){var e={};return void 0!==n&&(e.zIndex=+n),e}function d(n){return+(n=n.replace(/rem/g,""))*function(){if(!r){var n=document.documentElement,e=n.style.fontSize||window.getComputedStyle(n).fontSize;r=parseFloat(e)}return r}()}function l(n){if("number"==typeof n)return n;if(i._f){if(n.includes("rem"))return d(n);if(n.includes("vw"))return function(n){return+(n=n.replace(/vw/g,""))*u.bn.value/100}(n);if(n.includes("vh"))return function(n){return+(n=n.replace(/vh/g,""))*u.uK.value/100}(n)}return parseFloat(n)}var v=/-(\w)/g,s=function(n){return n.replace(v,(function(n,e){return e.toUpperCase()}))},p=function(n){return n.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"")};var h=function(n,e,t){return Math.min(Math.max(n,e),t)}},24577:(n,e,t)=>{t.d(e,{Ce:()=>a,J5:()=>u,Or:()=>i,SI:()=>f,SQ:()=>d,Vg:()=>r,ir:()=>o,qM:()=>c});var r=null,i=[Number,String],u={type:Boolean,default:!0},o=function(n){return{type:n,required:!0}},a=function(){return{type:Array,default:function(){return[]}}},c=function(n){return{type:Number,default:n}},f=function(n){return{type:i,default:n}},d=function(n){return{type:String,default:n}}},43500:(n,e,t)=>{t.d(e,{Kn:()=>a,Xq:()=>u,gn:()=>d,kE:()=>f,mf:()=>o,tI:()=>c});var r=t(58526),i=t(75566),u=function(n){return null!=n},o=function(n){return"function"==typeof n},a=function(n){return null!==n&&"object"===(0,r.Z)(n)},c=function(n){return a(n)&&o(n.then)&&o(n.catch)};var f=function(n){return"number"==typeof n||/^\d+(\.\d+)?$/.test(n)},d=function(){return!!i._f&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},28125:(n,e,t)=>{t.d(e,{n:()=>i});var r=t(24638);function i(n){return n.install=function(e){var t=n.name;t&&(e.component(t,n),e.component((0,r._A)("-".concat(t)),n))},n}},89170:(n,e,t)=>{t.r(e)}}]);