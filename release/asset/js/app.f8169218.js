(function(e){function t(t){for(var r,a,o=t[0],i=t[1],l=t[2],d=0,f=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"asset/js/"+({}[e]||e)+"."+{"chunk-0335d337":"c2a6c5b6","chunk-07650b17":"22a5fa9f","chunk-0b5df95e":"792d57b8","chunk-0b901c3e":"24975d7a","chunk-196be93a":"c368f378","chunk-19f9818f":"f51079df","chunk-201f7386":"3d4fa8e5","chunk-29705720":"1f9d87ff","chunk-2cc6f81e":"64d45676","chunk-2d455006":"d0b60c94","chunk-2e1b3eb4":"6b05f504","chunk-37959954":"84239b8e","chunk-6b690925":"0ea33be5","chunk-3c7b80f7":"cbb73705","chunk-3d8721bc":"beae51da","chunk-554f03e2":"f0cb8da4","chunk-68ea28a9":"cd399fbb","chunk-772ed99a":"95dd77f1","chunk-79452ce7":"782fbfc7","chunk-94b500c2":"8890d392","chunk-fe2b1e98":"7ea565e7","chunk-6bd25f61":"a280ad62","chunk-767118de":"4a2842da","chunk-7ecd004b":"a605b72d","chunk-8220bc16":"f32a3fe8","chunk-85562a44":"6e0225a6","chunk-a1c3c706":"6525f959","chunk-a4c9471e":"06a32de7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0335d337":1,"chunk-07650b17":1,"chunk-0b5df95e":1,"chunk-0b901c3e":1,"chunk-196be93a":1,"chunk-19f9818f":1,"chunk-201f7386":1,"chunk-29705720":1,"chunk-2cc6f81e":1,"chunk-2d455006":1,"chunk-2e1b3eb4":1,"chunk-37959954":1,"chunk-3c7b80f7":1,"chunk-3d8721bc":1,"chunk-554f03e2":1,"chunk-68ea28a9":1,"chunk-772ed99a":1,"chunk-79452ce7":1,"chunk-94b500c2":1,"chunk-fe2b1e98":1,"chunk-6bd25f61":1,"chunk-767118de":1,"chunk-7ecd004b":1,"chunk-8220bc16":1,"chunk-85562a44":1,"chunk-a1c3c706":1,"chunk-a4c9471e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="asset/css/"+({}[e]||e)+"."+{"chunk-0335d337":"09d47b4e","chunk-07650b17":"fd453273","chunk-0b5df95e":"2f425bce","chunk-0b901c3e":"96dd5492","chunk-196be93a":"d4e6f489","chunk-19f9818f":"4d5b9533","chunk-201f7386":"11f587e0","chunk-29705720":"8948906d","chunk-2cc6f81e":"f6294875","chunk-2d455006":"d92df043","chunk-2e1b3eb4":"c02e394f","chunk-37959954":"d5b16631","chunk-6b690925":"31d6cfe0","chunk-3c7b80f7":"b47df3bd","chunk-3d8721bc":"f034136c","chunk-554f03e2":"e510d401","chunk-68ea28a9":"27316546","chunk-772ed99a":"f5ec501a","chunk-79452ce7":"4aca7357","chunk-94b500c2":"8281f8ad","chunk-fe2b1e98":"701c4a4e","chunk-6bd25f61":"d47df103","chunk-767118de":"fabbdf5d","chunk-7ecd004b":"55507a4b","chunk-8220bc16":"550b3cac","chunk-85562a44":"b86b6fd6","chunk-a1c3c706":"fdef36a5","chunk-a4c9471e":"98ba0c67"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var l=u[o],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===c))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],d=l.getAttribute("data-href");if(d===r||d===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],h.parentNode.removeChild(h),n(u)},h.href=c;var s=document.getElementsByTagName("head")[0];s.appendChild(h)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var f=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/fuli_deploy-1.225.1458/release/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var h=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2824:function(e,t,n){"use strict";var r=n("7a23"),a=Object(r["R"])("data-v-646f0d55");Object(r["A"])("data-v-646f0d55");var c={class:"container"},u={style:{width:"100%"}},o={class:"subtitle"},i={class:"extra"};Object(r["y"])();var l=a((function(e,t,n,l,d,f){var h=Object(r["F"])("van-icon"),s=Object(r["F"])("van-nav-bar"),b=Object(r["F"])("van-sticky"),p=Object(r["F"])("van-col"),m=Object(r["F"])("van-row");return Object(r["x"])(),Object(r["f"])("div",c,[Object(r["P"])(Object(r["i"])(b,{onChange:t[2]||(t[2]=function(e){return l.state.isTop=!l.state.isTop})},{default:a((function(){return[Object(r["i"])(s,{class:["navbar",{notTop:!l.state.isTop,noTitle:e.noTitle}],border:!1,onClickLeft:f.onClickLeft,onClickRight:t[1]||(t[1]=function(t){return e.$emit("click-more")})},{left:a((function(){return[Object(r["P"])(Object(r["i"])("div",null,[Object(r["E"])(e.$slots,"back",{},(function(){return[Object(r["i"])(h,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[r["M"],!n.noback]])]})),title:a((function(){return[Object(r["i"])("div",u,[Object(r["E"])(e.$slots,"tool",{},(function(){return[Object(r["h"])(Object(r["J"])(l.state.isTop?"":n.title),1)]}),{},!0)])]})),right:a((function(){return[Object(r["E"])(e.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[r["M"],!n.nonavbar&&0!=n.height]]),Object(r["i"])("div",{class:["page",{notTop:!l.state.isTop,noTitle:n.notitle,hasBar:e.$store.state.showTabbar}],style:{background:n.bg}},[Object(r["i"])(r["c"],{name:"van-slide-down"},{default:a((function(){return[Object(r["P"])(Object(r["i"])(m,{justify:"space-between",align:"center",class:"head",style:{color:n.fg}},{default:a((function(){return[Object(r["i"])(p,{span:"16"},{default:a((function(){return[Object(r["i"])("div",{class:"title",style:{height:n.height,color:n.fg},onClick:t[3]||(t[3]=function(t){return e.$emit("click-title")})},[Object(r["h"])(Object(r["J"])(n.title)+" ",1),Object(r["i"])("div",o,Object(r["J"])(n.subtitle),1)],4)]})),_:1}),Object(r["i"])(p,{span:"8"},{default:a((function(){return[Object(r["i"])("div",i,[Object(r["E"])(e.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[r["M"],l.state.isTop&&!n.nonavbar&&!n.notitle&&0!=n.height]])]})),_:1}),Object(r["E"])(e.$slots,"default",{},void 0,!0)],6)])})),d={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var e=Object(r["B"])({isTop:!0});return{state:e}},methods:{onClickLeft:function(){return"function"==typeof this.$slots.back?this.$emit("click-back"):(console.log("<<< BACK"),this.$router.back())}}};n("81af");d.render=l,d.__scopeId="data-v-646f0d55";t["a"]=d},"3fa2":function(e,t,n){},"49e8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("7a23")),c={id:"container"},u=Object(a["h"])("首页"),o=Object(a["h"])("分类"),i=Object(a["h"])("购物车"),l=Object(a["h"])("我的");function d(e,t,n,r,d,f){var h=Object(a["F"])("router-view"),s=Object(a["F"])("van-tabbar-item"),b=Object(a["F"])("van-tabbar");return Object(a["x"])(),Object(a["f"])(a["a"],null,[Object(a["i"])("div",c,[Object(a["i"])(h,null,{default:Object(a["O"])((function(e){var t=e.Component,n=e.route;return[Object(a["i"])(a["c"],{name:n.meta.transition?n.meta.transition:"fade"},{default:Object(a["O"])((function(){return[(Object(a["x"])(),Object(a["f"])(Object(a["H"])(t)))]})),_:2},1032,["name"])]})),_:1})]),Object(a["P"])(Object(a["i"])(b,{modelValue:r.active,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.active=e}),placeholder:"",route:""},{default:Object(a["O"])((function(){return[Object(a["i"])(s,{icon:"home-o",to:"/"},{default:Object(a["O"])((function(){return[u]})),_:1}),Object(a["i"])(s,{icon:"apps-o",to:"/mall/category"},{default:Object(a["O"])((function(){return[o]})),_:1}),Object(a["i"])(s,{icon:"shopping-cart-o",to:"/mall/cart",badge:e.profile&&e.profile.cartNumber?e.profile.cartNumber:""},{default:Object(a["O"])((function(){return[i]})),_:1},8,["badge"]),Object(a["i"])(s,{icon:"contact",to:"/my"},{default:Object(a["O"])((function(){return[l]})),_:1})]})),_:1},8,["modelValue"]),[[a["M"],e.$store.state.showTabbar]])],64)}var f=n("5530"),h=n("5502"),s={setup:function(){var e=Object(a["C"])("home");return{active:e}},computed:Object(f["a"])({},Object(h["d"])(["profile"]))};n("d2b8");s.render=d;var b=s,p=n("53ca"),m=(n("ac1f"),n("5319"),n("0e44")),k=Object(h["a"])({plugins:[Object(m["a"])()],state:{showPopup:!1,showTabbar:!1,config:null,profile:null,channel:[{name:"福利商城",type:"mall"},{name:"京东自营",type:"jdmall"}]},getters:{authorized:function(e){return null!=e.profile&&"object"==Object(p["a"])(e.profile)&&("undefined"!=typeof e.profile.id&&"string"==typeof e.profile.authorization)},uid:function(e,t){return t.authorized?e.profile.id:0},mobile:function(e,t){return t.authorized?e.profile.mobile.replace(/^(\d+)(\d{4})(\d{4})$/,"$1****$3"):""},nickname:function(e,t){return t.authorized?""!=e.profile.nickname?e.profile.nickname:"币友"+e.profile.mobile.substr(-4):""},account:function(e,t){return t.authorized&&e.profile.account?e.profile.account:"TSjYANND5eSA83uZRWvpJXx8sYDMFgJppS"},cash:function(e,t){return t.authorized&&e.profile.cash?parseFloat(e.profile.cash.replace(/(\.\d\d)(\d+)$/,"$1")):0},point:function(e,t){return t.authorized&&e.profile.point?parseFloat(e.profile.point.replace(/(\.\d\d)(\d+)$/,"$1")):0},level:function(e,t){return t.authorized&&e.profile.level||0}},mutations:{togglePopup:function(e,t){e.showPopup="boolean"==typeof t?t:!e.showPopup},toggleTabbar:function(e,t){e.showTabbar="boolean"==typeof t?t:!e.showTabbar},init:function(e,t){e.config=t},auth:function(e,t){e.profile="undefined"==typeof t["id"]?null:Object(f["a"])(Object(f["a"])({},e.profile),t)},cartNumberSet:function(e,t){e.profile.cartNumber=parseInt(t)},cartNumberAdd:function(e,t){e.profile.cartNumber=parseInt(e.profile.cartNumber)+parseInt(t)}},actions:{},modules:{}}),g=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("1276"),n("6c02"));function y(e,t,n,r,c,u){var o=Object(a["F"])("van-empty"),i=Object(a["F"])("BaseLayout");return Object(a["x"])(),Object(a["f"])(i,null,{default:Object(a["O"])((function(){return[Object(a["i"])(o,{image:"error",description:"页面不存在"})]})),_:1})}var j=n("2824"),O={components:{BaseLayout:j["a"]}};O.render=y;var v=O,w=[{path:"/",name:"Home",component:function(){return n.e("chunk-201f7386").then(n.bind(null,"bb51"))}},{path:"/:type(mall|jdmall|wymall)/category",name:"Category",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-68ea28a9")]).then(n.bind(null,"3567"))},props:function(e){return{type:e.params.type,id:e.query.id}}},{path:"/:type(mall|jdmall|wymall)/list",name:"List",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-94b500c2")]).then(n.bind(null,"4d8b"))},props:function(e){return{type:e.params.type,cid:e.query.cid}}},{path:"/:type(mall|jdmall|wymall)/item",name:"Item",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-fe2b1e98")]).then(n.bind(null,"977e"))},props:function(e){return{type:e.params.type,id:e.query.id}}},{path:"/:type(mall|jdmall|wymall)/cart",name:"Cart",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-772ed99a")]).then(n.bind(null,"abdf"))},props:function(e){return{type:e.params.type}}},{path:"/:type(mall|jdmall|wymall)/bill",name:"Bill",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-79452ce7")]).then(n.bind(null,"bc21"))},props:function(e){return{type:e.params.type,direct:e.query.direct,digital:e.query.digital,aid:e.query.aid}},meta:{requiresAuth:!0}},{path:"/invite",name:"Invite",component:function(){return n.e("chunk-2d455006").then(n.bind(null,"0c50"))}},{path:"/recharge",name:"Recharge",component:function(){return n.e("chunk-37959954").then(n.bind(null,"fae6"))}},{path:"/my",name:"MyIndex",component:function(){return n.e("chunk-196be93a").then(n.bind(null,"f400"))}},{path:"/my/profile",name:"MyProfile",component:function(){return n.e("chunk-0b901c3e").then(n.bind(null,"ab12"))},meta:{requiresAuth:!0}},{path:"/my/invite",name:"MyInvite",component:function(){return n.e("chunk-2e1b3eb4").then(n.bind(null,"48cb"))},meta:{requiresAuth:!0}},{path:"/my/wallet",name:"MyWallet",component:function(){return n.e("chunk-767118de").then(n.bind(null,"b5a0"))},meta:{requiresAuth:!0}},{path:"/my/:action(deposit|withdrawal)+",name:"MyWalletCash",component:function(){return n.e("chunk-0b5df95e").then(n.bind(null,"b62f"))},props:function(e){return{action:e.params.action}},meta:{requiresAuth:!0}},{path:"/my/point",name:"MyPoint",component:function(){return n.e("chunk-0335d337").then(n.bind(null,"924b"))},props:function(e){return{code:e.query.code}},meta:{requiresAuth:!0}},{path:"/my/exchange",name:"MyPointExchange",component:function(){return n.e("chunk-2cc6f81e").then(n.bind(null,"85d5"))},meta:{requiresAuth:!0}},{path:"/my/ticket",name:"MyTicket",component:function(){return n.e("chunk-07650b17").then(n.bind(null,"e7e0"))},meta:{requiresAuth:!0}},{path:"/my/order",name:"Order",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-3c7b80f7")]).then(n.bind(null,"957a"))},meta:{requiresAuth:!0}},{path:"/my/interest",name:"MyInterest",component:function(){return n.e("chunk-7ecd004b").then(n.bind(null,"29ba"))},meta:{requiresAuth:!0}},{path:"/my/address/:action(choose|add|edit)?",name:"MyAddress",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-554f03e2")]).then(n.bind(null,"be85"))},props:function(e){return{action:e.params.action,id:e.query.id,target:e.query.target}},meta:{requiresAuth:!0}},{path:"/team/",name:"TeamIndex",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-3d8721bc")]).then(n.bind(null,"3eba"))},meta:{requiresAuth:!0}},{path:"/team/property",name:"TeamProperty",component:function(){return n.e("chunk-85562a44").then(n.bind(null,"a4dc"))},meta:{requiresAuth:!0}},{path:"/team/member",name:"TeamMember",component:function(){return n.e("chunk-19f9818f").then(n.bind(null,"0ac3"))},meta:{requiresAuth:!0}},{path:"/team/card",name:"TeamCard",component:function(){return n.e("chunk-a4c9471e").then(n.bind(null,"efdd"))},meta:{requiresAuth:!0}},{path:"/team/invoice",name:"TeamInvoice",component:function(){return n.e("chunk-a1c3c706").then(n.bind(null,"d6ca"))},meta:{requiresAuth:!0}},{path:"/vip",name:"VIP",component:function(){return n.e("chunk-6bd25f61").then(n.bind(null,"8f12"))}},{path:"/:action(login|logout|register|changepassword|bind|invite)+/:ucode?",name:"Passport",component:function(){return n.e("chunk-8220bc16").then(n.bind(null,"bc1a"))},props:function(e){return{action:e.params.action,ucode:e.params.ucode,code:e.query.code,subtitle:e.query.subtitle,redirect:e.query.redirect}}},{path:"/:page(feature|intro|guide|help|about|contact|terms)+",name:"Page",component:function(){return n.e("chunk-29705720").then(n.bind(null,"2048"))},props:!0},{path:"/:path*",component:v}],P=Object(g["a"])({history:Object(g["b"])(),routes:w});P.beforeEach((function(e,t){return e.meta.requiresAuth&&!k.getters.authorized?(console.warn("需要登录授权"),{path:"/login",query:{redirect:e.fullPath}}):(k.commit("toggleTabbar","Home|Category|Cart|Bill|MyIndex|TeamIndex|VIP".indexOf(e.name)>-1),!0)})),P.afterEach((function(e,t){var n=e.path.split("/").length,r=t.path.split("/").length;e.meta.transitionName=n<r?"slide-right":"slide-left"}));var q=P,T=n("bc3a"),x=n.n(T),A=n("4328"),C=n.n(A),_=n("626a"),$=n("d6e4"),M=n("75e6");x.a.defaults.baseURL="//api.fuchijihua.com/",x.a.interceptors.request.use((function(e){return"get"!=e.method&&Object(_["a"])({type:"loading",message:"请稍候 ...",duration:1e4,forbidClick:!0}),e.headers=Object.assign(e.headers,{"Content-Type":"application/x-www-form-urlencoded","x-requested-with":"xmlhttprequest"}),k.state.profile&&k.state.profile.authorization&&(e.headers["token"]=k.state.profile.authorization),e.paramsSerializer=function(e){return C.a.stringify(e,{arrayFormat:"repeat"})},e.transformRequest=[function(e,t){return C.a.stringify(e,{arrayFormat:"brackets"})}],e.url+=(e.url.indexOf("?")>-1?"&":"?")+"rnd="+Math.random(),e})),x.a.interceptors.response.use((function(e){return $["a"].clear(),_["a"].clear(),200!==e.status||"number"!=typeof e.data.rtn?Object($["a"])({type:"danger",message:"服务异常，请重试！"}):999==e.data.rtn?(Object(_["a"])("授权已失效"),q.push({path:"/login",query:{redirect:q.currentRoute.fullPath}})):998==e.data.rtn?(x.a.get("/user/codesend"),M["a"].confirm({title:e.data.msg,message:"<div style='margin:20px 5px;line-height:14px;'><input id='vcode' value='' style='width:90%;font-size:24px;text-align:center;' placeholder='请输入验证码'/><p>验证码已发送至当前账号绑定的手机</p></div>",theme:"round-button",allowHtml:!0,beforeClose:function(e){return new Promise((function(t){if("cancel"==e)return t(!0);x.a.get("/user/codecheck?code="+document.querySelector("#vcode").value).then((function(){return t(!0)})).catch((function(){return t(!1)}))}))}})):9==e.data.rtn?(k.commit("auth",e.data.data),q.push({path:"/bind",query:{subtitle:e.data.msg,redirect:q.currentRoute.fullPath}})):0!=e.data.rtn?(Object($["a"])({type:"danger",message:e.data.msg,duration:5e3}),Promise.reject(e.data)):(e.data.msg.length>2&&Object(_["a"])(e.data.msg),Promise.resolve(e.data.data))}),(function(e){Object($["a"])({type:"danger",message:"网络请求错误，请重试！"}),console.error("网络错误：",e)}));var S=x.a,E=n("b970"),z=(n("157a"),n("77ed")),F=n.n(z),I=(n("db43"),n("e6a9")),N=n.n(I),B=Object(a["e"])(b);function L(e){S.get("/mall/config").then((function(e){return k.commit("init",e)})),k.getters.authorized&&S.get("/user/profile").then((function(t){k.commit("auth",t),"function"==typeof e&&e()}))}function R(e){return J.apply(this,arguments)}function J(){return J=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=!(r.length>1&&void 0!==r[1])||r[1],e.next=3,N()().toClipboard(t);case 3:n&&this.$toast("已复制到剪贴板");case 4:case"end":return e.stop()}}),e,this)}))),J.apply(this,arguments)}B.use(k).use(q).use(E["a"]).use(F.a).mount("#app"),B.config.globalProperties.$host="//api.fuchijihua.com/",B.config.globalProperties.$http=S,B.config.globalProperties.$init=L,B.config.globalProperties.$copy=R,L()},"81af":function(e,t,n){"use strict";n("49e8")},d2b8:function(e,t,n){"use strict";n("3fa2")},db43:function(e,t,n){}});
//# sourceMappingURL=app.f8169218.js.map