(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e9480d7"],{"370e":function(t,e,i){"use strict";i("b0c0");var a=i("7a23"),c=Object(a["X"])("data-v-0c36b9c4");Object(a["D"])("data-v-0c36b9c4");var n={class:"wrapper"},s=Object(a["j"])("确 定");Object(a["B"])();var o=c((function(t,e,i,o,r,l){var u=Object(a["I"])("mall-item"),d=Object(a["I"])("van-radio"),b=Object(a["I"])("van-radio-group"),p=Object(a["I"])("van-cell"),h=Object(a["I"])("van-stepper"),j=Object(a["I"])("van-button"),f=Object(a["I"])("van-overlay");return Object(a["A"])(),Object(a["g"])(f,{show:i.show,onClick:t.togglePopup},{default:c((function(){return[Object(a["k"])("div",n,[Object(a["k"])("div",{class:"panel animate__animated animate__fadeInUpBig",onClick:e[2]||(e[2]=Object(a["W"])((function(){}),["stop"]))},[Object(a["k"])(u,{grid:!1,item:r.state.detail,cart:!1,sales:!1,class:"van-hairline--bottom",style:{paddingBottom:"10px"}},null,8,["item"]),(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(r.state.detail.spec,(function(t,e){return Object(a["U"])((Object(a["A"])(),Object(a["g"])(p,{key:e,title:t.name,border:!1},{label:c((function(){return[Object(a["k"])(b,{modelValue:r.state.options[t.id],"onUpdate:modelValue":function(e){return r.state.options[t.id]=e},direction:"horizontal","checked-color":"#ee0a24",onChange:l.choose},{default:c((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(t.spec,(function(e,i){return Object(a["A"])(),Object(a["g"])(d,{class:["radio",{active:r.state.options[t.id]==i}],key:i,name:i},{icon:c((function(){return[]})),default:c((function(){return[Object(a["j"])(Object(a["M"])(e),1)]})),_:2},1032,["name","class"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:2},1032,["title"])),[[a["Q"],l.hasSpec]])})),128)),Object(a["k"])(p,{title:"数量",class:"number",border:!1},{default:c((function(){return[Object(a["k"])(h,{modelValue:r.state.num,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.state.num=t}),theme:"round","button-size":"22",min:1,max:r.state.detail.stock},null,8,["modelValue","max"])]})),_:1}),Object(a["k"])(j,{type:"danger",round:"",block:"",disabled:r.state.disabled,onClick:l.save},{default:c((function(){return[s]})),_:1},8,["disabled","onClick"])])])]})),_:1},8,["show","onClick"])})),r=i("8d6d"),l=(i("6db7"),i("6b0d")),u=i.n(l);const d=u()(r["a"],[["render",o],["__scopeId","data-v-0c36b9c4"]]);e["a"]=d},5471:function(t,e,i){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var a=i("1d80"),c=i("5899"),n="["+c+"]",s=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),r=function(t){return function(e){var i=String(a(e));return 1&t&&(i=i.replace(s,"")),2&t&&(i=i.replace(o,"")),i}};t.exports={start:r(1),end:r(2),trim:r(3)}},"5cd8":function(t,e,i){"use strict";(function(t){var a=i("5530"),c=(i("a9e3"),i("99af"),i("ac1f"),i("1276"),i("5319"),i("7a23")),n=i("5502"),s=i("2824"),o=i("370e");e["a"]={components:{BaseLayout:s["a"],MallItemChooser:o["a"]},props:{id:{type:[String,Number],default:1}},data:function(){var t=Object(c["E"])({detail:{},like:!1,choose:{num:0,spec:[]},action:"",disabled:!1,popup:!1,category:[],active:0,pid:0}),e=Object(c["F"])(0);return{state:t,seckill:e}},created:function(){var e=this;this.$http.post("/mall/itemdetail?id="+this.id).then((function(i){e.state.detail=t.isEmpty(i)?null:Object(a["a"])(Object(a["a"])({},i),{image:i.image.length<=5?[i.cover]:[i.cover].concat(i.image.split(","))}),e.seckill=e.state.detail.discount?new Date(e.state.detail.discount.replace(/-/g,"/")).getTime()-(new Date).getTime():0,!t.isEmpty(i)&&e.$share(i.title,i.cover)})),this.authorized&&this.$http.get("/mall/interest?id="+this.id).then((function(i){e.state.like=!t.isEmpty(i)}))},mounted:function(){this.togglePopup(!1)},unmounted:function(){this.togglePopup(!1)},computed:Object(a["a"])(Object(a["a"])({cartNumber:function(){return this.profile&&this.profile.cartNumber&&Array.isArray(this.profile.cartNumber)?this.profile.cartNumber[0]:""}},Object(n["d"])(["profile"])),Object(n["b"])(["authorized"])),methods:Object(a["a"])({halt:function(){this.state.disabled=!0,setTimeout((function(){window.location.reload(!0)}),t.random(5e3,9999))},like:function(){var t=this;this.$http.post("/mall/interestSave?id="+this.id+"&favor="+(this.state.like?"0":"1")).then((function(){t.state.like=!t.state.like}))},save:function(t){this.state.choose=t,""!=this.state.action&&this.todo(this.state.action)},todo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.state.action=e,""==e||0==this.state.choose.num)return this.togglePopup(!0);if("add"==e&&this.$http.post("/mall/cartsave?spu="+this.state.choose.id+"&sku="+this.state.choose.sku+"&num="+this.state.choose.num+"&status=1").then((function(e){t.cartNumberAdd(t.state.choose.num)})),"buy"==e){var i="{"==this.state.detail.digital.substring(0,1)?1:0;this.$http.post("/mall/cartsave?spu="+this.state.choose.id+"&sku="+this.state.choose.sku+"&num="+this.state.choose.num+"&status=2").then((function(e){t.$router.push("bill?direct=1&digital="+i)}))}}},Object(n["c"])(["togglePopup","toggleTabbar","cartNumberAdd"]))}}).call(this,i("81b0"))},"5f6c":function(t,e,i){"use strict";i("dcb0")},"6db7":function(t,e,i){"use strict";i("a5a4")},7156:function(t,e,i){var a=i("861d"),c=i("d2bb");t.exports=function(t,e,i){var n,s;return c&&"function"==typeof(n=e.constructor)&&n!==i&&a(s=n.prototype)&&s!==i.prototype&&c(t,s),t}},"8d6d":function(t,e,i){"use strict";(function(t){var a=i("5530"),c=i("53ca"),n=(i("a9e3"),i("a15b"),i("ac1f"),i("1276"),i("b0c0"),i("7a23")),s=i("5502"),o=i("a284");e["a"]={components:{MallItem:o["a"]},props:{id:{type:[Number,String],default:0},show:{type:Boolean,default:!1}},data:function(){var t=Object(n["E"])({detail:{},id:0,num:1,sku:0,spec:"",options:{},disabled:!0,tabbarStatus:!0});return{state:t}},computed:{hasSpec:function(){return"object"==Object(c["a"])(this.state.detail.spec)&&!t.isEmpty(this.state.detail.spec)&&"object"==Object(c["a"])(this.state.detail.sku)}},watch:{show:function(t,e){t&&(this.id>0&&this.query(),this.state.tabbarStatus=this.$store.state.showTabbar),this.toggleTabbar(!t&&this.state.tabbarStatus)}},methods:Object(a["a"])({query:function(){var t=this;this.$http.get("/mall/itemdetail?id="+this.id).then((function(e){t.state.detail=e,t.state.disabled=t.hasSpec,t.id==t.state.id?t.hasSpec&&t.choose():(t.state.num=1,t.state.sku=0,t.state.spec="",t.state.options={})}))},choose:function(){var e=t.toArray(this.state.options).sort().join(","),i=0,a=0;for(var c in this.state.detail.sku){var n=this.state.detail.sku[c];if(e==n.spec.split(",").sort().join(",")){this.state.sku=n.id,i=n.stock,a=n.price;break}}this.state.disabled=0==i,this.state.detail.stock=i,this.state.detail.price=a},save:function(){var t=[];for(var e in this.state.options)for(var i in this.state.detail.spec)e==this.state.detail.spec[i].id&&t.push(this.state.detail.spec[i].name+"："+this.state.detail.spec[i].spec[this.state.options[e]]);this.state.id=this.id,this.$emit("save",{id:this.state.id,num:this.state.num,sku:this.state.sku,spec:t,digital:this.state.detail.digital}),this.togglePopup(!1)}},Object(s["c"])(["togglePopup","toggleTabbar"]))}}).call(this,i("81b0"))},"977e":function(t,e,i){"use strict";i.r(e);i("a15b");var a=i("7a23"),c=Object(a["X"])("data-v-b234c1b0");Object(a["D"])("data-v-b234c1b0");var n={key:0},s={class:"summary"},o=Object(a["k"])("span",{class:"symbol"},"￥",-1),r={class:"price1"},l={class:"price2"},u=Object(a["j"])("    "),d={key:0,class:"save"},b={key:0},p=Object(a["j"])(" 限时"),h=Object(a["k"])("span",{class:"stress"},"抢",-1),j=Object(a["j"])("购 "),f={class:"countdown"},O=Object(a["k"])("span",{class:"remain"},"还剩",-1),m=Object(a["j"])(),k={class:"group"};Object(a["B"])();var v=c((function(t,e,i,v,g,y){var I=Object(a["I"])("van-image"),w=Object(a["I"])("van-swipe-item"),_=Object(a["I"])("van-swipe"),A=Object(a["I"])("van-icon"),N=Object(a["I"])("van-count-down"),x=Object(a["I"])("van-cell"),C=Object(a["I"])("van-action-bar-icon"),E=Object(a["I"])("van-action-bar-button"),M=Object(a["I"])("van-action-bar"),S=Object(a["I"])("mall-item-chooser"),G=Object(a["I"])("van-empty"),$=Object(a["I"])("BaseLayout");return Object(a["A"])(),Object(a["g"])($,{title:"商品详情",navbar:"auto"},{default:c((function(){return[g.state.detail&&g.state.detail.status?(Object(a["A"])(),Object(a["g"])("div",n,[Object(a["k"])(_,{class:"image",autoplay:3e3,"lazy-render":""},{default:c((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(g.state.detail.image,(function(t){return Object(a["A"])(),Object(a["g"])(w,{key:t},{default:c((function(){return[Object(a["k"])(I,{src:t,width:"100%",fit:"contain"},null,8,["src"])]})),_:2},1024)})),128))]})),_:1}),Object(a["k"])("div",s,[Object(a["k"])(x,{class:"head",border:!1,center:""},{title:c((function(){return[o,Object(a["k"])("span",r,Object(a["M"])(g.state.detail.price),1)]})),label:c((function(){return[Object(a["U"])(Object(a["k"])("span",null,[Object(a["j"])(Object(a["M"])(g.seckill>0?"平日价":"市场价")+"  ",1),Object(a["k"])("span",l,"￥"+Object(a["M"])(g.state.detail.price_original),1),u],512),[[a["Q"],g.state.detail.price_original>g.state.detail.price]]),g.seckill>0?(Object(a["A"])(),Object(a["g"])("span",d,"立省  "+Object(a["M"])(g.state.detail.price_original-g.state.detail.price)+" 元",1)):Object(a["U"])((Object(a["A"])(),Object(a["g"])("span",{key:1},"月销量  "+Object(a["M"])(g.state.detail.sales)+" 件",513)),[[a["Q"],g.state.detail.sales]])]})),value:c((function(){return[g.seckill>0?(Object(a["A"])(),Object(a["g"])("div",b,[Object(a["k"])(A,{class:"flag",name:"underway-o"},{default:c((function(){return[p,h,j]})),_:1}),Object(a["k"])("div",f,[O,m,Object(a["k"])(N,{time:g.seckill,onFinish:y.halt},null,8,["time","onFinish"])])])):(Object(a["A"])(),Object(a["g"])(A,{key:1,name:g.state.like?"like":"like-o",size:"28",color:"#FF0",onClick:Object(a["W"])(y.like,["stop"])},null,8,["name","onClick"]))]})),_:1}),Object(a["k"])(x,{title:g.state.detail.title,class:"van-multi-ellipsis--l2 title",label:g.state.detail.feature,border:!1},null,8,["title","label"])]),Object(a["k"])("div",k,[Object(a["k"])(x,{title:"商品库存",value:(g.state.detail?g.state.detail.stock:"0")+" 件"},null,8,["value"]),Object(a["k"])(x,{title:"商品型号",value:0==g.state.choose.spec.length?"请选择":g.state.choose.spec.join("，"),"is-link":"",onClick:e[1]||(e[1]=function(t){return y.todo()})},null,8,["value"])]),Object(a["k"])("div",{class:"intro",innerHTML:g.state.detail.intro},null,8,["innerHTML"]),Object(a["k"])(M,null,{default:c((function(){return[Object(a["k"])(C,{icon:"wap-home-o",text:"首页",onClick:e[2]||(e[2]=function(e){return t.$router.push("/")})}),Object(a["k"])(C,{icon:"balance-list-o",text:"订单",onClick:e[3]||(e[3]=function(e){return t.$router.push("/my/order")})}),Object(a["k"])(C,{icon:"cart-o",text:"购物车",badge:y.cartNumber,onClick:e[4]||(e[4]=function(e){return t.$router.push("cart")})},null,8,["badge"]),0==g.state.detail.digital&&g.seckill<=0?(Object(a["A"])(),Object(a["g"])(E,{key:0,disabled:g.state.disabled,type:"warning",text:"加入购物车",onClick:e[5]||(e[5]=function(t){return y.todo("add")})},null,8,["disabled"])):Object(a["h"])("",!0),Object(a["k"])(E,{disabled:g.state.disabled,type:"danger",text:"立即购买",onClick:e[6]||(e[6]=function(t){return y.todo("buy")})},null,8,["disabled"])]})),_:1}),Object(a["k"])(S,{id:i.id,show:t.$store.state.showPopup,onSave:y.save},null,8,["id","show","onSave"])])):Object(a["h"])("",!0),Object(a["U"])(Object(a["k"])(G,{image:"error",description:"商品不存在或已下架"},null,512),[[a["Q"],null==g.state.detail]])]})),_:1})})),g=i("5cd8"),y=(i("e9e5"),i("6b0d")),I=i.n(y);const w=I()(g["a"],[["render",v],["__scopeId","data-v-b234c1b0"]]);e["default"]=w},"99af":function(t,e,i){"use strict";var a=i("23e7"),c=i("d039"),n=i("e8b5"),s=i("861d"),o=i("7b0b"),r=i("50c4"),l=i("8418"),u=i("65f0"),d=i("1dde"),b=i("b622"),p=i("2d00"),h=b("isConcatSpreadable"),j=9007199254740991,f="Maximum allowed index exceeded",O=p>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=d("concat"),k=function(t){if(!s(t))return!1;var e=t[h];return void 0!==e?!!e:n(t)},v=!O||!m;a({target:"Array",proto:!0,forced:v},{concat:function(t){var e,i,a,c,n,s=o(this),d=u(s,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?s:arguments[e],k(n)){if(c=r(n.length),b+c>j)throw TypeError(f);for(i=0;i<c;i++,b++)i in n&&l(d,b,n[i])}else{if(b>=j)throw TypeError(f);l(d,b++,n)}return d.length=b,d}})},a15b:function(t,e,i){"use strict";var a=i("23e7"),c=i("44ad"),n=i("fc6a"),s=i("a640"),o=[].join,r=c!=Object,l=s("join",",");a({target:"Array",proto:!0,forced:r||!l},{join:function(t){return o.call(n(this),void 0===t?",":t)}})},a284:function(t,e,i){"use strict";var a=i("7a23"),c=Object(a["X"])("data-v-74ca0ab6");Object(a["D"])("data-v-74ca0ab6");var n={class:"van-multi-ellipsis--l2"},s={class:"price1"},o=Object(a["j"])("   "),r={class:"stock"},l=Object(a["j"])("库存 "),u={class:"red"},d=Object(a["j"])(" 件  "),b={class:"sales"},p=Object(a["j"])("月销 "),h={class:"red"},j=Object(a["j"])(" 件");Object(a["B"])();var f=c((function(t,e,i,f,O,m){var k=Object(a["I"])("van-image"),v=Object(a["I"])("van-cell"),g=Object(a["I"])("van-icon");return Object(a["A"])(),Object(a["g"])("div",{class:["item",{grid:m.isGrid}],style:{width:m.width,height:m.height},onClick:e[2]||(e[2]=function(t){return m.forward(i.item)})},[Object(a["k"])(k,{class:"image",style:{width:m.isGrid?"100%":m.height,height:m.isGrid?m.width:"100%"},radius:"5",fit:i.fit,src:i.item.cover},null,8,["style","fit","src"]),Object(a["k"])("div",{class:"intro",style:{width:m.isGrid?"100%":"calc(100% - "+m.height+")",height:m.isGrid?"calc(100% - "+m.width+")":"100%"}},[Object(a["k"])(v,{style:{padding:"5px 5px 0 5px"},border:!1},{title:c((function(){return[Object(a["k"])("div",n,Object(a["M"])(i.item.title),1)]})),label:c((function(){return[Object(a["U"])(Object(a["k"])("div",{class:"van-ellipsis"},Object(a["M"])(i.item.feature),513),[[a["Q"],!m.isGrid&&i.size>=100]])]})),_:1}),Object(a["k"])(v,{style:{padding:"0 10px 5px 10px"},border:!1,center:!m.isGrid},{title:c((function(){return[Object(a["k"])("span",s,[Object(a["k"])(g,{name:"points",color:"red"}),Object(a["j"])(" "+Object(a["M"])(i.item.price),1)]),o,Object(a["U"])(Object(a["k"])("span",{class:"price2"}," ￥ "+Object(a["M"])(i.item.price_original),513),[[a["Q"],!m.isGrid&&i.item.price_original&&i.item.price_original>0]])]})),label:c((function(){return[Object(a["U"])(Object(a["k"])("span",r,[l,Object(a["k"])("span",u,Object(a["M"])(i.item.stock),1),d],512),[[a["Q"],!m.isGrid&&i.stock&&i.item.stock]]),Object(a["U"])(Object(a["k"])("span",b,[p,Object(a["k"])("span",h,Object(a["M"])(i.item.sales),1),j],512),[[a["Q"],!m.isGrid&&i.sales&&i.item.sales]])]})),"right-icon":c((function(){return[Object(a["U"])(Object(a["k"])(g,{name:"shopping-cart",size:"21",color:"#F66",onClick:e[1]||(e[1]=Object(a["W"])((function(e){return t.$emit("add",i.item)}),["stop"]))},null,512),[[a["Q"],i.cart]])]})),_:1},8,["center"]),Object(a["H"])(t.$slots,"default",{},void 0,!0)],4)],6)})),O=i("5530"),m=(i("a9e3"),i("5502")),k={props:{size:{type:Number,default:130},fit:{type:String,default:"contain"},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(O["a"])({isGrid:function(){return"boolean"==typeof this.grid?this.grid:"number"==typeof this.grid&&this.grid>0},width:function(){return this.isGrid?this.size+40+"px":"100%"},height:function(){return(this.isGrid?this.size+140:this.size)+"px"}},Object(m["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var i="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+i)}}},v=(i("5f6c"),i("6b0d")),g=i.n(v);const y=g()(k,[["render",f],["__scopeId","data-v-74ca0ab6"]]);e["a"]=y},a5a4:function(t,e,i){},a9e3:function(t,e,i){"use strict";var a=i("83ab"),c=i("da84"),n=i("94ca"),s=i("6eeb"),o=i("5135"),r=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),b=i("7c73"),p=i("241c").f,h=i("06cf").f,j=i("9bf2").f,f=i("58a8").trim,O="Number",m=c[O],k=m.prototype,v=r(b(k))==O,g=function(t){var e,i,a,c,n,s,o,r,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=f(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,c=49;break;case 79:case 111:a=8,c=55;break;default:return+l}for(n=l.slice(2),s=n.length,o=0;o<s;o++)if(r=n.charCodeAt(o),r<48||r>c)return NaN;return parseInt(n,a)}return+l};if(n(O,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var y,I=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof I&&(v?d((function(){k.valueOf.call(i)})):r(i)!=O)?l(new m(g(e)),i,I):g(e)},w=a?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;w.length>_;_++)o(m,y=w[_])&&!o(I,y)&&j(I,y,h(m,y));I.prototype=k,k.constructor=I,s(c,O,I)}},dcb0:function(t,e,i){},e9e5:function(t,e,i){"use strict";i("5471")}}]);