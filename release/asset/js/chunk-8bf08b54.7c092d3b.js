(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bf08b54"],{"02f2":function(t,e,n){},"0ac3":function(t,e,n){"use strict";n.r(e);var i=n("7a23"),a=Object(i["S"])("data-v-303a3d16");Object(i["B"])("data-v-303a3d16");var o=Object(i["i"])("新增员工"),s={class:"toolbar"};Object(i["z"])();var c=a((function(t,e,n,c,r,l){var u=Object(i["G"])("van-button"),d=Object(i["G"])("van-search"),f=Object(i["G"])("van-contact-card"),b=Object(i["G"])("van-empty"),h=Object(i["G"])("van-list"),j=Object(i["G"])("van-pull-refresh"),O=Object(i["G"])("van-contact-edit"),v=Object(i["G"])("van-action-sheet"),p=Object(i["G"])("BaseLayout");return Object(i["y"])(),Object(i["g"])(p,{title:"员工"},{extra:a((function(){return[Object(i["j"])(u,{icon:"add",style:{width:"110px",borderRadius:"10px 0 0 10px",color:"#000"},color:"#F6F6F6",onClick:e[1]||(e[1]=function(t){return l.onEdit(null)})},{default:a((function(){return[o]})),_:1})]})),default:a((function(){return[Object(i["j"])("div",s,[Object(i["j"])(d,{modelValue:c.state.keyword,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.state.keyword=t}),placeholder:"请输入手机号或员工姓名",clearable:"",onSearch:l.onRefresh,onClear:l.onRefresh},null,8,["modelValue","onSearch","onClear"])]),Object(i["j"])(j,{modelValue:c.state.refreshing,"onUpdate:modelValue":e[4]||(e[4]=function(t){return c.state.refreshing=t}),onRefresh:l.onRefresh},{default:a((function(){return[Object(i["j"])(h,{class:"list",loading:c.state.loading,"onUpdate:loading":e[3]||(e[3]=function(t){return c.state.loading=t}),finished:c.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:l.onLoad},{default:a((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(c.state.list,(function(t,e){return Object(i["y"])(),Object(i["g"])(f,{type:"edit",class:"item",key:e,name:t.truename,tel:t.mobile,onClick:function(e){return l.onEdit(t)}},null,8,["name","tel","onClick"])})),128)),Object(i["Q"])(Object(i["j"])(b,{style:{width:"100%"}},null,512),[[i["N"],0==c.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"]),Object(i["j"])(v,{show:c.state.edit,"onUpdate:show":e[5]||(e[5]=function(t){return c.state.edit=t}),title:c.state.title},{default:a((function(){return[Object(i["j"])(O,{"is-edit":c.state.del,"contact-info":c.state.info,onSave:l.onSave,onDelete:l.onDelete},null,8,["is-edit","contact-info","onSave","onDelete"])]})),_:1},8,["show","title"])]})),_:1})})),r=n("5530"),l=(n("b0c0"),n("2824")),u={components:{BaseLayout:l["a"]},setup:function(){var t=Object(i["C"])({refreshing:!1,loading:!1,finished:!1,list:[],keyword:"",offset:0,limit:20,edit:!1,del:!1,title:"",info:{}});return{state:t}},created:function(){this.onRefresh()},methods:{onRefresh:function(){this.state.edit=!1,this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/team/memberList?keyword="+this.state.keyword+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var i=e[n];t.state.list.push(Object(r["a"])(Object(r["a"])({},i),{amount:i.cash>0?i.cash:i.point}))}}))},onEdit:function(t){this.state.del=!1,this.state.title="新增员工",this.state.info={},null!=t&&(this.state.del=!0,this.state.title="员工管理",this.state.info={id:t.id,name:t.truename,tel:t.mobile}),this.state.edit=!0},onSave:function(t){this.$http.post("/team/memberSave?"+(t.id?"id="+t.id:"")+"&truename="+t.name+"&mobile="+t.tel).then(this.onRefresh)},onDelete:function(t){this.$http.post("/team/memberSave?id="+t.id+"&remove=1").then(this.onRefresh)}}},d=(n("ff31"),n("6b0d")),f=n.n(d);const b=f()(u,[["render",c],["__scopeId","data-v-303a3d16"]]);e["default"]=b},2824:function(t,e,n){"use strict";var i=n("7a23"),a=Object(i["S"])("data-v-0eb6c5d5");Object(i["B"])("data-v-0eb6c5d5");var o={class:"container"},s={style:{width:"100%"}},c={class:"subtitle"},r={class:"extra"};Object(i["z"])();var l=a((function(t,e,n,l,u,d){var f=Object(i["G"])("van-icon"),b=Object(i["G"])("van-nav-bar"),h=Object(i["G"])("van-sticky"),j=Object(i["G"])("van-col"),O=Object(i["G"])("van-row");return Object(i["y"])(),Object(i["g"])("div",o,[Object(i["Q"])(Object(i["j"])(h,{onChange:e[2]||(e[2]=function(t){return l.state.isTop=!l.state.isTop})},{default:a((function(){return[Object(i["j"])(b,{class:["navbar",{notTop:!l.state.isTop,noTitle:n.notitle}],border:!1,onClickLeft:d.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:a((function(){return[Object(i["Q"])(Object(i["j"])("div",null,[Object(i["F"])(t.$slots,"back",{},(function(){return[Object(i["j"])(f,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[i["N"],!n.noback]])]})),title:a((function(){return[Object(i["j"])("div",s,[Object(i["F"])(t.$slots,"tool",{},(function(){return[Object(i["i"])(Object(i["K"])(l.state.isTop?"":n.title),1)]}),{},!0)])]})),right:a((function(){return[Object(i["F"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[i["N"],!n.nonavbar]]),Object(i["j"])("div",{class:["page",{notTop:!l.state.isTop,noNavbar:n.nonavbar,noTitle:n.notitle,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(i["j"])(i["d"],{name:"van-slide-down"},{default:a((function(){return[Object(i["Q"])(Object(i["j"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(i["j"])(j,{span:"16"},{default:a((function(){return[Object(i["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(i["i"])(Object(i["K"])(n.title)+" ",1),Object(i["j"])("div",c,Object(i["K"])(n.subtitle),1)],4)]})),_:1}),Object(i["j"])(j,{span:"8"},{default:a((function(){return[Object(i["j"])("div",r,[Object(i["F"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[i["N"],l.state.isTop&&!n.nonavbar&&!n.notitle]])]})),_:1}),Object(i["F"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{nonavbar:{type:Boolean,default:!1},notitle:{type:Boolean,default:!1},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(i["C"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},d=(n("e877"),n("6b0d")),f=n.n(d);const b=f()(u,[["render",l],["__scopeId","data-v-0eb6c5d5"]]);e["a"]=b},"7cf1":function(t,e,n){},e877:function(t,e,n){"use strict";n("02f2")},ff31:function(t,e,n){"use strict";n("7cf1")}}]);