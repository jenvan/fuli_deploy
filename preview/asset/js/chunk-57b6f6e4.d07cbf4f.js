(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57b6f6e4"],{2324:function(t,e,a){"use strict";a("7e3a")},"370e":function(t,e,a){"use strict";a("b0c0");var i=a("7a23"),n=Object(i["S"])("data-v-71190905");Object(i["B"])("data-v-71190905");var c={class:"wrapper"},s=Object(i["i"])("确 定");Object(i["z"])();var o=n((function(t,e,a,o,r,l){var u=Object(i["G"])("mall-item"),d=Object(i["G"])("van-radio"),b=Object(i["G"])("van-radio-group"),p=Object(i["G"])("van-cell"),j=Object(i["G"])("van-stepper"),h=Object(i["G"])("van-button"),f=Object(i["G"])("van-overlay");return Object(i["y"])(),Object(i["g"])(f,{show:a.show,onClick:t.togglePopup},{default:n((function(){return[Object(i["j"])("div",c,[Object(i["j"])("div",{class:"panel animate__animated animate__fadeInUpBig",onClick:e[2]||(e[2]=Object(i["R"])((function(){}),["stop"]))},[Object(i["j"])(u,{grid:!1,item:r.state.detail,cart:!1,sales:!1,class:"van-hairline--bottom",style:{paddingBottom:"10px"}},null,8,["item"]),(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(r.state.detail.spec,(function(t,e){return Object(i["Q"])((Object(i["y"])(),Object(i["g"])(p,{key:e,title:t.name,border:!1},{label:n((function(){return[Object(i["j"])(b,{modelValue:r.state.options[t.id],"onUpdate:modelValue":function(e){return r.state.options[t.id]=e},direction:"horizontal","checked-color":"#ee0a24",onChange:l.choose},{default:n((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(t.spec,(function(e,a){return Object(i["y"])(),Object(i["g"])(d,{class:["radio",{active:r.state.options[t.id]==a}],key:a,name:a},{icon:n((function(){return[]})),default:n((function(){return[Object(i["i"])(Object(i["K"])(e),1)]})),_:2},1032,["name","class"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:2},1032,["title"])),[[i["N"],l.hasSpec]])})),128)),Object(i["j"])(p,{title:"数量",class:"number",border:!1},{default:n((function(){return[Object(i["j"])(j,{modelValue:r.state.num,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.state.num=t}),theme:"round","button-size":"22",min:1,max:r.state.detail.stock},null,8,["modelValue","max"])]})),_:1}),Object(i["j"])(h,{type:"danger",round:"",block:"",disabled:r.state.disabled,onClick:l.save},{default:n((function(){return[s]})),_:1},8,["disabled","onClick"])])])]})),_:1},8,["show","onClick"])})),r=a("8d6d"),l=(a("2324"),a("6b0d")),u=a.n(l);const d=u()(r["a"],[["render",o],["__scopeId","data-v-71190905"]]);e["a"]=d},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),n=a("5899"),c="["+n+"]",s=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),r=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:r(1),end:r(2),trim:r(3)}},"5cd8":function(t,e,a){"use strict";(function(t){var i=a("5530"),n=(a("a9e3"),a("99af"),a("ac1f"),a("1276"),a("7a23")),c=a("5502"),s=a("2824"),o=a("370e");e["a"]={components:{BaseLayout:s["a"],MallItemChooser:o["a"]},props:{id:{type:[String,Number],default:1}},data:function(){var t=Object(n["C"])({detail:{},like:!1,choose:{num:0,spec:[]},action:"",popup:!1,category:[],active:0,pid:0});return{state:t}},created:function(){var e=this;this.$http.post("/mall/itemdetail?id="+this.id).then((function(a){e.state.detail=t.isEmpty(a)?null:Object(i["a"])(Object(i["a"])({},a),{image:a.image.length<=5?[a.cover]:[a.cover].concat(a.image.split(","))})})),this.authorized&&this.$http.get("/mall/interestList?id="+this.id).then((function(a){e.state.like=!t.isEmpty(a)}))},mounted:function(){this.togglePopup(!1)},unmounted:function(){this.togglePopup(!1)},computed:Object(i["a"])(Object(i["a"])({},Object(c["d"])(["profile"])),Object(c["b"])(["authorized"])),methods:Object(i["a"])({like:function(t){var e=this;this.$http.post("/mall/interestSave?id="+t+"&remove="+(this.state.like?"1":"0")).then((function(){e.state.like=!e.state.like}))},save:function(t){this.state.choose=t,""!=this.state.action&&this.todo(this.state.action)},todo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.state.action=e,""==e||0==this.state.choose.num)return this.togglePopup(!0);"add"==e&&this.$http.post("/mall/cartsave?spu="+this.state.choose.id+"&sku="+this.state.choose.sku+"&num="+this.state.choose.num).then((function(e){t.cartNumberAdd(t.state.choose.num)})),"buy"==e&&this.$http.post("/mall/cartsave?spu="+this.state.choose.id+"&sku="+this.state.choose.sku+"&num="+this.state.choose.num+"&status=2").then((function(e){t.$router.push("bill?direct=1&digital="+t.state.choose.digital)}))}},Object(c["c"])(["togglePopup","toggleTabbar","cartNumberAdd"]))}}).call(this,a("81b0"))},6977:function(t,e,a){"use strict";a("de46")},7156:function(t,e,a){var i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var c,s;return n&&"function"==typeof(c=e.constructor)&&c!==a&&i(s=c.prototype)&&s!==a.prototype&&n(t,s),t}},"7e3a":function(t,e,a){},8829:function(t,e,a){},"8d6d":function(t,e,a){"use strict";(function(t){var i=a("5530"),n=a("53ca"),c=(a("a9e3"),a("a15b"),a("ac1f"),a("1276"),a("b0c0"),a("7a23")),s=a("5502"),o=a("a284");e["a"]={components:{MallItem:o["a"]},props:{id:{type:[Number,String],default:0},show:{type:Boolean,default:!1}},data:function(){var t=Object(c["C"])({detail:{},id:0,num:1,sku:0,spec:"",options:{},disabled:!0,tabbarStatus:!0});return{state:t}},computed:{hasSpec:function(){return"object"==Object(n["a"])(this.state.detail.spec)&&!t.isEmpty(this.state.detail.spec)&&"object"==Object(n["a"])(this.state.detail.sku)}},watch:{show:function(t,e){t&&(this.query(),this.state.tabbarStatus=this.$store.state.showTabbar),this.toggleTabbar(!t&&this.state.tabbarStatus)}},methods:Object(i["a"])({query:function(){var t=this;this.$http.get("/mall/itemdetail?id="+this.id).then((function(e){t.state.detail=e,t.state.disabled=t.hasSpec,t.id==t.state.id?t.hasSpec&&t.choose():(t.state.num=1,t.state.sku=0,t.state.spec="",t.state.options={})}))},choose:function(){var e=t.toArray(this.state.options).sort().join(","),a=0,i=0;for(var n in this.state.detail.sku){var c=this.state.detail.sku[n];if(e==c.spec.split(",").sort().join(",")){this.state.sku=c.id,a=c.stock,i=c.price;break}}this.state.disabled=0==a,this.state.detail.stock=a,this.state.detail.price=i},save:function(){var t=[];for(var e in this.state.options)for(var a in this.state.detail.spec)e==this.state.detail.spec[a].id&&t.push(this.state.detail.spec[a].name+"："+this.state.detail.spec[a].spec[this.state.options[e]]);this.state.id=this.id,this.$emit("save",{id:this.state.id,num:this.state.num,sku:this.state.sku,spec:t,digital:this.state.detail.digital}),this.togglePopup(!1)}},Object(s["c"])(["togglePopup","toggleTabbar"]))}}).call(this,a("81b0"))},"977e":function(t,e,a){"use strict";a.r(e);a("a15b");var i=a("7a23"),n=Object(i["S"])("data-v-4a3a770c");Object(i["B"])("data-v-4a3a770c");var c={key:0},s={class:"group"},o={class:"price1"},r=Object(i["j"])("span",{class:"red"},"￥",-1),l=Object(i["i"])("市场价  "),u={class:"price2"},d=Object(i["i"])("    "),b=Object(i["i"])("月销量  "),p={class:"red"},j=Object(i["i"])(" 件"),h={class:"group"};Object(i["z"])();var f=n((function(t,e,a,f,O,m){var g=Object(i["G"])("van-image"),v=Object(i["G"])("van-swipe-item"),y=Object(i["G"])("van-swipe"),k=Object(i["G"])("van-icon"),_=Object(i["G"])("van-cell"),G=Object(i["G"])("van-action-bar-icon"),N=Object(i["G"])("van-action-bar-button"),w=Object(i["G"])("van-action-bar"),x=Object(i["G"])("mall-item-chooser"),I=Object(i["G"])("van-empty"),C=Object(i["G"])("BaseLayout");return Object(i["y"])(),Object(i["g"])(C,{title:"商品详情",notitle:""},{default:n((function(){return[O.state.detail&&O.state.detail.status?(Object(i["y"])(),Object(i["g"])("div",c,[Object(i["j"])(y,{class:"image",autoplay:3e3,"lazy-render":""},{default:n((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(O.state.detail.image,(function(t){return Object(i["y"])(),Object(i["g"])(v,{key:t},{default:n((function(){return[Object(i["j"])(g,{src:t,width:"100%",fit:"contain"},null,8,["src"])]})),_:2},1024)})),128))]})),_:1}),Object(i["j"])("div",s,[Object(i["j"])(_,{center:"",border:!1},{title:n((function(){return[Object(i["j"])("span",o,[r,Object(i["i"])(Object(i["K"])(O.state.detail.price),1)])]})),label:n((function(){return[Object(i["Q"])(Object(i["j"])("span",null,[l,Object(i["j"])("span",u,"￥"+Object(i["K"])(O.state.detail.price_original),1),d],512),[[i["N"],O.state.detail.price_original]]),Object(i["Q"])(Object(i["j"])("span",null,[b,Object(i["j"])("span",p,Object(i["K"])(O.state.detail.sales),1),j],512),[[i["N"],O.state.detail.sales]])]})),"right-icon":n((function(){return[Object(i["j"])(k,{name:O.state.like?"like":"like-o",size:"28",color:"#F00",onClick:e[1]||(e[1]=Object(i["R"])((function(t){return m.like(a.id)}),["stop"]))},null,8,["name"])]})),_:1}),Object(i["j"])(_,{title:O.state.detail.title,class:"van-multi-ellipsis--l2 title",label:O.state.detail.feature,border:!1},null,8,["title","label"])]),Object(i["j"])("div",h,[Object(i["j"])(_,{title:"商品库存",value:(O.state.detail?O.state.detail.stock:"0")+" 件"},null,8,["value"]),Object(i["j"])(_,{title:"商品型号",value:0==O.state.choose.spec.length?"请选择":O.state.choose.spec.join("，"),"is-link":"",onClick:e[2]||(e[2]=function(t){return m.todo()})},null,8,["value"]),Object(i["j"])(_,{title:"优惠券",value:"无","is-link":""})]),Object(i["j"])("div",{class:"detail",innerHTML:O.state.detail.intro},null,8,["innerHTML"]),Object(i["j"])(w,null,{default:n((function(){return[Object(i["j"])(G,{icon:"wap-home-o",text:"首页",onClick:e[3]||(e[3]=function(e){return t.$router.push("/")})}),Object(i["j"])(G,{icon:"balance-list-o",text:"订单",onClick:e[4]||(e[4]=function(e){return t.$router.push("/my/order")})}),Object(i["j"])(G,{icon:"cart-o",text:"购物车",badge:t.profile&&t.profile.cartNumber?t.profile.cartNumber:"",onClick:e[5]||(e[5]=function(e){return t.$router.push("cart")})},null,8,["badge"]),0==O.state.detail.digital?(Object(i["y"])(),Object(i["g"])(N,{key:0,type:"warning",text:"加入购物车",onClick:e[6]||(e[6]=function(t){return m.todo("add")})})):Object(i["h"])("",!0),Object(i["j"])(N,{type:"danger",text:"立即购买",onClick:e[7]||(e[7]=function(t){return m.todo("buy")})})]})),_:1}),Object(i["j"])(x,{id:a.id,show:t.$store.state.showPopup,onSave:m.save},null,8,["id","show","onSave"])])):Object(i["h"])("",!0),Object(i["Q"])(Object(i["j"])(I,{image:"error",description:"商品不存在或已下架"},null,512),[[i["N"],null==O.state.detail]])]})),_:1})})),O=a("5cd8"),m=(a("6977"),a("6b0d")),g=a.n(m);const v=g()(O["a"],[["render",f],["__scopeId","data-v-4a3a770c"]]);e["default"]=v},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),c=a("e8b5"),s=a("861d"),o=a("7b0b"),r=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),b=a("b622"),p=a("2d00"),j=b("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",O=p>=51||!n((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),m=d("concat"),g=function(t){if(!s(t))return!1;var e=t[j];return void 0!==e?!!e:c(t)},v=!O||!m;i({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,i,n,c,s=o(this),d=u(s,0),b=0;for(e=-1,i=arguments.length;e<i;e++)if(c=-1===e?s:arguments[e],g(c)){if(n=r(c.length),b+n>h)throw TypeError(f);for(a=0;a<n;a++,b++)a in c&&l(d,b,c[a])}else{if(b>=h)throw TypeError(f);l(d,b++,c)}return d.length=b,d}})},a15b:function(t,e,a){"use strict";var i=a("23e7"),n=a("44ad"),c=a("fc6a"),s=a("a640"),o=[].join,r=n!=Object,l=s("join",",");i({target:"Array",proto:!0,forced:r||!l},{join:function(t){return o.call(c(this),void 0===t?",":t)}})},a284:function(t,e,a){"use strict";var i=a("7a23"),n=Object(i["S"])("data-v-0973496a");Object(i["B"])("data-v-0973496a");var c={class:"price1"},s=Object(i["j"])("span",{class:"red"},"￥",-1),o=Object(i["i"])("   "),r={class:"stock"},l=Object(i["i"])("库存 "),u={class:"red"},d=Object(i["i"])(" 件  "),b={class:"sales"},p=Object(i["i"])("月销 "),j={class:"red"},h=Object(i["i"])(" 件");Object(i["z"])();var f=n((function(t,e,a,f,O,m){var g=Object(i["G"])("van-image"),v=Object(i["G"])("van-col"),y=Object(i["G"])("van-cell"),k=Object(i["G"])("van-icon"),_=Object(i["G"])("van-row");return Object(i["y"])(),Object(i["g"])(_,{class:["item",{grid:m.isGrid}],style:{width:m.width,height:m.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return m.forward(a.item)})},{default:n((function(){return[Object(i["j"])(v,{class:"image",span:m.isGrid?24:8},{default:n((function(){return[Object(i["j"])(g,{width:"100%",height:"100%",radius:"5",fit:m.isGrid?"contain":"cover",src:a.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(i["j"])(v,{class:"intro",span:m.isGrid?24:16},{default:n((function(){return[Object(i["j"])(y,{style:{padding:"5px 5px 0 5px"},border:!1},{title:n((function(){return[Object(i["j"])("div",{class:m.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(i["K"])(a.item.title),3)]})),label:n((function(){return[Object(i["Q"])(Object(i["j"])("div",{class:"van-ellipsis"},Object(i["K"])(a.item.feature),513),[[i["N"],a.list>=100]])]})),_:1}),Object(i["j"])(y,{style:{padding:"0 10px 5px 10px"},border:!1,center:!m.isGrid},{title:n((function(){return[Object(i["j"])("span",c,[s,Object(i["i"])(" "+Object(i["K"])(a.item.price),1)]),o,Object(i["Q"])(Object(i["j"])("span",{class:"price2"}," ￥ "+Object(i["K"])(a.item.price_original),513),[[i["N"],!m.isGrid&&a.item.price_original&&a.item.price_original>0]])]})),label:n((function(){return[Object(i["Q"])(Object(i["j"])("span",r,[l,Object(i["j"])("span",u,Object(i["K"])(a.item.stock),1),d],512),[[i["N"],!m.isGrid&&a.stock&&a.item.stock]]),Object(i["Q"])(Object(i["j"])("span",b,[p,Object(i["j"])("span",j,Object(i["K"])(a.item.sales),1),h],512),[[i["N"],!m.isGrid&&a.sales&&a.item.sales]])]})),"right-icon":n((function(){return[Object(i["Q"])(Object(i["j"])(k,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(i["R"])((function(e){return t.$emit("add",a.item)}),["stop"]))},null,512),[[i["N"],a.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),O=a("5530"),m=(a("a9e3"),a("5502")),g={props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(O["a"])({isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},Object(m["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var a="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+a)}}},v=(a("b4e6"),a("6b0d")),y=a.n(v);const k=y()(g,[["render",f],["__scopeId","data-v-0973496a"]]);e["a"]=k},a9e3:function(t,e,a){"use strict";var i=a("83ab"),n=a("da84"),c=a("94ca"),s=a("6eeb"),o=a("5135"),r=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),b=a("7c73"),p=a("241c").f,j=a("06cf").f,h=a("9bf2").f,f=a("58a8").trim,O="Number",m=n[O],g=m.prototype,v=r(b(g))==O,y=function(t){var e,a,i,n,c,s,o,r,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=f(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(c=l.slice(2),s=c.length,o=0;o<s;o++)if(r=c.charCodeAt(o),r<48||r>n)return NaN;return parseInt(c,i)}return+l};if(c(O,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var k,_=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof _&&(v?d((function(){g.valueOf.call(a)})):r(a)!=O)?l(new m(y(e)),a,_):y(e)},G=i?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;G.length>N;N++)o(m,k=G[N])&&!o(_,k)&&h(_,k,j(m,k));_.prototype=g,g.constructor=_,s(n,O,_)}},b4e6:function(t,e,a){"use strict";a("8829")},de46:function(t,e,a){}}]);