(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6939dcc6"],{"0748":function(t,e,n){},"3ea5":function(t,e,n){},"50d3":function(t,e,n){t.exports=n.p+"asset/img/icon2.cfdaf166.png"},"550a":function(t,e,n){"use strict";n("8325")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),r=n("5899"),c="["+r+"]",a=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),s=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,n){var i=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var c,a;return r&&"function"==typeof(c=e.constructor)&&c!==n&&i(a=c.prototype)&&a!==n.prototype&&r(t,a),t}},"79e7":function(t,e,n){"use strict";n("0748")},8325:function(t,e,n){},"857a":function(t,e,n){var i=n("1d80"),r=/"/g;t.exports=function(t,e,n,c){var a=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(c).replace(r,"&quot;")+'"'),o+">"+a+"</"+e+">"}},"8a49":function(t,e,n){t.exports=n.p+"asset/img/icon5.80c357cb.png"},9911:function(t,e,n){"use strict";var i=n("23e7"),r=n("857a"),c=n("af03");i({target:"String",proto:!0,forced:c("link")},{link:function(t){return r(this,"a","href",t)}})},a15b:function(t,e,n){"use strict";var i=n("23e7"),r=n("44ad"),c=n("fc6a"),a=n("a640"),o=[].join,s=r!=Object,l=a("join",",");i({target:"Array",proto:!0,forced:s||!l},{join:function(t){return o.call(c(this),void 0===t?",":t)}})},a284:function(t,e,n){"use strict";var i=n("7a23"),r=Object(i["W"])("data-v-3ee13e01");Object(i["C"])("data-v-3ee13e01");var c={class:"price1"},a=Object(i["i"])("   "),o={class:"stock"},s=Object(i["i"])("库存 "),l={class:"red"},u=Object(i["i"])(" 件  "),d={class:"sales"},g=Object(i["i"])("月销 "),f={class:"red"},b=Object(i["i"])(" 件"),p=Object(i["i"])("  ");Object(i["A"])();var j=r((function(t,e,n,j,O,h){var m=Object(i["H"])("van-image"),v=Object(i["H"])("van-col"),y=Object(i["H"])("van-cell"),k=Object(i["H"])("van-icon"),x=Object(i["H"])("van-row");return Object(i["z"])(),Object(i["g"])(x,{class:["item",{grid:h.isGrid}],style:{width:h.width,height:h.height},justify:"space-between",align:"top",onClick:e[3]||(e[3]=function(t){return h.forward(n.item)})},{default:r((function(){return[Object(i["j"])(v,{class:"image",span:h.isGrid?24:8},{default:r((function(){return[Object(i["j"])(m,{width:"100%",height:"100%",radius:"5",fit:h.isGrid?"contain":"cover",src:n.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(i["j"])(v,{class:"intro",span:h.isGrid?24:16},{default:r((function(){return[Object(i["j"])(y,{style:{padding:"5px 5px 0 5px"},border:!1},{title:r((function(){return[Object(i["j"])("div",{class:h.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(i["L"])(n.item.title),3)]})),label:r((function(){return[Object(i["T"])(Object(i["j"])("div",{class:"van-ellipsis"},Object(i["L"])(n.item.feature),513),[[i["P"],n.list>=100]])]})),_:1}),Object(i["j"])(y,{style:{padding:"0 10px 5px 10px"},border:!1,center:!h.isGrid},{title:r((function(){return[Object(i["j"])("span",c,[Object(i["j"])(k,{name:"points",color:"red"}),Object(i["i"])(" "+Object(i["L"])(n.item.price),1)]),a,Object(i["T"])(Object(i["j"])("span",{class:"price2"}," ￥ "+Object(i["L"])(n.item.price_original),513),[[i["P"],!h.isGrid&&n.item.price_original&&n.item.price_original>0]])]})),label:r((function(){return[Object(i["T"])(Object(i["j"])("span",o,[s,Object(i["j"])("span",l,Object(i["L"])(n.item.stock),1),u],512),[[i["P"],!h.isGrid&&n.stock&&n.item.stock]]),Object(i["T"])(Object(i["j"])("span",d,[g,Object(i["j"])("span",f,Object(i["L"])(n.item.sales),1),b],512),[[i["P"],!h.isGrid&&n.sales&&n.item.sales]])]})),"right-icon":r((function(){return[Object(i["T"])(Object(i["j"])(k,{name:"cash-back-record",size:"21",color:"#999",onClick:e[1]||(e[1]=Object(i["V"])((function(e){return t.$emit("compare",n.item)}),["stop"]))},{default:r((function(){return[p]})),_:1},512),[[i["P"],n.compare]]),Object(i["T"])(Object(i["j"])(k,{name:"shopping-cart",size:"21",color:"#F66",onClick:e[2]||(e[2]=Object(i["V"])((function(e){return t.$emit("add",n.item)}),["stop"]))},null,512),[[i["P"],n.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),O=n("5530"),h=(n("a9e3"),n("5502")),m={props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},compare:{type:Boolean,default:!1},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(O["a"])({isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},Object(h["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var n="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+n)}}},v=(n("550a"),n("6b0d")),y=n.n(v);const k=y()(m,[["render",j],["__scopeId","data-v-3ee13e01"]]);e["a"]=k},a9e3:function(t,e,n){"use strict";var i=n("83ab"),r=n("da84"),c=n("94ca"),a=n("6eeb"),o=n("5135"),s=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),g=n("7c73"),f=n("241c").f,b=n("06cf").f,p=n("9bf2").f,j=n("58a8").trim,O="Number",h=r[O],m=h.prototype,v=s(g(m))==O,y=function(t){var e,n,i,r,c,a,o,s,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=j(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+l}for(c=l.slice(2),a=c.length,o=0;o<a;o++)if(s=c.charCodeAt(o),s<48||s>r)return NaN;return parseInt(c,i)}return+l};if(c(O,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var k,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(v?d((function(){m.valueOf.call(n)})):s(n)!=O)?l(new h(y(e)),n,x):y(e)},A=i?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;A.length>S;S++)o(h,k=A[S])&&!o(x,k)&&p(x,k,b(h,k));x.prototype=m,m.constructor=x,a(r,O,x)}},af03:function(t,e,n){var i=n("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b45a:function(t,e,n){t.exports=n.p+"asset/img/icon1.d296c994.png"},b5c1:function(t,e,n){t.exports=n.p+"asset/img/icon3.c8b2cf78.png"},b605:function(t,e,n){t.exports=n.p+"asset/img/icon4.5385d10a.png"},bb51:function(t,e,n){"use strict";n.r(e);n("9911"),n("b0c0");var i=n("7a23"),r=Object(i["W"])("data-v-4a354b9c");Object(i["C"])("data-v-4a354b9c");var c={class:"home"},a={class:"wrapper"},o={class:"box"},s={class:"recommend"},l={class:"title"},u=Object(i["i"])("  热卖推荐 "),d={class:"list2"},g=Object(i["i"])("福鲤社");Object(i["A"])();var f=r((function(t,e,n,f,b,p){var j=Object(i["H"])("van-icon"),O=Object(i["H"])("van-search"),h=Object(i["H"])("van-sticky"),m=Object(i["H"])("van-image"),v=Object(i["H"])("van-swipe-item"),y=Object(i["H"])("van-swipe"),k=Object(i["H"])("van-notice-bar"),x=Object(i["H"])("van-grid-item"),A=Object(i["H"])("van-grid"),S=Object(i["H"])("design"),w=Object(i["H"])("mall-item"),I=Object(i["H"])("van-divider");return Object(i["z"])(),Object(i["g"])("div",c,[Object(i["j"])(h,{class:"navbar",onChange:e[2]||(e[2]=function(t){return b.state.isTop=!b.state.isTop})},{default:r((function(){return[Object(i["j"])("div",{class:"bg",style:{background:p.bg}},null,4),Object(i["j"])(O,{modelValue:b.state.keyword,"onUpdate:modelValue":e[1]||(e[1]=function(t){return b.state.keyword=t}),shape:"round",background:"transparent",style:{padding:"3px"},placeholder:"搜您想要的",clearable:"",onSearch:p.handleSearch},{left:r((function(){return[Object(i["j"])(j,{name:p.logo,size:36,class:"logo"},null,8,["name"])]})),_:1},8,["modelValue","onSearch"])]})),_:1}),Object(i["j"])("div",a,[Object(i["j"])(y,{class:"swipe",autoplay:5e3,"lazy-render":""},{default:r((function(){return[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(p.swipe,(function(t,e){return Object(i["z"])(),Object(i["g"])(v,{key:e},{default:r((function(){return[Object(i["j"])(m,{width:"100%",height:"100%",fit:"fill",src:t.image,onClick:function(e){return p.handleLink(t.link)}},null,8,["src","onClick"])]})),_:2},1024)})),128))]})),_:1})]),Object(i["T"])(Object(i["j"])(k,{class:"notice","left-icon":"volume-o",scrollable:"",text:t.config.notice?t.config.notice:""},null,8,["text"]),[[i["P"],t.config.notice&&t.config.notice.length>5]]),Object(i["j"])(A,{class:"toolbar","column-num":"5","icon-size":"40",border:!1},{default:r((function(){return[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(p.grid,(function(t,e){return Object(i["z"])(),Object(i["g"])(x,{key:e,icon:t.image,text:t.name,onClick:function(e){return p.handleLink(t.link)}},null,8,["icon","text","onClick"])})),128))]})),_:1}),Object(i["j"])("div",o,[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(b.state.design,(function(t,e){return Object(i["z"])(),Object(i["g"])(S,Object(i["q"])({key:e,debug:!n.production},t,{onOnLinkClick:p.handleLink}),null,16,["debug","onOnLinkClick"])})),128))]),Object(i["j"])("div",s,[Object(i["j"])("div",l,[Object(i["j"])(j,{name:"fire",color:"#F66",size:"18"}),u,Object(i["j"])("div",{class:"more",onClick:e[3]||(e[3]=function(e){return t.$router.push("/mall/category")})},"更多 ⋙")]),Object(i["j"])("div",d,[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(b.state.list,(function(t,e){return Object(i["z"])(),Object(i["g"])(w,{key:e,item:t,grid:160,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])]),Object(i["j"])(I,{class:"copyright"},{default:r((function(){return[g]})),_:1})])})),b=n("5530"),p=n("5502"),j=Object(i["W"])("data-v-3dac0fbd"),O=j((function(t,e,n,r,c,a){var o=Object(i["H"])("van-col"),s=Object(i["H"])("van-row");return n.id?(Object(i["z"])(),Object(i["g"])("div",{key:0,class:"block",style:a.getStyle()},[Object(i["j"])("div",{class:"bg",style:a.getBackground()},null,4),Object(i["j"])(s,{gutter:parseInt(n.gutter),justify:n.justify,align:n.align,wrap:!0},{default:j((function(){return[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(c.list,(function(e,r){return Object(i["z"])(),Object(i["g"])(o,{key:r,span:e.span,style:{marginTop:parseInt(n.gutter)+"px"},onClick:function(n){return t.$emit("onLinkClick",e.link)}},{default:j((function(){return[Object(i["j"])("div",{class:"cell",style:a.getCellStyle(e.style)},[Object(i["T"])(Object(i["j"])("img",{class:"image",fit:"contain",src:e.image,style:a.getImageStyle(e.style),onerror:"this.src='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='"},null,12,["src"]),[[i["P"],a.hasImage(e)]]),Object(i["T"])(Object(i["j"])("div",{class:"text",style:a.hasImage(e)?a.getTextStyle(e.style):{}},[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(e.text,(function(e,n){return Object(i["z"])(),Object(i["g"])("div",{key:n,style:a.getTextItemStyle(e),innerHTML:t.$safeHTML(e.content)},null,12,["innerHTML"])})),128))],4),[[i["P"],a.hasText(e.text)]])],4)]})),_:2},1032,["span","style","onClick"])})),128))]})),_:1},8,["gutter","justify","align"])],4)):Object(i["h"])("",!0)}));n("a4d3"),n("b64b");function h(t,e){if(null==t)return{};var n,i,r={},c=Object.keys(t);for(i=0;i<c.length;i++)n=c[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}function m(t,e){if(null==t)return{};var n,i,r=h(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(i=0;i<c.length;i++)n=c[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n("a9e3"),n("ac1f"),n("5319"),n("d3b7"),n("25f0"),n("a15b"),n("1276");var v={props:{debug:{type:Boolean,default:!1},id:{type:String,default:""},name:{type:String,default:""},background:{type:Object,default:function(){return{}}},style:{type:Object,default:function(){return{}}},column:{type:[String,Number],default:2},gutter:{type:[String,Number],default:0},justify:{type:String,default:"space-between"},align:{type:String,default:"center"},cell:{type:Object,default:function(){return{}}},goods:{type:String,default:function(){return""}}},data:function(){var t=Object(i["E"])({});return{list:t}},created:function(){this.init()},watch:{cell:function(t,e){t!==e&&this.init()},goods:function(t,e){t!==e&&this.init()}},methods:{init:function(){var t=this;if(/\d+/.test(this.goods)){var e=Object(i["M"])(this.cell),n='{"cell_{{id}}":{"style":{"background":"#FFFFFF","padding":"10","borderRadius":"10","flexDirection":"column"},"span":"12","link":"/{{type}}/item?id={{id}}","image":"{{cover}}","text":{"text1_{{id}}":{"color":"","fontSize":"14","fontWeight":"normal","lineHeight":"150%","textAlign":"justify","content":"{{title}}"},"text2_{{id}}":{"color":"#FF0000","fontSize":"14","fontWeight":"bold","lineHeight":"200%","textAlign":"left","content":"￥{{price1}}"},"text3_{{id}}":{"color":"","fontSize":"12","fontWeight":"line-through","lineHeight":"200%","textAlign":"right","content":"￥{{price2}}"}}}}',r=this.goods.replace("，",",").replace(/[^\d|,]+/g,"");this.$http.get("/mall/itemmultdetail?ids="+r).then((function(i){for(var r in i){var c=n.replace(/{{type}}/g,i[r]["id"]<1e4?"mall":"jdmall").replace(/{{id}}/g,i[r]["id"]).replace(/{{title}}/g,i[r]["title"].substr(0,24)).replace(/{{cover}}/g,i[r]["cover"]).replace(/{{price1}}/g,i[r]["price"]).replace(/{{price2}}/g,parseInt(1.5*i[r]["price"]));e=Object(b["a"])(Object(b["a"])({},e),JSON.parse(c))}t.list=e}))}else this.list=this.cell},getStyle:function(){var t=this.style,e=t.margin,n=t.padding,i=t.borderRadius,r=m(t,["margin","padding","borderRadius"]);return r.marginTop=e+"px",r.padding=this.getPadding(n),r.borderRadius=i+"px",r},getBackground:function(){var t=this.background,e=t.backgroundColor,n=t.backgroundImage;return!/\(/.test(n)&&(n="url("+n+")"),{backgroundColor:e,backgroundImage:n}},getCellStyle:function(t){var e=t.padding,n=t.borderRadius,i=(t.layout,m(t,["padding","borderRadius","layout"]));return i.padding=this.getPadding(e),i.border=this.debug?"dotted 1px #FCC":"",i.borderRadius=n+"px",i},getImageStyle:function(t){var e={borderRadius:t.borderRadius+"px"};return e=/row/.test(t.flexDirection)?Object(b["a"])(Object(b["a"])({},e),{maxWidth:"200px",height:"100%"}):Object(b["a"])(Object(b["a"])({},e),{width:"100%",maxheight:"200px"}),e},getTextStyle:function(t){var e={},n=/reverse/.test(t.flexDirection);return/column/.test(t.flexDirection)?e[n?"marginBottom":"marginTop"]="10px":e[n?"marginRight":"marginLeft"]="10px",e},getTextItemStyle:function(t){t.content;var e=t.fontWeight,n=t.textAlign,i=m(t,["content","fontWeight","textAlign"]);return i.fontSize=i.fontSize+"px",/line/.test(e)?i.textDecoration=e:i.fontWeight=e,/^(left|right)$/.test(n)?i.float=n:(i.width="100%",i.textAlign=n,i.clear="both"),i},hasImage:function(t){return t.image&&t.image.length>0},hasText:function(t){var e=!1;for(var n in t)if(t[n].content&&t[n].content.length>0){e=!0;break}return e},getPadding:function(t){return!/\d+/.test(t)&&(t=0),t=t.toString().replace(/^[\s]+/g,"").replace(/[\s]+$/g,"").replace(/[^0-9 ]/gi,""),t.length>0?t.split(/\s+/).join("px ")+"px":""}}},y=(n("fc8a"),n("6b0d")),k=n.n(y);const x=k()(v,[["render",O],["__scopeId","data-v-3dac0fbd"]]);var A=x,S=n("a284"),w={name:"Home",components:{Design:A,MallItem:S["a"]},props:{production:{type:Boolean,default:!1}},data:function(){var t=Object(i["D"])({isTop:!0,keyword:"",list:[],design:[],data:""});return{state:t}},created:function(){var t=this;this.state.design=this.config.design?JSON.parse(this.config.design):[],this.production||window.addEventListener("message",(function(e){var n=e.data;if(n.length>0&&n!=t.state.data){t.state.data=n;try{t.state.design=JSON.parse(n)}catch(e){t.state.design=[]}}})),this.$http.get("/mall/itemlist?recommend=1&order=9&limit=20").then((function(e){t.state.list=e}))},mounted:function(){this.toggleTabbar(!0)},computed:Object(b["a"])({bg:function(){return this.state.isTop?"transparent":"#FFF"},logo:function(){return this.config.logo&&this.config.logo.length>10?this.config.logo:"goods-collect"},swipe:function(){var t=[{image:n("f0b4"),link:""},{image:n("c288"),link:""}];if(this.config.swipe)try{t=JSON.parse(this.config.swipe)}catch(e){console.error("config error")}return t},grid:function(){var t=[{image:n("b45a"),name:"鲜花直送",link:"/mall/list?cid=2"},{image:n("50d3"),name:"幸福西饼",link:"/mall/list?cid=11"},{image:n("b5c1"),name:"礼品定制",link:"/mall/list?cid=4"},{image:n("8a49"),name:"充值中心",link:"/recharge"},{image:n("b605"),name:"积分转让",link:"/my/exchange"}];if(this.config.grid)try{t=JSON.parse(this.config.grid)}catch(e){console.error("config error")}return t}},Object(p["d"])(["config"])),methods:Object(b["a"])({handleSearch:function(){this.$router.push("/jdmall/list?keyword="+this.state.keyword)},handleLink:function(t){this.$forward(t)}},Object(p["c"])(["auth","toggleTabbar"]))};n("79e7");const I=k()(w,[["render",f],["__scopeId","data-v-4a354b9c"]]);e["default"]=I},c288:function(t,e,n){t.exports=n.p+"asset/img/banner2.efbd995e.png"},f0b4:function(t,e,n){t.exports=n.p+"asset/img/banner1.20e046de.png"},fc8a:function(t,e,n){"use strict";n("3ea5")}}]);