"use strict";(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[2470,2346,4878,6736],{55366:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var o=n(89810);const l=n.p+"imgs/logo.18b1a4.svg";var a=n(48402),c=n(17999),i=n(99227),s=n.n(i),r=n(6522),d=n(55304),u=function(e,t,n,o){return new(n||(n=Promise))((function(l,a){function c(e){try{s(o.next(e))}catch(e){a(e)}}function i(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((o=o.apply(e,t||[])).next())}))};const m=e=>((0,o.pushScopeId)("data-v-4d4b6515"),e=e(),(0,o.popScopeId)(),e),p={class:"about skin-about"},v=m((()=>(0,o.createElementVNode)("div",{class:"banner"},[(0,o.createElementVNode)("img",{src:l}),(0,o.createElementVNode)("h1",null,"天翼云电脑")],-1))),f={"element-loading-text":"数据获取中...",class:"main-container"},k={key:0,class:"main-title"},g=m((()=>(0,o.createElementVNode)("span",null,"云电脑名称：",-1))),h={key:1,class:"main-title"},V={class:"main-content"},N={class:"main-wrap"},b={key:0},E=["onClick"],y={key:1},B=["onClick"],w={class:"main-wrap main-qr-code"},C={class:"code-wrap"},x=m((()=>(0,o.createElementVNode)("span",{class:"code-wrap-span"},"天翼云电脑",-1))),S=m((()=>(0,o.createElementVNode)("span",{class:"code-wrap-span2"},"让工作更轻松",-1))),_=(0,o.defineComponent)({__name:"about",setup(e){const t=(0,o.inject)("$message"),n=((0,c.yj)(),a.nC.get(r.Xb),a.nC.get(d.hD)),l=(0,o.ref)(!0),i=(0,o.ref)([]),m=(0,o.ref)(""),_=(0,o.ref)([]),I=(0,o.ref)([]),D=(0,o.ref)("");function T(e){t.success("已复制")}return(0,o.onMounted)((()=>u(this,void 0,void 0,(function*(){new(s())(D.value,{text:"https://desk.ctyun.cn/html/download/index.html",width:80,height:80,colorDark:"#000000",colorLight:"#ffffff",correctLevel:s().CorrectLevel.H});!function(){var e,o,a,c;u(this,void 0,void 0,(function*(){l.value=!0;let s=n.getDesktopConnection({id:n.connection.id}).desktop;const r={desktopId:s.objId||"",objType:s&&"number"==typeof s.objType?s.objType:0,objId:s.objId||""};try{const t=yield n.getHardwareFeature(r);i.value=t,t.expireDate&&(m.value=function(e){const t=new Date(e),n=t.getFullYear(),o=t.getMonth()+1,l=t.getDate(),a=t.getHours();return`${n}年${o}月${l}日${a}时`}(t.expireDate)),_.value=(null===(o=null===(e=t.linkInfo)||void 0===e?void 0:e.linkPhone)||void 0===o?void 0:o.split(","))||[],I.value=(null===(c=null===(a=t.linkInfo)||void 0===a?void 0:a.linkEmail)||void 0===c?void 0:c.split(","))||[]}catch(e){t.error(e.message)}finally{l.value=!1}}))}()})))),(e,t)=>{const n=(0,o.resolveComponent)("el-descriptions-item"),a=(0,o.resolveComponent)("el-descriptions"),c=(0,o.resolveDirective)("loading");return(0,o.openBlock)(),(0,o.createElementBlock)("section",p,[v,(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("div",f,[i.value.desktopName?((0,o.openBlock)(),(0,o.createElementBlock)("div",k,[g,(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(i.value.desktopName),1)])):((0,o.openBlock)(),(0,o.createElementBlock)("div",h,"天翼云电脑")),(0,o.createElementVNode)("div",V,[(0,o.createElementVNode)("div",N,[(0,o.createVNode)(a,{"label-class-name":"description-label",column:1},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(n,{"label-class-name":"description-label",label:"CPU："},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(i.value.cpuCore?`${i.value.cpuCore}核`:"--"),1)])),_:1}),(0,o.createVNode)(n,{"label-class-name":"description-label",label:"内存："},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(i.value.memoryGB?`${i.value.memoryGB}GB`:"--"),1)])),_:1}),i.value.gpuSliceRam?((0,o.openBlock)(),(0,o.createBlock)(n,{key:0,"label-class-name":"description-label",label:"GPU："},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(i.value.gpuSliceRam)+"GB",1)])),_:1})):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(n,{"label-class-name":"description-label",label:"磁盘容量："},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(i.value.totalDiskGB?`${i.value.totalDiskGB}GB`:"--"),1)])),_:1}),(0,o.createVNode)(n,{"label-class-name":"description-label",label:"镜像版本：","class-name":"mirror-content"},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(i.value.mirrorVersion||"暂无镜像版本号"),1)])),_:1}),i.value.expireDate?((0,o.openBlock)(),(0,o.createBlock)(n,{key:1,"label-class-name":"description-label",label:"有效期："},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(m.value)+"到期",1)])),_:1})):(0,o.createCommentVNode)("",!0),i.value.linkInfo&&i.value.linkInfo.linkPhone||i.value.linkInfo&&i.value.linkInfo.linkEmail?((0,o.openBlock)(),(0,o.createBlock)(n,{key:2,label:"管理员联系方式：","label-class-name":"description-label","class-name":"admin-content"},{default:(0,o.withCtx)((()=>[i.value.linkInfo.linkPhone?((0,o.openBlock)(),(0,o.createElementBlock)("ul",b,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(_.value,((e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("li",{key:t,onClick:e=>T()},(0,o.toDisplayString)(e),9,E)))),128))])):(0,o.createCommentVNode)("",!0),i.value.linkInfo.linkEmail?((0,o.openBlock)(),(0,o.createElementBlock)("ul",y,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(I.value,((e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("li",{key:t,onClick:e=>T()},(0,o.toDisplayString)(e),9,B)))),128))])):(0,o.createCommentVNode)("",!0)])),_:1})):(0,o.createCommentVNode)("",!0)])),_:1})]),(0,o.createElementVNode)("div",w,[(0,o.createElementVNode)("div",C,[(0,o.createElementVNode)("div",{id:"qrcode",ref_key:"qrCodeUrl",ref:D},[(0,o.createElementVNode)("div",{class:"logo-wrap"},[(0,o.createElementVNode)("img",{class:"logo",src:"static/icon_32x32@2x.png"})])],512),x,S])])])])),[[c,l.value]])])}}});const I=(0,n(57775).Z)(_,[["__scopeId","data-v-4d4b6515"]])},34878:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=n(89810),l=n(19816),a=n(88533),c=function(e,t,n,o){return new(n||(n=Promise))((function(l,a){function c(e){try{s(o.next(e))}catch(e){a(e)}}function i(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((o=o.apply(e,t||[])).next())}))};const i={class:"other-setting"},s=(r=()=>(0,o.createElementVNode)("h4",null,"工具栏设置",-1),(0,o.pushScopeId)("data-v-4edb7b40"),r=r(),(0,o.popScopeId)(),r);var r;const d=(0,o.defineComponent)({__name:"otherSetting",setup(e){const t=(0,o.inject)("$message");let n=(0,o.ref)(!1);(0,o.ref)({desktops:!1});function r(e){return c(this,void 0,void 0,(function*(){window.sessionStorage.setItem("autoHide",String(e)),a.$x.emit(a.eM.SET_TOOLBAR_AUTOHIDE,e),t&&t({type:"success",message:"设置更新成功"}),l.k.info("[otherSetting] set autoHide: ",e)}))}return(0,o.onMounted)((()=>c(this,void 0,void 0,(function*(){let e=window.sessionStorage.getItem("autoHide");n.value="true"===e})))),(e,t)=>{const l=(0,o.resolveComponent)("el-checkbox");return(0,o.openBlock)(),(0,o.createElementBlock)("div",i,[s,(0,o.createVNode)(l,{modelValue:(0,o.unref)(n),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,o.isRef)(n)?n.value=e:n=e),onChange:r},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("超过3秒未操作，工具栏自动隐藏")])),_:1},8,["modelValue"])])}}});const u=(0,n(57775).Z)(d,[["__scopeId","data-v-4edb7b40"]])},6695:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(89810),l=n(68475),a=n(96528),c=n(55366),i=n(70223),s=n(34878),r=function(e,t,n,o){return new(n||(n=Promise))((function(l,a){function c(e){try{s(o.next(e))}catch(e){a(e)}}function i(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((o=o.apply(e,t||[])).next())}))};const d=e=>((0,o.pushScopeId)("data-v-543792a5"),e=e(),(0,o.popScopeId)(),e),u={class:"desktop-setting-menu-page"},m={class:"desktop-setting-menu-box"},p={class:"desktop-setting-menu"},v=[d((()=>(0,o.createElementVNode)("span",{class:"desktop-setting-menu-item-content"},[(0,o.createElementVNode)("i",{class:"iconfont icon-information"}),(0,o.createElementVNode)("span",null,"画面设置")],-1))),d((()=>(0,o.createElementVNode)("i",{class:"iconfont icon-right"},null,-1)))],f=[d((()=>(0,o.createElementVNode)("span",{class:"rdesktop-setting-menu-content"},[(0,o.createElementVNode)("i",{class:"iconfont icon-datadisk"}),(0,o.createElementVNode)("span",null,"系统重装")],-1))),d((()=>(0,o.createElementVNode)("i",{class:"iconfont icon-right"},null,-1)))],k=[d((()=>(0,o.createElementVNode)("span",{class:"rdesktop-setting-menu-content"},[(0,o.createElementVNode)("i",{class:"iconfont icon-help-manual"}),(0,o.createElementVNode)("span",null,"电脑信息")],-1))),d((()=>(0,o.createElementVNode)("i",{class:"iconfont icon-right"},null,-1)))],g=(0,o.defineComponent)({__name:"desktopSettingMenu",props:{options:{type:Object,default:{}}},setup(e){const t={Recovery:a.default,About:c.default,ScreenSetting:i.default,OtherSetting:s.default};var n=(0,o.shallowRef)(null);const d=(0,o.inject)("$dialogHelper"),g=(0,o.ref)(!0);function h(e){g.value=!1,n.value=t[e],d.config({onBack:V})}function V(){g.value=!0,d.config({title:"偏好设置",onBack:!1})}return(0,o.onMounted)((()=>{(0,o.nextTick)((()=>r(this,void 0,void 0,(function*(){d.config({title:"偏好设置"})}))))})),(t,a)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",u,[(0,o.withDirectives)((0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("ul",p,[(0,o.createElementVNode)("li",{class:"desktop-setting-menu-item",onClick:a[0]||(a[0]=e=>h("ScreenSetting"))},v),(0,o.createElementVNode)("li",{class:"desktop-setting-menu-item",onClick:a[1]||(a[1]=e=>h("Recovery"))},f),(0,o.createElementVNode)("li",{class:"desktop-setting-menu-item",onClick:a[2]||(a[2]=e=>h("About"))},k)])],512),[[o.vShow,g.value]]),(0,o.createVNode)(l.Z,null,{default:(0,o.withCtx)((()=>[g.value?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createBlock)((0,o.resolveDynamicComponent)((0,o.unref)(n)),{key:0,options:e.options},null,8,["options"]))])),_:1})]))}});const h=(0,n(57775).Z)(g,[["__scopeId","data-v-543792a5"]])},68475:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(89810);const l={},a=(0,n(57775).Z)(l,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createBlock)(o.Transition,{name:"fade"},{default:(0,o.withCtx)((()=>[(0,o.renderSlot)(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-44304889"]])}}]);