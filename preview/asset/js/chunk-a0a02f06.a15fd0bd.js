(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0a02f06"],{2824:function(t,e,n){"use strict";var i=n("7a23"),c=Object(i["R"])("data-v-10eacbaa");Object(i["A"])("data-v-10eacbaa");var a={class:"container"},o={style:{width:"100%"}},r={class:"subtitle"},l={class:"extra"};Object(i["y"])();var u=c((function(t,e,n,u,s,b){var d=Object(i["F"])("van-icon"),f=Object(i["F"])("van-nav-bar"),j=Object(i["F"])("van-sticky"),O=Object(i["F"])("van-col"),p=Object(i["F"])("van-row");return Object(i["x"])(),Object(i["f"])("div",a,[Object(i["P"])(Object(i["i"])(j,{onChange:e[2]||(e[2]=function(t){return u.state.isTop=!u.state.isTop})},{default:c((function(){return[Object(i["i"])(f,{class:["navbar",{notTop:!u.state.isTop,noTitle:n.notitle}],border:!1,onClickLeft:b.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:c((function(){return[Object(i["P"])(Object(i["i"])("div",null,[Object(i["E"])(t.$slots,"back",{},(function(){return[Object(i["i"])(d,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[i["M"],!n.noback]])]})),title:c((function(){return[Object(i["i"])("div",o,[Object(i["E"])(t.$slots,"tool",{},(function(){return[Object(i["h"])(Object(i["J"])(u.state.isTop?"":n.title),1)]}),{},!0)])]})),right:c((function(){return[Object(i["E"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[i["M"],!n.nonavbar]]),Object(i["i"])("div",{class:["page",{notTop:!u.state.isTop,noNavbar:n.nonavbar,noTitle:n.notitle,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(i["i"])(i["c"],{name:"van-slide-down"},{default:c((function(){return[Object(i["P"])(Object(i["i"])(p,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:c((function(){return[Object(i["i"])(O,{span:"16"},{default:c((function(){return[Object(i["i"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(i["h"])(Object(i["J"])(n.title)+" ",1),Object(i["i"])("div",r,Object(i["J"])(n.subtitle),1)],4)]})),_:1}),Object(i["i"])(O,{span:"8"},{default:c((function(){return[Object(i["i"])("div",l,[Object(i["E"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[i["M"],u.state.isTop&&!n.nonavbar&&!n.notitle]])]})),_:1}),Object(i["E"])(t.$slots,"default",{},void 0,!0)],6)])})),s={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(i["B"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){return"function"==typeof this.$slots.back?this.$emit("click-back"):(console.log("<<< BACK"),this.$router.back())}}},b=(n("854e"),n("d959")),d=n.n(b);const f=d()(s,[["render",u],["__scopeId","data-v-10eacbaa"]]);e["a"]=f},"570f":function(t,e,n){},"67e7":function(t,e,n){},"854e":function(t,e,n){"use strict";n("67e7")},bc1a:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),c=Object(i["R"])("data-v-55dfd952");Object(i["A"])("data-v-55dfd952");var a=Object(i["h"])("注册账号"),o=Object(i["h"])("下载 app"),r=Object(i["h"])("登录使用"),l=Object(i["h"])("发送验证码"),u=Object(i["i"])("br",null,null,-1),s={class:"extra"},b=Object(i["h"])("没有账号？"),d=Object(i["h"])("注册"),f=Object(i["h"])("忘记密码？"),j={class:"extra"},O=Object(i["h"])("已有账号？"),p=Object(i["h"])("登录"),h={class:"intro"};Object(i["y"])();var v=c((function(t,e,v,g,m,k){var y=Object(i["F"])("van-icon"),F=Object(i["F"])("van-image"),_=Object(i["F"])("van-step"),w=Object(i["F"])("van-steps"),$=Object(i["F"])("van-button"),S=Object(i["F"])("van-field"),V=Object(i["F"])("router-link"),B=Object(i["F"])("van-form"),M=Object(i["F"])("BaseLayout");return Object(i["x"])(),Object(i["f"])(M,{title:k.title,subtitle:v.subtitle,bg:"linear-gradient(180deg, #EFF, #F9F9F9 10%, #F9F9F9)",notitle:k.invite,onClickBack:k.onBack},{back:c((function(){return[Object(i["i"])(y,{name:k.invite?"wap-home-o":"arrow-left",size:"large"},null,8,["name"])]})),default:c((function(){return[Object(i["P"])(Object(i["i"])(F,{src:n("ec03")},null,8,["src"]),[[i["M"],k.invite]]),Object(i["P"])(Object(i["i"])(w,{class:"step"},{default:c((function(){return[Object(i["i"])(_,null,{default:c((function(){return[a]})),_:1}),Object(i["i"])(_,null,{default:c((function(){return[o]})),_:1}),Object(i["i"])(_,null,{default:c((function(){return[r]})),_:1})]})),_:1},512),[[i["M"],k.invite]]),Object(i["i"])(B,{class:"form",onSubmit:k.onSubmit,onFailed:k.onFailed},{default:c((function(){return[Object(i["P"])(Object(i["i"])(S,{modelValue:g.state.account,"onUpdate:modelValue":e[1]||(e[1]=function(t){return g.state.account=t}),name:"mobile",label:"手机号",placeholder:"请填写手机号",clearable:"",rules:[{required:"login"!=v.action,message:"支持大陆及港澳台手机号码"}]},{button:c((function(){return[Object(i["i"])($,{size:"small",type:"primary",onClick:k.onSend},{default:c((function(){return[l]})),_:1},8,["onClick"])]})),_:1},8,["modelValue","rules"]),[[i["M"],"login"!=v.action]]),Object(i["P"])(Object(i["i"])(S,{modelValue:g.state.vcode,"onUpdate:modelValue":e[2]||(e[2]=function(t){return g.state.vcode=t}),name:"vcode",label:"验证码",rules:[{required:"login"!=v.action,message:"请填写短信验证码"}]},null,8,["modelValue","rules"]),[[i["M"],"login"!=v.action]]),Object(i["P"])(Object(i["i"])(S,{modelValue:g.state.account,"onUpdate:modelValue":e[3]||(e[3]=function(t){return g.state.account=t}),name:"username",label:"账号",clearable:"",placeholder:"login"==v.action?"手机号或用户名":"请填写用户名",rules:[{required:"login"==v.action,message:"用户名以字母开头且长度不小于4"}]},null,8,["modelValue","placeholder","rules"]),[[i["M"],"login"==v.action]]),Object(i["P"])(Object(i["i"])(S,{modelValue:g.state.password,"onUpdate:modelValue":e[4]||(e[4]=function(t){return g.state.password=t}),type:"password",name:"password",label:"密码",clearable:"",placeholder:"changepassword"==v.action?"请填写新的密码":"请填写密码",rules:[{required:"bind"!=v.action,message:"包含字母和数字且长度不小于6"}]},null,8,["modelValue","placeholder","rules"]),[[i["M"],"bind"!=v.action]]),Object(i["P"])(Object(i["i"])(S,{modelValue:g.state.ucode,"onUpdate:modelValue":e[5]||(e[5]=function(t){return g.state.ucode=t}),name:"ucode",label:"邀请码",placeholder:"没有可以不用填写"},null,8,["modelValue"]),[[i["M"],k.invite]]),u,Object(i["i"])($,{block:"",type:"primary","native-type":"submit"},{default:c((function(){return[Object(i["h"])(Object(i["J"])(k.title),1)]})),_:1}),Object(i["P"])(Object(i["i"])("div",s,[b,Object(i["i"])(V,{class:"register",to:"/register?subtitle="+v.subtitle+"&target="+t.target},{default:c((function(){return[d]})),_:1},8,["to"]),Object(i["i"])(V,{class:"right",to:"/changepassword?subtitle="+v.subtitle+"&target="+t.target},{default:c((function(){return[f]})),_:1},8,["to"])],512),[[i["M"],!k.invite&&"login"==v.action]]),Object(i["P"])(Object(i["i"])("div",j,[O,Object(i["i"])(V,{class:"login",to:"/login?subtitle="+v.subtitle+"&target="+t.target},{default:c((function(){return[p]})),_:1},8,["to"])],512),[[i["M"],!k.invite&&"register"==v.action]])]})),_:1},8,["onSubmit","onFailed"]),Object(i["i"])("div",h,[Object(i["P"])(Object(i["i"])(F,{src:n("c869"),height:"1000px"},null,8,["src"]),[[i["M"],k.invite]])])]})),_:1},8,["title","subtitle","notitle","onClickBack"])})),g=n("5530"),m=n("5502"),k=n("2824"),y={components:{BaseLayout:k["a"]},props:{action:{type:String,default:"login"},ucode:{type:String,default:""},subtitle:{type:String,default:""},redirect:{type:String,default:"/my"}},setup:function(){var t=Object(i["B"])({account:"",password:"",vcode:"",ucode:""});return{state:t}},created:function(){this.state.ucode=this.ucode},mounted:function(){var t=this;"logout"==this.action&&this.$http.post("/user/"+this.action).then((function(e){t.auth(e),t.$router.push(t.redirect)}))},computed:Object(g["a"])(Object(g["a"])({invite:function(){return"invite"==this.action},title:function(){var t=this.action,e={login:"登录",register:"注册",changepassword:"找回密码",bind:"绑定账号"};return this.invite?"注册":"undefined"==typeof e[t]?"登录":e[t]}},Object(m["d"])(["profile"])),Object(m["b"])(["authorized"])),methods:Object(g["a"])({onBack:function(){return"bind"==this.action?this.$toast("请先绑定账号"):this.invite?this.$router.push("/"):this.$router.push("/my")},onSend:function(){this.$http.post("/user/verify?mobile="+this.state.account)},onSubmit:function(t){var e=this;/^\d+$/.test(this.state.account)&&delete t["username"]||delete t["mobile"];var n="bind"==this.action?"/wechat/bindmobile":"/user/"+("invite"!=this.action?this.action:"register");this.$http.post(n,t).then((function(t){e.auth(t),e.$router.push(e.redirect)}))},onFailed:function(t){this.$toast("请按要求填写表单"),console.error("表单提交失败",t)}},Object(m["c"])(["auth"]))},F=(n("c8b8"),n("d959")),_=n.n(F);const w=_()(y,[["render",v],["__scopeId","data-v-55dfd952"]]);e["default"]=w},c869:function(t,e,n){t.exports=n.p+"asset/img/invite_intro.3b623efd.jpg"},c8b8:function(t,e,n){"use strict";n("570f")},ec03:function(t,e,n){t.exports=n.p+"asset/img/invite_title.984e4a7a.jpg"}}]);
//# sourceMappingURL=chunk-a0a02f06.a15fd0bd.js.map