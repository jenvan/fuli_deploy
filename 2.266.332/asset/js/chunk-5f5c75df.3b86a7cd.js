(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f5c75df"],{"071c":function(t,e,n){t.exports=n.p+"asset/img/bg_invite.4f453f10.jpg"},"0c50":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("d3b7"),n("25f0");var c=n("7a23"),i=Object(c["X"])("data-v-79f003d3");Object(c["D"])("data-v-79f003d3");var a={class:"info"},o=Object(c["k"])("div",{class:"block"},[Object(c["k"])("div",{class:"title"},"活动说明"),Object(c["k"])("div",{class:"content"}," 每邀请 1 位好友注册成功可获得 10 个积分，积分可在用户中心的卡券里面兑换 VIP 会员或其他增值功能；如果被邀请的好友购买了 VIP 会员，则可以获得购买金额的 30% 作为佣金奖励，佣金实时进入钱包，可消费、转账或申请提现。 ")],-1),r={class:"block"},s=Object(c["k"])("div",{class:"title"},"奖励排行",-1),u={class:"content"},b=Object(c["j"])("  "),l={class:"block"},j=Object(c["k"])("div",{class:"title"},"我的邀请",-1),f=Object(c["j"])("累计邀请："),d=Object(c["j"])("0 个好友，获得 $0 佣金"),O=Object(c["j"])("查看 >>"),v=Object(c["j"])("邀请码："),k=Object(c["j"])("邀请链接："),p=Object(c["j"])("海报邀请"),h={class:"qrcode"},g=Object(c["k"])("div",{class:"face"},"面对面邀请",-1),m=Object(c["k"])("br",null,null,-1);Object(c["B"])();var _=i((function(t,e,n,_,w,$){var I=Object(c["I"])("van-swipe-item"),y=Object(c["I"])("van-swipe"),C=Object(c["I"])("van-notice-bar"),T=Object(c["I"])("van-tag"),M=Object(c["I"])("van-cell"),L=Object(c["I"])("van-col"),S=Object(c["I"])("van-button"),F=Object(c["I"])("van-row"),R=Object(c["I"])("van-image"),U=Object(c["I"])("van-popup"),H=Object(c["I"])("BaseLayout");return Object(c["A"])(),Object(c["g"])(H,{title:"邀请好友来使用",subtitle:"最高享 30% 佣金",bg:$.background,fg:"#FFF",height:"60px"},{default:i((function(){return[Object(c["k"])(C,{class:"record","left-icon":"volume-o",scrollable:!1},{default:i((function(){return[Object(c["k"])(y,{class:"record-item",vertical:"",autoplay:3e3,"show-indicators":!1},{default:i((function(){return[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(_.state.list_new,(function(t,e){return Object(c["A"])(),Object(c["g"])(I,{key:e},{default:i((function(){return[Object(c["j"])(Object(c["M"])(t.name)+" 邀请 "+Object(c["M"])(t.num)+" 位好友赚取 $"+Object(c["M"])(t.amount),1)]})),_:2},1024)})),128))]})),_:1})]})),_:1}),Object(c["k"])("div",a,[o,Object(c["k"])("div",r,[s,Object(c["k"])("div",u,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(_.state.list_top,(function(t,e){return Object(c["A"])(),Object(c["g"])(M,{key:e,title:t.name,value:"$"+t.amount},{icon:i((function(){return[Object(c["k"])(T,{size:"large",color:"#F"+Math.floor(2.4*e).toString()+e.toString(),round:""},{default:i((function(){return[Object(c["j"])(Object(c["M"])(e+1),1)]})),_:2},1032,["color"]),b]})),_:2},1032,["title","value"])})),128))])]),Object(c["k"])("div",l,[j,Object(c["k"])(F,{class:"content mine",gutter:"2",justify:"space-between",align:"center"},{default:i((function(){return[Object(c["k"])(L,{span:"6",align:"right"},{default:i((function(){return[f]})),_:1}),Object(c["k"])(L,{span:"12"},{default:i((function(){return[d]})),_:1}),Object(c["k"])(L,{span:"6",class:"right",onClick:e[1]||(e[1]=function(e){return t.$router.push("/my/invite")})},{default:i((function(){return[O]})),_:1}),Object(c["k"])(L,{span:"6",align:"right"},{default:i((function(){return[v]})),_:1}),Object(c["k"])(L,{span:"18",onClick:e[2]||(e[2]=function(e){return t.$copy($.inviteCode)})},{default:i((function(){return[Object(c["j"])(Object(c["M"])($.inviteCode),1)]})),_:1}),Object(c["k"])(L,{span:"6",align:"right"},{default:i((function(){return[k]})),_:1}),Object(c["k"])(L,{span:"18",class:"van-ellipsis",onClick:e[3]||(e[3]=function(e){return t.$copy($.inviteURL)})},{default:i((function(){return[Object(c["j"])(Object(c["M"])($.inviteURL),1)]})),_:1}),Object(c["k"])(L,{span:"4"},{default:i((function(){return[Object(c["k"])(S,{plain:"",icon:"qr","icon-position":"right",color:"#F60",onClick:e[4]||(e[4]=function(t){return _.state.show=!0})})]})),_:1}),Object(c["k"])(L,{span:"20"},{default:i((function(){return[Object(c["k"])(S,{block:"",icon:"share","icon-position":"left",color:"#F60",onClick:e[5]||(e[5]=function(e){return t.$toast("海报制作中")})},{default:i((function(){return[p]})),_:1})]})),_:1})]})),_:1})])]),Object(c["k"])(U,{show:_.state.show,"onUpdate:show":e[6]||(e[6]=function(t){return _.state.show=t}),round:"",closeable:"",position:"top"},{default:i((function(){return[Object(c["k"])("div",h,[g,Object(c["k"])(R,{src:"https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&ecc=H&data="+$.inviteURL,width:"200",height:"200",radius:"10"},null,8,["src"])])]})),_:1},8,["show"]),m]})),_:1},8,["bg"])})),w=n("5530"),$=(n("ac1f"),n("1276"),n("5319"),n("5502")),I=n("2824"),y={components:{BaseLayout:I["a"]},setup:function(){var t=Object(c["E"])({list_new:[],list_top:[],show:!1});return{state:t}},created:function(){for(var t in"0123456789".split(""))this.state.list_new.push({name:"币友"+this.random(4),num:parseFloat(this.random(2)),amount:parseFloat(this.random(3))});var e=[88,77,75,64,60];for(var n in e)this.state.list_top.push({name:"币友"+(73*e[n]).toString().substr(0,4),amount:parseFloat(88*e[n])})},computed:Object(w["a"])(Object(w["a"])({background:function(){return"#ffd902 url('"+n("071c")+"') 10% top no-repeat"},inviteCode:function(){return this.authorized?btoa(this.profile.id).replace("==",""):"请先登录"},inviteURL:function(){return this.authorized?"https://m.huoshen.app/#/invite/"+this.inviteCode:"请先登录"}},Object($["d"])(["profile"])),Object($["b"])(["authorized","uid","nickname","balance"])),methods:{random:function(t){return(999999999*Math.random()).toString().replace(".","").substr(1,t)}}},C=(n("80bf"),n("6b0d")),T=n.n(C);const M=T()(y,[["render",_],["__scopeId","data-v-79f003d3"]]);e["default"]=M},2824:function(t,e,n){"use strict";var c=n("7a23"),i=Object(c["X"])("data-v-35e22a62");Object(c["D"])("data-v-35e22a62");var a={class:"container"},o={class:"back"},r={class:"head"},s={class:"more"},u={class:"subtitle"},b={class:"extra"};Object(c["B"])();var l=i((function(t,e,n,l,j,f){var d=Object(c["I"])("van-icon"),O=Object(c["I"])("van-nav-bar"),v=Object(c["I"])("van-sticky"),k=Object(c["I"])("van-col"),p=Object(c["I"])("van-row");return Object(c["A"])(),Object(c["g"])("div",a,[Object(c["U"])(Object(c["k"])(v,{onChange:e[1]||(e[1]=function(t){return l.state.isTop=!l.state.isTop})},{default:i((function(){return[Object(c["k"])(O,{class:["navbar",{notTop:!l.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:f.onClickLeft,onClickRight:f.onClickRight},{left:i((function(){return[Object(c["U"])(Object(c["k"])("div",o,[Object(c["H"])(t.$slots,"back",{},(function(){return[Object(c["k"])(d,{name:"arrow-left"})]}),{},!0)],512),[[c["Q"],!n.noback]])]})),title:i((function(){return[Object(c["k"])("div",r,[Object(c["H"])(t.$slots,"head",{},(function(){return[Object(c["k"])("div",{style:{width:"100%",color:l.state.isTop?n.fg:"inherit"}},Object(c["M"])(l.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)])]})),right:i((function(){return[Object(c["k"])("div",s,[Object(c["H"])(t.$slots,"more",{},void 0,!0)])]})),_:1},8,["class","onClickLeft","onClickRight"])]})),_:1},512),[[c["Q"],"hide"!=n.navbar]]),Object(c["k"])("div",{class:["page",{notTop:!l.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(c["k"])(c["d"],{name:"van-slide-down"},{default:i((function(){return[Object(c["U"])(Object(c["k"])(p,{justify:"space-between",align:"center",class:"outline",style:{height:n.height+"px",color:n.fg}},{default:i((function(){return[Object(c["k"])(k,{span:"16"},{default:i((function(){return[Object(c["k"])("div",{class:"title",style:{color:n.fg},onClick:e[2]||(e[2]=function(e){return t.$emit("click-title")})},[Object(c["H"])(t.$slots,"title",{},(function(){return[Object(c["j"])(Object(c["M"])(n.title),1)]}),{},!0),Object(c["k"])("div",u,Object(c["M"])(n.subtitle),1)],4)]})),_:3}),Object(c["k"])(k,{span:"8"},{default:i((function(){return[Object(c["k"])("div",b,[Object(c["H"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[c["Q"],l.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(c["H"])(t.$slots,"default",{},void 0,!0)],6)])})),j={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(c["E"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){var t=this;this.noback||(this.$emit("click-back"),setTimeout((function(e){if(e==t.$route)return window&&window.history.length>1?t.$router.back():t.$router.push("/")}),200,this.$route))},onClickRight:function(){return this.$emit("click-more")}}},f=(n("a4de"),n("6b0d")),d=n.n(f);const O=d()(j,[["render",l],["__scopeId","data-v-35e22a62"]]);e["a"]=O},"5afd":function(t,e,n){},"70cf":function(t,e,n){},"80bf":function(t,e,n){"use strict";n("70cf")},a4de:function(t,e,n){"use strict";n("5afd")}}]);