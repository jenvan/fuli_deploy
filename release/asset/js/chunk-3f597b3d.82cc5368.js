(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f597b3d"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var c=n("1d80"),r=n("5899"),a="["+r+"]",i=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(c(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"64da":function(t,e,n){"use strict";n("6977")},6977:function(t,e,n){},"69fb":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("b64b");var c=n("7a23"),r=Object(c["R"])("data-v-1ef2acc0");Object(c["A"])("data-v-1ef2acc0");var a=Object(c["h"])("已下单"),i=Object(c["h"])("已付款"),o=Object(c["h"])("已发货"),s=Object(c["h"])("已签收"),u={key:0},l={key:0},d={class:"card"},b={class:"tool"},f=Object(c["h"])(" 复制卡号"),j=Object(c["h"])("   "),O=Object(c["h"])(" 显示卡片"),p={key:1},h={class:"card"},v={class:"tool"},m=Object(c["h"])(" 复制卡密"),g={class:"indicator"},y={class:"van-multi-ellipsis--l2"},k=Object(c["i"])("br",null,null,-1),_=Object(c["h"])("长按图片保存到手机或分享给好友");Object(c["y"])();var C=r((function(t,e,n,C,x,F){var w=Object(c["F"])("van-step"),I=Object(c["F"])("van-steps"),N=Object(c["F"])("van-cell"),J=Object(c["F"])("van-icon"),E=Object(c["F"])("van-swipe-item"),A=Object(c["F"])("van-swipe"),$=Object(c["F"])("van-collapse-item"),L=Object(c["F"])("van-collapse"),S=Object(c["F"])("van-divider"),V=Object(c["F"])("van-action-bar-icon"),M=Object(c["F"])("van-action-bar-button"),P=Object(c["F"])("van-action-bar"),T=Object(c["F"])("van-image"),R=Object(c["F"])("van-popup"),D=Object(c["F"])("BaseLayout");return Object(c["x"])(),Object(c["f"])(D,{title:"订单详情"},{default:r((function(){return[Object(c["P"])(Object(c["i"])(I,{class:"step",active:C.status},{default:r((function(){return[Object(c["i"])(w,null,{default:r((function(){return[a]})),_:1}),Object(c["i"])(w,null,{default:r((function(){return[i]})),_:1}),Object(c["i"])(w,null,{default:r((function(){return[o]})),_:1}),Object(c["i"])(w,null,{default:r((function(){return[s]})),_:1})]})),_:1},8,["active"]),[[c["M"],C.status<4]]),Object(c["i"])(L,{class:"bill",modelValue:C.unfold,"onUpdate:modelValue":e[1]||(e[1]=function(t){return C.unfold=t})},{default:r((function(){return[Object(c["i"])($,{name:"0",title:"收货信息",value:0==C.state.order.card?"物流派送":C.state.order.card<0?"电子卡密":"提货卡"},{default:r((function(){return[0==C.state.order.card?(Object(c["x"])(),Object(c["f"])("div",u,[Object(c["i"])(N,null,{title:r((function(){return[Object(c["h"])(Object(c["J"])(C.state.order.consignee.name)+"（"+Object(c["J"])(C.state.order.consignee.mobile)+"）",1)]})),label:r((function(){return[Object(c["h"])(Object(c["J"])(C.state.order.consignee.province)+" "+Object(c["J"])(C.state.order.consignee.city)+" "+Object(c["J"])(C.state.order.consignee.county)+" "+Object(c["J"])(C.state.order.consignee.address),1)]})),_:1}),(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(C.state.order.logistics,(function(e,r,a){return Object(c["x"])(),Object(c["f"])(N,{key:r,title:e.dt+(Object.keys(C.state.order.logistics).length>1?"（包裹 "+(a+1)+"）":""),label:e.msg,border:"","is-link":"",onClick:function(e){return t.$router.push("/my/order/track?id="+n.id+"&lid="+r)}},null,8,["title","label","onClick"])})),128))])):(Object(c["x"])(),Object(c["f"])(A,{key:1,class:"swipe"},{indicator:r((function(t){var e=t.active;return[Object(c["i"])("div",g,Object(c["J"])(e+1)+" / "+Object(c["J"])(C.state.cards.length),1)]})),default:r((function(){return[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(C.state.cards,(function(e,n){return Object(c["x"])(),Object(c["f"])(E,{class:"sitem",key:n,style:{background:e.bg}},{default:r((function(){return[C.state.order.card>0?(Object(c["x"])(),Object(c["f"])("div",l,[Object(c["i"])("div",d,"提货卡号：****"+Object(c["J"])(e.token.substr(4)),1),Object(c["i"])("div",b,[Object(c["i"])(J,{name:"more-o",onClick:function(t){return F.onFinish()&F.copy(e.token)}},{default:r((function(){return[f]})),_:2},1032,["onClick"]),j,Object(c["i"])(J,{name:"photo-o",onClick:function(t){return F.onFinish()&F.save(e.token)}},{default:r((function(){return[O]})),_:2},1032,["onClick"])])])):Object(c["g"])("",!0),C.state.order.card<0?(Object(c["x"])(),Object(c["f"])("div",p,[Object(c["i"])("div",h,Object(c["J"])(e.no),1),Object(c["i"])("div",v,[Object(c["P"])(Object(c["i"])(J,{name:"more-o",onClick:function(n){return F.onFinish()&t.$copy(e.no+"\n"+e.pwd)}},{default:r((function(){return[m]})),_:2},1032,["onClick"]),[[c["M"],e.pwd&&e.pwd.length>0]])]),Object(c["P"])(Object(c["i"])("div",{class:"deadline"}," 有效期至："+Object(c["J"])(e.deadline),513),[[c["M"],e.deadline&&e.deadline.length>0]])])):Object(c["g"])("",!0)]})),_:2},1032,["style"])})),128))]})),_:1}))]})),_:1},8,["value"]),Object(c["i"])($,{name:"1",title:"商品信息",value:"共 "+(C.state.order.card<=0?C.state.order.total:C.state.order.card+" x "+C.state.order.total/C.state.order.card)+" 件"},{default:r((function(){return[(Object(c["x"])(!0),Object(c["f"])(c["a"],null,Object(c["D"])(C.state.order.detail,(function(t,e){return Object(c["x"])(),Object(c["f"])(N,{key:e,label:t.spec,style:{alignItems:"center"},onClick:function(e){return F.onView(t)}},{icon:r((function(){return[Object(c["i"])(J,{class:"img",name:t.image,size:"32"},null,8,["name"])]})),title:r((function(){return[Object(c["i"])("div",y,Object(c["J"])(t.title),1)]})),extra:r((function(){return[Object(c["h"])(" x"+Object(c["J"])(t.num),1)]})),_:2},1032,["label","onClick"])})),128))]})),_:1},8,["value"]),Object(c["i"])($,{name:"2",title:"订单总额",value:C.state.order.amount+" 元"},{default:r((function(){return[Object(c["i"])(N,{title:"实付积分",value:C.state.order.point+" 分"},null,8,["value"]),Object(c["i"])(N,{title:"实付现金",value:C.state.order.cash+" 元"},null,8,["value"])]})),_:1},8,["value"]),Object(c["i"])($,{name:"3",title:"交易状态"},{value:r((function(){return[Object(c["i"])("div",{style:{color:C.state.order.color}},Object(c["J"])(C.state.order.result),5)]})),default:r((function(){return[Object(c["i"])(N,{title:"创建时间",value:C.state.order.dt_create},null,8,["value"]),Object(c["i"])(N,{title:"付款时间",value:C.state.order.dt_pay},null,8,["value"]),Object(c["i"])(N,{title:"发货时间",value:C.state.order.dt_send},null,8,["value"]),Object(c["i"])(N,{title:"完成时间",value:C.state.order.dt_finish},null,8,["value"])]})),_:1})]})),_:1},8,["modelValue"]),Object(c["i"])(S,{style:{color:"#EEE"}},{default:r((function(){return[Object(c["h"])("# "+Object(c["J"])(n.id)+" / "+Object(c["J"])(C.state.order.extra)+" #",1)]})),_:1}),Object(c["i"])(P,null,{default:r((function(){return[Object(c["i"])(V,{icon:"chat-o",text:"客服"}),0==C.state.order.status?(Object(c["x"])(),Object(c["f"])(M,{key:0,type:"warning",text:"关闭订单",onClick:F.onClose},null,8,["onClick"])):Object(c["g"])("",!0),0==C.state.order.status?(Object(c["x"])(),Object(c["f"])(M,{key:1,type:"primary",text:"立即付款",onClick:F.onPay},null,8,["onClick"])):Object(c["g"])("",!0),0==C.state.order.card&&2==C.state.order.status?(Object(c["x"])(),Object(c["f"])(M,{key:2,type:"success",text:"确认收货",onClick:F.onFinish},null,8,["onClick"])):Object(c["g"])("",!0),0==C.state.order.card&&C.state.order.status>0?(Object(c["x"])(),Object(c["f"])(M,{key:3,type:"danger",text:"申请售后",onClick:F.onService},null,8,["onClick"])):Object(c["g"])("",!0)]})),_:1}),Object(c["i"])(R,{show:C.state.popup,"onUpdate:show":e[2]||(e[2]=function(t){return C.state.popup=t})},{default:r((function(){return[Object(c["i"])(T,{class:"giftcard",src:C.state.giftcard,width:"300"},{default:r((function(){return[k,_]})),_:1},8,["src"])]})),_:1},8,["show"])]})),_:1})})),x=n("b1c2"),F=(n("64da"),n("6b0d")),w=n.n(F);const I=w()(x["a"],[["render",C],["__scopeId","data-v-1ef2acc0"]]);e["default"]=I},7156:function(t,e,n){var c=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,i;return r&&"function"==typeof(a=e.constructor)&&a!==n&&c(i=a.prototype)&&i!==n.prototype&&r(t,i),t}},a9e3:function(t,e,n){"use strict";var c=n("83ab"),r=n("da84"),a=n("94ca"),i=n("6eeb"),o=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),b=n("7c73"),f=n("241c").f,j=n("06cf").f,O=n("9bf2").f,p=n("58a8").trim,h="Number",v=r[h],m=v.prototype,g=s(b(m))==h,y=function(t){var e,n,c,r,a,i,o,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=p(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+u}for(a=u.slice(2),i=a.length,o=0;o<i;o++)if(s=a.charCodeAt(o),s<48||s>r)return NaN;return parseInt(a,c)}return+u};if(a(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var k,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(g?d((function(){m.valueOf.call(n)})):s(n)!=h)?u(new v(y(e)),n,_):y(e)},C=c?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;C.length>x;x++)o(v,k=C[x])&&!o(_,k)&&O(_,k,j(v,k));_.prototype=m,m.constructor=_,i(r,h,_)}},b1c2:function(t,e,n){"use strict";(function(t){n("a9e3");var c=n("7a23"),r=n("2824");e["a"]={components:{BaseLayout:r["a"]},props:{id:{type:[String,Number],default:0}},setup:function(){var t=Object(c["B"])({order:{},cards:[],popup:!1,giftcard:""}),e=Object(c["C"])(0),n=Object(c["C"])(["0","1"]),r=Object(c["C"])(0);return{state:t,status:e,unfold:n,active:r}},created:function(){this.onLoad()},methods:{onLoad:function(){var e=this;this.state.cards=[],this.$http.post("/mall/orderDetail?id="+this.id).then((function(n){if(e.state.order=n,e.state.order.color=["#CCC","#666","#00C","#0C0","#C00"][n.status],e.state.order.result=["未付款","已付款","已发货","交易成功","交易关闭"][n.status],e.status=n.status,0!=n.card){for(var c in n.cards)n.cards[c].bg="rgb("+t.random(150,250)+","+t.random(150,250)+","+t.random(150,250)+")";e.state.cards=n.cards}1==n.type&&n.status>0&&e.$http.get("/jdmall/update?id="+e.id)}))},onView:function(t){var e="/mall/item?id="+t.spu;1==this.state.order.type&&(e="/jdmall/item?id="+t.sku),this.$router.push(e)},onPay:function(){var t="/mall/pay";1==this.state.order.type&&(t="/jdmall/pay"),this.$http.post(t+"?id="+this.id).then(this.onLoad)},onClose:function(){0==this.state.order.status&&this.$http.post("/mall/orderClose?id="+this.id).then(this.onLoad)},onFinish:function(){2==this.state.order.status&&this.$http.post("/mall/orderFinish?id="+this.id).then(this.onLoad)},onService:function(){this.$toast("内测中，稍候开放")},copy:function(t){var e="提货卡号："+t+"（请关注微信公众号“福鲤社”，点击下方菜单提货）";this.$copy(e)},save:function(t){this.state.popup=!0,this.state.giftcard=this.$host+"/mall/card?type=pick&token="+t}}}}).call(this,n("81b0"))}}]);
//# sourceMappingURL=chunk-3f597b3d.82cc5368.js.map