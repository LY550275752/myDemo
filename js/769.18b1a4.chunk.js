(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[769],{58326:(e,t,n)=>{"use strict";n.d(t,{I:()=>b});var a=n(28125),o=n(52429),i=n(89810),r=n(50729),s=n(24577),l=n(64338),c=n(33745),d=n(31166),u=n(16934),p=(0,r.do)("pull-refresh"),f=(0,o.Z)(p,3),h=f[0],m=f[1],v=f[2],g=["pulling","loosing","success"],k={disabled:Boolean,modelValue:Boolean,headHeight:(0,s.SI)(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:s.Or,successDuration:(0,s.SI)(500),animationDuration:(0,s.SI)(300)},y=(0,i.defineComponent)({name:h,props:k,emits:["change","refresh","update:modelValue"],setup:function(e,t){var n,a=t.emit,o=t.slots,r=(0,i.ref)(),s=(0,i.ref)(),p=(0,c.eo)(r),f=(0,i.reactive)({status:"normal",distance:0,duration:0}),h=(0,d.o)(),k=function(){if(50!==e.headHeight)return{height:"".concat(e.headHeight,"px")}},y=function(){return"loading"!==f.status&&"success"!==f.status&&!e.disabled},b=function(t,n){var o=+(e.pullDistance||e.headHeight);f.distance=t,f.status=n?"loading":0===t?"normal":t<o?"pulling":"loosing",a("change",{status:f.status,distance:t})},w=function(){var t=f.status;return"normal"===t?"":e["".concat(t,"Text")]||v(t)},C=function(){var e=f.status,t=f.distance;if(o[e])return o[e]({distance:t});var n=[];return g.includes(e)&&n.push((0,i.createVNode)("div",{class:m("text")},[w()])),"loading"===e&&n.push((0,i.createVNode)(u.g,{class:m("loading")},{default:w})),n},V=function(e){(n=0===(0,l.cx)(p.value))&&(f.duration=0,h.start(e))},R=function(e){y()&&V(e)},x=function(){n&&h.deltaY.value&&y()&&(f.duration=+e.animationDuration,"loosing"===f.status?(b(+e.headHeight,!0),a("update:modelValue",!0),(0,i.nextTick)((function(){return a("refresh")}))):b(0))};return(0,i.watch)((function(){return e.modelValue}),(function(t){f.duration=+e.animationDuration,t?b(+e.headHeight,!0):o.success||e.successText?(f.status="success",setTimeout((function(){b(0)}),+e.successDuration)):b(0,!1)})),(0,c.OR)("touchmove",(function(t){if(y()){n||V(t);var a=h.deltaY;h.move(t),n&&a.value>=0&&h.isVertical()&&((0,l.PF)(t),b((o=a.value,i=+(e.pullDistance||e.headHeight),o>i&&(o=o<2*i?i+(o-i)/2:1.5*i+(o-2*i)/4),Math.round(o))))}var o,i}),{target:s}),function(){var e,t={transitionDuration:"".concat(f.duration,"ms"),transform:f.distance?"translate3d(0,".concat(f.distance,"px, 0)"):""};return(0,i.createVNode)("div",{ref:r,class:m()},[(0,i.createVNode)("div",{ref:s,class:m("track"),style:t,onTouchstartPassive:R,onTouchend:x,onTouchcancel:x},[(0,i.createVNode)("div",{class:m("head"),style:k()},[C()]),null==(e=o.default)?void 0:e.call(o)])])}}}),b=(0,a.n)(y)},10731:(e,t,n)=>{"use strict";n.r(t)},43816:(e,t,n)=>{"use strict";n.r(t)},71142:(e,t,n)=>{n(89170),n(59772),n(10731)},18267:(e,t,n)=>{n(89170),n(59772),n(43816)},44876:(e,t,n)=>{"use strict";n.d(t,{yG:()=>y});var a,o,i,r=n(48402),s=n(88538),l=n(52134),c=n(59927),d=n(19816),u=n(77140),p=n(6298),f=n(54478),h=n(47690),m=n.n(h),v=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,n,a){return new(n||(n=Promise))((function(o,i){function r(e){try{l(a.next(e))}catch(e){i(e)}}function s(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};let y=class{constructor(e,t,n){this.request=e,this.auth=t,this.database=n,this.ack="QDE5LXl1bmRpYW5uYW8=Q0xPVURfREVTS1RPUC0y",this.reportUser=null,this.table="reporter",this.reportPhones="reportPhones",this.reportEmails="reportEmails",this.reportContacts="reportContacts"}getAllReportUsers(){return k(this,void 0,void 0,(function*(){return yield this.database.find(this.table)}))}getAllReportPhones(){return k(this,void 0,void 0,(function*(){return yield this.database.find(this.reportPhones)}))}getAllReportEmails(){return k(this,void 0,void 0,(function*(){return yield this.database.find(this.reportEmails)}))}getAllReportContacts(){return k(this,void 0,void 0,(function*(){return yield this.database.find(this.reportContacts)}))}saveReportUser(e){return k(this,void 0,void 0,(function*(){if(!e||!e.username)return;d.k.info("save report user: ",e.username);const t=yield this.database.find(this.table);let n={[e.username]:e};t&&(n=Object.assign(t,n)),this.database.update(this.table,n)}))}saveReportContact(e){return k(this,void 0,void 0,(function*(){if(!e)return;d.k.info("save report contact: ",e);let t=yield this.database.find(this.reportContacts);t?t.includes(e)||t.push(e):t=[e],this.database.update(this.reportContacts,t)}))}saveReportPhone(e){return k(this,void 0,void 0,(function*(){if(!e)return;d.k.info("save report phone: ",e);let t=yield this.database.find(this.reportPhones);t?t.includes(e)||t.push(e):t=[e],this.database.update(this.reportPhones,t)}))}saveReportEmail(e){return k(this,void 0,void 0,(function*(){if(!e)return;d.k.info("save report email: ",e);let t=yield this.database.find(this.reportEmails);t?t.includes(e)||t.push(e):t=[e],this.database.update(this.reportEmails,t)}))}removeReportUser(e){return k(this,void 0,void 0,(function*(){d.k.info("remove report user: ",e);let t=yield this.database.find(this.table);t&&(delete t[e],this.database.update(this.table,t))}))}removeReportContact(e){return k(this,void 0,void 0,(function*(){d.k.info("remove report contact: ",e);let t=yield this.database.find(this.reportContacts);if(t){const n=t.indexOf(e);t.splice(n,1),this.database.update(this.reportContacts,t)}}))}removeReportPhone(e){return k(this,void 0,void 0,(function*(){d.k.info("remove report phone: ",e);let t=yield this.database.find(this.reportPhones);if(t){const n=t.indexOf(e);t.splice(n,1),this.database.update(this.reportPhones,t)}}))}removeReportEmail(e){return k(this,void 0,void 0,(function*(){d.k.info("remove report email: ",e);let t=yield this.database.find(this.reportEmails);if(t){const n=t.indexOf(e);t.splice(n,1),this.database.update(this.reportEmails,t)}}))}uploadReportImage(e){return k(this,void 0,void 0,(function*(){d.k.info("upload report image: ",e.files.path);let t=this.auth.getAuthProfile();const n=new u,a=Date.now();let o={appInfo:{appId:l.kJ,operStaff:l.eW,orgId:l.TY,sign:"",tenantId:(null==t?void 0:t.tenantId)||-2,timeStamp:a}};o.appInfo.sign=(0,l.gw)(a,l.eW,o.appInfo.tenantId);for(let e in o.appInfo)n.append(e,o.appInfo[e]);n.append("files",null,{filename:e.files.name,contentType:e.files.type});return yield this.request.api({url:"api/v2/client/uploadWsheetFile",method:"post",headers:n.getHeaders(),data:n})}))}submitReport(e){return k(this,void 0,void 0,(function*(){d.k.info("create worksheet",e);const t=yield this.request.api({url:"api/wsheet/client/createWorkSheet",method:"post",data:e});let n=e.wheetInfo.mobilePhone;const a=yield this.auth.getAuthProfile();return a&&(n=a.userAccount),t.data}))}setEvaluation(e){return k(this,void 0,void 0,(function*(){const e=yield this.auth.getAuthProfile();if(e){e.userAccount}}))}getEvaluation(e){return k(this,void 0,void 0,(function*(){yield this.auth.getAuthProfile();return{}}))}setUrge(e){return k(this,void 0,void 0,(function*(){const e=yield this.auth.getAuthProfile();if(e){e.userAccount}}))}getUrge(e){return k(this,void 0,void 0,(function*(){yield this.auth.getAuthProfile();return{}}))}uploadReportFeedback(e){return k(this,void 0,void 0,(function*(){const t=new u;t.append("files",e.files,e.files.name);return(yield this.request.api({method:"post",url:"api/wsheet/client/uploadFeedbackFile",headers:{"Content-Type":"multipart/form-data,multipart/*"},params:{wsheetId:e.wsheetId},data:t})).data}))}downloadFile(e){return k(this,void 0,void 0,(function*(){const t=(yield this.request.api({url:"api/v2/client/downloadWsheetFile",method:"get",params:e,responseType:"stream"})).data;return t.pipe(null),d.k.info(t),t}))}getDownloadItemInfo(e){return k(this,void 0,void 0,(function*(){}))}getHistoryReport(e){return k(this,void 0,void 0,(function*(){return yield this.request.api({url:"api/v2/client/qryWorkSheet",method:"post",data:e})}))}getFeedback(e){return k(this,void 0,void 0,(function*(){return(yield this.request.api({url:"api/wsheet/client/qryFeedbackMsg",method:"get",params:e})).data}))}replyReportFeedback(e){return k(this,void 0,void 0,(function*(){return(yield this.request.api({method:"post",url:"api/wsheet/client/replyWorkSheet",data:e})).data}))}getkey(){return window.atob(this.ack.slice(20)+this.ack.slice(0,20))}uploadLog(e,t){return k(this,void 0,void 0,(function*(){let n=d.k.getLogs();if(0!==n.length)try{let a=m()().format("YYYY-MM-DD-HH-mm-ss"),o=`web-${e}-${a}.log`,i=(0,f.JQ)(`${o}${e}${this.getkey()}`),r={url:"api/cdserv/client/clientlog/genReportUrl",method:"get",params:{fileName:o,account:e,checksum:i}};t&&(r.params.wsheetId=t);let s=new File(n,o),l=yield this.request.api(r);yield this.request.send({url:decodeURIComponent(l.data),method:"put",data:s,headers:{"Content-Type":"application/octet-stream"},maxContentLength:1/0}),d.k.cleanLogs()}catch(e){d.k.error(`日志上传失败:${e.message}`)}}))}};y=v([(0,r.Xn)(),g("design:paramtypes",["function"==typeof(a=void 0!==s.cf&&s.cf)?a:Object,"function"==typeof(o=void 0!==p.g&&p.g)?o:Object,"function"==typeof(i=void 0!==c.v&&c.v)?i:Object])],y)},18387:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var a=n(89810),o=n(65431),i=n(58326),r=(n(71142),n(18267),n(63135)),s=n(69930),l=n(47150),c=n(60685),d=function(e,t,n,a){return new(n||(n=Promise))((function(o,i){function r(e){try{l(a.next(e))}catch(e){i(e)}}function s(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}))};const u=(0,a.defineComponent)({__name:"Feedback",setup(e){const t=(0,r.R)(),{feedbackList:n,feedbackPage:u,loadingFeedback:p,scrollBottom:f,finishedFeedback:h}=(0,o.Jk)(t),m=(0,a.ref)(null);function v(){t.getReportFeedback(u.value+1)}function g(){m.value&&(m.value.scrollTop=m.value.scrollHeight-56-48,t.updateScrollBottom(!1))}return(0,a.watch)(f,(e=>{e&&g()})),(0,a.onMounted)((()=>d(this,void 0,void 0,(function*(){yield t.getReportFeedback(1),(0,a.nextTick)((()=>{g()}))})))),(e,t)=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"reportFeedback fill-height",ref_key:"feedback",ref:m},[(0,a.createVNode)(c.Z,{title:"报障反馈"}),(0,a.createVNode)((0,a.unref)(i.I),{modelValue:(0,a.unref)(p),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,a.isRef)(p)?p.value=e:null),onRefresh:v,disabled:(0,a.unref)(h),style:{"min-height":"calc(100% - 56px - 48px)"}},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)((0,a.unref)(n),((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(s.Z,{key:t,item:e},null,8,["item"])))),128))])),_:1},8,["modelValue","disabled"]),(0,a.createVNode)(l.Z)],512))}});const p=(0,n(57775).Z)(u,[["__scopeId","data-v-d1c42a74"]])},69930:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var a=n(89810),o=n(65431),i=n(86015),r=(n(71755),n(8770)),s=n(55516),l=n(35393),c=n(63135);const d={key:0,class:"iconfont icon-user"},u={class:"info"},p={class:"who mb-2"},f={class:"desc mb-2 d-flex align-center"},h={key:0,class:"text"},m={style:{direction:"ltr"}},v={class:"image-slot"},g={key:0,class:"replying mr-2"},k={class:"time my-4"},y=(0,a.defineComponent)({__name:"feedbackItem",props:{item:null},setup(e){const t=e,n=(0,c.R)(),{feedbackList:y,feedbackImages:b}=(0,o.Jk)(n),w=(0,a.computed)((()=>t.item)),C=(0,a.computed)((()=>w.value.feedbackAttach?w.value.feedbackAttach.match("data:image")?[w.value.feedbackAttach]:w.value.feedbackAttach.split(","):[])),V=(0,a.inject)("$filter"),R=(0,a.computed)((()=>2===w.value.feedbackSource)),x=(0,a.computed)((()=>2===w.value.feedbackSource?"我":0===w.value.feedbackSource?"客服":3===w.value.feedbackSource?"运维":"-"));function N(){w.value.params.files?n.submitFeedbackFile(w.value):n.retryFeedbackMsg(w.value)}return(e,t)=>{const n=(0,a.resolveComponent)("el-icon"),o=(0,a.resolveComponent)("el-image");return(0,a.openBlock)(),(0,a.createElementBlock)("div",{class:(0,a.normalizeClass)(["feedbackItem pa-2",(0,a.unref)(R)&&"is-reverse"])},[(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)(["avatar",(0,a.unref)(R)&&"primary"])},[(0,a.unref)(R)?((0,a.openBlock)(),(0,a.createElementBlock)("i",d)):(0,a.createCommentVNode)("",!0)],2),(0,a.createElementVNode)("div",u,[(0,a.createElementVNode)("div",p,(0,a.toDisplayString)((0,a.unref)(x)),1),(0,a.createElementVNode)("div",f,[(0,a.createElementVNode)("div",null,[(0,a.unref)(w).feedbackMsg?((0,a.openBlock)(),(0,a.createElementBlock)("div",h,[(0,a.createElementVNode)("span",m,(0,a.toDisplayString)((0,a.unref)(w).feedbackMsg),1)])):(0,a.createCommentVNode)("",!0),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)((0,a.unref)(C),((e,t)=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:t,class:"imageItem"},[e?((0,a.openBlock)(),(0,a.createBlock)(o,{key:0,class:"img",src:e,fix:"cover",onClick:()=>function(e){const t=b.value.findIndex((t=>t===e));(0,i.e)({images:b.value,startPosition:t})}(e)},{error:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",v,[(0,a.createVNode)(n,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)((0,a.unref)(r.Z))])),_:1})])])),_:2},1032,["src","onClick"])):(0,a.createCommentVNode)("",!0)])))),128))]),(0,a.unref)(R)&&(0,a.unref)(w).replying?((0,a.openBlock)(),(0,a.createElementBlock)("div",g,[(0,a.createVNode)(n,{class:"is-loading",size:"16"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)((0,a.unref)(s.Z))])),_:1})])):(0,a.createCommentVNode)("",!0),(0,a.unref)(R)&&(0,a.unref)(w).retry?((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:1,class:"retry mr-2",onClick:N},[(0,a.createVNode)(n,{color:"red",size:"16"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)((0,a.unref)(l.Z))])),_:1})])):(0,a.createCommentVNode)("",!0)]),(0,a.createElementVNode)("div",k,(0,a.toDisplayString)((0,a.unref)(V).formatTime((0,a.unref)(w).createdTime)),1)])],2)}}});const b=(0,n(57775).Z)(y,[["__scopeId","data-v-584a0f40"]])},47150:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(89810),o=n(64566),i=n(52704),r=(n(3147),n(15807),n(50786)),s=n(63135),l=n(65431);const c={class:"feedbackReplyContainer d-flex align-center pa-2 white"},d=["accept"],u=(0,a.defineComponent)({__name:"feedbackReply",setup(e){const t=(0,s.R)(),{feedbackReplyContent:n,replying:u}=(0,l.Jk)(t),p=(0,a.ref)(),f=(0,a.ref)("image/png, image/jpg, image/jpeg");function h(){t.submitFeedbackMsg()}return(e,s)=>{const l=(0,a.resolveComponent)("el-input"),m=(0,a.resolveComponent)("el-button"),v=(0,a.resolveComponent)("el-icon");return(0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(i.L),{position:"bottom",offset:"0"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",c,[(0,a.createVNode)(l,{modelValue:(0,a.unref)(n),"onUpdate:modelValue":s[0]||(s[0]=e=>(0,a.isRef)(n)?n.value=e:null),class:"fill-width",onKeyup:(0,a.withKeys)(h,["enter","native"]),onInput:(0,a.unref)(t).updateFeedbackReplyContent,"show-word-limit":"",maxlength:"200"},null,8,["modelValue","onKeyup","onInput"]),(0,a.createVNode)(m,{type:"primary",plain:"",class:"ml-2",disabled:(0,a.unref)(u)|!(0,a.unref)(n),onClick:h},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("发送")])),_:1},8,["disabled"]),(0,a.createVNode)(v,{class:"ml-2 pointer",size:24,onClick:s[1]||(s[1]=e=>(0,a.unref)(p).click())},{default:(0,a.withCtx)((()=>[(0,a.createVNode)((0,a.unref)(r.Z))])),_:1}),(0,a.createElementVNode)("input",{type:"file",ref_key:"file",ref:p,name:"files",onChange:s[2]||(s[2]=e=>function(e){if(!e)return;const n=e.size/1024/1024<5;if("image/jpeg"!==e.type&&"image/png"!==e.type&&"image/jpg"!==e.type)return o.F.fail("只能上传 jpg/png 格式的图片"),!1;if(!n)return o.F.fail("上传图片大小不能超过 5MB!"),!1;let a="",i=new FileReader;i.readAsDataURL(e),i.onload=()=>{a=i.result;const n={params:{files:e},createdTime:Date.now(),feedbackSource:2,feedbackAttach:i.result,feedbackMsg:"",replying:!0,retry:!1};t.submitFeedbackFile(n)}}(e.target.files[0])),accept:f.value,id:"files",style:{display:"none"}},null,40,d)])])),_:1})}}});const p=(0,n(57775).Z)(u,[["__scopeId","data-v-c734c25c"]])},60685:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(89810),o=n(5415),i=n(17999),r=n(52704);n(3147);const s={class:"d-flex justify-space-between align-center white pa-4"},l={class:"fs-18 grey--text text--darken-4"},c=(d=()=>(0,a.createElementVNode)("div",null,null,-1),(0,a.pushScopeId)("data-v-86040814"),d=d(),(0,a.popScopeId)(),d);var d;const u=(0,a.defineComponent)({__name:"header",props:{title:{default:"",type:String}},setup(e){const t=(0,i.tv)(),n=(0,a.useAttrs)();function d(){n.onBack?n.onBack():window.history.state?window.history.go(-1):t.replace({name:"phone_home",query:{module:"phone"}})}return(t,n)=>{const i=(0,a.resolveComponent)("el-icon");return(0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(r.L),{class:"fill-width"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("header",s,[(0,a.createVNode)(i,{class:"pointer iconBack",onClick:d},{default:(0,a.withCtx)((()=>[(0,a.createVNode)((0,a.unref)(o.Z))])),_:1}),(0,a.createElementVNode)("div",l,(0,a.toDisplayString)(e.title),1),c])])),_:1})}}});const p=(0,n(57775).Z)(u,[["__scopeId","data-v-86040814"]])}}]);