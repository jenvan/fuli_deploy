(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dac7cfba"],{"07a0":function(t,e,n){},4003:function(t,e,n){"use strict";(function(t){var a=n("5530"),c=(n("a9e3"),n("ac1f"),n("5319"),n("7a23")),r=n("5502"),i=n("2824");e["a"]={components:{BaseLayout:i["a"]},props:{id:{type:[String,Number],default:1}},data:function(){var t=Object(c["F"])({}),e=Object(c["E"])({status:-1,spec:[],list:[]});return{detail:t,state:e}},created:function(){this.init(this.id)},mounted:function(){this.toggleTabbar(!1)},unmounted:function(){this.toggleTabbar(!1)},computed:{info:function(){return 0==this.state.status?"立即抢购":1==this.state.status?"商品已下架":2==this.state.status?"商品不存在":"正在查询 ..."}},methods:Object(a["a"])({init:function(e){var n=this;this.state.status=-1,this.$http.post("/jcmall/itemdetail?id="+e).then((function(a){1!=a.status&&2!=a.status?n.state.status=1:n.$http.get("/jcmall/itemCheck?id="+e).then((function(t){return n.state.status=t.productState}));var c={productNo:"商品编号",viewName:"商家名称",cityName:"所在市区",viewAddress:"详细地址",businessHours:"营业时间",orderPolicy:"预定规则",orderDesc:"预定说明",startDate:"最早游玩日期",priceStartDate:"价格开始时间",priceEndDate:"价格结束时间",refund_note:"退款说明",user_note:"使用说明",important_not:"重要提示"};for(var r in c)"undefined"==typeof a[r]||t.isEmpty(a[r])||("orderDesc"==r&&(a[r]="<div class='rule'>"+a[r]+"</div>"),n.state.spec.push({name:c[r],value:a[r]}));n.detail=a})).catch((function(){n.$router.back()}))},strip:function(t){return t=t.replace(/(max-)?width:[^;|\s]+/gi,"").replace(/section/gi,"div"),t},change:function(t){this.id!=t&&(this.$router.replace("?id="+t),this.init(t))},addCart:function(){this.$toast("内测中，预计8月底上线，敬请期待！")}},Object(r["c"])(["toggleTabbar"]))}}).call(this,n("81b0"))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),c=n("5899"),r="["+c+"]",i=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,n){var a=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var r,i;return c&&"function"==typeof(r=e.constructor)&&r!==n&&a(i=r.prototype)&&i!==n.prototype&&c(t,i),t}},a9e3:function(t,e,n){"use strict";var a=n("83ab"),c=n("da84"),r=n("94ca"),i=n("6eeb"),s=n("5135"),o=n("c6b6"),u=n("7156"),l=n("c04e"),b=n("d039"),d=n("7c73"),f=n("241c").f,p=n("06cf").f,j=n("9bf2").f,O=n("58a8").trim,v="Number",h=c[v],g=h.prototype,k=o(d(g))==v,m=function(t){var e,n,a,c,r,i,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=O(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,c=49;break;case 79:case 111:a=8,c=55;break;default:return+u}for(r=u.slice(2),i=r.length,s=0;s<i;s++)if(o=r.charCodeAt(s),o<48||o>c)return NaN;return parseInt(r,a)}return+u};if(r(v,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var I,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(k?b((function(){g.valueOf.call(n)})):o(n)!=v)?u(new h(m(e)),n,N):m(e)},_=a?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),y=0;_.length>y;y++)s(h,I=_[y])&&!s(N,I)&&j(N,I,p(h,I));N.prototype=g,g.constructor=N,i(c,v,N)}},ad45:function(t,e,n){"use strict";n("07a0")},dc41:function(t,e,n){"use strict";n.r(e);n("b0c0");var a=n("7a23"),c=Object(a["X"])("data-v-5ef70843");Object(a["D"])("data-v-5ef70843");var r={key:0},i={class:"head"},s=Object(a["j"])("推荐"),o={class:"price"},u={class:"symbol"},l=Object(a["j"])("￥"),b={class:"number"},d=Object(a["j"])(" 起"),f={class:"slash"},p={class:"spec"},j=Object(a["k"])("div",{class:"group"},null,-1);Object(a["B"])();var O=c((function(t,e,n,O,v,h){var g=Object(a["I"])("van-image"),k=Object(a["I"])("van-tag"),m=Object(a["I"])("van-cell"),I=Object(a["I"])("van-action-sheet"),N=Object(a["I"])("van-action-bar-icon"),_=Object(a["I"])("van-action-bar-button"),y=Object(a["I"])("van-action-bar"),E=Object(a["I"])("van-empty"),A=Object(a["I"])("BaseLayout");return Object(a["A"])(),Object(a["g"])(A,{title:"商品详情",bg:"#EEE",navbar:"auto"},{default:c((function(){return[v.detail.intro?(Object(a["A"])(),Object(a["g"])("div",r,[Object(a["k"])(g,{src:v.detail.cover,width:"100%",fit:"contain"},null,8,["src"]),Object(a["k"])("div",i,[Object(a["k"])(m,{class:"title",border:!1},{title:c((function(){return[Object(a["j"])(Object(a["M"])(v.detail.title),1)]})),label:c((function(){return[Object(a["U"])(Object(a["k"])(k,{type:"danger"},{default:c((function(){return[s]})),_:1},512),[[a["Q"],v.detail.isTop]]),Object(a["j"])("   "+Object(a["M"])(v.detail.feature),1)]})),_:1}),Object(a["k"])(m,{center:"",border:!1},Object(a["i"])({title:c((function(){return[Object(a["k"])("div",o,[Object(a["k"])("span",u,[l,Object(a["k"])("span",b,Object(a["M"])(v.detail.price),1),d]),Object(a["k"])("span",f,"￥"+Object(a["M"])(v.detail.price_market),1)])]})),_:2},[v.detail.sales_supplier>0?{name:"extra",fn:c((function(){return[Object(a["j"])("已售出："+Object(a["M"])(v.detail.sales_supplier),1)]}))}:void 0]),1024)]),Object(a["k"])("div",p,[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(v.state.spec,(function(t,e){return Object(a["A"])(),Object(a["g"])(m,{key:e,title:t.name,border:!1},{default:c((function(){return[Object(a["k"])("span",{innerHTML:t.value},null,8,["innerHTML"])]})),_:2},1032,["title"])})),128))]),j,Object(a["k"])("div",{class:"intro",innerHTML:h.strip(v.detail.intro)},null,8,["innerHTML"]),Object(a["k"])(I,{show:v.state.popup,"onUpdate:show":e[1]||(e[1]=function(t){return v.state.popup=t}),title:"参数"},{default:c((function(){return[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(v.state.detail.paramJson,(function(t,e){return Object(a["A"])(),Object(a["g"])(m,{key:e,title:t["name"],value:t["value"]},null,8,["title","value"])})),128))]})),_:1},8,["show"]),Object(a["k"])(y,{class:"bar"},{default:c((function(){return[Object(a["k"])(N,{icon:"wap-home-o",text:"首页",onClick:e[2]||(e[2]=function(e){return t.$router.push("/")})}),Object(a["k"])(N,{icon:"balance-list-o",text:"订单",onClick:e[3]||(e[3]=function(e){return t.$router.push("/jcmall/order")})}),Object(a["k"])(_,{type:"danger",disabled:0!=v.state.status,text:h.info,onClick:h.addCart},null,8,["disabled","text","onClick"])]})),_:1})])):(Object(a["A"])(),Object(a["g"])(E,{key:1,description:h.info},null,8,["description"]))]})),_:1})})),v=n("4003"),h=(n("ad45"),n("6b0d")),g=n.n(h);const k=g()(v["a"],[["render",O],["__scopeId","data-v-5ef70843"]]);e["default"]=k}}]);