(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1add5e46"],{"1a7d":function(t,e,n){},2824:function(t,e,n){"use strict";var i=n("7a23"),c=Object(i["R"])("data-v-12659e6e");Object(i["A"])("data-v-12659e6e");var o={class:"container"},a={style:{width:"100%"}},s={class:"subtitle"},l={class:"extra"};Object(i["y"])();var r=c((function(t,e,n,r,u,b){var f=Object(i["F"])("van-icon"),d=Object(i["F"])("van-nav-bar"),h=Object(i["F"])("van-sticky"),p=Object(i["F"])("van-col"),j=Object(i["F"])("van-row");return Object(i["x"])(),Object(i["f"])("div",o,[Object(i["P"])(Object(i["i"])(h,{onChange:e[2]||(e[2]=function(t){return r.state.isTop=!r.state.isTop})},{default:c((function(){return[Object(i["i"])(d,{class:["navbar",{notTop:!r.state.isTop,noTitle:n.notitle}],border:!1,onClickLeft:b.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:c((function(){return[Object(i["P"])(Object(i["i"])("div",null,[Object(i["E"])(t.$slots,"back",{},(function(){return[Object(i["i"])(f,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[i["M"],!n.noback]])]})),title:c((function(){return[Object(i["i"])("div",a,[Object(i["E"])(t.$slots,"tool",{},(function(){return[Object(i["h"])(Object(i["J"])(r.state.isTop?"":n.title),1)]}),{},!0)])]})),right:c((function(){return[Object(i["E"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[i["M"],!n.nonavbar]]),Object(i["i"])("div",{class:["page",{notTop:!r.state.isTop,noNavbar:n.nonavbar,noTitle:n.notitle,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(i["i"])(i["c"],{name:"van-slide-down"},{default:c((function(){return[Object(i["P"])(Object(i["i"])(j,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:c((function(){return[Object(i["i"])(p,{span:"16"},{default:c((function(){return[Object(i["i"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(i["h"])(Object(i["J"])(n.title)+" ",1),Object(i["i"])("div",s,Object(i["J"])(n.subtitle),1)],4)]})),_:1}),Object(i["i"])(p,{span:"8"},{default:c((function(){return[Object(i["i"])("div",l,[Object(i["E"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[i["M"],r.state.isTop&&!n.nonavbar&&!n.notitle]])]})),_:1}),Object(i["E"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(i["B"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):this.$router.back()}}},b=(n("3ea6"),n("d959")),f=n.n(b);const d=f()(u,[["render",r],["__scopeId","data-v-12659e6e"]]);e["a"]=d},"28df":function(t,e,n){},"3ea6":function(t,e,n){"use strict";n("1a7d")},ab12:function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("7a23"),c=Object(i["R"])("data-v-061bfee0");Object(i["A"])("data-v-061bfee0");var o=Object(i["h"])("切换账号"),a={class:"info"},s=Object(i["h"])("解绑账号"),l=Object(i["h"])("退出登录");Object(i["y"])();var r=c((function(t,e,n,r,u,b){var f=Object(i["F"])("van-button"),d=Object(i["F"])("van-field"),h=Object(i["F"])("van-cell"),p=Object(i["F"])("van-action-sheet"),j=Object(i["F"])("BaseLayout");return Object(i["x"])(),Object(i["f"])(j,{title:"我的账号"},{extra:c((function(){return[b.inWechat?Object(i["P"])((Object(i["x"])(),Object(i["f"])(f,{key:0,icon:"sort",style:{width:"100%",borderRadius:"10px 0 0 10px",color:"#F60"},color:"#F6F6F6",onClick:e[1]||(e[1]=function(t){return u.state.popup=!0})},{default:c((function(){return[o]})),_:1},512)),[[i["M"],t.authorized]]):Object(i["g"])("",!0)]})),default:c((function(){return[Object(i["i"])("div",a,[(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(u.fields,(function(t,e){return Object(i["x"])(),Object(i["f"])(d,{key:e,label:t.name,modelValue:u.fields[e].value,"onUpdate:modelValue":function(t){return u.fields[e].value=t},clickable:"","input-align":"right","right-icon":u.fields[e].icon,onClickInput:function(t){return u.fields[e].icon="edit"},onBlur:function(t){return b.onChange(e)}},null,8,["label","modelValue","onUpdate:modelValue","right-icon","onClickInput","onBlur"])})),128)),Object(i["i"])(h,{title:"最近登录时间",value:t.profile.login_dt},null,8,["value"]),Object(i["i"])(h,{title:"最近登录地址",border:!1,value:t.profile.login_ip},null,8,["value"]),Object(i["P"])(Object(i["i"])(f,{block:"",class:"btn",type:"primary",plain:"",onClick:b.onUnbind},{default:c((function(){return[s]})),_:1},8,["onClick"]),[[i["M"],b.inWechat]]),Object(i["i"])(f,{block:"",class:"btn",type:"primary",to:"/logout"},{default:c((function(){return[l]})),_:1})]),Object(i["i"])(p,{show:u.state.popup,"onUpdate:show":e[2]||(e[2]=function(t){return u.state.popup=t}),actions:u.state.list,description:"当前微信绑定如下账号，点击进行切换","cancel-text":"绑定新账号","close-on-click-action":"",onSelect:b.onSwitch,onCancel:b.onBind},null,8,["show","actions","onSelect","onCancel"])]})),_:1})})),u=n("5530"),b=n("5502"),f=n("2824"),d={components:{BaseLayout:f["a"]},data:function(){var t=Object(i["B"])({mobile:{name:"手机号",icon:"arrow",value:""},username:{name:"用户名",icon:"arrow",value:""},password:{name:"密码",icon:"arrow",value:""},nickname:{name:"昵称",icon:"arrow",value:""}}),e=Object(i["B"])({popup:!1,list:[]});return{fields:t,state:e}},created:function(){this.$init(this.reset)},computed:Object(u["a"])(Object(u["a"])({inWechat:function(){return this.profile.openid.length>10}},Object(b["d"])(["profile"])),Object(b["b"])(["authorized","uid","mobile","nickname"])),methods:Object(u["a"])({reset:function(){for(var t in this.fields.mobile.value=this.mobile,this.fields.username.value=this.profile.username,this.fields.nickname.value=this.nickname,this.fields.password.value="******",this.state.list=[],this.profile.account){var e=this.profile.account[t];this.state.list.push(Object(u["a"])(Object(u["a"])({},e),{name:e.mobile,subname:e.nickname+" (UID:"+e.id+") "}))}},onChange:function(t){var e=this;if(this.fields[t].icon="arrow",("mobile"!=t||this.fields.mobile.value!=this.mobile)&&("username"!=t||this.fields.username.value!=this.profile.username)&&("nickname"!=t||this.fields.nickname.value!=this.nickname)&&("password"!=t||"******"!=this.fields.password.value)){var n="/user/change",i={what:t,value:this.fields[t].value};/(mobile|username|password)/.test(t)||(n="/user/modify",i[t]=this.fields[t].value),this.$http.post(n,i).then((function(){e.$init(e.reset)})).catch((function(){e.reset(),e.fields[t].icon="edit"}))}},onSwitch:function(t){var e=this;this.$http.post("/wechat/switch?u="+t.id).then((function(t){e.auth(t),e.$init(e.reset)}))},onBind:function(){this.$router.push("/bind")},onUnbind:function(){var t=this;this.$dialog.confirm({title:"",message:"确认解除账号 "+this.mobile+" 和微信（ID:"+this.profile.openid+"）的绑定关系？",theme:"round-button"}).then((function(){t.$http.post("/wechat/unbind")}))}},Object(b["c"])(["auth"]))},h=(n("cf40"),n("d959")),p=n.n(h);const j=p()(d,[["render",r],["__scopeId","data-v-061bfee0"]]);e["default"]=j},cf40:function(t,e,n){"use strict";n("28df")}}]);
//# sourceMappingURL=chunk-1add5e46.74ab459d.js.map