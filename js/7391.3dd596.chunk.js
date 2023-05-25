(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[7391],{77140:e=>{e.exports="object"==typeof self?self.FormData:window.FormData},44876:(e,t,o)=>{"use strict";o.d(t,{yG:()=>b});var n,i,r,a=o(48402),s=o(88538),l=o(52134),c=o(59927),d=o(19816),u=o(77140),p=o(6298),h=o(54478),f=o(47690),m=o.n(f),v=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{l(n.next(e))}catch(e){r(e)}}function s(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))};let b=class{constructor(e,t,o){this.request=e,this.auth=t,this.database=o,this.ack="QDE5LXl1bmRpYW5uYW8=Q0xPVURfREVTS1RPUC0y",this.reportUser=null,this.table="reporter",this.reportPhones="reportPhones",this.reportEmails="reportEmails",this.reportContacts="reportContacts"}getAllReportUsers(){return k(this,void 0,void 0,(function*(){return yield this.database.find(this.table)}))}getAllReportPhones(){return k(this,void 0,void 0,(function*(){return yield this.database.find(this.reportPhones)}))}getAllReportEmails(){return k(this,void 0,void 0,(function*(){return yield this.database.find(this.reportEmails)}))}getAllReportContacts(){return k(this,void 0,void 0,(function*(){return yield this.database.find(this.reportContacts)}))}saveReportUser(e){return k(this,void 0,void 0,(function*(){if(!e||!e.username)return;d.k.info("save report user: ",e.username);const t=yield this.database.find(this.table);let o={[e.username]:e};t&&(o=Object.assign(t,o)),this.database.update(this.table,o)}))}saveReportContact(e){return k(this,void 0,void 0,(function*(){if(!e)return;d.k.info("save report contact: ",e);let t=yield this.database.find(this.reportContacts);t?t.includes(e)||t.push(e):t=[e],this.database.update(this.reportContacts,t)}))}saveReportPhone(e){return k(this,void 0,void 0,(function*(){if(!e)return;d.k.info("save report phone: ",e);let t=yield this.database.find(this.reportPhones);t?t.includes(e)||t.push(e):t=[e],this.database.update(this.reportPhones,t)}))}saveReportEmail(e){return k(this,void 0,void 0,(function*(){if(!e)return;d.k.info("save report email: ",e);let t=yield this.database.find(this.reportEmails);t?t.includes(e)||t.push(e):t=[e],this.database.update(this.reportEmails,t)}))}removeReportUser(e){return k(this,void 0,void 0,(function*(){d.k.info("remove report user: ",e);let t=yield this.database.find(this.table);t&&(delete t[e],this.database.update(this.table,t))}))}removeReportContact(e){return k(this,void 0,void 0,(function*(){d.k.info("remove report contact: ",e);let t=yield this.database.find(this.reportContacts);if(t){const o=t.indexOf(e);t.splice(o,1),this.database.update(this.reportContacts,t)}}))}removeReportPhone(e){return k(this,void 0,void 0,(function*(){d.k.info("remove report phone: ",e);let t=yield this.database.find(this.reportPhones);if(t){const o=t.indexOf(e);t.splice(o,1),this.database.update(this.reportPhones,t)}}))}removeReportEmail(e){return k(this,void 0,void 0,(function*(){d.k.info("remove report email: ",e);let t=yield this.database.find(this.reportEmails);if(t){const o=t.indexOf(e);t.splice(o,1),this.database.update(this.reportEmails,t)}}))}uploadReportImage(e){return k(this,void 0,void 0,(function*(){d.k.info("upload report image: ",e.files.path);let t=this.auth.getAuthProfile();const o=new u,n=Date.now();let i={appInfo:{appId:l.kJ,operStaff:l.eW,orgId:l.TY,sign:"",tenantId:(null==t?void 0:t.tenantId)||-2,timeStamp:n}};i.appInfo.sign=(0,l.gw)(n,l.eW,i.appInfo.tenantId);for(let e in i.appInfo)o.append(e,i.appInfo[e]);o.append("files",null,{filename:e.files.name,contentType:e.files.type});return yield this.request.api({url:"api/v2/client/uploadWsheetFile",method:"post",headers:o.getHeaders(),data:o})}))}submitReport(e){return k(this,void 0,void 0,(function*(){d.k.info("create worksheet",e);const t=yield this.request.api({url:"api/wsheet/client/createWorkSheet",method:"post",data:e});let o=e.wheetInfo.mobilePhone;const n=yield this.auth.getAuthProfile();return n&&(o=n.userAccount),t.data}))}setEvaluation(e){return k(this,void 0,void 0,(function*(){const e=yield this.auth.getAuthProfile();if(e){e.userAccount}}))}getEvaluation(e){return k(this,void 0,void 0,(function*(){yield this.auth.getAuthProfile();return{}}))}setUrge(e){return k(this,void 0,void 0,(function*(){const e=yield this.auth.getAuthProfile();if(e){e.userAccount}}))}getUrge(e){return k(this,void 0,void 0,(function*(){yield this.auth.getAuthProfile();return{}}))}uploadReportFeedback(e){return k(this,void 0,void 0,(function*(){const t=new u;t.append("files",e.files,e.files.name);return(yield this.request.api({method:"post",url:"api/wsheet/client/uploadFeedbackFile",headers:{"Content-Type":"multipart/form-data,multipart/*"},params:{wsheetId:e.wsheetId},data:t})).data}))}downloadFile(e){return k(this,void 0,void 0,(function*(){const t=(yield this.request.api({url:"api/v2/client/downloadWsheetFile",method:"get",params:e,responseType:"stream"})).data;return t.pipe(null),d.k.info(t),t}))}getDownloadItemInfo(e){return k(this,void 0,void 0,(function*(){}))}getHistoryReport(e){return k(this,void 0,void 0,(function*(){return yield this.request.api({url:"api/v2/client/qryWorkSheet",method:"post",data:e})}))}getFeedback(e){return k(this,void 0,void 0,(function*(){return(yield this.request.api({url:"api/wsheet/client/qryFeedbackMsg",method:"get",params:e})).data}))}replyReportFeedback(e){return k(this,void 0,void 0,(function*(){return(yield this.request.api({method:"post",url:"api/wsheet/client/replyWorkSheet",data:e})).data}))}getkey(){return window.atob(this.ack.slice(20)+this.ack.slice(0,20))}uploadLog(e,t){return k(this,void 0,void 0,(function*(){let o=d.k.getLogs();if(0!==o.length)try{let n=m()().format("YYYY-MM-DD-HH-mm-ss"),i=`web-${e}-${n}.log`,r=(0,h.JQ)(`${i}${e}${this.getkey()}`),a={url:"api/cdserv/client/clientlog/genReportUrl",method:"get",params:{fileName:i,account:e,checksum:r}};t&&(a.params.wsheetId=t);let s=new File(o,i),l=yield this.request.api(a);yield this.request.send({url:decodeURIComponent(l.data),method:"put",data:s,headers:{"Content-Type":"application/octet-stream"},maxContentLength:1/0}),d.k.cleanLogs()}catch(e){d.k.error(`日志上传失败:${e.message}`)}}))}};b=v([(0,a.Xn)(),g("design:paramtypes",["function"==typeof(n=void 0!==s.cf&&s.cf)?n:Object,"function"==typeof(i=void 0!==p.g&&p.g)?i:Object,"function"==typeof(r=void 0!==c.v&&c.v)?r:Object])],b)},58894:(e,t,o)=>{"use strict";o.d(t,{Z:()=>U});var n=o(89810);const i=o.p+"imgs/logo-of-select-desktop.3dd596.png",r=o.p+"imgs/logo-of-select-desktop-public.3dd596.png",a=o.p+"imgs/logo-of-select-desktop-5g.3dd596.png",s={class:"logo-wrap"},l={key:0,class:"logo-gy",src:i},c={key:1,class:"logo-5g",src:r},d={key:2,class:"logo-5g",src:a},u=["src"];var p=o(6522),h=o(48402);const f=(0,n.defineComponent)({name:"Logo",setup(){const e=h.nC.get(p.Xb),t=(0,n.ref)(""),o=(0,n.ref)(0),i=(0,n.ref)(""),r=()=>{};return(0,n.onMounted)((()=>{t.value=e.getRegion()})),{region:t,enableCustomLogo:o,customLogo:i,checkCustomLogo:r,loadError:()=>{}}}});var m=o(57775);const v=(0,m.Z)(f,[["render",function(e,t,o,i,r,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",s,[0===e.enableCustomLogo?((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:0},[e.region.startsWith("guangzhou")?((0,n.openBlock)(),(0,n.createElementBlock)("img",l)):"public"===e.region?((0,n.openBlock)(),(0,n.createElementBlock)("img",c)):((0,n.openBlock)(),(0,n.createElementBlock)("img",d))],64)):(0,n.createCommentVNode)("",!0),1===e.enableCustomLogo?((0,n.openBlock)(),(0,n.createElementBlock)("img",{key:1,onError:t[0]||(t[0]=(...t)=>e.loadError&&e.loadError(...t)),class:"logo-custom",src:e.customLogo,alt:""},null,40,u)):(0,n.createCommentVNode)("",!0)])}],["__scopeId","data-v-2defd85b"]]);var g=o(6298),k=o(44876),b=o(74178),y=o(65431),w=o(62195),C=o(5341),E=function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{l(n.next(e))}catch(e){r(e)}}function s(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))};const V=e=>((0,n.pushScopeId)("data-v-e0dcf6d0"),e=e(),(0,n.popScopeId)(),e),N={class:"box"},R={class:"box-btn"},B=V((()=>(0,n.createElementVNode)("span",{class:"pwa-link"},"添加到桌面",-1))),x={class:"pwa-conent"},P=V((()=>(0,n.createElementVNode)("img",{class:"pwa-logo",src:"static/icon_64x64.png"},null,-1))),I=V((()=>(0,n.createElementVNode)("p",{class:"pwa-title"},"添加天翼云电脑到桌面",-1))),L=V((()=>(0,n.createElementVNode)("p",{class:"pwa-desc"},"安装后可以在桌面快捷访问",-1))),A={key:0,class:"iconfont icon-Windowization-web"},F={key:1,class:"iconfont icon-FullScreen-web-copy"},_={class:"mobile-menu"},q={class:"mobile-menu-content"},D=(0,n.defineComponent)({__name:"MainHeader",setup(e){const t=(0,C.mL)(),o=(new b.pB,(0,n.inject)("$dialog")),i=h.nC.get(g.g),r=(h.nC.get(k.yG),h.nC.get(p.Xb)),a="https://desk.ctyun.cn/html/download/index.html";let s=(0,n.ref)(null);const l=(0,n.ref)(),c=(0,n.ref)(!1),d=(0,w.N)(),{fullscreen:u}=(0,y.Jk)(d);let f=null;function m(e){o.open(e),(0,n.unref)(l).hide()}function V(){}function D(e){window.open("https://desk.ctyun.cn"+{userAgreement:"/html/agreement/",privacy:"/html/privacy/",helpBook:"/doc/help.html"}[e])}function U(){let e=`https://desk.ctyun.cn/doc/help.html?${`appmodel=1&deviceType=${r.getDeviceType()}&clientVersion=${r.getAppVersionCode()}&orign=true&actionbar=original&region=public`}`;window.open(e)}function W(){window.open(a)}function j(){return E(this,void 0,void 0,(function*(){u.value=!u.value,u.value?document.documentElement.requestFullscreen():document.exitFullscreen()}))}function O(){f&&f.prompt()}return(0,n.onMounted)((()=>E(this,void 0,void 0,(function*(){s.value=yield i.getAuthProfile(),function(){function e(e){e.preventDefault(),f=e,c.value=!0}function t(e){f=null,c.value=!1}window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",t),(0,n.onUnmounted)((()=>{window.removeEventListener("beforeinstallprompt",e),window.removeEventListener("appinstalled",t)}))}()})))),(e,o)=>{const i=(0,n.resolveComponent)("el-button"),r=(0,n.resolveComponent)("el-popover"),d=(0,n.resolveComponent)("el-link"),p=(0,n.resolveComponent)("info-filled"),h=(0,n.resolveComponent)("el-icon");return(0,n.openBlock)(),(0,n.createElementBlock)("div",N,[(0,n.createElementVNode)("div",{onClick:V,class:"box-logo"},[(0,n.createVNode)(v)]),(0,n.createElementVNode)("div",R,[c.value?((0,n.openBlock)(),(0,n.createBlock)(r,{key:0,width:220},{reference:(0,n.withCtx)((()=>[B])),default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",x,[P,I,L,(0,n.createVNode)(i,{onClick:O,width:"168",class:"pwa-install",type:"primary"},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)("立即添加")])),_:1})])])),_:1})):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(d,{href:(0,n.unref)(a),underline:!1,class:"box-btn-item",target:"_blank"},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" 客户端下载 ")])),_:1},8,["href"]),(0,n.unref)(t)?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)(i,{key:1,class:"full-screen-btn",onClick:j},{default:(0,n.withCtx)((()=>[(0,n.unref)(u)?((0,n.openBlock)(),(0,n.createElementBlock)("i",A)):((0,n.openBlock)(),(0,n.createElementBlock)("i",F)),(0,n.createElementVNode)("span",null,(0,n.toDisplayString)((0,n.unref)(u)?"退出全屏":"全屏显示"),1)])),_:1})),(0,n.unref)(s)?((0,n.openBlock)(),(0,n.createElementBlock)("span",{key:2,class:"box-btn-item",onClick:o[0]||(o[0]=e=>m("about"))},[(0,n.createVNode)(h,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(p)])),_:1})])):(0,n.createCommentVNode)("",!0)]),(0,n.createVNode)(r,{"popper-class":"mobile-menu-popover",ref_key:"loginMenuPopoverRef",ref:l,width:"34vw"},{reference:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",_,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(3,(e=>(0,n.createElementVNode)("span",{class:"mobile-menu-btn",key:e}))),64))])])),default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("div",q,[(0,n.createElementVNode)("div",{class:"mobile-menu-item",onClick:o[1]||(o[1]=e=>m("report"))},"报障"),(0,n.createElementVNode)("div",{class:"mobile-menu-item",onClick:U},"帮助手册"),(0,n.createElementVNode)("div",{class:"mobile-menu-item",onClick:W},"客户端下载"),(0,n.createElementVNode)("div",{class:"mobile-menu-item",onClick:o[2]||(o[2]=e=>D("userAgreement"))},"用户协议"),(0,n.createElementVNode)("div",{class:"mobile-menu-item",onClick:o[3]||(o[3]=e=>D("privacy"))},"隐私政策"),c.value?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,class:"mobile-menu-item",onClick:O},"添加到桌面")):(0,n.createCommentVNode)("",!0)])])),_:1},512)])}}}),U=(0,m.Z)(D,[["__scopeId","data-v-e0dcf6d0"]])}}]);