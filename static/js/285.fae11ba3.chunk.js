"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[285],{9285:function(e,s,a){a.r(s);var l=a(1413),r=a(4165),t=a(5861),n=a(9439),c=a(2791),o=a(673),i=a(2481),d=a(7689),m=a(1087),u=a(184);s.default=function(){var e=(0,d.UO)().customURL,s=(0,c.useState)(null),a=(0,n.Z)(s,2),x=a[0],h=(a[1],(0,c.useState)("")),p=(0,n.Z)(h,2),v=p[0],f=p[1],j=(0,c.useState)(""),N=(0,n.Z)(j,2),b=N[0],y=N[1],g=(0,c.useState)(null),w=(0,n.Z)(g,2),U=w[0],Z=w[1],E=(0,c.useState)(null),k=(0,n.Z)(E,2),C=(k[0],k[1],(0,c.useState)({text:"",type:""})),R=(0,n.Z)(C,2),O=(R[0],R[1]),S=(0,c.useState)(!1),I=(0,n.Z)(S,2),L=I[0],P=(I[1],(0,c.useState)("")),M=(0,n.Z)(P,2),z=M[0],J=M[1],A=(0,c.useState)(""),D=(0,n.Z)(A,2),F=D[0],Q=D[1],T=(0,c.useState)(""),B=(0,n.Z)(T,2),H=B[0],_=B[1],G=(0,c.useState)(""),V=(0,n.Z)(G,2),q=V[0],K=V[1],W=(0,c.useState)(""),X=(0,n.Z)(W,2),Y=X[0],$=X[1],ee=(0,c.useState)(""),se=(0,n.Z)(ee,2),ae=(se[0],se[1]),le=(0,c.useState)(""),re=(0,n.Z)(le,2),te=re[0],ne=re[1],ce=(0,d.s0)();(0,c.useEffect)((function(){var s=function(){var s=(0,t.Z)((0,r.Z)().mark((function s(){var a,l,t,n;return(0,r.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,e){s.next=4;break}return console.log("Custom URL is not defined."),s.abrupt("return");case 4:return a=(0,i.IO)((0,i.hJ)(o.RZ,"userProfiles"),(0,i.ar)("customURL","==",e)),s.next=7,(0,i.PL)(a);case 7:(l=s.sent).empty?console.log("Custom URL not found:",e):(t=l.docs[0].data(),f(t.displayName.split(" ")[0]||""),y(t.displayName.split(" ")[1]||""),J(t.address||""),Q(t.city||""),_(t.county||""),K(t.postcode||""),$(t.mobileNumber||""),ne(t.role||""),ae(t.email||""),Z(t.photoURL||null),n=l.docs[0].id,console.log("Other User UID:",n)),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(0),console.error("Error fetching data:",s.t0);case 14:case"end":return s.stop()}}),s,null,[[0,11]])})));return function(){return s.apply(this,arguments)}}();e&&s()}),[e]);var oe=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(){var s,a,t,n,c,d,m,u,x,h,p,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=o.I8.currentUser){e.next=4;break}throw new Error("User is not authenticated");case 4:return t=(0,i.hJ)(o.RZ,"userProfiles"),n=(0,i.hJ)(o.RZ,"expertApplications"),c=(0,i.JU)(t,s.uid),d=(0,i.JU)(n,s.uid),e.next=10,(0,i.QT)(c);case 10:return m=e.sent,e.next=13,(0,i.QT)(d);case 13:if(u=e.sent,!m.exists()){e.next=18;break}a=c,e.next=23;break;case 18:if(!u.exists()){e.next=22;break}a=d,e.next=23;break;case 22:throw new Error("User document not found in either userProfiles or expertApplications");case 23:return x=(0,i.JU)(o.RZ,a.path),e.next=26,(0,i.QT)(x);case 26:if(!(h=e.sent).exists()){e.next=33;break}return p=h.data(),(v=p.contacts||{})[otherUserUID]={},e.next=33,(0,i.pl)(x,(0,l.Z)((0,l.Z)({},p),{},{contacts:v}),{merge:!0});case 33:e.next=38;break;case 35:e.prev=35,e.t0=e.catch(0),console.error("Error adding contact:",e.t0.message);case 38:case"end":return e.stop()}}),e,null,[[0,35]])})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:"profile-container",children:[(0,u.jsx)("div",{className:"profile-intro-section",children:(0,u.jsx)("div",{className:"container"})}),(0,u.jsx)("div",{className:"profile-section",children:(0,u.jsx)("div",{className:"content profile-content ",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"card-profile"}),(0,u.jsxs)("div",{className:"row g-3",children:[(0,u.jsx)("div",{className:"card-body",children:(0,u.jsxs)("div",{className:"d-flex",children:[!L&&U&&(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:U,alt:"User Profile",className:"user-avatar large-avatar mb-3"}),(0,u.jsxs)("div",{className:"px-3",children:[(0,u.jsx)("div",{className:"card-title h5",children:"".concat(v," ").concat(b)}),(0,u.jsx)("div",{className:"text-muted  card-subtitle h6",children:te})]})]}),L&&(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"user-avatar large-avatar rounded-circle mb-3"}),(0,u.jsxs)("div",{className:"px-3",children:[(0,u.jsx)("div",{className:"card-title",children:"".concat(v," ").concat(b)}),(0,u.jsx)("div",{className:"fw-normal card-subtitle mb-4 h6",children:te})]})]})]})}),(0,u.jsxs)("div",{className:"d-flex responsive-buttons",children:[(0,u.jsx)(m.rU,{to:"/chat",children:(0,u.jsxs)("button",{type:"button",className:"me-4 btn btn-primary btn-sm rounded-pill pt-2 pb-2",onClick:function(){var s=(0,i.IO)((0,i.hJ)(o.RZ,"userProfiles"),(0,i.ar)("customURL","==",e));(0,i.PL)(s).then((function(s){if(s.empty)console.log("Custom URL not found:",e);else{var a=s.docs[0].id,l=o.I8.currentUser.uid;console.log("Current User UID:",l),console.log("Other User UID:",a),ce("/chat",{state:{currentUserUID:l,otherUserUID:a}})}})).catch((function(e){console.error("Error fetching data:",e),O({text:"Error accessing chat",type:"error"})}))},children:[(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,u.jsx)("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z",clipRule:"evenodd"})}),"Message"]})}),(0,u.jsxs)("button",{onClick:oe,type:"button",className:"btn btn-secondary btn-sm rounded-pill pt-2 pb-2",children:[(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,u.jsx)("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})}),"Connect"]})]})]}),(0,u.jsx)("div",{className:"my-4",children:(0,u.jsxs)("h3",{children:["Profile of ",(0,u.jsx)("span",{children:" "}),"".concat(v," ").concat(b)]})}),(0,u.jsx)("form",{className:"file-upload",children:(0,u.jsx)("div",{className:"row mb-4 gx-4",children:(0,u.jsx)("div",{className:"col-xl-8 col-12",children:(0,u.jsx)("div",{className:"",children:(0,u.jsxs)("div",{className:"card-body card-profile",children:[(0,u.jsxs)("div",{className:"row g-3",children:[(0,u.jsx)("h4",{className:"mb-4",children:"General information"}),(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("label",{className:"form-label",children:"First Name"}),(0,u.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:v,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("label",{className:"form-label",children:"Last Name "}),(0,u.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:b,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email "}),(0,u.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:x?x.email:"",readOnly:!0,style:{pointerEvents:"none"}})]}),(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("label",{className:"form-label",children:"Mobile number "}),(0,u.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Phone number",value:Y,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("label",{className:"form-label",children:"Role/Expertise "}),(0,u.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"your Role",value:te,onChange:function(e){return ne(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]})]}),(0,u.jsx)("div",{className:"py-5 rounded mt-4",children:(0,u.jsxs)("div",{className:"row g-3",children:[(0,u.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("label",{className:"form-label",children:"Address"}),(0,u.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"",value:z,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("label",{className:"form-label",children:"City"}),(0,u.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"",value:F,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("label",{className:"form-label",children:"County"}),(0,u.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"",value:H,readOnly:!0,style:{pointerEvents:"none"}})]}),(0,u.jsxs)("div",{className:"col-md-6",children:[(0,u.jsx)("label",{className:"form-label",children:"Postcode"}),(0,u.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"",value:q,readOnly:!0,style:{pointerEvents:"none"}})]})]})})]})})})})})]})})})]})}}}]);
//# sourceMappingURL=285.fae11ba3.chunk.js.map