(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64c0d6c3"],{"1bb9":function(t,e,n){},2824:function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["S"])("data-v-0f731847");Object(c["B"])("data-v-0f731847");var i={class:"container"},o={class:"subtitle"},r={class:"extra"};Object(c["z"])();var s=a((function(t,e,n,s,u,b){var l=Object(c["G"])("van-icon"),d=Object(c["G"])("van-nav-bar"),j=Object(c["G"])("van-sticky"),f=Object(c["G"])("van-col"),O=Object(c["G"])("van-row");return Object(c["y"])(),Object(c["g"])("div",i,[Object(c["Q"])(Object(c["j"])(j,{onChange:e[2]||(e[2]=function(t){return s.state.isTop=!s.state.isTop})},{default:a((function(){return[Object(c["j"])(d,{class:["navbar",{notTop:!s.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:b.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:a((function(){return[Object(c["Q"])(Object(c["j"])("div",null,[Object(c["F"])(t.$slots,"back",{},(function(){return[Object(c["j"])(l,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[c["N"],!n.noback]])]})),title:a((function(){return[Object(c["j"])("div",{style:{width:"100%",color:s.state.isTop?n.fg:"inherit"}},Object(c["K"])(s.state.isTop&&"0"!=n.height?"":n.title),5)]})),right:a((function(){return[Object(c["F"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[c["N"],"hide"!=n.navbar]]),Object(c["j"])("div",{class:["page",{notTop:!s.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(c["j"])(c["d"],{name:"van-slide-down"},{default:a((function(){return[Object(c["Q"])(Object(c["j"])(O,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(c["j"])(f,{span:"16"},{default:a((function(){return[Object(c["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(c["F"])(t.$slots,"title",{},(function(){return[Object(c["i"])(Object(c["K"])(n.title),1)]}),{},!0),Object(c["j"])("div",o,Object(c["K"])(n.subtitle),1)],4)]})),_:3}),Object(c["j"])(f,{span:"8"},{default:a((function(){return[Object(c["j"])("div",r,[Object(c["F"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[c["N"],s.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(c["F"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(c["C"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},b=(n("c4d5"),n("6b0d")),l=n.n(b);const d=l()(u,[["render",s],["__scopeId","data-v-0f731847"]]);e["a"]=d},"58d4":function(t,e,n){"use strict";n("1bb9")},"857a":function(t,e,n){var c=n("1d80"),a=/"/g;t.exports=function(t,e,n,i){var o=String(c(t)),r="<"+e;return""!==n&&(r+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),r+">"+o+"</"+e+">"}},9911:function(t,e,n){"use strict";var c=n("23e7"),a=n("857a"),i=n("af03");c({target:"String",proto:!0,forced:i("link")},{link:function(t){return a(this,"a","href",t)}})},af03:function(t,e,n){var c=n("d039");t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b498:function(t,e,n){"use strict";n.r(e);var c=n("ade3"),a=(n("b0c0"),n("9911"),n("7a23")),i=Object(a["S"])("data-v-ba7a7a30");Object(a["B"])("data-v-ba7a7a30");var o={class:"box"},r={class:"member"},s={class:"coupon"},u={class:"panel"},b={class:"name"};Object(a["z"])();var l=i((function(t,e,n,l,d,j){var f=Object(a["G"])("van-image"),O=Object(a["G"])("van-cell"),v=Object(a["G"])("van-grid-item"),h=Object(a["G"])("van-grid"),g=Object(a["G"])("van-tab"),p=Object(a["G"])("van-tabs"),m=Object(a["G"])("van-sidebar-item"),k=Object(a["G"])("van-sidebar"),y=Object(a["G"])("van-empty"),C=Object(a["G"])("van-button"),w=Object(a["G"])("BaseLayout");return Object(a["y"])(),Object(a["g"])(w,{title:d.state.category.name,bg:d.state.bg,navbar:"auto"},{default:i((function(){return[Object(a["j"])("div",o,[Object(a["j"])(f,{class:"banner",src:d.state.category.icon,radius:5,width:"100%",fit:"contain",onClick:e[1]||(e[1]=function(e){return t.$forward(d.state.category.link)})},null,8,["src"]),Object(a["Q"])(Object(a["j"])("div",r,[Object(a["j"])(p,{ref:"tabs",active:d.state.active1,"onUpdate:active":e[2]||(e[2]=function(t){return d.state.active1=t}),scrollspy:"",onChange:j.handleTab},{default:i((function(){return[(Object(a["y"])(!0),Object(a["g"])(a["a"],null,Object(a["E"])(d.state.topCat,(function(e,c){return Object(a["y"])(),Object(a["g"])("div",{key:c},[e.children.length>0?(Object(a["y"])(),Object(a["g"])(g,{key:0,name:e.id,title:e.name},{default:i((function(){return[Object(a["j"])("div",{id:"block"+e.id,class:"block"},[Object(a["j"])(O,{class:"title",title:e.name,border:!1,"is-link":"",onClick:function(c){return t.$forward(n.action+"/"+e.id)}},null,8,["title","onClick"]),Object(a["j"])(h,{"column-num":"4",border:!1,"icon-size":"42",square:"",center:""},{default:i((function(){return[(Object(a["y"])(!0),Object(a["g"])(a["a"],null,Object(a["E"])(e.children,(function(e,c){return Object(a["y"])(),Object(a["g"])(v,{key:c,icon:e.icon,text:e.name,onClick:function(c){return t.$forward(n.action+"/"+e.id)}},null,8,["icon","text","onClick"])})),128))]})),_:2},1024)],8,["id"])]})),_:2},1032,["name","title"])):Object(a["h"])("",!0)])})),128))]})),_:1},8,["active","onChange"])],512),[[a["N"],"member"==n.action]]),Object(a["Q"])(Object(a["j"])("div",s,[Object(a["j"])(k,{class:"sidebar",modelValue:d.state.active2,"onUpdate:modelValue":e[3]||(e[3]=function(t){return d.state.active2=t}),onChange:j.handleChange},{default:i((function(){return[(Object(a["y"])(!0),Object(a["g"])(a["a"],null,Object(a["E"])(d.state.topCat,(function(t,e){return Object(a["Q"])((Object(a["y"])(),Object(a["g"])(m,{key:e,title:t.name},null,8,["title"])),[[a["N"],t.status>0]])})),128))]})),_:1},8,["modelValue","onChange"]),Object(a["j"])("div",u,[Object(a["Q"])(Object(a["j"])(y,{description:"暂无项目"},null,512),[[a["N"],0==d.state.subCat.length]]),(Object(a["y"])(!0),Object(a["g"])(a["a"],null,Object(a["E"])(d.state.subCat,(function(e,c){return Object(a["y"])(),Object(a["g"])("div",{class:"card",key:c,onClick:function(c){return t.$forward(n.action+"/"+e.id)}},[Object(a["j"])(f,{class:"image",src:e.icon||"//cdn.fuchijihua.com//assets/upload/1/20220304/image/1646391722.png",radius:5,width:"100%",fit:"contain","error-icon":"point-gift","icon-size":"48",onClick:function(n){return t.$forward(e.link)}},null,8,["src","onClick"]),Object(a["j"])("div",b,Object(a["K"])(e.name),1)],8,["onClick"])})),128))])],512),[[a["N"],"coupon"==n.action]])]),Object(a["j"])(C,{class:"bar",icon:"todo-list-o",style:Object(c["a"])({},"member"==n.action?"right":"left","20px"),onClick:e[4]||(e[4]=function(e){return t.$router.push("/digital/order?cid="+d.state.cid)})},null,8,["style"])]})),_:1},8,["title","bg"])})),d=n("2824"),j={components:{BaseLayout:d["a"]},name:"List",props:{action:{type:String,default:"member"}},data:function(){var t=Object(a["C"])({cid:0,category:{},topCat:[],subCat:[],bg:"#FFF",active1:0,active2:0});return{state:t}},activated:function(){!this.$store.state.keepAlive&&this.init()},beforeRouteLeave:function(t,e,n){this.$store.commit("setScrollTop",document.getElementById("container").scrollTop),n()},watch:{$route:function(t,e){t!=e&&setTimeout(this.init,100)}},methods:{init:function(){var t=this;this.state.bg="member"==this.action?"#EEE":"#FFF",this.$http.post("/digital/category?type="+this.action+"&deep=2").then((function(e){t.state.category=e[0],t.state.cid=e[0]["id"],t.state.topCat=e[0]["children"],t.handleChange(0)}))},handleTab:function(){var t=document.querySelector("#block"+this.state.active1).parentNode.parentNode;t.parentNode.insertBefore(t,t.parentNode.children[0])},handleChange:function(t){this.state.subCat=this.state.topCat[t]["children"]||[]}}},f=(n("58d4"),n("6b0d")),O=n.n(f);const v=O()(j,[["render",l],["__scopeId","data-v-ba7a7a30"]]);e["default"]=v},c4d5:function(t,e,n){"use strict";n("e5b4")},e5b4:function(t,e,n){}}]);