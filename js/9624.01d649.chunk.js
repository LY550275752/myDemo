"use strict";(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[9624],{59624:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(89810),l=n(1725),i=n(48402),o=n(19816),s=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function s(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((a=a.apply(e,t||[])).next())}))};const c=e=>((0,a.pushScopeId)("data-v-44b9a9d4"),e=e(),(0,a.popScopeId)(),e),d={key:0,class:"detail"},r={class:"detail-header"},u=["src"],p={class:"detail-header-name"},m={class:"detail-item"},v=c((()=>(0,a.createElementVNode)("span",{class:"detail-item-label"},"在“消息中心”显示",-1))),f={class:"detail-item"},g=c((()=>(0,a.createElementVNode)("span",{class:"detail-item-label"},"静默通知",-1))),V=c((()=>(0,a.createElementVNode)("div",{class:"detail-description"},"开启静默通知，则不展示新消息卡片",-1))),h={key:0,class:"detail-item"},C=c((()=>(0,a.createElementVNode)("span",{class:"detail-item-label"},"消息提示音",-1))),k=(0,a.defineComponent)({__name:"settingItem",props:{app:{type:Object,default:()=>{},require:!0}},setup(e){const t=e,n=i.nC.get(l.pX);var c=(0,a.ref)(null),k=!0;function N(){c.value&&(c.value.setting.isSilence?c.value.setting.isBeep=!1:c.value.setting.isBeep=!0,w())}function w(){k||(o.k.info("[message-center]:应用消息设置",c.value),c.value&&n.updateApp((0,a.toRaw)(c.value)))}return(0,a.onMounted)((()=>{c.value=t.app;var e=n.onMessageCenterSettingUpdate.on((()=>{!function(){s(this,void 0,void 0,(function*(){if(c.value){const e=yield n.getAppById(c.value.appId);e&&(c.value.setting=e.setting)}}))}()}));(0,a.onUnmounted)((()=>{e.dispose()})),setTimeout((()=>{k=!1}),400)})),(e,t)=>{const n=(0,a.resolveComponent)("el-switch");return(0,a.unref)(c)?((0,a.openBlock)(),(0,a.createElementBlock)("div",d,[(0,a.createElementVNode)("div",r,[(0,a.createElementVNode)("img",{class:"detail-header-icon",src:(0,a.unref)(c).iconUrl},null,8,u),(0,a.createElementVNode)("span",p,(0,a.toDisplayString)((0,a.unref)(c).appName),1)]),(0,a.createElementVNode)("div",m,[v,(0,a.createVNode)(n,{onChange:w,class:"detail-item-switch",modelValue:(0,a.unref)(c).setting.isShowInMessageCenter,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,a.unref)(c).setting.isShowInMessageCenter=e),"active-color":"#3C78F0"},null,8,["modelValue"])]),(0,a.unref)(c).setting.isShowInMessageCenter?((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:0},[(0,a.createElementVNode)("div",f,[g,(0,a.createVNode)(n,{onChange:N,class:"detail-item-switch",modelValue:(0,a.unref)(c).setting.isSilence,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,a.unref)(c).setting.isSilence=e),"active-color":"#3C78F0"},null,8,["modelValue"])]),V,!1===(0,a.unref)(c).setting.isSilence?((0,a.openBlock)(),(0,a.createElementBlock)("div",h,[C,(0,a.createVNode)(n,{onChange:w,class:"detail-item-switch",modelValue:(0,a.unref)(c).setting.isBeep,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,a.unref)(c).setting.isBeep=e),"active-color":"#3C78F0"},null,8,["modelValue"])])):(0,a.createCommentVNode)("",!0)],64)):(0,a.createCommentVNode)("",!0)])):(0,a.createCommentVNode)("",!0)}}});const N=(0,n(57775).Z)(k,[["__scopeId","data-v-44b9a9d4"]])}}]);