(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"asset/js/"+({}[e]||e)+"."+{"chunk-078432df":"e9754687","chunk-0b901c3e":"24975d7a","chunk-191cc39e":"ffa52f5b","chunk-29705720":"1f9d87ff","chunk-2d455006":"d0b60c94","chunk-2e1b3eb4":"6b05f504","chunk-460949ad":"dd8ba2aa","chunk-50ed538a":"f7f0e794","chunk-6b690925":"0ea33be5","chunk-38656724":"f7260f03","chunk-470fba92":"25327bda","chunk-56aa7068":"4205f080","chunk-6008d759":"2c911dce","chunk-618841ff":"827915c7","chunk-7235bd30":"1cdd040a","chunk-6bd25f61":"a280ad62","chunk-87dc51ee":"c4f4189a","chunk-8d35dc88":"8d20af48","chunk-aa44f3c6":"9a80c279","chunk-be7fb8c4":"71d14f8f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-078432df":1,"chunk-0b901c3e":1,"chunk-191cc39e":1,"chunk-29705720":1,"chunk-2d455006":1,"chunk-2e1b3eb4":1,"chunk-460949ad":1,"chunk-50ed538a":1,"chunk-38656724":1,"chunk-470fba92":1,"chunk-56aa7068":1,"chunk-6008d759":1,"chunk-618841ff":1,"chunk-7235bd30":1,"chunk-6bd25f61":1,"chunk-87dc51ee":1,"chunk-8d35dc88":1,"chunk-aa44f3c6":1,"chunk-be7fb8c4":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="asset/css/"+({}[e]||e)+"."+{"chunk-078432df":"e894245c","chunk-0b901c3e":"96dd5492","chunk-191cc39e":"ac110a7e","chunk-29705720":"8948906d","chunk-2d455006":"d92df043","chunk-2e1b3eb4":"c02e394f","chunk-460949ad":"0a5a34ab","chunk-50ed538a":"373ca30d","chunk-6b690925":"31d6cfe0","chunk-38656724":"df8cd842","chunk-470fba92":"7c4dc567","chunk-56aa7068":"d9812124","chunk-6008d759":"49daa77a","chunk-618841ff":"77be1e29","chunk-7235bd30":"15a8effb","chunk-6bd25f61":"d47df103","chunk-87dc51ee":"fe47e175","chunk-8d35dc88":"273725f3","chunk-aa44f3c6":"bf6457f1","chunk-be7fb8c4":"acce54bc"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],d=l.getAttribute("data-href");if(d===r||d===c)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],s.parentNode.removeChild(s),n(o)},s.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/fuli_deploy-210628.083117/release/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var s=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2824:function(e,t,n){"use strict";var r=n("7a23"),a=Object(r["R"])("data-v-dd2b3816");Object(r["A"])("data-v-dd2b3816");var c={class:"container"},o={style:{width:"100%"}},u={class:"subtitle"},i={class:"extra"};Object(r["y"])();var l=a((function(e,t,n,l,d,f){var s=Object(r["F"])("van-icon"),p=Object(r["F"])("van-nav-bar"),h=Object(r["F"])("van-sticky"),b=Object(r["F"])("van-col"),m=Object(r["F"])("van-row");return Object(r["x"])(),Object(r["f"])("div",c,[Object(r["P"])(Object(r["i"])(h,{onChange:t[2]||(t[2]=function(e){return l.state.isTop=!l.state.isTop})},{default:a((function(){return[Object(r["i"])(p,{class:["navbar",{notTop:!l.state.isTop}],border:!1,onClickLeft:f.onClickLeft,onClickRight:t[1]||(t[1]=function(t){return e.$emit("click-more")})},{left:a((function(){return[Object(r["P"])(Object(r["i"])("div",null,[Object(r["E"])(e.$slots,"back",{},(function(){return[Object(r["i"])(s,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[r["M"],!n.noback]])]})),title:a((function(){return[Object(r["i"])("div",o,[Object(r["E"])(e.$slots,"tool",{},(function(){return[Object(r["h"])(Object(r["J"])(l.state.isTop?"":n.title),1)]}),{},!0)])]})),right:a((function(){return[Object(r["E"])(e.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[r["M"],!n.nonavbar&&0!=n.height]]),Object(r["i"])("div",{class:["page",{notTop:!l.state.isTop}],style:{background:n.bg}},[Object(r["i"])(r["c"],{name:"van-slide-down"},{default:a((function(){return[Object(r["P"])(Object(r["i"])(m,{justify:"space-between",align:"center",class:"head",style:{color:n.fg}},{default:a((function(){return[Object(r["i"])(b,{span:"16"},{default:a((function(){return[Object(r["i"])("div",{class:"title",style:{height:n.height,color:n.fg},onClick:t[3]||(t[3]=function(t){return e.$emit("click-title")})},[Object(r["h"])(Object(r["J"])(n.title)+" ",1),Object(r["i"])("div",u,Object(r["J"])(n.subtitle),1)],4)]})),_:1}),Object(r["i"])(b,{span:"8"},{default:a((function(){return[Object(r["i"])("div",i,[Object(r["E"])(e.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[r["M"],l.state.isTop&&!n.nonavbar&&!n.notitle&&0!=n.height]])]})),_:1}),Object(r["E"])(e.$slots,"default",{},void 0,!0)],6)])})),d={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var e=Object(r["B"])({isTop:!0});return{state:e}},methods:{onClickLeft:function(){return"function"==typeof this.$slots.back?this.$emit("click-back"):(console.log("<<< BACK"),this.$router.back())}}};n("89cc");d.render=l,d.__scopeId="data-v-dd2b3816";t["a"]=d},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("7a23")),c={id:"container"},o=Object(a["h"])("首页"),u=Object(a["h"])("分类"),i=Object(a["h"])("购物车"),l=Object(a["h"])("我的");function d(e,t,n,r,d,f){var s=Object(a["F"])("router-view"),p=Object(a["F"])("van-tabbar-item"),h=Object(a["F"])("van-tabbar");return Object(a["x"])(),Object(a["f"])(a["a"],null,[Object(a["i"])("div",c,[Object(a["i"])(s,null,{default:Object(a["O"])((function(e){var t=e.Component,n=e.route;return[Object(a["i"])(a["c"],{name:n.meta.transition?n.meta.transition:"fade"},{default:Object(a["O"])((function(){return[(Object(a["x"])(),Object(a["f"])(Object(a["H"])(t)))]})),_:2},1032,["name"])]})),_:1})]),Object(a["P"])(Object(a["i"])(h,{modelValue:r.active,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.active=e}),placeholder:"",route:""},{default:Object(a["O"])((function(){return[Object(a["i"])(p,{icon:"home-o",to:"/"},{default:Object(a["O"])((function(){return[o]})),_:1}),Object(a["i"])(p,{icon:"apps-o",to:"/mall/category"},{default:Object(a["O"])((function(){return[u]})),_:1}),Object(a["i"])(p,{icon:"shopping-cart-o",to:"/mall/cart"},{default:Object(a["O"])((function(){return[i]})),_:1}),Object(a["i"])(p,{icon:"contact",to:"/my"},{default:Object(a["O"])((function(){return[l]})),_:1})]})),_:1},8,["modelValue"]),[[a["M"],e.$store.state.showTabbar]])],64)}var f={setup:function(){var e=Object(a["C"])("home");return{active:e}}};n("dff4");f.render=d;var s=f,p=n("5530"),h=n("53ca"),b=(n("ac1f"),n("5319"),n("5502")),m=n("0e44"),g=Object(b["a"])({plugins:[Object(m["a"])()],state:{showPopup:!1,showTabbar:!1,config:null,profile:null,channel:[{name:"福利商城",type:"mall"},{name:"京东自营",type:"jdmall"},{name:"网易严选",type:"wymall"}]},getters:{authorized:function(e){return null!=e.profile&&"object"==Object(h["a"])(e.profile)&&("undefined"!=typeof e.profile.id&&"string"==typeof e.profile.authorization)},uid:function(e,t){return t.authorized?e.profile.id:0},mobile:function(e,t){return t.authorized?e.profile.mobile.replace(/^(\d+)(\d{4})(\d{4})$/,"$1****$3"):""},nickname:function(e,t){return t.authorized?""!=e.profile.nickname?e.profile.nickname:"币友"+e.profile.mobile.substr(-4):""},account:function(e,t){return t.authorized&&e.profile.account?e.profile.account:"TSjYANND5eSA83uZRWvpJXx8sYDMFgJppS"},cash:function(e,t){return t.authorized&&e.profile.cash?parseFloat(e.profile.cash.replace(/(\.\d\d)(\d+)$/,"$1")):0},point:function(e,t){return t.authorized&&e.profile.point?parseFloat(e.profile.point.replace(/(\.\d\d)(\d+)$/,"$1")):0},level:function(e,t){return t.authorized&&e.profile.level||0}},mutations:{togglePopup:function(e,t){e.showPopup="boolean"==typeof t?t:!e.showPopup},toggleTabbar:function(e,t){e.showTabbar="boolean"==typeof t?t:!e.showTabbar},init:function(e,t){e.config=t},auth:function(e,t){e.profile="undefined"==typeof t["id"]?null:Object(p["a"])(Object(p["a"])({},e.profile),t)},cartNumberAdd:function(e,t){e.profile.cartNumber=parseInt(e.profile.cartNumber)+parseInt(t)}},actions:{},modules:{}}),y=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("1276"),n("6c02"));function k(e,t,n,r,c,o){var u=Object(a["F"])("van-empty"),i=Object(a["F"])("BaseLayout");return Object(a["x"])(),Object(a["f"])(i,null,{default:Object(a["O"])((function(){return[Object(a["i"])(u,{image:"error",description:"页面不存在"})]})),_:1})}var O=n("2824"),j={components:{BaseLayout:O["a"]}};j.render=k;var v=j,w=[{path:"/",name:"Home",component:function(){return n.e("chunk-aa44f3c6").then(n.bind(null,"bb51"))}},{path:"/:type(mall|jdmall|wymall)/category",name:"Category",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-6008d759")]).then(n.bind(null,"3567"))},props:function(e){return{type:e.params.type,id:e.query.id}}},{path:"/:type(mall|jdmall|wymall)/list",name:"List",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-470fba92")]).then(n.bind(null,"4d8b"))},props:function(e){return{type:e.params.type,cid:e.query.cid}}},{path:"/:type(mall|jdmall|wymall)/item",name:"Item",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-618841ff")]).then(n.bind(null,"977e"))},props:function(e){return{type:e.params.type,id:e.query.id}}},{path:"/:type(mall|jdmall|wymall)/cart",name:"Cart",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-56aa7068")]).then(n.bind(null,"abdf"))},props:function(e){return{type:e.params.type}}},{path:"/:type(mall|jdmall|wymall)/bill",name:"Bill",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-38656724")]).then(n.bind(null,"bc21"))},props:function(e){return{type:e.params.type,direct:e.query.direct,aid:e.query.aid}},meta:{requiresAuth:!0}},{path:"/invite",name:"Invite",component:function(){return n.e("chunk-2d455006").then(n.bind(null,"0c50"))}},{path:"/my",name:"My",component:function(){return n.e("chunk-460949ad").then(n.bind(null,"f400"))}},{path:"/my/profile",name:"MyProfile",component:function(){return n.e("chunk-0b901c3e").then(n.bind(null,"ab12"))},meta:{requiresAuth:!0}},{path:"/my/invite",name:"MyInvite",component:function(){return n.e("chunk-2e1b3eb4").then(n.bind(null,"48cb"))},meta:{requiresAuth:!0}},{path:"/my/wallet",name:"MyWallet",component:function(){return n.e("chunk-8d35dc88").then(n.bind(null,"b5a0"))},meta:{requiresAuth:!0}},{path:"/my/:action(deposit|withdrawal)+",name:"MyWalletCash",component:function(){return n.e("chunk-191cc39e").then(n.bind(null,"b62f"))},props:function(e){return{action:e.params.action}},meta:{requiresAuth:!0}},{path:"/my/point",name:"MyPoint",component:function(){return n.e("chunk-50ed538a").then(n.bind(null,"924b"))},meta:{requiresAuth:!0}},{path:"/my/order",name:"Order",component:function(){return n.e("chunk-be7fb8c4").then(n.bind(null,"957a"))},meta:{requiresAuth:!0}},{path:"/my/interest",name:"MyInterest",component:function(){return n.e("chunk-87dc51ee").then(n.bind(null,"29ba"))},meta:{requiresAuth:!0}},{path:"/my/address/:action(choose|add|edit)?",name:"MyAddress",component:function(){return Promise.all([n.e("chunk-6b690925"),n.e("chunk-7235bd30")]).then(n.bind(null,"be85"))},props:function(e){return{action:e.params.action,id:e.query.id,target:e.query.target}},meta:{requiresAuth:!0}},{path:"/vip",name:"VIP",component:function(){return n.e("chunk-6bd25f61").then(n.bind(null,"8f12"))}},{path:"/:action(login|logout|register|changepassword|invite)+/:code?",name:"Passport",component:function(){return n.e("chunk-078432df").then(n.bind(null,"bc1a"))},props:function(e){return{action:e.params.action,code:e.params.code,redirect:e.query.redirect}}},{path:"/:page(feature|intro|guide|help|about|contact|terms)+",name:"Page",component:function(){return n.e("chunk-29705720").then(n.bind(null,"2048"))},props:!0},{path:"/:path*",component:v}],P=Object(y["a"])({history:Object(y["b"])(),routes:w});P.beforeEach((function(e,t){return e.meta.requiresAuth&&!g.getters.authorized?(console.warn("需要登录授权"),{path:"/login",query:{redirect:e.fullPath}}):(g.commit("toggleTabbar",-1=="Passport|Strategy".indexOf(e.name)),!0)})),P.afterEach((function(e,t){var n=e.path.split("/").length,r=t.path.split("/").length;e.meta.transitionName=n<r?"slide-right":"slide-left"}));var q=P,x=n("bc3a"),_=n.n(x),C=n("4328"),T=n.n(C),A=n("626a"),$=n("d6e4"),S=n("75e6");_.a.defaults.baseURL="//api.fuchijihua.com/",_.a.interceptors.request.use((function(e){return"get"!=e.method&&Object(A["a"])({type:"loading",message:"请稍候 ...",duration:1e4,forbidClick:!0}),e.headers=Object.assign(e.headers,{"Content-Type":"application/x-www-form-urlencoded","x-requested-with":"xmlhttprequest"}),g.state.profile&&g.state.profile.authorization&&(e.headers["token"]=g.state.profile.authorization),e.paramsSerializer=function(e){return T.a.stringify(e,{arrayFormat:"repeat"})},e.transformRequest=[function(e,t){return T.a.stringify(e,{arrayFormat:"brackets"})}],e.url+=(e.url.indexOf("?")>-1?"&":"?")+"rnd="+Math.random(),e})),_.a.interceptors.response.use((function(e){return $["a"].clear(),A["a"].clear(),200!==e.status||"number"!=typeof e.data.rtn?Object($["a"])({type:"danger",message:"服务异常，请重试！"}):999==e.data.rtn?(Object(A["a"])("授权已失效"),q.push({path:"/login",query:{redirect:q.currentRoute.fullPath}})):998==e.data.rtn?(_.a.get("/user/codesend"),S["a"].confirm({title:e.data.msg,message:"<div style='margin:20px 5px;line-height:14px;'><input id='vcode' value='' style='width:90%;font-size:24px;text-align:center;' placeholder='请输入验证码'/><p>验证码已发送至当前账号绑定的手机</p></div>",theme:"round-button",allowHtml:!0,beforeClose:function(e){return new Promise((function(t){if("cancel"==e)return t(!0);_.a.get("/user/codecheck?code="+document.querySelector("#vcode").value).then((function(){return t(!0)})).catch((function(){return t(!1)}))}))}})):0!=e.data.rtn?(Object($["a"])({type:"danger",message:e.data.msg,duration:5e3}),Promise.reject(e.data)):(e.data.msg.length>2&&Object(A["a"])(e.data.msg),Promise.resolve(e.data.data))}),(function(e){Object($["a"])({type:"danger",message:"网络请求错误，请重试！"}),console.error("网络错误：",e)}));var M=_.a,z=n("b970"),E=(n("157a"),n("77ed")),F=n.n(E),L=(n("db43"),n("e6a9")),B=n.n(L),N=Object(a["e"])(s);function I(e){M.get("/mall/config").then((function(e){return g.commit("init",e)})),g.getters.authorized&&M.get("/user/profile").then((function(t){g.commit("auth",t),"function"==typeof e&&e()}))}function R(e){return J.apply(this,arguments)}function J(){return J=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=!(r.length>1&&void 0!==r[1])||r[1],e.next=3,B()().toClipboard(t);case 3:n&&this.$toast("已复制到剪贴板");case 4:case"end":return e.stop()}}),e,this)}))),J.apply(this,arguments)}N.use(g).use(q).use(z["a"]).use(F.a).mount("#app"),N.config.globalProperties.$http=M,N.config.globalProperties.$init=I,N.config.globalProperties.$copy=R,I()},"6ecd":function(e,t,n){},"89cc":function(e,t,n){"use strict";n("6ecd")},a098:function(e,t,n){},db43:function(e,t,n){},dff4:function(e,t,n){"use strict";n("a098")}});
//# sourceMappingURL=app.0a05c073.js.map