(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4875d756"],{"23f5":function(t,e,n){"use strict";n("bf51")},"4e32":function(t,e,n){"use strict";(function(t){var a=n("5530"),i=(n("a9e3"),n("ac1f"),n("1276"),n("5319"),n("7a23")),c=n("5502"),r=n("2824");e["a"]={components:{BaseLayout:r["a"]},props:{id:{type:[String,Number],default:1}},data:function(){var t=Object(i["E"])({detail:{},like:!1,popup:!1,spec:[],num:1,predict:"",price:0,stock:0,permit:0,animate:""});return{state:t}},created:function(){this.init(this.id)},mounted:function(){this.toggleTabbar(!1)},unmounted:function(){this.toggleTabbar(!1)},computed:Object(a["a"])(Object(a["a"])({button:function(){return 0==this.state.price?"正在查询 ...":this.state.stock?this.state.permit?"加入购物车":"商品未上架":"库存不足"},cartNumber:function(){return this.profile&&this.profile.cartNumber&&Array.isArray(this.profile.cartNumber)?this.profile.cartNumber[1]:""}},Object(c["d"])(["profile"])),Object(c["b"])(["authorized","address","addressCode"])),methods:Object(a["a"])({init:function(e){var n=this;this.state.price=0,this.state.stock=0,this.state.permit=0,this.$http.post("/jdmall/item?id="+e).then((function(e){n.state.detail=t.isEmpty(e)?null:Object(a["a"])(Object(a["a"])({},e),{image:e.image.length<=5?[e.cover]:e.image.split(",")})})),this.$http.get("/jdmall/query?method=product/getSimilarSku&skuId="+e).then((function(t){n.state.spec=t})),this.$http.get("/jdmall/itemPredict?id="+e+"&address="+this.addressCode).then((function(t){n.state.predict=t.predict})),this.$http.get("/jdmall/itemCheck?id="+e+"&num=1&address="+this.addressCode).then((function(t){n.state=Object(a["a"])(Object(a["a"])({},n.state),t["_"+e])})),this.authorized&&this.$http.get("/mall/interestList?id="+e).then((function(e){n.state.like=!t.isEmpty(e)}))},like:function(t){var e=this;this.$http.post("/mall/interestSave?channel=1&id="+t+"&remove="+(this.state.like?"1":"0")).then((function(){e.state.like=!e.state.like}))},change:function(t){this.id!=t&&(this.$router.replace("?id="+t),this.init(t))},addCart:function(){var t=this;this.$http.post("/mall/cartSave?spu="+this.id+"&sku="+this.id+"&num="+this.state.num+"&status=1&channel=1").then((function(e){t.cartNumberAdd(1,1),t.state.animate="animate__animated animate__backInDown",setTimeout((function(){t.state.animate=""}),1e3)}))}},Object(c["c"])(["togglePopup","toggleTabbar","cartNumberAdd"]))}}).call(this,n("81b0"))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),i=n("5899"),c="["+i+"]",r=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,n){var a=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var c,r;return i&&"function"==typeof(c=e.constructor)&&c!==n&&a(r=c.prototype)&&r!==n.prototype&&i(t,r),t}},a9e3:function(t,e,n){"use strict";var a=n("83ab"),i=n("da84"),c=n("94ca"),r=n("6eeb"),s=n("5135"),o=n("c6b6"),u=n("7156"),l=n("c04e"),b=n("d039"),d=n("7c73"),f=n("241c").f,j=n("06cf").f,p=n("9bf2").f,O=n("58a8").trim,h="Number",m=i[h],k=m.prototype,g=o(d(k))==h,v=function(t){var e,n,a,i,c,r,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=O(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+u}for(c=u.slice(2),r=c.length,s=0;s<r;s++)if(o=c.charCodeAt(s),o<48||o>i)return NaN;return parseInt(c,a)}return+u};if(c(h,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var I,y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(g?b((function(){k.valueOf.call(n)})):o(n)!=h)?u(new m(v(e)),n,y):v(e)},A=a?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;A.length>N;N++)s(m,I=A[N])&&!s(y,I)&&p(y,I,j(m,I));y.prototype=k,k.constructor=y,r(i,h,y)}},bf51:function(t,e,n){},fc38:function(t,e,n){"use strict";n.r(e);n("b0c0");var a=n("7a23"),i=Object(a["X"])("data-v-0b7dc212");Object(a["D"])("data-v-0b7dc212");var c={key:0},r={class:"group"},s=Object(a["k"])("span",{class:"symbol"},"￥",-1),o=Object(a["j"])("京东自营"),u={class:"group option"},l={class:"group"},b=Object(a["j"])("京东物流"),d=Object(a["j"])("  ");Object(a["B"])();var f=i((function(t,e,n,f,j,p){var O=Object(a["I"])("van-icon"),h=Object(a["I"])("van-image"),m=Object(a["I"])("van-swipe-item"),k=Object(a["I"])("van-swipe"),g=Object(a["I"])("van-cell"),v=Object(a["I"])("van-tag"),I=Object(a["I"])("van-stepper"),y=Object(a["I"])("van-action-sheet"),A=Object(a["I"])("van-action-bar-icon"),N=Object(a["I"])("van-action-bar-button"),_=Object(a["I"])("van-action-bar"),w=Object(a["I"])("van-empty"),C=Object(a["I"])("BaseLayout");return Object(a["A"])(),Object(a["g"])(C,{title:"商品详情",bg:"#EEE",navbar:"auto"},{back:i((function(){return[Object(a["k"])(O,{class:"back",name:"arrow-left",onClick:e[1]||(e[1]=Object(a["W"])((function(e){return t.$router.back()}),["stop"]))})]})),default:i((function(){return[j.state.detail?(Object(a["A"])(),Object(a["g"])("div",c,[Object(a["k"])(k,{class:"image",autoplay:3e3,"lazy-render":""},{default:i((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(j.state.detail.image,(function(t){return Object(a["A"])(),Object(a["g"])(m,{key:t},{default:i((function(){return[Object(a["k"])(h,{src:t,width:"100%",fit:"contain"},null,8,["src"])]})),_:2},1024)})),128))]})),_:1}),Object(a["k"])("div",r,[Object(a["k"])(g,{class:"price",center:"",border:!1},{title:i((function(){return[s,Object(a["j"])(Object(a["M"])(j.state.price),1)]})),"right-icon":i((function(){return[Object(a["k"])(O,{name:j.state.like?"like":"like-o",size:"24",color:j.state.like?"#F00":"#000",onClick:e[2]||(e[2]=Object(a["W"])((function(t){return p.like(n.id)}),["stop"]))},null,8,["name","color"])]})),_:1}),Object(a["k"])(g,{class:"title",border:!1},{title:i((function(){return[Object(a["j"])(Object(a["M"])(j.state.detail.title),1)]})),label:i((function(){return[Object(a["U"])(Object(a["k"])(v,{type:"danger"},{default:i((function(){return[o]})),_:1},512),[[a["Q"],j.state.detail.isSelf]]),Object(a["j"])("   "+Object(a["M"])(j.state.detail.seoModel)+" / "+Object(a["M"])(j.state.detail.wareQD)+" / "+Object(a["M"])(j.state.detail.wserve),1)]})),_:1})]),Object(a["k"])("div",u,[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(j.state.spec,(function(t,e){return Object(a["A"])(),Object(a["g"])(g,{key:e,title:t.saleName,border:!1},{value:i((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(t.saleAttrList,(function(t,i){return Object(a["A"])(),Object(a["g"])("div",{class:["spec",{active:t.skuIds[0]==n.id}],key:i,onClick:function(e){return p.change(t.skuIds[0])}},[0==e?(Object(a["A"])(),Object(a["g"])(O,{key:0,name:"//img13.360buyimg.com/n4/"+t.imagePath,size:"24"},null,8,["name"])):Object(a["h"])("",!0),Object(a["j"])("  "+Object(a["M"])(t.saleValue),1)],10,["onClick"])})),128))]})),_:2},1032,["title"])})),128)),Object(a["k"])(g,{title:"数量"},{default:i((function(){return[Object(a["k"])(I,{modelValue:j.state.num,"onUpdate:modelValue":e[3]||(e[3]=function(t){return j.state.num=t}),theme:"round","button-size":"22",min:1},null,8,["modelValue"])]})),_:1})]),Object(a["k"])("div",l,[Object(a["k"])(g,{title:"参数",value:j.state.detail.weight+" kg / "+j.state.detail.saleUnit,"is-link":"",onClick:e[4]||(e[4]=function(t){return j.state.popup=!0})},null,8,["value"]),Object(a["k"])(g,{"is-link":"",to:"/my/address/change?target=/jdmall/item?id="+n.id},{title:i((function(){return[Object(a["j"])(" 送至："+Object(a["M"])(t.address),1)]})),label:i((function(){return[Object(a["U"])(Object(a["k"])(v,{type:"warning"},{default:i((function(){return[b]})),_:1},512),[[a["Q"],j.state.detail.isJDLogistics]]),d,Object(a["k"])("span",{innerHTML:j.state.predict},null,8,["innerHTML"])]})),_:1},8,["to"])]),Object(a["k"])("div",{class:"detail",innerHTML:j.state.detail.introduction},null,8,["innerHTML"]),Object(a["k"])(y,{show:j.state.popup,"onUpdate:show":e[5]||(e[5]=function(t){return j.state.popup=t}),title:"参数"},{default:i((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(j.state.detail.paramJson,(function(t,e){return Object(a["A"])(),Object(a["g"])(g,{key:e,title:t["name"],value:t["value"]},null,8,["title","value"])})),128))]})),_:1},8,["show"]),Object(a["k"])(_,null,{default:i((function(){return[Object(a["k"])(A,{icon:"wap-home-o",text:"首页",onClick:e[6]||(e[6]=function(e){return t.$router.push("/")})}),Object(a["k"])(A,{icon:"balance-list-o",text:"订单",onClick:e[7]||(e[7]=function(e){return t.$router.push("/my/order")})}),Object(a["k"])(A,{icon:"shopping-cart-o","icon-class":j.state.animate,text:"购物车",badge:p.cartNumber,onClick:e[8]||(e[8]=function(e){return t.$router.push("cart")})},null,8,["icon-class","badge"]),Object(a["k"])(N,{type:"danger",disabled:!j.state.stock||!j.state.permit,text:p.button,onClick:p.addCart},null,8,["disabled","text","onClick"])]})),_:1})])):(Object(a["A"])(),Object(a["g"])(w,{key:1,image:"error",description:"商品不存在或已下架"}))]})),_:1})})),j=n("4e32"),p=(n("23f5"),n("6b0d")),O=n.n(p);const h=O()(j["a"],[["render",f],["__scopeId","data-v-0b7dc212"]]);e["default"]=h}}]);