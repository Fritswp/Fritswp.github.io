"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[702],{5702:function(e,s,t){t.r(s),t.d(s,{default:function(){return f}});var n=t(4942),a=t(4165),r=t(1413),l=t(5861),c=t(9439),i=t(2791),o=t(673),d=t(2481),u=(t(276),t(7689)),h=t(1087),m=(t(613),t(7632),t(5675)),p=t(2383),x=function(){var e=(0,i.useState)(!1),s=(0,c.Z)(e,2),t=s[0],n=s[1];return(0,i.useEffect)((function(){var e=function(){n(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),t},v=t(184);var f=function(){var e=(0,u.UO)().customURL,s=(0,i.useState)([]),t=(0,c.Z)(s,2),f=t[0],j=t[1],g=(0,i.useState)(null),N=(0,c.Z)(g,2),b=(N[0],N[1],(0,i.useState)(null)),y=(0,c.Z)(b,2),w=y[0],Z=(y[1],(0,i.useState)("")),k=(0,c.Z)(Z,2),C=k[0],E=k[1],z=(0,i.useState)(""),S=(0,c.Z)(z,2),M=S[0],U=S[1],L=(0,i.useState)(null),R=(0,c.Z)(L,2),I=R[0],O=R[1],V=(0,i.useState)(null),P=(0,c.Z)(V,2),A=(P[0],P[1],(0,i.useState)({text:"",type:""})),D=(0,c.Z)(A,2),J=(D[0],D[1]),B=(0,i.useState)({text:"",type:""}),H=(0,c.Z)(B,2),F=(H[0],H[1],(0,i.useState)(!1)),$=(0,c.Z)(F,2),Q=$[0],T=($[1],(0,i.useState)("")),G=(0,c.Z)(T,2),_=G[0],W=G[1],q=(0,i.useState)(""),K=(0,c.Z)(q,2),X=K[0],Y=K[1],ee=(0,i.useState)(""),se=(0,c.Z)(ee,2),te=se[0],ne=se[1],ae=(0,i.useState)(""),re=(0,c.Z)(ae,2),le=re[0],ce=re[1],ie=(0,i.useState)(""),oe=(0,c.Z)(ie,2),de=oe[0],ue=oe[1],he=(0,i.useState)(""),me=(0,c.Z)(he,2),pe=me[0],xe=me[1],ve=(0,i.useState)(""),fe=(0,c.Z)(ve,2),je=(fe[0],fe[1]),ge=(0,i.useState)(""),Ne=(0,c.Z)(ge,2),be=Ne[0],ye=Ne[1],we=(0,i.useState)([]),Ze=(0,c.Z)(we,2),ke=Ze[0],Ce=Ze[1],Ee=(0,i.useState)(!0),ze=(0,c.Z)(Ee,2),Se=ze[0],Me=ze[1],Ue=(0,i.useState)(!0),Le=(0,c.Z)(Ue,2),Re=Le[0],Ie=Le[1],Oe=(0,i.useState)(null),Ve=(0,c.Z)(Oe,2),Pe=Ve[0],Ae=Ve[1],De=(0,u.s0)(),Je=(0,i.useState)([]),Be=(0,c.Z)(Je,2),He=Be[0],Fe=Be[1],$e=(0,i.useState)(!0),Qe=(0,c.Z)($e,2),Te=Qe[0],Ge=Qe[1],_e=(0,i.useState)([""]),We=(0,c.Z)(_e,2),qe=We[0],Ke=We[1],Xe=(0,i.useState)([""]),Ye=(0,c.Z)(Xe,2),es=Ye[0],ss=Ye[1],ts=(0,i.useState)([]),ns=(0,c.Z)(ts,2),as=ns[0],rs=ns[1],ls=x(),cs=(0,i.useState)({}),is=(0,c.Z)(cs,2),os=(is[0],is[1]),ds=(0,i.useState)(null),us=(0,c.Z)(ds,2),hs=us[0],ms=us[1],ps=(0,i.useState)(null),xs=(0,c.Z)(ps,2),vs=xs[0],fs=xs[1];(0,i.useEffect)((function(){var s=function(){var s=(0,l.Z)((0,a.Z)().mark((function s(){var t,n,l,c,i,u,h;return(0,a.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,e){s.next=4;break}return console.log("Custom URL is not defined."),s.abrupt("return");case 4:return t=(0,d.IO)((0,d.hJ)(o.RZ,"expertApplications"),(0,d.ar)("customURL","==",e)),s.next=7,(0,d.PL)(t);case 7:if((n=s.sent).empty){s.next=38;break}return l=n.docs[0].data(),c=l.displayName||"",E(c.split(" ")[0]||""),U(c.split(" ")[1]||""),W(l.address||""),Y(l.city||""),ne(l.county||""),ce(l.postcode||""),ue(l.mobileNumber||""),xe(l.occupation||""),ye(l.description||""),je(l.email||""),O(l.photoURL||null),Ce(l.keywords||[]),Ke(l.languages||[""]),ss(l.education||[""]),i=n.docs[0].id,fs(i),rs(l.employmentHistory||[]),s.next=30,(0,d.PL)((0,d.hJ)(o.RZ,"expertApplications/".concat(i,"/files")));case 30:u=s.sent,h=u.docs.map((function(e){var s=e.data(),t="image"===js(s.url);return(0,r.Z)((0,r.Z)({},s),{},{isImage:t})})),console.log("Image Data:",h),j(h),Me(!1),Ie(!1),s.next=41;break;case 38:console.log("Custom URL not found:",e),Me(!1),Ie(!1);case 41:s.next=48;break;case 43:s.prev=43,s.t0=s.catch(0),console.error("Error fetching user data:",s.t0),Me(!1),Ie(!1);case 48:case"end":return s.stop()}}),s,null,[[0,43]])})));return function(){return s.apply(this,arguments)}}();e&&s()}),[e]),(0,i.useEffect)((function(){var s=function(){var s=(0,l.Z)((0,a.Z)().mark((function s(){var t,n,r,l,c,i;return(0,a.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,e){s.next=4;break}return console.log("Custom URL is not defined."),s.abrupt("return");case 4:return t=(0,d.IO)((0,d.hJ)(o.RZ,"expertApplications"),(0,d.ar)("customURL","==",e)),s.next=7,(0,d.PL)(t);case 7:if((n=s.sent).empty){s.next=22;break}return r=n.docs[0].id,console.log("Other User UID:",r),l=(0,d.JU)(o.RZ,"expertApplications",r),s.next=14,(0,d.PL)((0,d.hJ)(l,"links"));case 14:c=s.sent,i=[],c.forEach((function(e){var s=e.data();s.url&&s.description&&i.push({url:s.url,description:s.description})})),console.log("Fetched links:",i),Fe(i),Ge(!1),s.next=24;break;case 22:console.log("Custom URL not found:",e),Ge(!1);case 24:s.next=30;break;case 26:s.prev=26,s.t0=s.catch(0),console.error("Error fetching user data:",s.t0),Ge(!1);case 30:case"end":return s.stop()}}),s,null,[[0,26]])})));return function(){return s.apply(this,arguments)}}();e&&s()}),[e]);var js=function(e){if(!e)return null;var s=e.split("?")[0];if(!s)return null;s.split(".").pop().toLowerCase();return/\.(jpeg|jpg|gif|webp|png|svg)$/i.test(s)?"image":/\.(pdf)$/i.test(s)?"pdf":/\.(doc|docx)$/i.test(s)?"word":/\.(xls|xlsx)$/i.test(s)?"excel":/\.(ppt|pptx)$/i.test(s)?"powerpoint":"other"},gs=function(e){if(!e)return null;switch(e.split("?")[0].split(".").pop().toLowerCase()){case"pdf":return(0,v.jsxs)("svg",{style:{color:"red"},xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 14 16",children:[" ",(0,v.jsx)("path",{d:"M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z",fill:"red"})," ",(0,v.jsx)("path",{fillRule:"evenodd",d:"M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z",fill:"red"})," "]});case"doc":case"docx":return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 110.031 107.5",children:[(0,v.jsx)("path",{d:"M57.505 0h7.475v10c13.375.075 26.738-.138 40.101.075 2.85-.288 5.087 1.925 4.825 4.775.212 24.625-.05 49.262.125 73.887-.125 2.525.25 5.325-1.213 7.562-1.825 1.3-4.188 1.138-6.312 1.237-12.514-.061-25.014-.036-37.526-.036v10h-7.812c-19.024-3.475-38.1-6.662-57.162-10-.013-29.162 0-58.325 0-87.475C19.167 6.675 38.343 3.413 57.506 0z",fill:"#2a5699"}),(0,v.jsx)("path",{d:"M64.98 13.75h41.25v80H64.98v-10h32.5v-5h-32.5V72.5h32.5v-5h-32.5v-6.25h32.5v-5h-32.5V50h32.5v-5h-32.5v-6.25h32.5v-5h-32.5V27.5h32.5v-5h-32.5v-8.75zM25.83 35.837c2.375-.137 4.75-.237 7.125-.362 1.662 8.438 3.362 16.862 5.162 25.262 1.413-8.675 2.976-17.325 4.487-25.987 2.5-.087 5-.225 7.488-.375-2.825 12.112-5.3 24.325-8.388 36.362-2.088 1.088-5.213-.05-7.688.125-1.663-8.274-3.6-16.5-5.088-24.812-1.462 8.075-3.362 16.075-5.037 24.101-2.4-.125-4.812-.275-7.226-.438-2.074-11-4.512-21.925-6.449-32.95 2.137-.1 4.287-.188 6.425-.263 1.287 7.962 2.75 15.888 3.875 23.862 1.765-8.174 3.564-16.349 5.314-24.525z",fill:"#fff"})]});case"xls":case"xlsx":return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 110.037 107.5",children:[(0,v.jsx)("path",{d:"M57.55 0h7.425v10c12.513 0 25.025.025 37.537-.038 2.113.087 4.438-.062 6.275 1.2 1.287 1.85 1.138 4.2 1.225 6.325-.062 21.7-.037 43.388-.024 65.075-.062 3.638.337 7.35-.425 10.938-.5 2.6-3.625 2.662-5.713 2.75-12.95.037-25.912-.025-38.875 0v11.25h-7.763c-19.05-3.463-38.138-6.662-57.212-10V10.013C19.188 6.675 38.375 3.388 57.55 0z",fill:"#207245"}),(0,v.jsx)("path",{d:"M64.975 13.75h41.25V92.5h-41.25V85h10v-8.75h-10v-5h10V62.5h-10v-5h10v-8.75h-10v-5h10V35h-10v-5h10v-8.75h-10v-7.5z",fill:"#fff"}),(0,v.jsx)("path",{d:"M79.975 21.25h17.5V30h-17.5v-8.75z",fill:"#207245"}),(0,v.jsx)("path",{d:"M37.025 32.962c2.825-.2 5.663-.375 8.5-.512a2607.344 2607.344 0 0 1-10.087 20.487c3.438 7 6.949 13.95 10.399 20.95a716.28 716.28 0 0 1-9.024-.575c-2.125-5.213-4.713-10.25-6.238-15.7-1.699 5.075-4.125 9.862-6.074 14.838-2.738-.038-5.476-.15-8.213-.263C19.5 65.9 22.6 59.562 25.912 53.312c-2.812-6.438-5.9-12.75-8.8-19.15 2.75-.163 5.5-.325 8.25-.475 1.862 4.888 3.899 9.712 5.438 14.725 1.649-5.312 4.112-10.312 6.225-15.45z",fill:"#fff"}),(0,v.jsx)("path",{d:"M79.975 35h17.5v8.75h-17.5V35zM79.975 48.75h17.5v8.75h-17.5v-8.75zM79.975 62.5h17.5v8.75h-17.5V62.5zM79.975 76.25h17.5V85h-17.5v-8.75z",fill:"#207245"})]});case"ppt":case"pptx":return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 110.031 107.5",children:[(0,v.jsx)("path",{d:"M57.893 0h7.087v11.25c13.363.075 26.738-.138 40.088.062 2.875-.275 5.125 1.962 4.838 4.837.212 23.35-.05 46.712.125 70.075-.125 2.525.25 5.325-1.2 7.562-1.825 1.325-4.2 1.15-6.338 1.25-12.5-.062-25-.037-37.513-.037v12.5h-7.774c-19.05-3.475-38.138-6.65-57.2-10-.013-29.162 0-58.325 0-87.475C19.292 6.688 38.58 3.288 57.893 0z",fill:"#d24625"}),(0,v.jsx)("path",{d:"M64.98 15h41.25v76.25H64.98v-10h30v-5h-30V70h30v-5H64.993c-.013-2.45-.013-4.9-.024-7.35 4.95 1.537 10.587 1.5 15.012-1.476 4.788-2.837 7.288-8.25 7.7-13.65-5.487-.038-10.975-.025-16.45-.025-.012-5.438.062-10.875-.112-16.3-2.05.4-4.1.825-6.138 1.262V15z",fill:"#fff"}),(0,v.jsx)("path",{d:"M73.743 23.587c8.688.4 15.987 7.712 16.45 16.375-5.488.063-10.975.038-16.463.038 0-5.475-.012-10.95.013-16.413z",fill:"#d24625"}),(0,v.jsx)("path",{d:"M20.055 33.025c6.788.325 15.013-2.688 20.638 2.4 5.388 6.538 3.963 18.562-4.025 22.476-2.837 1.449-6.087 1.25-9.175 1.149-.013 4.888-.024 9.775-.013 14.663a1323.27 1323.27 0 0 0-7.438-.625c-.112-13.351-.136-26.713.013-40.063z",fill:"#fff"}),(0,v.jsx)("path",{d:"M27.48 39.788c2.463-.113 5.513-.562 7.176 1.75 1.425 2.45 1.35 5.675.162 8.2-1.425 2.575-4.65 2.325-7.138 2.625-.263-4.188-.237-8.376-.2-12.575z",fill:"#d24625"})]});default:return null}},Ns=function(){Ae(null)},bs=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var s,t,n,l,i,u,h,m,p,x,v;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=o.I8.currentUser.uid,t=(0,d.JU)(o.RZ,"userProfiles",s),n=(0,d.JU)(o.RZ,"expertApplications",s),e.next=6,Promise.all([(0,d.QT)(t),(0,d.QT)(n)]);case 6:l=e.sent,i=(0,c.Z)(l,2),u=i[0],h=i[1],m={},u.exists()&&(p=u.data(),m=p.contacts||{}),h.exists()&&(x=h.data(),v=x.contacts||{},m=(0,r.Z)((0,r.Z)({},m),v)),os(m),vs&&m[vs]?ms(!0):ms(!1),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.error("Error fetching user contacts:",e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){e&&vs&&bs()}),[e,vs]);var ys=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var s,t,l,i,u,h,m,p,x,v,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=o.I8.currentUser.uid,!vs){e.next=20;break}return t=(0,d.JU)(o.RZ,"userProfiles",s),l=(0,d.JU)(o.RZ,"expertApplications",s),e.next=7,Promise.all([(0,d.QT)(t),(0,d.QT)(l)]);case 7:return i=e.sent,u=(0,c.Z)(i,2),h=u[0],m=u[1],p={},h.exists()&&(x=h.data(),p=x.contacts||{}),m.exists()&&(v=m.data(),p=v.contacts||{}),f=p?(0,d.JU)(o.RZ,"userProfiles",s):(0,d.JU)(o.RZ,"expertApplications",s),e.next=17,(0,d.pl)(f,{contacts:(0,r.Z)((0,r.Z)({},p),{},(0,n.Z)({},vs,!0))},{merge:!0});case 17:ms(!0),e.next=21;break;case 20:console.log("Other User UID not found");case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.error("Error connecting:",e.t0);case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{className:"profile-container",children:[(0,v.jsx)("div",{className:"container"}),(0,v.jsx)("div",{className:"profile-section",children:(0,v.jsxs)("div",{className:"content profile-content ",children:[(0,v.jsxs)("div",{className:"row g-3",children:[(0,v.jsx)("div",{className:"card-profile"}),(0,v.jsxs)("div",{className:"card-body nopadding col-md-12 justify-content-between",children:[(0,v.jsxs)("div",{className:"profile-button-container ",children:[!Q&&I&&(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:I,alt:"User Profile",className:"user-avatar large-avatar mb-3"})}),Q&&(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"user-avatar large-avatar rounded-circle mb-3"})}),(0,v.jsxs)("div",{className:"px-3",children:[(0,v.jsx)("div",{className:"card-title",children:"".concat(C," ").concat(M)}),(0,v.jsx)("div",{className:"text-muted  card-subtitle  mb-2",children:pe})]}),(0,v.jsxs)("div",{className:"d-flex responsive-buttons",children:[(0,v.jsx)(h.rU,{to:"/chat",children:(0,v.jsxs)("button",{type:"button",className:"label-with-svg me-4 btn btn-primary btn-sm rounded-pill pt-2 pb-2",onClick:function(){var s=(0,d.IO)((0,d.hJ)(o.RZ,"expertApplications"),(0,d.ar)("customURL","==",e));(0,d.PL)(s).then((function(s){if(s.empty)console.log("Custom URL not found:",e);else{var t=s.docs[0].id,n=o.I8.currentUser.uid;De("/chat",{state:{currentUserUID:n,otherUserUID:t}})}})).catch((function(e){console.error("Error fetching data:",e),J({text:"Error accessing chat",type:"error"})}))},children:[(0,v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,v.jsx)("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z",clipRule:"evenodd"})}),"Message"]})}),null!==hs&&(0,v.jsxs)("button",{type:"button",className:"btn btn-secondary btn-sm rounded-pill pt-2 pb-2",onClick:ys,disabled:hs,children:[(0,v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,v.jsx)("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})}),(0,v.jsx)("span",{className:"me-2",children:hs?"Connected":"Connect"})]})]})]}),!ls&&(0,v.jsxs)("div",{className:"col-md-6",children:[(0,v.jsx)("h4",{children:"Bio"}),(0,v.jsx)("label",{className:"form-label",children:"Description of Expertise"}),(0,v.jsx)("textarea",{id:"inputDescription",type:"text",className:"form-control",rows:"8",placeholder:"",value:be,readOnly:!0,onChange:function(e){return ye(e.target.value)},style:{resize:"none",pointerEvents:"none"}})]}),(0,v.jsxs)("div",{className:"col-md-2",children:[(0,v.jsx)("h5",{className:"card-title h3",children:"Skills: "}),ke.map((function(e,s){return(0,v.jsx)("div",{className:"containerhover keyword-container mb-2 mx-1 pb-1",children:e},s)}))]})]})]}),(0,v.jsxs)("div",{className:"row",children:[(0,v.jsxs)("div",{className:"mt-4 ",children:[(0,v.jsxs)("h3",{children:["Profile of ",(0,v.jsx)("span",{children:" "}),"".concat(C," ").concat(M)]}),(0,v.jsx)("hr",{})]}),(0,v.jsx)("form",{className:"file-upload",children:(0,v.jsx)("div",{className:"row mb-4 gx-4",children:(0,v.jsx)("div",{className:"col-xl-12 col-12",children:(0,v.jsx)("div",{className:"",children:(0,v.jsxs)("div",{className:"card-body card-profile",children:[(0,v.jsxs)("div",{className:"row g-3",children:[ls&&(0,v.jsxs)("div",{className:"col-md-12",children:[(0,v.jsx)("h5",{children:"Employment History"}),as.map((function(e,s){return(0,v.jsxs)("div",{className:"employment-spacing",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:(0,v.jsx)("strong",{children:e.employer})}),(0,v.jsx)("p",{children:e.position})]}),(0,v.jsxs)("p",{children:[e.startDate," - ",e.endDate]})]},s)}))]}),(0,v.jsx)("div",{className:"col-md-12",children:(0,v.jsxs)("div",{className:"row g-3 column-spacing",children:[!ls&&(0,v.jsxs)("div",{className:"col-4 col-md-4",children:[(0,v.jsx)("h5",{children:"Employment History"}),as.map((function(e,s){return(0,v.jsxs)("div",{className:"employment-spacing",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:(0,v.jsx)("strong",{children:e.employer})}),(0,v.jsx)("p",{children:e.position})]}),(0,v.jsxs)("p",{children:[e.startDate," - ",e.endDate]})]},s)}))]}),(0,v.jsxs)("div",{className:"col-".concat(ls?6:3," col-md-").concat(ls?6:3),children:[(0,v.jsx)("h5",{children:"Languages"}),qe.map((function(e,s){return(0,v.jsx)("div",{className:"langauges-spacing",children:(0,v.jsx)("p",{"aria-label":"Language",children:e})},s)}))]}),(0,v.jsxs)("div",{className:"col-".concat(ls?6:3," col-md-").concat(ls?6:3),children:[(0,v.jsx)("h5",{children:"Education"}),es.map((function(e,s){return(0,v.jsx)("div",{className:"langauges-spacing",children:(0,v.jsx)("p",{"aria-label":"Education",children:e})},s)}))]})]})}),ls&&(0,v.jsxs)("div",{className:"col-md-8",children:[(0,v.jsx)("h4",{children:"Bio"}),(0,v.jsx)("label",{className:"form-label",children:"Description of Expertise"}),(0,v.jsx)("textarea",{id:"inputDescription",type:"text",className:"form-control",rows:"4",placeholder:"",value:be,readOnly:!0,onChange:function(e){return ye(e.target.value)},style:{resize:"none",pointerEvents:"none"}})]}),(0,v.jsxs)("div",{className:"link-section",children:[(0,v.jsx)("h4",{children:"Links"}),(0,v.jsx)("div",{className:"links-list",children:Te?(0,v.jsx)(p.Z,{}):He.map((function(e,s){return(0,v.jsx)("div",{className:"link-item",children:(0,v.jsxs)("div",{className:"links-container",children:[(0,v.jsx)("div",{className:"url-container",children:(0,v.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.url.replace(/^https?:\/\//,"")})}),e.description&&(0,v.jsx)("div",{className:"description-container",children:e.description})]})},s)}))})]}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h4",{children:"File Gallery"}),(0,v.jsx)("div",{className:"col-md-12",children:(0,v.jsx)("div",{className:"col-md-12",children:(0,v.jsx)("div",{className:"gallery-container-preview",children:Se?(0,v.jsx)(p.Z,{}):f.filter((function(e){return!e.isImage})).map((function(e,s){return(0,v.jsxs)("div",{className:"gallery-item",children:[(0,v.jsx)("div",{className:"file-container",children:(0,v.jsxs)("div",{className:"file-info",children:[(0,v.jsx)("p",{className:"file-title",children:e.title}),(0,v.jsx)("a",{href:e.url,download:!0,children:(0,v.jsx)("div",{className:"file-icon",children:gs(e.url)})})]})}),(0,v.jsx)("p",{className:"description-text",children:e.description})]},s)}))})})}),f.some((function(e){return e.isImage}))&&(0,v.jsx)("div",{className:"carousel-container",children:Re?(0,v.jsx)(p.Z,{}):(0,v.jsx)(m.Z,{"data-bs-theme":"dark",controls:!0,children:f.filter((function(e){return e.isImage})).map((function(e,s){return(0,v.jsxs)(m.Z.Item,{onClick:function(){return s=e.url,void Ae(s);var s},children:[(0,v.jsx)("img",{className:"carousel-image",src:e.url,alt:"Gallery ".concat(s+1)}),(0,v.jsxs)(m.Z.Caption,{children:[(0,v.jsx)("h3",{children:e.title}),(0,v.jsx)("p",{children:e.description})]})]},s)}))})}),Pe&&(0,v.jsx)("div",{className:"enlarged-image-container",onClick:Ns,children:(0,v.jsxs)("div",{className:"enlarged-image",children:[(0,v.jsx)("img",{src:Pe,alt:"Enlarged Image"}),(0,v.jsx)("div",{className:"go-back-svg",children:(0,v.jsx)("button",{onClick:Ns,children:(0,v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,color:"black",stroke:"currentColor",className:"w-6 h-6",children:(0,v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})})]})})]}),(0,v.jsx)("h4",{className:"mb-4",children:"General information"}),(0,v.jsxs)("div",{className:"col-md-6",children:[(0,v.jsx)("label",{className:"form-label",children:"First Name  "}),(0,v.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:C,onChange:function(e){return E(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,v.jsxs)("div",{className:"col-md-6",children:[(0,v.jsx)("label",{className:"form-label",children:"Last Name  "}),(0,v.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:M,onChange:function(e){return U(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,v.jsxs)("div",{className:"col-md-6",children:[(0,v.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email  "}),(0,v.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:w?w.email:"",readOnly:!0,style:{pointerEvents:"none"}})]}),(0,v.jsxs)("div",{className:"col-md-6",children:[(0,v.jsx)("label",{className:"form-label",children:"Mobile number  "}),(0,v.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Phone number",value:de,readOnly:!0,onChange:function(e){return ue(e.target.value)},style:{pointerEvents:"none"}})]}),(0,v.jsxs)("div",{className:"col-md-12",children:[(0,v.jsx)("label",{className:"form-label",children:"Role/Expertise  "}),(0,v.jsx)("input",{id:"inputRole",type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"your Role",value:pe,onChange:function(e){return xe(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]})]}),(0,v.jsx)("div",{className:"py-5 rounded mt-4",children:(0,v.jsxs)("div",{className:"row g-3",children:[(0,v.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,v.jsxs)("div",{className:"col-md-6",children:[(0,v.jsx)("label",{className:"form-label",children:"Address"}),(0,v.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"",value:_,onChange:function(e){return W(e.target.value)},style:{pointerEvents:"none"},readOnly:!0})]}),(0,v.jsxs)("div",{className:"col-md-6",children:[(0,v.jsx)("label",{className:"form-label",children:"City"}),(0,v.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:X,onChange:function(e){return Y(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,v.jsxs)("div",{className:"col-md-6",children:[(0,v.jsx)("label",{className:"form-label",children:"County"}),(0,v.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:te,onChange:function(e){return ne(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,v.jsxs)("div",{className:"col-md-6",children:[(0,v.jsx)("label",{className:"form-label",children:"Postcode"}),(0,v.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:le,onChange:function(e){return ce(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]})]})})]})})})})})]})]})})]})}}}]);
//# sourceMappingURL=702.e7979135.chunk.js.map