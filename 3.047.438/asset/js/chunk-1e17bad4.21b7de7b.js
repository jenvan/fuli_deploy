(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e17bad4"],{"857a":function(t,e,n){var o=n("1d80"),i=/"/g;t.exports=function(t,e,n,a){var c=String(o(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),u+">"+c+"</"+e+">"}},9085:function(t,e,n){"use strict";n("cbcd")},9911:function(t,e,n){"use strict";var o=n("23e7"),i=n("857a"),a=n("af03");o({target:"String",proto:!0,forced:a("link")},{link:function(t){return i(this,"a","href",t)}})},af03:function(t,e,n){var o=n("d039");t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},cbcd:function(t,e,n){},dab8:function(t,e,n){"use strict";n.r(e);n("d3b7"),n("25f0");var o=n("7a23"),i=Object(o["X"])("data-v-74584696");Object(o["D"])("data-v-74584696");var a=Object(o["j"])("会销宝"),c={class:"range"},u=Object(o["k"])("br",null,null,-1),s={class:"tool"},r=Object(o["j"])(" 分享"),l=Object(o["j"])("    "),d=Object(o["j"])(" 派发"),b=Object(o["j"])("暂无领取记录"),f={class:"popup"},p=Object(o["k"])("p",null,"分享优惠券",-1),h=Object(o["j"])("长按图片保存到手机或转发分享给客户"),j={class:"popup"},O=Object(o["j"])("立即派发");Object(o["B"])();var v=i((function(t,e,n,v,g,k){var m=Object(o["I"])("van-button"),w=Object(o["I"])("van-tab"),_=Object(o["I"])("van-tabs"),y=Object(o["I"])("van-sticky"),C=Object(o["I"])("van-tag"),I=Object(o["I"])("van-cell"),M=Object(o["I"])("van-icon"),x=Object(o["I"])("van-cell-group"),U=Object(o["I"])("van-empty"),F=Object(o["I"])("van-list"),L=Object(o["I"])("van-pull-refresh"),S=Object(o["I"])("van-action-sheet"),V=Object(o["I"])("van-code"),R=Object(o["I"])("van-popup"),$=Object(o["I"])("van-field"),A=Object(o["I"])("member"),E=Object(o["I"])("BaseLayout");return Object(o["A"])(),Object(o["g"])(E,{title:"优惠券"},{extra:i((function(){return[Object(o["k"])(m,{icon:"fire",style:{width:"110px",borderRadius:"10px 0 0 10px",color:"#000"},color:"#F6F6F6",onClick:k.onClick},{default:i((function(){return[a]})),_:1},8,["onClick"])]})),default:i((function(){return[Object(o["k"])(y,{"offset-top":45},{default:i((function(){return[Object(o["k"])(_,{active:v.active,"onUpdate:active":e[1]||(e[1]=function(t){return v.active=t}),swipeable:"",animated:"",onChange:k.onChange},{default:i((function(){return[(Object(o["A"])(),Object(o["g"])(o["a"],null,Object(o["G"])(["有效的优惠券","已失效优惠券"],(function(t,e){return Object(o["k"])(w,{key:e,name:e.toString(),title:t},null,8,["name","title"])})),64))]})),_:1},8,["active","onChange"])]})),_:1}),Object(o["k"])(L,{modelValue:v.state.refreshing,"onUpdate:modelValue":e[3]||(e[3]=function(t){return v.state.refreshing=t}),onRefresh:k.onRefresh},{default:i((function(){return[Object(o["k"])(F,{class:"list",loading:v.state.loading,"onUpdate:loading":e[2]||(e[2]=function(t){return v.state.loading=t}),finished:v.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:k.onLoad},{default:i((function(){return[(Object(o["A"])(!0),Object(o["g"])(o["a"],null,Object(o["G"])(v.state.list,(function(t,e){return Object(o["A"])(),Object(o["g"])("div",{key:e},[Object(o["k"])(C,{class:"dt",color:"#EEE"},{default:i((function(){return[Object(o["j"])(Object(o["M"])(t.dt),1)]})),_:2},1024),Object(o["k"])(x,{class:"item",border:!1},{default:i((function(){return[Object(o["k"])(I,{class:"title",title:t.coupon.title,onClick:function(e){return k.onView(t.id)}},{icon:i((function(){return[Object(o["k"])("div",{class:"value",style:{color:t.color},innerHTML:t.title},null,12,["innerHTML"])]})),label:i((function(){return[Object(o["k"])("div",c,[Object(o["j"])(" 券有效期："+Object(o["M"])(t.coupon.dt_start.substring(0,10))+" ~ "+Object(o["M"])(t.coupon.dt_end.substring(0,10))+" ",1),u,Object(o["j"])(" 派发期限："+Object(o["M"])(t.dt_start.substring(0,10))+" ~ "+Object(o["M"])(t.dt_end.substring(0,10)),1)])]})),_:2},1032,["title","onClick"]),Object(o["k"])(I,{class:"desc",title:"总数量："+t.total+"   剩余待领："+t.surplus},{value:i((function(){return[Object(o["k"])("div",s,[Object(o["U"])(Object(o["k"])(M,{name:"share-o",size:"12",onClick:Object(o["W"])((function(e){v.state.cid=t.id,k.onShare()}),["stop"])},{default:i((function(){return[r]})),_:2},1032,["onClick"]),[[o["Q"],0==n.invalid]]),l,Object(o["U"])(Object(o["k"])(M,{name:"gift-o",size:"12",onClick:Object(o["W"])((function(e){v.state.cid=t.id,v.state.account="",v.state.popup2=!0}),["stop"])},{default:i((function(){return[d]})),_:2},1032,["onClick"]),[[o["Q"],0==n.invalid]])])]})),_:2},1032,["title"])]})),_:2},1024)])})),128)),Object(o["U"])(Object(o["k"])(U,{style:{width:"100%"}},null,512),[[o["Q"],0==v.state.list.length]])]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"]),Object(o["k"])(S,{show:v.state.popup,"onUpdate:show":e[4]||(e[4]=function(t){return v.state.popup=t}),title:"优惠券领取记录",style:{height:"100%",maxHeight:"80%",background:"#F6F6F6"}},{default:i((function(){return[(Object(o["A"])(!0),Object(o["g"])(o["a"],null,Object(o["G"])(v.state.detail,(function(t,e){return Object(o["A"])(),Object(o["g"])("div",{class:"popup",key:e},[Object(o["k"])(I,{title:"#"+t.uid,value:t.dt},null,8,["title","value"])])})),128)),Object(o["U"])(Object(o["k"])(U,{style:{width:"100%"}},{default:i((function(){return[b]})),_:1},512),[[o["Q"],0==v.state.detail.length]])]})),_:1},8,["show"]),Object(o["k"])(R,{show:v.state.popup1,"onUpdate:show":e[5]||(e[5]=function(t){return v.state.popup1=t}),round:""},{default:i((function(){return[Object(o["k"])("div",f,[p,Object(o["k"])(V,{type:"qrimage",value:v.state.qrcode,width:"300",margin:"0"},{default:i((function(){return[h]})),_:1},8,["value"])])]})),_:1},8,["show"]),Object(o["k"])(S,{show:v.state.popup2,"onUpdate:show":e[8]||(e[8]=function(t){return v.state.popup2=t}),title:"派发优惠券"},{default:i((function(){return[Object(o["k"])("div",j,[Object(o["k"])($,{type:"textarea",modelValue:v.state.account,"onUpdate:modelValue":e[6]||(e[6]=function(t){return v.state.account=t}),style:{border:"solid 1px #EE"},autosize:{minHeight:200},"input-align":"center",placeholder:"请点击这里选择要派发的员工账号",clearable:"",readonly:"",onClick:e[7]||(e[7]=function(t){return v.state.showMember=!0})},null,8,["modelValue"]),Object(o["k"])(m,{round:"",block:"",type:"primary",style:{margin:"10px 0"},onClick:k.onGrant},{default:i((function(){return[O]})),_:1},8,["onClick"])])]})),_:1},8,["show"]),Object(o["k"])(S,{show:v.state.showMember,"onUpdate:show":e[11]||(e[11]=function(t){return v.state.showMember=t}),title:"请点击选择员工",style:{height:"100%",maxHeight:"100%",background:"#F6F6F6"},round:!1,closeable:!1},{default:i((function(){return[Object(o["k"])(A,{selected:v.state.account,"onUpdate:selected":e[9]||(e[9]=function(t){return v.state.account=t}),onClose:e[10]||(e[10]=function(t){return v.state.showMember=!1})},null,8,["selected"])]})),_:1},8,["show"])]})),_:1})})),g=(n("a9e3"),n("ac1f"),n("5319"),n("9911"),n("2824")),k=n("6c74"),m=n("0ac3"),w={components:{BaseLayout:g["a"],VanCode:k["a"],Member:m["default"]},props:{invalid:{type:[String,Number],default:0}},setup:function(){var t=Object(o["F"])(0),e=Object(o["E"])({refreshing:!1,loading:!1,finished:!1,list:[],offset:0,limit:20,popup:!1,detail:{},cid:0,popup1:!1,showMember:!1,account:"",popup2:!1,qrcode:""});return{active:t,state:e}},created:function(){this.active=this.invalid,this.onRefresh()},methods:{onRefresh:function(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad:function(){var t=this;this.$http.get("/team/couponQuery?invalid="+this.invalid+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var o=e[n];o.color=["#C00","#999"][t.invalid],o.title="满 "+Math.round(o.coupon.amount,2)+" 元"+(1==o.coupon.type?"<br>减 "+o.coupon.discount+" 元":"打 "+o.coupon.discount+" 折"),t.state.list.push(o)}}))},onChange:function(){this.$router.replace("?invalid="+this.active),setTimeout(this.onRefresh,100)},onClick:function(){this.$toast("重磅功能内测中，敬请期待！")},onView:function(t){var e=this;this.$http.get("/team/couponDetail?id="+t).then((function(t){e.state.detail=t,e.state.popup=!0}))},onShare:function(){var t=this;this.$http.get("/team/couponShare?id="+this.state.cid).then((function(e){t.state.qrcode=e.link,t.state.popup1=!0}))},onGrant:function(){var t=this;this.$http.get("/team/couponShare?id="+this.state.cid+"&uid="+this.state.account).then((function(){t.state.popup2=!1,t.$dialog.alert({title:"优惠券派发成功",message:"已微信通知员工领取使用",theme:"round-button"})}))}}},_=(n("9085"),n("d959")),y=n.n(_);const C=y()(w,[["render",v],["__scopeId","data-v-74584696"]]);e["default"]=C}}]);