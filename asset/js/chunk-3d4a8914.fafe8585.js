(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d4a8914"],{1253:function(t,e,n){},"3ea5":function(t,e,n){},"50d3":function(t,e,n){t.exports=n.p+"asset/img/icon2.cfdaf166.png"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),c=n("5899"),r="["+c+"]",a=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),s=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"5f6c":function(t,e,n){"use strict";n("dcb0")},7156:function(t,e,n){var i=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var r,a;return c&&"function"==typeof(r=e.constructor)&&r!==n&&i(a=r.prototype)&&a!==n.prototype&&c(t,a),t}},"857a":function(t,e,n){var i=n("1d80"),c=/"/g;t.exports=function(t,e,n,r){var a=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),o+">"+a+"</"+e+">"}},"8a49":function(t,e,n){t.exports=n.p+"asset/img/icon5.80c357cb.png"},9911:function(t,e,n){"use strict";var i=n("23e7"),c=n("857a"),r=n("af03");i({target:"String",proto:!0,forced:r("link")},{link:function(t){return c(this,"a","href",t)}})},a15b:function(t,e,n){"use strict";var i=n("23e7"),c=n("44ad"),r=n("fc6a"),a=n("a640"),o=[].join,s=c!=Object,l=a("join",",");i({target:"Array",proto:!0,forced:s||!l},{join:function(t){return o.call(r(this),void 0===t?",":t)}})},a284:function(t,e,n){"use strict";var i=n("7a23"),c=Object(i["X"])("data-v-74ca0ab6");Object(i["D"])("data-v-74ca0ab6");var r={class:"van-multi-ellipsis--l2"},a={class:"price1"},o=Object(i["j"])("   "),s={class:"stock"},l=Object(i["j"])("库存 "),u={class:"red"},d=Object(i["j"])(" 件  "),g={class:"sales"},f=Object(i["j"])("月销 "),b={class:"red"},p=Object(i["j"])(" 件");Object(i["B"])();var h=c((function(t,e,n,h,j,O){var m=Object(i["I"])("van-image"),k=Object(i["I"])("van-cell"),v=Object(i["I"])("van-icon");return Object(i["A"])(),Object(i["g"])("div",{class:["item",{grid:O.isGrid}],style:{width:O.width,height:O.height},onClick:e[2]||(e[2]=function(t){return O.forward(n.item)})},[Object(i["k"])(m,{class:"image",style:{width:O.isGrid?"100%":O.height,height:O.isGrid?O.width:"100%"},radius:"5",fit:n.fit,src:n.item.cover},null,8,["style","fit","src"]),Object(i["k"])("div",{class:"intro",style:{width:O.isGrid?"100%":"calc(100% - "+O.height+")",height:O.isGrid?"calc(100% - "+O.width+")":"100%"}},[Object(i["k"])(k,{style:{padding:"5px 5px 0 5px"},border:!1},{title:c((function(){return[Object(i["k"])("div",r,Object(i["M"])(n.item.title),1)]})),label:c((function(){return[Object(i["U"])(Object(i["k"])("div",{class:"van-ellipsis"},Object(i["M"])(n.item.feature),513),[[i["Q"],!O.isGrid&&n.size>=100]])]})),_:1}),Object(i["k"])(k,{style:{padding:"0 10px 5px 10px"},border:!1,center:!O.isGrid},{title:c((function(){return[Object(i["k"])("span",a,[Object(i["k"])(v,{name:"points",color:"red"}),Object(i["j"])(" "+Object(i["M"])(n.item.price),1)]),o,Object(i["U"])(Object(i["k"])("span",{class:"price2"}," ￥ "+Object(i["M"])(n.item.price_original),513),[[i["Q"],!O.isGrid&&n.item.price_original&&n.item.price_original>0]])]})),label:c((function(){return[Object(i["U"])(Object(i["k"])("span",s,[l,Object(i["k"])("span",u,Object(i["M"])(n.item.stock),1),d],512),[[i["Q"],!O.isGrid&&n.stock&&n.item.stock]]),Object(i["U"])(Object(i["k"])("span",g,[f,Object(i["k"])("span",b,Object(i["M"])(n.item.sales),1),p],512),[[i["Q"],!O.isGrid&&n.sales&&n.item.sales]])]})),"right-icon":c((function(){return[Object(i["U"])(Object(i["k"])(v,{name:"shopping-cart",size:"21",color:"#F66",onClick:e[1]||(e[1]=Object(i["W"])((function(e){return t.$emit("add",n.item)}),["stop"]))},null,512),[[i["Q"],n.cart]])]})),_:1},8,["center"]),Object(i["H"])(t.$slots,"default",{},void 0,!0)],4)],6)})),j=n("5530"),O=(n("a9e3"),n("5502")),m={props:{size:{type:Number,default:130},fit:{type:String,default:"contain"},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(j["a"])({isGrid:function(){return"boolean"==typeof this.grid?this.grid:"number"==typeof this.grid&&this.grid>0},width:function(){return this.isGrid?this.size+40+"px":"100%"},height:function(){return(this.isGrid?this.size+140:this.size)+"px"}},Object(O["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var n="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+n)}}},k=(n("5f6c"),n("6b0d")),v=n.n(k);const y=v()(m,[["render",h],["__scopeId","data-v-74ca0ab6"]]);e["a"]=y},a9e3:function(t,e,n){"use strict";var i=n("83ab"),c=n("da84"),r=n("94ca"),a=n("6eeb"),o=n("5135"),s=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),g=n("7c73"),f=n("241c").f,b=n("06cf").f,p=n("9bf2").f,h=n("58a8").trim,j="Number",O=c[j],m=O.prototype,k=s(g(m))==j,v=function(t){var e,n,i,c,r,a,o,s,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,c=49;break;case 79:case 111:i=8,c=55;break;default:return+l}for(r=l.slice(2),a=r.length,o=0;o<a;o++)if(s=r.charCodeAt(o),s<48||s>c)return NaN;return parseInt(r,i)}return+l};if(r(j,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var y,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(k?d((function(){m.valueOf.call(n)})):s(n)!=j)?l(new O(v(e)),n,x):v(e)},A=i?f(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;A.length>I;I++)o(O,y=A[I])&&!o(x,y)&&p(x,y,b(O,y));x.prototype=m,m.constructor=x,a(c,j,x)}},af03:function(t,e,n){var i=n("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b1df:function(t,e,n){"use strict";n("1253")},b45a:function(t,e,n){t.exports=n.p+"asset/img/icon1.d296c994.png"},b5c1:function(t,e,n){t.exports=n.p+"asset/img/icon3.c8b2cf78.png"},b605:function(t,e,n){t.exports=n.p+"asset/img/icon4.5385d10a.png"},bb51:function(t,e,n){"use strict";n.r(e);n("9911"),n("b0c0");var i=n("7a23"),c=Object(i["X"])("data-v-f46cd298");Object(i["D"])("data-v-f46cd298");var r={class:"home"},a={class:"wrapper"},o={class:"box"},s={class:"recommend",style:{display:"none"}},l={class:"title"},u=Object(i["j"])("  热卖推荐 "),d={class:"list2"},g=Object(i["j"])("福鲤社");Object(i["B"])();var f=c((function(t,e,n,f,b,p){var h=Object(i["I"])("van-icon"),j=Object(i["I"])("van-search"),O=Object(i["I"])("van-sticky"),m=Object(i["I"])("van-image"),k=Object(i["I"])("van-swipe-item"),v=Object(i["I"])("van-swipe"),y=Object(i["I"])("van-notice-bar"),x=Object(i["I"])("van-grid-item"),A=Object(i["I"])("van-grid"),I=Object(i["I"])("design"),S=Object(i["I"])("mall-item"),w=Object(i["I"])("van-divider");return Object(i["A"])(),Object(i["g"])("div",r,[Object(i["k"])(O,{class:"navbar",onChange:e[2]||(e[2]=function(t){return b.state.isTop=!b.state.isTop})},{default:c((function(){return[Object(i["k"])("div",{class:"bg",style:{background:p.bg}},null,4),Object(i["k"])(j,{modelValue:b.state.keyword,"onUpdate:modelValue":e[1]||(e[1]=function(t){return b.state.keyword=t}),shape:"round",background:"transparent",style:{padding:"3px"},placeholder:"搜您想要的",clearable:"",onSearch:p.handleSearch},{left:c((function(){return[Object(i["k"])(h,{name:p.logo,size:36,class:"logo"},null,8,["name"])]})),_:1},8,["modelValue","onSearch"])]})),_:1}),Object(i["k"])("div",a,[Object(i["k"])(v,{class:"swipe",autoplay:5e3,"lazy-render":""},{default:c((function(){return[(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(p.swipe,(function(t,e){return Object(i["A"])(),Object(i["g"])(k,{key:e},{default:c((function(){return[Object(i["k"])(m,{width:"100%",height:"100%",fit:"fill",src:t.image,onClick:function(e){return p.handleLink(t.link)}},null,8,["src","onClick"])]})),_:2},1024)})),128))]})),_:1})]),Object(i["U"])(Object(i["k"])(y,{class:"notice","left-icon":"volume-o",scrollable:"",text:t.config.notice?t.config.notice:""},null,8,["text"]),[[i["Q"],t.config.notice&&t.config.notice.length>5]]),Object(i["k"])(A,{class:"toolbar","column-num":"5","icon-size":"40",border:!1},{default:c((function(){return[(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(p.grid,(function(t,e){return Object(i["A"])(),Object(i["g"])(x,{key:e,icon:t.image,text:t.name,onClick:function(e){return p.handleLink(t.link)}},null,8,["icon","text","onClick"])})),128))]})),_:1}),Object(i["k"])("div",o,[(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(b.state.design,(function(t,e){return Object(i["A"])(),Object(i["g"])(I,Object(i["r"])({key:e,debug:!n.production},t,{onOnLinkClick:p.handleLink}),null,16,["debug","onOnLinkClick"])})),128))]),Object(i["k"])("div",s,[Object(i["k"])("div",l,[Object(i["k"])(h,{name:"fire",color:"#F66",size:"18"}),u,Object(i["k"])("div",{class:"more",onClick:e[3]||(e[3]=function(e){return t.$router.push("/mall/category")})},"更多 ⋙")]),Object(i["k"])("div",d,[(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(b.state.list,(function(t,e){return Object(i["A"])(),Object(i["g"])(S,{key:e,item:t,grid:160,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])]),Object(i["k"])(w,{class:"copyright"},{default:c((function(){return[g]})),_:1})])})),b=n("5530"),p=n("5502"),h=Object(i["X"])("data-v-3dac0fbd"),j=h((function(t,e,n,c,r,a){var o=Object(i["I"])("van-col"),s=Object(i["I"])("van-row");return n.id?(Object(i["A"])(),Object(i["g"])("div",{key:0,class:"block",style:a.getStyle()},[Object(i["k"])("div",{class:"bg",style:a.getBackground()},null,4),Object(i["k"])(s,{gutter:parseInt(n.gutter),justify:n.justify,align:n.align,wrap:!0},{default:h((function(){return[(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(r.list,(function(e,c){return Object(i["A"])(),Object(i["g"])(o,{key:c,span:e.span,style:{marginTop:parseInt(n.gutter)+"px"},onClick:function(n){return t.$emit("onLinkClick",e.link)}},{default:h((function(){return[Object(i["k"])("div",{class:"cell",style:a.getCellStyle(e.style)},[Object(i["U"])(Object(i["k"])("img",{class:"image",fit:"contain",src:e.image,style:a.getImageStyle(e.style),onerror:"this.src='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='"},null,12,["src"]),[[i["Q"],a.hasImage(e)]]),Object(i["U"])(Object(i["k"])("div",{class:"text",style:a.hasImage(e)?a.getTextStyle(e.style):{}},[(Object(i["A"])(!0),Object(i["g"])(i["a"],null,Object(i["G"])(e.text,(function(e,n){return Object(i["A"])(),Object(i["g"])("div",{key:n,style:a.getTextItemStyle(e),innerHTML:t.$safeHTML(e.content)},null,12,["innerHTML"])})),128))],4),[[i["Q"],a.hasText(e.text)]])],4)]})),_:2},1032,["span","style","onClick"])})),128))]})),_:1},8,["gutter","justify","align"])],4)):Object(i["h"])("",!0)}));n("a4d3"),n("b64b");function O(t,e){if(null==t)return{};var n,i,c={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(c[n]=t[n]);return c}function m(t,e){if(null==t)return{};var n,i,c=O(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}n("a9e3"),n("ac1f"),n("5319"),n("d3b7"),n("25f0"),n("a15b"),n("1276");var k={props:{debug:{type:Boolean,default:!1},id:{type:String,default:""},name:{type:String,default:""},background:{type:Object,default:function(){return{}}},style:{type:Object,default:function(){return{}}},column:{type:[String,Number],default:2},gutter:{type:[String,Number],default:0},justify:{type:String,default:"space-between"},align:{type:String,default:"center"},cell:{type:Object,default:function(){return{}}},goods:{type:String,default:function(){return""}}},data:function(){var t=Object(i["F"])({});return{list:t}},created:function(){this.init()},watch:{cell:function(t,e){t!==e&&this.init()},goods:function(t,e){t!==e&&this.init()}},methods:{init:function(){var t=this;if(/\d+/.test(this.goods)){var e=Object(i["N"])(this.cell),n='{"cell_{{id}}":{"style":{"background":"#FFFFFF","padding":"10","borderRadius":"10","flexDirection":"column"},"span":"12","link":"/{{type}}/item?id={{id}}","image":"{{cover}}","text":{"text1_{{id}}":{"color":"","fontSize":"14","fontWeight":"normal","lineHeight":"150%","textAlign":"justify","content":"{{title}}"},"text2_{{id}}":{"color":"#FF0000","fontSize":"14","fontWeight":"bold","lineHeight":"200%","textAlign":"left","content":"￥{{price1}}"},"text3_{{id}}":{"color":"","fontSize":"12","fontWeight":"line-through","lineHeight":"200%","textAlign":"right","content":"￥{{price2}}"}}}}',c=this.goods.replace("，",",").replace(/[^\d|,]+/g,"");this.$http.get("/mall/itemmultdetail?ids="+c).then((function(i){for(var c in i){var r=n.replace(/{{type}}/g,i[c]["id"]<1e4?"mall":"jdmall").replace(/{{id}}/g,i[c]["id"]).replace(/{{title}}/g,i[c]["title"].substr(0,24)).replace(/{{cover}}/g,i[c]["cover"]).replace(/{{price1}}/g,i[c]["price"]).replace(/{{price2}}/g,parseInt(1.5*i[c]["price"]));e=Object(b["a"])(Object(b["a"])({},e),JSON.parse(r))}t.list=e}))}else this.list=this.cell},getStyle:function(){var t=this.style,e=t.margin,n=t.padding,i=t.borderRadius,c=m(t,["margin","padding","borderRadius"]);return c.marginTop=e+"px",c.padding=this.getPadding(n),c.borderRadius=i+"px",c},getBackground:function(){var t=this.background,e=t.backgroundColor,n=t.backgroundImage;return!/\(/.test(n)&&(n="url("+n+")"),{backgroundColor:e,backgroundImage:n}},getCellStyle:function(t){var e=t.padding,n=t.borderRadius,i=(t.layout,m(t,["padding","borderRadius","layout"]));return i.padding=this.getPadding(e),i.border=this.debug?"dotted 1px #FCC":"",i.borderRadius=n+"px",i},getImageStyle:function(t){var e={borderRadius:t.borderRadius+"px"};return e=/row/.test(t.flexDirection)?Object(b["a"])(Object(b["a"])({},e),{maxWidth:"200px",height:"100%"}):Object(b["a"])(Object(b["a"])({},e),{width:"100%",maxheight:"200px"}),e},getTextStyle:function(t){var e={},n=/reverse/.test(t.flexDirection);return/column/.test(t.flexDirection)?e[n?"marginBottom":"marginTop"]="10px":e[n?"marginRight":"marginLeft"]="10px",e},getTextItemStyle:function(t){t.content;var e=t.fontWeight,n=t.textAlign,i=m(t,["content","fontWeight","textAlign"]);return i.fontSize=i.fontSize+"px",/line/.test(e)?i.textDecoration=e:i.fontWeight=e,/^(left|right)$/.test(n)?i.float=n:(i.width="100%",i.textAlign=n,i.clear="both"),i},hasImage:function(t){return t.image&&t.image.length>0},hasText:function(t){var e=!1;for(var n in t)if(t[n].content&&t[n].content.length>0){e=!0;break}return e},getPadding:function(t){return!/\d+/.test(t)&&(t=0),t=t.toString().replace(/^[\s]+/g,"").replace(/[\s]+$/g,"").replace(/[^0-9 ]/gi,""),t.length>0?t.split(/\s+/).join("px ")+"px":""}}},v=(n("fc8a"),n("6b0d")),y=n.n(v);const x=y()(k,[["render",j],["__scopeId","data-v-3dac0fbd"]]);var A=x,I=n("a284"),S={name:"Home",components:{Design:A,MallItem:I["a"]},props:{production:{type:Boolean,default:!1}},data:function(){var t=Object(i["E"])({isTop:!0,keyword:"",list:[],design:[],data:""});return{state:t}},created:function(){var t=this;this.state.design=this.config.design?JSON.parse(this.config.design):[],this.production||window.addEventListener("message",(function(e){var n=e.data;if(n.length>0&&n!=t.state.data){t.state.data=n;try{t.state.design=JSON.parse(n)}catch(e){t.state.design=[]}}})),this.$http.get("/mall/itemlist?recommend=1&order=9&limit=20").then((function(e){return t.state.list=e}))},mounted:function(){this.toggleTabbar(!0)},computed:Object(b["a"])({bg:function(){return this.state.isTop?"transparent":"#FFF"},logo:function(){return this.config.logo&&this.config.logo.length>10?this.config.logo:"goods-collect"},swipe:function(){var t=[{image:n("f0b4"),link:""},{image:n("c288"),link:""}];if(this.config.swipe)try{t=JSON.parse(this.config.swipe)}catch(e){console.error("config error")}return t},grid:function(){var t=[{image:n("b45a"),name:"鲜花直送",link:"/mall/list?cid=2"},{image:n("50d3"),name:"幸福西饼",link:"/mall/list?cid=11"},{image:n("b5c1"),name:"礼品定制",link:"/mall/list?cid=4"},{image:n("8a49"),name:"充值中心",link:"/recharge"},{image:n("b605"),name:"积分转让",link:"/my/exchange"}];if(this.config.grid)try{t=JSON.parse(this.config.grid)}catch(e){console.error("config error")}return t}},Object(p["d"])(["config"])),methods:Object(b["a"])({handleSearch:function(){this.$router.push("/vpmall/list?keyword="+this.state.keyword)},handleLink:function(t){this.$forward(t)}},Object(p["c"])(["auth","toggleTabbar"]))};n("b1df");const w=y()(S,[["render",f],["__scopeId","data-v-f46cd298"]]);e["default"]=w},c288:function(t,e,n){t.exports=n.p+"asset/img/banner2.efbd995e.png"},dcb0:function(t,e,n){},f0b4:function(t,e,n){t.exports=n.p+"asset/img/banner1.20e046de.png"},fc8a:function(t,e,n){"use strict";n("3ea5")}}]);