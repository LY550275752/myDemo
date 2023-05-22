"use strict";(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[1650],{41650:(e,n,o)=>{o.r(n),o.d(n,{default:()=>m});var t=o(89810),i=o(86756),l=o(55304),c=o(19816),r=o(48402),a=function(e,n,o,t){return new(o||(o=Promise))((function(i,l){function c(e){try{a(t.next(e))}catch(e){l(e)}}function r(e){try{a(t.throw(e))}catch(e){l(e)}}function a(e){var n;e.done?i(e.value):(n=e.value,n instanceof o?n:new o((function(e){e(n)}))).then(c,r)}a((t=t.apply(e,n||[])).next())}))};const u={class:"line-up"},d={class:"line-up-content"},p=(s=()=>(0,t.createElementVNode)("span",{class:"line-up-content-icon"},[(0,t.createElementVNode)("i",{class:"iconfont icon-warning"})],-1),(0,t.pushScopeId)("data-v-8864184c"),s=s(),(0,t.popScopeId)(),s);var s;const f=["innerHTML"],v=(0,t.defineComponent)({__name:"lineUp",props:{connection:null},emits:["on-done"],setup(e,{emit:n}){const o=e,s=r.nC.get(l.hD);var v=(0,t.ref)(!0),m="",h=!1,k=(0,t.ref)(""),w=null,U=null,y=0;function C(){c.k.info("[LineUp] cancel line up"),x(),s.cancelConnectLineUp(m),n("on-done",0)}function L(){c.k.info("[LineUp] enter CPU desktop"),x(),n("on-done",0,l.AL.GPU)}function V(){return a(this,void 0,void 0,(function*(){let e=yield s.connectLineUp(m);if(e)if(e.canLogin)c.k.info("[LineUp] enter GPU desktop"),x(),n("on-done",0);else{num=e.waitNum;let n=`<span style="color: #2896FF;font-weight:bold;">${e.waitNum}</span>`;k.value=e.lineUpTips&&e.lineUpTips.replace(/\{[\s\S]+\}/g,n),w=setTimeout((()=>a(this,void 0,void 0,(function*(){try{yield V()}catch(e){h=!0,N()}}))),1e3*e.countDownSecond)}else g()}))}function N(){v.value?h&&!U&&(U=setInterval((()=>a(this,void 0,void 0,(function*(){c.k.info("[LineUp] retry line up");try{yield V(),T()}catch(e){c.k.info("[LineUp] retry line up fail. retry times is: ",y,"err is: ",e.message),3===++y&&(T(),g())}}))),2e3)):g()}function T(){h=!1,y=0,U&&(clearInterval(U),U=null)}function g(){x(),i.T.confirm("当前网络质量不佳，排队信息已丢失，请重试！","提示",{type:"error",showConfirmButton:!0,showCancelButton:!1,confirmButtonText:"知道了"}),c.k.info("[lineUp] line up error"),n("on-done",0)}function x(){w&&(clearTimeout(w),w=null),v.value=!1,T()}return(0,t.onMounted)((()=>a(this,void 0,void 0,(function*(){const{id:e,desktop:n}=o.connection;if(e)if(n){m=e;try{yield V()}catch(e){return c.k.info("[LineUp] line up error: ",e),h=!0,void N()}!function(){if(v.value)return;if(!k.value||k.value.length<=0)return;c.k.info("[LineUp] open line up dialog"),v.value=!0}()}else c.k.error("[LineUp] can not find desktop");else c.k.error("[LineUp] can not find connection id")})))),(e,n)=>{const o=(0,t.resolveComponent)("el-button"),i=(0,t.resolveComponent)("el-dialog");return(0,t.openBlock)(),(0,t.createElementBlock)("div",u,[(0,t.createVNode)(i,{"modal-append-to-body":!0,modal:!0,"append-to-body":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,title:"确认信息",modelValue:(0,t.unref)(v),"onUpdate:modelValue":n[0]||(n[0]=e=>(0,t.isRef)(v)?v.value=e:v=e),top:"40vh",width:"30%"},{footer:(0,t.withCtx)((()=>[(0,t.createVNode)(o,{onClick:C},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("取消等待")])),_:1}),(0,t.createVNode)(o,{type:"primary",onClick:L},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("进入GPU云电脑")])),_:1})])),default:(0,t.withCtx)((()=>[(0,t.createElementVNode)("div",d,[p,(0,t.createElementVNode)("span",{innerHTML:(0,t.unref)(k)},null,8,f)])])),_:1},8,["modelValue"])])}}});const m=(0,o(57775).Z)(v,[["__scopeId","data-v-8864184c"]])}}]);