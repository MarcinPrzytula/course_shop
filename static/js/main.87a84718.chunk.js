(this.webpackJsonpcourse_shop=this.webpackJsonpcourse_shop||[]).push([[0],{25:function(e,t,n){},30:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(19),s=n.n(i),a=n(12),o=n(3),u=n(23),d=n(17),l=n(56),p="ADD_USER",j="CHANGE_LOGIN_STATUS",h="BUY_COURSE",g="ADD_COURSE_TO_SHOPPING_CART",m="REMOVE_COURSE_FROM_SHOPPING_CART",b=function(e,t){return{type:j,payload:{id:e,logged:t}}},f=function(e,t){return e.map((function(e){if(e.id!==t.payload.id)return e.logged=!1,e;var n=t.payload.logged;return{id:e.id,login:e.login,password:e.password,purchasedCourses:e.purchasedCourses,shoppingCart:e.shoppingCart,logged:n}}))},O=function(e,t){var n=e.find((function(e){return!0===e.logged})),r=n.purchasedCourses.find((function(e){return e===t.payload}));return e.map((function(e){if(e.id!==n.id||r)return e;var c=e.id,i=e.login,s=e.password,a=e.logged;return{id:c,login:i,password:s,shoppingCart:[],purchasedCourses:[].concat(Object(d.a)(n.purchasedCourses),Object(d.a)(t.payload)),logged:a}}))},x=function(e,t){var n=e.find((function(e){return!0===e.logged})),r=n.shoppingCart.find((function(e){return e===t.payload}));return e.map((function(e){if(e.id!==n.id||r)return e;var c=e.id,i=e.login,s=e.password,a=e.logged;return{id:c,login:i,password:s,purchasedCourses:e.purchasedCourses,shoppingCart:[].concat(Object(d.a)(n.shoppingCart),[t.payload]),logged:a}}))},v=function(e,t){var n=e.find((function(e){return!0===e.logged})),r=n.shoppingCart.filter((function(e){return e!==t.payload}));return e.map((function(e){if(e.id!==n.id)return e;var t=e.id,c=e.login,i=e.password,s=e.logged;return{id:t,login:c,password:i,purchasedCourses:e.purchasedCourses,shoppingCart:Object(d.a)(r),logged:s}}))},_=Object(u.a)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:Object(l.a)(),login:"admin",password:"admin",purchasedCourses:[],shoppingCart:[],logged:!1}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return[].concat(Object(d.a)(e),[t.payload]);case j:return f(e,t);case h:return O(e,t);case g:return x(e,t);case m:return v(e,t);default:return console.warn("Nie mamy akcji typu ".concat(t.type)),e}}}),y=Object(u.b)(_),w=n(4),C=(n(30),n(1)),N=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{children:"Hello! My name is Marcin. I started learning front-end in January 2019 with HTML and CSS. This project is my most extensive project, it shows what I have learned so far. The project is being developed, Currently, I am not focusing on the appearance but on the functionalities."})})},S=(n(46),n(25),function(e){var t=e.title,n=e.img,r=e.price,c=e.authors,i=e.id,s=Object(o.c)((function(e){return e.users})),a=Object(o.b)();return Object(C.jsxs)("div",{className:"product",children:[Object(C.jsx)("div",{className:"product__video"}),Object(C.jsx)("div",{className:"product__title",children:Object(C.jsx)("span",{children:t})}),Object(C.jsx)("div",{className:"product__img",children:Object(C.jsx)("img",{src:n,alt:"product "})}),Object(C.jsxs)("div",{className:"product__price",children:[Object(C.jsx)("span",{children:"Price: "}),Object(C.jsx)("span",{children:r})]}),Object(C.jsxs)("div",{className:"product__author",children:[Object(C.jsx)("span",{children:"Authors: "}),Object(C.jsx)("span",{children:c})]}),function(){var e=s.find((function(e){return!0===e.logged}));if(e){var t=e.shoppingCart.find((function(e){return e===i})),n=e.purchasedCourses.find((function(e){return e===i}));return t?"The course has been added to the cart":n?"You already have this course":Object(C.jsx)("button",{onClick:function(){a({type:g,payload:i})},children:Object(C.jsx)("span",{children:"Add the product to your cart"})})}return"Log in if you want to buy a course"}()]})}),L=[{authors:["Marcin 1"],id:Object(l.a)(),img:"https://dummyimage.com/200x200/000/fff.jpg&text=cours",price:19.99,title:"Kurs 1"},{authors:["Marcin 2"],id:Object(l.a)(),img:"https://dummyimage.com/200x200/000/fff.jpg&text=cours",price:29.99,title:"Kurs 2"},{authors:["Marcin 3"],id:Object(l.a)(),img:"https://dummyimage.com/200x200/000/fff.jpg&text=cours",price:39.99,title:"Kurs 3"},{authors:["Marcin 4"],id:Object(l.a)(),img:"https://dummyimage.com/200x200/000/fff.jpg&text=cours",price:49.99,title:"Kurs 4"},{authors:["Marcin 5"],id:Object(l.a)(),img:"https://dummyimage.com/200x200/000/fff.jpg&text=cours",price:59.99,title:"Kurs 5"}],P=function(){Object(o.c)((function(e){return e.users}));var e=L.map((function(e){var t=e.authors,n=e.img,r=e.price,c=e.title,i=e.id;return Object(C.jsx)(S,{id:i,authors:t,img:n,title:c,price:r},i)}));return Object(C.jsx)("div",{className:"productsList",children:e})},E=n(36),U=n(11);n(47);var k=function(){var e=Object(o.c)((function(e){return e.users})),t=Object(o.b)(),n=Object(w.f)(),c={loggedUser:"",login:""},i=Object(r.useState)(!1),s=Object(E.a)(i,2),a=s[0],u=s[1],d=Object(C.jsx)(U.c,{initialValues:{formLogin:"",formPassword:""},validate:function(e){return function(e){var t={};return e.formLogin.length<3?t.formLogin="Enter login (minimum 3 characters)":e.formPassword.length<4&&(t.formPassword="Enter password (minimum 4 characters)"),t}(e)},onSubmit:function(r,i){i.setSubmitting;var s=i.resetForm;!function(r){var i=r.formLogin,s=r.formPassword,a=e.find((function(e){var t=e.login,n=e.password;return t===i&&n===s}));if(r&&a)a.logged=!0,c.login="successful",c.loggedUser=a,t(b(c.loggedUser.id,c.loggedUser.logged)),n.push("/user_panel");else{if(!r||void 0!==a)return console.log("empty execution");c.login="failed",c.loggedUser=a,u(!0)}}(r),s()},children:function(e){var t=e.handleSubmit;return Object(C.jsxs)("form",{onSubmit:t,children:[Object(C.jsxs)("div",{className:"login",children:[a?Object(C.jsx)("div",{children:"The wrong username or password was entered"}):null,Object(C.jsx)("div",{children:Object(C.jsx)(U.a,{name:"newError",component:"div"})}),Object(C.jsx)("div",{children:Object(C.jsx)(U.a,{name:"formLogin",component:"div"})}),Object(C.jsx)("span",{children:"Login"}),Object(C.jsx)(U.b,{name:"formLogin",placeholder:"login"})]}),Object(C.jsxs)("div",{className:"password",children:[Object(C.jsx)(U.a,{name:"formPassword",component:"div"}),Object(C.jsx)("span",{children:"Password"}),Object(C.jsx)(U.b,{placeholder:"password",name:"formPassword",type:"password"})]}),Object(C.jsx)("button",{type:"submit",children:"Submit"})]})}});return Object(C.jsx)(C.Fragment,{children:d})};n(49);var M=function(){var e=Object(o.c)((function(e){return e.users})),t=Object(o.b)(),n=function(e){t(function(e){var t=e.id,n=void 0===t?Object(l.a)():t,r=e.login,c=e.password,i=e.purchasedCourses,s=void 0===i?[]:i,a=e.shoppingCart,o=void 0===a?[]:a,u=e.logged;return{type:p,payload:{id:n,login:r,password:c,purchasedCourses:s,shoppingCart:o,logged:void 0!==u&&u}}}(e)),alert("Congratulations! An account has been created, your login is: ".concat(e.login,", remember your password and never give it to anyone!"))};return Object(C.jsx)(U.c,{initialValues:{login:"",password:""},validate:function(t){var n={},r=e.filter((function(e){return e.login===t.login}));return t.login.length<3?n.login="Enter login (minimum 3 characters)":t.password.length<4?n.password="Enter password (minimum 4 characters)":r.length&&(n.login="Username is taken"),n},onSubmit:function(e,t){t.setSubmitting;var r=t.resetForm;n(e),r()},children:function(e){var t=e.handleSubmit;return Object(C.jsxs)("form",{onSubmit:t,children:[Object(C.jsxs)("div",{className:"login",children:[Object(C.jsx)(U.a,{name:"login",component:"div"}),Object(C.jsx)("span",{children:"Login"}),Object(C.jsx)(U.b,{name:"login",placeholder:"login"})]}),Object(C.jsxs)("div",{className:"password",children:[Object(C.jsx)(U.a,{name:"password",component:"div"}),Object(C.jsx)("span",{children:"Password"}),Object(C.jsx)(U.b,{placeholder:"password",name:"password",type:"password"})]}),Object(C.jsx)("button",{type:"submit",children:"Submit"})]})}})},A=function(e){var t=e.title,n=e.img,r=e.price,c=e.authors;e.id;return Object(C.jsxs)("div",{className:"product",children:[Object(C.jsx)("div",{className:"product__title",children:Object(C.jsx)("span",{children:t})}),Object(C.jsx)("div",{className:"product__img",children:Object(C.jsx)("img",{src:n,alt:"product "})}),Object(C.jsxs)("div",{className:"product__price",children:[Object(C.jsx)("span",{children:"Price: "}),Object(C.jsx)("span",{children:r})]}),Object(C.jsxs)("div",{className:"product__author",children:[Object(C.jsx)("span",{children:"Authors: "}),Object(C.jsx)("span",{children:c})]})]})},F=(n(50),function(){var e=Object(o.c)((function(e){return e.users})),t=e.find((function(e){return!0===e.logged})),n=null,r="Log in to view your courses";if(t){var c=(n=L.filter((function(e){return t.purchasedCourses.find((function(t){return t===e.id}))}))).map((function(e){var t=e.authors,n=e.img,r=e.price,c=e.title,i=e.id;return Object(C.jsx)(A,{id:i,authors:t,img:n,title:c,price:r},i)}));r=n.length>0?c:"You are logged in as ".concat(t.login,"  but you don't have any courses")}return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"userPanel_productList",children:r})})}),R=(n(51),function(e){var t=e.title,n=e.img,r=e.price,c=e.authors,i=e.id,s=Object(o.c)((function(e){return e.users})),a=Object(o.b)(),u=s.find((function(e){return!0===e.logged}));return Object(C.jsxs)("div",{className:"product",children:[Object(C.jsx)("div",{className:"product__video"}),Object(C.jsx)("div",{className:"product__title",children:Object(C.jsx)("span",{children:t})}),Object(C.jsx)("div",{className:"product__img",children:Object(C.jsx)("img",{src:n,alt:"product "})}),Object(C.jsxs)("div",{className:"product__price",children:[Object(C.jsx)("span",{children:"Price: "}),Object(C.jsx)("span",{children:r})]}),Object(C.jsxs)("div",{className:"product__author",children:[Object(C.jsx)("span",{children:"Authors: "}),Object(C.jsx)("span",{children:c})]}),u?Object(C.jsx)("button",{onClick:function(){a({type:m,payload:i})},children:Object(C.jsx)("span",{children:"Remove from cart"})}):"Log in if you want to buy a course"]})}),T=function(){var e=Object(o.c)((function(e){return e.users})),t=Object(w.f)();return function(){var n=e.find((function(e){return!0===e.logged})),r=[];return n&&(r=L.filter((function(e){return n.shoppingCart.find((function(t){return t===e.id}))}))),r.length>0&&n?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"shoppingCart_productList",children:r.map((function(e){var t=e.authors,n=e.img,r=e.price,c=e.title,i=e.id;return Object(C.jsx)(R,{id:i,authors:t,img:n,title:c,price:r},i)}))}),Object(C.jsx)("button",{onClick:function(){t.push("/transaction_form")},children:"Summary and payment"})]}):0==r.length&&n?" You haven't added any product to your cart yet":"Log in if you want to have access to the product basket"}()},I=function(){var e=Object(o.c)((function(e){return e.users})),t=Object(w.f)(),n=Object(o.b)(),r=e.find((function(e){return!0===e.logged})),c=null,i=null;return r&&(c=L.filter((function(e){return r.shoppingCart.find((function(t){return t===e.id}))})),i=c.map((function(e){return e.id}))),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{children:Object(C.jsxs)("span",{children:["You want to purchase a total of"," ",r?r.shoppingCart.length:0," ","courses"]})}),Object(C.jsxs)("button",{onClick:r?function(){n({type:h,payload:i}),t.push("/user_panel")}:null,children:[" ","Purchase and pay"]})]})},H=[{name:N,path:"/",exact:!0},{name:P,path:"/products"},{name:k,path:"/login"},{name:M,path:"/registration"},{name:F,path:"/user_panel"},{name:T,path:"/shopping_cart"},{name:I,path:"/transaction_form"},{name:function(){return Object(C.jsx)("div",{children:"Nie ma takiej strony"})}}],K=function(){var e=H.map((function(e,t){var n=e.path,r=e.exact,c=e.name;return Object(C.jsx)(w.a,{path:n,exact:r,component:c},t)}));return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"page",children:Object(C.jsx)(w.c,{children:e})})})},Y=(n(52),[{name:"Main page",path:"course_shop/",exact:!0},{name:"Products list",path:"course_shop/products"},{name:"User Panel",path:"course_shop/user_panel"},{name:"Shopping Cart",path:"course_shop/shopping_cart"}].map((function(e){return Object(C.jsx)("li",{className:"navigation__item-wraper",children:Object(C.jsx)(a.b,{className:"navigation__item",to:e.path,exact:!!e.exact&&e.exact,children:e.name})},e.name)}))),D=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("nav",{className:"navigation",children:[Object(C.jsx)("button",{className:"navigation__burger",onClick:function(){document.querySelector(".navigation__list").classList.toggle("navigation__activeBurger")},children:Object(C.jsx)("span",{className:"fa fa-bars"})}),Object(C.jsx)("ul",{className:"navigation__list",children:Y})]})})},G=(n(53),[{name:"Log in",path:"course_shop/login"},{name:"Registration",path:"course_shop/registration"}].map((function(e){return Object(C.jsx)("li",{className:"panel__item-wraper",children:Object(C.jsx)(a.b,{className:"panel__item",to:e.path,exact:!!e.exact&&e.exact,children:e.name})},e.name)}))),B=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.users})),n=t.filter((function(e){return!0===e.logged}));return Object(C.jsx)("nav",{className:"panel",children:n.length>0?Object(C.jsx)("button",{onClick:function(){e(b(n[0].id,!1))},children:"Log out"}):Object(C.jsx)("ul",{className:"panel__list",children:G})})};n(54);var J=function(){return Object(C.jsx)(o.a,{store:y,children:Object(C.jsx)(a.a,{children:Object(C.jsxs)("div",{className:"app_wrapper",children:[Object(C.jsxs)("div",{className:"menu_wrapper",children:[Object(C.jsx)(D,{}),Object(C.jsx)(B,{})]}),Object(C.jsx)(K,{})]})})})};s.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(J,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.87a84718.chunk.js.map