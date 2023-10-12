"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[0],{8e3:function(e,t,l){l.r(t);var s=l(4165),a=l(5861),r=l(9439),n=l(2791),o=l(673),c=l(2481),i=l(6635),d=l(276),u=l(7689),m=l(184);t.default=function(){var e,t,l=(0,u.UO)().customURL;console.log("Custom URL:",l);var p=(0,n.useState)(null),h=(0,r.Z)(p,2),x=h[0],f=h[1],v=(0,n.useState)(""),g=(0,r.Z)(v,2),y=g[0],N=g[1],b=(0,n.useState)(""),j=(0,r.Z)(b,2),w=j[0],C=j[1],E=(0,n.useState)(null),Z=(0,r.Z)(E,2),k=Z[0],P=Z[1],R=(0,n.useState)(null),I=(0,r.Z)(R,2),B=I[0],U=I[1],S=(0,n.useState)({text:"",type:""}),L=(0,r.Z)(S,2),M=L[0],z=L[1],A=(0,n.useState)(!1),F=(0,r.Z)(A,2),J=F[0],G=F[1],T=(0,n.useState)(""),H=(0,r.Z)(T,2),O=H[0],_=H[1],q=(0,n.useState)(""),D=(0,r.Z)(q,2),K=D[0],Q=D[1],V=(0,n.useState)(""),W=(0,r.Z)(V,2),X=W[0],Y=W[1],$=(0,n.useState)(""),ee=(0,r.Z)($,2),te=ee[0],le=ee[1],se=(0,n.useState)(""),ae=(0,r.Z)(se,2),re=ae[0],ne=ae[1],oe=(0,n.useState)(""),ce=(0,r.Z)(oe,2),ie=ce[0],de=ce[1],ue=(0,n.useState)(""),me=(0,r.Z)(ue,2),pe=(me[0],me[1]);return(0,n.useEffect)((function(){var e,t=o.I8.onAuthStateChanged((function(t){return(e=e||(0,a.Z)((0,s.Z)().mark((function e(t){var l,a,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return f(t),l=(0,c.JU)(o.RZ,"userProfiles",t.uid),e.next=5,(0,c.QT)(l);case 5:(a=e.sent).exists()?((r=a.data()).photoURL?P(r.photoURL):P(t.photoURL),N(r.firstName||t.displayName.split(" ")[0]||""),C(r.lastName||t.displayName.split(" ")[1]||""),_(r.address||""),Q(r.city||""),Y(r.county||""),le(r.postcode||""),ne(r.mobileNumber||""),de(r.role||""),pe(t.email)):(N(t.displayName.split(" ")[0]||""),C(t.displayName.split(" ")[1]||""),P(t.photoURL),pe(t.email)),e.next=17;break;case 9:_(""),Q(""),Y(""),le(""),ne(""),P(null),pe(""),de("");case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}));return function(){t()}}),[]),(0,m.jsxs)("div",{className:"profile-container",children:[(0,m.jsx)("div",{className:"profile-intro-section",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row align-items-center text-white",children:[x&&(0,m.jsx)("div",{className:"welcome-text",children:(0,m.jsxs)("h1",{className:"display-3 fw-bold text-capitalize",children:["Become an Expert, ",(0,m.jsx)("span",{className:"email-h3",children:x.email}),"!"]})}),(0,m.jsx)("span",{className:"display-2--description lh-base mb-2",children:"The most sensible way to use AI and get the results you need!"})]})})}),(0,m.jsx)("div",{className:"profile-section",children:(0,m.jsx)("div",{className:"content",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"my-4",children:[(0,m.jsx)("h3",{children:"My Profile"}),(0,m.jsx)("hr",{})]}),(0,m.jsxs)("form",{className:"file-upload",children:[(0,m.jsxs)("div",{className:"row mb-4 gx-4",children:[(0,m.jsx)("div",{className:"col-xl-8 col-12",children:(0,m.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,m.jsxs)("div",{className:"card-body card-profile",children:[(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4",children:"General information"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"First Name *"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:y,onChange:function(e){return N(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Last Name *"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:w,onChange:function(e){return C(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email *"}),(0,m.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:x?x.email:"",readOnly:!0})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Mobile number *"}),(0,m.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"Enter your Phone number","aria-label":"Phone number",value:re,onChange:function(e){return ne(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Role/Expertise *"}),(0,m.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"Enter your role/expertise","aria-label":"your Role",value:ie,onChange:function(e){return de(e.target.value)}})]})]}),(0,m.jsx)("div",{className:"py-5 rounded mt-4",children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Address"}),(0,m.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"Enter your home address",value:O,onChange:function(e){return _(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"City"}),(0,m.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:K,onChange:function(e){return Q(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"County"}),(0,m.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:X,onChange:function(e){return Y(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Postcode"}),(0,m.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:te,onChange:function(e){return le(e.target.value)}})]})]})}),(0,m.jsx)("div",{className:"py-5 rounded mt-4",children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4 mt-0",children:"Expertise"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Explain in your own words what area of expertise you have and why you feel you're qualified to provide answers and guidance to users on our platform."}),(0,m.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg"})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"City"}),(0,m.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:K,onChange:function(e){return Q(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"County"}),(0,m.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:X,onChange:function(e){return Y(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Postcode"}),(0,m.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:te,onChange:function(e){return le(e.target.value)}})]})]})}),(0,m.jsx)("div",{className:"mt-3",children:(0,m.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){return(t=t||(0,a.Z)((0,s.Z)().mark((function e(){var t,l,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,t=(0,c.JU)(o.RZ,"userProfiles",x.uid),!B){e.next=14;break}return l=o.I8.currentUser,a=l.photoURL,e.next=9,(0,c.pl)(t,{displayName:"".concat(y," ").concat(w),email:x.email,mobileNumber:document.getElementById("inputMobileNumber").value,role:document.getElementById("inputRole").value,address:document.getElementById("inputAddress").value,city:document.getElementById("inputCity").value,county:document.getElementById("inputCounty").value,postcode:document.getElementById("inputPostcode").value,photoURL:a});case 9:U(null),z({text:"Profile updated successfully",type:"success"}),console.log("Profile and photo updated successfully"),e.next=18;break;case 14:return e.next=16,(0,c.pl)(t,{displayName:"".concat(y," ").concat(w),email:x.email,mobileNumber:document.getElementById("inputMobileNumber").value,role:document.getElementById("inputRole").value,address:document.getElementById("inputAddress").value,city:document.getElementById("inputCity").value,county:document.getElementById("inputCounty").value,postcode:document.getElementById("inputPostcode").value,photoURL:k});case 16:z({text:"Profile updated successfully",type:"success"}),console.log("Profile updated successfully");case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(2),z({text:"Error updating profile: ".concat(e.t0.message),type:"error"}),console.error("Error updating profile: ",e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,20]])})))).apply(this,arguments)},children:"Update profile"})})]})})}),(0,m.jsxs)("div",{className:"col-xl-4 col-12",children:[(0,m.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,m.jsxs)("div",{className:"card-profile",children:[(0,m.jsx)("div",{className:"profile-cover rounded-top"}),(0,m.jsx)("div",{className:"row g-3 ",children:(0,m.jsx)("div",{className:"text-center",children:(0,m.jsxs)("div",{className:"pb-5 card-body",children:[!J&&k&&(0,m.jsx)("img",{src:k,alt:"User Profile",className:"card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-5",onError:function(){return G(!0)},onChange:function(e){return P(e.target.value)}}),J&&(0,m.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-5",onChange:function(e){return P(e.target.value)}}),(0,m.jsxs)("div",{children:["error"===M.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"red"},children:M.text}),"success"===M.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"green"},children:M.text}),"progress"===M.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"gray"},children:M.text})]}),(0,m.jsxs)("div",{className:"card-title h5",children:["".concat(y," ").concat(w)," "]}),(0,m.jsx)("div",{className:"fw-normal card-subtitle mb-4 h6",children:ie}),(0,m.jsxs)("button",{type:"button",className:"me-4 btn btn-primary btn-sm rounded-pill pt-2 pb-2",children:[(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,m.jsx)("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})}),"Message"]}),(0,m.jsxs)("button",{type:"button",className:"btn btn-secondary btn-sm rounded-pill pt-2 pb-2",children:[(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,m.jsx)("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z",clipRule:"evenodd"})}),"Connect"]})]})})})]})}),(0,m.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,m.jsx)("div",{className:"card-body card-profile",children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h5",{className:"mb-4",children:"Select profile photo"}),(0,m.jsx)("div",{className:"d-xl-flex align-items-center",children:(0,m.jsx)("div",{className:"file-field",children:(0,m.jsx)("div",{className:"d-flex justify-content-xl-center",children:(0,m.jsxs)("div",{className:"d-flex",children:[(0,m.jsx)("span",{className:"icon icon-md",onClick:function(){document.getElementById("customFile").click()},style:{cursor:"pointer"},children:(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"45",className:"w-6 h-6 me-3",children:(0,m.jsx)("path",{fillRule:"evenodd",d:"M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z",clipRule:"evenodd"})})}),(0,m.jsx)("input",{type:"file",accept:"image/*",id:"customFile",onChange:function(t){return(e=e||(0,a.Z)((0,s.Z)().mark((function e(t){var l,r,n,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l=t.target.files[0])){e.next=21;break}if(!(l.size>5242880)){e.next=5;break}return z({text:"File size is too big, max 500kb. Please select a smaller file.",type:"error"}),e.abrupt("return");case 5:if(r={contentType:l.type},!B){e.next=18;break}return e.prev=7,e.next=10,(0,d.oq)(B);case 10:z({text:"Profile photo removed",type:"progress"}),console.log("Profile photo removed"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(7),z({text:"Error deleting previous photo: ".concat(e.t0.message),type:"error"}),console.error("Error deleting previous photo:",e.t0);case 18:n=(0,d.iH)(o.tO,"profileImages/".concat(l.name)),(u=(0,d.B0)(n,l,r)).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;z({text:"Upload is ".concat(t.toFixed(2),"% done"),type:"progress"})}),(function(e){z({text:"Error uploading image: ".concat(e.message),type:"error"}),console.error("Error uploading image:",e),G(!0)}),(function(){var e;(0,d.Jt)(u.snapshot.ref).then((function(t){return(e=e||(0,a.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("File available at",t),(0,i.ck)(x,{photoURL:t}).then((0,a.Z)((0,s.Z)().mark((function e(){var l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z({text:"Profile photo updated successfully",type:"success"}),console.log("Profile photo updated successfully"),P(t),U(u.snapshot.ref),G(!1),l=(0,c.JU)(o.RZ,"userProfiles",x.uid),e.next=8,(0,c.r7)(l,{photoURL:t});case 8:case"end":return e.stop()}}),e)})))).catch((function(e){z({text:"Error updating profile photo: ".concat(e.message),type:"error"}),console.error("Error updating profile photo:",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}))}));case 21:case"end":return e.stop()}}),e,null,[[7,14]])})))).apply(this,arguments)},style:{display:"none"}}),(0,m.jsxs)("div",{className:"d-md-block text-start",children:[(0,m.jsx)("div",{className:"fw-normal text-dark mb-1",children:"Choose Image"}),(0,m.jsx)("div",{className:"text-gray small",children:"JPG, GIF or PNG. Max size of 800K"})]})]})})})})]})})})]})]}),(0,m.jsx)("div",{className:"gap-3 d-md-flex justify-content-md-end text-center",children:(0,m.jsx)("button",{type:"button",className:"btn btn-danger btn-lg",children:"Delete profile"})})]})]})})})]})}}}]);
//# sourceMappingURL=0.06dec7e2.chunk.js.map