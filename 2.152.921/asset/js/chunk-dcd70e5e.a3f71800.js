(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dcd70e5e","chunk-2c4d20b5"],{"13ab":function(t,e,a){"use strict";(function(t){var n=a("53ca"),i=a("5530"),s=(a("a9e3"),a("7a23")),o=a("5502"),c=a("2824"),u=a("922d");e["a"]={components:{BaseLayout:c["a"],Coupon:u["default"]},name:"Pay",props:{show:{type:Boolean,default:!1},json:{type:String,default:""},oid:{type:[String,Number],default:""},fee:{type:[String,Number],default:0},subject:{type:[String,Number],default:""},tag:{type:[String,Number],default:""},attach:{type:String,default:""},notify:{type:String,default:""},exprie:{type:[String,Number],default:0},dt:{type:String,default:""}},emits:["update:show"],data:function(){var t=Object(s["D"])({useCash:!0,usePoint:!0,type:"",cid:"",pid:"",showCoupon:!1,coupon:{id:-1},discount:""});return{state:t}},create:function(){this.$init()},computed:Object(i["a"])({popup:{get:function(){return this.show},set:function(t){this.state.showCoupon=!1,this.$emit("update:show",t)}}},Object(o["d"])(["profile"])),methods:Object(i["a"])({handleCoupon:function(t){this.state.showCoupon=!1,this.state.cid="",this.state.discount=0,t&&(this.state.cid=t.id,this.state.discount=Math.round(100*t.save)/100)},handlePay:function(){return this.state.useCash||this.state.usePoint?this.state.useCash&&!this.state.usePoint&&(this.state.type="cash",this.fee-this.state.discount-parseFloat(this.profile.cash)>0)?this.$toast("余额不足支付"):!this.state.useCash&&this.state.usePoint&&(this.state.type="point",this.fee-this.state.discount-parseFloat(this.profile.point)>0)?this.$toast("积分不足支付"):this.state.useCash&&this.state.usePoint&&(this.state.type="",this.fee-this.state.discount-parseFloat(this.profile.cash)-parseFloat(this.profile.point)>0)?this.$toast("账户资产不足，请使用微信支付"):void this.pay():this.$toast("至少选择一种支付方式")},handleWxPay:function(){var t=this;this.$http.post("/wechat/pay?fee="+this.fee+"&name="+this.subject+"&attach="+this.attach).then((function(e){t.state.popup=!1,t.state.pid=e.pid,e.code&&t.$dialog.confirm({title:"请用微信扫码付款",message:"<img src='http://api.qrserver.com/v1/create-qr-code/?size=250x250&ecc=H&margin=10&data="+e.code+"'>",theme:"round-button",confirmButtonText:"我已完成付款",allowHtml:!0}).then(t.wxpayCheck)||WeixinJSBridge&&WeixinJSBridge.invoke("getBrandWCPayRequest",e,(function(e){return"get_brand_wcpay_request:ok"!=e.err_msg?t.$dialog.alert({message:"微信支付失败，请重试！"}):t.wxpayCheck()}))}))},wxpayCheck:function(){var e=this;this.popup&&(this.$toast.loading({message:"订单处理中...",forbidClick:!0}),setTimeout((function(){0==document.querySelector("#pay").getBoundingClientRect()["height"]&&(e.popup=!1),e.$http.post("/wechat/payCheck?id="+e.state.pid).then((function(a){return t.isEmpty(a)||Object(n["a"])(a.attach)!=e.attach?e.wxpayCheck():(e.popup=!1,e.state.type="wxpay",e.pay())}))}),5e3))},pay:function(){var t=this;this.$http.post("/pay?order="+this.json+"&type="+this.state.type+"&cid="+this.state.cid+"&pid="+this.state.pid).then((function(e,a){t.$init(),t.popup=!1,t.$emit("onFinish",!0,a,e)})).catch((function(e){t.popup=!1,t.$emit("onFinish",!1,e.msg)}))}},Object(o["c"])(["auth"]))}}).call(this,a("81b0"))},"316e":function(t,e,a){},"54d9":function(t,e,a){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),s="["+i+"]",o=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},6884:function(t,e,a){"use strict";a("54d9")},"6f82":function(t,e,a){},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var s,o;return i&&"function"==typeof(s=e.constructor)&&s!==a&&n(o=s.prototype)&&o!==a.prototype&&i(t,o),t}},"922d":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),i=Object(n["V"])("data-v-1aaec02a");Object(n["C"])("data-v-1aaec02a");var s={class:"toolbar"},o=Object(n["i"])("不使用优惠券"),c=Object(n["i"])("转赠选中的优惠券"),u=Object(n["i"])("转赠");Object(n["A"])();var r=i((function(t,e,a,r,d,l){var p=Object(n["H"])("van-button"),h=Object(n["H"])("van-coupon-list"),b=Object(n["H"])("van-field"),f=Object(n["H"])("van-action-sheet"),j=Object(n["H"])("BaseLayout");return Object(n["z"])(),Object(n["g"])(j,{title:"我的优惠券",navbar:a.inpay?"hide":"show"},{default:i((function(){return[Object(n["j"])("div",s,[Object(n["S"])(Object(n["j"])(p,{type:"primary",block:"",onClick:e[1]||(e[1]=function(t){return l.onChange(-1)})},{default:i((function(){return[o]})),_:1},512),[[n["O"],a.inpay]]),Object(n["S"])(Object(n["j"])(p,{type:"primary",block:"",onClick:e[2]||(e[2]=function(t){return d.state.popup=!0})},{default:i((function(){return[c]})),_:1},512),[[n["O"],!a.inpay&&d.state.index>-1]])]),Object(n["j"])(h,{class:"list","displayed-coupon-index":0,code:d.state.code,"onUpdate:code":e[3]||(e[3]=function(t){return d.state.code=t}),coupons:d.state.list1,"disabled-coupons":d.state.list0,"chosen-coupon":d.state.index,"show-close-button":!1,onChange:l.onChange,onExchange:l.onExchange},null,8,["code","coupons","disabled-coupons","chosen-coupon","onChange","onExchange"]),Object(n["j"])(f,{show:d.state.popup,"onUpdate:show":e[5]||(e[5]=function(t){return d.state.popup=t}),title:"转赠优惠券",round:"",closeable:""},{default:i((function(){return[Object(n["j"])(b,{type:"text",border:1,modelValue:d.state.account,"onUpdate:modelValue":e[4]||(e[4]=function(t){return d.state.account=t}),"input-align":"center",clearable:"",placeholder:"请输入接收人UID或手机号",style:{margin:"20px 0"}},null,8,["modelValue"]),Object(n["j"])(p,{round:"",block:"",type:"primary",style:{margin:"10px 0"},onClick:l.onTransfer},{default:i((function(){return[u]})),_:1},8,["onClick"])]})),_:1},8,["show"])]})),_:1},8,["navbar"])})),d=a("5530"),l=(a("a9e3"),a("2824")),p={components:{BaseLayout:l["a"]},name:"Coupon",props:{tag:{type:String,default:""},amount:{type:[String,Number],default:0},inpay:{type:Boolean,default:!1}},data:function(){var t=Object(n["D"])({code:"",account:"",list0:[],list1:[],index:-1,popup:!1});return{state:t}},created:function(){this.onLoad()},methods:{onLoad:function(){var t=this;this.state.popup=!1,this.state.list0=[],this.state.list1=[],this.$http.get("/coupon/query?tag="+this.tag+"&amount="+this.amount).then((function(e){for(var a in e){var n=e[a];n=Object(d["a"])(Object(d["a"])({},n),{name:n.title,condition:"满 "+n.amount+" 元\n"+(1==n.type?"减":"打")+" "+n.discount+" "+(1==n.type?"元":"折"),startAt:new Date(n.dt_start).getTime()/1e3,endAt:new Date(n.dt_end).getTime()/1e3,description:n.intro,valueDesc:n.discount,unitDesc:1==n.type?"元":"折"}),n["status"]>0&&t.state.list0.push(n)||t.state.list1.push(n)}}))},onChange:function(t){this.state.index=t,this.inpay&&this.$emit("onChoose",this.state.list1[t]||null)},onExchange:function(){this.$http.post("/coupon/exchange?code="+this.state.code).then(this.onLoad)},onTransfer:function(){this.state.account.length>=3&&this.$http.post("/coupon/transfer?u="+this.state.account).then(this.onLoad)}}},h=(a("bc3f"),a("6b0d")),b=a.n(h);const f=b()(p,[["render",r],["__scopeId","data-v-1aaec02a"]]);e["default"]=f},a6e6:function(t,e,a){"use strict";a.r(e);var n=a("7a23"),i=Object(n["V"])("data-v-b45cb682");Object(n["C"])("data-v-b45cb682");var s=Object(n["j"])("div",{class:"title"},"收银台",-1),o={class:"box"},c={id:"pay",class:"fee"},u={class:"subject"},r=Object(n["i"])(" "),d=Object(n["i"])(" "),l=Object(n["i"])("立即付款"),p=Object(n["i"])("使用微信支付");Object(n["A"])();var h=i((function(t,e,a,h,b,f){var j=Object(n["H"])("van-icon"),O=Object(n["H"])("van-cell"),m=Object(n["H"])("van-switch"),y=Object(n["H"])("van-button"),g=Object(n["H"])("van-popup"),v=Object(n["H"])("Coupon"),C=Object(n["H"])("van-action-sheet"),w=Object(n["H"])("BaseLayout");return Object(n["z"])(),Object(n["g"])(w,{title:"收银台",navbar:"hide"},{default:i((function(){return[Object(n["j"])(g,{show:f.popup,"onUpdate:show":e[4]||(e[4]=function(t){return f.popup=t}),position:"bottom",style:{height:"100%"},"close-on-click-overlay":!1,"close-on-popstate":!0,"safe-area-inset-bottom":"",closeable:""},{default:i((function(){return[s,Object(n["j"])("div",o,[Object(n["j"])("div",c,[Object(n["j"])(j,{name:"points",size:"20"}),Object(n["i"])(" "+Object(n["L"])(a.fee),1)]),Object(n["j"])("div",u,Object(n["L"])(a.subject),1),Object(n["j"])(O,{title:"订单编号",value:a.oid},null,8,["value"]),Object(n["S"])(Object(n["j"])(O,{title:"优惠券",value:b.state.discount?"优惠 "+b.state.discount:"","is-link":"",onClick:e[1]||(e[1]=function(t){return b.state.showCoupon=!0})},null,8,["value"]),[[n["O"],a.tag.length>0]]),Object(n["j"])(O,{title:"余额支付",value:"（"+t.profile.cash+" 可用）"},{"right-icon":i((function(){return[r,Object(n["j"])(m,{modelValue:b.state.useCash,"onUpdate:modelValue":e[2]||(e[2]=function(t){return b.state.useCash=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(n["j"])(O,{title:"积分支付",value:"（"+t.profile.point+" 可用）"},{"right-icon":i((function(){return[d,Object(n["j"])(m,{modelValue:b.state.usePoint,"onUpdate:modelValue":e[3]||(e[3]=function(t){return b.state.usePoint=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(n["j"])(O,{title:"下单时间",value:a.dt},null,8,["value"]),Object(n["j"])(y,{class:"submit",type:"primary",round:"",block:"",onClick:f.handlePay},{default:i((function(){return[l]})),_:1},8,["onClick"]),Object(n["j"])(y,{type:"success",icon:"wechat-pay",round:"",block:"",plain:"",onClick:f.handleWxPay},{default:i((function(){return[p]})),_:1},8,["onClick"])])]})),_:1},8,["show"]),Object(n["j"])(C,{show:b.state.showCoupon,"onUpdate:show":e[5]||(e[5]=function(t){return b.state.showCoupon=t}),title:"选择优惠券",closeable:!1,"close-on-popstate":!0,"close-on-click-overlay":!1},{default:i((function(){return[Object(n["j"])(v,{tag:a.tag,amount:a.fee,inpay:"",onOnChoose:f.handleCoupon},null,8,["tag","amount","onOnChoose"])]})),_:1},8,["show"])]})),_:1})})),b=a("13ab"),f=(a("de05"),a("6b0d")),j=a.n(f);const O=j()(b["a"],[["render",h],["__scopeId","data-v-b45cb682"]]);e["default"]=O},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),s=a("94ca"),o=a("6eeb"),c=a("5135"),u=a("c6b6"),r=a("7156"),d=a("c04e"),l=a("d039"),p=a("7c73"),h=a("241c").f,b=a("06cf").f,f=a("9bf2").f,j=a("58a8").trim,O="Number",m=i[O],y=m.prototype,g=u(p(y))==O,v=function(t){var e,a,n,i,s,o,c,u,r=d(t,!1);if("string"==typeof r&&r.length>2)if(r=j(r),e=r.charCodeAt(0),43===e||45===e){if(a=r.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(r.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+r}for(s=r.slice(2),o=s.length,c=0;c<o;c++)if(u=s.charCodeAt(c),u<48||u>i)return NaN;return parseInt(s,n)}return+r};if(s(O,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var C,w=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof w&&(g?l((function(){y.valueOf.call(a)})):u(a)!=O)?r(new m(v(e)),a,w):v(e)},k=n?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;k.length>S;S++)c(m,C=k[S])&&!c(w,C)&&f(w,C,b(m,C));w.prototype=y,y.constructor=w,o(i,O,w)}},bc21:function(t,e,a){"use strict";a.r(e);a("b0c0");var n=a("7a23"),i=Object(n["V"])("data-v-4a5bae41");Object(n["C"])("data-v-4a5bae41");var s={class:"main"},o={key:0},c=Object(n["i"])(" ");Object(n["A"])();var u=i((function(t,e,a,u,r,d){var l=Object(n["H"])("van-switch"),p=Object(n["H"])("van-cell"),h=Object(n["H"])("van-stepper"),b=Object(n["H"])("van-card"),f=Object(n["H"])("van-submit-bar"),j=Object(n["H"])("pay"),O=Object(n["H"])("BaseLayout");return Object(n["z"])(),Object(n["g"])(O,{title:"确认订单"},{default:i((function(){return[Object(n["j"])("div",s,[r.state.digiCard?Object(n["h"])("",!0):(Object(n["z"])(),Object(n["g"])("div",o,[Object(n["j"])(p,{title:"生成提货卡",border:!1},{"right-icon":i((function(){return[c,Object(n["j"])(l,{modelValue:r.state.pickCard,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.state.pickCard=t}),size:"24"},null,8,["modelValue"])]})),_:1}),Object(n["S"])(Object(n["j"])(p,{title:"提货卡数量"},{"right-icon":i((function(){return[Object(n["j"])(h,{modelValue:r.state.number,"onUpdate:modelValue":e[2]||(e[2]=function(t){return r.state.number=t}),theme:"round","button-size":"22",max:9999},null,8,["modelValue"])]})),_:1},512),[[n["O"],r.state.pickCard]]),Object(n["S"])(Object(n["j"])("div",null,[r.state.addr&&r.state.addr.name?(Object(n["z"])(),Object(n["g"])(p,{key:0,class:"card",size:"large",icon:"location",title:r.state.addr.name+" "+r.state.addr.mobile,label:r.state.addr.province+r.state.addr.city+r.state.addr.county+r.state.addr.address,to:"/my/address/choose?target="+d.target,"is-link":"",center:""},null,8,["title","label","to"])):(Object(n["z"])(),Object(n["g"])(p,{key:1,class:"card",size:"large",title:"新增收货地址",to:"/my/address/add?target="+d.target,"is-link":""},null,8,["to"]))],512),[[n["O"],!r.state.pickCard]])])),(Object(n["z"])(!0),Object(n["g"])(n["a"],null,Object(n["F"])(r.state.list,(function(t,e){return Object(n["z"])(),Object(n["g"])(b,{class:"item",key:e,title:t.title,desc:t.spec,thumb:t.image,price:t.price,num:t.num},null,8,["title","desc","thumb","price","num"])})),128)),Object(n["j"])(f,{label:"总金额：","button-text":"结算",style:{bottom:"50px"},price:100*d.total,disabled:0==d.total,onSubmit:d.buy},null,8,["price","disabled","onSubmit"]),Object(n["j"])(j,Object(n["q"])(r.state.payData,{show:r.state.payShow,"onUpdate:show":e[3]||(e[3]=function(t){return r.state.payShow=t}),onOnFinish:d.handlePay}),null,16,["show","onOnFinish"])])]})),_:1})})),r=a("c11d"),d=(a("6884"),a("6b0d")),l=a.n(d);const p=l()(r["a"],[["render",u],["__scopeId","data-v-4a5bae41"]]);e["default"]=p},bc3f:function(t,e,a){"use strict";a("6f82")},c11d:function(t,e,a){"use strict";(function(t){var n=a("5530"),i=(a("a9e3"),a("7a23")),s=a("5502"),o=a("2824"),c=a("a6e6");e["a"]={components:{BaseLayout:o["a"],Pay:c["default"]},props:{direct:{type:[String,Number],default:0},digital:{type:[String,Number],default:0},aid:{type:[String,Number],default:0}},data:function(){var t=Object(i["D"])({addr:{},list:[],number:1,amount:0,pickCard:!1,digiCard:!1,payData:{},payShow:!1});return{state:t}},created:function(){var e=this;this.state.digiCard=this.digital>0,this.$http.get("/mall/addresslist").then((function(a){for(var n in a)if(0==e.aid&&2==a[n].status||a[n].id==e.aid){e.state.addr=a[n];break}t.isEmpty(e.state.addr)&&!t.isEmpty(a)&&(e.state.addr=a[0])})),this.$http.get("/mall/cartlist?status="+(parseInt(this.direct)+1)).then((function(t){e.state.list=t;var a=0;for(var n in e.state.list)a+=e.state.list[n].price*e.state.list[n].num;e.state.amount=a}))},computed:Object(n["a"])({target:function(){return escape(this.$route.fullPath)},total:function(){return this.state.pickCard?this.state.amount*this.state.number:this.state.amount}},Object(s["d"])(["profile"])),methods:{buy:function(){var e=this;if(t.isEmpty(this.state.addr)&&!this.state.pickCard&&!this.state.digiCard)return this.$toast("请先选择收货地址");var a=0;this.state.pickCard&&(a=this.state.number),this.state.digiCard&&(a=-1),this.$http.post("/mall/checkout?aid="+(this.state.pickCard||this.state.digiCard?0:this.state.addr.id)+"&card="+a+"&direct="+this.direct).then((function(t){e.state.payData=Object(n["a"])(Object(n["a"])({},t),{},{json:JSON.stringify(t)}),e.state.payShow=!0}))},handlePay:function(t){var e=this;this.state.payShow=!1,this.$dialog.alert({title:"订单支付"+(t?"成功":"失败"),message:"请在“我的订单”中查看详细情况",theme:"round-button"}).then((function(){e.$router.push("/my/order")}))}}}}).call(this,a("81b0"))},de05:function(t,e,a){"use strict";a("316e")}}]);