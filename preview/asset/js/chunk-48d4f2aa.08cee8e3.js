(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48d4f2aa"],{"07df":function(t,e,n){t.exports=n.p+"asset/img/vip.4bd170db.png"},"25f0":function(t,e,n){"use strict";var a=n("6eeb"),i=n("825a"),c=n("d039"),o=n("ad6d"),s="toString",r=RegExp.prototype,u=r[s],l=c((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),b=u.name!=s;(l||b)&&a(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in r)?o.call(t):n);return"/"+e+"/"+a}),{unsafe:!0})},2824:function(t,e,n){"use strict";var a=n("7a23"),i=Object(a["R"])("data-v-10eacbaa");Object(a["A"])("data-v-10eacbaa");var c={class:"container"},o={style:{width:"100%"}},s={class:"subtitle"},r={class:"extra"};Object(a["y"])();var u=i((function(t,e,n,u,l,b){var f=Object(a["F"])("van-icon"),d=Object(a["F"])("van-nav-bar"),j=Object(a["F"])("van-sticky"),O=Object(a["F"])("van-col"),v=Object(a["F"])("van-row");return Object(a["x"])(),Object(a["f"])("div",c,[Object(a["P"])(Object(a["i"])(j,{onChange:e[2]||(e[2]=function(t){return u.state.isTop=!u.state.isTop})},{default:i((function(){return[Object(a["i"])(d,{class:["navbar",{notTop:!u.state.isTop,noTitle:n.notitle}],border:!1,onClickLeft:b.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:i((function(){return[Object(a["P"])(Object(a["i"])("div",null,[Object(a["E"])(t.$slots,"back",{},(function(){return[Object(a["i"])(f,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[a["M"],!n.noback]])]})),title:i((function(){return[Object(a["i"])("div",o,[Object(a["E"])(t.$slots,"tool",{},(function(){return[Object(a["h"])(Object(a["J"])(u.state.isTop?"":n.title),1)]}),{},!0)])]})),right:i((function(){return[Object(a["E"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[a["M"],!n.nonavbar]]),Object(a["i"])("div",{class:["page",{notTop:!u.state.isTop,noNavbar:n.nonavbar,noTitle:n.notitle,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(a["i"])(a["c"],{name:"van-slide-down"},{default:i((function(){return[Object(a["P"])(Object(a["i"])(v,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:i((function(){return[Object(a["i"])(O,{span:"16"},{default:i((function(){return[Object(a["i"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(a["h"])(Object(a["J"])(n.title)+" ",1),Object(a["i"])("div",s,Object(a["J"])(n.subtitle),1)],4)]})),_:1}),Object(a["i"])(O,{span:"8"},{default:i((function(){return[Object(a["i"])("div",r,[Object(a["E"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[a["M"],u.state.isTop&&!n.nonavbar&&!n.notitle]])]})),_:1}),Object(a["E"])(t.$slots,"default",{},void 0,!0)],6)])})),l={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(a["B"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){return"function"==typeof this.$slots.back?this.$emit("click-back"):(console.log("<<< BACK"),this.$router.back())}}};n("854e");l.render=u,l.__scopeId="data-v-10eacbaa";e["a"]=l},"3ad4":function(t,e,n){"use strict";n("c93a")},"67e7":function(t,e,n){},"854e":function(t,e,n){"use strict";n("67e7")},"8f12":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("ac1f"),n("5319");var a=n("7a23"),i=Object(a["R"])("data-v-990edb3a");Object(a["A"])("data-v-990edb3a");var c=Object(a["i"])("br",null,null,-1),o={class:"mine"},s={class:"vipname"},r={class:"expire"},u={class:"name"},l={class:"content"},b={class:"block"},f=Object(a["i"])("br",null,null,-1),d=Object(a["h"])("点我升级享受更多权益");Object(a["y"])();var j=i((function(t,e,n,j,O,v){var p=Object(a["F"])("van-icon"),h=Object(a["F"])("van-swipe-item"),g=Object(a["F"])("van-swipe"),m=Object(a["F"])("van-col"),y=Object(a["F"])("van-row"),k=Object(a["F"])("van-button"),w=Object(a["F"])("van-sticky"),F=Object(a["F"])("van-radio"),x=Object(a["F"])("van-radio-group"),_=Object(a["F"])("van-submit-bar"),$=Object(a["F"])("van-popup"),C=Object(a["F"])("BaseLayout");return Object(a["x"])(),Object(a["f"])(C,{title:"会员",bg:"linear-gradient(90deg, #EA0, #000 3%, #000 97%, #EA0)",nonavbar:""},{default:i((function(){return[c,Object(a["i"])("div",{class:"head",style:{background:v.bg}},[Object(a["i"])("div",o,[Object(a["i"])("div",s,Object(a["J"])(v.vipname),1),Object(a["i"])("div",r,Object(a["J"])(v.expire),1)])],4),Object(a["i"])(g,{class:"swipe",autoplay:8e3,loop:!0,width:300,"show-indicators":!1,onChange:v.onChange},{default:i((function(){return[(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(j.state.vip,(function(t,e){return Object(a["x"])(),Object(a["f"])(h,{key:e},{default:i((function(){return[Object(a["i"])("div",{class:"card",style:{color:t.color}},[Object(a["i"])("div",u,[Object(a["i"])(p,{name:"vip-card",size:"40",color:t.color,style:{marginRight:"10px"}},null,8,["color"]),Object(a["i"])("p",null,Object(a["J"])(t.name),1)]),Object(a["i"])("div",{class:"price",textContent:Object(a["J"])(t.intro?t.intro:t.price+" 元 / 年")},null,8,["textContent"])],4)]})),_:2},1024)})),128))]})),_:1},8,["onChange"]),Object(a["i"])("div",l,[Object(a["i"])("div",{class:"title",style:{color:j.state.current.color}},"⋙  "+Object(a["J"])(j.state.current.name)+"权益  ⋘",5),Object(a["i"])("div",b,[(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(j.state.feature,(function(t,e){return Object(a["x"])(),Object(a["f"])(y,{class:"item",key:e,align:"center",justify:"start"},{default:i((function(){return[Object(a["i"])(m,{span:"4",class:"icon"},{default:i((function(){return[Object(a["i"])(p,{name:t.icon,size:"45",color:j.state.current.color},null,8,["name","color"])]})),_:2},1024),Object(a["i"])(m,{span:"14",class:"name"},{default:i((function(){return[Object(a["h"])(Object(a["J"])(t.name),1)]})),_:2},1024),Object(a["i"])(m,{span:"6",class:"value"},{default:i((function(){return[Object(a["h"])(Object(a["J"])(t.value),1)]})),_:2},1024),Object(a["i"])(m,{span:"24",class:"desc"},{default:i((function(){return[Object(a["h"])(Object(a["J"])(t.desc),1)]})),_:2},1024)]})),_:2},1024)})),128))]),f]),Object(a["i"])(w,{position:"bottom","offset-bottom":50},{default:i((function(){return[Object(a["i"])(k,{class:"buy",block:"",color:"#EA0",size:"large",onClick:v.onBuy},{default:i((function(){return[d]})),_:1},8,["onClick"])]})),_:1}),Object(a["i"])($,{show:j.state.show,"onUpdate:show":e[2]||(e[2]=function(t){return j.state.show=t}),round:"",closeable:"",position:"bottom"},{default:i((function(){return[Object(a["i"])(x,{class:"choose",modelValue:j.state.choose,"onUpdate:modelValue":e[1]||(e[1]=function(t){return j.state.choose=t})},{default:i((function(){return[(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(j.state.vip,(function(e,n){return Object(a["x"])(),Object(a["f"])("div",{key:n},[Object(a["i"])(F,{class:"option",name:n,disabled:t.level>=parseInt(n.replace("v",""))},{default:i((function(){return[Object(a["h"])(Object(a["J"])(e.name)+"（"+Object(a["J"])(e.price)+" 元 / 年）",1)]})),_:2},1032,["name","disabled"])])})),128))]})),_:1},8,["modelValue"]),Object(a["i"])(_,{price:100*v.fee,currency:"￥",label:"实付：","suffix-label":" 余额：￥"+t.cash,"button-text":"升级 / 续费",tip:"实付金额 = 所选会员年费 - 已付会员剩余年费","tip-icon":"info-o",onSubmit:v.onPay},null,8,["price","suffix-label","onSubmit"])]})),_:1},8,["show"])]})),_:1})})),O=n("5530"),v=(n("d3b7"),n("25f0"),n("5502")),p=n("2824"),h={components:{BaseLayout:p["a"]},setup:function(){var t={},e={},n={v1:{name:"银卡",color:"#FFF",price:"0",intro:"限时免费",quota:[1,2,"不","不"]},v2:{name:"金卡",color:"#FF0",price:"100",quota:[3,10,"不","不"]},v3:{name:"翡翠卡",color:"#0F0",price:"500",quota:[10,30,"","不"]},v4:{name:"钻石卡",color:"#0FF",price:"2000",quota:[30,100,"",""]}},i=[{icon:"font-o",name:"权益1",value:" 次",desc:"权益描述权益描述权益描述权益描述"},{icon:"cash-back-record",name:"权益2",value:" 积分",desc:"权益描述权益描述权益描述权益描述权益描述权益描述权益描述"},{icon:"after-sale",name:"权益3",value:"支持",desc:"权益描述权益描述权益描述权益描述权益描述"},{icon:"expand-o",name:"权益4",value:"支持",desc:"权益描述权益描述"}],c=!1,o="v4",s=Object(a["B"])({current:t,feature:e,vip:n,fun:i,show:c,choose:o});return{state:s}},created:function(){this.state.current=this.state.vip["v1"],this.state.feature=this.state.fun},mounted:function(){this.onChange(0)},computed:Object(O["a"])(Object(O["a"])({bg:function(){return"url("+n("07df")+") no-repeat top center"},vipname:function(){return this.authorized?this.state.vip["v"+this.level]?this.state.vip["v"+this.level]["name"]+"会员":"精英会员":"尚未登录"},expire:function(){return this.authorized?this.profile.deadline?"有效期至 "+this.profile.deadline:"":"有效期登录后可见"},fee:function(){var t=this.state.vip[this.state.choose]["price"],e=new Date,n=e.getFullYear()+"-"+((e.getMonth()+1)/100).toString().substr(2,2)+"-"+(e.getDate()/100).toString().substr(2,2);if(0==this.level||!this.profile.deadline||this.profile.deadline<=n)return t;var a=Math.ceil((new Date(this.profile.deadline).getTime()-(new Date).getTime())/864e5),i=this.state.vip["v"+this.level].price*a/365;return parseFloat(t-i)}},Object(v["d"])(["profile"])),Object(v["b"])(["authorized","uid","nickname","cash","level"])),methods:{onChange:function(t){this.state.current=this.state.vip["v"+(t+1)];var e=[];for(var n in this.state.fun){var a=this.state.current.quota[n],i=Object(O["a"])(Object(O["a"])({},{}),this.state.fun[n]);i.value=a+i.value,e.push(i)}this.state.feature=e},onBuy:function(){if(!this.authorized)return this.$toast("请先登录"),void this.$router.push("/login");this.state.show=!0},onPay:function(){var t=this;return this.fee<0?this.$toast("请先选择要升级的会员类型"):this.cash<this.fee?this.$dialog.confirm({title:"余额不足",message:"现在就去充值？",theme:"round-button"}).then((function(){t.$router.push("/my/deposit")})):void this.$http.post("/trade/buy?vip="+this.state.choose).then((function(e){t.state.show=!1,t.$init(),t.$dialog.alert({message:"恭喜您，会员升级成功！",theme:"round-button"})}))}}};n("3ad4");h.render=j,h.__scopeId="data-v-990edb3a";e["default"]=h},c93a:function(t,e,n){}}]);
//# sourceMappingURL=chunk-48d4f2aa.08cee8e3.js.map