(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21795907"],{"68cf":function(t,e,n){"use strict";n("c68f")},a15b:function(t,e,n){"use strict";var c=n("23e7"),o=n("44ad"),a=n("fc6a"),i=n("a640"),r=[].join,s=o!=Object,l=i("join",",");c({target:"Array",proto:!0,forced:s||!l},{join:function(t){return r.call(a(this),void 0===t?",":t)}})},c68f:function(t,e,n){},c9e1:function(t,e,n){"use strict";(function(t){var c=n("5530"),o=n("53ca"),a=(n("a9e3"),n("4de4"),n("b0c0"),n("ac1f"),n("5319"),n("a15b"),n("7a23")),i=n("5502"),r=n("2824"),s=n("a6e6");e["a"]={components:{BaseLayout:r["a"],Pay:s["default"]},props:{filter:{type:[String,Number],default:""}},data:function(){var t=Object(a["E"])({refreshing:!1,loading:!1,finished:!1,keyword:"",list:[],offset:0,limit:20,popup:!1,detail:{},cards:{},picker:!1,payData:{},payShow:!1}),e=[{name:"新订单",icon:"warning",color:"#F00"},{name:"等待付款",icon:"warning",color:"#C60"},{name:"等待使用",icon:"qr",color:"#00C"},{name:"订单关闭",icon:"clear",color:"#CCC"},{name:"订单完成",icon:"checked",color:"#0C0"}],n={linkMan:"联系人",linkPhone:"手机号码",linkEmail:"邮箱地址",linkCreditNo:"身份证号",linkAddress:"邮寄地址"};return{state:t,status:e,fields:n}},created:function(){this.onRefresh()},computed:{btn:function(){return"object"==Object(o["a"])(this.status[this.filter])?this.status[this.filter]["name"]:"所有订单"}},watch:{$route:function(t,e){t.path==e.path&&t.query!=e.query&&setTimeout(this.onRefresh,100)}},methods:Object(c["a"])({onRefresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/jcmall/orderList?filter="+this.filter+"&keyword="+this.state.keyword+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var c=e[n];t.state.list.push(c)}}))},onChange:function(t,e){this.state.picker=!1,"undefined"==typeof e&&(e=""),this.$router.replace("order?filter="+e)},onPay:function(t){var e=this;this.state.payData={},this.state.payShow=!1,this.$http.post("/jcmall/checkout?id="+t.productNo,{oid:t.orderId}).then((function(t){e.state.payData=Object(c["a"])(Object(c["a"])({},t),{},{json:JSON.stringify(t)}),e.state.payShow=!0}))},onCancel:function(t){this.$http.post("/jcmall/orderOpt?type=cancelOrder&orderId="+t.orderId).then(this.onRefresh)},onView:function(e){var n=this;this.$http.post("/jcmall/orderOpt?type=orderDetail&orderId="+e.orderId).then((function(e){if("object"!=Object(o["a"])(e)||"object"!=Object(o["a"])(e["codeUrls"]))return n.$toast("订单详情失败，请联系客服处理！");for(var c in t.isPlainObject(e["codeUrls"]["codeUrl"])&&(e["codeUrls"]["codeUrl"]=[e["codeUrls"]["codeUrl"]]),e["codeUrls"]["codeUrl"])e["codeUrls"]["codeUrl"][c]["color"]="rgb("+t.random(220,250)+","+t.random(220,250)+","+t.random(220,250)+")";e["sendContent"]=t.filter([e["sendContent1"],e["sendContent2"],e["sendContent3"]],(function(e){return!t.isEmpty(e)})).join("<br>"),n.state.detail=e,n.state.cards=e["codeUrls"]["codeUrl"],n.state.popup=!0}))},getStatus:function(t){return this.status[t.orderState]}},Object(i["c"])(["auth"]))}}).call(this,n("81b0"))},e2c9:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("d3b7"),n("25f0"),n("b64b");var c=n("7a23"),o=Object(c["X"])("data-v-c0838784");Object(c["D"])("data-v-c0838784");var a={class:"item"},i=Object(c["j"])("  "),r={class:"detail"},s={class:"amount"},l={class:"action"},u=Object(c["j"])("立即付款"),d=Object(c["j"])("关闭订单"),f=Object(c["j"])(" 查看详情"),b={class:"popup"},j={key:1,class:"text"},h=Object(c["j"])(" 点我复制"),O={class:"indicator"};Object(c["B"])();var p=o((function(t,e,n,p,k,m){var y=Object(c["I"])("van-icon"),g=Object(c["I"])("van-search"),v=Object(c["I"])("van-sticky"),w=Object(c["I"])("van-tag"),C=Object(c["I"])("van-cell"),U=Object(c["I"])("van-button"),I=Object(c["I"])("van-empty"),_=Object(c["I"])("van-list"),S=Object(c["I"])("van-pull-refresh"),M=Object(c["I"])("van-swipe-item"),A=Object(c["I"])("van-swipe"),$=Object(c["I"])("van-action-sheet"),L=Object(c["I"])("van-picker"),R=Object(c["I"])("van-popup"),x=Object(c["I"])("pay"),V=Object(c["I"])("BaseLayout");return Object(c["A"])(),Object(c["g"])(V,{title:"荟玩订单",navbar:"show",height:"0"},{default:o((function(){return[Object(c["k"])(v,{"offset-top":45},{default:o((function(){return[Object(c["k"])(g,{modelValue:k.state.keyword,"onUpdate:modelValue":e[2]||(e[2]=function(t){return k.state.keyword=t}),placeholder:"搜索订单",background:"#EEE",clearable:"",onSearch:m.onRefresh,onClear:m.onRefresh},{left:o((function(){return[Object(c["k"])(y,{class:"select",name:"arrow-down",onClick:e[1]||(e[1]=function(t){return k.state.picker=!0})},{default:o((function(){return[Object(c["j"])("  "+Object(c["M"])(m.btn),1)]})),_:1})]})),_:1},8,["modelValue","onSearch","onClear"])]})),_:1}),Object(c["k"])(S,{modelValue:k.state.refreshing,"onUpdate:modelValue":e[4]||(e[4]=function(t){return k.state.refreshing=t}),onRefresh:m.onRefresh},{default:o((function(){return[Object(c["k"])(_,{class:"list",loading:k.state.loading,"onUpdate:loading":e[3]||(e[3]=function(t){return k.state.loading=t}),finished:k.state.finished,"loading-text":"正在请求数据 ...","finished-text":"-- 没有了 --","immediate-check":!1,onLoad:m.onLoad},{default:o((function(){return[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(k.state.list,(function(e,n){return Object(c["A"])(),Object(c["g"])("div",{key:n},[Object(c["k"])(w,{class:"dt"},{default:o((function(){return[Object(c["j"])(Object(c["M"])(e.orderDate),1)]})),_:2},1024),Object(c["k"])("div",a,[Object(c["k"])(C,{title:"#"+e.orderId,onClick:function(n){return t.$copy(e.orderId)}},{extra:o((function(){return[Object(c["k"])(y,{class:"status",name:m.getStatus(e).icon,color:m.getStatus(e).color},{default:o((function(){return[Object(c["j"])(" "+Object(c["M"])(m.getStatus(e).name),1)]})),_:2},1032,["name","color"])]})),_:2},1032,["title","onClick"]),Object(c["k"])(C,{title:e.productName,onClick:function(n){return t.$router.push("item?id="+e.productNo)}},{extra:o((function(){return[i,Object(c["k"])("b",null,"x "+Object(c["M"])(e.num),1)]})),_:2},1032,["title","onClick"]),Object(c["k"])("div",r,[Object(c["k"])("span",s,"￥ "+Object(c["M"])(e.orderMoney),1),Object(c["U"])(Object(c["k"])("span",l,[Object(c["k"])(U,{type:"success",size:"mini",plain:"",onClick:function(t){return m.onPay(e)}},{default:o((function(){return[u]})),_:2},1032,["onClick"]),Object(c["k"])(U,{type:"danger",size:"mini",plain:"",onClick:function(t){return m.onCancel(e)}},{default:o((function(){return[d]})),_:2},1032,["onClick"])],512),[[c["Q"],1==e.orderState]]),Object(c["U"])(Object(c["k"])("span",{class:"view",onClick:function(t){return m.onView(e)}},[Object(c["k"])(y,{name:k.state.popup?"eye-o":"closed-eye"},{default:o((function(){return[f]})),_:1},8,["name"])],8,["onClick"]),[[c["Q"],/(2|4)/.test(e.orderState)]])])])])})),128)),Object(c["U"])(Object(c["k"])(I,{style:{width:"100%"}},null,512),[[c["Q"],0==k.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"]),Object(c["k"])($,{show:k.state.popup,"onUpdate:show":e[6]||(e[6]=function(t){return k.state.popup=t}),title:"订单详情"},{default:o((function(){return[Object(c["k"])("div",b,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(k.fields,(function(t,e){return Object(c["U"])((Object(c["A"])(),Object(c["g"])(C,{key:e,title:t,value:k.state.detail[e].toString()},null,8,["title","value"])),[[c["Q"],k.state.detail[e]&&k.state.detail[e].length>0]])})),128)),Object(c["k"])(C,{title:"订购 / 验证数量",value:k.state.detail.num+" / "+k.state.detail.finishNum},null,8,["value"]),Object(c["k"])(A,{class:"swipe"},{indicator:o((function(t){var e=t.active;return[Object(c["k"])("div",O,Object(c["M"])(e+1)+" / "+Object(c["M"])(Object.keys(k.state.cards).length),1)]})),default:o((function(){return[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(k.state.cards,(function(e,n){return Object(c["A"])(),Object(c["g"])(M,{class:"card",key:n,style:{borderColor:e.color}},{default:o((function(){return[1==e.codeType?(Object(c["A"])(),Object(c["g"])(y,{key:0,class:"icon",name:e.codeUrl},null,8,["name"])):(Object(c["A"])(),Object(c["g"])("div",j,[Object(c["k"])("div",{class:0==e.codeType?"code":"link"},Object(c["M"])(e.codeUrl),3),Object(c["k"])(y,{class:"tool",name:"more-o",onClick:function(n){return t.$copy(e.codeUrl)}},{default:o((function(){return[h]})),_:2},1032,["onClick"])]))]})),_:2},1032,["style"])})),128))]})),_:1}),Object(c["k"])("div",{class:"notice",innerHTML:k.state.detail.sendContent,onClick:e[5]||(e[5]=function(e){return t.$copy(k.state.detail.sendContent)})},null,8,["innerHTML"])])]})),_:1},8,["show"]),Object(c["k"])(R,{show:k.state.picker,"onUpdate:show":e[8]||(e[8]=function(t){return k.state.picker=t}),round:"",position:"bottom"},{default:o((function(){return[Object(c["k"])(L,{columns:k.status,"columns-field-names":{text:"name"},"cancel-button-text":"查看所有订单",onCancel:e[7]||(e[7]=function(t){return m.onChange(null)}),onConfirm:m.onChange},null,8,["columns","onConfirm"])]})),_:1},8,["show"]),Object(c["k"])(x,Object(c["r"])(k.state.payData,{show:k.state.payShow,"onUpdate:show":e[9]||(e[9]=function(t){return k.state.payShow=t}),onOnFinish:m.onRefresh}),null,16,["show","onOnFinish"])]})),_:1})})),k=n("c9e1"),m=(n("68cf"),n("6b0d")),y=n.n(m);const g=y()(k["a"],[["render",p],["__scopeId","data-v-c0838784"]]);e["default"]=g}}]);