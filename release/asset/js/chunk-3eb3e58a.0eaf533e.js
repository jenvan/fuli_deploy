(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3eb3e58a"],{"02f2":function(t,e,n){},2824:function(t,e,n){"use strict";var i=n("7a23"),a=Object(i["S"])("data-v-0eb6c5d5");Object(i["B"])("data-v-0eb6c5d5");var c={class:"container"},s={style:{width:"100%"}},r={class:"subtitle"},o={class:"extra"};Object(i["z"])();var l=a((function(t,e,n,l,u,f){var d=Object(i["G"])("van-icon"),b=Object(i["G"])("van-nav-bar"),j=Object(i["G"])("van-sticky"),p=Object(i["G"])("van-col"),h=Object(i["G"])("van-row");return Object(i["y"])(),Object(i["g"])("div",c,[Object(i["Q"])(Object(i["j"])(j,{onChange:e[2]||(e[2]=function(t){return l.state.isTop=!l.state.isTop})},{default:a((function(){return[Object(i["j"])(b,{class:["navbar",{notTop:!l.state.isTop,noTitle:n.notitle}],border:!1,onClickLeft:f.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:a((function(){return[Object(i["Q"])(Object(i["j"])("div",null,[Object(i["F"])(t.$slots,"back",{},(function(){return[Object(i["j"])(d,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[i["N"],!n.noback]])]})),title:a((function(){return[Object(i["j"])("div",s,[Object(i["F"])(t.$slots,"tool",{},(function(){return[Object(i["i"])(Object(i["K"])(l.state.isTop?"":n.title),1)]}),{},!0)])]})),right:a((function(){return[Object(i["F"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[i["N"],!n.nonavbar]]),Object(i["j"])("div",{class:["page",{notTop:!l.state.isTop,noNavbar:n.nonavbar,noTitle:n.notitle,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(i["j"])(i["d"],{name:"van-slide-down"},{default:a((function(){return[Object(i["Q"])(Object(i["j"])(h,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(i["j"])(p,{span:"16"},{default:a((function(){return[Object(i["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(i["i"])(Object(i["K"])(n.title)+" ",1),Object(i["j"])("div",r,Object(i["K"])(n.subtitle),1)],4)]})),_:1}),Object(i["j"])(p,{span:"8"},{default:a((function(){return[Object(i["j"])("div",o,[Object(i["F"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[i["N"],l.state.isTop&&!n.nonavbar&&!n.notitle]])]})),_:1}),Object(i["F"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(i["C"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},f=(n("e877"),n("6b0d")),d=n.n(f);const b=d()(u,[["render",l],["__scopeId","data-v-0eb6c5d5"]]);e["a"]=b},"29ba":function(t,e,n){"use strict";n.r(e);var i=n("7a23"),a=Object(i["S"])("data-v-5dce72d1"),c=a((function(t,e,n,c,s,r){var o=Object(i["G"])("mall-item"),l=Object(i["G"])("van-empty"),u=Object(i["G"])("van-list"),f=Object(i["G"])("van-pull-refresh"),d=Object(i["G"])("BaseLayout");return Object(i["y"])(),Object(i["g"])(d,{title:"我的关注"},{default:a((function(){return[Object(i["j"])(f,{modelValue:c.state.refreshing,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.state.refreshing=t}),onRefresh:r.onRefresh},{default:a((function(){return[Object(i["j"])(u,{class:"list",loading:c.state.loading,"onUpdate:loading":e[1]||(e[1]=function(t){return c.state.loading=t}),finished:c.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:r.onLoad},{default:a((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(c.state.list,(function(t,e){return Object(i["y"])(),Object(i["g"])(o,{grid:!1,item:t,key:e,cart:!1,sales:!1,stock:!1},null,8,["item"])})),128)),Object(i["Q"])(Object(i["j"])(l,{style:{width:"100%"}},null,512),[[i["N"],0==c.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"])]})),_:1})})),s=n("5530"),r=n("2824"),o=n("a284"),l={components:{BaseLayout:r["a"],MallItem:o["a"]},name:"List",setup:function(){var t=Object(i["C"])({refreshing:!1,loading:!1,finished:!1,list:[],offset:0,limit:20});return{state:t}},activated:function(){!this.$store.state.keepAlive&&this.onRefresh()},beforeRouteLeave:function(t,e,n){this.$store.commit("setScrollTop",document.getElementById("container").scrollTop),n()},methods:{onRefresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/mall/interestList?offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var i=e[n];t.state.list.push(Object(s["a"])(Object(s["a"])({},i),{cover:i.image}))}}))}}},u=(n("6f28"),n("6b0d")),f=n.n(u);const d=f()(l,[["render",c],["__scopeId","data-v-5dce72d1"]]);e["default"]=d},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),a=n("5899"),c="["+a+"]",s=RegExp("^"+c+c+"*"),r=RegExp(c+c+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"609d":function(t,e,n){},"6f28":function(t,e,n){"use strict";n("a4e3")},7156:function(t,e,n){var i=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var c,s;return a&&"function"==typeof(c=e.constructor)&&c!==n&&i(s=c.prototype)&&s!==n.prototype&&a(t,s),t}},a284:function(t,e,n){"use strict";var i=n("7a23"),a=Object(i["S"])("data-v-0973496a");Object(i["B"])("data-v-0973496a");var c={class:"price1"},s=Object(i["j"])("span",{class:"red"},"￥",-1),r=Object(i["i"])("   "),o={class:"stock"},l=Object(i["i"])("库存 "),u={class:"red"},f=Object(i["i"])(" 件  "),d={class:"sales"},b=Object(i["i"])("月销 "),j={class:"red"},p=Object(i["i"])(" 件");Object(i["z"])();var h=a((function(t,e,n,h,O,g){var v=Object(i["G"])("van-image"),m=Object(i["G"])("van-col"),y=Object(i["G"])("van-cell"),k=Object(i["G"])("van-icon"),N=Object(i["G"])("van-row");return Object(i["y"])(),Object(i["g"])(N,{class:["item",{grid:g.isGrid}],style:{width:g.width,height:g.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return g.forward(n.item)})},{default:a((function(){return[Object(i["j"])(m,{class:"image",span:g.isGrid?24:8},{default:a((function(){return[Object(i["j"])(v,{width:"100%",height:"100%",radius:"5",fit:g.isGrid?"contain":"cover",src:n.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(i["j"])(m,{class:"intro",span:g.isGrid?24:16},{default:a((function(){return[Object(i["j"])(y,{style:{padding:"5px 5px 0 5px"},border:!1},{title:a((function(){return[Object(i["j"])("div",{class:g.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(i["K"])(n.item.title),3)]})),label:a((function(){return[Object(i["Q"])(Object(i["j"])("div",{class:"van-ellipsis"},Object(i["K"])(n.item.feature),513),[[i["N"],n.list>=100]])]})),_:1}),Object(i["j"])(y,{style:{padding:"0 10px 5px 10px"},border:!1,center:!g.isGrid},{title:a((function(){return[Object(i["j"])("span",c,[s,Object(i["i"])(" "+Object(i["K"])(n.item.price),1)]),r,Object(i["Q"])(Object(i["j"])("span",{class:"price2"}," ￥ "+Object(i["K"])(n.item.price_original),513),[[i["N"],!g.isGrid&&n.item.price_original&&n.item.price_original>0]])]})),label:a((function(){return[Object(i["Q"])(Object(i["j"])("span",o,[l,Object(i["j"])("span",u,Object(i["K"])(n.item.stock),1),f],512),[[i["N"],!g.isGrid&&n.stock&&n.item.stock]]),Object(i["Q"])(Object(i["j"])("span",d,[b,Object(i["j"])("span",j,Object(i["K"])(n.item.sales),1),p],512),[[i["N"],!g.isGrid&&n.sales&&n.item.sales]])]})),"right-icon":a((function(){return[Object(i["Q"])(Object(i["j"])(k,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(i["R"])((function(e){return t.$emit("add",n.item)}),["stop"]))},null,512),[[i["N"],n.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),O=n("5530"),g=(n("a9e3"),n("5502")),v={props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(O["a"])({isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},Object(g["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var n="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+n)}}},m=(n("b4e6"),n("6b0d")),y=n.n(m);const k=y()(v,[["render",h],["__scopeId","data-v-0973496a"]]);e["a"]=k},a4e3:function(t,e,n){},a9e3:function(t,e,n){"use strict";var i=n("83ab"),a=n("da84"),c=n("94ca"),s=n("6eeb"),r=n("5135"),o=n("c6b6"),l=n("7156"),u=n("c04e"),f=n("d039"),d=n("7c73"),b=n("241c").f,j=n("06cf").f,p=n("9bf2").f,h=n("58a8").trim,O="Number",g=a[O],v=g.prototype,m=o(d(v))==O,y=function(t){var e,n,i,a,c,s,r,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+l}for(c=l.slice(2),s=c.length,r=0;r<s;r++)if(o=c.charCodeAt(r),o<48||o>a)return NaN;return parseInt(c,i)}return+l};if(c(O,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(m?f((function(){v.valueOf.call(n)})):o(n)!=O)?l(new g(y(e)),n,N):y(e)},_=i?b(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),G=0;_.length>G;G++)r(g,k=_[G])&&!r(N,k)&&p(N,k,j(g,k));N.prototype=v,v.constructor=N,s(a,O,N)}},b4e6:function(t,e,n){"use strict";n("609d")},e877:function(t,e,n){"use strict";n("02f2")}}]);