"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[915],{5416:function(e,t,n){n.r(t);var s=n(3433),r=n(4165),a=n(5861),o=n(9439),l=n(2791),i=n(673),c=n(2481),d=(n(5485),n(276),n(7689)),u=n(7386),m=n(184);t.default=function(){(0,d.UO)().customURL;var e=(0,l.useState)(null),t=(0,o.Z)(e,2),n=t[0],p=t[1],h=(0,l.useState)(""),x=(0,o.Z)(h,2),v=x[0],f=x[1],j=(0,l.useState)(""),g=(0,o.Z)(j,2),N=g[0],w=g[1],y=(0,l.useState)(null),b=(0,o.Z)(y,2),k=b[0],Z=b[1],L=(0,l.useState)(null),C=(0,o.Z)(L,2),E=(C[0],C[1]),S=(0,l.useState)({text:"",type:""}),U=(0,o.Z)(S,2),R=U[0],M=(U[1],(0,l.useState)({text:"",type:""})),B=(0,o.Z)(M,2),P=B[0],I=B[1],A=(0,l.useState)(!1),W=(0,o.Z)(A,2),_=W[0],T=W[1],z=(0,l.useState)(""),D=(0,o.Z)(z,2),J=D[0],O=D[1],F=(0,l.useState)(""),K=(0,o.Z)(F,2),Q=K[0],V=K[1],H=(0,l.useState)(""),q=(0,o.Z)(H,2),G=q[0],Y=q[1],X=(0,l.useState)(""),$=(0,o.Z)(X,2),ee=$[0],te=$[1],ne=(0,l.useState)(""),se=(0,o.Z)(ne,2),re=se[0],ae=se[1],oe=(0,l.useState)(""),le=(0,o.Z)(oe,2),ie=le[0],ce=le[1],de=(0,l.useState)(""),ue=(0,o.Z)(de,2),me=(ue[0],ue[1]),pe=(0,l.useState)(""),he=(0,o.Z)(pe,2),xe=he[0],ve=he[1],fe=(0,l.useState)(""),je=(0,o.Z)(fe,2),ge=je[0],Ne=je[1],we=(0,l.useState)([]),ye=(0,o.Z)(we,2),be=ye[0],ke=ye[1],Ze=(0,l.useState)(!1),Le=(0,o.Z)(Ze,2),Ce=(Le[0],Le[1],(0,l.useState)(!1)),Ee=(0,o.Z)(Ce,2),Se=Ee[0],Ue=Ee[1],Re=(0,l.useState)([]),Me=(0,o.Z)(Re,2),Be=Me[0],Pe=Me[1],Ie=(0,l.useState)(!1),Ae=(0,o.Z)(Ie,2),We=(Ae[0],Ae[1],(0,l.useState)([])),_e=(0,o.Z)(We,2);_e[0],_e[1],(0,l.useEffect)((function(){var e=i.I8.onAuthStateChanged(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,s,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return p(t),n=(0,c.JU)(i.RZ,"expertApplications",t.uid),e.next=5,(0,c.QT)(n);case 5:(s=e.sent).exists()?((a=s.data()).photoURL?Z(a.photoURL):Z(t.photoURL),f(a.first_name||t.displayName.split(" ")[0]||""),w(a.last_name||t.displayName.split(" ")[1]||""),O(a.address||""),V(a.city||""),Y(a.county||""),te(a.postcode||""),ae(a.mobileNumber||""),ce(a.occupation||""),me(t.email),ve(a.description)):Z(t.photoURL),e.next=18;break;case 9:O(""),V(""),Y(""),te(""),ae(""),Z(null),me(""),ce(""),ve("");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[]);var Te=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(t),s=(0,c.JU)(i.RZ,"expertApplications",n.uid),e.next=4,(0,c.r7)(s,{photoURL:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ze=function(){I({text:"",type:""})},De=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,s,a,o,l,d,u,m,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t=(0,c.JU)(i.RZ,"expertApplications",n.uid),e.next=6,(0,c.QT)(t);case 6:if(!(s=e.sent).exists()){e.next=22;break}return a=s.data(),o=a.approved||!1,l=a.customURL||!1,d=a.points||0,u=(0,c.JU)(i.RZ,"userProfiles",n.uid),e.next=15,(0,c.oe)(u);case 15:return m=i.I8.currentUser,p=m.photoURL,e.next=19,(0,c.pl)(t,{displayName:"".concat(v," ").concat(N),email:n.email,mobileNumber:document.getElementById("inputMobileNumber").value,occupation:document.getElementById("inputExpertise").value,address:document.getElementById("inputAddress").value,city:document.getElementById("inputCity").value,county:document.getElementById("inputCounty").value,postcode:document.getElementById("inputPostcode").value,description:document.getElementById("inputDescription").value,photoURL:p,approved:o,customURL:l,keywords:Be,points:d});case 19:E(null),I({text:"Profile updated successfully",type:"success"}),setTimeout((function(){return ze()}),3e3);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(2),I({text:"Error updating profile: ".concat(e.t0.message),type:"error"}),setTimeout((function(){return ze()}),3e3);case 28:case"end":return e.stop()}}),e,null,[[2,24]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){var e=i.I8.onAuthStateChanged(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,s,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return p(t),n=(0,c.JU)(i.RZ,"expertApplications",t.uid),e.next=5,(0,c.QT)(n);case 5:(s=e.sent).exists()&&(a=s.data(),ke(a.keywords||[]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[]);var Je=function(e){var t=(0,s.Z)(Be);t.splice(e,1),Pe(t)},Oe=function(e){var t=(0,s.Z)(be);t.splice(e,1),ke(t)},Fe=function(){console.log("Image clicked"),Ue(!0)};return(0,m.jsxs)("div",{className:"profile-container",children:[(0,m.jsx)("div",{className:"profile-intro-section",children:(0,m.jsx)("div",{className:"container"})}),(0,m.jsx)("div",{className:"profile-section",children:(0,m.jsx)("div",{className:"content profile-content ",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"card-profile"}),(0,m.jsx)("div",{className:"row g-3",children:(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsxs)("div",{className:"d-flex position-relative",children:[!_&&k&&(0,m.jsxs)("div",{className:"position-relative",children:[(0,m.jsx)("img",{src:k,alt:"User Profile",className:"user-avatar large-avatar mb-3",onError:function(){return T(!0)},onClick:Fe,style:{cursor:"pointer"}}),(0,m.jsx)("div",{className:"svg-icon",onClick:Fe,children:(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:2,stroke:"white",className:"w-6 h-6",children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),_&&(0,m.jsxs)("div",{className:"position-relative",children:[(0,m.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"user-avatar large-avatar rounded-circle mb-3",onClick:Fe,style:{cursor:"pointer"}}),(0,m.jsxs)("div",{className:"px-3",children:[(0,m.jsx)("div",{className:"card-title",children:"".concat(v," ").concat(N)}),(0,m.jsx)("div",{className:"fw-normal card-subtitle mb-4 h6",children:ie})]})]})]}),(0,m.jsxs)("div",{className:"px-3",children:[(0,m.jsx)("div",{className:"card-title",children:"".concat(v," ").concat(N)}),(0,m.jsx)("div",{className:"text-muted card-subtitle h6",children:ie})]}),(0,m.jsxs)("div",{children:["error"===R.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"red"},children:R.text}),"success"===R.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"green"},children:R.text}),"progress"===R.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"gray"},children:R.text})]})]})}),(0,m.jsxs)("div",{className:"",children:[(0,m.jsx)("h3",{children:"My Profile"}),(0,m.jsx)("hr",{})]}),(0,m.jsx)("form",{className:"file-upload",children:(0,m.jsxs)("div",{className:"row mb-4 gx-4",children:[(0,m.jsx)("div",{className:"col-xl-8 col-12",children:(0,m.jsx)("div",{className:"",children:(0,m.jsxs)("div",{className:"card-body card-profile",children:[(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4",children:"General information"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"First Name *"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:v,onChange:function(e){return f(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Last Name *"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:N,onChange:function(e){return w(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email *"}),(0,m.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:n?n.email:"",readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Mobile number *"}),(0,m.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"Enter your Phone number","aria-label":"Phone number",value:re,onChange:function(e){return ae(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-12",children:[(0,m.jsx)("label",{className:"form-label",children:"Role/Expertise *"}),(0,m.jsx)("input",{id:"inputExpertise",type:"text",className:"form-control form-control-lg",placeholder:"Enter your role/expertise","aria-label":"your Role",value:ie,onChange:function(e){return ce(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-12",children:[(0,m.jsx)("label",{className:"form-label",children:"Description of Expertise"}),(0,m.jsx)("textarea",{id:"inputDescription",type:"text",className:"form-control",rows:"4",placeholder:"Enter a brief description of your expertise or how you can help",value:xe,onChange:function(e){return ve(e.target.value)},style:{resize:"none"}})]})]}),(0,m.jsx)("div",{className:"pt-5 rounded mt-4",children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Address"}),(0,m.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"Enter your home address",value:J,onChange:function(e){return O(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"City"}),(0,m.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:Q,onChange:function(e){return V(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"County"}),(0,m.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:G,onChange:function(e){return Y(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Postcode"}),(0,m.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:ee,onChange:function(e){return te(e.target.value)}})]})]})})]})})}),(0,m.jsxs)("div",{className:"col-xl-4 col-12",children:[(0,m.jsx)("div",{className:""}),(0,m.jsx)("div",{className:""}),(0,m.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,m.jsx)("div",{className:"card-body card-profile",children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h5",{className:"mb-2",children:"Choose 5 Keywords"}),(0,m.jsx)("p",{children:"we recommend choosing keywords that you think will get you highest in the search results"}),(0,m.jsx)("div",{className:"me-3",children:(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:window.innerWidth<=600?"Add keywords here":"Type a keyword and press Space or Enter to add",value:ge,onChange:function(e){return Ne(e.target.value)},onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||""===ge.trim()||(e.preventDefault(),function(){if(""!==ge.trim()&&Be.length<5){var e=[].concat((0,s.Z)(Be),[ge.trim()]);Pe(e),Ne("")}}())},disabled:Be.length+be.length>=5})}),(0,m.jsxs)("div",{className:"keywords-list",children:[Be.map((function(e,t){return(0,m.jsxs)("div",{onClick:function(){return Je(t)},className:"keyword-container btn   d-inline-flex align-items-center  mb-2",children:[e,(0,m.jsx)("svg",{onClick:function(){return Je(t)},xmlns:"http://www.w3.org/2000/svg",cursor:"pointer",color:"#000000",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",height:"25",width:"25",style:{marginLeft:"auto"},children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]},t)})),be.map((function(e,t){return(0,m.jsxs)("div",{onClick:function(){return Oe(t)},className:"keyword-container btn   d-inline-flex align-items-center  mb-2",children:[e,(0,m.jsx)("svg",{onClick:function(){return Oe(t)},xmlns:"http://www.w3.org/2000/svg",cursor:"pointer",color:"#000000",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",height:"25",width:"25",style:{marginLeft:"auto"},children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]},t)})),Be.length+be.length>=5&&(0,m.jsx)("p",{className:"message",children:"Keyword limit reached. You cannot add more keywords."})]})]})})}),(0,m.jsxs)("div",{className:"mt-3",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-primary btn-lg mb-4",onClick:De,children:"Update profile"}),(0,m.jsxs)("div",{children:["error"===P.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"red"},children:P.text}),"success"===P.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"green"},children:P.text})]})]})]}),(0,m.jsx)("div",{})]})})]})})}),Se&&(0,m.jsx)("div",{className:"modal-overlay",children:(0,m.jsx)("div",{className:"modalcrop ",children:(0,m.jsx)(u.Z,{setPhotoURL:Z,setImageLoadError:T,closeModal:function(){Ue(!1)},photoURL:k,handleImageUpload:Te,handleImageError:function(){T(!0)},user:n,collectionName:"expertApplications"})})})]})}},7386:function(e,t,n){var s=n(4165),r=n(5861),a=n(9439),o=n(2791),l=n(28),i=(n(4333),n(276)),c=n(2481),d=n(673),u=(n(9643),n(184));t.Z=function(e){var t=e.closeModal,n=e.photoURL,m=e.handleImageUpload,p=e.setPhotoURL,h=e.user,x=e.collectionName,v=(0,o.useState)(n),f=(0,a.Z)(v,2),j=f[0],g=f[1],N=(0,o.useState)(null),w=(0,a.Z)(N,2),y=(w[0],w[1]),b=(0,o.useState)(!1),k=(0,a.Z)(b,2),Z=(k[0],k[1]),L=(0,o.useState)(null),C=(0,a.Z)(L,2),E=C[0],S=C[1],U=(0,o.useState)(null),R=(0,a.Z)(U,2),M=R[0],B=R[1],P=(0,o.useRef)(null),I=(0,o.useRef)(null),A=(0,o.useState)(!1),W=(0,a.Z)(A,2),_=W[0],T=W[1],z=function(e){var t=e.target.files[0];if(y(t),t){S(t.name);var n=new FileReader;n.onload=function(e){g(e.target.result)},n.readAsDataURL(t)}},D=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n,a,o,l,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=null===(t=P.current)||void 0===t?void 0:t.getCanvas())){e.next=6;break}return e.next=4,new Promise((function(e){return n.toBlob(e,"image/jpeg")}));case 4:(a=e.sent)&&(o=(0,i.iH)(d.tO,"profileImages/".concat(E)),l={contentType:"image/jpeg"},(u=(0,i.B0)(o,a,l)).on("state_changed",(function(e){}),(function(e){}),(function(){(0,i.Jt)(u.snapshot.ref).then(function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,(0,c.r7)(M,{photoURL:t});case 3:m(t),T(!0),setTimeout((function(){T(!1)}),3e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h||!h.uid){e.next=6;break}return t="".concat("","/images/arts/user.webp"),e.next=4,(0,c.r7)(M,{photoURL:t});case 4:p(t),Z(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){I.current=document.createElement("input"),I.current.type="file",I.current.accept="image/*",I.current.addEventListener("change",z);var e=(0,c.JU)(d.RZ,x,h.uid);B(e);var t=(0,c.cf)(e,(function(e){var t;!function(e){g(e)}(null===(t=e.data())||void 0===t?void 0:t.photoURL)}));return function(){return t()}}),[h.uid,x]),(0,u.jsxs)("div",{className:"modalimage align-items-center",children:[(0,u.jsxs)("div",{className:"top-section",children:[(0,u.jsx)("div",{style:{marginRight:"10px"},children:"Profile image"}),(0,u.jsx)("button",{className:"btn-crop",onClick:t,children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,u.jsx)("div",{className:"centerimage",children:(0,u.jsx)("div",{className:"croppers-wizard__body",children:(0,u.jsx)("div",{className:"default-cropper croppers-wizard__cropper",children:j?(0,u.jsx)(l.fle,{ref:P,src:j,stencilComponent:l.xqB,stencilProps:{grid:!0}}):null})})}),(0,u.jsxs)("div",{className:"button-section with-divider",children:[(0,u.jsx)("button",{className:"btn-crop",onClick:function(){I.current.click()},children:(0,u.jsxs)("div",{className:"button-content",children:[(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"})}),"New Photo"]})}),(0,u.jsx)("button",{className:"btn-crop",onClick:D,children:(0,u.jsxs)("div",{className:"button-content",children:[(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:[(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}),(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"})]}),"Upload Photo"]})}),_&&(0,u.jsx)("div",{className:"upload-success-icon",children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#009E60",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}),(0,u.jsx)("button",{className:"btn-crop",onClick:J,children:(0,u.jsxs)("div",{className:"button-content",children:[(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),"Delete Photo"]})})]})]})}}}]);
//# sourceMappingURL=915.206a80c0.chunk.js.map