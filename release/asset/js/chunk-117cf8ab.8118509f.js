(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-117cf8ab"],{2391:function(t,e,n){},2824:function(t,e,n){"use strict";var i=n("7a23"),c=Object(i["S"])("data-v-341b8849");Object(i["B"])("data-v-341b8849");var a={class:"container"},o={class:"subtitle"},s={class:"extra"};Object(i["z"])();var r=c((function(t,e,n,r,l,u){var b=Object(i["G"])("van-icon"),f=Object(i["G"])("van-nav-bar"),d=Object(i["G"])("van-sticky"),h=Object(i["G"])("van-col"),j=Object(i["G"])("van-row");return Object(i["y"])(),Object(i["g"])("div",a,[Object(i["Q"])(Object(i["j"])(d,{onChange:e[2]||(e[2]=function(t){return r.state.isTop=!r.state.isTop})},{default:c((function(){return[Object(i["j"])(f,{class:["navbar",{notTop:!r.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:u.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:c((function(){return[Object(i["Q"])(Object(i["j"])("div",null,[Object(i["F"])(t.$slots,"back",{},(function(){return[Object(i["j"])(b,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[i["N"],!n.noback]])]})),title:c((function(){return[Object(i["j"])("div",{style:{width:"100%",color:r.state.isTop?n.fg:"inherit"}},Object(i["K"])(r.state.isTop&&"0"!=n.height?"":n.title),5)]})),right:c((function(){return[Object(i["F"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[i["N"],"hide"!=n.navbar]]),Object(i["j"])("div",{class:["page",{notTop:!r.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(i["j"])(i["d"],{name:"van-slide-down"},{default:c((function(){return[Object(i["Q"])(Object(i["j"])(j,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:c((function(){return[Object(i["j"])(h,{span:"16"},{default:c((function(){return[Object(i["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(i["F"])(t.$slots,"title",{},(function(){return[Object(i["i"])(Object(i["K"])(n.title),1)]}),{},!0),Object(i["j"])("div",o,Object(i["K"])(n.subtitle),1)],4)]})),_:3}),Object(i["j"])(h,{span:"8"},{default:c((function(){return[Object(i["j"])("div",s,[Object(i["F"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[i["N"],r.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(i["F"])(t.$slots,"default",{},void 0,!0)],6)])})),l={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(i["C"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},u=(n("c748"),n("6b0d")),b=n.n(u);const f=b()(l,[["render",r],["__scopeId","data-v-341b8849"]]);e["a"]=f},4284:function(t,e,n){},ab12:function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("7a23"),c=Object(i["S"])("data-v-061bfee0");Object(i["B"])("data-v-061bfee0");var a=Object(i["i"])("切换账号"),o={class:"info"},s=Object(i["i"])("解绑账号"),r=Object(i["i"])("退出登录");Object(i["z"])();var l=c((function(t,e,n,l,u,b){var f=Object(i["G"])("van-button"),d=Object(i["G"])("van-field"),h=Object(i["G"])("van-cell"),j=Object(i["G"])("van-action-sheet"),p=Object(i["G"])("BaseLayout");return Object(i["y"])(),Object(i["g"])(p,{title:"我的账号"},{extra:c((function(){return[b.inWechat?Object(i["Q"])((Object(i["y"])(),Object(i["g"])(f,{key:0,icon:"sort",style:{width:"100%",borderRadius:"10px 0 0 10px",color:"#F60"},color:"#F6F6F6",onClick:e[1]||(e[1]=function(t){return u.state.popup=!0})},{default:c((function(){return[a]})),_:1},512)),[[i["N"],t.authorized]]):Object(i["h"])("",!0)]})),default:c((function(){return[Object(i["j"])("div",o,[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(u.fields,(function(t,e){return Object(i["y"])(),Object(i["g"])(d,{key:e,label:t.name,modelValue:u.fields[e].value,"onUpdate:modelValue":function(t){return u.fields[e].value=t},clickable:"","input-align":"right","right-icon":u.fields[e].icon,onClickInput:function(t){return u.fields[e].icon="edit"},onBlur:function(t){return b.onChange(e)}},null,8,["label","modelValue","onUpdate:modelValue","right-icon","onClickInput","onBlur"])})),128)),Object(i["j"])(h,{title:"最近登录时间",value:t.profile.login_dt},null,8,["value"]),Object(i["j"])(h,{title:"最近登录地址",border:!1,value:t.profile.login_ip},null,8,["value"]),Object(i["Q"])(Object(i["j"])(f,{block:"",class:"btn",type:"primary",plain:"",onClick:b.onUnbind},{default:c((function(){return[s]})),_:1},8,["onClick"]),[[i["N"],b.inWechat]]),Object(i["j"])(f,{block:"",class:"btn",type:"primary",to:"/logout"},{default:c((function(){return[r]})),_:1})]),Object(i["j"])(j,{show:u.state.popup,"onUpdate:show":e[2]||(e[2]=function(t){return u.state.popup=t}),actions:u.state.list,description:"当前微信绑定如下账号，点击进行切换","cancel-text":"绑定新账号","close-on-click-action":"",onSelect:b.onSwitch,onCancel:b.onBind},null,8,["show","actions","onSelect","onCancel"])]})),_:1})})),u=n("5530"),b=n("5502"),f=n("2824"),d={components:{BaseLayout:f["a"]},data:function(){var t=Object(i["C"])({mobile:{name:"手机号",icon:"arrow",value:""},username:{name:"用户名",icon:"arrow",value:""},password:{name:"密码",icon:"arrow",value:""},nickname:{name:"昵称",icon:"arrow",value:""}}),e=Object(i["C"])({popup:!1,list:[]});return{fields:t,state:e}},created:function(){this.$init(this.reset)},computed:Object(u["a"])(Object(u["a"])({inWechat:function(){return this.profile.openid.length>10}},Object(b["d"])(["profile"])),Object(b["b"])(["authorized","uid","mobile","nickname"])),methods:Object(u["a"])({reset:function(){for(var t in this.fields.mobile.value=this.mobile,this.fields.username.value=this.profile.username,this.fields.nickname.value=this.nickname,this.fields.password.value="******",this.state.list=[],this.profile.account){var e=this.profile.account[t];this.state.list.push(Object(u["a"])(Object(u["a"])({},e),{name:e.mobile,subname:e.nickname+" (UID:"+e.id+") "}))}},onChange:function(t){var e=this;if(this.fields[t].icon="arrow",("mobile"!=t||this.fields.mobile.value!=this.mobile)&&("username"!=t||this.fields.username.value!=this.profile.username)&&("nickname"!=t||this.fields.nickname.value!=this.nickname)&&("password"!=t||"******"!=this.fields.password.value)){var n="/user/change",i={what:t,value:this.fields[t].value};/(mobile|username|password)/.test(t)||(n="/user/modify",i[t]=this.fields[t].value),this.$http.post(n,i).then((function(){e.$init(e.reset)})).catch((function(){e.reset(),e.fields[t].icon="edit"}))}},onSwitch:function(t){var e=this;this.$http.post("/wechat/switch?u="+t.id).then((function(t){e.auth(t),e.$init(e.reset)}))},onBind:function(){this.$router.push("/bind")},onUnbind:function(){var t=this;this.$dialog.confirm({title:"",message:"确认解除账号 "+this.mobile+" 和微信（ID:"+this.profile.openid+"）的绑定关系？",theme:"round-button"}).then((function(){t.$http.post("/wechat/unbind")}))}},Object(b["c"])(["auth"]))},h=(n("cf40"),n("6b0d")),j=n.n(h);const p=j()(d,[["render",l],["__scopeId","data-v-061bfee0"]]);e["default"]=p},c748:function(t,e,n){"use strict";n("2391")},cf40:function(t,e,n){"use strict";n("4284")}}]);