(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9bcd88a"],{2824:function(t,e,n){"use strict";var a=n("7a23"),c=Object(a["V"])("data-v-65e3a388");Object(a["C"])("data-v-65e3a388");var i={class:"container"},r={class:"subtitle"},o={class:"extra"};Object(a["A"])();var s=c((function(t,e,n,s,u,l){var f=Object(a["H"])("van-icon"),b=Object(a["H"])("van-nav-bar"),d=Object(a["H"])("van-sticky"),j=Object(a["H"])("van-col"),O=Object(a["H"])("van-row");return Object(a["z"])(),Object(a["g"])("div",i,[Object(a["S"])(Object(a["j"])(d,{onChange:e[2]||(e[2]=function(t){return s.state.isTop=!s.state.isTop})},{default:c((function(){return[Object(a["j"])(b,{class:["navbar",{notTop:!s.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:l.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:c((function(){return[Object(a["S"])(Object(a["j"])("div",null,[Object(a["G"])(t.$slots,"back",{},(function(){return[Object(a["j"])(f,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[a["O"],!n.noback]])]})),title:c((function(){return[Object(a["G"])(t.$slots,"head",{},(function(){return[Object(a["j"])("div",{style:{width:"100%",color:s.state.isTop?n.fg:"inherit"}},Object(a["L"])(s.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)]})),right:c((function(){return[Object(a["G"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[a["O"],"hide"!=n.navbar]]),Object(a["j"])("div",{class:["page",{notTop:!s.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(a["j"])(a["d"],{name:"van-slide-down"},{default:c((function(){return[Object(a["S"])(Object(a["j"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:c((function(){return[Object(a["j"])(j,{span:"16"},{default:c((function(){return[Object(a["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(a["G"])(t.$slots,"title",{},(function(){return[Object(a["i"])(Object(a["L"])(n.title),1)]}),{},!0),Object(a["j"])("div",r,Object(a["L"])(n.subtitle),1)],4)]})),_:3}),Object(a["j"])(j,{span:"8"},{default:c((function(){return[Object(a["j"])("div",o,[Object(a["G"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[a["O"],s.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(a["G"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(a["D"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},l=(n("2c02"),n("6b0d")),f=n.n(l);const b=f()(u,[["render",s],["__scopeId","data-v-65e3a388"]]);e["a"]=b},"2c02":function(t,e,n){"use strict";n("3c84")},"3c84":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),c=n("5899"),i="["+c+"]",r=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,n){var a=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var i,r;return c&&"function"==typeof(i=e.constructor)&&i!==n&&a(r=i.prototype)&&r!==n.prototype&&c(t,r),t}},"957a":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c=Object(a["V"])("data-v-11058486");Object(a["C"])("data-v-11058486");var i=Object(a["i"])("数字商品订单");Object(a["A"])();var r=c((function(t,e,n,r,o,s){var u=Object(a["H"])("van-button"),l=Object(a["H"])("van-tab"),f=Object(a["H"])("van-tabs"),b=Object(a["H"])("van-sticky"),d=Object(a["H"])("van-tag"),j=Object(a["H"])("van-col"),O=Object(a["H"])("van-image"),h=Object(a["H"])("van-row"),v=Object(a["H"])("van-list"),p=Object(a["H"])("van-pull-refresh"),g=Object(a["H"])("BaseLayout");return Object(a["z"])(),Object(a["g"])(g,{title:"我的订单",onClickBack:e[4]||(e[4]=function(e){return t.$router.push("/my")})},{extra:c((function(){return[Object(a["j"])(u,{type:"primary",size:"small",icon:"orders-o",to:"/digital/order"},{default:c((function(){return[i]})),_:1})]})),default:c((function(){return[Object(a["j"])(b,{"offset-top":45},{default:c((function(){return[Object(a["j"])(f,{active:r.active,"onUpdate:active":e[1]||(e[1]=function(t){return r.active=t}),swipeable:"",animated:"",onChange:s.onChange},{default:c((function(){return[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(r.status,(function(t,e){return Object(a["z"])(),Object(a["g"])(l,{key:e,title:t[1],name:t[0]},null,8,["title","name"])})),128))]})),_:1},8,["active","onChange"])]})),_:1}),Object(a["j"])(p,{modelValue:r.state.refreshing,"onUpdate:modelValue":e[3]||(e[3]=function(t){return r.state.refreshing=t}),onRefresh:s.onRefresh},{default:c((function(){return[Object(a["j"])(v,{class:"list",loading:r.state.loading,"onUpdate:loading":e[2]||(e[2]=function(t){return r.state.loading=t}),finished:r.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:s.onLoad},{default:c((function(){return[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(r.state.list,(function(e,n){return Object(a["z"])(),Object(a["g"])(h,{class:"block",align:"center",key:n,onClick:function(n){return t.$router.push("/my/order/detail?id="+e.id)}},{default:c((function(){return[Object(a["j"])(j,{span:"24",class:"dt"},{default:c((function(){return[Object(a["j"])(d,{color:"#CCC"},{default:c((function(){return[Object(a["i"])(Object(a["L"])(e.dt_create),1)]})),_:2},1024)]})),_:2},1024),Object(a["j"])(j,{span:"12",class:"id",onClick:function(n){return t.$copy(e.id,!1)}},{default:c((function(){return[Object(a["i"])(Object(a["L"])(e.mall),1)]})),_:2},1032,["onClick"]),Object(a["j"])(j,{span:"12",class:"status",style:{color:e.color}},{default:c((function(){return[Object(a["i"])(Object(a["L"])(e.status),1)]})),_:2},1032,["style"]),Object(a["j"])(j,{span:"19",class:"detail"},{default:c((function(){return[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(e.detail,(function(t,e){return Object(a["z"])(),Object(a["g"])(O,{class:"img",key:e,src:t.image,fit:"contain"},null,8,["src"])})),128))]})),_:2},1024),Object(a["j"])(j,{span:"5",class:"amount"},{default:c((function(){return[Object(a["j"])("div",null,"共 "+Object(a["L"])(e.total)+" 件",1),Object(a["j"])("div",null,"￥ "+Object(a["L"])(e.amount),1)]})),_:2},1024)]})),_:2},1032,["onClick"])})),128))]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"])]})),_:1})})),o=n("5530"),s=(n("a9e3"),n("4de4"),n("b0c0"),n("ac1f"),n("5319"),n("5502")),u=n("2824"),l={components:{BaseLayout:u["a"]},name:"List",props:{filter:{type:[String,Number],default:""}},setup:function(){var t=Object(a["D"])({refreshing:!1,loading:!1,finished:!1,list:[],offset:0,limit:20}),e=[["","全部"],["0","待付款"],["1","待发货"],["2","已发货"],["3,4","已完成"]],n=Object(a["E"])(0);return{state:t,status:e,active:n}},activated:function(){this.active=this.filter,!this.$store.state.keepAlive&&this.onRefresh()},beforeRouteLeave:function(t,e,n){this.$store.commit("setScrollTop",document.getElementById("container").scrollTop),n()},computed:Object(o["a"])({},Object(s["d"])(["channel"])),methods:{onRefresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/mall/orderlist?filter="+this.active+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var a=e[n];t.state.list.push(Object(o["a"])(Object(o["a"])({},a),{mall:t.channel[a.channel]["name"],status:["未付款","已付款","已发货","交易成功","交易关闭"][a.status],color:["#CCC","#666","#00C","#0C0","#C00"][a.status]}))}}))},onChange:function(){this.$router.replace("?filter="+this.active),this.onRefresh()}}},f=(n("f2f9"),n("6b0d")),b=n.n(f);const d=b()(l,[["render",r],["__scopeId","data-v-11058486"]]);e["default"]=d},a9e3:function(t,e,n){"use strict";var a=n("83ab"),c=n("da84"),i=n("94ca"),r=n("6eeb"),o=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),f=n("d039"),b=n("7c73"),d=n("241c").f,j=n("06cf").f,O=n("9bf2").f,h=n("58a8").trim,v="Number",p=c[v],g=p.prototype,m=s(b(g))==v,k=function(t){var e,n,a,c,i,r,o,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,c=49;break;case 79:case 111:a=8,c=55;break;default:return+u}for(i=u.slice(2),r=i.length,o=0;o<r;o++)if(s=i.charCodeAt(o),s<48||s>c)return NaN;return parseInt(i,a)}return+u};if(i(v,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var y,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(m?f((function(){g.valueOf.call(n)})):s(n)!=v)?u(new p(k(e)),n,_):k(e)},C=a?d(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;C.length>L;L++)o(p,y=C[L])&&!o(_,y)&&O(_,y,j(p,y));_.prototype=g,g.constructor=_,r(c,v,_)}},c511:function(t,e,n){},f2f9:function(t,e,n){"use strict";n("c511")}}]);