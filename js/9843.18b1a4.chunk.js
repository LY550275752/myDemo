"use strict";(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[9843,1025],{69581:(e,a,n)=>{n.r(a),n.d(a,{default:()=>k});var s=n(89810),t=n(2525),c=n(1725),l=n(48402),o=n(46310),p=function(e,a,n,s){return new(n||(n=Promise))((function(t,c){function l(e){try{p(s.next(e))}catch(e){c(e)}}function o(e){try{p(s.throw(e))}catch(e){c(e)}}function p(e){var a;e.done?t(e.value):(a=e.value,a instanceof n?a:new n((function(e){e(a)}))).then(l,o)}p((s=s.apply(e,a||[])).next())}))};const r={class:"message"},d={key:0,class:"message-content"},i={key:1,class:"message-empty"},m=(g=()=>(0,s.createElementVNode)("img",{src:t,draggable:"false"},null,-1),(0,s.pushScopeId)("data-v-7d3ae062"),g=g(),(0,s.popScopeId)(),g);var g;const u=(0,s.defineComponent)({__name:"messageList",props:{messageList:{type:Array,default:()=>[]},expandAppMessage:{type:Array,default:()=>[]}},emits:["onExpandChange"],setup(e,{emit:a}){const n=e,t=l.nC.get(c.pX);function g(){return p(this,void 0,void 0,(function*(){0!==n.messageList.length&&t.handleDeleteAllAppMessage()}))}function u(e){a("onExpandChange",e)}return(a,n)=>((0,s.openBlock)(),(0,s.createElementBlock)("div",r,[(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)(["message-header",{"message-header-extra-padding":e.messageList.length>6}])},[(0,s.createElementVNode)("span",{class:"message-header-clear",onClick:g},"全部清除")],2),e.messageList.length>0?((0,s.openBlock)(),(0,s.createElementBlock)("div",d,[((0,s.openBlock)(!0),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)(e.messageList,(a=>((0,s.openBlock)(),(0,s.createBlock)(o.default,{class:"message-content-item",key:a.app.appId,param:a,"is-expand":e.expandAppMessage.includes(a.app.appId),onOnExpandChange:u},null,8,["param","is-expand"])))),128))])):((0,s.openBlock)(),(0,s.createElementBlock)("div",i,[m,(0,s.createTextVNode)(" 暂无消息 ")]))]))}});const k=(0,n(57775).Z)(u,[["__scopeId","data-v-7d3ae062"]])},2525:(e,a,n)=>{e.exports=n.p+"imgs/message.18b1a4.svg"}}]);