(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-312da7c8"],{1287:function(t,e,i){"use strict";i("c2c8")},3567:function(t,e,i){"use strict";i.r(e);i("b0c0");var c=i("7a23"),n=Object(c["R"])("data-v-1fc609cb");Object(c["A"])("data-v-1fc609cb");var a={key:0},r={key:1},s={class:"name"},o={key:2};Object(c["y"])();var l=n((function(t,e,i,l,u,d){var b=Object(c["F"])("van-tab"),f=Object(c["F"])("van-tabs"),p=Object(c["F"])("van-cell"),O=Object(c["F"])("van-grid-item"),j=Object(c["F"])("van-grid"),h=Object(c["F"])("mall-item"),v=Object(c["F"])("van-empty"),m=Object(c["F"])("van-tree-select"),y=Object(c["F"])("BaseLayout");return Object(c["x"])(),Object(c["f"])(y,{title:"分类",nonavbar:""},{default:n((function(){return[Object(c["i"])(f,{class:"channel",active:u.state.active,"onUpdate:active":e[1]||(e[1]=function(t){return u.state.active=t}),type:"card",color:"#ee0a24",background:"transparent",sticky:"",animated:"",onChange:d.changeTab},{default:n((function(){return[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(t.$store.state.channel,(function(t,e){return Object(c["x"])(),Object(c["f"])(b,{key:e,title:t.name},null,8,["title"])})),128))]})),_:1},8,["active","onChange"]),Object(c["i"])(m,{class:"category","main-active-index":u.state.index,"onUpdate:main-active-index":e[2]||(e[2]=function(t){return u.state.index=t}),items:u.state.category,onClickNav:d.changeNav},{content:n((function(){return[3==d.deep()?(Object(c["x"])(),Object(c["f"])("div",a,[Object(c["i"])(p,{title:"查看全部","is-link":"",to:"list?cid="+u.state.cid},null,8,["to"]),(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(u.state.list.children,(function(t,e){return Object(c["x"])(),Object(c["f"])("div",{key:e},[Object(c["i"])(p,{title:t.name,"is-link":"","arrow-direction":"down",to:"list?cid="+t.cid},null,8,["title","to"]),Object(c["i"])(j,{"column-num":3,"icon-size":36,border:!1},{default:n((function(){return[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(t.children,(function(t,e){return Object(c["x"])(),Object(c["f"])(O,{key:e,icon:t.icon||"point-gift-o",style:{color:d.color()},text:t.text,to:"list?cid="+t.cid},null,8,["icon","style","text","to"])})),128))]})),_:2},1024)])})),128)),Object(c["i"])(p,{title:"猜你喜欢",to:"list?cid="+u.state.cid},null,8,["to"]),(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(u.state.list.recommend,(function(t,e){return Object(c["x"])(),Object(c["f"])(h,{key:e,item:t,list:90,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])):2==d.deep()?(Object(c["x"])(),Object(c["f"])("div",r,[Object(c["i"])(p,{title:" ",value:"查看全部","is-link":"",to:"list?cid="+u.state.cid},null,8,["to"]),(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(u.state.list.children,(function(t,e){return Object(c["x"])(),Object(c["f"])("div",{key:e},[Object(c["P"])(Object(c["i"])(p,{class:"title",value:"更多",border:!1,to:"list?cid="+t.id,"is-link":""},{title:n((function(){return[Object(c["i"])("div",s,Object(c["J"])(t.text),1)]})),_:2},1032,["to"]),[[c["M"],t.recommend.length>0]]),(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(t.recommend,(function(t,e){return Object(c["x"])(),Object(c["f"])(h,{key:e,item:t,list:90,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])})),128))])):(Object(c["x"])(),Object(c["f"])("div",o,[Object(c["i"])(v,{description:"暂无分类"})]))]})),_:1},8,["main-active-index","items","onClickNav"])]})),_:1})})),u=i("9ef0"),d=(i("862c"),i("6b0d")),b=i.n(d);const f=b()(u["a"],[["render",l],["__scopeId","data-v-1fc609cb"]]);e["default"]=f},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var c=i("1d80"),n=i("5899"),a="["+n+"]",r=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),o=function(t){return function(e){var i=String(c(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(s,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,i){var c=i("861d"),n=i("d2bb");t.exports=function(t,e,i){var a,r;return n&&"function"==typeof(a=e.constructor)&&a!==i&&c(r=a.prototype)&&r!==i.prototype&&n(t,r),t}},"862c":function(t,e,i){"use strict";i("8ca5")},"8ca5":function(t,e,i){},"9ef0":function(t,e,i){"use strict";(function(t){i("a9e3"),i("ac1f"),i("5319");var c=i("7a23"),n=i("2824"),a=i("a284");e["a"]={components:{BaseLayout:n["a"],MallItem:a["a"]},props:{type:{type:String,default:"mall"},id:{type:[String,Number],default:1}},data:function(){var t={category:[],deep:0,active:0,index:0,cid:0,list:{}};for(var e in this.$store.state.channel)this.$store.state.channel[e].type==this.type&&(t.active=parseInt(e));return t=Object(c["B"])(t),{state:t}},created:function(){this.query()},methods:{changeTab:function(){this.$router.push("/"+this.$store.state.channel[this.state.active].type+"/category?id="+this.id)},changeNav:function(){this.state.list=this.state.category[this.state.index],this.state.cid=this.state.list.cid,this.$router.replace("/"+this.$store.state.channel[this.state.active].type+"/category?id="+this.state.cid)},query:function(){var t=this;this.state.category=[],this.state.list={},this.state.cid=0,this.$http.post("/mall/category?mid="+this.state.active).then((function(e){for(var i in t.state.category=e,e){var c=parseInt(t.id);e[i].cid==c&&(t.state.index=i)}"undefined"!=typeof t.state.category[t.state.index]&&(t.state.list=t.state.category[t.state.index],t.state.cid=t.state.list.cid)}))},deep:function(){var e=0;for(var i in this.state.list.children)"undefined"!=typeof this.state.list.children[i]&&(this.state.list.children[i].children.length>0&&(e=t.max([e,3])),e=t.max([e,2])),e=t.max([e,1]);return e},color:function(){return"rgb("+t.random(0,255)+","+t.random(100,200)+","+t.random(100,200)+")"}}}}).call(this,i("81b0"))},a284:function(t,e,i){"use strict";var c=i("7a23"),n=Object(c["R"])("data-v-29343207");Object(c["A"])("data-v-29343207");var a={class:"price1"},r=Object(c["i"])("span",{class:"red"},"￥",-1),s=Object(c["h"])("   "),o={class:"stock"},l=Object(c["h"])("库存 "),u={class:"red"},d=Object(c["h"])(" 件  "),b={class:"sales"},f=Object(c["h"])("月销 "),p={class:"red"},O=Object(c["h"])(" 件");Object(c["y"])();var j=n((function(t,e,i,j,h,v){var m=Object(c["F"])("van-image"),y=Object(c["F"])("van-col"),g=Object(c["F"])("van-cell"),x=Object(c["F"])("van-icon"),k=Object(c["F"])("van-row");return Object(c["x"])(),Object(c["f"])(k,{class:["item",{grid:v.isGrid}],style:{width:v.width,height:v.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return v.forward(i.item)})},{default:n((function(){return[Object(c["i"])(y,{class:"image",span:v.isGrid?24:8},{default:n((function(){return[Object(c["i"])(m,{width:"100%",height:"100%",radius:"5",fit:v.isGrid?"contain":"cover",src:i.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(c["i"])(y,{class:"intro",span:v.isGrid?24:16},{default:n((function(){return[Object(c["i"])(g,{style:{padding:"5px 5px 0 5px"},border:!1},{title:n((function(){return[Object(c["i"])("div",{class:v.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(c["J"])(i.item.title),3)]})),label:n((function(){return[Object(c["P"])(Object(c["i"])("div",{class:"van-ellipsis"},Object(c["J"])(i.item.feature),513),[[c["M"],i.list>=100]])]})),_:1}),Object(c["i"])(g,{style:{padding:"0 10px 5px 10px"},border:!1,center:!v.isGrid},{title:n((function(){return[Object(c["i"])("span",a,[r,Object(c["h"])(" "+Object(c["J"])(i.item.price),1)]),s,Object(c["P"])(Object(c["i"])("span",{class:"price2"}," ￥ "+Object(c["J"])(i.item.price_original),513),[[c["M"],!v.isGrid&&i.item.price_original&&i.item.price_original>0]])]})),label:n((function(){return[Object(c["P"])(Object(c["i"])("span",o,[l,Object(c["i"])("span",u,Object(c["J"])(i.item.stock),1),d],512),[[c["M"],!v.isGrid&&i.stock&&i.item.stock]]),Object(c["P"])(Object(c["i"])("span",b,[f,Object(c["i"])("span",p,Object(c["J"])(i.item.sales),1),O],512),[[c["M"],!v.isGrid&&i.sales&&i.item.sales]])]})),"right-icon":n((function(){return[Object(c["P"])(Object(c["i"])(x,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(c["Q"])((function(e){return t.$emit("add",i.item)}),["stop"]))},null,512),[[c["M"],i.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),h=(i("a9e3"),{props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:{isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.type&&""!=t.type&&(e="/"+t.type+"/");var i="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+i)}}}),v=(i("1287"),i("6b0d")),m=i.n(v);const y=m()(h,[["render",j],["__scopeId","data-v-29343207"]]);e["a"]=y},a9e3:function(t,e,i){"use strict";var c=i("83ab"),n=i("da84"),a=i("94ca"),r=i("6eeb"),s=i("5135"),o=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),b=i("7c73"),f=i("241c").f,p=i("06cf").f,O=i("9bf2").f,j=i("58a8").trim,h="Number",v=n[h],m=v.prototype,y=o(b(m))==h,g=function(t){var e,i,c,n,a,r,s,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=j(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:c=2,n=49;break;case 79:case 111:c=8,n=55;break;default:return+l}for(a=l.slice(2),r=a.length,s=0;s<r;s++)if(o=a.charCodeAt(s),o<48||o>n)return NaN;return parseInt(a,c)}return+l};if(a(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var x,k=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof k&&(y?d((function(){m.valueOf.call(i)})):o(i)!=h)?l(new v(g(e)),i,k):g(e)},N=c?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;N.length>_;_++)s(v,x=N[_])&&!s(k,x)&&O(k,x,p(v,x));k.prototype=m,m.constructor=k,r(n,h,k)}},c2c8:function(t,e,i){}}]);
//# sourceMappingURL=chunk-312da7c8.44222a7e.js.map