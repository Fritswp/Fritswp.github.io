"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[591],{6330:function(e,t,r){r.r(t);var s=r(4165),n=r(5861),a=r(9439),o=r(2791),l=r(673),c=r(2481),i=r(5485),d=(r(276),r(7689)),u=r(7386),m=r(184);t.default=function(){(0,d.UO)().customURL;var e=(0,o.useState)(null),t=(0,a.Z)(e,2),r=t[0],p=t[1],h=(0,o.useState)(""),x=(0,a.Z)(h,2),f=x[0],v=x[1],g=(0,o.useState)(""),j=(0,a.Z)(g,2),N=j[0],b=j[1],y=(0,o.useState)(null),w=(0,a.Z)(y,2),k=w[0],L=w[1],Z=(0,o.useState)(null),C=(0,a.Z)(Z,2),E=(C[0],C[1],(0,o.useState)({text:"",type:""})),R=(0,a.Z)(E,2),U=R[0],S=(R[1],(0,o.useState)({text:"",type:""})),P=(0,a.Z)(S,2),M=P[0],B=P[1],I=(0,o.useState)(!1),A=(0,a.Z)(I,2),z=A[0],D=A[1],W=(0,o.useState)(""),V=(0,a.Z)(W,2),_=V[0],J=V[1],O=(0,o.useState)(""),T=(0,a.Z)(O,2),F=T[0],H=T[1],q=(0,o.useState)(""),G=(0,a.Z)(q,2),Q=G[0],K=G[1],X=(0,o.useState)(""),Y=(0,a.Z)(X,2),$=Y[0],ee=Y[1],te=(0,o.useState)(""),re=(0,a.Z)(te,2),se=re[0],ne=re[1],ae=(0,o.useState)(""),oe=(0,a.Z)(ae,2),le=oe[0],ce=oe[1],ie=(0,o.useState)(""),de=(0,a.Z)(ie,2),ue=de[0],me=de[1],pe=(0,o.useState)(null),he=(0,a.Z)(pe,2),xe=(he[0],he[1],(0,o.useState)("")),fe=(0,a.Z)(xe,2),ve=fe[0],ge=fe[1],je=(0,o.useState)(!1),Ne=(0,a.Z)(je,2),be=Ne[0],ye=Ne[1];(0,o.useEffect)((function(){var e=l.I8.onAuthStateChanged(function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t){var r,n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return p(t),r=(0,c.JU)(l.RZ,"userProfiles",t.uid),e.next=5,(0,c.QT)(r);case 5:(n=e.sent).exists()?((a=n.data()).photoURL?L(a.photoURL):L(t.photoURL),v(a.firstName||t.displayName.split(" ")[0]||""),b(a.lastName||t.displayName.split(" ")[1]||""),J(a.address||""),H(a.city||""),K(a.county||""),ee(a.postcode||""),ne(a.mobileNumber||""),ce(a.role||""),me(t.email),ge(a.description)):(v(t.displayName.split(" ")[0]||""),b(t.displayName.split(" ")[1]||""),L(t.photoURL),me(t.email)),e.next=18;break;case 9:J(""),H(""),K(""),ee(""),ne(""),L(null),me(""),ce(""),ge("");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[]);var we=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(t),n=(0,c.JU)(l.RZ,"userProfiles",r.uid),e.next=4,(0,c.r7)(n,{photoURL:t});case 4:(0,i.ck)(r,{photoURL:t}).then((function(){console.log("Profile photo updated successfully")})).catch((function(e){console.error("Error updating profile photo:",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t=l.I8.currentUser,e.next=6,(0,i.ck)(t,{displayName:"".concat(f," ").concat(N),photoURL:t.photoURL});case 6:return n=(0,c.JU)(l.RZ,"userProfiles",r.uid),e.next=9,(0,c.pl)(n,{displayName:"".concat(f," ").concat(N),firstName:f,lastName:N,email:ue,mobileNumber:document.getElementById("inputMobileNumber").value,role:document.getElementById("inputRole").value,address:document.getElementById("inputAddress").value,city:document.getElementById("inputCity").value,county:document.getElementById("inputCounty").value,postcode:document.getElementById("inputPostcode").value,description:document.getElementById("inputDescription").value,photoURL:k},{merge:!0});case 9:B({text:"Profile updated successfully",type:"success"}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),B({text:"Error updating profile: ".concat(e.t0.message),type:"error"}),setTimeout((function(){B({text:"",type:""})}),3e3);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),Le=function(){console.log("Image clicked"),ye(!0)};return(0,m.jsxs)("div",{className:"profile-container",children:[(0,m.jsx)("div",{className:"container"}),(0,m.jsx)("div",{className:"profile-section",children:(0,m.jsx)("div",{className:"content profile-content ",children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"card-profile"}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsxs)("div",{className:"Profile-image position-relative",children:[!z&&k&&(0,m.jsxs)("div",{className:"position-relative",children:[(0,m.jsx)("img",{src:k,alt:"User Profile",className:"user-avatar large-avatar mb-3",onError:function(){return D(!0)},onClick:Le,style:{cursor:"pointer"}}),(0,m.jsx)("div",{className:"svg-icon",onClick:Le,children:(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:2,stroke:"white",className:"w-6 h-6",children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),z&&(0,m.jsx)("div",{className:"position-relative",children:(0,m.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"user-avatar large-avatar rounded-circle mb-3",onClick:Le,style:{cursor:"pointer"}})})]}),(0,m.jsxs)("div",{children:["error"===U.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"red"},children:U.text}),"success"===U.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"green"},children:U.text}),"progress"===U.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"gray"},children:U.text})]}),(0,m.jsxs)("div",{className:"px-3",children:[(0,m.jsx)("div",{className:"card-title",children:"".concat(f," ").concat(N)}),(0,m.jsx)("div",{className:"text-muted card-subtitle h6",children:le})]})]}),(0,m.jsxs)("div",{className:"",children:[(0,m.jsx)("h3",{children:"My Profile"}),(0,m.jsx)("hr",{})]}),(0,m.jsxs)("form",{className:"file-upload",children:[(0,m.jsx)("div",{className:"row mb-4 gx-4",children:(0,m.jsx)("div",{className:"col-xl-8 col-12",children:(0,m.jsx)("div",{className:"",children:(0,m.jsxs)("div",{className:"card-body card-profile",children:[(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4",children:"General information"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"First Name *"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:f,onChange:function(e){return v(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Last Name *"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:N,onChange:function(e){return b(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email *"}),(0,m.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:r?r.email:"",readOnly:!0})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Mobile number *"}),(0,m.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"Enter your Phone number","aria-label":"Phone number",value:se,onChange:function(e){return ne(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Role/Expertise *"}),(0,m.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"Enter your role/expertise","aria-label":"your Role",value:le,onChange:function(e){return ce(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-12",children:[(0,m.jsx)("label",{className:"form-label",children:"Description of Expertise"}),(0,m.jsx)("textarea",{id:"inputDescription",type:"text",className:"form-control",rows:"4",placeholder:"Enter a brief description of your expertise or how you can help",value:ve,onChange:function(e){return ge(e.target.value)},style:{resize:"none"}})]})]}),(0,m.jsx)("div",{className:"py-5 rounded mt-4",children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Address"}),(0,m.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"Enter your home address",value:_,onChange:function(e){return J(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"City"}),(0,m.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:F,onChange:function(e){return H(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"County"}),(0,m.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:Q,onChange:function(e){return K(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Postcode"}),(0,m.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:$,onChange:function(e){return ee(e.target.value)}})]})]})}),(0,m.jsxs)("div",{className:"mt-3",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-primary mb-4",onClick:ke,children:"Update profile"}),(0,m.jsxs)("div",{children:["error"===M.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"red"},children:M.text}),"success"===M.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"green"},children:M.text})]})]})]})})})}),(0,m.jsx)("div",{className:"gap-3 d-md-flex justify-content-md-end text-center",children:(0,m.jsx)("button",{type:"button",className:"btn btn-danger",children:"Delete profile"})})]})]})})}),be&&(0,m.jsx)("div",{className:"modal-overlay",children:(0,m.jsx)("div",{className:"modalcrop ",children:(0,m.jsx)(u.Z,{setPhotoURL:L,setImageLoadError:D,closeModal:function(){ye(!1)},photoURL:k,handleImageUpload:we,handleImageError:function(){D(!0)},user:r,collectionName:"userProfiles"})})})]})}},7386:function(e,t,r){var s=r(4165),n=r(5861),a=r(9439),o=r(2791),l=r(28),c=(r(4333),r(276)),i=r(2481),d=r(673),u=r(184);t.Z=function(e){var t=e.closeModal,r=e.photoURL,m=e.handleImageUpload,p=e.setPhotoURL,h=e.user,x=e.collectionName,f=(0,o.useState)(r),v=(0,a.Z)(f,2),g=v[0],j=v[1],N=(0,o.useState)(null),b=(0,a.Z)(N,2),y=(b[0],b[1]),w=(0,o.useState)(null),k=(0,a.Z)(w,2),L=k[0],Z=k[1],C=(0,o.useState)(null),E=(0,a.Z)(C,2),R=E[0],U=E[1],S=(0,o.useRef)(null),P=(0,o.useRef)(null),M=(0,o.useState)(!1),B=(0,a.Z)(M,2),I=B[0],A=B[1];(0,o.useEffect)((function(){return document.body.classList.add("modal-open"),function(){document.body.classList.remove("modal-open")}}),[]);var z=function(e){var t=e.target.files[0];if(y(t),t){Z(t.name);var r=new FileReader;r.onload=function(e){j(e.target.result)},r.readAsDataURL(t)}},D=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(){var t,r,a,o,l,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=null===(t=S.current)||void 0===t?void 0:t.getCanvas())){e.next=6;break}return e.next=4,new Promise((function(e){return r.toBlob(e,"image/jpeg")}));case 4:(a=e.sent)&&(o=(0,c.iH)(d.tO,"profileImages/".concat(L)),l={contentType:"image/jpeg"},(u=(0,c.B0)(o,a,l)).on("state_changed",(function(e){}),(function(e){}),(function(){(0,c.Jt)(u.snapshot.ref).then(function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,(0,i.r7)(R,{photoURL:t});case 3:m(t),A(!0),setTimeout((function(){A(!1)}),3e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h||!h.uid){e.next=5;break}return t="".concat("","/images/arts/user.webp"),e.next=4,(0,i.r7)(R,{photoURL:t});case 4:p(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){P.current=document.createElement("input"),P.current.type="file",P.current.accept="image/*",P.current.addEventListener("change",z);var e=(0,i.JU)(d.RZ,x,h.uid);U(e);var t=(0,i.cf)(e,(function(e){var t;!function(e){j(e)}(null===(t=e.data())||void 0===t?void 0:t.photoURL)}));return function(){return t()}}),[h.uid,x]),(0,u.jsxs)("div",{className:"modalimage align-items-center",children:[(0,u.jsxs)("div",{className:"top-section",children:[(0,u.jsx)("div",{style:{marginRight:"10px"},children:"Profile image"}),(0,u.jsx)("button",{className:"btn-crop",onClick:t,children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,u.jsx)("div",{className:"centerimage",children:(0,u.jsx)("div",{className:"croppers-wizard__body",children:(0,u.jsx)("div",{className:"default-cropper croppers-wizard__cropper",children:g?(0,u.jsx)(l.fle,{ref:S,src:g,stencilComponent:l.xqB,stencilProps:{grid:!0,handlers:{eastNorth:!0,north:!1,westNorth:!0,west:!1,westSouth:!0,south:!1,eastSouth:!0,east:!1}}}):null})})}),(0,u.jsxs)("div",{className:"button-section with-divider",children:[(0,u.jsx)("button",{className:"btn-crop",onClick:function(){P.current.click()},children:(0,u.jsxs)("div",{className:"button-content",children:[(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:[(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}),(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"})]}),"New Photo"]})}),(0,u.jsx)("button",{className:"btn-crop",onClick:D,children:(0,u.jsxs)("div",{className:"button-content",children:[(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"})}),"Upload Photo"]})}),I&&(0,u.jsx)("div",{className:"upload-success-icon",children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#009E60",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}),(0,u.jsx)("button",{className:"btn-crop",onClick:W,children:(0,u.jsxs)("div",{className:"button-content",children:[(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),"Delete Photo"]})}),(0,u.jsx)("button",{className:"btn-crop",onClick:function(){navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){var t=document.createElement("video");t.srcObject=e;var r=document.createElement("canvas"),s=r.getContext("2d");t.addEventListener("loadedmetadata",(function(){r.width=t.videoWidth,r.height=t.videoHeight,s.drawImage(t,0,0,r.width,r.height);var n=r.toDataURL("image/jpeg");j(n),e.getTracks().forEach((function(e){return e.stop()}))}))})).catch((function(e){console.error("Error accessing camera:",e)}))},children:(0,u.jsxs)("div",{className:"button-content",children:[(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:[(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}),(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"})]}),"Open Camera"]})})]})]})}}}]);
//# sourceMappingURL=591.1cc05f1b.chunk.js.map