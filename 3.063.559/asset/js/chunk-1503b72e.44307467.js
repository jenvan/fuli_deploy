(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1503b72e"],{3013:function(t,e,a){"use strict";(function(t){var i=a("5530"),c=(a("a9e3"),a("99af"),a("ac1f"),a("1276"),a("5319"),a("7a23")),n=a("5502"),s=a("2824"),o=a("370e");e["a"]={components:{BaseLayout:s["a"],MallItemChooser:o["a"]},props:{id:{type:[String,Number],default:1}},data:function(){var t=Object(c["E"])({detail:{},like:!1,choose:{num:0,spec:[]},action:"",disabled:!1,popup:!1,category:[],active:0,pid:0}),e=Object(c["F"])(0);return{state:t,seckill:e}},created:function(){var e=this;this.$http.post("/mall/itemdetail?id="+this.id).then((function(a){e.state.detail=t.isEmpty(a)?null:Object(i["a"])(Object(i["a"])({},a),{image:a.image.length<=5?[a.cover]:[a.cover].concat(a.image.split(","))}),e.seckill=e.state.detail.discount?new Date(e.state.detail.discount.replace(/-/g,"/")).getTime()-(new Date).getTime():0,!t.isEmpty(a)&&e.$share(a.title,a.cover)})),this.authorized&&this.$http.get("/mall/interest?id="+this.id).then((function(a){e.state.like=!t.isEmpty(a)}))},mounted:function(){this.togglePopup(!1)},unmounted:function(){this.togglePopup(!1)},computed:Object(i["a"])(Object(i["a"])({cartNumber:function(){return this.profile&&this.profile.cartNumber&&Array.isArray(this.profile.cartNumber)?this.profile.cartNumber[0]:""}},Object(n["d"])(["profile"])),Object(n["b"])(["authorized"])),methods:Object(i["a"])({halt:function(){this.state.disabled=!0,setTimeout((function(){window.location.reload(!0)}),t.random(5e3,9999))},like:function(){var t=this;this.$http.post("/mall/interestSave?id="+this.id+"&favor="+(this.state.like?"0":"1")).then((function(){t.state.like=!t.state.like}))},save:function(t){this.state.choose=t,""!=this.state.action&&this.todo(this.state.action)},todo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.state.action=e,""==e||0==this.state.choose.num)return this.togglePopup(!0);if("add"==e&&this.$http.post("/mall/cartsave?spu="+this.state.choose.id+"&sku="+this.state.choose.sku+"&num="+this.state.choose.num+"&status=1").then((function(e){t.cartNumberAdd(t.state.choose.num)})),"buy"==e){var a="{"==this.state.detail.digital.substring(0,1)?1:0;this.$http.post("/mall/cartsave?spu="+this.state.choose.id+"&sku="+this.state.choose.sku+"&num="+this.state.choose.num+"&status=2").then((function(e){t.$router.push("bill?direct=1&digital="+a)}))}}},Object(n["c"])(["togglePopup","toggleTabbar","cartNumberAdd"]))}}).call(this,a("81b0"))},"516c":function(t,e,a){},"977e":function(t,e,a){"use strict";a.r(e);a("a15b");var i=a("7a23"),c=Object(i["X"])("data-v-b234c1b0");Object(i["D"])("data-v-b234c1b0");var n={key:0},s={class:"summary"},o=Object(i["k"])("span",{class:"symbol"},"￥",-1),l={class:"price1"},r={class:"price2"},u=Object(i["j"])("    "),b={key:0,class:"save"},d={key:0},j=Object(i["j"])(" 限时"),h=Object(i["k"])("span",{class:"stress"},"抢",-1),O=Object(i["j"])("购 "),p={class:"countdown"},f=Object(i["k"])("span",{class:"remain"},"还剩",-1),k=Object(i["j"])(),m={class:"group"};Object(i["B"])();var v=c((function(t,e,a,v,g,y){var w=Object(i["I"])("van-image"),A=Object(i["I"])("van-swipe-item"),I=Object(i["I"])("van-swipe"),$=Object(i["I"])("van-icon"),_=Object(i["I"])("van-count-down"),C=Object(i["I"])("van-cell"),M=Object(i["I"])("van-action-bar-icon"),x=Object(i["I"])("van-action-bar-button"),N=Object(i["I"])("van-action-bar"),T=Object(i["I"])("mall-item-chooser"),E=Object(i["I"])("van-empty"),F=Object(i["I"])("BaseLayout");return Object(i["A"])(),Object(i["g"])(F,{title:"商品详情",navbar:"auto"},{default:c((function(){return[g.state.detail&&g.state.detail.status?(Object(i["A"])(),Object(i["g"])("div",n,[Object(i["k"])(I,{class:"image",autoplay:3e3,"lazy-render":""},{default:c((function(){return[(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(g.state.detail.image,(function(t){return Object(i["A"])(),Object(i["g"])(A,{key:t},{default:c((function(){return[Object(i["k"])(w,{src:t,width:"100%",fit:"contain"},null,8,["src"])]})),_:2},1024)})),128))]})),_:1}),Object(i["k"])("div",s,[Object(i["k"])(C,{class:"head",border:!1,center:""},{title:c((function(){return[o,Object(i["k"])("span",l,Object(i["M"])(g.state.detail.price),1)]})),label:c((function(){return[Object(i["U"])(Object(i["k"])("span",null,[Object(i["j"])(Object(i["M"])(g.seckill>0?"平日价":"市场价")+"  ",1),Object(i["k"])("span",r,"￥"+Object(i["M"])(g.state.detail.price_original),1),u],512),[[i["Q"],g.state.detail.price_original>g.state.detail.price]]),g.seckill>0?(Object(i["A"])(),Object(i["g"])("span",b,"立省  "+Object(i["M"])(g.state.detail.price_original-g.state.detail.price)+" 元",1)):Object(i["U"])((Object(i["A"])(),Object(i["g"])("span",{key:1},"月销量  "+Object(i["M"])(g.state.detail.sales)+" 件",513)),[[i["Q"],g.state.detail.sales]])]})),value:c((function(){return[g.seckill>0?(Object(i["A"])(),Object(i["g"])("div",d,[Object(i["k"])($,{class:"flag",name:"underway-o"},{default:c((function(){return[j,h,O]})),_:1}),Object(i["k"])("div",p,[f,k,Object(i["k"])(_,{time:g.seckill,onFinish:y.halt},null,8,["time","onFinish"])])])):(Object(i["A"])(),Object(i["g"])($,{key:1,name:g.state.like?"like":"like-o",size:"28",color:"#FF0",onClick:Object(i["W"])(y.like,["stop"])},null,8,["name","onClick"]))]})),_:1}),Object(i["k"])(C,{title:g.state.detail.title,class:"van-multi-ellipsis--l2 title",label:g.state.detail.feature,border:!1},null,8,["title","label"])]),Object(i["k"])("div",m,[Object(i["k"])(C,{title:"商品库存",value:(g.state.detail?g.state.detail.stock:"0")+" 件"},null,8,["value"]),Object(i["k"])(C,{title:"商品型号",value:0==g.state.choose.spec.length?"请选择":g.state.choose.spec.join("，"),"is-link":"",onClick:e[1]||(e[1]=function(t){return y.todo()})},null,8,["value"])]),Object(i["k"])("div",{class:"intro",innerHTML:g.state.detail.intro},null,8,["innerHTML"]),Object(i["k"])(N,null,{default:c((function(){return[Object(i["k"])(M,{icon:"wap-home-o",text:"首页",onClick:e[2]||(e[2]=function(e){return t.$router.push("/")})}),Object(i["k"])(M,{icon:"balance-list-o",text:"订单",onClick:e[3]||(e[3]=function(e){return t.$router.push("/my/order")})}),Object(i["k"])(M,{icon:"cart-o",text:"购物车",badge:y.cartNumber,onClick:e[4]||(e[4]=function(e){return t.$router.push("cart")})},null,8,["badge"]),0==g.state.detail.digital&&g.seckill<=0?(Object(i["A"])(),Object(i["g"])(x,{key:0,disabled:g.state.disabled,type:"warning",text:"加入购物车",onClick:e[5]||(e[5]=function(t){return y.todo("add")})},null,8,["disabled"])):Object(i["h"])("",!0),Object(i["k"])(x,{disabled:g.state.disabled,type:"danger",text:"立即购买",onClick:e[6]||(e[6]=function(t){return y.todo("buy")})},null,8,["disabled"])]})),_:1}),Object(i["k"])(T,{id:a.id,show:t.$store.state.showPopup,onSave:y.save},null,8,["id","show","onSave"])])):Object(i["h"])("",!0),Object(i["U"])(Object(i["k"])(E,{image:"error",description:"商品不存在或已下架"},null,512),[[i["Q"],null==g.state.detail]])]})),_:1})})),g=a("3013"),y=(a("e9e5"),a("d959")),w=a.n(y);const A=w()(g["a"],[["render",v],["__scopeId","data-v-b234c1b0"]]);e["default"]=A},"99af":function(t,e,a){"use strict";var i=a("23e7"),c=a("d039"),n=a("e8b5"),s=a("861d"),o=a("7b0b"),l=a("50c4"),r=a("8418"),u=a("65f0"),b=a("1dde"),d=a("b622"),j=a("2d00"),h=d("isConcatSpreadable"),O=9007199254740991,p="Maximum allowed index exceeded",f=j>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),k=b("concat"),m=function(t){if(!s(t))return!1;var e=t[h];return void 0!==e?!!e:n(t)},v=!f||!k;i({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,i,c,n,s=o(this),b=u(s,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(n=-1===e?s:arguments[e],m(n)){if(c=l(n.length),d+c>O)throw TypeError(p);for(a=0;a<c;a++,d++)a in n&&r(b,d,n[a])}else{if(d>=O)throw TypeError(p);r(b,d++,n)}return b.length=d,b}})},e9e5:function(t,e,a){"use strict";a("516c")}}]);