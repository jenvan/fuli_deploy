(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78c4a387"],{2824:function(t,e,n){"use strict";var c=n("7a23"),i=Object(c["X"])("data-v-77ef1cb4");Object(c["D"])("data-v-77ef1cb4");var o={class:"container"},a={class:"back"},s={class:"head"},r={class:"more"},l={class:"subtitle"},u={class:"extra"};Object(c["B"])();var b=i((function(t,e,n,b,f,d){var j=Object(c["I"])("van-icon"),h=Object(c["I"])("van-nav-bar"),O=Object(c["I"])("van-sticky"),v=Object(c["I"])("van-col"),k=Object(c["I"])("van-row");return Object(c["A"])(),Object(c["g"])("div",o,[Object(c["U"])(Object(c["k"])(O,{onChange:e[1]||(e[1]=function(t){return b.state.isTop=!b.state.isTop})},{default:i((function(){return[Object(c["k"])(h,{class:["navbar",{notTop:!b.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:d.onClickLeft,onClickRight:d.onClickRight},{left:i((function(){return[Object(c["U"])(Object(c["k"])("div",a,[Object(c["H"])(t.$slots,"back",{},(function(){return[Object(c["k"])(j,{name:"arrow-left"})]}),{},!0)],512),[[c["Q"],!n.noback]])]})),title:i((function(){return[Object(c["k"])("div",s,[Object(c["H"])(t.$slots,"head",{},(function(){return[Object(c["k"])("div",{style:{width:"100%",color:b.state.isTop?n.fg:"inherit"}},Object(c["M"])(b.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)])]})),right:i((function(){return[Object(c["k"])("div",r,[Object(c["H"])(t.$slots,"more",{},void 0,!0)])]})),_:1},8,["class","onClickLeft","onClickRight"])]})),_:1},512),[[c["Q"],"hide"!=n.navbar]]),Object(c["k"])("div",{class:["page",{notTop:!b.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(c["k"])(c["d"],{name:"van-slide-down"},{default:i((function(){return[Object(c["U"])(Object(c["k"])(k,{justify:"space-between",align:"center",class:"outline",style:{height:n.height+"px",color:n.fg}},{default:i((function(){return[Object(c["k"])(v,{span:"16"},{default:i((function(){return[Object(c["k"])("div",{class:"title",style:{color:n.fg},onClick:e[2]||(e[2]=function(e){return t.$emit("click-title")})},[Object(c["H"])(t.$slots,"title",{},(function(){return[Object(c["j"])(Object(c["M"])(n.title),1)]}),{},!0),Object(c["k"])("div",l,Object(c["M"])(n.subtitle),1)],4)]})),_:3}),Object(c["k"])(v,{span:"8"},{default:i((function(){return[Object(c["k"])("div",u,[Object(c["H"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[c["Q"],b.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(c["H"])(t.$slots,"default",{},void 0,!0)],6)])})),f={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(c["E"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){var t=this;this.noback||(this.$emit("click-back"),setTimeout((function(e){if(e==t.$route)return window&&window.history.length>1?t.$router.back():t.$router.push("/")}),200,this.$route))},onClickRight:function(){return this.$emit("click-more")}}},d=(n("8710"),n("d959")),j=n.n(d);const h=j()(f,[["render",b],["__scopeId","data-v-77ef1cb4"]]);e["a"]=h},"2a28":function(t,e,n){"use strict";n("52c3")},"52c3":function(t,e,n){},8710:function(t,e,n){"use strict";n("994b")},"994b":function(t,e,n){},d6ca:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),i=Object(c["X"])("data-v-2b42fee7");Object(c["D"])("data-v-2b42fee7");var o=Object(c["j"])("申请开票"),a={class:"desc"},s=Object(c["j"])(" 复制票号"),r=Object(c["j"])(" 复制备注");Object(c["B"])();var l=i((function(t,e,n,l,u,b){var f=Object(c["I"])("van-button"),d=Object(c["I"])("van-tag"),j=Object(c["I"])("van-cell"),h=Object(c["I"])("van-icon"),O=Object(c["I"])("van-cell-group"),v=Object(c["I"])("van-empty"),k=Object(c["I"])("van-list"),g=Object(c["I"])("van-pull-refresh"),p=Object(c["I"])("BaseLayout");return Object(c["A"])(),Object(c["g"])(p,{title:"发票"},{extra:i((function(){return[Object(c["k"])(f,{icon:"add",style:{width:"110px",borderRadius:"10px 0 0 10px",color:"#000"},color:"#F6F6F6",onClick:b.onClick},{default:i((function(){return[o]})),_:1},8,["onClick"])]})),default:i((function(){return[Object(c["k"])(g,{modelValue:l.state.refreshing,"onUpdate:modelValue":e[2]||(e[2]=function(t){return l.state.refreshing=t}),onRefresh:b.onRefresh},{default:i((function(){return[Object(c["k"])(k,{class:"list",loading:l.state.loading,"onUpdate:loading":e[1]||(e[1]=function(t){return l.state.loading=t}),finished:l.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:b.onLoad},{default:i((function(){return[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(l.state.list,(function(e,n){return Object(c["A"])(),Object(c["g"])("div",{key:n},[Object(c["k"])(d,{class:"dt",color:"#EEE"},{default:i((function(){return[Object(c["j"])(Object(c["M"])(e.dt),1)]})),_:2},1024),Object(c["k"])(O,{class:"item",border:!1},{default:i((function(){return[Object(c["k"])(j,{class:"title",title:"￥ "+e.value,style:{color:e.color}},{value:i((function(){return[Object(c["k"])("span",a,"# "+Object(c["M"])(e.id),1)]})),_:2},1032,["title","style"]),Object(c["U"])(Object(c["k"])(j,{class:"desc",title:e.code},{value:i((function(){return[Object(c["k"])(h,{name:"gold-coin-o",size:"12",onClick:function(n){return t.$copy(e.code)}},{default:i((function(){return[s]})),_:2},1032,["onClick"])]})),_:2},1032,["title"]),[[c["Q"],e.code.length>0]]),Object(c["k"])(j,{class:"desc",title:0!=e.status?e.remark:"正在处理中 ...",border:!1},{value:i((function(){return[Object(c["k"])(h,{name:"gold-coin-o",size:"12",onClick:function(n){return t.$copy(e.remark)}},{default:i((function(){return[r]})),_:2},1032,["onClick"])]})),_:2},1032,["title"])]})),_:2},1024)])})),128)),Object(c["U"])(Object(c["k"])(v,{style:{width:"100%"}},null,512),[[c["Q"],0==l.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"])]})),_:1})})),u=n("2824"),b={components:{BaseLayout:u["a"]},setup:function(){var t=Object(c["E"])({refreshing:!1,loading:!1,finished:!1,grid:!0,list:[],offset:0,limit:20});return{state:t}},created:function(){this.onRefresh()},methods:{onRefresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/team/invoiceList?offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var c=e[n];c.color=["#999","#0C0","#C00"][c.status],t.state.list.push(c)}}))},onClick:function(){var t=this;this.$dialog.confirm({message:"确认将剩余未开票金额全部开票？"}).then((function(){t.$http.post("/team/invoiceRequest").then(t.onRefresh)}))}}},f=(n("2a28"),n("d959")),d=n.n(f);const j=d()(b,[["render",l],["__scopeId","data-v-2b42fee7"]]);e["default"]=j}}]);