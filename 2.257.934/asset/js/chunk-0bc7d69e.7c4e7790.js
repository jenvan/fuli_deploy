(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bc7d69e"],{2824:function(t,e,n){"use strict";var a=n("7a23"),i=Object(a["X"])("data-v-35e22a62");Object(a["D"])("data-v-35e22a62");var o={class:"container"},c={class:"back"},s={class:"head"},r={class:"more"},u={class:"subtitle"},l={class:"extra"};Object(a["B"])();var b=i((function(t,e,n,b,d,h){var f=Object(a["I"])("van-icon"),j=Object(a["I"])("van-nav-bar"),O=Object(a["I"])("van-sticky"),k=Object(a["I"])("van-col"),p=Object(a["I"])("van-row");return Object(a["A"])(),Object(a["g"])("div",o,[Object(a["U"])(Object(a["k"])(O,{onChange:e[1]||(e[1]=function(t){return b.state.isTop=!b.state.isTop})},{default:i((function(){return[Object(a["k"])(j,{class:["navbar",{notTop:!b.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:h.onClickLeft,onClickRight:h.onClickRight},{left:i((function(){return[Object(a["U"])(Object(a["k"])("div",c,[Object(a["H"])(t.$slots,"back",{},(function(){return[Object(a["k"])(f,{name:"arrow-left"})]}),{},!0)],512),[[a["Q"],!n.noback]])]})),title:i((function(){return[Object(a["k"])("div",s,[Object(a["H"])(t.$slots,"head",{},(function(){return[Object(a["k"])("div",{style:{width:"100%",color:b.state.isTop?n.fg:"inherit"}},Object(a["M"])(b.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)])]})),right:i((function(){return[Object(a["k"])("div",r,[Object(a["H"])(t.$slots,"more",{},void 0,!0)])]})),_:1},8,["class","onClickLeft","onClickRight"])]})),_:1},512),[[a["Q"],"hide"!=n.navbar]]),Object(a["k"])("div",{class:["page",{notTop:!b.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(a["k"])(a["d"],{name:"van-slide-down"},{default:i((function(){return[Object(a["U"])(Object(a["k"])(p,{justify:"space-between",align:"center",class:"outline",style:{height:n.height+"px",color:n.fg}},{default:i((function(){return[Object(a["k"])(k,{span:"16"},{default:i((function(){return[Object(a["k"])("div",{class:"title",style:{color:n.fg},onClick:e[2]||(e[2]=function(e){return t.$emit("click-title")})},[Object(a["H"])(t.$slots,"title",{},(function(){return[Object(a["j"])(Object(a["M"])(n.title),1)]}),{},!0),Object(a["k"])("div",u,Object(a["M"])(n.subtitle),1)],4)]})),_:3}),Object(a["k"])(k,{span:"8"},{default:i((function(){return[Object(a["k"])("div",l,[Object(a["H"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[a["Q"],b.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(a["H"])(t.$slots,"default",{},void 0,!0)],6)])})),d={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(a["E"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){var t=this;this.noback||(this.$emit("click-back"),setTimeout((function(e){if(e==t.$route)return window&&window.history.length>1?t.$router.back():t.$router.push("/")}),200,this.$route))},onClickRight:function(){return this.$emit("click-more")}}},h=(n("a4de"),n("6b0d")),f=n.n(h);const j=f()(d,[["render",b],["__scopeId","data-v-35e22a62"]]);e["a"]=j},"5afd":function(t,e,n){},7097:function(t,e,n){},8031:function(t,e,n){"use strict";n("7097")},"85d5":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),i=Object(a["X"])("data-v-61e9922a");Object(a["D"])("data-v-61e9922a");var o={class:"info"},c={class:"request"},s=Object(a["j"])(" 分"),r=Object(a["j"])(" 元"),u=Object(a["j"])("发起转让"),l=Object(a["j"])("我换"),b=Object(a["j"])("取消");Object(a["B"])();var d=i((function(t,e,n,d,h,f){var j=Object(a["I"])("van-field"),O=Object(a["I"])("van-button"),k=Object(a["I"])("van-tab"),p=Object(a["I"])("van-tabs"),v=Object(a["I"])("van-empty"),g=Object(a["I"])("van-cell"),m=Object(a["I"])("van-cell-group"),C=Object(a["I"])("van-list"),y=Object(a["I"])("BaseLayout");return Object(a["A"])(),Object(a["g"])(y,{title:"积分转让",subtitle:"转让是用户之间的自由交易行为，每笔交易平台会收取 5% 的手续费",bg:"#EA0",fg:"#FFF"},{default:i((function(){return[Object(a["k"])("div",o,[Object(a["k"])("div",c,[Object(a["k"])(j,{type:"number",border:1,modelValue:d.state.amount,"onUpdate:modelValue":e[1]||(e[1]=function(t){return d.state.amount=t}),"input-align":"right",clearable:"",label:"积分数量",placeholder:"拿多少积分去换"},{extra:i((function(){return[s]})),_:1},8,["modelValue"]),Object(a["k"])(j,{type:"number",border:1,modelValue:d.state.value,"onUpdate:modelValue":e[2]||(e[2]=function(t){return d.state.value=t}),"input-align":"right",clearable:"",label:"现金价值",placeholder:"想换成多少现金"},{extra:i((function(){return[r]})),_:1},8,["modelValue"]),Object(a["k"])(j,{modelValue:d.state.remark,"onUpdate:modelValue":e[3]||(e[3]=function(t){return d.state.remark=t}),type:"text",maxlength:"20","input-align":"right",label:"备注",placeholder:"可以不填，仅自己可见"},null,8,["modelValue"]),Object(a["k"])(O,{round:"",block:"",color:"#EA0",onClick:f.onRequest},{default:i((function(){return[u]})),_:1},8,["onClick"])]),Object(a["k"])(p,{active:d.state.status,"onUpdate:active":e[4]||(e[4]=function(t){return d.state.status=t}),color:"#EA0","offset-top":"45",type:"line",sticky:"",swipeable:"",animated:"",onChange:f.onChange},{default:i((function(){return[Object(a["k"])(k,{title:"所有转让申请"}),Object(a["k"])(k,{title:"我的转让记录"})]})),_:1},8,["active","onChange"]),Object(a["k"])(C,{loading:d.state.loading,"onUpdate:loading":e[5]||(e[5]=function(t){return d.state.loading=t}),finished:d.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:f.onLoad},{default:i((function(){return[Object(a["U"])(Object(a["k"])(v,null,null,512),[[a["Q"],0==d.state.list.length]]),(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(d.state.list,(function(e,n){return Object(a["A"])(),Object(a["g"])(m,{class:"block",border:!1,key:n},{default:i((function(){return[Object(a["k"])(g,{class:"dt",border:!1,title:e.dt},{extra:i((function(){return[Object(a["k"])("span",{style:{color:e.color}},Object(a["M"])(e.result),5),Object(a["j"])("   #"+Object(a["M"])(e.id),1)]})),_:2},1032,["title"]),Object(a["k"])(g,{class:"item",border:!1,title:e.amount+"分  →  "+e.value+"元"},{extra:i((function(){return[Object(a["U"])(Object(a["k"])(O,{type:"primary",size:"mini",plain:"",onClick:function(t){return f.onConfirm(e.id)}},{default:i((function(){return[l]})),_:2},1032,["onClick"]),[[a["Q"],0==d.state.status&&e.ask!=t.uid]]),Object(a["U"])(Object(a["k"])(O,{type:"danger",size:"mini",plain:"",onClick:function(t){return f.onCancel(e.id)}},{default:i((function(){return[b]})),_:2},1032,["onClick"]),[[a["Q"],0==e.status&&e.ask==t.uid]])]})),_:2},1032,["title"]),Object(a["U"])(Object(a["k"])(g,{class:"remark",border:!1,value:e.remark},null,8,["value"]),[[a["Q"],d.state.status>0]])]})),_:2},1024)})),128))]})),_:1},8,["loading","finished","onLoad"])])]})),_:1})})),h=n("5530"),f=(n("ac1f"),n("5319"),n("5502")),j=n("2824"),O={components:{BaseLayout:j["a"]},setup:function(){var t=Object(a["E"])({amount:100,value:90,remark:"",status:0,loading:!1,finished:!1,list:[],offset:0,limit:20});return{state:t}},created:function(){this.onChange()},mounted:function(){},computed:Object(h["a"])({},Object(f["b"])(["authorized","uid"])),methods:{onChange:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/property/exchangelist?status="+this.state.status+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var a=e[n];t.state.list.push(Object(h["a"])(Object(h["a"])({},a),{amount:a.amount.replace(/(\.\d\d)(\d+)$/,"$1"),result:["等待接手","已完成","已取消"][a.status],color:["#33F","#090","#F66"][a.status]}))}}))},onRequest:function(){var t=this;return/^[\d]{1,6}$/.test(this.state.amount)&&/^[\d]{1,6}$/.test(this.state.value)?this.state.amount-this.state.value<0?this.$toast("现金价值过高"):void this.$http.post("/property/exchangeRequest?type=point2cash&amount="+this.state.amount+"&value="+this.state.value+"&remark="+this.state.remark).then((function(e){t.state.status=1,t.onChange()})).catch(this.onChange):this.$toast("填写错误")},onConfirm:function(t){this.$http.post("/property/exchangeConfirm?id="+t).then(this.onChange).catch(this.onChange)},onCancel:function(t){this.$http.post("/property/exchangeCancel?id="+t).then(this.onChange).catch(this.onChange)}}},k=(n("8031"),n("6b0d")),p=n.n(k);const v=p()(O,[["render",d],["__scopeId","data-v-61e9922a"]]);e["default"]=v},a4de:function(t,e,n){"use strict";n("5afd")}}]);