(this.webpackJsonpcourse_shop=this.webpackJsonpcourse_shop||[]).push([[0],{144:function(e,t,n){},161:function(e,t,n){var a={"./advanced_english.jpg":162,"./advanced_javascript.jpg":163,"./advanced_maths.jpg":164,"./basic_english.jpg":165};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=161},162:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/advanced_english.c8dac0c1.jpg"},163:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/advanced_javascript.5225a953.jpg"},164:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/advanced_maths.c8335d26.jpg"},165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/basic_english.5f715789.jpg"},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){},290:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(39),s=n.n(c),i=n(19),o=n(3),u=n(41),l=n(108),d=n(5),p=n(33),j=n(8),h=n.n(j),b=n(22),m=n(20),f=n.n(m),g="FETCH_USER_DATA",O="ADD_USER",v="LOGIN_USER",_="BUY_COURSE",x="ADD_COURSE_TO_SHOPPING_CART",y="REMOVE_COURSE_FROM_SHOPPING_CART",C="SELECT_COURSE",N=function(){return function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/user"),e.next=3,f()({method:"GET",withCredentials:!0,url:n});case 3:a=e.sent,t({type:g,payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e,t){return function(){var n=Object(b.a)(h.a.mark((function n(a){var r,c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/login"),n.next=3,f()({method:"POST",data:{username:e,password:t},withCredentials:!0,url:r});case 3:return"Invalid username or password"!==(c=n.sent).data&&a({type:v,payload:c.data}),n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/user/").concat(t._id),e.next=3,f.a.put(n,t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e,t){if(e.purchasedCourses.find((function(e){return e===t.payload})))return e;var n=Object(p.a)({},e);return n.purchasedCourses=[].concat(Object(d.a)(e.purchasedCourses),Object(d.a)(t.payload)),n.shoppingCart=[],k(n),n},S=function(e,t){var n=Object(p.a)({},e);return n.selectedCourse=t.payload,k(n),n},L=function(e,t){if(e.shoppingCart.find((function(e){return e===t.payload})))return e;var n=Object(p.a)({},e);return n.shoppingCart=[].concat(Object(d.a)(e.shoppingCart),[t.payload]),k(n),n},R=function(e,t){var n=e.shoppingCart.filter((function(e){return e!==t.payload})),a=Object(p.a)({},e);return a.shoppingCart=Object(d.a)(n),k(a),a},T="ADD_RATING",P="FETCH_COURSES_DATA",F="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/courses"),A=function(){return function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"GET",withCredentials:!0,url:F});case 2:n=e.sent,t({type:P,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/course/").concat(t._id),e.next=3,f.a.put(n,t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e,t){return e.map((function(e){if(e._id!==t.payload.courseId)return e;var n=e.rating.filter((function(e){return e.userLogin===t.payload.userLogin}));if(console.log(n),n.length>0)return e;var a=Object(p.a)({},e),r={userLogin:t.payload.userLogin,rating:t.payload.rating,comment:t.payload.comment.formValue};return a.rating=[].concat(Object(d.a)(e.rating),[r]),I(a),a}))},M=function(e,t){return t.payload},V=Object(u.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:case O:case v:return t.payload;case _:return E(e,t);case x:return L(e,t);case y:return R(e,t);case C:return S(e,t)}return e},courses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return U(e,t);case P:return M(0,t);default:return e}}}),D=Object(u.c)(V,Object(u.a)(l.a)),Y=n(6),H=n(10),G=(n(144),n(109)),q=n.n(G),B=n(30),J=n(23),W=n(0),X=function(e){var t=e.config,n=Object(a.useRef)(null),r=t.info,c=t.optionalClickEvent,s=t.classes,i=t.icon;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{ref:n,className:"product__status-course",children:r}),Object(W.jsx)("button",{onClick:c,className:s,onMouseOver:function(){n.current.classList.add("product__status-course--active")},onMouseOut:function(){n.current.classList.remove("product__status-course--active")},children:Object(W.jsx)(B.a,{icon:"faCartPlus"===i?J.a:"faCheck"===i?J.c:"faPlayCircle"===i?J.d:null})})]})},$=n(51),z=n.n($),K=function(e){var t=e.actuallyCourse,n=e.handleModal,a=0,r=0;return t.rating.forEach((function(e){a+=e.rating})),r=(a/t.rating.length).toFixed(1),isNaN(r)&&(r=0),Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("button",{className:"product__rating-stars",onClick:n,children:[Object(W.jsx)(z.a,{rating:Number(r),starRatedColor:"blue",starEmptyColor:"white",numberOfStars:5,name:"rating",starDimension:"30px",starSpacing:"5px"}),r,"/5 (",t.rating.length,")"]})})},Q=n(17),Z=function(e){var t=e.user,n=e.checkIfTheCourseIsBought,a=e.checkIfTheUserHasRated,r=e.rating,c=e.setRating,s=e._id,i=Object(o.b)();return t&&n&&!a?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:"product__rating",children:[Object(W.jsx)("div",{className:"product__title",children:"Ratio:"}),Object(W.jsx)(z.a,{rating:r,starRatedColor:"blue",changeRating:function(e){c(e)},numberOfStars:5,name:"rating",starDimension:"30px",starSpacing:"5px"})]}),Object(W.jsx)("div",{className:"product__comment",children:Object(W.jsx)(Q.d,{initialValues:{formValue:""},validate:function(e){var t={};return e.formValue.length<10?t.formValue="Enter comment (minimum 10 characters)":0===r&&(t.formValue="Rate a course from 1 to 5"),t},onSubmit:function(e,n){var a=n.resetForm;i(function(e,t,n,a){return{type:T,payload:{courseId:e,userLogin:t,rating:n,comment:a}}}(s,t.login,r,e)),a()},children:function(e){var t=e.handleSubmit;return Object(W.jsxs)("form",{onSubmit:t,children:[Object(W.jsxs)("div",{className:"formValue",children:[Object(W.jsx)("div",{className:"product__title",children:"Comment:"}),Object(W.jsx)(Q.a,{name:"formValue",component:"div"}),Object(W.jsx)(Q.b,{className:"product__formInput",name:"formValue",placeholder:"add your opinion",component:"textarea"})]}),Object(W.jsx)("button",{className:"product__button",type:"submit",children:"Submit"})]})}})})]}):t&&n&&a?Object(W.jsxs)("div",{className:"modal__user-rate",children:["You have rated this course on: ",a.rating]}):Object(W.jsx)("div",{className:"modal__user-rate",children:"Buy this course if you want add rate"})},ee=function(e){var t=function(e){var t={};return e.keys().map((function(n){return t[n.replace("./","")]=e(n)})),t}(n(161)),a=Object.keys(t).find((function(t){return t.includes(e.replace(" ","_").toLowerCase())}));return t[a].default},te=(n(81),function(e){var t=e.title,n=e.price,r=e.authors,c=e._id,s=e.category,i=Object(Y.f)(),u=Object(o.b)(),l=Object(a.useState)(0),d=Object(H.a)(l,2),p=d[0],j=d[1],h=Object(o.c)((function(e){return e})),b=h.user,m=h.courses,f=Object(a.useState)(!1),g=Object(H.a)(f,2),O=g[0],v=g[1],_=m.find((function(e){return e._id===c})),y="",N="",w="",k={info:null,optionalClickEvent:null,classes:null,icon:null};return b?(w=b.shoppingCart.find((function(e){return e===c})),N=b.purchasedCourses.find((function(e){return e===c})),y=_.rating.find((function(e){return e.userLogin===b.login})),N&&window.location.href.includes("user_panel")?k={info:"Play course",optionalClickEvent:function(){u({type:C,payload:c}),i.push("/selected_product")},classes:"product__icon-course-status-in-user-panel",icon:"faPlayCircle"}:N?k={info:"You bought this course",optionalClickEvent:null,classes:"product__icon-course-status-buyed",icon:"faCheck"}:w?k={info:"The course is already in the basket",optionalClickEvent:null,classes:"product__icon-course-status-add-to-cart product__icon-course-status-add-to-cart--no-active",icon:"faCartPlus"}:w||(k={info:"Click if you want add to cart",optionalClickEvent:function(){u({type:x,payload:c})},classes:"product__icon-course-status-add-to-cart",icon:"faCartPlus"})):k={info:"Log in if you want to buy a course",optionalClickEvent:null,classes:"product__icon-course-status-add-to-cart product__icon-course-status-add-to-cart--no-active",icon:"faCartPlus"},Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:"product",children:[Object(W.jsx)("div",{className:"product__title",children:Object(W.jsx)("span",{children:t})}),Object(W.jsx)("div",{className:"product__category",children:Object(W.jsxs)("span",{children:["(",s,")"]})}),Object(W.jsx)("div",{className:"product__imgContainer",children:Object(W.jsx)("img",{src:ee(t),alt:"product "})}),Object(W.jsxs)("div",{className:"product__price",children:[Object(W.jsx)("span",{children:"Price: "}),Object(W.jsx)("span",{children:n})]}),Object(W.jsxs)("div",{className:"product__authors",children:[Object(W.jsx)("span",{children:"Authors: "}),Object(W.jsx)("span",{children:r})]}),Object(W.jsx)("div",{className:"product__rating",children:Object(W.jsx)(K,{actuallyCourse:_,handleModal:function(){v(!0)}})}),Object(W.jsx)("div",{className:"product__status",children:Object(W.jsx)(X,{config:k})})]}),Object(W.jsxs)(q.a,{ariaHideApp:!1,className:"modal",isOpen:O,children:[Object(W.jsx)("button",{className:"product__button product__button-right",onClick:function(){return v(!1)},children:"X"}),Object(W.jsx)(Z,{user:b,checkIfTheCourseIsBought:N,checkIfTheUserHasRated:y,rating:p,setRating:j,_id:c}),Object(W.jsx)("div",{className:"modal__ratings-list",children:_.rating.length>0?_.rating.map((function(e){var t=e.rating,n=e.comment,a=e.userLogin;return Object(W.jsxs)("div",{className:"modal__rating",children:[Object(W.jsxs)("div",{children:["author: ",a," "]}),Object(W.jsxs)("div",{children:["comment: ",n]}),Object(W.jsxs)("div",{children:["rating: ",t]})]},a)})):Object(W.jsx)("div",{className:"modal__rating",children:"This course has not been rated yet"})})]})]})}),ne=function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(N()),e(A())}),[e]);var t=Object(o.c)((function(e){return e.courses})),n=Object(a.useState)(""),r=Object(H.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),u=Object(H.a)(i,2),l=u[0],d=u[1],p=t.map((function(e){var t=e.authors,n=e.price,a=e.title,r=e._id,c=e.rating,s=e.category;return Object(W.jsx)(te,{_id:r,authors:t,title:a,price:n,rating:c,category:s},r)})),j=Object(a.useState)(t.map((function(e){var t=e.authors,n=e.price,a=e.title,r=e._id,c=e.rating,s=e.category;return Object(W.jsx)(te,{_id:r,authors:t,title:a,price:n,rating:c,category:s},r)}))),h=Object(H.a)(j,2),b=h[0],m=h[1];return Object(W.jsxs)("div",{className:"products-list-page-container",children:[Object(W.jsx)("input",{type:"text",className:"productsList__searchInput",onChange:function(e){return function(e){var n=t.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())}));m(n.map((function(e){var t=e.authors,n=e.img,a=e.price,r=e.title,c=e._id,s=e.rating,i=e.category;return Object(W.jsx)(te,{_id:c,authors:t,img:n,title:r,price:a,rating:s,category:i},c)})))}(e.target.value)},placeholder:"Search for names.."}),Object(W.jsx)("button",{className:"productsList__button",onClick:function(){return s(!c)},children:c?"Close category list":"Open category list"}),c?function(){var e=["maths","programming","languages","all"].map((function(e){return Object(W.jsx)("li",{children:Object(W.jsx)("span",{className:l===e?"productsList__categoryContainer active":null,onClick:function(){return function(e){d(e);var n=t.filter((function(t){return t.category===e}));"all"===e&&(n=t),m(n.map((function(e){var t=e.authors,n=e.img,a=e.price,r=e.title,c=e._id,s=e.rating,i=e.category;return Object(W.jsx)(te,{_id:c,authors:t,img:n,title:r,price:a,rating:s,category:i},c)})))}(e)},children:e.charAt(0).toUpperCase()+e.slice(1)})},e)}));return Object(W.jsx)("div",{className:"productsList__categoryContainer",children:Object(W.jsx)("ul",{children:e})})}():null,Object(W.jsx)("div",{className:"productsList",children:p.length>0?b.length>0?b:p:Object(W.jsxs)("div",{className:"productsList__loader_container",children:[Object(W.jsx)("span",{children:"server wakes up..."}),Object(W.jsx)("div",{className:"productsList__loader"})]})})]})},ae=n(113),re=n.n(ae),ce=n.p+"static/media/vid1.17cf6613.mp4",se=function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(N()),e(A())}),[e]);var t=Object(o.c)((function(e){return e})),n=t.user,r=t.courses.find((function(e){return e._id===n.selectedCourse}));return Object(W.jsxs)("div",{className:"container",children:[r?Object(W.jsxs)("span",{children:["You are currently viewing the ",r.title," course by"," ",r.authors," "]}):null,Object(W.jsx)("div",{className:"product__vid",children:Object(W.jsx)(re.a,{className:"react-player fixed-bottom",url:ce,width:"100%",height:"100%",controls:!0})}),Object(W.jsx)("div",{className:"product__author"})]})},ie=function(e){var t=e.handler,n=e.buttonName;return Object(W.jsx)(Q.d,{initialValues:{login:"",password:""},validate:function(e){var t=e.login,n=e.password,a={};return t.length<3?a.login="Enter login (minimum 3 characters)":["<",">","!"].some((function(e){return t.includes(e)}))?a.login="Without <, >, !":n.length<4&&(a.password="Enter password (minimum 4 characters)"),a},onSubmit:function(e,n){var a=e.login,r=e.password,c=n.resetForm;t(a.toLowerCase(),r),c()},children:function(e){var t=e.errors,a=e.touched,r=e.values;return Object(W.jsxs)(Q.c,{children:[Object(W.jsxs)("div",{className:"login",children:[t.login&&a.login?Object(W.jsx)(Q.a,{name:"login",component:"div"}):null,Object(W.jsx)("span",{children:"Login"}),Object(W.jsx)(Q.b,{className:"registrationPage__input",name:"login",placeholder:"login",value:r.login.replace(/\s/g,"").replace(/</g,"").replace(/>/g,"").trim()})]}),Object(W.jsxs)("div",{className:"password",children:[t.password&&a.password?Object(W.jsx)(Q.a,{name:"password",component:"div"}):null,Object(W.jsx)("span",{children:"Password"}),Object(W.jsx)(Q.b,{className:"registrationPage__input",placeholder:"password",name:"password",type:"password"})]}),Object(W.jsx)("button",{type:"submit",className:"registrationPage__button",children:n})]})}})},oe=(n(185),function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(N())}),[e]);var t=Object(Y.f)(),n=Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{className:"loginPage__user-info",children:Object(W.jsx)("span",{children:"Log in to your account!"})}),Object(W.jsx)(ie,{handler:function(n,a){!function(n,a){e(w(n,a)).then((function(e){if("Invalid username or password"===e.data)return alert("Invalid username or password");t.push("/")}))}(n,a)},buttonName:"Log in"})]});return Object(W.jsx)(W.Fragment,{children:n})});n(186);var ue=function(){var e=Object(Y.f)(),t=Object(o.b)(),n=function(n,a){var r=t(function(e,t){return Object(b.a)(h.a.mark((function n(){var a,r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/register"),n.next=3,f()({method:"POST",data:{username:e,password:t},withCredentials:!0,url:a});case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))}(n,a));r.then((function(r){"User Already Exsists"!==r.data?(alert("Congratulations! An account has been created, your login is: ".concat(n,", remember your password and never give it to anyone!")),t(w(n,a)),e.push("/")):alert("User Already Exsists")}))};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{className:"registrationPage__user-info",children:Object(W.jsx)("span",{children:"Register and start learning!"})}),Object(W.jsx)(ie,{handler:function(e,t){n(e,t)},buttonName:"Register"})]})},le=(n(187),function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(N()),e(A())}),[e]);var t=Object(o.c)((function(e){return e})),n=t.user,r=t.courses,c=null,s="Log in to view your courses",i=null;return n&&(i=(c=r.filter((function(e){return n.purchasedCourses.find((function(t){return t===e._id}))}))).map((function(e){var t=e.authors,n=e.price,a=e.title,r=e._id,c=e.category,s=e.rating;return Object(W.jsx)("div",{className:"userPanel__product",children:Object(W.jsx)(te,{_id:r,authors:t,title:a,price:n,category:c,rating:s},r)},r)})),s=c.length>0?i:"You don't have any courses"),Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("div",{className:"userPanel__productList",children:s})})}),de=(n(188),function(){var e=Object(Y.f)(),t=Object(o.b)();Object(a.useEffect)((function(){t(N()),t(A())}),[t]);var n=Object(o.c)((function(e){return e})),r=n.user,c=n.courses,s=[];r&&c&&(s=c.filter((function(e){return r.shoppingCart.find((function(t){return t===e._id}))})));return s.length>0&&r?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{className:"shoppingCart__productsList",children:s.map((function(e){var n=e.authors,a=e.price,r=e.title,c=e._id;return Object(W.jsxs)("div",{className:"shoppingCart__product-container",children:[Object(W.jsx)("div",{className:"shoppingCart__product-img-container",children:Object(W.jsx)("img",{className:"shoppingCart__product-img",src:ee(r),alt:"product "})}),Object(W.jsxs)("div",{className:"shoppingCart__product-info",children:[Object(W.jsxs)("span",{children:["Title: ",r]}),Object(W.jsxs)("span",{children:[" Price: ",a]}),Object(W.jsxs)("span",{children:[" Author: ",n]})]}),Object(W.jsx)("button",{className:"shoppingCart__product-delete_button",onClick:function(){t({type:y,payload:c})},children:Object(W.jsx)(B.a,{icon:J.e})})]},c)}))}),Object(W.jsx)("button",{className:"shoppingCart__button",onClick:function(){e.push("/transaction_form")},children:"Summary and payment"})]}):0===s.length&&r?" You haven't added any product to your cart yet":"Log in if you want to have access to the product basket"}),pe=n(34),je=(n(287),function(){var e=Object(o.c)((function(e){return e})),t=e.user,n=e.courses,r=Object(Y.f)(),c=Object(o.b)(),s=null,i=null;Object(a.useEffect)((function(){c(N()),c(A())}),[c]),t&&(s=n.filter((function(e){return t.shoppingCart.find((function(t){return t===e._id}))})),i=s.map((function(e){return e._id})));var u=function(){t?(c({type:_,payload:i}),r.push("/user_panel")):r.push("/login")};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("span",{children:["You want to purchase a total of ",t?t.shoppingCart.length:0," ","courses"]}),Object(W.jsx)(Q.d,{initialValues:{cardNumber:"",cardHolder:"",cardMonth:"",cardYear:"",cvv:""},onSubmit:function(e,t){u(),t.resetForm()},validationSchema:pe.a().shape({cardNumber:pe.b().required().min(19,"not less than 16"),cardHolder:pe.b().required(),cardMonth:pe.b().required(),cardYear:pe.b().required(),cvv:pe.b().required()}),children:function(e){var t=e.handleSubmit,n=e.handleChange,a=e.values,r=e.isValid;return Object(W.jsx)("form",{onSubmit:t,children:Object(W.jsxs)("div",{className:"form",children:[Object(W.jsx)("label",{className:"label",children:"Card Number "}),Object(W.jsx)("input",{type:"text",onChange:n,value:a.cardNumber.replace(/[^\d]/g,"").replace(/\s/g,"").replace(/(\d{4})/g,"$1 ").trim(),name:"cardNumber",maxLength:"19"}),Object(W.jsx)("label",{className:"label",children:"Card Holder"}),Object(W.jsx)("input",{type:"text",name:"cardHolder",onChange:n,value:a.cardHolder}),Object(W.jsxs)("div",{className:"row",children:[Object(W.jsxs)("div",{className:"column",children:[Object(W.jsx)("label",{className:"label",children:"Expiration Date"}),Object(W.jsxs)("div",{children:[Object(W.jsxs)("select",{type:"text",placeholder:"Month",name:"cardMonth",onChange:n,value:a.cardMonth,children:[Object(W.jsx)("option",{hidden:!0,children:"Month"}),[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e,t){return Object(W.jsx)("option",{value:e,children:e<10?"0".concat(e):e},e)}))]}),Object(W.jsxs)("select",{type:"text",name:"cardYear",onChange:n,value:a.cardYear,children:[Object(W.jsx)("option",{hidden:!0,children:"Year"}),[2020,2021,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032].map((function(e,t){return Object(W.jsx)("option",{value:e,children:e},e)}))]})]})]})," ",Object(W.jsxs)("div",{className:"column",children:[Object(W.jsx)("label",{className:"label",children:"CVV"}),Object(W.jsx)("input",{type:"text",value:a.cvv,name:"cvv",onChange:n})]})]}),Object(W.jsx)("button",{type:"submit",disabled:!r,children:"Submit"})]})})}})]})}),he=[{name:ne,path:"/",exact:!0},{name:se,path:"/selected_product"},{name:oe,path:"/login"},{name:ue,path:"/registration"},{name:le,path:"/user_panel"},{name:de,path:"/shopping_cart"},{name:je,path:"/transaction_form"},{name:function(){return Object(W.jsx)("div",{children:"There is no such page"})}}],be=function(){var e=he.map((function(e,t){var n=e.path,a=e.exact,r=e.name;return Object(W.jsx)(Y.a,{path:n,exact:a,component:r},t)}));return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("div",{className:"page",children:Object(W.jsx)(Y.c,{children:e})})})},me=(n(288),function(){var e=Object(Y.g)(),t=Object(o.c)((function(e){return e})),n=t.user,a=[{name:"All courses",path:"/"},{name:"Your courses",path:"/user_panel"},{name:"",path:"/shopping_cart",isShoppingCart:!0}].map((function(t){return Object(W.jsx)("li",{className:(a=t.path,e.pathname===a?"navigation__item-wraper navigation__item-wraper--active":"navigation__item-wraper"),children:Object(W.jsx)(i.b,{className:"navigation__item ",to:t.path,exact:!!t.exact&&t.exact,children:t.isShoppingCart?n&&n.shoppingCart.length>0?Object(W.jsx)("div",{className:"navigation__cart navigation__cart--active  fa-stack","data-count":n.shoppingCart.length,children:Object(W.jsx)(B.a,{icon:J.b})}):Object(W.jsx)("div",{className:"navigation__cart ",children:Object(W.jsx)(B.a,{icon:J.b})}):t.name})},t.name);var a}));return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("nav",{className:"navigation",children:Object(W.jsx)("ul",{className:"navigation__list",children:a})}),Object(W.jsx)("div",{})]})}),fe=(n(289),function(){var e=Object(o.c)((function(e){return e.user})),t=Object(a.useRef)(),n=Object(Y.f)(),r=Object(o.b)(),c=Object(a.useState)(!1),s=Object(H.a)(c,2),u=s[0],l=s[1],d="".concat("https://shrouded-temple-52756.herokuapp.com/ ".trim(),"api/logout"),p=[{name:"Log in",path:"/login"},{name:"Registration",path:"/registration"}].map((function(e){return Object(W.jsx)("button",{className:"not-logged-in__button",children:Object(W.jsx)(i.b,{className:"not-logged-in__item",to:e.path,exact:!!e.exact&&e.exact,children:e.name})},e.name)}));return Object(W.jsx)("div",{className:"login-panel",children:e?Object(W.jsxs)("div",{onMouseLeave:u?function(){l(!1),t.current.classList.remove("logged-panel--visible")}:null,ref:t,className:"logged-panel",children:[Object(W.jsx)("button",{className:"logged-panel__menu-button",onTouchEnd:function(){t.current.classList.toggle("logged-panel--visible")},onMouseEnter:u?null:function(){l(!0),t.current.classList.add("logged-panel--visible")},children:e.login.charAt(0).toUpperCase()}),Object(W.jsxs)("div",{className:"logged-panel__menu",children:[Object(W.jsx)("div",{className:"logged-panel__who-logged-in",children:e.login}),Object(W.jsx)("button",{className:"logged-panel__log-out-button",onClick:function(){f()({method:"GET",withCredentials:!0,url:d}).then((function(){r({type:g,payload:null})})),n.push("/login")},children:"Log out"})]})," "]}):Object(W.jsx)("div",{className:"not-logged-in",children:p})})}),ge=(n(290),function(){return Object(W.jsx)(o.a,{store:D,children:Object(W.jsx)(i.a,{basename:"/course_shop",children:Object(W.jsxs)("div",{className:"app_wrapper",children:[Object(W.jsxs)("div",{className:"menu_wrapper",children:[Object(W.jsx)(me,{}),Object(W.jsx)(fe,{})]}),Object(W.jsx)(be,{})]})})})});s.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(ge,{})}),document.getElementById("root"))},81:function(e,t,n){}},[[291,1,2]]]);
//# sourceMappingURL=main.40cea1a0.chunk.js.map