(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-856ab0fe"],{"13d5":function(t,e,a){"use strict";var i=a("23e7"),n=a("d58f").left,s=a("a640"),r=a("2d00"),u=a("605d"),c=s("reduce"),o=!u&&r>79&&r<83;i({target:"Array",proto:!0,forced:!c||o},{reduce:function(t){return n(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},3607:function(t,e,a){"use strict";a("ce82")},a36a:function(t,e,a){"use strict";a.r(e);a("b0c0");var i=a("7a23"),n=Object(i["R"])("data-v-68349334");Object(i["A"])("data-v-68349334");var s={class:"main"},r=Object(i["h"])(" "),u=Object(i["h"])(" ");Object(i["y"])();var c=n((function(t,e,a,c,o,l){var d=Object(i["F"])("van-cell"),h=Object(i["F"])("van-card"),f=Object(i["F"])("van-switch"),b=Object(i["F"])("van-cell-group"),p=Object(i["F"])("van-submit-bar"),m=Object(i["F"])("BaseLayout");return Object(i["x"])(),Object(i["f"])(m,{title:"确认订单"},{default:n((function(){return[Object(i["i"])("div",s,[o.state.addr&&o.state.addr.name?(Object(i["x"])(),Object(i["f"])(d,{key:0,class:"card",size:"large",icon:"location",title:o.state.addr.name+" "+o.state.addr.mobile,label:o.state.addr.province+o.state.addr.city+o.state.addr.county+o.state.addr.address,to:"/my/address/change?target="+l.target,"is-link":"",center:""},null,8,["title","label","to"])):(Object(i["x"])(),Object(i["f"])(d,{key:1,class:"card",size:"large",title:"新增收货地址",to:"/my/address/add?target="+l.target,"is-link":""},null,8,["to"])),(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(o.state.list,(function(t,e){return Object(i["x"])(),Object(i["f"])(h,{class:"item",key:e,title:t.title,desc:t.spec,thumb:t.image,price:t.price,num:t.num},null,8,["title","desc","thumb","price","num"])})),128)),Object(i["i"])(b,{class:"fee"},{default:n((function(){return[Object(i["i"])(d,{title:"商品总金额",value:o.state.amount+" 元"},null,8,["value"]),Object(i["i"])(d,{title:"商品总运费",value:o.state.freight+" 元"},null,8,["value"]),Object(i["i"])(d,{title:"使用优惠券",value:"无","is-link":""}),Object(i["i"])(d,{title:"使用余额支付",value:"（"+t.profile.cash+" 可用）"},{"right-icon":n((function(){return[r,Object(i["i"])(f,{modelValue:o.state.useCash,"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.state.useCash=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"]),Object(i["i"])(d,{title:"使用积分支付",value:"（"+t.profile.point+" 可用）"},{"right-icon":n((function(){return[u,Object(i["i"])(f,{modelValue:o.state.usePoint,"onUpdate:modelValue":e[2]||(e[2]=function(t){return o.state.usePoint=t}),size:"24"},null,8,["modelValue"])]})),_:1},8,["value"])]})),_:1}),Object(i["i"])(p,{label:"待支付总金额：","button-text":"结算",style:{bottom:"0px"},price:100*l.amount,disabled:0==l.total||l.amount>0,onSubmit:l.buy},{top:n((function(){return[Object(i["P"])(Object(i["i"])("div",{class:"notify",onClick:e[3]||(e[3]=function(){return l.deposit&&l.deposit.apply(l,arguments)})},"账户资产不足，请充值后再来结算 >>>",512),[[i["M"],l.total-t.profile.cash-t.profile.point>0]])]})),_:1},8,["price","disabled","onSubmit"])])]})),_:1})})),o=a("b198"),l=(a("3607"),a("6b0d")),d=a.n(l);const h=d()(o["a"],[["render",c],["__scopeId","data-v-68349334"]]);e["default"]=h},b198:function(t,e,a){"use strict";(function(t){var i=a("5530"),n=(a("13d5"),a("ac1f"),a("1276"),a("5319"),a("7a23")),s=a("5502"),r=a("2824");e["a"]={components:{BaseLayout:r["a"]},data:function(){var t=Object(n["B"])({addr:{},list:[],amount:0,freight:0,useCash:!1,usePoint:!1});return{state:t}},created:function(){var e=this;this.state.addr=this.profile.cartAddress,this.$http.get("/mall/cartlist?channel=1&status=1").then((function(a){e.state.list=a,e.state.amount=t.reduce(e.state.list,(function(e,a,i){return e=t.round(e+a.price*a.num,2),e}),0);var i=t.reduce(e.state.list,(function(t,e,a){return t.push({skuId:e.sku,num:e.num}),t}),[]),n=e.addressCode.split("_");e.$http.get("/jdmall/query?method=order/getFreight&paymentType=4&sku="+JSON.stringify(i)+"&province="+n[0]+"&city="+n[1]+"&county="+n[2]+"&town="+n[3]).then((function(t){e.state.freight=t.freight}))}))},computed:Object(i["a"])(Object(i["a"])({target:function(){return"/jdmall/cart"},total:function(){return this.state.amount+this.state.freight},amount:function(){var e=0;return e=this.state.usePoint&&this.state.useCash?this.total-this.profile.point-this.profile.cash:this.state.usePoint?this.total-this.profile.point:this.state.useCash?this.total-this.profile.cash:this.total,t.max([e,0])}},Object(s["d"])(["profile"])),Object(s["b"])(["addressCode"])),methods:{deposit:function(){this.$router.push("/my/deposit")},buy:function(){var e=this;if(t.isEmpty(this.state.addr))return this.$toast("请先选择收货地址");var a="";this.state.usePoint&&!this.state.useCash&&(a="point"),!this.state.usePoint&&this.state.useCash&&(a="cash"),this.$http.post("/jdmall/bill?aid="+this.state.addr.id).then((function(t){e.$http.post("/jdmall/pay?id="+t["id"]+"&type="+a).then((function(){e.$router.replace("/my/order")}))}))}}}}).call(this,a("81b0"))},ce82:function(t,e,a){},d58f:function(t,e,a){var i=a("1c0b"),n=a("7b0b"),s=a("44ad"),r=a("50c4"),u=function(t){return function(e,a,u,c){i(a);var o=n(e),l=s(o),d=r(o.length),h=t?d-1:0,f=t?-1:1;if(u<2)while(1){if(h in l){c=l[h],h+=f;break}if(h+=f,t?h<0:d<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:d>h;h+=f)h in l&&(c=a(c,l[h],h,o));return c}};t.exports={left:u(!1),right:u(!0)}}}]);
//# sourceMappingURL=chunk-856ab0fe.030824ea.js.map