"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[683],{5683:function(e,s,t){t.a(e,(async function(e,a){try{t.r(s);var r=t(9439),n=t(2791),o=t(5063),l=t(6635),c=t(2481),i=t(184),d=e([o]);function m(){var e=(0,n.useState)(null),s=(0,r.Z)(e,2),t=s[0],a=s[1],d=(0,n.useState)(""),u=(0,r.Z)(d,2),m=u[0],p=u[1],h=(0,n.useState)(""),x=(0,r.Z)(h,2),f=x[0],w=x[1],v=(0,n.useState)(""),g=(0,r.Z)(v,2),j=g[0],N=g[1],y=(0,n.useState)(""),b=(0,r.Z)(y,2),L=(b[0],b[1]),U=(0,n.useState)(""),R=(0,r.Z)(U,2),C=(R[0],R[1]),P=(0,n.useState)(""),S=(0,r.Z)(P,2),Z=S[0],I=S[1],E=(0,n.useState)(""),k=(0,r.Z)(E,2),z=k[0],A=k[1],F=(0,n.useState)(""),J=(0,r.Z)(F,2),D=J[0],M=J[1],O=(0,n.useState)(!1),Q=(0,r.Z)(O,2),T=Q[0],W=Q[1],_=(0,n.useState)(""),H=(0,r.Z)(_,2),K=H[0],$=H[1],q=(0,n.useState)(""),B=(0,r.Z)(q,2),G=B[0],V=B[1];(0,n.useEffect)((function(){var e=function(){W(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((function(){var e=o.I8.onAuthStateChanged((function(e){if(e){a(e);var s=e.displayName.split(" ");L(s[0]||""),C(s[1]||"");var t=e.uid,r=(0,c.JU)(o.RZ,"expertApplications",t);(0,c.QT)(r).then((function(e){if(e.exists()){var s=e.data();s.customURL&&(M(s.customURL),localStorage.setItem("customURL",s.customURL))}})).catch((function(e){console.error("Error fetching custom URL: ",e)}))}else a(null),L(""),C("")})),s=localStorage.getItem("customURL");return s&&M(s),function(){e()}}),[]);var X=function(){if(""===D)return console.error("Custom URL is empty."),void V("Custom URL cannot be empty.");var e=D.toLowerCase(),s=(0,c.hJ)(o.RZ,"expertApplications"),a=(0,c.IO)(s,(0,c.ar)("customURL","==",e));(0,c.PL)(a).then((function(s){if(s.size>0)V("Custom URL is already taken. Please choose another one."),$("");else{var a=t.uid,r=(0,c.JU)(o.RZ,"expertApplications",a);(0,c.r7)(r,{customURL:e}).then((function(){console.log("Custom URL updated successfully"),$("Custom URL updated successfully"),V("")})).catch((function(e){console.error("Error updating custom URL: ",e),V("Error updating custom URL."),$("")}))}})).catch((function(e){console.error("Error checking custom URL availability: ",e),V("Error checking custom URL availability."),$("")}))};return(0,i.jsxs)("div",{className:"profile-container",children:[(0,i.jsx)("div",{className:"profile-intro-section",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row align-items-center text-white",children:t&&(0,i.jsx)("div",{className:"welcome-text",children:(0,i.jsxs)("h1",{className:"display-3 fw-bold text-capitalize",children:["Welcome, ",(0,i.jsx)("span",{className:"email-h3",children:t.email}),"!"]})})})})}),(0,i.jsx)("div",{className:"profile-section",children:(0,i.jsxs)("div",{className:"content",children:[(0,i.jsxs)("div",{className:"my-4",children:[(0,i.jsx)("h3",{children:"My Settings"}),(0,i.jsx)("hr",{})]}),(0,i.jsx)("div",{className:"row mb-4 gx-4",children:(0,i.jsx)("div",{className:"col-xl-12 col-12",children:(0,i.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,i.jsxs)("div",{className:"card-body card-profile",children:[(0,i.jsxs)("div",{className:"row g-3",children:[(0,i.jsx)("h4",{className:"mb-4",children:"Custom URL"}),(0,i.jsxs)("div",{className:T?"":"input-group",children:[(0,i.jsx)("span",{className:"customurl",children:"https://www.tioassist.io/expert/"}),(0,i.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"yourHTML",value:D,onChange:function(e){return M(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&X()}})]})]}),(0,i.jsxs)("div",{className:"mt-3",children:[K&&(0,i.jsx)("p",{style:{color:"green",margin:"10px 0"},children:K}),G&&(0,i.jsx)("p",{style:{color:"red",margin:"10px 0"},children:G}),(0,i.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:X,children:"Update Custom URL"})]}),t&&"google.com"===t.providerData[0].providerId?null:(0,i.jsx)("form",{className:"file-upload",autoComplete:"new-password",children:(0,i.jsxs)("div",{className:"py-5 rounded mt-4",children:[(0,i.jsxs)("div",{className:"row g-3",children:[(0,i.jsx)("h4",{className:"mb-4",children:"Password"}),(0,i.jsxs)("div",{className:"col-md-4",children:[(0,i.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Old password *"}),(0,i.jsx)("input",{type:"password",className:"form-control form-control-lg",id:"exampleInputPassword1",value:m,onChange:function(e){return p(e.target.value)}})]}),(0,i.jsxs)("div",{className:"col-md-4",children:[(0,i.jsx)("label",{htmlFor:"exampleInputPassword2",className:"form-label",children:"New password *"}),(0,i.jsx)("input",{type:"password",className:"form-control form-control-lg",id:"exampleInputPassword2",value:f,onChange:function(e){return w(e.target.value)}})]}),(0,i.jsxs)("div",{className:"col-md-8",children:[(0,i.jsx)("label",{htmlFor:"exampleInputPassword3",className:"form-label",children:"Confirm Password *"}),(0,i.jsx)("input",{type:"password",className:"form-control form-control-lg",id:"exampleInputPassword3",value:j,onChange:function(e){return N(e.target.value)}}),z&&(0,i.jsx)("div",{className:"text-success",children:z}),Z&&(0,i.jsx)("div",{className:"text-danger",children:Z})]})]}),(0,i.jsx)("div",{className:"mt-3",children:(0,i.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){if(""!==f||""!==j)if(f===j){var e="";if(f.length<8?e="Password must be more than 7 characters.":/[a-z]/.test(f)?/[A-Z]/.test(f)?/\d/.test(f)?/[@$!%*?&]/.test(f)||(e="Password must contain at least one special character."):e="Password must contain at least one digit.":e="Password must contain at least one uppercase letter.":e="Password must contain at least one lowercase letter.",e)I(e);else{var s=o.I8.currentUser;(0,l.gQ)(s,f).then((function(){A("Password updated successfully"),p(""),w(""),N(""),I("")})).catch((function(e){alert("Error updating password: "+e.message)}))}}else I("New password and confirm password don't match.");else I("Please type a new password.")},children:"Update Password"})})]})})]})})})})]})})]})}o=(d.then?(await d)():d)[0],s.default=m,a()}catch(u){a(u)}}))}}]);
//# sourceMappingURL=683.4cd14a3b.chunk.js.map