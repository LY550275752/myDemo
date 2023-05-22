"use strict";(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[5745,6095,5722,7896,8397,6765],{9961:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var o=n(89810),a=n(35247),l=n(6522),c=n(48402),i=n(73827),r=n(72900),s=n(88533),d=function(e,t,n,o){return new(n||(n=Promise))((function(a,l){function c(e){try{r(o.next(e))}catch(e){l(e)}}function i(e){try{r(o.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}r((o=o.apply(e,t||[])).next())}))};const m=e=>((0,o.pushScopeId)("data-v-14aaecc4"),e=e(),(0,o.popScopeId)(),e),u={class:"container"},p={key:0,class:"container-intro"},f={key:1,class:"container-main"},v=m((()=>(0,o.createElementVNode)("div",{class:"container-main-title"},"当前设备",-1))),g={class:"container-main-list-item-name"},C={class:"container-main-list-item-detail"},y={class:"container-main-list-item-sys"},k={class:"container-main-list-item-time"},N=m((()=>(0,o.createElementVNode)("div",{class:"container-main-title"},"已验证设备",-1))),E={class:"container-main-list"},x=["onClick"],V={class:"container-main-list-item-name"},h={class:"container-main-list-item-name-detail"},_={class:"container-main-list-item-sys"},B={class:"container-main-list-item-time"},w={key:2,class:"container-empty"},S=(0,o.defineComponent)({__name:"DeviceManage",emits:["enter"],setup(e,{emit:t}){const n=c.nC.get(l.Xb),m=c.nC.get(a.bL),S=(0,o.inject)("$dialog");var D=(0,o.ref)([]),b=(0,o.ref)(!1),L=(0,o.ref)(null);function I(e){s.$x.emit("toggle",{type:"DeviceDetail",data:e})}function T(){return d(this,void 0,void 0,(function*(){try{b.value=!0,D.value=yield m.getDeviceList(),D.value.forEach((e=>{var t,n;e.icon=(t=e.deviceType.toString(),(n=(0,r.d9)(a.bC[t]||a.bC.def)).name=`icon-${n.name}`,n)})),function(e){const t=n.getDeviceCode().toUpperCase();e.some((e=>{if(e.deviceCode.toUpperCase()===t)return L.value=e,L.value.isCurr=!0,!0}))}(D.value)}catch(e){i.z8.error("获取设备列表失败"),setTimeout((()=>{s.$x.emit("toggle",{type:"SecureCenter"})}),1500)}finally{b.value=!1}}))}return(0,o.onMounted)((()=>d(this,void 0,void 0,(function*(){yield T(),(0,o.nextTick)((()=>{var e=S.getCurrentDialogId();S.config(e,{title:"设备管理",extendSlot:[],onBack:()=>{s.$x.emit("toggle",{type:"SecureCenter"})}})}))})))),(e,t)=>{const n=(0,o.resolveComponent)("el-tooltip"),l=(0,o.resolveDirective)("loading");return(0,o.openBlock)(),(0,o.createElementBlock)("div",u,[(0,o.unref)(D).length?((0,o.openBlock)(),(0,o.createElementBlock)("p",p,"您可以从列表中删除设备，删除后将该设备踢下线并抹除已记住的密码。 此外，在该设备再次登录需要进行身份认证")):(0,o.createCommentVNode)("",!0),(0,o.unref)(D).length?(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("div",f,[v,(0,o.unref)(L)?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,onClick:t[0]||(t[0]=e=>I((0,o.unref)(L))),class:"container-main-list-item"},[(0,o.createElementVNode)("div",g,[(0,o.createElementVNode)("i",{style:(0,o.normalizeStyle)({background:(0,o.unref)(L).icon.color}),class:(0,o.normalizeClass)(["iconfont container-main-list-item-name-icon",(0,o.unref)(L).icon.name])},null,6),(0,o.createElementVNode)("div",C,[(0,o.createVNode)(n,{effect:"light",content:(0,o.unref)(L).deviceName,placement:"top-start","show-arrow":!1},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",null,(0,o.toDisplayString)((0,o.unref)(L).deviceName),1)])),_:1},8,["content"]),(0,o.createElementVNode)("div",null,(0,o.toDisplayString)((0,o.unref)(a.Yi)[(0,o.unref)(L).deviceType]),1)])]),(0,o.createElementVNode)("span",y,[(0,o.createTextVNode)(" 设备系统： "),(0,o.createElementVNode)("span",null,(0,o.toDisplayString)((0,o.unref)(L).sysVersion||"--"),1)]),(0,o.createElementVNode)("span",k,[(0,o.createTextVNode)(" 最近登录： "),(0,o.createElementVNode)("span",null,(0,o.toDisplayString)((0,o.unref)(r.p6)((0,o.unref)(L).lastUseTime,"MM月dd日 hh:mm:ss")),1)])])):(0,o.createCommentVNode)("",!0),N,(0,o.createElementVNode)("ul",E,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)((0,o.unref)(D),(e=>((0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.bindingId,onClick:t=>I(e),class:"container-main-list-item"},[(0,o.createElementVNode)("div",V,[(0,o.createElementVNode)("i",{style:(0,o.normalizeStyle)({background:e.icon.color}),class:(0,o.normalizeClass)(["iconfont container-main-list-item-name-icon",e.icon.name])},null,6),(0,o.createElementVNode)("div",h,[(0,o.createVNode)(n,{effect:"light",content:e.deviceName,placement:"top-start","show-arrow":!1,offset:0},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",null,(0,o.toDisplayString)(e.deviceName),1)])),_:2},1032,["content"]),(0,o.createElementVNode)("div",null,(0,o.toDisplayString)((0,o.unref)(a.Yi)[e.deviceType]),1)])]),(0,o.createElementVNode)("span",_,[(0,o.createTextVNode)(" 设备系统： "),(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.sysVersion),1)]),(0,o.createElementVNode)("span",B,[(0,o.createTextVNode)(" 最近登录： "),(0,o.createElementVNode)("span",null,(0,o.toDisplayString)((0,o.unref)(r.p6)(e.lastUseTime,"MM月dd日 hh:mm:ss")),1)])],8,x)))),128))])])),[[l,(0,o.unref)(b)]]):(0,o.createCommentVNode)("",!0),0!=(0,o.unref)(D).length||(0,o.unref)(b)?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("div",w,"暂无设备"))])}}});const D=(0,n(57775).Z)(S,[["__scopeId","data-v-14aaecc4"]])},22846:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=n(89810),a=n(35247),l=n(4248),c=n(88533),i=n(48402),r=n(73827),s=n(25567),d=function(e,t,n,o){return new(n||(n=Promise))((function(a,l){function c(e){try{r(o.next(e))}catch(e){l(e)}}function i(e){try{r(o.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}r((o=o.apply(e,t||[])).next())}))};const m={class:"excep-log"},u=(0,o.defineComponent)({__name:"ExcepLog",setup(e){const t=i.nC.get(a.bL),n=(0,o.inject)("$dialog");function u(e){e.from="ExcepLog",c.$x.emit("toggle",{type:"LogDetail",data:e})}return(0,o.onMounted)((()=>{var e=n.getCurrentDialogId();n.config(e,{title:"异常登录",extendSlot:{comp:s.default},onBack:()=>{c.$x.emit("toggle",{type:"SecureCenter"})}})})),(0,c.pv)({[c.eM.IGNORE_ALL_EXCEP_LOG]:()=>{!function(){d(this,void 0,void 0,(function*(){try{yield t.ignoreAllExcepLogs(),r.z8.success("所有异常已忽略"),c.$x.emit("toggle",{type:"SecureCenter"})}catch(e){r.z8.error(e.message)}}))}()}}),(e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",m,[(0,o.createVNode)(l.default,{onClick:u,"is-exception":""})]))}})},25567:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var o=n(89810);const a=n.p+"imgs/forbidden.18b1a4.svg";var l=n(88533);const c=(i=()=>(0,o.createElementVNode)("img",{src:a},null,-1),(0,o.pushScopeId)("data-v-74ed4d8e"),i=i(),(0,o.popScopeId)(),i);var i;const r=(0,o.defineComponent)({__name:"ExcepLogHeader",setup(e){function t(){l.$x.emit(l.eM.IGNORE_ALL_EXCEP_LOG)}return(e,n)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{class:"ignore-all",onClick:t},[c,(0,o.createTextVNode)(" 忽略所有 ")]))}});const s=(0,n(57775).Z)(r,[["__scopeId","data-v-74ed4d8e"]])},89805:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var o=n(89810),a=n(35247),l=n(88533),c=n(48402),i=n(73827),r=n(5341),s=function(e,t,n,o){return new(n||(n=Promise))((function(a,l){function c(e){try{r(o.next(e))}catch(e){l(e)}}function i(e){try{r(o.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}r((o=o.apply(e,t||[])).next())}))};const d={class:"detail"},m={class:"detail-form panel"},u={class:"detail-form-item-val"},p={class:"detail-form-item-val"},f={class:"detail-form-item-val"},v={class:"detail-form-item-val"},g={key:0,class:"detail-form-item-excep"},C={key:0,class:"detail-form-item-excep-mobile"},y={class:"detail-form-item-val"},k={class:"detail-btn"},N=(0,o.defineComponent)({__name:"LogDetail",props:{data:{default:()=>({}),type:Object},fromType:{default:"",type:String}},setup(e){const t=e,n=c.nC.get(a.bL),N=((0,o.inject)("$message"),(0,o.inject)("$dialogHelper")),E=(0,o.ref)(!1),x=(0,o.ref)(a.wz),V=(0,r.mL)(),h=(0,o.ref)(V?84:104);function _(){l.$x.emit("toggle",{type:t.data.from||"SecureCenter"})}function B(){return s(this,void 0,void 0,(function*(){const e={userLogId:t.data.userLogId,handleType:a.we.IGNORE};E.value=!0;try{yield n.handleExcepLog(e),i.z8.success("异常已忽略"),_()}catch(e){i.z8.error(e.message)}finally{E.value=!1}}))}return(0,o.onMounted)((()=>{N.config({title:"登录详情",onBack:()=>{_()},extendSlot:[]})})),(t,n)=>{const a=(0,o.resolveComponent)("el-form-item"),l=(0,o.resolveComponent)("el-divider"),c=(0,o.resolveComponent)("WarningFilled"),i=(0,o.resolveComponent)("el-icon"),r=(0,o.resolveComponent)("el-tooltip"),s=(0,o.resolveComponent)("el-form"),N=(0,o.resolveComponent)("Remove"),_=(0,o.resolveComponent)("el-button");return(0,o.openBlock)(),(0,o.createElementBlock)("div",d,[(0,o.createElementVNode)("div",m,[(0,o.createVNode)(s,{model:e.data,"label-width":h.value},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(a,{class:"detail-form-item",label:"帐号名称："},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("span",u,(0,o.toDisplayString)(e.data.userName),1)])),_:1}),(0,o.createVNode)(a,{class:"detail-form-item",label:"登录设备："},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("span",p,(0,o.toDisplayString)(e.data.deviceName),1)])),_:1}),(0,o.createVNode)(a,{class:"detail-form-item not-border",label:"IP地址："},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("span",f,(0,o.toDisplayString)(e.data.userIp),1)])),_:1}),(0,o.createVNode)(l,{class:"detail-form--divider"}),(0,o.createVNode)(a,{class:"detail-form-item",label:"登录时间："},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("span",v,(0,o.toDisplayString)(e.data.loginTime),1),e.data.isException?((0,o.openBlock)(),(0,o.createElementBlock)("span",g,[(0,o.unref)(V)?((0,o.openBlock)(),(0,o.createElementBlock)("div",C,[(0,o.createVNode)(i,{class:"detail-form-item-excep-icon"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c)])),_:1}),(0,o.createTextVNode)((0,o.toDisplayString)(x.value[e.data.exceptionType]),1)])):((0,o.openBlock)(),(0,o.createBlock)(r,{key:1,class:"item",effect:"dark",content:x.value[e.data.exceptionType],placement:"top"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(i,{class:"detail-form-item-excep-icon"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c)])),_:1})])),_:1},8,["content"]))])):(0,o.createCommentVNode)("",!0)])),_:1}),(0,o.createVNode)(a,{class:"detail-form-item not-border",label:"下线时间："},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("span",y,(0,o.toDisplayString)(e.data.logoutTime),1)])),_:1})])),_:1},8,["model","label-width"]),(0,o.createElementVNode)("div",k,[e.data.isException?((0,o.openBlock)(),(0,o.createBlock)(_,{key:0,disabled:!!e.data.handleStatus,loading:E.value,onClick:B},{default:(0,o.withCtx)((()=>[(0,o.unref)(V)?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createBlock)(i,{key:0,class:"detail-btn-icon"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(N)])),_:1})),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.data.handleStatus?"已忽略":"忽略"),1)])),_:1},8,["disabled","loading"])):(0,o.createCommentVNode)("",!0)])])])}}});const E=(0,n(57775).Z)(N,[["__scopeId","data-v-731b28a0"]])},29262:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var o=n(89810),a=n(35247),l=n(48402),c=n(46765),i=n(4248),r=n(73827),s=n(55304),d=n(88533),m=function(e,t,n,o){return new(n||(n=Promise))((function(a,l){function c(e){try{r(o.next(e))}catch(e){l(e)}}function i(e){try{r(o.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}r((o=o.apply(e,t||[])).next())}))};const u={class:"secure-center"},p={key:0,class:"secure-center-excep"},f={class:"secure-center-excep-number"},v=(0,o.defineComponent)({__name:"SecureCenter",setup(e){const t=(0,o.inject)("$dialog"),n=l.nC.get(s.hD),v=l.nC.get(a.bL),g=(0,o.ref)(0);function C(e){e.from="SecureCenter",d.$x.emit("toggle",{type:"LogDetail",data:e})}return(0,o.onMounted)((()=>{var e=t.getCurrentDialogId();(0,o.nextTick)((()=>{t.config(e,{title:"安全中心",showClose:!0,onBack:!1,extendSlot:{comp:c.default}})})),function(){m(this,void 0,void 0,(function*(){if(n.connection.desktop.desktopId)try{g.value=yield v.getExcepLogCounts(n.connection.desktop.desktopId)}catch(e){r.z8.error("获取异常登录列表失败")}}))}()})),(0,d.pv)({[d.eM.OPEN_DEVICE_MANAGE]:()=>{d.$x.emit("toggle",{type:"DeviceManage"})}}),(e,t)=>{const n=(0,o.resolveComponent)("WarningFilled"),a=(0,o.resolveComponent)("el-icon");return(0,o.openBlock)(),(0,o.createElementBlock)("div",u,[g.value>0?((0,o.openBlock)(),(0,o.createElementBlock)("div",p,[(0,o.createVNode)(a,{class:"secure-center-excep-waring"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(n)])),_:1}),(0,o.createTextVNode)(" 有"),(0,o.createElementVNode)("span",f,(0,o.toDisplayString)(g.value),1),(0,o.createTextVNode)("条异常登录记录，为避免安全风险 "),(0,o.createElementVNode)("span",{class:"secure-center-excep-deal",onClick:t[0]||(t[0]=e=>{return t="ExcepLog",void d.$x.emit("toggle",{type:t});var t})},"立即处理")])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(i.default,{class:(0,o.normalizeClass)({"log-list-comp":!!g.value}),onClick:C,filter:""},null,8,["class"])])}}})},46765:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(89810),a=n(88533);const l=(0,o.defineComponent)({__name:"SecureHeader",setup(e){function t(){a.$x.emit(a.eM.OPEN_DEVICE_MANAGE)}return(e,n)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{class:"header-btn",onClick:t},"设备管理"))}});const c=(0,n(57775).Z)(l,[["__scopeId","data-v-41e20c76"]])},95359:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var o=n(89810),a=n(29262),l=n(89805),c=n(22846),i=n(9961),r=n(51165),s=n(88533);const d={class:"secure"},m=(0,o.defineComponent)({__name:"secure",setup(e){const t=(0,o.shallowRef)(a.default),n=(0,o.ref)({}),m=(0,o.inject)("$dialogHelper"),u={SecureCenter:a.default,LogDetail:l.default,DeviceManage:i.default,DeviceDetail:r.default,ExcepLog:c.default};return(0,o.onMounted)((()=>{s.$x.on("toggle",(e=>{t.value=u[e.type],n.value=e.data})),m.config({title:"安全中心"})})),(e,a)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",d,[((0,o.openBlock)(),(0,o.createBlock)((0,o.resolveDynamicComponent)((0,o.unref)(t)),{data:n.value},null,8,["data"]))]))}})}}]);