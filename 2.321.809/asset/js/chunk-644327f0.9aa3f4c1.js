(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-644327f0"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var r=n("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"0ac3":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),a=Object(r["X"])("data-v-12512c6b");Object(r["D"])("data-v-12512c6b");var o=Object(r["j"])("团队管理"),c={class:"list"},i=Object(r["j"])("保存"),s=Object(r["j"])("长按图片分享给员工扫码加入"),u=Object(r["k"])("br",null,null,-1),l=Object(r["j"])("（有效期24小时，超时请重新进入生成）");Object(r["B"])();var d=a((function(t,e,n,d,f,b){var h=Object(r["I"])("van-button"),p=Object(r["I"])("van-dropdown-item"),j=Object(r["I"])("van-dropdown-menu"),v=Object(r["I"])("van-col"),O=Object(r["I"])("van-search"),g=Object(r["I"])("van-row"),m=Object(r["I"])("van-sticky"),k=Object(r["I"])("van-icon"),y=Object(r["I"])("van-tag"),w=Object(r["I"])("van-cell"),C=Object(r["I"])("van-empty"),I=Object(r["I"])("van-action-bar-button"),x=Object(r["I"])("van-action-bar"),S=Object(r["I"])("van-contact-edit"),$=Object(r["I"])("van-action-sheet"),A=Object(r["I"])("van-loading"),_=Object(r["I"])("van-field"),T=Object(r["I"])("van-image"),U=Object(r["I"])("van-popup"),E=Object(r["I"])("BaseLayout");return Object(r["A"])(),Object(r["g"])(E,{title:"员工",navbar:b.callee?"hide":"show"},{extra:a((function(){return[Object(r["k"])(h,{icon:"friends",type:"primary",size:"small",onClick:e[1]||(e[1]=function(e){return t.$router.push("group")})},{default:a((function(){return[o]})),_:1})]})),default:a((function(){return[Object(r["k"])(m,{"offset-top":40},{default:a((function(){return[Object(r["k"])(g,{class:"toolbar",align:"center",gutter:"5"},{default:a((function(){return[Object(r["k"])(v,{span:"6"},{default:a((function(){return[Object(r["k"])(j,null,{default:a((function(){return[Object(r["k"])(p,{modelValue:d.state.gid,"onUpdate:modelValue":e[2]||(e[2]=function(t){return d.state.gid=t}),options:d.state.options,onChange:b.onChange},null,8,["modelValue","options","onChange"])]})),_:1})]})),_:1}),Object(r["k"])(v,{span:"18"},{default:a((function(){return[Object(r["k"])(O,{modelValue:d.state.keyword,"onUpdate:modelValue":e[3]||(e[3]=function(t){return d.state.keyword=t}),placeholder:"输入UID、手机号、员工姓名搜索",clearable:"",onSearch:b.onSearch,onClear:b.onSearch},null,8,["modelValue","onSearch","onClear"])]})),_:1})]})),_:1})]})),_:1}),Object(r["k"])("div",c,[(Object(r["A"])(!0),Object(r["g"])(r["a"],null,Object(r["G"])(d.state.list,(function(t,e){return Object(r["A"])(),Object(r["g"])(w,{class:"item",key:e,title:t.uid+" / "+t.truename,label:t.mobile,border:!1,"is-link":!b.callee,onClick:function(e){return b.onChoose(t)}},{icon:a((function(){return[Object(r["k"])(k,{class:"icon",name:b.contains(t.uid)?"manager":"manager-o",color:b.contains(t.uid)?"#F66":"#CCC",size:"24"},null,8,["name","color"])]})),value:a((function(){return[(Object(r["A"])(!0),Object(r["g"])(r["a"],null,Object(r["G"])(t.group,(function(t,e){return Object(r["A"])(),Object(r["g"])(y,{key:e,color:d.colors[b.getIndex(t)],plain:"",round:""},{default:a((function(){return[Object(r["j"])(Object(r["M"])(d.state.group[t]||"失效组"),1)]})),_:2},1032,["color"])})),128))]})),_:2},1032,["title","label","is-link","onClick"])})),128))]),Object(r["U"])(Object(r["k"])(C,{style:{width:"100%"}},null,512),[[r["Q"],0==d.state.list.length]]),Object(r["k"])(x,null,{default:a((function(){return[b.callee?(Object(r["A"])(),Object(r["g"])(I,{key:0,type:"warning",text:"取消选择",onClick:b.onCancel},null,8,["onClick"])):Object(r["h"])("",!0),b.callee?(Object(r["A"])(),Object(r["g"])(I,{key:1,type:"primary",text:"选择完成",onClick:b.onSubmit},null,8,["onClick"])):Object(r["h"])("",!0),b.callee?Object(r["h"])("",!0):(Object(r["A"])(),Object(r["g"])(I,{key:2,type:"warning",text:"批量添加员工",onClick:e[4]||(e[4]=function(t){return d.state.add=!0})})),b.callee?Object(r["h"])("",!0):(Object(r["A"])(),Object(r["g"])(I,{key:3,type:"primary",text:"邀请员工",onClick:b.onInvite},null,8,["onClick"])),b.callee?Object(r["h"])("",!0):(Object(r["A"])(),Object(r["g"])(I,{key:4,type:"warning",text:"新增单个员工",onClick:e[5]||(e[5]=function(t){return b.onChoose(null)})}))]})),_:1}),Object(r["k"])($,{show:d.state.edit,"onUpdate:show":e[6]||(e[6]=function(t){return d.state.edit=t}),title:d.state.title},{default:a((function(){return[Object(r["k"])(S,{"is-edit":d.state.del,"contact-info":d.state.info,onSave:b.onSave,onDelete:b.onDelete},null,8,["is-edit","contact-info","onSave","onDelete"])]})),_:1},8,["show","title"]),Object(r["k"])($,{show:d.state.add,"onUpdate:show":e[8]||(e[8]=function(t){return d.state.add=t}),title:"批量添加员工",style:{boxSizing:"border-box",padding:"0 5px 10px 5px"}},{default:a((function(){return[Object(r["U"])(Object(r["k"])(A,{class:"loading",color:"#F66"},{default:a((function(){return[Object(r["j"])(Object(r["M"])(d.state.loading),1)]})),_:1},512),[[r["Q"],d.state.loading.length>0]]),Object(r["k"])(_,{modelValue:d.state.body,"onUpdate:modelValue":e[7]||(e[7]=function(t){return d.state.body=t}),type:"textarea",placeholder:"每个员工一行（手机号码在前，姓名在后，用逗号、分号或空格隔开）",autosize:{minHeight:200,maxHeight:350},formatter:b.format,"format-trigger":"onChange"},null,8,["modelValue","formatter"]),Object(r["k"])(h,{type:"primary",block:"",round:"",onClick:b.onAdd},{default:a((function(){return[i]})),_:1},8,["onClick"])]})),_:1},8,["show"]),Object(r["k"])(U,{show:d.state.popup,"onUpdate:show":e[10]||(e[10]=function(t){return d.state.popup=t})},{default:a((function(){return[Object(r["k"])(T,{class:"qrcode",src:d.state.qrcode,width:"300"},{default:a((function(){return[s,u,l]})),_:1},8,["src"]),Object(r["k"])("div",{class:"code",onClick:e[9]||(e[9]=function(e){return t.$copy(d.state.code,"邀请码已复制到剪贴板")})},"复制文字邀请码")]})),_:1},8,["show"])]})),_:1},8,["navbar"])})),f=n("5833"),b=(n("d523"),n("6b0d")),h=n.n(b);const p=h()(f["a"],[["render",d],["__scopeId","data-v-12512c6b"]]);e["default"]=p},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"13d5":function(t,e,n){"use strict";var r=n("23e7"),a=n("d58f").left,o=n("a640"),c=n("2d00"),i=n("605d"),s=o("reduce"),u=!i&&c>79&&c<83;r({target:"Array",proto:!0,forced:!s||u},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},2532:function(t,e,n){"use strict";var r=n("23e7"),a=n("5a34"),o=n("1d80"),c=n("ab13");r({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~String(o(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},2824:function(t,e,n){"use strict";var r=n("7a23"),a=Object(r["X"])("data-v-77ef1cb4");Object(r["D"])("data-v-77ef1cb4");var o={class:"container"},c={class:"back"},i={class:"head"},s={class:"more"},u={class:"subtitle"},l={class:"extra"};Object(r["B"])();var d=a((function(t,e,n,d,f,b){var h=Object(r["I"])("van-icon"),p=Object(r["I"])("van-nav-bar"),j=Object(r["I"])("van-sticky"),v=Object(r["I"])("van-col"),O=Object(r["I"])("van-row");return Object(r["A"])(),Object(r["g"])("div",o,[Object(r["U"])(Object(r["k"])(j,{onChange:e[1]||(e[1]=function(t){return d.state.isTop=!d.state.isTop})},{default:a((function(){return[Object(r["k"])(p,{class:["navbar",{notTop:!d.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:b.onClickLeft,onClickRight:b.onClickRight},{left:a((function(){return[Object(r["U"])(Object(r["k"])("div",c,[Object(r["H"])(t.$slots,"back",{},(function(){return[Object(r["k"])(h,{name:"arrow-left"})]}),{},!0)],512),[[r["Q"],!n.noback]])]})),title:a((function(){return[Object(r["k"])("div",i,[Object(r["H"])(t.$slots,"head",{},(function(){return[Object(r["k"])("div",{style:{width:"100%",color:d.state.isTop?n.fg:"inherit"}},Object(r["M"])(d.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)])]})),right:a((function(){return[Object(r["k"])("div",s,[Object(r["H"])(t.$slots,"more",{},void 0,!0)])]})),_:1},8,["class","onClickLeft","onClickRight"])]})),_:1},512),[[r["Q"],"hide"!=n.navbar]]),Object(r["k"])("div",{class:["page",{notTop:!d.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(r["k"])(r["d"],{name:"van-slide-down"},{default:a((function(){return[Object(r["U"])(Object(r["k"])(O,{justify:"space-between",align:"center",class:"outline",style:{height:n.height+"px",color:n.fg}},{default:a((function(){return[Object(r["k"])(v,{span:"16"},{default:a((function(){return[Object(r["k"])("div",{class:"title",style:{color:n.fg},onClick:e[2]||(e[2]=function(e){return t.$emit("click-title")})},[Object(r["H"])(t.$slots,"title",{},(function(){return[Object(r["j"])(Object(r["M"])(n.title),1)]}),{},!0),Object(r["k"])("div",u,Object(r["M"])(n.subtitle),1)],4)]})),_:3}),Object(r["k"])(v,{span:"8"},{default:a((function(){return[Object(r["k"])("div",l,[Object(r["H"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[r["Q"],d.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(r["H"])(t.$slots,"default",{},void 0,!0)],6)])})),f={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(r["E"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){var t=this;this.noback||(this.$emit("click-back"),setTimeout((function(e){if(e==t.$route)return window&&window.history.length>1?t.$router.back():t.$router.push("/")}),200,this.$route))},onClickRight:function(){return this.$emit("click-more")}}},b=(n("8710"),n("6b0d")),h=n.n(b);const p=h()(f,[["render",d],["__scopeId","data-v-77ef1cb4"]]);e["a"]=p},3835:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function a(t,e){var n=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,a,o=[],c=!0,i=!1;try{for(n=n.call(t);!(c=(r=n.next()).done);c=!0)if(o.push(r.value),e&&o.length===e)break}catch(s){i=!0,a=s}finally{try{c||null==n["return"]||n["return"]()}finally{if(i)throw a}}return o}}var o=n("06c5");function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){return r(t)||a(t,e)||Object(o["a"])(t,e)||c()}},5833:function(t,e,n){"use strict";(function(t){var r=n("3835"),a=(n("d3b7"),n("25f0"),n("ac1f"),n("1276"),n("13d5"),n("99af"),n("4de4"),n("841c"),n("a15b"),n("b0c0"),n("caad"),n("2532"),n("b64b"),n("5319"),n("7a23")),o=n("2824");e["a"]={components:{BaseLayout:o["a"]},name:"Member",props:{selected:{type:[String,Object],default:function(){return null}}},emits:["update:selected"],setup:function(){for(var t=Object(a["E"])({member:[],group:[],gid:0,options:[],keyword:"",list:[],selected:[],edit:!1,del:!1,title:"",info:{},add:!1,loading:"",body:"",popup:!1,code:"",qrcode:""}),e=[],n=0;n<20;n++)e.push("#"+Math.random().toString(16).substr(3,6));return{state:t,colors:e}},created:function(){var e=this;this.state.member=[],this.state.list=[],this.state.selected=t.isEmpty(this.selected)?[]:this.selected.split(","),this.$http.get("/team/groupList").then((function(n){e.state.group=n,e.state.options=t.reduce(n,(function(t,e,n){return t.concat({text:e,value:n})}),[{text:"选择团队",value:0}])})),this.onChange()},watch:{selected:function(e,n){e!=n&&(this.state.selected=t.isEmpty(this.selected)?[]:this.selected.split(","))}},computed:{callee:function(){return null!=this.selected}},methods:{onChange:function(){var t=this;this.state.add=!1,this.state.edit=!1,this.$http.post("/team/memberList?gid="+this.state.gid).then((function(e){t.state.member=e,t.onSearch()}))},onSearch:function(){var e=this;this.state.list=0==this.state.keyword.length?this.state.member:t.filter(this.state.member,(function(t){return t.truename.search(e.state.keyword)>-1||t.mobile.search(e.state.keyword)>-1}))},onSubmit:function(){this.$emit("update:selected",this.state.selected.join(",")),this.$emit("close",this.state.selected)},onCancel:function(){this.state.selected=t.isEmpty(this.selected)?[]:this.selected.split(","),this.$emit("close",null)},onChoose:function(e){this.callee?this.contains(e.uid)?t.pull(this.state.selected,e.uid):this.state.selected.push(e.uid):(this.state.del=!1,this.state.title="新增员工",this.state.info={id:0,name:"",tel:""},null!=e&&(this.state.del=!0,this.state.title="员工管理",this.state.info={id:e.id,name:e.truename,tel:e.mobile}),this.state.edit=!0)},onSave:function(t){if(!/^1[\d]{10}$/.test(t.tel))return this.$toast("手机号码有误");this.$http.post("/team/memberSave?id="+t.id+"&truename="+t.name+"&mobile="+t.tel).then(this.onChange)},onDelete:function(t){this.$http.post("/team/memberSave?id="+t.id+"&remove=1").then(this.onChange)},onAdd:function(){var t=this,e=this.state.body.split("\n");if(e.length>100)return this.$toast("每次最多支持新增 100 个员工");for(var n in e)if(!/^1[\d]{10},.+$/.test(e[n]))return this.$toast("第 "+(parseInt(n)+1)+" 行数据不合要求");var a=setInterval((function(){var n=e.shift();if("undefined"==typeof n)return t.state.loading="",t.onChange(),clearInterval(a);var o=n.split(","),c=Object(r["a"])(o,2),i=c[0],s=c[1];t.state.loading="正在新增员工 "+s+" ...",t.$http.get("/team/memberSave?mobile="+i+"&truename="+s)}),500)},onInvite:function(){var t=this;this.$http.post("/team/summary").then((function(e){t.state.popup=!0,t.state.code=e.code,t.state.qrcode=t.$host+"/wechat/qr?scene=TEAM-"+encodeURIComponent(e.code)+"&expire=172800&show=0"}))},contains:function(e){return t.includes(this.state.selected,e)},getIndex:function(e){return t.indexOf(Object.keys(this.state.group),e)},format:function(t){return t.replace(/，/g,",").replace(/、/g,",").replace(/；/g,",").replace(/;/g,",").replace(/ /,",")}}}}).call(this,n("81b0"))},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"6bfa":function(t,e,n){},"841c":function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),o=n("1d80"),c=n("129f"),i=n("14c3");r("search",1,(function(t,e,n){return[function(e){var n=o(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var o=a(t),s=String(this),u=o.lastIndex;c(u,0)||(o.lastIndex=0);var l=i(o,s);return c(o.lastIndex,u)||(o.lastIndex=u),null===l?-1:l.index}]}))},8710:function(t,e,n){"use strict";n("97d1")},"97d1":function(t,e,n){},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),o=n("e8b5"),c=n("861d"),i=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),b=n("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,j="Maximum allowed index exceeded",v=b>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),O=d("concat"),g=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},m=!v||!O;r({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,r,a,o,c=i(this),d=l(c,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?c:arguments[e],g(o)){if(a=s(o.length),f+a>p)throw TypeError(j);for(n=0;n<a;n++,f++)n in o&&u(d,f,o[n])}else{if(f>=p)throw TypeError(j);u(d,f++,o)}return d.length=f,d}})},a15b:function(t,e,n){"use strict";var r=n("23e7"),a=n("44ad"),o=n("fc6a"),c=n("a640"),i=[].join,s=a!=Object,u=c("join",",");r({target:"Array",proto:!0,forced:s||!u},{join:function(t){return i.call(o(this),void 0===t?",":t)}})},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),o=n("1c7e"),c=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:a})},ab13:function(t,e,n){var r=n("b622"),a=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,"/./"[t](e)}catch(r){}}return!1}},caad:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d523:function(t,e,n){"use strict";n("6bfa")},d58f:function(t,e,n){var r=n("1c0b"),a=n("7b0b"),o=n("44ad"),c=n("50c4"),i=function(t){return function(e,n,i,s){r(n);var u=a(e),l=o(u),d=c(u.length),f=t?d-1:0,b=t?-1:1;if(i<2)while(1){if(f in l){s=l[f],f+=b;break}if(f+=b,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=b)f in l&&(s=n(s,l[f],f,u));return s}};t.exports={left:i(!1),right:i(!0)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),o=n("e8b5"),c=n("23cb"),i=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),f=d("slice"),b=l("species"),h=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,r,l,d=s(this),f=i(d.length),j=c(t,f),v=c(void 0===e?f:e,f);if(o(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(d,j,v);for(r=new(void 0===n?Array:n)(p(v-j,0)),l=0;j<v;j++,l++)j in d&&u(r,l,d[j]);return r.length=l,r}})}}]);