(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16e5693b"],{"1a7d":function(t,e,i){},"1c7b":function(t,e,i){},2824:function(t,e,i){"use strict";var n=i("7a23"),a=Object(n["R"])("data-v-12659e6e");Object(n["A"])("data-v-12659e6e");var c={class:"container"},s={style:{width:"100%"}},r={class:"subtitle"},o={class:"extra"};Object(n["y"])();var l=a((function(t,e,i,l,u,f){var b=Object(n["F"])("van-icon"),d=Object(n["F"])("van-nav-bar"),p=Object(n["F"])("van-sticky"),h=Object(n["F"])("van-col"),j=Object(n["F"])("van-row");return Object(n["x"])(),Object(n["f"])("div",c,[Object(n["P"])(Object(n["i"])(p,{onChange:e[2]||(e[2]=function(t){return l.state.isTop=!l.state.isTop})},{default:a((function(){return[Object(n["i"])(d,{class:["navbar",{notTop:!l.state.isTop,noTitle:i.notitle}],border:!1,onClickLeft:f.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:a((function(){return[Object(n["P"])(Object(n["i"])("div",null,[Object(n["E"])(t.$slots,"back",{},(function(){return[Object(n["i"])(b,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[n["M"],!i.noback]])]})),title:a((function(){return[Object(n["i"])("div",s,[Object(n["E"])(t.$slots,"tool",{},(function(){return[Object(n["h"])(Object(n["J"])(l.state.isTop?"":i.title),1)]}),{},!0)])]})),right:a((function(){return[Object(n["E"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[n["M"],!i.nonavbar]]),Object(n["i"])("div",{class:["page",{notTop:!l.state.isTop,noNavbar:i.nonavbar,noTitle:i.notitle,hasBar:t.$store.state.showTabbar}],style:{background:i.bg}},[Object(n["i"])(n["c"],{name:"van-slide-down"},{default:a((function(){return[Object(n["P"])(Object(n["i"])(j,{justify:"space-between",align:"center",class:"head",style:{height:i.height+"px",color:i.fg}},{default:a((function(){return[Object(n["i"])(h,{span:"16"},{default:a((function(){return[Object(n["i"])("div",{class:"title",style:{color:i.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(n["h"])(Object(n["J"])(i.title)+" ",1),Object(n["i"])("div",r,Object(n["J"])(i.subtitle),1)],4)]})),_:1}),Object(n["i"])(h,{span:"8"},{default:a((function(){return[Object(n["i"])("div",o,[Object(n["E"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[n["M"],l.state.isTop&&!i.nonavbar&&!i.notitle]])]})),_:1}),Object(n["E"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(n["B"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):this.$router.back()}}},f=(i("3ea6"),i("d959")),b=i.n(f);const d=b()(u,[["render",l],["__scopeId","data-v-12659e6e"]]);e["a"]=d},"29ba":function(t,e,i){"use strict";i.r(e);var n=i("7a23"),a=Object(n["R"])("data-v-5b156ab4"),c=a((function(t,e,i,c,s,r){var o=Object(n["F"])("mall-item"),l=Object(n["F"])("van-empty"),u=Object(n["F"])("van-list"),f=Object(n["F"])("van-pull-refresh"),b=Object(n["F"])("BaseLayout");return Object(n["x"])(),Object(n["f"])(b,{title:"我的关注"},{default:a((function(){return[Object(n["i"])(f,{modelValue:c.state.refreshing,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.state.refreshing=t}),onRefresh:r.onRefresh},{default:a((function(){return[Object(n["i"])(u,{class:"list",loading:c.state.loading,"onUpdate:loading":e[1]||(e[1]=function(t){return c.state.loading=t}),finished:c.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:r.onLoad},{default:a((function(){return[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(c.state.list,(function(t,e){return Object(n["x"])(),Object(n["f"])(o,{grid:!1,item:t,key:e,cart:!1,sales:!1,stock:!1},null,8,["item"])})),128)),Object(n["P"])(Object(n["i"])(l,{style:{width:"100%"}},null,512),[[n["M"],0==c.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"])]})),_:1})})),s=i("5530"),r=i("2824"),o=i("a284"),l={components:{BaseLayout:r["a"],MallItem:o["a"]},setup:function(){var t=Object(n["B"])({refreshing:!1,loading:!1,finished:!1,list:[],offset:0,limit:20});return{state:t}},mounted:function(){this.onRefresh()},methods:{onRefresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/mall/interestList?type=1&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var i in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var n=e[i];t.state.list.push(Object(s["a"])(Object(s["a"])({},n),{cover:n.image}))}}))}}},u=(i("3b43"),i("d959")),f=i.n(u);const b=f()(l,[["render",c],["__scopeId","data-v-5b156ab4"]]);e["default"]=b},"3b43":function(t,e,i){"use strict";i("d76c")},"3ea6":function(t,e,i){"use strict";i("1a7d")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),a=i("5899"),c="["+a+"]",s=RegExp("^"+c+c+"*"),r=RegExp(c+c+"*$"),o=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(s,"")),2&t&&(i=i.replace(r,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,i){var n=i("861d"),a=i("d2bb");t.exports=function(t,e,i){var c,s;return a&&"function"==typeof(c=e.constructor)&&c!==i&&n(s=c.prototype)&&s!==i.prototype&&a(t,s),t}},"8a72":function(t,e,i){"use strict";i("1c7b")},a284:function(t,e,i){"use strict";var n=i("7a23"),a=Object(n["R"])("data-v-04ea0274");Object(n["A"])("data-v-04ea0274");var c={class:"price1"},s=Object(n["i"])("span",{class:"red"},"￥",-1),r=Object(n["h"])("   "),o={class:"stock"},l=Object(n["h"])("库存 "),u={class:"red"},f=Object(n["h"])(" 件  "),b={class:"sales"},d=Object(n["h"])("月销 "),p={class:"red"},h=Object(n["h"])(" 件");Object(n["y"])();var j=a((function(t,e,i,j,O,g){var v=Object(n["F"])("van-image"),m=Object(n["F"])("van-col"),y=Object(n["F"])("van-cell"),k=Object(n["F"])("van-icon"),_=Object(n["F"])("van-row");return Object(n["x"])(),Object(n["f"])(_,{class:["item",{grid:g.isGrid}],style:{width:g.width,height:g.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return g.forward(i.item)})},{default:a((function(){return[Object(n["i"])(m,{class:"image",span:g.isGrid?24:8},{default:a((function(){return[Object(n["i"])(v,{width:"100%",height:"100%",radius:"5",fit:g.isGrid?"contain":"cover",src:i.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(n["i"])(m,{class:"intro",span:g.isGrid?24:16},{default:a((function(){return[Object(n["i"])(y,{style:{padding:"5px 5px 0 5px"},border:!1},{title:a((function(){return[Object(n["i"])("div",{class:g.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(n["J"])(i.item.title),3)]})),label:a((function(){return[Object(n["P"])(Object(n["i"])("div",{class:"van-ellipsis"},Object(n["J"])(i.item.feature),513),[[n["M"],i.list>=100]])]})),_:1}),Object(n["i"])(y,{style:{padding:"0 10px 5px 10px"},border:!1,center:!g.isGrid},{title:a((function(){return[Object(n["i"])("span",c,[s,Object(n["h"])(" "+Object(n["J"])(i.item.price),1)]),r,Object(n["P"])(Object(n["i"])("span",{class:"price2"}," ￥ "+Object(n["J"])(i.item.price_original),513),[[n["M"],!g.isGrid&&i.item.price_original&&i.item.price_original>0]])]})),label:a((function(){return[Object(n["P"])(Object(n["i"])("span",o,[l,Object(n["i"])("span",u,Object(n["J"])(i.item.stock),1),f],512),[[n["M"],!g.isGrid&&i.stock]]),Object(n["P"])(Object(n["i"])("span",b,[d,Object(n["i"])("span",p,Object(n["J"])(i.item.sales),1),h],512),[[n["M"],!g.isGrid&&i.sales&&i.item.sales]])]})),"right-icon":a((function(){return[Object(n["P"])(Object(n["i"])(k,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(n["Q"])((function(e){return t.$emit("add",i.item.id)}),["stop"]))},null,512),[[n["M"],i.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),O=(i("a9e3"),{props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:{isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},methods:{forward:function(t){var e=/\/(mall|jdmall|wymall)\//.test(this.$router.path)?"":"/mall/",i="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+i)}}}),g=(i("8a72"),i("d959")),v=i.n(g);const m=v()(O,[["render",j],["__scopeId","data-v-04ea0274"]]);e["a"]=m},a9e3:function(t,e,i){"use strict";var n=i("83ab"),a=i("da84"),c=i("94ca"),s=i("6eeb"),r=i("5135"),o=i("c6b6"),l=i("7156"),u=i("c04e"),f=i("d039"),b=i("7c73"),d=i("241c").f,p=i("06cf").f,h=i("9bf2").f,j=i("58a8").trim,O="Number",g=a[O],v=g.prototype,m=o(b(v))==O,y=function(t){var e,i,n,a,c,s,r,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=j(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(c=l.slice(2),s=c.length,r=0;r<s;r++)if(o=c.charCodeAt(r),o<48||o>a)return NaN;return parseInt(c,n)}return+l};if(c(O,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,_=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof _&&(m?f((function(){v.valueOf.call(i)})):o(i)!=O)?l(new g(y(e)),i,_):y(e)},x=n?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;x.length>w;w++)r(g,k=x[w])&&!r(_,k)&&h(_,k,p(g,k));_.prototype=v,v.constructor=_,s(a,O,_)}},d76c:function(t,e,i){}}]);
//# sourceMappingURL=chunk-16e5693b.0dddd7b5.js.map