(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55b0c78e"],{"0190":function(t,e,i){"use strict";i("7767")},"1c7b":function(t,e,i){},3567:function(t,e,i){"use strict";i.r(e);i("b0c0");var n=i("7a23"),c=Object(n["R"])("data-v-fc098540");Object(n["A"])("data-v-fc098540");var a={key:0},r={key:1},s={class:"name"},o={key:2};Object(n["y"])();var l=c((function(t,e,i,l,u,d){var b=Object(n["F"])("van-tab"),f=Object(n["F"])("van-tabs"),p=Object(n["F"])("van-cell"),O=Object(n["F"])("van-grid-item"),j=Object(n["F"])("van-grid"),h=Object(n["F"])("mall-item"),v=Object(n["F"])("van-empty"),m=Object(n["F"])("van-tree-select"),g=Object(n["F"])("BaseLayout");return Object(n["x"])(),Object(n["f"])(g,{title:"分类",nonavbar:""},{default:c((function(){return[Object(n["i"])(f,{class:"channel",active:u.state.active,"onUpdate:active":e[1]||(e[1]=function(t){return u.state.active=t}),type:"card",color:"#ee0a24",background:"transparent",sticky:"",animated:"",onChange:d.changeTab},{default:c((function(){return[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(t.$store.state.channel,(function(t,e){return Object(n["x"])(),Object(n["f"])(b,{key:e,title:t.name},null,8,["title"])})),128))]})),_:1},8,["active","onChange"]),Object(n["i"])(m,{class:"category","main-active-index":u.state.index,"onUpdate:main-active-index":e[2]||(e[2]=function(t){return u.state.index=t}),items:u.state.category,onClickNav:d.changeNav},{content:c((function(){return[3==d.deep()?(Object(n["x"])(),Object(n["f"])("div",a,[Object(n["i"])(p,{title:"查看全部","is-link":"",to:"list?cid="+u.state.cid},null,8,["to"]),(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(u.state.list.children,(function(t,e){return Object(n["x"])(),Object(n["f"])("div",{key:e},[Object(n["i"])(p,{title:t.name,"is-link":"","arrow-direction":"down",to:"list?cid="+t.cid},null,8,["title","to"]),Object(n["i"])(j,{"column-num":3,"icon-size":36,border:!1},{default:c((function(){return[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(t.children,(function(t,e){return Object(n["x"])(),Object(n["f"])(O,{key:e,icon:t.icon||"point-gift-o",style:{color:d.color()},text:t.text,to:"list?cid="+t.cid},null,8,["icon","style","text","to"])})),128))]})),_:2},1024)])})),128)),Object(n["i"])(p,{title:"猜你喜欢",to:"list?cid="+u.state.cid},null,8,["to"]),(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(u.state.list.recommend,(function(t,e){return Object(n["x"])(),Object(n["f"])(h,{key:e,item:t,list:90,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])):2==d.deep()?(Object(n["x"])(),Object(n["f"])("div",r,[Object(n["i"])(p,{title:" ",value:"查看全部","is-link":"",to:"list?cid="+u.state.cid},null,8,["to"]),(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(u.state.list.children,(function(t,e){return Object(n["x"])(),Object(n["f"])("div",{key:e},[Object(n["P"])(Object(n["i"])(p,{class:"title",value:"更多",border:!1,to:"list?cid="+t.id,"is-link":""},{title:c((function(){return[Object(n["i"])("div",s,Object(n["J"])(t.text),1)]})),_:2},1032,["to"]),[[n["M"],t.recommend.length>0]]),(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(t.recommend,(function(t,e){return Object(n["x"])(),Object(n["f"])(h,{key:e,item:t,list:90,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])})),128))])):(Object(n["x"])(),Object(n["f"])("div",o,[Object(n["i"])(v,{description:"暂无分类"})]))]})),_:1},8,["main-active-index","items","onClickNav"])]})),_:1})})),u=i("8965"),d=(i("0190"),i("d959")),b=i.n(d);const f=b()(u["a"],[["render",l],["__scopeId","data-v-fc098540"]]);e["default"]=f},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),c=i("5899"),a="["+c+"]",r=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),o=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(s,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,i){var n=i("861d"),c=i("d2bb");t.exports=function(t,e,i){var a,r;return c&&"function"==typeof(a=e.constructor)&&a!==i&&n(r=a.prototype)&&r!==i.prototype&&c(t,r),t}},7767:function(t,e,i){},8965:function(t,e,i){"use strict";(function(t){i("a9e3"),i("ac1f"),i("5319");var n=i("7a23"),c=i("2824"),a=i("a284");e["a"]={components:{BaseLayout:c["a"],MallItem:a["a"]},props:{type:{type:String,default:"mall"},id:{type:[String,Number],default:1}},data:function(){var t={category:[],deep:0,active:0,index:0,cid:0,list:{}};for(var e in this.$store.state.channel)this.$store.state.channel[e].type==this.type&&(t.active=parseInt(e));return t=Object(n["B"])(t),{state:t}},created:function(){this.changeTab()},methods:{changeTab:function(){this.$router.push("/"+this.$store.state.channel[this.state.active].type+"/category?id="+this.id),this.query()},changeNav:function(){this.state.list=this.state.category[this.state.index],this.state.cid=this.state.list.cid,this.$router.replace("/"+this.$store.state.channel[this.state.active].type+"/category?id="+this.state.cid)},query:function(){var t=this;this.state.category=[],this.state.list={},this.state.cid=0,this.$http.post("/mall/category?mid="+this.state.active).then((function(e){for(var i in t.state.category=e,e){var n=parseInt(t.id);e[i].cid==n&&(t.state.index=i)}"undefined"!=typeof t.state.category[t.state.index]&&(t.state.list=t.state.category[t.state.index],t.state.cid=t.state.list.cid)}))},deep:function(){var e=0;for(var i in this.state.list.children)"undefined"!=typeof this.state.list.children[i]&&(this.state.list.children[i].children.length>0&&(e=t.max([e,3])),e=t.max([e,2])),e=t.max([e,1]);return e},color:function(){return"rgb("+t.random(0,255)+","+t.random(100,200)+","+t.random(100,200)+")"}}}}).call(this,i("81b0"))},"8a72":function(t,e,i){"use strict";i("1c7b")},a284:function(t,e,i){"use strict";var n=i("7a23"),c=Object(n["R"])("data-v-04ea0274");Object(n["A"])("data-v-04ea0274");var a={class:"price1"},r=Object(n["i"])("span",{class:"red"},"￥",-1),s=Object(n["h"])("   "),o={class:"stock"},l=Object(n["h"])("库存 "),u={class:"red"},d=Object(n["h"])(" 件  "),b={class:"sales"},f=Object(n["h"])("月销 "),p={class:"red"},O=Object(n["h"])(" 件");Object(n["y"])();var j=c((function(t,e,i,j,h,v){var m=Object(n["F"])("van-image"),g=Object(n["F"])("van-col"),y=Object(n["F"])("van-cell"),x=Object(n["F"])("van-icon"),k=Object(n["F"])("van-row");return Object(n["x"])(),Object(n["f"])(k,{class:["item",{grid:v.isGrid}],style:{width:v.width,height:v.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return v.forward(i.item)})},{default:c((function(){return[Object(n["i"])(g,{class:"image",span:v.isGrid?24:8},{default:c((function(){return[Object(n["i"])(m,{width:"100%",height:"100%",radius:"5",fit:v.isGrid?"contain":"cover",src:i.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(n["i"])(g,{class:"intro",span:v.isGrid?24:16},{default:c((function(){return[Object(n["i"])(y,{style:{padding:"5px 5px 0 5px"},border:!1},{title:c((function(){return[Object(n["i"])("div",{class:v.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(n["J"])(i.item.title),3)]})),label:c((function(){return[Object(n["P"])(Object(n["i"])("div",{class:"van-ellipsis"},Object(n["J"])(i.item.feature),513),[[n["M"],i.list>=100]])]})),_:1}),Object(n["i"])(y,{style:{padding:"0 10px 5px 10px"},border:!1,center:!v.isGrid},{title:c((function(){return[Object(n["i"])("span",a,[r,Object(n["h"])(" "+Object(n["J"])(i.item.price),1)]),s,Object(n["P"])(Object(n["i"])("span",{class:"price2"}," ￥ "+Object(n["J"])(i.item.price_original),513),[[n["M"],!v.isGrid&&i.item.price_original&&i.item.price_original>0]])]})),label:c((function(){return[Object(n["P"])(Object(n["i"])("span",o,[l,Object(n["i"])("span",u,Object(n["J"])(i.item.stock),1),d],512),[[n["M"],!v.isGrid&&i.stock]]),Object(n["P"])(Object(n["i"])("span",b,[f,Object(n["i"])("span",p,Object(n["J"])(i.item.sales),1),O],512),[[n["M"],!v.isGrid&&i.sales&&i.item.sales]])]})),"right-icon":c((function(){return[Object(n["P"])(Object(n["i"])(x,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(n["Q"])((function(e){return t.$emit("add",i.item.id)}),["stop"]))},null,512),[[n["M"],i.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),h=(i("a9e3"),{props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:{isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},methods:{forward:function(t){var e=/\/(mall|jdmall|wymall)\//.test(this.$router.path)?"":"/mall/",i="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+i)}}}),v=(i("8a72"),i("d959")),m=i.n(v);const g=m()(h,[["render",j],["__scopeId","data-v-04ea0274"]]);e["a"]=g},a9e3:function(t,e,i){"use strict";var n=i("83ab"),c=i("da84"),a=i("94ca"),r=i("6eeb"),s=i("5135"),o=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),b=i("7c73"),f=i("241c").f,p=i("06cf").f,O=i("9bf2").f,j=i("58a8").trim,h="Number",v=c[h],m=v.prototype,g=o(b(m))==h,y=function(t){var e,i,n,c,a,r,s,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=j(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+l}for(a=l.slice(2),r=a.length,s=0;s<r;s++)if(o=a.charCodeAt(s),o<48||o>c)return NaN;return parseInt(a,n)}return+l};if(a(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var x,k=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof k&&(g?d((function(){m.valueOf.call(i)})):o(i)!=h)?l(new v(y(e)),i,k):y(e)},N=n?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;N.length>_;_++)s(v,x=N[_])&&!s(k,x)&&O(k,x,p(v,x));k.prototype=m,m.constructor=k,r(c,h,k)}}}]);
//# sourceMappingURL=chunk-55b0c78e.a3a55271.js.map