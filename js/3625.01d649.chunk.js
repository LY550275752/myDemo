"use strict";(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[3625,9675],{39675:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var a=t(89810),l=t(1725),c=t(48402);const o={class:"item-header"},s=(r=()=>(0,a.createElementVNode)("div",{class:"item-header-left"},[(0,a.createElementVNode)("span",{class:"item-header-left-icon"},[(0,a.createElementVNode)("i",{class:"iconfont icon-announcement-empty"})]),(0,a.createElementVNode)("span",{class:"item-header-left-name"},"公告")],-1),(0,a.pushScopeId)("data-v-01a977fa"),r=r(),(0,a.popScopeId)(),r);var r;const m={class:"item-header-right"},d={class:"item-header-right-time"},i={class:"item-content"},u={class:"item-content-title single-line"},p={key:0,class:"item-content-title-unread"},v={class:"item-content-sub single-line"},k=(0,a.defineComponent)({__name:"announcementItem",props:{announcement:{type:Object,require:!0,default:()=>{}}},setup(e){const n=e,t=c.nC.get(l.pX);function r(){t.openMessageDetail({data:n.announcement,source:l.Vh.MESSAGE_CENTER})}return(n,l)=>{return(0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"item",onClick:r},[(0,a.createElementVNode)("div",o,[s,(0,a.createElementVNode)("div",m,[(0,a.createElementVNode)("div",d,(0,a.toDisplayString)((c=e.announcement.validTime,t.formatTime(c))),1)])]),(0,a.createElementVNode)("div",i,[(0,a.createElementVNode)("div",u,[(0,a.createTextVNode)((0,a.toDisplayString)(e.announcement.title)+" ",1),0===e.announcement.haveRead?((0,a.openBlock)(),(0,a.createElementBlock)("span",p)):(0,a.createCommentVNode)("",!0)]),(0,a.createElementVNode)("div",v,(0,a.toDisplayString)(e.announcement.content),1)])]);var c}}});const f=(0,t(57775).Z)(k,[["__scopeId","data-v-01a977fa"]])},23625:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var a=t(89810),l=t(2525),c=t(1725),o=t(48402),s=t(39675);const r=e=>((0,a.pushScopeId)("data-v-03ed55f4"),e=e(),(0,a.popScopeId)(),e),m={class:"announcement"},d={class:"announcement-header-select"},i={key:0,class:"announcement-content"},u={key:1,class:"announcement-empty"},p=r((()=>(0,a.createElementVNode)("img",{src:l,draggable:"false"},null,-1))),v={key:2,class:"announcement-top"},k=[r((()=>(0,a.createElementVNode)("i",{class:"el-icon-top"},null,-1)))],f=(0,a.defineComponent)({__name:"announcementList",props:{announcementList:{type:Array,default:()=>[]}},setup(e){const n=e;(0,a.watch)((()=>n.announcementList),(()=>{l.value=n.announcementList}),{deep:!0});const t=o.nC.get(c.pX);var l=(0,a.ref)([]),r=(0,a.ref)(0),f=[{label:"全部",value:0},{label:"已读",value:1},{label:"未读",value:2}];function h(){switch(r.value){case 0:l.value=n.announcementList;break;case 1:l.value=n.announcementList.filter((e=>1===e.haveRead));break;case 2:l.value=n.announcementList.filter((e=>0===e.haveRead))}}function E(){t.handleReadAllAnnouncement()}return(e,n)=>{const t=(0,a.resolveComponent)("el-option"),c=(0,a.resolveComponent)("el-select");return(0,a.openBlock)(),(0,a.createElementBlock)("div",m,[(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)(["announcement-header",{"announcement-header-extra-padding":(0,a.unref)(l).length>6}])},[(0,a.createElementVNode)("div",d,[(0,a.createVNode)(c,{modelValue:(0,a.unref)(r),"onUpdate:modelValue":n[0]||(n[0]=e=>(0,a.isRef)(r)?r.value=e:r=e),onChange:h,clearable:!1,placeholder:"请选择",size:"small"},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)((0,a.unref)(f),(e=>((0,a.openBlock)(),(0,a.createBlock)(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),(0,a.createElementVNode)("div",{class:"annocement-header-box"},[(0,a.createElementVNode)("span",{class:"announcement-header-box-btn",onClick:E},"全部已读")])],2),(0,a.unref)(l).length>0?((0,a.openBlock)(),(0,a.createElementBlock)("div",i,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)((0,a.unref)(l),(e=>((0,a.openBlock)(),(0,a.createBlock)(s.default,{key:e.msgId,announcement:e},null,8,["announcement"])))),128))])):((0,a.openBlock)(),(0,a.createElementBlock)("div",u,[p,(0,a.createTextVNode)(" 暂无公告 ")])),(0,a.unref)(l).length>6?((0,a.openBlock)(),(0,a.createElementBlock)("div",v,k)):(0,a.createCommentVNode)("",!0)])}}});const h=(0,t(57775).Z)(f,[["__scopeId","data-v-03ed55f4"]])},2525:(e,n,t)=>{e.exports=t.p+"imgs/message.01d649.svg"}}]);