"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[965],{7915:function(e,s,t){t.r(s);var a=t(9439),r=t(2791),n=t(673),o=t(5485),l=t(2481),c=t(184);s.default=function(){var e=(0,r.useState)(null),s=(0,a.Z)(e,2),t=s[0],i=s[1],d=(0,r.useState)(""),u=(0,a.Z)(d,2),m=u[0],h=u[1],p=(0,r.useState)(""),f=(0,a.Z)(p,2),x=f[0],w=f[1],v=(0,r.useState)(""),g=(0,a.Z)(v,2),j=g[0],N=g[1],b=(0,r.useState)(""),y=(0,a.Z)(b,2),L=(y[0],y[1]),U=(0,r.useState)(""),R=(0,a.Z)(U,2),P=(R[0],R[1]),C=(0,r.useState)(""),S=(0,a.Z)(C,2),Z=S[0],I=S[1],E=(0,r.useState)(""),k=(0,a.Z)(E,2),z=k[0],F=k[1],J=(0,r.useState)(""),A=(0,a.Z)(J,2),D=A[0],M=A[1],O=(0,r.useState)(!1),Q=(0,a.Z)(O,2),T=Q[0],W=Q[1],_=(0,r.useState)(""),H=(0,a.Z)(_,2),K=H[0],$=H[1],q=(0,r.useState)(""),B=(0,a.Z)(q,2),G=B[0],V=B[1];(0,r.useEffect)((function(){var e=function(){W(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,r.useEffect)((function(){var e=n.I8.onAuthStateChanged((function(e){if(e){i(e);var s=e.displayName.split(" ");L(s[0]||""),P(s[1]||"");var t=e.uid,a=(0,l.JU)(n.RZ,"userProfiles",t);(0,l.QT)(a).then((function(e){if(e.exists()){var s=e.data();s.customURL&&(M(s.customURL),localStorage.setItem("customURL",s.customURL))}})).catch((function(e){console.error("Error fetching custom URL: ",e)}))}else i(null),L(""),P("")})),s=localStorage.getItem("customURL");return s&&M(s),function(){e()}}),[]);var X=function(){if(""===D)return console.error("Custom URL is empty."),void V("Custom URL cannot be empty.");var e=D.toLowerCase(),s=(0,l.hJ)(n.RZ,"userProfiles"),a=(0,l.IO)(s,(0,l.ar)("customURL","==",e));(0,l.PL)(a).then((function(s){if(s.size>0)V("Custom URL is already taken. Please choose another one."),$("");else{var a=t.uid,r=(0,l.JU)(n.RZ,"userProfiles",a);(0,l.r7)(r,{customURL:e}).then((function(){console.log("Custom URL updated successfully"),$("Custom URL updated successfully"),V("")})).catch((function(e){console.error("Error updating custom URL: ",e),V("Error updating custom URL."),$("")}))}})).catch((function(e){console.error("Error checking custom URL availability: ",e),V("Error checking custom URL availability."),$("")}))};return(0,c.jsxs)("div",{className:"profile-container",children:[(0,c.jsx)("div",{className:"profile-intro-section",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row align-items-center text-white",children:t&&(0,c.jsx)("div",{className:"welcome-text",children:(0,c.jsxs)("h1",{className:"display-3 fw-bold text-capitalize",children:["Welcome, ",(0,c.jsx)("span",{className:"email-h3",children:t.email}),"!"]})})})})}),(0,c.jsx)("div",{className:"profile-section",children:(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("div",{className:"my-4",children:[(0,c.jsx)("h3",{children:"My Settings"}),(0,c.jsx)("hr",{})]}),(0,c.jsx)("div",{className:"row mb-4 gx-4",children:(0,c.jsx)("div",{className:"col-xl-12 col-12",children:(0,c.jsx)("div",{className:"bg-white shadow-sm mb-4 card border-light",children:(0,c.jsxs)("div",{className:"card-body card-profile",children:[(0,c.jsxs)("div",{className:"row g-3",children:[(0,c.jsx)("h4",{className:"mb-4",children:"Custom URL"}),(0,c.jsxs)("div",{className:T?"":"input-group",children:[(0,c.jsx)("span",{className:"customurl",children:"https://www.tioassist.io/user/"}),(0,c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"yourHTML",value:D,onChange:function(e){return M(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&X()}})]})]}),(0,c.jsxs)("div",{className:"mt-3",children:[K&&(0,c.jsx)("p",{style:{color:"green",margin:"10px 0"},children:K}),G&&(0,c.jsx)("p",{style:{color:"red",margin:"10px 0"},children:G}),(0,c.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:X,children:"Update Custom URL"})]}),t&&"google.com"===t.providerData[0].providerId?null:(0,c.jsx)("form",{className:"file-upload",autoComplete:"new-password",children:(0,c.jsxs)("div",{className:"py-5 rounded mt-4",children:[(0,c.jsxs)("div",{className:"row g-3",children:[(0,c.jsx)("h4",{className:"mb-4",children:"Password"}),(0,c.jsxs)("div",{className:"col-md-4",children:[(0,c.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Old password *"}),(0,c.jsx)("input",{type:"password",className:"form-control form-control-lg",id:"exampleInputPassword1",value:m,onChange:function(e){return h(e.target.value)}})]}),(0,c.jsxs)("div",{className:"col-md-4",children:[(0,c.jsx)("label",{htmlFor:"exampleInputPassword2",className:"form-label",children:"New password *"}),(0,c.jsx)("input",{type:"password",className:"form-control form-control-lg",id:"exampleInputPassword2",value:x,onChange:function(e){return w(e.target.value)}})]}),(0,c.jsxs)("div",{className:"col-md-8",children:[(0,c.jsx)("label",{htmlFor:"exampleInputPassword3",className:"form-label",children:"Confirm Password *"}),(0,c.jsx)("input",{type:"password",className:"form-control form-control-lg",id:"exampleInputPassword3",value:j,onChange:function(e){return N(e.target.value)}}),z&&(0,c.jsx)("div",{className:"text-success",children:z}),Z&&(0,c.jsx)("div",{className:"text-danger",children:Z})]})]}),(0,c.jsx)("div",{className:"mt-3",children:(0,c.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){if(""!==x||""!==j)if(x===j){var e="";if(x.length<8?e="Password must be more than 7 characters.":/[a-z]/.test(x)?/[A-Z]/.test(x)?/\d/.test(x)?/[@$!%*?&]/.test(x)||(e="Password must contain at least one special character."):e="Password must contain at least one digit.":e="Password must contain at least one uppercase letter.":e="Password must contain at least one lowercase letter.",e)I(e);else{var s=n.I8.currentUser;(0,o.gQ)(s,x).then((function(){F("Password updated successfully"),h(""),w(""),N(""),I("")})).catch((function(e){alert("Error updating password: "+e.message)}))}}else I("New password and confirm password don't match.");else I("Please type a new password.")},children:"Update Password"})})]})})]})})})})]})})]})}}}]);
//# sourceMappingURL=965.8845425e.chunk.js.map