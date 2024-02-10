"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[591],{6330:function(e,t,r){r.r(t);var n=r(4165),s=r(5861),a=r(9439),l=r(2791),o=r(673),c=r(2481),i=r(5485),u=(r(276),r(7689)),d=r(7386),m=r(184);t.default=function(){(0,u.UO)().customURL;var e=(0,l.useState)(null),t=(0,a.Z)(e,2),r=t[0],p=t[1],h=(0,l.useState)(""),f=(0,a.Z)(h,2),x=f[0],v=f[1],g=(0,l.useState)(""),j=(0,a.Z)(g,2),N=j[0],y=j[1],b=(0,l.useState)(null),w=(0,a.Z)(b,2),Z=w[0],k=w[1],C=(0,l.useState)(null),R=(0,a.Z)(C,2),E=(R[0],R[1],(0,l.useState)({text:"",type:""})),U=(0,a.Z)(E,2),L=U[0],S=(U[1],(0,l.useState)({text:"",type:""})),P=(0,a.Z)(S,2),I=P[0],B=P[1],M=(0,l.useState)(!1),D=(0,a.Z)(M,2),_=D[0],A=D[1],F=(0,l.useState)(""),J=(0,a.Z)(F,2),O=J[0],T=J[1],W=(0,l.useState)(""),z=(0,a.Z)(W,2),H=z[0],q=z[1],G=(0,l.useState)(""),Q=(0,a.Z)(G,2),K=Q[0],V=Q[1],X=(0,l.useState)(""),Y=(0,a.Z)(X,2),$=Y[0],ee=Y[1],te=(0,l.useState)(""),re=(0,a.Z)(te,2),ne=re[0],se=re[1],ae=(0,l.useState)(""),le=(0,a.Z)(ae,2),oe=le[0],ce=le[1],ie=(0,l.useState)(""),ue=(0,a.Z)(ie,2),de=ue[0],me=ue[1],pe=(0,l.useState)(null),he=(0,a.Z)(pe,2),fe=(he[0],he[1],(0,l.useState)("")),xe=(0,a.Z)(fe,2),ve=xe[0],ge=xe[1],je=(0,l.useState)(!1),Ne=(0,a.Z)(je,2),ye=Ne[0],be=Ne[1];(0,l.useEffect)((function(){var e=o.I8.onAuthStateChanged(function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r,s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return p(t),r=(0,c.JU)(o.RZ,"userProfiles",t.uid),e.next=5,(0,c.QT)(r);case 5:(s=e.sent).exists()?((a=s.data()).photoURL?k(a.photoURL):k(t.photoURL),v(a.firstName||t.displayName.split(" ")[0]||""),y(a.lastName||t.displayName.split(" ")[1]||""),T(a.address||""),q(a.city||""),V(a.county||""),ee(a.postcode||""),se(a.mobileNumber||""),ce(a.role||""),me(t.email),ge(a.description)):(v(t.displayName.split(" ")[0]||""),y(t.displayName.split(" ")[1]||""),k(t.photoURL),me(t.email)),e.next=18;break;case 9:T(""),q(""),V(""),ee(""),se(""),k(null),me(""),ce(""),ge("");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[]);var we=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(t),s=(0,c.JU)(o.RZ,"userProfiles",r.uid),e.next=4,(0,c.r7)(s,{photoURL:t});case 4:(0,i.ck)(r,{photoURL:t}).then((function(){console.log("Profile photo updated successfully")})).catch((function(e){console.error("Error updating profile photo:",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ze=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t=o.I8.currentUser,e.next=6,(0,i.ck)(t,{displayName:"".concat(x," ").concat(N),photoURL:t.photoURL});case 6:return s=(0,c.JU)(o.RZ,"userProfiles",r.uid),e.next=9,(0,c.pl)(s,{displayName:"".concat(x," ").concat(N),firstName:x,lastName:N,email:de,mobileNumber:document.getElementById("inputMobileNumber").value,role:document.getElementById("inputRole").value,address:document.getElementById("inputAddress").value,city:document.getElementById("inputCity").value,county:document.getElementById("inputCounty").value,postcode:document.getElementById("inputPostcode").value,description:document.getElementById("inputDescription").value,photoURL:Z},{merge:!0});case 9:B({text:"Profile updated successfully",type:"success"}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),B({text:"Error updating profile: ".concat(e.t0.message),type:"error"}),setTimeout((function(){B({text:"",type:""})}),3e3);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),ke=function(){console.log("Image clicked"),be(!0)};return(0,m.jsxs)("div",{className:"profile-container",children:[(0,m.jsx)("div",{className:"container"}),(0,m.jsx)("div",{className:"profile-section",children:(0,m.jsx)("div",{className:"content profile-content ",children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"card-profile"}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsxs)("div",{className:"Profile-image position-relative",children:[!_&&Z&&(0,m.jsxs)("div",{className:"position-relative",children:[(0,m.jsx)("img",{src:Z,alt:"User Profile",className:"user-avatar large-avatar mb-3",onError:function(){return A(!0)},onClick:ke,style:{cursor:"pointer"}}),(0,m.jsx)("div",{className:"svg-icon",onClick:ke,children:(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:2,stroke:"white",className:"w-6 h-6",children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),_&&(0,m.jsx)("div",{className:"position-relative",children:(0,m.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"user-avatar large-avatar rounded-circle mb-3",onClick:ke,style:{cursor:"pointer"}})})]}),(0,m.jsxs)("div",{children:["error"===L.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"red"},children:L.text}),"success"===L.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"green"},children:L.text}),"progress"===L.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"gray"},children:L.text})]}),(0,m.jsxs)("div",{className:"px-3",children:[(0,m.jsx)("div",{className:"card-title",children:"".concat(x," ").concat(N)}),(0,m.jsx)("div",{className:"text-muted card-subtitle h6",children:oe})]})]}),(0,m.jsxs)("div",{className:"",children:[(0,m.jsx)("h3",{children:"My Profile"}),(0,m.jsx)("hr",{})]}),(0,m.jsxs)("form",{className:"file-upload",children:[(0,m.jsx)("div",{className:"row mb-4 gx-4",children:(0,m.jsx)("div",{className:"col-xl-8 col-12",children:(0,m.jsx)("div",{className:"",children:(0,m.jsxs)("div",{className:"card-body card-profile",children:[(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4",children:"General information"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"First Name *"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:x,onChange:function(e){return v(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Last Name *"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:N,onChange:function(e){return y(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email *"}),(0,m.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:r?r.email:"",readOnly:!0})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Mobile number *"}),(0,m.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"Enter your Phone number","aria-label":"Phone number",value:ne,onChange:function(e){return se(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Role/Expertise *"}),(0,m.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"Enter your role/expertise","aria-label":"your Role",value:oe,onChange:function(e){return ce(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-12",children:[(0,m.jsx)("label",{className:"form-label",children:"Description of Expertise"}),(0,m.jsx)("textarea",{id:"inputDescription",type:"text",className:"form-control",rows:"4",placeholder:"Enter a brief description of your expertise or how you can help",value:ve,onChange:function(e){return ge(e.target.value)},style:{resize:"none"}})]})]}),(0,m.jsx)("div",{className:"py-5 rounded mt-4",children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Address"}),(0,m.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"Enter your home address",value:O,onChange:function(e){return T(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"City"}),(0,m.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:H,onChange:function(e){return q(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"County"}),(0,m.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:K,onChange:function(e){return V(e.target.value)}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Postcode"}),(0,m.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:$,onChange:function(e){return ee(e.target.value)}})]})]})}),(0,m.jsxs)("div",{className:"mt-3",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-primary mb-4",onClick:Ze,children:"Update profile"}),(0,m.jsxs)("div",{children:["error"===I.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"red"},children:I.text}),"success"===I.type&&(0,m.jsx)("p",{className:"fw-light",style:{color:"green"},children:I.text})]})]})]})})})}),(0,m.jsx)("div",{className:"gap-3 d-md-flex justify-content-md-end text-center",children:(0,m.jsx)("button",{type:"button",className:"btn btn-danger",children:"Delete profile"})})]})]})})}),ye&&(0,m.jsx)("div",{className:"modal-overlay",children:(0,m.jsx)("div",{className:"modalcrop ",children:(0,m.jsx)(d.Z,{setPhotoURL:k,setImageLoadError:A,closeModal:function(){be(!1)},photoURL:Z,handleImageUpload:we,handleImageError:function(){A(!0)},user:r,collectionName:"userProfiles"})})})]})}},7386:function(e,t,r){var n=r(4165),s=r(5861),a=r(9439),l=r(2791),o=r(28),c=(r(4333),r(276)),i=r(2481),u=r(673),d=r(184);t.Z=function(e){var t=e.closeModal,r=e.photoURL,m=e.handleImageUpload,p=e.setPhotoURL,h=e.user,f=e.collectionName,x=(0,l.useState)(r),v=(0,a.Z)(x,2),g=v[0],j=v[1],N=(0,l.useState)(null),y=(0,a.Z)(N,2),b=(y[0],y[1]),w=(0,l.useState)(!1),Z=(0,a.Z)(w,2),k=(Z[0],Z[1]),C=(0,l.useState)(null),R=(0,a.Z)(C,2),E=R[0],U=R[1],L=(0,l.useState)(null),S=(0,a.Z)(L,2),P=S[0],I=S[1],B=(0,l.useRef)(null),M=(0,l.useRef)(null),D=(0,l.useState)(!1),_=(0,a.Z)(D,2),A=_[0],F=_[1],J=(0,l.useRef)(null);(0,l.useEffect)((function(){return document.body.classList.add("modal-open"),function(){document.body.classList.remove("modal-open")}}),[]);var O=function(e){var t=e.target.files[0];if(b(t),t){U(t.name);var r=new FileReader;r.onload=function(e){j(e.target.result)},r.readAsDataURL(t)}},T=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t,r,a,l,o,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=null===(t=B.current)||void 0===t?void 0:t.getCanvas())){e.next=6;break}return e.next=4,new Promise((function(e){return r.toBlob(e,"image/jpeg")}));case 4:(a=e.sent)&&(l=(0,c.iH)(u.tO,"profileImages/".concat(E)),o={contentType:"image/jpeg"},(d=(0,c.B0)(l,a,o)).on("state_changed",(function(e){}),(function(e){}),(function(){(0,c.Jt)(d.snapshot.ref).then(function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,(0,i.r7)(P,{photoURL:t});case 3:m(t),F(!0),setTimeout((function(){F(!1)}),3e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h||!h.uid){e.next=6;break}return t="".concat("","/images/arts/user.webp"),e.next=4,(0,i.r7)(P,{photoURL:t});case 4:p(t),k(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){M.current=document.createElement("input"),M.current.type="file",M.current.accept="image/*",M.current.addEventListener("change",O);var e=(0,i.JU)(u.RZ,f,h.uid);I(e);var t=(0,i.cf)(e,(function(e){var t;!function(e){j(e)}(null===(t=e.data())||void 0===t?void 0:t.photoURL)}));return function(){return t()}}),[h.uid,f]),(0,d.jsxs)("div",{className:"modalimage align-items-center",children:[(0,d.jsxs)("div",{className:"top-section",children:[(0,d.jsx)("div",{style:{marginRight:"10px"},children:"Profile image"}),(0,d.jsx)("button",{className:"btn-crop",onClick:t,children:"Close"})]}),(0,d.jsx)("div",{className:"centerimage",children:(0,d.jsx)("div",{className:"croppers-wizard__body",children:(0,d.jsx)("div",{className:"default-cropper croppers-wizard__cropper",children:g?(0,d.jsx)(o.fle,{ref:B,src:g,stencilComponent:o.xqB,stencilProps:{grid:!0,handlers:{eastNorth:!0,north:!1,westNorth:!0,west:!1,westSouth:!0,south:!1,eastSouth:!0,east:!1},minWidth:"100%",maxHeight:"100%"}}):null})})}),(0,d.jsxs)("div",{className:"button-section with-divider",children:[(0,d.jsx)("button",{className:"btn-crop",onClick:function(){M.current.click()},children:"New Photo"}),(0,d.jsx)("button",{className:"btn-crop",onClick:T,children:"Upload Photo"}),A&&(0,d.jsx)("div",{className:"upload-success-icon",children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#009E60",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}),(0,d.jsx)("button",{className:"btn-crop",onClick:W,children:"Delete Photo"})]}),(0,d.jsxs)("div",{className:"camera-interface",children:[(0,d.jsx)("video",{ref:J}),(0,d.jsxs)("div",{className:"camera-controls",children:[(0,d.jsx)("button",{onClick:function(){var e=document.createElement("canvas");e.width=J.current.videoWidth,e.height=J.current.videoHeight,e.getContext("2d").drawImage(J.current,0,0,e.width,e.height),e.toBlob((function(e){var t=new File([e],"captured-image.jpeg",{type:"image/jpeg"});O({target:{files:[t]}})}),"image/jpeg")},children:"Capture"}),(0,d.jsx)("button",{onClick:function(){navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){J.current.srcObject=e,J.current.play()})).catch((function(e){console.error("Error accessing camera:",e)}))},children:"Switch Camera"})]})]})]})}}}]);
//# sourceMappingURL=591.053dd309.chunk.js.map