(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40196afc"],{"0a65":function(t,e,n){"use strict";(function(t){n("a9e3"),n("d3b7"),n("ddb0");var c=n("7a23"),i=n("2824");e["a"]={components:{BaseLayout:i["a"]},props:{id:{type:[String,Number],default:0},lid:{type:[String,Number],default:0}},setup:function(){var t=Object(c["B"])({order:{},list:[],logistics:[]});Object(c["C"])(0);return{state:t}},created:function(){this.active=this.lid,this.onLoad()},methods:{onLoad:function(){var e=this;this.$http.post("/mall/orderDetail?id="+this.id).then((function(t){e.state.order=t,1==t.type&&t.status>0&&e.$http.get("/jdmall/update?id="+e.id)})),this.$http.post("/mall/orderTrack?oid="+this.id).then((function(n){var c={};for(var i in n)c[n[i]["id"]]=n[i],c[n[i]["id"]]["track"]=t.reverse(JSON.parse(n[i]["track"]));e.state.list=c,e.state.logistics="undefined"!=typeof c[e.lid]?c[e.lid]:c[t.keys(c)[0]]}))},onTab:function(t){this.state.logistics=this.state.list[t]}}}}).call(this,n("81b0"))},"1e67":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var c=n("1d80"),i=n("5899"),r="["+i+"]",a=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),s=function(t){return function(e){var n=String(c(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,n){var c=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var r,a;return i&&"function"==typeof(r=e.constructor)&&r!==n&&c(a=r.prototype)&&a!==n.prototype&&i(t,a),t}},9340:function(t,e,n){"use strict";n.r(e);var c=n("53ca"),i=(n("b0c0"),n("b64b"),n("7a23")),r=Object(i["R"])("data-v-6a53b471"),a=r((function(t,e,n,a,o,s){var u=Object(i["F"])("van-cell"),l=Object(i["F"])("van-tab"),b=Object(i["F"])("van-tabs"),f=Object(i["F"])("van-icon"),d=Object(i["F"])("van-step"),O=Object(i["F"])("van-steps"),p=Object(i["F"])("BaseLayout");return Object(i["x"])(),Object(i["f"])(p,{title:"物流详情"},{default:r((function(){return["object"==Object(c["a"])(a.state.order.consignee)?(Object(i["x"])(),Object(i["f"])(u,{key:0,class:"consignee",border:!1},{title:r((function(){return[Object(i["h"])(Object(i["J"])(a.state.order.consignee.name)+"（"+Object(i["J"])(a.state.order.consignee.mobile)+"）",1)]})),label:r((function(){return[Object(i["h"])(Object(i["J"])(a.state.order.consignee.province)+" "+Object(i["J"])(a.state.order.consignee.city)+" "+Object(i["J"])(a.state.order.consignee.county)+" "+Object(i["J"])(a.state.order.consignee.address),1)]})),_:1})):Object(i["g"])("",!0),Object.keys(a.state.list).length>1?(Object(i["x"])(),Object(i["f"])(b,{key:1,active:t.active,"onUpdate:active":e[1]||(e[1]=function(e){return t.active=e}),color:"#07c160",onClick:s.onTab},{default:r((function(){return[(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(a.state.order.logistics,(function(t,e,n){return Object(i["x"])(),Object(i["f"])(l,{key:e,title:Object.keys(a.state.list).length>1?"包裹 "+(n+1):"",name:e},null,8,["title","name"])})),128))]})),_:1},8,["active","onClick"])):Object(i["g"])("",!0),Object(i["P"])(Object(i["i"])(u,{title:a.state.logistics.carrier,value:a.state.logistics.waybill},{"right-icon":r((function(){return[Object(i["i"])(f,{name:"edit",size:"18",onClick:e[2]||(e[2]=function(e){return t.$copy(a.state.logistics.waybill)})})]})),_:1},8,["title","value"]),[[i["M"],a.state.logistics.carrier&&a.state.logistics.carrier.length>=2]]),Object(i["i"])(O,{direction:"vertical",active:0},{default:r((function(){return[(Object(i["x"])(!0),Object(i["f"])(i["a"],null,Object(i["D"])(a.state.logistics.track,(function(t,e){return Object(i["x"])(),Object(i["f"])(d,{key:e},{default:r((function(){return[Object(i["i"])(u,{title:t.msg,label:t.dt},null,8,["title","label"])]})),_:2},1024)})),128))]})),_:1})]})),_:1})})),o=n("0a65"),s=(n("c352"),n("6b0d")),u=n.n(s);const l=u()(o["a"],[["render",a],["__scopeId","data-v-6a53b471"]]);e["default"]=l},a9e3:function(t,e,n){"use strict";var c=n("83ab"),i=n("da84"),r=n("94ca"),a=n("6eeb"),o=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),b=n("d039"),f=n("7c73"),d=n("241c").f,O=n("06cf").f,p=n("9bf2").f,j=n("58a8").trim,g="Number",v=i[g],h=v.prototype,y=s(f(h))==g,N=function(t){var e,n,c,i,r,a,o,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=j(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:c=2,i=49;break;case 79:case 111:c=8,i=55;break;default:return+u}for(r=u.slice(2),a=r.length,o=0;o<a;o++)if(s=r.charCodeAt(o),s<48||s>i)return NaN;return parseInt(r,c)}return+u};if(r(g,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var I,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(y?b((function(){h.valueOf.call(n)})):s(n)!=g)?u(new v(N(e)),n,k):N(e)},m=c?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;m.length>_;_++)o(v,I=m[_])&&!o(k,I)&&p(k,I,O(v,I));k.prototype=h,h.constructor=k,a(i,g,k)}},c352:function(t,e,n){"use strict";n("1e67")}}]);
//# sourceMappingURL=chunk-40196afc.b955930b.js.map