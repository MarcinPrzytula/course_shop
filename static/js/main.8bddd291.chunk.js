(this.webpackJsonpcourse_shop=this.webpackJsonpcourse_shop||[]).push([[0],{145:function(e,t,n){},163:function(e,t,n){var a={"./advanced_english.jpg":65,"./advanced_javascript.jpg":164,"./advanced_maths.jpg":165,"./basic_english.jpg":166};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=163},164:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/advanced_javascript.5225a953.jpg"},165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/advanced_maths.c8335d26.jpg"},166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/basic_english.5f715789.jpg"},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){},290:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(39),s=n.n(c),i=n(16),o=n(3),u=n(41),l=n(109),d=n(5),j=n(33),p=n(9),h=n.n(p),m=n(22),b=n(17),f=n.n(b),O="FETCH_USER_DATA",g="ADD_USER",v="LOGIN_USER",x="BUY_COURSE",_="ADD_COURSE_TO_SHOPPING_CART",y="REMOVE_COURSE_FROM_SHOPPING_CART",N="SELECT_COURSE",C=function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/user"),e.next=3,f()({method:"GET",withCredentials:!0,url:n});case 3:a=e.sent,t({type:O,payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(m.a)(h.a.mark((function t(n){var a,r,c,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.login,r=e.password,c="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/login"),t.next=4,f()({method:"POST",data:{username:a,password:r},withCredentials:!0,url:c}).then((function(e){return"Invalid username or password"!==e.data?e:alert("Invalid username or password")}));case 4:(s=t.sent)&&n({type:v,payload:s.data});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/user/").concat(t._id),e.next=3,f.a.put(n,t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t){if(e.purchasedCourses.find((function(e){return e===t.payload})))return e;var n=Object(j.a)({},e);return n.purchasedCourses=[].concat(Object(d.a)(e.purchasedCourses),Object(d.a)(t.payload)),n.shoppingCart=[],k(n),n},E=function(e,t){var n=Object(j.a)({},e);return n.selectedCourse=t.payload,k(n),n},L=function(e,t){if(e.shoppingCart.find((function(e){return e===t.payload})))return e;var n=Object(j.a)({},e);return n.shoppingCart=[].concat(Object(d.a)(e.shoppingCart),[t.payload]),k(n),n},P=function(e,t){var n=e.shoppingCart.filter((function(e){return e!==t.payload})),a=Object(j.a)({},e);return a.shoppingCart=Object(d.a)(n),k(a),a},R="ADD_RATING",F="FETCH_COURSES_DATA",T="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/courses"),A=function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/course/").concat(t._id),e.next=3,f.a.put(n,t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e,t){return e.map((function(e){if(e._id!==t.payload.courseId)return e;var n=e.rating.filter((function(e){return e.userLogin===t.payload.userLogin}));if(console.log(n),n.length>0)return e;var a=Object(j.a)({},e),r={userLogin:t.payload.userLogin,rating:t.payload.rating,comment:t.payload.comment.formValue};return a.rating=[].concat(Object(d.a)(e.rating),[r]),A(a),a}))},U=function(e,t){return t.payload},V=Object(u.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:case g:case v:return t.payload;case x:return S(e,t);case _:return L(e,t);case y:return P(e,t);case N:return E(e,t)}return e},courses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return I(e,t);case F:return U(0,t);default:return e}}}),D=Object(u.c)(V,Object(u.a)(l.a)),M=n(6),H=n(11),Y=(n(145),n(110)),G=n.n(Y),B=n(30),q=n(23),J=n(0),W=function(e){var t=e.config,n=Object(a.useRef)(null),r=t.info,c=t.optionalClickEvent,s=t.classes,i=t.icon;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("div",{ref:n,className:"product__status-course",children:r}),Object(J.jsx)("button",{onClick:c,className:s,onMouseOver:function(){n.current.classList.add("product__status-course--active")},onMouseOut:function(){n.current.classList.remove("product__status-course--active")},children:Object(J.jsx)(B.a,{icon:"faCartPlus"===i?q.a:"faCheck"===i?q.c:"faPlayCircle"===i?q.d:null})})]})},X=n(51),$=n.n(X),z=function(e){var t=e.actuallyCourse,n=e.handleModal,a=0,r=0;return t.rating.forEach((function(e){a+=e.rating})),r=(a/t.rating.length).toFixed(1),isNaN(r)&&(r=0),Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)("button",{className:"product__rating-stars",onClick:n,children:[Object(J.jsx)($.a,{rating:Number(r),starRatedColor:"blue",starEmptyColor:"white",numberOfStars:5,name:"rating",starDimension:"30px",starSpacing:"5px"}),r,"/5 (",t.rating.length,")"]})})},K=n(8),Q=function(e){var t=e.user,n=e.checkIfTheCourseIsBought,a=e.checkIfTheUserHasRated,r=e.rating,c=e.setRating,s=e._id,i=Object(o.b)();return t&&n&&!a?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("div",{className:"product__rating",children:[Object(J.jsx)("div",{className:"product__title",children:"Ratio:"}),Object(J.jsx)($.a,{rating:r,starRatedColor:"blue",changeRating:function(e){c(e)},numberOfStars:5,name:"rating",starDimension:"30px",starSpacing:"5px"})]}),Object(J.jsx)("div",{className:"product__comment",children:Object(J.jsx)(K.c,{initialValues:{formValue:""},validate:function(e){var t={};return e.formValue.length<10?t.formValue="Enter comment (minimum 10 characters)":0===r&&(t.formValue="Rate a course from 1 to 5"),t},onSubmit:function(e,n){n.setSubmitting;var a=n.resetForm;i(function(e,t,n,a){return{type:R,payload:{courseId:e,userLogin:t,rating:n,comment:a}}}(s,t.login,r,e)),a()},children:function(e){var t=e.handleSubmit;return Object(J.jsxs)("form",{onSubmit:t,children:[Object(J.jsxs)("div",{className:"formValue",children:[Object(J.jsx)("div",{className:"product__title",children:"Comment:"}),Object(J.jsx)(K.a,{name:"formValue",component:"div"}),Object(J.jsx)(K.b,{className:"product__formInput",name:"formValue",placeholder:"add your opinion",component:"textarea"})]}),Object(J.jsx)("button",{className:"product__button",type:"submit",children:"Submit"})]})}})})]}):t&&n&&a?Object(J.jsxs)("div",{className:"modal__user-rate",children:["You have rated this course on: ",a.rating]}):Object(J.jsx)("div",{className:"modal__user-rate",children:"Buy this course if you want add rate"})},Z=(n(82),function(e){var t=e.title,r=e.price,c=e.authors,s=e._id,i=e.category,u=Object(M.f)(),l=Object(o.b)(),d=Object(a.useState)(0),j=Object(H.a)(d,2),p=j[0],h=j[1],m=Object(o.c)((function(e){return e})),b=m.user,f=m.courses,O=Object(a.useState)(!1),g=Object(H.a)(O,2),v=g[0],x=g[1],y=f.find((function(e){return e._id===s})),C="",w="",k="",S={info:null,optionalClickEvent:null,classes:null,icon:null};b?(k=b.shoppingCart.find((function(e){return e===s})),w=b.purchasedCourses.find((function(e){return e===s})),C=y.rating.find((function(e){return e.userLogin===b.login})),w&&window.location.href.includes("user_panel")?S={info:"Play course",optionalClickEvent:function(){l({type:N,payload:s}),u.push("/selected_product")},classes:"product__icon-course-status-in-user-panel",icon:"faPlayCircle"}:w?S={info:"You bought this course",optionalClickEvent:null,classes:"product__icon-course-status-buyed",icon:"faCheck"}:k?S={info:"The course is already in the basket",optionalClickEvent:null,classes:"product__icon-course-status-add-to-cart product__icon-course-status-add-to-cart--no-active",icon:"faCartPlus"}:k||(S={info:"Click if you want add to cart",optionalClickEvent:function(){l({type:_,payload:s})},classes:"product__icon-course-status-add-to-cart",icon:"faCartPlus"})):S={info:"Log in if you want to buy a course",optionalClickEvent:null,classes:"product__icon-course-status-add-to-cart product__icon-course-status-add-to-cart--no-active",icon:"faCartPlus"};var E=function(e){var t={};return e.keys().map((function(n){return t[n.replace("./","")]=e(n)})),t}(n(163)),L=Object.keys(E).find((function(e){return e.includes(t.replace(" ","_").toLowerCase())}));return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("div",{className:"product",children:[Object(J.jsx)("div",{className:"product__title",children:Object(J.jsx)("span",{children:t})}),Object(J.jsx)("div",{className:"product__category",children:Object(J.jsxs)("span",{children:["(",i,")"]})}),Object(J.jsx)("div",{className:"product__imgContainer",children:Object(J.jsx)("img",{src:E[L].default,alt:"product "})}),Object(J.jsxs)("div",{className:"product__price",children:[Object(J.jsx)("span",{children:"Price: "}),Object(J.jsx)("span",{children:r})]}),Object(J.jsxs)("div",{className:"product__authors",children:[Object(J.jsx)("span",{children:"Authors: "}),Object(J.jsx)("span",{children:c})]}),Object(J.jsx)("div",{className:"product__rating",children:Object(J.jsx)(z,{actuallyCourse:y,handleModal:function(){x(!0)}})}),Object(J.jsx)("div",{className:"product__status",children:Object(J.jsx)(W,{config:S})})]}),Object(J.jsxs)(G.a,{ariaHideApp:!1,className:"modal",isOpen:v,children:[Object(J.jsx)("button",{className:"product__button product__button-right",onClick:function(){return x(!1)},children:"X"}),Object(J.jsx)(Q,{user:b,checkIfTheCourseIsBought:w,checkIfTheUserHasRated:C,rating:p,setRating:h,_id:s}),Object(J.jsx)("div",{className:"modal__ratings-list",children:y.rating.length>0?y.rating.map((function(e){var t=e.rating,n=e.comment,a=e.userLogin;return Object(J.jsxs)("div",{className:"modal__rating",children:[Object(J.jsxs)("div",{children:["author: ",a," "]}),Object(J.jsxs)("div",{children:["comment: ",n]}),Object(J.jsxs)("div",{children:["rating: ",t]})]},a)})):Object(J.jsx)("div",{className:"modal__rating",children:"This course has not been rated yet"})})]})]})}),ee=function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(C()),e(function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"GET",withCredentials:!0,url:T});case 2:n=e.sent,t({type:F,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(o.c)((function(e){return e.courses})),n=Object(a.useState)(""),r=Object(H.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),u=Object(H.a)(i,2),l=u[0],d=u[1],j=t.map((function(e){var t=e.authors,n=e.price,a=e.title,r=e._id,c=e.rating,s=e.category;return Object(J.jsx)(Z,{_id:r,authors:t,title:a,price:n,rating:c,category:s},r)})),p=Object(a.useState)(t.map((function(e){var t=e.authors,n=e.price,a=e.title,r=e._id,c=e.rating,s=e.category;return Object(J.jsx)(Z,{_id:r,authors:t,title:a,price:n,rating:c,category:s},r)}))),b=Object(H.a)(p,2),O=b[0],g=b[1];return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("input",{type:"text",className:"productsList__searchInput",onChange:function(e){return function(e){var n=t.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())}));g(n.map((function(e){var t=e.authors,n=e.img,a=e.price,r=e.title,c=e._id,s=e.rating,i=e.category;return Object(J.jsx)(Z,{_id:c,authors:t,img:n,title:r,price:a,rating:s,category:i},c)})))}(e.target.value)},placeholder:"Search for names.."}),Object(J.jsx)("button",{className:"productsList__button",onClick:function(){return s(!c)},children:c?"Close category list":"Open category list"}),c?function(){var e=["maths","programming","languages","all"].map((function(e){return Object(J.jsx)("li",{children:Object(J.jsx)("span",{className:l===e?"productsList__categoryContainer active":null,onClick:function(){return function(e){d(e);var n=t.filter((function(t){return t.category===e}));"all"===e&&(n=t),g(n.map((function(e){var t=e.authors,n=e.img,a=e.price,r=e.title,c=e._id,s=e.rating,i=e.category;return Object(J.jsx)(Z,{_id:c,authors:t,img:n,title:r,price:a,rating:s,category:i},c)})))}(e)},children:e.charAt(0).toUpperCase()+e.slice(1)})},e)}));return Object(J.jsx)("div",{className:"productsList__categoryContainer",children:Object(J.jsx)("ul",{children:e})})}():null,Object(J.jsx)("div",{className:"productsList",children:j.length>0?O.length>0?O:j:Object(J.jsxs)("div",{className:"productsList__loader_container",children:[Object(J.jsx)("span",{children:"LOADING PAGE"}),Object(J.jsx)("div",{className:"productsList__loader"})]})})]})},te=n(114),ne=n.n(te),ae=n.p+"static/media/vid1.17cf6613.mp4",re=function(){var e=Object(o.c)((function(e){return e})),t=e.user,n=e.courses.find((function(e){return e._id===t.selectedCourse})),a=n.title,r=n.authors;return Object(J.jsxs)("div",{className:"container",children:[Object(J.jsxs)("span",{children:["You are currently viewing the ",a," course by"," ",r," "]}),Object(J.jsx)("div",{className:"product__vid",children:Object(J.jsx)(ne.a,{className:"react-player fixed-bottom",url:ae,width:"100%",height:"100%",controls:!0})}),Object(J.jsx)("div",{className:"product__author"})]})};n(185);var ce=function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(C())}),[e]),Object(M.f)();var t=Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("div",{className:"panel__user-info",children:Object(J.jsx)("span",{children:"Log in to your account!"})}),Object(J.jsx)(K.c,{initialValues:{login:"",password:""},validate:function(e){return function(e){var t=e.login,n=e.password,a={};return t.length<3?a.formLogin="Enter login (minimum 3 characters)":n.length<4&&(a.formPassword="Enter password (minimum 4 characters)"),a}(e)},onSubmit:function(t,n){n.setSubmitting;var a=n.resetForm;e(w(t)),a()},children:function(e){var t=e.handleSubmit;return Object(J.jsxs)("form",{onSubmit:t,children:[Object(J.jsxs)("div",{className:"login",children:[Object(J.jsx)("div",{className:"loginPage__loginWrapper",children:Object(J.jsx)(K.a,{name:"login",component:"div"})}),Object(J.jsx)("span",{children:"Login"}),Object(J.jsx)(K.b,{className:"loginPage__input",name:"login",placeholder:"login"})]}),Object(J.jsxs)("div",{className:"password",children:[Object(J.jsx)(K.a,{name:"password",component:"div"}),Object(J.jsx)("span",{children:"Password"}),Object(J.jsx)(K.b,{className:"loginPage__input",placeholder:"password",name:"password",type:"password"})]}),Object(J.jsx)("button",{className:"loginPage__button",type:"submit",children:"Submit"})]})}})]});return Object(J.jsx)(J.Fragment,{children:t})};n(186);var se=function(){Object(M.f)();var e=Object(o.c)((function(e){return e})),t=(e.user,e.courses,Object(o.b)()),n=function(e){t(function(e){return function(){var t=Object(m.a)(h.a.mark((function t(n){var a,r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.login,r=e.password,c="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/register"),f()({method:"POST",data:{username:a,password:r},withCredentials:!0,url:c}).then((function(t){return"User Already Exsists"!==t.data?(alert("Congratulations! An account has been created, your login is: ".concat(a,", remember your password and never give it to anyone!")),n(w(e)),t.data):(alert("User Already Exsists"),t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("div",{className:"registrationPage__user-info",children:Object(J.jsx)("span",{children:"Register and start learning!"})}),Object(J.jsx)(K.c,{initialValues:{login:"",password:""},validate:function(e){var t={};return e.login.length<3?t.login="Enter login (minimum 3 characters)":e.password.length<4&&(t.password="Enter password (minimum 4 characters)"),t},onSubmit:function(e,t){var a=t.resetForm;n(e),a()},children:function(e){var t=e.handleSubmit;return Object(J.jsxs)("form",{onSubmit:t,children:[Object(J.jsxs)("div",{className:"login",children:[Object(J.jsx)(K.a,{name:"login",component:"div"}),Object(J.jsx)("span",{children:"Login"}),Object(J.jsx)(K.b,{className:"registrationPage__input",name:"login",placeholder:"login"})]}),Object(J.jsxs)("div",{className:"password",children:[Object(J.jsx)(K.a,{name:"password",component:"div"}),Object(J.jsx)("span",{children:"Password"}),Object(J.jsx)(K.b,{className:"registrationPage__input",placeholder:"password",name:"password",type:"password"})]}),Object(J.jsx)("button",{type:"submit",className:"registrationPage__button",children:"Submit"})]})}})]})},ie=(n(187),function(){var e=Object(o.c)((function(e){return e})),t=e.user,n=e.courses,a=null,r="Log in to view your courses";if(t){var c=(a=n.filter((function(e){return t.purchasedCourses.find((function(t){return t===e._id}))}))).map((function(e){var t=e.authors,n=e.price,a=e.title,r=e._id,c=e.category,s=e.rating;return Object(J.jsx)(Z,{_id:r,authors:t,title:a,price:n,category:c,rating:s},r)}));r=a.length>0?c:"You don't have any courses"}return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("div",{className:"userPanel_productList",children:r})})}),oe=(n(188),n(65)),ue=function(){var e=Object(o.c)((function(e){return e})),t=e.user,n=e.courses,a=Object(M.f)(),r=Object(o.b)();return function(){var e=[];return t&&(e=n.filter((function(e){return t.shoppingCart.find((function(t){return t===e._id}))}))),e.length>0&&t?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("div",{className:"shoppingCart__productsList",children:e.map((function(e){var t=e.authors,n=e.price,a=e.title,c=e._id;return Object(J.jsxs)("div",{className:"shoppingCart__product-container",children:[Object(J.jsx)("div",{className:"shoppingCart__product-img-container",children:Object(J.jsx)("img",{className:"shoppingCart__product-img",src:oe.default,alt:"product "})}),Object(J.jsxs)("div",{className:"shoppingCart__product-info",children:[Object(J.jsxs)("span",{children:["Title: ",a]}),Object(J.jsxs)("span",{children:[" Price: ",n]}),Object(J.jsxs)("span",{children:[" Author: ",t]})]}),Object(J.jsx)("button",{className:"shoppingCart__product-delete_button",onClick:function(){r({type:y,payload:c})},children:Object(J.jsx)(B.a,{icon:q.e})})]},c)}))}),Object(J.jsx)("button",{className:"shoppingCart__button",onClick:function(){a.push("/transaction_form")},children:"Summary and payment"})]}):0===e.length&&t?" You haven't added any product to your cart yet":"Log in if you want to have access to the product basket"}()},le=n(34),de=(n(287),function(){var e=Object(o.c)((function(e){return e})),t=e.user,n=e.courses,a=Object(M.f)(),r=Object(o.b)(),c=null,s=null;t&&(c=n.filter((function(e){return t.shoppingCart.find((function(t){return t===e._id}))})),s=c.map((function(e){return e._id})));var i=function(){t?(r({type:x,payload:s}),a.push("/user_panel")):a.push("/login")};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("span",{children:["You want to purchase a total of ",t?t.shoppingCart.length:0," ","courses"]}),Object(J.jsx)(K.c,{initialValues:{cardNumber:"",cardHolder:"",cardMonth:"",cardYear:"",cvv:""},onSubmit:function(e,t){i(),t.resetForm()},validationSchema:le.a().shape({cardNumber:le.b().required().min(19,"not less than 16"),cardHolder:le.b().required(),cardMonth:le.b().required(),cardYear:le.b().required(),cvv:le.b().required()}),children:function(e){var t=e.handleSubmit,n=e.handleChange,a=e.values,r=(e.errors,e.isValid);e.touched,e.handleBlur;return Object(J.jsx)("form",{onSubmit:t,children:Object(J.jsxs)("div",{className:"form",children:[Object(J.jsx)("label",{className:"label",children:"Card Number "}),Object(J.jsx)("input",{type:"text",onChange:n,value:a.cardNumber.replace(/[^\d]/g,"").replace(/\s/g,"").replace(/(\d{4})/g,"$1 ").trim(),name:"cardNumber",maxLength:"19"}),Object(J.jsx)("label",{className:"label",children:"Card Holder"}),Object(J.jsx)("input",{type:"text",name:"cardHolder",onChange:n,value:a.cardHolder}),Object(J.jsxs)("div",{className:"row",children:[Object(J.jsxs)("div",{className:"column",children:[Object(J.jsx)("label",{className:"label",children:"Expiration Date"}),Object(J.jsxs)("div",{children:[Object(J.jsxs)("select",{type:"text",placeholder:"Month",name:"cardMonth",onChange:n,value:a.cardMonth,children:[Object(J.jsx)("option",{hidden:!0,children:"Month"}),[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e,t){return Object(J.jsx)("option",{value:e,children:e<10?"0".concat(e):e},e)}))]}),Object(J.jsxs)("select",{type:"text",name:"cardYear",onChange:n,value:a.cardYear,children:[Object(J.jsx)("option",{hidden:!0,children:"Year"}),[2020,2021,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032].map((function(e,t){return Object(J.jsx)("option",{value:e,children:e},e)}))]})]})]})," ",Object(J.jsxs)("div",{className:"column",children:[Object(J.jsx)("label",{className:"label",children:"CVV"}),Object(J.jsx)("input",{type:"text",value:a.cvv,name:"cvv",onChange:n})]})]}),Object(J.jsx)("button",{type:"submit",disabled:!r,children:"Submit"})]})})}})]})}),je=[{name:ee,path:"/",exact:!0},{name:re,path:"/selected_product"},{name:ce,path:"/login"},{name:se,path:"/registration"},{name:ie,path:"/user_panel"},{name:ue,path:"/shopping_cart"},{name:de,path:"/transaction_form"},{name:function(){return Object(J.jsx)("div",{children:"Nie ma takiej strony"})}}],pe=function(){var e=je.map((function(e,t){var n=e.path,a=e.exact,r=e.name;return Object(J.jsx)(M.a,{path:n,exact:a,component:r},t)}));return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("div",{className:"page",children:Object(J.jsx)(M.c,{children:e})})})},he=(n(288),function(){var e=Object(a.useRef)(),t=Object(a.useState)(!1),n=Object(H.a)(t,2),r=n[0],c=n[1];!function(e,t){Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}(e,(function(){return c(!1)}));var s=Object(M.g)(),u=Object(o.c)((function(e){return e})),l=u.user,d=[{name:"Products list",path:"/"},{name:"User Panel",path:"/user_panel"},{name:"",path:"/shopping_cart",isShoppingCart:!0}].map((function(e){return Object(J.jsx)("li",{className:(t=e.path,s.pathname===t?"navigation__item-wraper active":"navigation__item-wraper"),children:Object(J.jsx)(i.b,{onClick:function(){return c(!1)},className:"navigation__item ",to:e.path,exact:!!e.exact&&e.exact,children:e.isShoppingCart?l&&l.shoppingCart.length>0?Object(J.jsx)("div",{className:"navigation__cart navigation__cart--active  fa-stack","data-count":l.shoppingCart.length,children:Object(J.jsx)(B.a,{icon:q.b})}):Object(J.jsx)("div",{className:"navigation__cart ",children:Object(J.jsx)(B.a,{icon:q.b})}):e.name})},e.name);var t}));return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("nav",{ref:e,className:"navigation telOnly",children:r?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("button",{className:"navigation__burger",onClick:function(){return c(!r)},children:Object(J.jsx)("span",{className:"fa fa-bars"})}),Object(J.jsx)("ul",{className:"navigation__list",children:d})]}):Object(J.jsx)("button",{className:"navigation__burger",onClick:function(){return c(!r)},children:Object(J.jsx)("span",{className:"fa fa-bars"})})}),Object(J.jsx)("nav",{className:"navigation desktopOnly",children:Object(J.jsx)("ul",{className:"navigation__list",children:d})}),Object(J.jsx)("div",{})]})}),me=(n(289),[{name:"Log in",path:"/login"},{name:"Registration",path:"/registration"}].map((function(e){return Object(J.jsx)("li",{className:"panel__item-wraper",children:Object(J.jsx)(i.b,{className:"panel__item",to:e.path,exact:!!e.exact&&e.exact,children:e.name})},e.name)}))),be="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/logout"),fe=function(){var e=Object(o.c)((function(e){return e.user})),t=Object(M.f)(),n=Object(o.b)();return Object(J.jsx)("nav",{className:"panel",children:e?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("div",{className:"panel__who-logged-in",children:Object(J.jsxs)("span",{children:["Logged in as:",Object(J.jsx)("span",{className:"panel__logged-in-nickname",children:e.login})," "]})}),Object(J.jsx)("button",{className:"panel__button",onClick:function(){f()({method:"GET",withCredentials:!0,url:be}).then((function(){n({type:O,payload:null})})),t.push("/login")},children:"Log out"})]}):Object(J.jsx)("ul",{className:"panel__list",children:me})})};n(290);var Oe=function(){return Object(J.jsx)(o.a,{store:D,children:Object(J.jsx)(i.a,{basename:"/course_shop",children:Object(J.jsxs)("div",{className:"app_wrapper",children:[Object(J.jsxs)("div",{className:"menu_wrapper",children:[Object(J.jsx)(he,{}),Object(J.jsx)(fe,{})]}),Object(J.jsx)(pe,{})]})})})};s.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(Oe,{})}),document.getElementById("root"))},65:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/advanced_english.c8dac0c1.jpg"},82:function(e,t,n){}},[[291,1,2]]]);
//# sourceMappingURL=main.8bddd291.chunk.js.map