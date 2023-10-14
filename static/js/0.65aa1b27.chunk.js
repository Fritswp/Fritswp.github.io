"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[0],{8e3:function(e,t,l){l.r(t);var a=l(3433),s=l(4165),r=l(5861),n=l(9439),o=l(2791),c=l(673),i=l(2481),d=l(6635),u=l(276),m=l(7689),p=l(184);t.default=function(){var e=(0,m.UO)().customURL;console.log("Custom URL:",e);var t=(0,o.useState)(null),l=(0,n.Z)(t,2),h=l[0],x=l[1],f=(0,o.useState)(""),v=(0,n.Z)(f,2),g=v[0],b=v[1],N=(0,o.useState)(""),y=(0,n.Z)(N,2),j=y[0],w=y[1],C=(0,o.useState)(null),Z=(0,n.Z)(C,2),E=Z[0],k=Z[1],P=(0,o.useState)(null),R=(0,n.Z)(P,2),I=R[0],U=R[1],B=(0,o.useState)({text:"",type:""}),S=(0,n.Z)(B,2),L=S[0],M=S[1],z=(0,o.useState)(!1),A=(0,n.Z)(z,2),F=A[0],J=A[1],G=(0,o.useState)(""),D=(0,n.Z)(G,2),H=D[0],O=D[1],T=(0,o.useState)(""),_=(0,n.Z)(T,2),K=_[0],q=_[1],Q=(0,o.useState)(""),V=(0,n.Z)(Q,2),W=V[0],X=V[1],Y=(0,o.useState)(""),$=(0,n.Z)(Y,2),ee=$[0],te=$[1],le=(0,o.useState)(""),ae=(0,n.Z)(le,2),se=ae[0],re=ae[1],ne=(0,o.useState)(""),oe=(0,n.Z)(ne,2),ce=oe[0],ie=oe[1],de=(0,o.useState)(""),ue=(0,n.Z)(de,2),me=(ue[0],ue[1]);(0,o.useEffect)((function(){var e=c.I8.onAuthStateChanged(function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var l,a,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return x(t),l=(0,i.JU)(c.RZ,"userProfiles",t.uid),e.next=5,(0,i.QT)(l);case 5:(a=e.sent).exists()?((r=a.data()).photoURL?k(r.photoURL):k(t.photoURL),b(r.firstName||t.displayName.split(" ")[0]||""),w(r.lastName||t.displayName.split(" ")[1]||""),O(r.address||""),q(r.city||""),X(r.county||""),te(r.postcode||""),re(r.mobileNumber||""),ie(r.role||""),me(t.email)):(b(t.displayName.split(" ")[0]||""),w(t.displayName.split(" ")[1]||""),k(t.photoURL),me(t.email)),e.next=17;break;case 9:O(""),q(""),X(""),te(""),re(""),k(null),me(""),ie("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[]);var pe=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var l,a,n,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l=t.target.files[0])){e.next=21;break}if(!(l.size>5242880)){e.next=5;break}return M({text:"File size is too big, max 500kb. Please select a smaller file.",type:"error"}),e.abrupt("return");case 5:if(a={contentType:l.type},!I){e.next=18;break}return e.prev=7,e.next=10,(0,u.oq)(I);case 10:M({text:"Profile photo removed",type:"progress"}),console.log("Profile photo removed"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(7),M({text:"Error deleting previous photo: ".concat(e.t0.message),type:"error"}),console.error("Error deleting previous photo:",e.t0);case 18:n=(0,u.iH)(c.tO,"profileImages/".concat(l.name)),(o=(0,u.B0)(n,l,a)).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;M({text:"Upload is ".concat(t.toFixed(2),"% done"),type:"progress"})}),(function(e){M({text:"Error uploading image: ".concat(e.message),type:"error"}),console.error("Error uploading image:",e),J(!0)}),(function(){(0,u.Jt)(o.snapshot.ref).then(function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("File available at",t),(0,d.ck)(h,{photoURL:t}).then((0,r.Z)((0,s.Z)().mark((function e(){var l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M({text:"Profile photo updated successfully",type:"success"}),console.log("Profile photo updated successfully"),k(t),U(o.snapshot.ref),J(!1),l=(0,i.JU)(c.RZ,"userProfiles",h.uid),e.next=8,(0,i.r7)(l,{photoURL:t});case 8:case"end":return e.stop()}}),e)})))).catch((function(e){M({text:"Error updating profile photo: ".concat(e.message),type:"error"}),console.error("Error updating profile photo:",e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}));case 21:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,l,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,t=(0,i.JU)(c.RZ,"userProfiles",h.uid),!I){e.next=14;break}return l=c.I8.currentUser,a=l.photoURL,e.next=9,(0,i.pl)(t,{displayName:"".concat(g," ").concat(j),email:h.email,mobileNumber:document.getElementById("inputMobileNumber").value,role:document.getElementById("inputRole").value,address:document.getElementById("inputAddress").value,city:document.getElementById("inputCity").value,county:document.getElementById("inputCounty").value,postcode:document.getElementById("inputPostcode").value,photoURL:a});case 9:U(null),M({text:"Profile updated successfully",type:"success"}),console.log("Profile and photo updated successfully"),e.next=18;break;case 14:return e.next=16,(0,i.pl)(t,{displayName:"".concat(g," ").concat(j),email:h.email,mobileNumber:document.getElementById("inputMobileNumber").value,role:document.getElementById("inputRole").value,address:document.getElementById("inputAddress").value,city:document.getElementById("inputCity").value,county:document.getElementById("inputCounty").value,postcode:document.getElementById("inputPostcode").value,photoURL:E});case 16:M({text:"Profile updated successfully",type:"success"}),console.log("Profile updated successfully");case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(2),M({text:"Error updating profile: ".concat(e.t0.message),type:"error"}),console.error("Error updating profile: ",e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(){return e.apply(this,arguments)}}(),xe=(0,o.useState)([]),fe=(0,n.Z)(xe,2),ve=fe[0],ge=fe[1],be=(0,o.useState)(""),Ne=(0,n.Z)(be,2),ye=Ne[0],je=Ne[1],we=function(e){" "===e.key&&ye&&ve.length<5&&(ge([].concat((0,a.Z)(ve),[ye])),je(""),e.preventDefault())};return(0,p.jsxs)("div",{className:"profile-container",children:[(0,p.jsx)("div",{className:"profile-intro-section",children:(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"row align-items-center text-white",children:h&&(0,p.jsx)("div",{className:"welcome-text",children:(0,p.jsxs)("h1",{className:"display-3 fw-bold text-capitalize",children:["Please submit your information, ",(0,p.jsx)("span",{className:"email-h3",children:h.email})]})})})})}),(0,p.jsx)("div",{className:"profile-section",children:(0,p.jsx)("div",{className:"content",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"my-4",children:[(0,p.jsx)("h3",{children:"My Profile"}),(0,p.jsx)("hr",{})]}),(0,p.jsxs)("div",{className:"row mb-2 gx-4",children:[(0,p.jsx)("div",{className:"col-xl-8 col-12",children:(0,p.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,p.jsxs)("div",{className:"card-body card-profile",children:[(0,p.jsxs)("div",{className:"row g-3",children:[(0,p.jsx)("h4",{className:"mb-4",children:"General information"}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"First Name *"}),(0,p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:g,onChange:function(e){return b(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Last Name *"}),(0,p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:j,onChange:function(e){return w(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email *"}),(0,p.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:h?h.email:"",readOnly:!0})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Mobile number *"}),(0,p.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"Enter your Phone number","aria-label":"Phone number",value:se,onChange:function(e){return re(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Role/Expertise *"}),(0,p.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"Enter your role/expertise","aria-label":"your Role",value:ce,onChange:function(e){return ie(e.target.value)}})]})]}),(0,p.jsx)("div",{className:" rounded mt-4",children:(0,p.jsxs)("div",{className:"row g-3",children:[(0,p.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Address"}),(0,p.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"Enter your home address",value:H,onChange:function(e){return O(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"City"}),(0,p.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:K,onChange:function(e){return q(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"County"}),(0,p.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:W,onChange:function(e){return X(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Postcode"}),(0,p.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:ee,onChange:function(e){return te(e.target.value)}})]})]})})]})})}),(0,p.jsxs)("div",{className:"col-xl-4 col-12",children:[(0,p.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,p.jsxs)("div",{className:"card-profile",children:[(0,p.jsx)("div",{className:"profile-cover rounded-top"}),(0,p.jsx)("div",{className:"row g-3 ",children:(0,p.jsx)("div",{className:"text-center",children:(0,p.jsxs)("div",{className:"pb-5 card-body",children:[!F&&E&&(0,p.jsx)("img",{src:E,alt:"User Profile",className:"card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-5",onError:function(){return J(!0)},onChange:function(e){return k(e.target.value)}}),F&&(0,p.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-5",onChange:function(e){return k(e.target.value)}}),(0,p.jsxs)("div",{children:["error"===L.type&&(0,p.jsx)("p",{className:"fw-light",style:{color:"red"},children:L.text}),"success"===L.type&&(0,p.jsx)("p",{className:"fw-light",style:{color:"green"},children:L.text}),"progress"===L.type&&(0,p.jsx)("p",{className:"fw-light",style:{color:"gray"},children:L.text})]}),(0,p.jsxs)("div",{className:"card-title h5",children:["".concat(g," ").concat(j)," "]}),(0,p.jsx)("div",{className:"fw-normal card-subtitle mb-4 h6",children:ce}),(0,p.jsxs)("button",{type:"button",className:"me-4 btn btn-primary btn-sm rounded-pill pt-2 pb-2",children:[(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,p.jsx)("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})}),"Message"]}),(0,p.jsxs)("button",{type:"button",className:"btn btn-secondary btn-sm rounded-pill pt-2 pb-2",children:[(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z",clipRule:"evenodd"})}),"Connect"]})]})})})]})}),(0,p.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,p.jsx)("div",{className:"card-body card-profile",children:(0,p.jsxs)("div",{className:"row g-3  mb-3",children:[(0,p.jsx)("h5",{className:"mb-4",children:"Select profile photo"}),(0,p.jsx)("div",{className:"d-xl-flex align-items-center",children:(0,p.jsx)("div",{className:"file-field",children:(0,p.jsx)("div",{className:"d-flex justify-content-xl-center",children:(0,p.jsxs)("div",{className:"d-flex",children:[(0,p.jsx)("span",{className:"icon icon-md",onClick:function(){document.getElementById("customFile").click()},style:{cursor:"pointer"},children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"45",className:"w-6 h-6 me-3",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z",clipRule:"evenodd"})})}),(0,p.jsx)("input",{type:"file",accept:"image/*",id:"customFile",onChange:pe,style:{display:"none"}}),(0,p.jsxs)("div",{className:"d-md-block text-start",children:[(0,p.jsx)("div",{className:"fw-normal text-dark mb-1",children:"Choose Image"}),(0,p.jsx)("div",{className:"text-gray small",children:"JPG, GIF or PNG. Max size of 800K"})]})]})})})})]})})})]})]}),(0,p.jsx)("div",{className:"row mb-4 gx-4",children:(0,p.jsx)("div",{className:"col-xl-12 col-12",children:(0,p.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,p.jsxs)("div",{className:"card-body card-profile",children:[(0,p.jsxs)("div",{className:"row g-3",children:[(0,p.jsx)("h4",{className:"mb-4 mt-0",children:"Expertise"}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Please list your areas that you would like to be verified for"}),(0,p.jsxs)("div",{className:"input-group mb-3",children:[(0,p.jsx)("input",{type:"text",className:"form-control form-control-lg",value:ye,onChange:function(e){je(e.target.value)}}),(0,p.jsx)("button",{className:"btn btn-primary",onClick:function(){ye&&ve.length<5&&(ge([].concat((0,a.Z)(ve),[ye])),je(""))},style:{marginLeft:"5px"},disabled:!ye||ve.length>=5,children:"Add"})]}),(0,p.jsx)("ul",{className:"list-group",children:ve.map((function(e,t){return(0,p.jsxs)("li",{className:"list-group-item",children:[e,(0,p.jsx)("button",{className:"btn btn-danger btn-sm float-end",onClick:function(){return function(e){var t=(0,a.Z)(ve);t.splice(e,1),ge(t)}(t)},onKeyDown:we,children:"Remove"})]},t)}))})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"City"}),(0,p.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:K,onChange:function(e){return q(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"County"}),(0,p.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:W,onChange:function(e){return X(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Postcode"}),(0,p.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:ee,onChange:function(e){return te(e.target.value)}})]})]}),(0,p.jsx)("div",{className:"mt-3",children:(0,p.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:he,children:"Update profile"})})]})})})}),(0,p.jsx)("div",{className:"gap-3 d-md-flex justify-content-md-end text-center",children:(0,p.jsx)("button",{type:"button",className:"btn btn-danger btn-lg",children:"Delete profile"})})]})})})]})}}}]);
//# sourceMappingURL=0.65aa1b27.chunk.js.map