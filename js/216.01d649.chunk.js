"use strict";(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[216],{50216:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var o=n(89810);const c={class:"box"},s=["onClick"],l={class:"box-item-host"},r={key:0,class:"box-item-host-check"},i={class:"box-item-host-content"},a=["onClick"],d={key:1,class:"box-empty"};var u=function(e,t,n,o){return new(n||(n=Promise))((function(c,s){function l(e){try{i(o.next(e))}catch(e){s(e)}}function r(e){try{i(o.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}i((o=o.apply(e,t||[])).next())}))};const h=(0,o.defineComponent)({name:"SpecList",setup(){const e=(0,o.ref)(""),t=(0,o.ref)([{host:"https://clientconn.bgzs.site:1443",updateTime:1644890205716},{host:"https://clientconn.bgzs.site:1444",updateTime:1644890205717},{host:"https://clientconn.bgzs.site:1445",updateTime:1644890205718},{host:"https://clientconn.bgzs.site:1446",updateTime:1644890205719}]),n=(0,o.computed)((()=>{var n;if(0===(null===(n=e.value)||void 0===n?void 0:n.length))return!1;let o=t.value.findIndex((t=>{var n;return t.host===(null===(n=e.value)||void 0===n?void 0:n.trim())}));return o>-1})),c=()=>{t.value=t.value.filter((e=>e.host&&e.host.length>0)),t.value=t.value.sort(((e,t)=>t.updateTime-e.updateTime))},s=e=>{var t=new URL(e);const{protocol:n,hostname:o,port:c}=t;var s=o.replace(/[^\/[.:]+/g,(function(e){const{length:t}=e;return e.charAt(0)+"*".repeat(t-1)})),l=c.replace(/\d+/g,(function(e){const{length:t}=e;return"*".repeat(t)}));return e.endsWith("/")?`${n}://${s}:${l}/`:`${n}://${s}:${l}`},l=e=>{var t=e.lastIndexOf(".");return e.replace(/[^\/.:]\d+/g,(function(e,n){const{length:o}=e;return t+1===n?e:3===o?e.charAt(0)+"*".repeat(o-1):2===o||o>3?"*".repeat(o):"*"}))};return(0,o.onMounted)((()=>{c()})),{host:e,list:t,isSHowCheck:n,initList:c,onSelect:t=>{e.value=t.host},onRemove:e=>u(this,void 0,void 0,(function*(){c()})),maskAddress:e=>function(e){return/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(e)}(new URL(e).hostname)?l(e):s(e)}}});const p=(0,n(57775).Z)(h,[["render",function(e,t,n,u,h,p){const m=(0,o.resolveComponent)("check"),v=(0,o.resolveComponent)("el-icon"),k=(0,o.resolveComponent)("circle-close");return(0,o.openBlock)(),(0,o.createElementBlock)("div",c,[e.list.length>0?((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,{key:0},(0,o.renderList)(e.list,(t=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{class:"box-item",key:t._id,onClick:n=>e.onSelect(t)},[(0,o.createElementVNode)("div",l,[e.isSHowCheck?((0,o.openBlock)(),(0,o.createElementBlock)("span",r,[t.host===e.host.trim()?((0,o.openBlock)(),(0,o.createBlock)(v,{key:0},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(m)])),_:1})):(0,o.createCommentVNode)("",!0)])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("span",i,(0,o.toDisplayString)(e.maskAddress(t.host)),1)]),(0,o.createElementVNode)("span",{class:"box-item-icon",onClick:(0,o.withModifiers)((n=>e.onRemove(t)),["stop"])},[(0,o.createVNode)(v,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(k)])),_:1})],8,a)],8,s)))),128)):((0,o.openBlock)(),(0,o.createElementBlock)("div",d,"暂无专线历史"))])}],["__scopeId","data-v-ec365ab4"]])}}]);