(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12eb0416"],{"0404":function(t,e,n){"use strict";n("4c61")},2824:function(t,e,n){"use strict";var i=n("7a23"),a=Object(i["V"])("data-v-65e3a388");Object(i["C"])("data-v-65e3a388");var o={class:"container"},c={class:"subtitle"},s={class:"extra"};Object(i["A"])();var r=a((function(t,e,n,r,l,u){var b=Object(i["H"])("van-icon"),d=Object(i["H"])("van-nav-bar"),f=Object(i["H"])("van-sticky"),h=Object(i["H"])("van-col"),j=Object(i["H"])("van-row");return Object(i["z"])(),Object(i["g"])("div",o,[Object(i["S"])(Object(i["j"])(f,{onChange:e[2]||(e[2]=function(t){return r.state.isTop=!r.state.isTop})},{default:a((function(){return[Object(i["j"])(d,{class:["navbar",{notTop:!r.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:u.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:a((function(){return[Object(i["S"])(Object(i["j"])("div",null,[Object(i["G"])(t.$slots,"back",{},(function(){return[Object(i["j"])(b,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[i["O"],!n.noback]])]})),title:a((function(){return[Object(i["G"])(t.$slots,"head",{},(function(){return[Object(i["j"])("div",{style:{width:"100%",color:r.state.isTop?n.fg:"inherit"}},Object(i["L"])(r.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)]})),right:a((function(){return[Object(i["G"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[i["O"],"hide"!=n.navbar]]),Object(i["j"])("div",{class:["page",{notTop:!r.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(i["j"])(i["d"],{name:"van-slide-down"},{default:a((function(){return[Object(i["S"])(Object(i["j"])(j,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(i["j"])(h,{span:"16"},{default:a((function(){return[Object(i["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(i["G"])(t.$slots,"title",{},(function(){return[Object(i["i"])(Object(i["L"])(n.title),1)]}),{},!0),Object(i["j"])("div",c,Object(i["L"])(n.subtitle),1)],4)]})),_:3}),Object(i["j"])(h,{span:"8"},{default:a((function(){return[Object(i["j"])("div",s,[Object(i["G"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[i["O"],r.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(i["G"])(t.$slots,"default",{},void 0,!0)],6)])})),l={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(i["D"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},u=(n("2c02"),n("6b0d")),b=n.n(u);const d=b()(l,[["render",r],["__scopeId","data-v-65e3a388"]]);e["a"]=d},"2c02":function(t,e,n){"use strict";n("3c84")},"3c84":function(t,e,n){},"4c61":function(t,e,n){},ab12:function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("7a23"),a=Object(i["V"])("data-v-4350f7a3");Object(i["C"])("data-v-4350f7a3");var o=Object(i["i"])("切换账号"),c={class:"info"},s=Object(i["i"])("解绑账号"),r=Object(i["i"])("退出登录"),l=Object(i["j"])("br",null,null,-1),u=Object(i["i"])("当前微信绑定如下账号，点击进行切换");Object(i["A"])();var b=a((function(t,e,n,b,d,f){var h=Object(i["H"])("van-button"),j=Object(i["H"])("van-uploader"),p=Object(i["H"])("van-field"),O=Object(i["H"])("van-cell"),v=Object(i["H"])("van-action-sheet"),m=Object(i["H"])("BaseLayout");return Object(i["z"])(),Object(i["g"])(m,{title:"我的账号"},{extra:a((function(){return[f.inWechat?Object(i["S"])((Object(i["z"])(),Object(i["g"])(h,{key:0,icon:"sort",style:{width:"100%",borderRadius:"10px 0 0 10px",color:"#F60"},color:"#F6F6F6",onClick:e[1]||(e[1]=function(t){return d.state.popup=!0})},{default:a((function(){return[o]})),_:1},512)),[[i["O"],t.authorized]]):Object(i["h"])("",!0)]})),default:a((function(){return[Object(i["j"])(j,{class:"avatar",modelValue:d.avatar,"onUpdate:modelValue":e[2]||(e[2]=function(t){return d.avatar=t}),"max-size":524288,"max-count":1,"preview-size":120,multiple:!1,"after-read":f.onUpload},null,8,["modelValue","after-read"]),Object(i["j"])("div",c,[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(d.fields,(function(t,e){return Object(i["z"])(),Object(i["g"])(p,{key:e,label:t.name,modelValue:d.fields[e].value,"onUpdate:modelValue":function(t){return d.fields[e].value=t},clickable:"","right-icon":d.fields[e].icon,"input-align":"edit"==d.fields[e].icon?"center":"right",onClickInput:function(t){return d.fields[e].icon="edit"},onBlur:function(t){return f.onChange(e)}},null,8,["label","modelValue","onUpdate:modelValue","right-icon","input-align","onClickInput","onBlur"])})),128)),Object(i["j"])(O,{title:"最近登录时间",value:t.profile.login_dt},null,8,["value"]),Object(i["j"])(O,{title:"最近登录地址",border:!1,value:t.profile.login_ip},null,8,["value"]),Object(i["S"])(Object(i["j"])(h,{block:"",class:"btn",type:"primary",plain:"",onClick:f.onUnbind},{default:a((function(){return[s]})),_:1},8,["onClick"]),[[i["O"],f.inWechat]]),Object(i["j"])(h,{block:"",class:"btn",type:"primary",to:"/logout"},{default:a((function(){return[r]})),_:1})]),Object(i["j"])(v,{show:d.state.popup,"onUpdate:show":e[3]||(e[3]=function(t){return d.state.popup=t}),actions:d.state.list,"cancel-text":"绑定新账号","close-on-click-action":"",onSelect:f.onSwitch,onCancel:f.onBind},{description:a((function(){return[Object(i["i"])(Object(i["L"])(t.profile.openid),1),l,u]})),_:1},8,["show","actions","onSelect","onCancel"])]})),_:1})})),d=n("5530"),f=n("5502"),h=n("2824"),j={components:{BaseLayout:h["a"]},data:function(){var t=Object(i["E"])([]),e=Object(i["D"])({nickname:{name:"昵称",icon:"arrow",value:""},mobile:{name:"手机号",icon:"arrow",value:""},username:{name:"用户名",icon:"arrow",value:""},password:{name:"密码",icon:"arrow",value:""}}),n=Object(i["D"])({popup:!1,list:[]});return{avatar:t,fields:e,state:n}},created:function(){this.$init(this.reset,!0)},computed:Object(d["a"])(Object(d["a"])({inWechat:function(){return this.profile.wechat&&this.profile.wechat.openid&&this.profile.wechat.openid.length>10}},Object(f["d"])(["profile"])),Object(f["b"])(["authorized","uid","mobile","nickname"])),methods:Object(d["a"])({reset:function(){if(this.avatar=[{url:this.profile.avatar,isImage:!0}],this.fields.mobile.value=this.mobile,this.fields.username.value=this.profile.username,this.fields.nickname.value=this.nickname,this.fields.password.value="******",this.state.list=[],this.inWechat)for(var t in this.profile.wechat.bind){var e=this.profile.wechat.bind[t];this.state.list.push(Object(d["a"])(Object(d["a"])({},e),{name:e.mobile,subname:e.nickname+" (UID:"+e.id+") "}))}},onUpload:function(t){var e=this;t.status="uploading",t.message="上传中...";var n=new FormData;n.append("file",t.file),this.$http.post("/mall/upload",n).then((function(n){t.status="done",t.message="上传成功",t.url=n.filepath,e.$http.get("/user/modify?avatar="+n.filepath)}))},onChange:function(t){var e=this;if(this.fields[t].icon="arrow",("mobile"!=t||this.fields.mobile.value!=this.mobile)&&("username"!=t||this.fields.username.value!=this.profile.username)&&("nickname"!=t||this.fields.nickname.value!=this.nickname)&&("password"!=t||"******"!=this.fields.password.value)){var n="/user/change",i={what:t,value:this.fields[t].value};/(mobile|username|password)/.test(t)||(n="/user/modify",i[t]=this.fields[t].value),this.$http.post(n,i).then((function(){e.$init(e.reset)})).catch((function(){e.reset(),e.fields[t].icon="edit"}))}},onSwitch:function(t){var e=this;this.$http.post("/wechat/switch?u="+t.id).then((function(t){e.auth(t),e.$init(e.reset)}))},onBind:function(){this.$router.push("/bind")},onUnbind:function(){var t=this;this.$dialog.confirm({title:"",message:"确认解除账号 "+this.mobile+" 和微信（ID:"+this.profile.openid+"）的绑定关系？",theme:"round-button"}).then((function(){t.$http.post("/wechat/unbind").then((function(e){t.auth(e),t.$init(t.reset,!0)}))}))}},Object(f["c"])(["auth"]))},p=(n("0404"),n("6b0d")),O=n.n(p);const v=O()(j,[["render",b],["__scopeId","data-v-4350f7a3"]]);e["default"]=v}}]);