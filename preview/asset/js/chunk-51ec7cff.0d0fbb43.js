(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51ec7cff"],{"0c2f":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),a=Object(r["S"])("data-v-2132671f");Object(r["B"])("data-v-2132671f");var i=Object(r["i"])(" ~ "),c=Object(r["i"])("全部品牌");Object(r["z"])();var o=a((function(t,e,n,o,s,u){var l=Object(r["G"])("van-icon"),d=Object(r["G"])("van-col"),f=Object(r["G"])("van-search"),b=Object(r["G"])("van-row"),p=Object(r["G"])("van-dropdown-item"),h=Object(r["G"])("van-cell"),j=Object(r["G"])("van-checkbox"),O=Object(r["G"])("van-checkbox-group"),m=Object(r["G"])("van-dropdown-menu"),g=Object(r["G"])("van-sticky"),v=Object(r["G"])("mall-item"),y=Object(r["G"])("van-empty"),k=Object(r["G"])("van-list"),x=Object(r["G"])("van-pull-refresh"),w=Object(r["G"])("BaseLayout");return Object(r["y"])(),Object(r["g"])(w,{nonavbar:""},{default:a((function(){return[Object(r["j"])(g,{"offset-top":0},{default:a((function(){return[Object(r["j"])(b,{class:"toolbar",gutter:"0",justify:"space-around",align:"center"},{default:a((function(){return[Object(r["j"])(d,{span:"2"},{default:a((function(){return[Object(r["j"])(l,{name:"arrow-left",color:"#000",size:"large",onClick:e[1]||(e[1]=function(e){return t.$router.back()})})]})),_:1}),Object(r["j"])(d,{span:"17"},{default:a((function(){return[Object(r["j"])(f,{modelValue:s.state.keyword,"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.state.keyword=t}),placeholder:"请输入搜索关键词",background:"transparent","input-align":"left",onSearch:u.onSearch},null,8,["modelValue","onSearch"])]})),_:1}),Object(r["j"])(d,{span:"2"},{default:a((function(){return[Object(r["j"])(l,{name:t.showGrid?"bars":"apps-o",size:"large",onClick:t.toggleGrid},null,8,["name","onClick"])]})),_:1}),Object(r["j"])(d,{span:"2"},{default:a((function(){return[Object(r["j"])(l,{name:"cart-o",size:"large",class:s.state.animate,badge:t.profile&&t.profile.cartNumber?t.profile.cartNumber:"",onClick:e[3]||(e[3]=function(e){return t.$router.push("cart")})},null,8,["class","badge"])]})),_:1}),Object(r["j"])(d,{span:"1"})]})),_:1}),Object(r["j"])(m,null,{default:a((function(){return[Object(r["j"])(p,{modelValue:s.state.order,"onUpdate:modelValue":e[4]||(e[4]=function(t){return s.state.order=t}),options:s.state.options,onChange:u.refresh},null,8,["modelValue","options","onChange"]),Object(r["j"])(p,{title:"筛选"},{default:a((function(){return[Object(r["j"])(h,{center:"",title:"价格区间"},{default:a((function(){return[Object(r["Q"])(Object(r["j"])("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=function(t){return s.state.min=t}),style:{width:"60px"},onChange:e[6]||(e[6]=function(){return u.refresh&&u.refresh.apply(u,arguments)})},null,544),[[r["M"],s.state.min]]),i,Object(r["Q"])(Object(r["j"])("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=function(t){return s.state.max=t}),style:{width:"60px"},onChange:e[8]||(e[8]=function(){return u.refresh&&u.refresh.apply(u,arguments)})},null,544),[[r["M"],s.state.max]])]})),_:1}),Object(r["j"])(h,{title:"选择品牌"},{extra:a((function(){return[Object(r["j"])(j,{modelValue:s.state.checkbox,"onUpdate:modelValue":e[9]||(e[9]=function(t){return s.state.checkbox=t}),shape:"square",onClick:e[10]||(e[10]=function(t){s.state.brand=[],u.refresh()})},{default:a((function(){return[c]})),_:1},8,["modelValue"])]})),_:1}),Object(r["j"])(h,null,{default:a((function(){return[Object(r["j"])(O,{modelValue:s.state.brand,"onUpdate:modelValue":e[11]||(e[11]=function(t){return s.state.brand=t}),direction:"horizontal","checked-color":"#ee0a24"},{default:a((function(){return[(Object(r["y"])(!0),Object(r["g"])(r["a"],null,Object(r["E"])(s.state.brands,(function(t,e){return Object(r["y"])(),Object(r["g"])(j,{class:"checkbox",key:e,name:t,onClick:u.refresh},{default:a((function(){return[Object(r["i"])(Object(r["K"])(t),1)]})),_:2},1032,["name","onClick"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["j"])(x,{modelValue:s.state.refreshing,"onUpdate:modelValue":e[13]||(e[13]=function(t){return s.state.refreshing=t}),"loading-text":" ",onRefresh:u.refresh},{default:a((function(){return[Object(r["j"])(k,{class:"list",loading:s.state.loading,"onUpdate:loading":e[12]||(e[12]=function(t){return s.state.loading=t}),finished:s.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:u.query},{default:a((function(){return[(Object(r["y"])(!0),Object(r["g"])(r["a"],null,Object(r["E"])(s.state.list,(function(e,n){return Object(r["y"])(),Object(r["g"])(v,{grid:t.showGrid,item:e,key:n,onAdd:u.addCart},null,8,["grid","item","onAdd"])})),128)),Object(r["Q"])(Object(r["j"])(y,{style:{width:"100%"}},null,512),[[r["N"],0==s.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"])]})),_:1})})),s=n("aef8"),u=(n("4577"),n("6b0d")),l=n.n(u);const d=l()(s["a"],[["render",o],["__scopeId","data-v-2132671f"]]);e["default"]=d},"13d5":function(t,e,n){"use strict";var r=n("23e7"),a=n("d58f").left,i=n("a640"),c=n("2d00"),o=n("605d"),s=i("reduce"),u=!o&&c>79&&c<83;r({target:"Array",proto:!0,forced:!s||u},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},4577:function(t,e,n){"use strict";n("5693")},5693:function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",c=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,c;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(c=i.prototype)&&c!==n.prototype&&a(t,c),t}},8829:function(t,e,n){},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),i=n("e8b5"),c=n("861d"),o=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),b=n("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",O=b>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=d("concat"),g=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},v=!O||!m;r({target:"Array",proto:!0,forced:v},{concat:function(t){var e,n,r,a,i,c=o(this),d=l(c,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],g(i)){if(a=s(i.length),f+a>h)throw TypeError(j);for(n=0;n<a;n++,f++)n in i&&u(d,f,i[n])}else{if(f>=h)throw TypeError(j);u(d,f++,i)}return d.length=f,d}})},a15b:function(t,e,n){"use strict";var r=n("23e7"),a=n("44ad"),i=n("fc6a"),c=n("a640"),o=[].join,s=a!=Object,u=c("join",",");r({target:"Array",proto:!0,forced:s||!u},{join:function(t){return o.call(i(this),void 0===t?",":t)}})},a284:function(t,e,n){"use strict";var r=n("7a23"),a=Object(r["S"])("data-v-0973496a");Object(r["B"])("data-v-0973496a");var i={class:"price1"},c=Object(r["j"])("span",{class:"red"},"￥",-1),o=Object(r["i"])("   "),s={class:"stock"},u=Object(r["i"])("库存 "),l={class:"red"},d=Object(r["i"])(" 件  "),f={class:"sales"},b=Object(r["i"])("月销 "),p={class:"red"},h=Object(r["i"])(" 件");Object(r["z"])();var j=a((function(t,e,n,j,O,m){var g=Object(r["G"])("van-image"),v=Object(r["G"])("van-col"),y=Object(r["G"])("van-cell"),k=Object(r["G"])("van-icon"),x=Object(r["G"])("van-row");return Object(r["y"])(),Object(r["g"])(x,{class:["item",{grid:m.isGrid}],style:{width:m.width,height:m.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return m.forward(n.item)})},{default:a((function(){return[Object(r["j"])(v,{class:"image",span:m.isGrid?24:8},{default:a((function(){return[Object(r["j"])(g,{width:"100%",height:"100%",radius:"5",fit:m.isGrid?"contain":"cover",src:n.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(r["j"])(v,{class:"intro",span:m.isGrid?24:16},{default:a((function(){return[Object(r["j"])(y,{style:{padding:"5px 5px 0 5px"},border:!1},{title:a((function(){return[Object(r["j"])("div",{class:m.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(r["K"])(n.item.title),3)]})),label:a((function(){return[Object(r["Q"])(Object(r["j"])("div",{class:"van-ellipsis"},Object(r["K"])(n.item.feature),513),[[r["N"],n.list>=100]])]})),_:1}),Object(r["j"])(y,{style:{padding:"0 10px 5px 10px"},border:!1,center:!m.isGrid},{title:a((function(){return[Object(r["j"])("span",i,[c,Object(r["i"])(" "+Object(r["K"])(n.item.price),1)]),o,Object(r["Q"])(Object(r["j"])("span",{class:"price2"}," ￥ "+Object(r["K"])(n.item.price_original),513),[[r["N"],!m.isGrid&&n.item.price_original&&n.item.price_original>0]])]})),label:a((function(){return[Object(r["Q"])(Object(r["j"])("span",s,[u,Object(r["j"])("span",l,Object(r["K"])(n.item.stock),1),d],512),[[r["N"],!m.isGrid&&n.stock&&n.item.stock]]),Object(r["Q"])(Object(r["j"])("span",f,[b,Object(r["j"])("span",p,Object(r["K"])(n.item.sales),1),h],512),[[r["N"],!m.isGrid&&n.sales&&n.item.sales]])]})),"right-icon":a((function(){return[Object(r["Q"])(Object(r["j"])(k,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(r["R"])((function(e){return t.$emit("add",n.item)}),["stop"]))},null,512),[[r["N"],n.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),O=n("5530"),m=(n("a9e3"),n("5502")),g={props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(O["a"])({isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},Object(m["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var n="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+n)}}},v=(n("b4e6"),n("6b0d")),y=n.n(v);const k=y()(g,[["render",j],["__scopeId","data-v-0973496a"]]);e["a"]=k},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),c=n("6eeb"),o=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),b=n("241c").f,p=n("06cf").f,h=n("9bf2").f,j=n("58a8").trim,O="Number",m=a[O],g=m.prototype,v=s(f(g))==O,y=function(t){var e,n,r,a,i,c,o,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=j(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(i=u.slice(2),c=i.length,o=0;o<c;o++)if(s=i.charCodeAt(o),s<48||s>a)return NaN;return parseInt(i,r)}return+u};if(i(O,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var k,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(v?d((function(){g.valueOf.call(n)})):s(n)!=O)?u(new m(y(e)),n,x):y(e)},w=r?b(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;w.length>_;_++)o(m,k=w[_])&&!o(x,k)&&h(x,k,p(m,k));x.prototype=g,g.constructor=x,c(a,O,x)}},aef8:function(t,e,n){"use strict";(function(t){var r=n("5530"),a=(n("ac1f"),n("1276"),n("a15b"),n("99af"),n("13d5"),n("c740"),n("b0c0"),n("7a23")),i=n("5502"),c=n("2824"),o=n("a284");e["a"]={components:{BaseLayout:c["a"],MallItem:o["a"]},name:"List",props:{brand:{type:String,default:""},keyword:{type:String,default:"iphone"}},data:function(){var t=Object(a["C"])({keyword:"",order:0,options:[{text:"默认排序",value:0},{text:"销量",value:1},{text:"价格由低到高",value:2},{text:"价格由高到低",value:3}],min:"",max:"",brand:[],page:1,checkbox:!0,refreshing:!1,loading:!1,finished:!1,list:[],brands:[],animate:""});return{state:t}},created:function(){t.isEmpty(this.keyword)||(this.state.keyword=this.keyword),t.isEmpty(this.brand)||(this.state.brand=this.brand.split(","))},activated:function(){!this.$store.state.keepAlive&&this.refresh()},beforeRouteLeave:function(t,e,n){this.$store.commit("setScrollTop",document.getElementById("container").scrollTop),n()},computed:Object(r["a"])({},Object(i["d"])(["profile","showGrid"])),methods:Object(r["a"])({refresh:function(){this.state.checkbox=t.isEmpty(this.state.brand),this.state.loading=!0,this.state.finished=!1,this.state.page=1,this.state.list=[],this.state.brands=[],this.query()},query:function(){var e=this;this.$http.get("/jdmall/search?keyword="+this.state.keyword+"&brand="+this.state.brand.join(",")+"&order="+this.state.order+"&max="+this.state.max+"&min="+this.state.min+"&page="+this.state.page).then((function(n){e.state.refreshing=!1,0!=n.total&&0!=n.page||(e.state.finished=!0),e.state.loading=!1,e.state.page=n.page+1,e.state.list=e.state.list.concat(n.list),e.state.brands=t.reduce(n.brand,(function(e,n,r){return-1==t.findIndex(e,n["name"])&&e.push(n["name"]),e}),[])}))},onSearch:function(){this.$router.push("?keyword="+this.state.keyword),this.state.brand=[],this.state.order=0,this.state.min="",this.state.max="",this.refresh()},addCart:function(t){var e=this;this.$http.post("/mall/cartsave?spu="+t.id+"&sku="+t.id+"&num=1&status=1&channel=1").then((function(t){e.cartNumberAdd(1),e.state.animate="animate__animated animate__shakeY",setTimeout((function(){e.state.animate=""}),1e3)}))}},Object(i["c"])(["togglePopup","toggleTabbar","toggleGrid","cartNumberAdd"]))}}).call(this,n("81b0"))},b4e6:function(t,e,n){"use strict";n("8829")},c740:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").findIndex,i=n("44d2"),c="findIndex",o=!0;c in[]&&Array(1)[c]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},d58f:function(t,e,n){var r=n("1c0b"),a=n("7b0b"),i=n("44ad"),c=n("50c4"),o=function(t){return function(e,n,o,s){r(n);var u=a(e),l=i(u),d=c(u.length),f=t?d-1:0,b=t?-1:1;if(o<2)while(1){if(f in l){s=l[f],f+=b;break}if(f+=b,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=b)f in l&&(s=n(s,l[f],f,u));return s}};t.exports={left:o(!1),right:o(!0)}}}]);