(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{43:function(e,t,a){e.exports=a(87)},48:function(e,t,a){},66:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(38),c=a.n(r),o=(a(48),a(3)),i=a(4),l=a(2),u=a(6),m=a(5),p=a(12),h=a(1),d=(a(23),a(39),a(24)),E=a.n(d),g=E.a.create();g.defaults.headers.common["cache-control"]="no-cache",g.defaults.headers.post["Content-Type"]="no-cache",g.defaults.headers.put["Content-Type"]="no-cache";var f=E.a.create();f.defaults.headers.common["cache-control"]="no-cache",f.defaults.headers.post["Content-Type"]="no-cache",f.defaults.headers.put["Content-Type"]="no-cache";var v=function(e){f.defaults.headers.common.Authorization="Bearer ".concat(e)},b=g,y=f,C=function(){try{return localStorage.setItem("t","t"),localStorage.removeItem("t"),!0}catch(e){return!1}}(),k=a(18),O=(a(66),a(11)),j=function(e){var t=e.to,a=e.children;Object(k.a)(e,["to","children"]);return s.a.createElement(p.b,{to:t},a)},x=function(e){var t=e.auth;e.unSetAuth;return console.log(t),t.logged?s.a.createElement("nav",null,s.a.createElement(j,{to:"/"},s.a.createElement(O.c,{size:"1.5em"})),s.a.createElement(j,{to:"/main"},s.a.createElement(O.g,{size:"1.5em"})),s.a.createElement(j,{to:"/backlog"},s.a.createElement(O.d,{size:"1.5em"})),s.a.createElement(j,{to:"/notification"},s.a.createElement(O.j,{size:"1.5em"}))):s.a.createElement("nav",null,s.a.createElement(j,{to:"/login"},s.a.createElement(O.a,{size:"1.5em"}),"\xa0Log In"),s.a.createElement(j,{to:"/signin"},s.a.createElement(O.k,{size:"1.5em"}),"\xa0Sign In"))},S=function(e){var t=e.component,a=e.auth,n=Object(k.a)(e,["component","auth"]);return s.a.createElement(h.b,Object.assign({},n,{render:function(e){return a.logged?s.a.createElement(t,Object.assign({},e,{auth:a})):s.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},N=a(19);function w(e){return Object(N.b)(e,{stiffness:330,damping:22})}w(0),w(.8),w(1),w(1);var D=function(e){return{opacity:e.opacity,transform:"translateX(".concat(e.offset,"px)")}};function T(e){return Object(N.b)(e,{stiffness:174,damping:19})}var H={atEnter:{offset:200,opacity:0},atLeave:{offset:T(-100),opacity:T(0)},atActive:{offset:T(0),opacity:T(1)}},B=(a(80),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("button",{className:["btn",this.props.customClass||""].join(" "),onClick:this.props.onClick||function(){}},this.props.caption||this.props.children||"Bot\xf3n")}}]),a}(n.Component)),I=(a(81),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"home"},s.a.createElement("h1",null,"Expense Tracker",this.props.auth.logged?s.a.createElement("div",{className:"half"},s.a.createElement(B,{customClass:"logout",onClick:function(t){e.props.setUnAuth(!1)}},s.a.createElement(O.i,null))):null),this.props.auth.logged?null:s.a.createElement("div",{className:"home section-title"},s.a.createElement("h2",null,"Track your personal finance expenses quickly and easily"),s.a.createElement("p",{className:"section-info"},"Don't waste your time and money on paper, notebooks or complicated applications."," ")),this.props.auth.logged?s.a.createElement("div",{className:"home section-title"},s.a.createElement("h2",null,"Welcome! "),s.a.createElement("h3",null,this.props.auth.user.email),s.a.createElement("p",{className:"section-info"},"Don't waste your time and money on paper, notebooks or complicated applications.")):null)}}]),a}(n.Component)),A=a(7),M=a(10),L=(a(82),function(e){var t=e.caption,a=e.type,n=e.value,r=e.name,c=e.onChange;Object(k.a)(e,["caption","type","value","name","onChange"]);return s.a.createElement("fieldset",null,s.a.createElement("legend",null,t),s.a.createElement("input",{type:a||"text",value:n||"",name:r,onChange:c||function(){}}))}),z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={email:"",password:"",redirect:!1,error:null},e.onChangeHandler=e.onChangeHandler.bind(Object(l.a)(e)),e.onSigninBtnClick=e.onSigninBtnClick.bind(Object(l.a)(e)),e}return Object(i.a)(a,[{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(M.a)(Object(M.a)({},this.state),{},Object(A.a)({},a,n)))}},{key:"onSigninBtnClick",value:function(e){var t=this;console.log(this.state),b.post("/api/security/security/login",this.state).then((function(e){var a=e.data;e.status;t.props.setAuth(a.token,a.user),t.setState({redirect:!0})})).catch((function(e){console.log(e),t.setState({error:"Correo o contrase\xf1a incorrectas. Intenda de nuevo"})}))}},{key:"render",value:function(){var e=this;return console.log(this.props.auth),this.state.redirect?s.a.createElement(h.a,{to:this.props.location.state?this.props.location.state.from.pathname:"/"}):s.a.createElement("section",null,s.a.createElement("h1",null,"User Login"),s.a.createElement("section",{className:"main fix640"},s.a.createElement(L,{caption:"Email",value:this.state.email,name:"email",onChange:this.onChangeHandler}),s.a.createElement(L,{caption:"Password",type:"password",value:this.state.password,name:"password",onChange:this.onChangeHandler}),this.state.error?s.a.createElement("div",{className:"error"},this.state.error):null,s.a.createElement("section",{className:"action"},s.a.createElement(B,{caption:"Login",onClick:this.onSigninBtnClick,customClass:"primary"}),s.a.createElement(B,{caption:"Signup",customClass:"link",onClick:function(t){e.props.history.push("/signin")}}))))}}]),a}(n.Component),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={email:"",password:"",error:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(l.a)(e)),e.onSiginBtnClick=e.onSiginBtnClick.bind(Object(l.a)(e)),e}return Object(i.a)(a,[{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(M.a)(Object(M.a)({},this.state),{},Object(A.a)({},a,n)))}},{key:"onSiginBtnClick",value:function(e){var t=this,a=this.state,n=a.email,s=a.password;b.post("/api/security/security/signin",{email:n,password:s}).then((function(e){var a=e.data;console.log("Esta es la data"+a),t.props.history.push("/login")})).catch((function(e){console.log("Aqui ocurrio un error: "+e),t.setState({error:"Error. No se pudo crear la cuenta, Intente nuevamente."})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("section",null,s.a.createElement("h1",null,"New Account"),s.a.createElement("section",{className:"main fix640"},s.a.createElement(L,{caption:"Email ",value:this.state.email,name:"email",onChange:this.onChangeHandler}),s.a.createElement(L,{caption:"Password",type:"password",value:this.state.password,name:"password",onChange:this.onChangeHandler}),this.state.error?s.a.createElement("div",{className:"error"},this.state.erro):null,s.a.createElement("section",{className:"action"},s.a.createElement(B,{caption:"SingUp",onClick:this.onSiginBtnClick,customClass:"primary"}),s.a.createElement(B,{caption:"User Login",customClass:"link",onClick:function(t){e.props.history.push("/login")}}))))}}]),a}(n.Component),P=(a(83),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expenseType:"",expenseDesc:"",expenseMoney:0,error:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(l.a)(e)),e.onSaveBtnClick=e.onSaveBtnClick.bind(Object(l.a)(e)),e}return Object(i.a)(a,[{key:"onChangeHandler",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;"expenseMoney"===e.currentTarget.name?this.setState(Object(M.a)(Object(M.a)({},this.state),{},Object(A.a)({},a,parseInt(n)))):this.setState(Object(M.a)(Object(M.a)({},this.state),{},Object(A.a)({},a,n)))}},{key:"onSaveBtnClick",value:function(e){var t=this,a=this.state,n=a.expenseType,s=a.expenseDesc,r=a.expenseMoney;y.post("/api/expenses/expenses",{expenseType:n,expenseDesc:s,expenseMoney:r}).then((function(e){e.data;t.props.history.push("/notifications")})).catch((function(e){t.setState({error:"Error. No se pudo registrar el nuevo gasto"})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("section",null,s.a.createElement("h1",null,"What will I spend today?"),s.a.createElement("section",{className:"main fix640"},s.a.createElement("form",null,s.a.createElement("label",null,"Choose an expense "),s.a.createElement("select",{name:"expenseType",onChange:function(t){return e.onChangeHandler(t)}},s.a.createElement("option",{value:"Comestible"},"Comestible"),s.a.createElement("option",{value:"Family"},"Family"),s.a.createElement("option",{value:"Restaurants"},"Restaurants"),s.a.createElement("option",{value:"FreeTime"},"Free Time"),s.a.createElement("option",{value:"Transport"},"Transport"),s.a.createElement("option",{value:"Presents"},"Presents"),s.a.createElement("option",{value:"Purchases"},"Purchases")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(L,{caption:"Expense Description",value:this.state.expenseDesc,name:"expenseDesc",onChange:this.onChangeHandler}),this.state.error?s.a.createElement("div",{className:"error"},this.state.error):null,s.a.createElement(L,{caption:"How much I spent?",value:this.state.expenseMoney,name:"expenseMoney",onChange:this.onChangeHandler}),this.state.error?s.a.createElement("div",{className:"error"},this.state.error):null,s.a.createElement("section",{className:"action"},s.a.createElement(B,{caption:"OK",onClick:this.onSaveBtnClick,customClass:"primary"})))))}}]),a}(n.Component)),q=(a(84),a(42)),_=a.n(q),W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expenses:[],hasMore:!0,page:1,itemsToLoad:10},e.loadMore=e.loadMore.bind(Object(l.a)(e)),e}return Object(i.a)(a,[{key:"loadMore",value:function(e){var t=this,a=this.state.itemsToLoad,n="/api/expenses/expenses/page/".concat(e,"/").concat(a);y.get(n).then((function(n){var s=n.data,r=s.expenses,c=s.totalExpenses,o=t.state.expenses;r.map((function(e){return o.push(e)})),c?t.setState({expenses:o,hasMore:e*a<c}):t.setState({hasMore:!1})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t=this,a=this.state.expenses.map((function(e){return s.a.createElement("div",{className:"thingItem",key:e._id},s.a.createElement("span",null,e.expenseDesc),s.a.createElement("span",{className:"updateThing"},s.a.createElement(p.b,{to:"/detailupdate/".concat(e._id)},s.a.createElement(O.h,{size:"2em","background-color":"white"}))))}));return a.length||a.push(s.a.createElement("div",{className:"thingItem",key:"pbBackLogAddOne"},s.a.createElement("span",null,"You don't have an expense list yet :("),s.a.createElement(p.b,{to:"/main"},s.a.createElement(O.e,{size:"2.5em"})))),s.a.createElement("section",null,s.a.createElement("h1",null,"I spent on ..."),s.a.createElement("div",{className:"backlog",ref:function(e){return t.scrollParentRef=e}},s.a.createElement(_.a,(e={pageStart:0},Object(A.a)(e,"pageStart",0),Object(A.a)(e,"loadMore",this.loadMore),Object(A.a)(e,"hasMore",this.state.hasMore),Object(A.a)(e,"useWindow",!1),Object(A.a)(e,"getScrollParent",(function(){return t.scrollParentRef})),Object(A.a)(e,"loader",s.a.createElement("div",{key:"pbBackLogLoading",className:"thingItem center"},s.a.createElement(O.f,null))),e),a)))}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={descripcion:"",error:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(l.a)(e)),e.onSaveBtnClick=e.onSaveBtnClick.bind(Object(l.a)(e)),e}return Object(i.a)(a,[{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(M.a)(Object(M.a)({},this.state),{},Object(A.a)({},a,n)))}},{key:"onSaveBtnClick",value:function(e){var t=this,a=this.state.descripcion;y.post("/api/things",{descripcion:a}).then((function(e){e.data;t.props.history.push("/backlog")})).catch((function(e){t.setState({error:"Error. No se pudo crear nuevo thing, Intente nuevamente."})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("section",null,s.a.createElement("h1",null,"New Thing"),s.a.createElement("section",{className:"main fix640"},s.a.createElement(L,{caption:"Description ",value:this.state.descripcion,name:"descripcion",onChange:this.onChangeHandler}),this.state.error?s.a.createElement("div",{className:"error"},this.state.error):null,s.a.createElement("section",{className:"action"},s.a.createElement(B,{caption:"Create",onClick:this.onSaveBtnClick,customClass:"primary"}),s.a.createElement("br",null),s.a.createElement(B,{caption:"Cancel",customClass:"secundary",onClick:function(t){e.props.history.push("/backlog")}}))))}}]),a}(n.Component),J=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expenseDesc:"",error:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(l.a)(e)),e.onSaveBtnClick=e.onSaveBtnClick.bind(Object(l.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params,a="/api/expenses/expenses/".concat(t.id);y.get(a).then((function(t){var a=t.data;e.setState(Object(M.a)({},a))})).catch((function(t){e.setState({error:"No se pudo cargar el Thing"})}))}},{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(M.a)(Object(M.a)({},this.state),{},Object(A.a)({},a,n)))}},{key:"onSaveBtnClick",value:function(e){var t=this,a=this.state,n=a.expenseDesc,s=a._id;y.put("/api/expenses/expenses/".concat(s),{expenseDesc:n}).then((function(e){e.data;t.props.history.push("/backlog")})).catch((function(e){console.log("Aqui ocurrio un error: "+e),t.setState({error:"Error. No se pudo actulizar nuevo thing, Intente nuevamente."})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("section",null,s.a.createElement("h1",null,"ID : ",this.props.match.params.id),s.a.createElement("section",{className:"main fix640"},s.a.createElement(L,{caption:"Description",value:this.state.expenseDesc,name:"expenseDesc",onChange:this.onChangeHandler}),this.state.error?s.a.createElement("div",{className:"error"},this.state.error):null,s.a.createElement("section",{className:"action"},s.a.createElement(B,{caption:"Update",onClick:this.onSaveBtnClick,customClass:"primary"}),s.a.createElement("br",null),s.a.createElement(B,{caption:"Cancel",customClass:"secundary",onClick:function(t){e.props.history.push("/backlog")}}))))}}]),a}(n.Component),R=(a(86),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expenses:[],expensess:[],expensesss:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.get("/api/expenses/expenses/query1").then((function(t){var a=t.data,n=a.expenses;for(var s in a)console.log(a);var r=e.state.expenses;n.map((function(e){return r.push(e)}))})).catch((function(e){console.log(e)}));y.get("/api/expenses/expenses/query4").then((function(t){var a=t.data.expensesss;for(var n in a)console.log(a);var s=e.state.expensesss;a.map((function(e){return s.push(e)}))})).catch((function(e){console.log(e)}));y.get("/api/expenses/expenses/query3").then((function(t){var a=t.data.expensess,n=e.state.expensess;a.map((function(e){return n.push(e)})),e.props.history.push("/notification")})).catch((function(e){console.log(e)}))}},{key:"crearTabla",value:function(){return this.state.expensess.map((function(e){return s.a.createElement("tr",{class:"tablaDataLink",key:e._id},s.a.createElement("td",{class:"tablaDataLink"}," ",e.expenseType," "),s.a.createElement("td",{class:"tablaDataLink"}," ",e.expenseDesc," "),s.a.createElement("td",{class:"tablaDataLink"}," $",e.expenseMoney," "),s.a.createElement("td",{class:"tablaDataLink action"},s.a.createElement(p.b,{to:""})))}))}},{key:"render",value:function(){var e=this.state.expenses.map((function(e){return s.a.createElement("div",{className:"thingItem",key:e._id},s.a.createElement("span",null,'Spend a lot on "',e.expenseDesc,'" and spent "$',e.expenseMoney,'"'),s.a.createElement("span",{className:"updateThing"},s.a.createElement(p.b,{to:""},s.a.createElement(O.b,{size:"1.6em"}))))})),t=this.state.expensesss.map((function(e){return s.a.createElement("div",{className:"thingItem",key:e._id},s.a.createElement("span",null,'Last expense was "',e.expenseDesc,'" and spent "$',e.expenseMoney,'"'),s.a.createElement("span",{className:"updateThing"},s.a.createElement(p.b,{to:""},s.a.createElement(O.b,{size:"1.6em"}))))}));return e.length||e.push(s.a.createElement("div",{className:"thingItem"},s.a.createElement("span",null," Haven't spent on anything yet :("),s.a.createElement(p.b,{to:"/main"},s.a.createElement(O.e,{size:"2.5em"})))),s.a.createElement("section",null,s.a.createElement("h1",null," Notifications "),e,t,s.a.createElement("p",{class:"tableHead"}," Top 3 expenses "),s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",{class:"tableData"}," Type "),s.a.createElement("td",{class:"tableData"}," Description "),s.a.createElement("td",{class:"tableData"}," Spending "))),s.a.createElement("tbody",null,this.crearTabla())))}}]),a}(n.Component)),$=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e,n,s;return Object(o.a)(this,a),(e=t.call(this)).state={auth:JSON.parse((n="auth",C?localStorage.getItem(n):null))||{logged:!1,token:!1,user:{}}},e.setAuth=e.setAuth.bind(Object(l.a)(e)),e.setUnAuth=e.setUnAuth.bind(Object(l.a)(e)),v(e.state.auth.token),s=e.setUnAuth,f.interceptors.response.use((function(e){return e}),(function(e){if(e.response)switch(console.log(e.response.status),e.response.status){case 401:s(e.response.data)}else e.request?console.log(e.request):console.log(e);return Promise.reject(e)})),e}return Object(i.a)(a,[{key:"setUnAuth",value:function(e){this.setAuth(!1,{})}},{key:"setAuth",value:function(e,t){v(e);var a,n,s={logged:e&&!0,token:e,user:t};a="auth",n=JSON.stringify(s),C&&localStorage.setItem(a,n),this.setState({auth:s})}},{key:"render",value:function(){var e=this;return console.log(this.state.auth),s.a.createElement(p.a,null,s.a.createElement("section",{className:"conteiner"},s.a.createElement(N.a,Object.assign({},H,{mapStyle:D,className:"switch-wrapper"}),s.a.createElement(h.b,{path:"/",exact:!0,render:function(t){return s.a.createElement(I,Object.assign({},t,{auth:e.state.auth,setUnAuth:e.setUnAuth}))}}),s.a.createElement(h.b,{path:"/login",render:function(t){return s.a.createElement(z,Object.assign({},t,{auth:e.state.auth,setAuth:e.setAuth}))}}),s.a.createElement(h.b,{path:"/signin",component:U}),s.a.createElement(S,{path:"/main",auth:this.state.auth,component:P}),s.a.createElement(S,{path:"/backlog",auth:this.state.auth,component:W}),s.a.createElement(S,{path:"/detailadd",auth:this.state.auth,component:F}),s.a.createElement(S,{path:"/detailupdate/:id",auth:this.state.auth,component:J}),s.a.createElement(S,{path:"/notification",auth:this.state.auth,component:R})),s.a.createElement(x,{auth:this.state.auth})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.999235c5.chunk.js.map