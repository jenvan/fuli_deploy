(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55f5476c"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),a=i("5899"),c="["+a+"]",r=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),o=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(s,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,i){var n=i("861d"),a=i("d2bb");t.exports=function(t,e,i){var c,r;return a&&"function"==typeof(c=e.constructor)&&c!==i&&n(r=c.prototype)&&r!==i.prototype&&a(t,r),t}},"7a0b":function(t,e,i){},"8c8d":function(t,e,i){"use strict";i("7a0b")},a9e3:function(t,e,i){"use strict";var n=i("83ab"),a=i("da84"),c=i("94ca"),r=i("6eeb"),s=i("5135"),o=i("c6b6"),u=i("7156"),l=i("c04e"),b=i("d039"),d=i("7c73"),f=i("241c").f,p=i("06cf").f,j=i("9bf2").f,O=i("58a8").trim,h="Number",m=a[h],g=m.prototype,v=o(d(g))==h,k=function(t){var e,i,n,a,c,r,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=O(u),e=u.charCodeAt(0),43===e||45===e){if(i=u.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(c=u.slice(2),r=c.length,s=0;s<r;s++)if(o=c.charCodeAt(s),o<48||o>a)return NaN;return parseInt(c,n)}return+u};if(c(h,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var y,_=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof _&&(v?b((function(){g.valueOf.call(i)})):o(i)!=h)?u(new m(k(e)),i,_):k(e)},N=n?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;N.length>I;I++)s(m,y=N[I])&&!s(_,y)&&j(_,y,p(m,y));_.prototype=g,g.constructor=_,r(a,h,_)}},f12b:function(t,e,i){"use strict";(function(t){var n=i("5530"),a=(i("a9e3"),i("ac1f"),i("1276"),i("7a23")),c=i("5502"),r=i("2824");e["a"]={components:{BaseLayout:r["a"]},props:{type:{type:String,default:"mall"},id:{type:[String,Number],default:1}},data:function(){var t=Object(a["B"])({detail:{},like:!1,popup:!1,spec:[],num:1,predict:"",price:0,stock:0,permit:0,animate:""});return{state:t}},created:function(){this.init(this.id)},mounted:function(){this.toggleTabbar(!1)},unmounted:function(){this.toggleTabbar(!1)},computed:Object(n["a"])(Object(n["a"])({button:function(){return 0==this.state.price?"正在查询 ...":this.state.stock?this.state.permit?"加入购物车":"商品未上架":"库存不足"}},Object(c["d"])(["profile"])),Object(c["b"])(["authorized","address","addressCode"])),methods:Object(n["a"])({init:function(e){var i=this;this.state.price=0,this.state.stock=0,this.state.permit=0,this.$http.post("/jdmall/item?id="+e).then((function(e){i.state.detail=t.isEmpty(e)?null:Object(n["a"])(Object(n["a"])({},e),{image:e.image.length<=5?[e.cover]:e.image.split(",")})})),this.$http.get("/jdmall/query?method=product/getSimilarSku&skuId="+e).then((function(t){i.state.spec=t})),this.$http.get("/jdmall/itemPredict?id="+e+"&address="+this.addressCode).then((function(t){i.state.predict=t.predict})),this.$http.get("/jdmall/itemCheck?id="+e+"&num=1&address="+this.addressCode).then((function(t){i.state=Object(n["a"])(Object(n["a"])({},i.state),t["_"+e])})),this.authorized&&this.$http.get("/mall/interestList?id="+e).then((function(e){i.state.like=!t.isEmpty(e)}))},like:function(t){var e=this;this.$http.post("/mall/interestSave?type=jdmall&id="+t+"&remove="+(this.state.like?"1":"0")).then((function(){e.state.like=!e.state.like}))},change:function(t){this.id!=t&&(this.$router.push("?id="+t),this.init(t))},addCart:function(){var t=this;this.$http.post("/mall/cartSave?spu="+this.id+"&sku="+this.id+"&num="+this.state.num+"&status=1&type=jdmall").then((function(e){t.cartNumberAdd(1),t.state.animate="animate__animated animate__backInDown",setTimeout((function(){t.state.animate=""}),1e3)}))}},Object(c["c"])(["togglePopup","toggleTabbar","cartNumberAdd"]))}}).call(this,i("81b0"))},fc38:function(t,e,i){"use strict";i.r(e);i("b0c0");var n=i("7a23"),a=Object(n["R"])("data-v-504f45d6");Object(n["A"])("data-v-504f45d6");var c={key:0},r={class:"group"},s={class:"price"},o=Object(n["i"])("span",{class:"symbol"},"￥",-1),u=Object(n["h"])("京东自营"),l={class:"group"},b={class:"group"},d=Object(n["h"])("京东物流"),f=Object(n["h"])("  ");Object(n["y"])();var p=a((function(t,e,i,p,j,O){var h=Object(n["F"])("van-image"),m=Object(n["F"])("van-swipe-item"),g=Object(n["F"])("van-swipe"),v=Object(n["F"])("van-icon"),k=Object(n["F"])("van-cell"),y=Object(n["F"])("van-tag"),_=Object(n["F"])("van-stepper"),N=Object(n["F"])("van-action-sheet"),I=Object(n["F"])("van-action-bar-icon"),x=Object(n["F"])("van-action-bar-button"),w=Object(n["F"])("van-action-bar"),F=Object(n["F"])("van-empty"),C=Object(n["F"])("BaseLayout");return Object(n["x"])(),Object(n["f"])(C,{title:"商品详情",bg:"#EEE",notitle:""},{default:a((function(){return[j.state.detail?(Object(n["x"])(),Object(n["f"])("div",c,[Object(n["i"])(g,{class:"image",autoplay:3e3,"lazy-render":""},{default:a((function(){return[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(j.state.detail.image,(function(t){return Object(n["x"])(),Object(n["f"])(m,{key:t},{default:a((function(){return[Object(n["i"])(h,{src:t,width:"100%",fit:"contain"},null,8,["src"])]})),_:2},1024)})),128))]})),_:1}),Object(n["i"])("div",r,[Object(n["i"])(k,{center:"",border:!1},{title:a((function(){return[Object(n["i"])("span",s,[o,Object(n["h"])(Object(n["J"])(j.state.price),1)])]})),"right-icon":a((function(){return[Object(n["i"])(v,{name:j.state.like?"like":"like-o",size:"24",color:j.state.like?"#F00":"#000",onClick:e[1]||(e[1]=Object(n["Q"])((function(t){return O.like(i.id)}),["stop"]))},null,8,["name","color"])]})),_:1}),Object(n["i"])(k,{class:"title",border:!1},{title:a((function(){return[Object(n["h"])(Object(n["J"])(j.state.detail.title),1)]})),label:a((function(){return[Object(n["P"])(Object(n["i"])(y,{type:"danger"},{default:a((function(){return[u]})),_:1},512),[[n["M"],j.state.detail.isSelf]]),Object(n["h"])("   "+Object(n["J"])(j.state.detail.seoModel)+" / "+Object(n["J"])(j.state.detail.wareQD)+" / "+Object(n["J"])(j.state.detail.wserve),1)]})),_:1})]),Object(n["i"])("div",l,[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(j.state.spec,(function(t,e){return Object(n["x"])(),Object(n["f"])(k,{key:e,title:t.saleName,border:!0},{label:a((function(){return[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(t.saleAttrList,(function(t,a){return Object(n["x"])(),Object(n["f"])("div",{class:["spec",{active:t.skuIds[0]==i.id}],key:a,onClick:function(e){return O.change(t.skuIds[0])}},[0==e?(Object(n["x"])(),Object(n["f"])(v,{key:0,name:"//img13.360buyimg.com/n4/"+t.imagePath,size:"24"},null,8,["name"])):Object(n["g"])("",!0),Object(n["h"])("  "+Object(n["J"])(t.saleValue),1)],10,["onClick"])})),128))]})),_:2},1032,["title"])})),128)),Object(n["i"])(k,{title:"数量"},{default:a((function(){return[Object(n["i"])(_,{modelValue:j.state.num,"onUpdate:modelValue":e[2]||(e[2]=function(t){return j.state.num=t}),theme:"round","button-size":"22",min:1},null,8,["modelValue"])]})),_:1})]),Object(n["i"])("div",b,[Object(n["i"])(k,{title:"参数",value:j.state.detail.weight+" kg / "+j.state.detail.saleUnit,"is-link":"",onClick:e[3]||(e[3]=function(t){return j.state.popup=!0})},null,8,["value"]),Object(n["i"])(k,{"is-link":"",to:"/my/address/change?target=/jdmall/item?id="+i.id},{title:a((function(){return[Object(n["h"])(" 送至："+Object(n["J"])(t.address),1)]})),label:a((function(){return[Object(n["P"])(Object(n["i"])(y,{type:"warning"},{default:a((function(){return[d]})),_:1},512),[[n["M"],j.state.detail.isJDLogistics]]),f,Object(n["i"])("span",{innerHTML:j.state.predict},null,8,["innerHTML"])]})),_:1},8,["to"])]),Object(n["i"])("div",{class:"detail",innerHTML:j.state.detail.introduction},null,8,["innerHTML"]),Object(n["i"])(N,{show:j.state.popup,"onUpdate:show":e[4]||(e[4]=function(t){return j.state.popup=t}),title:"参数"},{default:a((function(){return[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(j.state.detail.paramJson,(function(t,e){return Object(n["x"])(),Object(n["f"])(k,{key:e,title:t["name"],value:t["value"]},null,8,["title","value"])})),128))]})),_:1},8,["show"]),Object(n["i"])(w,null,{default:a((function(){return[Object(n["i"])(I,{icon:"wap-home-o",text:"首页",onClick:e[5]||(e[5]=function(e){return t.$router.push("/")})}),Object(n["i"])(I,{icon:"balance-list-o",text:"订单",onClick:e[6]||(e[6]=function(e){return t.$router.push("/my/order")})}),Object(n["i"])(I,{icon:"cart-o","icon-class":j.state.animate,text:"购物车",badge:t.profile&&t.profile.cartNumber?t.profile.cartNumber:"",onClick:e[7]||(e[7]=function(e){return t.$router.push("cart")})},null,8,["icon-class","badge"]),Object(n["i"])(x,{type:"danger",disabled:!j.state.stock||!j.state.permit,text:O.button,onClick:O.addCart},null,8,["disabled","text","onClick"])]})),_:1})])):(Object(n["x"])(),Object(n["f"])(F,{key:1,image:"error",description:"商品不存在或已下架"}))]})),_:1})})),j=i("f12b"),O=(i("8c8d"),i("d959")),h=i.n(O);const m=h()(j["a"],[["render",p],["__scopeId","data-v-504f45d6"]]);e["default"]=m}}]);
//# sourceMappingURL=chunk-55f5476c.954340f0.js.map