(function(t){function e(e){for(var n,s,i=e[0],c=e[1],d=e[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"199c":function(t,e){},"23be":function(t,e,o){"use strict";var n=o("199c"),r=o.n(n);e["default"]=r.a},"3dfd":function(t,e,o){"use strict";var n=o("ace2"),r=o("23be"),a=(o("034f"),o("2877")),s=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},4637:function(t,e,o){},"55cf":function(t,e,o){"use strict";var n=o("8af9"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=o("3dfd"),a=o("8c4f"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h1",[t._v("My Todos")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"}],ref:"todoinput",attrs:{type:"text",placeholder:"Enter a todo...",autofocus:"true"},domProps:{value:t.todo},on:{input:function(e){e.target.composing||(t.todo=e.target.value)}}})]),t.showError?o("p",{staticClass:"error"},[t._v(t._s(t.showError))]):t._e(),o("ul",t._l(t.todos,(function(e,n){return o("li",{key:n,staticClass:"todo-card"},[o("TodoItem",{attrs:{item:e,index:n,deleteTodo:t.deleteTodo}})],1)})),0)])},i=[],c=(o("d3b7"),o("c96a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item",on:{mouseover:function(e){t.showDelete=!0},mouseleave:function(e){t.showDelete=!1},click:function(e){return t.deleteTodo(t.index,t.item)}}},[o("img",{staticClass:"cover",attrs:{src:t.item.image_url}}),o("article",[t._v(t._s(t.item.todo))]),o("img",{directives:[{name:"show",rawName:"v-show",value:t.showDelete,expression:"showDelete"}],staticClass:"trash",attrs:{src:"https://i.ibb.co/893LCnN/pngfind-com-trash-png-471196.png"}})])}),d=[],u={props:["item","index","deleteTodo"],data:function(){return{showDelete:!1}}},l=u,f=(o("92d5"),o("2877")),p=Object(f["a"])(l,c,d,!1,null,"a712cbc2",null),h=p.exports,v={name:"Todos",components:{TodoItem:h},created:function(){var t=this;this.$store.dispatch("loadTodos"),setTimeout((function(){t.todos=t.$store.getters.getTodos,console.log("NEW CREATE",JSON.parse(JSON.stringify(t.$store.getters.getTodos)))}),400)},data:function(){return{todo:"",showError:"",todos:this.$store.getters.getTodos}},watch:{todo:function(){this.showError=""}},methods:{addTodo:function(){var t=this;console.log(this.todos),""!==this.todo?fetch("http://api.cortical.io:80/rest/text/keywords?retina_name=en_associative",{method:"post",headers:{},body:JSON.stringify(this.todo)}).then((function(t){return t.text()})).then((function(e){var o=JSON.parse(e);if(0!==o.length){var n=JSON.parse(e)[0];fetch("https://api.unsplash.com/search/photos?client_id=SFK5BeizYJkMY6aiv6ST5EqMJFInZRNR22D7QturUec&query=".concat(n,"&orientation=squarish")).then((function(t){return t.text()})).then((function(e){var o=JSON.parse(e).results[0].urls.small;console.log({imageResult:o}),t.$store.dispatch("addTodo",{id:t.$store.state.todos[t.$store.state.todos.length-1].id+1,todo:t.todo,image_url:o}),t.todo=""}))}else t.showError="Be more descriptive with your words :)"})).catch((function(t){return console.log(t)})):this.showError="You actually have to type something :)"},deleteTodo:function(t,e){console.log(e),this.$store.dispatch("deleteTodo",{index:t,id:e})}}},m=v,g=(o("55cf"),Object(f["a"])(m,s,i,!1,null,"678c9c61",null)),b=g.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about"},[o("h1",[t._v("About")]),o("section",{staticClass:"sub-heading"},[o("article",[t._v("This was a 2-day challenge to learn 2 things:")]),o("aside",[t._v("1. Vue.js on the front-end (with Vuex).")]),o("aside",[t._v("2. Lavarel (php) on the back-end.")])]),o("section",{staticClass:"utilizations"},[o("article",[t._v("2 API's were utilized:")]),o("aside",[t._v("1. Cortical -- for analyzing keywords.")]),o("aside",[t._v("2. Unsplash -- for querying relevant visuals.")])]),o("section",{staticClass:"aws"},[o("article",[t._v("AWS was also utilized:")]),o("aside",[t._v("1. Vue.js app -- deployed and live on Heroku.")]),o("aside",[t._v("2. Laravel api -- deployed and live on Heroku.")])]),o("section",{staticClass:"sql"},[o("article",[t._v("SQL was integrated:")]),o("aside",[t._v("1. Postgres used with Laravel.")]),o("aside",[t._v("2. Postico used for accessing database interface.")])])])}],y=(o("6ea8"),{}),T=Object(f["a"])(y,_,w,!1,null,"082cbdb8",null),O=T.exports;n["a"].use(a["a"]);var x=new a["a"]({routes:[{path:"/",name:"todos",component:b},{path:"/about",name:"about",component:O}]}),S=(o("99af"),o("a434"),o("2f62")),j=o("bc3a"),E=o.n(j);n["a"].use(S["a"]);var k=E.a.create({baseURL:"https://todo-list-stark.herokuapp.com/api",headers:{"Content-Type":"application/json"},responseType:"json"}),C=new S["a"].Store({state:{todos:[]},getters:{getTodos:function(t){return t.todos}},mutations:{loadTodos:function(t,e){var o=JSON.parse(JSON.stringify(e.data));t.todos=o},addTodo:function(t,e){t.todos.push(e)},deleteTodo:function(t,e){t.todos.splice(e,1)}},actions:{loadTodos:function(t){var e=t.commit;k.get("/todos").then((function(t){return e("loadTodos",t.data)}))},addTodo:function(t,e){var o=t.commit;k.post("/todo?todo=".concat(e.todo,"&image_url=").concat(e.image_url)).then((function(t){var n=e;n.id=t.data.data.id,o("addTodo",n)}))},deleteTodo:function(t,e){var o=t.commit,n=JSON.parse(JSON.stringify(e.id.id));k.delete("/todo/".concat(n)),o("deleteTodo",e.index)}}});n["a"].config.productionTip=!1,new n["a"]({router:x,store:C,render:function(t){return t(r["default"])}}).$mount("#app")},"6ea8":function(t,e,o){"use strict";var n=o("4637"),r=o.n(n);r.a},"85ec":function(t,e,o){},"8af9":function(t,e,o){},"92d5":function(t,e,o){"use strict";var n=o("ac42"),r=o.n(n);r.a},ac42:function(t,e,o){},ace2:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("nav",[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),o("router-view")],1)},r=[];o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r}))}});
//# sourceMappingURL=app.7944fe2c.js.map