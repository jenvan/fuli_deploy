(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f76abf7"],{"07a9":function(t,e,n){},"50d3":function(t,e,n){t.exports=n.p+"asset/img/icon2.cfdaf166.png"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),r=n("5899"),a="["+r+"]",c=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7055:function(t,e,n){"use strict";n("abd6")},7156:function(t,e,n){var i=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,c;return r&&"function"==typeof(a=e.constructor)&&a!==n&&i(c=a.prototype)&&c!==n.prototype&&r(t,c),t}},7366:function(t,e,n){},"857a":function(t,e,n){var i=n("1d80"),r=/"/g;t.exports=function(t,e,n,a){var c=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),o+">"+c+"</"+e+">"}},"8a49":function(t,e,n){t.exports=n.p+"asset/img/icon5.80c357cb.png"},9911:function(t,e,n){"use strict";var i=n("23e7"),r=n("857a"),a=n("af03");i({target:"String",proto:!0,forced:a("link")},{link:function(t){return r(this,"a","href",t)}})},a15b:function(t,e,n){"use strict";var i=n("23e7"),r=n("44ad"),a=n("fc6a"),c=n("a640"),o=[].join,s=r!=Object,l=c("join",",");i({target:"Array",proto:!0,forced:s||!l},{join:function(t){return o.call(a(this),void 0===t?",":t)}})},a284:function(t,e,n){"use strict";var i=n("7a23"),r=Object(i["S"])("data-v-1453947a");Object(i["B"])("data-v-1453947a");var a={class:"price1"},c=Object(i["i"])("   "),o={class:"stock"},s=Object(i["i"])("库存 "),l={class:"red"},u=Object(i["i"])(" 件  "),d={class:"sales"},g=Object(i["i"])("月销 "),b={class:"red"},f=Object(i["i"])(" 件");Object(i["z"])();var p=r((function(t,e,n,p,j,O){var h=Object(i["G"])("van-image"),m=Object(i["G"])("van-col"),y=Object(i["G"])("van-cell"),v=Object(i["G"])("van-icon"),k=Object(i["G"])("van-row");return Object(i["y"])(),Object(i["g"])(k,{class:["item",{grid:O.isGrid}],style:{width:O.width,height:O.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return O.forward(n.item)})},{default:r((function(){return[Object(i["j"])(m,{class:"image",span:O.isGrid?24:8},{default:r((function(){return[Object(i["j"])(h,{width:"100%",height:"100%",radius:"5",fit:O.isGrid?"contain":"cover",src:n.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(i["j"])(m,{class:"intro",span:O.isGrid?24:16},{default:r((function(){return[Object(i["j"])(y,{style:{padding:"5px 5px 0 5px"},border:!1},{title:r((function(){return[Object(i["j"])("div",{class:O.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(i["K"])(n.item.title),3)]})),label:r((function(){return[Object(i["Q"])(Object(i["j"])("div",{class:"van-ellipsis"},Object(i["K"])(n.item.feature),513),[[i["N"],n.list>=100]])]})),_:1}),Object(i["j"])(y,{style:{padding:"0 10px 5px 10px"},border:!1,center:!O.isGrid},{title:r((function(){return[Object(i["j"])("span",a,[Object(i["j"])(v,{name:"points",color:"red"}),Object(i["i"])(" "+Object(i["K"])(n.item.price),1)]),c,Object(i["Q"])(Object(i["j"])("span",{class:"price2"}," ￥ "+Object(i["K"])(n.item.price_original),513),[[i["N"],!O.isGrid&&n.item.price_original&&n.item.price_original>0]])]})),label:r((function(){return[Object(i["Q"])(Object(i["j"])("span",o,[s,Object(i["j"])("span",l,Object(i["K"])(n.item.stock),1),u],512),[[i["N"],!O.isGrid&&n.stock&&n.item.stock]]),Object(i["Q"])(Object(i["j"])("span",d,[g,Object(i["j"])("span",b,Object(i["K"])(n.item.sales),1),f],512),[[i["N"],!O.isGrid&&n.sales&&n.item.sales]])]})),"right-icon":r((function(){return[Object(i["Q"])(Object(i["j"])(v,{name:"shopping-cart",size:"21",color:"#F66",onClick:e[1]||(e[1]=Object(i["R"])((function(e){return t.$emit("add",n.item)}),["stop"]))},null,512),[[i["N"],n.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),j=n("5530"),O=(n("a9e3"),n("5502")),h={props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(j["a"])({isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},Object(O["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var n="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+n)}}},m=(n("fa3e"),n("6b0d")),y=n.n(m);const v=y()(h,[["render",p],["__scopeId","data-v-1453947a"]]);e["a"]=v},a9e3:function(t,e,n){"use strict";var i=n("83ab"),r=n("da84"),a=n("94ca"),c=n("6eeb"),o=n("5135"),s=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),g=n("7c73"),b=n("241c").f,f=n("06cf").f,p=n("9bf2").f,j=n("58a8").trim,O="Number",h=r[O],m=h.prototype,y=s(g(m))==O,v=function(t){var e,n,i,r,a,c,o,s,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=j(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+l}for(a=l.slice(2),c=a.length,o=0;o<c;o++)if(s=a.charCodeAt(o),s<48||s>r)return NaN;return parseInt(a,i)}return+l};if(a(O,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var k,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(y?d((function(){m.valueOf.call(n)})):s(n)!=O)?l(new h(v(e)),n,x):v(e)},A=i?b(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;A.length>w;w++)o(h,k=A[w])&&!o(x,k)&&p(x,k,f(h,k));x.prototype=m,m.constructor=x,c(r,O,x)}},abd6:function(t,e,n){},af03:function(t,e,n){var i=n("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b45a:function(t,e,n){t.exports=n.p+"asset/img/icon1.d296c994.png"},b5c1:function(t,e,n){t.exports=n.p+"asset/img/icon3.c8b2cf78.png"},b605:function(t,e,n){t.exports=n.p+"asset/img/icon4.5385d10a.png"},bb51:function(t,e,n){"use strict";n.r(e);n("9911"),n("b0c0");var i=n("7a23"),r=Object(i["S"])("data-v-74a0e35d");Object(i["B"])("data-v-74a0e35d");var a={class:"home"},c={class:"wrapper"},o={class:"box"},s={class:"recommend"},l={class:"title"},u=Object(i["i"])("  热卖推荐 "),d={class:"list2"},g=Object(i["i"])("福鲤社");Object(i["z"])();var b=r((function(t,e,n,b,f,p){var j=Object(i["G"])("van-icon"),O=Object(i["G"])("van-search"),h=Object(i["G"])("van-sticky"),m=Object(i["G"])("van-image"),y=Object(i["G"])("van-swipe-item"),v=Object(i["G"])("van-swipe"),k=Object(i["G"])("van-notice-bar"),x=Object(i["G"])("van-grid-item"),A=Object(i["G"])("van-grid"),w=Object(i["G"])("design"),S=Object(i["G"])("mall-item"),N=Object(i["G"])("van-divider");return Object(i["y"])(),Object(i["g"])("div",a,[Object(i["j"])(h,{class:"navbar",onChange:e[2]||(e[2]=function(t){return f.state.isTop=!f.state.isTop})},{default:r((function(){return[Object(i["j"])("div",{class:"bg",style:{background:p.bg}},null,4),Object(i["j"])(O,{modelValue:f.state.keyword,"onUpdate:modelValue":e[1]||(e[1]=function(t){return f.state.keyword=t}),shape:"round",background:"transparent",style:{padding:"3px"},placeholder:"搜您想要的",clearable:"",onSearch:p.handleSearch},{left:r((function(){return[Object(i["j"])(j,{name:p.logo,size:36,class:"logo"},null,8,["name"])]})),_:1},8,["modelValue","onSearch"])]})),_:1}),Object(i["j"])("div",c,[Object(i["j"])(v,{class:"swipe",autoplay:5e3,"lazy-render":""},{default:r((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(p.swipe,(function(t,e){return Object(i["y"])(),Object(i["g"])(y,{key:e},{default:r((function(){return[Object(i["j"])(m,{width:"100%",height:"100%",fit:"fill",src:t.image,onClick:function(e){return p.handleLink(t.link)}},null,8,["src","onClick"])]})),_:2},1024)})),128))]})),_:1})]),Object(i["Q"])(Object(i["j"])(k,{class:"notice","left-icon":"volume-o",scrollable:"",text:t.config.notice?t.config.notice:""},null,8,["text"]),[[i["N"],t.config.notice&&t.config.notice.length>5]]),Object(i["j"])(A,{class:"toolbar","column-num":"5","icon-size":"40",border:!1},{default:r((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(p.grid,(function(t,e){return Object(i["y"])(),Object(i["g"])(x,{key:e,icon:t.image,text:t.name,onClick:function(e){return p.handleLink(t.link)}},null,8,["icon","text","onClick"])})),128))]})),_:1}),Object(i["j"])("div",o,[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(f.state.design,(function(t,e){return Object(i["y"])(),Object(i["g"])(w,Object(i["p"])({key:e,debug:!n.production},t,{onOnLinkClick:p.handleLink}),null,16,["debug","onOnLinkClick"])})),128))]),Object(i["j"])("div",s,[Object(i["j"])("div",l,[Object(i["j"])(j,{name:"fire",color:"#F66",size:"18"}),u,Object(i["j"])("div",{class:"more",onClick:e[3]||(e[3]=function(e){return t.$router.push("/mall/category")})},"更多 >>")]),Object(i["j"])("div",d,[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(f.state.list,(function(t,e){return Object(i["y"])(),Object(i["g"])(S,{key:e,item:t,grid:160,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])]),Object(i["j"])(N,{class:"copyright"},{default:r((function(){return[g]})),_:1})])})),f=n("5530"),p=n("5502"),j=Object(i["S"])("data-v-03a15d88"),O=j((function(t,e,n,r,a,c){var o=Object(i["G"])("van-col"),s=Object(i["G"])("van-row");return n.id?(Object(i["y"])(),Object(i["g"])("div",{key:0,class:"block",style:c.getStyle()},[Object(i["j"])("div",{class:"bg",style:c.getBackground()},null,4),Object(i["j"])(s,{gutter:parseInt(n.gutter),justify:n.justify,align:n.align,wrap:!0},{default:j((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(n.cell,(function(e,r){return Object(i["y"])(),Object(i["g"])(o,{key:r,span:e.span,style:{marginBottom:parseInt(n.gutter)+"px"},onClick:function(n){return t.$emit("onLinkClick",e.link)}},{default:j((function(){return[Object(i["j"])("div",{class:"cell",style:c.getCellStyle(e.style)},[Object(i["Q"])(Object(i["j"])("img",{class:"image",fit:"contain",src:e.image,style:c.getImageStyle(e.style),onerror:"this.src='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='"},null,12,["src"]),[[i["N"],c.hasImage(e)]]),Object(i["Q"])(Object(i["j"])("div",{class:"text",style:c.hasImage(e)?c.getTextStyle(e.style):{}},[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(e.text,(function(e,n){return Object(i["y"])(),Object(i["g"])("div",{key:n,style:c.getTextItemStyle(e),innerHTML:t.$safeHTML(e.content)},null,12,["innerHTML"])})),128))],4),[[i["N"],c.hasText(e.text)]])],4)]})),_:2},1032,["span","style","onClick"])})),128))]})),_:1},8,["gutter","justify","align"])],4)):Object(i["h"])("",!0)}));n("a4d3"),n("b64b");function h(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}function m(t,e){if(null==t)return{};var n,i,r=h(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n("a9e3"),n("ac1f"),n("5319"),n("a15b"),n("1276");var y={props:{debug:{type:Boolean,default:!1},id:{type:String,default:""},name:{type:String,default:""},background:{type:Object,default:function(){return{}}},style:{type:Object,default:function(){return{}}},column:{type:[String,Number],default:2},gutter:{type:[String,Number],default:0},justify:{type:String,default:"space-between"},align:{type:String,default:"center"},cell:{type:Object,default:function(){return{}}}},methods:{getStyle:function(){var t=this.style,e=t.margin,n=t.padding,i=t.borderRadius,r=m(t,["margin","padding","borderRadius"]);return r.margin=e+"px 0",r.padding=this.getPadding(n),r.borderRadius=i+"px",r},getBackground:function(){var t=this.background,e=t.backgroundColor,n=t.backgroundImage;return!/\(/.test(n)&&(n="url("+n+")"),{backgroundColor:e,backgroundImage:n}},getCellStyle:function(t){var e=t.padding,n=t.borderRadius,i=(t.layout,m(t,["padding","borderRadius","layout"]));return i.padding=this.getPadding(e),i.border=this.debug?"dotted 1px #FCC":"",i.borderRadius=n+"px",i},getImageStyle:function(t){var e={borderRadius:t.borderRadius+"px"};return e=/row/.test(t.flexDirection)?Object(f["a"])(Object(f["a"])({},e),{maxWidth:"200px",height:"100%"}):Object(f["a"])(Object(f["a"])({},e),{width:"100%",maxheight:"200px"}),e},getTextStyle:function(t){var e={},n=/reverse/.test(t.flexDirection);return/column/.test(t.flexDirection)?e[n?"marginBottom":"marginTop"]="10px":e[n?"marginRight":"marginLeft"]="10px",e},getTextItemStyle:function(t){t.content;var e=t.fontWeight,n=t.textAlign,i=m(t,["content","fontWeight","textAlign"]);return i.fontSize=i.fontSize+"px",/line/.test(e)?i.textDecoration=e:i.fontWeight=e,/^(left|right)$/.test(n)?i.float=n:(i.width="100%",i.textAlign=n,i.clear="both"),i},hasImage:function(t){return t.image&&t.image.length>0},hasText:function(t){var e=!1;for(var n in t)if(t[n].content&&t[n].content.length>0){e=!0;break}return e},getPadding:function(t){return t=t.replace(/^[\s]+/g,"").replace(/[\s]+$/g,"").replace(/[^0-9 ]/gi,""),t.length>0?t.split(/\s+/).join("px ")+"px":""}}},v=(n("ee51"),n("6b0d")),k=n.n(v);const x=k()(y,[["render",O],["__scopeId","data-v-03a15d88"]]);var A=x,w=n("a284"),S={name:"Home",components:{Design:A,MallItem:w["a"]},props:{production:{type:Boolean,default:!1}},data:function(){var t=Object(i["C"])({isTop:!0,keyword:"",list:[],design:[],data:""});return{state:t}},created:function(){var t=this;this.state.design=this.config.design?JSON.parse(this.config.design):[],this.production||window.addEventListener("message",(function(e){var n=e.data;if(n.length>0&&n!=t.state.data){t.state.data=n;try{t.state.design=JSON.parse(n)}catch(e){t.state.design=[]}console.warn("RECV:",JSON.parse(n))}})),this.$http.get("/mall/itemlist?recommend=1&order=9&limit=50").then((function(e){t.state.list=e}))},mounted:function(){this.toggleTabbar(!0)},computed:Object(f["a"])({bg:function(){return this.state.isTop?"transparent":"#FFF"},logo:function(){return this.config.logo&&this.config.logo.length>10?this.config.logo:"goods-collect"},swipe:function(){var t=[{image:n("f0b4"),link:""},{image:n("c288"),link:""}];if(this.config.swipe)try{t=JSON.parse(this.config.swipe)}catch(e){console.error("config error")}return t},grid:function(){var t=[{image:n("b45a"),name:"鲜花直送",link:"/mall/list?cid=2"},{image:n("50d3"),name:"幸福西饼",link:"/mall/list?cid=11"},{image:n("b5c1"),name:"礼品定制",link:"/mall/list?cid=4"},{image:n("8a49"),name:"充值中心",link:"/recharge"},{image:n("b605"),name:"积分转让",link:"/my/exchange"}];if(this.config.grid)try{t=JSON.parse(this.config.grid)}catch(e){console.error("config error")}return t}},Object(p["d"])(["config"])),methods:Object(f["a"])({handleSearch:function(){this.$router.push("/jdmall/list?keyword="+this.state.keyword)},handleLink:function(t){this.$forward(t)}},Object(p["c"])(["auth","toggleTabbar"]))};n("7055");const N=k()(S,[["render",b],["__scopeId","data-v-74a0e35d"]]);e["default"]=N},c288:function(t,e,n){t.exports=n.p+"asset/img/banner2.efbd995e.png"},ee51:function(t,e,n){"use strict";n("7366")},f0b4:function(t,e,n){t.exports=n.p+"asset/img/banner1.20e046de.png"},fa3e:function(t,e,n){"use strict";n("07a9")}}]);