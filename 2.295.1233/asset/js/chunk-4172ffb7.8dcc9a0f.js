(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4172ffb7"],{3567:function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("7a23"),c=Object(i["X"])("data-v-05f5f852");Object(i["D"])("data-v-05f5f852");var a={key:0},r={class:"name"},s={key:2},o={class:"line"};Object(i["B"])();var l=c((function(t,e,n,l,u,d){var b=Object(i["I"])("van-tab"),f=Object(i["I"])("van-tabs"),p=Object(i["I"])("van-cell"),h=Object(i["I"])("van-grid-item"),j=Object(i["I"])("van-grid"),O=Object(i["I"])("van-empty"),g=Object(i["I"])("mall-item"),m=Object(i["I"])("van-tree-select"),y=Object(i["I"])("BaseLayout");return Object(i["A"])(),Object(i["g"])(y,{title:"分类",navbar:"hide"},{default:c((function(){return[Object(i["k"])(f,{class:"channel",active:u.state.active,"onUpdate:active":e[1]||(e[1]=function(t){return u.state.active=t}),type:"card",color:"#ee0a24",background:"transparent",sticky:"",animated:"",onChange:d.changeTab},{default:c((function(){return[(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(t.$store.state.channel,(function(t,e){return Object(i["A"])(),Object(i["g"])(b,{key:e,title:t.name},null,8,["title"])})),128))]})),_:1},8,["active","onChange"]),Object(i["k"])(m,{class:"category","main-active-index":u.state.index,"onUpdate:main-active-index":e[2]||(e[2]=function(t){return u.state.index=t}),items:u.state.allCategory,onClickNav:d.changeNav},{content:c((function(){return[Object(i["k"])(p,{title:" ",value:"查看全部",to:"list?cid="+u.state.curCategory.id,"is-link":""},null,8,["to"]),(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(u.state.curCategory.children,(function(t,e){return Object(i["A"])(),Object(i["g"])("div",{key:e},[d.deep()>=2?(Object(i["A"])(),Object(i["g"])("div",a,[Object(i["k"])(p,{class:"title",value:"更多",border:!1,to:"list?cid="+t.id,"is-link":""},{title:c((function(){return[Object(i["k"])("div",r,Object(i["M"])(t.text),1)]})),_:2},1032,["to"]),d.deep()>2?(Object(i["A"])(),Object(i["g"])(j,{key:0,"column-num":3,"icon-size":36,border:!1},{default:c((function(){return[(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(t.children,(function(t,e){return Object(i["U"])((Object(i["A"])(),Object(i["g"])(h,{key:e,icon:t.icon||"point-gift-o",style:{color:d.color()},text:t.text,to:"list?cid="+t.id},null,8,["icon","style","text","to"])),[[i["Q"],t.status>0]])})),128))]})),_:2},1024)):Object(i["h"])("",!0)])):(Object(i["A"])(),Object(i["g"])(O,{key:1,description:"暂无分类"})),u.state.recommend[t.id]&&u.state.recommend[t.id].length>0?(Object(i["A"])(),Object(i["g"])("div",s,[Object(i["U"])(Object(i["k"])("hr",o,null,512),[[i["Q"],t.children.length>0]]),(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(u.state.recommend[t.id],(function(t,e){return Object(i["A"])(),Object(i["g"])(g,{key:e,item:t,list:90,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])):(Object(i["A"])(),Object(i["g"])(O,{key:3,"image-size":"64",description:"暂无推荐商品"}))])})),128))]})),_:1},8,["main-active-index","items","onClickNav"])]})),_:1})})),u=n("9ef0"),d=(n("e4f6"),n("6b0d")),b=n.n(d);const f=b()(u["a"],[["render",l],["__scopeId","data-v-05f5f852"]]);e["default"]=f},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),c=n("5899"),a="["+c+"]",r=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,n){var i=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var a,r;return c&&"function"==typeof(a=e.constructor)&&a!==n&&i(r=a.prototype)&&r!==n.prototype&&c(t,r),t}},"78c5":function(t,e,n){},"9ef0":function(t,e,n){"use strict";(function(t){n("a9e3"),n("4de4"),n("ac1f"),n("5319"),n("a15b"),n("d81d");var i=n("7a23"),c=n("2824"),a=n("a284");e["a"]={components:{BaseLayout:c["a"],MallItem:a["a"]},name:"Category",props:{id:{type:[String,Number],default:4}},data:function(){var t=Object(i["E"])({active:0,index:0,allCategory:[],curCategory:{},recommend:[]});return{state:t}},created:function(){this.init()},watch:{$route:function(t,e){t.query!=e.query&&setTimeout(this.query,100)}},methods:{changeTab:function(){this.$router.push("/"+this.$store.state.channel[this.state.active].type+"/category")},changeNav:function(e){this.state.index=e,this.state.curCategory=this.state.allCategory[e],this.state.curCategory["children"]=t.filter(Object(i["N"])(this.state.curCategory["children"]),{status:"1"}),this.$router.replace("/"+this.$store.state.channel[this.state.active].type+"/category?id="+this.state.curCategory.id)},init:function(){var e=this;this.state.allCategory=[],this.state.curCategory={},this.$http.get("/mall/category?channel=mall&deep=2").then((function(n){for(var c in e.state.allCategory=t.filter(n,{status:"1"}),n)if(n[c].id==parseInt(e.id)){e.state.index=c;break}"undefined"!=typeof n[e.state.index]&&(e.state.curCategory=n[e.state.index],e.state.curCategory["children"]=t.filter(Object(i["N"])(e.state.curCategory["children"]),{status:"1"})),e.query()}))},query:function(){var e=this;this.$http.get("/mall/itemmultlist?cid="+t.map(this.state.curCategory.children,"id").join(",")+"&limit=5").then((function(t){e.state.recommend=t}))},deep:function(){var e=0;for(var n in this.state.curCategory.children)"undefined"!=typeof this.state.curCategory.children[n].children&&(this.state.curCategory.children[n].children.length>0&&(e=t.max([e,3])),e=t.max([e,2])),e=t.max([e,1]);return e},color:function(){return"rgb("+t.random(0,255)+","+t.random(100,200)+","+t.random(100,200)+")"}}}}).call(this,n("81b0"))},a15b:function(t,e,n){"use strict";var i=n("23e7"),c=n("44ad"),a=n("fc6a"),r=n("a640"),s=[].join,o=c!=Object,l=r("join",",");i({target:"Array",proto:!0,forced:o||!l},{join:function(t){return s.call(a(this),void 0===t?",":t)}})},a284:function(t,e,n){"use strict";var i=n("7a23"),c=Object(i["X"])("data-v-694cdb8a");Object(i["D"])("data-v-694cdb8a");var a={class:"van-multi-ellipsis--l2"},r={class:"price1"},s=Object(i["j"])("   "),o={class:"stock"},l=Object(i["j"])("库存 "),u={class:"red"},d=Object(i["j"])(" 件  "),b={class:"sales"},f=Object(i["j"])("月销 "),p={class:"red"},h=Object(i["j"])(" 件");Object(i["B"])();var j=c((function(t,e,n,j,O,g){var m=Object(i["I"])("van-image"),y=Object(i["I"])("van-col"),v=Object(i["I"])("van-cell"),k=Object(i["I"])("van-icon"),I=Object(i["I"])("van-row");return Object(i["A"])(),Object(i["g"])(I,{class:["item",{grid:g.isGrid}],style:{width:g.width,height:g.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return g.forward(n.item)})},{default:c((function(){return[Object(i["k"])(y,{class:"image",span:g.isGrid?24:8},{default:c((function(){return[Object(i["k"])(m,{width:"100%",height:"100%",radius:"5",fit:g.isGrid?"contain":"cover",src:n.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(i["k"])(y,{class:"intro",span:g.isGrid?24:16},{default:c((function(){return[Object(i["k"])(v,{style:{padding:"5px 5px 0 5px"},border:!1},{title:c((function(){return[Object(i["k"])("div",a,Object(i["M"])(n.item.title),1)]})),label:c((function(){return[Object(i["U"])(Object(i["k"])("div",{class:"van-ellipsis"},Object(i["M"])(n.item.feature),513),[[i["Q"],!g.isGrid&&n.list>=100]])]})),_:1}),Object(i["k"])(v,{style:{padding:"0 10px 5px 10px"},border:!1,center:!g.isGrid},{title:c((function(){return[Object(i["k"])("span",r,[Object(i["k"])(k,{name:"points",color:"red"}),Object(i["j"])(" "+Object(i["M"])(n.item.price),1)]),s,Object(i["U"])(Object(i["k"])("span",{class:"price2"}," ￥ "+Object(i["M"])(n.item.price_original),513),[[i["Q"],!g.isGrid&&n.item.price_original&&n.item.price_original>0]])]})),label:c((function(){return[Object(i["U"])(Object(i["k"])("span",o,[l,Object(i["k"])("span",u,Object(i["M"])(n.item.stock),1),d],512),[[i["Q"],!g.isGrid&&n.stock&&n.item.stock]]),Object(i["U"])(Object(i["k"])("span",b,[f,Object(i["k"])("span",p,Object(i["M"])(n.item.sales),1),h],512),[[i["Q"],!g.isGrid&&n.sales&&n.item.sales]])]})),"right-icon":c((function(){return[Object(i["U"])(Object(i["k"])(k,{name:"shopping-cart",size:"21",color:"#F66",onClick:e[1]||(e[1]=Object(i["W"])((function(e){return t.$emit("add",n.item)}),["stop"]))},null,512),[[i["Q"],n.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),O=n("5530"),g=(n("a9e3"),n("5502")),m={props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(O["a"])({isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},Object(g["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var n="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+n)}}},y=(n("f3bc"),n("6b0d")),v=n.n(y);const k=v()(m,[["render",j],["__scopeId","data-v-694cdb8a"]]);e["a"]=k},a9e3:function(t,e,n){"use strict";var i=n("83ab"),c=n("da84"),a=n("94ca"),r=n("6eeb"),s=n("5135"),o=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),b=n("7c73"),f=n("241c").f,p=n("06cf").f,h=n("9bf2").f,j=n("58a8").trim,O="Number",g=c[O],m=g.prototype,y=o(b(m))==O,v=function(t){var e,n,i,c,a,r,s,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=j(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,c=49;break;case 79:case 111:i=8,c=55;break;default:return+l}for(a=l.slice(2),r=a.length,s=0;s<r;s++)if(o=a.charCodeAt(s),o<48||o>c)return NaN;return parseInt(a,i)}return+l};if(a(O,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(y?d((function(){m.valueOf.call(n)})):o(n)!=O)?l(new g(v(e)),n,I):v(e)},x=i?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;x.length>C;C++)s(g,k=x[C])&&!s(I,k)&&h(I,k,p(g,k));I.prototype=m,m.constructor=I,r(c,O,I)}},ab7a:function(t,e,n){},d81d:function(t,e,n){"use strict";var i=n("23e7"),c=n("b727").map,a=n("1dde"),r=a("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},e4f6:function(t,e,n){"use strict";n("ab7a")},f3bc:function(t,e,n){"use strict";n("78c5")}}]);