"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[315],{8315:function(e,t,n){n.r(t);var r=n(7762),i=n(3433),s=n(4942),a=n(1413),o=n(4165),c=n(5861),l=n(9439),u=n(2791),d=n(4797),p=n(2062),h=n.n(p),f=n(2481),m=n(173),x=n(276),v=n(2279),g=n(7191),w=n(673),b=n(7689),j=n(184),y=[{title:"Welcome to the Survey!",id:"introduction",link:"first_name",i:0},{title:"lets start with your first name? *",id:"first_name",link:"last_name",i:1},{title:"and your last name? *",id:"last_name",link:"email",i:2},{title:"Email *",subtext:"Please use the email you signed up with",id:"email",link:"occupation",i:3},{title:"Expertise? *",subtext:"Please list all your areas of expertise",id:"occupation",link:"evidence",i:4},{title:"Certifications? *",subtext:"Please provide the name of certificates to support your expertise",id:"evidence",link:"cv_upload",i:5},{title:"Upload Certificate, Cv etc. (PDF or Word Document) ",subtext:"Please provide relevant documentation to support your expertise",id:"cv_upload",link:"websites",type:"file",i:6},{title:"Personal Website/Linkedin? ",subtext:"Optional: If you think it would support your application, please provide relevant links",id:"websites",link:"final",i:7},{title:"Additional Information? ",subtext:"Feel free to add any further information or thoughts that you believe will support your application",id:"final",link:"",type:"textarea",i:8}],k=function(e){var t=(0,u.useState)(!1),n=(0,l.Z)(t,2),p=n[0],k=n[1],Z=(0,u.useState)(!1),N=(0,l.Z)(Z,2),S=(N[0],N[1]),C=(0,u.useState)(!0),R=(0,l.Z)(C,2),P=R[0],T=R[1],E=(0,u.useState)([]),_=(0,l.Z)(E,2),L=_[0],U=_[1],A=(0,u.useState)(""),I=(0,l.Z)(A,2),M=(I[0],I[1]),W=(0,u.useState)({}),B=(0,l.Z)(W,2),D=B[0],F=B[1],J=(0,u.useState)(!1),O=(0,l.Z)(J,2),H=O[0],z=O[1],q=((0,u.useRef)(null),(0,x.cF)(),(0,u.useState)(!1)),K=(0,l.Z)(q,2),Y=K[0],Q=K[1],V=(0,u.useState)(!0),$=(0,l.Z)(V,2),G=$[0],X=($[1],(0,u.useState)({})),ee=(0,l.Z)(X,2),te=(ee[0],ee[1]),ne=(0,u.useState)(!1),re=(0,l.Z)(ne,2),ie=re[0],se=re[1],ae=function(){return"undefined"!==typeof window&&window.innerWidth<=768},oe=(0,u.useState)(0),ce=(0,l.Z)(oe,2),le=ce[0],ue=ce[1],de=(0,b.s0)(),pe=(0,u.useState)(!1),he=(0,l.Z)(pe,2),fe=he[0],me=he[1],xe=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,n,r,i,s,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=w.I8.currentUser){e.next=3;break}return e.abrupt("return");case 3:return n=t.uid,r=(0,f.JU)(w.RZ,"expertApplications",n),e.prev=5,e.next=8,(0,f.QT)(r);case 8:(i=e.sent).exists()&&(s=i.data(),a=s.approved,se(a),a||me(!0)),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){xe()}),[]),(0,u.useEffect)((function(){if(!G){var e=document.getElementById("1");e&&e.focus()}}),[G]),(0,u.useEffect)((function(){m.Dt&&(Q(!0),setTimeout((function(){Q(!1)}),5e3))}),[]);var ve=function(e){if(F((0,a.Z)((0,a.Z)({},D),{},(0,s.Z)({},e.target.name,e.target.value))),"email"===e.target.name){T(/^\S+@\S+\.\S+$/.test(e.target.value))}if(we(y),"final"===e.target.name){var t=e.target.value.length;te(t),ue(t)}},ge=function(e){var t=e.target.files;U([].concat((0,i.Z)(L),(0,i.Z)(t)))},we=function(e){var t=["first_name","last_name","email","occupation","evidence"].every((function(e){return void 0!==D[e]&&""!==D[e]}));k(t),S(t||L.length>0)};(0,u.useEffect)((function(){we(y)}),[D,L]);var be,je=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,n,i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(we(),!fe){e.next=3;break}return e.abrupt("return");case 3:if(!p||!P){e.next=15;break}if(!L){e.next=11;break}return z(!0),t=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,n,i,s,l,u,d,p,m,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=(0,x.cF)(),n=L.map((function(e){return(0,x.iH)(t,"user_uploads/".concat(e.name))})),i=[],s=(0,r.Z)(L),e.prev=5,u=(0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.value,e.next=3,new Promise((function(e,n){var r=new FileReader;r.onload=function(t){e(t.target.result)},r.onerror=function(e){n(e)},r.readAsDataURL(t)}));case 3:n=e.sent,i.push(n);case 5:case"end":return e.stop()}}),e)})),s.s();case 8:if((l=s.n()).done){e.next=12;break}return e.delegateYield(u(),"t0",10);case 10:e.next=8;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(5),s.e(e.t1);case 17:return e.prev=17,s.f(),e.finish(17);case 20:return d=i.map((function(e,t){return(0,x.sf)(n[t],e,"data_url")})),e.next=23,Promise.all(d);case 23:return e.next=25,Promise.all(n.map((function(e){return(0,x.Jt)(e)})));case 25:p=e.sent,M(p),(m=w.I8.currentUser)&&((0,a.Z)((0,a.Z)({},D),{},{cv_download_urls:p,approved:!1}),v=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,n,r,i,s,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,f.hJ)(w.RZ,"userProfiles"),n=(0,f.JU)(t,m.uid),e.next=5,(0,f.QT)(n);case 5:if(!(r=e.sent.data())){e.next=22;break}return i=r.points,s=r.customURL,r.address,r.city,r.county,r.mobileNumber,r.postcode,r.photoURL,c=(0,a.Z)((0,a.Z)({},D),{},{cv_download_urls:p,approved:!1,points:i+50,customURL:s,address:r.address||null,city:r.city||null,county:r.county||null,mobileNumber:r.mobileNumber||null,postcode:r.postcode||null,photoURL:r.photoURL||null}),e.next=18,(0,f.pl)((0,f.JU)(w.RZ,"expertApplications",m.uid),c);case 18:return e.sent,e.next=21,(0,f.pl)(n,{points:i},{merge:!0});case 21:h()({title:"",text:"Thanks for completing the survey. We will reach out as soon as we have made a decision!",icon:"success",dangerMode:!1}).then((function(){de("/")}));case 22:e.next=26;break;case 24:e.prev=24,e.t0=e.catch(0);case 26:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}(),v()),e.next=33;break;case 31:e.prev=31,e.t2=e.catch(0);case 33:return e.prev=33,z(!1),e.finish(33);case 36:case"end":return e.stop()}}),e,null,[[0,31,33,36],[5,14,17,20]])})));return function(){return e.apply(this,arguments)}}(),e.next=9,t();case 9:e.next=13;break;case 11:(n=w.I8.currentUser)&&(i=(0,a.Z)((0,a.Z)({},D),{},{cv_download_urls:[],approved:!1}),s=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.pl)((0,f.JU)(w.RZ,"expertApplications",n.uid),i);case 3:e.sent,h()({title:"",text:"Thanks for completing the survey. We will reach out as soon as we have made a decision!",icon:"success",dangerMode:!1}).then((function(){de("/")})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s());case 13:e.next=17;break;case 15:p||h()({title:"Error",text:"Please fill out all the required fields before submitting.",icon:"error",dangerMode:!0}),P||h()({title:"Error",text:"Please provide a valid email address.",icon:"error",dangerMode:!0});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(e,t){if(!/Mobi|Android/i.test(navigator.userAgent)||"next"!==e){var n;if("next"===e&&t<y.length-1)n=t+1;else{if(!("previous"===e&&t>0))return;n=t-1}var r=y[n].id;location.href="#".concat(r);var i=document.getElementById((n+1).toString());i&&setTimeout((function(){i.focus()}),1e3)}},ke=function(e,t){var n=/Mobi|Android/i.test(navigator.userAgent);n&&"Enter"===e.key&&e.preventDefault(),n||"Enter"!==e.key||function(e){if(!ae&&e<y.length-1){var t=e+1,n=y[t].id;location.href="#".concat(n);var r=document.getElementById((t+1).toString());r&&setTimeout((function(){r.focus()}),1e3)}}(t)};return(0,j.jsxs)("div",{children:[(0,j.jsx)(d.ScrollToTopOnMount,{}),Y&&(0,j.jsx)("div",{className:"android-message",children:'Use the "OK" button for a smoother experience and to prevent screen shifting.'}),fe&&(0,j.jsx)("div",{className:"blurred-background",children:(0,j.jsxs)("div",{className:"pending-application-popup",children:[(0,j.jsx)("p",{children:"Your application is pending. Please wait for approval."}),(0,j.jsx)("a",{href:"/",className:"dropdown-item",style:{marginRight:0,marginLeft:0},children:"Return Home"})]})}),!fe&&ie&&(0,j.jsx)("div",{className:"blurred-background",children:(0,j.jsxs)("div",{className:"pending-application-popup",children:[(0,j.jsx)("p",{children:"Congratulations! You are already an approved expert. Macio"}),(0,j.jsx)("p",{children:"If you wish to add another expertise, please send an email to tio@expertapplication.com"}),(0,j.jsx)("a",{href:"/",className:"dropdown-item",style:{marginRight:0,marginLeft:0},children:"Return Home"})]})}),(0,j.jsx)(d.SectionsContainer,{sectionClassName:"section",anchors:(be=y,be.map((function(e){return e.id}))),scrollBar:!1,navigation:!0,verticalAlign:!1,sectionPaddingTop:"50px",sectionPaddingBottom:"50px",arrowNavigation:!1,children:y.map((function(e,t){return(0,j.jsx)(d.Section,{children:0===t?(0,j.jsx)("div",{className:"introduction-page",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsxs)("div",{className:"formintroduction col-md-6",children:[(0,j.jsx)("h1",{children:"Ready to become an Expert?"}),(0,j.jsx)("div",{children:(0,j.jsxs)("span",{className:"introductiontext",children:["Welcome to our Expert Network, a distinguished community where verified experts in various fields provide valuable insights to users seeking reliable answers. Our experts have undergone a rigorous vetting process, ensuring top-tier expertise.",(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),"If you're passionate about sharing your knowledge and helping our users, please complete the application form below. We'll review your qualifications, and if you meet our criteria, you'll have the opportunity to join our platform and assist those seeking expert guidance."]})}),(0,j.jsxs)("div",{children:[(0,j.jsx)(v.ZP,{className:"formintroductionbtn mt-3 mb-3",id:"start-survey-btn",onClick:function(){return ye("next",0)},children:"Start Survey"}),(0,j.jsxs)("div",{className:"introductiontime",style:{display:"flex",alignItems:"center"},children:[(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#212529",fill:"currentColor",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"25",width:"25",style:{marginRight:"3px"},children:(0,j.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z",clipRule:"evenodd"})}),"Takes 5 minutes"]})]})]}),(0,j.jsx)("div",{className:"col-md-6 d-flex justify-content-center align-items-center",children:(0,j.jsx)("img",{src:"".concat("","/images/Tios/Learning-Tio.webp"),alt:"TIO illustration",className:"img-fluid-Typeform"})})]})}):(0,j.jsx)("header",{className:"App-header",children:(0,j.jsxs)("div",{className:"questionContainer",children:[(0,j.jsxs)("div",{className:"title",children:[(0,j.jsxs)("h2",{children:[(0,j.jsxs)("span",{className:"count",children:[t," \xa0"]}),"\xa0",(0,j.jsx)("span",{className:"page1-block h3",children:e.title})]}),e.subtext&&(0,j.jsx)("p",{className:"subtext",children:e.subtext})]}),"file"===e.type?(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"uploadcontainer",children:[(0,j.jsx)("input",{className:"uploadfield",type:"file",accept:".pdf, .doc, .docx",onChange:ge,multiple:!0}),(0,j.jsxs)("div",{className:"documentupload",children:[(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#7EA0D6",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",height:"75",width:"75",children:(0,j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})}),(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"choosefile mt-2",children:"Choose file"})," ","or"," ",(0,j.jsx)("div",{className:"draghere",children:"drag here"})]})]})]}),L.map((function(e,t){return(0,j.jsx)("div",{children:(0,j.jsxs)("p",{children:["Uploaded File ",t+1,": ",e.name," ",(0,j.jsx)("span",{onClick:function(){return function(e){var t=(0,i.Z)(L);t.splice(e,1),U(t)}(t)},style:{marginLeft:"5px",cursor:"pointer"},children:"\u274c"})]})},t)}))]}):"textarea"===e.type?(0,j.jsxs)("div",{children:[(0,j.jsx)(g.Z.TextArea,{placeholder:"Type your answer here...",name:e.id,id:t+1,className:"inputtypearea",onChange:ve,autoSize:{minRows:3,maxRows:6}}),(0,j.jsxs)("div",{className:"char-count",style:{color:le>200?"red":"inherit"},children:[le,"/200 characters"]})]}):(0,j.jsx)(g.Z,{placeholder:"Type your answer here...",name:e.id,id:t+1,className:"inputtypeform",onKeyDown:function(t){return ke(t,e.i)},onChange:ve}),(0,j.jsx)("br",{}),(0,j.jsx)("div",{id:"submit-box",children:t===y.length-1?(0,j.jsx)(v.ZP,{id:"submit-btn",onClick:je,disabled:le>200,className:le>200?"disabled-button":"",loading:H,style:{width:"100px"},children:H?"":"SUBMIT"}):(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,j.jsx)(v.ZP,{id:"enter-btn",onClick:function(){return ye("next",e.i)},children:"OK"}),!ae&&(0,j.jsxs)("span",{className:"press-enter",children:["press ",(0,j.jsx)("span",{className:"bold",children:"ENTER"})]}),(0,j.jsxs)("div",{className:"next-previous-buttons",children:[(0,j.jsx)(v.ZP,{className:"next-btn",onClick:function(){return ye("next",e.i)},style:{marginRight:"10px"},children:(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#ffffff",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",height:"100%",width:"100%",children:(0,j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}),(0,j.jsx)(v.ZP,{className:"next-btn",onClick:function(){return ye("previous",e.i)},children:(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:"#ffffff",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",height:"100%",width:"100%",children:(0,j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})})})]})]})})]})})},t)}))})]})};t.default=u.memo(k)}}]);
//# sourceMappingURL=315.dfa161d0.chunk.js.map