(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f3b53e5"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),n=a("5899"),s="["+n+"]",o=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),r=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:r(1),end:r(2),trim:r(3)}},7156:function(t,e,a){var i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var s,o;return n&&"function"==typeof(s=e.constructor)&&s!==a&&i(o=s.prototype)&&o!==a.prototype&&n(t,o),t}},"76a1":function(t,e,a){"use strict";a.r(e);var i=a("7a23"),n=Object(i["S"])("data-v-7af5de77");Object(i["B"])("data-v-7af5de77");var s={class:"box"},o={id:"pay",class:"fee"},c={class:"subject"},r=Object(i["i"])(" "),u=Object(i["i"])(" "),p=Object(i["i"])("立即付款"),l=Object(i["i"])("使用微信支付");Object(i["z"])();var h=n((function(t,e,a,h,f,d){var b=Object(i["G"])("van-icon"),j=Object(i["G"])("van-cell"),y=Object(i["G"])("van-switch"),v=Object(i["G"])("van-button"),g=Object(i["G"])("van-action-sheet"),O=Object(i["G"])("BaseLayout");return Object(i["y"])(),Object(i["g"])(O,{title:"收银台",navbar:"hide"},{default:n((function(){return[Object(i["j"])(g,{show:d.popup,"onUpdate:show":e[3]||(e[3]=function(t){return d.popup=t}),title:"收银台","close-on-click-overlay":!1},{default:n((function(){return[Object(i["j"])("div",s,[Object(i["j"])("div",o,[Object(i["j"])(b,{name:"points",size:"20"}),Object(i["i"])(" "+Object(i["K"])(a.fee),1)]),Object(i["j"])("div",c,Object(i["K"])(a.subject),1),Object(i["j"])(j,{title:"订单编号",value:a.oid},null,8,["value"]),Object(i["Q"])(Object(i["j"])(j,{title:"优惠券",value:"无","is-link":""},null,512),[[i["N"],a.tag]]),Object(i["j"])(j,{title:"余额支付",value:"（"+t.profile.cash+" 可用）"},{"right-icon":n((function(){return[r,Object(i["j"])(y,{modelValue:f.state.useCash,"onUpdate:modelValue":e[1]||(e[1]=function(t){return f.state.useCash=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(i["j"])(j,{title:"积分支付",value:"（"+t.profile.point+" 可用）"},{"right-icon":n((function(){return[u,Object(i["j"])(y,{modelValue:f.state.usePoint,"onUpdate:modelValue":e[2]||(e[2]=function(t){return f.state.usePoint=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(i["j"])(j,{title:"下单时间",value:a.dt},null,8,["value"]),Object(i["j"])(v,{class:"submit",type:"primary",round:"",block:"",onClick:d.handlePay},{default:n((function(){return[p]})),_:1},8,["onClick"]),Object(i["j"])(v,{type:"success",icon:"wechat-pay",round:"",block:"",plain:"",onClick:d.handleWxPay},{default:n((function(){return[l]})),_:1},8,["onClick"])])]})),_:1},8,["show"])]})),_:1})})),f=a("a891"),d=(a("7eed"),a("6b0d")),b=a.n(d);const j=b()(f["a"],[["render",h],["__scopeId","data-v-7af5de77"]]);e["default"]=j},"7eed":function(t,e,a){"use strict";a("b35b")},a891:function(t,e,a){"use strict";(function(t){var i=a("53ca"),n=a("5530"),s=(a("a9e3"),a("7a23")),o=a("5502"),c=a("2824");e["a"]={components:{BaseLayout:c["a"]},name:"Pay",props:{show:{type:Boolean,default:!1},json:{type:String,default:""},oid:{type:[String,Number],default:""},fee:{type:[String,Number],default:0},subject:{type:[String,Number],default:""},tag:{type:[String,Number],default:""},attach:{type:String,default:""},notify:{type:String,default:""},exprie:{type:[String,Number],default:0},dt:{type:String,default:""}},emits:["update:show"],data:function(){var t=Object(s["C"])({useCash:!0,usePoint:!0,type:"",tid:"",pid:""});return{state:t}},created:function(){},computed:Object(n["a"])({popup:{get:function(){return this.show},set:function(t){this.$emit("update:show",t)}}},Object(o["d"])(["profile"])),methods:Object(n["a"])({handlePay:function(){return this.state.useCash||this.state.usePoint?this.state.useCash&&!this.state.usePoint&&(this.state.type="cash",this.fee>this.profile.cash)?this.$toast("余额不足支付"):!this.state.useCash&&this.state.usePoint&&(this.state.type="point",this.fee>this.profile.point)?this.$toast("积分不足支付"):this.state.useCash&&this.state.usePoint&&(this.state.type="",this.fee>parseFloat(this.profile.point)+parseFloat(this.profile.cash))?this.$toast("账户资产不足，请使用微信支付"):void this.pay():this.$toast("至少选择一种支付方式")},handleWxPay:function(){var t=this;this.$http.post("/wechat/pay?fee="+this.fee+"&name="+this.subject+"&attach="+this.attach).then((function(e){t.state.popup=!1,t.state.pid=e.pid,e.code&&t.$dialog.confirm({title:"请用微信扫码付款",message:"<img src='http://api.qrserver.com/v1/create-qr-code/?size=250x250&ecc=H&margin=10&data="+e.code+"'>",theme:"round-button",confirmButtonText:"我已完成付款",allowHtml:!0}).then(t.wxpayCheck)||WeixinJSBridge&&WeixinJSBridge.invoke("getBrandWCPayRequest",e,(function(e){return"get_brand_wcpay_request:ok"!=e.err_msg?t.$dialog.alert({message:"微信支付失败，请重试！"}):t.wxpayCheck()}))}))},wxpayCheck:function(){var e=this;this.popup&&(this.$toast.loading({message:"订单处理中...",forbidClick:!0}),setTimeout((function(){0==document.querySelector("#pay").getBoundingClientRect()["height"]&&(e.popup=!1),e.$http.post("/wechat/payCheck?id="+e.state.pid).then((function(a){return t.isEmpty(a)||Object(i["a"])(a.attach)!=e.attach?e.wxpayCheck():(e.popup=!1,e.state.type="wxpay",e.pay())}))}),5e3))},pay:function(){var t=this;this.$http.post("/pay?order="+this.json+"&type="+this.state.type+"&tid="+this.state.tid+"&pid="+this.state.pid).then((function(){t.$init(),t.$emit("onPayOK")})).catch((function(){t.$emit("onPayFail")}))}},Object(o["c"])(["auth"]))}}).call(this,a("81b0"))},a9e3:function(t,e,a){"use strict";var i=a("83ab"),n=a("da84"),s=a("94ca"),o=a("6eeb"),c=a("5135"),r=a("c6b6"),u=a("7156"),p=a("c04e"),l=a("d039"),h=a("7c73"),f=a("241c").f,d=a("06cf").f,b=a("9bf2").f,j=a("58a8").trim,y="Number",v=n[y],g=v.prototype,O=r(h(g))==y,m=function(t){var e,a,i,n,s,o,c,r,u=p(t,!1);if("string"==typeof u&&u.length>2)if(u=j(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+u}for(s=u.slice(2),o=s.length,c=0;c<o;c++)if(r=s.charCodeAt(c),r<48||r>n)return NaN;return parseInt(s,i)}return+u};if(s(y,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var w,N=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof N&&(O?l((function(){g.valueOf.call(a)})):r(a)!=y)?u(new v(m(e)),a,N):m(e)},C=i?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;C.length>k;k++)c(v,w=C[k])&&!c(N,w)&&b(N,w,d(v,w));N.prototype=g,g.constructor=N,o(n,y,N)}},b35b:function(t,e,a){}}]);