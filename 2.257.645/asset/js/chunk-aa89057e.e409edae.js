(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa89057e"],{"0286":function(t,e,a){"use strict";a("bfeb")},"1bc1":function(t,e,a){},"29f1":function(t,e,a){"use strict";a("1bc1")},"370e":function(t,e,a){"use strict";a("b0c0");var i=a("7a23"),n=Object(i["X"])("data-v-0c36b9c4");Object(i["D"])("data-v-0c36b9c4");var c={class:"wrapper"},s=Object(i["j"])("确 定");Object(i["B"])();var r=n((function(t,e,a,r,o,l){var u=Object(i["I"])("mall-item"),d=Object(i["I"])("van-radio"),b=Object(i["I"])("van-radio-group"),p=Object(i["I"])("van-cell"),f=Object(i["I"])("van-stepper"),h=Object(i["I"])("van-button"),j=Object(i["I"])("van-overlay");return Object(i["A"])(),Object(i["g"])(j,{show:a.show,onClick:t.togglePopup},{default:n((function(){return[Object(i["k"])("div",c,[Object(i["k"])("div",{class:"panel animate__animated animate__fadeInUpBig",onClick:e[2]||(e[2]=Object(i["W"])((function(){}),["stop"]))},[Object(i["k"])(u,{grid:!1,item:o.state.detail,cart:!1,sales:!1,class:"van-hairline--bottom",style:{paddingBottom:"10px"}},null,8,["item"]),(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(o.state.detail.spec,(function(t,e){return Object(i["U"])((Object(i["A"])(),Object(i["g"])(p,{key:e,title:t.name,border:!1},{label:n((function(){return[Object(i["k"])(b,{modelValue:o.state.options[t.id],"onUpdate:modelValue":function(e){return o.state.options[t.id]=e},direction:"horizontal","checked-color":"#ee0a24",onChange:l.choose},{default:n((function(){return[(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(t.spec,(function(e,a){return Object(i["A"])(),Object(i["g"])(d,{class:["radio",{active:o.state.options[t.id]==a}],key:a,name:a},{icon:n((function(){return[]})),default:n((function(){return[Object(i["j"])(Object(i["M"])(e),1)]})),_:2},1032,["name","class"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:2},1032,["title"])),[[i["Q"],l.hasSpec]])})),128)),Object(i["k"])(p,{title:"数量",class:"number",border:!1},{default:n((function(){return[Object(i["k"])(f,{modelValue:o.state.num,"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.state.num=t}),theme:"round","button-size":"22",min:1,max:o.state.detail.stock},null,8,["modelValue","max"])]})),_:1}),Object(i["k"])(h,{type:"danger",round:"",block:"",disabled:o.state.disabled,onClick:l.save},{default:n((function(){return[s]})),_:1},8,["disabled","onClick"])])])]})),_:1},8,["show","onClick"])})),o=a("8d6d"),l=(a("6db7"),a("6b0d")),u=a.n(l);const d=u()(o["a"],[["render",r],["__scopeId","data-v-0c36b9c4"]]);e["a"]=d},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),n=a("5899"),c="["+n+"]",s=RegExp("^"+c+c+"*"),r=RegExp(c+c+"*$"),o=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(r,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},"5cd8":function(t,e,a){"use strict";(function(t){var i=a("5530"),n=(a("a9e3"),a("99af"),a("ac1f"),a("1276"),a("7a23")),c=a("5502"),s=a("2824"),r=a("370e");e["a"]={components:{BaseLayout:s["a"],MallItemChooser:r["a"]},props:{id:{type:[String,Number],default:1}},data:function(){var t=Object(n["E"])({detail:{},like:!1,choose:{num:0,spec:[]},action:"",popup:!1,category:[],active:0,pid:0});return{state:t}},created:function(){var e=this;this.$http.post("/mall/itemdetail?id="+this.id).then((function(a){e.state.detail=t.isEmpty(a)?null:Object(i["a"])(Object(i["a"])({},a),{image:a.image.length<=5?[a.cover]:[a.cover].concat(a.image.split(","))})})),this.authorized&&this.$http.get("/mall/interestList?id="+this.id).then((function(a){e.state.like=!t.isEmpty(a)}))},mounted:function(){this.togglePopup(!1)},unmounted:function(){this.togglePopup(!1)},computed:Object(i["a"])(Object(i["a"])({cartNumber:function(){return this.profile&&this.profile.cartNumber&&Array.isArray(this.profile.cartNumber)?this.profile.cartNumber[0]:""}},Object(c["d"])(["profile"])),Object(c["b"])(["authorized"])),methods:Object(i["a"])({like:function(t){var e=this;this.$http.post("/mall/interestSave?id="+t+"&remove="+(this.state.like?"1":"0")).then((function(){e.state.like=!e.state.like}))},save:function(t){this.state.choose=t,""!=this.state.action&&this.todo(this.state.action)},todo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.state.action=e,""==e||0==this.state.choose.num)return this.togglePopup(!0);if("add"==e&&this.$http.post("/mall/cartsave?spu="+this.state.choose.id+"&sku="+this.state.choose.sku+"&num="+this.state.choose.num+"&status=1").then((function(e){t.cartNumberAdd(t.state.choose.num)})),"buy"==e){var a="{"==this.state.detail.digital.substring(0,1)?1:0;this.$http.post("/mall/cartsave?spu="+this.state.choose.id+"&sku="+this.state.choose.sku+"&num="+this.state.choose.num+"&status=2").then((function(e){t.$router.push("bill?direct=1&digital="+a)}))}}},Object(c["c"])(["togglePopup","toggleTabbar","cartNumberAdd"]))}}).call(this,a("81b0"))},"6db7":function(t,e,a){"use strict";a("a5a4")},7156:function(t,e,a){var i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var c,s;return n&&"function"==typeof(c=e.constructor)&&c!==a&&i(s=c.prototype)&&s!==a.prototype&&n(t,s),t}},"8d6d":function(t,e,a){"use strict";(function(t){var i=a("5530"),n=a("53ca"),c=(a("a9e3"),a("a15b"),a("ac1f"),a("1276"),a("b0c0"),a("7a23")),s=a("5502"),r=a("a284");e["a"]={components:{MallItem:r["a"]},props:{id:{type:[Number,String],default:0},show:{type:Boolean,default:!1}},data:function(){var t=Object(c["E"])({detail:{},id:0,num:1,sku:0,spec:"",options:{},disabled:!0,tabbarStatus:!0});return{state:t}},computed:{hasSpec:function(){return"object"==Object(n["a"])(this.state.detail.spec)&&!t.isEmpty(this.state.detail.spec)&&"object"==Object(n["a"])(this.state.detail.sku)}},watch:{show:function(t,e){t&&(this.id>0&&this.query(),this.state.tabbarStatus=this.$store.state.showTabbar),this.toggleTabbar(!t&&this.state.tabbarStatus)}},methods:Object(i["a"])({query:function(){var t=this;this.$http.get("/mall/itemdetail?id="+this.id).then((function(e){t.state.detail=e,t.state.disabled=t.hasSpec,t.id==t.state.id?t.hasSpec&&t.choose():(t.state.num=1,t.state.sku=0,t.state.spec="",t.state.options={})}))},choose:function(){var e=t.toArray(this.state.options).sort().join(","),a=0,i=0;for(var n in this.state.detail.sku){var c=this.state.detail.sku[n];if(e==c.spec.split(",").sort().join(",")){this.state.sku=c.id,a=c.stock,i=c.price;break}}this.state.disabled=0==a,this.state.detail.stock=a,this.state.detail.price=i},save:function(){var t=[];for(var e in this.state.options)for(var a in this.state.detail.spec)e==this.state.detail.spec[a].id&&t.push(this.state.detail.spec[a].name+"："+this.state.detail.spec[a].spec[this.state.options[e]]);this.state.id=this.id,this.$emit("save",{id:this.state.id,num:this.state.num,sku:this.state.sku,spec:t,digital:this.state.detail.digital}),this.togglePopup(!1)}},Object(s["c"])(["togglePopup","toggleTabbar"]))}}).call(this,a("81b0"))},"977e":function(t,e,a){"use strict";a.r(e);a("a15b");var i=a("7a23"),n=Object(i["X"])("data-v-6750ff0a");Object(i["D"])("data-v-6750ff0a");var c={key:0},s={class:"group"},r={class:"price1"},o=Object(i["k"])("span",{class:"red"},"￥",-1),l=Object(i["j"])("市场价  "),u={class:"price2"},d=Object(i["j"])("    "),b=Object(i["j"])("月销量  "),p={class:"red"},f=Object(i["j"])(" 件"),h={class:"group"};Object(i["B"])();var j=n((function(t,e,a,j,O,m){var g=Object(i["I"])("van-image"),v=Object(i["I"])("van-swipe-item"),k=Object(i["I"])("van-swipe"),y=Object(i["I"])("van-icon"),I=Object(i["I"])("van-cell"),_=Object(i["I"])("van-action-bar-icon"),w=Object(i["I"])("van-action-bar-button"),N=Object(i["I"])("van-action-bar"),A=Object(i["I"])("mall-item-chooser"),x=Object(i["I"])("van-empty"),C=Object(i["I"])("BaseLayout");return Object(i["A"])(),Object(i["g"])(C,{title:"商品详情",navbar:"auto"},{default:n((function(){return[O.state.detail&&O.state.detail.status?(Object(i["A"])(),Object(i["g"])("div",c,[Object(i["k"])(k,{class:"image",autoplay:3e3,"lazy-render":""},{default:n((function(){return[(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(O.state.detail.image,(function(t){return Object(i["A"])(),Object(i["g"])(v,{key:t},{default:n((function(){return[Object(i["k"])(g,{src:t,width:"100%",fit:"contain"},null,8,["src"])]})),_:2},1024)})),128))]})),_:1}),Object(i["k"])("div",s,[Object(i["k"])(I,{center:"",border:!1},{title:n((function(){return[Object(i["k"])("span",r,[o,Object(i["j"])(Object(i["M"])(O.state.detail.price),1)])]})),label:n((function(){return[Object(i["U"])(Object(i["k"])("span",null,[l,Object(i["k"])("span",u,"￥"+Object(i["M"])(O.state.detail.price_original),1),d],512),[[i["Q"],O.state.detail.price_original]]),Object(i["U"])(Object(i["k"])("span",null,[b,Object(i["k"])("span",p,Object(i["M"])(O.state.detail.sales),1),f],512),[[i["Q"],O.state.detail.sales]])]})),"right-icon":n((function(){return[Object(i["k"])(y,{name:O.state.like?"like":"like-o",size:"28",color:"#F00",onClick:e[1]||(e[1]=Object(i["W"])((function(t){return m.like(a.id)}),["stop"]))},null,8,["name"])]})),_:1}),Object(i["k"])(I,{title:O.state.detail.title,class:"van-multi-ellipsis--l2 title",label:O.state.detail.feature,border:!1},null,8,["title","label"])]),Object(i["k"])("div",h,[Object(i["k"])(I,{title:"商品库存",value:(O.state.detail?O.state.detail.stock:"0")+" 件"},null,8,["value"]),Object(i["k"])(I,{title:"商品型号",value:0==O.state.choose.spec.length?"请选择":O.state.choose.spec.join("，"),"is-link":"",onClick:e[2]||(e[2]=function(t){return m.todo()})},null,8,["value"])]),Object(i["k"])("div",{class:"intro",innerHTML:O.state.detail.intro},null,8,["innerHTML"]),Object(i["k"])(N,null,{default:n((function(){return[Object(i["k"])(_,{icon:"wap-home-o",text:"首页",onClick:e[3]||(e[3]=function(e){return t.$router.push("/")})}),Object(i["k"])(_,{icon:"balance-list-o",text:"订单",onClick:e[4]||(e[4]=function(e){return t.$router.push("/my/order")})}),Object(i["k"])(_,{icon:"cart-o",text:"购物车",badge:m.cartNumber,onClick:e[5]||(e[5]=function(e){return t.$router.push("cart")})},null,8,["badge"]),0==O.state.detail.digital?(Object(i["A"])(),Object(i["g"])(w,{key:0,type:"warning",text:"加入购物车",onClick:e[6]||(e[6]=function(t){return m.todo("add")})})):Object(i["h"])("",!0),Object(i["k"])(w,{type:"danger",text:"立即购买",onClick:e[7]||(e[7]=function(t){return m.todo("buy")})})]})),_:1}),Object(i["k"])(A,{id:a.id,show:t.$store.state.showPopup,onSave:m.save},null,8,["id","show","onSave"])])):Object(i["h"])("",!0),Object(i["U"])(Object(i["k"])(x,{image:"error",description:"商品不存在或已下架"},null,512),[[i["Q"],null==O.state.detail]])]})),_:1})})),O=a("5cd8"),m=(a("29f1"),a("6b0d")),g=a.n(m);const v=g()(O["a"],[["render",j],["__scopeId","data-v-6750ff0a"]]);e["default"]=v},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),c=a("e8b5"),s=a("861d"),r=a("7b0b"),o=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),b=a("b622"),p=a("2d00"),f=b("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",O=p>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=d("concat"),g=function(t){if(!s(t))return!1;var e=t[f];return void 0!==e?!!e:c(t)},v=!O||!m;i({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,i,n,c,s=r(this),d=u(s,0),b=0;for(e=-1,i=arguments.length;e<i;e++)if(c=-1===e?s:arguments[e],g(c)){if(n=o(c.length),b+n>h)throw TypeError(j);for(a=0;a<n;a++,b++)a in c&&l(d,b,c[a])}else{if(b>=h)throw TypeError(j);l(d,b++,c)}return d.length=b,d}})},a15b:function(t,e,a){"use strict";var i=a("23e7"),n=a("44ad"),c=a("fc6a"),s=a("a640"),r=[].join,o=n!=Object,l=s("join",",");i({target:"Array",proto:!0,forced:o||!l},{join:function(t){return r.call(c(this),void 0===t?",":t)}})},a284:function(t,e,a){"use strict";var i=a("7a23"),n=Object(i["X"])("data-v-b6dac06c");Object(i["D"])("data-v-b6dac06c");var c={class:"price1"},s=Object(i["j"])("   "),r={class:"stock"},o=Object(i["j"])("库存 "),l={class:"red"},u=Object(i["j"])(" 件  "),d={class:"sales"},b=Object(i["j"])("月销 "),p={class:"red"},f=Object(i["j"])(" 件");Object(i["B"])();var h=n((function(t,e,a,h,j,O){var m=Object(i["I"])("van-image"),g=Object(i["I"])("van-col"),v=Object(i["I"])("van-cell"),k=Object(i["I"])("van-icon"),y=Object(i["I"])("van-row");return Object(i["A"])(),Object(i["g"])(y,{class:["item",{grid:O.isGrid}],style:{width:O.width,height:O.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return O.forward(a.item)})},{default:n((function(){return[Object(i["k"])(g,{class:"image",span:O.isGrid?24:8},{default:n((function(){return[Object(i["k"])(m,{width:"100%",height:"100%",radius:"5",fit:O.isGrid?"contain":"cover",src:a.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(i["k"])(g,{class:"intro",span:O.isGrid?24:16},{default:n((function(){return[Object(i["k"])(v,{style:{padding:"5px 5px 0 5px"},border:!1},{title:n((function(){return[Object(i["k"])("div",{class:O.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(i["M"])(a.item.title),3)]})),label:n((function(){return[Object(i["U"])(Object(i["k"])("div",{class:"van-ellipsis"},Object(i["M"])(a.item.feature),513),[[i["Q"],a.list>=100]])]})),_:1}),Object(i["k"])(v,{style:{padding:"0 10px 5px 10px"},border:!1,center:!O.isGrid},{title:n((function(){return[Object(i["k"])("span",c,[Object(i["k"])(k,{name:"points",color:"red"}),Object(i["j"])(" "+Object(i["M"])(a.item.price),1)]),s,Object(i["U"])(Object(i["k"])("span",{class:"price2"}," ￥ "+Object(i["M"])(a.item.price_original),513),[[i["Q"],!O.isGrid&&a.item.price_original&&a.item.price_original>0]])]})),label:n((function(){return[Object(i["U"])(Object(i["k"])("span",r,[o,Object(i["k"])("span",l,Object(i["M"])(a.item.stock),1),u],512),[[i["Q"],!O.isGrid&&a.stock&&a.item.stock]]),Object(i["U"])(Object(i["k"])("span",d,[b,Object(i["k"])("span",p,Object(i["M"])(a.item.sales),1),f],512),[[i["Q"],!O.isGrid&&a.sales&&a.item.sales]])]})),"right-icon":n((function(){return[Object(i["U"])(Object(i["k"])(k,{name:"shopping-cart",size:"21",color:"#F66",onClick:e[1]||(e[1]=Object(i["W"])((function(e){return t.$emit("add",a.item)}),["stop"]))},null,512),[[i["Q"],a.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),j=a("5530"),O=(a("a9e3"),a("5502")),m={props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(j["a"])({isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},Object(O["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var a="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+a)}}},g=(a("0286"),a("6b0d")),v=a.n(g);const k=v()(m,[["render",h],["__scopeId","data-v-b6dac06c"]]);e["a"]=k},a5a4:function(t,e,a){},a9e3:function(t,e,a){"use strict";var i=a("83ab"),n=a("da84"),c=a("94ca"),s=a("6eeb"),r=a("5135"),o=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),b=a("7c73"),p=a("241c").f,f=a("06cf").f,h=a("9bf2").f,j=a("58a8").trim,O="Number",m=n[O],g=m.prototype,v=o(b(g))==O,k=function(t){var e,a,i,n,c,s,r,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=j(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(c=l.slice(2),s=c.length,r=0;r<s;r++)if(o=c.charCodeAt(r),o<48||o>n)return NaN;return parseInt(c,i)}return+l};if(c(O,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var y,I=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof I&&(v?d((function(){g.valueOf.call(a)})):o(a)!=O)?l(new m(k(e)),a,I):k(e)},_=i?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;_.length>w;w++)r(m,y=_[w])&&!r(I,y)&&h(I,y,f(m,y));I.prototype=g,g.constructor=I,s(n,O,I)}},bfeb:function(t,e,a){}}]);