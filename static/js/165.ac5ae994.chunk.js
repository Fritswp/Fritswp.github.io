"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[165],{6165:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(9439),s=n(2791),a=n(673),i=n(184),c=function(e){var t=e.handleButtonClick,n=(e.isActive,e.isLeftColumnVisible),c=(0,s.useState)(null),o=(0,r.Z)(c,2),l=o[0],u=o[1],d=(0,s.useState)(null),h=(0,r.Z)(d,2),p=h[0],f=h[1],m=window.innerWidth<=768;(0,s.useEffect)((function(){var e=a.I8.onAuthStateChanged((function(e){f(e||null)}));return function(){return e()}}),[]);var x=function(e){t(e),u(e)},v=function(){window.history.back()};return(0,i.jsx)("div",{className:"chat-left ".concat(n?"":"hide"),children:(0,i.jsxs)("div",{className:"chatleft-column",children:[(0,i.jsxs)("div",{className:"d-none d-md-block mb-4",children:[(0,i.jsx)("div",{className:"avatar-section",children:p&&p.photoURL&&(0,i.jsx)("img",{src:p.photoURL,alt:"Avatar",className:"w-100 h-auto rounded-circle",style:{maxWidth:"12rem"}})}),(0,i.jsx)("hr",{className:"avatar-divider"})]}),(0,i.jsx)("div",{className:"d-flex flex-column align-items-center",children:(0,i.jsxs)("div",{className:"chatbutton-container flex-wrap justify-content-center justify-content-md-start gap-2",children:[(0,i.jsxs)("div",{className:"button-container",onClick:function(){return x("Chat History")},children:[(0,i.jsx)("button",{type:"button",className:"py-3 px-3 gap-4 chat-btn",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})})}),"Chat History"===l&&(0,i.jsx)("div",{className:"activated-indicator"})]}),(0,i.jsxs)("div",{className:"button-container",onClick:function(){return x("Contacts")},children:[(0,i.jsx)("button",{type:"button",className:"py-3 px-3 gap-4 chat-btn",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"})})}),"Contacts"===l&&(0,i.jsx)("div",{className:"activated-indicator"})]}),(0,i.jsxs)("div",{className:"button-container",onClick:function(){return x("Profile")},children:[(0,i.jsx)("button",{type:"button",className:"py-3 px-3 gap-4 chat-btn",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})})}),"Profile"===l&&(0,i.jsx)("div",{className:"activated-indicator"})]}),(0,i.jsxs)("div",{className:"button-container",onClick:function(){return x("Settings")},children:[(0,i.jsx)("button",{type:"button",className:"py-3 px-3 gap-4 chat-btn",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:[(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"}),(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),"Settings"===l&&(0,i.jsx)("div",{className:"activated-indicator"})]}),m&&(0,i.jsx)("div",{className:"button-container",onClick:function(){return x("Back")},children:(0,i.jsx)("button",{type:"button",className:"py-3 px-3 gap-4 chat-btn",onClick:v,children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"})})})})]})}),!m&&(0,i.jsx)("div",{className:"logout-container ",children:(0,i.jsx)("button",{type:"button",className:"py-3 px-3 gap-4 chat-btn",onClick:v,children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"})})})})]})})},o=n(4942),l=n(1413),u=n(4165),d=n(3433),h=n(5861),p=n(2481),f=function(e){var t=e.isActive,n=e.toggleRightColumnVisibility,c=e.updateOtherUserID,f=e.otherUserUID,m=(0,s.useState)(!1),x=(0,r.Z)(m,2),v=(x[0],x[1]),g=(0,s.useState)(""),w=(0,r.Z)(g,2),j=w[0],b=w[1],k=(0,s.useState)([]),U=(0,r.Z)(k,2),y=(U[0],U[1]),Z=(0,s.useState)([]),N=(0,r.Z)(Z,2),C=N[0],L=N[1],D=(0,s.useState)({}),I=(0,r.Z)(D,2),S=I[0],M=I[1];(0,s.useEffect)((function(){if(!window.matchMedia("(max-width: 768px)").matches&&!f&&C.length>0){var e=C[0],t=(null===e||void 0===e?void 0:e.otherUserID)||null;c(t,j)}}),[C,f,j,c]);(0,s.useEffect)((function(){var e=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(t){var n,s,i,c;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,a.hJ)(a.db,"chats"),e.prev=1,e.next=4,(0,a.PL)(n);case 4:return s=e.sent,i=[],s.forEach((function(e){var n=e.id.split("_"),s=(0,r.Z)(n,2),a=s[0],c=s[1];if(a===t||c===t){var o=a===t?c:a;y((function(e){return[].concat((0,d.Z)(e),[o])})),i.push({id:e.id,data:e.data(),otherUserID:o})}})),L(i),c=(0,a.cf)(n,(function(e){e.docChanges().forEach((function(e){var n=e.doc.id,s=n.split("_"),a=(0,r.Z)(s,2),i=a[0],c=a[1],o=i===t?c:i;i!==t&&c!==t||("added"===e.type||"modified"===e.type?L((function(t){var r=t.findIndex((function(e){return e.id===n}));if(-1!==r){var s=(0,d.Z)(t);return s[r]={id:n,data:e.doc.data(),otherUserID:o},s}return[].concat((0,d.Z)(t),[{id:n,data:e.doc.data(),otherUserID:o}])})):"removed"===e.type&&L((function(e){return e.filter((function(e){return e.id!==n}))})))}))})),e.abrupt("return",(function(){c()}));case 12:e.prev=12,e.t0=e.catch(1),console.error("Error fetching chats:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),t=a.I8.onAuthStateChanged((function(t){if(t){var n=t.uid;b(n),e(n)}}));return function(){t()}}),[]);var R=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(t){var n,r,s,i,c,d,h,p,f,m;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S[t]){e.next=2;break}return e.abrupt("return",S[t]);case 2:return n=a.db,r={},e.prev=4,s=(0,a.hJ)(n,"expertApplications"),i=(0,a.JU)(s,t),e.next=9,(0,a.QT)(i);case 9:if(!(c=e.sent).exists()){e.next=15;break}d=c.data(),r={photoURL:d.photoURL||"",displayName:d.displayName||"Unknown"},e.next=21;break;case 15:return h=(0,a.hJ)(n,"userProfiles"),p=(0,a.JU)(h,t),e.next=19,(0,a.QT)(p);case 19:(f=e.sent).exists()&&(m=f.data(),r={photoURL:m.photoURL||"",displayName:m.displayName||"Unknown"});case 21:M((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,o.Z)({},t,r))})),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(4),console.error("Error getting user profile:",e.t0);case 27:return e.abrupt("return",r);case 28:case"end":return e.stop()}}),e,null,[[4,24]])})));return function(t){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){var e=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(C.map(function(){var e=(0,h.Z)((0,u.Z)().mark((function e(t){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t.otherUserID);case 2:return n=e.sent,e.abrupt("return",(0,l.Z)((0,l.Z)({},t),{},{userData:n}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:t=e.sent,L(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();C.length>0&&e()}),[C]);var E=function(e,t){if(e.data&&e.data.messages){var n=e.otherUserID,r=Object.values(e.data.messages).filter((function(e){return e.sender===n}));if(r.length>0){var s=r.reduce((function(e,t){return t.timestamp.toMillis()>e.timestamp.toMillis()?t:e})),a=s.timestamp.toDate().toLocaleTimeString([],{hour:"numeric",minute:"numeric"}),i=s.timestamp.toDate().toLocaleDateString([],{year:"numeric",month:"short",day:"numeric"});return"".concat(a,", ").concat(i)}}return""},A=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(t,n){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.prev=1,e.next=4,(0,p.oe)((0,a.JU)(a.db,"chats",t));case 4:c(null,j),L((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error deleting chat:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}();return(0,i.jsx)("div",{className:t?"visible":"hidden",children:(0,i.jsx)("div",{className:"p-2 flex flex-col gap-2 h-full",children:(0,i.jsxs)("div",{className:" d-flex flex-column gap-2",children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("div",{children:(0,i.jsx)("h4",{children:"Chats"})}),(0,i.jsxs)("div",{className:"d-flex ",children:[(0,i.jsx)("button",{type:"button",className:"py-3 px-3 gap-4 chat-btn",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})})}),(0,i.jsx)("button",{type:"button",className:"py-3 px-3 gap-4 chat-btn",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"})})})]})]}),(0,i.jsx)("div",{className:"relative flex flex-col",children:(0,i.jsx)("div",{})}),C.map((function(e,t){var r,s;return(0,i.jsx)("div",{className:"relative",children:(0,i.jsxs)("button",{className:"chat-btn d-flex justify-content-start align-items-start w-100 gap-4 align-items-center",onClick:function(){return t=e.otherUserID,c(t,j),v(!0),void n();var t},children:[(0,i.jsx)("img",{src:(null===(r=e.userData)||void 0===r?void 0:r.photoURL)||"".concat("","/images/arts/user.webp"),alt:"Avatar",className:"small-avatar rounded-circle"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"font-weight-bold mb-0 text-start",children:null===(s=e.userData)||void 0===s?void 0:s.displayName}),(0,i.jsx)("p",{className:"text-sm text-muted text-start",children:E(e)})]}),(0,i.jsx)("div",{className:"delete-svg",children:(0,i.jsx)("button",{className:"delete-button",onClick:function(t){return A(e.id,t)},children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})})})})]})},t)}))]})})})},m=n(1087),x=n(2624),v=function(e){var t=e.toggleRightColumnVisibility,n=(0,s.useState)(!1),c=(0,r.Z)(n,2),o=(c[0],c[1],(0,s.useState)("")),f=(0,r.Z)(o,2),v=f[0],g=f[1],w=(0,s.useState)([]),j=(0,r.Z)(w,2),b=j[0],k=j[1];(0,s.useEffect)((function(){if(""!==v.trim()){var e=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(t){var n,r,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,p.hJ)(a.RZ,t),e.next=3,(0,p.PL)(n);case 3:return r=e.sent,s=[],r.forEach((function(e){var t=(0,l.Z)((0,l.Z)({},e.data()),{},{otherUserUID:e.id});s.push(t)})),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=e("expertApplications"),n=e("userProfiles");Promise.all([t,n]).then((function(e){var t=(0,r.Z)(e,2),n=t[0],s=t[1],a=[].concat((0,d.Z)(n),(0,d.Z)(s)),i=new x.Z(a,{keys:["displayName","occupation","keywords"],includeScore:!0,includeMatches:!0,threshold:.4}).search(v).map((function(e){return e.item}));k(i)})).catch((function(e){console.error("Error fetching search results:",e)}))}else k([])}),[v]);var U=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(n){var r,s,i,c,o,l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.prev=1,r=(0,p.hJ)(a.RZ,"expertApplications"),e.next=5,(0,p.QT)((0,p.JU)(r,n.otherUserUID));case 5:if(s=e.sent,console.log("Expert Doc Snap:",s.data()),!s.exists()){e.next=13;break}i=s.data().customURL,console.log("Custom URL:",i),window.location.href="/expert/".concat(i),e.next=19;break;case 13:return c=(0,p.hJ)(a.RZ,"userProfiles"),e.next=16,(0,p.QT)((0,p.JU)(c,n.otherUserUID));case 16:o=e.sent,console.log("User Doc Snap:",o.data()),o.exists()?(l=o.data().customURL,console.log("Custom URL:",l),window.location.href="/user/".concat(l)):console.log("User profile not found for the specified UID.");case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),console.error("Error handling button click:",e.t0.message);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}();return(0,i.jsxs)("div",{className:"d-flex flex-column gap-2 mt-3",children:[(0,i.jsx)("div",{className:"input-container",children:(0,i.jsx)("input",{type:"text",className:"chat-search-input",placeholder:"Search for Experts",value:v,onChange:function(e){g(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t()}})}),b.map((function(e,t){return(0,i.jsx)(m.rU,{children:(0,i.jsx)("button",{className:"py-2 px-2 pe-5 gap-4 chat-btn",onClick:function(){return U(e)},children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsx)("div",{className:"col-auto",children:(0,i.jsx)("div",{className:"small-avatar",children:(0,i.jsx)("img",{src:e.photoURL||"avatar.png",alt:"Avatar",className:"w-100 h-auto rounded-circle",style:{maxWidth:"12rem"}})})}),(0,i.jsx)("div",{className:"col",children:(0,i.jsxs)("div",{className:"text-end",children:[(0,i.jsx)("p",{className:"font-weight-bold mb-0",children:e.displayName}),(0,i.jsx)("p",{className:"text-sm text-muted",children:e.occupation})]})})]})},t)})}))]})},g=function(){var e=(0,s.useState)(null),t=(0,r.Z)(e,2),n=t[0],c=t[1],o=(0,s.useState)(""),l=(0,r.Z)(o,2),d=l[0],f=l[1],m=(0,s.useState)(""),x=(0,r.Z)(m,2),v=x[0],g=x[1];return(0,s.useEffect)((function(){var e=a.I8.onAuthStateChanged(function(){var e=(0,h.Z)((0,u.Z)().mark((function e(t){var n,r,s,i,o,l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=19;break}return c(t),n=(0,p.JU)(a.RZ,"expertApplications",t.uid),e.next=5,(0,p.QT)(n);case 5:if(!(r=e.sent).exists()){e.next=12;break}s=r.data(),f(s.description||""),g(s.city||""),e.next=17;break;case 12:return i=(0,p.JU)(a.RZ,"userProfiles",t.uid),e.next=15,(0,p.QT)(i);case 15:(o=e.sent).exists()?(l=o.data(),f(l.description||""),g(l.city||"")):(f("Description not found"),g("City not found"));case 17:e.next=22;break;case 19:c(null),f(""),g("");case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return e()}}),[]),(0,i.jsxs)("div",{className:"d-flex flex-column gap-2 mt-3",children:[(0,i.jsx)("div",{className:"justify-content-center align-items-center px-8",children:(0,i.jsxs)("div",{className:"text-center",children:[n&&n.photoURL&&(0,i.jsx)("img",{className:"medium-avatar mx-auto user-avatar mb-2",src:n.photoURL,alt:"User Avatar"}),n&&n.displayName&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h4",{children:n.displayName}),(0,i.jsx)("p",{className:"text-muted",children:d})," ",(0,i.jsx)("hr",{className:"avatar-divider"})]})]})}),(0,i.jsxs)("button",{className:"d-flex chat-btn chat-btn-history align-items-center px-4 p-2  w-100  gap-4",style:{transform:"none"},children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",style:{paddingRight:"5px"},fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",height:"30",width:"30",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})}),"My Pofile"]}),(0,i.jsxs)("button",{className:"d-flex chat-btn chat-btn-history align-items-center px-4 p-2  gap-4   w-100 ",style:{transform:"none"},children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",style:{paddingRight:"5px"},fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",height:"30",width:"30",children:[(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),v]})]})},w=function(e){var t=e.selectedMenu,n=e.toggleRightColumnVisibility,a=e.updateOtherUserID,c=e.isMiddleColumnVisible,o=e.setActiveButton,l=e.otherUserUID,u=e.currentUserUID,d=(0,s.useState)(t),h=(0,r.Z)(d,2),p=h[0],m=h[1],x=(0,s.useState)(!0),w=(0,r.Z)(x,2),j=w[0],b=w[1],k=(0,s.useState)(!0),U=(0,r.Z)(k,2),y=U[0],Z=U[1];(0,s.useEffect)((function(){b(!1);var e=setTimeout((function(){m(t),b(!0),Z("Chat History"===t)}),300);return function(){return clearTimeout(e)}}),[t]);return(0,i.jsxs)("div",{className:"chat-middle pt-4 ".concat(c?"":"hide"),children:[(0,i.jsx)("div",{className:"chat-component ".concat(j&&y?"visible":"hidden"),children:"Chat History"===p&&(0,i.jsx)(f,{otherUserUID:l,updateOtherUserID:a,toggleRightColumnVisibility:n,currentUserUID:u})}),(0,i.jsx)("div",{className:"contacts-component ".concat(j&&!y?"visible":"hidden"),children:"Contacts"===p&&(0,i.jsx)(v,{switchToChatHistory:function(e){m("Chat History"),Z(!0),e("Chat History")},setActiveButton:o,toggleRightColumnVisibility:n})}),(0,i.jsx)("div",{className:"profile-component ".concat(j&&"Profile"===p?"visible":"hidden"),children:"Profile"===p&&(0,i.jsx)(g,{})})]})},j=n(5372),b=n(2383),k=function(e){var t=e.selectedSession,n=e.currentUserUID,c=e.otherUserUID,o=e.closeShareChat,l=(0,s.useState)([]),d=(0,r.Z)(l,2),f=d[0],m=d[1],x=(0,s.useState)(!0),v=(0,r.Z)(x,2),g=v[0],w=v[1],k=(0,s.useState)(null),U=(0,r.Z)(k,2),y=U[0],Z=U[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(){var t,r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,p.JU)((0,p.hJ)(a.RZ,"expertApplications"),n),e.next=4,(0,p.QT)(t);case 4:r=e.sent,Z(r.exists()?c:n),console.log("Determining selectedMessageUID:",{otherUserUID:c,currentUserUID:n,existsInExpertApplications:r.exists(),determinedMessageUID:r.exists()?c:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error determining selectedMessageUID:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[n,c]),(0,s.useEffect)((function(){var e=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(){var n,r,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t||!y){e.next=11;break}return n=(0,p.hJ)(a.RZ,"users",y,"discussions",t,"messages"),console.log("Path for messagesCollectionRef:",n.path),e.next=6,(0,p.PL)((0,p.IO)(n,(0,p.Xo)("createTime")));case 6:r=e.sent,s=r.docs.map((function(e){var t=e.data();return{prompt:t.prompt,response:t.response}})),m(s),w(!1),console.log("Fetched messages for discussionId:",t,s);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Error fetching shared chat messages:",e.t0),w(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[t,y]),y?(0,i.jsx)("div",{className:"blurred-background",children:(0,i.jsxs)("div",{className:"white-box-chathistory",children:[(0,i.jsx)("div",{className:"go-back-svg go-back-svg-padding",children:(0,i.jsx)("button",{onClick:o,children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,color:"black",stroke:"currentColor",className:"w-6 h-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})}),(0,i.jsx)("h2",{children:"Share link to Chat"}),(0,i.jsx)("div",{className:"divider "}),(0,i.jsx)("p",{children:"Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat."}),(0,i.jsx)("div",{className:"shared-chat scroll-cat",children:g?(0,i.jsx)(b.Z,{}):f.map((function(e,t){return(0,i.jsxs)("div",{className:"chat-message",children:[(0,i.jsx)("strong",{children:(0,i.jsx)(j.U,{children:e.prompt})}),(0,i.jsx)(j.U,{children:e.response}),(0,i.jsx)("div",{className:"divider "})]},t)}))})]})}):null},U=function(e){var t=e.toggleColumns,n=e.otherUserUID,c=e.currentUserUID,o=(0,s.useState)({isMobile:!1,photoURL:null,displayName:"",occupation:"",isShareChatOpen:!1,selectedSession:null,selectedMessageUID:null}),d=(0,r.Z)(o,2),f=d[0],m=d[1];(0,s.useEffect)((function(){var e=window.matchMedia("(max-width: 768px)");m((function(t){return(0,l.Z)((0,l.Z)({},t),{},{isMobile:e.matches})}));var t=function(){m((function(t){return(0,l.Z)((0,l.Z)({},t),{},{isMobile:e.matches})}))};return e.addListener(t),function(){e.removeListener(t)}}),[]);var x=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(t){var r,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.QT)((0,p.JU)(t,n));case 3:(r=e.sent).exists()&&(s=r.data())&&m((function(e){var t,n;return(0,l.Z)((0,l.Z)({},e),{},{photoURL:s.photoURL,displayName:null!==(t=s.displayName)&&void 0!==t?t:"",occupation:null!==(n=s.occupation)&&void 0!==n?n:""})})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching user data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){var e=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(){var t,r,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=8;break}return t=a.db,r=(0,p.hJ)(t,"expertApplications"),e.next=6,(0,p.QT)((0,p.JU)(r,n));case 6:e.sent.exists()?x(r):(s=(0,p.hJ)(t,"userProfiles"),x(s));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching user data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,s.useEffect)((function(){var e=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(){var t,r,s,i,o,d,h,f;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n||!c){e.next=16;break}return t=a.db,r=(0,p.hJ)(t,"sharedConversations"),i=(0,p.hJ)(t,"expertApplications"),e.next=7,(0,p.QT)((0,p.JU)(i,c));case 7:return o=e.sent,s=o.exists()?"".concat(n,"_").concat(c):"".concat(c,"_").concat(n),d=(0,p.JU)(r,s),e.next=12,(0,p.QT)(d);case 12:(h=e.sent).exists()?(f=h.data().selectedSession,m((function(e){return(0,l.Z)((0,l.Z)({},e),{},{selectedSession:f})}))):console.log("Conversation document not found for the specified UIDs."),e.next=18;break;case 16:console.log("Invalid user UIDs."),m((function(e){return(0,l.Z)((0,l.Z)({},e),{},{selectedMessageUID:null,selectedSession:null})}));case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.error("Error fetching and updating session:",e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();e()}),[n,c]);var v=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(){var t,r,s,i,c,o,l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n){e.next=3;break}throw new Error("otherUserUID is undefined or null");case 3:return t=a.db,r=(0,p.hJ)(t,"expertApplications"),e.next=7,(0,p.QT)((0,p.JU)(r,n));case 7:if(!(s=e.sent).exists()){e.next=13;break}i=s.data().customURL,window.location.href="https://www.tioassist.io/expert/".concat(i),e.next=18;break;case 13:return c=(0,p.hJ)(t,"userProfiles"),e.next=16,(0,p.QT)((0,p.JU)(c,n));case 16:(o=e.sent).exists()?(l=o.data().customURL,window.location.href="https://www.tioassist.io/user/".concat(l)):console.log("User profile not found for the specified UID.");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.error("Error handling image click:",e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsxs)("div",{className:"chat-header p-1",children:[f.isMobile&&(0,i.jsx)("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",style:{marginRight:"8px"},children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"})}),(0,i.jsx)("div",{className:"small-avatar pointer-cursor",onClick:v,children:(0,i.jsx)("img",{className:"small-avatar mx-auto user-avatar mb-2",src:f.photoURL,alt:"Custom 404 Image"})}),(0,i.jsx)("div",{className:"d-flex flex-column justify-content-start offset-1 pt-2",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"font-weight-bold mb-0",children:f.displayName}),(0,i.jsx)("p",{className:"text-sm text-muted",children:f.occupation})]})}),f.photoURL?(0,i.jsx)("svg",{className:"custom-svg-chatheader",xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",onClick:function(){f.photoURL&&m((function(e){return(0,l.Z)((0,l.Z)({},e),{},{isShareChatOpen:!0})}))},children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"})}):null,f.isShareChatOpen&&(0,i.jsx)(k,{currentUserUID:c,selectedSession:f.selectedSession,otherUserUID:n,closeShareChat:function(){m((function(e){return(0,l.Z)((0,l.Z)({},e),{},{isShareChatOpen:!1})}))}})]})},y=n(276),Z=(0,y.cF)(),N=(0,a.hJ)(a.db,"chats"),C=function(e,t){return e<t?"".concat(e,"_").concat(t):"".concat(t,"_").concat(e)},L=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(t,n,r,s){var i,c,d,h,p;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=C(t,n),c=(0,a.JU)(N,i),!s){e.next=15;break}return d=(0,y.iH)(Z,"chat_files/".concat(t,"/").concat(n,"/").concat(Date.now(),"_").concat(s.name)),e.next=7,(0,y.KV)(d,s);case 7:return e.next=9,(0,y.Jt)(d);case 9:return h=e.sent,p={text:r,file:{name:s.name,type:s.type,url:h},sender:t,timestamp:(0,a.Bt)()},e.next=13,(0,a.pl)(c,{messages:(0,o.Z)({},Date.now(),p)},{merge:!0});case 13:e.next=17;break;case 15:return e.next=17,(0,a.pl)(c,{messages:(0,o.Z)({},Date.now(),(0,l.Z)({sender:t,timestamp:(0,a.Bt)()},r&&{text:r}))},{merge:!0});case 17:return e.abrupt("return",!0);case 20:return e.prev=20,e.t0=e.catch(0),console.error("Error sending message:",e.t0),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t,n,r,s){return e.apply(this,arguments)}}(),D=function(e){var t=e.isRightColumnVisible,n=e.toggleColumns,c=e.otherUserUID,o=(0,s.useState)([]),l=(0,r.Z)(o,2),d=l[0],p=l[1],f=(0,s.useRef)(null),m=(0,s.useRef)(null),x=(0,s.useState)(""),v=(0,r.Z)(x,2),g=v[0],w=v[1],j=(0,s.useState)(null),k=(0,r.Z)(j,2),y=k[0],Z=k[1],D=(0,s.useState)(!1),I=(0,r.Z)(D,2),S=I[0],M=I[1],R=(0,s.useState)("28px"),E=(0,r.Z)(R,2),A=E[0],J=E[1],B=(0,s.useState)(!0),V=(0,r.Z)(B,2),W=V[0],T=V[1],P=(0,s.useState)(null),H=(0,r.Z)(P,2),z=H[0],O=H[1],Q=(0,s.useRef)(null),_=(0,s.useState)(null),F=(0,r.Z)(_,2),K=(F[0],F[1]),X=(0,s.useState)(!0),q=(0,r.Z)(X,2),G=q[0],Y=q[1];(0,s.useEffect)((function(){T(!0);var e=(0,a.Aj)(a.I8,(function(e){Z(e?e.uid:null)}));return function(){return e()}}),[]),(0,s.useEffect)((function(){M(y===c)}),[y,c]),(0,s.useEffect)((function(){y&&c&&function(e,t,n){try{var r=C(e,t),s=(0,a.JU)(N,r);(0,a.cf)(s,(function(e){try{var t,r=(e.exists()?Object.values((null===(t=e.data())||void 0===t?void 0:t.messages)||{}):[]).sort((function(e,t){return t.timestamp-e.timestamp})).reverse();n(r)}catch(s){console.error("Error getting messages:",s),n([])}}))}catch(i){console.error("Error getting messages:",i),n([])}}(y,c,(function(e){var t=e.slice(0).reverse();p(t),T(!1)}))}),[y,c]);var $=window.innerWidth<=767;(0,s.useEffect)((function(){if(z&&z.type&&z.type.startsWith("image/")){var e=new FileReader;e.onload=function(e){K(e.target.result)},e.readAsDataURL(z)}else K(null)}),[z]);var ee=function(){var e=(0,h.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!S){e.next=6;break}return console.error("Cannot send messages to yourself."),console.log("currentUserUID:",y),console.log("otherUserUID:",c),e.abrupt("return");case 6:if(""!==g.trim()||z){e.next=8;break}return e.abrupt("return");case 8:if(!y||!c){e.next=15;break}return e.next=11,L(y,c,g,z);case 11:e.sent&&(w(""),O(null),K(null),$||m.current.focus()),e.next=16;break;case 15:console.error("currentUserUID or otherUserUID is undefined");case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error("Error sending message:",e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){f.current&&(f.current.scrollTop=f.current.scrollHeight)}),[d]);var te=function(){var e=m.current;if(e){var t=Math.min(e.scrollHeight,200);J("".concat(t,"px"))}};(0,s.useEffect)((function(){te()}),[]);(0,s.useEffect)((function(){te()}),[]),(0,s.useEffect)((function(){""===g&&J("28px")}),[g]);var ne=function(e){if(e){var t=e.toDate(),n=t.getHours().toString().padStart(2,"0"),r=t.getMinutes().toString().padStart(2,"0");return"".concat(n,":").concat(r)}return""};return(0,s.useEffect)((function(){t&&G&&Y(!1)}),[t,G]),(0,i.jsx)("div",{className:"chat-right ".concat(t&&!G?"":"hide"),children:W?(0,i.jsx)("div",{className:"loading-container",children:(0,i.jsx)(b.Z,{})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U,{toggleColumns:n,otherUserUID:c,currentUserUID:y}),(0,i.jsxs)("div",{className:"chat-column",children:[(0,i.jsx)("div",{className:"chat-box",ref:f,children:Array.isArray(d)&&d.length>0?d.map((function(e,t){return d.map((function(e,t){return(0,i.jsxs)("div",{className:"chat-bubble ".concat(e.file&&e.file.type&&e.file.type.startsWith("image/")?"with-image":""," ").concat(e.sender===y?"user-sent":""),children:[(0,i.jsxs)("div",{className:"message",children:[e.file&&e.file.type&&e.file.type.startsWith("image/")?(0,i.jsx)("img",{src:e.file.url,alt:"Image",className:"rounded-image"}):e.file&&(0,i.jsx)("a",{href:e.file.url,target:"_blank",rel:"noopener noreferrer",children:"Download File"}),e.text&&(0,i.jsx)("p",{children:e.text})]}),(0,i.jsx)("div",{className:"timestamp small-timestamp ".concat(e.sender===y?"user-sent-timestamp":"other-sent-timestamp"),children:ne(e.timestamp)})]},t)}))})):(0,i.jsx)("div",{children:"No messages yet."})}),(0,i.jsxs)("div",{className:"chatui-container",children:[(0,i.jsx)("input",{type:"file",onChange:function(e){return function(e){var t=e.target.files[0];if(t&&(O(t),t.type&&t.type.startsWith("image/"))){var n=new FileReader;n.onload=function(e){K(e.target.result)},n.readAsDataURL(t)}}(e)},style:{display:"none"},ref:Q}),(0,i.jsx)("button",{className:"userui-left-button",onClick:function(){return Q.current.click()},children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"})})}),(0,i.jsx)("button",{"aria-label":"Send Message",onClick:ee,className:" userui-right-button ",children:(0,i.jsx)("i",{className:"fas fa-paper-plane"})}),(0,i.jsx)("div",{id:"messageInputContainer",children:z&&(0,i.jsx)("div",{className:"image-preview-container",children:(0,i.jsx)("img",{src:URL.createObjectURL(new Blob([z],{type:z.type})),alt:"Image Preview",style:{maxWidth:"70%",height:"auto"}})})}),(0,i.jsx)("textarea",{type:"text",placeholder:"Type a message...",ref:m,style:{height:A},value:g,onChange:function(e){w(e.target.value),te()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),ee())},className:"message-input scroll-col",autoComplete:"off",inputMode:"text"})]})]})]})})},I=n(7689),S=function(){var e=(0,s.useState)(!1),t=(0,r.Z)(e,2),n=t[0],a=t[1],o=(0,s.useState)(""),l=(0,r.Z)(o,2),u=l[0],d=l[1],h=(0,s.useState)(!0),p=(0,r.Z)(h,2),m=p[0],x=p[1],j=(0,s.useState)(!0),b=(0,r.Z)(j,2),k=b[0],U=b[1],y=(0,s.useState)(!0),Z=(0,r.Z)(y,2),N=Z[0],C=Z[1],L=(0,s.useState)(null),S=(0,r.Z)(L,2),M=S[0],R=S[1],E=(0,I.TH)().state,A=E||{},J=A.currentUserUID,B=A.otherUserUID,V=(0,s.useState)(B||null),W=(0,r.Z)(V,2),T=W[0],P=W[1];(0,s.useEffect)((function(){E&&(P(E.otherUserUID||null),console.log("Other User ID:",E.otherUserUID))}),[E]),(0,s.useEffect)((function(){d("Chat History");var e=window.matchMedia("(max-width: 768px)").matches;x(!e)}),[]);var H=function(){x((function(e){return!e})),U(!1),C(!1)};(0,s.useEffect)((function(){window.matchMedia("(max-width: 768px)").matches&&T&&(C(!1),U(!1),x(!0))}),[T]);return(0,s.useEffect)((function(){if(window.matchMedia("(max-width: 768px)").matches)return document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}}),[]),(0,i.jsxs)("div",{className:"chatcontainer",children:[(0,i.jsx)(c,{handleButtonClick:function(e){a(!n),d(e),C(!0),R(e)},isActive:n,toggleRightColumnVisibility:H,isLeftColumnVisible:N,activeButton:M,setActiveButton:R,otherUserUID:T,currentUserUID:J}),(0,i.jsxs)(w,{isActive:n,selectedMenu:u,toggleRightColumnVisibility:H,isMiddleColumnVisible:k,activeButton:M,setActiveButton:R,currentUserUID:J,updateOtherUserID:function(e,t){P(e),console.log("Current User ID:",t)},otherUserUID:T,children:["Chat History"===u&&(0,i.jsx)(f,{isActive:n,selectedMenu:u}),"Contacts"===u&&(0,i.jsx)(v,{isActive:n,selectedMenu:u}),"Profile"===u&&(0,i.jsx)(g,{isActive:n,selectedMenu:u})]}),T&&(0,i.jsx)(D,{isRightColumnVisible:m,toggleColumns:function(){x((function(e){return!e})),U(!0),C(!0)},otherUserUID:T})]})}}}]);
//# sourceMappingURL=165.ac5ae994.chunk.js.map