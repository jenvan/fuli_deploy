(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-129b81b7"],{"3bae":function(t,e,n){"use strict";n("8c70")},"4e32":function(t,e,n){"use strict";(function(t){var i=n("5530"),a=(n("a9e3"),n("ac1f"),n("1276"),n("5319"),n("7a23")),c=n("5502"),r=n("2824");e["a"]={components:{BaseLayout:r["a"]},props:{id:{type:[String,Number],default:1}},data:function(){var t=Object(a["C"])({detail:{},like:!1,popup:!1,spec:[],num:1,predict:"",price:0,stock:0,permit:0,animate:""});return{state:t}},created:function(){this.init(this.id)},mounted:function(){this.toggleTabbar(!1)},unmounted:function(){this.toggleTabbar(!1)},computed:Object(i["a"])(Object(i["a"])({button:function(){return 0==this.state.price?"正在查询 ...":this.state.stock?this.state.permit?"加入购物车":"商品未上架":"库存不足"}},Object(c["d"])(["profile"])),Object(c["b"])(["authorized","address","addressCode"])),methods:Object(i["a"])({init:function(e){var n=this;this.state.price=0,this.state.stock=0,this.state.permit=0,this.$http.post("/jdmall/item?id="+e).then((function(e){n.state.detail=t.isEmpty(e)?null:Object(i["a"])(Object(i["a"])({},e),{image:e.image.length<=5?[e.cover]:e.image.split(",")})})),this.$http.get("/jdmall/query?method=product/getSimilarSku&skuId="+e).then((function(t){n.state.spec=t})),this.$http.get("/jdmall/itemPredict?id="+e+"&address="+this.addressCode).then((function(t){n.state.predict=t.predict})),this.$http.get("/jdmall/itemCheck?id="+e+"&num=1&address="+this.addressCode).then((function(t){n.state=Object(i["a"])(Object(i["a"])({},n.state),t["_"+e])})),this.authorized&&this.$http.get("/mall/interestList?id="+e).then((function(e){n.state.like=!t.isEmpty(e)}))},like:function(t){var e=this;this.$http.post("/mall/interestSave?channel=1&id="+t+"&remove="+(this.state.like?"1":"0")).then((function(){e.state.like=!e.state.like}))},change:function(t){this.id!=t&&(this.$router.replace("?id="+t),this.init(t))},addCart:function(){var t=this;this.$http.post("/mall/cartSave?spu="+this.id+"&sku="+this.id+"&num="+this.state.num+"&status=1&channel=1").then((function(e){t.cartNumberAdd(1),t.state.animate="animate__animated animate__backInDown",setTimeout((function(){t.state.animate=""}),1e3)}))}},Object(c["c"])(["togglePopup","toggleTabbar","cartNumberAdd"]))}}).call(this,n("81b0"))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),a=n("5899"),c="["+a+"]",r=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,n){var i=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var c,r;return a&&"function"==typeof(c=e.constructor)&&c!==n&&i(r=c.prototype)&&r!==n.prototype&&a(t,r),t}},"8c70":function(t,e,n){},a9e3:function(t,e,n){"use strict";var i=n("83ab"),a=n("da84"),c=n("94ca"),r=n("6eeb"),s=n("5135"),o=n("c6b6"),u=n("7156"),l=n("c04e"),b=n("d039"),d=n("7c73"),j=n("241c").f,p=n("06cf").f,f=n("9bf2").f,O=n("58a8").trim,h="Number",m=a[h],g=m.prototype,v=o(d(g))==h,k=function(t){var e,n,i,a,c,r,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=O(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+u}for(c=u.slice(2),r=c.length,s=0;s<r;s++)if(o=c.charCodeAt(s),o<48||o>a)return NaN;return parseInt(c,i)}return+u};if(c(h,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var y,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(v?b((function(){g.valueOf.call(n)})):o(n)!=h)?u(new m(k(e)),n,N):k(e)},_=i?j(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;_.length>I;I++)s(m,y=_[I])&&!s(N,y)&&f(N,y,p(m,y));N.prototype=g,g.constructor=N,r(a,h,N)}},fc38:function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("7a23"),a=Object(i["S"])("data-v-848c4578");Object(i["B"])("data-v-848c4578");var c={key:0},r={class:"group"},s={class:"price"},o=Object(i["j"])("span",{class:"symbol"},"￥",-1),u=Object(i["i"])("京东自营"),l={class:"group"},b={class:"group"},d=Object(i["i"])("京东物流"),j=Object(i["i"])("  ");Object(i["z"])();var p=a((function(t,e,n,p,f,O){var h=Object(i["G"])("van-image"),m=Object(i["G"])("van-swipe-item"),g=Object(i["G"])("van-swipe"),v=Object(i["G"])("van-icon"),k=Object(i["G"])("van-cell"),y=Object(i["G"])("van-tag"),N=Object(i["G"])("van-stepper"),_=Object(i["G"])("van-action-sheet"),I=Object(i["G"])("van-action-bar-icon"),E=Object(i["G"])("van-action-bar-button"),w=Object(i["G"])("van-action-bar"),C=Object(i["G"])("van-empty"),G=Object(i["G"])("BaseLayout");return Object(i["y"])(),Object(i["g"])(G,{title:"商品详情",bg:"#EEE",notitle:""},{default:a((function(){return[f.state.detail?(Object(i["y"])(),Object(i["g"])("div",c,[Object(i["j"])(g,{class:"image",autoplay:3e3,"lazy-render":""},{default:a((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(f.state.detail.image,(function(t){return Object(i["y"])(),Object(i["g"])(m,{key:t},{default:a((function(){return[Object(i["j"])(h,{src:t,width:"100%",fit:"contain"},null,8,["src"])]})),_:2},1024)})),128))]})),_:1}),Object(i["j"])("div",r,[Object(i["j"])(k,{center:"",border:!1},{title:a((function(){return[Object(i["j"])("span",s,[o,Object(i["i"])(Object(i["K"])(f.state.price),1)])]})),"right-icon":a((function(){return[Object(i["j"])(v,{name:f.state.like?"like":"like-o",size:"24",color:f.state.like?"#F00":"#000",onClick:e[1]||(e[1]=Object(i["R"])((function(t){return O.like(n.id)}),["stop"]))},null,8,["name","color"])]})),_:1}),Object(i["j"])(k,{class:"title",border:!1},{title:a((function(){return[Object(i["i"])(Object(i["K"])(f.state.detail.title),1)]})),label:a((function(){return[Object(i["Q"])(Object(i["j"])(y,{type:"danger"},{default:a((function(){return[u]})),_:1},512),[[i["N"],f.state.detail.isSelf]]),Object(i["i"])("   "+Object(i["K"])(f.state.detail.seoModel)+" / "+Object(i["K"])(f.state.detail.wareQD)+" / "+Object(i["K"])(f.state.detail.wserve),1)]})),_:1})]),Object(i["j"])("div",l,[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(f.state.spec,(function(t,e){return Object(i["y"])(),Object(i["g"])(k,{key:e,title:t.saleName,border:!0},{label:a((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(t.saleAttrList,(function(t,a){return Object(i["y"])(),Object(i["g"])("div",{class:["spec",{active:t.skuIds[0]==n.id}],key:a,onClick:function(e){return O.change(t.skuIds[0])}},[0==e?(Object(i["y"])(),Object(i["g"])(v,{key:0,name:"//img13.360buyimg.com/n4/"+t.imagePath,size:"24"},null,8,["name"])):Object(i["h"])("",!0),Object(i["i"])("  "+Object(i["K"])(t.saleValue),1)],10,["onClick"])})),128))]})),_:2},1032,["title"])})),128)),Object(i["j"])(k,{title:"数量"},{default:a((function(){return[Object(i["j"])(N,{modelValue:f.state.num,"onUpdate:modelValue":e[2]||(e[2]=function(t){return f.state.num=t}),theme:"round","button-size":"22",min:1},null,8,["modelValue"])]})),_:1})]),Object(i["j"])("div",b,[Object(i["j"])(k,{title:"参数",value:f.state.detail.weight+" kg / "+f.state.detail.saleUnit,"is-link":"",onClick:e[3]||(e[3]=function(t){return f.state.popup=!0})},null,8,["value"]),Object(i["j"])(k,{"is-link":"",to:"/my/address/change?target=/jdmall/item?id="+n.id},{title:a((function(){return[Object(i["i"])(" 送至："+Object(i["K"])(t.address),1)]})),label:a((function(){return[Object(i["Q"])(Object(i["j"])(y,{type:"warning"},{default:a((function(){return[d]})),_:1},512),[[i["N"],f.state.detail.isJDLogistics]]),j,Object(i["j"])("span",{innerHTML:f.state.predict},null,8,["innerHTML"])]})),_:1},8,["to"])]),Object(i["j"])("div",{class:"detail",innerHTML:f.state.detail.introduction},null,8,["innerHTML"]),Object(i["j"])(_,{show:f.state.popup,"onUpdate:show":e[4]||(e[4]=function(t){return f.state.popup=t}),title:"参数"},{default:a((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(f.state.detail.paramJson,(function(t,e){return Object(i["y"])(),Object(i["g"])(k,{key:e,title:t["name"],value:t["value"]},null,8,["title","value"])})),128))]})),_:1},8,["show"]),Object(i["j"])(w,null,{default:a((function(){return[Object(i["j"])(I,{icon:"wap-home-o",text:"首页",onClick:e[5]||(e[5]=function(e){return t.$router.push("/")})}),Object(i["j"])(I,{icon:"balance-list-o",text:"订单",onClick:e[6]||(e[6]=function(e){return t.$router.push("/my/order")})}),Object(i["j"])(I,{icon:"cart-o","icon-class":f.state.animate,text:"购物车",badge:t.profile&&t.profile.cartNumber?t.profile.cartNumber:"",onClick:e[7]||(e[7]=function(e){return t.$router.push("cart")})},null,8,["icon-class","badge"]),Object(i["j"])(E,{type:"danger",disabled:!f.state.stock||!f.state.permit,text:O.button,onClick:O.addCart},null,8,["disabled","text","onClick"])]})),_:1})])):(Object(i["y"])(),Object(i["g"])(C,{key:1,image:"error",description:"商品不存在或已下架"}))]})),_:1})})),f=n("4e32"),O=(n("3bae"),n("6b0d")),h=n.n(O);const m=h()(f["a"],[["render",p],["__scopeId","data-v-848c4578"]]);e["default"]=m}}]);