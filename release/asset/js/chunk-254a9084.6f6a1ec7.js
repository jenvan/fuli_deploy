(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-254a9084"],{2824:function(t,e,n){"use strict";var i=n("7a23"),c=Object(i["S"])("data-v-1e3cce2c");Object(i["B"])("data-v-1e3cce2c");var a={class:"container"},o={style:{width:"100%"}},r={class:"subtitle"},u={class:"extra"};Object(i["z"])();var s=c((function(t,e,n,s,l,b){var d=Object(i["G"])("van-icon"),j=Object(i["G"])("van-nav-bar"),f=Object(i["G"])("van-sticky"),h=Object(i["G"])("van-col"),O=Object(i["G"])("van-row");return Object(i["y"])(),Object(i["g"])("div",a,[Object(i["Q"])(Object(i["j"])(f,{onChange:e[2]||(e[2]=function(t){return s.state.isTop=!s.state.isTop})},{default:c((function(){return[Object(i["j"])(j,{class:["navbar",{notTop:!s.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:b.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:c((function(){return[Object(i["Q"])(Object(i["j"])("div",null,[Object(i["F"])(t.$slots,"back",{},(function(){return[Object(i["j"])(d,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[i["N"],!n.noback]])]})),title:c((function(){return[Object(i["j"])("div",o,Object(i["K"])(s.state.isTop&&"0"!=n.height?"":n.title),1)]})),right:c((function(){return[Object(i["F"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[i["N"],"hide"!=n.navbar]]),Object(i["j"])("div",{class:["page",{notTop:!s.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(i["j"])(i["d"],{name:"van-slide-down"},{default:c((function(){return[Object(i["Q"])(Object(i["j"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:c((function(){return[Object(i["j"])(h,{span:"16"},{default:c((function(){return[Object(i["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(i["F"])(t.$slots,"title",{},(function(){return[Object(i["i"])(Object(i["K"])(n.title),1)]}),{},!0),Object(i["j"])("div",r,Object(i["K"])(n.subtitle),1)],4)]})),_:3}),Object(i["j"])(h,{span:"8"},{default:c((function(){return[Object(i["j"])("div",u,[Object(i["F"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[i["N"],s.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(i["F"])(t.$slots,"default",{},void 0,!0)],6)])})),l={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(i["C"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},b=(n("6636"),n("6b0d")),d=n.n(b);const j=d()(l,[["render",s],["__scopeId","data-v-1e3cce2c"]]);e["a"]=j},6636:function(t,e,n){"use strict";n("919b")},"919b":function(t,e,n){},aa0f:function(t,e,n){},bc1a:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),c=Object(i["S"])("data-v-117294bc");Object(i["B"])("data-v-117294bc");var a=Object(i["i"])("注册账号"),o=Object(i["i"])("下载 app"),r=Object(i["i"])("登录使用"),u=Object(i["i"])("发送验证码"),s=Object(i["j"])("br",null,null,-1),l={class:"extra"},b=Object(i["i"])("没有账号？"),d=Object(i["i"])("注册"),j=Object(i["i"])("忘记密码？"),f={class:"extra"},h=Object(i["i"])("已有账号？"),O=Object(i["i"])("登录"),p={class:"intro"},v=Object(i["i"])("使用微信账号快捷授权");Object(i["z"])();var g=c((function(t,e,g,m,w,k){var _=Object(i["G"])("van-icon"),y=Object(i["G"])("van-image"),$=Object(i["G"])("van-step"),S=Object(i["G"])("van-steps"),N=Object(i["G"])("van-button"),F=Object(i["G"])("van-field"),C=Object(i["G"])("router-link"),V=Object(i["G"])("van-form"),G=Object(i["G"])("BaseLayout");return Object(i["y"])(),Object(i["g"])(G,{title:k.title,subtitle:g.subtitle,bg:"linear-gradient(180deg, #EFF, #F9F9F9 10%, #F9F9F9)",navbar:k.invite?"auto":"show",onClickBack:k.onBack},{back:c((function(){return[Object(i["j"])(_,{name:k.invite?"wap-home-o":"arrow-left",size:"large"},null,8,["name"])]})),default:c((function(){return[Object(i["Q"])(Object(i["j"])(y,{src:n("ec03")},null,8,["src"]),[[i["N"],k.invite]]),Object(i["Q"])(Object(i["j"])(S,{class:"step"},{default:c((function(){return[Object(i["j"])($,null,{default:c((function(){return[a]})),_:1}),Object(i["j"])($,null,{default:c((function(){return[o]})),_:1}),Object(i["j"])($,null,{default:c((function(){return[r]})),_:1})]})),_:1},512),[[i["N"],k.invite]]),Object(i["j"])(V,{class:"form",onSubmit:k.onSubmit,onFailed:k.onFailed},{default:c((function(){return[Object(i["Q"])(Object(i["j"])(F,{modelValue:m.state.account,"onUpdate:modelValue":e[1]||(e[1]=function(t){return m.state.account=t}),name:"mobile",label:"手机号",placeholder:"请填写手机号",clearable:"",rules:[{required:"login"!=g.action,message:"支持大陆及港澳台手机号码"}]},{button:c((function(){return[Object(i["j"])(N,{size:"small",type:"primary",onClick:k.onSend},{default:c((function(){return[u]})),_:1},8,["onClick"])]})),_:1},8,["modelValue","rules"]),[[i["N"],"login"!=g.action]]),Object(i["Q"])(Object(i["j"])(F,{modelValue:m.state.vcode,"onUpdate:modelValue":e[2]||(e[2]=function(t){return m.state.vcode=t}),name:"vcode",label:"验证码",rules:[{required:"login"!=g.action,message:"请填写短信验证码"}]},null,8,["modelValue","rules"]),[[i["N"],"login"!=g.action]]),Object(i["Q"])(Object(i["j"])(F,{modelValue:m.state.account,"onUpdate:modelValue":e[3]||(e[3]=function(t){return m.state.account=t}),name:"username",label:"账号",clearable:"",placeholder:"login"==g.action?"手机号或用户名":"请填写用户名",rules:[{required:"login"==g.action,message:"用户名以字母开头且长度不小于4"}]},null,8,["modelValue","placeholder","rules"]),[[i["N"],"login"==g.action]]),Object(i["Q"])(Object(i["j"])(F,{modelValue:m.state.password,"onUpdate:modelValue":e[4]||(e[4]=function(t){return m.state.password=t}),type:"password",name:"password",label:"密码",clearable:"",placeholder:"changepassword"==g.action?"请填写新的密码":"请填写密码",rules:[{required:"bind"!=g.action,message:"包含字母和数字且长度不小于6"}]},null,8,["modelValue","placeholder","rules"]),[[i["N"],"bind"!=g.action]]),Object(i["Q"])(Object(i["j"])(F,{modelValue:m.state.ucode,"onUpdate:modelValue":e[5]||(e[5]=function(t){return m.state.ucode=t}),name:"ucode",label:"邀请码",placeholder:"没有可以不用填写"},null,8,["modelValue"]),[[i["N"],k.invite]]),s,Object(i["j"])(N,{block:"",type:"primary","native-type":"submit"},{default:c((function(){return[Object(i["i"])(Object(i["K"])(k.title),1)]})),_:1}),Object(i["Q"])(Object(i["j"])("div",l,[b,Object(i["j"])(C,{class:"register",to:"/register?subtitle="+g.subtitle+"&target="+t.target},{default:c((function(){return[d]})),_:1},8,["to"]),Object(i["j"])(C,{class:"right",to:"/changepassword?subtitle="+g.subtitle+"&target="+t.target},{default:c((function(){return[j]})),_:1},8,["to"])],512),[[i["N"],!k.invite&&"login"==g.action]]),Object(i["Q"])(Object(i["j"])("div",f,[h,Object(i["j"])(C,{class:"login",to:"/login?subtitle="+g.subtitle+"&target="+t.target},{default:c((function(){return[O]})),_:1},8,["to"])],512),[[i["N"],!k.invite&&"register"==g.action]])]})),_:1},8,["onSubmit","onFailed"]),Object(i["j"])("div",p,[Object(i["Q"])(Object(i["j"])(y,{src:n("c869"),height:"1000px"},null,8,["src"]),[[i["N"],k.invite]])]),Object(i["Q"])(Object(i["j"])(N,{class:"wechat animate__animated animate__bounce animate__slow",round:"",block:"",icon:"https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon64_wx_logo.png",onClick:k.onWechat},{default:c((function(){return[v]})),_:1},8,["onClick"]),[[i["N"],m.state.inWechat]])]})),_:1},8,["title","subtitle","navbar","onClickBack"])})),m=n("5530"),w=n("53ca"),k=(n("ac1f"),n("5319"),n("5502")),_=n("2824"),y={components:{BaseLayout:_["a"]},props:{action:{type:String,default:"login"},ucode:{type:String,default:""},subtitle:{type:String,default:""},redirect:{type:String,default:"/my"}},setup:function(){var t=Object(i["C"])({account:"",password:"",vcode:"",ucode:"",inWechat:!1});return{state:t}},created:function(){this.state.ucode=this.ucode},mounted:function(){var t=this;"login"==this.action&&this.authorized&&this.$router.replace(this.redirect),"logout"==this.action&&this.$http.post("/user/"+this.action).then((function(e){t.auth(e),t.$router.push(t.redirect)})),setTimeout((function(){t.state.inWechat="object"==("undefined"===typeof WeixinJSBridge?"undefined":Object(w["a"])(WeixinJSBridge))}),1e3)},computed:Object(m["a"])(Object(m["a"])({invite:function(){return"invite"==this.action},title:function(){var t=this.action,e={login:"登录",register:"注册",changepassword:"找回密码",bind:"绑定账号"};return this.invite?"注册":"undefined"==typeof e[t]?"登录":e[t]}},Object(k["d"])(["profile"])),Object(k["b"])(["authorized"])),methods:Object(m["a"])({onBack:function(){return"bind"==this.action?this.authorized?this.$router.back():this.$toast("请先绑定账号"):this.invite?this.$router.push("/"):this.$router.push("/my")},onSend:function(){this.$http.post("/user/verify?mobile="+this.state.account)},onSubmit:function(t){var e=this;/^\d+$/.test(this.state.account)&&delete t["username"]||delete t["mobile"];var n="bind"==this.action?"/wechat/bindmobile":"/user/"+("invite"!=this.action?this.action:"register");this.$http.post(n,t).then((function(t){e.auth(t),e.$router.push(e.redirect)}))},onFailed:function(t){this.$toast("请按要求填写表单"),console.error("表单提交失败",t)},onWechat:function(){var t="http://api.fuchijihua.com/wechat/?host="+window.location.host+"&page=/my";return window.location.replace(t,!0)}},Object(k["c"])(["auth"]))},$=(n("c477"),n("6b0d")),S=n.n($);const N=S()(y,[["render",g],["__scopeId","data-v-117294bc"]]);e["default"]=N},c477:function(t,e,n){"use strict";n("aa0f")},c869:function(t,e,n){t.exports=n.p+"asset/img/invite_intro.3b623efd.jpg"},ec03:function(t,e,n){t.exports=n.p+"asset/img/invite_title.984e4a7a.jpg"}}]);