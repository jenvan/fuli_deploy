(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cdd7e304"],{"3ca31":function(t,e,n){"use strict";n("7dbe")},"7dbe":function(t,e,n){},bc1a:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),c=Object(i["R"])("data-v-612b2158");Object(i["A"])("data-v-612b2158");var a=Object(i["h"])("注册账号"),o=Object(i["h"])("下载 app"),u=Object(i["h"])("登录使用"),r=Object(i["h"])("发送验证码"),l=Object(i["i"])("br",null,null,-1),s={class:"extra"},d=Object(i["h"])("没有账号？"),b=Object(i["h"])("注册"),h=Object(i["h"])("忘记密码？"),p={class:"extra"},j=Object(i["h"])("已有账号？"),O=Object(i["h"])("登录"),f={class:"intro"};Object(i["y"])();var g=c((function(t,e,g,m,v,F){var w=Object(i["F"])("van-icon"),y=Object(i["F"])("van-image"),_=Object(i["F"])("van-step"),V=Object(i["F"])("van-steps"),k=Object(i["F"])("van-button"),S=Object(i["F"])("van-field"),$=Object(i["F"])("router-link"),M=Object(i["F"])("van-form"),P=Object(i["F"])("BaseLayout");return Object(i["x"])(),Object(i["f"])(P,{title:F.title,subtitle:g.subtitle,bg:"linear-gradient(180deg, #EFF, #F9F9F9 10%, #F9F9F9)",height:F.invite?0:"60px",onClickBack:F.onBack},{back:c((function(){return[Object(i["i"])(w,{name:F.invite?"wap-home-o":"arrow-left",size:"large"},null,8,["name"])]})),default:c((function(){return[Object(i["P"])(Object(i["i"])(y,{src:n("ec03")},null,8,["src"]),[[i["M"],F.invite]]),Object(i["P"])(Object(i["i"])(V,{class:"step"},{default:c((function(){return[Object(i["i"])(_,null,{default:c((function(){return[a]})),_:1}),Object(i["i"])(_,null,{default:c((function(){return[o]})),_:1}),Object(i["i"])(_,null,{default:c((function(){return[u]})),_:1})]})),_:1},512),[[i["M"],F.invite]]),Object(i["i"])(M,{class:"form",onSubmit:F.onSubmit,onFailed:F.onFailed},{default:c((function(){return[Object(i["P"])(Object(i["i"])(S,{modelValue:m.state.account,"onUpdate:modelValue":e[1]||(e[1]=function(t){return m.state.account=t}),name:"mobile",label:"手机号",placeholder:"请填写手机号",clearable:"",rules:[{required:"login"!=g.action,message:"支持大陆及港澳台手机号码"}]},{button:c((function(){return[Object(i["i"])(k,{size:"small",type:"primary",onClick:F.onSend},{default:c((function(){return[r]})),_:1},8,["onClick"])]})),_:1},8,["modelValue","rules"]),[[i["M"],"login"!=g.action]]),Object(i["P"])(Object(i["i"])(S,{modelValue:m.state.vcode,"onUpdate:modelValue":e[2]||(e[2]=function(t){return m.state.vcode=t}),name:"vcode",label:"验证码",rules:[{required:"login"!=g.action,message:"请填写短信验证码"}]},null,8,["modelValue","rules"]),[[i["M"],"login"!=g.action]]),Object(i["P"])(Object(i["i"])(S,{modelValue:m.state.account,"onUpdate:modelValue":e[3]||(e[3]=function(t){return m.state.account=t}),name:"username",label:"账号",clearable:"",placeholder:"login"==g.action?"手机号或用户名":"请填写用户名",rules:[{required:"login"==g.action,message:"用户名以字母开头且长度不小于4"}]},null,8,["modelValue","placeholder","rules"]),[[i["M"],"login"==g.action]]),Object(i["P"])(Object(i["i"])(S,{modelValue:m.state.password,"onUpdate:modelValue":e[4]||(e[4]=function(t){return m.state.password=t}),type:"password",name:"password",label:"密码",clearable:"",placeholder:"changepassword"==g.action?"请填写新的密码":"请填写密码",rules:[{required:"bind"!=g.action,message:"包含字母和数字且长度不小于6"}]},null,8,["modelValue","placeholder","rules"]),[[i["M"],"bind"!=g.action]]),Object(i["P"])(Object(i["i"])(S,{modelValue:m.state.ucode,"onUpdate:modelValue":e[5]||(e[5]=function(t){return m.state.ucode=t}),name:"ucode",label:"邀请码",placeholder:"没有可以不用填写"},null,8,["modelValue"]),[[i["M"],F.invite]]),l,Object(i["i"])(k,{block:"",type:"primary","native-type":"submit"},{default:c((function(){return[Object(i["h"])(Object(i["J"])(F.title),1)]})),_:1}),Object(i["P"])(Object(i["i"])("div",s,[d,Object(i["i"])($,{class:"register",to:"/register?subtitle="+g.subtitle+"&target="+t.target},{default:c((function(){return[b]})),_:1},8,["to"]),Object(i["i"])($,{class:"right",to:"/changepassword?subtitle="+g.subtitle+"&target="+t.target},{default:c((function(){return[h]})),_:1},8,["to"])],512),[[i["M"],!F.invite&&"login"==g.action]]),Object(i["P"])(Object(i["i"])("div",p,[j,Object(i["i"])($,{class:"login",to:"/login?subtitle="+g.subtitle+"&target="+t.target},{default:c((function(){return[O]})),_:1},8,["to"])],512),[[i["M"],!F.invite&&"register"==g.action]])]})),_:1},8,["onSubmit","onFailed"]),Object(i["i"])("div",f,[Object(i["P"])(Object(i["i"])(y,{src:n("c869"),height:"1000px"},null,8,["src"]),[[i["M"],F.invite]])])]})),_:1},8,["title","subtitle","height","onClickBack"])})),m=n("5530"),v=n("5502"),F=n("2824"),w={components:{BaseLayout:F["a"]},props:{action:{type:String,default:"login"},ucode:{type:String,default:""},code:{type:String,default:""},subtitle:{type:String,default:""},redirect:{type:String,default:"/my"}},setup:function(){var t=Object(i["B"])({account:"",password:"",vcode:"",ucode:""});return{state:t}},created:function(){var t=this;this.state.ucode=this.ucode,this.code.length>0&&this.$http.get("/wechat/login?code="+this.code).then((function(e){t.auth(e),t.$router.push(t.redirect)}))},mounted:function(){var t=this;"logout"==this.action&&this.$http.post("/user/"+this.action).then((function(e){t.auth(e),t.$router.push(t.redirect)}))},computed:Object(m["a"])(Object(m["a"])({invite:function(){return"invite"==this.action},title:function(){var t=this.action,e={login:"登录",register:"注册",changepassword:"找回密码",bind:"绑定账号"};return this.invite?"注册":"undefined"==typeof e[t]?"登录":e[t]}},Object(v["d"])(["profile"])),Object(v["b"])(["authorized"])),methods:Object(m["a"])({onBack:function(){return this.invite?this.$router.push("/"):this.$router.push("/my")},onSend:function(){this.$http.post("/user/verify?mobile="+this.state.account)},onSubmit:function(t){var e=this;/^\d+$/.test(this.state.account)&&delete t["username"]||delete t["mobile"];var n="bind"==this.action?"/wechat/bindmobile":"/user/"+("invite"!=this.action?this.action:"register");this.$http.post(n,t).then((function(t){e.auth(t),e.$router.push(e.redirect)}))},onFailed:function(t){this.$toast("请按要求填写表单"),console.error("表单提交失败",t)}},Object(v["c"])(["auth"]))};n("3ca31");w.render=g,w.__scopeId="data-v-612b2158";e["default"]=w},c869:function(t,e,n){t.exports=n.p+"asset/img/invite_intro.3b623efd.jpg"},ec03:function(t,e,n){t.exports=n.p+"asset/img/invite_title.984e4a7a.jpg"}}]);
//# sourceMappingURL=chunk-cdd7e304.ada65567.js.map