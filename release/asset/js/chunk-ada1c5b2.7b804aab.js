(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ada1c5b2"],{"1bf7":function(t,e,a){"use strict";a("1f2a")},"1f2a":function(t,e,a){},3013:function(t,e,a){"use strict";(function(t){var i=a("5530"),n=(a("a9e3"),a("99af"),a("ac1f"),a("1276"),a("7a23")),c=a("5502"),s=a("2824"),o=a("370e");e["a"]={components:{BaseLayout:s["a"],MallItemChooser:o["a"]},props:{type:{type:String,default:"mall"},id:{type:[String,Number],default:1}},data:function(){var t=Object(n["B"])({detail:{},like:!1,choose:{num:0,spec:[]},action:"",popup:!1,category:[],active:0,pid:0});return{state:t}},created:function(){var e=this;this.$http.post("/mall/itemdetail?id="+this.id).then((function(a){e.state.detail=t.isEmpty(a)?null:Object(i["a"])(Object(i["a"])({},a),{image:[a.cover].concat(a.image.split(","))})})),this.authorized&&this.$http.get("/mall/interestList?id="+this.id).then((function(a){e.state.like=!t.isEmpty(a)}))},mounted:function(){this.togglePopup(!1),this.toggleTabbar(!1)},unmounted:function(){this.togglePopup(!1),this.toggleTabbar(!0)},computed:Object(i["a"])(Object(i["a"])({},Object(c["d"])(["profile"])),Object(c["b"])(["authorized"])),methods:Object(i["a"])({like:function(t){var e=this;this.$http.post("/mall/interestSave?id="+t+"&remove="+(this.state.like?"1":"0")).then((function(){e.state.like=!e.state.like}))},save:function(t){this.state.choose=t,""!=this.state.action&&this.todo(this.state.action)},todo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.state.action=e,""==e||0==this.state.choose.num)return this.togglePopup(!0);"add"==e&&this.$http.post("/mall/cartsave?spu="+this.state.choose.id+"&sku="+this.state.choose.sku+"&num="+this.state.choose.num).then((function(e){t.cartNumberAdd(t.state.choose.num)})),"buy"==e&&this.$http.post("/mall/cartsave?spu="+this.state.choose.id+"&sku="+this.state.choose.sku+"&num="+this.state.choose.num+"&status=2").then((function(e){t.$router.push("bill?direct=1")}))}},Object(c["c"])(["togglePopup","toggleTabbar","cartNumberAdd"]))}}).call(this,a("81b0"))},"370e":function(t,e,a){"use strict";a("b0c0");var i=a("7a23"),n=Object(i["R"])("data-v-6863d35d");Object(i["A"])("data-v-6863d35d");var c={class:"wrapper"},s=Object(i["h"])("确 定");Object(i["y"])();var o=n((function(t,e,a,o,r,l){var u=Object(i["F"])("mall-item"),b=Object(i["F"])("van-radio"),d=Object(i["F"])("van-radio-group"),p=Object(i["F"])("van-cell"),f=Object(i["F"])("van-stepper"),j=Object(i["F"])("van-button"),h=Object(i["F"])("van-overlay");return Object(i["x"])(),Object(i["f"])(h,{show:a.show,onClick:t.togglePopup},{default:n((function(){return[Object(i["i"])("div",c,[Object(i["i"])("div",{class:"panel animate__animated animate__fadeInUpBig",onClick:e[2]||(e[2]=Object(i["Q"])((function(){}),["stop"]))},[Object(i["i"])(u,{grid:!1,item:r.state.detail,cart:!1,sales:!1,class:"van-hairline--bottom",style:{paddingBottom:"10px"}},null,8,["item"]),(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(r.state.detail.spec,(function(t,e){return Object(i["P"])((Object(i["x"])(),Object(i["f"])(p,{key:e,title:t.name,border:!1},{label:n((function(){return[Object(i["i"])(d,{modelValue:r.state.options[t.id],"onUpdate:modelValue":function(e){return r.state.options[t.id]=e},direction:"horizontal","checked-color":"#ee0a24",onChange:l.choose},{default:n((function(){return[(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(t.spec,(function(e,a){return Object(i["x"])(),Object(i["f"])(b,{class:["radio",{active:r.state.options[t.id]==a}],key:a,name:a},{icon:n((function(){return[]})),default:n((function(){return[Object(i["h"])(Object(i["J"])(e),1)]})),_:2},1032,["name","class"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:2},1032,["title"])),[[i["M"],l.hasSpec]])})),128)),Object(i["i"])(p,{title:"数量",class:"number",border:!1},{default:n((function(){return[Object(i["i"])(f,{modelValue:r.state.num,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.state.num=t}),theme:"round","button-size":"22",min:1,max:r.state.detail.stock},null,8,["modelValue","max"])]})),_:1}),Object(i["i"])(j,{type:"danger",round:"",block:"",disabled:r.state.disabled,onClick:l.save},{default:n((function(){return[s]})),_:1},8,["disabled","onClick"])])])]})),_:1},8,["show","onClick"])})),r=a("ac33");a("92aa");r["a"].render=o,r["a"].__scopeId="data-v-6863d35d";e["a"]=r["a"]},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),n=a("5899"),c="["+n+"]",s=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),r=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:r(1),end:r(2),trim:r(3)}},"653c":function(t,e,a){"use strict";a("b3e2")},7156:function(t,e,a){var i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var c,s;return n&&"function"==typeof(c=e.constructor)&&c!==a&&i(s=c.prototype)&&s!==a.prototype&&n(t,s),t}},"92aa":function(t,e,a){"use strict";a("b12b")},"977e":function(t,e,a){"use strict";a.r(e);a("a15b");var i=a("7a23"),n=Object(i["R"])("data-v-4b470415");Object(i["A"])("data-v-4b470415");var c={key:0},s={class:"group"},o={class:"price1"},r=Object(i["i"])("span",{class:"red"},"￥",-1),l=Object(i["h"])("市场价  "),u={class:"price2"},b=Object(i["h"])("    "),d=Object(i["h"])("月销量  "),p={class:"red"},f=Object(i["h"])(" 件"),j={class:"group"};Object(i["y"])();var h=n((function(t,e,a,h,O,m){var v=Object(i["F"])("van-image"),g=Object(i["F"])("van-swipe-item"),k=Object(i["F"])("van-swipe"),y=Object(i["F"])("van-icon"),_=Object(i["F"])("van-cell"),F=Object(i["F"])("van-action-bar-icon"),w=Object(i["F"])("van-action-bar-button"),x=Object(i["F"])("van-action-bar"),I=Object(i["F"])("mall-item-chooser"),N=Object(i["F"])("van-empty"),C=Object(i["F"])("BaseLayout");return Object(i["x"])(),Object(i["f"])(C,{notitle:""},{default:n((function(){return[O.state.detail&&O.state.detail.status?(Object(i["x"])(),Object(i["f"])("div",c,[Object(i["i"])(k,{class:"image",autoplay:3e3,"lazy-render":""},{default:n((function(){return[(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(O.state.detail.image,(function(t){return Object(i["x"])(),Object(i["f"])(g,{key:t},{default:n((function(){return[Object(i["i"])(v,{src:t,width:"100%",fit:"contain"},null,8,["src"])]})),_:2},1024)})),128))]})),_:1}),Object(i["i"])("div",s,[Object(i["i"])(_,{center:"",border:!1},{title:n((function(){return[Object(i["i"])("span",o,[r,Object(i["h"])(Object(i["J"])(O.state.detail.price),1)])]})),label:n((function(){return[Object(i["P"])(Object(i["i"])("span",null,[l,Object(i["i"])("span",u,"￥"+Object(i["J"])(O.state.detail.price_original),1),b],512),[[i["M"],O.state.detail.price_original]]),Object(i["P"])(Object(i["i"])("span",null,[d,Object(i["i"])("span",p,Object(i["J"])(O.state.detail.stock),1),f],512),[[i["M"],O.state.detail.sales]])]})),"right-icon":n((function(){return[Object(i["i"])(y,{name:O.state.like?"like":"like-o",size:"28",color:"#F00",onClick:e[1]||(e[1]=Object(i["Q"])((function(t){return m.like(a.id)}),["stop"]))},null,8,["name"])]})),_:1}),Object(i["i"])(_,{title:O.state.detail.title,class:"van-multi-ellipsis--l2 title",label:O.state.detail.feature,border:!1},null,8,["title","label"])]),Object(i["i"])("div",j,[Object(i["i"])(_,{title:"商品库存",value:(O.state.detail?O.state.detail.sales:"0")+" 件"},null,8,["value"]),Object(i["i"])(_,{title:"商品型号",value:0==O.state.choose.spec.length?"请选择":O.state.choose.spec.join("，"),"is-link":"",onClick:e[2]||(e[2]=function(t){return m.todo()})},null,8,["value"]),Object(i["i"])(_,{title:"优惠券",value:"无","is-link":""})]),Object(i["i"])("div",{class:"detail",innerHTML:O.state.detail.intro},null,8,["innerHTML"]),Object(i["i"])(x,null,{default:n((function(){return[Object(i["i"])(F,{icon:"balance-list-o",text:"订单",onClick:e[3]||(e[3]=function(e){return t.$router.push("/my/order")})}),Object(i["i"])(F,{icon:"cart-o",text:"购物车",badge:t.profile&&t.profile.cartNumber?t.profile.cartNumber:"",onClick:e[4]||(e[4]=function(e){return t.$router.push("cart")})},null,8,["badge"]),0==O.state.detail.digital?(Object(i["x"])(),Object(i["f"])(w,{key:0,type:"warning",text:"加入购物车",onClick:e[5]||(e[5]=function(t){return m.todo("add")})})):Object(i["g"])("",!0),Object(i["i"])(w,{type:"danger",text:"立即购买",onClick:e[6]||(e[6]=function(t){return m.todo("buy")})})]})),_:1}),Object(i["i"])(I,{id:a.id,show:t.$store.state.showPopup,onSave:m.save},null,8,["id","show","onSave"])])):Object(i["g"])("",!0),Object(i["P"])(Object(i["i"])(N,{image:"error",description:"商品不存在或已下架"},null,512),[[i["M"],null==O.state.detail]])]})),_:1})})),O=a("3013");a("1bf7");O["a"].render=h,O["a"].__scopeId="data-v-4b470415";e["default"]=O["a"]},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),c=a("e8b5"),s=a("861d"),o=a("7b0b"),r=a("50c4"),l=a("8418"),u=a("65f0"),b=a("1dde"),d=a("b622"),p=a("2d00"),f=d("isConcatSpreadable"),j=9007199254740991,h="Maximum allowed index exceeded",O=p>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=b("concat"),v=function(t){if(!s(t))return!1;var e=t[f];return void 0!==e?!!e:c(t)},g=!O||!m;i({target:"Array",proto:!0,forced:g},{concat:function(t){var e,a,i,n,c,s=o(this),b=u(s,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(c=-1===e?s:arguments[e],v(c)){if(n=r(c.length),d+n>j)throw TypeError(h);for(a=0;a<n;a++,d++)a in c&&l(b,d,c[a])}else{if(d>=j)throw TypeError(h);l(b,d++,c)}return b.length=d,b}})},a15b:function(t,e,a){"use strict";var i=a("23e7"),n=a("44ad"),c=a("fc6a"),s=a("a640"),o=[].join,r=n!=Object,l=s("join",",");i({target:"Array",proto:!0,forced:r||!l},{join:function(t){return o.call(c(this),void 0===t?",":t)}})},a284:function(t,e,a){"use strict";var i=a("7a23"),n=Object(i["R"])("data-v-57b2898e");Object(i["A"])("data-v-57b2898e");var c={class:"van-ellipsis"},s={class:"van-ellipsis"},o={class:"price1"},r=Object(i["i"])("span",{class:"red"},"￥",-1),l=Object(i["h"])("   "),u={class:"stock"},b=Object(i["h"])("库存 "),d={class:"red"},p=Object(i["h"])(" 件  "),f={class:"sales"},j=Object(i["h"])("月销 "),h={class:"red"},O=Object(i["h"])(" 件");Object(i["y"])();var m=n((function(t,e,a,m,v,g){var k=Object(i["F"])("van-image"),y=Object(i["F"])("van-col"),_=Object(i["F"])("van-cell"),F=Object(i["F"])("van-icon"),w=Object(i["F"])("van-row");return Object(i["x"])(),Object(i["f"])(w,{class:["item",{grid:a.grid}],justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(e){return t.$router.push("item?id="+a.item.id)})},{default:n((function(){return[Object(i["i"])(y,{class:"image",span:a.grid?24:8},{default:n((function(){return[Object(i["i"])(k,{width:"100%",height:"100%",radius:"5",fit:a.grid?"contain":"cover",src:a.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(i["i"])(y,{class:"intro",span:a.grid?24:16},{default:n((function(){return[Object(i["i"])(_,{border:!1},{title:n((function(){return[Object(i["i"])("div",c,Object(i["J"])(a.item.title),1)]})),label:n((function(){return[Object(i["i"])("div",s,Object(i["J"])(a.item.feature),1)]})),_:1}),Object(i["i"])(_,{border:!1,center:!a.grid},{title:n((function(){return[Object(i["i"])("span",o,[r,Object(i["h"])(" "+Object(i["J"])(a.item.price),1)]),l,Object(i["P"])(Object(i["i"])("span",{class:"price2"}," ￥ "+Object(i["J"])(a.item.price_original),513),[[i["M"],!a.grid&&a.item.price_original&&a.item.price_original>0]])]})),label:n((function(){return[Object(i["P"])(Object(i["i"])("span",u,[b,Object(i["i"])("span",d,Object(i["J"])(a.item.stock),1),p],512),[[i["M"],!a.grid&&a.stock]]),Object(i["P"])(Object(i["i"])("span",f,[j,Object(i["i"])("span",h,Object(i["J"])(a.item.sales),1),O],512),[[i["M"],!a.grid&&a.sales&&a.item.sales]])]})),"right-icon":n((function(){return[Object(i["P"])(Object(i["i"])(F,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(i["Q"])((function(e){return t.$emit("add",a.item.id)}),["stop"]))},null,512),[[i["M"],a.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class"])})),v={props:{grid:{type:Boolean,default:!0},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}}};a("653c");v.render=m,v.__scopeId="data-v-57b2898e";e["a"]=v},a9e3:function(t,e,a){"use strict";var i=a("83ab"),n=a("da84"),c=a("94ca"),s=a("6eeb"),o=a("5135"),r=a("c6b6"),l=a("7156"),u=a("c04e"),b=a("d039"),d=a("7c73"),p=a("241c").f,f=a("06cf").f,j=a("9bf2").f,h=a("58a8").trim,O="Number",m=n[O],v=m.prototype,g=r(d(v))==O,k=function(t){var e,a,i,n,c,s,o,r,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(c=l.slice(2),s=c.length,o=0;o<s;o++)if(r=c.charCodeAt(o),r<48||r>n)return NaN;return parseInt(c,i)}return+l};if(c(O,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var y,_=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof _&&(g?b((function(){v.valueOf.call(a)})):r(a)!=O)?l(new m(k(e)),a,_):k(e)},F=i?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;F.length>w;w++)o(m,y=F[w])&&!o(_,y)&&j(_,y,f(m,y));_.prototype=v,v.constructor=_,s(n,O,_)}},ac33:function(t,e,a){"use strict";(function(t){var i=a("5530"),n=a("53ca"),c=(a("a9e3"),a("a15b"),a("ac1f"),a("1276"),a("b0c0"),a("7a23")),s=a("5502"),o=a("a284");e["a"]={components:{MallItem:o["a"]},props:{id:{type:[Number,String],default:0},show:{type:Boolean,default:!1}},data:function(){var t=Object(c["B"])({detail:{},id:0,num:1,sku:0,spec:"",options:{},disabled:!0,tabbarStatus:!0});return{state:t}},computed:{hasSpec:function(){return"object"==Object(n["a"])(this.state.detail.spec)&&!t.isEmpty(this.state.detail.spec)&&"object"==Object(n["a"])(this.state.detail.sku)}},watch:{show:function(t,e){t&&(this.query(),this.state.tabbarStatus=this.$store.state.showTabbar),this.toggleTabbar(!t&&this.state.tabbarStatus)}},methods:Object(i["a"])({query:function(){var t=this;this.$http.get("/mall/itemdetail?id="+this.id).then((function(e){t.state.detail=e,t.state.disabled=t.hasSpec,t.id==t.state.id?t.hasSpec&&t.choose():(t.state.num=1,t.state.sku=0,t.state.spec="",t.state.options={})}))},choose:function(){var e=t.toArray(this.state.options).sort().join(","),a=0,i=0;for(var n in this.state.detail.sku){var c=this.state.detail.sku[n];if(e==c.spec.split(",").sort().join(",")){this.state.sku=c.id,a=c.stock,i=c.price;break}}this.state.disabled=0==a,this.state.detail.stock=a,this.state.detail.price=i},save:function(){var t=[];for(var e in this.state.options)for(var a in this.state.detail.spec)e==this.state.detail.spec[a].id&&t.push(this.state.detail.spec[a].name+"："+this.state.detail.spec[a].spec[this.state.options[e]]);this.state.id=this.id,this.$emit("save",{id:this.state.id,num:this.state.num,sku:this.state.sku,spec:t}),this.togglePopup(!1)}},Object(s["c"])(["togglePopup","toggleTabbar"]))}}).call(this,a("81b0"))},b12b:function(t,e,a){},b3e2:function(t,e,a){}}]);
//# sourceMappingURL=chunk-ada1c5b2.7b804aab.js.map