(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16e62601"],{"95bc":function(t,e,c){},d504:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a=Object(n["W"])("data-v-ec482b6e");Object(n["C"])("data-v-ec482b6e");var o={key:0,class:"loading"},i=Object(n["i"])("正在登录中 ...");Object(n["A"])();var r=a((function(t,e,c,r,b,d){var u=Object(n["H"])("van-loading"),s=Object(n["H"])("van-empty"),f=Object(n["H"])("home");return c.code.length>0?(Object(n["z"])(),Object(n["g"])("div",o,[Object(n["T"])(Object(n["j"])(u,{size:"64",vertical:""},{default:a((function(){return[i]})),_:1},512),[[n["P"],0==r.state.info.length]]),Object(n["T"])(Object(n["j"])(s,{image:"error"},{default:a((function(){return[Object(n["i"])(Object(n["L"])(r.state.info),1)]})),_:1},512),[[n["P"],r.state.info.length>0]])])):(Object(n["z"])(),Object(n["g"])(f,{key:1,production:!0}))})),b=c("5530"),d=(c("ac1f"),c("5319"),c("5502")),u=c("bb51"),s={name:"Index",components:{Home:u["default"]},props:{code:{type:String,default:""},redirect:{type:String,default:"/"}},setup:function(){var t=Object(n["D"])({info:""});return{state:t}},created:function(){var t=this;this.code.length>0&&this.$http.get("/wechat/login?code="+this.code).then((function(e){t.auth(e),t.$router.replace(t.redirect)})).catch((function(e){996!=e.rtn&&(t.state.info=e.msg)}))},methods:Object(b["a"])({},Object(d["c"])(["auth"]))},f=(c("e005"),c("6b0d")),j=c.n(f);const O=j()(s,[["render",r],["__scopeId","data-v-ec482b6e"]]);e["default"]=O},e005:function(t,e,c){"use strict";c("95bc")}}]);