(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e597d38"],{"1a13":function(t,e,n){"use strict";n("5fbf")},"1c7b0":function(t,e,n){"use strict";n.r(e);n("b0c0");var a=n("7a23"),i=Object(a["R"])("data-v-51de7047");Object(a["A"])("data-v-51de7047");var c={class:"panel"},o=Object(a["i"])("div",{class:"title"},"全国手机话费充值",-1),r={class:"list"},u={class:"value"},s=Object(a["h"])(" 元"),l={class:"price"},b=Object(a["i"])("ul",{class:"notice"},[Object(a["i"])("dt",null,"充值说明"),Object(a["i"])("dd",null,"1、本页面提供话费充值专享优惠服务；快充业务在支付成功后预计30分钟内话费到账；慢充业务在支付成功后一般2-4小时话费到账，最晚72小时内到账，请留意【充值成功通知】短信。"),Object(a["i"])("dd",null,"2、如遇高峰或其他问题未能充值到账，系统将自动原路退款，敬请谅解。"),Object(a["i"])("dd",null,"3、携号转网、副卡不支持充值，下单30分钟内请联系客服申请退款，如超时恕不退款。"),Object(a["i"])("dd",null,"4、因本业务为第三方代充值服务，故无法提供充值发票，有开票需求的请勿充值。"),Object(a["i"])("dd",null,"5、本业务由“福鲤社”提供技术支持，如有疑问请点击页面左下角联系客服。"),Object(a["i"])("dd",{class:"recommend"},"** 企业团充可享更高折扣，详询客服 **")],-1);Object(a["y"])();var d=i((function(t,e,n,d,f,h){var j=Object(a["F"])("van-cell"),p=Object(a["F"])("van-tab"),O=Object(a["F"])("van-tabs"),v=Object(a["F"])("van-action-bar-icon"),g=Object(a["F"])("van-action-bar-button"),m=Object(a["F"])("van-action-bar"),y=Object(a["F"])("van-popup"),w=Object(a["F"])("BaseLayout");return Object(a["x"])(),Object(a["f"])(w,{title:"话费充值",nonavbar:"",bg:"linear-gradient(180deg, var(--van-tabs-default-color), #F66 30%, #F6F6F6 50%, #F6F6F6)"},{default:i((function(){return[Object(a["i"])("div",c,[o,Object(a["P"])(Object(a["i"])("input",{class:"mobile",type:"mobile","onUpdate:modelValue":e[1]||(e[1]=function(t){return f.state.mobile=t}),placeholder:"请输入手机号码"},null,512),[[a["L"],f.state.mobile]]),Object(a["i"])(O,{class:"tabs",type:"card",active:f.state.type,"onUpdate:active":e[2]||(e[2]=function(t){return f.state.type=t})},{default:i((function(){return[(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(f.state.config,(function(t,e){return Object(a["x"])(),Object(a["f"])(p,{key:e,title:t.name},{default:i((function(){return[Object(a["i"])("div",r,[(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(t.list,(function(e,n){return Object(a["x"])(),Object(a["f"])(j,{class:["goods",{active:f.state.value==e}],key:n,onClick:function(n){return h.onChoose(t,e)}},{title:i((function(){return[Object(a["i"])("span",u,Object(a["J"])(e),1),s]})),label:i((function(){return[Object(a["i"])("span",l,"折扣价 ￥"+Object(a["J"])(t.rate*e),1)]})),_:2},1032,["class","onClick"])})),128))])]})),_:2},1032,["title"])})),128))]})),_:1},8,["active"]),b]),Object(a["i"])(m,{class:"bar"},{default:i((function(){return[Object(a["i"])(v,{icon:"chat-o",text:"客服",onClick:e[3]||(e[3]=function(t){return f.state.popup=!0})}),Object(a["i"])(v,{icon:"cash-on-deliver",text:"订单",onClick:e[4]||(e[4]=function(e){return t.$router.push("/recharge/record")})}),Object(a["i"])(g,{type:"danger",text:"立即充值",onClick:h.onRecharge},null,8,["onClick"])]})),_:1}),Object(a["i"])(y,{show:f.state.popup,"onUpdate:show":e[5]||(e[5]=function(t){return f.state.popup=t})},{default:i((function(){return[Object(a["i"])("div",{class:"contact",innerHTML:t.config.contact},null,8,["innerHTML"])]})),_:1},8,["show"])]})),_:1})})),f=n("9d21"),h=(n("1a13"),n("d959")),j=n.n(h);const p=j()(f["a"],[["render",d],["__scopeId","data-v-51de7047"]]);e["default"]=p},"5fbf":function(t,e,n){},"9d21":function(t,e,n){"use strict";(function(t){var a=n("5530"),i=(n("ac1f"),n("5319"),n("7a23")),c=n("5502"),o=n("2824");e["a"]={components:{BaseLayout:o["a"]},data:function(){var t=Object(i["B"])({mobile:"",type:0,value:0,price:0,popup:!1,config:[{name:"98折快充",list:[50,100,200],rate:.98},{name:"95折慢充",list:[50,100,200],rate:.95}]});return{state:t}},created:function(){var t=this;if(!this.authorized)return this.auth(null),window.location.replace("http://api.fuchijihua.com/wechat/?test="+(/(192|test)/.test(window.location.host)?1:0)+"&page="+escape(this.$route.fullPath));this.$http.get("/digital/rechargemobile").then((function(e){t.state.config=e}))},computed:Object(a["a"])(Object(a["a"])({valid:function(){return/^1[\d]{10}$/.test(this.state.mobile)&&this.state.value>0}},Object(c["d"])(["config","profile"])),Object(c["b"])(["authorized"])),methods:Object(a["a"])({onChoose:function(t,e){this.state.value=e,this.state.price=t.rate*e},onRecharge:function(){return this.valid?"undefined"==typeof WeixinJSBridge?this.$dialog.alert({title:"环境不支持",message:"请在微信中打开本充值页面",theme:"round-button"}):void this.recharge():this.$toast("请填写正确的手机号码并选择充值金额")},recharge:function(){var e=this;this.$http.get("/digital/rechargemobile?mobile="+this.state.mobile+"&type="+this.state.type+"&value="+this.state.value).then((function(n){if(t.isEmpty(n))return setTimeout(e.recharge,3e3);WeixinJSBridge.invoke("getBrandWCPayRequest",n,(function(t){if("get_brand_wcpay_request:ok"!=t.err_msg)return e.$dialog.alert({message:"微信支付失败，请重试！"});e.$http.post("/digital/rechargemobile?oid="+n.oid).then((function(){return e.$dialog.alert({title:"订单生成完毕",message:"请点击下方“订单”查看充值到账情况",theme:"round-button"})}))}))}))}},Object(c["c"])(["auth"]))}}).call(this,n("81b0"))}}]);
//# sourceMappingURL=chunk-7e597d38.56595e4c.js.map