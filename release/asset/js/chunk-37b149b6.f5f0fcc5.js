(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37b149b6"],{"07a9":function(t,e,n){},2824:function(t,e,n){"use strict";var i=n("7a23"),a=Object(i["V"])("data-v-65e3a388");Object(i["C"])("data-v-65e3a388");var c={class:"container"},s={class:"subtitle"},r={class:"extra"};Object(i["A"])();var o=a((function(t,e,n,o,l,u){var f=Object(i["H"])("van-icon"),d=Object(i["H"])("van-nav-bar"),b=Object(i["H"])("van-sticky"),j=Object(i["H"])("van-col"),h=Object(i["H"])("van-row");return Object(i["z"])(),Object(i["g"])("div",c,[Object(i["S"])(Object(i["j"])(b,{onChange:e[2]||(e[2]=function(t){return o.state.isTop=!o.state.isTop})},{default:a((function(){return[Object(i["j"])(d,{class:["navbar",{notTop:!o.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:u.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:a((function(){return[Object(i["S"])(Object(i["j"])("div",null,[Object(i["G"])(t.$slots,"back",{},(function(){return[Object(i["j"])(f,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[i["O"],!n.noback]])]})),title:a((function(){return[Object(i["G"])(t.$slots,"head",{},(function(){return[Object(i["j"])("div",{style:{width:"100%",color:o.state.isTop?n.fg:"inherit"}},Object(i["L"])(o.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)]})),right:a((function(){return[Object(i["G"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[i["O"],"hide"!=n.navbar]]),Object(i["j"])("div",{class:["page",{notTop:!o.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(i["j"])(i["d"],{name:"van-slide-down"},{default:a((function(){return[Object(i["S"])(Object(i["j"])(h,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(i["j"])(j,{span:"16"},{default:a((function(){return[Object(i["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(i["G"])(t.$slots,"title",{},(function(){return[Object(i["i"])(Object(i["L"])(n.title),1)]}),{},!0),Object(i["j"])("div",s,Object(i["L"])(n.subtitle),1)],4)]})),_:3}),Object(i["j"])(j,{span:"8"},{default:a((function(){return[Object(i["j"])("div",r,[Object(i["G"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[i["O"],o.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(i["G"])(t.$slots,"default",{},void 0,!0)],6)])})),l={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(i["D"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},u=(n("2c02"),n("6b0d")),f=n.n(u);const d=f()(l,[["render",o],["__scopeId","data-v-65e3a388"]]);e["a"]=d},"29ba":function(t,e,n){"use strict";n.r(e);var i=n("7a23"),a=Object(i["V"])("data-v-5dce72d1"),c=a((function(t,e,n,c,s,r){var o=Object(i["H"])("mall-item"),l=Object(i["H"])("van-empty"),u=Object(i["H"])("van-list"),f=Object(i["H"])("van-pull-refresh"),d=Object(i["H"])("BaseLayout");return Object(i["z"])(),Object(i["g"])(d,{title:"我的关注"},{default:a((function(){return[Object(i["j"])(f,{modelValue:c.state.refreshing,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.state.refreshing=t}),onRefresh:r.onRefresh},{default:a((function(){return[Object(i["j"])(u,{class:"list",loading:c.state.loading,"onUpdate:loading":e[1]||(e[1]=function(t){return c.state.loading=t}),finished:c.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:r.onLoad},{default:a((function(){return[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(c.state.list,(function(t,e){return Object(i["z"])(),Object(i["g"])(o,{grid:!1,item:t,key:e,cart:!1,sales:!1,stock:!1},null,8,["item"])})),128)),Object(i["S"])(Object(i["j"])(l,{style:{width:"100%"}},null,512),[[i["O"],0==c.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"])]})),_:1})})),s=n("5530"),r=n("2824"),o=n("a284"),l={components:{BaseLayout:r["a"],MallItem:o["a"]},name:"List",setup:function(){var t=Object(i["D"])({refreshing:!1,loading:!1,finished:!1,list:[],offset:0,limit:20});return{state:t}},activated:function(){!this.$store.state.keepAlive&&this.onRefresh()},beforeRouteLeave:function(t,e,n){this.$store.commit("setScrollTop",document.getElementById("container").scrollTop),n()},methods:{onRefresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/mall/interestList?offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var i=e[n];t.state.list.push(Object(s["a"])(Object(s["a"])({},i),{cover:i.image}))}}))}}},u=(n("6f28"),n("6b0d")),f=n.n(u);const d=f()(l,[["render",c],["__scopeId","data-v-5dce72d1"]]);e["default"]=d},"2c02":function(t,e,n){"use strict";n("3c84")},"3c84":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),a=n("5899"),c="["+a+"]",s=RegExp("^"+c+c+"*"),r=RegExp(c+c+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"6f28":function(t,e,n){"use strict";n("a4e3")},7156:function(t,e,n){var i=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var c,s;return a&&"function"==typeof(c=e.constructor)&&c!==n&&i(s=c.prototype)&&s!==n.prototype&&a(t,s),t}},a284:function(t,e,n){"use strict";var i=n("7a23"),a=Object(i["V"])("data-v-1453947a");Object(i["C"])("data-v-1453947a");var c={class:"price1"},s=Object(i["i"])("   "),r={class:"stock"},o=Object(i["i"])("库存 "),l={class:"red"},u=Object(i["i"])(" 件  "),f={class:"sales"},d=Object(i["i"])("月销 "),b={class:"red"},j=Object(i["i"])(" 件");Object(i["A"])();var h=a((function(t,e,n,h,p,O){var g=Object(i["H"])("van-image"),v=Object(i["H"])("van-col"),m=Object(i["H"])("van-cell"),y=Object(i["H"])("van-icon"),k=Object(i["H"])("van-row");return Object(i["z"])(),Object(i["g"])(k,{class:["item",{grid:O.isGrid}],style:{width:O.width,height:O.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return O.forward(n.item)})},{default:a((function(){return[Object(i["j"])(v,{class:"image",span:O.isGrid?24:8},{default:a((function(){return[Object(i["j"])(g,{width:"100%",height:"100%",radius:"5",fit:O.isGrid?"contain":"cover",src:n.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(i["j"])(v,{class:"intro",span:O.isGrid?24:16},{default:a((function(){return[Object(i["j"])(m,{style:{padding:"5px 5px 0 5px"},border:!1},{title:a((function(){return[Object(i["j"])("div",{class:O.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(i["L"])(n.item.title),3)]})),label:a((function(){return[Object(i["S"])(Object(i["j"])("div",{class:"van-ellipsis"},Object(i["L"])(n.item.feature),513),[[i["O"],n.list>=100]])]})),_:1}),Object(i["j"])(m,{style:{padding:"0 10px 5px 10px"},border:!1,center:!O.isGrid},{title:a((function(){return[Object(i["j"])("span",c,[Object(i["j"])(y,{name:"points",color:"red"}),Object(i["i"])(" "+Object(i["L"])(n.item.price),1)]),s,Object(i["S"])(Object(i["j"])("span",{class:"price2"}," ￥ "+Object(i["L"])(n.item.price_original),513),[[i["O"],!O.isGrid&&n.item.price_original&&n.item.price_original>0]])]})),label:a((function(){return[Object(i["S"])(Object(i["j"])("span",r,[o,Object(i["j"])("span",l,Object(i["L"])(n.item.stock),1),u],512),[[i["O"],!O.isGrid&&n.stock&&n.item.stock]]),Object(i["S"])(Object(i["j"])("span",f,[d,Object(i["j"])("span",b,Object(i["L"])(n.item.sales),1),j],512),[[i["O"],!O.isGrid&&n.sales&&n.item.sales]])]})),"right-icon":a((function(){return[Object(i["S"])(Object(i["j"])(y,{name:"shopping-cart",size:"21",color:"#F66",onClick:e[1]||(e[1]=Object(i["U"])((function(e){return t.$emit("add",n.item)}),["stop"]))},null,512),[[i["O"],n.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),p=n("5530"),O=(n("a9e3"),n("5502")),g={props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(p["a"])({isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},Object(O["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var n="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+n)}}},v=(n("fa3e"),n("6b0d")),m=n.n(v);const y=m()(g,[["render",h],["__scopeId","data-v-1453947a"]]);e["a"]=y},a4e3:function(t,e,n){},a9e3:function(t,e,n){"use strict";var i=n("83ab"),a=n("da84"),c=n("94ca"),s=n("6eeb"),r=n("5135"),o=n("c6b6"),l=n("7156"),u=n("c04e"),f=n("d039"),d=n("7c73"),b=n("241c").f,j=n("06cf").f,h=n("9bf2").f,p=n("58a8").trim,O="Number",g=a[O],v=g.prototype,m=o(d(v))==O,y=function(t){var e,n,i,a,c,s,r,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=p(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+l}for(c=l.slice(2),s=c.length,r=0;r<s;r++)if(o=c.charCodeAt(r),o<48||o>a)return NaN;return parseInt(c,i)}return+l};if(c(O,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(m?f((function(){v.valueOf.call(n)})):o(n)!=O)?l(new g(y(e)),n,_):y(e)},w=i?b(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;w.length>L;L++)r(g,k=w[L])&&!r(_,k)&&h(_,k,j(g,k));_.prototype=v,v.constructor=_,s(a,O,_)}},fa3e:function(t,e,n){"use strict";n("07a9")}}]);