(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5082717a"],{2824:function(t,e,n){"use strict";var a=n("7a23"),i=Object(a["R"])("data-v-deed68a4");Object(a["A"])("data-v-deed68a4");var o={class:"container"},c={style:{width:"100%"}},s={class:"subtitle"},r={class:"extra"};Object(a["y"])();var l=i((function(t,e,n,l,u,b){var d=Object(a["F"])("van-icon"),f=Object(a["F"])("van-nav-bar"),h=Object(a["F"])("van-sticky"),j=Object(a["F"])("van-col"),O=Object(a["F"])("van-row");return Object(a["x"])(),Object(a["f"])("div",o,[Object(a["P"])(Object(a["i"])(h,{onChange:e[2]||(e[2]=function(t){return l.state.isTop=!l.state.isTop})},{default:i((function(){return[Object(a["i"])(f,{class:["navbar",{notTop:!l.state.isTop,noTitle:n.notitle}],border:!1,onClickLeft:b.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:i((function(){return[Object(a["P"])(Object(a["i"])("div",null,[Object(a["E"])(t.$slots,"back",{},(function(){return[Object(a["i"])(d,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[a["M"],!n.noback]])]})),title:i((function(){return[Object(a["i"])("div",c,[Object(a["E"])(t.$slots,"tool",{},(function(){return[Object(a["h"])(Object(a["J"])(l.state.isTop?"":n.title),1)]}),{},!0)])]})),right:i((function(){return[Object(a["E"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[a["M"],!n.nonavbar]]),Object(a["i"])("div",{class:["page",{notTop:!l.state.isTop,noNavbar:n.nonavbar,noTitle:n.notitle,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(a["i"])(a["c"],{name:"van-slide-down"},{default:i((function(){return[Object(a["P"])(Object(a["i"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:i((function(){return[Object(a["i"])(j,{span:"16"},{default:i((function(){return[Object(a["i"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(a["h"])(Object(a["J"])(n.title)+" ",1),Object(a["i"])("div",s,Object(a["J"])(n.subtitle),1)],4)]})),_:1}),Object(a["i"])(j,{span:"8"},{default:i((function(){return[Object(a["i"])("div",r,[Object(a["E"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[a["M"],l.state.isTop&&!n.nonavbar&&!n.notitle]])]})),_:1}),Object(a["E"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(a["B"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):this.$router.back()}}},b=(n("3c32"),n("d959")),d=n.n(b);const f=d()(u,[["render",l],["__scopeId","data-v-deed68a4"]]);e["a"]=f},3855:function(t,e,n){},"38e3":function(t,e,n){},"3c32":function(t,e,n){"use strict";n("3855")},"85d5":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),i=Object(a["R"])("data-v-7d579761");Object(a["A"])("data-v-7d579761");var o={class:"info"},c={class:"request"},s=Object(a["h"])(" 分"),r=Object(a["h"])(" 元"),l=Object(a["h"])("发起转让"),u=Object(a["h"])("我换"),b=Object(a["h"])("取消");Object(a["y"])();var d=i((function(t,e,n,d,f,h){var j=Object(a["F"])("van-field"),O=Object(a["F"])("van-button"),p=Object(a["F"])("van-tab"),v=Object(a["F"])("van-tabs"),g=Object(a["F"])("van-empty"),m=Object(a["F"])("van-cell"),k=Object(a["F"])("van-cell-group"),y=Object(a["F"])("van-list"),C=Object(a["F"])("BaseLayout");return Object(a["x"])(),Object(a["f"])(C,{title:"积分转让",subtitle:"转让是用户之间的自由交易行为，每笔交易平台会收取 5% 的手续费",bg:"#1989fa",fg:"#FFF"},{default:i((function(){return[Object(a["i"])("div",o,[Object(a["i"])("div",c,[Object(a["i"])(j,{type:"number",border:1,modelValue:d.state.amount,"onUpdate:modelValue":e[1]||(e[1]=function(t){return d.state.amount=t}),"input-align":"right",clearable:"",label:"积分数量",placeholder:"拿多少积分去换"},{extra:i((function(){return[s]})),_:1},8,["modelValue"]),Object(a["i"])(j,{type:"number",border:1,modelValue:d.state.value,"onUpdate:modelValue":e[2]||(e[2]=function(t){return d.state.value=t}),"input-align":"right",clearable:"",label:"现金价值",placeholder:"想换成多少现金"},{extra:i((function(){return[r]})),_:1},8,["modelValue"]),Object(a["i"])(j,{modelValue:d.state.remark,"onUpdate:modelValue":e[3]||(e[3]=function(t){return d.state.remark=t}),type:"text",maxlength:"20","input-align":"right",label:"备注",placeholder:"可以不填，仅自己可见"},null,8,["modelValue"]),Object(a["i"])(O,{round:"",block:"",color:"#39F",onClick:h.onRequest},{default:i((function(){return[l]})),_:1},8,["onClick"])]),Object(a["i"])(v,{active:d.state.status,"onUpdate:active":e[4]||(e[4]=function(t){return d.state.status=t}),color:"#1989fa","offset-top":"45",type:"line",sticky:"",swipeable:"",animated:"",onChange:h.onChange},{default:i((function(){return[Object(a["i"])(p,{title:"所有转让申请"}),Object(a["i"])(p,{title:"我的转让记录"})]})),_:1},8,["active","onChange"]),Object(a["i"])(y,{loading:d.state.loading,"onUpdate:loading":e[5]||(e[5]=function(t){return d.state.loading=t}),finished:d.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:h.onLoad},{default:i((function(){return[Object(a["P"])(Object(a["i"])(g,null,null,512),[[a["M"],0==d.state.list.length]]),(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(d.state.list,(function(e,n){return Object(a["x"])(),Object(a["f"])(k,{class:"block",border:!1,key:n},{default:i((function(){return[Object(a["i"])(m,{class:"dt",border:!1,title:e.dt},{extra:i((function(){return[Object(a["i"])("span",{style:{color:e.color}},Object(a["J"])(e.result),5),Object(a["h"])("   #"+Object(a["J"])(e.id),1)]})),_:2},1032,["title"]),Object(a["i"])(m,{class:"item",border:!1,title:e.amount+"分  →  "+e.value+"元"},{extra:i((function(){return[Object(a["P"])(Object(a["i"])(O,{type:"primary",size:"mini",plain:"",onClick:function(t){return h.onConfirm(e.id)}},{default:i((function(){return[u]})),_:2},1032,["onClick"]),[[a["M"],0==d.state.status&&e.ask!=t.uid]]),Object(a["P"])(Object(a["i"])(O,{type:"danger",size:"mini",plain:"",onClick:function(t){return h.onCancel(e.id)}},{default:i((function(){return[b]})),_:2},1032,["onClick"]),[[a["M"],0==e.status&&e.ask==t.uid]])]})),_:2},1032,["title"]),Object(a["P"])(Object(a["i"])(m,{class:"remark",border:!1,value:e.remark},null,8,["value"]),[[a["M"],d.state.status>0]])]})),_:2},1024)})),128))]})),_:1},8,["loading","finished","onLoad"])])]})),_:1})})),f=n("5530"),h=(n("ac1f"),n("5319"),n("5502")),j=n("2824"),O={components:{BaseLayout:j["a"]},setup:function(){var t=Object(a["B"])({amount:100,value:90,remark:"",status:0,loading:!1,finished:!1,list:[],offset:0,limit:20});return{state:t}},created:function(){this.onChange()},mounted:function(){},computed:Object(f["a"])({},Object(h["b"])(["authorized","uid"])),methods:{onChange:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/property/exchangelist?status="+this.state.status+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var a=e[n];t.state.list.push(Object(f["a"])(Object(f["a"])({},a),{amount:a.amount.replace(/(\.\d\d)(\d+)$/,"$1"),result:["等待接手","已完成","已取消"][a.status],color:["#33F","#090","#F66"][a.status]}))}}))},onRequest:function(){var t=this;return/^[\d]{1,6}$/.test(this.state.amount)&&/^[\d]{1,6}$/.test(this.state.value)?this.state.amount-this.state.value<0?this.$toast("现金价值过高"):void this.$http.post("/property/exchangeRequest?type=point2cash&amount="+this.state.amount+"&value="+this.state.value+"&remark="+this.state.remark).then((function(e){t.state.status=1,t.onChange()})).catch(this.onChange):this.$toast("填写错误")},onConfirm:function(t){this.$http.post("/property/exchangeConfirm?id="+t).then(this.onChange).catch(this.onChange)},onCancel:function(t){this.$http.post("/property/exchangeCancel?id="+t).then(this.onChange).catch(this.onChange)}}},p=(n("c472"),n("d959")),v=n.n(p);const g=v()(O,[["render",d],["__scopeId","data-v-7d579761"]]);e["default"]=g},c472:function(t,e,n){"use strict";n("38e3")}}]);
//# sourceMappingURL=chunk-5082717a.2bac4fd5.js.map