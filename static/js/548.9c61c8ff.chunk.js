"use strict";(self.webpackChunkmy_react=self.webpackChunkmy_react||[]).push([[548],{1548:function(e,t,a){a.r(t);var s=a(4165),n=a(3433),r=a(5861),i=a(9439),c=a(2791),o=a(184);t.default=function(){var e=(0,c.useState)(""),t=(0,i.Z)(e,2),a=t[0],l=t[1],u=(0,c.useState)([]),d=(0,i.Z)(u,2),h=d[0],m=d[1],p=(0,c.useState)(!1),f=(0,i.Z)(p,2),x=f[0],b=f[1],g=(0,c.useState)(!1),v=(0,i.Z)(g,2),y=(v[0],v[1]),w=(0,c.useRef)(null),j=(0,c.useRef)(null),N=["I've got a fantastic recipe for you! How about trying a delicious spaghetti carbonara? Here are the ingredients...","Looking for a new job? Tailoring your resume and networking can significantly boost your job search. Would you like more tips on this?","Creating a beautiful landscape involves planning. Start with a rough sketch and consider elements like plants, pathways, and focal points. Need more guidance?","Could you share more details about the product you're searching for? That'll help me provide better assistance.","I'm sorry to hear that you're feeling overwhelmed. Let's work together to find ways to manage your workload.","Planning your trip to Paris, right? I'd love to recommend some attractions based on your interests!"],k=function(){var e=Math.floor(Math.random()*N.length);return N[e]},T=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,r,i,c,o,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a.trim()){e.next=2;break}return e.abrupt("return");case 2:t={text:a,type:"user"},m([].concat((0,n.Z)(h),[t])),l(""),y(!0),r=k(),m((function(e){return[].concat((0,n.Z)(e),[{text:"",type:"bot",isTyping:!0}])})),b(!0),i=function(e){return new Promise((function(t){return setTimeout(t,e)}))},c=(0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(25);case 2:m((function(e){return[].concat((0,n.Z)(e.slice(0,-1)),[{text:r.slice(0,t+1),type:"bot",isTyping:!0}])}));case 3:case"end":return e.stop()}}),e)})),o=0;case 12:if(!(o<r.length)){e.next=17;break}return e.delegateYield(c(o),"t0",14);case 14:o++,e.next=12;break;case 17:y(!1),(u=Z.current)&&(u.style.height="44px");case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){x&&w.current&&(w.current.scrollTop=w.current.scrollHeight)}),[h,x]);var Z=(0,c.useRef)(null),I=function(){var e=Z.current;e&&(e.style.height="44px",e.style.height="".concat(e.scrollHeight,"px"))};return(0,c.useEffect)((function(){I()}),[]),(0,o.jsxs)("section",{id:"Let's-Chat",className:"port-mobile",children:[(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row text-center mt-5",children:[(0,o.jsx)("h1",{className:"display-3 fw-bold text-capitalize",children:"Let's Chat"}),(0,o.jsx)("div",{className:"heading-line"})]})}),(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row pt-2 pb-2 mt-0 mb-3",children:[(0,o.jsx)("div",{className:"col-md-6 border-right",children:(0,o.jsx)("div",{className:"bg-white p-3",children:(0,o.jsx)("h2",{className:"fw-bold text-capitalize text-center",children:"Type in your question below"})})}),(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsx)("div",{className:"bg-white  text-start",children:(0,o.jsx)("p",{className:"fw-light",children:"We understand that AI might not always give the answer you need, we've been there. That's why we've teamed up with experts from all fields to get you the right answer in case you're doubting the AI or need more help."})})})]})}),(0,o.jsxs)("div",{className:"chat-container chatbox",children:[(0,o.jsx)("div",{className:"chat-history".concat(x?" visible":""),ref:w,children:h.map((function(e,t){return(0,o.jsxs)("div",{className:"chat-bubble-bot ".concat("user"===e.type?"user-sent-bot":"bot"),ref:t===h.length-1?j:null,children:["bot"===e.type&&(0,o.jsxs)("div",{className:"bot-message",children:[(0,o.jsx)("div",{className:"bot-avatar",children:(0,o.jsx)("img",{className:"bot-avatar",src:"".concat("","/images/arts/TIO.webp"),alt:"TIO-bot"})}),(0,o.jsxs)("div",{className:"bot-details",children:[(0,o.jsx)("div",{className:"bot-name",children:"TIO-bot"}),(0,o.jsx)("div",{className:"chat-text",children:e.text})]})]}),"bot"!==e.type&&(0,o.jsx)("div",{className:"chat-text",children:e.text})]},t)}))}),(0,o.jsxs)("div",{className:"d-flex align-items-end",id:"user-input",children:[(0,o.jsx)("textarea",{ref:Z,type:"text",placeholder:"Type a message...",value:a,onChange:function(e){l(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&T()},className:"chatbot-input no-scroll",id:"user-input",onInput:I}),(0,o.jsx)("button",{onClick:T,"aria-label":"Send Message",className:"user-input-button",children:(0,o.jsx)("i",{className:"fas fa-paper-plane"})})]})]})]})}}}]);
//# sourceMappingURL=548.9c61c8ff.chunk.js.map