(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e759e88"],{"13d9":function(t,e,n){"use strict";n.r(e);n("ac1f"),n("5319");var c=n("7a23");function a(t,e,n,a,i,o){var r=Object(c["I"])("van-icon"),s=Object(c["I"])("van-empty"),u=Object(c["I"])("BaseLayout");return Object(c["A"])(),Object(c["g"])(u,null,{back:Object(c["T"])((function(){return[Object(c["k"])(r,{name:"wap-home",size:"large",onClick:e[1]||(e[1]=function(e){return t.$router.replace("/")})})]})),default:Object(c["T"])((function(){return[Object(c["k"])(s,{image:"error",description:n.msg},null,8,["description"])]})),_:1})}var i=n("2824"),o={components:{BaseLayout:i["a"]},props:{msg:{type:String,default:"页面不存在"}}},r=n("6b0d"),s=n.n(r);const u=s()(o,[["render",a]]);e["default"]=u},2824:function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["X"])("data-v-27edcc4f");Object(c["D"])("data-v-27edcc4f");var i={class:"container"},o={class:"back"},r={class:"head"},s={class:"more"},u={class:"subtitle"},b={class:"extra"};Object(c["B"])();var l=a((function(t,e,n,l,d,f){var j=Object(c["I"])("van-icon"),O=Object(c["I"])("van-nav-bar"),k=Object(c["I"])("van-sticky"),v=Object(c["I"])("van-col"),h=Object(c["I"])("van-row");return Object(c["A"])(),Object(c["g"])("div",i,[Object(c["U"])(Object(c["k"])(k,{onChange:e[1]||(e[1]=function(t){return l.state.isTop=!l.state.isTop})},{default:a((function(){return[Object(c["k"])(O,{class:["navbar",{notTop:!l.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:f.onClickLeft,onClickRight:f.onClickRight},{left:a((function(){return[Object(c["U"])(Object(c["k"])("div",o,[Object(c["H"])(t.$slots,"back",{},(function(){return[Object(c["k"])(j,{name:"arrow-left"})]}),{},!0)],512),[[c["Q"],!n.noback]])]})),title:a((function(){return[Object(c["k"])("div",r,[Object(c["H"])(t.$slots,"head",{},(function(){return[Object(c["k"])("div",{style:{width:"100%",color:l.state.isTop?n.fg:"inherit"}},Object(c["M"])(l.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)])]})),right:a((function(){return[Object(c["k"])("div",s,[Object(c["H"])(t.$slots,"more",{},void 0,!0)])]})),_:1},8,["class","onClickLeft","onClickRight"])]})),_:1},512),[[c["Q"],"hide"!=n.navbar]]),Object(c["k"])("div",{class:["page",{notTop:!l.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(c["k"])(c["d"],{name:"van-slide-down"},{default:a((function(){return[Object(c["U"])(Object(c["k"])(h,{justify:"space-between",align:"center",class:"outline",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(c["k"])(v,{span:"16"},{default:a((function(){return[Object(c["k"])("div",{class:"title",style:{color:n.fg},onClick:e[2]||(e[2]=function(e){return t.$emit("click-title")})},[Object(c["H"])(t.$slots,"title",{},(function(){return[Object(c["j"])(Object(c["M"])(n.title),1)]}),{},!0),Object(c["k"])("div",u,Object(c["M"])(n.subtitle),1)],4)]})),_:3}),Object(c["k"])(v,{span:"8"},{default:a((function(){return[Object(c["k"])("div",b,[Object(c["H"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[c["Q"],l.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(c["H"])(t.$slots,"default",{},void 0,!0)],6)])})),d={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(c["E"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){var t=this;this.noback||(this.$emit("click-back"),setTimeout((function(e){if(e==t.$route)return window&&window.history.length>1?t.$router.back():t.$router.push("/")}),200,this.$route))},onClickRight:function(){return this.$emit("click-more")}}},f=(n("9c79"),n("6b0d")),j=n.n(f);const O=j()(d,[["render",l],["__scopeId","data-v-27edcc4f"]]);e["a"]=O},"30ae":function(t,e,n){},"9c79":function(t,e,n){"use strict";n("30ae")}}]);