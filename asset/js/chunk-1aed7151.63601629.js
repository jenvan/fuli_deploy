(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aed7151"],{"13d5":function(t,e,a){"use strict";var n=a("23e7"),c=a("d58f").left,r=a("a640"),i=a("2d00"),s=a("605d"),u=r("reduce"),l=!s&&i>79&&i<83;n({target:"Array",proto:!0,forced:!u||l},{reduce:function(t){return c(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"5f62":function(t,e,a){"use strict";a("a560")},a560:function(t,e,a){},d58f:function(t,e,a){var n=a("1c0b"),c=a("7b0b"),r=a("44ad"),i=a("50c4"),s=function(t){return function(e,a,s,u){n(a);var l=c(e),o=r(l),d=i(l.length),b=t?d-1:0,h=t?-1:1;if(s<2)while(1){if(b in o){u=o[b],b+=h;break}if(b+=h,t?b<0:d<=b)throw TypeError("Reduce of empty array with no initial value")}for(;t?b>=0:d>b;b+=h)b in o&&(u=a(u,o[b],b,l));return u}};t.exports={left:s(!1),right:s(!0)}},f008:function(t,e,a){"use strict";a.r(e);a("b0c0");var n=a("7a23"),c=Object(n["X"])("data-v-76130eda");Object(n["D"])("data-v-76130eda");var r={class:"main"},i={class:"insurance"},s=Object(n["j"])(" 购买运费险"),u=Object(n["k"])("p",null,[Object(n["j"])("非特殊说明的商品支持七天无理由退货；需要换货的商品，请退货后重新购买；非商品自身质量原因导致的退货，"),Object(n["k"])("b",null,"需要买家自行承担寄回运费"),Object(n["j"])("；购买运费险后可享受10元寄回运费补贴。")],-1);Object(n["B"])();var l=c((function(t,e,a,l,o,d){var b=Object(n["I"])("van-cell"),h=Object(n["I"])("van-card"),f=Object(n["I"])("van-checkbox"),j=Object(n["I"])("van-cell-group"),O=Object(n["I"])("van-submit-bar"),p=Object(n["I"])("pay"),m=Object(n["I"])("BaseLayout");return Object(n["A"])(),Object(n["g"])(m,{title:"确认订单"},{default:c((function(){return[Object(n["k"])("div",r,[o.state.addr&&o.state.addr.name?(Object(n["A"])(),Object(n["g"])(b,{key:0,class:"card",size:"large",icon:"location",title:o.state.addr.name+" "+o.state.addr.mobile,label:o.state.addr.province+o.state.addr.city+o.state.addr.county+o.state.addr.address,to:"/my/address/change?target="+d.target,"is-link":"",center:""},null,8,["title","label","to"])):(Object(n["A"])(),Object(n["g"])(b,{key:1,class:"card",size:"large",title:"新增收货地址",to:"/my/address/add?target="+d.target,"is-link":""},null,8,["to"])),(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(o.state.list,(function(t,e){return Object(n["A"])(),Object(n["g"])(h,{class:"item",key:e,title:t.title,desc:t.spec,thumb:t.image,price:t.price,num:t.num},null,8,["title","desc","thumb","price","num"])})),128)),Object(n["k"])(j,{class:"fee"},{default:c((function(){return[Object(n["k"])(b,{title:"商品总金额",value:o.state.amount+" 元"},null,8,["value"]),Object(n["k"])(b,{title:"商品总运费",value:o.state.freight+" 元"},null,8,["value"]),Object(n["k"])(b,{title:"退货运费险",value:o.state.insurance+" 元",border:!1},null,8,["value"]),Object(n["k"])("div",i,[Object(n["k"])(f,{modelValue:o.state.checked,"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.state.checked=t}),disabled:"",onClick:e[2]||(e[2]=function(e){return t.$toast("内测中，敬请期待！")})},{default:c((function(){return[s]})),_:1},8,["modelValue"]),u])]})),_:1}),Object(n["k"])(O,{label:"待支付总金额：","button-text":"结算",style:{bottom:"0px"},price:100*d.total,onSubmit:d.buy},null,8,["price","onSubmit"]),Object(n["k"])(p,Object(n["r"])(o.state.payData,{show:o.state.payShow,"onUpdate:show":e[3]||(e[3]=function(t){return o.state.payShow=t}),onOnFinish:d.handlePay}),null,16,["show","onOnFinish"])])]})),_:1})})),o=a("f40f"),d=(a("5f62"),a("6b0d")),b=a.n(d);const h=b()(o["a"],[["render",l],["__scopeId","data-v-76130eda"]]);e["default"]=h},f40f:function(t,e,a){"use strict";(function(t){var n=a("5530"),c=(a("13d5"),a("7a23")),r=a("5502"),i=a("2824"),s=a("a6e6");e["a"]={components:{BaseLayout:i["a"],Pay:s["default"]},data:function(){var t=Object(c["E"])({addr:{},list:[],amount:0,freight:0,insurance:0,payData:{},payShow:!1});return{state:t}},created:function(){var e=this;this.state.addr=this.profile.cartAddress,this.$http.get("/mall/cartlist?channel=2&status=1").then((function(a){e.state.list=a,e.state.amount=t.reduce(e.state.list,(function(e,a,n){return e=t.round(e+a.price*a.num,2),e}),0),e.state.freight=e.state.amount<39?10:0;t.reduce(e.state.list,(function(t,e,a){return t.push({skuId:e.sku,num:e.num}),t}),[])}))},computed:Object(n["a"])(Object(n["a"])({target:function(){return"/vpmall/cart"},total:function(){return this.state.amount+this.state.freight}},Object(r["d"])(["uid","profile"])),Object(r["b"])(["addressCode"])),methods:{buy:function(){var e=this;return t.isEmpty(this.state.addr)?this.$toast("请先选择收货地址"):this.uid>1e4?this.$alert("内测中，仅对部分用户开放！"):void this.$http.post("/vpmall/checkout?aid="+this.state.addr.id).then((function(t){e.state.payData=Object(n["a"])(Object(n["a"])({},t),{},{json:JSON.stringify(t)}),e.state.payShow=!0}))},handlePay:function(t){var e=this;this.state.payShow=!1,this.$dialog.alert({title:"订单支付"+(t?"成功":"失败"),message:"请在“我的订单”中查看详细情况",theme:"round-button"}).then((function(){e.$router.push("/my/order")}))}}}}).call(this,a("81b0"))}}]);