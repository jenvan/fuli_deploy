(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04bed2e6"],{"2e4d":function(t,e,a){"use strict";a("312a")},"312a":function(t,e,a){},a379:function(t,e,a){"use strict";a.r(e);a("fb6a"),a("d3b7"),a("25f0");var n=a("7a23"),s=Object(n["V"])("data-v-a04708a2");Object(n["C"])("data-v-a04708a2");var o={class:"panel"},r=Object(n["j"])("div",{class:"subject"},"金额",-1),i={class:"panel"},c=Object(n["j"])("div",{class:"stripe"},null,-1);Object(n["A"])();var l=s((function(t,e,a,l,u,h){var d=Object(n["H"])("van-icon"),b=Object(n["H"])("van-cell"),f=Object(n["H"])("van-field"),j=Object(n["H"])("van-number-keyboard"),p=Object(n["H"])("pay",!0),O=Object(n["H"])("BaseLayout");return Object(n["z"])(),Object(n["g"])(O,{title:h.title,bg:"#F6F6F6",fg:"#000",navbar:"hide"},{default:s((function(){return[Object(n["j"])(b,{class:"user",title:"向"+(u.state.user.merchant?"商户":"个人")+h.title,border:!1,label:u.state.user.nickname,onClick:h.handleManage},{extra:s((function(){return[Object(n["j"])(d,{class:"avatar",name:u.state.user.avatar||"manager",size:"48",color:"#"+Math.random().toString(16).slice(-6)},null,8,["name","color"])]})),_:1},8,["title","label","onClick"]),Object(n["S"])(Object(n["j"])("div",o,[r,Object(n["j"])(f,{class:"amount",type:"number",modelValue:u.state.amount,"onUpdate:modelValue":e[1]||(e[1]=function(t){return u.state.amount=t}),label:"￥",formatter:h.formarter,readonly:""},null,8,["modelValue","formatter"]),Object(n["j"])(j,{modelValue:u.state.amount,"onUpdate:modelValue":e[2]||(e[2]=function(t){return u.state.amount=t}),show:!0,theme:"custom","extra-key":".",maxlength:"6","close-button-text":h.title,"safe-area-inset-bottom":!1,"blur-on-close":!1,onClose:h.handlePay},null,8,["modelValue","close-button-text","onClose"])],512),[[n["O"],!u.state.resultShow]]),Object(n["S"])(Object(n["j"])("div",i,[c,Object(n["j"])("div",{class:"result",style:{borderColor:u.state.resultColor}},[Object(n["j"])("div",{class:"title",style:{color:u.state.resultColor}},Object(n["L"])(u.state.resultTitle),5),Object(n["j"])("div",{class:"info",innerHTML:u.state.resultInfo},null,8,["innerHTML"]),Object(n["j"])("div",{class:"link",onClick:e[3]||(e[3]=function(e){return t.$router.push("/my/point")})},Object(n["L"])(u.state.resultLink),1),Object(n["j"])(d,{class:"icon",name:u.state.resultIcon,color:u.state.resultColor},null,8,["name","color"])],4)],512),[[n["O"],u.state.resultShow]]),Object(n["j"])(p,Object(n["q"])({show:u.state.payShow,"onUpdate:show":e[4]||(e[4]=function(t){return u.state.payShow=t})},u.state.payData,{onOnFinish:h.handlePayResult}),null,16,["show","onOnFinish"]),Object(n["S"])(Object(n["j"])("div",{class:"watermark",innerHTML:a.code+"<br>"+t.uid+"<br>"+u.now},null,8,["innerHTML"]),[[n["O"],u.state.resultShow]])]})),_:1},8,["title"])})),u=a("5530"),h=(a("ac1f"),a("5319"),a("5502")),d=a("2824"),b=a("a6e6"),f={components:{BaseLayout:d["a"],Pay:b["default"]},props:{code:{type:String,default:""}},data:function(){var t=Object(n["D"])({user:{},amount:"",payData:{},payShow:!1,resultShow:!1,resultColor:"",resultIcon:"",resultTitle:"",resultInfo:"",resultLink:""}),e=(Object(n["E"])(null),Object(n["E"])(""));return{state:t,now:e}},created:function(){var t=this,e=this.payin?"scanpay?action=user&code=":"pay?code=";this.$http.post("/o2o/"+e+this.code).then((function(e){t.state.user=e}))},mounted:function(){var t=this;this.toggleChat(!1),this.timer=setInterval((function(){var e=new Date;t.now=(e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()).replace(/([-: ])(\d{1})(?!\d)/g,"$10$2")}),1e3)},unmounted:function(){this.toggleChat(!0),clearInterval(this.timer)},computed:Object(u["a"])(Object(u["a"])({payin:function(){return/^\d{10,}$/.test(this.code)},title:function(){return this.payin?"收款":"付款"}},Object(h["d"])(["profile"])),Object(h["b"])(["uid"])),methods:Object(u["a"])({formarter:function(t){return t?t.toString().replace(/\.(\d\d).+/,".$1"):""},handleManage:function(){8!=this.code.length||this.uid>1e4||(this.$copy(this.code),this.$router.push("biz?code="+this.code))},handlePay:function(){var t=this;if(!this.state.payShow){var e=parseFloat(this.state.amount);if(isNaN(e))return this.$toast("请输入"+this.title+"金额");var a=this.state.user.merchant||this.payin?.1:2;if(e<a||e>=1e3)return this.$toast(this.title+"金额最小"+a+"元、最大1000元");this.state.amount=e.toString(),this.payin?this.$http.post("/o2o/scanpay?code="+this.code+"&fee="+this.state.amount).then((function(e,a){t.handlePayResult(!0,a,e)})).catch((function(e){t.handlePayResult(!1,e.msg)})):this.$http.post("/o2o/pay?code="+this.code+"&amount="+this.state.amount).then((function(e){t.state.payData=Object(u["a"])(Object(u["a"])({},e),{},{json:JSON.stringify(e)}),t.state.payShow=!0}))}},handlePayResult:function(t,e,a){var n="交易时间："+this.now;a&&(a.oid&&(n+="<br>交易流水："+a.oid),a.fee&&(n+="<br>交易金额：￥"+a.fee),a.charge&&(n+="<br>实付金额：￥"+a.charge)),this.state.resultShow=!0,this.state.resultColor=t?"#6C0":"#C00",this.state.resultIcon=t?"checked":"close",this.state.resultTitle=this.title+(t?a&&a.fee?" "+a.fee+" 元":"成功":"失败"),this.state.resultInfo=t?n:e,this.state.resultLink=t?"交易详情 >>>":""}},Object(h["c"])(["toggleChat"]))},j=(a("2e4d"),a("6b0d")),p=a.n(j);const O=p()(f,[["render",l],["__scopeId","data-v-a04708a2"]]);e["default"]=O},fb6a:function(t,e,a){"use strict";var n=a("23e7"),s=a("861d"),o=a("e8b5"),r=a("23cb"),i=a("50c4"),c=a("fc6a"),l=a("8418"),u=a("b622"),h=a("1dde"),d=h("slice"),b=u("species"),f=[].slice,j=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var a,n,u,h=c(this),d=i(h.length),p=r(t,d),O=r(void 0===e?d:e,d);if(o(h)&&(a=h.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?s(a)&&(a=a[b],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return f.call(h,p,O);for(n=new(void 0===a?Array:a)(j(O-p,0)),u=0;p<O;p++,u++)p in h&&l(n,u,h[p]);return n.length=u,n}})}}]);