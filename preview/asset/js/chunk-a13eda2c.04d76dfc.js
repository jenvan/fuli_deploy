(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a13eda2c"],{"07df":function(t,e,n){t.exports=n.p+"asset/img/vip.4bd170db.png"},"0cda":function(t,e,n){"use strict";n("7e08")},"25f0":function(t,e,n){"use strict";var a=n("6eeb"),c=n("825a"),i=n("d039"),o=n("ad6d"),s="toString",r=RegExp.prototype,u=r[s],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),b=u.name!=s;(l||b)&&a(RegExp.prototype,s,(function(){var t=c(this),e=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in r)?o.call(t):n);return"/"+e+"/"+a}),{unsafe:!0})},2824:function(t,e,n){"use strict";var a=n("7a23"),c=Object(a["V"])("data-v-9a92bc34");Object(a["C"])("data-v-9a92bc34");var i={class:"container"},o={class:"subtitle"},s={class:"extra"};Object(a["A"])();var r=c((function(t,e,n,r,u,l){var b=Object(a["H"])("van-icon"),j=Object(a["H"])("van-nav-bar"),f=Object(a["H"])("van-sticky"),d=Object(a["H"])("van-col"),O=Object(a["H"])("van-row");return Object(a["z"])(),Object(a["g"])("div",i,[Object(a["S"])(Object(a["j"])(f,{onChange:e[2]||(e[2]=function(t){return r.state.isTop=!r.state.isTop})},{default:c((function(){return[Object(a["j"])(j,{class:["navbar",{notTop:!r.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:l.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:c((function(){return[Object(a["S"])(Object(a["j"])("div",null,[Object(a["G"])(t.$slots,"back",{},(function(){return[Object(a["j"])(b,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[a["O"],!n.noback]])]})),title:c((function(){return[Object(a["G"])(t.$slots,"title",{},(function(){return[Object(a["j"])("div",{style:{width:"100%",color:r.state.isTop?n.fg:"inherit"}},Object(a["L"])(r.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)]})),right:c((function(){return[Object(a["G"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[a["O"],"hide"!=n.navbar]]),Object(a["j"])("div",{class:["page",{notTop:!r.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(a["j"])(a["d"],{name:"van-slide-down"},{default:c((function(){return[Object(a["S"])(Object(a["j"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:c((function(){return[Object(a["j"])(d,{span:"16"},{default:c((function(){return[Object(a["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(a["G"])(t.$slots,"title",{},(function(){return[Object(a["i"])(Object(a["L"])(n.title),1)]}),{},!0),Object(a["j"])("div",o,Object(a["L"])(n.subtitle),1)],4)]})),_:3}),Object(a["j"])(d,{span:"8"},{default:c((function(){return[Object(a["j"])("div",s,[Object(a["G"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[a["O"],r.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(a["G"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(a["D"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},l=(n("e14a"),n("6b0d")),b=n.n(l);const j=b()(u,[["render",r],["__scopeId","data-v-9a92bc34"]]);e["a"]=j},"7e08":function(t,e,n){},"8f12":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("ac1f"),n("5319");var a=n("7a23"),c=Object(a["V"])("data-v-6e1f30c1");Object(a["C"])("data-v-6e1f30c1");var i=Object(a["j"])("br",null,null,-1),o={class:"mine"},s={class:"vipname"},r={class:"expire"},u={class:"name"},l={class:"content"},b={class:"block"},j=Object(a["j"])("br",null,null,-1),f=Object(a["i"])("点我升级享受更多权益");Object(a["A"])();var d=c((function(t,e,n,d,O,v){var h=Object(a["H"])("van-icon"),p=Object(a["H"])("van-swipe-item"),g=Object(a["H"])("van-swipe"),m=Object(a["H"])("van-col"),w=Object(a["H"])("van-row"),y=Object(a["H"])("van-button"),k=Object(a["H"])("van-sticky"),_=Object(a["H"])("van-radio"),$=Object(a["H"])("van-radio-group"),L=Object(a["H"])("van-submit-bar"),C=Object(a["H"])("van-popup"),x=Object(a["H"])("BaseLayout");return Object(a["z"])(),Object(a["g"])(x,{title:"会员",bg:"linear-gradient(90deg, #EA0, #000 3%, #000 97%, #EA0)",navbar:"hide"},{default:c((function(){return[i,Object(a["j"])("div",{class:"head",style:{background:v.bg}},[Object(a["j"])("div",o,[Object(a["j"])("div",s,Object(a["L"])(v.vipname),1),Object(a["j"])("div",r,Object(a["L"])(v.expire),1)])],4),Object(a["j"])(g,{class:"swipe",autoplay:8e3,loop:!0,width:300,"show-indicators":!1,onChange:v.onChange},{default:c((function(){return[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(d.state.vip,(function(t,e){return Object(a["z"])(),Object(a["g"])(p,{key:e},{default:c((function(){return[Object(a["j"])("div",{class:"card",style:{color:t.color}},[Object(a["j"])("div",u,[Object(a["j"])(h,{name:"vip-card",size:"40",color:t.color,style:{marginRight:"10px"}},null,8,["color"]),Object(a["j"])("p",null,Object(a["L"])(t.name),1)]),Object(a["j"])("div",{class:"price",textContent:Object(a["L"])(t.intro?t.intro:t.price+" 元 / 年")},null,8,["textContent"])],4)]})),_:2},1024)})),128))]})),_:1},8,["onChange"]),Object(a["j"])("div",l,[Object(a["j"])("div",{class:"title",style:{color:d.state.current.color}},"⋙  "+Object(a["L"])(d.state.current.name)+"权益  ⋘",5),Object(a["j"])("div",b,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(d.state.feature,(function(t,e){return Object(a["z"])(),Object(a["g"])(w,{class:"item",key:e,align:"center",justify:"start"},{default:c((function(){return[Object(a["j"])(m,{span:"4",class:"icon"},{default:c((function(){return[Object(a["j"])(h,{name:t.icon,size:"45",color:d.state.current.color},null,8,["name","color"])]})),_:2},1024),Object(a["j"])(m,{span:"14",class:"name"},{default:c((function(){return[Object(a["i"])(Object(a["L"])(t.name),1)]})),_:2},1024),Object(a["j"])(m,{span:"6",class:"value"},{default:c((function(){return[Object(a["i"])(Object(a["L"])(t.value),1)]})),_:2},1024),Object(a["j"])(m,{span:"24",class:"desc"},{default:c((function(){return[Object(a["i"])(Object(a["L"])(t.desc),1)]})),_:2},1024)]})),_:2},1024)})),128))]),j]),Object(a["j"])(k,{position:"bottom","offset-bottom":50},{default:c((function(){return[Object(a["j"])(y,{class:"buy",block:"",color:"#EA0",size:"large",onClick:v.onBuy},{default:c((function(){return[f]})),_:1},8,["onClick"])]})),_:1}),Object(a["j"])(C,{show:d.state.show,"onUpdate:show":e[2]||(e[2]=function(t){return d.state.show=t}),round:"",closeable:"",position:"bottom"},{default:c((function(){return[Object(a["j"])($,{class:"choose",modelValue:d.state.choose,"onUpdate:modelValue":e[1]||(e[1]=function(t){return d.state.choose=t})},{default:c((function(){return[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(d.state.vip,(function(e,n){return Object(a["z"])(),Object(a["g"])("div",{key:n},[Object(a["j"])(_,{class:"option",name:n,disabled:t.level>=parseInt(n.replace("v",""))},{default:c((function(){return[Object(a["i"])(Object(a["L"])(e.name)+"（"+Object(a["L"])(e.price)+" 元 / 年）",1)]})),_:2},1032,["name","disabled"])])})),128))]})),_:1},8,["modelValue"]),Object(a["j"])(L,{price:100*v.fee,currency:"￥",label:"实付：","suffix-label":" 余额：￥"+t.cash,"button-text":"升级 / 续费",tip:"实付金额 = 所选会员年费 - 已付会员剩余年费","tip-icon":"info-o",onSubmit:v.onPay},null,8,["price","suffix-label","onSubmit"])]})),_:1},8,["show"])]})),_:1})})),O=n("5530"),v=(n("d3b7"),n("25f0"),n("5502")),h=n("2824"),p={components:{BaseLayout:h["a"]},setup:function(){var t={},e={},n={v1:{name:"银卡",color:"#FFF",price:"0",intro:"限时免费",quota:[1,2,"不","不"]},v2:{name:"金卡",color:"#FF0",price:"100",quota:[3,10,"不","不"]},v3:{name:"翡翠卡",color:"#0F0",price:"500",quota:[10,30,"","不"]},v4:{name:"钻石卡",color:"#0FF",price:"2000",quota:[30,100,"",""]}},c=[{icon:"font-o",name:"权益1",value:" 次",desc:"权益描述权益描述权益描述权益描述"},{icon:"cash-back-record",name:"权益2",value:" 积分",desc:"权益描述权益描述权益描述权益描述权益描述权益描述权益描述"},{icon:"after-sale",name:"权益3",value:"支持",desc:"权益描述权益描述权益描述权益描述权益描述"},{icon:"expand-o",name:"权益4",value:"支持",desc:"权益描述权益描述"}],i=!1,o="v4",s=Object(a["D"])({current:t,feature:e,vip:n,fun:c,show:i,choose:o});return{state:s}},created:function(){this.state.current=this.state.vip["v1"],this.state.feature=this.state.fun},mounted:function(){this.onChange(0)},computed:Object(O["a"])(Object(O["a"])({bg:function(){return"url("+n("07df")+") no-repeat top center"},vipname:function(){return this.authorized?this.state.vip["v"+this.level]?this.state.vip["v"+this.level]["name"]+"会员":"精英会员":"尚未登录"},expire:function(){return this.authorized?this.profile.deadline?"有效期至 "+this.profile.deadline:"":"有效期登录后可见"},fee:function(){var t=this.state.vip[this.state.choose]["price"],e=new Date,n=e.getFullYear()+"-"+((e.getMonth()+1)/100).toString().substr(2,2)+"-"+(e.getDate()/100).toString().substr(2,2);if(0==this.level||!this.profile.deadline||this.profile.deadline<=n)return t;var a=Math.ceil((new Date(this.profile.deadline).getTime()-(new Date).getTime())/864e5),c=this.state.vip["v"+this.level].price*a/365;return parseFloat(t-c)}},Object(v["d"])(["profile"])),Object(v["b"])(["authorized","uid","nickname","cash","level"])),methods:{onChange:function(t){this.state.current=this.state.vip["v"+(t+1)];var e=[];for(var n in this.state.fun){var a=this.state.current.quota[n],c=Object(O["a"])(Object(O["a"])({},{}),this.state.fun[n]);c.value=a+c.value,e.push(c)}this.state.feature=e},onBuy:function(){if(!this.authorized)return this.$toast("请先登录"),void this.$router.push("/login");this.state.show=!0},onPay:function(){var t=this;return this.fee<0?this.$toast("请先选择要升级的会员类型"):this.cash<this.fee?this.$dialog.confirm({title:"余额不足",message:"现在就去充值？",theme:"round-button"}).then((function(){t.$router.push("/my/deposit")})):void this.$http.post("/trade/buy?vip="+this.state.choose).then((function(e){t.state.show=!1,t.$init(),t.$dialog.alert({message:"恭喜您，会员升级成功！",theme:"round-button"})}))}}},g=(n("0cda"),n("6b0d")),m=n.n(g);const w=m()(p,[["render",d],["__scopeId","data-v-6e1f30c1"]]);e["default"]=w},bafd:function(t,e,n){},e14a:function(t,e,n){"use strict";n("bafd")}}]);