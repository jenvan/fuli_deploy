(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2668218b"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var a=n("6b75");function r(t,e){if(t){if("string"===typeof t)return Object(a["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a["a"])(t,e):void 0}}},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("6b75");function r(t){if(Array.isArray(t))return Object(a["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var c=n("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return r(t)||i(t)||Object(c["a"])(t)||o()}},"4d8b":function(t,e,n){"use strict";n.r(e);n("b0c0");var a=n("7a23"),r=Object(a["X"])("data-v-23a04943");Object(a["D"])("data-v-23a04943");var i={class:"title"},c=Object(a["j"])(" ~ "),o={style:{padding:"5px 16px"}},s=Object(a["j"])("确认");Object(a["B"])();var u=r((function(t,e,n,u,l,d){var f=Object(a["I"])("van-icon"),b=Object(a["I"])("van-col"),h=Object(a["I"])("van-search"),p=Object(a["I"])("van-row"),m=Object(a["I"])("van-image"),j=Object(a["I"])("van-dropdown-item"),O=Object(a["I"])("van-cell"),g=Object(a["I"])("van-switch"),k=Object(a["I"])("van-button"),y=Object(a["I"])("van-dropdown-menu"),v=Object(a["I"])("van-sticky"),w=Object(a["I"])("mall-item"),I=Object(a["I"])("van-empty"),C=Object(a["I"])("van-list"),A=Object(a["I"])("van-pull-refresh"),x=Object(a["I"])("van-sidebar-item"),_=Object(a["I"])("van-sidebar"),V=Object(a["I"])("van-popup"),U=Object(a["I"])("mall-item-chooser"),T=Object(a["I"])("BaseLayout");return Object(a["A"])(),Object(a["g"])(T,{navbar:"hide"},{default:r((function(){return[Object(a["k"])(v,{class:{notTop1:!l.isTop},onChange:e[8]||(e[8]=function(t){return l.isTop=!l.isTop}),"offset-top":0},{default:r((function(){return[Object(a["k"])(p,{class:"toolbar",gutter:"0",justify:"space-around",align:"center"},{default:r((function(){return[Object(a["k"])(b,{span:"2"},{default:r((function(){return[Object(a["k"])(f,{name:"arrow-left",color:"#000",size:"large",onClick:e[1]||(e[1]=function(e){return t.$router.back()})})]})),_:1}),Object(a["k"])(b,{span:"2"},{default:r((function(){return[Object(a["k"])(f,{name:"cluster-o",color:"#000",size:"large",style:{transform:"rotate(270deg)"},onClick:d.showCategory},null,8,["style","onClick"])]})),_:1}),Object(a["k"])(b,{span:"15"},{default:r((function(){return[Object(a["k"])(h,{modelValue:l.state.keyword,"onUpdate:modelValue":e[2]||(e[2]=function(t){return l.state.keyword=t}),placeholder:"请输入搜索关键词",background:"transparent","input-align":"left",onSearch:d.onSearch},null,8,["modelValue","onSearch"])]})),_:1}),Object(a["k"])(b,{span:"2"},{default:r((function(){return[Object(a["k"])(f,{name:t.showGrid?"bars":"apps-o",size:"large",onClick:t.toggleGrid},null,8,["name","onClick"])]})),_:1}),Object(a["k"])(b,{span:"2"},{default:r((function(){return[Object(a["k"])(f,{name:"cart-o",size:"large",class:l.state.animate,badge:d.cartNumber,onClick:e[3]||(e[3]=function(e){return t.$router.push("cart")})},null,8,["class","badge"])]})),_:1})]})),_:1}),Object(a["U"])(Object(a["k"])(m,{src:l.state.cover,width:"100%"},{default:r((function(){return[Object(a["k"])("div",i,Object(a["M"])(l.state.title),1)]})),_:1},8,["src"]),[[a["Q"],l.isTop&&l.state.cover]]),Object(a["k"])(y,null,{default:r((function(){return[Object(a["k"])(j,{modelValue:l.state.order,"onUpdate:modelValue":e[4]||(e[4]=function(t){return l.state.order=t}),options:l.options,onChange:d.refresh},null,8,["modelValue","options","onChange"]),Object(a["k"])(j,{title:"筛选",ref:"item"},{default:r((function(){return[Object(a["k"])(O,{center:"",title:"价格区间"},{default:r((function(){return[Object(a["U"])(Object(a["k"])("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.state.min=t}),style:{width:"60px"}},null,512),[[a["P"],l.state.min]]),c,Object(a["U"])(Object(a["k"])("input",{type:"number","onUpdate:modelValue":e[6]||(e[6]=function(t){return l.state.max=t}),style:{width:"60px"}},null,512),[[a["P"],l.state.max]])]})),_:1}),Object(a["k"])(O,{center:"",title:"推荐商品"},{"right-icon":r((function(){return[Object(a["k"])(g,{modelValue:l.state.recommend,"onUpdate:modelValue":e[7]||(e[7]=function(t){return l.state.recommend=t}),size:"24","active-color":"#ee0a24"},null,8,["modelValue"])]})),_:1}),Object(a["k"])("div",o,[Object(a["k"])(k,{type:"danger",block:"",round:"",onClick:d.refresh},{default:r((function(){return[s]})),_:1},8,["onClick"])])]})),_:1},512)]})),_:1})]})),_:1},8,["class"]),Object(a["k"])(A,{class:{notTop2:!l.isTop},modelValue:l.state.refreshing,"onUpdate:modelValue":e[10]||(e[10]=function(t){return l.state.refreshing=t}),"loading-text":" ",onRefresh:d.refresh},{default:r((function(){return[Object(a["k"])(C,{class:"list",loading:l.state.loading,"onUpdate:loading":e[9]||(e[9]=function(t){return l.state.loading=t}),finished:l.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:d.query},{default:r((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(l.state.list,(function(e,n){return Object(a["A"])(),Object(a["g"])(w,{grid:t.showGrid,item:e,key:n,onAdd:d.addCart},null,8,["grid","item","onAdd"])})),128)),Object(a["U"])(Object(a["k"])(I,{style:{width:"100%"}},null,512),[[a["Q"],0==l.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["class","modelValue","onRefresh"]),Object(a["k"])(V,{show:l.state.popup,"onUpdate:show":e[16]||(e[16]=function(t){return l.state.popup=t}),position:"left",style:{width:"80%",height:"100%",paddingTop:"5px"}},{default:r((function(){return[Object(a["k"])(O,{icon:"arrow-left"},{title:r((function(){return[Object(a["k"])("span",{onClick:e[11]||(e[11]=Object(a["W"])((function(e){return t.$router.push("category")}),["stop"]))},"返回商城")]})),extra:r((function(){return[Object(a["k"])("span",{onClick:e[12]||(e[12]=Object(a["W"])((function(t){return d.changeCategory()}),["stop"]))},"查看全部商品")]})),_:1}),Object(a["k"])(_,{class:"sidebar s1",modelValue:l.state.act1,"onUpdate:modelValue":e[13]||(e[13]=function(t){return l.state.act1=t})},{default:r((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(l.state.cat1,(function(t,e){return Object(a["U"])((Object(a["A"])(),Object(a["g"])(x,{key:e,title:t["name"],onClick:function(e){return d.changeCategory(t["id"])}},null,8,["title","onClick"])),[[a["Q"],t.status>0]])})),128))]})),_:1},8,["modelValue"]),Object(a["k"])(_,{class:"sidebar s2",modelValue:l.state.act2,"onUpdate:modelValue":e[14]||(e[14]=function(t){return l.state.act2=t})},{default:r((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(l.state.cat2,(function(t,e){return Object(a["U"])((Object(a["A"])(),Object(a["g"])(x,{key:e,title:t["name"],onClick:function(e){return d.changeCategory(t["id"])}},null,8,["title","onClick"])),[[a["Q"],t.status>0]])})),128))]})),_:1},8,["modelValue"]),Object(a["k"])(_,{class:"sidebar s3",modelValue:l.state.act3,"onUpdate:modelValue":e[15]||(e[15]=function(t){return l.state.act3=t})},{default:r((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(l.state.cat3,(function(t,e){return Object(a["U"])((Object(a["A"])(),Object(a["g"])(x,{key:e,title:t["name"],onClick:function(e){return d.changeCategory(t["id"])}},null,8,["title","onClick"])),[[a["Q"],t.status>0]])})),128))]})),_:1},8,["modelValue"])]})),_:1},8,["show"]),Object(a["k"])(U,{id:l.state.id,show:t.$store.state.showPopup,onSave:d.saveCart},null,8,["id","show","onSave"])]})),_:1})})),l=n("6519"),d=(n("99eb"),n("6b0d")),f=n.n(d);const b=f()(l["a"],[["render",u],["__scopeId","data-v-23a04943"]]);e["default"]=b},6519:function(t,e,n){"use strict";(function(t){var a=n("1da1"),r=n("2909"),i=n("5530"),c=(n("96cf"),n("a9e3"),n("b0c0"),n("c740"),n("ac1f"),n("5319"),n("7a23")),o=n("5502"),s=n("2824"),u=n("a284"),l=n("370e");e["a"]={components:{BaseLayout:s["a"],MallItem:u["a"],MallItemChooser:l["a"]},name:"List",props:{cid:{type:[String,Number],default:0},keyword:{type:String,default:""},recommend:{type:[String,Number],default:0}},data:function(){var t=Object(c["F"])(!0),e=[{text:"默认排序",value:0},{text:"销量",value:1},{text:"价格由低到高",value:2},{text:"价格由高到低",value:3}],n=Object(c["E"])({keyword:"",order:0,recommend:!1,min:"",max:"",offset:0,limit:10,refreshing:!1,loading:!1,finished:!1,list:[],title:"",cover:"",popup:!1,cat1:[],cat2:[],cat3:[],act1:-1,act2:-1,act3:-1,id:0});return{isTop:t,options:e,state:n}},activated:function(){!this.$store.state.keepAlive&&this.init()},beforeRouteLeave:function(t,e,n){this.$store.commit("setScrollTop",document.getElementById("container").scrollTop),n()},computed:Object(i["a"])({cartNumber:function(){return this.profile&&this.profile.cartNumber&&Array.isArray(this.profile.cartNumber)?this.profile.cartNumber[0]:""}},Object(o["d"])(["profile","showGrid"])),methods:Object(i["a"])({init:function(){this.state.keyword=this.keyword,this.state.order=0,this.state.recommend=parseInt(this.recommend)>0,this.state.min="",this.state.max="",this.refresh()},refresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.query()},query:function(){var t=this;this.$http.get("/mall/category?channel=mall&deep=2").then((function(e){t.state.cat1=e})),this.cid>0&&this.$http.get("/mall/category?channel=mall&id="+this.cid+"&deep=0").then((function(e){t.state.title=e[0]["name"],t.state.cover=e[0]["icon"]})),this.$http.get("/mall/itemlist?cid="+this.cid+"&keyword="+this.state.keyword+"&order="+this.state.order+"&recommend="+(this.state.recommend?1:0)+"&max="+this.state.max+"&min="+this.state.min+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){var n;t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,(n=t.state.list).push.apply(n,Object(r["a"])(e)),t.$share("自营商城_"+t.state.keyword)}))},onSearch:function(){this.$router.push("?keyword="+this.state.keyword),setTimeout(this.init,100)},showCategory:function(){var e=this;if(this.state.cat2=[],this.state.cat3=[],this.state.act1=-1,this.state.act2=-1,this.state.act3=-1,0==this.cid)return this.state.popup=!0;var n=t.findIndex(this.state.cat1,(function(n){if(n.id==e.cid)return e.state.cat2=n["children"],!0;var a=t.findIndex(n["children"],(function(a){if(a.id==e.cid)return e.state.cat2=n["children"],e.state.cat3=a["children"],!0;var r=t.findIndex(a["children"],(function(t){return t.id==e.cid&&(e.state.cat2=n["children"],e.state.cat3=a["children"],!0)}));return r>-1&&(e.state.act3=r,!0)}));return a>-1&&(e.state.act2=a,!0)}));n>-1&&(this.state.act1=n),this.state.popup=!0},changeCategory:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.state.popup=!1,e.$router.push("list"+(t?"?cid="+t:""));case 2:case"end":return n.stop()}}),n)})))()},addCart:function(t){if(t.discount&&new Date(t.discount.replace(/-/g,"/")).getTime()>(new Date).getTime())return this.$router.push("item?id="+t.id);this.state.id=t.id,this.togglePopup(!0)},saveCart:function(t){var e=this,n="{"==t.digital.substring(0,1)?1:0,a=n?2:1;this.$http.post("/mall/cartsave?spu="+t.id+"&sku="+t.sku+"&num="+t.num+"&status="+a).then((function(r){1==a?e.cartNumberAdd(t.num):e.$router.push("bill?direct=1&digital="+n)}))}},Object(o["c"])(["togglePopup","toggleTabbar","toggleGrid","cartNumberAdd"]))}}).call(this,n("81b0"))},"6b75":function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"a",(function(){return a}))},"903d":function(t,e,n){},"99eb":function(t,e,n){"use strict";n("903d")},a630:function(t,e,n){var a=n("23e7"),r=n("4df4"),i=n("1c7e"),c=!i((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:c},{from:r})},c740:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").findIndex,i=n("44d2"),c="findIndex",o=!0;c in[]&&Array(1)[c]((function(){o=!1})),a({target:"Array",proto:!0,forced:o},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},fb6a:function(t,e,n){"use strict";var a=n("23e7"),r=n("861d"),i=n("e8b5"),c=n("23cb"),o=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),f=d("slice"),b=l("species"),h=[].slice,p=Math.max;a({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,a,l,d=s(this),f=o(d.length),m=c(t,f),j=c(void 0===e?f:e,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(d,m,j);for(a=new(void 0===n?Array:n)(p(j-m,0)),l=0;m<j;m++,l++)m in d&&u(a,l,d[m]);return a.length=l,a}})}}]);