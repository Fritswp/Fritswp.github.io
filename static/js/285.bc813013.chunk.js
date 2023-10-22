"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[285],{9285:function(e,s,l){l.r(s);var a=l(4165),t=l(5861),r=l(9439),n=l(2791),c=l(673),o=l(2481),i=(l(6635),l(276),l(7689)),d=l(184);s.default=function(){var e=(0,i.UO)().customURL;console.log("Custom URL:",e);var s=(0,n.useState)(null),l=(0,r.Z)(s,2),m=l[0],u=l[1],p=(0,n.useState)(""),h=(0,r.Z)(p,2),x=h[0],v=h[1],f=(0,n.useState)(""),N=(0,r.Z)(f,2),j=N[0],b=N[1],y=(0,n.useState)(null),g=(0,r.Z)(y,2),w=g[0],Z=g[1],C=(0,n.useState)(null),R=(0,r.Z)(C,2),E=(R[0],R[1],(0,n.useState)({text:"",type:""})),S=(0,r.Z)(E,2),L=S[0],U=(S[1],(0,n.useState)(!1)),O=(0,r.Z)(U,2),k=O[0],M=O[1],P=(0,n.useState)(""),z=(0,r.Z)(P,2),A=z[0],F=z[1],I=(0,n.useState)(""),B=(0,r.Z)(I,2),H=B[0],J=B[1],_=(0,n.useState)(""),G=(0,r.Z)(_,2),Q=G[0],T=G[1],V=(0,n.useState)(""),q=(0,r.Z)(V,2),D=q[0],K=q[1],W=(0,n.useState)(""),X=(0,r.Z)(W,2),Y=X[0],$=X[1],ee=(0,n.useState)(""),se=(0,r.Z)(ee,2),le=(se[0],se[1]),ae=(0,n.useState)(""),te=(0,r.Z)(ae,2),re=te[0],ne=te[1];return(0,n.useEffect)((function(){var s=c.I8.onAuthStateChanged(function(){var e=(0,t.Z)((0,a.Z)().mark((function e(s){var l,t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=9;break}return u(s),l=(0,o.JU)(c.RZ,"userProfiles",s.uid),e.next=5,(0,o.QT)(l);case 5:(t=e.sent).exists()?((r=t.data()).photoURL?Z(r.photoURL):Z(s.photoURL),v(r.firstName||s.displayName.split(" ")[0]||""),b(r.lastName||s.displayName.split(" ")[1]||""),F(r.address||""),J(r.city||""),T(r.county||""),K(r.postcode||""),$(r.mobileNumber||""),ne(r.role||""),le(s.email)):(v(s.displayName.split(" ")[0]||""),b(s.displayName.split(" ")[1]||""),Z(s.photoURL),le(s.email)),e.next=17;break;case 9:F(""),J(""),T(""),K(""),$(""),ne(""),Z(null),le("");case 17:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),[]),l=function(){var s=(0,t.Z)((0,a.Z)().mark((function s(){var l,t,r;return(0,a.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,e){s.next=4;break}return console.log("Custom URL is not defined."),s.abrupt("return");case 4:return console.log("Custom URL:",e),l=(0,o.IO)((0,o.hJ)(c.RZ,"userProfiles"),(0,o.ar)("customURL","==",e)),s.next=8,(0,o.PL)(l);case 8:(t=s.sent).empty?console.log("Custom URL not found:",e):(r=t.docs[0].data(),v(r.displayName.split(" ")[0]||""),b(r.displayName.split(" ")[1]||""),F(r.address||""),J(r.city||""),T(r.county||""),K(r.postcode||""),$(r.mobileNumber||""),ne(r.role||""),le(r.email||""),Z(r.photoURL||null)),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(0),console.error("Error fetching user data:",s.t0);case 15:case"end":return s.stop()}}),s,null,[[0,12]])})));return function(){return s.apply(this,arguments)}}();return e&&l(),function(){s()}}),[e]),(0,d.jsxs)("div",{className:"profile-container",children:[(0,d.jsx)("div",{className:"profile-intro-section",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row align-items-center text-white",children:(0,d.jsx)("div",{className:"welcome-text",children:(0,d.jsxs)("h1",{className:"email-h3",children:[" Page of",(0,d.jsxs)("span",{className:"email-h3",children:[" ","".concat(x," ").concat(j)]})]})})})})}),(0,d.jsx)("div",{className:"profile-section",children:(0,d.jsx)("div",{className:"content profile-content ",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"my-4",children:(0,d.jsxs)("h3",{children:["Profile of ",(0,d.jsx)("span",{children:" "}),"".concat(x," ").concat(j)]})}),(0,d.jsx)("form",{className:"file-upload",children:(0,d.jsxs)("div",{className:"row mb-4 gx-4",children:[(0,d.jsx)("div",{className:"col-xl-8 col-12",children:(0,d.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,d.jsxs)("div",{className:"card-body card-profile",children:[(0,d.jsxs)("div",{className:"row g-3",children:[(0,d.jsx)("h4",{className:"mb-4",children:"General information"}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"First Name *"}),(0,d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:x,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Last Name *"}),(0,d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:j,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email *"}),(0,d.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:m?m.email:"",readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Mobile number *"}),(0,d.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Phone number",value:Y,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Role/Expertise *"}),(0,d.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"your Role",value:re,onChange:function(e){return ne(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]})]}),(0,d.jsx)("div",{className:"py-5 rounded mt-4",children:(0,d.jsxs)("div",{className:"row g-3",children:[(0,d.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Address"}),(0,d.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"",value:A,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"City"}),(0,d.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"",value:H,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"County"}),(0,d.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"",value:Q,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Postcode"}),(0,d.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"",value:D,readOnly:!0,style:{pointerEvents:"none"}})]})]})})]})})}),(0,d.jsx)("div",{className:"col-xl-4 col-12",children:(0,d.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,d.jsxs)("div",{className:"card-profile",children:[(0,d.jsx)("div",{className:"profile-cover rounded-top"}),(0,d.jsx)("div",{className:"row g-3 ",children:(0,d.jsx)("div",{className:"text-center",children:(0,d.jsxs)("div",{className:"pb-5 card-body",children:[!k&&w&&(0,d.jsx)("img",{src:w,alt:"User Profile",className:"card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-5",onError:function(){return M(!0)},onChange:function(e){return Z(e.target.value)}}),k&&(0,d.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-5",onChange:function(e){return Z(e.target.value)}}),(0,d.jsxs)("div",{children:["error"===L.type&&(0,d.jsx)("p",{className:"fw-light",style:{color:"red"},children:L.text}),"success"===L.type&&(0,d.jsx)("p",{className:"fw-light",style:{color:"green"},children:L.text}),"progress"===L.type&&(0,d.jsx)("p",{className:"fw-light",style:{color:"gray"},children:L.text})]}),(0,d.jsxs)("div",{className:"card-title h5",children:["".concat(x," ").concat(j)," "]}),(0,d.jsx)("div",{className:"fw-normal card-subtitle mb-4 h6",children:re}),(0,d.jsxs)("button",{type:"button",className:"me-4 btn btn-primary btn-sm rounded-pill pt-2 pb-2",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,d.jsx)("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})}),"Message"]}),(0,d.jsxs)("button",{type:"button",className:"btn btn-secondary btn-sm rounded-pill pt-2 pb-2",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z",clipRule:"evenodd"})}),"Connect"]})]})})})]})})})]})})]})})})]})}}}]);
//# sourceMappingURL=285.bc813013.chunk.js.map