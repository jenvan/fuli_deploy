(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f4e1e52"],{"13d5":function(t,e,i){"use strict";var a=i("23e7"),n=i("d58f").left,s=i("a640"),r=i("2d00"),c=i("605d"),o=s("reduce"),u=!c&&r>79&&r<83;a({target:"Array",proto:!0,forced:!o||u},{reduce:function(t){return n(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"24fa":function(t,e,i){"use strict";(function(t){var a=i("5530"),n=(i("a9e3"),i("d81d"),i("ac1f"),i("1276"),i("7db0"),i("d3b7"),i("25f0"),i("a15b"),i("13d5"),i("b0c0"),i("7a23")),s=i("5502"),r=i("2824");e["a"]={components:{BaseLayout:r["a"]},props:{id:{type:[String,Number],default:0},oid:{type:[String,Number],default:0},sku:{type:[String,Number],default:0}},data:function(){var t=Object(n["D"])({item:{},order:{},service:{id:0,type:0,intact:"1",num:1,pickup_type:1,status:-1},address:[],popup:0,index:0,options:{1:["退货退款","换货","维修"],2:["自行快递","上门取件"]},form:{}}),e=Object(n["E"])(1),i=Object(n["E"])(-1),a=Object(n["E"])([]);return{state:t,disabled:e,step:i,list:a}},created:function(){var t=this;this.onLoad(),this.$http.get("/mall/addressList").then((function(e){var i=[];for(var a in e)i.push(t.parseAddress1(e[a]));t.state.options[3]=i,t.state.options[4]=i,t.state.address=e,t.fillForm()}))},computed:Object(a["a"])({},Object(s["d"])(["channel"])),methods:{onLoad:function(){var e=this;t.toSafeInteger(this.id)>0?this.$http.get("/mall/serviceDetail?id="+this.id).then((function(i){e.state.service=i,e.step=i.status-1,e.list=t.map(t.without(i.attachment.split(","),""),(function(t){return{url:t,isImage:!0}})),i.channel>0&&i.status>0&&i.status<4&&e.$http.get("/"+e.channel[i.channel]["type"]+"/serviceUpdate?id="+e.id).then((function(t){"undefined"!=typeof t["refresh"]&&t["refresh"]&&e.onLoad()})),e.onInit(i.oid,i.sku)})):this.onInit(this.oid,this.sku)},onInit:function(e,i){var a=this;this.disabled=this.state.service.id>0&&this.state.service.status<9,this.$http.post("/mall/orderDetail?id="+e).then((function(e){a.state.order=e,a.state.item=t.find(e.detail,{sku:i.toString()}),a.fillForm()}))},onConfirm:function(t,e){1==this.state.popup&&(this.state.service.type=e),2==this.state.popup&&(this.state.service.pickup_type=e),3==this.state.popup&&(this.state.service.pickup_address=this.state.address[e]),4==this.state.popup&&(this.state.service.return_address=this.state.address[e]),this.state.popup=0,this.fillForm()},onSubmit:function(){var e=this;if("undefined"==typeof this.state.service.appeal||this.state.service.appeal.length<10)return this.$toast("请将“申请原因”填写完整");if(this.state.service.pickup_type>0&&t.isEmpty(this.state.service.pickup_address))return this.$toast("请选择“取件地址”");if(this.state.service.type>0&&t.isEmpty(this.state.service.return_address))return this.$toast("请选择“返件地址”");var i=t.assign({},this.state.service);0==this.state.service.id&&(i=t.assign(i,this.state.item,{oid:this.oid,channel:this.state.order.channel})),i["jdoid"]=this.state.order.extra,i["attachment"]=t.reduce(this.list,(function(t,e){return t&&t.push(e.url),t}),[]).join(","),i["pickup_address"]=JSON.stringify(this.state.service["pickup_address"]),i["return_address"]=JSON.stringify(this.state.service["return_address"]),this.$http.post("/"+this.channel[i.channel]["type"]+"/serviceApply",i).then((function(t){e.$router.push("?id="+t.id)}))},onUpload:function(t){t.status="uploading",t.message="上传中...";var e=new FormData;e.append("file",t.file),this.$http.post("/mall/upload",e).then((function(e){t.status="done",t.message="上传成功",t.url=e.filepath}))},fillForm:function(){this.state.form[1]=this.state.options[1][this.state.service.type],this.state.form[2]=this.state.options[2][this.state.service.pickup_type],t.isEmpty(this.state.service.pickup_address)||(this.state.form[3]=this.parseAddress2(this.state.service.pickup_address)),t.isEmpty(this.state.service.return_address)||(this.state.form[4]=this.parseAddress2(this.state.service.return_address))},parseAddress1:function(t){return"<div style='text-align:center;'>"+t["name"]+" "+t["mobile"]+"<div style='color:#999;font-size:12px;'>"+t["city"]+t["county"]+t["address"]+"</div></div>"},parseAddress2:function(t){return t["name"]+" "+t["mobile"]+" "+t["province"]+t["city"]+t["county"]+" "+t["address"]}}}}).call(this,i("81b0"))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var a=i("1d80"),n=i("5899"),s="["+n+"]",r=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),o=function(t){return function(e){var i=String(a(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,i){var a=i("861d"),n=i("d2bb");t.exports=function(t,e,i){var s,r;return n&&"function"==typeof(s=e.constructor)&&s!==i&&a(r=s.prototype)&&r!==i.prototype&&n(t,r),t}},"7db0":function(t,e,i){"use strict";var a=i("23e7"),n=i("b727").find,s=i("44d2"),r="find",c=!0;r in[]&&Array(1)[r]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s(r)},a15b:function(t,e,i){"use strict";var a=i("23e7"),n=i("44ad"),s=i("fc6a"),r=i("a640"),c=[].join,o=n!=Object,u=r("join",",");a({target:"Array",proto:!0,forced:o||!u},{join:function(t){return c.call(s(this),void 0===t?",":t)}})},a9e3:function(t,e,i){"use strict";var a=i("83ab"),n=i("da84"),s=i("94ca"),r=i("6eeb"),c=i("5135"),o=i("c6b6"),u=i("7156"),l=i("c04e"),d=i("d039"),p=i("7c73"),f=i("241c").f,b=i("06cf").f,h=i("9bf2").f,v=i("58a8").trim,m="Number",j=n[m],O=j.prototype,y=o(p(O))==m,g=function(t){var e,i,a,n,s,r,c,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(i=u.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+u}for(s=u.slice(2),r=s.length,c=0;c<r;c++)if(o=s.charCodeAt(c),o<48||o>n)return NaN;return parseInt(s,a)}return+u};if(s(m,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var _,k=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof k&&(y?d((function(){O.valueOf.call(i)})):o(i)!=m)?u(new j(g(e)),i,k):g(e)},x=a?f(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),V=0;x.length>V;V++)c(j,_=x[V])&&!c(k,_)&&h(k,_,b(j,_));k.prototype=O,O.constructor=k,r(n,m,k)}},d58f:function(t,e,i){var a=i("1c0b"),n=i("7b0b"),s=i("44ad"),r=i("50c4"),c=function(t){return function(e,i,c,o){a(i);var u=n(e),l=s(u),d=r(u.length),p=t?d-1:0,f=t?-1:1;if(c<2)while(1){if(p in l){o=l[p],p+=f;break}if(p+=f,t?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:d>p;p+=f)p in l&&(o=i(o,l[p],p,u));return o}};t.exports={left:c(!1),right:c(!0)}},d81d:function(t,e,i){"use strict";var a=i("23e7"),n=i("b727").map,s=i("1dde"),r=s("map");a({target:"Array",proto:!0,forced:!r},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e457:function(t,e,i){"use strict";i("f15b")},f15b:function(t,e,i){},f250:function(t,e,i){"use strict";i.r(e);var a=i("7a23"),n=Object(a["W"])("data-v-474775c4");Object(a["C"])("data-v-474775c4");var s={class:"panel"},r={class:"num"},c=Object(a["i"])("申请");Object(a["A"])();var o=n((function(t,e,i,o,u,l){var d=Object(a["H"])("van-step"),p=Object(a["H"])("van-steps"),f=Object(a["H"])("van-notice-bar"),b=Object(a["H"])("van-cell"),h=Object(a["H"])("van-cell-group"),v=Object(a["H"])("van-icon"),m=Object(a["H"])("van-field"),j=Object(a["H"])("van-switch"),O=Object(a["H"])("van-stepper"),y=Object(a["H"])("van-uploader"),g=Object(a["H"])("van-button"),_=Object(a["H"])("van-picker"),k=Object(a["H"])("van-popup"),x=Object(a["H"])("BaseLayout");return Object(a["z"])(),Object(a["g"])(x,{title:"售后服务详情"},{default:n((function(){return[Object(a["T"])(Object(a["j"])(p,{class:"step",active:u.step},{default:n((function(){return[(Object(a["z"])(),Object(a["g"])(a["a"],null,Object(a["F"])(["申请中","已审核待收货","已收货处理中","已完成"],(function(t,e){return Object(a["j"])(d,{key:e},{default:n((function(){return[Object(a["i"])(Object(a["L"])(t),1)]})),_:2},1024)})),64))]})),_:1},8,["active"]),[[a["P"],u.step>=0&&u.step<4]]),Object(a["T"])(Object(a["j"])(f,{"left-icon":"volume-o",background:"#F66",color:"#FFF",text:"售后申请单已关闭"},null,512),[[a["P"],0==u.state.service.status]]),Object(a["T"])(Object(a["j"])(f,{"left-icon":"volume-o",text:"售后申请未通过，请修改后重新提交申请。"},null,512),[[a["P"],9==u.state.service.status]]),Object(a["T"])(Object(a["j"])(h,null,{default:n((function(){return[Object(a["T"])(Object(a["j"])(b,{title:"申请时间",value:u.state.service.dt_create},null,8,["value"]),[[a["P"],u.state.service.dt_create]]),Object(a["T"])(Object(a["j"])(b,{title:"审核时间",value:u.state.service.dt_verify},null,8,["value"]),[[a["P"],u.state.service.dt_verify]]),Object(a["T"])(Object(a["j"])(b,{title:"取件时间",value:u.state.service.dt_pickup},null,8,["value"]),[[a["P"],u.state.service.dt_pickup]]),Object(a["T"])(Object(a["j"])(b,{title:"返件时间",value:u.state.service.dt_return},null,8,["value"]),[[a["P"],u.state.service.dt_return]]),Object(a["T"])(Object(a["j"])(b,{title:"退款时间",value:u.state.service.dt_refund},null,8,["value"]),[[a["P"],u.state.service.dt_refund]]),Object(a["T"])(Object(a["j"])(b,{title:"完成时间",value:u.state.service.dt_finish},null,8,["value"]),[[a["P"],u.state.service.dt_finish]])]})),_:1},512),[[a["P"],u.state.service.status>=0]]),Object(a["j"])("div",s,[Object(a["j"])(b,{class:"item",title:u.state.item.title,border:!1},{icon:n((function(){return[Object(a["j"])(v,{name:u.state.item.image,size:72,style:{marginRight:"10px"}},null,8,["name"])]})),extra:n((function(){return[Object(a["j"])("div",r,"x "+Object(a["L"])(u.state.item.num),1)]})),_:1},8,["title"]),Object(a["j"])(h,{class:"group"},{default:n((function(){return[Object(a["j"])(m,{modelValue:u.state.form[1],"onUpdate:modelValue":e[1]||(e[1]=function(t){return u.state.form[1]=t}),label:"服务类型",placeholder:"请选择","input-align":"right","is-link":"",readonly:"",onClick:e[2]||(e[2]=function(t){u.state.popup=1^u.disabled,u.state.index=u.state.service.type})},null,8,["modelValue"])]})),_:1}),Object(a["j"])(h,{class:"group"},{default:n((function(){return[Object(a["j"])(b,{center:"",title:"商品状态",label:"选中表示包装完整、商品未使用，不影响二次销售"},{"right-icon":n((function(){return[Object(a["j"])(j,{modelValue:u.state.service.intact,"onUpdate:modelValue":e[3]||(e[3]=function(t){return u.state.service.intact=t}),disabled:u.disabled,"active-value":"1","inactive-value":"0",size:"22"},null,8,["modelValue","disabled"])]})),_:1}),Object(a["T"])(Object(a["j"])(b,{center:"",title:"申请数量",label:"最多可申请 "+u.state.item.num+" 件"},{default:n((function(){return[Object(a["j"])(O,{modelValue:u.state.service.num,"onUpdate:modelValue":e[4]||(e[4]=function(t){return u.state.service.num=t}),disabled:u.disabled,theme:"round","button-size":"22",min:1,max:u.state.item.num,integer:"","disable-input":""},null,8,["modelValue","disabled","max"])]})),_:1},8,["label"]),[[a["P"],u.state.item.num>1]]),Object(a["j"])(m,{name:"appeal",modelValue:u.state.service.appeal,"onUpdate:modelValue":e[5]||(e[5]=function(t){return u.state.service.appeal=t}),readonly:1==u.disabled,type:"textarea",rows:"2",autosize:"",label:"申请原因",maxlength:"250",placeholder:"请描述申请售后服务的具体原因","show-word-limit":""},null,8,["modelValue","readonly"]),Object(a["j"])(m,{name:"attachment",label:"补充细节"},{input:n((function(){return[Object(a["j"])(y,{modelValue:u.list,"onUpdate:modelValue":e[6]||(e[6]=function(t){return u.list=t}),"result-type":"file",disabled:u.disabled,"after-read":l.onUpload,"max-count":4,"max-size":1048576,multiple:"",onDelete:!0},null,8,["modelValue","disabled","after-read"])]})),_:1})]})),_:1}),Object(a["j"])(h,{class:"group"},{default:n((function(){return[Object(a["j"])(m,{modelValue:u.state.form[2],"onUpdate:modelValue":e[7]||(e[7]=function(t){return u.state.form[2]=t}),label:"退货方式",placeholder:"请选择","input-align":"right","is-link":"",readonly:"",onClick:e[8]||(e[8]=function(t){u.state.popup=2*(1^u.disabled),u.state.index=u.state.service.pickup_type})},null,8,["modelValue"]),Object(a["T"])(Object(a["j"])(m,{modelValue:u.state.form[3],"onUpdate:modelValue":e[9]||(e[9]=function(t){return u.state.form[3]=t}),type:"textarea",rows:"3",label:"取件地址",placeholder:"请选择","input-align":"right","is-link":"",readonly:"",onClick:e[10]||(e[10]=function(t){return u.state.popup=3*(1^u.disabled)})},null,8,["modelValue"]),[[a["P"],1==u.state.service.pickup_type]]),Object(a["T"])(Object(a["j"])(m,{modelValue:u.state.form[4],"onUpdate:modelValue":e[11]||(e[11]=function(t){return u.state.form[4]=t}),type:"textarea",rows:"3",label:"返件地址",placeholder:"请选择","input-align":"right","is-link":"",readonly:"",onClick:e[12]||(e[12]=function(t){return u.state.popup=4*(1^u.disabled)})},null,8,["modelValue"]),[[a["P"],u.state.service.type>0]])]})),_:1}),Object(a["T"])(Object(a["j"])(g,{type:"primary",block:"",round:"",onClick:l.onSubmit},{default:n((function(){return[c]})),_:1},8,["onClick"]),[[a["P"],0==u.disabled]])]),Object(a["j"])(k,{show:u.state.popup,"onUpdate:show":e[14]||(e[14]=function(t){return u.state.popup=t}),position:"bottom",round:""},{default:n((function(){return[Object(a["j"])(_,{columns:u.state.options[u.state.popup],"default-index":u.state.index,"allow-html":!0,onCancel:e[13]||(e[13]=function(t){return u.state.popup=0}),onConfirm:l.onConfirm},null,8,["columns","default-index","onConfirm"])]})),_:1},8,["show"])]})),_:1})})),u=i("24fa"),l=(i("e457"),i("6b0d")),d=i.n(l);const p=d()(u["a"],[["render",o],["__scopeId","data-v-474775c4"]]);e["default"]=p}}]);