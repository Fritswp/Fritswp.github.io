"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[904],{6904:function(e,a,s){s.a(e,(async function(e,t){try{s.r(a);var l=s(4165),n=s(5861),r=s(9439),o=s(2791),c=s(5063),i=s(2481),d=(s(6635),s(276),s(7689)),m=s(184),u=e([c]);function h(){var e=(0,d.UO)().customURL,a=(0,o.useState)(null),s=(0,r.Z)(a,2),t=s[0],u=s[1],p=(0,o.useState)(""),h=(0,r.Z)(p,2),x=h[0],v=h[1],f=(0,o.useState)(""),N=(0,r.Z)(f,2),j=N[0],y=N[1],b=(0,o.useState)(null),g=(0,r.Z)(b,2),w=g[0],C=g[1],Z=(0,o.useState)(null),E=(0,r.Z)(Z,2),R=(E[0],E[1],(0,o.useState)({text:"",type:""})),S=(0,r.Z)(R,2),L=S[0],U=(S[1],(0,o.useState)({text:"",type:""})),O=(0,r.Z)(U,2),k=(O[0],O[1],(0,o.useState)(!1)),M=(0,r.Z)(k,2),z=M[0],P=M[1],A=(0,o.useState)(""),F=(0,r.Z)(A,2),I=F[0],B=F[1],D=(0,o.useState)(""),H=(0,r.Z)(D,2),J=H[0],_=H[1],G=(0,o.useState)(""),Q=(0,r.Z)(G,2),T=Q[0],V=Q[1],q=(0,o.useState)(""),K=(0,r.Z)(q,2),W=K[0],X=K[1],Y=(0,o.useState)(""),$=(0,r.Z)(Y,2),ee=$[0],ae=$[1],se=(0,o.useState)(""),te=(0,r.Z)(se,2),le=te[0],ne=te[1],re=(0,o.useState)(""),oe=(0,r.Z)(re,2),ce=(oe[0],oe[1]),ie=(0,o.useState)(""),de=(0,r.Z)(ie,2),me=de[0],ue=de[1];return(0,o.useEffect)((function(){var a=c.I8.onAuthStateChanged(function(){var e=(0,n.Z)((0,l.Z)().mark((function e(a){var s,t,n;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=9;break}return u(a),s=(0,i.JU)(c.RZ,"expertApplication",a.uid),e.next=5,(0,i.QT)(s);case 5:(t=e.sent).exists()?((n=t.data()).photoURL?C(n.photoURL):C(a.photoURL),v(n.firstName||a.displayName.split(" ")[0]||""),y(n.lastName||a.displayName.split(" ")[1]||""),B(n.address||""),_(n.city||""),V(n.county||""),X(n.postcode||""),ae(n.mobileNumber||""),ne(n.occupation||""),ue(n.description||""),ce(a.email)):(v(a.displayName.split(" ")[0]||""),y(a.displayName.split(" ")[1]||""),C(a.photoURL),ce(a.email)),e.next=18;break;case 9:B(""),_(""),V(""),X(""),ae(""),ne(""),C(null),ce(""),ue("");case 18:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]),s=function(){var a=(0,n.Z)((0,l.Z)().mark((function a(){var s,t,n;return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,e){a.next=4;break}return console.log("Custom URL is not defined."),a.abrupt("return");case 4:return console.log("Custom URL:",e),s=(0,i.IO)((0,i.hJ)(c.RZ,"expertApplications"),(0,i.ar)("customURL","==",e)),a.next=8,(0,i.PL)(s);case 8:(t=a.sent).empty?console.log("Custom URL not found:",e):(n=t.docs[0].data(),v(n.displayName.split(" ")[0]||""),y(n.displayName.split(" ")[1]||""),B(n.address||""),_(n.city||""),V(n.county||""),X(n.postcode||""),ae(n.mobileNumber||""),ne(n.occupation||""),ue(n.description||""),ce(n.email||""),C(n.photoURL||null)),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),console.error("Error fetching user data:",a.t0);case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(){return a.apply(this,arguments)}}();return e&&s(),function(){a()}}),[e]),(0,m.jsxs)("div",{className:"profile-container",children:[(0,m.jsx)("div",{className:"profile-intro-section",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row align-items-center text-white",children:(0,m.jsx)("div",{className:"welcome-text",children:(0,m.jsxs)("h1",{className:"email-h3",children:[" Page of",(0,m.jsxs)("span",{className:"email-h3",children:[" ","".concat(x," ").concat(j)]})]})})})})}),(0,m.jsx)("div",{className:"profile-section",children:(0,m.jsx)("div",{className:"content profile-content ",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"my-4",children:[(0,m.jsxs)("h3",{children:["Profile of ",(0,m.jsx)("span",{children:" "}),"".concat(x," ").concat(j)]}),(0,m.jsx)("hr",{})]}),(0,m.jsx)("form",{className:"file-upload",children:(0,m.jsxs)("div",{className:"row mb-4 gx-4",children:[(0,m.jsx)("div",{className:"col-xl-8 col-12",children:(0,m.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,m.jsxs)("div",{className:"card-body card-profile",children:[(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4",children:"General information"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"First Name *"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:x,onChange:function(e){return v(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Last Name *"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:j,onChange:function(e){return y(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email *"}),(0,m.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:t?t.email:"",readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Mobile number *"}),(0,m.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Phone number",value:ee,readOnly:!0,onChange:function(e){return ae(e.target.value)},style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-12",children:[(0,m.jsx)("label",{className:"form-label",children:"Role/Expertise *"}),(0,m.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"your Role",value:le,onChange:function(e){return ne(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-12",children:[(0,m.jsx)("label",{className:"form-label",children:"Description of Expertise"}),(0,m.jsx)("textarea",{id:"inputDescription",type:"text",className:"form-control",rows:"4",placeholder:"",value:me,readOnly:!0,onChange:function(e){return ue(e.target.value)},style:{resize:"none",pointerEvents:"none"}})]})]}),(0,m.jsx)("div",{className:"py-5 rounded mt-4",children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Address"}),(0,m.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"",value:I,onChange:function(e){return B(e.target.value)},style:{pointerEvents:"none"},readOnly:!0})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"City"}),(0,m.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:J,onChange:function(e){return _(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"County"}),(0,m.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:T,onChange:function(e){return V(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Postcode"}),(0,m.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:W,onChange:function(e){return X(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]})]})})]})})}),(0,m.jsx)("div",{className:"col-xl-4 col-12",children:(0,m.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,m.jsxs)("div",{className:"card-profile",children:[(0,m.jsx)("div",{className:"profile-cover rounded-top"}),(0,m.jsx)("div",{className:"row g-3 ",children:(0,m.jsx)("div",{className:"text-center",children:(0,m.jsxs)("div",{className:"pb-5 card-body",children:[!z&&w&&(0,m.jsx)("img",{src:w,alt:"User Profile",className:"card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-5",onError:function(){return P(!0)},onChange:function(e){return C(e.target.value)}}),z&&(0,m.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-5",onChange:function(e){return C(e.target.value)}}),(0,m.jsxs)("div",{children:["error"===L.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"red"},children:L.text}),"success"===L.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"green"},children:L.text}),"progress"===L.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"gray"},children:L.text})]}),(0,m.jsxs)("div",{className:"card-title h5",children:["".concat(x," ").concat(j)," "]}),(0,m.jsx)("div",{className:"fw-normal card-subtitle mb-4 h6",children:le}),(0,m.jsxs)("button",{type:"button",className:"me-4 btn btn-primary btn-sm rounded-pill pt-2 pb-2",children:[(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,m.jsx)("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})}),"Message"]}),(0,m.jsxs)("button",{type:"button",className:"btn btn-secondary btn-sm rounded-pill pt-2 pb-2",children:[(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,m.jsx)("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z",clipRule:"evenodd"})}),"Connect"]})]})})})]})})})]})})]})})})]})}c=(u.then?(await u)():u)[0],a.default=h,t()}catch(p){t(p)}}))}}]);
//# sourceMappingURL=904.8f1314f8.chunk.js.map