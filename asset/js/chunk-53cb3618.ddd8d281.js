(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53cb3618"],{"0653":function(t,e,n){},2824:function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["X"])("data-v-3905236b");Object(c["D"])("data-v-3905236b");var i={class:"container"},o={class:"subtitle"},s={class:"extra"};Object(c["B"])();var r=a((function(t,e,n,r,b,u){var l=Object(c["I"])("van-icon"),d=Object(c["I"])("van-nav-bar"),j=Object(c["I"])("van-sticky"),f=Object(c["I"])("van-col"),O=Object(c["I"])("van-row");return Object(c["A"])(),Object(c["g"])("div",i,[Object(c["U"])(Object(c["k"])(j,{onChange:e[2]||(e[2]=function(t){return r.state.isTop=!r.state.isTop})},{default:a((function(){return[Object(c["k"])(d,{class:["navbar",{notTop:!r.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:u.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:a((function(){return[Object(c["U"])(Object(c["k"])("div",null,[Object(c["H"])(t.$slots,"back",{},(function(){return[Object(c["k"])(l,{name:"arrow-left"})]}),{},!0)],512),[[c["Q"],!n.noback]])]})),title:a((function(){return[Object(c["H"])(t.$slots,"head",{},(function(){return[Object(c["k"])("div",{style:{width:"100%",color:r.state.isTop?n.fg:"inherit"}},Object(c["M"])(r.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)]})),right:a((function(){return[Object(c["H"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[c["Q"],"hide"!=n.navbar]]),Object(c["k"])("div",{class:["page",{notTop:!r.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(c["k"])(c["d"],{name:"van-slide-down"},{default:a((function(){return[Object(c["U"])(Object(c["k"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(c["k"])(f,{span:"16"},{default:a((function(){return[Object(c["k"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(c["H"])(t.$slots,"title",{},(function(){return[Object(c["j"])(Object(c["M"])(n.title),1)]}),{},!0),Object(c["k"])("div",o,Object(c["M"])(n.subtitle),1)],4)]})),_:3}),Object(c["k"])(f,{span:"8"},{default:a((function(){return[Object(c["k"])("div",s,[Object(c["H"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[c["Q"],r.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(c["H"])(t.$slots,"default",{},void 0,!0)],6)])})),b={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(c["E"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},u=(n("3c9a"),n("6b0d")),l=n.n(u);const d=l()(b,[["render",r],["__scopeId","data-v-3905236b"]]);e["a"]=d},"3c9a":function(t,e,n){"use strict";n("c89b")},bb12:function(t,e,n){"use strict";n("0653")},c89b:function(t,e,n){},e191:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a=Object(c["X"])("data-v-179e8396");Object(c["D"])("data-v-179e8396");var i=Object(c["k"])("div",{class:"list"},null,-1);Object(c["B"])();var o=a((function(t,e,n,o,s,r){var b=Object(c["I"])("van-empty"),u=Object(c["I"])("BaseLayout");return Object(c["A"])(),Object(c["g"])(u,{title:"业绩"},{default:a((function(){return[Object(c["U"])(Object(c["k"])(b,{style:{width:"100%"}},null,512),[[c["Q"],0==s.state.list.length]]),i]})),_:1})})),s=n("5530"),r=n("5502"),b=n("2824"),u={components:{BaseLayout:b["a"]},data:function(){var t=Object(c["E"])({list:[]});return{state:t}},created:function(){},computed:Object(s["a"])({},Object(r["d"])(["profile"])),methods:Object(s["a"])({},Object(r["c"])(["auth"]))},l=(n("bb12"),n("6b0d")),d=n.n(l);const j=d()(u,[["render",o],["__scopeId","data-v-179e8396"]]);e["default"]=j}}]);