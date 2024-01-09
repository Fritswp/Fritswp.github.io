"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[315],{8315:function(e,t,n){n.r(t);var r=n(7762),i=n(3433),s=n(4942),a=n(1413),o=n(4165),c=n(5861),l=n(9439),u=n(2791),d=n(4797),p=n(2062),h=n.n(p),f=n(2481),m=n(173),x=n(276),v=n(2279),g=n(7191),b=n(673),y=n(7689),w=n(184),j=[{title:"Welcome to the Survey!",id:"introduction",link:"first_name",i:0},{title:"lets start with your first name? *",id:"first_name",link:"last_name",i:1},{title:"and your last name? *",id:"last_name",link:"email",i:2},{title:"Email *",subtext:"Please use the email you signed up with",id:"email",link:"occupation",i:3},{title:"Expertise? *",subtext:"Please list all your areas of expertise",id:"occupation",link:"evidence",i:4},{title:"Certifications? *",subtext:"Please provide the name of certificates to support your expertise",id:"evidence",link:"cv_upload",i:5},{title:"Upload Certificate, Cv etc. (PDF or Word Document) ",subtext:"Please provide relevant documentation to support your expertise",id:"cv_upload",link:"websites",type:"file",i:6},{title:"Personal Website/Linkedin? ",subtext:"Optional: If you think it would support your application, please provide relevant links",id:"websites",link:"final",type:"text",i:7},{title:"Additional Information? ",subtext:"Feel free to add any further information or thoughts that you believe will support your application",id:"final",link:"",type:"textarea",i:8}],k=function(e){var t=(0,u.useState)(!1),n=(0,l.Z)(t,2),p=n[0],k=n[1],Z=(0,u.useState)(!1),N=(0,l.Z)(Z,2),S=(N[0],N[1]),C=(0,u.useState)(!0),R=(0,l.Z)(C,2),T=R[0],E=R[1],_=(0,u.useState)([]),P=(0,l.Z)(_,2),U=P[0],I=P[1],L=(0,u.useState)(""),A=(0,l.Z)(L,2),W=(A[0],A[1]),B=(0,u.useState)({}),M=(0,l.Z)(B,2),O=M[0],F=M[1],J=(0,u.useState)(!1),D=(0,l.Z)(J,2),z=D[0],H=D[1],q=((0,u.useRef)(null),(0,x.cF)(),(0,u.useState)(!1)),K=(0,l.Z)(q,2),Q=K[0],V=K[1],Y=(0,u.useState)(!0),$=(0,l.Z)(Y,2),G=$[0],X=($[1],(0,u.useState)({})),ee=(0,l.Z)(X,2),te=(ee[0],ee[1]),ne=(0,u.useState)(0),re=(0,l.Z)(ne,2),ie=re[0],se=re[1],ae=(0,y.s0)(),oe=(0,u.useState)(!1),ce=(0,l.Z)(oe,2),le=ce[0],ue=ce[1],de=window.innerWidth<=768,pe=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,n,r,i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=b.I8.currentUser){e.next=3;break}return e.abrupt("return");case 3:return n=t.uid,r=(0,f.JU)(b.RZ,"expertApplications",n),e.prev=5,e.next=8,(0,f.QT)(r);case 8:(i=e.sent).exists()&&(s=i.data(),s.approved||ue(!0)),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){pe()}),[]),(0,u.useEffect)((function(){if(!G){var e=document.getElementById("1");e&&e.focus()}}),[G]),(0,u.useEffect)((function(){m.Dt&&(V(!0),setTimeout((function(){V(!1)}),5e3))}),[]);var he=function(e){if(F((0,a.Z)((0,a.Z)({},O),{},(0,s.Z)({},e.target.name,e.target.value))),"email"===e.target.name){E(/^\S+@\S+\.\S+$/.test(e.target.value))}if(me(j),"final"===e.target.name){var t=e.target.value.length;te(t),se(t)}if(!de){var n=j.findIndex((function(t){return t.id===e.target.name}));-1!==n&&ge(n)}},fe=function(e){var t=e.target.files;I([].concat((0,i.Z)(U),(0,i.Z)(t)))},me=function(e){var t=["first_name","last_name","email","occupation","evidence"].every((function(e){return void 0!==O[e]&&""!==O[e]}));k(t),S(t||U.length>0)};(0,u.useEffect)((function(){me(j)}),[O,U]);var xe,ve=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,n,i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!de){e.next=2;break}return e.abrupt("return");case 2:if(me(),!le){e.next=5;break}return e.abrupt("return");case 5:if(!p||!T){e.next=17;break}if(!U){e.next=13;break}return H(!0),t=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,n,i,s,l,u,d,p,m,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=(0,x.cF)(),n=U.map((function(e){return(0,x.iH)(t,"user_uploads/".concat(e.name))})),i=[],s=(0,r.Z)(U),e.prev=5,u=(0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.value,e.next=3,new Promise((function(e,n){var r=new FileReader;r.onload=function(t){e(t.target.result)},r.onerror=function(e){n(e)},r.readAsDataURL(t)}));case 3:n=e.sent,i.push(n);case 5:case"end":return e.stop()}}),e)})),s.s();case 8:if((l=s.n()).done){e.next=12;break}return e.delegateYield(u(),"t0",10);case 10:e.next=8;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(5),s.e(e.t1);case 17:return e.prev=17,s.f(),e.finish(17);case 20:return d=i.map((function(e,t){return(0,x.sf)(n[t],e,"data_url")})),e.next=23,Promise.all(d);case 23:return e.next=25,Promise.all(n.map((function(e){return(0,x.Jt)(e)})));case 25:p=e.sent,W(p),(m=b.I8.currentUser)&&((0,a.Z)((0,a.Z)({},O),{},{cv_download_urls:p,approved:!1}),v=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,n,r,i,s,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,f.hJ)(b.RZ,"userProfiles"),n=(0,f.JU)(t,m.uid),e.next=5,(0,f.QT)(n);case 5:if(!(r=e.sent.data())){e.next=22;break}return i=r.points,s=r.customURL,r.address,r.city,r.county,r.mobileNumber,r.postcode,r.photoURL,c=(0,a.Z)((0,a.Z)({},O),{},{cv_download_urls:p,approved:!1,points:i+50,customURL:s,address:r.address||null,city:r.city||null,county:r.county||null,mobileNumber:r.mobileNumber||null,postcode:r.postcode||null,photoURL:r.photoURL||null}),e.next=18,(0,f.pl)((0,f.JU)(b.RZ,"expertApplications",m.uid),c);case 18:return e.sent,e.next=21,(0,f.pl)(n,{points:i},{merge:!0});case 21:h()({title:"",text:"Thanks for completing the survey. We will reach out as soon as we have made a decision!",icon:"success",dangerMode:!1}).then((function(){ae("/")}));case 22:e.next=26;break;case 24:e.prev=24,e.t0=e.catch(0);case 26:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}(),v()),e.next=33;break;case 31:e.prev=31,e.t2=e.catch(0);case 33:return e.prev=33,H(!1),e.finish(33);case 36:case"end":return e.stop()}}),e,null,[[0,31,33,36],[5,14,17,20]])})));return function(){return e.apply(this,arguments)}}(),e.next=11,t();case 11:e.next=15;break;case 13:(n=b.I8.currentUser)&&(i=(0,a.Z)((0,a.Z)({},O),{},{cv_download_urls:[],approved:!1}),s=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.pl)((0,f.JU)(b.RZ,"expertApplications",n.uid),i);case 3:e.sent,h()({title:"",text:"Thanks for completing the survey. We will reach out as soon as we have made a decision!",icon:"success",dangerMode:!1}).then((function(){ae("/")})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s());case 15:e.next=19;break;case 17:p||h()({title:"Error",text:"Please fill out all the required fields before submitting.",icon:"error",dangerMode:!0}),T||h()({title:"Error",text:"Please provide a valid email address.",icon:"error",dangerMode:!0});case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(e){if(e<j.length-1){var t=e+1,n=j[t].id;location.href="#".concat(n);var r=document.getElementById((t+1).toString());r&&setTimeout((function(){r.focus()}),1e3)}},be=function(e,t){var n;if("next"===e&&t<j.length-1)n=t+1;else{if(!("previous"===e&&t>0))return;n=t-1}var r=j[n].id;location.href="#".concat(r);var i=document.getElementById((n+1).toString());i&&setTimeout((function(){i.focus()}),1e3)};return(0,w.jsxs)("div",{children:[(0,w.jsx)(d.ScrollToTopOnMount,{}),Q&&(0,w.jsx)("div",{className:"android-message",children:'Use the "OK" button for a smoother experience and to prevent screen shifting.'}),le&&(0,w.jsx)("div",{className:"blurred-background",children:(0,w.jsxs)("div",{className:"pending-application-popup",children:[(0,w.jsx)("p",{children:"Your application is pending. Please wait for approval."}),(0,w.jsx)("a",{href:"/",className:"dropdown-item",style:{marginRight:0,marginLeft:0},children:"Return Home"})]})}),(0,w.jsx)(d.SectionsContainer,{sectionClassName:"section",anchors:(xe=j,xe.map((function(e){return e.id}))),scrollBar:!1,navigation:!0,verticalAlign:!1,sectionPaddingTop:"50px",sectionPaddingBottom:"50px",arrowNavigation:!1,children:j.map((function(e,t){return(0,w.jsx)(d.Section,{children:0===t?(0,w.jsx)("div",{className:"introduction-page",children:(0,w.jsxs)("div",{className:"row",children:[(0,w.jsxs)("div",{className:"formintroduction col-md-6",children:[(0,w.jsx)("h1",{children:"Ready to become an Expert? MACIAO"}),(0,w.jsx)("div",{children:(0,w.jsxs)("span",{className:"introductiontext",children:["Welcome to our Expert Network, a distinguished community where verified experts in various fields provide valuable insights to users seeking reliable answers. Our experts have undergone a rigorous vetting process, ensuring top-tier expertise.",(0,w.jsx)("br",{}),(0,w.jsx)("br",{}),"If you're passionate about sharing your knowledge and helping our users, please complete the application form below. We'll review your qualifications, and if you meet our criteria, you'll have the opportunity to join our platform and assist those seeking expert guidance."]})}),(0,w.jsxs)("div",{children:[(0,w.jsx)(v.ZP,{className:"formintroductionbtn mt-3 mb-3",id:"start-survey-btn",onClick:function(){return be("next",0)},children:"Start Survey"}),(0,w.jsxs)("div",{className:"introductiontime",style:{display:"flex",alignItems:"center"},children:[(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"currentColor",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",style:{marginRight:"3px"},children:(0,w.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z",clipRule:"evenodd"})}),"Takes 5 minutes"]})]})]}),(0,w.jsx)("div",{className:"col-md-6 d-flex justify-content-center align-items-center",children:(0,w.jsx)("img",{src:"".concat("","/images/Tios/Learning-Tio.webp"),alt:"TIO illustration",className:"img-fluid-Typeform"})})]})}):(0,w.jsx)("header",{className:"App-header",children:(0,w.jsxs)("div",{className:"questionContainer",children:[(0,w.jsxs)("div",{className:"title",children:[(0,w.jsxs)("h2",{children:[(0,w.jsxs)("span",{className:"count",children:[t," \xa0"]}),"\xa0",(0,w.jsx)("span",{className:"page1-block h3",children:e.title})]}),e.subtext&&(0,w.jsx)("p",{className:"subtext",children:e.subtext})]}),"file"===e.type?(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{className:"uploadcontainer",children:[(0,w.jsx)("input",{className:"uploadfield",type:"file",accept:".pdf, .doc, .docx",onChange:fe,multiple:!0}),(0,w.jsxs)("div",{className:"documentupload",children:[(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#7EA0D6",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"75",width:"75",children:(0,w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})}),(0,w.jsxs)("div",{children:[(0,w.jsx)("div",{className:"choosefile mt-2",children:"Choose file"})," ","or"," ",(0,w.jsx)("div",{className:"draghere",children:"drag here"})]})]})]}),U.map((function(e,t){return(0,w.jsx)("div",{children:(0,w.jsxs)("p",{children:["Uploaded File ",t+1,": ",e.name," ",(0,w.jsx)("span",{onClick:function(){return function(e){var t=(0,i.Z)(U);t.splice(e,1),I(t)}(t)},style:{marginLeft:"5px",cursor:"pointer"},children:"\u274c"})]})},t)}))]}):"textarea"===e.type?(0,w.jsxs)("div",{children:[(0,w.jsx)(g.Z.TextArea,{placeholder:"Type your answer here...",name:e.id,id:t+1,className:"inputtypearea",onChange:he,autoSize:{minRows:3,maxRows:6}}),(0,w.jsxs)("div",{className:"char-count",style:{color:ie>200?"red":"inherit"},children:[ie,"/200 characters"]})]}):(0,w.jsx)("div",{children:de?(0,w.jsx)("input",{placeholder:"Type your answer here...",name:e.id,id:t+1,className:"inputtypeform",onChange:he}):(0,w.jsx)("input",{placeholder:"Type your answer here...",name:e.id,id:t+1,className:"inputtypeform",onPressEnter:function(){return function(e,t){location.href="#".concat(e);var n=document.getElementById((t+1).toString());n&&setTimeout((function(){n.focus()}),1e3)}(e.link,e.i)},onChange:he})}),(0,w.jsx)("br",{}),(0,w.jsx)("div",{id:"submit-box",children:t===j.length-1?(0,w.jsx)("button",{id:"submit-btn",onClick:ve,disabled:ie>200,className:ie>200?"disabled-button":"",loading:z,style:{width:"100px"},type:"button",children:z?"":"SUBMIT"}):(0,w.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,w.jsx)("button",{id:"enter-btn",type:"button",onClick:function(){return be("next",e.i)},children:"OK"}),!de&&(0,w.jsxs)("span",{className:"press-enter",children:["press ",(0,w.jsx)("span",{className:"bold",children:"ENTER"})]}),(0,w.jsxs)("div",{className:"next-previous-buttons",children:[(0,w.jsx)("button",{className:"next-btn",onClick:function(){return be("next",e.i)},style:{marginRight:"10px"},children:(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",type:"button",color:"#ffffff",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",height:"100%",width:"100%",children:(0,w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}),(0,w.jsx)("button",{className:"next-btn",onClick:function(){return be("previous",e.i)},children:(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",type:"button",color:"#ffffff",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",height:"100%",width:"100%",children:(0,w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})})})]})]})})]})})},t)}))})]})};t.default=u.memo(k)}}]);
//# sourceMappingURL=315.1d0fb154.chunk.js.map