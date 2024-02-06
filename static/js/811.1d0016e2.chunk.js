"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[811],{8811:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var s=n(3433),r=n(4165),o=n(5861),i=n(9439),a=n(673),c=n(2481),l=n(5372),u=n(2383),d=n(2791),h=n(184),m=function(e){var t=e.selectedSession,n=e.closeShareChat,s=e.resetChat,m=e.closeChatHistoryOnMobile,p=(0,d.useState)([]),x=(0,i.Z)(p,2),v=x[0],f=x[1],w=(0,d.useState)(!0),g=(0,i.Z)(w,2),j=g[0],k=g[1],b=(0,d.useRef)(null);(0,d.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n,s,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=10;break}return n=(0,c.hJ)(a.RZ,"users",a.I8.currentUser.uid,"discussions",t,"messages"),e.next=5,(0,c.PL)((0,c.IO)(n,(0,c.Xo)("createTime")));case 5:s=e.sent,o=s.docs.map((function(e){var t=e.data();return{prompt:t.prompt,response:t.response}})),f(o),k(!1),console.log("Fetched messages for discussionId:",t,o);case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Error fetching shared chat messages:",e.t0),k(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,d.useEffect)((function(){var e=function(e){b.current&&!b.current.contains(e.target)&&n()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[n]);var y=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=(0,c.JU)(a.RZ,"users",a.I8.currentUser.uid,"discussions",t),e.next=4,(0,c.oe)(o);case 4:console.log("Discussion deleted:",t),n(),s(),startNewChat(),m(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error deleting discussion:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{ref:b,className:"blurred-background",children:(0,h.jsxs)("div",{className:"white-box-chathistory",children:[(0,h.jsx)("div",{className:"go-back-svg",children:(0,h.jsx)("button",{onClick:n,children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,color:"black",stroke:"currentColor",className:"w-6 h-6",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})}),(0,h.jsx)("h2",{children:"Share link to Chat"}),(0,h.jsx)("div",{className:"divider "}),(0,h.jsx)("p",{children:"Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat."}),(0,h.jsx)("div",{className:"shared-chat scroll-cat mb-5",children:j?(0,h.jsx)(u.Z,{}):v.map((function(e,t){return(0,h.jsxs)("div",{className:"chat-message",children:[(0,h.jsx)("strong",{children:(0,h.jsx)(l.U,{children:e.prompt})}),(0,h.jsx)(l.U,{children:e.response}),(0,h.jsx)("div",{className:"divider "})]},t)}))}),(0,h.jsx)("div",{className:"delete-svg",children:(0,h.jsx)("button",{className:"delete-button",onClick:y,children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})})})})]})})},p=function(e){var t=e.isOpen,n=e.toggleOpen,s=e.onSessionClick,l=e.resetChatMessages,p=e.selectedSession,x=(0,d.useState)(!1),v=(0,i.Z)(x,2),f=v[0],w=v[1],g=(0,d.useState)(!1),j=(0,i.Z)(g,2),k=(j[0],j[1]),b=(0,d.useRef)(null),y=(0,d.useState)([]),Z=(0,i.Z)(y,2),N=(Z[0],Z[1]),L=(0,d.useState)(!1),C=(0,i.Z)(L,2),S=C[0],E=C[1],U=(0,d.useState)(!0),M=(0,i.Z)(U,2),I=M[0],T=M[1],D=(0,d.useState)(null),A=(0,i.Z)(D,2),H=A[0],W=A[1],B=function(e){var t=new Date;t.setHours(0,0,0,0);var n=new Date;n.setDate(n.getDate()-1),n.setHours(0,0,0,0);var s={today:[],yesterday:[],previously:[]};return e.forEach((function(e){var r,o=null!==(r=e.timestamp)&&void 0!==r&&r.seconds?new Date(1e3*e.timestamp.seconds):null;o&&(o.setHours(0,0,0,0),o.getTime()===t.getTime()?s.today.push(e):o.getTime()===n.getTime()?s.yesterday.push(e):s.previously.push(e))})),s},R=(0,d.useState)({today:[],yesterday:[],previously:[]}),O=(0,i.Z)(R,2),J=O[0],V=O[1];(0,d.useEffect)((function(){t&&P()}),[t]);var P=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,n,s,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t=a.I8.currentUser)){e.next=9;break}return n=t.uid,s=(0,c.IO)((0,c.hJ)(a.RZ,"users",n,"discussions"),(0,c.Xo)("timestamp","desc")),o=(0,c.cf)(s,(function(e){var t=e.docs.map((function(e){return{id:e.id,timestamp:e.data().timestamp}}));if(N(t),V(B(t)),t.length>0)t[0].id;T(!1)})),e.abrupt("return",(function(){return o()}));case 9:T(!1);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),T(!1);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),z=function(){l(),s(null)};(0,d.useEffect)((function(){t&&P()}),[t]);var F=function(){n(),w(!f)},K=function(e){!b.current||b.current.contains(e.target)||"svg"===e.target.tagName&&S||(n(),w(!1),k(!1))};(0,d.useEffect)((function(){var e=window.innerWidth<=768;return t&&e?document.addEventListener("mousedown",K):document.removeEventListener("mousedown",K),function(){document.removeEventListener("mousedown",K)}}),[t,S]);var X=function(){window.innerWidth<=768&&(n(),w(!1),k(!1))};return(0,d.useEffect)((function(){t&&P()}),[t]),(0,h.jsxs)("div",{ref:b,className:"chatbot-history ".concat(t?"chatbot-history-open":""),children:[(0,h.jsx)("span",{className:"svg-chatbot-history ".concat(t?"svg-chatbot-history-rotate-icon":""),"aria-hidden":"true",onClick:F,children:(0,h.jsx)("svg",{width:"8",height:"16",viewBox:"0 0 8 16",children:(0,h.jsx)("path",{d:"M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"})})}),t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"chatbot-previous",children:[(0,h.jsx)("div",{style:{display:"flex"},children:(0,h.jsxs)("button",{className:"chat-history-btn",onClick:function(){z(),window.innerWidth<=768&&F()},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,h.jsx)("img",{src:"".concat("","/images/arts/TIO.webp"),alt:"TIO illustration",className:"me-1 very-small-avatar rounded-circle"}),(0,h.jsx)("p",{className:"font-weight-bold mb-0",style:{color:"white",marginLeft:"5px"},children:"Let's Chat"})]}),(0,h.jsx)("div",{className:"ms-auto",children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"white",width:"18",height:"18",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})})})]})}),(0,h.jsx)("div",{className:"content-container",children:I?(0,h.jsx)("div",{className:"loading-container",children:(0,h.jsx)(u.Z,{})}):(0,h.jsxs)(h.Fragment,{children:[J.today.length>0&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{className:"text-sm text-muted mt-3",children:"Today:"}),(0,h.jsx)("ul",{className:"fade-ulist no-scroll",children:J.today.map((function(e){return(0,h.jsxs)("li",{className:"fade-list".concat(e.id===p?" selected-session":""),onClick:function(){s(e.id),window.innerWidth<=768&&F()},children:[e.id,(0,h.jsxs)("div",{className:"svg-chathistory-container",children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",onClick:function(t){t.stopPropagation(),W(e.id),E(!0)},children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"1"}),(0,h.jsx)("circle",{cx:"19",cy:"12",r:"1"}),(0,h.jsx)("circle",{cx:"5",cy:"12",r:"1"})]}),(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"white",width:"18",height:"18",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"})})]})]},e.id)}))})]}),J.yesterday.length>0&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{className:"text-sm text-muted mt-3",children:"Yesterday:"}),(0,h.jsx)("ul",{className:"fade-ulist no-scroll",children:J.yesterday.map((function(e){return(0,h.jsxs)("li",{className:"fade-list".concat(e.id===p?" selected-session":""),onClick:function(){s(e.id),window.innerWidth<=768&&F()},children:[e.id,(0,h.jsxs)("div",{className:"svg-chathistory-container",children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",onClick:function(t){t.stopPropagation(),W(e.id),E(!0)},children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"1"}),(0,h.jsx)("circle",{cx:"19",cy:"12",r:"1"}),(0,h.jsx)("circle",{cx:"5",cy:"12",r:"1"})]}),(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"white",width:"18",height:"18",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"})})]})]},e.id)}))})]}),J.previously.length>0&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{className:"text-sm text-muted mt-3",children:"Previously:"}),(0,h.jsx)("ul",{className:"fade-ulist no-scroll",children:J.previously.map((function(e){return(0,h.jsxs)("li",{className:"fade-list".concat(e.id===p?" selected-session":""),onClick:function(){s(e.id),window.innerWidth<=768&&F()},children:[e.id,(0,h.jsxs)("div",{className:"svg-chathistory-container",children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",onClick:function(t){t.stopPropagation(),W(e.id),E(!0)},children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"1"}),(0,h.jsx)("circle",{cx:"19",cy:"12",r:"1"}),(0,h.jsx)("circle",{cx:"5",cy:"12",r:"1"})]}),(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"white",width:"18",height:"18",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"})})]})]},e.id)}))})]})]})})]}),S&&(0,h.jsx)(m,{selectedSession:H,closeShareChat:function(){E(!1),w(!1),k(!1),z(),X()},resetChat:l,closeChatHistoryOnMobile:X})]})]})},x=n(7689),v=n(1087),f=function(e){var t=e.isHovered,n=e.displayName,s=e.photoURL,l=e.skills,u=e.description,m=e.otherUserUID,p=e.occupation,f=e.onClose,w=e.selectedSession,g=(0,x.s0)(),j=(0,d.useState)(null),k=(0,i.Z)(j,2),b=k[0],y=k[1];(0,d.useEffect)((function(){var e=a.I8.onAuthStateChanged((function(e){e?(y(e.uid),console.log("Current User UID in ExpertBox:",e.uid)):(console.error("User is not authenticated in ExpertBox"),y(null))}));return function(){e()}}),[w]);var Z=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,m&&b&&w){e.next=3;break}throw new Error("otherUserUID, currentUserUID, or selectedSession is undefined or null");case 3:return t="".concat(b,"_").concat(m),n=(0,c.JU)((0,c.hJ)(a.RZ,"sharedConversations"),t),e.next=7,(0,c.pl)(n,{selectedSession:w,currentUserUID:b,otherUserUID:m});case 7:g("/chat",{state:{otherUserUID:m,selectedSession:w,currentUserUID:b}}),console.log("New document created successfully."),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error handling chat button click:",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),N=function(e){"Escape"===e.key&&f()};return(0,d.useEffect)((function(){return t&&document.addEventListener("keydown",N),function(){document.removeEventListener("keydown",N)}}),[t]),t&&(0,h.jsxs)("div",{className:"white-box",children:[(0,h.jsx)("div",{className:"go-back-svg go-back-svg-padding",children:(0,h.jsxs)("button",{onClick:f,children:["                  ",(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,color:"black",stroke:"currentColor",className:"w-6 h-6",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})}),(0,h.jsxs)("h5",{className:"card-title",children:[" ",n]}),(0,h.jsxs)("h5",{className:"card-title",children:["Expertise: ",p]}),(0,h.jsx)("div",{href:s,className:"d-md-inline",children:(0,h.jsx)("img",{src:s,alt:"Profile Photo",className:"searchimage card-img user-avatar large-avatar rounded-circle mb-2 mx-md-auto mx-0 "})}),(0,h.jsxs)("div",{className:"about-container",children:[(0,h.jsx)("h5",{className:"card-title",style:{display:"inline"},children:"About: "}),(0,h.jsx)("p",{style:{display:"inline"},children:u})]}),(0,h.jsxs)("div",{style:{marginBottom:"0.4rem",marginTop:"0.4rem"},children:[(0,h.jsxs)("p",{className:"font-weight-bold mb-0",children:["Skills: ",l.join(", ")]}),l&&l.map((function(e){return(0,h.jsx)("button",{type:"button",className:" containerhover keyword-container mb-2 mx-1 pb-1",children:e},e)}))]}),(0,h.jsx)("div",{}),(0,h.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,h.jsx)(v.rU,{to:"/chat",state:{otherUserUID:m,selectedSession:w},onClick:Z,children:(0,h.jsxs)("button",{type:"button",className:"btn btn-primary btn-sm rounded-pill btncard pb-1 mb-2 mx-1",children:[(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z",clipRule:"evenodd"})}),(0,h.jsx)("span",{className:"me-2",children:"Message"})]})}),(0,h.jsxs)("button",{type:"button",className:"btn btn-secondary btn-sm rounded-pill btncard pb-1 mb-2 mx-1",children:[(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"25",className:"me-2 svg-inline--fa ",children:(0,h.jsx)("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})}),(0,h.jsx)("span",{className:"me-2",children:"Connect"})]})]})]})},w=n(2624),g=function(e){var t=e.isOpen,n=e.toggleOpen,s=e.selectedTopic,c=(e.firstUserMessage,e.selectedSession),l=(0,d.useState)(!1),m=(0,i.Z)(l,2),p=m[0],x=m[1],v=(0,d.useState)(!1),g=(0,i.Z)(v,2),j=g[0],k=g[1],b=(0,d.useState)([]),y=(0,i.Z)(b,2),Z=y[0],N=y[1],L=(0,d.useRef)(null),C=(0,d.useState)(!1),S=(0,i.Z)(C,2),E=S[0],U=S[1],M=(0,d.useState)(!1),I=(0,i.Z)(M,2),T=I[0],D=I[1],A=(0,d.useState)(null),H=(0,i.Z)(A,2),W=(H[0],H[1]),B=(0,d.useState)(!0),R=(0,i.Z)(B,2),O=R[0],J=R[1],V=(0,d.useState)(!1),P=(0,i.Z)(V,2),z=P[0],F=P[1],K=(0,d.useState)([]),X=(0,i.Z)(K,2),_=(X[0],X[1]),Y=(0,d.useState)(null),q=(0,i.Z)(Y,2),Q=(q[0],q[1],function(){D(!1),F(!1),U(null)}),G=function(e){U(e)},$=function(){z||T||(D(!1),U(null))};(0,d.useEffect)((function(){var e=window.innerWidth<=768;return e||(document.addEventListener("mouseenter",G),document.addEventListener("mouseleave",$)),function(){e||(document.removeEventListener("mouseenter",G),document.removeEventListener("mouseleave",$))}}),[z,T]);var ee=function(e){L.current&&!L.current.contains(e.target)&&(n(),x(!1),k(!1))};(0,d.useEffect)((function(){var e=window.innerWidth<=768;return t&&e?document.addEventListener("mousedown",ee):document.removeEventListener("mousedown",ee),function(){document.removeEventListener("mousedown",ee)}}),[t]),(0,d.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=23;break}if(e.prev=1,J(!0),!s){e.next=9;break}return e.next=6,ne(s,c);case 6:n=e.sent,e.next=13;break;case 9:if(!c){e.next=13;break}return e.next=12,te(c);case 12:n=e.sent;case 13:N(n||[]),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.error("Error fetching experts:",e.t0);case 19:return e.prev=19,J(!1),_(Array(Z.length).fill(!1)),e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[1,16,19,23]])})));return function(){return e.apply(this,arguments)}}();e()}),[t,s,c]);var te=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,s,o,i,c,l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,a.hJ)(a.RZ,"expertApplications"),e.next=4,(0,a.PL)(n);case 4:return s=e.sent,o=a.I8.currentUser.uid,i=(0,a.hJ)(a.RZ,"users/".concat(o,"/discussions/").concat(t,"/messages")),e.next=9,(0,a.PL)(i);case 9:return c=e.sent,l=[],u=new Set,c.forEach((function(e){var n=e.data(),r=n.prompt,o=n.response;s.forEach((function(e){var n=e.data();if(n&&n.displayName&&!u.has(e.id)){var s={name:n.displayName,photoURL:n.photoURL||"".concat("","/images/arts/user.webp"),skills:n.keywords||[],description:n.description,city:n.city,occupation:n.occupation,otherUserUID:e.id},i={keys:["city","occupation","description","labels"],includeScore:!0,includeMatches:!0,threshold:.7},a=new w.Z([n],i),c=t&&n.occupation.toLowerCase().includes(t.toLowerCase()),d=r&&a.search(r).length>0,h=o&&a.search(o).length>0;(c||d||h)&&(l.push(s),u.add(e.id))}}))})),e.abrupt("return",l);case 16:return e.prev=16,e.t0=e.catch(0),console.error("Error fetching experts for selected session:",e.t0),e.abrupt("return",[]);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var s,o,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=(0,a.hJ)(a.RZ,"expertApplications"),e.next=4,(0,a.PL)(s);case 4:return o=e.sent,i=[],o.forEach((function(e){var s=e.data();if(s&&s.displayName){var r={name:s.displayName,photoURL:s.photoURL||"".concat("","/images/arts/user.webp"),skills:s.keywords||[],description:s.description,city:s.city,occupation:s.occupation,otherUserUID:e.id},o=["city","occupation","keywords","description","labels"];(n&&o.some((function(e){return s[e]&&"string"===typeof s[e]&&s[e].toLowerCase().includes(n.toLowerCase())}))||t&&o.some((function(e){return s[e]&&"string"===typeof s[e]&&s[e].toLowerCase().includes(t.name.toLowerCase())}))||!t&&!n)&&i.push(r)}})),e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching experts for selected topic:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{ref:L,className:"chatbot-expert ".concat(t?"chatbot-expert-open":""),children:[(0,h.jsx)("span",{className:"svg-chatbot-expert ".concat(t?"svg-chatbot-expert-rotate-icon":""),"aria-hidden":"true",onClick:function(){x(!p),k(!j),n()},children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",style:{marginLeft:"auto"},children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"})})}),t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{children:(0,h.jsx)("h4",{children:"Experts"})}),(0,h.jsx)("div",{className:"",children:O?(0,h.jsx)("div",{className:"loading-container",children:(0,h.jsx)(u.Z,{})}):Z.map((function(e,t){return(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{className:"chat-btn expert-btn text-left ".concat(T&&t===E?"open-expert-box":""),onMouseEnter:function(){return G(t)},onMouseLeave:$,onClick:function(){return function(e,t){t===E&&(window.innerWidth<=768?(W(e),D(!0)):(F(!z),D(!0)))}(e,t)},children:(0,h.jsxs)("div",{className:"d-flex flex-column",children:[(0,h.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,h.jsx)("img",{src:e.photoURL,alt:"Avatar",className:"very-small-avatar rounded-circle"}),(0,h.jsx)("div",{className:"ml-2",children:(0,h.jsx)("p",{className:"font-weight-bold mb-0 text-start",children:e.name})})]}),e.skills&&(0,h.jsx)("div",{className:"text-start mt-2",children:(0,h.jsxs)("p",{className:"font-weight-bold mb-0",children:["Skills: ",e.skills.join(", ")]})})]})}),t===E&&(0,h.jsx)(f,{isHovered:!0,displayName:e.name,photoURL:e.photoURL,skills:e.skills,description:e.description,city:e.city,occupation:e.occupation,otherUserUID:e.otherUserUID,selectedSession:c,onClose:Q})]},t)}))})]})]})},j=function(e){var t=e.category,n=e.handleDropdownToggle,s=e.handleTopicSelection;return(0,h.jsxs)("label",{className:"chat-dropdown-model-button ",htmlFor:t.id,children:[t.svg,(0,h.jsx)("div",{className:"d-flex align-items-center",children:(0,h.jsxs)("div",{className:"d-flex flex-column align-items-start ps-3",children:[(0,h.jsx)("h5",{className:"m-0",children:t.name}),(0,h.jsx)("h6",{className:"text-muted text-start m-0",children:t.description})]})}),(0,h.jsxs)("div",{className:"flex-grow-1 d-flex justify-content-end",children:[(0,h.jsx)("input",{type:"radio",className:"form-check-input listboxes",id:t.id,name:"jobSuccess",onChange:function(){s(t),n()}}),(0,h.jsx)("label",{className:"form-check-label label-with-svg",htmlFor:t.id})]})]})},k=[{id:"computerOption",name:"Computer",description:"All your IT solutions",svg:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"})})},{id:"sportOption",name:"Sport",description:"Let Tio help you become fit",svg:(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:[(0,h.jsx)("path",{d:"M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"}),(0,h.jsx)("path",{d:"M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"})]})},{id:"foodCategory",name:"Food",description:"Ready to become head-chef?",svg:(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:[(0,h.jsx)("path",{d:"M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6"}),(0,h.jsx)("path",{d:"M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"})]})},{id:"healthCategory",name:"Health",description:"Here to help",svg:(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:[(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242M12.293 8 8.027 3.734 3.738 8.031 8 12.293zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492z"}),(0,h.jsx)("path",{d:"M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.707Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707M8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.707ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707"})]})},{id:"workCategory",name:"Work",description:"New Job or career advice",svg:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"})})},{id:"hobbiesCategory",name:"Hobbies",description:"Discover what's possible",svg:(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",children:[(0,h.jsx)("path",{d:"M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"}),(0,h.jsx)("path",{d:"M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7"})]})}],b=function(e){var t=e.isDropdownOpen,n=e.handleDropdownToggle,s=e.onSelectTopic,r=(0,d.useRef)(null),o=(0,d.useState)(null),a=(0,i.Z)(o,2),c=a[0],l=a[1],u=function(e){l(e),s(e),n()};return(0,d.useEffect)((function(){var e=function(e){var s=document.querySelector(".pick-model");t&&r.current&&!s.contains(e.target)&&n()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[r,n,t]),(0,h.jsxs)("div",{className:"pick-model",children:[(0,h.jsx)("h4",{onClick:n,className:"pointer-cursor ".concat(t?"h4-dropdown-open":""),children:c?"Topic: ".concat(c.name):"Pick a Topic"}),(0,h.jsx)("span",{className:"svg-chatbot-model pointer-cursor ".concat(t?"svg-chatbot-model-rotate-icon":""),"aria-hidden":"true",onClick:n,children:(0,h.jsx)("svg",{width:"8",height:"16",viewBox:"0 0 8 16",children:(0,h.jsx)("path",{d:"M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"})})}),(0,h.jsx)("div",{ref:r,className:"chat-dropdown-model ".concat(t?"show scroll-cat":""),children:k&&k.map((function(e){return(0,h.jsx)(j,{category:e,handleDropdownToggle:n,handleTopicSelection:u},e.id)}))})]})},y=n(6019),Z=function(){var e=(0,d.useState)(""),t=(0,i.Z)(e,2),n=t[0],m=t[1],x=(0,d.useState)("28px"),v=(0,i.Z)(x,2),f=v[0],w=v[1],j=(0,d.useRef)(null),k=(0,d.useState)([]),Z=(0,i.Z)(k,2),N=Z[0],L=Z[1],C=(0,d.useState)(!1),S=(0,i.Z)(C,2),E=S[0],U=S[1],M=(0,d.useState)(!1),I=(0,i.Z)(M,2),T=I[0],D=I[1],A=(0,d.useState)(!1),H=(0,i.Z)(A,2),W=H[0],B=H[1],R=(0,d.useRef)(null),O=(0,d.useState)(!1),J=(0,i.Z)(O,2),V=J[0],P=J[1],z=(0,d.useState)(!1),F=(0,i.Z)(z,2),K=F[0],X=(F[1],(0,d.useState)(null)),_=(0,i.Z)(X,2),Y=_[0],q=_[1],Q=(0,d.useState)(null),G=(0,i.Z)(Q,2),$=G[0],ee=G[1],te=(0,d.useState)(null),ne=(0,i.Z)(te,2),se=(ne[0],ne[1]),re=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var s,o,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=(0,c.hJ)(a.RZ,"users",t,"discussions",n,"messages"),e.next=4,(0,c.PL)((0,c.IO)(s,(0,c.Xo)("createTime")));case 4:o=e.sent,i=o.docs.map((function(e){var t=e.data(),n=t.prompt,s=t.response;return[{text:(0,h.jsx)(l.U,{children:n}),user:"user"},{text:(0,h.jsx)(l.U,{children:s}),user:"bot",isTyping:!1}]})).flat(),L(i),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),oe=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,i,u,d,p,x,v,f,w,g,k,b,Z;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(!0),""===n.trim()){e.next=40;break}if(t=a.I8.currentUser.uid,e.prev=3,i=Y,u=(0,y.Z)(n).terms(),d=u.nouns().out("array").filter((function(e){return"pronoun"!==e})),p=u.verbs().out("array"),n.split(" ")[0],i){e.next=25;break}return(i=[].concat((0,s.Z)(d),(0,s.Z)(p)).join(" ")).trim()||(x=n.split(" ")[0],i=x.trim()),e.next=14,(0,c.pl)((0,c.JU)(a.db,"users/".concat(t)),{});case 14:return v=(0,c.JU)(a.db,"users/".concat(t,"/discussions/").concat(i)),e.next=17,(0,c.QT)(v);case 17:if(e.sent.exists()){e.next=25;break}return f=(0,c.Bt)(),e.next=22,(0,c.pl)(v,{timestamp:f});case 22:se(i),ae(i),sessionStorage.setItem("currentDiscussionId",i);case 25:return w=(0,c.JU)(a.db,"users/".concat(t,"/discussions/").concat(i)),g=(0,c.hJ)(w,"messages"),k=(0,c.Bt)(),e.next=30,(0,c.ET)(g,{prompt:n,timestamp:k});case 30:b=e.sent,m(""),ce(),L((function(e){return[].concat((0,s.Z)(e),[{text:n,user:"user"},{text:"",user:"bot",isTyping:!0}])})),Z=(0,c.cf)(b,function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,i,a,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o=null===(n=t.data())||void 0===n?void 0:n.response)){e.next=15;break}Z(),20,.1,i=o,a=(0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.max(5,20-.1*t),e.next=3,new Promise((function(e){return setTimeout(e,n)}));case 3:L((function(e){return[].concat((0,s.Z)(e.slice(0,-1)),[{text:(0,h.jsx)(l.U,{children:i.slice(0,t+1)}),user:"bot"}])}));case 4:case"end":return e.stop()}}),e)})),c=0;case 8:if(!(c<i.length)){e.next=13;break}return e.delegateYield(a(c),"t0",10);case 10:c++,e.next=8;break;case 13:P(!1),window.innerWidth<768&&j.current&&j.current.blur();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q(i),e.next=40;break;case 38:e.prev=38,e.t0=e.catch(3);case 40:case"end":return e.stop()}}),e,null,[[3,38]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(t),sessionStorage.setItem("lastDiscussionId",t),e.next=4,re(a.I8.currentUser.uid,t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(t),sessionStorage.setItem("lastDiscussionId",t),e.next=4,re(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();window.addEventListener("beforeunload",(function(){sessionStorage.removeItem("currentDiscussionId")})),(0,d.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a.I8.currentUser&&sessionStorage.getItem("lastDiscussionId")}catch(t){}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),K&&fetchSessions()}),[K]);var ce=function(){var e=j.current;if(e){e.style.height="28px";var t=Math.min(e.scrollHeight,200);e.style.height="".concat(t,"px")}};(0,d.useEffect)((function(){ce();var e=function(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),oe())},t=j.current;return t&&t.addEventListener("keydown",e),function(){t&&t.removeEventListener("keydown",e)}}),[N]),(0,d.useEffect)((function(){""===n&&w("28px")}),[n]),(0,d.useEffect)((function(){R.current&&(R.current.scrollTop=R.current.scrollHeight)}),[N]);return(0,h.jsxs)("div",{className:"Chatcontainer-model",children:[(0,h.jsx)(p,{isOpen:T,toggleOpen:function(){D(!T),B(!1)},onSessionClick:ie,selectedSession:Y,resetChatMessages:function(){L([])}}),(0,h.jsxs)("div",{className:"chat-display",children:[(0,h.jsx)(b,{isDropdownOpen:E,handleDropdownToggle:function(){U(!E)},onSelectTopic:function(e){ee(e)}}),(0,h.jsxs)("div",{className:"chat-column chat-bot-upper-section",children:[(0,h.jsx)("div",{className:"chat-box chat-bot-section",ref:R,children:N.map((function(e,t){return(0,h.jsxs)("div",{className:"chat-bubble-bot ".concat("user"===e.user?"user-sent-bot":"bot"),children:["bot"===e.user&&(0,h.jsxs)("div",{className:"bot-message",children:[(0,h.jsx)("div",{className:"bot-avatar",children:(0,h.jsx)("img",{className:"bot-avatar",src:"".concat("","/images/arts/TIO.webp"),alt:"TIO-bot"})}),(0,h.jsxs)("div",{className:"bot-details",children:[(0,h.jsx)("div",{className:"bot-name",children:"TIO-bot"}),e.isTyping?(0,h.jsx)(u.Z,{}):(0,h.jsx)("div",{className:"chat-text",children:e.text})]})]}),"bot"!==e.user&&(0,h.jsx)("div",{className:"chat-text",children:e.text})]},t)}))}),(0,h.jsxs)("div",{className:"chatui-container",children:[(0,h.jsx)("textarea",{value:n,onChange:function(e){m(e.target.value),ce()},className:"scroll-col message-input no-left",style:{height:f},ref:j,placeholder:"Type a message...",autoComplete:"off",inputMode:"text",onKeyDown:function(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),oe())},disabled:V}),(0,h.jsx)("button",{"aria-label":"Send Message",className:"svg-container-chat send-btn",disabled:V,onClick:function(){return oe(Y)},children:(0,h.jsx)("i",{className:"fas fa-paper-plane"})})]})]})]}),(0,h.jsx)(g,{isOpen:W,toggleOpen:function(){B(!W),D(!1)},selectedTopic:$,selectedSession:Y})]})}}}]);
//# sourceMappingURL=811.1d0016e2.chunk.js.map