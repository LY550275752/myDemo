(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[8391],{52704:(e,n,t)=>{"use strict";t.d(n,{L:()=>w});var o=t(28125),i=t(41638),a=t(52429),r=t(89810),l=t(50729),c=t(24577),u=t(24638),s=t(75566),d=t(64338),f=t(33745);var v=(0,l.do)("sticky"),p=(0,a.Z)(v,2),h=p[0],m=p[1],g={zIndex:c.Or,position:(0,c.SQ)("top"),container:Object,offsetTop:(0,c.SI)(0),offsetBottom:(0,c.SI)(0)},y=(0,r.defineComponent)({name:h,props:g,emits:["scroll","change"],setup:function(e,n){var t=n.emit,o=n.slots,a=(0,r.ref)(),l=(0,f.eo)(a),c=(0,r.reactive)({fixed:!1,width:0,height:0,transform:0}),v=(0,r.computed)((function(){return(0,u.LU)("top"===e.position?e.offsetTop:e.offsetBottom)})),p=(0,r.computed)((function(){var e=c.fixed,n=c.height,t=c.width;if(e)return{width:"".concat(t,"px"),height:"".concat(n,"px")}})),h=(0,r.computed)((function(){if(c.fixed){var n=(0,s.l7)((0,u.As)(e.zIndex),(0,i.Z)({width:"".concat(c.width,"px"),height:"".concat(c.height,"px")},e.position,"".concat(v.value,"px")));return c.transform&&(n.transform="translate3d(0, ".concat(c.transform,"px, 0)")),n}})),g=function(){if(a.value&&!(0,d.xj)(a)){var n=e.container,o=e.position,i=(0,f.EL)(a),r=(0,d.cx)(window);if(c.width=i.width,c.height=i.height,"top"===o)if(n){var l=(0,f.EL)(n),u=l.bottom-v.value-c.height;c.fixed=v.value>i.top&&l.bottom>0,c.transform=u<0?u:0}else c.fixed=v.value>i.top;else{var s=document.documentElement.clientHeight;if(n){var p=(0,f.EL)(n),h=s-p.top-v.value-c.height;c.fixed=s-v.value<i.bottom&&s>p.top,c.transform=h<0?-h:0}else c.fixed=s-v.value<i.bottom}!function(e){t("scroll",{scrollTop:e,isFixed:c.fixed})}(r)}};return(0,r.watch)((function(){return c.fixed}),(function(e){return t("change",e)})),(0,f.OR)("scroll",g,{target:l,passive:!0}),function(e,n){if(s._f&&window.IntersectionObserver){var t=new IntersectionObserver((function(e){n(e[0].intersectionRatio>0)}),{root:document.body}),o=function(){e.value&&t.unobserve(e.value)};(0,r.onDeactivated)(o),(0,r.onBeforeUnmount)(o),(0,f.Ib)((function(){e.value&&t.observe(e.value)}))}}(a,g),function(){var e;return(0,r.createVNode)("div",{ref:a,style:p.value},[(0,r.createVNode)("div",{class:m({fixed:c.fixed}),style:h.value},[null==(e=o.default)?void 0:e.call(o)])])}}}),w=(0,o.n)(y)},64566:(e,n,t)=>{"use strict";t.d(n,{F:()=>P});var o=t(89810),i=t(75566),a=t(43500),r=t(28125),l=t(40712),c=t(41638),u=t(52429),s=t(50729),d=t(24577),f=0;var v=t(48331),p=t(47383),h=t(16934),m=(0,s.do)("toast"),g=(0,u.Z)(m,2),y=g[0],w=g[1],b=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],x={icon:String,show:Boolean,type:(0,d.SQ)("text"),overlay:Boolean,message:d.Or,iconSize:d.Or,duration:(0,d.qM)(2e3),position:(0,d.SQ)("middle"),teleport:[String,Object],className:d.Vg,iconPrefix:String,transition:(0,d.SQ)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:d.Vg,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean},C=(0,o.defineComponent)({name:y,props:x,emits:["update:show"],setup:function(e,n){var t,r=n.emit,l=!1,u=function(){var n=e.show&&e.forbidClick;l!==n&&((l=n)?(f||document.body.classList.add("van-toast--unclickable"),f++):f&&(--f||document.body.classList.remove("van-toast--unclickable")))},s=function(e){return r("update:show",e)},d=function(){e.closeOnClick&&s(!1)},m=function(){return clearTimeout(t)},g=function(){var n=e.type,t=e.message;if((0,a.Xq)(t)&&""!==t)return"html"===n?(0,o.createVNode)("div",{key:0,class:w("text"),innerHTML:String(t)},null):(0,o.createVNode)("div",{class:w("text")},[t])};return(0,o.watch)((function(){return[e.show,e.forbidClick]}),u),(0,o.watch)((function(){return[e.show,e.type,e.message,e.duration]}),(function(){m(),e.show&&e.duration>0&&(t=setTimeout((function(){s(!1)}),e.duration))})),(0,o.onMounted)(u),(0,o.onUnmounted)(u),function(){return(0,o.createVNode)(p.G,(0,o.mergeProps)({class:[w([e.position,(0,c.Z)({},e.type,!e.icon)]),e.className],lockScroll:!1,onClick:d,onClosed:m,"onUpdate:show":s},(0,i.ei)(e,b)),{default:function(){return[(n=e.icon,t=e.type,i=e.iconSize,a=e.iconPrefix,r=e.loadingType,n||"success"===t||"fail"===t?(0,o.createVNode)(v.J,{name:n||t,size:i,class:w("icon"),classPrefix:a},null):"loading"===t?(0,o.createVNode)(h.g,{class:w("loading"),size:i,type:r},null):void 0),g()];var n,t,i,a,r}})}}}),S={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1},k=[],_=!1,N=(0,i.l7)({},S),F=new Map;function I(e){return(0,a.Kn)(e)?e:{message:e}}function O(){if(!k.length||_){var e=function(){var e=(0,l.H)({setup:function(){var e=(0,o.ref)(""),i=(0,l.o)(),a=i.open,r=i.state,c=i.close,u=i.toggle,s=function(){_&&(k=k.filter((function(e){return e!==n})),t())};return(0,o.watch)(e,(function(e){r.message=e})),(0,o.getCurrentInstance)().render=function(){var e={onClosed:s,"onUpdate:show":u};return(0,o.createVNode)(C,(0,o.mergeProps)(r,e),null)},{open:a,clear:c,message:e}}}),n=e.instance,t=e.unmount;return n}();k.push(e)}return k[k.length-1]}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!i._f)return{};var n=O(),t=I(e);return n.open((0,i.l7)({},N,F.get(t.type||N.type),t)),n}var V=function(e){return function(n){return P((0,i.l7)({type:e},I(n)))}};P.loading=V("loading"),P.success=V("success"),P.fail=V("fail"),P.clear=function(e){var n;k.length&&(e?(k.forEach((function(e){e.clear()})),k=[]):_?null==(n=k.shift())||n.clear():k[0].clear())},P.setDefaultOptions=function(e,n){"string"==typeof e?F.set(e,n):(0,i.l7)(N,e)},P.resetDefaultOptions=function(e){"string"==typeof e?F.delete(e):(N=(0,i.l7)({},S),F.clear())},P.allowMultiple=function(){_=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]},P.install=function(e){e.use((0,r.n)(C)),e.config.globalProperties.$toast=P}},75883:(e,n,t)=>{"use strict";t.r(n)},98205:(e,n,t)=>{"use strict";t.r(n)},3147:(e,n,t)=>{t(89170),t(75883)},15807:(e,n,t)=>{t(89170),t(73864),t(85223),t(59772),t(98506),t(67426),t(98205)},18282:(e,n,t)=>{"use strict";t.d(n,{_:()=>f});var o=t(65431),i=t(48402),a=t(6298),r=t(17999),l=t(89810),c=t(9021),u=t(94110),s=t(64566),d=(t(15807),t(94684),function(e,n,t,o){return new(t||(t=Promise))((function(i,a){function r(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,l)}c((o=o.apply(e,n||[])).next())}))});const f=(0,o.Q_)("account",(()=>{const e=i.nC.get(a.g),n=(0,c.C)(),t=(0,u.u)(),{authData:f}=(0,o.Jk)(n),v=(0,r.yj)(),p=(0,r.tv)(),h=(0,l.ref)(!1),m=(0,l.ref)(0),g=(0,l.ref)(0),y=(0,l.ref)(!1),w=(0,l.ref)(""),b=(0,l.ref)(!1),x=(0,l.computed)((()=>m.value>0)),C=(0,l.ref)(!1);function S(){w.value=""}return{loadingSms:h,countdownSecond:m,validating:y,validateCode:w,setting:C,counting:x,isVerified:b,getValidateSms:function(n){return d(this,void 0,void 0,(function*(){if(h.value||m.value>0)return;let t={mobilePhone:f.value&&Number(f.value.mobilephone)};n&&(t=n);try{yield e.sendSMSCode(t),h.value=!1,g.value=Date.now()+6e4,s.F.success("发送成功"),function(){if(m.value=Math.ceil((g.value-Date.now())/1e3),m.value>0){const e=setInterval((()=>{m.value<0&&clearInterval(e),m.value=Math.ceil((g.value-Date.now())/1e3)}),1e3)}}()}catch(e){s.F.fail(e.message),40060===e.code&&("phone_new_phone"===v.name?p.replace({name:"phone_account_validate",query:{to:"phone"}}):"phone_new_email"===v.name&&p.replace({name:"phone_account_validate",query:{to:"email"}}))}}))},validateAccount:function(){return d(this,void 0,void 0,(function*(){if(!f.value||!f.value.mobilephone)return s.F.fail("无效手机号码"),S(),void t.handleBack({name:"phone_account"},!0);y.value=!0;let n={validateCode:w.value};f.value&&f.value.mobilephone&&(n.mobilePhone=Number(f.value.mobilephone));try{yield e.checkAndGetUserInfo(n);const t=yield e.validateSMSCode(n);b.value=!0,w.value="",s.F.success("认证通过"),"phone"===v.query.to?p.replace({name:"phone_new_phone",query:{sign:t}}):"email"===v.query.to&&p.replace({name:"phone_new_email",query:{sign:t}})}catch(e){b.value=!1,w.value="",s.F.fail(e.message)}}))},resetValidateCode:S,resetCountdownSecond:function(){m.value=0,g.value=0},setNewPhone:function(t){return d(this,void 0,void 0,(function*(){C.value=!0,s.F.loading("正在处理");try{yield e.changeMobilePhone(t),yield e.updateAuthProfile({mobilephone:t.newPhoneNum.toString(),loginAccount:t.newPhoneNum.toString()}),n.initAuth(),C.value=!1,s.F.success("更换手机号码成功"),p.push({name:"phone_account"})}catch(e){C.value=!1,s.F.fail(e.message)}}))},setNewEmail:function(t){return d(this,void 0,void 0,(function*(){C.value=!0,s.F.loading("正在处理");try{yield e.changeMail(t),yield e.updateAuthProfile({email:t.newMailAddress.toString()}),n.initAuth(),C.value=!1,s.F.success("更换邮箱成功"),p.push({name:"phone_account"})}catch(e){C.value=!1,s.F.fail(e.message)}}))},resetValidateData:function(){m.value=0,g.value=0,h.value=!1,y.value=!1,b.value=!1}}}))},94110:(e,n,t)=>{"use strict";t.d(n,{u:()=>m});var o=t(65431),i=t(89810),a=t(91308),r=t(57524),l=t(99143),c=t(65050),u=t(78125),s=t(17999),d=t(9021),f=t(52134),v=t(48402),p=t(6298),h=function(e,n,t,o){return new(t||(t=Promise))((function(i,a){function r(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,l)}c((o=o.apply(e,n||[])).next())}))};const m=(0,o.Q_)("base",(()=>{const e=v.nC.get(p.g),n=(0,s.yj)(),t=(0,s.tv)(),m=(0,i.ref)("phone"),g=(0,d.C)(),{logged:y}=(0,o.Jk)(g),w=(0,i.ref)([{name:"云手机",id:"phone",icon:a.Z},{name:"我",id:"me",icon:r.Z}]),b=(0,i.computed)((()=>[{name:"账号与安全",id:"account",icon:r.Z,color:"#3296FF",visible:y.value},{name:"报障",id:"report",icon:l.Z,color:"#FFB43C",visible:!0},{name:"帮助手册",id:"help",icon:c.Z,color:"#3296FF",visible:!0},{name:"关于",id:"about",icon:u.Z,color:"#3296FF",visible:!0}])),x=(0,i.ref)(!1);return{currentModule:m,modules:w,features:b,showPanel:x,changeModule:function(e){m.value=e,t.replace({query:{module:e}})},initCurrentModule:function(){n.query.module&&(m.value=n.query.module.toString())},handleBack:function(e,n){window.history.state?window.history.go(-1):n?t.replace(e):t.push(e)},updateShowPanel:function(e){x.value=!!e},getAppInfo:function(){return h(this,void 0,void 0,(function*(){const n=Date.now();let t={appId:f.kJ,operStaff:f.eW,orgId:f.TY,sign:"",tenantId:-2,timeStamp:n};const o=yield e.getAuthProfile();return o&&(t.tenantId=o.tenantId),t.sign=(0,f.gw)(n,f.eW,t.tenantId),t}))}}}))},60685:(e,n,t)=>{"use strict";t.d(n,{Z:()=>f});var o=t(89810),i=t(5415),a=t(17999),r=t(52704);t(3147);const l={class:"d-flex justify-space-between align-center white pa-4"},c={class:"fs-18 grey--text text--darken-4"},u=(s=()=>(0,o.createElementVNode)("div",null,null,-1),(0,o.pushScopeId)("data-v-86040814"),s=s(),(0,o.popScopeId)(),s);var s;const d=(0,o.defineComponent)({__name:"header",props:{title:{default:"",type:String}},setup(e){const n=(0,a.tv)(),t=(0,o.useAttrs)();function s(){t.onBack?t.onBack():window.history.state?window.history.go(-1):n.replace({name:"phone_home",query:{module:"phone"}})}return(n,t)=>{const a=(0,o.resolveComponent)("el-icon");return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(r.L),{class:"fill-width"},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("header",l,[(0,o.createVNode)(a,{class:"pointer iconBack",onClick:s},{default:(0,o.withCtx)((()=>[(0,o.createVNode)((0,o.unref)(i.Z))])),_:1}),(0,o.createElementVNode)("div",c,(0,o.toDisplayString)(e.title),1),u])])),_:1})}}});const f=(0,t(57775).Z)(d,[["__scopeId","data-v-86040814"]])}}]);