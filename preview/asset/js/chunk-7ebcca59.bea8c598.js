(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ebcca59"],{"1c7b":function(t,e,a){},2324:function(t,e,a){"use strict";a("4a39")},"370e":function(t,e,a){"use strict";a("b0c0");var i=a("7a23"),n=Object(i["R"])("data-v-71190905");Object(i["A"])("data-v-71190905");var r={class:"wrapper"},s=Object(i["h"])("确 定");Object(i["y"])();var c=n((function(t,e,a,c,o,l){var u=Object(i["F"])("mall-item"),d=Object(i["F"])("van-radio"),f=Object(i["F"])("van-radio-group"),p=Object(i["F"])("van-cell"),b=Object(i["F"])("van-stepper"),h=Object(i["F"])("van-button"),j=Object(i["F"])("van-overlay");return Object(i["x"])(),Object(i["f"])(j,{show:a.show,onClick:t.togglePopup},{default:n((function(){return[Object(i["i"])("div",r,[Object(i["i"])("div",{class:"panel animate__animated animate__fadeInUpBig",onClick:e[2]||(e[2]=Object(i["Q"])((function(){}),["stop"]))},[Object(i["i"])(u,{grid:!1,item:o.state.detail,cart:!1,sales:!1,class:"van-hairline--bottom",style:{paddingBottom:"10px"}},null,8,["item"]),(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(o.state.detail.spec,(function(t,e){return Object(i["P"])((Object(i["x"])(),Object(i["f"])(p,{key:e,title:t.name,border:!1},{label:n((function(){return[Object(i["i"])(f,{modelValue:o.state.options[t.id],"onUpdate:modelValue":function(e){return o.state.options[t.id]=e},direction:"horizontal","checked-color":"#ee0a24",onChange:l.choose},{default:n((function(){return[(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(t.spec,(function(e,a){return Object(i["x"])(),Object(i["f"])(d,{class:["radio",{active:o.state.options[t.id]==a}],key:a,name:a},{icon:n((function(){return[]})),default:n((function(){return[Object(i["h"])(Object(i["J"])(e),1)]})),_:2},1032,["name","class"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:2},1032,["title"])),[[i["M"],l.hasSpec]])})),128)),Object(i["i"])(p,{title:"数量",class:"number",border:!1},{default:n((function(){return[Object(i["i"])(b,{modelValue:o.state.num,"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.state.num=t}),theme:"round","button-size":"22",min:1,max:o.state.detail.stock},null,8,["modelValue","max"])]})),_:1}),Object(i["i"])(h,{type:"danger",round:"",block:"",disabled:o.state.disabled,onClick:l.save},{default:n((function(){return[s]})),_:1},8,["disabled","onClick"])])])]})),_:1},8,["show","onClick"])})),o=a("ac33"),l=(a("2324"),a("d959")),u=a.n(l);const d=u()(o["a"],[["render",c],["__scopeId","data-v-71190905"]]);e["a"]=d},"4a39":function(t,e,a){},"4d8b":function(t,e,a){"use strict";a.r(e);var i=a("7a23"),n=Object(i["R"])("data-v-1ef455d6");Object(i["A"])("data-v-1ef455d6");var r=Object(i["h"])(" ~ "),s={style:{padding:"5px 16px"}},c=Object(i["h"])("确认");Object(i["y"])();var o=n((function(t,e,a,o,l,u){var d=Object(i["F"])("van-icon"),f=Object(i["F"])("van-col"),p=Object(i["F"])("van-search"),b=Object(i["F"])("van-row"),h=Object(i["F"])("van-dropdown-item"),j=Object(i["F"])("van-cell"),m=Object(i["F"])("van-switch"),O=Object(i["F"])("van-button"),g=Object(i["F"])("van-dropdown-menu"),v=Object(i["F"])("van-sticky"),y=Object(i["F"])("mall-item"),k=Object(i["F"])("van-empty"),w=Object(i["F"])("van-list"),x=Object(i["F"])("van-pull-refresh"),_=Object(i["F"])("van-tree-select"),C=Object(i["F"])("van-popup"),F=Object(i["F"])("mall-item-chooser"),I=Object(i["F"])("BaseLayout");return Object(i["x"])(),Object(i["f"])(I,{nonavbar:""},{default:n((function(){return[Object(i["i"])(v,{"offset-top":0},{default:n((function(){return[Object(i["i"])(b,{class:"toolbar",gutter:"0",justify:"space-around",align:"center"},{default:n((function(){return[Object(i["i"])(f,{span:"2"},{default:n((function(){return[Object(i["i"])(d,{name:"arrow-left",color:"#000",size:"large",onClick:e[1]||(e[1]=function(e){return t.$router.back()})})]})),_:1}),Object(i["i"])(f,{span:"2"},{default:n((function(){return[Object(i["i"])(d,{name:"cluster-o",color:"#000",size:"large",style:{transform:"rotate(270deg)"},onClick:u.showCategory},null,8,["style","onClick"])]})),_:1}),Object(i["i"])(f,{span:"17"},{default:n((function(){return[Object(i["i"])(p,{modelValue:l.state.keyword,"onUpdate:modelValue":e[2]||(e[2]=function(t){return l.state.keyword=t}),placeholder:"请输入搜索关键词",background:"transparent","input-align":"left",onSearch:u.refresh},null,8,["modelValue","onSearch"])]})),_:1}),Object(i["i"])(f,{span:"2"},{default:n((function(){return[Object(i["i"])(d,{name:t.showGrid?"bars":"apps-o",size:"large",onClick:t.toggleGrid},null,8,["name","onClick"])]})),_:1})]})),_:1}),Object(i["i"])(g,null,{default:n((function(){return[Object(i["i"])(h,{modelValue:l.state.order,"onUpdate:modelValue":e[3]||(e[3]=function(t){return l.state.order=t}),options:l.state.options,onChange:u.refresh},null,8,["modelValue","options","onChange"]),Object(i["i"])(h,{title:"筛选",ref:"item"},{default:n((function(){return[Object(i["i"])(j,{center:"",title:"价格区间"},{default:n((function(){return[Object(i["P"])(Object(i["i"])("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=function(t){return l.state.min=t}),style:{width:"60px"}},null,512),[[i["L"],l.state.min]]),r,Object(i["P"])(Object(i["i"])("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.state.max=t}),style:{width:"60px"}},null,512),[[i["L"],l.state.max]])]})),_:1}),Object(i["i"])(j,{center:"",title:"推荐商品"},{"right-icon":n((function(){return[Object(i["i"])(m,{modelValue:l.state.recommend,"onUpdate:modelValue":e[6]||(e[6]=function(t){return l.state.recommend=t}),size:"24","active-color":"#ee0a24"},null,8,["modelValue"])]})),_:1}),Object(i["i"])("div",s,[Object(i["i"])(O,{type:"danger",block:"",round:"",onClick:u.refresh},{default:n((function(){return[c]})),_:1},8,["onClick"])])]})),_:1},512)]})),_:1})]})),_:1}),Object(i["i"])(x,{modelValue:l.state.refreshing,"onUpdate:modelValue":e[8]||(e[8]=function(t){return l.state.refreshing=t}),"loading-text":" ",onRefresh:u.refresh},{default:n((function(){return[Object(i["i"])(w,{class:"list",loading:l.state.loading,"onUpdate:loading":e[7]||(e[7]=function(t){return l.state.loading=t}),finished:l.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:u.query},{default:n((function(){return[(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(l.state.list,(function(e,a){return Object(i["x"])(),Object(i["f"])(y,{grid:t.showGrid,item:e,key:a,onAdd:u.addCart},null,8,["grid","item","onAdd"])})),128)),Object(i["P"])(Object(i["i"])(k,{style:{width:"100%"}},null,512),[[i["M"],0==l.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"]),Object(i["i"])(C,{show:l.state.popup,"onUpdate:show":e[11]||(e[11]=function(t){return l.state.popup=t}),closeable:"",position:"left",style:{width:"250px",height:"100%",paddingTop:"5px"}},{default:n((function(){return[Object(i["i"])(j,{title:u.isTop?"全部商品":"上级分类",icon:"arrow-left",clickable:"",onClick:e[9]||(e[9]=function(t){return u.isTop?u.changeCategory({cid:0}):u.changeCategory()})},null,8,["title"]),Object(i["i"])(_,{"main-active-index":l.state.active,"onUpdate:main-active-index":e[10]||(e[10]=function(t){return l.state.active=t}),style:{height:"100%"},items:l.state.category,onClickNav:u.changeCategory,onClickItem:u.changeCategory},null,8,["main-active-index","items","onClickNav","onClickItem"])]})),_:1},8,["show"]),Object(i["i"])(F,{id:l.state.id,show:t.$store.state.showPopup,onSave:u.saveCart},null,8,["id","show","onSave"])]})),_:1})})),l=a("53ca"),u=a("1da1"),d=a("5530"),f=(a("96cf"),a("a9e3"),a("99af"),a("ac1f"),a("5319"),a("5502")),p=a("2824"),b=a("a284"),h=a("370e"),j={components:{BaseLayout:p["a"],MallItem:b["a"],MallItemChooser:h["a"]},props:{type:{type:String,default:"mall"},cid:{type:[String,Number],default:0},keyword:{type:String,default:""}},data:function(){var t=Object(i["B"])({keyword:"",order:0,options:[{text:"默认排序",value:0},{text:"销量",value:1},{text:"价格由低到高",value:2},{text:"价格由高到低",value:3}],recommend:0,min:"",max:"",offset:0,limit:10,refreshing:!1,loading:!1,finished:!1,list:[],popup:!1,category:[],active:0,pid:0,id:0});return{state:t}},created:function(){this.state.keyword=this.keyword,this.refresh()},computed:Object(d["a"])({isTop:function(){return!this.state.category[parseInt(this.state.active)]||0==this.state.category[parseInt(this.state.active)].pid}},Object(f["d"])(["showGrid"])),methods:Object(d["a"])({refresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.query()},query:function(){var t=this;this.$http.get("/mall/itemlist?cid="+this.cid+"&keyword="+this.state.keyword+"&order="+this.state.order+"&recommend="+(this.state.recommend?1:0)+"&max="+this.state.max+"&min="+this.state.min+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,t.state.list=t.state.list.concat(e)}))},showCategory:function(){var t=this,e=0;for(var a in this.$store.state.channel)this.$store.state.channel[a].type==this.type&&(e=parseInt(a));this.$http.post("/mall/category?mid="+e+"&id="+this.cid).then((function(e){for(var a in t.state.category=e,e){var i=parseInt(t.cid);e[a].cid==i&&(t.state.active=a)}t.state.popup=!0}))},changeCategory:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.state.popup=!1,i=0,"undefined"==typeof t?i=e.state.category[parseInt(e.state.active)].pid:"number"==typeof t?i=e.state.category[parseInt(e.state.active)].cid:"object"==Object(l["a"])(t)&&(i=t.cid),a.next=5,e.$router.replace("list?cid="+i);case 5:e.refresh();case 6:case"end":return a.stop()}}),a)})))()},addCart:function(t){this.state.id=t,this.togglePopup(!0)},saveCart:function(t){var e=this,a=0==parseInt(t.digital)?1:2;this.$http.post("/mall/cartsave?spu="+t.id+"&sku="+t.sku+"&num="+t.num+"&status="+a).then((function(i){1==a?e.cartNumberAdd(t.num):e.$router.push("bill?direct=1&digital="+t.digital)}))}},Object(f["c"])(["togglePopup","toggleTabbar","toggleGrid","cartNumberAdd"]))},m=(a("5e32"),a("d959")),O=a.n(m);const g=O()(j,[["render",o],["__scopeId","data-v-1ef455d6"]]);e["default"]=g},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),n=a("5899"),r="["+n+"]",s=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),o=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},"5e32":function(t,e,a){"use strict";a("f6da")},7156:function(t,e,a){var i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var r,s;return n&&"function"==typeof(r=e.constructor)&&r!==a&&i(s=r.prototype)&&s!==a.prototype&&n(t,s),t}},"8a72":function(t,e,a){"use strict";a("1c7b")},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),r=a("e8b5"),s=a("861d"),c=a("7b0b"),o=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),p=a("2d00"),b=f("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",m=p>=51||!n((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),O=d("concat"),g=function(t){if(!s(t))return!1;var e=t[b];return void 0!==e?!!e:r(t)},v=!m||!O;i({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,i,n,r,s=c(this),d=u(s,0),f=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?s:arguments[e],g(r)){if(n=o(r.length),f+n>h)throw TypeError(j);for(a=0;a<n;a++,f++)a in r&&l(d,f,r[a])}else{if(f>=h)throw TypeError(j);l(d,f++,r)}return d.length=f,d}})},a15b:function(t,e,a){"use strict";var i=a("23e7"),n=a("44ad"),r=a("fc6a"),s=a("a640"),c=[].join,o=n!=Object,l=s("join",",");i({target:"Array",proto:!0,forced:o||!l},{join:function(t){return c.call(r(this),void 0===t?",":t)}})},a284:function(t,e,a){"use strict";var i=a("7a23"),n=Object(i["R"])("data-v-04ea0274");Object(i["A"])("data-v-04ea0274");var r={class:"price1"},s=Object(i["i"])("span",{class:"red"},"￥",-1),c=Object(i["h"])("   "),o={class:"stock"},l=Object(i["h"])("库存 "),u={class:"red"},d=Object(i["h"])(" 件  "),f={class:"sales"},p=Object(i["h"])("月销 "),b={class:"red"},h=Object(i["h"])(" 件");Object(i["y"])();var j=n((function(t,e,a,j,m,O){var g=Object(i["F"])("van-image"),v=Object(i["F"])("van-col"),y=Object(i["F"])("van-cell"),k=Object(i["F"])("van-icon"),w=Object(i["F"])("van-row");return Object(i["x"])(),Object(i["f"])(w,{class:["item",{grid:O.isGrid}],style:{width:O.width,height:O.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return O.forward(a.item)})},{default:n((function(){return[Object(i["i"])(v,{class:"image",span:O.isGrid?24:8},{default:n((function(){return[Object(i["i"])(g,{width:"100%",height:"100%",radius:"5",fit:O.isGrid?"contain":"cover",src:a.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(i["i"])(v,{class:"intro",span:O.isGrid?24:16},{default:n((function(){return[Object(i["i"])(y,{style:{padding:"5px 5px 0 5px"},border:!1},{title:n((function(){return[Object(i["i"])("div",{class:O.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(i["J"])(a.item.title),3)]})),label:n((function(){return[Object(i["P"])(Object(i["i"])("div",{class:"van-ellipsis"},Object(i["J"])(a.item.feature),513),[[i["M"],a.list>=100]])]})),_:1}),Object(i["i"])(y,{style:{padding:"0 10px 5px 10px"},border:!1,center:!O.isGrid},{title:n((function(){return[Object(i["i"])("span",r,[s,Object(i["h"])(" "+Object(i["J"])(a.item.price),1)]),c,Object(i["P"])(Object(i["i"])("span",{class:"price2"}," ￥ "+Object(i["J"])(a.item.price_original),513),[[i["M"],!O.isGrid&&a.item.price_original&&a.item.price_original>0]])]})),label:n((function(){return[Object(i["P"])(Object(i["i"])("span",o,[l,Object(i["i"])("span",u,Object(i["J"])(a.item.stock),1),d],512),[[i["M"],!O.isGrid&&a.stock]]),Object(i["P"])(Object(i["i"])("span",f,[p,Object(i["i"])("span",b,Object(i["J"])(a.item.sales),1),h],512),[[i["M"],!O.isGrid&&a.sales&&a.item.sales]])]})),"right-icon":n((function(){return[Object(i["P"])(Object(i["i"])(k,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(i["Q"])((function(e){return t.$emit("add",a.item.id)}),["stop"]))},null,512),[[i["M"],a.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),m=(a("a9e3"),{props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:{isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},methods:{forward:function(t){var e=/\/(mall|jdmall|wymall)\//.test(this.$router.path)?"":"/mall/",a="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+a)}}}),O=(a("8a72"),a("d959")),g=a.n(O);const v=g()(m,[["render",j],["__scopeId","data-v-04ea0274"]]);e["a"]=v},a9e3:function(t,e,a){"use strict";var i=a("83ab"),n=a("da84"),r=a("94ca"),s=a("6eeb"),c=a("5135"),o=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),f=a("7c73"),p=a("241c").f,b=a("06cf").f,h=a("9bf2").f,j=a("58a8").trim,m="Number",O=n[m],g=O.prototype,v=o(f(g))==m,y=function(t){var e,a,i,n,r,s,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=j(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(r=l.slice(2),s=r.length,c=0;c<s;c++)if(o=r.charCodeAt(c),o<48||o>n)return NaN;return parseInt(r,i)}return+l};if(r(m,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var k,w=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof w&&(v?d((function(){g.valueOf.call(a)})):o(a)!=m)?l(new O(y(e)),a,w):y(e)},x=i?p(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;x.length>_;_++)c(O,k=x[_])&&!c(w,k)&&h(w,k,b(O,k));w.prototype=g,g.constructor=w,s(n,m,w)}},ac33:function(t,e,a){"use strict";(function(t){var i=a("5530"),n=a("53ca"),r=(a("a9e3"),a("a15b"),a("ac1f"),a("1276"),a("b0c0"),a("7a23")),s=a("5502"),c=a("a284");e["a"]={components:{MallItem:c["a"]},props:{id:{type:[Number,String],default:0},show:{type:Boolean,default:!1}},data:function(){var t=Object(r["B"])({detail:{},id:0,num:1,sku:0,spec:"",options:{},disabled:!0,tabbarStatus:!0});return{state:t}},computed:{hasSpec:function(){return"object"==Object(n["a"])(this.state.detail.spec)&&!t.isEmpty(this.state.detail.spec)&&"object"==Object(n["a"])(this.state.detail.sku)}},watch:{show:function(t,e){t&&(this.query(),this.state.tabbarStatus=this.$store.state.showTabbar),this.toggleTabbar(!t&&this.state.tabbarStatus)}},methods:Object(i["a"])({query:function(){var t=this;this.$http.get("/mall/itemdetail?id="+this.id).then((function(e){t.state.detail=e,t.state.disabled=t.hasSpec,t.id==t.state.id?t.hasSpec&&t.choose():(t.state.num=1,t.state.sku=0,t.state.spec="",t.state.options={})}))},choose:function(){var e=t.toArray(this.state.options).sort().join(","),a=0,i=0;for(var n in this.state.detail.sku){var r=this.state.detail.sku[n];if(e==r.spec.split(",").sort().join(",")){this.state.sku=r.id,a=r.stock,i=r.price;break}}this.state.disabled=0==a,this.state.detail.stock=a,this.state.detail.price=i},save:function(){var t=[];for(var e in this.state.options)for(var a in this.state.detail.spec)e==this.state.detail.spec[a].id&&t.push(this.state.detail.spec[a].name+"："+this.state.detail.spec[a].spec[this.state.options[e]]);this.state.id=this.id,this.$emit("save",{id:this.state.id,num:this.state.num,sku:this.state.sku,spec:t,digital:this.state.detail.digital}),this.togglePopup(!1)}},Object(s["c"])(["togglePopup","toggleTabbar"]))}}).call(this,a("81b0"))},f6da:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7ebcca59.bea8c598.js.map