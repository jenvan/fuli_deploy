(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-beed04be"],{"95bc":function(e,t,c){},d504:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=Object(n["S"])("data-v-ec482b6e");Object(n["B"])("data-v-ec482b6e");var o={key:0,class:"loading"},i=Object(n["i"])("正在登录中 ...");Object(n["z"])();var r=a((function(e,t,c,r,b,d){var u=Object(n["G"])("van-loading"),s=Object(n["G"])("van-empty"),f=Object(n["G"])("home");return c.code.length>0?(Object(n["y"])(),Object(n["g"])("div",o,[Object(n["Q"])(Object(n["j"])(u,{size:"64",vertical:""},{default:a((function(){return[i]})),_:1},512),[[n["N"],0==r.state.info.length]]),Object(n["Q"])(Object(n["j"])(s,{image:"error"},{default:a((function(){return[Object(n["i"])(Object(n["K"])(r.state.info),1)]})),_:1},512),[[n["N"],r.state.info.length>0]])])):(Object(n["y"])(),Object(n["g"])(f,{key:1,production:!0}))})),b=c("5530"),d=(c("ac1f"),c("5319"),c("5502")),u=c("bb51"),s={name:"Index",components:{Home:u["default"]},props:{code:{type:String,default:""},redirect:{type:String,default:"/"}},setup:function(){var e=Object(n["C"])({info:""});return{state:e}},created:function(){var e=this;this.code.length>0&&this.$http.get("/wechat/login?code="+this.code).then((function(t){e.auth(t),e.$router.replace(e.redirect)})).catch((function(t){996!=t.rtn&&(e.state.info=t.msg)}))},methods:Object(b["a"])({},Object(d["c"])(["auth"]))},f=(c("e005"),c("6b0d")),j=c.n(f);const O=j()(s,[["render",r],["__scopeId","data-v-ec482b6e"]]);t["default"]=O},e005:function(e,t,c){"use strict";c("95bc")}}]);