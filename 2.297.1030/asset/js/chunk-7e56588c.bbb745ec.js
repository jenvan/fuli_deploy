(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e56588c"],{3567:function(t,e,i){"use strict";i.r(e);i("b0c0");var n=i("7a23"),c=Object(n["X"])("data-v-05f5f852");Object(n["D"])("data-v-05f5f852");var a={key:0},r={class:"name"},s={key:2},o={class:"line"};Object(n["B"])();var l=c((function(t,e,i,l,u,d){var b=Object(n["I"])("van-tab"),f=Object(n["I"])("van-tabs"),h=Object(n["I"])("van-cell"),j=Object(n["I"])("van-grid-item"),p=Object(n["I"])("van-grid"),O=Object(n["I"])("van-empty"),g=Object(n["I"])("mall-item"),m=Object(n["I"])("van-tree-select"),v=Object(n["I"])("BaseLayout");return Object(n["A"])(),Object(n["g"])(v,{title:"分类",navbar:"hide"},{default:c((function(){return[Object(n["k"])(f,{class:"channel",active:u.state.active,"onUpdate:active":e[1]||(e[1]=function(t){return u.state.active=t}),type:"card",color:"#ee0a24",background:"transparent",sticky:"",animated:"",onChange:d.changeTab},{default:c((function(){return[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(t.$store.state.channel,(function(t,e){return Object(n["A"])(),Object(n["g"])(b,{key:e,title:t.name},null,8,["title"])})),128))]})),_:1},8,["active","onChange"]),Object(n["k"])(m,{class:"category","main-active-index":u.state.index,"onUpdate:main-active-index":e[2]||(e[2]=function(t){return u.state.index=t}),items:u.state.allCategory,onClickNav:d.changeNav},{content:c((function(){return[Object(n["k"])(h,{title:" ",value:"查看全部",to:"list?cid="+u.state.curCategory.id,"is-link":""},null,8,["to"]),(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(u.state.curCategory.children,(function(t,e){return Object(n["A"])(),Object(n["g"])("div",{key:e},[d.deep()>=2?(Object(n["A"])(),Object(n["g"])("div",a,[Object(n["k"])(h,{class:"title",value:"更多",border:!1,to:"list?cid="+t.id,"is-link":""},{title:c((function(){return[Object(n["k"])("div",r,Object(n["M"])(t.text),1)]})),_:2},1032,["to"]),d.deep()>2?(Object(n["A"])(),Object(n["g"])(p,{key:0,"column-num":3,"icon-size":36,border:!1},{default:c((function(){return[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(t.children,(function(t,e){return Object(n["U"])((Object(n["A"])(),Object(n["g"])(j,{key:e,icon:t.icon||"point-gift-o",style:{color:d.color()},text:t.text,to:"list?cid="+t.id},null,8,["icon","style","text","to"])),[[n["Q"],t.status>0]])})),128))]})),_:2},1024)):Object(n["h"])("",!0)])):(Object(n["A"])(),Object(n["g"])(O,{key:1,description:"暂无分类"})),u.state.recommend[t.id]&&u.state.recommend[t.id].length>0?(Object(n["A"])(),Object(n["g"])("div",s,[Object(n["U"])(Object(n["k"])("hr",o,null,512),[[n["Q"],t.children.length>0]]),(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(u.state.recommend[t.id],(function(t,e){return Object(n["A"])(),Object(n["g"])(g,{key:e,item:t,list:90,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])):(Object(n["A"])(),Object(n["g"])(O,{key:3,"image-size":"64",description:"暂无推荐商品"}))])})),128))]})),_:1},8,["main-active-index","items","onClickNav"])]})),_:1})})),u=i("9ef0"),d=(i("e4f6"),i("6b0d")),b=i.n(d);const f=b()(u["a"],[["render",l],["__scopeId","data-v-05f5f852"]]);e["default"]=f},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),c=i("5899"),a="["+c+"]",r=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),o=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(s,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,i){var n=i("861d"),c=i("d2bb");t.exports=function(t,e,i){var a,r;return c&&"function"==typeof(a=e.constructor)&&a!==i&&n(r=a.prototype)&&r!==i.prototype&&c(t,r),t}},"83cc":function(t,e,i){},"9ef0":function(t,e,i){"use strict";(function(t){i("a9e3"),i("4de4"),i("ac1f"),i("5319"),i("a15b"),i("d81d");var n=i("7a23"),c=i("2824"),a=i("a284");e["a"]={components:{BaseLayout:c["a"],MallItem:a["a"]},name:"Category",props:{id:{type:[String,Number],default:4}},data:function(){var t=Object(n["E"])({active:0,index:0,allCategory:[],curCategory:{},recommend:[]});return{state:t}},created:function(){this.init()},watch:{$route:function(t,e){t.query!=e.query&&setTimeout(this.query,100)}},methods:{changeTab:function(){this.$router.push("/"+this.$store.state.channel[this.state.active].type+"/category")},changeNav:function(e){this.state.index=e,this.state.curCategory=this.state.allCategory[e],this.state.curCategory["children"]=t.filter(Object(n["N"])(this.state.curCategory["children"]),{status:"1"}),this.$router.replace("/"+this.$store.state.channel[this.state.active].type+"/category?id="+this.state.curCategory.id)},init:function(){var e=this;this.state.allCategory=[],this.state.curCategory={},this.$http.get("/mall/category?channel=mall&deep=2").then((function(i){for(var c in e.state.allCategory=t.filter(i,{status:"1"}),i)if(i[c].id==parseInt(e.id)){e.state.index=c;break}"undefined"!=typeof i[e.state.index]&&(e.state.curCategory=i[e.state.index],e.state.curCategory["children"]=t.filter(Object(n["N"])(e.state.curCategory["children"]),{status:"1"})),e.query()}))},query:function(){var e=this;this.$http.get("/mall/itemmultlist?cid="+t.map(this.state.curCategory.children,"id").join(",")+"&limit=5").then((function(t){e.state.recommend=t}))},deep:function(){var e=0;for(var i in this.state.curCategory.children)"undefined"!=typeof this.state.curCategory.children[i].children&&(this.state.curCategory.children[i].children.length>0&&(e=t.max([e,3])),e=t.max([e,2])),e=t.max([e,1]);return e},color:function(){return"rgb("+t.random(0,255)+","+t.random(100,200)+","+t.random(100,200)+")"}}}}).call(this,i("81b0"))},a15b:function(t,e,i){"use strict";var n=i("23e7"),c=i("44ad"),a=i("fc6a"),r=i("a640"),s=[].join,o=c!=Object,l=r("join",",");n({target:"Array",proto:!0,forced:o||!l},{join:function(t){return s.call(a(this),void 0===t?",":t)}})},a284:function(t,e,i){"use strict";var n=i("7a23"),c=Object(n["X"])("data-v-0d493a3b");Object(n["D"])("data-v-0d493a3b");var a={class:"van-multi-ellipsis--l2"},r={class:"price1"},s=Object(n["j"])("   "),o={class:"stock"},l=Object(n["j"])("库存 "),u={class:"red"},d=Object(n["j"])(" 件  "),b={class:"sales"},f=Object(n["j"])("月销 "),h={class:"red"},j=Object(n["j"])(" 件");Object(n["B"])();var p=c((function(t,e,i,p,O,g){var m=Object(n["I"])("van-image"),v=Object(n["I"])("van-cell"),y=Object(n["I"])("van-icon");return Object(n["A"])(),Object(n["g"])("div",{class:["item",{grid:g.isGrid}],style:{width:g.width,height:g.height},onClick:e[2]||(e[2]=function(t){return g.forward(i.item)})},[Object(n["k"])(m,{class:"image",style:{width:g.isGrid?"100%":g.height,height:g.isGrid?g.width:"100%"},radius:"5",fit:i.fit,src:i.item.cover},null,8,["style","fit","src"]),Object(n["k"])("div",{class:"intro",style:{width:g.isGrid?"100%":"calc(100% - "+g.height+")",height:g.isGrid?"calc(100% - "+g.width+")":"100%"}},[Object(n["k"])(v,{style:{padding:"5px 5px 0 5px"},border:!1},{title:c((function(){return[Object(n["k"])("div",a,Object(n["M"])(i.item.title),1)]})),label:c((function(){return[Object(n["U"])(Object(n["k"])("div",{class:"van-ellipsis"},Object(n["M"])(i.item.feature),513),[[n["Q"],!g.isGrid&&i.size>=100]])]})),_:1}),Object(n["k"])(v,{style:{padding:"0 10px 5px 10px"},border:!1,center:!g.isGrid},{title:c((function(){return[Object(n["k"])("span",r,[Object(n["k"])(y,{name:"points",color:"red"}),Object(n["j"])(" "+Object(n["M"])(i.item.price),1)]),s,Object(n["U"])(Object(n["k"])("span",{class:"price2"}," ￥ "+Object(n["M"])(i.item.price_original),513),[[n["Q"],!g.isGrid&&i.item.price_original&&i.item.price_original>0]])]})),label:c((function(){return[Object(n["U"])(Object(n["k"])("span",o,[l,Object(n["k"])("span",u,Object(n["M"])(i.item.stock),1),d],512),[[n["Q"],!g.isGrid&&i.stock&&i.item.stock]]),Object(n["U"])(Object(n["k"])("span",b,[f,Object(n["k"])("span",h,Object(n["M"])(i.item.sales),1),j],512),[[n["Q"],!g.isGrid&&i.sales&&i.item.sales]])]})),"right-icon":c((function(){return[Object(n["U"])(Object(n["k"])(y,{name:"shopping-cart",size:"21",color:"#F66",onClick:e[1]||(e[1]=Object(n["W"])((function(e){return t.$emit("add",i.item)}),["stop"]))},null,512),[[n["Q"],i.cart]])]})),_:1},8,["center"]),Object(n["H"])(t.$slots,"default",{},void 0,!0)],4)],6)})),O=i("5530"),g=(i("a9e3"),i("5502")),m={props:{size:{type:Number,default:130},fit:{type:String,default:"contain"},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(O["a"])({isGrid:function(){return"boolean"==typeof this.grid?this.grid:"number"==typeof this.grid&&this.grid>0},width:function(){return this.isGrid?this.size+40+"px":"100vw"},height:function(){return(this.isGrid?this.size+140:this.size)+"px"}},Object(g["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var i="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+i)}}},v=(i("c00f"),i("6b0d")),y=i.n(v);const k=y()(m,[["render",p],["__scopeId","data-v-0d493a3b"]]);e["a"]=k},a9e3:function(t,e,i){"use strict";var n=i("83ab"),c=i("da84"),a=i("94ca"),r=i("6eeb"),s=i("5135"),o=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),b=i("7c73"),f=i("241c").f,h=i("06cf").f,j=i("9bf2").f,p=i("58a8").trim,O="Number",g=c[O],m=g.prototype,v=o(b(m))==O,y=function(t){var e,i,n,c,a,r,s,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=p(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+l}for(a=l.slice(2),r=a.length,s=0;s<r;s++)if(o=a.charCodeAt(s),o<48||o>c)return NaN;return parseInt(a,n)}return+l};if(a(O,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,I=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof I&&(v?d((function(){m.valueOf.call(i)})):o(i)!=O)?l(new g(y(e)),i,I):y(e)},x=n?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;x.length>C;C++)s(g,k=x[C])&&!s(I,k)&&j(I,k,h(g,k));I.prototype=m,m.constructor=I,r(c,O,I)}},ab7a:function(t,e,i){},c00f:function(t,e,i){"use strict";i("83cc")},d81d:function(t,e,i){"use strict";var n=i("23e7"),c=i("b727").map,a=i("1dde"),r=a("map");n({target:"Array",proto:!0,forced:!r},{map:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},e4f6:function(t,e,i){"use strict";i("ab7a")}}]);