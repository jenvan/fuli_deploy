(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef952b04"],{"0286":function(t,e,n){"use strict";n("bfeb")},"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var a=n("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(a["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a["a"])(t,e):void 0}}},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("6b75");function i(t){if(Array.isArray(t))return Object(a["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var c=n("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return i(t)||r(t)||Object(c["a"])(t)||o()}},"370e":function(t,e,n){"use strict";n("b0c0");var a=n("7a23"),i=Object(a["X"])("data-v-0c36b9c4");Object(a["D"])("data-v-0c36b9c4");var r={class:"wrapper"},c=Object(a["j"])("确 定");Object(a["B"])();var o=i((function(t,e,n,o,s,u){var l=Object(a["I"])("mall-item"),d=Object(a["I"])("van-radio"),b=Object(a["I"])("van-radio-group"),f=Object(a["I"])("van-cell"),p=Object(a["I"])("van-stepper"),h=Object(a["I"])("van-button"),j=Object(a["I"])("van-overlay");return Object(a["A"])(),Object(a["g"])(j,{show:n.show,onClick:t.togglePopup},{default:i((function(){return[Object(a["k"])("div",r,[Object(a["k"])("div",{class:"panel animate__animated animate__fadeInUpBig",onClick:e[2]||(e[2]=Object(a["W"])((function(){}),["stop"]))},[Object(a["k"])(l,{grid:!1,item:s.state.detail,cart:!1,sales:!1,class:"van-hairline--bottom",style:{paddingBottom:"10px"}},null,8,["item"]),(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(s.state.detail.spec,(function(t,e){return Object(a["U"])((Object(a["A"])(),Object(a["g"])(f,{key:e,title:t.name,border:!1},{label:i((function(){return[Object(a["k"])(b,{modelValue:s.state.options[t.id],"onUpdate:modelValue":function(e){return s.state.options[t.id]=e},direction:"horizontal","checked-color":"#ee0a24",onChange:u.choose},{default:i((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(t.spec,(function(e,n){return Object(a["A"])(),Object(a["g"])(d,{class:["radio",{active:s.state.options[t.id]==n}],key:n,name:n},{icon:i((function(){return[]})),default:i((function(){return[Object(a["j"])(Object(a["M"])(e),1)]})),_:2},1032,["name","class"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:2},1032,["title"])),[[a["Q"],u.hasSpec]])})),128)),Object(a["k"])(f,{title:"数量",class:"number",border:!1},{default:i((function(){return[Object(a["k"])(p,{modelValue:s.state.num,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.state.num=t}),theme:"round","button-size":"22",min:1,max:s.state.detail.stock},null,8,["modelValue","max"])]})),_:1}),Object(a["k"])(h,{type:"danger",round:"",block:"",disabled:s.state.disabled,onClick:u.save},{default:i((function(){return[c]})),_:1},8,["disabled","onClick"])])])]})),_:1},8,["show","onClick"])})),s=n("8d6d"),u=(n("6db7"),n("6b0d")),l=n.n(u);const d=l()(s["a"],[["render",o],["__scopeId","data-v-0c36b9c4"]]);e["a"]=d},"3bdb":function(t,e,n){},"4d8b":function(t,e,n){"use strict";n.r(e);n("b0c0");var a=n("7a23"),i=Object(a["X"])("data-v-7a415048");Object(a["D"])("data-v-7a415048");var r={class:"title"},c=Object(a["j"])(" ~ "),o={style:{padding:"5px 16px"}},s=Object(a["j"])("确认");Object(a["B"])();var u=i((function(t,e,n,u,l,d){var b=Object(a["I"])("van-icon"),f=Object(a["I"])("van-col"),p=Object(a["I"])("van-search"),h=Object(a["I"])("van-row"),j=Object(a["I"])("van-image"),m=Object(a["I"])("van-dropdown-item"),O=Object(a["I"])("van-cell"),g=Object(a["I"])("van-switch"),v=Object(a["I"])("van-button"),k=Object(a["I"])("van-dropdown-menu"),y=Object(a["I"])("van-sticky"),I=Object(a["I"])("mall-item"),w=Object(a["I"])("van-empty"),_=Object(a["I"])("van-list"),A=Object(a["I"])("van-pull-refresh"),x=Object(a["I"])("van-sidebar-item"),C=Object(a["I"])("van-sidebar"),V=Object(a["I"])("van-popup"),N=Object(a["I"])("mall-item-chooser"),S=Object(a["I"])("BaseLayout");return Object(a["A"])(),Object(a["g"])(S,{navbar:"hide"},{default:i((function(){return[Object(a["k"])(y,{class:{notTop1:!l.isTop},onChange:e[8]||(e[8]=function(t){return l.isTop=!l.isTop}),"offset-top":0},{default:i((function(){return[Object(a["k"])(h,{class:"toolbar",gutter:"0",justify:"space-around",align:"center"},{default:i((function(){return[Object(a["k"])(f,{span:"2"},{default:i((function(){return[Object(a["k"])(b,{name:"arrow-left",color:"#000",size:"large",onClick:e[1]||(e[1]=function(e){return t.$router.back()})})]})),_:1}),Object(a["k"])(f,{span:"2"},{default:i((function(){return[Object(a["k"])(b,{name:"cluster-o",color:"#000",size:"large",style:{transform:"rotate(270deg)"},onClick:d.showCategory},null,8,["style","onClick"])]})),_:1}),Object(a["k"])(f,{span:"15"},{default:i((function(){return[Object(a["k"])(p,{modelValue:l.state.keyword,"onUpdate:modelValue":e[2]||(e[2]=function(t){return l.state.keyword=t}),placeholder:"请输入搜索关键词",background:"transparent","input-align":"left",onSearch:d.onSearch},null,8,["modelValue","onSearch"])]})),_:1}),Object(a["k"])(f,{span:"2"},{default:i((function(){return[Object(a["k"])(b,{name:t.showGrid?"bars":"apps-o",size:"large",onClick:t.toggleGrid},null,8,["name","onClick"])]})),_:1}),Object(a["k"])(f,{span:"2"},{default:i((function(){return[Object(a["k"])(b,{name:"cart-o",size:"large",class:l.state.animate,badge:d.cartNumber,onClick:e[3]||(e[3]=function(e){return t.$router.push("cart")})},null,8,["class","badge"])]})),_:1})]})),_:1}),Object(a["U"])(Object(a["k"])(j,{src:l.state.cover,width:"100%"},{default:i((function(){return[Object(a["k"])("div",r,Object(a["M"])(l.state.title),1)]})),_:1},8,["src"]),[[a["Q"],l.isTop&&l.state.cover]]),Object(a["k"])(k,null,{default:i((function(){return[Object(a["k"])(m,{modelValue:l.state.order,"onUpdate:modelValue":e[4]||(e[4]=function(t){return l.state.order=t}),options:l.options,onChange:d.refresh},null,8,["modelValue","options","onChange"]),Object(a["k"])(m,{title:"筛选",ref:"item"},{default:i((function(){return[Object(a["k"])(O,{center:"",title:"价格区间"},{default:i((function(){return[Object(a["U"])(Object(a["k"])("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.state.min=t}),style:{width:"60px"}},null,512),[[a["P"],l.state.min]]),c,Object(a["U"])(Object(a["k"])("input",{type:"number","onUpdate:modelValue":e[6]||(e[6]=function(t){return l.state.max=t}),style:{width:"60px"}},null,512),[[a["P"],l.state.max]])]})),_:1}),Object(a["k"])(O,{center:"",title:"推荐商品"},{"right-icon":i((function(){return[Object(a["k"])(g,{modelValue:l.state.recommend,"onUpdate:modelValue":e[7]||(e[7]=function(t){return l.state.recommend=t}),size:"24","active-color":"#ee0a24"},null,8,["modelValue"])]})),_:1}),Object(a["k"])("div",o,[Object(a["k"])(v,{type:"danger",block:"",round:"",onClick:d.refresh},{default:i((function(){return[s]})),_:1},8,["onClick"])])]})),_:1},512)]})),_:1})]})),_:1},8,["class"]),Object(a["k"])(A,{class:{notTop2:!l.isTop},modelValue:l.state.refreshing,"onUpdate:modelValue":e[10]||(e[10]=function(t){return l.state.refreshing=t}),"loading-text":" ",onRefresh:d.refresh},{default:i((function(){return[Object(a["k"])(_,{class:"list",loading:l.state.loading,"onUpdate:loading":e[9]||(e[9]=function(t){return l.state.loading=t}),finished:l.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:d.query},{default:i((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(l.state.list,(function(e,n){return Object(a["A"])(),Object(a["g"])(I,{grid:t.showGrid,item:e,key:n,onAdd:d.addCart},null,8,["grid","item","onAdd"])})),128)),Object(a["U"])(Object(a["k"])(w,{style:{width:"100%"}},null,512),[[a["Q"],0==l.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["class","modelValue","onRefresh"]),Object(a["k"])(V,{show:l.state.popup,"onUpdate:show":e[16]||(e[16]=function(t){return l.state.popup=t}),position:"left",style:{width:"80%",height:"100%",paddingTop:"5px"}},{default:i((function(){return[Object(a["k"])(O,{icon:"arrow-left"},{title:i((function(){return[Object(a["k"])("span",{onClick:e[11]||(e[11]=Object(a["W"])((function(e){return t.$router.push("category")}),["stop"]))},"返回商城")]})),extra:i((function(){return[Object(a["k"])("span",{onClick:e[12]||(e[12]=Object(a["W"])((function(t){return d.changeCategory()}),["stop"]))},"查看全部商品")]})),_:1}),Object(a["k"])(C,{class:"sidebar s1",modelValue:l.state.act1,"onUpdate:modelValue":e[13]||(e[13]=function(t){return l.state.act1=t})},{default:i((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(l.state.cat1,(function(t,e){return Object(a["A"])(),Object(a["g"])(x,{key:e,title:t["name"],onClick:function(e){return d.changeCategory(t["id"])}},null,8,["title","onClick"])})),128))]})),_:1},8,["modelValue"]),Object(a["k"])(C,{class:"sidebar s2",modelValue:l.state.act2,"onUpdate:modelValue":e[14]||(e[14]=function(t){return l.state.act2=t})},{default:i((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(l.state.cat2,(function(t,e){return Object(a["A"])(),Object(a["g"])(x,{key:e,title:t["name"],onClick:function(e){return d.changeCategory(t["id"])}},null,8,["title","onClick"])})),128))]})),_:1},8,["modelValue"]),Object(a["k"])(C,{class:"sidebar s3",modelValue:l.state.act3,"onUpdate:modelValue":e[15]||(e[15]=function(t){return l.state.act3=t})},{default:i((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(l.state.cat3,(function(t,e){return Object(a["A"])(),Object(a["g"])(x,{key:e,title:t["name"],onClick:function(e){return d.changeCategory(t["id"])}},null,8,["title","onClick"])})),128))]})),_:1},8,["modelValue"])]})),_:1},8,["show"]),Object(a["k"])(N,{id:l.state.id,show:t.$store.state.showPopup,onSave:d.saveCart},null,8,["id","show","onSave"])]})),_:1})})),l=n("6519"),d=(n("ec34"),n("6b0d")),b=n.n(d);const f=b()(l["a"],[["render",u],["__scopeId","data-v-7a415048"]]);e["default"]=f},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),i=n("5899"),r="["+i+"]",c=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),s=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},6519:function(t,e,n){"use strict";(function(t){var a=n("1da1"),i=n("2909"),r=n("5530"),c=(n("96cf"),n("a9e3"),n("b0c0"),n("c740"),n("7a23")),o=n("5502"),s=n("2824"),u=n("a284"),l=n("370e");e["a"]={components:{BaseLayout:s["a"],MallItem:u["a"],MallItemChooser:l["a"]},name:"List",props:{cid:{type:[String,Number],default:0},keyword:{type:String,default:""},recommend:{type:[String,Number],default:0}},data:function(){var t=Object(c["F"])(!0),e=[{text:"默认排序",value:0},{text:"销量",value:1},{text:"价格由低到高",value:2},{text:"价格由高到低",value:3}],n=Object(c["E"])({keyword:"",order:0,recommend:!1,min:"",max:"",offset:0,limit:10,refreshing:!1,loading:!1,finished:!1,list:[],title:"",cover:"",popup:!1,cat1:[],cat2:[],cat3:[],act1:-1,act2:-1,act3:-1,id:0});return{isTop:t,options:e,state:n}},activated:function(){!this.$store.state.keepAlive&&this.init()},beforeRouteLeave:function(t,e,n){this.$store.commit("setScrollTop",document.getElementById("container").scrollTop),n()},computed:Object(r["a"])({cartNumber:function(){return this.profile&&this.profile.cartNumber&&Array.isArray(this.profile.cartNumber)?this.profile.cartNumber[0]:""}},Object(o["d"])(["profile","showGrid"])),watch:{$route:function(t,e){t.path==e.path&&t.query!=e.query&&setTimeout(this.init,100)}},methods:Object(r["a"])({init:function(){this.state.keyword=this.keyword,this.state.order=0,this.state.recommend=parseInt(this.recommend)>0,this.state.min="",this.state.max="",this.refresh()},refresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.query()},query:function(){var t=this;this.$http.get("/mall/category?channel=mall&deep=2").then((function(e){t.state.cat1=e})),this.cid>0&&this.$http.get("/mall/category?channel=mall&id="+this.cid+"&deep=0").then((function(e){t.state.title=e[0]["name"],t.state.cover=e[0]["icon"]})),this.$http.get("/mall/itemlist?cid="+this.cid+"&keyword="+this.state.keyword+"&order="+this.state.order+"&recommend="+(this.state.recommend?1:0)+"&max="+this.state.max+"&min="+this.state.min+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){var n;t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,(n=t.state.list).push.apply(n,Object(i["a"])(e))}))},onSearch:function(){this.$router.push("?keyword="+this.state.keyword)},showCategory:function(){var e=this;if(this.state.cat2=[],this.state.cat3=[],this.state.act1=-1,this.state.act2=-1,this.state.act3=-1,0==this.cid)return this.state.popup=!0;var n=t.findIndex(this.state.cat1,(function(n){if(n.id==e.cid)return e.state.cat2=n["children"],!0;var a=t.findIndex(n["children"],(function(a){if(a.id==e.cid)return e.state.cat2=n["children"],e.state.cat3=a["children"],!0;var i=t.findIndex(a["children"],(function(t){return t.id==e.cid&&(e.state.cat2=n["children"],e.state.cat3=a["children"],!0)}));return i>-1&&(e.state.act3=i,!0)}));return a>-1&&(e.state.act2=a,!0)}));n>-1&&(this.state.act1=n),this.state.popup=!0},changeCategory:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.state.popup=!1,e.$router.push("list"+(t?"?cid="+t:""));case 2:case"end":return n.stop()}}),n)})))()},addCart:function(t){this.state.id=t.id,this.togglePopup(!0)},saveCart:function(t){var e=this,n="{"==t.digital.substring(0,1)?1:0,a=n?2:1;this.$http.post("/mall/cartsave?spu="+t.id+"&sku="+t.sku+"&num="+t.num+"&status="+a).then((function(i){1==a?e.cartNumberAdd(t.num):e.$router.push("bill?direct=1&digital="+n)}))}},Object(o["c"])(["togglePopup","toggleTabbar","toggleGrid","cartNumberAdd"]))}}).call(this,n("81b0"))},"6b75":function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"a",(function(){return a}))},"6db7":function(t,e,n){"use strict";n("a5a4")},7156:function(t,e,n){var a=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var r,c;return i&&"function"==typeof(r=e.constructor)&&r!==n&&a(c=r.prototype)&&c!==n.prototype&&i(t,c),t}},"8d6d":function(t,e,n){"use strict";(function(t){var a=n("5530"),i=n("53ca"),r=(n("a9e3"),n("a15b"),n("ac1f"),n("1276"),n("b0c0"),n("7a23")),c=n("5502"),o=n("a284");e["a"]={components:{MallItem:o["a"]},props:{id:{type:[Number,String],default:0},show:{type:Boolean,default:!1}},data:function(){var t=Object(r["E"])({detail:{},id:0,num:1,sku:0,spec:"",options:{},disabled:!0,tabbarStatus:!0});return{state:t}},computed:{hasSpec:function(){return"object"==Object(i["a"])(this.state.detail.spec)&&!t.isEmpty(this.state.detail.spec)&&"object"==Object(i["a"])(this.state.detail.sku)}},watch:{show:function(t,e){t&&(this.id>0&&this.query(),this.state.tabbarStatus=this.$store.state.showTabbar),this.toggleTabbar(!t&&this.state.tabbarStatus)}},methods:Object(a["a"])({query:function(){var t=this;this.$http.get("/mall/itemdetail?id="+this.id).then((function(e){t.state.detail=e,t.state.disabled=t.hasSpec,t.id==t.state.id?t.hasSpec&&t.choose():(t.state.num=1,t.state.sku=0,t.state.spec="",t.state.options={})}))},choose:function(){var e=t.toArray(this.state.options).sort().join(","),n=0,a=0;for(var i in this.state.detail.sku){var r=this.state.detail.sku[i];if(e==r.spec.split(",").sort().join(",")){this.state.sku=r.id,n=r.stock,a=r.price;break}}this.state.disabled=0==n,this.state.detail.stock=n,this.state.detail.price=a},save:function(){var t=[];for(var e in this.state.options)for(var n in this.state.detail.spec)e==this.state.detail.spec[n].id&&t.push(this.state.detail.spec[n].name+"："+this.state.detail.spec[n].spec[this.state.options[e]]);this.state.id=this.id,this.$emit("save",{id:this.state.id,num:this.state.num,sku:this.state.sku,spec:t,digital:this.state.detail.digital}),this.togglePopup(!1)}},Object(c["c"])(["togglePopup","toggleTabbar"]))}}).call(this,n("81b0"))},a15b:function(t,e,n){"use strict";var a=n("23e7"),i=n("44ad"),r=n("fc6a"),c=n("a640"),o=[].join,s=i!=Object,u=c("join",",");a({target:"Array",proto:!0,forced:s||!u},{join:function(t){return o.call(r(this),void 0===t?",":t)}})},a284:function(t,e,n){"use strict";var a=n("7a23"),i=Object(a["X"])("data-v-b6dac06c");Object(a["D"])("data-v-b6dac06c");var r={class:"price1"},c=Object(a["j"])("   "),o={class:"stock"},s=Object(a["j"])("库存 "),u={class:"red"},l=Object(a["j"])(" 件  "),d={class:"sales"},b=Object(a["j"])("月销 "),f={class:"red"},p=Object(a["j"])(" 件");Object(a["B"])();var h=i((function(t,e,n,h,j,m){var O=Object(a["I"])("van-image"),g=Object(a["I"])("van-col"),v=Object(a["I"])("van-cell"),k=Object(a["I"])("van-icon"),y=Object(a["I"])("van-row");return Object(a["A"])(),Object(a["g"])(y,{class:["item",{grid:m.isGrid}],style:{width:m.width,height:m.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return m.forward(n.item)})},{default:i((function(){return[Object(a["k"])(g,{class:"image",span:m.isGrid?24:8},{default:i((function(){return[Object(a["k"])(O,{width:"100%",height:"100%",radius:"5",fit:m.isGrid?"contain":"cover",src:n.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(a["k"])(g,{class:"intro",span:m.isGrid?24:16},{default:i((function(){return[Object(a["k"])(v,{style:{padding:"5px 5px 0 5px"},border:!1},{title:i((function(){return[Object(a["k"])("div",{class:m.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(a["M"])(n.item.title),3)]})),label:i((function(){return[Object(a["U"])(Object(a["k"])("div",{class:"van-ellipsis"},Object(a["M"])(n.item.feature),513),[[a["Q"],n.list>=100]])]})),_:1}),Object(a["k"])(v,{style:{padding:"0 10px 5px 10px"},border:!1,center:!m.isGrid},{title:i((function(){return[Object(a["k"])("span",r,[Object(a["k"])(k,{name:"points",color:"red"}),Object(a["j"])(" "+Object(a["M"])(n.item.price),1)]),c,Object(a["U"])(Object(a["k"])("span",{class:"price2"}," ￥ "+Object(a["M"])(n.item.price_original),513),[[a["Q"],!m.isGrid&&n.item.price_original&&n.item.price_original>0]])]})),label:i((function(){return[Object(a["U"])(Object(a["k"])("span",o,[s,Object(a["k"])("span",u,Object(a["M"])(n.item.stock),1),l],512),[[a["Q"],!m.isGrid&&n.stock&&n.item.stock]]),Object(a["U"])(Object(a["k"])("span",d,[b,Object(a["k"])("span",f,Object(a["M"])(n.item.sales),1),p],512),[[a["Q"],!m.isGrid&&n.sales&&n.item.sales]])]})),"right-icon":i((function(){return[Object(a["U"])(Object(a["k"])(k,{name:"shopping-cart",size:"21",color:"#F66",onClick:e[1]||(e[1]=Object(a["W"])((function(e){return t.$emit("add",n.item)}),["stop"]))},null,512),[[a["Q"],n.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),j=n("5530"),m=(n("a9e3"),n("5502")),O={props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(j["a"])({isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},Object(m["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var n="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+n)}}},g=(n("0286"),n("6b0d")),v=n.n(g);const k=v()(O,[["render",h],["__scopeId","data-v-b6dac06c"]]);e["a"]=k},a5a4:function(t,e,n){},a630:function(t,e,n){var a=n("23e7"),i=n("4df4"),r=n("1c7e"),c=!r((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:c},{from:i})},a9e3:function(t,e,n){"use strict";var a=n("83ab"),i=n("da84"),r=n("94ca"),c=n("6eeb"),o=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),b=n("7c73"),f=n("241c").f,p=n("06cf").f,h=n("9bf2").f,j=n("58a8").trim,m="Number",O=i[m],g=O.prototype,v=s(b(g))==m,k=function(t){var e,n,a,i,r,c,o,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=j(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+u}for(r=u.slice(2),c=r.length,o=0;o<c;o++)if(s=r.charCodeAt(o),s<48||s>i)return NaN;return parseInt(r,a)}return+u};if(r(m,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var y,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(v?d((function(){g.valueOf.call(n)})):s(n)!=m)?u(new O(k(e)),n,I):k(e)},w=a?f(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;w.length>_;_++)o(O,y=w[_])&&!o(I,y)&&h(I,y,p(O,y));I.prototype=g,g.constructor=I,c(i,m,I)}},bfeb:function(t,e,n){},c740:function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").findIndex,r=n("44d2"),c="findIndex",o=!0;c in[]&&Array(1)[c]((function(){o=!1})),a({target:"Array",proto:!0,forced:o},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},ec34:function(t,e,n){"use strict";n("3bdb")},fb6a:function(t,e,n){"use strict";var a=n("23e7"),i=n("861d"),r=n("e8b5"),c=n("23cb"),o=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),b=d("slice"),f=l("species"),p=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!b},{slice:function(t,e){var n,a,l,d=s(this),b=o(d.length),j=c(t,b),m=c(void 0===e?b:e,b);if(r(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[f],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(d,j,m);for(a=new(void 0===n?Array:n)(h(m-j,0)),l=0;j<m;j++,l++)j in d&&u(a,l,d[j]);return a.length=l,a}})}}]);