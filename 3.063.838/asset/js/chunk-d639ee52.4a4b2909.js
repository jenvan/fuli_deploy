(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d639ee52"],{2824:function(t,e,n){"use strict";var i=n("7a23"),c=Object(i["X"])("data-v-77ef1cb4");Object(i["D"])("data-v-77ef1cb4");var a={class:"container"},o={class:"back"},r={class:"head"},s={class:"more"},u={class:"subtitle"},l={class:"extra"};Object(i["B"])();var b=c((function(t,e,n,b,d,j){var h=Object(i["I"])("van-icon"),f=Object(i["I"])("van-nav-bar"),O=Object(i["I"])("van-sticky"),p=Object(i["I"])("van-col"),v=Object(i["I"])("van-row");return Object(i["A"])(),Object(i["g"])("div",a,[Object(i["U"])(Object(i["k"])(O,{onChange:e[1]||(e[1]=function(t){return b.state.isTop=!b.state.isTop})},{default:c((function(){return[Object(i["k"])(f,{class:["navbar",{notTop:!b.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:j.onClickLeft,onClickRight:j.onClickRight},{left:c((function(){return[Object(i["U"])(Object(i["k"])("div",o,[Object(i["H"])(t.$slots,"back",{},(function(){return[Object(i["k"])(h,{name:"arrow-left"})]}),{},!0)],512),[[i["Q"],!n.noback]])]})),title:c((function(){return[Object(i["k"])("div",r,[Object(i["H"])(t.$slots,"head",{},(function(){return[Object(i["k"])("div",{style:{width:"100%",color:b.state.isTop?n.fg:"inherit"}},Object(i["M"])(b.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)])]})),right:c((function(){return[Object(i["k"])("div",s,[Object(i["H"])(t.$slots,"more",{},void 0,!0)])]})),_:1},8,["class","onClickLeft","onClickRight"])]})),_:1},512),[[i["Q"],"hide"!=n.navbar]]),Object(i["k"])("div",{class:["page",{notTop:!b.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(i["k"])(i["d"],{name:"van-slide-down"},{default:c((function(){return[Object(i["U"])(Object(i["k"])(v,{justify:"space-between",align:"center",class:"outline",style:{height:n.height+"px",color:n.fg}},{default:c((function(){return[Object(i["k"])(p,{span:"16"},{default:c((function(){return[Object(i["k"])("div",{class:"title",style:{color:n.fg},onClick:e[2]||(e[2]=function(e){return t.$emit("click-title")})},[Object(i["H"])(t.$slots,"title",{},(function(){return[Object(i["j"])(Object(i["M"])(n.title),1)]}),{},!0),Object(i["k"])("div",u,Object(i["M"])(n.subtitle),1)],4)]})),_:3}),Object(i["k"])(p,{span:"8"},{default:c((function(){return[Object(i["k"])("div",l,[Object(i["H"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[i["Q"],b.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(i["H"])(t.$slots,"default",{},void 0,!0)],6)])})),d={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(i["E"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){var t=this;this.noback||(this.$emit("click-back"),setTimeout((function(e){if(e==t.$route)return window&&window.history.length>1?t.$router.back():t.$router.push("/")}),200,this.$route))},onClickRight:function(){return this.$emit("click-more")}}},j=(n("8710"),n("d959")),h=n.n(j);const f=h()(d,[["render",b],["__scopeId","data-v-77ef1cb4"]]);e["a"]=f},8710:function(t,e,n){"use strict";n("994b")},"8a54":function(t,e,n){"use strict";n("bb33")},"994b":function(t,e,n){},bb33:function(t,e,n){},bc1a:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),c=Object(i["X"])("data-v-79ad0c15");Object(i["D"])("data-v-79ad0c15");var a=Object(i["j"])("注册账号"),o=Object(i["j"])("下载 app"),r=Object(i["j"])("登录使用"),s=Object(i["j"])("发送验证码"),u=Object(i["k"])("br",null,null,-1),l={class:"extra"},b=Object(i["j"])("没有账号？"),d=Object(i["j"])("注册"),j=Object(i["j"])("忘记密码？"),h={class:"extra"},f=Object(i["j"])("已有账号？"),O=Object(i["j"])("登录"),p={class:"intro"},v=Object(i["j"])("使用微信账号快捷授权");Object(i["B"])();var k=c((function(t,e,k,g,m,w){var _=Object(i["I"])("van-icon"),y=Object(i["I"])("van-image"),$=Object(i["I"])("van-step"),U=Object(i["I"])("van-steps"),C=Object(i["I"])("van-button"),I=Object(i["I"])("van-field"),S=Object(i["I"])("router-link"),Q=Object(i["I"])("van-form"),V=Object(i["I"])("van-empty"),F=Object(i["I"])("BaseLayout");return Object(i["A"])(),Object(i["g"])(F,{title:w.title,subtitle:k.subtitle,bg:"linear-gradient(180deg, #EFF, #F9F9F9 10%, #F9F9F9)",navbar:w.invite?"auto":"show",onClickBack:w.onBack},{back:c((function(){return[Object(i["k"])(_,{name:w.invite?"wap-home-o":"arrow-left",size:"large"},null,8,["name"])]})),default:c((function(){return[Object(i["U"])(Object(i["k"])(y,{src:n("ec03")},null,8,["src"]),[[i["Q"],w.invite]]),Object(i["U"])(Object(i["k"])(U,{class:"step"},{default:c((function(){return[Object(i["k"])($,null,{default:c((function(){return[a]})),_:1}),Object(i["k"])($,null,{default:c((function(){return[o]})),_:1}),Object(i["k"])($,null,{default:c((function(){return[r]})),_:1})]})),_:1},512),[[i["Q"],w.invite]]),Object(i["U"])(Object(i["k"])(Q,{class:"form",onSubmit:w.onSubmit,onFailed:w.onFailed},{default:c((function(){return[Object(i["U"])(Object(i["k"])(I,{modelValue:g.state.account,"onUpdate:modelValue":e[1]||(e[1]=function(t){return g.state.account=t}),name:"mobile",label:"手机号",placeholder:"请填写手机号",clearable:"",rules:[{required:"login"!=k.action,message:"支持大陆及港澳台手机号码"}]},{button:c((function(){return[Object(i["k"])(C,{class:"send",size:"small",type:"primary",onClick:w.onSend},{default:c((function(){return[s]})),_:1},8,["onClick"])]})),_:1},8,["modelValue","rules"]),[[i["Q"],"login"!=k.action]]),Object(i["U"])(Object(i["k"])(I,{modelValue:g.state.vcode,"onUpdate:modelValue":e[2]||(e[2]=function(t){return g.state.vcode=t}),name:"vcode",label:"验证码",placeholder:"请填写验证码",rules:[{required:"login"!=k.action,message:"请填写短信验证码"}]},null,8,["modelValue","rules"]),[[i["Q"],"login"!=k.action]]),Object(i["U"])(Object(i["k"])(I,{modelValue:g.state.account,"onUpdate:modelValue":e[3]||(e[3]=function(t){return g.state.account=t}),name:"username",label:"账号",clearable:"",placeholder:"login"==k.action?"手机号或用户名":"请填写用户名",rules:[{required:"login"==k.action,message:"用户名以字母开头且长度不小于4"}]},null,8,["modelValue","placeholder","rules"]),[[i["Q"],"login"==k.action]]),Object(i["U"])(Object(i["k"])(I,{modelValue:g.state.password,"onUpdate:modelValue":e[4]||(e[4]=function(t){return g.state.password=t}),type:"password",name:"password",label:"密码",clearable:"",placeholder:"changepassword"==k.action?"请填写新的密码":"请填写密码",rules:[{required:"bind"!=k.action,message:"包含字母和数字且长度不小于6"}]},null,8,["modelValue","placeholder","rules"]),[[i["Q"],"bind"!=k.action]]),Object(i["U"])(Object(i["k"])(I,{modelValue:g.state.ucode,"onUpdate:modelValue":e[5]||(e[5]=function(t){return g.state.ucode=t}),name:"ucode",label:"邀请码",placeholder:"没有可以不用填写"},null,8,["modelValue"]),[[i["Q"],w.invite]]),u,Object(i["k"])(C,{block:"",type:"primary","native-type":"submit"},{default:c((function(){return[Object(i["j"])(Object(i["M"])(w.title),1)]})),_:1}),Object(i["U"])(Object(i["k"])("div",l,[b,Object(i["k"])(S,{class:"register",to:"/register?subtitle="+k.subtitle+"&redirect="+k.redirect},{default:c((function(){return[d]})),_:1},8,["to"]),Object(i["k"])(S,{class:"right",to:"/changepassword?subtitle="+k.subtitle+"&redirect="+k.redirect},{default:c((function(){return[j]})),_:1},8,["to"])],512),[[i["Q"],!w.invite&&"login"==k.action]]),Object(i["U"])(Object(i["k"])("div",h,[f,Object(i["k"])(S,{class:"login",to:"/login?subtitle="+k.subtitle+"&redirect="+k.redirect},{default:c((function(){return[O]})),_:1},8,["to"])],512),[[i["Q"],!w.invite&&"register"==k.action]])]})),_:1},8,["onSubmit","onFailed"]),[[i["Q"],"oauth"!=k.action]]),Object(i["k"])("div",p,[Object(i["U"])(Object(i["k"])(y,{src:n("c869"),height:"1000px"},null,8,["src"]),[[i["Q"],w.invite]])]),Object(i["U"])(Object(i["k"])(C,{class:"wechat animate__animated animate__bounce animate__slow",round:"",block:"",icon:"https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon64_wx_logo.png",onClick:w.onWechat},{default:c((function(){return[v]})),_:1},8,["onClick"]),[[i["Q"],t.inWechat&&"bind"!=k.action]]),Object(i["U"])(Object(i["k"])(V,{description:"仅支持在微信环境中使用"},null,512),[[i["Q"],!t.inWechat&&"oauth"==k.action]])]})),_:1},8,["title","subtitle","navbar","onClickBack"])})),g=n("5530"),m=(n("ac1f"),n("5319"),n("5502")),w=n("2824"),_={components:{BaseLayout:w["a"]},props:{action:{type:String,default:"login"},ucode:{type:String,default:""},subtitle:{type:String,default:""},redirect:{type:String,default:"/my"},autosso:{type:String,default:"1"}},setup:function(){var t=Object(i["E"])({account:"",password:"",vcode:"",ucode:""});return{state:t}},created:function(){this.state.ucode=this.ucode},mounted:function(){var t=this;"login"==this.action&&(this.authorized&&this.$router.replace(this.redirect),"0"!=this.autosso&&this.onWechat()),"logout"==this.action&&this.$http.post("/user/logout").then((function(){t.auth(null),t.$router.push(t.redirect)}))},computed:Object(g["a"])(Object(g["a"])({invite:function(){return"invite"==this.action},title:function(){var t=this.action,e={login:"登录",register:"注册",changepassword:"找回密码",bind:"绑定账号"};return this.invite?"注册":"undefined"==typeof e[t]?"登录":e[t]}},Object(m["d"])(["inWechat","profile"])),Object(m["b"])(["authorized"])),methods:Object(g["a"])({onBack:function(){return"bind"==this.action?this.authorized?this.$router.back():this.$toast("请先绑定账号"):this.invite?this.$router.push("/"):this.$router.push("/my")},onSend:function(){this.$http.post("/user/verify?mobile="+this.state.account)},onSubmit:function(t){var e=this;/^\d+$/.test(this.state.account)&&delete t["username"]||delete t["mobile"];var n="bind"==this.action?"/wechat/bindmobile":"/user/"+("invite"!=this.action?this.action:"register");this.$http.post(n,t).then((function(t){e.auth(t),e.$router.push(e.redirect)}))},onFailed:function(t){this.$toast("请按要求填写表单"),console.error("表单提交失败",t)},onWechat:function(){if(!this.inWechat)return this.$toast("当前环境不支持微信授权登录");var t="http://"+this.$host+"/wechat/?host="+window.location.host+"&page="+this.redirect;return window.location.replace(t,!0)}},Object(m["c"])(["auth"]))},y=(n("8a54"),n("d959")),$=n.n(y);const U=$()(_,[["render",k],["__scopeId","data-v-79ad0c15"]]);e["default"]=U},c869:function(t,e,n){t.exports=n.p+"asset/img/invite_intro.3b623efd.jpg"},ec03:function(t,e,n){t.exports=n.p+"asset/img/invite_title.984e4a7a.jpg"}}]);