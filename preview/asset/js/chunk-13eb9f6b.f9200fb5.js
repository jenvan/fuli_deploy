(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13eb9f6b"],{"1c7b":function(t,e,i){},"29ba":function(t,e,i){"use strict";i.r(e);var n=i("7a23"),a=Object(n["R"])("data-v-5b156ab4"),r=a((function(t,e,i,r,s,c){var o=Object(n["F"])("mall-item"),l=Object(n["F"])("van-empty"),u=Object(n["F"])("van-list"),f=Object(n["F"])("van-pull-refresh"),d=Object(n["F"])("BaseLayout");return Object(n["x"])(),Object(n["f"])(d,{title:"我的关注"},{default:a((function(){return[Object(n["i"])(f,{modelValue:r.state.refreshing,"onUpdate:modelValue":e[2]||(e[2]=function(t){return r.state.refreshing=t}),onRefresh:c.onRefresh},{default:a((function(){return[Object(n["i"])(u,{class:"list",loading:r.state.loading,"onUpdate:loading":e[1]||(e[1]=function(t){return r.state.loading=t}),finished:r.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:c.onLoad},{default:a((function(){return[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(r.state.list,(function(t,e){return Object(n["x"])(),Object(n["f"])(o,{grid:!1,item:t,key:e,cart:!1,sales:!1,stock:!1},null,8,["item"])})),128)),Object(n["P"])(Object(n["i"])(l,{style:{width:"100%"}},null,512),[[n["M"],0==r.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"])]})),_:1})})),s=i("5530"),c=i("2824"),o=i("a284"),l={components:{BaseLayout:c["a"],MallItem:o["a"]},setup:function(){var t=Object(n["B"])({refreshing:!1,loading:!1,finished:!1,list:[],offset:0,limit:20});return{state:t}},mounted:function(){this.onRefresh()},methods:{onRefresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/mall/interestList?type=1&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var i in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var n=e[i];t.state.list.push(Object(s["a"])(Object(s["a"])({},n),{cover:n.image}))}}))}}};i("3b43");l.render=r,l.__scopeId="data-v-5b156ab4";e["default"]=l},"3b43":function(t,e,i){"use strict";i("d76c")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),a=i("5899"),r="["+a+"]",s=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),o=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(s,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,i){var n=i("861d"),a=i("d2bb");t.exports=function(t,e,i){var r,s;return a&&"function"==typeof(r=e.constructor)&&r!==i&&n(s=r.prototype)&&s!==i.prototype&&a(t,s),t}},"8a72":function(t,e,i){"use strict";i("1c7b")},a284:function(t,e,i){"use strict";var n=i("7a23"),a=Object(n["R"])("data-v-04ea0274");Object(n["A"])("data-v-04ea0274");var r={class:"price1"},s=Object(n["i"])("span",{class:"red"},"￥",-1),c=Object(n["h"])("   "),o={class:"stock"},l=Object(n["h"])("库存 "),u={class:"red"},f=Object(n["h"])(" 件  "),d={class:"sales"},b=Object(n["h"])("月销 "),p={class:"red"},h=Object(n["h"])(" 件");Object(n["y"])();var O=a((function(t,e,i,O,j,g){var m=Object(n["F"])("van-image"),v=Object(n["F"])("van-col"),y=Object(n["F"])("van-cell"),_=Object(n["F"])("van-icon"),I=Object(n["F"])("van-row");return Object(n["x"])(),Object(n["f"])(I,{class:["item",{grid:g.isGrid}],style:{width:g.width,height:g.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return g.forward(i.item)})},{default:a((function(){return[Object(n["i"])(v,{class:"image",span:g.isGrid?24:8},{default:a((function(){return[Object(n["i"])(m,{width:"100%",height:"100%",radius:"5",fit:g.isGrid?"contain":"cover",src:i.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(n["i"])(v,{class:"intro",span:g.isGrid?24:16},{default:a((function(){return[Object(n["i"])(y,{style:{padding:"5px 5px 0 5px"},border:!1},{title:a((function(){return[Object(n["i"])("div",{class:g.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(n["J"])(i.item.title),3)]})),label:a((function(){return[Object(n["P"])(Object(n["i"])("div",{class:"van-ellipsis"},Object(n["J"])(i.item.feature),513),[[n["M"],i.list>=100]])]})),_:1}),Object(n["i"])(y,{style:{padding:"0 10px 5px 10px"},border:!1,center:!g.isGrid},{title:a((function(){return[Object(n["i"])("span",r,[s,Object(n["h"])(" "+Object(n["J"])(i.item.price),1)]),c,Object(n["P"])(Object(n["i"])("span",{class:"price2"}," ￥ "+Object(n["J"])(i.item.price_original),513),[[n["M"],!g.isGrid&&i.item.price_original&&i.item.price_original>0]])]})),label:a((function(){return[Object(n["P"])(Object(n["i"])("span",o,[l,Object(n["i"])("span",u,Object(n["J"])(i.item.stock),1),f],512),[[n["M"],!g.isGrid&&i.stock]]),Object(n["P"])(Object(n["i"])("span",d,[b,Object(n["i"])("span",p,Object(n["J"])(i.item.sales),1),h],512),[[n["M"],!g.isGrid&&i.sales&&i.item.sales]])]})),"right-icon":a((function(){return[Object(n["P"])(Object(n["i"])(_,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(n["Q"])((function(e){return t.$emit("add",i.item.id)}),["stop"]))},null,512),[[n["M"],i.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),j=(i("a9e3"),{props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:{isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},methods:{forward:function(t){var e=/\/(mall|jdmall|wymall)\//.test(this.$router.path)?"":"/mall/",i="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+i)}}});i("8a72");j.render=O,j.__scopeId="data-v-04ea0274";e["a"]=j},a9e3:function(t,e,i){"use strict";var n=i("83ab"),a=i("da84"),r=i("94ca"),s=i("6eeb"),c=i("5135"),o=i("c6b6"),l=i("7156"),u=i("c04e"),f=i("d039"),d=i("7c73"),b=i("241c").f,p=i("06cf").f,h=i("9bf2").f,O=i("58a8").trim,j="Number",g=a[j],m=g.prototype,v=o(d(m))==j,y=function(t){var e,i,n,a,r,s,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=O(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(r=l.slice(2),s=r.length,c=0;c<s;c++)if(o=r.charCodeAt(c),o<48||o>a)return NaN;return parseInt(r,n)}return+l};if(r(j,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var _,I=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof I&&(v?f((function(){m.valueOf.call(i)})):o(i)!=j)?l(new g(y(e)),i,I):y(e)},x=n?b(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;x.length>N;N++)c(g,_=x[N])&&!c(I,_)&&h(I,_,p(g,_));I.prototype=m,m.constructor=I,s(a,j,I)}},d76c:function(t,e,i){}}]);
//# sourceMappingURL=chunk-13eb9f6b.f9200fb5.js.map