(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20c4e50a"],{7495:function(t,n,o){"use strict";o("c7d8")},b1e6:function(t,n,o){"use strict";o.r(n);o("99af"),o("b0c0");var e=o("7a23"),a={key:1,class:"todo__list center"},c={class:"todo__item"};function d(t,n,o,d,i,s){var u=Object(e["v"])("Loading");return t.dataLoading?(Object(e["q"])(),Object(e["d"])(u,{key:0})):(Object(e["q"])(),Object(e["e"])("div",a,[Object(e["f"])("h2",null,Object(e["x"])("Task #".concat(t.todo.id,': "').concat(t.todo.name,'"')),1),Object(e["f"])("h2",{style:Object(e["m"])({color:t.todo.done?"green":"red"})},Object(e["x"])("(".concat(t.todo.done?"Done":"Undone",")")),5),Object(e["f"])("div",c,[Object(e["f"])("div",null,[Object(e["f"])("button",{title:"Mark as done or undone",onClick:n[0]||(n[0]=function(n){return t.toggleTodo(t.todo.done)}),class:"button"},Object(e["x"])(t.todo.done?"Undone":"Done"),1),Object(e["f"])("button",{title:"Delete this task",onClick:n[1]||(n[1]=function(){return t.deleteTodo&&t.deleteTodo.apply(t,arguments)}),class:"button"}," Delete ")]),Object(e["f"])("h4",null,Object(e["x"])("Created: ".concat(new Date(t.todo.createdAt).toLocaleString())),1)])]))}o("d3b7");var i=o("bc3a"),s=o.n(i),u=o("5c4b"),r=o("3a5e"),l=Object(e["h"])({name:"TodoView",data:function(){return{dataLoading:!0,todo:{}}},components:{Loading:r["a"]},mounted:function(){this.getData()},methods:{getData:function(){var t=this;s.a.get("".concat(u["a"],"/").concat(this.$route.params.id)).then((function(n){var o=n.data;t.todo=o})).catch((function(t){alert("".concat(t.response.status," (").concat(t.response.statusText,"), try again"))})).finally((function(){t.dataLoading=!1}))},deleteTodo:function(){var t=this;this.dataLoading=!0,s.a.delete("".concat(u["a"],"/").concat(this.$route.params.id)).then((function(){t.$router.push("/")})).catch((function(t){alert("".concat(t.response.status," (").concat(t.response.statusText,"), try again"))})).finally((function(){t.dataLoading=!1}))},toggleTodo:function(t){var n=this;this.dataLoading=!0,s.a.put("".concat(u["a"],"/").concat(this.$route.params.id),{done:!t}).then((function(){n.getData()})).catch((function(t){alert("".concat(t.response.status," (").concat(t.response.statusText,"), try again"))})).finally((function(){n.dataLoading=!1}))}}}),f=(o("7495"),o("6b0d")),b=o.n(f);const h=b()(l,[["render",d]]);n["default"]=h},c7d8:function(t,n,o){}}]);
//# sourceMappingURL=chunk-20c4e50a.10dcc151.js.map