(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57a64c30"],{"1bb9":function(t,e,n){},2824:function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["V"])("data-v-65e3a388");Object(c["C"])("data-v-65e3a388");var i={class:"container"},o={class:"subtitle"},r={class:"extra"};Object(c["A"])();var s=a((function(t,e,n,s,u,l){var b=Object(c["H"])("van-icon"),d=Object(c["H"])("van-nav-bar"),j=Object(c["H"])("van-sticky"),O=Object(c["H"])("van-col"),f=Object(c["H"])("van-row");return Object(c["z"])(),Object(c["g"])("div",i,[Object(c["S"])(Object(c["j"])(j,{onChange:e[2]||(e[2]=function(t){return s.state.isTop=!s.state.isTop})},{default:a((function(){return[Object(c["j"])(d,{class:["navbar",{notTop:!s.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:l.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:a((function(){return[Object(c["S"])(Object(c["j"])("div",null,[Object(c["G"])(t.$slots,"back",{},(function(){return[Object(c["j"])(b,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[c["O"],!n.noback]])]})),title:a((function(){return[Object(c["G"])(t.$slots,"head",{},(function(){return[Object(c["j"])("div",{style:{width:"100%",color:s.state.isTop?n.fg:"inherit"}},Object(c["L"])(s.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)]})),right:a((function(){return[Object(c["G"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[c["O"],"hide"!=n.navbar]]),Object(c["j"])("div",{class:["page",{notTop:!s.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(c["j"])(c["d"],{name:"van-slide-down"},{default:a((function(){return[Object(c["S"])(Object(c["j"])(f,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(c["j"])(O,{span:"16"},{default:a((function(){return[Object(c["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(c["G"])(t.$slots,"title",{},(function(){return[Object(c["i"])(Object(c["L"])(n.title),1)]}),{},!0),Object(c["j"])("div",o,Object(c["L"])(n.subtitle),1)],4)]})),_:3}),Object(c["j"])(O,{span:"8"},{default:a((function(){return[Object(c["j"])("div",r,[Object(c["G"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[c["O"],s.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(c["G"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(c["D"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},l=(n("2c02"),n("6b0d")),b=n.n(l);const d=b()(u,[["render",s],["__scopeId","data-v-65e3a388"]]);e["a"]=d},"2c02":function(t,e,n){"use strict";n("3c84")},"3c84":function(t,e,n){},"58d4":function(t,e,n){"use strict";n("1bb9")},"857a":function(t,e,n){var c=n("1d80"),a=/"/g;t.exports=function(t,e,n,i){var o=String(c(t)),r="<"+e;return""!==n&&(r+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),r+">"+o+"</"+e+">"}},9911:function(t,e,n){"use strict";var c=n("23e7"),a=n("857a"),i=n("af03");c({target:"String",proto:!0,forced:i("link")},{link:function(t){return a(this,"a","href",t)}})},af03:function(t,e,n){var c=n("d039");t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b498:function(t,e,n){"use strict";n.r(e);var c=n("ade3"),a=(n("b0c0"),n("9911"),n("7a23")),i=Object(a["V"])("data-v-ba7a7a30");Object(a["C"])("data-v-ba7a7a30");var o={class:"box"},r={class:"member"},s={class:"coupon"},u={class:"panel"},l={class:"name"};Object(a["A"])();var b=i((function(t,e,n,b,d,j){var O=Object(a["H"])("van-image"),f=Object(a["H"])("van-cell"),v=Object(a["H"])("van-grid-item"),h=Object(a["H"])("van-grid"),g=Object(a["H"])("van-tab"),p=Object(a["H"])("van-tabs"),m=Object(a["H"])("van-sidebar-item"),k=Object(a["H"])("van-sidebar"),C=Object(a["H"])("van-empty"),y=Object(a["H"])("van-button"),w=Object(a["H"])("BaseLayout");return Object(a["z"])(),Object(a["g"])(w,{title:d.state.category.name,bg:d.state.bg,navbar:"auto"},{default:i((function(){return[Object(a["j"])("div",o,[Object(a["j"])(O,{class:"banner",src:d.state.category.icon,radius:5,width:"100%",fit:"contain",onClick:e[1]||(e[1]=function(e){return t.$forward(d.state.category.link)})},null,8,["src"]),Object(a["S"])(Object(a["j"])("div",r,[Object(a["j"])(p,{ref:"tabs",active:d.state.active1,"onUpdate:active":e[2]||(e[2]=function(t){return d.state.active1=t}),scrollspy:"",onChange:j.handleTab},{default:i((function(){return[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(d.state.topCat,(function(e,c){return Object(a["z"])(),Object(a["g"])("div",{key:c},[e.children.length>0?(Object(a["z"])(),Object(a["g"])(g,{key:0,name:e.id,title:e.name},{default:i((function(){return[Object(a["j"])("div",{id:"block"+e.id,class:"block"},[Object(a["j"])(f,{class:"title",title:e.name,border:!1,"is-link":"",onClick:function(c){return t.$forward(n.action+"/"+e.id)}},null,8,["title","onClick"]),Object(a["j"])(h,{"column-num":"4",border:!1,"icon-size":"42",square:"",center:""},{default:i((function(){return[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(e.children,(function(e,c){return Object(a["z"])(),Object(a["g"])(v,{key:c,icon:e.icon,text:e.name,onClick:function(c){return t.$forward(n.action+"/"+e.id)}},null,8,["icon","text","onClick"])})),128))]})),_:2},1024)],8,["id"])]})),_:2},1032,["name","title"])):Object(a["h"])("",!0)])})),128))]})),_:1},8,["active","onChange"])],512),[[a["O"],"member"==n.action]]),Object(a["S"])(Object(a["j"])("div",s,[Object(a["j"])(k,{class:"sidebar",modelValue:d.state.active2,"onUpdate:modelValue":e[3]||(e[3]=function(t){return d.state.active2=t}),onChange:j.handleChange},{default:i((function(){return[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(d.state.topCat,(function(t,e){return Object(a["S"])((Object(a["z"])(),Object(a["g"])(m,{key:e,title:t.name},null,8,["title"])),[[a["O"],t.status>0]])})),128))]})),_:1},8,["modelValue","onChange"]),Object(a["j"])("div",u,[Object(a["S"])(Object(a["j"])(C,{description:"暂无项目"},null,512),[[a["O"],0==d.state.subCat.length]]),(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(d.state.subCat,(function(e,c){return Object(a["z"])(),Object(a["g"])("div",{class:"card",key:c,onClick:function(c){return t.$forward(n.action+"/"+e.id)}},[Object(a["j"])(O,{class:"image",src:e.icon||"//cdn.fuchijihua.com//assets/upload/1/20220304/image/1646391722.png",radius:5,width:"100%",fit:"contain","error-icon":"point-gift","icon-size":"48",onClick:function(n){return t.$forward(e.link)}},null,8,["src","onClick"]),Object(a["j"])("div",l,Object(a["L"])(e.name),1)],8,["onClick"])})),128))])],512),[[a["O"],"coupon"==n.action]])]),Object(a["j"])(y,{class:"bar",icon:"todo-list-o",style:Object(c["a"])({},"member"==n.action?"right":"left","20px"),onClick:e[4]||(e[4]=function(e){return t.$router.push("/digital/order?cid="+d.state.cid)})},null,8,["style"])]})),_:1},8,["title","bg"])})),d=n("2824"),j={components:{BaseLayout:d["a"]},name:"List",props:{action:{type:String,default:"member"}},data:function(){var t=Object(a["D"])({cid:0,category:{},topCat:[],subCat:[],bg:"#FFF",active1:0,active2:0});return{state:t}},activated:function(){!this.$store.state.keepAlive&&this.init()},beforeRouteLeave:function(t,e,n){this.$store.commit("setScrollTop",document.getElementById("container").scrollTop),n()},watch:{$route:function(t,e){t!=e&&setTimeout(this.init,100)}},methods:{init:function(){var t=this;this.state.bg="member"==this.action?"#EEE":"#FFF",this.$http.post("/digital/category?type="+this.action+"&deep=2").then((function(e){t.state.category=e[0],t.state.cid=e[0]["id"],t.state.topCat=e[0]["children"],t.handleChange(0)}))},handleTab:function(){var t=document.querySelector("#block"+this.state.active1).parentNode.parentNode;t.parentNode.insertBefore(t,t.parentNode.children[0])},handleChange:function(t){this.state.subCat=this.state.topCat[t]["children"]||[]}}},O=(n("58d4"),n("6b0d")),f=n.n(O);const v=f()(j,[["render",b],["__scopeId","data-v-ba7a7a30"]]);e["default"]=v}}]);