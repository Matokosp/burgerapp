(this.webpackJsonpburgerapp=this.webpackJsonpburgerapp||[]).push([[0],{20:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n.n(r),c=n(15),i=n.n(c),s=(n(20),n(11)),u=n(3),o=function(e){e.db;var t=e.burgerList,n=e.makeBurger,a=e.eatBurger,c=Object(r.useState)(""),i=Object(s.a)(c,2),o=i[0],d=i[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Burgers Made"}),Object(u.jsx)("input",{className:"nameInput",type:"text",name:"name",value:o,onChange:function(e){return d(e.target.value)}}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),n(o),d("")},className:"makeButton",children:" Make it"}),Object(u.jsx)("ul",{className:"list",children:t.map((function(e){if(!e.eaten)return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{className:"listItem",children:[Object(u.jsx)("span",{className:"itemSpan",children:e.name}),Object(u.jsx)("button",{className:"eatButton",onClick:a.bind(undefined,e.id),children:" Eat It! "})]})})}))})]})},d=n(9),l=d.a.initializeApp({apiKey:"AIzaSyC8puLjYd1BvbSwcLVg9XhfYEXRhC4ZdGg",authDomain:"burgerapp-c26b9.firebaseapp.com",databaseURL:"https://burgerapp-c26b9-default-rtdb.firebaseio.com",projectId:"burgerapp-c26b9",storageBucket:"burgerapp-c26b9.appspot.com",messagingSenderId:"10408944967",appId:"1:10408944967:web:0d86d93db4cbafaa19d862",measurementId:"G-R2GB9S1BRS"}).firestore(),b=function(e){e.db;var t=e.burgerList,n=e.poopBurger;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Burgers Eaten"}),Object(u.jsx)("ul",{className:"list",children:t.map((function(e){if(e.eaten)return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{className:"listItem",children:[Object(u.jsx)("span",{className:"itemSpan",children:e.name}),Object(u.jsx)("button",{className:"poopButton",onClick:n.bind(undefined,e.id),children:"\ud83d\udca9 Poop It! \ud83d\udca9"})]})})}))})]})};n(25);var j=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){c()}),[]);var c=function(){var e=[];l.collection("burgers").get().then((function(t){t.forEach((function(t){var n={name:t.data().name,eaten:t.data().eaten,id:t.id};e.push(n)})),a(e)}))};return Object(u.jsxs)("div",{className:"App",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"#fff"},children:[Object(u.jsx)("h1",{children:"Making Some Burgers"}),Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)(o,{firebase:l,burgerList:n,makeBurger:function(e){var t={id:d.a.firestore().collection("burgers").doc().id};d.a.firestore().collection("burgers").doc(t.id).set({name:e,eaten:!1,id:t.id}).then((function(){c()}))},eatBurger:function(e){d.a.firestore().collection("burgers").doc(e).update({eaten:!0}).then((function(){c()}))}}),Object(u.jsx)(b,{firebase:l,burgerList:n,poopBurger:function(e){d.a.firestore().collection("burgers").doc(e).delete().then((function(){c()}))}})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),p()}},[[26,1,2]]]);
//# sourceMappingURL=main.c52486b4.chunk.js.map