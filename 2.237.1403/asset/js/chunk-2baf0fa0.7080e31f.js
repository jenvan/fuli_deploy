(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2baf0fa0"],{1526:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),i=Object(c["X"])("data-v-17ab2006");Object(c["D"])("data-v-17ab2006");var a=Object(c["k"])("span",{class:"stress"},"荟省钱 ",-1),o=Object(c["j"])("品质生活 天天低价 "),r={class:"list"};Object(c["B"])();var s=i((function(t,e,n,s,u,l){var b=Object(c["I"])("van-icon"),f=Object(c["I"])("van-cell"),d=Object(c["I"])("van-popup"),h=Object(c["I"])("BaseLayout");return Object(c["A"])(),Object(c["g"])(h,{bg:"linear-gradient(180deg, #F66, #F00 100px, #F9F9F9 250px, #F9F9F9)",fg:"#FFF",height:"0",onClickBack:e[5]||(e[5]=function(e){return t.$router.push("/")})},{head:i((function(){return[a,o]})),more:i((function(){return[Object(c["k"])(b,{class:"more",name:"question",size:"24",onClick:e[1]||(e[1]=function(t){u.state.notice=!1,l.open("movie")})})]})),default:i((function(){return[Object(c["k"])("div",r,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(u.list,(function(t,e){return Object(c["A"])(),Object(c["g"])(f,{class:"item",key:e,border:!1,title:t[0],label:t[1],onClick:function(t){return l.open(e)}},{icon:i((function(){return[Object(c["k"])(b,{class:"icon",name:t[4],size:"48"},null,8,["name"])]})),extra:i((function(){return[Object(c["k"])(b,{class:"extra",name:t[5],size:"64"},null,8,["name"])]})),_:2},1032,["title","label","onClick"])})),128))]),Object(c["k"])(d,{show:u.state.popup,"onUpdate:show":e[3]||(e[3]=function(t){return u.state.popup=t}),position:"bottom",style:{width:"100%",height:"90%",overflow:"hidden"},"close-on-popstate":!0,onClose:e[4]||(e[4]=function(t){return u.state.iframe=""})},{default:i((function(){return[Object(c["k"])("span",{class:"iframe",innerHTML:u.state.iframe,onClick:e[2]||(e[2]=function(e){return t.$forward(u.state.src)})},null,8,["innerHTML"])]})),_:1},8,["show"])]})),_:1})})),u=n("5530"),l=(n("b0c0"),n("5502")),b=n("2824"),f={components:{BaseLayout:b["a"]},props:{type:{type:String,default:""}},data:function(){var t=Object(c["F"])([]),e=Object(c["E"])({notice:!1,popup:!1,iframe:"",src:""});return{list:t,state:e}},created:function(){var t=this;this.$http.get("/hwmall/config").then((function(e){return t.list=e}))},mounted:function(){this.toggleChat(!1),""!=this.type&&this.open(this.type)},unmounted:function(){this.toggleChat(!0)},methods:Object(u["a"])({open:function(t){var e=this;this.$http.post("/hwmall/auth?type="+t).then((function(t){return e.forward(t.name,t.url)}))},forward:function(t,e){var n=this,c=function(){n.$forward(e)};if(this.state.notice)return c();this.state.notice=!0,this.$dialog.confirm({allowHtml:!0,title:"【"+t+"】下单须知",message:'<ol class="notice"><li>必须通过本页面进入点单才可享受积分（代金券）支付，每单最大可抵扣100积分；</li><li>请确保账户有足够的积分用于支付；如果在支付时没有出现代金券，请取消支付并进入未付款订单页面，进行支付和重试；</li><li>由于网络等原因可能会出现代金券发放延迟，请使用微信全款支付。</li></ol>',confirmButtonText:"进入下单",cancelButtonText:"关闭",theme:"round-button",messageAlign:"left"}).then(c)}},Object(l["c"])(["toggleChat"]))},d=(n("cb4b"),n("f1a4"),n("6b0d")),h=n.n(d);const j=h()(f,[["render",s],["__scopeId","data-v-17ab2006"]]);e["default"]=j},2824:function(t,e,n){"use strict";var c=n("7a23"),i=Object(c["X"])("data-v-35e22a62");Object(c["D"])("data-v-35e22a62");var a={class:"container"},o={class:"back"},r={class:"head"},s={class:"more"},u={class:"subtitle"},l={class:"extra"};Object(c["B"])();var b=i((function(t,e,n,b,f,d){var h=Object(c["I"])("van-icon"),j=Object(c["I"])("van-nav-bar"),O=Object(c["I"])("van-sticky"),p=Object(c["I"])("van-col"),v=Object(c["I"])("van-row");return Object(c["A"])(),Object(c["g"])("div",a,[Object(c["U"])(Object(c["k"])(O,{onChange:e[1]||(e[1]=function(t){return b.state.isTop=!b.state.isTop})},{default:i((function(){return[Object(c["k"])(j,{class:["navbar",{notTop:!b.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:d.onClickLeft,onClickRight:d.onClickRight},{left:i((function(){return[Object(c["U"])(Object(c["k"])("div",o,[Object(c["H"])(t.$slots,"back",{},(function(){return[Object(c["k"])(h,{name:"arrow-left"})]}),{},!0)],512),[[c["Q"],!n.noback]])]})),title:i((function(){return[Object(c["k"])("div",r,[Object(c["H"])(t.$slots,"head",{},(function(){return[Object(c["k"])("div",{style:{width:"100%",color:b.state.isTop?n.fg:"inherit"}},Object(c["M"])(b.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)])]})),right:i((function(){return[Object(c["k"])("div",s,[Object(c["H"])(t.$slots,"more",{},void 0,!0)])]})),_:1},8,["class","onClickLeft","onClickRight"])]})),_:1},512),[[c["Q"],"hide"!=n.navbar]]),Object(c["k"])("div",{class:["page",{notTop:!b.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(c["k"])(c["d"],{name:"van-slide-down"},{default:i((function(){return[Object(c["U"])(Object(c["k"])(v,{justify:"space-between",align:"center",class:"outline",style:{height:n.height+"px",color:n.fg}},{default:i((function(){return[Object(c["k"])(p,{span:"16"},{default:i((function(){return[Object(c["k"])("div",{class:"title",style:{color:n.fg},onClick:e[2]||(e[2]=function(e){return t.$emit("click-title")})},[Object(c["H"])(t.$slots,"title",{},(function(){return[Object(c["j"])(Object(c["M"])(n.title),1)]}),{},!0),Object(c["k"])("div",u,Object(c["M"])(n.subtitle),1)],4)]})),_:3}),Object(c["k"])(p,{span:"8"},{default:i((function(){return[Object(c["k"])("div",l,[Object(c["H"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[c["Q"],b.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(c["H"])(t.$slots,"default",{},void 0,!0)],6)])})),f={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(c["E"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){var t=this;this.noback||(this.$emit("click-back"),setTimeout((function(e){if(e==t.$route)return window&&window.history.length>1?t.$router.back():t.$router.push("/")}),200,this.$route))},onClickRight:function(){return this.$emit("click-more")}}},d=(n("a4de"),n("6b0d")),h=n.n(d);const j=h()(f,[["render",b],["__scopeId","data-v-35e22a62"]]);e["a"]=j},"5afd":function(t,e,n){},a4de:function(t,e,n){"use strict";n("5afd")},b8c8:function(t,e,n){},c41f:function(t,e,n){},cb4b:function(t,e,n){"use strict";n("c41f")},f1a4:function(t,e,n){"use strict";n("b8c8")}}]);