"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[462],{6330:function(e,t,r){r.r(t);var n=r(4165),s=r(5861),a=r(9439),o=r(2791),l=r(673),c=r(2481),i=r(6635),u=(r(276),r(7689)),d=r(7386),m=r(6307),p=r(184);t.default=function(){(0,u.UO)().customURL;var e=(0,o.useState)(null),t=(0,a.Z)(e,2),r=t[0],h=t[1],x=(0,o.useState)(""),f=(0,a.Z)(x,2),v=f[0],g=f[1],j=(0,o.useState)(""),N=(0,a.Z)(j,2),b=N[0],y=N[1],w=(0,o.useState)(null),Z=(0,a.Z)(w,2),k=Z[0],L=Z[1],U=(0,o.useState)(null),R=(0,a.Z)(U,2),C=(R[0],R[1],(0,o.useState)({text:"",type:""})),S=(0,a.Z)(C,2),E=S[0],P=(S[1],(0,o.useState)({text:"",type:""})),I=(0,a.Z)(P,2),B=I[0],M=I[1],A=(0,o.useState)(!1),z=(0,a.Z)(A,2),O=z[0],W=z[1],H=(0,o.useState)(""),J=(0,a.Z)(H,2),D=J[0],F=J[1],T=(0,o.useState)(""),V=(0,a.Z)(T,2),_=V[0],q=V[1],Q=(0,o.useState)(""),G=(0,a.Z)(Q,2),K=G[0],X=G[1],Y=(0,o.useState)(""),$=(0,a.Z)(Y,2),ee=$[0],te=$[1],re=(0,o.useState)(""),ne=(0,a.Z)(re,2),se=ne[0],ae=ne[1],oe=(0,o.useState)(""),le=(0,a.Z)(oe,2),ce=le[0],ie=le[1],ue=(0,o.useState)(""),de=(0,a.Z)(ue,2),me=de[0],pe=de[1],he=(0,o.useState)(null),xe=(0,a.Z)(he,2),fe=(xe[0],xe[1],(0,o.useState)("")),ve=(0,a.Z)(fe,2),ge=ve[0],je=ve[1],Ne=(0,o.useState)(!1),be=(0,a.Z)(Ne,2),ye=be[0],we=be[1],Ze=(0,o.useState)(null),ke=(0,a.Z)(Ze,2),Le=ke[0],Ue=ke[1],Re=(0,o.useState)(!1),Ce=(0,a.Z)(Re,2),Se=Ce[0],Ee=Ce[1];(0,o.useEffect)((function(){var e=l.I8.onAuthStateChanged(function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r,s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return h(t),r=(0,c.JU)(l.RZ,"userProfiles",t.uid),e.next=5,(0,c.QT)(r);case 5:(s=e.sent).exists()?((a=s.data()).photoURL?(L(a.photoURL||t.photoURL),Ue(a.originalPhotoURL||null)):(L(t.photoURL),Ue(null)),g(a.firstName||t.displayName.split(" ")[0]||""),y(a.lastName||t.displayName.split(" ")[1]||""),F(a.address||""),q(a.city||""),X(a.county||""),te(a.postcode||""),ae(a.mobileNumber||""),ie(a.role||""),pe(t.email),je(a.description)):(g(t.displayName.split(" ")[0]||""),y(t.displayName.split(" ")[1]||""),L(t.photoURL),pe(t.email)),e.next=18;break;case 9:F(""),q(""),X(""),te(""),ae(""),L(null),pe(""),ie(""),je("");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[]);var Pe=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(t),s=(0,c.JU)(l.RZ,"userProfiles",r.uid),e.next=4,(0,c.r7)(s,{photoURL:t});case 4:(0,i.ck)(r,{photoURL:t}).then((function(){console.log("Profile photo updated successfully")})).catch((function(e){console.error("Error updating profile photo:",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t=l.I8.currentUser,e.next=6,(0,i.ck)(t,{displayName:"".concat(v," ").concat(b),photoURL:t.photoURL});case 6:return s=(0,c.JU)(l.RZ,"userProfiles",r.uid),e.next=9,(0,c.pl)(s,{displayName:"".concat(v," ").concat(b),firstName:v,lastName:b,email:me,mobileNumber:document.getElementById("inputMobileNumber").value,role:document.getElementById("inputRole").value,address:document.getElementById("inputAddress").value,city:document.getElementById("inputCity").value,county:document.getElementById("inputCounty").value,postcode:document.getElementById("inputPostcode").value,description:document.getElementById("inputDescription").value,photoURL:k,originalPhotoURL:Le},{merge:!0});case 9:M({text:"Profile updated successfully",type:"success"}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),M({text:"Error updating profile: ".concat(e.t0.message),type:"error"}),setTimeout((function(){M({text:"",type:""})}),3e3);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),Be=function(){console.log("Image clicked"),Ee(!0)};return(0,p.jsxs)("div",{className:"profile-container",children:[(0,p.jsx)("div",{className:"container"}),(0,p.jsx)("div",{className:"profile-section",children:(0,p.jsx)("div",{className:"content profile-content ",children:(0,p.jsxs)("div",{className:"row g-3",children:[(0,p.jsx)("div",{className:"card-profile"}),(0,p.jsxs)("div",{className:"card-body",children:[(0,p.jsxs)("div",{className:"Profile-image position-relative",children:[!O&&k&&(0,p.jsxs)("div",{className:"position-relative",children:[(0,p.jsx)("img",{src:k,alt:"User Profile",className:"user-avatar large-avatar mb-3",onError:function(){return W(!0)},onClick:Be,style:{cursor:"pointer"}}),(0,p.jsx)("div",{className:"svg-icon",onClick:Be,children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:2,stroke:"white",className:"w-6 h-6",children:(0,p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),O&&(0,p.jsx)("div",{className:"position-relative",children:(0,p.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"user-avatar large-avatar rounded-circle mb-3",onClick:Be,style:{cursor:"pointer"}})})]}),(0,p.jsxs)("div",{children:["error"===E.type&&(0,p.jsx)("p",{className:"fw-light",style:{color:"red"},children:E.text}),"success"===E.type&&(0,p.jsx)("p",{className:"fw-light",style:{color:"green"},children:E.text}),"progress"===E.type&&(0,p.jsx)("p",{className:"fw-light",style:{color:"gray"},children:E.text})]}),(0,p.jsxs)("div",{className:"px-3",children:[(0,p.jsx)("div",{className:"card-title",children:"".concat(v," ").concat(b)}),(0,p.jsx)("div",{className:"text-muted card-subtitle h6",children:ce})]})]}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("h3",{children:"My Profile"}),(0,p.jsx)("hr",{})]}),(0,p.jsx)("form",{className:"file-upload",children:(0,p.jsx)("div",{className:"row mb-4 gx-4",children:(0,p.jsx)("div",{className:"col-xl-8 col-12",children:(0,p.jsx)("div",{className:"",children:(0,p.jsxs)("div",{className:"card-body card-profile",children:[(0,p.jsxs)("div",{className:"row g-3",children:[(0,p.jsx)("h4",{className:"mb-4",children:"General information"}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"First Name *"}),(0,p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:v,onChange:function(e){return g(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Last Name *"}),(0,p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:b,onChange:function(e){return y(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email *"}),(0,p.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:r?r.email:"",readOnly:!0})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Mobile number *"}),(0,p.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"Enter your Phone number","aria-label":"Phone number",value:se,onChange:function(e){return ae(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Role/Expertise *"}),(0,p.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"Enter your role/expertise","aria-label":"your Role",value:ce,onChange:function(e){return ie(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-12",children:[(0,p.jsx)("label",{className:"form-label",children:"Description of Expertise"}),(0,p.jsx)("textarea",{id:"inputDescription",type:"text",className:"form-control",rows:"4",placeholder:"Enter a brief description of your expertise or how you can help",value:ge,onChange:function(e){return je(e.target.value)},style:{resize:"none"}})]})]}),(0,p.jsx)("div",{className:"py-5 rounded mt-4",children:(0,p.jsxs)("div",{className:"row g-3",children:[(0,p.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Address"}),(0,p.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"Enter your home address",value:D,onChange:function(e){return F(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"City"}),(0,p.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:_,onChange:function(e){return q(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"County"}),(0,p.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:K,onChange:function(e){return X(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{className:"form-label",children:"Postcode"}),(0,p.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:ee,onChange:function(e){return te(e.target.value)}})]})]})}),(0,p.jsxs)("div",{className:"mt-3",children:[(0,p.jsx)("button",{type:"button",className:"btn btn-primary mb-4",onClick:Ie,children:"Update profile"}),(0,p.jsxs)("div",{children:["error"===B.type&&(0,p.jsx)("p",{className:"fw-light",style:{color:"red"},children:B.text}),"success"===B.type&&(0,p.jsx)("p",{className:"fw-light",style:{color:"green"},children:B.text})]})]})]})})})})})]})})}),Se&&(0,p.jsx)(d.Z,{setPhotoURL:L,setImageLoadError:W,closeModal:function(){Ee(!1)},photoURL:k,originalPhotoURL:Le,handleImageUpload:Pe,handleImageError:function(){W(!0)},user:r,collectionName:"userProfiles",setIsUploadSuccess:we}),ye&&(0,p.jsx)(m.Z,{})]})}},6307:function(e,t,r){var n=r(9439),s=r(2791),a=r(184);t.Z=function(){var e=(0,s.useState)(!0),t=(0,n.Z)(e,2),r=t[0],o=t[1];return(0,s.useEffect)((function(){var e=setTimeout((function(){o(!1)}),3e3);return function(){return clearTimeout(e)}}),[]),(0,a.jsx)("div",{className:r?"flash":""})}},7386:function(e,t,r){var n=r(4165),s=r(5861),a=r(9439),o=r(2791),l=r(7005),c=r(7984),i=r(2383),u=r(276),d=r(2481),m=r(673),p=r(184);t.Z=function(e){var t=e.closeModal,r=e.originalPhotoURL,h=e.handleImageUpload,x=e.setPhotoURL,f=e.user,v=e.collectionName,g=e.setIsUploadSuccess,j=(0,o.useState)(r),N=(0,a.Z)(j,2),b=N[0],y=N[1],w=(0,o.useState)(null),Z=(0,a.Z)(w,2),k=Z[0],L=Z[1],U=(0,o.useState)(null),R=(0,a.Z)(U,2),C=R[0],S=R[1],E=(0,o.useRef)(null),P=(0,o.useState)(null),I=(0,a.Z)(P,2),B=(I[0],I[1]),M=(0,o.useState)({x:0,y:0}),A=(0,a.Z)(M,2),z=A[0],O=A[1],W=(0,o.useState)(1),H=(0,a.Z)(W,2),J=H[0],D=H[1],F=(0,o.useState)(null),T=(0,a.Z)(F,2),V=T[0],_=T[1],q=(0,o.useState)(!1),Q=(0,a.Z)(q,2),G=Q[0],K=(Q[1],"".concat("","/images/arts/user.webp")),X=(0,o.useState)(null),Y=(0,a.Z)(X,2),$=(Y[0],Y[1]),ee=(0,o.useState)(!1),te=(0,a.Z)(ee,2),re=te[0],ne=te[1];(0,o.useEffect)((function(){return document.body.classList.add("modal-open"),function(){document.body.classList.remove("modal-open")}}),[]);var se=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var r,a,o,l,i,p,x,j,N,w,Z,L,U,R,C,S;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V){e.next=2;break}return e.abrupt("return");case 2:return ne(!0),a=(0,d.JU)(m.RZ,v,f.uid),e.next=6,(0,d.QT)(a);case 6:if(o=e.sent,!(l=null===(r=o.data())||void 0===r?void 0:r.photoURL)){e.next=18;break}return i=(0,u.iH)(m.tO,l),e.prev=10,e.next=13,(0,u.oq)(i);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.error("Error deleting old cropped image from storage:",e.t0);case 18:return e.prev=18,e.next=21,fetch(b).then((function(e){return e.blob()}));case 21:return p=e.sent,e.next=24,new Promise((function(e){var t=document.createElement("canvas"),r=t.getContext("2d"),a=new Image;a.onload=(0,s.Z)((0,n.Z)().mark((function s(){return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.width=V.width,t.height=V.height,r.drawImage(a,V.x,V.y,V.width,V.height,0,0,V.width,V.height),t.toBlob(e,"image/jpeg");case 4:case"end":return n.stop()}}),s)}))),a.src=URL.createObjectURL(p)}));case 24:return x=e.sent,console.log("Original cropped image size:",x.size,"bytes"),j=new File([x],k,{type:"image/jpeg"}),N={maxSizeMB:.5,maxWidthOrHeight:1920,useWebWorker:!0},e.next=30,(0,c.Z)(j,N);case 30:return w=e.sent,console.log("Compressed image size:",w.size,"bytes"),e.next=34,w.arrayBuffer().then((function(e){return new Blob([e])}));case 34:Z=e.sent,L=(0,u.iH)(m.tO,"originalImages/".concat(k)),U={contentType:"image/jpeg"},(R=(0,u.B0)(L,p,U)).on("state_changed",(function(e){}),(function(e){}),(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Jt)(R.snapshot.ref);case 2:if(!(t=e.sent)){e.next=6;break}return e.next=6,(0,d.r7)(a,{originalPhotoURL:t});case 6:case"end":return e.stop()}}),e)})))),C=(0,u.iH)(m.tO,"profileImages/".concat(k)),(S=(0,u.B0)(C,Z)).on("state_changed",(function(e){}),(function(e){}),(0,s.Z)((0,n.Z)().mark((function e(){var r,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Jt)(S.snapshot.ref);case 2:if(!(r=e.sent)){e.next=13;break}return e.next=6,(0,d.r7)(a,{photoURL:r});case 6:h(r),g(!0),t(),p&&((s=new FileReader).onload=function(e){y(e.target.result)},s.readAsDataURL(p)),_(null),D(1),O({x:0,y:0});case 13:case"end":return e.stop()}}),e)})))),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(18),ne(!1);case 47:case"end":return e.stop()}}),e,null,[[10,15],[18,44]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(f&&f.uid&&C)){e.next=17;break}return t=(0,u.iH)(m.tO,"originalImages/".concat(k)),r=(0,u.iH)(m.tO,"profileImages/".concat(k)),e.prev=3,e.next=6,(0,u.oq)(t);case 6:return e.next=8,(0,u.oq)(r);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error deleting images from storage:",e.t0);case 13:return e.next=15,(0,d.r7)(C,{photoURL:null,originalPhotoURL:null});case 15:x(K),y(K);case 17:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){E.current=document.createElement("input"),E.current.type="file",E.current.accept="capture=camera",E.current.addEventListener("change",(function(e){var t=e.target.files[0];if(t){L(t.name),$(t);var r=new FileReader;r.onload=function(e){y(e.target.result)},r.readAsDataURL(t)}})),document.body.appendChild(E.current);var e=(0,d.JU)(m.RZ,v,f.uid);S(e);var t=(0,d.cf)(e,(function(e){var t;!function(e){y(e)}(null===(t=e.data())||void 0===t?void 0:t.originalPhotoURL)}));return function(){t(),document.body.removeChild(E.current)}}),[f.uid,v]),(0,p.jsx)("div",{className:"modal-overlay",children:(0,p.jsxs)("div",{className:"modalcrop",children:[(0,p.jsxs)("div",{className:"top-section",children:[(0,p.jsx)("div",{style:{marginRight:"10px"},children:"Profile image"}),(0,p.jsx)("button",{className:"btn-crop",onClick:t,children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,p.jsx)("div",{className:G?"flash":""})," ",(0,p.jsx)("div",{className:"centerimage",children:b&&(0,p.jsx)(l.ZP,{ref:B,image:b,crop:z,zoom:J,onCropChange:O,onZoomChange:D,onCropComplete:function(e,t){_(t)},cropShape:"round",aspect:1})}),(0,p.jsxs)("div",{className:"button-section",children:[(0,p.jsx)("button",{className:"btn-crop",onClick:function(){return E.current.click()},children:(0,p.jsxs)("div",{className:"button-content",children:[(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:[(0,p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}),(0,p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"})]}),"New Photo"]})}),(0,p.jsx)("div",{className:"success",children:(0,p.jsx)("div",{className:"button-container",children:re?(0,p.jsx)(i.Z,{}):(0,p.jsx)("button",{className:"btn-crop",onClick:se,children:(0,p.jsxs)("div",{className:"button-content",children:[(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"})}),"Upload Photo"]})})})}),(0,p.jsx)("button",{className:"btn-crop",onClick:ae,children:(0,p.jsxs)("div",{className:"button-content",children:[(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),"Delete Photo"]})})]})]})})}}}]);
//# sourceMappingURL=462.c70576ba.chunk.js.map