"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[285],{9285:function(e,s,l){l.r(s);var a=l(4165),t=l(5861),r=l(9439),n=l(2791),c=l(673),o=l(2481),i=(l(5485),l(276),l(7689)),d=l(184);s.default=function(){var e=(0,i.UO)().customURL,s=(0,n.useState)(null),l=(0,r.Z)(s,2),m=l[0],u=(l[1],(0,n.useState)("")),x=(0,r.Z)(u,2),p=x[0],h=x[1],v=(0,n.useState)(""),j=(0,r.Z)(v,2),N=j[0],f=j[1],b=(0,n.useState)(null),y=(0,r.Z)(b,2),g=y[0],w=y[1],Z=(0,n.useState)(null),E=(0,r.Z)(Z,2),C=(E[0],E[1],(0,n.useState)({text:"",type:""})),S=(0,r.Z)(C,2),R=S[0],O=(S[1],(0,n.useState)(!1)),L=(0,r.Z)(O,2),M=L[0],U=(L[1],(0,n.useState)("")),k=(0,r.Z)(U,2),z=k[0],P=k[1],A=(0,n.useState)(""),F=(0,r.Z)(A,2),B=F[0],H=F[1],I=(0,n.useState)(""),_=(0,r.Z)(I,2),G=_[0],J=_[1],V=(0,n.useState)(""),q=(0,r.Z)(V,2),D=q[0],K=q[1],Q=(0,n.useState)(""),T=(0,r.Z)(Q,2),W=T[0],X=T[1],Y=(0,n.useState)(""),$=(0,r.Z)(Y,2),ee=($[0],$[1]),se=(0,n.useState)(""),le=(0,r.Z)(se,2),ae=le[0],te=le[1];return(0,n.useEffect)((function(){var s=function(){var s=(0,t.Z)((0,a.Z)().mark((function s(){var l,t,r;return(0,a.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,e){s.next=4;break}return console.log("Custom URL is not defined."),s.abrupt("return");case 4:return console.log("Custom URL:",e),l=(0,o.IO)((0,o.hJ)(c.RZ,"userProfiles"),(0,o.ar)("customURL","==",e)),s.next=8,(0,o.PL)(l);case 8:(t=s.sent).empty?console.log("Custom URL not found:",e):(r=t.docs[0].data(),h(r.displayName.split(" ")[0]||""),f(r.displayName.split(" ")[1]||""),P(r.address||""),H(r.city||""),J(r.county||""),K(r.postcode||""),X(r.mobileNumber||""),te(r.role||""),ee(r.email||""),w(r.photoURL||null)),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(0),console.error("Error fetching user data:",s.t0);case 15:case"end":return s.stop()}}),s,null,[[0,12]])})));return function(){return s.apply(this,arguments)}}();e&&s()}),[e]),(0,d.jsxs)("div",{className:"profile-container",children:[(0,d.jsx)("div",{className:"profile-intro-section",children:(0,d.jsx)("div",{className:"container"})}),(0,d.jsx)("div",{className:"profile-section",children:(0,d.jsx)("div",{className:"content profile-content ",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"card-profile"}),(0,d.jsxs)("div",{className:"row g-3",children:[(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsxs)("div",{className:"d-flex",children:[!M&&g&&(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:g,alt:"User Profile",className:"user-avatar large-avatar mb-3"}),(0,d.jsxs)("div",{className:"px-3",children:[(0,d.jsx)("div",{className:"card-title h5",children:"".concat(p," ").concat(N)}),(0,d.jsx)("div",{className:"text-muted  card-subtitle h6",children:ae})]})]}),M&&(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"user-avatar large-avatar rounded-circle mb-3"}),(0,d.jsxs)("div",{className:"px-3",children:[(0,d.jsx)("div",{className:"card-title",children:"".concat(p," ").concat(N)}),(0,d.jsx)("div",{className:"fw-normal card-subtitle mb-4 h6",children:ae})]})]})]}),(0,d.jsxs)("div",{children:["error"===R.type&&(0,d.jsx)("p",{className:"fw-light",style:{color:"red"},children:R.text}),"success"===R.type&&(0,d.jsx)("p",{className:"fw-light",style:{color:"green"},children:R.text}),"progress"===R.type&&(0,d.jsx)("p",{className:"fw-light",style:{color:"gray"},children:R.text})]})]}),(0,d.jsxs)("div",{className:"d-flex responsive-buttons",children:[(0,d.jsxs)("button",{type:"button",className:"me-4 btn btn-primary btn-sm rounded-pill pt-2 pb-2",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,d.jsx)("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})}),"Message"]}),(0,d.jsxs)("button",{type:"button",className:"btn btn-secondary btn-sm rounded-pill pt-2 pb-2",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z",clipRule:"evenodd"})}),"Connect"]})]})]}),(0,d.jsx)("div",{className:"my-4",children:(0,d.jsxs)("h3",{children:["Profile of ",(0,d.jsx)("span",{children:" "}),"".concat(p," ").concat(N)]})}),(0,d.jsx)("form",{className:"file-upload",children:(0,d.jsx)("div",{className:"row mb-4 gx-4",children:(0,d.jsx)("div",{className:"col-xl-8 col-12",children:(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"card-body card-profile",children:[(0,d.jsxs)("div",{className:"row g-3",children:[(0,d.jsx)("h4",{className:"mb-4",children:"General information"}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"First Name"}),(0,d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:p,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Last Name "}),(0,d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:N,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email "}),(0,d.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:m?m.email:"",readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Mobile number "}),(0,d.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Phone number",value:W,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Role/Expertise "}),(0,d.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"your Role",value:ae,onChange:function(e){return te(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]})]}),(0,d.jsx)("div",{className:"py-5 rounded mt-4",children:(0,d.jsxs)("div",{className:"row g-3",children:[(0,d.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Address"}),(0,d.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"",value:z,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"City"}),(0,d.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"",value:B,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"County"}),(0,d.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"",value:G,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Postcode"}),(0,d.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"",value:D,readOnly:!0,style:{pointerEvents:"none"}})]})]})})]})})})})})]})})})]})}}}]);
//# sourceMappingURL=285.45ff5a11.chunk.js.map