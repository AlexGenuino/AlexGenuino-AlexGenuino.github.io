(function(t){function e(e){for(var r,l,o=e[0],s=e[1],c=e[2],d=0,v=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&v.push(n[l][0]),n[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},n={app:0},i=[];function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Latest Release")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-main",[a("Home")],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{height:"200vh"}},[a("div",{staticClass:"topo-page"},[a("v-form",{staticStyle:{width:"50%"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-text-field",{attrs:{counter:50,label:"Valor Total",type:"number",prefix:"R$",required:""},model:{value:t.totalValue,callback:function(e){t.totalValue=e},expression:"totalValue"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-text-field",{attrs:{counter:3,type:"number",label:"Periodo",required:""},model:{value:t.Period,callback:function(e){t.Period=e},expression:"Period"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-text-field",{attrs:{label:"Taxa Juros",type:"number",prefix:"%",required:""},model:{value:t.taxa,callback:function(e){t.taxa=e},expression:"taxa"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-select",{attrs:{items:t.itemsJuros,label:"Tipo",dense:""}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-btn",{staticClass:"mr-4",on:{click:t.CalculateSac}},[t._v(" Calcular ")])],1)],1)],1),t.ResultSac.length>0?a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"text-overline mb-4"},[t._v(" OVERLINE ")]),a("v-list-item-title",{staticClass:"text-h5 mb-1"},[t._v(" Headline 5 ")]),a("v-list-item-subtitle",[t._v("Greyhound divisely hello coldly fonwderfully")])],1),a("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}})],1),a("v-card-actions",[a("v-btn",{attrs:{outlined:"",rounded:"",text:""}},[t._v(" Button ")])],1)],1):t._e()],1),t.ResultSac.length>0?a("div",{staticClass:"column-data"},[a("v-card",[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.ResultSac,"single-expand":"","item-key":"index","show-expand":"",search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.index;return[t._v(" "+t._s(a+1)+" ")]}}],null,!1,2609207238)})],1)],1):t._e()])},o=[],s=a("d4ec"),c=a("bee2"),u=function(){function t(e,a,r){Object(s["a"])(this,t),this.value=e,this.periods=a,this.interestRate=r}return Object(c["a"])(t,[{key:"getParams",value:function(){var t=this.value/this.periods,e=this.value,a=this.interestRate/100;return{amortization:t,percentage:a,balance:e}}},{key:"doSac",value:function(){for(var t=this.getParams(),e=t.amortization,a=t.percentage,r=t.balance,n=r,i=0,l=[],o=1;o<=this.periods;o++){var s=(this.periods-o+1)*e*a,c=e+s;n-=e,i+=c,l.push({index:o,amortization:e,interestRateBalance:s,portion:c,valuePaid:i,balance:n})}return l}}]),t}(),d={data:function(){return{taxa:null,totalValue:null,Period:null,ResultSac:[],itemsJuros:["SAC","PRICE"],search:"",headers:[{text:"SAC",align:"start",value:"index"},{text:"Amortização",value:"amortization",filterable:!1},{text:"Juros",value:"interestRateBalance",filterable:!1},{text:"Prestação",value:"portion",filterable:!1},{text:"Valor Pago",value:"valuePaid",filterable:!1},{text:"Saldo Devedor",value:"balance",filterable:!1}],desserts:[]}},methods:{CalculateSac:function(){var t=new u(this.totalValue,this.Period,this.taxa);this.ResultSac=t.doSac(),console.log(this.ResultSac)}}},v=d,p=(a("ae63"),a("2877")),f=a("6544"),m=a.n(f),h=a("8336"),b=a("b0af"),x=a("99d9"),y=a("62ad"),g=a("a523"),V=a("8fea"),w=a("4bd4"),S=a("da13"),C=a("8270"),_=a("5d23"),P=a("0fd9"),k=a("b974"),j=a("8654"),O=Object(p["a"])(v,l,o,!1,null,"7d0251d0",null),R=O.exports;m()(O,{VBtn:h["a"],VCard:b["a"],VCardActions:x["a"],VCardTitle:x["b"],VCol:y["a"],VContainer:g["a"],VDataTable:V["a"],VForm:w["a"],VListItem:S["a"],VListItemAvatar:C["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VRow:P["a"],VSelect:k["a"],VTextField:j["a"]});var T={name:"App",components:{Home:R},data:function(){return{}}},I=T,A=a("7496"),L=a("40dc"),z=a("132d"),B=a("adda"),J=a("f6c4"),E=a("2fa4"),M=Object(p["a"])(I,n,i,!1,null,null,null),$=M.exports;m()(M,{VApp:A["a"],VAppBar:L["a"],VBtn:h["a"],VIcon:z["a"],VImg:B["a"],VMain:J["a"],VSpacer:E["a"]});var q=a("f309");r["a"].use(q["a"]);var H=new q["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:H,render:function(t){return t($)}}).$mount("#app")},"57a9":function(t,e,a){},ae63:function(t,e,a){"use strict";a("57a9")}});
//# sourceMappingURL=app.ee2c5246.js.map