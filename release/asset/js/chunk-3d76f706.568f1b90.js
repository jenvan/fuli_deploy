(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d76f706"],{"0a9c":function(e,t,n){"use strict";(function(e){var o=n("53ca"),i=n("5530"),a=(n("ac1f"),n("5319"),n("b0c0"),n("7db0"),n("a15b"),n("d81d"),n("7a23")),c=n("5502"),l=n("2824"),r=n("6c74");t["a"]={components:{BaseLayout:l["a"],VanCode:r["a"]},props:{code:{type:String,default:""}},data:function(){var e=Object(a["E"])(0),t=Object(a["E"])(new Date),n=Object(a["D"])({calendar:!1,type:!0,device:{},order:{},show:!1,popup1:!1,popup2:!1,keyboard:!1,password:""}),o=Object(a["D"])({id:0,uid:"",code:"",discount:100,pos:"",box:"",pwd:"",name:"",remark:""}),i=Object(a["E"])(null),c=Object(a["E"])("");return{id:e,date:t,state:n,field:o,timer:i,now:c}},created:function(){var e=this;if(this.code.length<15)return this.init();this.$http.post("/o2o/deviceQuery?imei="+this.code).then((function(t){e.$router.push("?code="+t.code),setTimeout(e.init,500)}))},mounted:function(){var e=this;this.timer=setInterval((function(){var t=new Date;e.now=(t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()).replace(/([-: ])(\d{1})(?!\d)/g,"$10$2")}),1e3)},unmounted:function(){clearInterval(this.timer)},watch:{id:function(){this.query()},date:function(){this.state.calendar=!1,this.query()}},computed:Object(i["a"])(Object(i["a"])({info:function(){return 0==this.id?"全部设备":this.field.name||"商户编码："+this.field.code},param:function(){return"code="+this.field.code+"&pwd="+this.state.password}},Object(c["d"])(["profile"])),Object(c["b"])(["uid"])),methods:Object(i["a"])({init:function(){var t=this;this.field.code=this.code,this.$http.post("/o2o/deviceList?"+this.param).then((function(n){t.state.device=n,t.field=e.find(n,{code:t.code}),t.id=t.field.id,t.state.popup2=!1})).catch((function(e){969==e.rtn&&(t.state.popup1=!0,t.field.uid=t.uid),968==e.rtn&&(t.state.popup2=!0)}))},query:function(){var e=this;this.$http.post("/o2o/deviceOrder?"+this.param+"&id="+this.id+"&dt="+this.format(this.date)).then((function(t){e.state.order=t}))},bind:function(){var e=this;this.$http.post("/o2o/deviceBind?"+this.param,this.field).then((function(t){e.state.popup1=!1,e.state.show=!1,e.init(),e.$dialog.alert({message:"操作成功",theme:"round-button"})})).catch((function(t){e.$dialog.alert({message:t.msg,theme:"round-button"})}))},choose:function(t){this.state.show=!1,this.id=t,this.field=e.find(this.state.device,{id:t})},format:function(t){if(e.isArray(t))return e.map(t,this.format).join(" ~ ");var n="object"==Object(o["a"])(t)?new Date(t):new Date,i=n.getFullYear(),a=""+(n.getMonth()+1),c=""+n.getDate();return a.length<2&&(a="0"+a),c.length<2&&(c="0"+c),[i,a,c].join("-")},getName:function(t){var n=["被动收款"];return e.isEmpty(t.mobile)||n.push("主动收款（手机）"),e.isEmpty(t.pos)||n.push("主动收款（POS机）"),e.isEmpty(t.box)||n.push("音箱"),n.join("，")},getCode:function(e){return window.location.protocol+"//"+window.location.host+"/#/o2o/"+e+"?code="+this.field.code}},Object(c["c"])(["auth"]))}}).call(this,n("81b0"))},"60c4":function(e,t,n){"use strict";n("b4e8")},"7db0":function(e,t,n){"use strict";var o=n("23e7"),i=n("b727").find,a=n("44d2"),c="find",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),o({target:"Array",proto:!0,forced:l},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(c)},b4e8:function(e,t,n){},eb09:function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),i=Object(o["V"])("data-v-799921b0");Object(o["C"])("data-v-799921b0");var a=Object(o["i"])(" "),c={class:"box"},l=Object(o["j"])("div",{class:"dt"},"按设备筛选",-1),r=Object(o["j"])("div",null,"全部",-1),u=Object(o["j"])("br",null,null,-1),d=Object(o["i"])("设置 "),s=Object(o["j"])("div",{class:"dt"},"按日期筛选",-1),b={class:"type"},p={class:"list"},j={class:"fee"},f=Object(o["j"])("span",{class:"symbol"},"￥",-1),h=Object(o["i"])("暂无记录"),m={class:"popup"},O={class:"title"},g={class:"qrcode"},v=Object(o["i"])("收款码"),w=Object(o["i"])("管理码"),y=Object(o["j"])("div",{class:"remark"},"注：商家只能修改表单后四项，其他项请联系我司商务",-1),k=Object(o["i"])("绑定 / 修改");Object(o["A"])();var V=i((function(e,t,n,V,x,C){var H=Object(o["H"])("van-icon"),U=Object(o["H"])("van-cell"),E=Object(o["H"])("van-switch"),_=Object(o["H"])("van-empty"),L=Object(o["H"])("van-calendar"),z=Object(o["H"])("van-code"),D=Object(o["H"])("van-field"),F=Object(o["H"])("van-stepper"),$=Object(o["H"])("van-button"),I=Object(o["H"])("van-popup"),S=Object(o["H"])("van-password-input"),q=Object(o["H"])("van-number-keyboard"),M=Object(o["H"])("BaseLayout");return Object(o["z"])(),Object(o["g"])(M,{title:"商家账单",bg:"linear-gradient(180deg, #EEE, #F9F9F9 40%, #F9F9F9)",height:"0"},{back:i((function(){return[a]})),more:i((function(){return[Object(o["j"])(H,{name:"replay",size:"16",color:"#666",onClick:C.query},null,8,["onClick"])]})),default:i((function(){return[Object(o["j"])("div",c,[Object(o["j"])(U,{class:"filter",icon:"filter-o",border:!1,onClick:t[2]||(t[2]=function(e){return x.state.show=!x.state.show})},{title:i((function(){return[l]})),value:i((function(){return[Object(o["j"])(H,{name:0==x.id?"checked":"circle",size:"18",color:"#F66",onClick:t[1]||(t[1]=Object(o["U"])((function(e){return x.id=0}),["stop"]))},null,8,["name"]),r]})),label:i((function(){return[Object(o["i"])(Object(o["L"])(C.info),1)]})),_:1}),(Object(o["z"])(!0),Object(o["g"])(o["a"],null,Object(o["F"])(x.state.device,(function(e,n){return Object(o["S"])((Object(o["z"])(),Object(o["g"])(U,{key:n,class:{device:!0,active:x.id==e.id},title:e.name||e.code,border:!1,onClick:function(t){return C.choose(e.id)}},{label:i((function(){return[Object(o["i"])(" 商户编码："+Object(o["L"])(e.code),1),u,Object(o["i"])("收款方式："+Object(o["L"])(C.getName(e)),1)]})),value:i((function(){return[Object(o["j"])(H,{class:"icon",name:x.id==e.id?"checked":"circle",size:"18"},null,8,["name"])]})),extra:i((function(){return[Object(o["S"])(Object(o["j"])("div",{class:"extra",onClick:t[3]||(t[3]=function(e){return x.state.popup1=!0})},[d,Object(o["j"])(H,{name:"arrow-down",size:"16"})],512),[[o["O"],0==x.state.password.length]])]})),_:2},1032,["class","title","onClick"])),[[o["O"],x.state.show]])})),128)),Object(o["j"])(U,{class:"filter",icon:"calendar-o",label:C.format(x.date),border:!1,onClick:t[5]||(t[5]=Object(o["U"])((function(e){return x.state.calendar=!0}),["stop"]))},{title:i((function(){return[s]})),value:i((function(){return[Object(o["j"])(E,{modelValue:x.state.type,"onUpdate:modelValue":t[4]||(t[4]=function(e){return x.state.type=e}),size:"14"},null,8,["modelValue"]),Object(o["j"])("div",b,Object(o["L"])(x.state.type?"单":"多")+"日",1)]})),_:1},8,["label"]),Object(o["j"])(U,{icon:"chart-trending-o"},{title:i((function(){return[Object(o["i"])("共收款 "+Object(o["L"])(x.state.order.total||0)+" 笔，合计 "+Object(o["L"])(x.state.order.amount||0)+" 元",1)]})),_:1}),Object(o["j"])("div",p,[(Object(o["z"])(!0),Object(o["g"])(o["a"],null,Object(o["F"])(x.state.order.list,(function(t,n){return Object(o["z"])(),Object(o["g"])(U,{key:n,title:t.dt,label:t.remark,onClick:function(n){return e.$copy(t.remark)}},{value:i((function(){return[Object(o["j"])("div",j,[f,Object(o["i"])(Object(o["L"])(t.fee),1)])]})),_:2},1032,["title","label","onClick"])})),128)),Object(o["S"])(Object(o["j"])(_,null,{default:i((function(){return[h]})),_:1},512),[[o["O"],!x.state.order||0==x.state.order.total]])])]),Object(o["j"])(L,{show:x.state.calendar,"onUpdate:show":t[6]||(t[6]=function(e){return x.state.calendar=e}),type:x.state.type?"single":"range","max-range":31,"min-date":new Date("2022-01-01"),"max-date":new Date,"default-date":x.date,"show-confirm":!1,onConfirm:t[7]||(t[7]=function(e){return x.date=e})},null,8,["show","type","min-date","max-date","default-date"]),Object(o["j"])(I,{show:x.state.popup1,"onUpdate:show":t[16]||(t[16]=function(e){return x.state.popup1=e}),position:"top",style:{height:"100%"},"close-on-popstate":!0,closeable:""},{default:i((function(){return[Object(o["j"])("div",m,[Object(o["j"])("div",O,"商户编码："+Object(o["L"])(x.field.code||n.code),1),Object(o["j"])("div",g,[Object(o["j"])(z,{type:"qrimage",value:C.getCode("pay"),width:"100",margin:"0"},{default:i((function(){return[v]})),_:1},8,["value"]),Object(o["j"])(z,{type:"qrimage",value:C.getCode("biz"),width:"100",margin:"0"},{default:i((function(){return[w]})),_:1},8,["value"])]),Object(o["j"])(D,{modelValue:x.field.uid,"onUpdate:modelValue":t[8]||(t[8]=function(e){return x.field.uid=e}),type:"text",label:"绑定店长",placeholder:"用户 UID","input-align":"right"},null,8,["modelValue"]),Object(o["j"])(U,{center:"",title:"会员折扣"},{"right-icon":i((function(){return[Object(o["j"])(F,{modelValue:x.field.discount,"onUpdate:modelValue":t[9]||(t[9]=function(e){return x.field.discount=e}),min:20,max:120},null,8,["modelValue"])]})),_:1}),Object(o["j"])(D,{modelValue:x.field.box,"onUpdate:modelValue":t[10]||(t[10]=function(e){return x.field.box=e}),type:"number",maxlength:"15","show-word-limit":"",label:"到账提示音箱",placeholder:"机器 IMEI","input-align":"right"},null,8,["modelValue"]),Object(o["j"])(D,{modelValue:x.field.pos,"onUpdate:modelValue":t[11]||(t[11]=function(e){return x.field.pos=e}),type:"number",maxlength:"15","show-word-limit":"",label:"POS扫码收款",placeholder:"机器 IMEI","input-align":"right"},null,8,["modelValue"]),Object(o["j"])(D,{modelValue:x.field.mobile,"onUpdate:modelValue":t[12]||(t[12]=function(e){return x.field.mobile=e}),type:"number",maxlength:"11","show-word-limit":"",label:"手机扫码收款",placeholder:"手机号","input-align":"right"},null,8,["modelValue"]),Object(o["j"])(D,{modelValue:x.field.pwd,"onUpdate:modelValue":t[13]||(t[13]=function(e){return x.field.pwd=e}),type:"digit",maxlength:"6","show-word-limit":"",label:"授权管理密码",placeholder:"进入本页面的密码","input-align":"right"},null,8,["modelValue"]),Object(o["j"])(D,{modelValue:x.field.name,"onUpdate:modelValue":t[14]||(t[14]=function(e){return x.field.name=e}),type:"text",label:"名称",placeholder:"便于区分对账，可填商户、收银台名称","input-align":"right"},null,8,["modelValue"]),Object(o["j"])(D,{modelValue:x.field.remark,"onUpdate:modelValue":t[15]||(t[15]=function(e){return x.field.remark=e}),type:"textarea",rows:"1",autosize:"",label:"备注","input-align":"right",placeholder:"便于区分对账，可以不填"},null,8,["modelValue"]),y,Object(o["j"])($,{type:"primary",class:"bind",block:"",round:"",onClick:C.bind},{default:i((function(){return[k]})),_:1},8,["onClick"])])]})),_:1},8,["show"]),Object(o["j"])(I,{show:x.state.popup2,"onUpdate:show":t[18]||(t[18]=function(e){return x.state.popup2=e}),position:"bottom",overlay:!1,style:{height:"calc(100vh - 40px)",background:"#EEE"},"close-on-popstate":!0,"close-on-click-overlay":!1,closeable:!1},{default:i((function(){return[Object(o["j"])(S,{info:"请输入管理密码",gutter:10,style:{margin:"60px 20px"},value:x.state.password},null,8,["value"]),Object(o["j"])(q,{modelValue:x.state.password,"onUpdate:modelValue":t[17]||(t[17]=function(e){return x.state.password=e}),show:!0,theme:"custom","close-button-text":"进入","safe-area-inset-bottom":!1,onClose:C.init},null,8,["modelValue","onClose"])]})),_:1},8,["show","style"]),Object(o["S"])(Object(o["j"])("div",{class:"watermark",innerHTML:n.code+" / "+e.uid+" / "+x.now},null,8,["innerHTML"]),[[o["O"],!x.state.popup2]])]})),_:1})})),x=n("0a9c"),C=(n("60c4"),n("6b0d")),H=n.n(C);const U=H()(x["a"],[["render",V],["__scopeId","data-v-799921b0"]]);t["default"]=U}}]);