(function(t){function e(e){for(var a,o,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"3ec2":function(t,e,n){"use strict";var a=n("dfc4"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Config",{on:{limpaTudo:t.limpaStorage}}),a("div",{attrs:{id:"todolist"}},[a("div",{attrs:{id:"header"}},[a("b-img",{staticClass:"logo",attrs:{src:n("cf05")}}),a("hr")],1),a("div",{attrs:{id:"tarefas"}},[a("draggable",{attrs:{"ghost-class":"ghost"},on:{start:function(e){t.drag=!0},end:t.onEnd},model:{value:t.tarefas,callback:function(e){t.tarefas=e},expression:"tarefas"}},[a("transition-group",{attrs:{type:"transition",name:"flip-list"}},t._l(t.tarefas,(function(e){return a("div",{key:e.id,attrs:{id:e.id}},[a("Tarefa",{attrs:{id:e.id,conteudo:e.conteudo,concluida:e.concluida},on:{concluirTarefa:t.concluir,apagaTarefa:t.apagar}})],1)})),0)],1)],1),a("div",{attrs:{id:"insert"}},[a("hr"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tarefaField,expression:"tarefaField"}],attrs:{id:"insertText",placeholder:"Adicionar nova tarefa...",maxlength:"60"},domProps:{value:t.tarefaField},on:{keyup:t.adicionar,input:function(e){e.target.composing||(t.tarefaField=e.target.value)}}})])])],1)},r=[],o=(n("4de4"),n("4160"),n("d3b7"),n("25f0"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tarefa",attrs:{id:t.id}},[t.isConclued?n("input",{staticClass:"aCheck",attrs:{type:"checkbox",checked:""},on:{change:t.concluido}}):n("input",{staticClass:"aCheck",attrs:{type:"checkbox"},on:{change:t.concluido}}),t.isConclued?n("strong",[n("del",[t._v(" "+t._s(t.conteudo))])]):n("strong",[t._v(t._s(t.conteudo))]),t.isConclued?n("f-icon",{staticClass:"aIcon",attrs:{icon:"trash"},on:{click:t.apagarTarefa}}):t._e()],1)}),c=[],s={data:function(){return{isConclued:this.concluida}},props:{id:String,conteudo:String,concluida:Boolean},methods:{concluido:function(){this.isConclued=!this.isConclued,this.$emit("concluirTarefa",{referencia:this.id})},apagarTarefa:function(){this.$emit("apagaTarefa",{referencia:this.id})}}},u=s,d=(n("3ec2"),n("2877")),l=Object(d["a"])(u,o,c,!1,null,null,null),f=l.exports,p=n("310e"),h=n.n(p),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"config"}},[n("button",{attrs:{id:"button-config"},on:{click:function(e){t.show=!t.show}}},[n("f-icon",{attrs:{icon:"cogs"}})],1),n("transition",{attrs:{name:"bounce"}},[t.show?n("div",{staticClass:"colors",on:{click:t.limpar}},[n("p",[t._v("Apagar todos os dados")])]):t._e()])],1)},v=[],m={props:{icon:String},data:function(){return{show:!1}},methods:{limpar:function(){var t=confirm("Você deseja excluir todas as tarefas da lista?");t&&this.$emit("limpaTudo")}}},b=m,y=(n("f46f"),Object(d["a"])(b,g,v,!1,null,null,null)),x=y.exports,w={name:"App",components:{Tarefa:f,draggable:h.a,Config:x},data:function(){return{tarefas:[],tarefaField:"",oldIndex:"",newIndex:""}},methods:{adicionar:function(t){if(13===t.keyCode&&this.tarefaField.length>1){var e=Date.now().toString();this.tarefas.unshift({id:e,conteudo:this.tarefaField,concluida:!1}),this.tarefaField=""}return!1},apagar:function(t){this.tarefas=this.tarefas.filter((function(e){return e.id!=t.referencia}))},limpaStorage:function(){this.tarefas=[]},concluir:function(t){var e=this.tarefas,n={};e.forEach((function(e){e.id==t.referencia&&(n.concluida=!e.concluida,n.id=e.id,n.conteudo=e.conteudo)})),this.tarefas=this.tarefas.filter((function(e){return e.id!=t.referencia})),0==n.concluida?this.tarefas.unshift(n):this.tarefas.push(n)},time:function(){var t=new Date,e=t.getHours()+":"+(t.getMinutes()<10?"0":"")+t.getMinutes()+":"+(t.getSeconds()<10?"0":"")+t.getSeconds(),n=e;this.timestamp=n,setInterval(this.time,1e3)},onEnd:function(t){console.log(t),this.oldIndex=t.oldIndex,this.newIndex=t.newIndex}},mounted:function(){localStorage.antigasTarefas&&(this.tarefas=JSON.parse(localStorage.antigasTarefas))},watch:{tarefas:function(t){localStorage.antigasTarefas=JSON.stringify(t)}}},_=w,S=(n("034f"),Object(d["a"])(_,i,r,!1,null,null,null)),C=S.exports,T=n("5f5b"),O=n("b1e0"),k=n("ecee"),j=n("c074"),F=n("ad3d");k["c"].add(j["a"]),a["default"].component("f-icon",F["a"]),a["default"].use(T["a"]),a["default"].use(O["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,n){},"9b6d":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.db6d326c.png"},dfc4:function(t,e,n){},f46f:function(t,e,n){"use strict";var a=n("9b6d"),i=n.n(a);i.a}});
//# sourceMappingURL=app.f4ae94e3.js.map