(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-088fc423","chunk-2c4d20b5"],{"07ac":function(t,e,n){var a=n("23e7"),i=n("6f53").values;a({target:"Object",stat:!0},{values:function(t){return i(t)}})},"13ab":function(t,e,n){"use strict";(function(t){var a=n("53ca"),i=n("5530"),o=(n("a9e3"),n("7a23")),c=n("5502"),s=n("2824"),u=n("922d");e["a"]={components:{BaseLayout:s["a"],Coupon:u["default"]},name:"Pay",props:{show:{type:Boolean,default:!1},json:{type:String,default:""},oid:{type:[String,Number],default:""},fee:{type:[String,Number],default:0},subject:{type:[String,Number],default:""},tag:{type:[String,Number],default:""},attach:{type:String,default:""},notify:{type:String,default:""},exprie:{type:[String,Number],default:0},dt:{type:String,default:""}},emits:["update:show"],data:function(){var t=Object(o["D"])({useCash:!0,usePoint:!0,type:"",cid:"",pid:"",showCoupon:!1,coupon:{id:-1},discount:""});return{state:t}},create:function(){this.$init()},computed:Object(i["a"])({popup:{get:function(){return this.show},set:function(t){this.state.showCoupon=!1,this.$emit("update:show",t)}}},Object(c["d"])(["profile"])),methods:Object(i["a"])({handleCoupon:function(t){this.state.showCoupon=!1,this.state.cid="",this.state.discount=0,t&&(this.state.cid=t.id,this.state.discount=Math.round(100*t.save)/100)},handlePay:function(){return this.state.useCash||this.state.usePoint?this.state.useCash&&!this.state.usePoint&&(this.state.type="cash",this.fee-this.state.discount-parseFloat(this.profile.cash)>0)?this.$toast("余额不足支付"):!this.state.useCash&&this.state.usePoint&&(this.state.type="point",this.fee-this.state.discount-parseFloat(this.profile.point)>0)?this.$toast("积分不足支付"):this.state.useCash&&this.state.usePoint&&(this.state.type="",this.fee-this.state.discount-parseFloat(this.profile.cash)-parseFloat(this.profile.point)>0)?this.$toast("账户资产不足，请使用微信支付"):void this.pay():this.$toast("至少选择一种支付方式")},handleWxPay:function(){var t=this;this.$http.post("/wechat/pay?fee="+this.fee+"&name="+this.subject+"&attach="+this.attach).then((function(e){t.state.popup=!1,t.state.pid=e.pid,e.code&&t.$dialog.confirm({title:"请用微信扫码付款",message:"<img src='http://api.qrserver.com/v1/create-qr-code/?size=250x250&ecc=H&margin=10&data="+e.code+"'>",theme:"round-button",confirmButtonText:"我已完成付款",allowHtml:!0}).then(t.wxpayCheck)||WeixinJSBridge&&WeixinJSBridge.invoke("getBrandWCPayRequest",e,(function(e){return"get_brand_wcpay_request:ok"!=e.err_msg?t.$dialog.alert({message:"微信支付失败，请重试！"}):t.wxpayCheck()}))}))},wxpayCheck:function(){var e=this;this.popup&&(this.$toast.loading({message:"订单处理中...",forbidClick:!0}),setTimeout((function(){0==document.querySelector("#pay").getBoundingClientRect()["height"]&&(e.popup=!1),e.$http.post("/wechat/payCheck?id="+e.state.pid).then((function(n){return t.isEmpty(n)||Object(a["a"])(n.attach)!=e.attach?e.wxpayCheck():(e.popup=!1,e.state.type="wxpay",e.pay())}))}),5e3))},pay:function(){var t=this;this.$http.post("/pay?order="+this.json+"&type="+this.state.type+"&cid="+this.state.cid+"&pid="+this.state.pid).then((function(e,n){t.$init(),t.popup=!1,t.$emit("onFinish",!0,n,e)})).catch((function(e){t.popup=!1,t.$emit("onFinish",!1,e.msg)}))}},Object(c["c"])(["auth"]))}}).call(this,n("81b0"))},"2fed":function(t,e,n){"use strict";n("4631")},"316e":function(t,e,n){},4631:function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),i=n("5899"),o="["+i+"]",c=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),u=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},"6f53":function(t,e,n){var a=n("83ab"),i=n("df75"),o=n("fc6a"),c=n("d1e7").f,s=function(t){return function(e){var n,s=o(e),u=i(s),r=u.length,l=0,p=[];while(r>l)n=u[l++],a&&!c.call(s,n)||p.push(t?[n,s[n]]:s[n]);return p}};t.exports={entries:s(!0),values:s(!1)}},"6f82":function(t,e,n){},7156:function(t,e,n){var a=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var o,c;return i&&"function"==typeof(o=e.constructor)&&o!==n&&a(c=o.prototype)&&c!==n.prototype&&i(t,c),t}},"922d":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),i=Object(a["V"])("data-v-1aaec02a");Object(a["C"])("data-v-1aaec02a");var o={class:"toolbar"},c=Object(a["i"])("不使用优惠券"),s=Object(a["i"])("转赠选中的优惠券"),u=Object(a["i"])("转赠");Object(a["A"])();var r=i((function(t,e,n,r,l,p){var d=Object(a["H"])("van-button"),h=Object(a["H"])("van-coupon-list"),b=Object(a["H"])("van-field"),f=Object(a["H"])("van-action-sheet"),j=Object(a["H"])("BaseLayout");return Object(a["z"])(),Object(a["g"])(j,{title:"我的优惠券",navbar:n.inpay?"hide":"show"},{default:i((function(){return[Object(a["j"])("div",o,[Object(a["S"])(Object(a["j"])(d,{type:"primary",block:"",onClick:e[1]||(e[1]=function(t){return p.onChange(-1)})},{default:i((function(){return[c]})),_:1},512),[[a["O"],n.inpay]]),Object(a["S"])(Object(a["j"])(d,{type:"primary",block:"",onClick:e[2]||(e[2]=function(t){return l.state.popup=!0})},{default:i((function(){return[s]})),_:1},512),[[a["O"],!n.inpay&&l.state.index>-1]])]),Object(a["j"])(h,{class:"list","displayed-coupon-index":0,code:l.state.code,"onUpdate:code":e[3]||(e[3]=function(t){return l.state.code=t}),coupons:l.state.list1,"disabled-coupons":l.state.list0,"chosen-coupon":l.state.index,"show-close-button":!1,onChange:p.onChange,onExchange:p.onExchange},null,8,["code","coupons","disabled-coupons","chosen-coupon","onChange","onExchange"]),Object(a["j"])(f,{show:l.state.popup,"onUpdate:show":e[5]||(e[5]=function(t){return l.state.popup=t}),title:"转赠优惠券",round:"",closeable:""},{default:i((function(){return[Object(a["j"])(b,{type:"text",border:1,modelValue:l.state.account,"onUpdate:modelValue":e[4]||(e[4]=function(t){return l.state.account=t}),"input-align":"center",clearable:"",placeholder:"请输入接收人UID或手机号",style:{margin:"20px 0"}},null,8,["modelValue"]),Object(a["j"])(d,{round:"",block:"",type:"primary",style:{margin:"10px 0"},onClick:p.onTransfer},{default:i((function(){return[u]})),_:1},8,["onClick"])]})),_:1},8,["show"])]})),_:1},8,["navbar"])})),l=n("5530"),p=(n("a9e3"),n("2824")),d={components:{BaseLayout:p["a"]},name:"Coupon",props:{tag:{type:String,default:""},amount:{type:[String,Number],default:0},inpay:{type:Boolean,default:!1}},data:function(){var t=Object(a["D"])({code:"",account:"",list0:[],list1:[],index:-1,popup:!1});return{state:t}},created:function(){this.onLoad()},methods:{onLoad:function(){var t=this;this.state.popup=!1,this.state.list0=[],this.state.list1=[],this.$http.get("/coupon/query?tag="+this.tag+"&amount="+this.amount).then((function(e){for(var n in e){var a=e[n];a=Object(l["a"])(Object(l["a"])({},a),{name:a.title,condition:"满 "+a.amount+" 元\n"+(1==a.type?"减":"打")+" "+a.discount+" "+(1==a.type?"元":"折"),startAt:new Date(a.dt_start).getTime()/1e3,endAt:new Date(a.dt_end).getTime()/1e3,description:a.intro,valueDesc:a.discount,unitDesc:1==a.type?"元":"折"}),a["status"]>0&&t.state.list0.push(a)||t.state.list1.push(a)}}))},onChange:function(t){this.state.index=t,this.inpay&&this.$emit("onChoose",this.state.list1[t]||null)},onExchange:function(){this.$http.post("/coupon/exchange?code="+this.state.code).then(this.onLoad)},onTransfer:function(){this.state.account.length>=3&&this.$http.post("/coupon/transfer?u="+this.state.account).then(this.onLoad)}}},h=(n("bc3f"),n("6b0d")),b=n.n(h);const f=b()(d,[["render",r],["__scopeId","data-v-1aaec02a"]]);e["default"]=f},a6e6:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),i=Object(a["V"])("data-v-b45cb682");Object(a["C"])("data-v-b45cb682");var o=Object(a["j"])("div",{class:"title"},"收银台",-1),c={class:"box"},s={id:"pay",class:"fee"},u={class:"subject"},r=Object(a["i"])(" "),l=Object(a["i"])(" "),p=Object(a["i"])("立即付款"),d=Object(a["i"])("使用微信支付");Object(a["A"])();var h=i((function(t,e,n,h,b,f){var j=Object(a["H"])("van-icon"),O=Object(a["H"])("van-cell"),v=Object(a["H"])("van-switch"),y=Object(a["H"])("van-button"),g=Object(a["H"])("van-popup"),m=Object(a["H"])("Coupon"),w=Object(a["H"])("van-action-sheet"),C=Object(a["H"])("BaseLayout");return Object(a["z"])(),Object(a["g"])(C,{title:"收银台",navbar:"hide"},{default:i((function(){return[Object(a["j"])(g,{show:f.popup,"onUpdate:show":e[4]||(e[4]=function(t){return f.popup=t}),position:"bottom",style:{height:"100%"},"close-on-click-overlay":!1,"close-on-popstate":!0,"safe-area-inset-bottom":"",closeable:""},{default:i((function(){return[o,Object(a["j"])("div",c,[Object(a["j"])("div",s,[Object(a["j"])(j,{name:"points",size:"20"}),Object(a["i"])(" "+Object(a["L"])(n.fee),1)]),Object(a["j"])("div",u,Object(a["L"])(n.subject),1),Object(a["j"])(O,{title:"订单编号",value:n.oid},null,8,["value"]),Object(a["S"])(Object(a["j"])(O,{title:"优惠券",value:b.state.discount?"优惠 "+b.state.discount:"","is-link":"",onClick:e[1]||(e[1]=function(t){return b.state.showCoupon=!0})},null,8,["value"]),[[a["O"],n.tag.length>0]]),Object(a["j"])(O,{title:"余额支付",value:"（"+t.profile.cash+" 可用）"},{"right-icon":i((function(){return[r,Object(a["j"])(v,{modelValue:b.state.useCash,"onUpdate:modelValue":e[2]||(e[2]=function(t){return b.state.useCash=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(a["j"])(O,{title:"积分支付",value:"（"+t.profile.point+" 可用）"},{"right-icon":i((function(){return[l,Object(a["j"])(v,{modelValue:b.state.usePoint,"onUpdate:modelValue":e[3]||(e[3]=function(t){return b.state.usePoint=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(a["j"])(O,{title:"下单时间",value:n.dt},null,8,["value"]),Object(a["j"])(y,{class:"submit",type:"primary",round:"",block:"",onClick:f.handlePay},{default:i((function(){return[p]})),_:1},8,["onClick"]),Object(a["j"])(y,{type:"success",icon:"wechat-pay",round:"",block:"",plain:"",onClick:f.handleWxPay},{default:i((function(){return[d]})),_:1},8,["onClick"])])]})),_:1},8,["show"]),Object(a["j"])(w,{show:b.state.showCoupon,"onUpdate:show":e[5]||(e[5]=function(t){return b.state.showCoupon=t}),title:"选择优惠券",closeable:!1,"close-on-popstate":!0,"close-on-click-overlay":!1},{default:i((function(){return[Object(a["j"])(m,{tag:n.tag,amount:n.fee,inpay:"",onOnChoose:f.handleCoupon},null,8,["tag","amount","onOnChoose"])]})),_:1},8,["show"])]})),_:1})})),b=n("13ab"),f=(n("de05"),n("6b0d")),j=n.n(f);const O=j()(b["a"],[["render",h],["__scopeId","data-v-b45cb682"]]);e["default"]=O},a9e3:function(t,e,n){"use strict";var a=n("83ab"),i=n("da84"),o=n("94ca"),c=n("6eeb"),s=n("5135"),u=n("c6b6"),r=n("7156"),l=n("c04e"),p=n("d039"),d=n("7c73"),h=n("241c").f,b=n("06cf").f,f=n("9bf2").f,j=n("58a8").trim,O="Number",v=i[O],y=v.prototype,g=u(d(y))==O,m=function(t){var e,n,a,i,o,c,s,u,r=l(t,!1);if("string"==typeof r&&r.length>2)if(r=j(r),e=r.charCodeAt(0),43===e||45===e){if(n=r.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(r.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+r}for(o=r.slice(2),c=o.length,s=0;s<c;s++)if(u=o.charCodeAt(s),u<48||u>i)return NaN;return parseInt(o,a)}return+r};if(o(O,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var w,C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(g?p((function(){y.valueOf.call(n)})):u(n)!=O)?r(new v(m(e)),n,C):m(e)},k=a?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;k.length>x;x++)s(v,w=k[x])&&!s(C,w)&&f(C,w,b(v,w));C.prototype=y,y.constructor=C,c(i,O,C)}},bc3f:function(t,e,n){"use strict";n("6f82")},de05:function(t,e,n){"use strict";n("316e")},fbe7:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),i=Object(a["V"])("data-v-240263d0");Object(a["C"])("data-v-240263d0");var o={class:"panel"},c=Object(a["j"])("div",{class:"title"},"全国手机话费充值",-1),s={class:"list"},u={class:"value"},r=Object(a["i"])(" 元"),l={class:"price"},p=Object(a["j"])("ul",{class:"notice"},[Object(a["j"])("dt",null,"充值说明"),Object(a["j"])("dd",null,"1、本页面提供话费充值专享优惠服务；快充业务在支付成功后预计30分钟内话费到账；慢充业务在支付成功后一般2-4小时话费到账，最晚72小时内到账，请留意【充值成功通知】短信。"),Object(a["j"])("dd",null,"2、如遇高峰或其他问题未能充值到账，系统将自动原路退款，敬请谅解。"),Object(a["j"])("dd",null,"3、携号转网、副卡不支持充值，下单30分钟内请联系客服申请退款，如超时恕不退款。"),Object(a["j"])("dd",null,"4、因本业务为第三方代充值服务，故无法提供充值发票，有开票需求的请勿充值。"),Object(a["j"])("dd",null,"5、本业务由“福鲤社”提供技术支持，如有疑问请点击页面左下角联系客服。"),Object(a["j"])("dd",{class:"recommend"},"** 企业团充可享更高折扣，详询客服 **")],-1);Object(a["A"])();var d=i((function(t,e,n,d,h,b){var f=Object(a["H"])("van-cell"),j=Object(a["H"])("van-tab"),O=Object(a["H"])("van-tabs"),v=Object(a["H"])("van-action-bar-icon"),y=Object(a["H"])("van-action-bar-button"),g=Object(a["H"])("van-action-bar"),m=Object(a["H"])("van-popup"),w=Object(a["H"])("pay"),C=Object(a["H"])("BaseLayout");return Object(a["z"])(),Object(a["g"])(C,{title:"话费充值",navbar:"hide",bg:"linear-gradient(180deg, var(--van-tabs-default-color), #F66 30%, #F6F6F6 50%, #F6F6F6)"},{default:i((function(){return[Object(a["j"])("div",o,[c,Object(a["S"])(Object(a["j"])("input",{class:"mobile",type:"mobile","onUpdate:modelValue":e[1]||(e[1]=function(t){return h.state.mobile=t}),placeholder:"请输入手机号码"},null,512),[[a["N"],h.state.mobile]]),Object(a["j"])(O,{class:"tabs",type:"card",active:h.state.index,"onUpdate:active":e[2]||(e[2]=function(t){return h.state.index=t}),onChange:b.handleTab},{default:i((function(){return[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(h.state.spu,(function(t,e){return Object(a["z"])(),Object(a["g"])(j,{key:e,title:t.title},{default:i((function(){return[Object(a["j"])("div",s,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(h.state.sku,(function(t,e){return Object(a["z"])(),Object(a["g"])(f,{class:["goods",{active:h.state.api==e}],key:e,onClick:function(t){return h.state.api=e}},{title:i((function(){return[Object(a["j"])("span",u,Object(a["L"])(parseInt(t.face_price)),1),r]})),label:i((function(){return[Object(a["j"])("span",l,"折扣价 ￥"+Object(a["L"])(t.sale_price),1)]})),_:2},1032,["class","onClick"])})),128))])]})),_:2},1032,["title"])})),128))]})),_:1},8,["active","onChange"]),p]),Object(a["j"])(g,{class:"bar"},{default:i((function(){return[Object(a["j"])(v,{icon:"chat-o",text:"客服",onClick:e[3]||(e[3]=function(t){return h.state.popup=!0})}),Object(a["j"])(v,{icon:"cash-on-deliver",text:"订单",onClick:e[4]||(e[4]=function(e){return t.$router.push("/digital/order?cid="+h.cid)})}),Object(a["j"])(y,{type:"danger",text:"立即充值",onClick:b.handleSubmit},null,8,["onClick"])]})),_:1}),Object(a["j"])(m,{show:h.state.popup,"onUpdate:show":e[5]||(e[5]=function(t){return h.state.popup=t}),position:"top",style:{height:"50%",padding:"20px"}},{default:i((function(){return[Object(a["j"])("div",{class:"contact",innerHTML:t.config.contact},null,8,["innerHTML"])]})),_:1},8,["show"]),Object(a["j"])(w,Object(a["q"])(h.state.payData,{show:h.state.payShow,"onUpdate:show":e[6]||(e[6]=function(t){return h.state.payShow=t}),onOnFinish:b.handlePay}),null,16,["show","onOnFinish"])]})),_:1})})),h=n("5530"),b=(n("ac1f"),n("5319"),n("07ac"),n("5502")),f=n("2824"),j=n("a6e6"),O={components:{BaseLayout:f["a"],Pay:j["default"]},data:function(){var t=3577,e=Object(a["D"])({mobile:"",id:0,api:"",index:0,spu:[],sku:[],payData:{},payShow:!1,popup:!1});return{cid:t,state:e}},created:function(){var t=this;if(!this.authorized)return this.auth(null),window.location.replace("http://api.fuchijihua.com/wechat/?host="+(/(192|test)/.test(window.location.host)?window.location.host:"")+"&page="+escape(this.$route.fullPath));this.$http.get("/digital/list?cid="+this.cid).then((function(e){var n=Object.values(e)[0];for(var a in n)n[a]["spec"]=JSON.parse(n[a]["spec"]);t.state.spu=n,t.handleTab()}))},computed:Object(h["a"])(Object(h["a"])({},Object(b["d"])(["config","profile"])),Object(b["b"])(["authorized"])),methods:Object(h["a"])({handleTab:function(){this.state.id=this.state.spu[this.state.index]["id"],this.state.sku=this.state.spu[this.state.index]["spec"]},handleSubmit:function(){var t=this;return this.state.id<=0||this.state.api.length<=5?this.$toast("请选择充值项目"):/^1[\d]{10}$/.test(this.state.mobile)?void this.$http.post("/digital/checkout?id="+this.state.id+"&api="+this.state.api+"&account="+this.state.mobile).then((function(e){t.state.payData=Object(h["a"])(Object(h["a"])({},e),{},{json:JSON.stringify(e)}),t.state.payShow=!0})):this.$toast("请填写正确的手机号")},handlePay:function(t){this.state.payShow=!1,t&&this.$dialog.alert({title:"订单已生成",message:"请点击下方“订单记录”查看到账情况",theme:"round-button"})}},Object(b["c"])(["auth"]))},v=(n("2fed"),n("6b0d")),y=n.n(v);const g=y()(O,[["render",d],["__scopeId","data-v-240263d0"]]);e["default"]=g}}]);