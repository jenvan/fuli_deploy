(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37115dae","chunk-78aa0fc1"],{"13ab":function(t,e,a){"use strict";(function(t){var n=a("53ca"),o=a("5530"),s=(a("a9e3"),a("7a23")),i=a("5502"),c=a("2824"),u=a("922d");e["a"]={components:{BaseLayout:c["a"],Coupon:u["default"]},name:"Pay",props:{show:{type:Boolean,default:!1},json:{type:String,default:""},oid:{type:[String,Number],default:""},fee:{type:[String,Number],default:0},subject:{type:[String,Number],default:""},tag:{type:[String,Number],default:""},attach:{type:String,default:""},notify:{type:String,default:""},exprie:{type:[String,Number],default:0},dt:{type:String,default:""}},emits:["update:show"],data:function(){var t=Object(s["D"])({useCash:!0,usePoint:!0,type:"",cid:"",pid:"",showCoupon:!1,coupon:{id:-1},discount:""});return{state:t}},create:function(){this.$init()},computed:Object(o["a"])({popup:{get:function(){return this.show},set:function(t){this.state.showCoupon=!1,this.$emit("update:show",t)}}},Object(i["d"])(["profile"])),methods:Object(o["a"])({handleCoupon:function(t){this.state.showCoupon=!1,this.state.cid="",this.state.discount=0,t&&(this.state.cid=t.id,this.state.discount=Math.round(100*t.save)/100)},handlePay:function(){return this.state.useCash||this.state.usePoint?this.state.useCash&&!this.state.usePoint&&(this.state.type="cash",this.fee-this.state.discount-parseFloat(this.profile.cash)>0)?this.$toast("余额不足支付"):!this.state.useCash&&this.state.usePoint&&(this.state.type="point",this.fee-this.state.discount-parseFloat(this.profile.point)>0)?this.$toast("积分不足支付"):this.state.useCash&&this.state.usePoint&&(this.state.type="",this.fee-this.state.discount-parseFloat(this.profile.cash)-parseFloat(this.profile.point)>0)?this.$toast("账户资产不足，请使用微信支付"):void this.pay():this.$toast("至少选择一种支付方式")},handleWxPay:function(){var t=this;this.$http.post("/wechat/pay?fee="+this.fee+"&name="+this.subject+"&attach="+this.attach).then((function(e){t.state.popup=!1,t.state.pid=e.pid,e.code&&t.$dialog.confirm({title:"请用微信扫码付款",message:"<img src='http://api.qrserver.com/v1/create-qr-code/?size=250x250&ecc=H&margin=10&data="+e.code+"'>",theme:"round-button",confirmButtonText:"我已完成付款",allowHtml:!0}).then(t.wxpayCheck)||WeixinJSBridge&&WeixinJSBridge.invoke("getBrandWCPayRequest",e,(function(e){return"get_brand_wcpay_request:ok"!=e.err_msg?t.$dialog.alert({message:"微信支付失败，请重试！"}):t.wxpayCheck()}))}))},wxpayCheck:function(){var e=this;this.popup&&(this.$toast.loading({message:"订单处理中...",forbidClick:!0}),setTimeout((function(){0==document.querySelector("#pay").getBoundingClientRect()["height"]&&(e.popup=!1),e.$http.post("/wechat/payCheck?id="+e.state.pid).then((function(a){return t.isEmpty(a)||Object(n["a"])(a.attach)!=e.attach?e.wxpayCheck():(e.popup=!1,e.state.type="wxpay",e.pay())}))}),5e3))},pay:function(){var t=this;this.$http.post("/pay?order="+this.json+"&type="+this.state.type+"&cid="+this.state.cid+"&pid="+this.state.pid).then((function(e,a){t.$init(),t.popup=!1,t.$emit("onFinish",!0,a,e)})).catch((function(e){t.popup=!1,t.$emit("onFinish",!1,e.msg)}))}},Object(i["c"])(["auth"]))}}).call(this,a("81b0"))},"2e4d":function(t,e,a){"use strict";a("312a")},"312a":function(t,e,a){},"316e":function(t,e,a){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),o=a("5899"),s="["+o+"]",i=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},"6f82":function(t,e,a){},7156:function(t,e,a){var n=a("861d"),o=a("d2bb");t.exports=function(t,e,a){var s,i;return o&&"function"==typeof(s=e.constructor)&&s!==a&&n(i=s.prototype)&&i!==a.prototype&&o(t,i),t}},"922d":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),o=Object(n["W"])("data-v-1aaec02a");Object(n["C"])("data-v-1aaec02a");var s={class:"toolbar"},i=Object(n["i"])("不使用优惠券"),c=Object(n["i"])("转赠选中的优惠券"),u=Object(n["i"])("转赠");Object(n["A"])();var r=o((function(t,e,a,r,l,h){var p=Object(n["H"])("van-button"),d=Object(n["H"])("van-coupon-list"),f=Object(n["H"])("van-field"),b=Object(n["H"])("van-action-sheet"),j=Object(n["H"])("BaseLayout");return Object(n["z"])(),Object(n["g"])(j,{title:"我的优惠券",navbar:a.inpay?"hide":"show"},{default:o((function(){return[Object(n["j"])("div",s,[Object(n["T"])(Object(n["j"])(p,{type:"primary",block:"",onClick:e[1]||(e[1]=function(t){return h.onChange(-1)})},{default:o((function(){return[i]})),_:1},512),[[n["P"],a.inpay]]),Object(n["T"])(Object(n["j"])(p,{type:"primary",block:"",onClick:e[2]||(e[2]=function(t){return l.state.popup=!0})},{default:o((function(){return[c]})),_:1},512),[[n["P"],!a.inpay&&l.state.index>-1]])]),Object(n["j"])(d,{class:"list","displayed-coupon-index":0,code:l.state.code,"onUpdate:code":e[3]||(e[3]=function(t){return l.state.code=t}),coupons:l.state.list1,"disabled-coupons":l.state.list0,"chosen-coupon":l.state.index,"show-close-button":!1,onChange:h.onChange,onExchange:h.onExchange},null,8,["code","coupons","disabled-coupons","chosen-coupon","onChange","onExchange"]),Object(n["j"])(b,{show:l.state.popup,"onUpdate:show":e[5]||(e[5]=function(t){return l.state.popup=t}),title:"转赠优惠券",round:"",closeable:""},{default:o((function(){return[Object(n["j"])(f,{type:"text",border:1,modelValue:l.state.account,"onUpdate:modelValue":e[4]||(e[4]=function(t){return l.state.account=t}),"input-align":"center",clearable:"",placeholder:"请输入接收人UID或手机号",style:{margin:"20px 0"}},null,8,["modelValue"]),Object(n["j"])(p,{round:"",block:"",type:"primary",style:{margin:"10px 0"},onClick:h.onTransfer},{default:o((function(){return[u]})),_:1},8,["onClick"])]})),_:1},8,["show"])]})),_:1},8,["navbar"])})),l=a("5530"),h=(a("a9e3"),a("2824")),p={components:{BaseLayout:h["a"]},name:"Coupon",props:{tag:{type:String,default:""},amount:{type:[String,Number],default:0},inpay:{type:Boolean,default:!1}},data:function(){var t=Object(n["D"])({code:"",account:"",list0:[],list1:[],index:-1,popup:!1});return{state:t}},created:function(){this.onLoad()},methods:{onLoad:function(){var t=this;this.state.popup=!1,this.state.list0=[],this.state.list1=[],this.$http.get("/coupon/query?tag="+this.tag+"&amount="+this.amount).then((function(e){for(var a in e){var n=e[a];n=Object(l["a"])(Object(l["a"])({},n),{name:n.title,condition:"满 "+n.amount+" 元\n"+(1==n.type?"减":"打")+" "+n.discount+" "+(1==n.type?"元":"折"),startAt:new Date(n.dt_start).getTime()/1e3,endAt:new Date(n.dt_end).getTime()/1e3,description:n.intro,valueDesc:n.discount,unitDesc:1==n.type?"元":"折"}),n["status"]>0&&t.state.list0.push(n)||t.state.list1.push(n)}}))},onChange:function(t){this.state.index=t,this.inpay&&this.$emit("onChoose",this.state.list1[t]||null)},onExchange:function(){this.$http.post("/coupon/exchange?code="+this.state.code).then(this.onLoad)},onTransfer:function(){this.state.account.length>=3&&this.$http.post("/coupon/transfer?u="+this.state.account).then(this.onLoad)}}},d=(a("bc3f"),a("6b0d")),f=a.n(d);const b=f()(p,[["render",r],["__scopeId","data-v-1aaec02a"]]);e["default"]=b},a379:function(t,e,a){"use strict";a.r(e);a("fb6a"),a("d3b7"),a("25f0");var n=a("7a23"),o=Object(n["W"])("data-v-a04708a2");Object(n["C"])("data-v-a04708a2");var s={class:"panel"},i=Object(n["j"])("div",{class:"subject"},"金额",-1),c={class:"panel"},u=Object(n["j"])("div",{class:"stripe"},null,-1);Object(n["A"])();var r=o((function(t,e,a,r,l,h){var p=Object(n["H"])("van-icon"),d=Object(n["H"])("van-cell"),f=Object(n["H"])("van-field"),b=Object(n["H"])("van-number-keyboard"),j=Object(n["H"])("pay",!0),y=Object(n["H"])("BaseLayout");return Object(n["z"])(),Object(n["g"])(y,{title:h.title,bg:"#F6F6F6",fg:"#000",navbar:"hide"},{default:o((function(){return[Object(n["j"])(d,{class:"user",title:"向"+(l.state.user.merchant?"商户":"个人")+h.title,border:!1,label:l.state.user.nickname,onClick:h.handleManage},{extra:o((function(){return[Object(n["j"])(p,{class:"avatar",name:l.state.user.avatar||"manager",size:"48",color:"#"+Math.random().toString(16).slice(-6)},null,8,["name","color"])]})),_:1},8,["title","label","onClick"]),Object(n["T"])(Object(n["j"])("div",s,[i,Object(n["j"])(f,{class:"amount",type:"number",modelValue:l.state.amount,"onUpdate:modelValue":e[1]||(e[1]=function(t){return l.state.amount=t}),label:"￥",formatter:h.formarter,readonly:""},null,8,["modelValue","formatter"]),Object(n["j"])(b,{modelValue:l.state.amount,"onUpdate:modelValue":e[2]||(e[2]=function(t){return l.state.amount=t}),show:!0,theme:"custom","extra-key":".",maxlength:"6","close-button-text":h.title,"safe-area-inset-bottom":!1,"blur-on-close":!1,onClose:h.handlePay},null,8,["modelValue","close-button-text","onClose"])],512),[[n["P"],!l.state.resultShow]]),Object(n["T"])(Object(n["j"])("div",c,[u,Object(n["j"])("div",{class:"result",style:{borderColor:l.state.resultColor}},[Object(n["j"])("div",{class:"title",style:{color:l.state.resultColor}},Object(n["L"])(l.state.resultTitle),5),Object(n["j"])("div",{class:"info",innerHTML:l.state.resultInfo},null,8,["innerHTML"]),Object(n["j"])("div",{class:"link",onClick:e[3]||(e[3]=function(e){return t.$router.push("/my/point")})},Object(n["L"])(l.state.resultLink),1),Object(n["j"])(p,{class:"icon",name:l.state.resultIcon,color:l.state.resultColor},null,8,["name","color"])],4)],512),[[n["P"],l.state.resultShow]]),Object(n["j"])(j,Object(n["q"])({show:l.state.payShow,"onUpdate:show":e[4]||(e[4]=function(t){return l.state.payShow=t})},l.state.payData,{onOnFinish:h.handlePayResult}),null,16,["show","onOnFinish"]),Object(n["T"])(Object(n["j"])("div",{class:"watermark",innerHTML:a.code+"<br>"+t.uid+"<br>"+l.now},null,8,["innerHTML"]),[[n["P"],l.state.resultShow]])]})),_:1},8,["title"])})),l=a("5530"),h=(a("ac1f"),a("5319"),a("5502")),p=a("2824"),d=a("a6e6"),f={components:{BaseLayout:p["a"],Pay:d["default"]},props:{code:{type:String,default:""}},data:function(){var t=Object(n["D"])({user:{},amount:"",payData:{},payShow:!1,resultShow:!1,resultColor:"",resultIcon:"",resultTitle:"",resultInfo:"",resultLink:""}),e=(Object(n["E"])(null),Object(n["E"])(""));return{state:t,now:e}},created:function(){var t=this,e=this.payin?"scanpay?action=user&code=":"pay?code=";this.$http.post("/o2o/"+e+this.code).then((function(e){t.state.user=e}))},mounted:function(){var t=this;this.toggleChat(!1),this.timer=setInterval((function(){var e=new Date;t.now=(e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()).replace(/([-: ])(\d{1})(?!\d)/g,"$10$2")}),1e3)},unmounted:function(){this.toggleChat(!0),clearInterval(this.timer)},computed:Object(l["a"])(Object(l["a"])({payin:function(){return/^\d{10,}$/.test(this.code)},title:function(){return this.payin?"收款":"付款"}},Object(h["d"])(["profile"])),Object(h["b"])(["uid"])),methods:Object(l["a"])({formarter:function(t){return t?t.toString().replace(/\.(\d\d).+/,".$1"):""},handleManage:function(){8!=this.code.length||this.uid>1e4||(this.$copy(this.code),this.$router.push("biz?code="+this.code))},handlePay:function(){var t=this;if(!this.state.payShow){var e=parseFloat(this.state.amount);if(isNaN(e))return this.$toast("请输入"+this.title+"金额");var a=this.state.user.merchant||this.payin?.1:2;if(e<a||e>=1e3)return this.$toast(this.title+"金额最小"+a+"元、最大1000元");this.state.amount=e.toString(),this.payin?this.$http.post("/o2o/scanpay?code="+this.code+"&fee="+this.state.amount).then((function(e,a){t.handlePayResult(!0,a,e)})).catch((function(e){t.handlePayResult(!1,e.msg)})):this.$http.post("/o2o/pay?code="+this.code+"&amount="+this.state.amount).then((function(e){t.state.payData=Object(l["a"])(Object(l["a"])({},e),{},{json:JSON.stringify(e)}),t.state.payShow=!0}))}},handlePayResult:function(t,e,a){var n="交易时间："+this.now;a&&(a.oid&&(n+="<br>交易流水："+a.oid),a.fee&&(n+="<br>交易金额：￥"+a.fee),a.charge&&(n+="<br>实付金额：￥"+a.charge)),this.state.resultShow=!0,this.state.resultColor=t?"#6C0":"#C00",this.state.resultIcon=t?"checked":"close",this.state.resultTitle=this.title+(t?a&&a.fee?" "+a.fee+" 元":"成功":"失败"),this.state.resultInfo=t?n:e,this.state.resultLink=t?"交易详情 >>>":""}},Object(h["c"])(["toggleChat"]))},b=(a("2e4d"),a("6b0d")),j=a.n(b);const y=j()(f,[["render",r],["__scopeId","data-v-a04708a2"]]);e["default"]=y},a6e6:function(t,e,a){"use strict";a.r(e);var n=a("7a23"),o=Object(n["W"])("data-v-b45cb682");Object(n["C"])("data-v-b45cb682");var s=Object(n["j"])("div",{class:"title"},"收银台",-1),i={class:"box"},c={id:"pay",class:"fee"},u={class:"subject"},r=Object(n["i"])(" "),l=Object(n["i"])(" "),h=Object(n["i"])("立即付款"),p=Object(n["i"])("使用微信支付");Object(n["A"])();var d=o((function(t,e,a,d,f,b){var j=Object(n["H"])("van-icon"),y=Object(n["H"])("van-cell"),O=Object(n["H"])("van-switch"),m=Object(n["H"])("van-button"),v=Object(n["H"])("van-popup"),g=Object(n["H"])("Coupon"),C=Object(n["H"])("van-action-sheet"),w=Object(n["H"])("BaseLayout");return Object(n["z"])(),Object(n["g"])(w,{title:"收银台",navbar:"hide"},{default:o((function(){return[Object(n["j"])(v,{show:b.popup,"onUpdate:show":e[4]||(e[4]=function(t){return b.popup=t}),position:"bottom",style:{height:"100%"},"close-on-click-overlay":!1,"close-on-popstate":!0,"safe-area-inset-bottom":"",closeable:""},{default:o((function(){return[s,Object(n["j"])("div",i,[Object(n["j"])("div",c,[Object(n["j"])(j,{name:"points",size:"20"}),Object(n["i"])(" "+Object(n["L"])(a.fee),1)]),Object(n["j"])("div",u,Object(n["L"])(a.subject),1),Object(n["j"])(y,{title:"订单编号",value:a.oid},null,8,["value"]),Object(n["T"])(Object(n["j"])(y,{title:"优惠券",value:f.state.discount?"优惠 "+f.state.discount:"","is-link":"",onClick:e[1]||(e[1]=function(t){return f.state.showCoupon=!0})},null,8,["value"]),[[n["P"],a.tag.length>0]]),Object(n["j"])(y,{title:"余额支付",value:"（"+t.profile.cash+" 可用）"},{"right-icon":o((function(){return[r,Object(n["j"])(O,{modelValue:f.state.useCash,"onUpdate:modelValue":e[2]||(e[2]=function(t){return f.state.useCash=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(n["j"])(y,{title:"积分支付",value:"（"+t.profile.point+" 可用）"},{"right-icon":o((function(){return[l,Object(n["j"])(O,{modelValue:f.state.usePoint,"onUpdate:modelValue":e[3]||(e[3]=function(t){return f.state.usePoint=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(n["j"])(y,{title:"下单时间",value:a.dt},null,8,["value"]),Object(n["j"])(m,{class:"submit",type:"primary",round:"",block:"",onClick:b.handlePay},{default:o((function(){return[h]})),_:1},8,["onClick"]),Object(n["j"])(m,{type:"success",icon:"wechat-pay",round:"",block:"",plain:"",onClick:b.handleWxPay},{default:o((function(){return[p]})),_:1},8,["onClick"])])]})),_:1},8,["show"]),Object(n["j"])(C,{show:f.state.showCoupon,"onUpdate:show":e[5]||(e[5]=function(t){return f.state.showCoupon=t}),title:"选择优惠券",closeable:!1,"close-on-popstate":!0,"close-on-click-overlay":!1},{default:o((function(){return[Object(n["j"])(g,{tag:a.tag,amount:a.fee,inpay:"",onOnChoose:b.handleCoupon},null,8,["tag","amount","onOnChoose"])]})),_:1},8,["show"])]})),_:1})})),f=a("13ab"),b=(a("de05"),a("6b0d")),j=a.n(b);const y=j()(f["a"],[["render",d],["__scopeId","data-v-b45cb682"]]);e["default"]=y},a9e3:function(t,e,a){"use strict";var n=a("83ab"),o=a("da84"),s=a("94ca"),i=a("6eeb"),c=a("5135"),u=a("c6b6"),r=a("7156"),l=a("c04e"),h=a("d039"),p=a("7c73"),d=a("241c").f,f=a("06cf").f,b=a("9bf2").f,j=a("58a8").trim,y="Number",O=o[y],m=O.prototype,v=u(p(m))==y,g=function(t){var e,a,n,o,s,i,c,u,r=l(t,!1);if("string"==typeof r&&r.length>2)if(r=j(r),e=r.charCodeAt(0),43===e||45===e){if(a=r.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(r.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+r}for(s=r.slice(2),i=s.length,c=0;c<i;c++)if(u=s.charCodeAt(c),u<48||u>o)return NaN;return parseInt(s,n)}return+r};if(s(y,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var C,w=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof w&&(v?h((function(){m.valueOf.call(a)})):u(a)!=y)?r(new O(g(e)),a,w):g(e)},k=n?d(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;k.length>x;x++)c(O,C=k[x])&&!c(w,C)&&b(w,C,f(O,C));w.prototype=m,m.constructor=w,i(o,y,w)}},bc3f:function(t,e,a){"use strict";a("6f82")},de05:function(t,e,a){"use strict";a("316e")},fb6a:function(t,e,a){"use strict";var n=a("23e7"),o=a("861d"),s=a("e8b5"),i=a("23cb"),c=a("50c4"),u=a("fc6a"),r=a("8418"),l=a("b622"),h=a("1dde"),p=h("slice"),d=l("species"),f=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var a,n,l,h=u(this),p=c(h.length),j=i(t,p),y=i(void 0===e?p:e,p);if(s(h)&&(a=h.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?o(a)&&(a=a[d],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return f.call(h,j,y);for(n=new(void 0===a?Array:a)(b(y-j,0)),l=0;j<y;j++,l++)j in h&&r(n,l,h[j]);return n.length=l,n}})}}]);