(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-484e9991"],{3567:function(t,e,i){"use strict";i.r(e);i("b0c0");var n=i("7a23"),c=Object(n["S"])("data-v-bfe84440");Object(n["B"])("data-v-bfe84440");var a={key:0},r={key:1},s={class:"name"},o={key:2};Object(n["z"])();var l=c((function(t,e,i,l,u,d){var b=Object(n["G"])("van-tab"),j=Object(n["G"])("van-tabs"),f=Object(n["G"])("van-cell"),O=Object(n["G"])("van-grid-item"),p=Object(n["G"])("van-grid"),h=Object(n["G"])("mall-item"),g=Object(n["G"])("van-empty"),y=Object(n["G"])("van-tree-select"),v=Object(n["G"])("BaseLayout");return Object(n["y"])(),Object(n["g"])(v,{title:"分类",nonavbar:""},{default:c((function(){return[Object(n["j"])(j,{class:"channel",active:u.state.active,"onUpdate:active":e[1]||(e[1]=function(t){return u.state.active=t}),type:"card",color:"#ee0a24",background:"transparent",sticky:"",animated:"",onChange:d.changeTab},{default:c((function(){return[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(t.$store.state.channel,(function(t,e){return Object(n["y"])(),Object(n["g"])(b,{key:e,title:t.name},null,8,["title"])})),128))]})),_:1},8,["active","onChange"]),Object(n["j"])(y,{class:"category","main-active-index":u.state.index,"onUpdate:main-active-index":e[2]||(e[2]=function(t){return u.state.index=t}),items:u.state.category,onClickNav:d.changeNav},{content:c((function(){return[3==d.deep()?(Object(n["y"])(),Object(n["g"])("div",a,[Object(n["j"])(f,{title:"查看全部","is-link":"",to:"list?cid="+u.state.cid},null,8,["to"]),(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(u.state.list.children,(function(t,e){return Object(n["y"])(),Object(n["g"])("div",{key:e},[Object(n["j"])(f,{title:t.name,"is-link":"","arrow-direction":"down",to:"list?cid="+t.cid},null,8,["title","to"]),Object(n["j"])(p,{"column-num":3,"icon-size":36,border:!1},{default:c((function(){return[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(t.children,(function(t,e){return Object(n["y"])(),Object(n["g"])(O,{key:e,icon:t.icon||"point-gift-o",style:{color:d.color()},text:t.text,to:"list?cid="+t.cid},null,8,["icon","style","text","to"])})),128))]})),_:2},1024)])})),128)),Object(n["j"])(f,{title:"猜你喜欢",to:"list?cid="+u.state.cid},null,8,["to"]),(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(u.state.list.recommend,(function(t,e){return Object(n["y"])(),Object(n["g"])(h,{key:e,item:t,list:90,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])):2==d.deep()?(Object(n["y"])(),Object(n["g"])("div",r,[Object(n["j"])(f,{title:" ",value:"查看全部","is-link":"",to:"list?cid="+u.state.cid},null,8,["to"]),(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(u.state.list.children,(function(t,e){return Object(n["y"])(),Object(n["g"])("div",{key:e},[Object(n["Q"])(Object(n["j"])(f,{class:"title",value:"更多",border:!1,to:"list?cid="+t.id,"is-link":""},{title:c((function(){return[Object(n["j"])("div",s,Object(n["K"])(t.text),1)]})),_:2},1032,["to"]),[[n["N"],t.recommend.length>0]]),(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(t.recommend,(function(t,e){return Object(n["y"])(),Object(n["g"])(h,{key:e,item:t,list:90,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])})),128))])):(Object(n["y"])(),Object(n["g"])("div",o,[Object(n["j"])(g,{description:"暂无分类"})]))]})),_:1},8,["main-active-index","items","onClickNav"])]})),_:1})})),u=i("9ef0"),d=(i("df54"),i("6b0d")),b=i.n(d);const j=b()(u["a"],[["render",l],["__scopeId","data-v-bfe84440"]]);e["default"]=j},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),c=i("5899"),a="["+c+"]",r=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),o=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(s,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},"609d":function(t,e,i){},7156:function(t,e,i){var n=i("861d"),c=i("d2bb");t.exports=function(t,e,i){var a,r;return c&&"function"==typeof(a=e.constructor)&&a!==i&&n(r=a.prototype)&&r!==i.prototype&&c(t,r),t}},"89fe":function(t,e,i){},"9ef0":function(t,e,i){"use strict";(function(t){i("a9e3"),i("ac1f"),i("5319");var n=i("7a23"),c=i("2824"),a=i("a284");e["a"]={components:{BaseLayout:c["a"],MallItem:a["a"]},name:"Category",props:{id:{type:[String,Number],default:1}},data:function(){var t=Object(n["C"])({category:[],deep:0,active:0,index:0,cid:0,list:{}});return{state:t}},created:function(){this.query()},methods:{changeTab:function(){this.$router.push("/"+this.$store.state.channel[this.state.active].type+"/category?id="+this.id)},changeNav:function(){this.state.list=this.state.category[this.state.index],this.state.cid=this.state.list.cid,this.$router.replace("/"+this.$store.state.channel[this.state.active].type+"/category?id="+this.state.cid)},query:function(){var t=this;this.state.category=[],this.state.list={},this.state.cid=0,this.$http.post("/mall/category?mid="+this.state.active).then((function(e){for(var i in t.state.category=e,e){var n=parseInt(t.id);e[i].cid==n&&(t.state.index=i)}"undefined"!=typeof t.state.category[t.state.index]&&(t.state.list=t.state.category[t.state.index],t.state.cid=t.state.list.cid)}))},deep:function(){var e=0;for(var i in this.state.list.children)"undefined"!=typeof this.state.list.children[i]&&(this.state.list.children[i].children.length>0&&(e=t.max([e,3])),e=t.max([e,2])),e=t.max([e,1]);return e},color:function(){return"rgb("+t.random(0,255)+","+t.random(100,200)+","+t.random(100,200)+")"}}}}).call(this,i("81b0"))},a284:function(t,e,i){"use strict";var n=i("7a23"),c=Object(n["S"])("data-v-0973496a");Object(n["B"])("data-v-0973496a");var a={class:"price1"},r=Object(n["j"])("span",{class:"red"},"￥",-1),s=Object(n["i"])("   "),o={class:"stock"},l=Object(n["i"])("库存 "),u={class:"red"},d=Object(n["i"])(" 件  "),b={class:"sales"},j=Object(n["i"])("月销 "),f={class:"red"},O=Object(n["i"])(" 件");Object(n["z"])();var p=c((function(t,e,i,p,h,g){var y=Object(n["G"])("van-image"),v=Object(n["G"])("van-col"),m=Object(n["G"])("van-cell"),x=Object(n["G"])("van-icon"),N=Object(n["G"])("van-row");return Object(n["y"])(),Object(n["g"])(N,{class:["item",{grid:g.isGrid}],style:{width:g.width,height:g.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return g.forward(i.item)})},{default:c((function(){return[Object(n["j"])(v,{class:"image",span:g.isGrid?24:8},{default:c((function(){return[Object(n["j"])(y,{width:"100%",height:"100%",radius:"5",fit:g.isGrid?"contain":"cover",src:i.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(n["j"])(v,{class:"intro",span:g.isGrid?24:16},{default:c((function(){return[Object(n["j"])(m,{style:{padding:"5px 5px 0 5px"},border:!1},{title:c((function(){return[Object(n["j"])("div",{class:g.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(n["K"])(i.item.title),3)]})),label:c((function(){return[Object(n["Q"])(Object(n["j"])("div",{class:"van-ellipsis"},Object(n["K"])(i.item.feature),513),[[n["N"],i.list>=100]])]})),_:1}),Object(n["j"])(m,{style:{padding:"0 10px 5px 10px"},border:!1,center:!g.isGrid},{title:c((function(){return[Object(n["j"])("span",a,[r,Object(n["i"])(" "+Object(n["K"])(i.item.price),1)]),s,Object(n["Q"])(Object(n["j"])("span",{class:"price2"}," ￥ "+Object(n["K"])(i.item.price_original),513),[[n["N"],!g.isGrid&&i.item.price_original&&i.item.price_original>0]])]})),label:c((function(){return[Object(n["Q"])(Object(n["j"])("span",o,[l,Object(n["j"])("span",u,Object(n["K"])(i.item.stock),1),d],512),[[n["N"],!g.isGrid&&i.stock&&i.item.stock]]),Object(n["Q"])(Object(n["j"])("span",b,[j,Object(n["j"])("span",f,Object(n["K"])(i.item.sales),1),O],512),[[n["N"],!g.isGrid&&i.sales&&i.item.sales]])]})),"right-icon":c((function(){return[Object(n["Q"])(Object(n["j"])(x,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(n["R"])((function(e){return t.$emit("add",i.item)}),["stop"]))},null,512),[[n["N"],i.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),h=i("5530"),g=(i("a9e3"),i("5502")),y={props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(h["a"])({isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},Object(g["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var i="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+i)}}},v=(i("b4e6"),i("6b0d")),m=i.n(v);const x=m()(y,[["render",p],["__scopeId","data-v-0973496a"]]);e["a"]=x},a9e3:function(t,e,i){"use strict";var n=i("83ab"),c=i("da84"),a=i("94ca"),r=i("6eeb"),s=i("5135"),o=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),b=i("7c73"),j=i("241c").f,f=i("06cf").f,O=i("9bf2").f,p=i("58a8").trim,h="Number",g=c[h],y=g.prototype,v=o(b(y))==h,m=function(t){var e,i,n,c,a,r,s,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=p(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+l}for(a=l.slice(2),r=a.length,s=0;s<r;s++)if(o=a.charCodeAt(s),o<48||o>c)return NaN;return parseInt(a,n)}return+l};if(a(h,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,N=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof N&&(v?d((function(){y.valueOf.call(i)})):o(i)!=h)?l(new g(m(e)),i,N):m(e)},k=n?j(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),G=0;k.length>G;G++)s(g,x=k[G])&&!s(N,x)&&O(N,x,f(g,x));N.prototype=y,y.constructor=N,r(c,h,N)}},b4e6:function(t,e,i){"use strict";i("609d")},df54:function(t,e,i){"use strict";i("89fe")}}]);