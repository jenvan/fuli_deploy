(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-563aeeb6"],{"071c":function(t,e,n){t.exports=n.p+"asset/img/bg_invite.4f453f10.jpg"},"0c50":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("d3b7"),n("25f0");var i=n("7a23"),c=Object(i["R"])("data-v-79f003d3");Object(i["A"])("data-v-79f003d3");var a={class:"info"},o=Object(i["i"])("div",{class:"block"},[Object(i["i"])("div",{class:"title"},"活动说明"),Object(i["i"])("div",{class:"content"}," 每邀请 1 位好友注册成功可获得 10 个积分，积分可在用户中心的卡券里面兑换 VIP 会员或其他增值功能；如果被邀请的好友购买了 VIP 会员，则可以获得购买金额的 30% 作为佣金奖励，佣金实时进入钱包，可消费、转账或申请提现。 ")],-1),r={class:"block"},s=Object(i["i"])("div",{class:"title"},"奖励排行",-1),u={class:"content"},l=Object(i["h"])("  "),b={class:"block"},f=Object(i["i"])("div",{class:"title"},"我的邀请",-1),j=Object(i["h"])("累计邀请："),O=Object(i["h"])("0 个好友，获得 $0 佣金"),d=Object(i["h"])("查看 >>"),p=Object(i["h"])("邀请码："),v=Object(i["h"])("邀请链接："),h=Object(i["h"])("海报邀请"),g={class:"qrcode"},m=Object(i["i"])("div",{class:"face"},"面对面邀请",-1),k=Object(i["i"])("br",null,null,-1);Object(i["y"])();var _=c((function(t,e,n,_,w,F){var y=Object(i["F"])("van-swipe-item"),$=Object(i["F"])("van-swipe"),C=Object(i["F"])("van-notice-bar"),x=Object(i["F"])("van-tag"),S=Object(i["F"])("van-cell"),T=Object(i["F"])("van-col"),J=Object(i["F"])("van-button"),L=Object(i["F"])("van-row"),R=Object(i["F"])("van-image"),B=Object(i["F"])("van-popup"),E=Object(i["F"])("BaseLayout");return Object(i["x"])(),Object(i["f"])(E,{title:"邀请好友来使用",subtitle:"最高享 30% 佣金",bg:F.background,fg:"#FFF",height:"60px"},{default:c((function(){return[Object(i["i"])(C,{class:"record","left-icon":"volume-o",scrollable:!1},{default:c((function(){return[Object(i["i"])($,{class:"record-item",vertical:"",autoplay:3e3,"show-indicators":!1},{default:c((function(){return[(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(_.state.list_new,(function(t,e){return Object(i["x"])(),Object(i["f"])(y,{key:e},{default:c((function(){return[Object(i["h"])(Object(i["J"])(t.name)+" 邀请 "+Object(i["J"])(t.num)+" 位好友赚取 $"+Object(i["J"])(t.amount),1)]})),_:2},1024)})),128))]})),_:1})]})),_:1}),Object(i["i"])("div",a,[o,Object(i["i"])("div",r,[s,Object(i["i"])("div",u,[(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(_.state.list_top,(function(t,e){return Object(i["x"])(),Object(i["f"])(S,{key:e,title:t.name,value:"$"+t.amount},{icon:c((function(){return[Object(i["i"])(x,{size:"large",color:"#F"+Math.floor(2.4*e).toString()+e.toString(),round:""},{default:c((function(){return[Object(i["h"])(Object(i["J"])(e+1),1)]})),_:2},1032,["color"]),l]})),_:2},1032,["title","value"])})),128))])]),Object(i["i"])("div",b,[f,Object(i["i"])(L,{class:"content mine",gutter:"2",justify:"space-between",align:"center"},{default:c((function(){return[Object(i["i"])(T,{span:"6",align:"right"},{default:c((function(){return[j]})),_:1}),Object(i["i"])(T,{span:"12"},{default:c((function(){return[O]})),_:1}),Object(i["i"])(T,{span:"6",class:"right",onClick:e[1]||(e[1]=function(e){return t.$router.push("/my/invite")})},{default:c((function(){return[d]})),_:1}),Object(i["i"])(T,{span:"6",align:"right"},{default:c((function(){return[p]})),_:1}),Object(i["i"])(T,{span:"18",onClick:e[2]||(e[2]=function(e){return t.$copy(F.inviteCode)})},{default:c((function(){return[Object(i["h"])(Object(i["J"])(F.inviteCode),1)]})),_:1}),Object(i["i"])(T,{span:"6",align:"right"},{default:c((function(){return[v]})),_:1}),Object(i["i"])(T,{span:"18",class:"van-ellipsis",onClick:e[3]||(e[3]=function(e){return t.$copy(F.inviteURL)})},{default:c((function(){return[Object(i["h"])(Object(i["J"])(F.inviteURL),1)]})),_:1}),Object(i["i"])(T,{span:"4"},{default:c((function(){return[Object(i["i"])(J,{plain:"",icon:"qr","icon-position":"right",color:"#F60",onClick:e[4]||(e[4]=function(t){return _.state.show=!0})})]})),_:1}),Object(i["i"])(T,{span:"20"},{default:c((function(){return[Object(i["i"])(J,{block:"",icon:"share","icon-position":"left",color:"#F60",onClick:e[5]||(e[5]=function(e){return t.$toast("海报制作中")})},{default:c((function(){return[h]})),_:1})]})),_:1})]})),_:1})])]),Object(i["i"])(B,{show:_.state.show,"onUpdate:show":e[6]||(e[6]=function(t){return _.state.show=t}),round:"",closeable:"",position:"top"},{default:c((function(){return[Object(i["i"])("div",g,[m,Object(i["i"])(R,{src:"https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&ecc=H&data="+F.inviteURL,width:"200",height:"200",radius:"10"},null,8,["src"])])]})),_:1},8,["show"]),k]})),_:1},8,["bg"])})),w=n("5530"),F=(n("ac1f"),n("1276"),n("5319"),n("5502")),y=n("2824"),$={components:{BaseLayout:y["a"]},setup:function(){var t=Object(i["B"])({list_new:[],list_top:[],show:!1});return{state:t}},created:function(){for(var t in"0123456789".split(""))this.state.list_new.push({name:"币友"+this.random(4),num:parseFloat(this.random(2)),amount:parseFloat(this.random(3))});var e=[88,77,75,64,60];for(var n in e)this.state.list_top.push({name:"币友"+(73*e[n]).toString().substr(0,4),amount:parseFloat(88*e[n])})},computed:Object(w["a"])(Object(w["a"])({background:function(){return"#ffd902 url('"+n("071c")+"') 10% top no-repeat"},inviteCode:function(){return this.authorized?btoa(this.profile.id).replace("==",""):"请先登录"},inviteURL:function(){return this.authorized?"https://m.huoshen.app/#/invite/"+this.inviteCode:"请先登录"}},Object(F["d"])(["profile"])),Object(F["b"])(["authorized","uid","nickname","balance"])),methods:{random:function(t){return(999999999*Math.random()).toString().replace(".","").substr(1,t)}}},C=(n("80bf"),n("d959")),x=n.n(C);const S=x()($,[["render",_],["__scopeId","data-v-79f003d3"]]);e["default"]=S},"1a7d":function(t,e,n){},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),c=n("825a"),a=n("d039"),o=n("ad6d"),r="toString",s=RegExp.prototype,u=s[r],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),b=u.name!=r;(l||b)&&i(RegExp.prototype,r,(function(){var t=c(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},2824:function(t,e,n){"use strict";var i=n("7a23"),c=Object(i["R"])("data-v-12659e6e");Object(i["A"])("data-v-12659e6e");var a={class:"container"},o={style:{width:"100%"}},r={class:"subtitle"},s={class:"extra"};Object(i["y"])();var u=c((function(t,e,n,u,l,b){var f=Object(i["F"])("van-icon"),j=Object(i["F"])("van-nav-bar"),O=Object(i["F"])("van-sticky"),d=Object(i["F"])("van-col"),p=Object(i["F"])("van-row");return Object(i["x"])(),Object(i["f"])("div",a,[Object(i["P"])(Object(i["i"])(O,{onChange:e[2]||(e[2]=function(t){return u.state.isTop=!u.state.isTop})},{default:c((function(){return[Object(i["i"])(j,{class:["navbar",{notTop:!u.state.isTop,noTitle:n.notitle}],border:!1,onClickLeft:b.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:c((function(){return[Object(i["P"])(Object(i["i"])("div",null,[Object(i["E"])(t.$slots,"back",{},(function(){return[Object(i["i"])(f,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[i["M"],!n.noback]])]})),title:c((function(){return[Object(i["i"])("div",o,[Object(i["E"])(t.$slots,"tool",{},(function(){return[Object(i["h"])(Object(i["J"])(u.state.isTop?"":n.title),1)]}),{},!0)])]})),right:c((function(){return[Object(i["E"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[i["M"],!n.nonavbar]]),Object(i["i"])("div",{class:["page",{notTop:!u.state.isTop,noNavbar:n.nonavbar,noTitle:n.notitle,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(i["i"])(i["c"],{name:"van-slide-down"},{default:c((function(){return[Object(i["P"])(Object(i["i"])(p,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:c((function(){return[Object(i["i"])(d,{span:"16"},{default:c((function(){return[Object(i["i"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(i["h"])(Object(i["J"])(n.title)+" ",1),Object(i["i"])("div",r,Object(i["J"])(n.subtitle),1)],4)]})),_:1}),Object(i["i"])(d,{span:"8"},{default:c((function(){return[Object(i["i"])("div",s,[Object(i["E"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[i["M"],u.state.isTop&&!n.nonavbar&&!n.notitle]])]})),_:1}),Object(i["E"])(t.$slots,"default",{},void 0,!0)],6)])})),l={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(i["B"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):this.$router.back()}}},b=(n("3ea6"),n("d959")),f=n.n(b);const j=f()(l,[["render",u],["__scopeId","data-v-12659e6e"]]);e["a"]=j},"3ea6":function(t,e,n){"use strict";n("1a7d")},"80bf":function(t,e,n){"use strict";n("a5a5")},a5a5:function(t,e,n){}}]);
//# sourceMappingURL=chunk-563aeeb6.16ac4794.js.map