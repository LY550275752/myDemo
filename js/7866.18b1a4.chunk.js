(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[7866],{52704:(e,t,n)=>{"use strict";n.d(t,{L:()=>x});var o=n(28125),i=n(41638),r=n(52429),a=n(89810),c=n(50729),l=n(24577),s=n(24638),d=n(75566),u=n(64338),f=n(33745);var p=(0,c.do)("sticky"),h=(0,r.Z)(p,2),m=h[0],v=h[1],g={zIndex:l.Or,position:(0,l.SQ)("top"),container:Object,offsetTop:(0,l.SI)(0),offsetBottom:(0,l.SI)(0)},w=(0,a.defineComponent)({name:m,props:g,emits:["scroll","change"],setup:function(e,t){var n=t.emit,o=t.slots,r=(0,a.ref)(),c=(0,f.eo)(r),l=(0,a.reactive)({fixed:!1,width:0,height:0,transform:0}),p=(0,a.computed)((function(){return(0,s.LU)("top"===e.position?e.offsetTop:e.offsetBottom)})),h=(0,a.computed)((function(){var e=l.fixed,t=l.height,n=l.width;if(e)return{width:"".concat(n,"px"),height:"".concat(t,"px")}})),m=(0,a.computed)((function(){if(l.fixed){var t=(0,d.l7)((0,s.As)(e.zIndex),(0,i.Z)({width:"".concat(l.width,"px"),height:"".concat(l.height,"px")},e.position,"".concat(p.value,"px")));return l.transform&&(t.transform="translate3d(0, ".concat(l.transform,"px, 0)")),t}})),g=function(){if(r.value&&!(0,u.xj)(r)){var t=e.container,o=e.position,i=(0,f.EL)(r),a=(0,u.cx)(window);if(l.width=i.width,l.height=i.height,"top"===o)if(t){var c=(0,f.EL)(t),s=c.bottom-p.value-l.height;l.fixed=p.value>i.top&&c.bottom>0,l.transform=s<0?s:0}else l.fixed=p.value>i.top;else{var d=document.documentElement.clientHeight;if(t){var h=(0,f.EL)(t),m=d-h.top-p.value-l.height;l.fixed=d-p.value<i.bottom&&d>h.top,l.transform=m<0?-m:0}else l.fixed=d-p.value<i.bottom}!function(e){n("scroll",{scrollTop:e,isFixed:l.fixed})}(a)}};return(0,a.watch)((function(){return l.fixed}),(function(e){return n("change",e)})),(0,f.OR)("scroll",g,{target:c,passive:!0}),function(e,t){if(d._f&&window.IntersectionObserver){var n=new IntersectionObserver((function(e){t(e[0].intersectionRatio>0)}),{root:document.body}),o=function(){e.value&&n.unobserve(e.value)};(0,a.onDeactivated)(o),(0,a.onBeforeUnmount)(o),(0,f.Ib)((function(){e.value&&n.observe(e.value)}))}}(r,g),function(){var e;return(0,a.createVNode)("div",{ref:r,style:h.value},[(0,a.createVNode)("div",{class:v({fixed:l.fixed}),style:m.value},[null==(e=o.default)?void 0:e.call(o)])])}}}),x=(0,o.n)(w)},75883:(e,t,n)=>{"use strict";n.r(t)},3147:(e,t,n)=>{n(89170),n(75883)},40689:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var o=n(89810),i=n(17999),r=n(60685);const a=n.p+"imgs/loading-f5f5f5.18b1a4.gif",c=n.p+"imgs/loading-ffffff.18b1a4.gif",l={class:"loadingContainer d-flex align-center justify-center fill-height fill-width"},s=["src"],d=(0,o.defineComponent)({__name:"loading",props:{type:null},setup(e){const t=e,n=(0,o.computed)((()=>"1"===t.type?a:c));return(e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createElementVNode)("img",{src:(0,o.unref)(n),alt:"",width:"64",height:"64"},null,8,s)]))}});const u=(0,n(57775).Z)(d,[["__scopeId","data-v-1835f8fa"]]),f={class:"webviewContainer fill-height"},p=["src"],h=(0,o.defineComponent)({__name:"Webview",setup(e){const t=(0,i.yj)(),n=(0,o.ref)(!0),a=(0,o.ref)({agreement:"https://desk.ctyun.cn/html/agreement/phone.html",privacy:"https://desk.ctyun.cn/html/privacy/phone.html",help:"https://desk.ctyun.cn/doc/help.html?appmodel=3&region=public&product=phone&actionbar=original"}),c=(0,o.ref)({agreement:"用户协议",privacy:"隐私政策",help:"帮助手册"}),l=(0,o.computed)((()=>c.value[String(t.query.id)]||"")),s=(0,o.computed)((()=>a.value[String(t.query.id)]))||"";function d(){n.value=!1}return(e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",f,[(0,o.createVNode)(r.Z,{title:(0,o.unref)(l)},null,8,["title"]),n.value?((0,o.openBlock)(),(0,o.createBlock)(u,{key:0,type:"1"})):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("iframe",{src:(0,o.unref)(s),frameborder:"0",width:"100%",height:"100%",onLoad:d},null,40,p)]))}})},60685:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(89810),i=n(5415),r=n(17999),a=n(52704);n(3147);const c={class:"d-flex justify-space-between align-center white pa-4"},l={class:"fs-18 grey--text text--darken-4"},s=(d=()=>(0,o.createElementVNode)("div",null,null,-1),(0,o.pushScopeId)("data-v-86040814"),d=d(),(0,o.popScopeId)(),d);var d;const u=(0,o.defineComponent)({__name:"header",props:{title:{default:"",type:String}},setup(e){const t=(0,r.tv)(),n=(0,o.useAttrs)();function d(){n.onBack?n.onBack():window.history.state?window.history.go(-1):t.replace({name:"phone_home",query:{module:"phone"}})}return(t,n)=>{const r=(0,o.resolveComponent)("el-icon");return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(a.L),{class:"fill-width"},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("header",c,[(0,o.createVNode)(r,{class:"pointer iconBack",onClick:d},{default:(0,o.withCtx)((()=>[(0,o.createVNode)((0,o.unref)(i.Z))])),_:1}),(0,o.createElementVNode)("div",l,(0,o.toDisplayString)(e.title),1),s])])),_:1})}}});const f=(0,n(57775).Z)(u,[["__scopeId","data-v-86040814"]])}}]);