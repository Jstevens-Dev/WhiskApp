(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},163:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(27),c=n.n(a),s=(n(131),n(132),n(9)),o=(n(133),n(274)),i=n(275),l=n(120),u=n(1),j=function(){return Object(u.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(u.jsx)(o.a,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(l.a,{className:"text-center py-3",children:"Copyright \xa9 Whisk"})})})})},d=n(281),p=n(282),b=n(279),h=n(122),O=n(278),x=n(7),f=n(8),g=n.n(f),v=n(18),m="USER_LOGIN_REQUEST",y="USER_LOGIN_SUCCESS",E="USER_LOGIN_FAIL",C="USER_LOGOUT",S="USER_REGISTER_REQUEST",I="USER_REGISTER_SUCCESS",w="USER_REGISTER_FAIL",L="USER_UPDATE_REQUEST",R="USER_UPDATE_SUCCESS",_="USER_UPDATE_FAIL",k=n(26),T=n.n(k),U=function(e,t){return function(){var n=Object(v.a)(g.a.mark((function n(r){var a,c,s;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:m}),a={headers:{"Content-type":"application/json"}},n.next=5,T.a.post("/api/users/login",{email:e,password:t},a);case 5:c=n.sent,s=c.data,r({type:y,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),r({type:E,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},N=function(e,t,n){return function(){var r=Object(v.a)(g.a.mark((function r(a){var c,s,o;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:S}),c={headers:{"Content-type":"application/json"}},r.next=5,T.a.post("/api/users",{name:e,email:t,password:n},c);case 5:s=r.sent,o=s.data,a({type:I,payload:o}),a({type:y,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),a({type:w,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()};var P=function(e){var t=e.setSearch,n=Object(x.b)(),a=Object(x.c)((function(e){return e.userLogin})).userInfo;return Object(r.useEffect)((function(){}),[a]),Object(u.jsx)(d.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d.a.Brand,{href:"/",children:"Whisk"}),Object(u.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsxs)(d.a.Collapse,{id:"responsive-navbar-nav",children:[Object(u.jsx)(p.a,{className:"m-auto",children:a&&Object(u.jsx)(b.a,{inline:!0,children:Object(u.jsx)(h.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){return t(e.target.value)}})})}),Object(u.jsx)(p.a,{children:a?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a.Link,{href:"/myrecipes",children:"My Recipes"}),Object(u.jsxs)(O.a,{title:"".concat(a.name),id:"collasible-nav-dropdown",children:[Object(u.jsx)(O.a.Item,{href:"/account",children:"My Account"}),Object(u.jsx)(O.a.Divider,{}),Object(u.jsx)(O.a.Item,{onClick:function(){n(function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:C});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]})]}):Object(u.jsx)(p.a.Link,{href:"/login",children:"Login"})})]})]})})},A=(n(159),n(124)),D=function(e){var t=e.history;return Object(r.useEffect)((function(){localStorage.getItem("userInfo")&&t.push("/myrecipes")}),[t]),Object(u.jsx)("div",{className:"main",children:Object(u.jsx)(o.a,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)("div",{className:"intro-text",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"title",children:"Welcome to Whisk"}),Object(u.jsx)("p",{className:"subtitle",children:"All of your recipes together in one place."}),Object(u.jsxs)("div",{className:"buttonContainer",children:[Object(u.jsx)("a",{href:"/login",children:Object(u.jsx)(A.a,{size:"lg",className:"landingbutton",children:"Login"})}),Object(u.jsx)("a",{href:"/register",children:Object(u.jsx)(A.a,{size:"lg",className:"landingbutton",children:"Signup"})})]})]})})})})})},G=n(31),B=n(11),F=(n(160),function(e){var t=e.title,n=e.children;return Object(u.jsx)("div",{className:"mainback",children:Object(u.jsx)(o.a,{children:Object(u.jsx)(i.a,{children:Object(u.jsxs)("div",{className:"page",children:[t&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"heading",children:t}),Object(u.jsx)("hr",{})]}),n]})})})})}),z=n(280),H=n(284),Q=n(277),J="RECIPES_LIST_REQUEST",W="RECIPES_LIST_SUCCESS",q="RECIPES_LIST_FAIL",M="RECIPES_CREATE_REQUEST",K="RECIPES_CREATE_SUCCESS",V="RECIPES_CREATE_FAIL",X="RECIPES_UPDATE_REQUEST",Y="RECIPES_UPDATE_SUCCESS",Z="RECIPES_UPDATE_FAIL",$="RECIPES_DELETE_REQUEST",ee="RECIPES_DELETE_SUCCESS",te="RECIPES_DELETE_FAIL",ne=function(e){return function(){var t=Object(v.a)(g.a.mark((function t(n,r){var a,c,s,o,i,l;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:$}),a=r(),c=a.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,T.a.delete("/api/recipes/".concat(e),s);case 6:o=t.sent,i=o.data,n({type:ee,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:te,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},re=n(276),ae=function(e){var t=e.size,n=void 0===t?100:t;return Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(u.jsx)(re.a,{style:{width:n,height:n},animation:"border"})})},ce=n(283),se=function(e){var t=e.variant,n=void 0===t?"info":t,r=e.children;return Object(u.jsx)(ce.a,{variant:n,style:{fontSize:20},children:Object(u.jsx)("strong",{children:r})})},oe=function(e){var t=e.search,n=Object(x.b)(),a=Object(x.c)((function(e){return e.recipeList})),c=a.loading,s=a.recipes,o=a.error,i=Object(x.c)((function(e){return e.userLogin})).userInfo,l=Object(x.c)((function(e){return e.recipeCreate})).success,j=Object(x.c)((function(e){return e.recipeUpdate})).success,d=Object(x.c)((function(e){return e.recipeDelete})),p=d.loading,b=d.error,h=d.success;console.log(s);var O=Object(B.e)();return Object(r.useEffect)((function(){n(function(){var e=Object(v.a)(g.a.mark((function e(t,n){var r,a,c,s,o,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:J}),r=n(),a=r.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(a.token)}},e.next=6,T.a.get("/api/recipes",c);case 6:s=e.sent,o=s.data,t({type:W,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:q,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),i||O.push("/")}),[n,O,i,l,j,h]),Object(u.jsxs)(F,{title:"Welcome Back ".concat(i.name),children:[Object(u.jsx)(G.b,{to:"createrecipe",children:Object(u.jsx)(A.a,{style:{marginLeft:10,marginBottom:6},size:"lg",children:"Create New Recipe"})}),b&&Object(u.jsx)(se,{variant:"danger",children:b}),p&&Object(u.jsx)(ae,{}),o&&Object(u.jsx)(se,{variant:"danger",children:o}),c&&Object(u.jsx)(ae,{}),null===s||void 0===s?void 0:s.reverse().filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(u.jsx)(z.a,{children:Object(u.jsxs)(H.a,{style:{margin:10},children:[Object(u.jsxs)(H.a.Header,{style:{display:"flex"},children:[Object(u.jsx)("span",{style:{color:"black",textDecoration:"none",flex:1,cursor:"pointer",alignSelf:"center",fontSize:18},children:Object(u.jsx)(z.a.Toggle,{as:H.a.Text,variant:"link",eventKey:"0",children:e.title})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(A.a,{href:"/recipe/".concat(e._id),children:"Edit"}),Object(u.jsx)(A.a,{variant:"danger",className:"mx-2",onClick:function(){return t=e._id,void(window.confirm("Are you sure?")&&n(ne(t)));var t},children:"Delete"})]})]}),Object(u.jsx)(z.a.Collapse,{eventKey:"0",children:Object(u.jsxs)(H.a.Body,{children:[Object(u.jsx)("h4",{children:Object(u.jsxs)(Q.a,{variant:"success",style:{backgroundColor:"#78c2ad"},children:["Category - ",e.category]})}),Object(u.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(u.jsx)("p",{children:e.content}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["Created On"," ",Object(u.jsx)("cite",{title:"Source Title",children:e.createdAt.substring(0,10)})]})]})]})})]})},e._id)}))]})},ie=(n(163),function(e){var t=e.history,n=Object(r.useState)(""),a=Object(s.a)(n,2),c=a[0],o=a[1],j=Object(r.useState)(""),d=Object(s.a)(j,2),p=d[0],h=d[1],O=Object(x.b)(),f=Object(x.c)((function(e){return e.userLogin})),m=f.loading,y=f.error,E=f.userInfo;Object(r.useEffect)((function(){E&&t.push("/myrecipes")}),[t,E]);var C=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),O(U(c,p));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(F,{title:"LOGIN",children:Object(u.jsxs)("div",{className:"loginContainer",children:[y&&Object(u.jsx)(se,{variant:"danger",children:y}),m&&Object(u.jsx)(ae,{}),Object(u.jsxs)(b.a,{onSubmit:C,children:[Object(u.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(b.a.Label,{children:"Email address"}),Object(u.jsx)(b.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(b.a.Label,{children:"Password"}),Object(u.jsx)(b.a.Control,{type:"password",value:p,placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(u.jsx)(A.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(l.a,{children:["New Customer ? ",Object(u.jsx)(G.b,{to:"/register",children:"Register Here"})]})})]})})}),le=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(s.a)(c,2),j=o[0],d=o[1],p=Object(r.useState)(""),h=Object(s.a)(p,2),O=h[0],f=h[1],m=Object(r.useState)(""),y=Object(s.a)(m,2),E=y[0],C=y[1],S=Object(r.useState)(null),I=Object(s.a)(S,2),w=I[0],L=I[1],R=Object(x.b)(),_=Object(x.c)((function(e){return e.userRegister})),k=_.loading,T=_.error,U=_.userInfo,P=Object(B.e)();Object(r.useEffect)((function(){U&&P.push("/myrecipes")}),[P,U]);var D=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),O!==E?L("Passwords do not match."):R(N(j,n,O));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(F,{title:"REGISTER",children:Object(u.jsxs)("div",{className:"loginContainer",children:[T&&Object(u.jsx)(se,{variant:"danger",children:T}),w&&Object(u.jsx)(se,{variant:"danger",children:w}),k&&Object(u.jsx)(ae,{}),Object(u.jsxs)(b.a,{onSubmit:D,children:[Object(u.jsxs)(b.a.Group,{controlId:"name",children:[Object(u.jsx)(b.a.Label,{children:"Name"}),Object(u.jsx)(b.a.Control,{type:"name",value:j,placeholder:"Enter name",onChange:function(e){return d(e.target.value)}})]}),Object(u.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(u.jsx)(b.a.Label,{children:"Email address"}),Object(u.jsx)(b.a.Control,{type:"email",value:n,placeholder:"Enter email",onChange:function(e){return a(e.target.value)}})]}),Object(u.jsxs)(b.a.Group,{controlId:"formBasicPassword",children:[Object(u.jsx)(b.a.Label,{children:"Password"}),Object(u.jsx)(b.a.Control,{type:"password",value:O,placeholder:"Password",onChange:function(e){return f(e.target.value)}})]}),Object(u.jsxs)(b.a.Group,{controlId:"confirmPassword",children:[Object(u.jsx)(b.a.Label,{children:"Confirm Password"}),Object(u.jsx)(b.a.Control,{type:"password",value:E,placeholder:"Confirm Password",onChange:function(e){return C(e.target.value)}})]}),Object(u.jsx)(A.a,{variant:"primary",type:"submit",children:"Register"})]}),Object(u.jsx)(i.a,{className:"py-3",children:Object(u.jsxs)(l.a,{children:["Have an Account ? ",Object(u.jsx)(G.b,{to:"/login",children:"Login"})]})})]})})},ue=n(66),je=n.n(ue);var de=function(e){var t=e.history,n=Object(r.useState)(""),a=Object(s.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(""),l=Object(s.a)(i,2),j=l[0],d=l[1],p=Object(r.useState)(""),h=Object(s.a)(p,2),O=h[0],f=h[1],m=Object(x.b)(),y=Object(x.c)((function(e){return e.recipeCreate})),E=y.loading,C=y.error,S=y.recipe;console.log(S);var I=function(){o(""),f(""),d("")};return Object(r.useEffect)((function(){}),[]),Object(u.jsx)(F,{title:"Create a Recipe",children:Object(u.jsxs)(H.a,{children:[Object(u.jsx)(H.a.Header,{children:"Create a new Recipe"}),Object(u.jsx)(H.a.Body,{children:Object(u.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),m(function(e,t,n){return function(){var r=Object(v.a)(g.a.mark((function r(a,c){var s,o,i,l,u,j;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:M}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},r.next=6,T.a.post("/api/recipes/create",{title:e,content:t,category:n},i);case 6:l=r.sent,u=l.data,a({type:K,payload:u}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),j=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,a({type:V,payload:j});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(c,j,O)),c&&j&&O&&(I(),t.push("/myrecipes"))},children:[C&&Object(u.jsx)(se,{variant:"danger",children:C}),Object(u.jsxs)(b.a.Group,{controlId:"title",children:[Object(u.jsx)(b.a.Label,{children:"Title"}),Object(u.jsx)(b.a.Control,{type:"title",value:c,placeholder:"Enter the title",onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)(b.a.Group,{controlId:"content",children:[Object(u.jsx)(b.a.Label,{children:"Content"}),Object(u.jsx)(b.a.Control,{as:"textarea",value:j,placeholder:"Enter the content",rows:4,onChange:function(e){return d(e.target.value)}})]}),j&&Object(u.jsxs)(H.a,{children:[Object(u.jsx)(H.a.Header,{children:"Recipe Preview"}),Object(u.jsx)(H.a.Body,{children:Object(u.jsx)(je.a,{children:j})})]}),Object(u.jsxs)(b.a.Group,{controlId:"content",children:[Object(u.jsx)(b.a.Label,{children:"Category"}),Object(u.jsx)(b.a.Control,{type:"content",value:O,placeholder:"Enter the Category",onChange:function(e){return f(e.target.value)}})]}),E&&Object(u.jsx)(ae,{size:50}),Object(u.jsx)(A.a,{type:"submit",variant:"primary",children:"Create Recipe"}),Object(u.jsx)(A.a,{className:"mx-2",onClick:I,variant:"danger",children:"Reset Feilds"})]})}),Object(u.jsxs)(H.a.Footer,{className:"text-muted",children:["Creating on - ",(new Date).toLocaleDateString()]})]})})};var pe=function(e){var t=e.match,n=e.history,a=Object(r.useState)(),c=Object(s.a)(a,2),o=c[0],i=c[1],l=Object(r.useState)(),j=Object(s.a)(l,2),d=j[0],p=j[1],h=Object(r.useState)(),O=Object(s.a)(h,2),f=O[0],m=O[1],y=Object(r.useState)(""),E=Object(s.a)(y,2),C=E[0],S=E[1],I=Object(x.b)(),w=Object(x.c)((function(e){return e.recipeUpdate})),L=w.loading,R=w.error,_=Object(x.c)((function(e){return e.recipeDelete})),k=_.loading,U=_.error;return Object(r.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/api/recipes/".concat(t.params.id));case 2:n=e.sent,r=n.data,i(r.title),p(r.content),m(r.category),S(r.updatedAt);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.id,C]),Object(u.jsx)(F,{title:"Edit Recipe",children:Object(u.jsxs)(H.a,{children:[Object(u.jsx)(H.a.Header,{children:"Edit your Recipe"}),Object(u.jsx)(H.a.Body,{children:Object(u.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),I(function(e,t,n,r){return function(){var a=Object(v.a)(g.a.mark((function a(c,s){var o,i,l,u,j,d;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c({type:X}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},a.next=6,T.a.put("/api/recipes/".concat(e),{title:t,content:n,category:r},l);case 6:u=a.sent,j=u.data,c({type:Y,payload:j}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),d=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,c({type:Z,payload:d});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(t.params.id,o,d,f)),o&&d&&f&&(i(""),m(""),p(""),n.push("/myrecipes"))},children:[k&&Object(u.jsx)(ae,{}),R&&Object(u.jsx)(se,{variant:"danger",children:R}),U&&Object(u.jsx)(se,{variant:"danger",children:U}),Object(u.jsxs)(b.a.Group,{controlId:"title",children:[Object(u.jsx)(b.a.Label,{children:"Title"}),Object(u.jsx)(b.a.Control,{type:"title",placeholder:"Enter the title",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)(b.a.Group,{controlId:"content",children:[Object(u.jsx)(b.a.Label,{children:"Content"}),Object(u.jsx)(b.a.Control,{as:"textarea",placeholder:"Enter the content",rows:4,value:d,onChange:function(e){return p(e.target.value)}})]}),d&&Object(u.jsxs)(H.a,{children:[Object(u.jsx)(H.a.Header,{children:"Recipe Preview"}),Object(u.jsx)(H.a.Body,{children:Object(u.jsx)(je.a,{children:d})})]}),Object(u.jsxs)(b.a.Group,{controlId:"content",children:[Object(u.jsx)(b.a.Label,{children:"Category"}),Object(u.jsx)(b.a.Control,{type:"content",placeholder:"Enter the Category",value:f,onChange:function(e){return m(e.target.value)}})]}),L&&Object(u.jsx)(ae,{size:50}),Object(u.jsx)(A.a,{variant:"primary",type:"submit",children:"Update Recipe"}),Object(u.jsx)(A.a,{className:"mx-2",variant:"danger",onClick:function(){return e=t.params.id,window.confirm("Are you sure?")&&I(ne(e)),void n.push("/myrecipes");var e},children:"Delete Recipe"})]})}),Object(u.jsxs)(H.a.Footer,{className:"text-muted",children:["Updated on - ",C.substring(0,10)]})]})})},be=(n(268),function(e){e.location;var t=e.history,n=Object(r.useState)(""),a=Object(s.a)(n,2),c=a[0],o=a[1],j=Object(r.useState)(""),d=Object(s.a)(j,2),p=d[0],h=d[1],O=Object(r.useState)(""),f=Object(s.a)(O,2),m=f[0],E=f[1],C=Object(r.useState)(""),S=Object(s.a)(C,2),I=S[0],w=S[1],k=Object(x.b)(),U=Object(x.c)((function(e){return e.userLogin})).userInfo,N=Object(x.c)((function(e){return e.userUpdate})),P=N.loading,D=N.error,G=N.success;Object(r.useEffect)((function(){U?(o(U.name),h(U.email)):t.push("/")}),[t,U]);return Object(u.jsx)(F,{title:"EDIT ACCOUNT",children:Object(u.jsx)("div",{children:Object(u.jsxs)(i.a,{className:"accountContainer",children:[Object(u.jsx)(l.a,{md:6,children:Object(u.jsxs)(b.a,{onSubmit:function(e){var t;e.preventDefault(),m===I&&k((t={name:c,email:p,password:m},function(){var e=Object(v.a)(g.a.mark((function e(n,r){var a,c,s,o,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:L}),a=r(),c=a.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,T.a.post("/api/users/account",t,s);case 6:o=e.sent,i=o.data,n({type:R,payload:i}),n({type:y,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:_,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:[P&&Object(u.jsx)(ae,{}),G&&Object(u.jsx)(se,{variant:"success",children:"Updated Successfully"}),D&&Object(u.jsx)(se,{variant:"danger",children:D}),Object(u.jsxs)(b.a.Group,{controlId:"name",children:[Object(u.jsx)(b.a.Label,{children:"Name"}),Object(u.jsx)(b.a.Control,{type:"text",placeholder:"Enter Name",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)(b.a.Group,{controlId:"email",children:[Object(u.jsx)(b.a.Label,{children:"Email Address"}),Object(u.jsx)(b.a.Control,{type:"email",placeholder:"Enter Email",value:p,onChange:function(e){return h(e.target.value)}})]}),Object(u.jsxs)(b.a.Group,{controlId:"password",children:[Object(u.jsx)(b.a.Label,{children:"Password"}),Object(u.jsx)(b.a.Control,{type:"password",placeholder:"Enter Password",value:m,onChange:function(e){return E(e.target.value)}})]}),Object(u.jsxs)(b.a.Group,{controlId:"confirmPassword",children:[Object(u.jsx)(b.a.Label,{children:"Confirm Password"}),Object(u.jsx)(b.a.Control,{type:"password",placeholder:"Confirm Password",value:I,onChange:function(e){return w(e.target.value)}})]})," ",Object(u.jsx)(A.a,{type:"submit",varient:"primary",children:"Update"})]})}),Object(u.jsx)(l.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"}})]})})})}),he=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1];return console.log(n),Object(u.jsxs)(G.a,{children:[Object(u.jsx)(P,{setSearch:a}),Object(u.jsxs)("main",{children:[Object(u.jsx)(B.a,{path:"/",component:D,exact:!0}),Object(u.jsx)(B.a,{path:"/login",component:ie,exact:!0}),Object(u.jsx)(B.a,{path:"/account",component:be,exact:!0}),Object(u.jsx)(B.a,{path:"/register",component:le,exact:!0}),Object(u.jsx)(B.a,{path:"/createrecipe",component:de,exact:!0}),Object(u.jsx)(B.a,{path:"/recipe/:id",component:pe,exact:!0}),Object(u.jsx)(B.a,{path:"/myrecipes",component:function(){return Object(u.jsx)(oe,{search:n})}})]}),Object(u.jsx)(j,{})]})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,285)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},xe=n(51),fe=n(125),ge=n(126),ve=Object(xe.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{loading:!0};case y:return{loading:!1,userInfo:t.payload};case E:return{loading:!1,error:t.payload};case C:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case I:return{loading:!1,userInfo:t.payload};case w:return{loading:!1,error:t.payload};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{loading:!0};case R:return{loading:!1,userInfo:t.payload,success:!0};case _:return{loading:!1,error:t.payload,success:!1};default:return e}},recipeList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{recipes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return{loading:!0};case W:return{loading:!1,recipes:t.payload};case q:return{loading:!1,error:t.payload};default:return e}},recipeCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!0};case K:return{loading:!1,success:!0};case V:return{loading:!1,error:t.payload};default:return e}},recipeUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return{loading:!0};case Y:return{loading:!1,success:!0};case Z:return{loading:!1,error:t.payload,success:!1};default:return e}},recipeDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return{loading:!0};case ee:return{loading:!1,success:!0};case te:return{loading:!1,error:t.payload,success:!1};default:return e}}}),me={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},ye=[fe.a],Ee=Object(xe.createStore)(ve,me,Object(ge.composeWithDevTools)(xe.applyMiddleware.apply(void 0,ye)));c.a.render(Object(u.jsx)(x.a,{store:Ee,children:Object(u.jsx)(he,{})}),document.getElementById("root")),Oe()}},[[269,1,2]]]);
//# sourceMappingURL=main.c0f568a3.chunk.js.map