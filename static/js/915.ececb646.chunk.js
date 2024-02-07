"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[915],{5416:function(e,t,r){r.r(t);var s=r(3433),n=r(4165),o=r(5861),a=r(9439),c=r(2791),l=r(673),i=r(2481),d=r(276),u=r(5485),h=r(7689),p=r(7386),m=r(3071),x=r(184);t.default=function(){(0,h.UO)().customURL;var e=(0,c.useState)(null),t=(0,a.Z)(e,2),r=t[0],f=t[1],v=(0,c.useState)(""),g=(0,a.Z)(v,2),j=g[0],w=g[1],k=(0,c.useState)(""),b=(0,a.Z)(k,2),N=b[0],y=b[1],L=(0,c.useState)(null),Z=(0,a.Z)(L,2),C=Z[0],S=Z[1],M=(0,c.useState)(null),E=(0,a.Z)(M,2),z=(E[0],E[1]),U=(0,c.useState)({text:"",type:""}),R=(0,a.Z)(U,2),A=R[0],F=(R[1],(0,c.useState)({text:"",type:""})),B=(0,a.Z)(F,2),P=B[0],V=B[1],J=(0,c.useState)(!1),I=(0,a.Z)(J,2),W=I[0],D=I[1],H=(0,c.useState)(""),O=(0,a.Z)(H,2),_=O[0],T=O[1],G=(0,c.useState)(""),K=(0,a.Z)(G,2),Q=K[0],q=K[1],Y=(0,c.useState)(""),$=(0,a.Z)(Y,2),X=$[0],ee=$[1],te=(0,c.useState)(""),re=(0,a.Z)(te,2),se=re[0],ne=re[1],oe=(0,c.useState)(""),ae=(0,a.Z)(oe,2),ce=ae[0],le=ae[1],ie=(0,c.useState)(""),de=(0,a.Z)(ie,2),ue=de[0],he=de[1],pe=(0,c.useState)(""),me=(0,a.Z)(pe,2),xe=(me[0],me[1]),fe=(0,c.useState)(""),ve=(0,a.Z)(fe,2),ge=ve[0],je=ve[1],we=(0,c.useState)(""),ke=(0,a.Z)(we,2),be=ke[0],Ne=ke[1],ye=(0,c.useState)([]),Le=(0,a.Z)(ye,2),Ze=Le[0],Ce=Le[1],Se=(0,c.useState)(""),Me=(0,a.Z)(Se,2),Ee=Me[0],ze=Me[1],Ue=(0,c.useState)(!1),Re=(0,a.Z)(Ue,2),Ae=Re[0],Fe=Re[1],Be=(0,c.useState)([]),Pe=(0,a.Z)(Be,2),Ve=Pe[0],Je=Pe[1],Ie=(0,c.useState)([]),We=(0,a.Z)(Ie,2),De=We[0],He=We[1];(0,c.useEffect)((function(){var e=l.I8.onAuthStateChanged(function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var r,s,o,a,c,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=22;break}return f(t),r=(0,i.JU)(l.RZ,"expertApplications",t.uid),e.next=5,(0,i.QT)(r);case 5:return(s=e.sent).exists()?((o=s.data()).photoURL?S(o.photoURL):S(t.photoURL),w(o.first_name||t.displayName.split(" ")[0]||""),y(o.last_name||t.displayName.split(" ")[1]||""),T(o.address||""),q(o.city||""),ee(o.county||""),ne(o.postcode||""),le(o.mobileNumber||""),he(o.occupation||""),xe(t.email),je(o.description),ze(o.labels||"")):S(t.photoURL),a=(0,i.hJ)(l.RZ,"expertApplications/".concat(t.uid,"/files")),e.prev=8,e.next=11,(0,i.PL)(a);case 11:c=e.sent,d=c.docs.map((function(e){var t=e.data(),r=/\.(jpeg|jpg|gif|png|svg)$/i.test(t.url.split("?")[0]),s=t.title||"";return console.log("File URL:",t.url),{id:e.id,url:t.url,description:t.description,title:s,isImage:r}})),console.log("Gallery List:",d),He(d),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(8),console.error("Error fetching gallery images:",e.t0);case 20:e.next=31;break;case 22:T(""),q(""),ee(""),ne(""),le(""),S(null),xe(""),he(""),je("");case 31:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[]),(0,c.useEffect)((function(){console.log("Gallery State:",De)}),[De]);var Oe=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,s){var o,a,c,d,u,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t[0],a="",c=s||o.name,d=(0,i.hJ)(l.RZ,"expertApplications/".concat(r.uid,"/files")),e.prev=4,!(o.size>1048576)){e.next=11;break}return e.next=8,u(o);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=o;case 12:return u=e.t0,e.next=15,_e(u,a,c,d);case 15:h=e.sent,console.log("Download URL:",h),e.next=22;break;case 19:e.prev=19,e.t1=e.catch(4),console.error("Error processing file:",e.t1);case 22:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t,r){return e.apply(this,arguments)}}(),_e=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,o,a,c){var u,h,p,m,x,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=(0,d.iH)(l.tO,"expertFiles/".concat(r.uid,"/").concat(a)),e.prev=1,h=(0,d.B0)(u,t),e.next=5,h;case 5:return p=e.sent,e.next=8,(0,d.Jt)(p.ref);case 8:return m=e.sent,x={id:a,url:m,description:o,title:a},He((function(e){return[].concat((0,s.Z)(e),[x])})),f=(0,i.JU)(c,a),e.next=14,(0,i.pl)(f,{url:m,description:o,title:a});case 14:return console.log("Files uploaded and stored successfully"),e.abrupt("return",m);case 18:e.prev=18,e.t0=e.catch(1),console.error("Error uploading Files:",e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t,r,s,n){return e.apply(this,arguments)}}(),Te=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var s,o,a,c,u,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log("Gallery before removal:",De),s=De[t],console.log(" object:",s),s){e.next=7;break}return console.error("Error removing photo:  not found in gallery"),e.abrupt("return");case 7:return o=s.id,console.log(" name:",o),a=(0,d.iH)(l.tO,"expertFiles/".concat(r.uid,"/").concat(o)),e.next=12,(0,d.oq)(a);case 12:return console.log(" removed successfully from Storage"),c="expertApplications/".concat(r.uid,"/files/").concat(o),console.log("Firestore document path:",c),u=(0,i.JU)(l.RZ,c),e.next=18,(0,i.oe)(u);case 18:console.log("Document removed successfully from Firestore"),h=De.filter((function(e,r){return r!==t})),console.log("Updated gallery:",h),He(h),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),console.error("Error removing photo:",e.t0);case 27:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(t){return e.apply(this,arguments)}}(),Ge=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=De[t],o=(0,i.JU)((0,i.hJ)(l.RZ,"expertApplications/".concat(r.uid,"/files")),s.id),e.prev=2,e.next=5,Promise.all([(0,i.r7)(o,{description:s.description,title:s.title})]);case 5:console.log("Description and title updated successfully in Firestore"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error("Error updating description and title:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),Ke=function(e){if(!e)return null;switch(e.split("?")[0].split(".").pop().toLowerCase()){case"pdf":return(0,x.jsxs)("svg",{style:{color:"red"},xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 14 16",children:[" ",(0,x.jsx)("path",{d:"M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z",fill:"red"})," ",(0,x.jsx)("path",{"fill-rule":"evenodd",d:"M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z",fill:"red"})," "]});case"doc":case"docx":return(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 110.031 107.5",children:[(0,x.jsx)("path",{d:"M57.505 0h7.475v10c13.375.075 26.738-.138 40.101.075 2.85-.288 5.087 1.925 4.825 4.775.212 24.625-.05 49.262.125 73.887-.125 2.525.25 5.325-1.213 7.562-1.825 1.3-4.188 1.138-6.312 1.237-12.514-.061-25.014-.036-37.526-.036v10h-7.812c-19.024-3.475-38.1-6.662-57.162-10-.013-29.162 0-58.325 0-87.475C19.167 6.675 38.343 3.413 57.506 0z",fill:"#2a5699"}),(0,x.jsx)("path",{d:"M64.98 13.75h41.25v80H64.98v-10h32.5v-5h-32.5V72.5h32.5v-5h-32.5v-6.25h32.5v-5h-32.5V50h32.5v-5h-32.5v-6.25h32.5v-5h-32.5V27.5h32.5v-5h-32.5v-8.75zM25.83 35.837c2.375-.137 4.75-.237 7.125-.362 1.662 8.438 3.362 16.862 5.162 25.262 1.413-8.675 2.976-17.325 4.487-25.987 2.5-.087 5-.225 7.488-.375-2.825 12.112-5.3 24.325-8.388 36.362-2.088 1.088-5.213-.05-7.688.125-1.663-8.274-3.6-16.5-5.088-24.812-1.462 8.075-3.362 16.075-5.037 24.101-2.4-.125-4.812-.275-7.226-.438-2.074-11-4.512-21.925-6.449-32.95 2.137-.1 4.287-.188 6.425-.263 1.287 7.962 2.75 15.888 3.875 23.862 1.765-8.174 3.564-16.349 5.314-24.525z",fill:"#fff"})]});case"xls":case"xlsx":return(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 110.037 107.5",children:[(0,x.jsx)("path",{d:"M57.55 0h7.425v10c12.513 0 25.025.025 37.537-.038 2.113.087 4.438-.062 6.275 1.2 1.287 1.85 1.138 4.2 1.225 6.325-.062 21.7-.037 43.388-.024 65.075-.062 3.638.337 7.35-.425 10.938-.5 2.6-3.625 2.662-5.713 2.75-12.95.037-25.912-.025-38.875 0v11.25h-7.763c-19.05-3.463-38.138-6.662-57.212-10V10.013C19.188 6.675 38.375 3.388 57.55 0z",fill:"#207245"}),(0,x.jsx)("path",{d:"M64.975 13.75h41.25V92.5h-41.25V85h10v-8.75h-10v-5h10V62.5h-10v-5h10v-8.75h-10v-5h10V35h-10v-5h10v-8.75h-10v-7.5z",fill:"#fff"}),(0,x.jsx)("path",{d:"M79.975 21.25h17.5V30h-17.5v-8.75z",fill:"#207245"}),(0,x.jsx)("path",{d:"M37.025 32.962c2.825-.2 5.663-.375 8.5-.512a2607.344 2607.344 0 0 1-10.087 20.487c3.438 7 6.949 13.95 10.399 20.95a716.28 716.28 0 0 1-9.024-.575c-2.125-5.213-4.713-10.25-6.238-15.7-1.699 5.075-4.125 9.862-6.074 14.838-2.738-.038-5.476-.15-8.213-.263C19.5 65.9 22.6 59.562 25.912 53.312c-2.812-6.438-5.9-12.75-8.8-19.15 2.75-.163 5.5-.325 8.25-.475 1.862 4.888 3.899 9.712 5.438 14.725 1.649-5.312 4.112-10.312 6.225-15.45z",fill:"#fff"}),(0,x.jsx)("path",{d:"M79.975 35h17.5v8.75h-17.5V35zM79.975 48.75h17.5v8.75h-17.5v-8.75zM79.975 62.5h17.5v8.75h-17.5V62.5zM79.975 76.25h17.5V85h-17.5v-8.75z",fill:"#207245"})]});case"ppt":case"pptx":return(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 110.031 107.5",children:[(0,x.jsx)("path",{d:"M57.893 0h7.087v11.25c13.363.075 26.738-.138 40.088.062 2.875-.275 5.125 1.962 4.838 4.837.212 23.35-.05 46.712.125 70.075-.125 2.525.25 5.325-1.2 7.562-1.825 1.325-4.2 1.15-6.338 1.25-12.5-.062-25-.037-37.513-.037v12.5h-7.774c-19.05-3.475-38.138-6.65-57.2-10-.013-29.162 0-58.325 0-87.475C19.292 6.688 38.58 3.288 57.893 0z",fill:"#d24625"}),(0,x.jsx)("path",{d:"M64.98 15h41.25v76.25H64.98v-10h30v-5h-30V70h30v-5H64.993c-.013-2.45-.013-4.9-.024-7.35 4.95 1.537 10.587 1.5 15.012-1.476 4.788-2.837 7.288-8.25 7.7-13.65-5.487-.038-10.975-.025-16.45-.025-.012-5.438.062-10.875-.112-16.3-2.05.4-4.1.825-6.138 1.262V15z",fill:"#fff"}),(0,x.jsx)("path",{d:"M73.743 23.587c8.688.4 15.987 7.712 16.45 16.375-5.488.063-10.975.038-16.463.038 0-5.475-.012-10.95.013-16.413z",fill:"#d24625"}),(0,x.jsx)("path",{d:"M20.055 33.025c6.788.325 15.013-2.688 20.638 2.4 5.388 6.538 3.963 18.562-4.025 22.476-2.837 1.449-6.087 1.25-9.175 1.149-.013 4.888-.024 9.775-.013 14.663a1323.27 1323.27 0 0 0-7.438-.625c-.112-13.351-.136-26.713.013-40.063z",fill:"#fff"}),(0,x.jsx)("path",{d:"M27.48 39.788c2.463-.113 5.513-.562 7.176 1.75 1.425 2.45 1.35 5.675.162 8.2-1.425 2.575-4.65 2.325-7.138 2.625-.263-4.188-.237-8.376-.2-12.575z",fill:"#d24625"})]});default:return(0,x.jsx)(m.pPO,{})}},Qe=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(t),s=(0,i.JU)(l.RZ,"expertApplications",r.uid),e.next=4,(0,i.r7)(s,{photoURL:t});case 4:(0,u.ck)(r,{photoURL:t}).then((function(){console.log("Profile photo updated successfully")})).catch((function(e){console.error("Error updating profile photo:",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),qe=function(){V({text:"",type:""})},Ye=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var t,s,o,a,c,d,u,h,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t=(0,i.JU)(l.RZ,"expertApplications",r.uid),e.next=6,(0,i.QT)(t);case 6:if(!(s=e.sent).exists()){e.next=22;break}return o=s.data(),a=o.approved||!1,c=o.customURL||!1,d=o.points||0,u=(0,i.JU)(l.RZ,"userProfiles",r.uid),e.next=15,(0,i.oe)(u);case 15:return h=l.I8.currentUser,p=h.photoURL,e.next=19,(0,i.pl)(t,{displayName:"".concat(j," ").concat(N),email:r.email,mobileNumber:document.getElementById("inputMobileNumber").value,occupation:document.getElementById("inputExpertise").value,address:document.getElementById("inputAddress").value,city:document.getElementById("inputCity").value,county:document.getElementById("inputCounty").value,postcode:document.getElementById("inputPostcode").value,description:document.getElementById("inputDescription").value,photoURL:p,approved:a,customURL:c,keywords:Ve,points:d,labels:Ee});case 19:z(null),V({text:"Profile updated successfully",type:"success"}),setTimeout((function(){return qe()}),3e3);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(2),V({text:"Error updating profile: ".concat(e.t0.message),type:"error"}),setTimeout((function(){return qe()}),3e3);case 28:case"end":return e.stop()}}),e,null,[[2,24]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){var e=l.I8.onAuthStateChanged(function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var r,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return f(t),r=(0,i.JU)(l.RZ,"expertApplications",t.uid),e.next=5,(0,i.QT)(r);case 5:(s=e.sent).exists()&&(o=s.data(),Ce(o.keywords||[]),ze(o.labels||""));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[]);var $e=function(e){var t=(0,s.Z)(Ve);t.splice(e,1),Je(t)},Xe=function(e){var t=(0,s.Z)(Ze);t.splice(e,1),Ce(t)},et=function(){console.log("Image clicked"),Fe(!0)},tt=function(){document.body.style.overflow=""};return(0,x.jsxs)("div",{className:"profile-container",children:[(0,x.jsx)("div",{className:"container"}),(0,x.jsx)("div",{className:"profile-section",children:(0,x.jsx)("div",{className:"content profile-content ",children:(0,x.jsxs)("div",{className:"row g-3",children:[(0,x.jsx)("div",{className:"card-profile"}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsxs)("div",{className:"Profile-image position-relative",children:[!W&&C&&(0,x.jsxs)("div",{className:"position-relative",children:[(0,x.jsx)("img",{src:C,alt:"User Profile",className:"user-avatar large-avatar mb-3",onError:function(){return D(!0)},onClick:et,style:{cursor:"pointer"}}),(0,x.jsx)("div",{className:"svg-icon",onClick:et,children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:2,stroke:"white",className:"w-6 h-6",children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),W&&(0,x.jsxs)("div",{className:"position-relative",children:[(0,x.jsx)("img",{src:"".concat("","/images/arts/user.webp"),alt:"Custom 404 Image",className:"user-avatar large-avatar rounded-circle mb-3",onClick:et,style:{cursor:"pointer"}}),(0,x.jsxs)("div",{className:"px-3",children:[(0,x.jsx)("div",{className:"card-title",children:"".concat(j," ").concat(N)}),(0,x.jsx)("div",{className:"fw-normal card-subtitle mb-4 h6",children:ue})]})]})]}),(0,x.jsxs)("div",{className:"px-3",children:[(0,x.jsx)("div",{className:"card-title",children:"".concat(j," ").concat(N)}),(0,x.jsx)("div",{className:"text-muted card-subtitle h6",children:ue})]}),(0,x.jsxs)("div",{children:["error"===A.type&&(0,x.jsx)("p",{className:"fw-light",style:{color:"red"},children:A.text}),"success"===A.type&&(0,x.jsx)("p",{className:"fw-light",style:{color:"green"},children:A.text}),"progress"===A.type&&(0,x.jsx)("p",{className:"fw-light",style:{color:"gray"},children:A.text})]})]}),(0,x.jsx)("h3",{children:"My Profile"}),(0,x.jsx)("hr",{}),(0,x.jsx)("form",{className:"file-upload",children:(0,x.jsxs)("div",{className:"row mb-4 gx-4",children:[(0,x.jsx)("div",{className:"col-xl-12 col-12",children:(0,x.jsx)("div",{className:"card-body card-profile",children:(0,x.jsxs)("div",{className:"row g-3",children:[(0,x.jsxs)("div",{className:"col-md-8",children:[(0,x.jsx)("h4",{className:"mb-4",children:"General information"}),(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsxs)("div",{className:"row g-3",children:[(0,x.jsxs)("div",{className:"col-md-6",children:[(0,x.jsx)("label",{className:"form-label",children:"First Name *"}),(0,x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"First name",value:j,onChange:function(e){return w(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,x.jsxs)("div",{className:"col-md-6",children:[(0,x.jsx)("label",{className:"form-label",children:"Last Name *"}),(0,x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"","aria-label":"Last name",value:N,onChange:function(e){return y(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,x.jsxs)("div",{className:"col-md-6",children:[(0,x.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Email *"}),(0,x.jsx)("input",{type:"email",className:"form-control form-control-lg",id:"inputEmail4",value:r?r.email:"",readOnly:!0,style:{pointerEvents:"none"}})]}),(0,x.jsxs)("div",{className:"col-md-6",children:[(0,x.jsx)("label",{className:"form-label",children:"Mobile number *"}),(0,x.jsx)("input",{id:"inputMobileNumber",type:"text",className:"form-control form-control-lg",placeholder:"Enter your Phone number","aria-label":"Phone number",value:ce,onChange:function(e){return le(e.target.value)}})]}),(0,x.jsxs)("div",{className:"col-md-12",children:[(0,x.jsx)("label",{className:"form-label",children:"Role/Expertise *"}),(0,x.jsx)("input",{id:"inputExpertise",type:"text",className:"form-control form-control-lg",placeholder:"Enter your role/expertise","aria-label":"your Role",value:ue,onChange:function(e){return he(e.target.value)},readOnly:!0,style:{pointerEvents:"none"}})]}),(0,x.jsxs)("div",{className:"col-md-12",children:[(0,x.jsx)("label",{className:"form-label",children:"Description of Expertise"}),(0,x.jsx)("textarea",{id:"inputDescription",type:"text",className:"form-control",rows:"4",placeholder:"Enter a brief description of your expertise or how you can help",value:ge,onChange:function(e){return je(e.target.value)},style:{resize:"none"}})]})]})})]}),(0,x.jsx)("div",{className:"col-md-4",children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{className:"form-label",children:"Categories"}),(0,x.jsxs)("ul",{className:"listcard expert-listcard",children:[(0,x.jsxs)("li",{className:"form-check expert-form-check ",children:[(0,x.jsx)("input",{type:"radio",className:"form-check-input listboxes ",id:"jobSuccess90",name:"jobSuccess",onChange:function(){return ze("Computer")},checked:"Computer"===Ee}),(0,x.jsxs)("label",{className:"expert-form-check-label expert-label-with-svg",htmlFor:"anyJobSuccess",children:["Computer",(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#FF5733",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:"25",width:"25",children:[(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"}),(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"})]})]})]}),(0,x.jsxs)("li",{className:"form-check expert-form-check",children:[(0,x.jsx)("input",{type:"radio",className:"form-check-input listboxes",id:"jobSuccess90",name:"jobSuccess",checked:"Sport"===Ee,onChange:function(){return ze("Sport")}}),(0,x.jsxs)("label",{className:"expert-form-check-label expert-label-with-svg",htmlFor:"anyJobSuccess",children:["Sport",(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#FF5733",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:"25",width:"25",children:[(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"}),(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"})]})]})]}),(0,x.jsxs)("li",{className:"form-check expert-form-check",children:[(0,x.jsx)("input",{type:"radio",className:"form-check-input listboxes",id:"jobSuccess90",name:"jobSuccess",checked:"Food"===Ee,onChange:function(){return ze("Food")}}),(0,x.jsxs)("label",{className:"expert-form-check-label expert-label-with-svg",htmlFor:"anyJobSuccess",children:["Food",(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#FF5733",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:"25",width:"25",children:[(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"}),(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"})]})]})]}),(0,x.jsxs)("li",{className:"form-check expert-form-check",children:[(0,x.jsx)("input",{type:"radio",className:"form-check-input listboxes",id:"jobSuccess90",checked:"Health"===Ee,name:"jobSuccess",onChange:function(){return ze("Health")}}),(0,x.jsxs)("label",{className:"expert-form-check-label expert-label-with-svg",htmlFor:"anyJobSuccess",children:["Health",(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#FF5733",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:"25",width:"25",children:[(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"}),(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"})]})]})]}),(0,x.jsxs)("li",{className:"form-check expert-form-check",children:[(0,x.jsx)("input",{type:"radio",className:"form-check-input listboxes",id:"jobSuccess90",checked:"Work"===Ee,name:"jobSuccess",onChange:function(){return ze("Work")}}),(0,x.jsxs)("label",{className:"expert-form-check-label expert-label-with-svg",htmlFor:"anyJobSuccess",children:["Work",(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#FF5733",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:"25",width:"25",children:[(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"}),(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"})]})]})]}),(0,x.jsxs)("li",{className:"form-check expert-form-check",children:[(0,x.jsx)("input",{type:"radio",className:"form-check-input listboxes",checked:"Hobbies"===Ee,id:"jobSuccess90",name:"jobSuccess",onChange:function(){return ze("Hobbies")}}),(0,x.jsxs)("label",{className:"expert-form-check-label expert-label-with-svg",htmlFor:"anyJobSuccess",children:["Hobbies",(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#FF5733",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:"25",width:"25",children:[(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"}),(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"})]})]})]})]})]})})]})})}),(0,x.jsxs)("div",{className:"card-body card-profile",children:[(0,x.jsx)("h4",{children:"File Gallery"}),(0,x.jsxs)("div",{className:"uploadcontainer",children:[(0,x.jsx)("input",{className:"uploadfile",type:"file",onChange:function(e){return Oe(e.target.files)},multiple:!0}),(0,x.jsxs)("div",{className:"documentupload",children:[(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#7EA0D6",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"75",width:"75",children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"choosefile mt-2",children:"Choose file"})," ","or"," ",(0,x.jsx)("div",{className:"draghere",children:"drag here"})]})]})]})]}),(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"gallery",children:(0,x.jsx)("div",{className:"gallery-container",children:De.map((function(e,t){return(0,x.jsxs)("div",{className:"gallery-item",children:[(0,x.jsx)("input",{type:"text",placeholder:"Enter title",className:"form-control form-control-lg borderradius",value:e.title,onChange:function(e){return function(e,t){var r=(0,s.Z)(De);r[t].title=e,He(r)}(e.target.value,t)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),Ge(t))}}),e.isImage?(0,x.jsx)("div",{className:"image-container",children:(0,x.jsx)("img",{src:e.url,alt:"Gallery ".concat(t+1),className:"gallery-image"})}):(0,x.jsxs)("div",{className:"file-container",children:[(0,x.jsx)("div",{className:"file-icon",children:Ke(e.url)}),(0,x.jsx)("div",{className:"file-name",children:e.title})," "]}),(0,x.jsx)("textarea",{type:"text",placeholder:"Enter description",className:"form-control form-control-lg borderradius",value:e.description,onChange:function(e){return function(e,t){var r=(0,s.Z)(De);r[t].description=e,He(r)}(e.target.value,t)}}),(0,x.jsxs)("div",{className:"d-flex",children:[(0,x.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),Ge(t)},children:"Upload Description"}),(0,x.jsx)("button",{className:"btn btn-secondary",onClick:function(e){e.preventDefault(),Te(t)},children:"\u274c Remove"})]})]},t)}))})})}),(0,x.jsxs)("div",{className:"col-xl-12 col-12",children:[(0,x.jsxs)("div",{className:"pt-5 rounded",children:[(0,x.jsx)("div",{className:"card-body card-profile",children:(0,x.jsxs)("div",{className:"row g-3",children:[(0,x.jsx)("h4",{className:"mb-4 mt-0",children:"Address"}),(0,x.jsxs)("div",{className:"col-md-6",children:[(0,x.jsx)("label",{className:"form-label",children:"Address"}),(0,x.jsx)("input",{id:"inputAddress",type:"text",className:"form-control form-control-lg",placeholder:"Enter your home address",value:_,onChange:function(e){return T(e.target.value)}})]}),(0,x.jsxs)("div",{className:"col-md-6",children:[(0,x.jsx)("label",{className:"form-label",children:"City"}),(0,x.jsx)("input",{id:"inputCity",type:"text",className:"form-control form-control-lg",placeholder:"Enter City",value:Q,onChange:function(e){return q(e.target.value)}})]}),(0,x.jsxs)("div",{className:"col-md-6",children:[(0,x.jsx)("label",{className:"form-label",children:"County"}),(0,x.jsx)("input",{id:"inputCounty",type:"text",className:"form-control form-control-lg",placeholder:"County",value:X,onChange:function(e){return ee(e.target.value)}})]}),(0,x.jsxs)("div",{className:"col-md-6",children:[(0,x.jsx)("label",{className:"form-label",children:"Postcode"}),(0,x.jsx)("input",{id:"inputPostcode",type:"text",className:"form-control form-control-lg",placeholder:"Postcode",value:se,onChange:function(e){return ne(e.target.value)}})]})]})}),(0,x.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,x.jsxs)("div",{className:"row g-3",children:[(0,x.jsx)("h5",{className:"mb-2",children:"Choose 5 Keywords"}),(0,x.jsx)("p",{children:"we recommend choosing keywords that you think will get you highest in the search results"}),(0,x.jsx)("div",{className:"me-3",children:(0,x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:window.innerWidth<=600?"Add keywords here":"Type a keyword and press Space or Enter to add",value:be,onChange:function(e){return Ne(e.target.value)},onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||""===be.trim()||(e.preventDefault(),function(){if(""!==be.trim()&&Ve.length<6){var e=[].concat((0,s.Z)(Ve),[be.trim()]);Je(e),Ne("")}}())},disabled:Ve.length+Ze.length>=5})}),(0,x.jsxs)("div",{className:"keywords-list",children:[Ve.map((function(e,t){return(0,x.jsxs)("div",{onClick:function(){return $e(t)},className:"keyword-container btn mx-1  d-inline-flex align-items-center  mb-2",children:[e,(0,x.jsx)("svg",{onClick:function(){return $e(t)},xmlns:"http://www.w3.org/2000/svg",cursor:"pointer",color:"#000000",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",height:"25",width:"25",style:{marginLeft:"auto"},children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]},t)})),Ze.map((function(e,t){return(0,x.jsxs)("div",{onClick:function(){return Xe(t)},className:"keyword-container btn mx-1  d-inline-flex align-items-center  mb-2",children:[e,(0,x.jsx)("svg",{onClick:function(){return Xe(t)},xmlns:"http://www.w3.org/2000/svg",cursor:"pointer",color:"#000000",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",height:"25",width:"25",style:{marginLeft:"auto"},children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]},t)})),Ve.length+Ze.length>=5&&(0,x.jsx)("p",{className:"message",children:"Keyword limit reached. You cannot add more keywords."})]})]})})]}),(0,x.jsxs)("div",{className:"mt-3",children:[(0,x.jsx)("button",{type:"button",className:"btn btn-primary  mb-4",onClick:Ye,children:"Update profile"}),(0,x.jsxs)("div",{children:["error"===P.type&&(0,x.jsx)("p",{className:"fw-light",style:{color:"red"},children:P.text}),"success"===P.type&&(0,x.jsx)("p",{className:"fw-light",style:{color:"green"},children:P.text})]})]})]})]})})]})})}),Ae&&(0,x.jsx)("div",{className:"modal-overlay",children:(0,x.jsx)("div",{className:"modalcrop ",children:(0,x.jsx)(p.Z,{setPhotoURL:S,setImageLoadError:D,closeModal:function(){Fe(!1),tt()},photoURL:C,handleImageUpload:Qe,handleImageError:function(){D(!0)},user:r,collectionName:"expertApplications"})})})]})}},7386:function(e,t,r){var s=r(4165),n=r(5861),o=r(9439),a=r(2791),c=r(28),l=(r(4333),r(276)),i=r(2481),d=r(673),u=r(184);t.Z=function(e){var t=e.closeModal,r=e.photoURL,h=e.handleImageUpload,p=e.setPhotoURL,m=e.user,x=e.collectionName,f=(0,a.useState)(r),v=(0,o.Z)(f,2),g=v[0],j=v[1],w=(0,a.useState)(null),k=(0,o.Z)(w,2),b=(k[0],k[1]),N=(0,a.useState)(!1),y=(0,o.Z)(N,2),L=(y[0],y[1]),Z=(0,a.useState)(null),C=(0,o.Z)(Z,2),S=C[0],M=C[1],E=(0,a.useState)(null),z=(0,o.Z)(E,2),U=z[0],R=z[1],A=(0,a.useRef)(null),F=(0,a.useRef)(null),B=(0,a.useState)(!1),P=(0,o.Z)(B,2),V=P[0],J=P[1];(0,a.useEffect)((function(){return document.body.classList.add("modal-open"),function(){document.body.classList.remove("modal-open")}}),[]);var I=function(e){var t=e.target.files[0];if(b(t),t){M(t.name);var r=new FileReader;r.onload=function(e){j(e.target.result)},r.readAsDataURL(t)}},W=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(){var t,r,o,a,c,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=null===(t=A.current)||void 0===t?void 0:t.getCanvas())){e.next=6;break}return e.next=4,new Promise((function(e){return r.toBlob(e,"image/jpeg")}));case 4:(o=e.sent)&&(a=(0,l.iH)(d.tO,"profileImages/".concat(S)),c={contentType:"image/jpeg"},(u=(0,l.B0)(a,o,c)).on("state_changed",(function(e){}),(function(e){}),(function(){(0,l.Jt)(u.snapshot.ref).then(function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,(0,i.r7)(U,{photoURL:t});case 3:h(t),J(!0),setTimeout((function(){J(!1)}),3e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m||!m.uid){e.next=6;break}return t="".concat("","/images/arts/user.webp"),e.next=4,(0,i.r7)(U,{photoURL:t});case 4:p(t),L(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){F.current=document.createElement("input"),F.current.type="file",F.current.accept="image/*",F.current.addEventListener("change",I);var e=(0,i.JU)(d.RZ,x,m.uid);R(e);var t=(0,i.cf)(e,(function(e){var t;!function(e){j(e)}(null===(t=e.data())||void 0===t?void 0:t.photoURL)}));return function(){return t()}}),[m.uid,x]),(0,u.jsxs)("div",{className:"modalimage align-items-center",children:[(0,u.jsxs)("div",{className:"top-section",children:[(0,u.jsx)("div",{style:{marginRight:"10px"},children:"Profile image"}),(0,u.jsx)("button",{className:"btn-crop",onClick:t,children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,u.jsx)("div",{className:"centerimage",children:(0,u.jsx)("div",{className:"croppers-wizard__body",children:(0,u.jsx)("div",{className:"default-cropper croppers-wizard__cropper",children:g?(0,u.jsx)(c.fle,{ref:A,src:g,stencilComponent:c.xqB,stencilProps:{grid:!0,handlers:{eastNorth:!0,north:!1,westNorth:!0,west:!1,westSouth:!0,south:!1,eastSouth:!0,east:!1}}}):null})})}),(0,u.jsxs)("div",{className:"button-section with-divider",children:[(0,u.jsx)("button",{className:"btn-crop",onClick:function(){F.current.click()},children:(0,u.jsxs)("div",{className:"button-content",children:[(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:[(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}),(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"})]}),"New Photo"]})}),(0,u.jsx)("button",{className:"btn-crop",onClick:W,children:(0,u.jsxs)("div",{className:"button-content",children:[(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"})}),"Upload Photo"]})}),V&&(0,u.jsx)("div",{className:"upload-success-icon",children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#009E60",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}),(0,u.jsx)("button",{className:"btn-crop",onClick:D,children:(0,u.jsxs)("div",{className:"button-content",children:[(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",strokeWidth:"1.5",className:"w-6 h-6 smaller-svg",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),"Delete Photo"]})})]})]})}}}]);
//# sourceMappingURL=915.ececb646.chunk.js.map