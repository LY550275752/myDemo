"use strict";(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[811],{91234:(e,l,a)=>{a.r(l),a.d(l,{default:()=>h});var t=a(89810),o=a(60685),n=a(9021),d=a(65431),i=a(18282),u=a(43944),r=a(63102),c=a(64566),s=a(61273),f=(a(15807),a(94684),a(17999));const m={class:"accountValidateContainer fill-height d-flex flex-column"},p={class:"d-flex align-center fill-width"},v={class:"pa-4 border-box mt-auto fill-width"},h=(0,t.defineComponent)({__name:"NewPhone",setup(e){const l=(0,f.yj)(),a=(0,n.C)(),h=(0,i._)(),{authData:b}=(0,d.Jk)(a),{counting:V,loadingSms:C,isVerified:w,validateCode:N,countdownSecond:g,setting:k}=(0,d.Jk)(h),x=(0,t.ref)(""),_=(0,t.computed)((()=>g.value>0?`重新发送(${g.value})`:"获取验证码"));(0,t.computed)((()=>!w.value&&(u.Z.replace({name:"phone_account_validate",query:l.query}),!0)));function y(){if(!(0,r.p)(x.value))return void c.F.fail("无效的手机号码");const e={sign:l.query.sign,mobilePhone:b.value&&b.value.mobilephone,newPhoneNum:x.value};h.getValidateSms(e)}function P(){(0,r.p)(x.value)?N.value?s.V.confirm({message:"您正在修改的手机号包括：天翼云电脑、天翼云桌面（通用版），是否确认修改"}).then((()=>{const e={newPhoneNum:x.value,validateCode:N.value};h.setNewPhone(e)})).catch((()=>{})):c.F.fail("请输入验证码"):c.F.fail("无效的手机号码")}return(0,t.onMounted)((()=>{h.resetValidateCode(),h.resetCountdownSecond(),x.value=""})),(e,l)=>{const a=(0,t.resolveComponent)("el-input"),n=(0,t.resolveComponent)("el-form-item"),d=(0,t.resolveComponent)("el-button"),i=(0,t.resolveComponent)("el-form");return(0,t.openBlock)(),(0,t.createElementBlock)("div",m,[(0,t.createVNode)(o.Z,{title:"更换手机号码"}),(0,t.createVNode)(i,{size:"large","label-width":"82px",class:"pa-4 white mt-4"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(n,{label:"新手机号码"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(a,{modelValue:x.value,"onUpdate:modelValue":l[0]||(l[0]=e=>x.value=e),placeholder:"请输入新手机号码",disabled:(0,t.unref)(k)},null,8,["modelValue","disabled"])])),_:1}),(0,t.createVNode)(n,{label:"验证码"},{default:(0,t.withCtx)((()=>[(0,t.createElementVNode)("div",p,[(0,t.createVNode)(a,{modelValue:(0,t.unref)(N),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,t.isRef)(N)?N.value=e:null),class:"verify",placeholder:"请输入验证码",clearable:"",size:"large",autocomplete:"off",disabled:(0,t.unref)(k)},null,8,["modelValue","disabled"]),(0,t.createVNode)(d,{class:"ml-2",disabled:(0,t.unref)(V)||(0,t.unref)(k),type:"primary",size:"large",plain:"",onClick:y},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)((0,t.toDisplayString)((0,t.unref)(_)),1)])),_:1},8,["disabled"])])])),_:1})])),_:1}),(0,t.createElementVNode)("div",v,[(0,t.createVNode)(d,{block:"",size:"large",class:"submit",type:"primary",disabled:(0,t.unref)(k)||!x.value||!(0,t.unref)(N),onClick:P,style:{height:"48px"}},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("确定")])),_:1},8,["disabled"])])])}}})}}]);