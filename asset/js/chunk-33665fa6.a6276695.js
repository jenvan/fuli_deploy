(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33665fa6"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var r=n("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("6b75");function a(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=n("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||i(t)||Object(o["a"])(t)||s()}},4475:function(t,e,n){"use strict";(function(t){var r=n("2909"),a=n("5530"),i=(n("a9e3"),n("b0c0"),n("ac1f"),n("5319"),n("d3b7"),n("25f0"),n("a15b"),n("7a23")),o=n("5502"),s=n("2824"),c=n("a284");e["a"]={components:{BaseLayout:s["a"],MallItem:c["a"]},name:"List",props:{bid:{type:[String,Number],default:""},keyword:{type:String,default:""}},data:function(){var t=Object(i["F"])(!0),e=Object(i["E"])({bid:"",keyword:"",order:0,options:[{text:"默认排序",value:0},{text:"销量",value:1},{text:"价格由低到高",value:2},{text:"价格由高到低",value:3}],min:"",max:"",page:1,brand:{},refreshing:!1,loading:!1,finished:!1,total:0,list:[],brands:[],animate:""});return{isTop:t,state:e}},activated:function(){!this.$store.state.keepAlive&&this.init()},beforeRouteLeave:function(t,e,n){this.$refs.dropdown.toggle(!1),this.$store.commit("setScrollTop",document.getElementById("container").scrollTop),n()},computed:Object(a["a"])({cartNumber:function(){return this.profile&&this.profile.cartNumber&&Array.isArray(this.profile.cartNumber)?this.profile.cartNumber[2]:""}},Object(o["d"])(["profile","showGrid"])),methods:Object(a["a"])({init:function(){var e=this;this.state.order=0,this.state.min="",this.state.max="",this.state.bid=""==this.bid||0==this.bid?"":this.bid,this.state.keyword=""==this.keyword?"":this.keyword,this.state.brand={},0==parseInt(this.bid)||t.isEmpty(this.bid)&&t.isEmpty(this.keyword)?this.refresh():this.$http.post("/vpmall/brand?id="+this.bid+"&name="+(t.isEmpty(this.keyword)?"":"%"+this.keyword+"%")).then((function(n){t.isEmpty(n)||(e.state.brand=n,e.bid!=n.id&&(e.state.bid=n.id,e.state.keyword=""),e.$share("唯品商城_"+n.name,n.logo)),e.refresh()}))},refresh:function(){this.$refs.dropdown.toggle(!1),this.state.page=1,this.state.loading=!0,this.state.finished=!1,this.state.list=[],this.state.brands=[],this.query()},query:function(){var e=this,n=this.profile&&this.profile["isTester"]?"50":"20";this.$http.get("/vpmall/search?bid="+this.state.bid+"&keyword="+this.state.keyword+"&order="+this.state.order+"&max="+this.state.max+"&min="+this.state.min+"&size="+n+"&page="+this.state.page).then((function(a){var i;e.state.refreshing=!1,(0==a.list.length||a.list.length<n)&&(e.state.finished=!0),e.state.loading=!1,e.state.page=e.state.page+1,e.state.total=a.total,(i=e.state.list).push.apply(i,Object(r["a"])(a.list)),t.isEmpty(e.state.brand)&&e.$share("唯品商城_"+e.state.keyword)}))},download:function(){if("undefined"!=typeof WeixinJSBridge)return this.$toast("请点右上角菜单，在浏览器中打开本页面");var t=[];for(var e in this.state.list){var n=[];for(var r in this.state.list[e])n.push(this.state.list[e][r].toString().replace(/,/gi,"，"));t.push("<td>"+n.join("</td><td>")+"</td>")}var a="<!DOCTYPE html><html lang='zh-CN'><head><meta charset='UTF-8'></head><body><table><tr>"+t.join("</tr><tr>")+"</tr></table></body></html>",i=new Blob([a],{type:"application/vnd.ms-excel"});return this.$download(i,"vp-"+this.state.bid+"-"+this.state.keyword+".xls")},onSearch:function(){var e=[];e.push("bid="+this.state.bid),!t.isEmpty(this.state.keyword)&&e.push("keyword="+this.state.keyword),this.$router.push("?"+e.join("&")),setTimeout(this.init,100)},onChange:function(t){var e=this;t.length>0&&this.$http.get("/vpmall/brand?keyword="+t).then((function(t){e.state.brands=t}))}},Object(o["c"])(["togglePopup","toggleTabbar","toggleGrid","cartNumberAdd"]))}}).call(this,n("81b0"))},4625:function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,o;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(o=i.prototype)&&o!==n.prototype&&a(t,o),t}},"76f8":function(t,e,n){"use strict";n("4625")},8338:function(t,e,n){},9945:function(t,e,n){"use strict";n("8338")},"9f22":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("ac1f"),n("5319");var r=n("7a23"),a=Object(r["X"])("data-v-1742f787");Object(r["D"])("data-v-1742f787");var i={class:"icon"},o={class:"name"},s={class:"intro"},c={class:"choose"},l=Object(r["j"])("查看全部品牌"),u=Object(r["j"])(" ~ "),d={class:"bar"};Object(r["B"])();var b=a((function(t,e,n,b,f,h){var p=Object(r["I"])("van-icon"),j=Object(r["I"])("van-col"),O=Object(r["I"])("van-search"),m=Object(r["I"])("van-row"),g=Object(r["I"])("van-image"),y=Object(r["I"])("van-cell"),v=Object(r["I"])("van-dropdown-item"),k=Object(r["I"])("van-radio"),w=Object(r["I"])("van-radio-group"),I=Object(r["I"])("van-button"),A=Object(r["I"])("van-dropdown-menu"),_=Object(r["I"])("van-sticky"),x=Object(r["I"])("mall-item"),N=Object(r["I"])("van-empty"),C=Object(r["I"])("van-list"),E=Object(r["I"])("van-pull-refresh"),S=Object(r["I"])("BaseLayout");return Object(r["A"])(),Object(r["g"])(S,{navbar:"hide"},{default:a((function(){return[Object(r["k"])(_,{class:{notTop1:!f.isTop},onChange:e[11]||(e[11]=function(t){return f.isTop=!f.isTop}),"offset-top":0},{default:a((function(){return[Object(r["k"])(m,{class:"toolbar",gutter:"0",justify:"space-around",align:"center"},{default:a((function(){return[Object(r["k"])(j,{span:"2"},{default:a((function(){return[Object(r["k"])(p,{name:"arrow-left",color:"#000",size:"large",onClick:e[1]||(e[1]=function(e){return t.$router.back()})})]})),_:1}),Object(r["k"])(j,{span:"17"},{default:a((function(){return[Object(r["k"])(O,{modelValue:f.state.keyword,"onUpdate:modelValue":e[2]||(e[2]=function(t){return f.state.keyword=t}),placeholder:"请输入搜索关键词",background:"transparent","input-align":"left",onSearch:h.onSearch},null,8,["modelValue","onSearch"])]})),_:1}),Object(r["k"])(j,{span:"2"},{default:a((function(){return[Object(r["k"])(p,{name:t.showGrid?"bars":"apps-o",size:"large",onClick:t.toggleGrid},null,8,["name","onClick"])]})),_:1}),Object(r["k"])(j,{span:"2"},{default:a((function(){return[Object(r["k"])(p,{name:"shopping-cart-o",size:"large",class:f.state.animate,badge:h.cartNumber,onClick:e[3]||(e[3]=function(e){return t.$router.push("cart")})},null,8,["class","badge"])]})),_:1}),Object(r["k"])(j,{span:"1"})]})),_:1}),Object(r["U"])(Object(r["k"])(y,{class:"brand",border:!1},{icon:a((function(){return[Object(r["k"])("div",i,[Object(r["k"])(p,{name:f.state.brand.logo,size:"64"},null,8,["name"])])]})),title:a((function(){return[Object(r["k"])("div",o,Object(r["M"])(f.state.brand.name),1)]})),label:a((function(){return[Object(r["k"])(g,{class:"bg",src:f.state.brand.logo,width:"80%"},null,8,["src"]),Object(r["k"])("div",s,Object(r["M"])(f.state.brand.intro.replace(/^【.+】/,"")),1)]})),_:1},512),[[r["Q"],f.isTop&&f.state.brand]]),Object(r["k"])(A,{class:"filter"},{default:a((function(){return[Object(r["k"])(v,{modelValue:f.state.order,"onUpdate:modelValue":e[4]||(e[4]=function(t){return f.state.order=t}),options:f.state.options,onChange:h.refresh},null,8,["modelValue","options","onChange"]),Object(r["k"])(v,{title:"筛选",ref:"dropdown"},{default:a((function(){return[Object(r["k"])(y,{center:""},{title:a((function(){return[Object(r["k"])(O,{placeholder:"请输入品牌关键词进行筛选",background:"transparent","input-align":"left","onUpdate:modelValue":h.onChange},null,8,["onUpdate:modelValue"])]})),label:a((function(){return[Object(r["k"])(w,{modelValue:f.state.brand,"onUpdate:modelValue":e[5]||(e[5]=function(t){return f.state.brand=t}),direction:"horizontal","checked-color":"#ee0a24"},{default:a((function(){return[(Object(r["A"])(!0),Object(r["g"])(r["a"],null,Object(r["G"])(f.state.brands,(function(t,e){return Object(r["A"])(),Object(r["g"])(k,{class:"radio",key:e,name:t,onClick:function(t){f.state.bid=e,h.onSearch()}},{default:a((function(){return[Object(r["j"])(Object(r["M"])(t),1)]})),_:2},1032,["name","onClick"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(r["k"])(y,{title:"当前品牌",center:""},{value:a((function(){return[Object(r["k"])("span",c,[Object(r["k"])(p,{name:f.state.brand.logo,size:"32"},null,8,["name"]),Object(r["j"])(" "+Object(r["M"])(f.state.brand.name),1)])]})),extra:a((function(){return[Object(r["k"])(I,{type:"danger",size:"mini",onClick:e[6]||(e[6]=function(t){f.state.bid=0,f.state.keyword=n.keyword,h.onSearch()})},{default:a((function(){return[l]})),_:1})]})),_:1}),Object(r["k"])(y,{title:"价格区间",center:""},{default:a((function(){return[Object(r["U"])(Object(r["k"])("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=function(t){return f.state.min=t}),style:{width:"60px"},onChange:e[8]||(e[8]=function(){return h.refresh&&h.refresh.apply(h,arguments)})},null,544),[[r["P"],f.state.min]]),u,Object(r["U"])(Object(r["k"])("input",{type:"number","onUpdate:modelValue":e[9]||(e[9]=function(t){return f.state.max=t}),style:{width:"60px"},onChange:e[10]||(e[10]=function(){return h.refresh&&h.refresh.apply(h,arguments)})},null,544),[[r["P"],f.state.max]])]})),_:1})]})),_:1},512)]})),_:1})]})),_:1},8,["class"]),Object(r["k"])(E,{class:{notTop2:!f.isTop},modelValue:f.state.refreshing,"onUpdate:modelValue":e[13]||(e[13]=function(t){return f.state.refreshing=t}),"loading-text":" ",onRefresh:h.refresh},{default:a((function(){return[Object(r["k"])(C,{class:"list",loading:f.state.loading,"onUpdate:loading":e[12]||(e[12]=function(t){return f.state.loading=t}),finished:f.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:h.query},{default:a((function(){return[(Object(r["A"])(!0),Object(r["g"])(r["a"],null,Object(r["G"])(f.state.list,(function(e,n){return Object(r["A"])(),Object(r["g"])(x,{key:n,grid:t.showGrid,item:e,cart:!0,fit:"cover",onAdd:function(n){return t.$router.push("item?id="+e.id)}},null,8,["grid","item","onAdd"])})),128)),Object(r["U"])(Object(r["k"])(N,{style:{width:"100%"}},null,512),[[r["Q"],0==f.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["class","modelValue","onRefresh"]),Object(r["U"])(Object(r["k"])("div",d,[Object(r["j"])("总共 "+Object(r["M"])(f.state.total)+" 条记录，已下载 "+Object(r["M"])(f.state.page-1)+" 页 ",1),Object(r["k"])(p,{color:"#F66",name:"down",onClick:h.download},null,8,["onClick"])],512),[[r["Q"],f.state.total>0]])]})),_:1})})),f=n("4475"),h=(n("76f8"),n("6b0d")),p=n.n(h);const j=p()(f["a"],[["render",b],["__scopeId","data-v-1742f787"]]);e["default"]=j},a15b:function(t,e,n){"use strict";var r=n("23e7"),a=n("44ad"),i=n("fc6a"),o=n("a640"),s=[].join,c=a!=Object,l=o("join",",");r({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(i(this),void 0===t?",":t)}})},a284:function(t,e,n){"use strict";var r=n("7a23"),a=Object(r["X"])("data-v-c3bf1144");Object(r["D"])("data-v-c3bf1144");var i={class:"van-multi-ellipsis--l2"},o={class:"price1"},s=Object(r["j"])("   "),c={class:"stock"},l=Object(r["j"])("库存 "),u={class:"red"},d=Object(r["j"])(" 件  "),b={class:"sales"},f=Object(r["j"])("月销 "),h={class:"red"},p=Object(r["j"])(" 件");Object(r["B"])();var j=a((function(t,e,n,j,O,m){var g=Object(r["I"])("van-image"),y=Object(r["I"])("van-cell"),v=Object(r["I"])("van-icon");return Object(r["A"])(),Object(r["g"])("div",{class:["item",{grid:m.isGrid}],style:{width:m.width,height:m.height},onClick:e[2]||(e[2]=function(t){return m.forward(n.item)})},[Object(r["k"])(g,{class:"image",style:{width:m.isGrid?"100%":m.height,height:m.isGrid?m.width:"100%"},radius:"5",fit:n.fit,src:n.item.cover},null,8,["style","fit","src"]),Object(r["k"])("div",{class:"intro",style:{width:m.isGrid?"100%":"calc(100% - "+m.height+")",height:m.isGrid?"calc(100% - "+m.width+")":"100%"}},[Object(r["k"])(y,{style:{padding:"5px 5px 0 5px"},border:!1},{title:a((function(){return[Object(r["k"])("div",i,Object(r["M"])(n.item.title),1)]})),label:a((function(){return[Object(r["U"])(Object(r["k"])("div",{class:"van-ellipsis"},Object(r["M"])(n.item.feature),513),[[r["Q"],!m.isGrid&&n.size>=100]])]})),_:1}),Object(r["k"])(y,{style:{padding:"0 10px 5px 10px"},border:!1,center:!m.isGrid},{title:a((function(){return[Object(r["k"])("span",o,[Object(r["k"])(v,{name:"points",color:"red"}),Object(r["j"])(" "+Object(r["M"])(n.item.price),1)]),s,Object(r["U"])(Object(r["k"])("span",{class:"price2"}," ￥ "+Object(r["M"])(n.item.price_original),513),[[r["Q"],!m.isGrid&&n.item.price_original&&n.item.price_original>0]])]})),label:a((function(){return[Object(r["U"])(Object(r["k"])("span",c,[l,Object(r["k"])("span",u,Object(r["M"])(n.item.stock),1),d],512),[[r["Q"],!m.isGrid&&n.stock&&n.item.stock]]),Object(r["U"])(Object(r["k"])("span",b,[f,Object(r["k"])("span",h,Object(r["M"])(n.item.sales),1),p],512),[[r["Q"],!m.isGrid&&n.sales&&n.item.sales]])]})),"right-icon":a((function(){return[Object(r["U"])(Object(r["k"])(v,{name:"shopping-cart",size:"21",color:"#F66",onClick:e[1]||(e[1]=Object(r["W"])((function(e){return t.$emit("add",n.item)}),["stop"]))},null,512),[[r["Q"],n.cart]])]})),_:1},8,["center"]),Object(r["H"])(t.$slots,"default",{},void 0,!0)],4)],6)})),O=n("5530"),m=(n("a9e3"),n("5502")),g={props:{size:{type:Number,default:130},fit:{type:String,default:"contain"},grid:{type:[Boolean,Number],default:!0},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(O["a"])({isGrid:function(){return"boolean"==typeof this.grid?this.grid:"number"==typeof this.grid&&this.grid>0},width:function(){return this.isGrid?this.size+40+"px":"100%"},height:function(){return(this.isGrid?this.size+140:this.size)+"px"}},Object(m["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var n="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+n)}}},y=(n("9945"),n("6b0d")),v=n.n(y);const k=v()(g,[["render",j],["__scopeId","data-v-c3bf1144"]]);e["a"]=k},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),i=n("1c7e"),o=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:a})},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),o=n("6eeb"),s=n("5135"),c=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),b=n("7c73"),f=n("241c").f,h=n("06cf").f,p=n("9bf2").f,j=n("58a8").trim,O="Number",m=a[O],g=m.prototype,y=c(b(g))==O,v=function(t){var e,n,r,a,i,o,s,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=j(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+l}for(i=l.slice(2),o=i.length,s=0;s<o;s++)if(c=i.charCodeAt(s),c<48||c>a)return NaN;return parseInt(i,r)}return+l};if(i(O,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var k,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(y?d((function(){g.valueOf.call(n)})):c(n)!=O)?l(new m(v(e)),n,w):v(e)},I=r?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;I.length>A;A++)s(m,k=I[A])&&!s(w,k)&&p(w,k,h(m,k));w.prototype=g,g.constructor=w,o(a,O,w)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),i=n("e8b5"),o=n("23cb"),s=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),d=n("1dde"),b=d("slice"),f=u("species"),h=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!b},{slice:function(t,e){var n,r,u,d=c(this),b=s(d.length),j=o(t,b),O=o(void 0===e?b:e,b);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[f],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(d,j,O);for(r=new(void 0===n?Array:n)(p(O-j,0)),u=0;j<O;j++,u++)j in d&&l(r,u,d[j]);return r.length=u,r}})}}]);