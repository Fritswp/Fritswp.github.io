"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[904],{6904:function(e,s,l){l.r(s);var a=l(4165),t=l(1413),n=l(5861),r=l(9439),c=l(2791),i=l(673),o=l(2481),d=(l(276),l(7689)),h=l(1087),m=l(184);s.default=function(){var e=(0,d.UO)().customURL,s=(0,c.useState)([]),l=(0,r.Z)(s,2),u=l[0],x=l[1],p=(0,c.useState)(null),v=(0,r.Z)(p,2),f=(v[0],v[1],(0,c.useState)(null)),j=(0,r.Z)(f,2),g=j[0],N=(j[1],(0,c.useState)("")),y=(0,r.Z)(N,2),b=y[0],w=y[1],C=(0,c.useState)(""),z=(0,r.Z)(C,2),M=z[0],Z=z[1],E=(0,c.useState)(null),S=(0,r.Z)(E,2),k=S[0],V=S[1],L=(0,c.useState)(null),U=(0,r.Z)(L,2),O=(U[0],U[1],(0,c.useState)({text:"",type:""})),R=(0,r.Z)(O,2),I=(R[0],R[1]),A=(0,c.useState)({text:"",type:""}),P=(0,r.Z)(A,2),B=(P[0],P[1],(0,c.useState)(!1)),D=(0,r.Z)(B,2),H=D[0],F=(D[1],(0,c.useState)("")),$=(0,r.Z)(F,2),G=$[0],J=$[1],_=(0,c.useState)(""),T=(0,r.Z)(_,2),W=T[0],q=T[1],K=(0,c.useState)(""),Q=(0,r.Z)(K,2),X=Q[0],Y=Q[1],ee=(0,c.useState)(""),se=(0,r.Z)(ee,2),le=se[0],ae=se[1],te=(0,c.useState)(""),ne=(0,r.Z)(te,2),re=ne[0],ce=ne[1],ie=(0,c.useState)(""),oe=(0,r.Z)(ie,2),de=oe[0],he=oe[1],me=(0,c.useState)(""),ue=(0,r.Z)(me,2),xe=(ue[0],ue[1]),pe=(0,c.useState)(""),ve=(0,r.Z)(pe,2),fe=ve[0],je=ve[1],ge=(0,c.useState)([]),Ne=(0,r.Z)(ge,2),ye=Ne[0],be=Ne[1],we=(0,d.s0)();(0,c.useEffect)((function(){var s=function(){var s=(0,n.Z)((0,a.Z)().mark((function s(){var l,n,r,c,d,h,m;return(0,a.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,e){s.next=4;break}return console.log("Custom URL is not defined."),s.abrupt("return");case 4:return l=(0,o.IO)((0,o.hJ)(i.RZ,"expertApplications"),(0,o.ar)("customURL","==",e)),s.next=7,(0,o.PL)(l);case 7:if((n=s.sent).empty){s.next=33;break}return r=n.docs[0].data(),c=r.displayName||"",w(c.split(" ")[0]||""),Z(c.split(" ")[1]||""),J(r.address||""),q(r.city||""),Y(r.county||""),ae(r.postcode||""),ce(r.mobileNumber||""),he(r.occupation||""),je(r.description||""),xe(r.email||""),V(r.photoURL||null),be(r.keywords||[]),d=n.docs[0].id,console.log("Other User UID:",d),s.next=27,(0,o.PL)((0,o.hJ)(i.RZ,"expertApplications/".concat(d,"/files")));case 27:h=s.sent,m=h.docs.map((function(e){var s=e.data(),l="image"===Ce(s.url);return(0,t.Z)((0,t.Z)({},s),{},{isImage:l})})),console.log("Image Data:",m),x(m),s.next=34;break;case 33:console.log("Custom URL not found:",e);case 34:s.next=39;break;case 36:s.prev=36,s.t0=s.catch(0),console.error("Error fetching user data:",s.t0);case 39:case"end":return s.stop()}}),s,null,[[0,36]])})));return function(){return s.apply(this,arguments)}}();e&&s()}),[e]);var Ce=function(e){if(!e)return null;var s=e.split("?")[0];if(!s)return null;s.split(".").pop().toLowerCase();return/\.(jpeg|jpg|gif|png|svg)$/i.test(s)?"image":/\.(pdf)$/i.test(s)?"pdf":/\.(doc|docx)$/i.test(s)?"word":/\.(xls|xlsx)$/i.test(s)?"excel":"other"},ze=function(e){if(!e)return null;var s=e.split("?")[0];if(!s)return null;var l=s.split(".").pop().toLowerCase(),a=Ce(s);return console.log("File Name:",s),console.log("Extension:",l),console.log("File Type:",a),"image"===a?(console.log("File is an image."),null):"pdf"===l?(0,m.jsxs)("svg",{style:{color:"red"},xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 14 16",children:[" ",(0,m.jsx)("path",{d:"M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z",fill:"red"})," ",(0,m.jsx)("path",{"fill-rule":"evenodd",d:"M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z",fill:"red"})," "]}):"doc"===l||"docx"===l?(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 110.031 107.5",children:[(0,m.jsx)("path",{d:"M57.505 0h7.475v10c13.375.075 26.738-.138 40.101.075 2.85-.288 5.087 1.925 4.825 4.775.212 24.625-.05 49.262.125 73.887-.125 2.525.25 5.325-1.213 7.562-1.825 1.3-4.188 1.138-6.312 1.237-12.514-.061-25.014-.036-37.526-.036v10h-7.812c-19.024-3.475-38.1-6.662-57.162-10-.013-29.162 0-58.325 0-87.475C19.167 6.675 38.343 3.413 57.506 0z",fill:"#2a5699"}),(0,m.jsx)("path",{d:"M64.98 13.75h41.25v80H64.98v-10h32.5v-5h-32.5V72.5h32.5v-5h-32.5v-6.25h32.5v-5h-32.5V50h32.5v-5h-32.5v-6.25h32.5v-5h-32.5V27.5h32.5v-5h-32.5v-8.75zM25.83 35.837c2.375-.137 4.75-.237 7.125-.362 1.662 8.438 3.362 16.862 5.162 25.262 1.413-8.675 2.976-17.325 4.487-25.987 2.5-.087 5-.225 7.488-.375-2.825 12.112-5.3 24.325-8.388 36.362-2.088 1.088-5.213-.05-7.688.125-1.663-8.274-3.6-16.5-5.088-24.812-1.462 8.075-3.362 16.075-5.037 24.101-2.4-.125-4.812-.275-7.226-.438-2.074-11-4.512-21.925-6.449-32.95 2.137-.1 4.287-.188 6.425-.263 1.287 7.962 2.75 15.888 3.875 23.862 1.765-8.174 3.564-16.349 5.314-24.525z",fill:"#fff"})]}):"xls"===l||"xlsx"===l?(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 110.037 107.5",children:[(0,m.jsx)("path",{d:"M57.55 0h7.425v10c12.513 0 25.025.025 37.537-.038 2.113.087 4.438-.062 6.275 1.2 1.287 1.85 1.138 4.2 1.225 6.325-.062 21.7-.037 43.388-.024 65.075-.062 3.638.337 7.35-.425 10.938-.5 2.6-3.625 2.662-5.713 2.75-12.95.037-25.912-.025-38.875 0v11.25h-7.763c-19.05-3.463-38.138-6.662-57.212-10V10.013C19.188 6.675 38.375 3.388 57.55 0z",fill:"#207245"}),(0,m.jsx)("path",{d:"M64.975 13.75h41.25V92.5h-41.25V85h10v-8.75h-10v-5h10V62.5h-10v-5h10v-8.75h-10v-5h10V35h-10v-5h10v-8.75h-10v-7.5z",fill:"#fff"}),(0,m.jsx)("path",{d:"M79.975 21.25h17.5V30h-17.5v-8.75z",fill:"#207245"}),(0,m.jsx)("path",{d:"M37.025 32.962c2.825-.2 5.663-.375 8.5-.512a2607.344 2607.344 0 0 1-10.087 20.487c3.438 7 6.949 13.95 10.399 20.95a716.28 716.28 0 0 1-9.024-.575c-2.125-5.213-4.713-10.25-6.238-15.7-1.699 5.075-4.125 9.862-6.074 14.838-2.738-.038-5.476-.15-8.213-.263C19.5 65.9 22.6 59.562 25.912 53.312c-2.812-6.438-5.9-12.75-8.8-19.15 2.75-.163 5.5-.325 8.25-.475 1.862 4.888 3.899 9.712 5.438 14.725 1.649-5.312 4.112-10.312 6.225-15.45z",fill:"#fff"}),(0,m.jsx)("path",{d:"M79.975 35h17.5v8.75h-17.5V35zM79.975 48.75h17.5v8.75h-17.5v-8.75zM79.975 62.5h17.5v8.75h-17.5V62.5zM79.975 76.25h17.5V85h-17.5v-8.75z",fill:"#207245"})]}):"ppt"===l||"pptx"===l?(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 110.031 107.5",children:[(0,m.jsx)("path",{d:"M57.893 0h7.087v11.25c13.363.075 26.738-.138 40.088.062 2.875-.275 5.125 1.962 4.838 4.837.212 23.35-.05 46.712.125 70.075-.125 2.525.25 5.325-1.2 7.562-1.825 1.325-4.2 1.15-6.338 1.25-12.5-.062-25-.037-37.513-.037v12.5h-7.774c-19.05-3.475-38.138-6.65-57.2-10-.013-29.162 0-58.325 0-87.475C19.292 6.688 38.58 3.288 57.893 0z",fill:"#d24625"}),(0,m.jsx)("path",{d:"M64.98 15h41.25v76.25H64.98v-10h30v-5h-30V70h30v-5H64.993c-.013-2.45-.013-4.9-.024-7.35 4.95 1.537 10.587 1.5 15.012-1.476 4.788-2.837 7.288-8.25 7.7-13.65-5.487-.038-10.975-.025-16.45-.025-.012-5.438.062-10.875-.112-16.3-2.05.4-4.1.825-6.138 1.262V15z",fill:"#fff"}),(0,m.jsx)("path",{d:"M73.743 23.587c8.688.4 15.987 7.712 16.45 16.375-5.488.063-10.975.038-16.463.038 0-5.475-.012-10.95.013-16.413z",fill:"#d24625"}),(0,m.jsx)("path",{d:"M20.055 33.025c6.788.325 15.013-2.688 20.638 2.4 5.388 6.538 3.963 18.562-4.025 22.476-2.837 1.449-6.087 1.25-9.175 1.149-.013 4.888-.024 9.775-.013 14.663a1323.27 1323.27 0 0 0-7.438-.625c-.112-13.351-.136-26.713.013-40.063z",fill:"#fff"}),(0,m.jsx)("path",{d:"M27.48 39.788c2.463-.113 5.513-.562 7.176 1.75 1.425 2.45 1.35 5.675.162 8.2-1.425 2.575-4.65 2.325-7.138 2.625-.263-4.188-.237-8.376-.2-12.575z",fill:"#d24625"})]}):(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",strokeWidth:1.5,stroke:"currentColor",width:"40",height:"40",viewBox:"0 0 110.031 107.5",children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})})};return(0,m.jsxs)("div",{className:"profile-container",children:[(0,m.jsx)("div",{className:"container"}),(0,m.jsx)("div",{className:"profile-section",children:(0,m.jsxs)("div",{className:"content profile-content ",children:[(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("div",{className:"card-profile"}),(0,m.jsxs)("div",{className:"card-body nopadding",style:{display:"flex",justifyContent:"space-between"},children:[!H&&k&&(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:k,alt:"User Profile",className:"user-avatar large-avatar mb-3"})}),H&&(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"user-avatar large-avatar rounded-circle mb-3"})}),(0,m.jsxs)("div",{className:"keywords-list",children:[(0,m.jsx)("h5",{className:"card-title h3",children:"Skills: "}),ye.map((function(e,s){return(0,m.jsx)("div",{className:"containerhover keyword-container mb-2 mx-1 pb-1",children:e},s)}))]})]}),(0,m.jsxs)("div",{className:"px-3",children:[(0,m.jsx)("div",{className:"card-title",children:"".concat(b," ").concat(M)}),(0,m.jsx)("div",{className:"text-muted  card-subtitle  mb-2",children:de})]}),(0,m.jsxs)("div",{className:"d-flex responsive-buttons",children:[(0,m.jsx)(h.rU,{to:"/chat",children:(0,m.jsxs)("button",{type:"button",className:"me-4 btn btn-primary btn-sm rounded-pill pt-2 pb-2",onClick:function(){var s=(0,o.IO)((0,o.hJ)(i.RZ,"expertApplications"),(0,o.ar)("customURL","==",e));(0,o.PL)(s).then((function(s){if(s.empty)console.log("Custom URL not found:",e);else{var l=s.docs[0].id,a=i.I8.currentUser.uid;we("/chat",{state:{currentUserUID:a,otherUserUID:l}})}})).catch((function(e){console.error("Error fetching data:",e),I({text:"Error accessing chat",type:"error"})}))},children:[(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,m.jsx)("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z",clipRule:"evenodd"})}),"Message"]})}),(0,m.jsxs)("button",{type:"button",className:"btn btn-secondary btn-sm rounded-pill pt-2 pb-2",children:[(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,m.jsx)("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})}),"Connect"]})]})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"mt-4 ",children:[(0,m.jsxs)("h3",{children:["Profile of ",(0,m.jsx)("span",{children:" "}),"".concat(b," ").concat(M)]}),(0,m.jsx)("hr",{})]}),(0,m.jsx)("form",{className:"file-upload",children:(0,m.jsx)("div",{className:"row mb-4 gx-4",children:(0,m.jsx)("div",{className:"col-xl-12 col-12",children:(0,m.jsx)("div",{className:"",children:(0,m.jsxs)("div",{className:"card-body card-profile",children:[(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{children:"Bio"}),(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsxs)("div",{className:"col-md-12",children:[(0,m.jsx)("label",{className:"form-label",children:"Description of Expertise"}),(0,m.jsx)("textarea",{id:"inputDescription",type:"text",className:"form-control",rows:"4",placeholder:"",value:fe,readOnly:!0,onChange:function(e){return je(e.target.value)},style:{resize:"none",pointerEvents:"none"}})]})}),(0,m.jsx)("h4",{children:"File Gallery"}),(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsx)("div",{className:"col-md-12",children:(0,m.jsx)("div",{className:"gallery-container",children:u.map((function(e,s){return(0,m.jsxs)("div",{className:"gallery-item",children:[e.isImage?(0,m.jsxs)("div",{className:"image-container",children:[(0,m.jsx)("p",{className:"file-title",children:e.title}),(0,m.jsx)("img",{src:e.url,alt:"Gallery ".concat(s+1),className:"gallery-image"})]}):(0,m.jsxs)("div",{className:"file-container",children:[(0,m.jsx)("div",{className:"file-icon",children:ze(e.url)}),(0,m.jsx)("div",{className:"file-info",children:(0,m.jsx)("p",{className:"file-title",children:e.title})})]}),(0,m.jsx)("p",{className:"description-text",children:e.description})]},s)}))})})}),(0,m.jsx)("h4",{className:"mb-4",children:"General information"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"First Name  "}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:b,onChange:function(e){return w(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Last Name  "}),(0,m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:M,onChange:function(e){return Z(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email  "}),(0,m.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:g?g.email:"",readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Mobile number  "}),(0,m.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Phone number",value:re,readOnly:!0,onChange:function(e){return ce(e.target.value)},style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-12",children:[(0,m.jsx)("label",{className:"form-label",children:"Role/Expertise  "}),(0,m.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"your Role",value:de,onChange:function(e){return he(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-12",children:[(0,m.jsx)("label",{className:"form-label",children:"Description of Expertise"}),(0,m.jsx)("textarea",{id:"inputDescription",type:"text",className:"form-control",rows:"4",placeholder:"",value:fe,readOnly:!0,onChange:function(e){return je(e.target.value)},style:{resize:"none",pointerEvents:"none"}})]})]}),(0,m.jsx)("div",{className:"py-5 rounded mt-4",children:(0,m.jsxs)("div",{className:"row g-3",children:[(0,m.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Address"}),(0,m.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"",value:G,onChange:function(e){return J(e.target.value)},style:{pointerEvents:"none"},readOnly:!0})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"City"}),(0,m.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:W,onChange:function(e){return q(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"County"}),(0,m.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:X,onChange:function(e){return Y(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,m.jsxs)("div",{className:"col-md-6",children:[(0,m.jsx)("label",{className:"form-label",children:"Postcode"}),(0,m.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:le,onChange:function(e){return ae(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]})]})})]})})})})})]})]})})]})}}}]);
//# sourceMappingURL=904.e71c6891.chunk.js.map