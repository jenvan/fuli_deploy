(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7545be0f","chunk-0f6e5c1e"],{3446:function(t,e,a){"use strict";a("67c3")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),s="["+i+"]",c=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),u=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(c,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},"67c3":function(t,e,a){},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var s,c;return i&&"function"==typeof(s=e.constructor)&&s!==a&&n(c=s.prototype)&&c!==a.prototype&&i(t,c),t}},"76a1":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),i=Object(n["S"])("data-v-211fce15");Object(n["B"])("data-v-211fce15");var s={class:"box"},c={id:"pay",class:"fee"},o={class:"subject"},u=Object(n["i"])(" "),r=Object(n["i"])(" "),l=Object(n["i"])("立即付款"),p=Object(n["i"])("使用微信支付");Object(n["z"])();var h=i((function(t,e,a,h,d,b){var j=Object(n["G"])("van-icon"),f=Object(n["G"])("van-cell"),O=Object(n["G"])("van-switch"),y=Object(n["G"])("van-button"),v=Object(n["G"])("van-action-sheet"),g=Object(n["G"])("BaseLayout");return Object(n["y"])(),Object(n["g"])(g,{title:"收银台",navbar:"hide"},{default:i((function(){return[Object(n["j"])(v,{show:b.popup,"onUpdate:show":e[3]||(e[3]=function(t){return b.popup=t}),title:"收银台","close-on-click-overlay":!1},{default:i((function(){return[Object(n["j"])("div",s,[Object(n["j"])("div",c,[Object(n["j"])(j,{name:"points",size:"20"}),Object(n["i"])(" "+Object(n["K"])(a.fee),1)]),Object(n["j"])("div",o,Object(n["K"])(a.subject),1),Object(n["j"])(f,{title:"订单编号",value:a.oid},null,8,["value"]),Object(n["Q"])(Object(n["j"])(f,{title:"优惠券",value:"无","is-link":""},null,512),[[n["N"],a.tag]]),Object(n["j"])(f,{title:"余额支付",value:"（"+t.profile.cash+" 可用）"},{"right-icon":i((function(){return[u,Object(n["j"])(O,{modelValue:d.state.useCash,"onUpdate:modelValue":e[1]||(e[1]=function(t){return d.state.useCash=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(n["j"])(f,{title:"积分支付",value:"（"+t.profile.point+" 可用）"},{"right-icon":i((function(){return[r,Object(n["j"])(O,{modelValue:d.state.usePoint,"onUpdate:modelValue":e[2]||(e[2]=function(t){return d.state.usePoint=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(n["j"])(f,{title:"下单时间",value:a.dt},null,8,["value"]),Object(n["j"])(y,{class:"submit",type:"primary",round:"",block:"",onClick:b.handlePay},{default:i((function(){return[l]})),_:1},8,["onClick"]),Object(n["j"])(y,{type:"success",icon:"wechat-pay",round:"",block:"",plain:"",onClick:b.handleWxPay},{default:i((function(){return[p]})),_:1},8,["onClick"])])]})),_:1},8,["show"])]})),_:1})})),d=a("a891"),b=(a("eae3"),a("6b0d")),j=a.n(b);const f=j()(d["a"],[["render",h],["__scopeId","data-v-211fce15"]]);e["default"]=f},a891:function(t,e,a){"use strict";(function(t){var n=a("53ca"),i=a("5530"),s=(a("a9e3"),a("7a23")),c=a("5502"),o=a("2824");e["a"]={components:{BaseLayout:o["a"]},name:"Pay",props:{show:{type:Boolean,default:!1},json:{type:String,default:""},oid:{type:[String,Number],default:""},fee:{type:[String,Number],default:0},subject:{type:[String,Number],default:""},tag:{type:[String,Number],default:""},attach:{type:String,default:""},notify:{type:String,default:""},exprie:{type:[String,Number],default:0},dt:{type:String,default:""}},emits:["update:show"],data:function(){var t=Object(s["C"])({useCash:!0,usePoint:!0,type:"",tid:"",pid:""});return{state:t}},created:function(){},computed:Object(i["a"])({popup:{get:function(){return this.show},set:function(t){this.$emit("update:show",t)}}},Object(c["d"])(["profile"])),methods:Object(i["a"])({handlePay:function(){return this.state.useCash||this.state.usePoint?this.state.useCash&&!this.state.usePoint&&(this.state.type="cash",this.fee>this.profile.cash)?this.$toast("余额不足支付"):!this.state.useCash&&this.state.usePoint&&(this.state.type="point",this.fee>this.profile.point)?this.$toast("积分不足支付"):this.state.useCash&&this.state.usePoint&&(this.state.type="",this.fee>parseFloat(this.profile.point)+parseFloat(this.profile.cash))?this.$toast("账户资产不足，请使用微信支付"):void this.pay():this.$toast("至少选择一种支付方式")},handleWxPay:function(){var t=this;this.$http.post("/wechat/pay?fee="+this.fee+"&name="+this.subject+"&attach="+this.attach).then((function(e){t.state.popup=!1,t.state.pid=e.pid,e.code&&t.$dialog.confirm({title:"请用微信扫码付款",message:"<img src='http://api.qrserver.com/v1/create-qr-code/?size=250x250&ecc=H&margin=10&data="+e.code+"'>",theme:"round-button",confirmButtonText:"我已完成付款",allowHtml:!0}).then(t.wxpayCheck)||WeixinJSBridge&&WeixinJSBridge.invoke("getBrandWCPayRequest",e,(function(e){return"get_brand_wcpay_request:ok"!=e.err_msg?t.$dialog.alert({message:"微信支付失败，请重试！"}):t.wxpayCheck()}))}))},wxpayCheck:function(){var e=this;this.popup&&(this.$toast.loading({message:"订单处理中...",forbidClick:!0}),setTimeout((function(){0==document.querySelector("#pay").getBoundingClientRect()["height"]&&(e.popup=!1),e.$http.post("/wechat/payCheck?id="+e.state.pid).then((function(a){return t.isEmpty(a)||Object(n["a"])(a.attach)!=e.attach?e.wxpayCheck():(e.popup=!1,e.state.type="wxpay",e.pay())}))}),5e3))},pay:function(){var t=this;this.$http.post("/pay?data="+this.json+"&type="+this.state.type+"&tid="+this.state.tid+"&pid="+this.state.pid).then((function(){t.$init(),t.$emit("onPayOK")})).catch((function(){t.$emit("onPayFail")}))}},Object(c["c"])(["auth"]))}}).call(this,a("81b0"))},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),s=a("94ca"),c=a("6eeb"),o=a("5135"),u=a("c6b6"),r=a("7156"),l=a("c04e"),p=a("d039"),h=a("7c73"),d=a("241c").f,b=a("06cf").f,j=a("9bf2").f,f=a("58a8").trim,O="Number",y=i[O],v=y.prototype,g=u(h(v))==O,m=function(t){var e,a,n,i,s,c,o,u,r=l(t,!1);if("string"==typeof r&&r.length>2)if(r=f(r),e=r.charCodeAt(0),43===e||45===e){if(a=r.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(r.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+r}for(s=r.slice(2),c=s.length,o=0;o<c;o++)if(u=s.charCodeAt(o),u<48||u>i)return NaN;return parseInt(s,n)}return+r};if(s(O,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var C,k=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof k&&(g?p((function(){v.valueOf.call(a)})):u(a)!=O)?r(new y(m(e)),a,k):m(e)},w=n?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;w.length>N;N++)o(y,C=w[N])&&!o(k,C)&&j(k,C,b(y,C));k.prototype=v,v.constructor=k,c(i,O,k)}},ae47:function(t,e,a){},e571:function(t,e,a){"use strict";a.r(e);a("b0c0"),a("b64b"),a("ac1f"),a("5319");var n=a("7a23"),i=Object(n["S"])("data-v-0f8e935a");Object(n["B"])("data-v-0f8e935a");var s={class:"box"},c={class:"member"},o={class:"head"},u={class:"name"},r={class:"tab"},l={class:"panel"},p=Object(n["j"])("div",{class:"title"},"项目",-1),h={class:"chooser"},d=Object(n["j"])("div",{class:"title"},"价格",-1),b={class:"chooser"},j={class:"item"},f={class:"sale"},O={class:"face"},y={class:"title"};Object(n["z"])();var v=i((function(t,e,a,v,g,m){var C=Object(n["G"])("van-icon"),k=Object(n["G"])("van-tab"),w=Object(n["G"])("van-tabs"),N=Object(n["G"])("van-empty"),S=Object(n["G"])("van-field"),_=Object(n["G"])("van-stepper"),x=Object(n["G"])("van-cell"),$=Object(n["G"])("van-action-bar-icon"),P=Object(n["G"])("van-action-bar-button"),G=Object(n["G"])("van-action-bar"),I=Object(n["G"])("van-popup"),E=Object(n["G"])("pay"),V=Object(n["G"])("BaseLayout");return Object(n["y"])(),Object(n["g"])(V,{title:g.state.title,height:"0"},{default:i((function(){return[Object(n["j"])("div",s,[Object(n["j"])("div",c,[Object(n["j"])("div",o,[Object(n["j"])(C,{class:"icon",name:g.state.topCat.icon||"vip-card",size:"36"},null,8,["name"]),Object(n["j"])("div",u,Object(n["K"])(g.state.topCat.name),1)]),Object.keys(g.state.subCat).length>0?(Object(n["y"])(),Object(n["g"])(w,{key:0,class:"tabs",active:g.state.active,"onUpdate:active":e[1]||(e[1]=function(t){return g.state.active=t}),animated:"",swipeable:"",onChange:m.handleChange},{default:i((function(){return[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(g.state.subCat,(function(t,e){return Object(n["y"])(),Object(n["g"])(k,{key:e,name:e},{title:i((function(){return[Object(n["j"])("div",r,[Object(n["j"])(C,{name:t.icon,size:"36"},null,8,["name"]),Object(n["i"])(Object(n["K"])(t.name),1)])]})),_:2},1032,["name"])})),128))]})),_:1},8,["active","onChange"])):Object(n["h"])("",!0)]),Object(n["Q"])(Object(n["j"])("div",l,[p,Object(n["j"])("div",h,[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(g.state.spu,(function(t,e){return Object(n["y"])(),Object(n["g"])("div",{class:["spu",{active:g.state.id==t.id}],key:e,onClick:function(e){return m.handleChoose(t)}},Object(n["K"])(t.title),11,["onClick"])})),128))]),d,Object(n["j"])("div",b,[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(g.state.sku,(function(t,e){return Object(n["y"])(),Object(n["g"])("div",{class:["sku",{active:g.state.api==e}],key:e,onClick:function(t){return g.state.api=e}},[Object(n["j"])("div",j,Object(n["K"])(t.name),1),Object(n["j"])("div",f,"￥"+Object(n["K"])(t.sale_price),1),Object(n["j"])("div",O,"官方价：￥"+Object(n["K"])(t.face_price.replace(".00","")),1)],10,["onClick"])})),128))]),Object(n["Q"])(Object(n["j"])("div",y,"描述",512),[[n["N"],g.state.intro]]),Object(n["Q"])(Object(n["j"])("div",{class:"intro",innerHTML:t.$safeHTML(g.state.intro)},null,8,["innerHTML"]),[[n["N"],g.state.intro]])],512),[[n["N"],Object.keys(g.state.spu).length>0]]),Object(n["Q"])(Object(n["j"])(N,{description:"暂无项目"},null,512),[[n["N"],0==Object.keys(g.state.spu).length]])]),Object(n["j"])(G,{class:"bar"},{default:i((function(){return[Object(n["Q"])(Object(n["j"])(S,{class:"param",modelValue:g.state.account,"onUpdate:modelValue":e[2]||(e[2]=function(t){return g.state.account=t}),type:"text",placeholder:"充值账号"},null,8,["modelValue"]),[[n["N"],0==g.state.type&&g.state.api.length>0]]),Object(n["Q"])(Object(n["j"])(x,{class:"param",title:"购买数量"},{value:i((function(){return[Object(n["j"])(_,{modelValue:g.state.entity,"onUpdate:modelValue":e[3]||(e[3]=function(t){return g.state.entity=t}),theme:"round","input-width":"42","button-size":"24","disable-input":!1,min:"1",max:"100",integer:""},null,8,["modelValue"])]})),_:1},512),[[n["N"],1==g.state.type&&g.state.api.length>0]]),Object(n["j"])($,{icon:"chat-o",text:"客服",onClick:e[4]||(e[4]=function(t){return g.state.popup=!0})}),Object(n["j"])($,{icon:"cash-on-deliver",text:"订单",onClick:e[5]||(e[5]=function(e){return t.$router.push("/digital/record")})}),Object(n["j"])(P,{type:"danger",text:"立即购买",onClick:m.handleSubmit},null,8,["onClick"])]})),_:1}),Object(n["j"])(I,{show:g.state.popup,"onUpdate:show":e[6]||(e[6]=function(t){return g.state.popup=t}),position:"top",style:{height:"50%",padding:"20px"}},{default:i((function(){return[Object(n["j"])("div",{class:"contact",innerHTML:t.config.contact},null,8,["innerHTML"])]})),_:1},8,["show"]),Object(n["j"])(E,Object(n["p"])(g.state.payData,{show:g.state.payShow,"onUpdate:show":e[7]||(e[7]=function(t){return g.state.payShow=t}),onOnPayOK:e[8]||(e[8]=function(t){return m.handlePay(!0)}),onOnPayFail:e[9]||(e[9]=function(t){return m.handlePay(!1)})}),null,16,["show"])]})),_:1},8,["title"])})),g=a("5530"),m=(a("a9e3"),a("5502")),C=a("2824"),k=a("76a1"),w={components:{BaseLayout:C["a"],Pay:k["default"]},name:"DigitalDetail",props:{action:{type:String,default:"member"},cid:{type:[String,Number],default:0},id:{type:[String,Number],default:0}},data:function(){var t=Object(n["C"])({topCat:{},subCat:{},active:0,list:{},spu:{},sku:{},type:0,title:"",intro:"",id:0,api:0,account:"",quantity:1,payData:{},payShow:!1,popup:!1});return{state:t}},created:function(){var t=this;this.$http.get("/digital/category?type="+this.action+"&deep=0").then((function(e){t.state.title=e[0].name})),this.$http.get("/digital/category?id="+parseInt(this.cid)+"&deep=2").then((function(e){t.state.topCat=e[0];var a=e[0]["children"];for(var n in a)t.state.subCat[a[n]["id"]]=a[n];t.init()}))},computed:Object(g["a"])(Object(g["a"])({},Object(m["d"])(["config","profile"])),Object(m["b"])(["uid"])),methods:{init:function(){var t=this,e=/(\d+)[^\d](\d+)/.exec(this.cid);this.$http.get("/digital/list?cid="+(e?e[1]:this.cid)).then((function(a){t.state.list=a,t.state.active=e?e[2]:Object.keys(a).shift(),t.handleChange()}))},handleChange:function(){this.state.spu=this.state.list[this.state.active]||{},this.state.id=this.id||Object.keys(this.state.spu).shift(),this.handleChoose(this.state.spu[this.state.id]||null)},handleChoose:function(t){t&&"undefined"!=typeof t.id&&(this.state.id=t.id,this.state.type=t.type,this.state.intro=t.intro,this.state.api="",this.state.sku=JSON.parse(t.spec),console.log(this.state.spu,this.state.sku))},handleSubmit:function(){var t=this;return this.state.id<=0||this.state.api.length<=0?this.$toast("请选择项目及价格"):0==this.state.type&&this.state.account.length<5?this.$toast("请填写充值账号"):(0==this.state.type&&(this.state.quantity=1),1==this.state.type&&(this.state.account=""),void this.$http.post("/digital/checkout?id="+this.state.id+"&api="+this.state.api+"&account="+this.state.account+"&quantity="+this.state.quantity).then((function(e){t.state.payData=Object(g["a"])(Object(g["a"])({},e),{},{json:JSON.stringify(e)}),t.state.payShow=!0})))},handlePay:function(t){this.state.payShow=!1,t&&this.$dialog.alert({title:"订单已生成",message:"请点击下方“订单记录”查看到账情况",theme:"round-button"})}}},N=(a("3446"),a("6b0d")),S=a.n(N);const _=S()(w,[["render",v],["__scopeId","data-v-0f8e935a"]]);e["default"]=_},eae3:function(t,e,a){"use strict";a("ae47")}}]);