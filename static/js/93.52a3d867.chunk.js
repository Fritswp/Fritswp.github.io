"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[93],{6330:function(e,t,s){s.r(t);var n=s(4165),r=s(5861),a=s(9439),l=s(2791),o=s(673),c=s(2481),i=(s(5485),s(276),s(7689)),u=s(7386),d=s(184);t.default=function(){(0,i.UO)().customURL;var e=(0,l.useState)(null),t=(0,a.Z)(e,2),s=t[0],m=t[1],p=(0,l.useState)(""),h=(0,a.Z)(p,2),x=h[0],v=h[1],f=(0,l.useState)(""),g=(0,a.Z)(f,2),j=g[0],N=g[1],y=(0,l.useState)(null),b=(0,a.Z)(y,2),w=b[0],k=b[1],Z=(0,l.useState)(null),L=(0,a.Z)(Z,2),C=L[0],R=L[1],E=(0,l.useState)({text:"",type:""}),U=(0,a.Z)(E,2),S=U[0],P=U[1],B=(0,l.useState)({text:"",type:""}),I=(0,a.Z)(B,2),M=I[0],A=I[1],_=(0,l.useState)(!1),z=(0,a.Z)(_,2),W=z[0],J=z[1],F=(0,l.useState)(""),T=(0,a.Z)(F,2),D=T[0],O=T[1],V=(0,l.useState)(""),H=(0,a.Z)(V,2),q=H[0],G=H[1],Q=(0,l.useState)(""),K=(0,a.Z)(Q,2),X=K[0],Y=K[1],$=(0,l.useState)(""),ee=(0,a.Z)($,2),te=ee[0],se=ee[1],ne=(0,l.useState)(""),re=(0,a.Z)(ne,2),ae=re[0],le=re[1],oe=(0,l.useState)(""),ce=(0,a.Z)(oe,2),ie=ce[0],ue=ce[1],de=(0,l.useState)(""),me=(0,a.Z)(de,2),pe=me[0],he=me[1],xe=(0,l.useState)(null),ve=(0,a.Z)(xe,2),fe=(ve[0],ve[1],(0,l.useState)(!1)),ge=(0,a.Z)(fe,2),je=ge[0],Ne=ge[1];(0,l.useEffect)((function(){var e=o.I8.onAuthStateChanged(function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var s,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return m(t),s=(0,c.JU)(o.RZ,"userProfiles",t.uid),e.next=5,(0,c.QT)(s);case 5:(r=e.sent).exists()?((a=r.data()).photoURL?k(a.photoURL):k(t.photoURL),v(a.firstName||t.displayName.split(" ")[0]||""),N(a.lastName||t.displayName.split(" ")[1]||""),O(a.address||""),G(a.city||""),Y(a.county||""),se(a.postcode||""),le(a.mobileNumber||""),ue(a.role||""),he(t.email)):(v(t.displayName.split(" ")[0]||""),N(t.displayName.split(" ")[1]||""),k(t.photoURL),he(t.email)),e.next=17;break;case 9:O(""),G(""),Y(""),se(""),le(""),k(null),he(""),ue("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[]);var ye=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(t),r=(0,c.JU)(o.RZ,"userProfiles",s.uid),e.next=4,(0,c.r7)(r,{photoURL:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,t=(0,c.JU)(o.RZ,"userProfiles",s.uid),!C){e.next=13;break}return r=o.I8.currentUser,a=r.photoURL,e.next=9,(0,c.pl)(t,{displayName:"".concat(x," ").concat(j),email:pe,mobileNumber:document.getElementById("inputMobileNumber").value,role:document.getElementById("inputRole").value,address:document.getElementById("inputAddress").value,city:document.getElementById("inputCity").value,county:document.getElementById("inputCounty").value,postcode:document.getElementById("inputPostcode").value,photoURL:a},{merge:!0});case 9:R(null),P({text:"Profile updated successfully",type:"success"}),e.next=17;break;case 13:return e.next=15,(0,c.pl)(t,{displayName:"".concat(x," ").concat(j),email:pe,mobileNumber:document.getElementById("inputMobileNumber").value,role:document.getElementById("inputRole").value,address:document.getElementById("inputAddress").value,city:document.getElementById("inputCity").value,county:document.getElementById("inputCounty").value,postcode:document.getElementById("inputPostcode").value,photoURL:w},{merge:!0});case 15:R(null),A({text:"Profile updated successfully",type:"success"});case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(2),A({text:"Error updating profile: ".concat(e.t0.message),type:"error"}),setTimeout((function(){A({text:"",type:""})}),3e3);case 23:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(){return e.apply(this,arguments)}}(),we=function(){console.log("Image clicked"),Ne(!0)};return(0,d.jsxs)("div",{className:"profile-container",children:[(0,d.jsx)("div",{className:"profile-intro-section",children:(0,d.jsx)("div",{className:"container"})}),(0,d.jsx)("div",{className:"profile-section",children:(0,d.jsx)("div",{className:"content profile-content ",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"card-profile"}),(0,d.jsx)("div",{className:"row g-3",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsxs)("div",{className:"d-flex position-relative",children:[!W&&w&&(0,d.jsxs)("div",{className:"position-relative",children:[(0,d.jsx)("img",{src:w,alt:"User Profile",className:"user-avatar large-avatar mb-3",onError:function(){return J(!0)},onClick:we,style:{cursor:"pointer"}}),(0,d.jsx)("div",{className:"svg-icon",onClick:we,children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:2,stroke:"white",className:"w-6 h-6",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),W&&(0,d.jsx)("div",{className:"position-relative",children:(0,d.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"user-avatar large-avatar rounded-circle mb-3",onClick:we,style:{cursor:"pointer"}})})]}),(0,d.jsxs)("div",{children:["error"===S.type&&(0,d.jsx)("p",{className:"fw-light",style:{color:"red"},children:S.text}),"success"===S.type&&(0,d.jsx)("p",{className:"fw-light",style:{color:"green"},children:S.text}),"progress"===S.type&&(0,d.jsx)("p",{className:"fw-light",style:{color:"gray"},children:S.text})]}),(0,d.jsxs)("div",{className:"px-3",children:[(0,d.jsx)("div",{className:"card-title",children:"".concat(x," ").concat(j)}),(0,d.jsx)("div",{className:"text-muted card-subtitle h6",children:ie})]})]})}),(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("h3",{children:"My Profile"}),(0,d.jsx)("hr",{})]}),(0,d.jsxs)("form",{className:"file-upload",children:[(0,d.jsx)("div",{className:"row mb-4 gx-4",children:(0,d.jsx)("div",{className:"col-xl-8 col-12",children:(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"card-body card-profile",children:[(0,d.jsxs)("div",{className:"row g-3",children:[(0,d.jsx)("h4",{className:"mb-4",children:"General information"}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"First Name *"}),(0,d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:x,onChange:function(e){return v(e.target.value)}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Last Name *"}),(0,d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:j,onChange:function(e){return N(e.target.value)}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email *"}),(0,d.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:s?s.email:"",readOnly:!0})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Mobile number *"}),(0,d.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"Enter your Phone number","aria-label":"Phone number",value:ae,onChange:function(e){return le(e.target.value)}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Role/Expertise *"}),(0,d.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"Enter your role/expertise","aria-label":"your Role",value:ie,onChange:function(e){return ue(e.target.value)}})]})]}),(0,d.jsx)("div",{className:"py-5 rounded mt-4",children:(0,d.jsxs)("div",{className:"row g-3",children:[(0,d.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Address"}),(0,d.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"Enter your home address",value:D,onChange:function(e){return O(e.target.value)}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"City"}),(0,d.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:q,onChange:function(e){return G(e.target.value)}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"County"}),(0,d.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:X,onChange:function(e){return Y(e.target.value)}})]}),(0,d.jsxs)("div",{className:"col-md-6",children:[(0,d.jsx)("label",{className:"form-label",children:"Postcode"}),(0,d.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:te,onChange:function(e){return se(e.target.value)}})]})]})}),(0,d.jsxs)("div",{className:"mt-3",children:[(0,d.jsx)("button",{type:"button",className:"btn btn-primary btn-lg mb-4",onClick:be,children:"Update profile"}),(0,d.jsxs)("div",{children:["error"===M.type&&(0,d.jsx)("p",{className:"fw-light",style:{color:"red"},children:M.text}),"success"===M.type&&(0,d.jsx)("p",{className:"fw-light",style:{color:"green"},children:M.text})]})]})]})})})}),(0,d.jsx)("div",{className:"gap-3 d-md-flex justify-content-md-end text-center",children:(0,d.jsx)("button",{type:"button",className:"btn btn-danger btn-lg",children:"Delete profile"})})]})]})})}),je&&(0,d.jsx)("div",{className:"modal-overlay",children:(0,d.jsx)("div",{className:"modalcrop ",children:(0,d.jsx)(u.Z,{setPhotoURL:k,setImageLoadError:J,closeModal:function(){Ne(!1)},photoURL:w,handleImageUpload:ye,handleImageError:function(){J(!0)},user:s,collectionName:"userProfiles"})})})]})}},7386:function(e,t,s){var n=s(4165),r=s(5861),a=s(9439),l=s(2791),o=s(28),c=(s(4333),s(276)),i=s(2481),u=s(673),d=(s(9643),s(184));t.Z=function(e){var t=e.closeModal,s=e.photoURL,m=e.handleImageUpload,p=e.setPhotoURL,h=e.user,x=e.collectionName,v=(0,l.useState)(s),f=(0,a.Z)(v,2),g=f[0],j=f[1],N=(0,l.useState)(null),y=(0,a.Z)(N,2),b=(y[0],y[1]),w=(0,l.useState)(!1),k=(0,a.Z)(w,2),Z=(k[0],k[1]),L=(0,l.useState)(null),C=(0,a.Z)(L,2),R=C[0],E=C[1],U=(0,l.useState)(null),S=(0,a.Z)(U,2),P=S[0],B=S[1],I=(0,l.useRef)(null),M=(0,l.useRef)(null),A=(0,l.useState)(!1),_=(0,a.Z)(A,2),z=_[0],W=_[1],J=function(e){var t=e.target.files[0];if(b(t),t){E(t.name);var s=new FileReader;s.onload=function(e){j(e.target.result)},s.readAsDataURL(t)}},F=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,s,a,l,o,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(s=null===(t=I.current)||void 0===t?void 0:t.getCanvas())){e.next=6;break}return e.next=4,new Promise((function(e){return s.toBlob(e,"image/jpeg")}));case 4:(a=e.sent)&&(l=(0,c.iH)(u.tO,"profileImages/".concat(R)),o={contentType:"image/jpeg"},(d=(0,c.B0)(l,a,o)).on("state_changed",(function(e){}),(function(e){}),(function(){(0,c.Jt)(d.snapshot.ref).then(function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,(0,i.r7)(P,{photoURL:t});case 3:m(t),W(!0),setTimeout((function(){W(!1)}),3e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h||!h.uid){e.next=6;break}return t="".concat("","/images/arts/user.webp"),e.next=4,(0,i.r7)(P,{photoURL:t});case 4:p(t),Z(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){M.current=document.createElement("input"),M.current.type="file",M.current.accept="image/*",M.current.addEventListener("change",J);var e=(0,i.JU)(u.RZ,x,h.uid);B(e);var t=(0,i.cf)(e,(function(e){var t;!function(e){j(e)}(null===(t=e.data())||void 0===t?void 0:t.photoURL)}));return function(){return t()}}),[h.uid,x]),(0,d.jsxs)("div",{className:"modalimage align-items-center",children:[(0,d.jsxs)("div",{className:"top-section",children:[(0,d.jsx)("div",{style:{marginRight:"10px"},children:"Profile image"}),(0,d.jsx)("button",{className:"btn-crop",onClick:t,children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,d.jsx)("div",{className:"centerimage",children:(0,d.jsx)("div",{className:"croppers-wizard__body",children:(0,d.jsx)("div",{className:"default-cropper croppers-wizard__cropper",children:g?(0,d.jsx)(o.fle,{ref:I,src:g,stencilComponent:o.xqB,stencilProps:{grid:!0}}):null})})}),(0,d.jsxs)("div",{className:"button-section with-divider",children:[(0,d.jsx)("button",{className:"btn-crop",onClick:function(){M.current.click()},children:(0,d.jsxs)("div",{className:"button-content",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"})}),"New Photo"]})}),(0,d.jsx)("button",{className:"btn-crop",onClick:F,children:(0,d.jsxs)("div",{className:"button-content",children:[(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:[(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}),(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"})]}),"Upload Photo"]})}),z&&(0,d.jsx)("div",{className:"upload-success-icon",children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#009E60",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}),(0,d.jsx)("button",{className:"btn-crop",onClick:T,children:(0,d.jsxs)("div",{className:"button-content",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),"Delete Photo"]})})]})]})}}}]);
//# sourceMappingURL=93.52a3d867.chunk.js.map