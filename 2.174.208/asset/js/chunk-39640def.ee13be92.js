(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39640def"],{"071c":function(t,e,n){t.exports=n.p+"asset/img/bg_invite.4f453f10.jpg"},"0c50":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("d3b7"),n("25f0");var c=n("7a23"),i=Object(c["W"])("data-v-79f003d3");Object(c["C"])("data-v-79f003d3");var a={class:"info"},o=Object(c["j"])("div",{class:"block"},[Object(c["j"])("div",{class:"title"},"活动说明"),Object(c["j"])("div",{class:"content"}," 每邀请 1 位好友注册成功可获得 10 个积分，积分可在用户中心的卡券里面兑换 VIP 会员或其他增值功能；如果被邀请的好友购买了 VIP 会员，则可以获得购买金额的 30% 作为佣金奖励，佣金实时进入钱包，可消费、转账或申请提现。 ")],-1),r={class:"block"},s=Object(c["j"])("div",{class:"title"},"奖励排行",-1),u={class:"content"},b=Object(c["i"])("  "),l={class:"block"},j=Object(c["j"])("div",{class:"title"},"我的邀请",-1),f=Object(c["i"])("累计邀请："),O=Object(c["i"])("0 个好友，获得 $0 佣金"),d=Object(c["i"])("查看 >>"),v=Object(c["i"])("邀请码："),p=Object(c["i"])("邀请链接："),h=Object(c["i"])("海报邀请"),g={class:"qrcode"},m=Object(c["j"])("div",{class:"face"},"面对面邀请",-1),k=Object(c["j"])("br",null,null,-1);Object(c["A"])();var _=i((function(t,e,n,_,w,y){var $=Object(c["H"])("van-swipe-item"),L=Object(c["H"])("van-swipe"),C=Object(c["H"])("van-notice-bar"),H=Object(c["H"])("van-tag"),T=Object(c["H"])("van-cell"),z=Object(c["H"])("van-col"),F=Object(c["H"])("van-button"),S=Object(c["H"])("van-row"),x=Object(c["H"])("van-image"),G=Object(c["H"])("van-popup"),P=Object(c["H"])("BaseLayout");return Object(c["z"])(),Object(c["g"])(P,{title:"邀请好友来使用",subtitle:"最高享 30% 佣金",bg:y.background,fg:"#FFF",height:"60px"},{default:i((function(){return[Object(c["j"])(C,{class:"record","left-icon":"volume-o",scrollable:!1},{default:i((function(){return[Object(c["j"])(L,{class:"record-item",vertical:"",autoplay:3e3,"show-indicators":!1},{default:i((function(){return[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(_.state.list_new,(function(t,e){return Object(c["z"])(),Object(c["g"])($,{key:e},{default:i((function(){return[Object(c["i"])(Object(c["L"])(t.name)+" 邀请 "+Object(c["L"])(t.num)+" 位好友赚取 $"+Object(c["L"])(t.amount),1)]})),_:2},1024)})),128))]})),_:1})]})),_:1}),Object(c["j"])("div",a,[o,Object(c["j"])("div",r,[s,Object(c["j"])("div",u,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(_.state.list_top,(function(t,e){return Object(c["z"])(),Object(c["g"])(T,{key:e,title:t.name,value:"$"+t.amount},{icon:i((function(){return[Object(c["j"])(H,{size:"large",color:"#F"+Math.floor(2.4*e).toString()+e.toString(),round:""},{default:i((function(){return[Object(c["i"])(Object(c["L"])(e+1),1)]})),_:2},1032,["color"]),b]})),_:2},1032,["title","value"])})),128))])]),Object(c["j"])("div",l,[j,Object(c["j"])(S,{class:"content mine",gutter:"2",justify:"space-between",align:"center"},{default:i((function(){return[Object(c["j"])(z,{span:"6",align:"right"},{default:i((function(){return[f]})),_:1}),Object(c["j"])(z,{span:"12"},{default:i((function(){return[O]})),_:1}),Object(c["j"])(z,{span:"6",class:"right",onClick:e[1]||(e[1]=function(e){return t.$router.push("/my/invite")})},{default:i((function(){return[d]})),_:1}),Object(c["j"])(z,{span:"6",align:"right"},{default:i((function(){return[v]})),_:1}),Object(c["j"])(z,{span:"18",onClick:e[2]||(e[2]=function(e){return t.$copy(y.inviteCode)})},{default:i((function(){return[Object(c["i"])(Object(c["L"])(y.inviteCode),1)]})),_:1}),Object(c["j"])(z,{span:"6",align:"right"},{default:i((function(){return[p]})),_:1}),Object(c["j"])(z,{span:"18",class:"van-ellipsis",onClick:e[3]||(e[3]=function(e){return t.$copy(y.inviteURL)})},{default:i((function(){return[Object(c["i"])(Object(c["L"])(y.inviteURL),1)]})),_:1}),Object(c["j"])(z,{span:"4"},{default:i((function(){return[Object(c["j"])(F,{plain:"",icon:"qr","icon-position":"right",color:"#F60",onClick:e[4]||(e[4]=function(t){return _.state.show=!0})})]})),_:1}),Object(c["j"])(z,{span:"20"},{default:i((function(){return[Object(c["j"])(F,{block:"",icon:"share","icon-position":"left",color:"#F60",onClick:e[5]||(e[5]=function(e){return t.$toast("海报制作中")})},{default:i((function(){return[h]})),_:1})]})),_:1})]})),_:1})])]),Object(c["j"])(G,{show:_.state.show,"onUpdate:show":e[6]||(e[6]=function(t){return _.state.show=t}),round:"",closeable:"",position:"top"},{default:i((function(){return[Object(c["j"])("div",g,[m,Object(c["j"])(x,{src:"https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&ecc=H&data="+y.inviteURL,width:"200",height:"200",radius:"10"},null,8,["src"])])]})),_:1},8,["show"]),k]})),_:1},8,["bg"])})),w=n("5530"),y=(n("ac1f"),n("1276"),n("5319"),n("5502")),$=n("2824"),L={components:{BaseLayout:$["a"]},setup:function(){var t=Object(c["D"])({list_new:[],list_top:[],show:!1});return{state:t}},created:function(){for(var t in"0123456789".split(""))this.state.list_new.push({name:"币友"+this.random(4),num:parseFloat(this.random(2)),amount:parseFloat(this.random(3))});var e=[88,77,75,64,60];for(var n in e)this.state.list_top.push({name:"币友"+(73*e[n]).toString().substr(0,4),amount:parseFloat(88*e[n])})},computed:Object(w["a"])(Object(w["a"])({background:function(){return"#ffd902 url('"+n("071c")+"') 10% top no-repeat"},inviteCode:function(){return this.authorized?btoa(this.profile.id).replace("==",""):"请先登录"},inviteURL:function(){return this.authorized?"https://m.huoshen.app/#/invite/"+this.inviteCode:"请先登录"}},Object(y["d"])(["profile"])),Object(y["b"])(["authorized","uid","nickname","balance"])),methods:{random:function(t){return(999999999*Math.random()).toString().replace(".","").substr(1,t)}}},C=(n("80bf"),n("6b0d")),H=n.n(C);const T=H()(L,[["render",_],["__scopeId","data-v-79f003d3"]]);e["default"]=T},2824:function(t,e,n){"use strict";var c=n("7a23"),i=Object(c["W"])("data-v-3905236b");Object(c["C"])("data-v-3905236b");var a={class:"container"},o={class:"subtitle"},r={class:"extra"};Object(c["A"])();var s=i((function(t,e,n,s,u,b){var l=Object(c["H"])("van-icon"),j=Object(c["H"])("van-nav-bar"),f=Object(c["H"])("van-sticky"),O=Object(c["H"])("van-col"),d=Object(c["H"])("van-row");return Object(c["z"])(),Object(c["g"])("div",a,[Object(c["T"])(Object(c["j"])(f,{onChange:e[2]||(e[2]=function(t){return s.state.isTop=!s.state.isTop})},{default:i((function(){return[Object(c["j"])(j,{class:["navbar",{notTop:!s.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:b.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:i((function(){return[Object(c["T"])(Object(c["j"])("div",null,[Object(c["G"])(t.$slots,"back",{},(function(){return[Object(c["j"])(l,{name:"arrow-left"})]}),{},!0)],512),[[c["P"],!n.noback]])]})),title:i((function(){return[Object(c["G"])(t.$slots,"head",{},(function(){return[Object(c["j"])("div",{style:{width:"100%",color:s.state.isTop?n.fg:"inherit"}},Object(c["L"])(s.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)]})),right:i((function(){return[Object(c["G"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[c["P"],"hide"!=n.navbar]]),Object(c["j"])("div",{class:["page",{notTop:!s.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(c["j"])(c["d"],{name:"van-slide-down"},{default:i((function(){return[Object(c["T"])(Object(c["j"])(d,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:i((function(){return[Object(c["j"])(O,{span:"16"},{default:i((function(){return[Object(c["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(c["G"])(t.$slots,"title",{},(function(){return[Object(c["i"])(Object(c["L"])(n.title),1)]}),{},!0),Object(c["j"])("div",o,Object(c["L"])(n.subtitle),1)],4)]})),_:3}),Object(c["j"])(O,{span:"8"},{default:i((function(){return[Object(c["j"])("div",r,[Object(c["G"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[c["P"],s.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(c["G"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(c["D"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},b=(n("3c9a"),n("6b0d")),l=n.n(b);const j=l()(u,[["render",s],["__scopeId","data-v-3905236b"]]);e["a"]=j},"3c9a":function(t,e,n){"use strict";n("c89b")},"70cf":function(t,e,n){},"80bf":function(t,e,n){"use strict";n("70cf")},c89b:function(t,e,n){}}]);