(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e310ad66"],{"13d9":function(t,e,n){"use strict";n.r(e);n("ac1f"),n("5319");var c=n("7a23");function a(t,e,n,a,i,o){var r=Object(c["I"])("van-icon"),s=Object(c["I"])("van-empty"),u=Object(c["I"])("BaseLayout");return Object(c["A"])(),Object(c["g"])(u,null,{back:Object(c["T"])((function(){return[Object(c["k"])(r,{name:"wap-home",size:"large",onClick:e[1]||(e[1]=function(e){return t.$router.replace("/")})})]})),default:Object(c["T"])((function(){return[Object(c["k"])(s,{image:"error",description:n.msg},null,8,["description"])]})),_:1})}var i=n("2824"),o={components:{BaseLayout:i["a"]},props:{msg:{type:String,default:"页面不存在"}}},r=n("6b0d"),s=n.n(r);const u=s()(o,[["render",a]]);e["default"]=u},2824:function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["X"])("data-v-3905236b");Object(c["D"])("data-v-3905236b");var i={class:"container"},o={class:"subtitle"},r={class:"extra"};Object(c["B"])();var s=a((function(t,e,n,s,u,b){var l=Object(c["I"])("van-icon"),f=Object(c["I"])("van-nav-bar"),d=Object(c["I"])("van-sticky"),j=Object(c["I"])("van-col"),O=Object(c["I"])("van-row");return Object(c["A"])(),Object(c["g"])("div",i,[Object(c["U"])(Object(c["k"])(d,{onChange:e[2]||(e[2]=function(t){return s.state.isTop=!s.state.isTop})},{default:a((function(){return[Object(c["k"])(f,{class:["navbar",{notTop:!s.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:b.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:a((function(){return[Object(c["U"])(Object(c["k"])("div",null,[Object(c["H"])(t.$slots,"back",{},(function(){return[Object(c["k"])(l,{name:"arrow-left"})]}),{},!0)],512),[[c["Q"],!n.noback]])]})),title:a((function(){return[Object(c["H"])(t.$slots,"head",{},(function(){return[Object(c["k"])("div",{style:{width:"100%",color:s.state.isTop?n.fg:"inherit"}},Object(c["M"])(s.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)]})),right:a((function(){return[Object(c["H"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[c["Q"],"hide"!=n.navbar]]),Object(c["k"])("div",{class:["page",{notTop:!s.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(c["k"])(c["d"],{name:"van-slide-down"},{default:a((function(){return[Object(c["U"])(Object(c["k"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(c["k"])(j,{span:"16"},{default:a((function(){return[Object(c["k"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(c["H"])(t.$slots,"title",{},(function(){return[Object(c["j"])(Object(c["M"])(n.title),1)]}),{},!0),Object(c["k"])("div",o,Object(c["M"])(n.subtitle),1)],4)]})),_:3}),Object(c["k"])(j,{span:"8"},{default:a((function(){return[Object(c["k"])("div",r,[Object(c["H"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[c["Q"],s.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(c["H"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(c["E"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},b=(n("3c9a"),n("6b0d")),l=n.n(b);const f=l()(u,[["render",s],["__scopeId","data-v-3905236b"]]);e["a"]=f},"3c9a":function(t,e,n){"use strict";n("c89b")},c89b:function(t,e,n){}}]);