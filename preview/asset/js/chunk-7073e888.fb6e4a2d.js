(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7073e888"],{2824:function(t,e,n){"use strict";var i=n("7a23"),a=Object(i["R"])("data-v-deed68a4");Object(i["A"])("data-v-deed68a4");var o={class:"container"},c={style:{width:"100%"}},s={class:"subtitle"},r={class:"extra"};Object(i["y"])();var l=a((function(t,e,n,l,u,f){var d=Object(i["F"])("van-icon"),b=Object(i["F"])("van-nav-bar"),h=Object(i["F"])("van-sticky"),j=Object(i["F"])("van-col"),O=Object(i["F"])("van-row");return Object(i["x"])(),Object(i["f"])("div",o,[Object(i["P"])(Object(i["i"])(h,{onChange:e[2]||(e[2]=function(t){return l.state.isTop=!l.state.isTop})},{default:a((function(){return[Object(i["i"])(b,{class:["navbar",{notTop:!l.state.isTop,noTitle:n.notitle}],border:!1,onClickLeft:f.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:a((function(){return[Object(i["P"])(Object(i["i"])("div",null,[Object(i["E"])(t.$slots,"back",{},(function(){return[Object(i["i"])(d,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[i["M"],!n.noback]])]})),title:a((function(){return[Object(i["i"])("div",c,[Object(i["E"])(t.$slots,"tool",{},(function(){return[Object(i["h"])(Object(i["J"])(l.state.isTop?"":n.title),1)]}),{},!0)])]})),right:a((function(){return[Object(i["E"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[i["M"],!n.nonavbar]]),Object(i["i"])("div",{class:["page",{notTop:!l.state.isTop,noNavbar:n.nonavbar,noTitle:n.notitle,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(i["i"])(i["c"],{name:"van-slide-down"},{default:a((function(){return[Object(i["P"])(Object(i["i"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(i["i"])(j,{span:"16"},{default:a((function(){return[Object(i["i"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(i["h"])(Object(i["J"])(n.title)+" ",1),Object(i["i"])("div",s,Object(i["J"])(n.subtitle),1)],4)]})),_:1}),Object(i["i"])(j,{span:"8"},{default:a((function(){return[Object(i["i"])("div",r,[Object(i["E"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[i["M"],l.state.isTop&&!n.nonavbar&&!n.notitle]])]})),_:1}),Object(i["E"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(i["B"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):this.$router.back()}}},f=(n("3c32"),n("d959")),d=n.n(f);const b=d()(u,[["render",l],["__scopeId","data-v-deed68a4"]]);e["a"]=b},"320b":function(t,e,n){},3855:function(t,e,n){},"3c32":function(t,e,n){"use strict";n("3855")},6662:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),a=Object(i["R"])("data-v-3e319df8"),o=a((function(t,e,n,o,c,s){var r=Object(i["F"])("van-search"),l=Object(i["F"])("van-sticky"),u=Object(i["F"])("van-tag"),f=Object(i["F"])("van-icon"),d=Object(i["F"])("van-cell"),b=Object(i["F"])("van-empty"),h=Object(i["F"])("van-list"),j=Object(i["F"])("van-pull-refresh"),O=Object(i["F"])("BaseLayout");return Object(i["x"])(),Object(i["f"])(O,{title:"充值记录",bg:"linear-gradient(180deg, #FFF, #EEE 10%, #FFF 50%, #FFF)"},{default:a((function(){return[Object(i["i"])(j,{modelValue:c.state.refreshing,"onUpdate:modelValue":e[3]||(e[3]=function(t){return c.state.refreshing=t}),onRefresh:s.onRefresh},{default:a((function(){return[Object(i["i"])(l,{"offset-top":45},{default:a((function(){return[Object(i["i"])(r,{modelValue:c.state.keyword,"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.state.keyword=t}),placeholder:"搜索账号或备注信息",background:"#FFF",clearable:"",onSearch:s.onRefresh,onClear:s.onRefresh},null,8,["modelValue","onSearch","onClear"])]})),_:1}),Object(i["i"])(h,{class:"list",loading:c.state.loading,"onUpdate:loading":e[2]||(e[2]=function(t){return c.state.loading=t}),finished:c.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:s.onLoad},{default:a((function(){return[(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(c.state.list,(function(e,n){return Object(i["x"])(),Object(i["f"])("div",{key:n},[Object(i["i"])(u,{class:"dt"},{default:a((function(){return[Object(i["h"])(Object(i["J"])(e.dt),1)]})),_:2},1024),Object(i["i"])(d,{class:"item",title:e.detail.title,onClick:function(n){return t.$copy(s.getDetail(e)+" "+e.id+"-"+e.fgid+"-"+e.foid)}},{label:a((function(){return[Object(i["i"])("div",{innerHTML:s.getDetail(e)},null,8,["innerHTML"])]})),extra:a((function(){return[Object(i["h"])(" ￥"+Object(i["J"])(e.amount)+" ",1),Object(i["i"])(f,{class:"status",name:s.getStatus(e).icon,color:s.getStatus(e).color},null,8,["name","color"])]})),_:2},1032,["title","onClick"])])})),128)),Object(i["P"])(Object(i["i"])(b,{style:{width:"100%"}},null,512),[[i["M"],0==c.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"])]})),_:1})})),c=n("5530"),s=(n("b0c0"),n("5502")),r=n("2824"),l={components:{BaseLayout:r["a"]},data:function(){var t=Object(i["B"])({refreshing:!1,loading:!1,finished:!1,keyword:"",list:[],offset:0,limit:20});return{state:t}},created:function(){this.onRefresh()},methods:Object(c["a"])({onRefresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/digital/order?keyword="+this.state.keyword+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var i=e[n];t.state.list.push(i)}}))},getStatus:function(t){return 0==t.status?{name:"正在充值",icon:"underway",color:"#00C"}:1==t.status?{name:"订单完成",icon:"checked",color:"#0C0"}:2==t.status?{name:"等待退款",icon:"warning",color:"#C00"}:{name:"订单关闭",icon:"clear",color:"#CCC"}},getDetail:function(t){var e="账号："+t.account+"；";return e+=(t.cash>0?"现金："+t.cash:"")+" "+(t.point>0?"积分："+t.point:""),e+"<br> ["+this.getStatus(t).name+"] "+t.remark}},Object(s["c"])(["auth"]))},u=(n("e1a7"),n("d959")),f=n.n(u);const d=f()(l,[["render",o],["__scopeId","data-v-3e319df8"]]);e["default"]=d},e1a7:function(t,e,n){"use strict";n("320b")}}]);
//# sourceMappingURL=chunk-7073e888.fb6e4a2d.js.map