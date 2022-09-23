(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec81fc58"],{"13ab":function(t,e,n){"use strict";(function(t){var o=n("53ca"),a=n("5530"),s=(n("a9e3"),n("7a23")),i=n("5502"),c=n("2824"),u=n("922d");e["a"]={components:{BaseLayout:c["a"],Coupon:u["default"]},name:"Pay",props:{show:{type:Boolean,default:!1},json:{type:String,default:""},oid:{type:[String,Number],default:""},fee:{type:[String,Number],default:0},subject:{type:[String,Number],default:""},tag:{type:[String,Number],default:""},attach:{type:String,default:""},notify:{type:String,default:""},exprie:{type:[String,Number],default:0},dt:{type:String,default:""}},emits:["update:show"],data:function(){var t=Object(s["E"])({useCash:!0,usePoint:!0,type:"",cid:"",pid:"",showCoupon:!1,haveCoupon:"",discount:0});return{state:t}},create:function(){this.$init()},computed:Object(a["a"])({popup:{get:function(){return this.show},set:function(t){this.state.showCoupon=!1,this.$emit("update:show",t)}}},Object(i["d"])(["profile"])),watch:{popup:function(e,n){var o=this;0==e||t.isEmpty(this.tag)||this.$http.get("/coupon/query?tag="+this.tag+"&amount="+this.fee).then((function(e){var n=t.size(e);o.state.showCoupon=n>0,o.state.haveCoupon=n>0?"可用 "+n+" 张":"暂无可用"}))}},methods:Object(a["a"])({handleCoupon:function(t){this.state.showCoupon=!1,this.state.cid="",this.state.discount=0,t&&(this.state.cid=t.id,this.state.discount=Math.round(100*t.save)/100)},handlePay:function(){return this.state.useCash||this.state.usePoint?this.state.useCash&&!this.state.usePoint&&(this.state.type="cash",this.fee-this.state.discount-parseFloat(this.profile.cash)>0)?this.$toast("余额不足支付"):!this.state.useCash&&this.state.usePoint&&(this.state.type="point",this.fee-this.state.discount-parseFloat(this.profile.point)>0)?this.$toast("积分不足支付"):this.state.useCash&&this.state.usePoint&&(this.state.type="",this.fee-this.state.discount-parseFloat(this.profile.cash)-parseFloat(this.profile.point)>0)?this.$toast("账户资产不足，请使用微信支付"):void this.pay():this.$toast("至少选择一种支付方式")},handleWxPay:function(){var t=this;this.$http.post("/wechat/pay?fee="+this.fee+"&name="+this.subject+"&attach="+this.attach).then((function(e){t.state.popup=!1,t.state.pid=e.pid,e.code?t.$dialog.confirm({title:"请用微信扫码付款",message:"<img src='http://api.qrserver.com/v1/create-qr-code/?size=250x250&ecc=H&margin=10&data="+e.code+"'>",theme:"round-button",confirmButtonText:"我已完成付款",allowHtml:!0}).then(t.wxpayCheck):WeixinJSBridge&&WeixinJSBridge.invoke("getBrandWCPayRequest",e,(function(e){return"get_brand_wcpay_request:ok"!=e.err_msg?t.$dialog.alert({message:"微信支付失败，请重试！"}):(t.$http.post("/dong",{title:"微信支付订单："+t.state.pid,content:t.json}),t.wxpayCheck())}))}))},wxpayCheck:function(){var e=this;this.popup&&(this.$toast.loading({message:"订单处理中...",forbidClick:!0}),setTimeout((function(){0==document.querySelector("#pay").getBoundingClientRect()["height"]&&(e.popup=!1),e.$http.post("/wechat/payCheck?id="+e.state.pid).then((function(n){return t.isEmpty(n)||Object(o["a"])(n.attach)!=e.attach?e.wxpayCheck():(e.popup=!1,e.state.type="wxpay",e.pay())}))}),5e3))},pay:function(){var t=this;this.$http.post("/pay?order="+this.json+"&type="+this.state.type+"&cid="+this.state.cid+"&pid="+this.state.pid).then((function(e){t.$init(),t.popup=!1,t.$emit("onFinish",!0,e)})).catch((function(e){t.popup=!1,t.$emit("onFinish",!1,e.msg)}))}},Object(i["c"])(["auth"]))}}).call(this,n("81b0"))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var o=n("1d80"),a=n("5899"),s="["+a+"]",i=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,n){var o=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var s,i;return a&&"function"==typeof(s=e.constructor)&&s!==n&&o(i=s.prototype)&&i!==n.prototype&&a(t,i),t}},"887a":function(t,e,n){"use strict";n("f589")},"922d":function(t,e,n){"use strict";n.r(e);var o=n("7a23"),a=Object(o["X"])("data-v-4bd1267c");Object(o["D"])("data-v-4bd1267c");var s=Object(o["j"])(" 兑换"),i={class:"toolbar"},c=Object(o["j"])("不使用优惠券"),u=Object(o["j"])("转赠选中的优惠券"),r=Object(o["j"])("转赠"),p={class:"form"},l=Object(o["j"])(" 兑换优惠券 "),h=Object(o["j"])("立即兑换");Object(o["B"])();var d=a((function(t,e,n,d,f,b){var j=Object(o["I"])("van-icon"),g=Object(o["I"])("van-button"),y=Object(o["I"])("van-coupon-list"),O=Object(o["I"])("van-field"),m=Object(o["I"])("van-action-sheet"),v=Object(o["I"])("van-popup"),k=Object(o["I"])("BaseLayout");return Object(o["A"])(),Object(o["g"])(k,{title:"我的优惠券",navbar:n.inpay?"hide":"show",height:0,onClickBack:e[9]||(e[9]=function(e){return t.$router.push("/my")})},{more:a((function(){return[Object(o["k"])(j,{class:"more",name:"gift",onClick:e[1]||(e[1]=function(t){return f.state.show=!0})},{default:a((function(){return[s]})),_:1})]})),default:a((function(){return[Object(o["k"])("div",i,[Object(o["U"])(Object(o["k"])(g,{type:"primary",block:"",onClick:e[2]||(e[2]=function(t){return b.onChange(-1)})},{default:a((function(){return[c]})),_:1},512),[[o["Q"],n.inpay]]),Object(o["U"])(Object(o["k"])(g,{type:"primary",block:"",onClick:e[3]||(e[3]=function(t){return f.state.popup=!0})},{default:a((function(){return[u]})),_:1},512),[[o["Q"],!n.inpay&&f.state.index>-1]])]),Object(o["k"])(y,{class:"list","displayed-coupon-index":0,code:f.state.code,"onUpdate:code":e[4]||(e[4]=function(t){return f.state.code=t}),coupons:f.state.list1,"disabled-coupons":f.state.list0,"chosen-coupon":f.state.index,"show-exchange-bar":n.inpay,"show-close-button":!1,onChange:b.onChange,onExchange:b.onExchange},null,8,["code","coupons","disabled-coupons","chosen-coupon","show-exchange-bar","onChange","onExchange"]),Object(o["k"])(m,{show:f.state.popup,"onUpdate:show":e[6]||(e[6]=function(t){return f.state.popup=t}),title:"转赠优惠券",round:"",closeable:""},{default:a((function(){return[Object(o["k"])(O,{type:"text",border:1,modelValue:f.state.account,"onUpdate:modelValue":e[5]||(e[5]=function(t){return f.state.account=t}),"input-align":"center",clearable:"",placeholder:"请输入接收人UID或手机号",style:{margin:"20px 0"}},null,8,["modelValue"]),Object(o["k"])(g,{round:"",block:"",type:"primary",style:{margin:"10px 0"},onClick:b.onTransfer},{default:a((function(){return[r]})),_:1},8,["onClick"])]})),_:1},8,["show"]),Object(o["k"])(v,{style:{width:"80%"},show:f.state.show,"onUpdate:show":e[8]||(e[8]=function(t){return f.state.show=t}),round:"",closeable:""},{default:a((function(){return[Object(o["k"])("div",p,[l,Object(o["k"])(O,{type:"text",border:1,modelValue:f.state.code,"onUpdate:modelValue":e[7]||(e[7]=function(t){return f.state.code=t}),"input-align":"right",clearable:"",label:"兑换码：",placeholder:"请输入",style:{margin:"20px 0"}},null,8,["modelValue"]),Object(o["k"])(g,{round:"",block:"",color:"#F66",onClick:b.onExchange},{default:a((function(){return[h]})),_:1},8,["onClick"])])]})),_:1},8,["show"])]})),_:1},8,["navbar"])})),f=n("5530"),b=(n("a9e3"),n("2824")),j={components:{BaseLayout:b["a"]},name:"Coupon",props:{tag:{type:String,default:""},amount:{type:[String,Number],default:0},inpay:{type:Boolean,default:!1},code:{type:String,default:""}},data:function(){var t=Object(o["E"])({code:"",account:"",list0:[],list1:[],index:-1,popup:!1,show:!1});return{state:t}},created:function(){this.onLoad(),this.code.length>=8&&(this.state.show=!0,this.state.code=this.code)},methods:{onLoad:function(){var t=this;this.state.popup=!1,this.state.list0=[],this.state.list1=[],this.$http.get("/coupon/query?tag="+this.tag+"&amount="+this.amount).then((function(e){for(var n in e){var o=e[n];o=Object(f["a"])(Object(f["a"])({},o),{name:o.title,condition:"满 ￥"+o.amount+" 可用",startAt:new Date(o.dt_start).getTime()/1e3,endAt:new Date(o.dt_end).getTime()/1e3,valueDesc:o.discount,unitDesc:1==o.type?"元":"折"}),o["status"]>0&&t.state.list0.push(o)||t.state.list1.push(o)}}))},onChange:function(t){this.state.index=t,this.inpay&&this.$emit("onChoose",this.state.list1[t]||null)},onExchange:function(){if(this.state.code.length<8)return this.$toast("请输入正确的兑换码");this.$http.post("/coupon/exchange?code="+this.state.code).then(this.onLoad),this.state.code=""},onTransfer:function(){this.state.account.length>=1&&this.$http.post("/coupon/transfer?u="+this.state.account+"&code="+this.state.list1[this.state.index]["id"]).then(this.onLoad)}}},g=(n("887a"),n("6b0d")),y=n.n(g);const O=y()(j,[["render",d],["__scopeId","data-v-4bd1267c"]]);e["default"]=O},"971e":function(t,e,n){"use strict";n("b5b1")},a6e6:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),a=Object(o["X"])("data-v-ee3ff5f0");Object(o["D"])("data-v-ee3ff5f0");var s=Object(o["k"])("div",{class:"title"},"收银台",-1),i={class:"box"},c={id:"pay",class:"fee"},u={class:"subject"},r=Object(o["j"])(" "),p=Object(o["j"])(" "),l=Object(o["j"])("立即付款"),h=Object(o["j"])("使用微信支付");Object(o["B"])();var d=a((function(t,e,n,d,f,b){var j=Object(o["I"])("van-icon"),g=Object(o["I"])("van-cell"),y=Object(o["I"])("van-switch"),O=Object(o["I"])("van-button"),m=Object(o["I"])("van-popup"),v=Object(o["I"])("Coupon"),k=Object(o["I"])("van-action-sheet"),w=Object(o["I"])("BaseLayout");return Object(o["A"])(),Object(o["g"])(w,{title:"收银台",navbar:"hide"},{default:a((function(){return[Object(o["k"])(m,{show:b.popup,"onUpdate:show":e[4]||(e[4]=function(t){return b.popup=t}),position:"bottom",style:{height:"100%"},"close-on-click-overlay":!1,"close-on-popstate":!0,"safe-area-inset-bottom":"",closeable:""},{default:a((function(){return[s,Object(o["k"])("div",i,[Object(o["k"])("div",c,[Object(o["k"])(j,{name:"points",size:"20"}),Object(o["j"])(" "+Object(o["M"])(n.fee-f.state.discount),1)]),Object(o["k"])("div",u,Object(o["M"])(n.subject),1),Object(o["k"])(g,{title:"订单编号",value:n.oid},null,8,["value"]),Object(o["U"])(Object(o["k"])(g,{title:"优 惠 券",class:"coupon",value:f.state.discount?"优惠 "+f.state.discount+" 元":f.state.haveCoupon,"is-link":"",onClick:e[1]||(e[1]=function(t){return f.state.showCoupon=!0})},null,8,["value"]),[[o["Q"],n.tag.length>0]]),Object(o["k"])(g,{title:"余额支付",value:"（"+t.profile.cash+" 可用）"},{"right-icon":a((function(){return[r,Object(o["k"])(y,{modelValue:f.state.useCash,"onUpdate:modelValue":e[2]||(e[2]=function(t){return f.state.useCash=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(o["k"])(g,{title:"积分支付",value:"（"+t.profile.point+" 可用）"},{"right-icon":a((function(){return[p,Object(o["k"])(y,{modelValue:f.state.usePoint,"onUpdate:modelValue":e[3]||(e[3]=function(t){return f.state.usePoint=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(o["k"])(g,{title:"下单时间",value:n.dt},null,8,["value"]),Object(o["k"])(O,{class:"submit",type:"primary",round:"",block:"",onClick:b.handlePay},{default:a((function(){return[l]})),_:1},8,["onClick"]),Object(o["k"])(O,{type:"success",icon:"wechat-pay",round:"",block:"",plain:"",onClick:b.handleWxPay},{default:a((function(){return[h]})),_:1},8,["onClick"])])]})),_:1},8,["show"]),Object(o["k"])(k,{show:f.state.showCoupon,"onUpdate:show":e[5]||(e[5]=function(t){return f.state.showCoupon=t}),title:"选择优惠券",closeable:!1,"close-on-popstate":!0,"close-on-click-overlay":!1},{default:a((function(){return[Object(o["k"])(v,{tag:n.tag,amount:n.fee,inpay:"",onOnChoose:b.handleCoupon},null,8,["tag","amount","onOnChoose"])]})),_:1},8,["show"])]})),_:1})})),f=n("13ab"),b=(n("971e"),n("6b0d")),j=n.n(b);const g=j()(f["a"],[["render",d],["__scopeId","data-v-ee3ff5f0"]]);e["default"]=g},a9e3:function(t,e,n){"use strict";var o=n("83ab"),a=n("da84"),s=n("94ca"),i=n("6eeb"),c=n("5135"),u=n("c6b6"),r=n("7156"),p=n("c04e"),l=n("d039"),h=n("7c73"),d=n("241c").f,f=n("06cf").f,b=n("9bf2").f,j=n("58a8").trim,g="Number",y=a[g],O=y.prototype,m=u(h(O))==g,v=function(t){var e,n,o,a,s,i,c,u,r=p(t,!1);if("string"==typeof r&&r.length>2)if(r=j(r),e=r.charCodeAt(0),43===e||45===e){if(n=r.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(r.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+r}for(s=r.slice(2),i=s.length,c=0;c<i;c++)if(u=s.charCodeAt(c),u<48||u>a)return NaN;return parseInt(s,o)}return+r};if(s(g,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var k,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(m?l((function(){O.valueOf.call(n)})):u(n)!=g)?r(new y(v(e)),n,w):v(e)},C=o?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;C.length>x;x++)c(y,k=C[x])&&!c(w,k)&&b(w,k,f(y,k));w.prototype=O,O.constructor=w,i(a,g,w)}},b5b1:function(t,e,n){},f589:function(t,e,n){}}]);