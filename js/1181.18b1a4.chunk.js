"use strict";(self.webpackChunkclink_web=self.webpackChunkclink_web||[]).push([[1181],{49264:(e,l,a)=>{function t(e,l="yyyy-MM-dd",a="--"){if(!e)return a;let t=new Date(e);if(e=e+60*t.getTimezoneOffset()*1e3- -288e5,t.setTime(e),"Invalid Date"===t.toString())return a;let o={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(l)&&(l=l.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in o)new RegExp("("+e+")").test(l)&&(l=l.replace(RegExp.$1,1===RegExp.$1.length?o[e]:("00"+o[e]).substr((""+o[e]).length)));return l}a.d(l,{m:()=>t})},92112:(e,l,a)=>{a.r(l),a.d(l,{default:()=>m});var t=a(89810);const o=e=>((0,t.pushScopeId)("data-v-ce180f50"),e=e(),(0,t.popScopeId)(),e),n={class:"revovery-second-content"},u={class:"revovery-second-content-item"},r=o((()=>(0,t.createElementVNode)("label",null,"名称",-1))),c={class:"revovery-second-content-item"},d=o((()=>(0,t.createElementVNode)("label",null,"还原内容",-1))),s={class:"revovery-second-content-item"},i=o((()=>(0,t.createElementVNode)("label",null,"时间",-1))),v=(0,t.defineComponent)({__name:"recoverySecondContent",props:["data","content","createDate"],setup:e=>(l,a)=>((0,t.openBlock)(),(0,t.createElementBlock)("div",n,[(0,t.createElementVNode)("div",u,[r,(0,t.createElementVNode)("span",null,(0,t.toDisplayString)(e.data[0].snapshotName||e.data[0].backupName),1)]),(0,t.createElementVNode)("div",c,[d,(0,t.createElementVNode)("span",null,(0,t.toDisplayString)(e.content),1)]),(0,t.createElementVNode)("div",s,[i,(0,t.createElementVNode)("span",null,(0,t.toDisplayString)(e.createDate),1)])]))});const m=(0,a(57775).Z)(v,[["__scopeId","data-v-ce180f50"]])},96528:(e,l,a)=>{a.r(l),a.d(l,{default:()=>re});var t=a(89810);const o=a.p+"imgs/active-recovery.18b1a4.png";var n=a(48402),u=a(17999),r=a(55304),c=a(66527),d=a(49264),s=a(93109),i=a(92112),v=a(90245),m=a(5341),p=function(e,l,a,t){return new(a||(a=Promise))((function(o,n){function u(e){try{c(t.next(e))}catch(e){n(e)}}function r(e){try{c(t.throw(e))}catch(e){n(e)}}function c(e){var l;e.done?o(e.value):(l=e.value,l instanceof a?l:new a((function(e){e(l)}))).then(u,r)}c((t=t.apply(e,l||[])).next())}))};const V=e=>((0,t.pushScopeId)("data-v-dcf48e1c"),e=e(),(0,t.popScopeId)(),e),h={class:"text-wrap"},f={key:0},k={key:1},b={key:2},y={key:3},N={key:0,class:"backup-info"},g={key:0},C={key:1,class:"backup-info"},E={key:2,class:"origin-radio-wrap no-snap-radio mobile-radio"},w=V((()=>(0,t.createElementVNode)("span",null,"当前桌面支持数据盘重装至初始状态，请选择数据盘重装方案",-1))),x=V((()=>(0,t.createElementVNode)("img",{src:o},null,-1))),B={key:0},_=V((()=>(0,t.createElementVNode)("h4",null,"请选择系统重装的方案",-1))),T={class:"radio-wrap"},D=V((()=>(0,t.createElementVNode)("br",null,null,-1))),S=V((()=>(0,t.createElementVNode)("br",null,null,-1))),L=V((()=>(0,t.createElementVNode)("br",null,null,-1))),P=V((()=>(0,t.createElementVNode)("br",null,null,-1))),I=V((()=>(0,t.createElementVNode)("br",null,null,-1))),U=V((()=>(0,t.createElementVNode)("br",null,null,-1))),M=V((()=>(0,t.createElementVNode)("br",null,null,-1))),z={key:0,class:"origin-radio-wrap"},K=V((()=>(0,t.createElementVNode)("span",null,"当前桌面支持数据盘重装至初始状态，请选择数据盘重装方案",-1))),$={class:"pagination"},R={key:1},j=V((()=>(0,t.createElementVNode)("h4",{class:"recovey-title-mobile"},"请选择系统重装的方案",-1))),F={class:"radio-wrap-mobile"},O={class:"radio-mobile-item recovey-type-item-mobile"},A=V((()=>(0,t.createElementVNode)("span",null,"系统盘重装至初始状态",-1))),W={key:0,class:"origin-radio-wrap mobile-radio"},Q=V((()=>(0,t.createElementVNode)("span",null,"当前桌面支持数据盘重装至初始状态，请选择数据盘重装方案",-1))),Z={class:"recovey-collapse-option-item-content"},H=V((()=>(0,t.createElementVNode)("label",null,"名称",-1))),q=V((()=>(0,t.createElementVNode)("label",null,"还原内容",-1))),Y=V((()=>(0,t.createElementVNode)("label",null,"时间",-1))),G={class:"recovey-collapse-option-item-content"},J=V((()=>(0,t.createElementVNode)("label",null,"名称",-1))),X=V((()=>(0,t.createElementVNode)("label",null,"还原内容",-1))),ee=V((()=>(0,t.createElementVNode)("label",null,"时间",-1))),le={class:"pagination"},ae={class:"recovery-next-btns"},te={class:"dialog-content"},oe=V((()=>(0,t.createElementVNode)("i",{class:"iconfont icon-warning"},null,-1))),ne={class:"dialog-footer"},ue=(0,t.defineComponent)({__name:"recovery",setup(e){(0,t.inject)("$confirm");const l=(0,t.inject)("$message"),a=((0,u.yj)(),n.nC.get(r.hD)),o=(0,m.mL)();let V={},ue=null,re="";const ce=(0,t.ref)(10),de=(0,t.ref)(!1),se=(0,t.ref)(!1),ie=(0,t.ref)("origin"),ve=(0,t.ref)(null),me=(0,t.ref)(null),pe=(0,t.ref)(!0);let Ve=(0,t.ref)(""),he=(0,t.ref)("");const fe=(0,t.ref)(!1),ke=(0,t.ref)(!1),be=(0,t.ref)(!1),ye=(0,t.ref)(!1),Ne=(0,t.ref)(!1),ge=(0,t.ref)([{snapshotId:"75",snapshotName:"snap0702test2",desktopId:"53205",osType:"Windows",osName:"Windows 2016 server 64位 中文版",osBit:"64",createDate:1615861625894,snapshotContent:[],snapshotVolumeList:[{volumeCode:"df6c4535-4a30-4134-b339-1e1f3055d2f1",volumePath:"系统盘"},{volumeCode:"ab3802a0-a1e3-4a83-953e-f63e5e2d2361",volumePath:""}]},{snapshotId:"74",snapshotName:"snap0702test1",desktopId:"53205",osType:"Windows",osName:"Windows 2016 server 64位 中文版",osBit:"64",createDate:1615861625894,snapshotContent:[],snapshotVolumeList:[{volumeCode:"2caedceb-6ff3-4040-94ee-ca020549cf55",volumePath:"D盘"}]}]),Ce=(0,t.ref)([{backupId:"149",backupName:"test0315数据盘",backupContent:[],backupVolumeList:[{volumeCode:"2caedceb-6ff3-4040-94ee-ca020549cf55",volumePath:"D盘"}],createDate:1615861625894},{backupId:"76",backupName:"backup0702test3",backupContent:[],backupVolumeList:[{volumeCode:"df6c4535-4a30-4134-b339-1e1f3055d2f1",volumePath:"系统盘"},{volumeCode:"ab3802a0-a1e3-4a83-953e-f63e5e2d2361",volumePath:""}],createDate:1615861625894}]),Ee=(0,t.ref)([]),we=(0,t.ref)([]),xe=(0,t.ref)({origin:"系统重装",snapshot:"还原至快照",backup:"还原至备份"}),Be=(0,t.ref)("系统盘"),_e=(0,t.ref)(null),Te=(0,t.ref)(null),De=(0,t.ref)(null),Se=(0,t.ref)(null),Le=(0,t.ref)(null),Pe=(0,t.ref)(!0),Ie=(0,t.ref)(!1),Ue=(0,t.ref)(!1),Me=(0,t.ref)(!1),ze=(0,t.ref)(!1),Ke=(0,t.ref)(!1),$e=(0,t.ref)("save"),Re=(0,t.ref)(""),je=(0,t.ref)(1),Fe=(0,t.ref)(10),Oe=(0,t.ref)(0),Ae=(0,t.ref)((0,m.mL)()?"82vw":"438px");function We(e){return(0,d.m)(e.createDate,"yyyy-MM-dd hh:mm")}function Qe(){ve.value=null,me.value=null,Ke.value=ze.value,ye.value=!1,Ne.value=!1,pe.value=!0,Be.value="系统盘",Pe.value=!1,Ie.value=!0,Ue.value=!1,Me.value=!1,V[0]&&(clearTimeout(V[0]),V[0]=null),V[0]=setTimeout((()=>{Ie.value=!1}),3e3)}function Ze(){Pe.value=!1,ie.value="snapshot",Ke.value=!1,ye.value=!0,Ne.value=!1,o||(ve.value=0),pe.value=!1,Ue.value=!0,Ie.value=!1,Me.value=!1,V[1]&&(clearTimeout(V[1]),V[1]=null),V[1]=setTimeout((()=>{Ue.value=!1}),3e3),Ve.value=ge.value[0].snapshotId,we.value=[],we.value.push(ge.value[0])}function He(){qe(),Pe.value=!1,ie.value="backup",Ke.value=!1,ye.value=!1,Ne.value=!0,o||(me.value=0),pe.value=!1,Me.value=!0,Ie.value=!1,Ue.value=!1,V[2]&&(clearTimeout(V[2]),V[2]=null),V[2]=setTimeout((()=>{Me.value=!1}),3e3),he.value=Ce.value[0].backupId,Ee.value=[],Ee.value.push(Ce.value[0])}function qe(){const e=()=>{!function(){Te.value&&Te.value.blur(),De.value&&De.value.blur();const e=document.querySelectorAll(".is-multiple");for(let l=0;l<e.length;l++)e[l].style.display="none";const l=document.getElementsByClassName("is-focus");for(let e=0;e<l.length;e++)l[e].classList.remove("is-focus");const a=document.getElementsByClassName("is-reverse");for(let e=0;e<a.length;e++)a[e].classList.remove("is-reverse")}()};setTimeout((()=>{if(Le.value.bodyWrapper){let l=Le.value.bodyWrapper;l.removeEventListener("scroll",e),l.addEventListener("scroll",e)}}),500)}function Ye(e,l){o&&Ze(),l===ve.value&&(we.value[0]=Object.assign({},e),Ve.value=we.value[0].snapshotId)}function Ge(e,l){o&&He(),(je.value-1)*Fe.value+l===me.value&&(Ee.value[0]=e,he.value=Ee.value[0].backupId)}function Je(e){let l=[];return e.backupContent&&e.backupContent.forEach((a=>{e.backupVolumeList.forEach((e=>{e.volumeCode===a&&(e.volumePath?l.push(e.volumePath):l.push(e.volumeCode))}))})),l.length>1&&l.includes("系统盘")?Be.value="系统盘和数据盘":1===l.length&&l.includes("系统盘")?Be.value="系统盘":Be.value="数据盘",l.join("、")}function Xe(e){let l=[];return e.snapshotContent&&e.snapshotContent.forEach((a=>{e.snapshotVolumeList.forEach((e=>{e.volumeCode===a&&(e.volumePath?l.push(e.volumePath):l.push(e.volumeCode))}))})),l.length>1&&l.includes("系统盘")?Be.value="系统盘和数据盘":1===l.length&&l.includes("系统盘")?Be.value="系统盘":Be.value="数据盘",l.join("、")}function el(){var e,a,t,o;"backup"===ie.value&&0===(null===(a=null===(e=Ee.value[0])||void 0===e?void 0:e.backupContent)||void 0===a?void 0:a.length)||"backup"===ie.value&&!Ee.value[0].backupContent||"snapshot"===ie.value&&0===(null===(o=null===(t=we.value[0])||void 0===t?void 0:t.snapshotContent)||void 0===o?void 0:o.length)||"snapshot"===ie.value&&!we.value[0].snapshotContent?l({type:"error",message:"请选择需还原的内容！"}):(nl(),se.value=!0)}function ll(){de.value=!0,_e.value.classList.remove("recovery-next"),_e.value.classList.add("recovery"),qe()}function al(){be.value=!0,ce.value=10,ol(),ze.value&&(Be.value="save"===$e.value?"系统盘":"系统盘和数据盘")}function tl(){let e={desktopId:re,operationType:v.Q3.RESTORE,useDataMirror:"clear"===$e.value};"snapshot"===ie.value?(e.operationType=v.Q3.SNAPSHOT,e.snapshotId=Ve.value,e.volumeCodeList=we.value[0].snapshotContent):"backup"===ie.value?(e.operationType=v.Q3.BACKUP,e.backupId=he.value,e.volumeCodeList=Ee.value[0].backupContent):e.operationType=v.Q3.RESTORE,new Promise(((l,t)=>{setTimeout((()=>{t("5秒内无响应")}),5e3),a.restore(e).then((e=>{l()})).catch((e=>{t(e)}))})).catch((e=>{e.name===c.Hx.errorName?l({type:"error",message:e.message}):l({type:"error",message:"未能成功发送系统重装请求，请重试。"}),be.value=!1}))}function ol(){ue&&clearTimeout(ue),ue=setTimeout((()=>{ce.value=ce.value-1,ce.value>0&&ol()}),1e3)}function nl(){ce.value=10,de.value=!1,se.value=!1,_e.value.classList.add("recovery-next"),_e.value.classList.remove("recovery")}function ul(e){var t;return p(this,void 0,void 0,(function*(){je.value=e;try{ke.value=!0;const e={desktopId:re,page:je.value,pageSize:Fe.value},l=yield a.getBackupList(e);if(Ce.value=l.list,Oe.value=l.total,null!==me.value){let e=me.value-(je.value-1)*Fe.value;Ee.value[0].backupContent&&he.value===(null===(t=Ce.value[e])||void 0===t?void 0:t.backupId)&&(Ce.value[e]=Ee.value[0])}}catch(e){l({type:"error",message:e.message})}finally{ke.value=!1}}))}return(0,t.onMounted)((()=>p(this,void 0,void 0,(function*(){nl(),yield function(){return p(this,void 0,void 0,(function*(){try{fe.value=!0,re=a.connection.id||"";const e=yield a.checkDesktopMirror(re);e.canUseAllDesktopMirrorToRebuild&&(ze.value=!0),e.warnTips&&(Re.value=e.warnTips)}catch(e){l({type:"error",message:e.message})}}))}(),function(){p(this,void 0,void 0,(function*(){try{const e={desktopId:re},l={desktopId:re,page:je.value,pageSize:Fe.value},t=yield a.getBackupList(l);Ce.value=t.list,Oe.value=t.total;const o=yield a.getSnapshotList(e);ge.value=o.list,ge.value&&ge.value.length||Ce.value&&Ce.value.length?(ie.value="",de.value=!0,se.value=!0,_e.value.classList.add("recovery"),_e.value.classList.remove("recovery-next")):(ie.value="origin",Ke.value=ze.value,ze.value&&(Se.value.style.marginTop="20px"),nl())}catch(e){l({type:"error",message:e.message}),Ke.value=ze.value,nl()}finally{fe.value=!1}}))}()})))),(e,l)=>{const a=(0,t.resolveComponent)("el-radio"),n=(0,t.resolveComponent)("el-table-column"),u=(0,t.resolveComponent)("el-table"),r=(0,t.resolveComponent)("el-tooltip"),c=(0,t.resolveComponent)("el-option"),d=(0,t.resolveComponent)("el-select"),v=(0,t.resolveComponent)("el-pagination"),m=(0,t.resolveComponent)("el-collapse-item"),p=(0,t.resolveComponent)("el-collapse"),V=(0,t.resolveComponent)("el-button"),ue=(0,t.resolveComponent)("el-dialog"),re=(0,t.resolveDirective)("loading");return(0,t.withDirectives)(((0,t.openBlock)(),(0,t.createElementBlock)("div",{ref_key:"recovery",ref:_e,class:"skin-recovery"},[(0,t.createElementVNode)("div",{ref_key:"content",ref:Se,class:"content"},[(0,t.createElementVNode)("div",h,[de.value?((0,t.openBlock)(),(0,t.createElementBlock)("h4",f,"系统重装")):((0,t.openBlock)(),(0,t.createElementBlock)("h4",k,(0,t.toDisplayString)("origin"===ie.value?"确定要进行系统重装？":`确定要${xe.value[ie.value]}？`),1)),de.value?((0,t.openBlock)(),(0,t.createElementBlock)("p",b," 系统重装是对云电脑的系统进行重新安装，使系统恢复到最优状态下工作。 ")):((0,t.openBlock)(),(0,t.createElementBlock)("div",y,["origin"===ie.value?((0,t.openBlock)(),(0,t.createElementBlock)("p",N,[(0,t.createTextVNode)(" 将进行系统重装，安装在系统盘的程序、数据将清除"),se.value||ze.value?((0,t.openBlock)(),(0,t.createElementBlock)("span",g,"（包括"+(0,t.toDisplayString)(ze.value?"整机":"")+"快照）",1)):(0,t.createCommentVNode)("",!0),(0,t.createTextVNode)("，数据盘的"+(0,t.toDisplayString)(ze.value&&"clear"===$e.value?"程序或保存的数据将清除":"数据将保留")+"。如非云电脑故障，一般情况下不建议使用。 ",1)])):((0,t.openBlock)(),(0,t.createElementBlock)("p",C," 将已选的磁盘"+(0,t.toDisplayString)(xe.value[ie.value])+"状态，已选磁盘的程序、数据将清除，未选磁盘的程序、数据将保留。 ",1)),ze.value&&Ke.value&&!se.value?((0,t.openBlock)(),(0,t.createElementBlock)("div",E,[w,(0,t.createVNode)(a,{modelValue:$e.value,"onUpdate:modelValue":l[0]||(l[0]=e=>$e.value=e),label:"save"},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("保留数据盘数据")])),_:1},8,["modelValue"]),(0,t.createVNode)(a,{modelValue:$e.value,"onUpdate:modelValue":l[1]||(l[1]=e=>$e.value=e),label:"clear"},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("清空数据盘数据")])),_:1},8,["modelValue"])])):(0,t.createCommentVNode)("",!0),(0,t.unref)(o)?((0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,{key:4},["snapshot"===ie.value?((0,t.openBlock)(),(0,t.createBlock)(i.default,{key:0,data:we.value,content:Xe(we.value[0]),createDate:We(we.value[0])},null,8,["data","content","createDate"])):(0,t.createCommentVNode)("",!0),"backup"===ie.value?((0,t.openBlock)(),(0,t.createBlock)(i.default,{key:1,data:Ee.value,content:Je(Ee.value[0]),createDate:We(Ee.value[0])},null,8,["data","content","createDate"])):(0,t.createCommentVNode)("",!0)],64)):((0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,{key:3},["snapshot"===ie.value?((0,t.openBlock)(),(0,t.createBlock)(u,{key:0,"max-height":"100",data:we.value,class:"backup-table",border:""},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(n,{prop:"snapshotName",label:"名称","min-width":"120"}),(0,t.createVNode)(n,{prop:"snapshotContent",formatter:Xe,label:"还原的快照内容","min-width":"180"}),(0,t.createVNode)(n,{prop:"createDate",formatter:We,label:"时间","min-width":"120"})])),_:1},8,["data"])):(0,t.createCommentVNode)("",!0),"backup"===ie.value?((0,t.openBlock)(),(0,t.createBlock)(u,{key:1,"max-height":"100",data:Ee.value,class:"backup-table",border:""},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(n,{prop:"backupName",label:"名称","min-width":"120"}),(0,t.createVNode)(n,{prop:"backupContent",formatter:Je,label:"还原的备份内容","min-width":"180"}),(0,t.createVNode)(n,{prop:"createDate",formatter:We,label:"时间","min-width":"120"})])),_:1},8,["data"])):(0,t.createCommentVNode)("",!0)],64))]))]),x],512),de.value&&!(0,t.unref)(o)?((0,t.openBlock)(),(0,t.createElementBlock)("div",B,[_,(0,t.createElementVNode)("div",T,[(0,t.createVNode)(a,{class:"radio-wrap__origin",onChange:Qe,modelValue:ie.value,"onUpdate:modelValue":l[5]||(l[5]=e=>ie.value=e),label:"origin"},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("系统盘重装至初始状态 "),(0,t.createVNode)(r,{effect:"light",placement:"top",manual:!0,visible:Ie.value,"onUpdate:visible":l[4]||(l[4]=e=>Ie.value=e)},{content:(0,t.withCtx)((()=>[(0,t.createTextVNode)(" 将系统重装至初始状态，安装在系统盘的"),D,(0,t.createTextVNode)(" 程序、数据将清除（包括"+(0,t.toDisplayString)(ze.value?"整机":"")+"快照），数据盘",1),S,(0,t.createTextVNode)(" 的数据将保留，如非云电脑故障，一般情"),L,(0,t.createTextVNode)(" 况下不建议使用。 ")])),default:(0,t.withCtx)((()=>[(0,t.createElementVNode)("i",{class:"iconfont icon-help",onMouseenter:l[2]||(l[2]=e=>Ie.value=!0),onMouseleave:l[3]||(l[3]=e=>Ie.value=!1)},null,32)])),_:1},8,["visible"])])),_:1},8,["modelValue"]),ge.value.length?((0,t.openBlock)(),(0,t.createBlock)(a,{key:0,class:"radio-wrap__origin",onChange:Ze,modelValue:ie.value,"onUpdate:modelValue":l[9]||(l[9]=e=>ie.value=e),label:"snapshot"},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("还原至快照 "),(0,t.createVNode)(r,{effect:"light",placement:"top",manual:!0,visible:Ue.value,"onUpdate:visible":l[8]||(l[8]=e=>Ue.value=e)},{content:(0,t.withCtx)((()=>[(0,t.createTextVNode)(" 将已选的磁盘还原至快照状态，已选磁盘的"),P,(0,t.createTextVNode)(" 程序、数据将清除，未选磁盘的程序、数据"),I,(0,t.createTextVNode)("将保留。 ")])),default:(0,t.withCtx)((()=>[(0,t.createElementVNode)("i",{class:"iconfont icon-help",onMouseenter:l[6]||(l[6]=e=>Ue.value=!0),onMouseleave:l[7]||(l[7]=e=>Ue.value=!1)},null,32)])),_:1},8,["visible"])])),_:1},8,["modelValue"])):(0,t.createCommentVNode)("",!0),Ce.value.length?((0,t.openBlock)(),(0,t.createBlock)(a,{key:1,class:"radio-wrap__origin",onChange:He,modelValue:ie.value,"onUpdate:modelValue":l[13]||(l[13]=e=>ie.value=e),label:"backup"},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("还原至备份 "),(0,t.createVNode)(r,{effect:"light",placement:"top",manual:!0,visible:Me.value,"onUpdate:visible":l[12]||(l[12]=e=>Me.value=e)},{content:(0,t.withCtx)((()=>[(0,t.createTextVNode)(" 将已选的磁盘还原至备份状态，已选磁盘的"),U,(0,t.createTextVNode)(" 程序、数据将清除，未选磁盘的程序、数据"),M,(0,t.createTextVNode)("将保留。 ")])),default:(0,t.withCtx)((()=>[(0,t.createElementVNode)("i",{class:"iconfont icon-help",onMouseenter:l[10]||(l[10]=e=>Me.value=!0),onMouseleave:l[11]||(l[11]=e=>Me.value=!1)},null,32)])),_:1},8,["visible"])])),_:1},8,["modelValue"])):(0,t.createCommentVNode)("",!0)]),ze.value&&Ke.value?((0,t.openBlock)(),(0,t.createElementBlock)("div",z,[K,(0,t.createVNode)(a,{modelValue:$e.value,"onUpdate:modelValue":l[14]||(l[14]=e=>$e.value=e),label:"save"},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("保留数据盘数据")])),_:1},8,["modelValue"]),(0,t.createVNode)(a,{modelValue:$e.value,"onUpdate:modelValue":l[15]||(l[15]=e=>$e.value=e),label:"clear"},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("清空数据盘数据")])),_:1},8,["modelValue"])])):(0,t.createCommentVNode)("",!0),ye.value?((0,t.openBlock)(),(0,t.createBlock)(u,{key:"snap-table",data:ge.value,class:"backup-table",border:"","cell-style":e.cellStyle,"max-height":"178"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(n,{width:"35"},{default:(0,t.withCtx)((e=>[(0,t.createVNode)(a,{label:e.$index,modelValue:ve.value,"onUpdate:modelValue":l[16]||(l[16]=e=>ve.value=e),onChange:l=>Ye(e.row,e.$index),disabled:pe.value},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)(" ")])),_:2},1032,["label","modelValue","onChange","disabled"])])),_:1}),(0,t.createVNode)(n,{prop:"snapshotName",label:"名称",width:"102"}),(0,t.createVNode)(n,{label:"还原的快照内容","min-width":"155"},(0,t.createSlots)({_:2},[ye.value?{name:"default",fn:(0,t.withCtx)((e=>[(0,t.createVNode)(d,{disabled:"snapshot"!==ie.value,class:"select-tag",ref_key:"upSelect1",ref:Te,clearable:!1,multiple:"",onChange:l=>Ye(e.row,e.$index),modelValue:e.row.snapshotContent,"onUpdate:modelValue":l=>e.row.snapshotContent=l,placeholder:"请选择需还原的内容"},{default:(0,t.withCtx)((()=>[((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,null,(0,t.renderList)(e.row.snapshotVolumeList,(e=>((0,t.openBlock)(),(0,t.createBlock)(c,{class:"select-tag-option",key:e.volumeCode,label:e.volumePath?e.volumePath:e.volumeCode,value:e.volumeCode},null,8,["label","value"])))),128))])),_:2},1032,["disabled","onChange","modelValue","onUpdate:modelValue"])])),key:"0"}:void 0]),1024),(0,t.createVNode)(n,{prop:"createDate",label:"时间",formatter:We})])),_:1},8,["data","cell-style"])):(0,t.createCommentVNode)("",!0),Ne.value?(0,t.withDirectives)(((0,t.openBlock)(),(0,t.createBlock)(u,{key:"backup-table",ref_key:"backupTable",ref:Le,data:Ce.value,"max-height":"178",class:"backup-table",border:"","cell-style":e.cellStyle},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(n,{width:"35"},{default:(0,t.withCtx)((e=>[(0,t.createVNode)(a,{label:(je.value-1)*Fe.value+e.$index,modelValue:me.value,"onUpdate:modelValue":l[17]||(l[17]=e=>me.value=e),onChange:l=>Ge(e.row,e.$index),disabled:pe.value},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)(" ")])),_:2},1032,["label","modelValue","onChange","disabled"])])),_:1}),(0,t.createVNode)(n,{prop:"backupName",label:"名称",width:"102"}),(0,t.createVNode)(n,{label:"还原的备份内容","min-width":"155"},(0,t.createSlots)({_:2},[Ne.value?{name:"default",fn:(0,t.withCtx)((e=>[(0,t.createVNode)(d,{disabled:"backup"!==ie.value,class:"select-tag",ref_key:"upSelect2",ref:De,clearable:!1,multiple:"",onChange:l=>Ge(e.row,e.$index),modelValue:e.row.backupContent,"onUpdate:modelValue":l=>e.row.backupContent=l,placeholder:"请选择需还原的内容"},{default:(0,t.withCtx)((()=>[((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,null,(0,t.renderList)(e.row.backupVolumeList,(e=>((0,t.openBlock)(),(0,t.createBlock)(c,{class:"select-tag-option",key:e.volumeCode,label:e.volumePath?e.volumePath:e.volumeCode,value:e.volumeCode},null,8,["label","value"])))),128))])),_:2},1032,["disabled","onChange","modelValue","onUpdate:modelValue"])])),key:"0"}:void 0]),1024),(0,t.createVNode)(n,{prop:"createDate",label:"时间",formatter:We})])),_:1},8,["data","cell-style"])),[[re,ke.value]]):(0,t.createCommentVNode)("",!0),(0,t.createElementVNode)("div",$,[Oe.value>0&&Ne.value?((0,t.openBlock)(),(0,t.createBlock)(v,{key:0,small:"",background:"",total:Oe.value,"current-page":je.value,"page-size":Fe.value,layout:"total, prev, pager, next","pager-count":5,onCurrentChange:ul},null,8,["total","current-page","page-size"])):(0,t.createCommentVNode)("",!0)])])):(0,t.createCommentVNode)("",!0),de.value&&(0,t.unref)(o)?((0,t.openBlock)(),(0,t.createElementBlock)("div",R,[j,(0,t.createElementVNode)("div",F,[(0,t.createElementVNode)("div",O,[A,(0,t.createVNode)(a,{onChange:Qe,modelValue:ie.value,"onUpdate:modelValue":l[18]||(l[18]=e=>ie.value=e),label:"origin"},null,8,["modelValue"])]),ze.value&&Ke.value?((0,t.openBlock)(),(0,t.createElementBlock)("div",W,[Q,(0,t.createVNode)(a,{modelValue:$e.value,"onUpdate:modelValue":l[19]||(l[19]=e=>$e.value=e),label:"save"},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("保留数据盘数据")])),_:1},8,["modelValue"]),(0,t.createVNode)(a,{modelValue:$e.value,"onUpdate:modelValue":l[20]||(l[20]=e=>$e.value=e),label:"clear"},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("清空数据盘数据")])),_:1},8,["modelValue"])])):(0,t.createCommentVNode)("",!0),(0,t.createVNode)(p,null,{default:(0,t.withCtx)((()=>[ge.value.length?((0,t.openBlock)(),(0,t.createBlock)(m,{key:0,class:"recovey-type-item-mobile",title:"还原至快照"},{default:(0,t.withCtx)((()=>[((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,null,(0,t.renderList)(ge.value,((e,o)=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"recovey-collapse-option-item",key:e.snapshotId},[(0,t.createElementVNode)("div",Z,[(0,t.createElementVNode)("div",null,[H,(0,t.createElementVNode)("span",null,(0,t.toDisplayString)(e.snapshotName),1)]),(0,t.createElementVNode)("div",null,[q,(0,t.createVNode)(s.default,{data:e.snapshotVolumeList,title:"请选择需要还原的内容","model-value":e.snapshotContent,labelProps:"volumePath",valueKey:"volumeCode",mutiple:""},null,8,["data","model-value"])]),(0,t.createElementVNode)("div",null,[Y,(0,t.createElementVNode)("span",null,(0,t.toDisplayString)(We(e)),1)])]),(0,t.createVNode)(a,{modelValue:ve.value,"onUpdate:modelValue":l[21]||(l[21]=e=>ve.value=e),label:o,onChange:l=>Ye(e,o)},null,8,["modelValue","label","onChange"])])))),128))])),_:1})):(0,t.createCommentVNode)("",!0),Ce.value.length?((0,t.openBlock)(),(0,t.createBlock)(m,{key:1,class:"recovey-type-item-mobile",title:"还原至备份"},{default:(0,t.withCtx)((()=>[((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,null,(0,t.renderList)(Ce.value,((e,o)=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"recovey-collapse-option-item",key:e.backupId},[(0,t.createElementVNode)("div",G,[(0,t.createElementVNode)("div",null,[J,(0,t.createElementVNode)("span",null,(0,t.toDisplayString)(e.backupName),1)]),(0,t.createElementVNode)("div",null,[X,(0,t.createVNode)(s.default,{data:e.backupVolumeList,title:"请选择需要还原的内容","model-value":e.backupContent,labelProps:"volumePath",valueKey:"volumeCode",mutiple:""},null,8,["data","model-value"])]),(0,t.createElementVNode)("div",null,[ee,(0,t.createElementVNode)("span",null,(0,t.toDisplayString)(We(e)),1)])]),(0,t.createVNode)(a,{modelValue:me.value,"onUpdate:modelValue":l[22]||(l[22]=e=>me.value=e),label:o,onChange:l=>Ge(e,o)},null,8,["modelValue","label","onChange"])])))),128)),(0,t.createElementVNode)("div",le,[Oe.value>0?((0,t.openBlock)(),(0,t.createBlock)(v,{key:0,small:"",background:"",total:Oe.value,"current-page":je.value,"page-size":Fe.value,layout:"total, prev, pager, next","pager-count":5,onCurrentChange:ul},null,8,["total","current-page","page-size"])):(0,t.createCommentVNode)("",!0)])])),_:1})):(0,t.createCommentVNode)("",!0)])),_:1})])])):(0,t.createCommentVNode)("",!0),(0,t.createElementVNode)("div",ae,[(0,t.withDirectives)((0,t.createVNode)(V,{type:"primary",size:"medium",class:"next-btn",onClick:el,disabled:Pe.value},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("下一步")])),_:1},8,["disabled"]),[[t.vShow,de.value]]),de.value?(0,t.createCommentVNode)("",!0):((0,t.openBlock)(),(0,t.createBlock)(V,{key:0,size:"medium",class:"recovery-btn",onClick:al},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)((0,t.toDisplayString)("origin"===ie.value?"重装":"还原"),1)])),_:1})),!de.value&&se.value?((0,t.openBlock)(),(0,t.createBlock)(V,{key:1,size:"medium",class:"cancel-btn",type:"primary",onClick:ll},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("取消")])),_:1})):(0,t.createCommentVNode)("",!0)]),(0,t.createVNode)(ue,{"custom-class":"recovery-dialog",top:"35vh",modelValue:be.value,"onUpdate:modelValue":l[24]||(l[24]=e=>be.value=e),"modal-append-to-body":!1,"append-to-body":!0,width:Ae.value,"show-close":!1},{footer:(0,t.withCtx)((()=>[(0,t.createElementVNode)("span",ne,[(0,t.createVNode)(V,{class:"footer-btn",size:"small",onClick:l[23]||(l[23]=e=>be.value=!1)},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("取 消")])),_:1}),(0,t.createVNode)(V,{class:"footer-btn",size:"small",disabled:0!==ce.value,type:"primary",onClick:tl},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)((0,t.toDisplayString)(0!==ce.value?`确认(${ce.value})`:"确 认"),1)])),_:1},8,["disabled"])])])),default:(0,t.withCtx)((()=>[(0,t.createElementVNode)("div",te,[oe,(0,t.createElementVNode)("h4",null,"确定要进行"+(0,t.toDisplayString)(xe.value[ie.value])+"？",1),(0,t.createElementVNode)("p",null," 即将进行"+(0,t.toDisplayString)(xe.value[ie.value])+"，请先备份"+(0,t.toDisplayString)(Be.value)+"的程序、数据"+(0,t.toDisplayString)("origin"===ie.value?"（包括桌面文件）":"")+"。该操作不可逆，请谨慎使用！ ",1),(0,t.createElementVNode)("p",null,(0,t.toDisplayString)(Re.value),1)])])),_:1},8,["modelValue","width"])])),[[re,fe.value]])}}});const re=(0,a(57775).Z)(ue,[["__scopeId","data-v-dcf48e1c"]])},93109:(e,l,a)=>{a.r(l),a.d(l,{default:()=>s});var t=a(89810),o=a(45958);const n={class:"drawer-select"},u={key:0},r={class:"drawer-select-content"},c=["onClick"],d=(0,t.defineComponent)({__name:"index",props:{title:null,data:null,modelValue:null,labelProps:{default:"label"},objectValue:{type:Boolean},valueKey:{default:"id"},mutiple:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:l}){const a=e,d=(0,t.computed)((()=>a.modelValue?a.modelValue.id?a.modelValue.id:a.modelValue:null)),s=(0,t.computed)((()=>{if(a.mutiple&&a.modelValue instanceof Array&&0!==a.modelValue.length)return a.data.filter((e=>-1!==a.modelValue.indexOf(e[a.valueKey]))).map((e=>e[a.labelProps]||e[a.valueKey])).join(",");if(!a.mutiple&&a.modelValue){if(a.modelValue[a.labelProps])return a.modelValue[a.labelProps];let e=a.modelValue[a.valueKey]||a.modelValue,l=a.data.find((l=>l[a.valueKey]===e||l===e))||{};return l[a.labelProps]||l||""}return a.title||""})),i=(0,t.ref)(!1),v=(0,t.ref)();return(m,p)=>{const V=(0,t.resolveComponent)("el-icon"),h=(0,t.resolveComponent)("el-drawer");return(0,t.openBlock)(),(0,t.createElementBlock)("div",n,[(0,t.createElementVNode)("div",{class:(0,t.normalizeClass)(["drawer-select-input",{"input-value":(0,t.unref)(d),placeholder:!(0,t.unref)(d)}]),onClick:p[0]||(p[0]=e=>i.value=!0)},[(0,t.createElementVNode)("span",null,(0,t.toDisplayString)((0,t.unref)(s)),1),(0,t.createVNode)(V,null,{default:(0,t.withCtx)((()=>[(0,t.createVNode)((0,t.unref)(o.Z))])),_:1})],2),(0,t.createVNode)(h,{modelValue:i.value,"onUpdate:modelValue":p[1]||(p[1]=e=>i.value=e),direction:"btt",size:"180","show-close":!1,"with-header":!1,ref_key:"elDrawerRef",ref:v},{default:(0,t.withCtx)((()=>[e.title?((0,t.openBlock)(),(0,t.createElementBlock)("h5",u,(0,t.toDisplayString)(e.title)+":",1)):(0,t.createCommentVNode)("",!0),(0,t.createElementVNode)("ul",r,[((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,null,(0,t.renderList)(e.data,((e,o)=>{return(0,t.openBlock)(),(0,t.createElementBlock)("li",{class:(0,t.normalizeClass)(["drawer-select-item",{active:(n=e,a.mutiple&&a.modelValue instanceof Array?-1!==a.modelValue.indexOf(n[a.valueKey]):a.objectValue&&a.modelValue?a.modelValue[a.valueKey]===n[a.valueKey]:a.modelValue===n)}]),key:o,onClick:o=>function(e){let o;if(a.mutiple&&a.modelValue instanceof Array){o=a.modelValue;const l=o.indexOf(e[a.valueKey]);-1===l?o.push(e[a.valueKey]):o.splice(l,1)}else o=a.objectValue?e:e[a.valueKey];l("update:modelValue",o),l("change",o),(0,t.unref)(v).handleClose()}(e)},(0,t.toDisplayString)(a.labelProps&&e[a.labelProps]?e[a.labelProps]:e[a.valueKey]),11,c);var n})),128))])])),_:1},8,["modelValue"])])}}});const s=(0,a(57775).Z)(d,[["__scopeId","data-v-35064116"]])}}]);