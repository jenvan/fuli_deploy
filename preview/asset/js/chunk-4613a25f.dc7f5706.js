(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4613a25f"],{"019c":function(t,e,n){t.exports=n.p+"asset/img/icon9.cef0b05f.png"},"0359":function(t,e,n){t.exports=n.p+"asset/img/icon10.f205b7ba.png"},"14d2":function(t,e,n){t.exports=n.p+"asset/img/icon8.165f866f.png"},"19a0":function(t,e,n){},"50d3":function(t,e,n){t.exports=n.p+"asset/img/icon2.cfdaf166.png"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),c=n("5899"),r="["+c+"]",a=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),s=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"609d":function(t,e,n){},7156:function(t,e,n){var i=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var r,a;return c&&"function"==typeof(r=e.constructor)&&r!==n&&i(a=r.prototype)&&a!==n.prototype&&c(t,a),t}},"7d40":function(t,e,n){"use strict";n("19a0")},"84ce":function(t,e,n){t.exports=n.p+"asset/img/icon6.1d3149b2.png"},"857a":function(t,e,n){var i=n("1d80"),c=/"/g;t.exports=function(t,e,n,r){var a=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),o+">"+a+"</"+e+">"}},"8a49":function(t,e,n){t.exports=n.p+"asset/img/icon5.80c357cb.png"},9911:function(t,e,n){"use strict";var i=n("23e7"),c=n("857a"),r=n("af03");i({target:"String",proto:!0,forced:r("link")},{link:function(t){return c(this,"a","href",t)}})},"99af":function(t,e,n){"use strict";var i=n("23e7"),c=n("d039"),r=n("e8b5"),a=n("861d"),o=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),b=n("b622"),g=n("2d00"),f=b("isConcatSpreadable"),p=9007199254740991,j="Maximum allowed index exceeded",O=g>=51||!c((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=d("concat"),h=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},y=!O||!m;i({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,i,c,r,a=o(this),d=u(a,0),b=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?a:arguments[e],h(r)){if(c=s(r.length),b+c>p)throw TypeError(j);for(n=0;n<c;n++,b++)n in r&&l(d,b,r[n])}else{if(b>=p)throw TypeError(j);l(d,b++,r)}return d.length=b,d}})},a15b:function(t,e,n){"use strict";var i=n("23e7"),c=n("44ad"),r=n("fc6a"),a=n("a640"),o=[].join,s=c!=Object,l=a("join",",");i({target:"Array",proto:!0,forced:s||!l},{join:function(t){return o.call(r(this),void 0===t?",":t)}})},a284:function(t,e,n){"use strict";var i=n("7a23"),c=Object(i["S"])("data-v-0973496a");Object(i["B"])("data-v-0973496a");var r={class:"price1"},a=Object(i["j"])("span",{class:"red"},"￥",-1),o=Object(i["i"])("   "),s={class:"stock"},l=Object(i["i"])("库存 "),u={class:"red"},d=Object(i["i"])(" 件  "),b={class:"sales"},g=Object(i["i"])("月销 "),f={class:"red"},p=Object(i["i"])(" 件");Object(i["z"])();var j=c((function(t,e,n,j,O,m){var h=Object(i["G"])("van-image"),y=Object(i["G"])("van-col"),v=Object(i["G"])("van-cell"),k=Object(i["G"])("van-icon"),x=Object(i["G"])("van-row");return Object(i["y"])(),Object(i["g"])(x,{class:["item",{grid:m.isGrid}],style:{width:m.width,height:m.height},justify:"space-between",align:"top",onClick:e[2]||(e[2]=function(t){return m.forward(n.item)})},{default:c((function(){return[Object(i["j"])(y,{class:"image",span:m.isGrid?24:8},{default:c((function(){return[Object(i["j"])(h,{width:"100%",height:"100%",radius:"5",fit:m.isGrid?"contain":"cover",src:n.item.cover},null,8,["fit","src"])]})),_:1},8,["span"]),Object(i["j"])(y,{class:"intro",span:m.isGrid?24:16},{default:c((function(){return[Object(i["j"])(v,{style:{padding:"5px 5px 0 5px"},border:!1},{title:c((function(){return[Object(i["j"])("div",{class:m.isGrid?"van-ellipsis":"van-multi-ellipsis--l2"},Object(i["K"])(n.item.title),3)]})),label:c((function(){return[Object(i["Q"])(Object(i["j"])("div",{class:"van-ellipsis"},Object(i["K"])(n.item.feature),513),[[i["N"],n.list>=100]])]})),_:1}),Object(i["j"])(v,{style:{padding:"0 10px 5px 10px"},border:!1,center:!m.isGrid},{title:c((function(){return[Object(i["j"])("span",r,[a,Object(i["i"])(" "+Object(i["K"])(n.item.price),1)]),o,Object(i["Q"])(Object(i["j"])("span",{class:"price2"}," ￥ "+Object(i["K"])(n.item.price_original),513),[[i["N"],!m.isGrid&&n.item.price_original&&n.item.price_original>0]])]})),label:c((function(){return[Object(i["Q"])(Object(i["j"])("span",s,[l,Object(i["j"])("span",u,Object(i["K"])(n.item.stock),1),d],512),[[i["N"],!m.isGrid&&n.stock&&n.item.stock]]),Object(i["Q"])(Object(i["j"])("span",b,[g,Object(i["j"])("span",f,Object(i["K"])(n.item.sales),1),p],512),[[i["N"],!m.isGrid&&n.sales&&n.item.sales]])]})),"right-icon":c((function(){return[Object(i["Q"])(Object(i["j"])(k,{name:"cart-o",size:"21",color:"#F00",onClick:e[1]||(e[1]=Object(i["R"])((function(e){return t.$emit("add",n.item)}),["stop"]))},null,512),[[i["N"],n.cart]])]})),_:1},8,["center"])]})),_:1},8,["span"])]})),_:1},8,["class","style"])})),O=n("5530"),m=(n("a9e3"),n("5502")),h={props:{list:{type:Number,default:130},grid:{type:[Boolean,Number],default:!1},stock:{type:Boolean,default:!0},sales:{type:Boolean,default:!0},cart:{type:Boolean,default:!0},item:{type:Object,default:function(){return{}}}},computed:Object(O["a"])({isGrid:function(){return 130==this.list&&("boolean"==typeof this.grid?this.grid:"number"==typeof this.grid)},width:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+"px":"100%"},height:function(){return"boolean"!=typeof this.grid||this.grid?("boolean"==typeof this.grid?170:this.grid)+100+"px":this.list+"px"}},Object(m["d"])(["channel"])),methods:{forward:function(t){var e="/mall/";/mall\//.test(this.$route.path)&&(e=""),"undefined"!=typeof t.channel&&""!=t.channel&&(e="/"+this.channel[t.channel]["type"]+"/");var n="undefined"!=typeof t.spu?t.spu:t.id;this.$router.push(e+"item?id="+n)}}},y=(n("b4e6"),n("6b0d")),v=n.n(y);const k=v()(h,[["render",j],["__scopeId","data-v-0973496a"]]);e["a"]=k},a9e3:function(t,e,n){"use strict";var i=n("83ab"),c=n("da84"),r=n("94ca"),a=n("6eeb"),o=n("5135"),s=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),b=n("7c73"),g=n("241c").f,f=n("06cf").f,p=n("9bf2").f,j=n("58a8").trim,O="Number",m=c[O],h=m.prototype,y=s(b(h))==O,v=function(t){var e,n,i,c,r,a,o,s,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=j(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,c=49;break;case 79:case 111:i=8,c=55;break;default:return+l}for(r=l.slice(2),a=r.length,o=0;o<a;o++)if(s=r.charCodeAt(o),s<48||s>c)return NaN;return parseInt(r,i)}return+l};if(r(O,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var k,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(y?d((function(){h.valueOf.call(n)})):s(n)!=O)?l(new m(v(e)),n,x):v(e)},w=i?g(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;w.length>A;A++)o(m,k=w[A])&&!o(x,k)&&p(x,k,f(m,k));x.prototype=h,h.constructor=x,a(c,O,x)}},af03:function(t,e,n){var i=n("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b45a:function(t,e,n){t.exports=n.p+"asset/img/icon1.d296c994.png"},b4e6:function(t,e,n){"use strict";n("609d")},b5c1:function(t,e,n){t.exports=n.p+"asset/img/icon3.c8b2cf78.png"},b605:function(t,e,n){t.exports=n.p+"asset/img/icon4.5385d10a.png"},bb51:function(t,e,n){"use strict";n.r(e);n("9911"),n("b0c0");var i=n("7a23"),c=Object(i["S"])("data-v-11f0eaf2");Object(i["B"])("data-v-11f0eaf2");var r={class:"home"},a={class:"wrapper"},o={class:"recommend"},s={class:"title"},l=Object(i["i"])("  热卖推荐 "),u={class:"list1"},d={class:"box"},b={class:"recommend"},g={class:"title"},f=Object(i["i"])("  猜你喜欢 "),p={class:"list2"},j=Object(i["i"])("福鲤社");Object(i["z"])();var O=c((function(t,e,n,O,m,h){var y=Object(i["G"])("van-icon"),v=Object(i["G"])("van-search"),k=Object(i["G"])("van-sticky"),x=Object(i["G"])("van-image"),w=Object(i["G"])("van-swipe-item"),A=Object(i["G"])("van-swipe"),S=Object(i["G"])("van-notice-bar"),N=Object(i["G"])("van-grid-item"),G=Object(i["G"])("van-grid"),_=Object(i["G"])("mall-item"),E=Object(i["G"])("block"),I=Object(i["G"])("van-divider");return Object(i["y"])(),Object(i["g"])("div",r,[Object(i["j"])(k,{class:"navbar",onChange:e[2]||(e[2]=function(t){return m.state.isTop=!m.state.isTop})},{default:c((function(){return[Object(i["j"])(v,{modelValue:m.state.keyword,"onUpdate:modelValue":e[1]||(e[1]=function(t){return m.state.keyword=t}),shape:"round",background:h.bg,style:{padding:"3px 10px"},placeholder:"搜您想要的",clearable:"",onSearch:h.onSearch},{left:c((function(){return[Object(i["j"])(y,{name:h.logo,size:36,class:"logo"},null,8,["name"])]})),_:1},8,["modelValue","background","onSearch"])]})),_:1}),Object(i["j"])("div",a,[Object(i["j"])(A,{class:"swipe",autoplay:5e3,"lazy-render":""},{default:c((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(h.swipe,(function(t,e){return Object(i["y"])(),Object(i["g"])(w,{key:e},{default:c((function(){return[Object(i["j"])(x,{width:"100%",height:"100%",fit:"fill",src:t.image,to:t.link},null,8,["src","to"])]})),_:2},1024)})),128))]})),_:1})]),Object(i["Q"])(Object(i["j"])(S,{class:"notice","left-icon":"volume-o",scrollable:"",text:t.config.notice?t.config.notice:""},null,8,["text"]),[[i["N"],t.config.notice&&t.config.notice.length>5]]),Object(i["j"])(G,{class:"toolbar","column-num":"5","icon-size":"40",border:!1},{default:c((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(h.grid,(function(t,e){return Object(i["y"])(),Object(i["g"])(N,{key:e,icon:t.image,text:t.name,to:t.link},null,8,["icon","text","to"])})),128))]})),_:1}),Object(i["j"])("div",o,[Object(i["j"])("div",s,[Object(i["j"])(y,{name:"fire",color:"#F66",size:"18"}),l,Object(i["j"])("div",{class:"more",onClick:e[3]||(e[3]=function(e){return t.$router.push("/mall/list")})},"更多 >>")]),Object(i["j"])("div",u,[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(m.state.list1,(function(t,e){return Object(i["y"])(),Object(i["g"])(_,{key:e,item:t,grid:110,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])]),Object(i["j"])("div",d,[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(m.state.design,(function(t,e){return Object(i["y"])(),Object(i["g"])(E,Object(i["p"])({key:e,debug:!n.production},t),null,16,["debug"])})),128))]),Object(i["j"])("div",b,[Object(i["j"])("div",g,[Object(i["j"])(y,{name:"like",color:"#F66",size:"18"}),f,Object(i["j"])("div",{class:"more",onClick:e[4]||(e[4]=function(e){return t.$router.push("/mall/list")})},"更多 >>")]),Object(i["j"])("div",p,[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(m.state.list2,(function(t,e){return Object(i["y"])(),Object(i["g"])(_,{key:e,item:t,grid:160,stock:!1,sales:!1,cart:!1},null,8,["item"])})),128))])]),Object(i["j"])(I,{class:"copyright"},{default:c((function(){return[j]})),_:1})])})),m=n("5530"),h=(n("99af"),n("5502")),y=Object(i["S"])("data-v-6a636848");Object(i["B"])("data-v-6a636848");var v={class:"text"};Object(i["z"])();var k=y((function(t,e,n,c,r,a){var o=Object(i["G"])("van-col"),s=Object(i["G"])("van-row");return n.id?(Object(i["y"])(),Object(i["g"])("div",{key:0,class:"block",style:a.getStyle()},[Object(i["j"])("div",{class:"bg",style:a.getBackground()},null,4),Object(i["j"])(s,{gutter:parseInt(n.gutter),justify:n.justify,align:n.align,wrap:!0},{default:y((function(){return[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(n.cell,(function(t,e){return Object(i["y"])(),Object(i["g"])(o,{key:e,span:t.span,onClick:function(e){return a.handleClick(t.link)}},{default:y((function(){return[Object(i["j"])("div",{class:"cell",style:a.getCellStyle(t.style)},[Object(i["Q"])(Object(i["j"])("img",{class:"image",fit:"contain",src:t.image,style:a.getImageStyle(t.style.flexDirection),onerror:"this.src='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='"},null,12,["src"]),[[i["N"],t.image&&t.image.length>0]]),Object(i["Q"])(Object(i["j"])("div",v,[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["E"])(t.text,(function(t,e){return Object(i["y"])(),Object(i["g"])("div",{key:e,style:a.getTextStyle(t),innerHTML:a.getHTML(t.content)},null,12,["innerHTML"])})),128))],512),[[i["N"],a.hasText(t.text)]])],4)]})),_:2},1032,["span","onClick"])})),128))]})),_:1},8,["gutter","justify","align"])],4)):Object(i["h"])("",!0)}));n("a4d3"),n("b64b");function x(t,e){if(null==t)return{};var n,i,c={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(c[n]=t[n]);return c}function w(t,e){if(null==t)return{};var n,i,c=x(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}n("a9e3"),n("ac1f"),n("5319"),n("a15b"),n("1276");var A={props:{debug:{type:Boolean,default:!1},id:{type:String,default:""},name:{type:String,default:""},background:{type:Object,default:function(){return{}}},style:{type:Object,default:function(){return{}}},column:{type:[String,Number],default:2},gutter:{type:[String,Number],default:0},justify:{type:String,default:"space-between"},align:{type:String,default:"center"},cell:{type:Object,default:function(){return{}}}},methods:{getStyle:function(){var t=this.style,e=t.margin,n=t.padding,i=t.borderRadius,c=w(t,["margin","padding","borderRadius"]);return c.margin=e+"px 0",c.padding=this.getPadding(n),c.borderRadius=i+"px",c},getBackground:function(){var t=this.background,e=t.backgroundColor,n=t.backgroundImage;return n=n?"url("+n+")":"",{backgroundColor:e,backgroundImage:n}},getCellStyle:function(t){var e=t.padding,n=t.borderRadius,i=(t.layout,w(t,["padding","borderRadius","layout"]));return i.padding=this.getPadding(e),i.border=this.debug?"dotted 1px #FCC":"",i.borderRadius=n+"px",i},getImageStyle:function(t){return/row/.test(t)?{maxWidth:"200px",height:"100%"}:{width:"100%",maxheight:"200px"}},getTextStyle:function(t){t.content;var e=t.textAlign,n=w(t,["content","textAlign"]);return n.fontSize=n.fontSize+"px",/^(left|right)$/.test(e)?n.float=e:(n.width="100%",n.textAlign=e,n.clear="both"),n},hasText:function(t){var e=!1;for(var n in t)if(t[n].content&&t[n].content.length>0){e=!0;break}return e},getHTML:function(t){var e=t&&t.length>0?t:"";return e=e.replace(/&/g,"&amp;"),e=e.replace(/\\</g,"&lt;"),e=e.replace(/\\>/g,"&gt;"),e=e.replace(/\\"/g,"&quot;"),e=e.replace(/\\'/g,"&apos;"),e=e.replace(/\r\n/g,"<br>").replace(/\n/g,"<br>").replace(/\s/g,"&nbsp;&nbsp;"),e},getPadding:function(t){return t=t.replace(/^[\s]+/g,"").replace(/[\s]+$/g,"").replace(/[^0-9 ]/gi,""),t.length>0?t.split(/\s+/).join("px ")+"px":""},handleClick:function(t){return"http"==t.substring(0,4)?window.open(t,"_blank"):this.$router.push(t)}}},S=(n("7d40"),n("6b0d")),N=n.n(S);const G=N()(A,[["render",k],["__scopeId","data-v-6a636848"]]);var _=G,E=n("a284"),I={name:"Home",components:{Block:_,MallItem:E["a"]},props:{production:{type:Boolean,default:!1}},data:function(){var t=Object(i["C"])({isTop:!0,keyword:"",list1:[],list2:[],design:[],data:""});return{state:t}},created:function(){var t=this;this.state.design=this.config.design?JSON.parse(this.config.design):[],this.production||window.addEventListener("message",(function(e){var n=e.data;if(n.length>0&&n!=t.state.data){t.state.data=n;try{t.state.design=JSON.parse(n)}catch(e){t.state.design=[]}console.warn("RECV:",JSON.parse(n))}})),this.$http.get("/mall/itemlist?recommend=1&limit=10").then((function(e){t.state.list1=t.state.list1.concat(e)})),this.$http.get("/mall/itemlist?order=9&limit=50").then((function(e){t.state.list2=t.state.list2.concat(e)}))},mounted:function(){this.toggleTabbar(!0)},computed:Object(m["a"])({bg:function(){return this.state.isTop?"transparent":"#FFF"},logo:function(){return this.config.logo&&this.config.logo.length>10?this.config.logo:"goods-collect"},swipe:function(){var t=[{image:n("f0b4"),link:""},{image:n("c288"),link:""}];if(this.config.swipe)try{t=JSON.parse(this.config.swipe)}catch(e){console.error("config error")}return t},grid:function(){var t=[{image:n("b45a"),name:"鲜花直送",link:"/mall/list?cid=2"},{image:n("50d3"),name:"幸福西饼",link:"/mall/list?cid=11"},{image:n("b5c1"),name:"礼品定制",link:"/mall/list?cid=4"},{image:n("8a49"),name:"充值中心",link:"/recharge"},{image:n("b605"),name:"积分转让",link:"/my/exchange"},{image:n("84ce"),name:"樊登读书",link:"/mall/list?cid=107"},{image:n("d029"),name:"视频会员",link:"/mall/list?cid=20"},{image:n("14d2"),name:"电影票",link:"/mall/list?cid=37"},{image:n("0359"),name:"打车券",link:"/mall/list?cid=108"},{image:n("019c"),name:"购物卡",link:"/mall/list?cid=106"}];if(this.config.grid)try{t=JSON.parse(this.config.grid)}catch(e){console.error("config error")}return t}},Object(h["d"])(["config"])),methods:Object(m["a"])({onSearch:function(){this.$router.push("/jdmall/list?keyword="+this.state.keyword)}},Object(h["c"])(["auth","toggleTabbar"]))};n("c267");const C=N()(I,[["render",O],["__scopeId","data-v-11f0eaf2"]]);e["default"]=C},bd58:function(t,e,n){},c267:function(t,e,n){"use strict";n("bd58")},c288:function(t,e,n){t.exports=n.p+"asset/img/banner2.efbd995e.png"},d029:function(t,e,n){t.exports=n.p+"asset/img/icon7.dffb17eb.png"},f0b4:function(t,e,n){t.exports=n.p+"asset/img/banner1.20e046de.png"}}]);