(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60ca5957"],{"0db3":function(t,e,n){"use strict";n("a7f7")},1798:function(t,e,n){},"25f0":function(t,e,n){"use strict";var a=n("6eeb"),c=n("825a"),i=n("d039"),r=n("ad6d"),o="toString",s=RegExp.prototype,u=s[o],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),b=u.name!=o;(l||b)&&a(RegExp.prototype,o,(function(){var t=c(this),e=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?r.call(t):n);return"/"+e+"/"+a}),{unsafe:!0})},2824:function(t,e,n){"use strict";var a=n("7a23"),c=Object(a["V"])("data-v-3905236b");Object(a["C"])("data-v-3905236b");var i={class:"container"},r={class:"subtitle"},o={class:"extra"};Object(a["A"])();var s=c((function(t,e,n,s,u,l){var b=Object(a["H"])("van-icon"),f=Object(a["H"])("van-nav-bar"),d=Object(a["H"])("van-sticky"),j=Object(a["H"])("van-col"),p=Object(a["H"])("van-row");return Object(a["z"])(),Object(a["g"])("div",i,[Object(a["S"])(Object(a["j"])(d,{onChange:e[2]||(e[2]=function(t){return s.state.isTop=!s.state.isTop})},{default:c((function(){return[Object(a["j"])(f,{class:["navbar",{notTop:!s.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:l.onClickLeft,onClickRight:e[1]||(e[1]=function(e){return t.$emit("click-more")})},{left:c((function(){return[Object(a["S"])(Object(a["j"])("div",null,[Object(a["G"])(t.$slots,"back",{},(function(){return[Object(a["j"])(b,{name:"arrow-left"})]}),{},!0)],512),[[a["O"],!n.noback]])]})),title:c((function(){return[Object(a["G"])(t.$slots,"head",{},(function(){return[Object(a["j"])("div",{style:{width:"100%",color:s.state.isTop?n.fg:"inherit"}},Object(a["L"])(s.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)]})),right:c((function(){return[Object(a["G"])(t.$slots,"more",{},void 0,!0)]})),_:1},8,["class","onClickLeft"])]})),_:1},512),[[a["O"],"hide"!=n.navbar]]),Object(a["j"])("div",{class:["page",{notTop:!s.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(a["j"])(a["d"],{name:"van-slide-down"},{default:c((function(){return[Object(a["S"])(Object(a["j"])(p,{justify:"space-between",align:"center",class:"head",style:{height:n.height+"px",color:n.fg}},{default:c((function(){return[Object(a["j"])(j,{span:"16"},{default:c((function(){return[Object(a["j"])("div",{class:"title",style:{color:n.fg},onClick:e[3]||(e[3]=function(e){return t.$emit("click-title")})},[Object(a["G"])(t.$slots,"title",{},(function(){return[Object(a["i"])(Object(a["L"])(n.title),1)]}),{},!0),Object(a["j"])("div",r,Object(a["L"])(n.subtitle),1)],4)]})),_:3}),Object(a["j"])(j,{span:"8"},{default:c((function(){return[Object(a["j"])("div",o,[Object(a["G"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[a["O"],s.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(a["G"])(t.$slots,"default",{},void 0,!0)],6)])})),u={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(a["D"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){if(!this.noback)return"function"==typeof this.$slots.back?this.$emit("click-back"):window&&window.history.length>1?this.$router.back():this.$router.push("/")}}},l=(n("3c9a"),n("6b0d")),b=n.n(l);const f=b()(u,[["render",s],["__scopeId","data-v-3905236b"]]);e["a"]=f},"306f":function(t,e,n){"use strict";var a=n("7a23"),c=Object(a["V"])("data-v-4ce7b42a"),i=c((function(t,e,n,c,i,r){return Object(a["z"])(),Object(a["g"])("ul",{class:"card",style:{background:n.bg,color:n.fg}},[Object(a["j"])("li",{class:"slot",style:{fontSize:n.size}},[Object(a["G"])(t.$slots,"prepend",{},void 0,!0)],4),(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(i.list,(function(t,e){return Object(a["z"])(),Object(a["g"])("li",{key:e,style:{fontSize:n.size}},Object(a["L"])(t),5)})),128)),Object(a["j"])("li",{class:"slot",style:{fontSize:n.size}},[Object(a["G"])(t.$slots,"default",{},void 0,!0)],4)],4)})),r=(n("a9e3"),n("159b"),n("ac1f"),n("1276"),n("d3b7"),n("25f0"),{props:{number:{type:[String,Number],default:0},fg:{type:String,default:"#666"},bg:{type:String,default:"transparent"},size:String},data:function(){return{list:[]}},mounted:function(){this.scroll()},watch:{number:function(t,e){this.scroll()}},methods:{scroll:function(){var t=this,e=[];this.number.toString().split("").forEach((function(t){e.push(t)}));var n=setInterval((function(){var a=e.length;if(0!=a){var c=e.pop();if(t.list[a-1]=c,"."!=c)var i=setInterval((function(){t.list[a-1]++,t.list[a-1]>=10&&(t.list[a-1]=0),t.list[a-1]==c&&clearInterval(i)}),30)}else clearInterval(n)}),100)}}}),o=(n("0db3"),n("6b0d")),s=n.n(o);const u=s()(r,[["render",i],["__scopeId","data-v-4ce7b42a"]]);e["a"]=u},"3c9a":function(t,e,n){"use strict";n("c89b")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),c=n("5899"),i="["+c+"]",r=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,n){var a=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var i,r;return c&&"function"==typeof(i=e.constructor)&&i!==n&&a(r=i.prototype)&&r!==n.prototype&&c(t,r),t}},7403:function(t,e,n){"use strict";n("1798")},a7f7:function(t,e,n){},a9e3:function(t,e,n){"use strict";var a=n("83ab"),c=n("da84"),i=n("94ca"),r=n("6eeb"),o=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),b=n("d039"),f=n("7c73"),d=n("241c").f,j=n("06cf").f,p=n("9bf2").f,h=n("58a8").trim,O="Number",g=c[O],v=g.prototype,m=s(f(v))==O,y=function(t){var e,n,a,c,i,r,o,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,c=49;break;case 79:case 111:a=8,c=55;break;default:return+u}for(i=u.slice(2),r=i.length,o=0;o<r;o++)if(s=i.charCodeAt(o),s<48||s>c)return NaN;return parseInt(i,a)}return+u};if(i(O,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(m?b((function(){v.valueOf.call(n)})):s(n)!=O)?u(new g(y(e)),n,_):y(e)},w=a?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;w.length>C;C++)o(g,k=w[C])&&!o(_,k)&&p(_,k,j(g,k));_.prototype=v,v.constructor=_,r(c,O,_)}},b62f:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c=Object(a["V"])("data-v-67435347");Object(a["C"])("data-v-67435347");var i={class:"title"},r=Object(a["i"])("累计充值"),o=Object(a["j"])("span",{class:"unit"},"元",-1),s={class:"title"},u=Object(a["i"])("累计提现"),l=Object(a["j"])("span",{class:"unit"},"元",-1),b={class:"info"},f={class:"deposit"},d=Object(a["i"])(" 元"),j=Object(a["i"])("立即充值"),p=Object(a["i"])(" 收款账号： "),h=Object(a["i"])(" 提现数量： "),O={class:"slider-btn"},g=Object(a["i"])("申请提现"),v=Object(a["i"])("操作历史");Object(a["A"])();var m=c((function(t,e,n,m,y,k){var _=Object(a["H"])("van-tag"),w=Object(a["H"])("number-roll"),C=Object(a["H"])("van-col"),S=Object(a["H"])("van-row"),$=Object(a["H"])("van-field"),x=Object(a["H"])("van-button"),I=Object(a["H"])("van-tab"),H=Object(a["H"])("van-slider"),N=Object(a["H"])("van-form"),z=Object(a["H"])("van-tabs"),F=Object(a["H"])("van-divider"),L=Object(a["H"])("van-empty"),V=Object(a["H"])("van-icon"),E=Object(a["H"])("van-cell"),T=Object(a["H"])("van-cell-group"),A=Object(a["H"])("van-list"),R=Object(a["H"])("BaseLayout");return Object(a["z"])(),Object(a["g"])(R,{title:"充值提现",bg:"#1989fa",fg:"#FFF",height:0},{default:c((function(){return[Object(a["j"])(S,{class:"stat",gutter:"2",justify:"space-around",align:"center"},{default:c((function(){return[Object(a["j"])(C,{span:"12"},{default:c((function(){return[Object(a["j"])("div",i,[Object(a["j"])(_,{size:"large",color:"#1989fa"},{default:c((function(){return[r]})),_:1})]),Object(a["j"])(w,{number:m.state.stat.deposit,fg:"#FFF",size:"21px"},{default:c((function(){return[o]})),_:1},8,["number"])]})),_:1}),Object(a["j"])(C,{span:"12"},{default:c((function(){return[Object(a["j"])("div",s,[Object(a["j"])(_,{size:"large",color:"#1989fa"},{default:c((function(){return[u]})),_:1})]),Object(a["j"])(w,{number:Math.abs(m.state.stat.withdrawal),fg:"#FFF",size:"21px"},{default:c((function(){return[l]})),_:1},8,["number"])]})),_:1})]})),_:1}),Object(a["j"])("div",b,[Object(a["j"])(z,{active:m.state.active,"onUpdate:active":e[5]||(e[5]=function(t){return m.state.active=t}),color:"#1989fa","offset-top":"45",type:"line",sticky:"",swipeable:"",animated:"",onChange:k.onChange},{default:c((function(){return[Object(a["j"])(I,{title:"充值"},{default:c((function(){return[Object(a["j"])("div",f,[Object(a["j"])($,{type:"number",min:"1",border:1,modelValue:m.state.num,"onUpdate:modelValue":e[1]||(e[1]=function(t){return m.state.num=t}),"input-align":"right",clearable:"",label:"金额",placeholder:"请输入充值金额"},{extra:c((function(){return[d]})),_:1},8,["modelValue"]),Object(a["j"])($,{modelValue:m.state.remark,"onUpdate:modelValue":e[2]||(e[2]=function(t){return m.state.remark=t}),type:"text",maxlength:"20","input-align":"right",label:"备注",placeholder:"可以不填"},null,8,["modelValue"]),Object(a["j"])(x,{round:"",block:"",color:"#39F",onClick:k.onQuery},{default:c((function(){return[j]})),_:1},8,["onClick"])])]})),_:1}),Object(a["j"])(I,{title:"提现"},{default:c((function(){return[Object(a["j"])(N,{class:"withdrawal",onSubmit:k.onSubmit},{default:c((function(){return[Object(a["j"])(S,{align:"center"},{default:c((function(){return[Object(a["j"])(C,{span:"7"},{default:c((function(){return[p]})),_:1}),Object(a["j"])(C,{span:"17"},{default:c((function(){return[Object(a["j"])($,{modelValue:m.state.account,"onUpdate:modelValue":e[3]||(e[3]=function(t){return m.state.account=t}),type:"textarea",maxlength:"100",autosize:"",rows:"2",placeholder:"银行账号和收款人姓名，请仔细核对，填错概不负责"},null,8,["modelValue"])]})),_:1}),Object(a["j"])(C,{span:"7"},{default:c((function(){return[h]})),_:1}),Object(a["j"])(C,{span:"17"},{default:c((function(){return[Object(a["j"])(H,{class:"slider",modelValue:m.state.amount,"onUpdate:modelValue":e[4]||(e[4]=function(t){return m.state.amount=t}),min:"10",max:"1000",step:"1","active-color":"#39F"},{button:c((function(){return[Object(a["j"])("div",O,Object(a["L"])(m.state.amount),1)]})),_:1},8,["modelValue"])]})),_:1}),Object(a["j"])(C,{span:"24"},{default:c((function(){return[Object(a["j"])(x,{round:"",block:"",color:"#39F","native-type":"submit"},{default:c((function(){return[g]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["onSubmit"])]})),_:1})]})),_:1},8,["active","onChange"]),Object(a["j"])(F,{class:"title"},{default:c((function(){return[v]})),_:1}),Object(a["j"])(A,{loading:m.state.loading,"onUpdate:loading":e[6]||(e[6]=function(t){return m.state.loading=t}),finished:m.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:k.onLoad},{default:c((function(){return[Object(a["S"])(Object(a["j"])(L,null,null,512),[[a["O"],0==m.state.list.length]]),(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(m.state.list,(function(e,n){return Object(a["z"])(),Object(a["g"])(T,{class:"block",border:!1,key:n,onClick:function(n){return t.$toast(e.remark)}},{default:c((function(){return[Object(a["j"])(E,{class:"dt",border:!1,title:e.dt},{extra:c((function(){return[Object(a["j"])("span",{style:{color:e.color}},Object(a["L"])(e.result),5),Object(a["i"])("   #"+Object(a["L"])(e.id)+" ",1),Object(a["S"])(Object(a["j"])(V,{class:"close",name:"close",size:"21",color:"#F00",onClick:function(t){return k.onCancel(e.id)}},null,8,["onClick"]),[[a["O"],0==e.status]])]})),_:2},1032,["title"]),Object(a["j"])(E,{class:"item",border:!1,title:e.remark,value:e.amount+" 元"},null,8,["title","value"]),Object(a["j"])(E,{class:"detail",border:!1,value:e.detail,"is-link":"",onClick:function(n){return t.$copy(e.detail)}},null,8,["value","onClick"])]})),_:2},1032,["onClick"])})),128))]})),_:1},8,["loading","finished","onLoad"])])]})),_:1})})),y=n("5530"),k=(n("ac1f"),n("5319"),n("5502")),_=n("2824"),w=n("306f"),C={components:{BaseLayout:_["a"],NumberRoll:w["a"]},props:{action:{type:String,default:"deposit"}},setup:function(){var t=Object(a["D"])({stat:{balance:0,freez:0,transfer:0,deposit:0,withdrawal:0,consume:0,reward:0},num:1e3,remark:"微信充值",account:"",amount:0,active:0,type:"",loading:!1,finished:!1,list:[],offset:0,limit:20});return{state:t}},created:function(){this.state.active="withdrawal"==this.action?1:0,this.onChange()},mounted:function(){},computed:Object(y["a"])({},Object(k["b"])(["authorized","account"])),methods:{onChange:function(){var t=this;this.state.type=["deposit","withdrawal"][this.state.active],this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad(),this.$http.get("/property/summary?subject=cash").then((function(e){return t.state.stat=e}))},onLoad:function(){var t=this;this.$http.get("/property/cashlist?type="+this.state.type+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var a=e[n];t.state.list.push(Object(y["a"])(Object(y["a"])({},a),{amount:a.amount.replace(/(\.\d\d)(\d+)$/,"$1"),result:["待付款","交易完成","交易取消"][a.status],color:["#999","#090","#F66"][a.status]}))}}))},onQuery:function(){var t=this;this.$http.post("/property/cashRequest?type=deposit&amount="+this.state.num+"&remark="+this.state.remark).then((function(e){e.code&&t.$dialog.alert({title:"请用微信扫码付款",message:"<img src='http://api.qrserver.com/v1/create-qr-code/?size=250x250&ecc=H&margin=10&data="+e.code+"'>",theme:"round-button",confirmButtonText:"我已完成付款",allowHtml:!0}).then(t.onChange)||WeixinJSBridge&&WeixinJSBridge.invoke("getBrandWCPayRequest",e,(function(e){if("get_brand_wcpay_request:ok"==e.err_msg)return t.$dialog.alert({message:"充值成功"}).then(t.onChange);t.$toast("充值失败"),t.onChange()}))})).catch(this.onChange)},onSubmit:function(){if(!/[\d]{10,}/.test(this.state.account))return this.$toast("银行账号不合要求");this.$http.post("/property/cashRequest?type=withdrawal&amount="+this.state.amount+"&detail="+this.state.account+"&remark=提现到银行卡").then(this.onChange)},onCancel:function(t){this.$http.post("/property/cashCancel?id="+t).then(this.onChange)}}},S=(n("7403"),n("6b0d")),$=n.n(S);const x=$()(C,[["render",m],["__scopeId","data-v-67435347"]]);e["default"]=x},c89b:function(t,e,n){}}]);