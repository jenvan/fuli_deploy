(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07650b17"],{"410f":function(t,e,n){"use strict";n("7432")},7432:function(t,e,n){},e7e0:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),a=Object(o["R"])("data-v-7990db9b");Object(o["A"])("data-v-7990db9b");var i=Object(o["h"])("领取"),s={class:"form"},c=Object(o["h"])("领取");Object(o["y"])();var l=a((function(t,e,n,l,u,r){var d=Object(o["F"])("van-button"),f=Object(o["F"])("van-dropdown-item"),h=Object(o["F"])("van-dropdown-menu"),b=Object(o["F"])("van-cell"),p=Object(o["F"])("van-icon"),j=Object(o["F"])("van-cell-group"),O=Object(o["F"])("van-empty"),m=Object(o["F"])("van-list"),v=Object(o["F"])("van-pull-refresh"),g=Object(o["F"])("van-field"),x=Object(o["F"])("van-action-sheet"),y=Object(o["F"])("BaseLayout");return Object(o["x"])(),Object(o["f"])(y,{title:"我的卡券"},{extra:a((function(){return[Object(o["i"])(d,{icon:"cash-back-record",style:{width:"110px",borderRadius:"10px 0 0 10px",color:"#000"},color:"#F6F6F6",onClick:e[1]||(e[1]=function(t){return l.state.popup=!0})},{default:a((function(){return[i]})),_:1})]})),default:a((function(){return[Object(o["i"])(h,null,{default:a((function(){return[Object(o["i"])(f,{modelValue:l.state.type,"onUpdate:modelValue":e[2]||(e[2]=function(t){return l.state.type=t}),options:l.state.option1,onChange:r.onRefresh},null,8,["modelValue","options","onChange"]),Object(o["i"])(f,{modelValue:l.state.status,"onUpdate:modelValue":e[3]||(e[3]=function(t){return l.state.status=t}),options:l.state.option2,onChange:r.onRefresh},null,8,["modelValue","options","onChange"])]})),_:1}),Object(o["i"])(v,{modelValue:l.state.refreshing,"onUpdate:modelValue":e[5]||(e[5]=function(t){return l.state.refreshing=t}),onRefresh:r.onRefresh},{default:a((function(){return[Object(o["i"])(m,{class:"list",loading:l.state.loading,"onUpdate:loading":e[4]||(e[4]=function(t){return l.state.loading=t}),finished:l.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:r.onLoad},{default:a((function(){return[(Object(o["x"])(!0),Object(o["f"])(o["a"],null,Object(o["D"])(l.state.list,(function(t,e){return Object(o["x"])(),Object(o["f"])(j,{class:"item",key:e,border:!1},{default:a((function(){return[Object(o["i"])(b,{class:"line1",title:t.remark},{default:a((function(){return[Object(o["i"])("span",{style:{color:t.color}},Object(o["J"])(t.amount),5)]})),_:2},1032,["title"]),Object(o["i"])(b,{class:"line2",title:t.dt,value:"余额 "+t.subtotal,border:!1},null,8,["title","value"]),Object(o["i"])(p,{class:"icon",name:t.icon,color:t.color},null,8,["name","color"])]})),_:2},1024)})),128)),Object(o["P"])(Object(o["i"])(O,{style:{width:"100%"}},null,512),[[o["M"],0==l.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"]),Object(o["i"])(x,{show:l.state.popup,"onUpdate:show":e[7]||(e[7]=function(t){return l.state.popup=t}),title:"卡券领取"},{default:a((function(){return[Object(o["i"])("div",s,[Object(o["i"])(g,{type:"text",border:1,modelValue:l.state.account,"onUpdate:modelValue":e[6]||(e[6]=function(t){return l.state.account=t}),"input-align":"center",clearable:"",label:"券码",placeholder:"请输入券码"},null,8,["modelValue"]),Object(o["i"])(d,{round:"",block:"",type:"primary",style:{margin:"10px 0"},onClick:r.onSubmit},{default:a((function(){return[c]})),_:1},8,["onClick"])])]})),_:1},8,["show"])]})),_:1})})),u=n("5530"),r=n("2824"),d={components:{BaseLayout:r["a"]},setup:function(){var t=Object(o["B"])({refreshing:!1,loading:!1,finished:!1,option1:[{text:"全部类型",value:0},{text:"满减券",value:1},{text:"折扣券",value:2}],type:0,option2:[{text:"所有状态",value:0},{text:"未使用",value:1},{text:"已使用",value:2},{text:"已过期",value:3}],status:0,list:[],offset:0,limit:20,popup:!1,code:""});return{state:t}},created:function(){this.onRefresh()},methods:{onRefresh:function(){this.state.popup=!1,this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/ticket/query?type="+this.state.type+"&status="+this.state.status+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var o=e[n];t.state.list.push(Object(u["a"])(Object(u["a"])({},o),{amount:o.cash>0?o.cash:o.point,icon:o.cash>0?"cash-on-deliver":"cash-back-record",color:o.cash>0||o.point>0?"#090":"#C00"}))}}))},onSubmit:function(){this.state.amount>0&&this.$http.post("/ticket/gain?code="+this.state.code).then(this.onRefresh)}}};n("410f");d.render=l,d.__scopeId="data-v-7990db9b";e["default"]=d}}]);
//# sourceMappingURL=chunk-07650b17.22a5fa9f.js.map