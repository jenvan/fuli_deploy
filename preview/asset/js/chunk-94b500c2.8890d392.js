(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94b500c2"],{2324:function(t,e,a){"use strict";a("4a39")},"370e":function(t,e,a){"use strict";a("b0c0");var n=a("7a23"),i=Object(n["R"])("data-v-71190905");Object(n["A"])("data-v-71190905");var r={class:"wrapper"},c=Object(n["h"])("确 定");Object(n["y"])();var s=i((function(t,e,a,s,o,u){var l=Object(n["F"])("mall-item"),d=Object(n["F"])("van-radio"),f=Object(n["F"])("van-radio-group"),b=Object(n["F"])("van-cell"),p=Object(n["F"])("van-stepper"),h=Object(n["F"])("van-button"),j=Object(n["F"])("van-overlay");return Object(n["x"])(),Object(n["f"])(j,{show:a.show,onClick:t.togglePopup},{default:i((function(){return[Object(n["i"])("div",r,[Object(n["i"])("div",{class:"panel animate__animated animate__fadeInUpBig",onClick:e[2]||(e[2]=Object(n["Q"])((function(){}),["stop"]))},[Object(n["i"])(l,{grid:!1,item:o.state.detail,cart:!1,sales:!1,class:"van-hairline--bottom",style:{paddingBottom:"10px"}},null,8,["item"]),(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(o.state.detail.spec,(function(t,e){return Object(n["P"])((Object(n["x"])(),Object(n["f"])(b,{key:e,title:t.name,border:!1},{label:i((function(){return[Object(n["i"])(f,{modelValue:o.state.options[t.id],"onUpdate:modelValue":function(e){return o.state.options[t.id]=e},direction:"horizontal","checked-color":"#ee0a24",onChange:u.choose},{default:i((function(){return[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(t.spec,(function(e,a){return Object(n["x"])(),Object(n["f"])(d,{class:["radio",{active:o.state.options[t.id]==a}],key:a,name:a},{icon:i((function(){return[]})),default:i((function(){return[Object(n["h"])(Object(n["J"])(e),1)]})),_:2},1032,["name","class"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:2},1032,["title"])),[[n["M"],u.hasSpec]])})),128)),Object(n["i"])(b,{title:"数量",class:"number",border:!1},{default:i((function(){return[Object(n["i"])(p,{modelValue:o.state.num,"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.state.num=t}),theme:"round","button-size":"22",min:1,max:o.state.detail.stock},null,8,["modelValue","max"])]})),_:1}),Object(n["i"])(h,{type:"danger",round:"",block:"",disabled:o.state.disabled,onClick:u.save},{default:i((function(){return[c]})),_:1},8,["disabled","onClick"])])])]})),_:1},8,["show","onClick"])})),o=a("ac33");a("2324");o["a"].render=s,o["a"].__scopeId="data-v-71190905";e["a"]=o["a"]},"4a39":function(t,e,a){},"4d8b":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),i=Object(n["R"])("data-v-705c7efc");Object(n["A"])("data-v-705c7efc");var r=Object(n["h"])(" ~ "),c={style:{padding:"5px 16px"}},s=Object(n["h"])("确认");Object(n["y"])();var o=i((function(t,e,a,o,u,l){var d=Object(n["F"])("van-icon"),f=Object(n["F"])("van-col"),b=Object(n["F"])("van-search"),p=Object(n["F"])("van-row"),h=Object(n["F"])("van-dropdown-item"),j=Object(n["F"])("van-cell"),m=Object(n["F"])("van-switch"),O=Object(n["F"])("van-button"),g=Object(n["F"])("van-dropdown-menu"),v=Object(n["F"])("van-sticky"),y=Object(n["F"])("mall-item"),k=Object(n["F"])("van-empty"),w=Object(n["F"])("van-list"),_=Object(n["F"])("van-pull-refresh"),x=Object(n["F"])("van-tree-select"),C=Object(n["F"])("van-popup"),F=Object(n["F"])("mall-item-chooser"),I=Object(n["F"])("BaseLayout");return Object(n["x"])(),Object(n["f"])(I,{nonavbar:""},{default:i((function(){return[Object(n["i"])(v,{"offset-top":0},{default:i((function(){return[Object(n["i"])(p,{class:"toolbar",gutter:"0",justify:"space-around",align:"center"},{default:i((function(){return[Object(n["i"])(f,{span:"2"},{default:i((function(){return[Object(n["i"])(d,{name:"arrow-left",color:"#000",size:"large",onClick:e[1]||(e[1]=function(e){return t.$router.back()})})]})),_:1}),Object(n["i"])(f,{span:"2"},{default:i((function(){return[Object(n["i"])(d,{name:"cluster-o",color:"#000",size:"large",style:{transform:"rotate(270deg)"},onClick:l.showCategory},null,8,["style","onClick"])]})),_:1}),Object(n["i"])(f,{span:"17"},{default:i((function(){return[Object(n["i"])(b,{modelValue:u.state.keyword,"onUpdate:modelValue":e[2]||(e[2]=function(t){return u.state.keyword=t}),placeholder:"请输入搜索关键词",background:"transparent","input-align":"left",onSearch:l.refresh},null,8,["modelValue","onSearch"])]})),_:1}),Object(n["i"])(f,{span:"2"},{default:i((function(){return[Object(n["i"])(d,{name:u.state.grid?"bars":"apps-o",size:"large",onClick:e[3]||(e[3]=function(t){return u.state.grid=!u.state.grid})},null,8,["name"])]})),_:1})]})),_:1}),Object(n["i"])(g,null,{default:i((function(){return[Object(n["i"])(h,{modelValue:u.state.order,"onUpdate:modelValue":e[4]||(e[4]=function(t){return u.state.order=t}),options:u.state.options,onChange:l.refresh},null,8,["modelValue","options","onChange"]),Object(n["i"])(h,{title:"筛选",ref:"item"},{default:i((function(){return[Object(n["i"])(j,{center:"",title:"价格区间"},{default:i((function(){return[Object(n["P"])(Object(n["i"])("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=function(t){return u.state.min=t}),style:{width:"60px"}},null,512),[[n["L"],u.state.min]]),r,Object(n["P"])(Object(n["i"])("input",{type:"number","onUpdate:modelValue":e[6]||(e[6]=function(t){return u.state.max=t}),style:{width:"60px"}},null,512),[[n["L"],u.state.max]])]})),_:1}),Object(n["i"])(j,{center:"",title:"推荐商品"},{"right-icon":i((function(){return[Object(n["i"])(m,{modelValue:u.state.recommend,"onUpdate:modelValue":e[7]||(e[7]=function(t){return u.state.recommend=t}),size:"24","active-color":"#ee0a24"},null,8,["modelValue"])]})),_:1}),Object(n["i"])("div",c,[Object(n["i"])(O,{type:"danger",block:"",round:"",onClick:l.refresh},{default:i((function(){return[s]})),_:1},8,["onClick"])])]})),_:1},512)]})),_:1})]})),_:1}),Object(n["i"])(_,{modelValue:u.state.refreshing,"onUpdate:modelValue":e[9]||(e[9]=function(t){return u.state.refreshing=t}),"loading-text":" ",onRefresh:l.refresh},{default:i((function(){return[Object(n["i"])(w,{class:"list",loading:u.state.loading,"onUpdate:loading":e[8]||(e[8]=function(t){return u.state.loading=t}),finished:u.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:l.query},{default:i((function(){return[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(u.state.list,(function(t,e){return Object(n["x"])(),Object(n["f"])(y,{grid:u.state.grid,item:t,key:e,onAdd:l.addCart},null,8,["grid","item","onAdd"])})),128)),Object(n["P"])(Object(n["i"])(k,{style:{width:"100%"}},null,512),[[n["M"],0==u.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"]),Object(n["i"])(C,{show:u.state.popup,"onUpdate:show":e[12]||(e[12]=function(t){return u.state.popup=t}),closeable:"",position:"left",style:{width:"250px",height:"100%",paddingTop:"5px"}},{default:i((function(){return[Object(n["i"])(j,{title:l.isTop?"全部商品":"上级分类",icon:"arrow-left",clickable:"",onClick:e[10]||(e[10]=function(t){return l.isTop?l.changeCategory({cid:0}):l.changeCategory()})},null,8,["title"]),Object(n["i"])(x,{"main-active-index":u.state.active,"onUpdate:main-active-index":e[11]||(e[11]=function(t){return u.state.active=t}),style:{height:"100%"},items:u.state.category,onClickNav:l.changeCategory,onClickItem:l.changeCategory},null,8,["main-active-index","items","onClickNav","onClickItem"])]})),_:1},8,["show"]),Object(n["i"])(F,{id:u.state.id,show:t.$store.state.showPopup,onSave:l.saveCart},null,8,["id","show","onSave"])]})),_:1})})),u=a("53ca"),l=a("1da1"),d=a("5530"),f=(a("96cf"),a("a9e3"),a("99af"),a("ac1f"),a("5319"),a("5502")),b=a("2824"),p=a("a284"),h=a("370e"),j={components:{BaseLayout:b["a"],MallItem:p["a"],MallItemChooser:h["a"]},props:{type:{type:String,default:"mall"},cid:{type:[String,Number],default:1}},data:function(){var t=Object(n["B"])({keyword:"",order:0,options:[{text:"默认排序",value:0},{text:"销量",value:1},{text:"价格由低到高",value:2},{text:"价格由高到低",value:3}],recommend:0,min:"",max:"",offset:0,limit:10,grid:!0,refreshing:!1,loading:!1,finished:!1,list:[],popup:!1,category:[],active:0,pid:0,id:0});return{state:t}},created:function(){this.refresh()},computed:{isTop:function(){return!this.state.category[parseInt(this.state.active)]||0==this.state.category[parseInt(this.state.active)].pid}},methods:Object(d["a"])({refresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.query()},query:function(){var t=this;this.$http.get("/mall/itemlist?cid="+this.cid+"&keyword="+this.state.keyword+"&order="+this.state.order+"&recommend="+(this.state.recommend?1:0)+"&max="+this.state.max+"&min="+this.state.min+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,t.state.list=t.state.list.concat(e)}))},showCategory:function(){var t=this,e=0;for(var a in this.$store.state.channel)this.$store.state.channel[a].type==this.type&&(e=parseInt(a));this.$http.post("/mall/category?mid="+e+"&id="+this.cid).then((function(e){for(var a in t.state.category=e,e){var n=parseInt(t.cid);e[a].cid==n&&(t.state.active=a)}t.state.popup=!0}))},changeCategory:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.state.popup=!1,n=0,"undefined"==typeof t?n=e.state.category[parseInt(e.state.active)].pid:"number"==typeof t?n=e.state.category[parseInt(e.state.active)].cid:"object"==Object(u["a"])(t)&&(n=t.cid),a.next=5,e.$router.replace("list?cid="+n);case 5:e.refresh();case 6:case"end":return a.stop()}}),a)})))()},addCart:function(t){this.state.id=t,this.togglePopup(!0)},saveCart:function(t){var e=this,a=0==parseInt(t.digital)?1:2;this.$http.post("/mall/cartsave?spu="+t.id+"&sku="+t.sku+"&num="+t.num+"&status="+a).then((function(n){1==a?e.cartNumberAdd(t.num):e.$router.push("bill?direct=1&digital="+t.digital)}))}},Object(f["c"])(["togglePopup","toggleTabbar","cartNumberAdd"]))};a("c739");j.render=o,j.__scopeId="data-v-705c7efc";e["default"]=j},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),r="["+i+"]",c=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),o=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(c,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},"5e54":function(t,e,a){},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var r,c;return i&&"function"==typeof(r=e.constructor)&&r!==a&&n(c=r.prototype)&&c!==a.prototype&&i(t,c),t}},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),r=a("e8b5"),c=a("861d"),s=a("7b0b"),o=a("50c4"),u=a("8418"),l=a("65f0"),d=a("1dde"),f=a("b622"),b=a("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",m=b>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),O=d("concat"),g=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},v=!m||!O;n({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,n,i,r,c=s(this),d=l(c,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?c:arguments[e],g(r)){if(i=o(r.length),f+i>h)throw TypeError(j);for(a=0;a<i;a++,f++)a in r&&u(d,f,r[a])}else{if(f>=h)throw TypeError(j);u(d,f++,r)}return d.length=f,d}})},a15b:function(t,e,a){"use strict";var n=a("23e7"),i=a("44ad"),r=a("fc6a"),c=a("a640"),s=[].join,o=i!=Object,u=c("join",",");n({target:"Array",proto:!0,forced:o||!u},{join:function(t){return s.call(r(this),void 0===t?",":t)}})},a284:function(t,e,a){"use strict";var n=a("7a23"),i=Object(n["R"])("data-v-51088b8e");Object(n["A"])("data-v-51088b8e");var r={class:"van-ellipsis"},c={class:"van-ellipsis"},s={class:"price1"},o=Object(n["i"])("span",{class:"red"},"￥",-1),u=Object(n["h"])("   "),l={class:"stock"},d=Object(n["h"])("库存 "),f={class:"red"},b=Object(n["h"])(" 件  "),p={class:"sales"},h=Object(n["h"])("月销 "),j={class:"red"},m=Object(n["h"])(" 件");Object(n["y"])();var O=i((function(t,e,a,O,g,v){var y=Object(n["F"])("van-image"),k=Object(n["F"])("van-col"),w=Object(n["F"])("van-cell"),_=Object(n["F"])("van-icon"),x=Object(n["F"])("van-row");return Object(n["x"])(),Object(n["f"])(x,{class:["item",{grid:a.grid}],justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return v.forward(a.item)})},{default:i((function(){return[Object(n["i"])(k,{class:"image",span:a.grid?24:8},{default:i((function(){return[Object(n["i"])(y,{width:"100%",height:"100%",radius:"5",fit:a.grid?"contain":"cover",src:a.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(n["i"])(k,{class:"intro",span:a.grid?24:16},{default:i((function(){return[Object(n["i"])(w,{border:!1},{title:i((function(){return[Object(n["i"])("div",r,Object(n["J"])(a.item.title),1)]})),label:i((function(){return[Object(n["i"])("div",c,Object(n["J"])(a.item.feature),1)]})),_:1}),Object(n["i"])(w,{border:!1,center:!a.grid},{title:i((function(){return[Object(n["i"])("span",s,[o,Object(n["h"])(" "+Object(n["J"])(a.item.price),1)]),u,Object(n["P"])(Object(n["i"])("span",{class:"price2"}," ￥ "+Object(n["J"])(a.item.price_original),513),[[n["M"],!a.grid&&a.item.price_original&&a.item.price_original>0]])]})),label:i((function(){return[Object(n["P"])(Object(n["i"])("span",l,[d,Object(n["i"])("span",f,Object(n["J"])(a.item.stock),1),b],512),[[n["M"],!a.grid&&a.stock]]),Object(n["P"])(Object(n["i"])("span",p,[h,Object(n["i"])("span",j,Object(n["J"])(a.item.sales),1),m],512),[[n["M"],!a.grid&&a.sales&&a.item.sales]])]})),"right-icon":i((function(){return[Object(n["P"])(Object(n["i"])(_,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(n["Q"])((function(e){return t.$emit("add",a.item.id)}),["stop"]))},null,512),[[n["M"],a.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class"])})),g={props:{grid:{type:Boolean,default:!0},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},methods:{forward:function(t){var e=/\/my\//.test(this.$router.currentRoute.value.path)?"/mall/":"",a="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+a)}}};a("a646");g.render=O,g.__scopeId="data-v-51088b8e";e["a"]=g},a646:function(t,e,a){"use strict";a("ed17")},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),c=a("6eeb"),s=a("5135"),o=a("c6b6"),u=a("7156"),l=a("c04e"),d=a("d039"),f=a("7c73"),b=a("241c").f,p=a("06cf").f,h=a("9bf2").f,j=a("58a8").trim,m="Number",O=i[m],g=O.prototype,v=o(f(g))==m,y=function(t){var e,a,n,i,r,c,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=j(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(r=u.slice(2),c=r.length,s=0;s<c;s++)if(o=r.charCodeAt(s),o<48||o>i)return NaN;return parseInt(r,n)}return+u};if(r(m,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var k,w=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof w&&(v?d((function(){g.valueOf.call(a)})):o(a)!=m)?u(new O(y(e)),a,w):y(e)},_=n?b(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;_.length>x;x++)s(O,k=_[x])&&!s(w,k)&&h(w,k,p(O,k));w.prototype=g,g.constructor=w,c(i,m,w)}},ac33:function(t,e,a){"use strict";(function(t){var n=a("5530"),i=a("53ca"),r=(a("a9e3"),a("a15b"),a("ac1f"),a("1276"),a("b0c0"),a("7a23")),c=a("5502"),s=a("a284");e["a"]={components:{MallItem:s["a"]},props:{id:{type:[Number,String],default:0},show:{type:Boolean,default:!1}},data:function(){var t=Object(r["B"])({detail:{},id:0,num:1,sku:0,spec:"",options:{},disabled:!0,tabbarStatus:!0});return{state:t}},computed:{hasSpec:function(){return"object"==Object(i["a"])(this.state.detail.spec)&&!t.isEmpty(this.state.detail.spec)&&"object"==Object(i["a"])(this.state.detail.sku)}},watch:{show:function(t,e){t&&(this.query(),this.state.tabbarStatus=this.$store.state.showTabbar),this.toggleTabbar(!t&&this.state.tabbarStatus)}},methods:Object(n["a"])({query:function(){var t=this;this.$http.get("/mall/itemdetail?id="+this.id).then((function(e){t.state.detail=e,t.state.disabled=t.hasSpec,t.id==t.state.id?t.hasSpec&&t.choose():(t.state.num=1,t.state.sku=0,t.state.spec="",t.state.options={})}))},choose:function(){var e=t.toArray(this.state.options).sort().join(","),a=0,n=0;for(var i in this.state.detail.sku){var r=this.state.detail.sku[i];if(e==r.spec.split(",").sort().join(",")){this.state.sku=r.id,a=r.stock,n=r.price;break}}this.state.disabled=0==a,this.state.detail.stock=a,this.state.detail.price=n},save:function(){var t=[];for(var e in this.state.options)for(var a in this.state.detail.spec)e==this.state.detail.spec[a].id&&t.push(this.state.detail.spec[a].name+"："+this.state.detail.spec[a].spec[this.state.options[e]]);this.state.id=this.id,this.$emit("save",{id:this.state.id,num:this.state.num,sku:this.state.sku,spec:t,digital:this.state.detail.digital}),this.togglePopup(!1)}},Object(c["c"])(["togglePopup","toggleTabbar"]))}}).call(this,a("81b0"))},c739:function(t,e,a){"use strict";a("5e54")},ed17:function(t,e,a){}}]);
//# sourceMappingURL=chunk-94b500c2.8890d392.js.map