(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26505c71"],{2824:function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["W"])("data-v-3905236b");Object(c["C"])("data-v-3905236b");var i={class:"container"},o={class:"subtitle"},r={class:"extra"};Object(c["A"])();var s=a((function(t,e,n,s,b,u){var l=Object(c["H"])("van-icon"),j=Object(c["H"])("van-nav-bar"),d=Object(c["H"])("van-sticky"),f=Object(c["H"])("van-col"),O=Object(c["H"])("van-row");return Object(c["z"])(),Object(c["g"])("div",i,[Object(c["T"])(Object(c["j"])(d,{onChange:e[2]||(e[2]=function(t){return s.state.isTop=!s.state.isTop})},{default:a((function(){return[Object(c["j"])(j,{class:["navbar",{notTop:!s.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:u.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:a((function(){return[Object(c["T"])(Object(c["j"])("div",null,[Object(c["G"])(t.$slots,"back",{},(function(){return[Object(c["j"])(l,{name:"arrow-left"})]}),{},!0)],512),[[c["P"],!n.noback]])]})),title:a((function(){return[Object(c["G"])(t.$slots,"head",{},(function(){return[Object(c["j"])("div",{style:{width:"100%",color:s.state.isTop?n.fg:"inherit"}},Object(c["L"])(s.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)]})),right:a((function(){return[Object(c["G"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[c["P"],"hide"!=n.navbar]]),Object(c["j"])("div",{class:["page",{notTop:!s.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(c["j"])(c["d"],{name:"van-slide-down"},{default:a((function(){return[Object(c["T"])(Object(c["j"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(c["j"])(f,{span:"16"},{default:a((function(){return[Object(c["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(c["G"])(t.$slots,"title",{},(function(){return[Object(c["i"])(Object(c["L"])(n.title),1)]}),{},!0),Object(c["j"])("div",o,Object(c["L"])(n.subtitle),1)],4)]})),_:3}),Object(c["j"])(f,{span:"8"},{default:a((function(){return[Object(c["j"])("div",r,[Object(c["G"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[c["P"],s.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(c["G"])(t.$slots,"default",{},void 0,!0)],6)])})),b={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(c["D"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},u=(n("3c9a"),n("6b0d")),l=n.n(u);const j=l()(b,[["render",s],["__scopeId","data-v-3905236b"]]);e["a"]=j},"3c9a":function(t,e,n){"use strict";n("c89b")},c89b:function(t,e,n){},dab8:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a=Object(c["W"])("data-v-2d1f2ed8"),i=a((function(t,e,n,i,o,r){var s=Object(c["H"])("van-empty"),b=Object(c["H"])("BaseLayout");return Object(c["z"])(),Object(c["g"])(b,{title:"优惠券"},{default:a((function(){return[Object(c["j"])(s,{style:{width:"100%"}})]})),_:1})})),o=n("5530"),r=n("5502"),s=n("2824"),b={components:{BaseLayout:s["a"]},data:function(){var t=Object(c["D"])({popup:!1});return{state:t}},created:function(){},computed:Object(o["a"])(Object(o["a"])({},Object(r["d"])(["profile"])),Object(r["b"])(["authorized","uid","nickname","cash","point","level"])),methods:Object(o["a"])({},Object(r["c"])(["auth"]))},u=n("6b0d"),l=n.n(u);const j=l()(b,[["render",i],["__scopeId","data-v-2d1f2ed8"]]);e["default"]=j}}]);