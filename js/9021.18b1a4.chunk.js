"use strict";(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[9021],{72900:(e,t,n)=>{function a(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function i(e){let t;if("object"!=typeof e)t=e;else if("null"===a(e)||"undefined"===a(e))t=e;else if("array"===a(e)){let n;t=[];const a=e.length;for(n=0;n<a;n++)t.push(e[n])}else if("object"===a(e)){t={};for(let n in e)if(e.hasOwnProperty(n)){const o=e[n];if(o===e)continue;"array"===a(o)||"object"===a(o)?t[n]=i(o):t[n]=o}}else t=e;return t}n.d(t,{Dy:()=>o,Jh:()=>u,Oh:()=>c,d9:()=>i,ds:()=>l,p:()=>r,p6:()=>s});function o(e){let t=0,n="当前密码只包含",a={flag:!1,message:""};return/\s/.test(e)?(a.message="密码不支持空格",a):/[\u4e00-\u9fa5]+/.test(e)?(a.message="密码不支持中文",a):e.length<8||e.length>20?(a.message="密码长度需要在 8-20 位之间",a):(/([a-z])+/.test(e)&&(n+="小写字母 ",t++),/([A-Z])+/.test(e)&&(n+="大写字母 ",t++),/(\d)+/.test(e)&&(n+="数字 ",t++),/[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@\[\\\]\^_`\{\|\}~]/.test(e)&&(n+="特殊字符 ",t++),t<3?a.message=n:(a.flag=!0,a.message=""),a)}function u(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.trim())}function r(e){return/1\d{10}/g.test(e.trim())}function l(e){return/^((25[0-5]|2[0-4]\d|[1]{1}\d{1}\d{1}|[1-9]{1}\d{1}|\d{1})($|(?!\.$)\.)){4}$/.test(e)}function c(e){let t=e.split(":"),n=0,a="";if(t.length>2)n=Number(t.pop()),a=t.join(":");else{if(2!==t.length)throw new Error("无法解析服务器地址");a=t[0],n=Number(t[1])}return{host:a,port:n}}function s(e,t="yyyy-MM-dd",n="--"){if(!e)return n;let a=new Date(e);if(e=e+60*a.getTimezoneOffset()*1e3- -288e5,a.setTime(e),"Invalid Date"===a.toString())return n;let i={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}},9021:(e,t,n)=>{n.d(t,{C:()=>g});var a=n(89810),i=n(65431),o=n(92720),u=n(17999),r=n(64566),l=(n(15807),n(48402)),c=n(54478),s=n(6298),v=n(66527),d=n(17008),f=n(72900),h=function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function u(e){try{l(a.next(e))}catch(e){o(e)}}function r(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,r)}l((a=a.apply(e,t||[])).next())}))};const g=(0,i.Q_)("auth",(()=>{const e=l.nC.get(s.g),t=l.nC.get(d.A),n=(0,u.yj)(),i=(0,u.tv)(),g=(0,a.ref)(null),p=(0,a.ref)(null),m=(0,a.ref)(""),y=(0,a.ref)(""),w=(0,a.ref)(""),b=(0,a.ref)(""),C=(0,a.ref)(""),F=(0,a.ref)(""),D=(0,a.ref)(!1),P=(0,a.ref)(""),S=(0,a.ref)(!1),A=(0,a.ref)(!1),E=(0,a.ref)(!1),_=((0,a.ref)(""),(0,a.ref)("")),N=(0,a.ref)(""),M=(0,a.ref)(!1),j=(0,a.ref)(!1),R=(0,a.ref)(!1),O=(0,a.ref)(!1),I=(0,a.ref)(""),k=(0,a.ref)(""),B=(0,a.ref)(0),T=(0,a.ref)(0),U=(0,a.ref)(!1),x=(0,a.ref)(!1),L=((0,a.ref)(0),(0,a.ref)(!1)),V=(0,a.ref)(!1),$=(0,a.ref)(""),q=(0,a.ref)(""),G=(0,a.ref)(""),H=(0,a.ref)(""),z=(0,a.ref)(""),X=(0,a.ref)(!1),J=(0,a.ref)(""),Q=(0,a.ref)(!1),Z=(0,a.ref)(!0),W=(0,a.ref)(""),Y=(0,a.ref)(""),K=(0,a.ref)(!1),ee=(0,a.computed)((()=>!(!g.value||!g.value.userId)));(0,a.computed)((()=>"phone_device_verify"===n.name)),(0,a.computed)((()=>"phone_verification"===n.name));function te(){return h(this,void 0,void 0,(function*(){try{ne(yield e.getAuthProfile())}catch(e){}}))}function ne(e){e&&e.mobilephone&&(w.value=e.mobilephone),g.value=(0,o.cloneDeep)(e)}function ae(){return h(this,void 0,void 0,(function*(){A.value=!0;let t={width:100,height:40,userInfo:m.value};E.value&&(t.preUrl=P.value);try{P.value=yield e.getCaptchaUrl(t),A.value=!1,E.value=!1}catch(e){r.F.fail(e.message),E.value=!0,A.value=!1}}))}function ie(){return h(this,void 0,void 0,(function*(){M.value=!0;let t={width:100,height:40,userInfo:w.value};R.value&&(t.preUrl=I.value),R.value=!1;try{I.value=yield e.getCaptchaUrl(t),M.value=!1}catch(e){r.F.fail(e.message),R.value=!0,M.value=!1}}))}function oe(){return h(this,void 0,void 0,(function*(){j.value=!0,R.value=!1;const e={width:100,height:40};try{const n=yield t.getBindCaptchaCode(e);k.value=URL.createObjectURL(new Blob([n.data],{type:"image/jpeg"})),j.value=!1}catch(e){r.F.fail(e.message),O.value=!0,j.value=!1}}))}function ue(){if(T.value=Math.ceil((B.value-Date.now())/1e3),T.value>0){const e=setInterval((()=>{T.value<0&&clearInterval(e),T.value=Math.ceil((B.value-Date.now())/1e3)}),1e3)}}return{username:m,password:y,needCaptcha:S,captcha:b,logging:D,captchaUrl:P,validating:L,phoneCaptcha:_,bindCaptcha:N,phone:w,phoneCaptchaUrl:I,bindCaptchaUrl:k,sms:C,bindSms:F,countdownSecond:T,loginData:p,authData:g,logged:ee,binding:V,initAuth:te,updateAuthData:ne,updateLoginData:function(e){p.value=(0,o.cloneDeep)(e)},getCaptcha:ae,submitLogin:function(){return h(this,void 0,void 0,(function*(){D.value=!0;let t={username:m.value,password:(0,c.FB)(y.value).toString(),sha256Password:(0,c.JQ)(y.value).toString(),remember:!1};S.value&&(t.captchaCode=b.value.trim());try{const n=yield e.login(t);w.value=n.mobilephone,D.value=!1,te()}catch(e){D.value=!1,[v.or.NEED_CAPTCHA,v.or.INVALID_CAPTCHA,v.or.EXPIRE_CAPTCHA].includes(e.code)&&(S.value=!0),r.F.fail(e.message),b.value="",yield ae()}}))},getPhoneCaptcha:ie,getSms:function(){return h(this,void 0,void 0,(function*(){if(!w.value.trim())return void i.replace({name:"phone_login"});if(!_.value.trim())return void(0,r.F)("请输入图形码");if(U.value||T.value>0)return;U.value=!0,x.value=!1;const t={mobilePhone:w.value,captchaCode:_.value};try{yield e.sendLoginSmsCode(t),U.value=!1,B.value=Date.now()+6e4,r.F.success("发送成功"),ue()}catch(e){U.value=!1,x.value=!0,r.F.fail(e.message),ie()}}))},phoneVerification:function(){return h(this,void 0,void 0,(function*(){if(!w.value.trim())return;if(!_.value.trim())return void(0,r.F)("请输入图形验证码");if(!C.value.trim())return void(0,r.F)("请输入短信验证码");if(!p.value)return(0,r.F)("请重新登录"),void i.replace({name:"phone_login"});L.value=!0;let t=(0,o.cloneDeep)(p.value);t.smsCode=C.value.trim();try{yield e.login(t),L.value=!1}catch(e){C.value="",_.value="",r.F.fail(e.message),ie(),L.value=!1}}))},getBindCaptcha:oe,bindDevice:function(){return h(this,void 0,void 0,(function*(){if(w.value.trim())if(N.value.trim())if(F.value.trim()){V.value=!0;try{yield t.bind(F.value.trim()),V.value=!1,r.F.success("验证成功"),i.push({name:"phone_home"})}catch(e){r.F.fail(e.message),V.value=!1,N.value="",F.value="",oe()}}else(0,r.F)("请输入短信验证码");else(0,r.F)("请输入图形验证码");else i.replace({name:"phone_login"})}))},getBindSms:function(){return h(this,void 0,void 0,(function*(){if(!w.value.trim())return void i.replace({name:"phone_login"});if(!N.value.trim())return void(0,r.F)("请输入图形码");if(U.value||T.value>0)return;U.value=!0,x.value=!1;let e={mobilePhone:w.value,captchaCode:N.value};try{yield t.sendBindSMSCode(e),U.value=!1,B.value=Date.now()+6e4,r.F.success("发送成功"),ue()}catch(e){U.value=!1,x.value=!0,r.F.fail(e.message),oe()}}))},logout:function(){return h(this,void 0,void 0,(function*(){yield e.logout(),te(),window.location.reload()}))},loadingForgot:X,forgotPhone:$,forgotCode:q,newPassword:H,confirmPassword:z,getForgotSms:function(){return h(this,void 0,void 0,(function*(){if(U.value||T.value>0)return;if(!(0,f.p)($.value))return void(0,r.F)("请填写正确的手机号");const t={mobilePhone:Number($.value)};U.value=!0,x.value=!1;try{yield e.sendSMSCode(t),U.value=!1,B.value=Date.now()+6e4,r.F.success("发送成功"),ue()}catch(e){U.value=!1,x.value=!0,r.F.fail(e.message)}}))},checkForgotUser:function(){return h(this,void 0,void 0,(function*(){X.value=!0;const t={mobilePhone:Number($.value),validateCode:String(q.value)};try{yield e.checkAndGetUserInfo(t),G.value=yield e.validateSMSCode(t),q.value="",X.value=!1,i.push({name:"phone_new_password"})}catch(e){X.value=!1,r.F.fail(e.message)}}))},submitForgot:function(){return h(this,void 0,void 0,(function*(){if(!$.value)return(0,r.F)("手机号无效"),void i.replace({name:"phone_forgot"});if(!H.value||!z.value)return void(0,r.F)("请输入密码");if(H.value!==z.value)return void(0,r.F)("两次输入密码不一致");const t=(0,f.Dy)(z.value);if(!t.flag)return void(0,r.F)(t.message);X.value=!0;const n={mobilePhone:Number($.value),password:z.value,sign:G.value,encPwd1:(0,c.FB)(String(H.value)),encPwd2:(0,c.JQ)(String(z.value))};try{yield e.forgetPassword(n),X.value=!1,i.push({name:"phone_home",query:{module:"me"}}),r.F.success("重置成功")}catch(e){X.value=!1,r.F.fail(e.message)}}))},updateNewPassword:function(e){H.value=e},updateConfirmPassword:function(e){z.value=e},validateCode:J,accountValidating:Q,getValidateSms:function(){return h(this,void 0,void 0,(function*(){if(U.value||T.value>0)return;const t={mobilePhone:g.value&&Number(g.value.mobilephone)};U.value=!0,x.value=!1;try{yield e.sendSMSCode(t),U.value=!1,B.value=Date.now()+6e4,r.F.success("验证码已发送，请查收"),ue()}catch(e){U.value=!1,x.value=!0,r.F.fail(e.message)}}))},validateAccount:function(){return h(this,void 0,void 0,(function*(){const t={mobilePhone:g.value&&Number(g.value.mobilephone),validateCode:J.value};try{yield e.checkAndGetUserInfo(t),yield e.validateSMSCode(t),Z.value=!0,J.value="",i.push({name:"phone_new_phone"})}catch(e){r.F.fail(e.message)}}))},isValidate:Z,newPhone:W,newEmail:Y,setNewPhone:function(){return h(this,void 0,void 0,(function*(){K.value=!0,r.F.loading("正在提交");const t={newPhoneNum:W.value,validateCode:J.value};try{yield e.changeMobilePhone(t),K.value=!1,r.F.clear(),i.push({name:"phone_account"})}catch(e){r.F.fail(e.message)}}))},resetAuth:function(){g.value=null},resetLoginData:function(){m.value="",y.value="",b.value="",S.value=!1},loginByToken:function(){return h(this,void 0,void 0,(function*(){const{token:t}=n.query;if(t)try{yield e.loginByToken(t),te()}catch(e){}}))}}}))},17008:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(6522),i=n(88538),o=n(6298),u=n(55304),r=n(48402);Symbol("Device");var l,c,s,v,d=function(e,t,n,a){var i,o=arguments.length,u=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,a);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(u=(o<3?i(u):o>3?i(t,n,u):i(t,n))||u);return o>3&&u&&Object.defineProperty(t,n,u),u},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function u(e){try{l(a.next(e))}catch(e){o(e)}}function r(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,r)}l((a=a.apply(e,t||[])).next())}))};let g=class{constructor(e,t,n,a){this.Env=e,this.Auth=t,this.Desktop=n,this.Request=a,this.windowName="device",this.registerListeners()}registerListeners(){}bind(e){return h(this,void 0,void 0,(function*(){let t={verificationCode:e,deviceName:this.Env.getDeviceName(),deviceCode:this.Env.getDeviceCode(),deviceModel:this.Env.getDeviceModel(),sysVersion:this.Env.getOSVersion(),appVersion:this.Env.getAppVersion(),hostName:this.Env.getHostName(),deviceInfo:window.navigator.platform||"WebBrowser"},n=yield this.Request.api({method:"POST",url:"api/cdserv/client/device/binding",params:t,headers:{NEED_SIGN:!0,"Content-Type":"application/x-www-form-urlencoded"}});return this.Auth.updateAuthProfile({bondedDevice:!0}),this.Auth.saveAccountData(),n.data}))}unbind(){return h(this,void 0,void 0,(function*(){return!1}))}getBindCaptchaCode(e){return h(this,void 0,void 0,(function*(){if(!this.Auth.getAuthProfile())throw new Error("帐号未登录");return yield this.Request.api({method:"GET",url:"api/auth/client/validateCode/captcha",params:Object.assign(Object.assign({},e),{_t:Date.now()}),responseType:"blob"})}))}sendBindSMSCode(e){return h(this,void 0,void 0,(function*(){if(!this.Auth.getAuthProfile())throw new Error("帐号未登陆");return(yield this.Request.api({url:"api/cdserv/client/device/getSmsCode",method:"GET",params:e,headers:{NEED_SIGN:!0}})).data}))}};g=d([(0,r.Xn)(),f("design:paramtypes",["function"==typeof(l=void 0!==a.Xb&&a.Xb)?l:Object,"function"==typeof(c=void 0!==o.g&&o.g)?c:Object,"function"==typeof(s=void 0!==u.hD&&u.hD)?s:Object,"function"==typeof(v=void 0!==i.cf&&i.cf)?v:Object])],g)}}]);