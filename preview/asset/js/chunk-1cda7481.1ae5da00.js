(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cda7481"],{"08b5":function(t,e,n){},"25f0":function(t,e,n){"use strict";var o=n("6eeb"),c=n("825a"),i=n("d039"),r=n("ad6d"),a="toString",l=RegExp.prototype,u=l[a],s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),b=u.name!=a;(s||b)&&o(RegExp.prototype,a,(function(){var t=c(this),e=String(t.source),n=t.flags,o=String(void 0===n&&t instanceof RegExp&&!("flags"in l)?r.call(t):n);return"/"+e+"/"+o}),{unsafe:!0})},2824:function(t,e,n){"use strict";var o=n("7a23"),c=Object(o["S"])("data-v-3d37ea87");Object(o["B"])("data-v-3d37ea87");var i={class:"container"},r={style:{width:"100%"}},a={class:"subtitle"},l={class:"extra"};Object(o["z"])();var u=c((function(t,e,n,u,s,b){var d=Object(o["G"])("van-icon"),f=Object(o["G"])("van-nav-bar"),j=Object(o["G"])("van-sticky"),p=Object(o["G"])("van-col"),O=Object(o["G"])("van-row");return Object(o["y"])(),Object(o["g"])("div",i,[Object(o["Q"])(Object(o["j"])(j,{onChange:e[2]||(e[2]=function(t){return u.state.isTop=!u.state.isTop})},{default:c((function(){return[Object(o["j"])(f,{class:["navbar",{notTop:!u.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:b.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:c((function(){return[Object(o["Q"])(Object(o["j"])("div",null,[Object(o["F"])(t.$slots,"back",{},(function(){return[Object(o["j"])(d,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[o["N"],!n.noback]])]})),title:c((function(){return[Object(o["j"])("div",r,Object(o["K"])(u.state.isTop&&"0"!=n.height?"":n.title),1)]})),right:c((function(){return[Object(o["F"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[o["N"],"hide"!=n.navbar]]),Object(o["j"])("div",{class:["page",{notTop:!u.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(o["j"])(o["d"],{name:"van-slide-down"},{default:c((function(){return[Object(o["Q"])(Object(o["j"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:c((function(){return[Object(o["j"])(p,{span:"16"},{default:c((function(){return[Object(o["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(o["F"])(t.$slots,"title",{},(function(){return[Object(o["i"])(Object(o["K"])(n.title),1)]}),{},!0),Object(o["j"])("div",a,Object(o["K"])(n.subtitle),1)],4)]})),_:3}),Object(o["j"])(p,{span:"8"},{default:c((function(){return[Object(o["j"])("div",l,[Object(o["F"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[o["N"],u.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(o["F"])(t.$slots,"default",{},void 0,!0)],6)])})),s={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(o["C"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},b=(n("f14c"),n("6b0d")),d=n.n(b);const f=d()(s,[["render",u],["__scopeId","data-v-3d37ea87"]]);e["a"]=f},"466d":function(t,e,n){"use strict";var o=n("d784"),c=n("825a"),i=n("50c4"),r=n("1d80"),a=n("8aa5"),l=n("14c3");o("match",1,(function(t,e,n){return[function(e){var n=r(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,n):new RegExp(e)[t](String(n))},function(t){var o=n(e,t,this);if(o.done)return o.value;var r=c(t),u=String(this);if(!r.global)return l(r,u);var s=r.unicode;r.lastIndex=0;var b,d=[],f=0;while(null!==(b=l(r,u))){var j=String(b[0]);d[f]=j,""===j&&(r.lastIndex=a(u,i(r.lastIndex),s)),f++}return 0===f?null:d}]}))},"4d63":function(t,e,n){var o=n("83ab"),c=n("da84"),i=n("94ca"),r=n("7156"),a=n("9bf2").f,l=n("241c").f,u=n("44e7"),s=n("ad6d"),b=n("9f7f"),d=n("6eeb"),f=n("d039"),j=n("69f3").enforce,p=n("2626"),O=n("b622"),v=O("match"),h=c.RegExp,g=h.prototype,y=/a/g,m=/a/g,k=new h(y)!==y,x=b.UNSUPPORTED_Y,w=o&&i("RegExp",!k||x||f((function(){return m[v]=!1,h(y)!=y||h(m)==m||"/a/i"!=h(y,"i")})));if(w){var F=function(t,e){var n,o=this instanceof F,c=u(t),i=void 0===e;if(!o&&c&&t.constructor===F&&i)return t;k?c&&!i&&(t=t.source):t instanceof F&&(i&&(e=s.call(t)),t=t.source),x&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var a=r(k?new h(t,e):h(t,e),o?this:g,F);if(x&&n){var l=j(a);l.sticky=!0}return a},C=function(t){t in F||a(F,t,{configurable:!0,get:function(){return h[t]},set:function(e){h[t]=e}})},_=l(h),$=0;while(_.length>$)C(_[$++]);g.constructor=F,F.prototype=g,d(c,"RegExp",F)}p("RegExp")},7156:function(t,e,n){var o=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var i,r;return c&&"function"==typeof(i=e.constructor)&&i!==n&&o(r=i.prototype)&&r!==n.prototype&&c(t,r),t}},9528:function(t,e,n){},b332:function(t,e,n){"use strict";n("9528")},f14c:function(t,e,n){"use strict";n("08b5")},f400:function(t,e,n){"use strict";n.r(e);n("b0c0");var o=n("7a23"),c=Object(o["S"])("data-v-47e61748");Object(o["B"])("data-v-47e61748");var i=Object(o["i"])("企业账户"),r={class:"content"},a={style:{padding:"10px"}},l=Object(o["i"])("立即切换");Object(o["z"])();var u=c((function(t,e,n,u,s,b){var d=Object(o["G"])("van-button"),f=Object(o["G"])("van-icon"),j=Object(o["G"])("van-cell"),p=Object(o["G"])("van-col"),O=Object(o["G"])("van-row"),v=Object(o["G"])("van-grid-item"),h=Object(o["G"])("van-grid"),g=Object(o["G"])("van-cell-group"),y=Object(o["G"])("van-field"),m=Object(o["G"])("van-action-sheet"),k=Object(o["G"])("BaseLayout");return Object(o["y"])(),Object(o["g"])(k,{title:b.title,subtitle:b.subtitle,bg:"linear-gradient(180deg, #EFF, #F9F9F9 10%, #F9F9F9)",onClickTitle:b.onTitle,noback:""},{extra:c((function(){return[null!=t.profile&&"undefined"!=typeof t.profile["team"]&&t.profile.team?Object(o["Q"])((Object(o["y"])(),Object(o["g"])(d,{key:1,icon:"friends",style:{width:"100%",borderRadius:"10px 0 0 10px",color:"#F60"},color:"#F6F6F6",to:"/team/"},{default:c((function(){return[i]})),_:1},512)),[[o["N"],t.authorized]]):Object(o["Q"])((Object(o["y"])(),Object(o["g"])(d,{key:0,icon:"edit",style:{width:"80px",borderRadius:"10px 0 0 10px",color:"#000"},color:"#F6F6F6",to:"/my/profile"},null,512)),[[o["N"],t.authorized]])]})),default:c((function(){return[Object(o["j"])("div",r,[Object(o["j"])(j,{class:"vip",style:{color:b.vip.color},border:!1,title:b.vip.name,value:"会员等级及权益",onClick:e[1]||(e[1]=function(e){return t.$toast("马上开放")}),center:"","is-link":""},{icon:c((function(){return[Object(o["j"])(f,{name:"vip-card",size:"40",color:b.vip.color,style:{marginRight:"10px"}},null,8,["color"])]})),_:1},8,["style","title"]),Object(o["Q"])(Object(o["j"])(O,{class:"toolbar",gutter:"10",align:"center",justify:"space-around"},{default:c((function(){return[Object(o["j"])(p,{class:"icon",span:"12"},{default:c((function(){return[Object(o["j"])(j,{title:"积分",label:t.point+" 分",class:"card",center:"",onClick:e[2]||(e[2]=function(e){return t.$router.push("/my/point")})},{extra:c((function(){return[Object(o["j"])(f,{name:"ecard-pay",color:"#F6F",size:"40"})]})),_:1},8,["label"])]})),_:1}),Object(o["j"])(p,{class:"icon",span:"12"},{default:c((function(){return[Object(o["j"])(j,{title:"钱包",label:t.cash+" 元",class:"card",center:"",onClick:e[3]||(e[3]=function(e){return t.$router.push("/my/wallet")})},{extra:c((function(){return[Object(o["j"])(f,{name:"paid",color:"#69F",size:"40"})]})),_:1},8,["label"])]})),_:1})]})),_:1},512),[[o["N"],t.authorized]]),Object(o["j"])(j,{class:"toolbar",title:"我的订单",value:"全部订单","is-link":"",to:"/my/order"}),Object(o["j"])(h,{border:!1},{default:c((function(){return[Object(o["j"])(v,{icon:"balance-list-o",style:{color:"#F69"},text:"待付款",to:"/my/order?filter=0"}),Object(o["j"])(v,{icon:"todo-list-o",style:{color:"#3C6"},text:"待发货",to:"/my/order?filter=1"}),Object(o["j"])(v,{icon:"logistics",style:{color:"#993"},text:"待收货",to:"/my/order?filter=2"}),Object(o["j"])(v,{icon:"service",style:{color:"#C6C"},text:"退换/售后",to:"/my/service"})]})),_:1}),Object(o["j"])(h,{class:"toolbar",border:!1},{default:c((function(){return[Object(o["j"])(v,{icon:"goods-collect-o",style:{color:"#36C"},text:"我的关注",to:"/my/interest"}),Object(o["j"])(v,{icon:"eye-o",style:{color:"#993"},text:"我的足迹",to:"/my/interest"}),Object(o["j"])(v,{icon:"free-postage",style:{color:"#F90"},text:"我的地址",to:"/my/address"}),Object(o["j"])(v,{icon:"coupon-o",style:{color:"#F69"},text:"我的卡券",to:"/my/coupon"})]})),_:1}),Object(o["j"])(g,{class:"menu"},{default:c((function(){return[t.config["help"].length>10?(Object(o["y"])(),Object(o["g"])(j,{key:0,class:"item",icon:"question",title:"帮助中心",to:"/help",center:"","is-link":""})):Object(o["h"])("",!0),Object(o["j"])(j,{class:"item",icon:"service",title:"联系客服",to:"/contact",center:"","is-link":""}),Object(o["j"])(j,{class:"item",icon:"fire",title:"关于我们",to:"/about",center:"","is-link":""}),Object(o["j"])(j,{class:"item",icon:"diamond",title:"服务条款",to:"/terms",center:"","is-link":""}),Object(o["j"])(j,{class:"item",icon:"upgrade",title:"检测更新",value:b.version,center:"","is-link":"",onClick:e[4]||(e[4]=function(e){return t.$toast("已是最新版")})},null,8,["value"])]})),_:1}),Object(o["j"])(m,{show:s.state.popup,"onUpdate:show":e[6]||(e[6]=function(t){return s.state.popup=t}),title:"切换账号",round:"",closeable:""},{default:c((function(){return[Object(o["j"])("form",a,[Object(o["j"])(y,{type:"text",border:!0,modelValue:s.state.uid,"onUpdate:modelValue":e[5]||(e[5]=function(t){return s.state.uid=t}),"input-align":"center",placeholder:"请输入 UID",style:{margin:"10px 0"}},null,8,["modelValue"]),Object(o["j"])(d,{type:"primary",round:"",block:"",onClick:b.onSwitch},{default:c((function(){return[l]})),_:1},8,["onClick"])])]})),_:1},8,["show"])])]})),_:1},8,["title","subtitle","onClickTitle"])})),s=n("5530"),b=(n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5502")),d=n("2824"),f={components:{BaseLayout:d["a"]},data:function(){var t=Object(o["C"])({popup:!1,uid:""});return{state:t}},created:function(){this.$init()},computed:Object(s["a"])(Object(s["a"])({title:function(){return this.authorized?this.nickname:"登录 / 注册"},subtitle:function(){return this.authorized?"UID: "+this.uid:"立即登录 马上有礼"},vip:function(){var t={0:{name:"精英会员",color:"#CCC"},1:{name:"银卡会员",color:"#FFF"},2:{name:"金卡会员",color:"#FF0"},3:{name:"翡翠卡会员",color:"#0F0"},4:{name:"钻石卡会员",color:"#0FF"}};return"undefined"!=typeof t[this.level]?t[this.level]:t[0]},version:function(){var t=document.querySelector("link[rel='icon']").getAttribute("href"),e=new RegExp("([\\d]{1}\\.[\\d]{1,}\\.[\\d]{2,})","i");return e.test(t)?t.match(e)[1]:"开发版"}},Object(b["d"])(["config","profile"])),Object(b["b"])(["authorized","uid","nickname","cash","point","level"])),methods:Object(s["a"])({onTitle:function(){if(this.authorized&&1==this.uid)return this.state.popup=!0;this.$router.push(this.authorized?"/my/profile":"/login")},onSwitch:function(){var t=this;this.$http.post("/user/switch?id="+this.state.uid).then((function(e){t.state.popup=!1,t.auth(e),t.$init()}))}},Object(b["c"])(["auth"]))},j=(n("b332"),n("6b0d")),p=n.n(j);const O=p()(f,[["render",u],["__scopeId","data-v-47e61748"]]);e["default"]=O}}]);