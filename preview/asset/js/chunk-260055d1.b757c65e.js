(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-260055d1"],{"206a":function(t,e,n){},2824:function(t,e,n){"use strict";var a=n("7a23"),o=Object(a["S"])("data-v-deed68a4");Object(a["B"])("data-v-deed68a4");var i={class:"container"},c={style:{width:"100%"}},r={class:"subtitle"},s={class:"extra"};Object(a["z"])();var l=o((function(t,e,n,l,u,d){var b=Object(a["G"])("van-icon"),f=Object(a["G"])("van-nav-bar"),j=Object(a["G"])("van-sticky"),h=Object(a["G"])("van-col"),O=Object(a["G"])("van-row");return Object(a["y"])(),Object(a["g"])("div",i,[Object(a["Q"])(Object(a["j"])(j,{onChange:e[2]||(e[2]=function(t){return l.state.isTop=!l.state.isTop})},{default:o((function(){return[Object(a["j"])(f,{class:["navbar",{notTop:!l.state.isTop,noTitle:n.notitle}],border:!1,onClickLeft:d.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:o((function(){return[Object(a["Q"])(Object(a["j"])("div",null,[Object(a["F"])(t.$slots,"back",{},(function(){return[Object(a["j"])(b,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[a["N"],!n.noback]])]})),title:o((function(){return[Object(a["j"])("div",c,[Object(a["F"])(t.$slots,"tool",{},(function(){return[Object(a["i"])(Object(a["K"])(l.state.isTop?"":n.title),1)]}),{},!0)])]})),right:o((function(){return[Object(a["F"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[a["N"],!n.nonavbar]]),Object(a["j"])("div",{class:["page",{notTop:!l.state.isTop,noNavbar:n.nonavbar,noTitle:n.notitle,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(a["j"])(a["d"],{name:"van-slide-down"},{default:o((function(){return[Object(a["Q"])(Object(a["j"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:o((function(){return[Object(a["j"])(h,{span:"16"},{default:o((function(){return[Object(a["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(a["i"])(Object(a["K"])(n.title)+" ",1),Object(a["j"])("div",r,Object(a["K"])(n.subtitle),1)],4)]})),_:1}),Object(a["j"])(h,{span:"8"},{default:o((function(){return[Object(a["j"])("div",s,[Object(a["F"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[a["N"],l.state.isTop&&!n.nonavbar&&!n.notitle]])]})),_:1}),Object(a["F"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(a["C"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):this.$router.back()}}},d=(n("3c32"),n("6b0d")),b=n.n(d);const f=b()(u,[["render",l],["__scopeId","data-v-deed68a4"]]);e["a"]=f},3371:function(t,e,n){},"3c32":function(t,e,n){"use strict";n("206a")},"97a0":function(t,e,n){"use strict";n("3371")},efdd:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),o=Object(a["S"])("data-v-1decd725");Object(a["B"])("data-v-1decd725");var i=Object(a["i"])("开卡"),c={class:"id"},r=Object(a["i"])(" 复制卡号"),s=Object(a["i"])("   "),l=Object(a["i"])(" 分享"),u=Object(a["i"])(" 备注"),d={class:"form"},b=Object(a["i"])(" 开卡 "),f=Object(a["i"])("立即开卡"),j=Object(a["j"])("br",null,null,-1),h=Object(a["i"])("长按图片保存到手机或分享给好友"),O=Object(a["i"])("系统不提供匿名卡的任何使用信息，请自行备注卡的使用情况。"),p=Object(a["i"])("未使用"),m=Object(a["i"])("已使用");Object(a["z"])();var g=o((function(t,e,n,g,v,k){var w=Object(a["G"])("van-button"),y=Object(a["G"])("van-tag"),_=Object(a["G"])("van-icon"),C=Object(a["G"])("van-cell"),G=Object(a["G"])("van-cell-group"),$=Object(a["G"])("van-empty"),V=Object(a["G"])("van-list"),x=Object(a["G"])("van-pull-refresh"),R=Object(a["G"])("van-field"),L=Object(a["G"])("van-popup"),T=Object(a["G"])("van-image"),U=Object(a["G"])("van-notice-bar"),S=Object(a["G"])("van-radio"),B=Object(a["G"])("van-radio-group"),F=Object(a["G"])("van-dialog"),z=Object(a["G"])("BaseLayout");return Object(a["y"])(),Object(a["g"])(z,{title:"礼品卡"},{extra:o((function(){return[Object(a["j"])(w,{icon:"add",style:{width:"110px",borderRadius:"10px 0 0 10px",color:"#000"},color:"#F6F6F6",onClick:e[1]||(e[1]=function(t){return g.state.popup=!0})},{default:o((function(){return[i]})),_:1})]})),default:o((function(){return[Object(a["j"])(x,{modelValue:g.state.refreshing,"onUpdate:modelValue":e[3]||(e[3]=function(t){return g.state.refreshing=t}),onRefresh:k.onRefresh},{default:o((function(){return[Object(a["j"])(V,{class:"list",loading:g.state.loading,"onUpdate:loading":e[2]||(e[2]=function(t){return g.state.loading=t}),finished:g.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:k.onLoad},{default:o((function(){return[(Object(a["y"])(!0),Object(a["g"])(a["a"],null,Object(a["E"])(g.state.list,(function(e,n){return Object(a["y"])(),Object(a["g"])("div",{key:n},[Object(a["j"])(y,{class:"dt",color:"#CCC"},{default:o((function(){return[Object(a["i"])(Object(a["K"])(e.dt),1)]})),_:2},1024),Object(a["j"])(G,{class:"item",border:!1},{default:o((function(){return[Object(a["j"])(C,null,{title:o((function(){return[Object(a["j"])("div",{class:["line1",{used:1==e.status}]},"￥ "+Object(a["K"])(e.value),3)]})),value:o((function(){return[Object(a["j"])("div",c,"#"+Object(a["K"])(e.id),1),Object(a["j"])(_,{name:"gold-coin-o",size:"12",onClick:function(n){return t.$copy(e.token)}},{default:o((function(){return[r]})),_:2},1032,["onClick"]),s,Object(a["j"])(_,{name:"share-o",size:"12",onClick:function(t){return k.onShare(e.token)}},{default:o((function(){return[l]})),_:2},1032,["onClick"])]})),_:2},1024),Object(a["j"])(C,{class:"line2",title:e.remark,border:!1},{default:o((function(){return[Object(a["j"])(_,{name:1==e.status?"checked":"circle",onClick:function(t){return k.showRemark(e)}},{default:o((function(){return[u]})),_:2},1032,["name","onClick"])]})),_:2},1032,["title"])]})),_:2},1024)])})),128)),Object(a["Q"])(Object(a["j"])($,{style:{width:"100%"}},null,512),[[a["N"],0==g.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"]),Object(a["j"])(L,{show:g.state.popup,"onUpdate:show":e[7]||(e[7]=function(t){return g.state.popup=t}),round:"",closeable:"",position:"bottom"},{default:o((function(){return[Object(a["j"])("div",d,[b,Object(a["j"])(R,{type:"number",border:!0,modelValue:g.state.amount,"onUpdate:modelValue":e[4]||(e[4]=function(t){return g.state.amount=t}),"input-align":"right",clearable:"",label:"面值",placeholder:"卡的面值金额"},null,8,["modelValue"]),Object(a["j"])(R,{type:"number",border:!0,modelValue:g.state.num,"onUpdate:modelValue":e[5]||(e[5]=function(t){return g.state.num=t}),"input-align":"right",clearable:"",label:"数量",placeholder:"要开卡的数量"},null,8,["modelValue"]),Object(a["j"])(R,{modelValue:g.state.remark,"onUpdate:modelValue":e[6]||(e[6]=function(t){return g.state.remark=t}),type:"text",maxlength:"20","input-align":"right",label:"备注",placeholder:"可以不填"},null,8,["modelValue"]),Object(a["j"])(w,{round:"",block:"",type:"primary",style:{margin:"10px 0"},onClick:k.onCreate},{default:o((function(){return[f]})),_:1},8,["onClick"])])]})),_:1},8,["show"]),Object(a["j"])(L,{show:g.state.dialog1,"onUpdate:show":e[8]||(e[8]=function(t){return g.state.dialog1=t})},{default:o((function(){return[Object(a["j"])(T,{class:"giftcard",src:g.state.giftcard,width:"300"},{default:o((function(){return[j,h]})),_:1},8,["src"])]})),_:1},8,["show"]),Object(a["j"])(F,{show:g.state.dialog2,"onUpdate:show":e[11]||(e[11]=function(t){return g.state.dialog2=t}),theme:"round-button","show-cancel-button":"",onConfirm:k.gotoRemark},{default:o((function(){return[Object(a["j"])(U,{"left-icon":"info-o"},{default:o((function(){return[O]})),_:1}),Object(a["j"])(R,{modelValue:g.state.content,"onUpdate:modelValue":e[9]||(e[9]=function(t){return g.state.content=t}),rows:"2",autosize:"",type:"textarea",maxlength:"100",placeholder:"请备注卡的使用情况","show-word-limit":""},null,8,["modelValue"]),Object(a["j"])(B,{modelValue:g.state.checked,"onUpdate:modelValue":e[10]||(e[10]=function(t){return g.state.checked=t}),direction:"horizontal",style:{margin:"15px",justifyContent:"space-around"}},{default:o((function(){return[Object(a["j"])(S,{name:"0"},{default:o((function(){return[p]})),_:1}),Object(a["j"])(S,{name:"1"},{default:o((function(){return[m]})),_:1})]})),_:1},8,["modelValue"])]})),_:1},8,["show","onConfirm"])]})),_:1})})),v=n("2824"),k={components:{BaseLayout:v["a"]},setup:function(){var t=Object(a["C"])({refreshing:!1,loading:!1,finished:!1,grid:!0,list:[],offset:0,limit:20,popup:!1,amount:100,num:1,remark:"",giftcard:"",dialog:!1,id:0,content:"",checked:0});return{state:t}},created:function(){this.onRefresh()},methods:{onRefresh:function(){this.state.popup=!1,this.state.dialog1=!1,this.state.dialog2=!1,this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/team/cardList?offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var a=e[n];t.state.list.push(a)}}))},onCreate:function(){var t=this;this.$http.post("/team/cardCreate?amount="+this.state.amount+"&num="+this.state.num+"&remark="+this.state.remark).then((function(e){t.$copy(e.token),t.onRefresh(),t.$dialog.alert({title:"开卡成功",message:"卡号已复制到剪贴板",theme:"round-button"})}))},onShare:function(t){var e=this;this.$http.post("/wechat/code?scene="+t).then((function(t){var n="http://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+t.ticket;console.log(n),e.state.giftcard=e.$host+"/mall/card?type=gift&qrcode="+encodeURIComponent(n),e.state.dialog1=!0}))},showRemark:function(t){this.state.id=t.id,this.state.content=t.remark,this.state.checked=t.status,this.state.dialog2=!0},gotoRemark:function(){this.$http.post("/team/cardRemark?id="+this.state.id+"&status="+this.state.checked+"&content="+this.state.content).then(this.onRefresh)}}},w=(n("97a0"),n("6b0d")),y=n.n(w);const _=y()(k,[["render",g],["__scopeId","data-v-1decd725"]]);e["default"]=_}}]);