"use strict";(self.webpackChunkloft=self.webpackChunkloft||[]).push([[531],{531:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(1413),s=r(15861),i=r(29439),l=r(87757),a=r.n(l),o=r(47313),d=r(31881),u=r.n(d),x=r(69172),c=r(2360),h=r(74511),p=r(64153),m=r(90841),j=r(44415),b=r(12520),f=r(49056),v=r(16106),g=r(31554),I=r(75627),Z=r(46417);function S(){var e=(0,o.useState)(null),t=(0,i.Z)(e,2),r=t[0],l=t[1],d=(0,o.useState)(null),S=(0,i.Z)(d,2),w=S[0],y=S[1],q=(0,o.useState)(!1),C=(0,i.Z)(q,2),W=C[0],k=C[1],B=(0,o.useState)(!1),E=(0,i.Z)(B,2),F=(E[0],E[1],(0,h.pm)()),N=(0,I.cI)(),X=N.register,z=N.handleSubmit,_=(0,p.qY)(),O=_.isOpen,L=_.onOpen,P=_.onClose,A=function(){var e=(0,s.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,u().post("".concat((0,x.Z)(),"/admin/user_register"),t,{headers:{authorization:"Bearer ".concat((0,c.Z)())}});case 4:(r=e.sent).data.error?F({position:"top",title:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!",description:r.data.error,status:"error",duration:3e3,isClosable:!0}):(document.getElementById("name").value="",document.getElementById("username").value="",document.getElementById("email").value="",document.getElementById("status").value="",l(r.data.email),y(r.data.password),L()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),F({position:"top",title:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!",description:e.t0,status:"error",duration:3e3,isClosable:!0});case 11:k(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,Z.jsxs)(m.xu,{children:[(0,Z.jsx)(m.X6,{size:"2xl",children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"}),(0,Z.jsxs)(m.xu,{maxW:"3xl",mt:"20px",borderWidth:"1px",style:{boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.01),0px 2px 4px -1px rgba(0, 0, 0, 0.06)"},borderRadius:"lg",bgColor:"white",children:[(0,Z.jsxs)(m.xu,{m:"40px",children:[(0,Z.jsx)(m.xv,{fontSize:"xl",fontWeight:"bold",mb:"20px",children:"\u041d\u043e\u0432\u044b\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),(0,Z.jsxs)("form",{onSubmit:z(A),children:[(0,Z.jsxs)(m.MI,{columns:[1,2],spacing:"15px",children:[(0,Z.jsxs)(j.NI,{children:[(0,Z.jsx)(j.lX,{fontWeight:"bold",htmlFor:"name",children:"* \u0418\u043c\u044f"}),(0,Z.jsx)(b.Input,(0,n.Z)({id:"name",type:"text",required:"required"},X("name")))]}),(0,Z.jsxs)(j.NI,{children:[(0,Z.jsx)(j.lX,{fontWeight:"bold",htmlFor:"username",children:"* \u041b\u043e\u0433\u0438\u043d"}),(0,Z.jsx)(b.Input,(0,n.Z)({id:"username",type:"text",required:"required"},X("username")))]}),(0,Z.jsxs)(j.NI,{children:[(0,Z.jsx)(j.lX,{fontWeight:"bold",htmlFor:"email",children:"* Email"}),(0,Z.jsx)(b.Input,(0,n.Z)({id:"email",type:"email",required:"required"},X("email")))]}),(0,Z.jsx)(j.NI,{children:(0,Z.jsxs)(j.NI,{children:[(0,Z.jsx)(j.lX,{fontWeight:"bold",htmlFor:"status",children:"* \u0421\u0442\u0430\u0442\u0443\u0441"}),(0,Z.jsxs)(f.Ph,(0,n.Z)((0,n.Z)({id:"status",required:"required",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"},X("status")),{},{children:[(0,Z.jsx)("option",{value:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),(0,Z.jsx)("option",{value:"admin",children:"\u0410\u0434\u043c\u0438\u043d"})]}))]})})]}),(0,Z.jsxs)(j.NI,{children:[(0,Z.jsx)(j.lX,{fontWeight:"bold",htmlFor:"status",children:"\u042d\u0442\u043e \u043b\u0435\u0439\u0431\u043b?"}),(0,Z.jsxs)(f.Ph,(0,n.Z)((0,n.Z)({id:"status",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442"},X("isLabel")),{},{children:[(0,Z.jsx)("option",{value:"true",children:"\u0414\u0430"}),(0,Z.jsx)("option",{value:"false",children:"\u041d\u0435\u0442"})]}))]}),(0,Z.jsx)(v.zx,{w:"100%",mt:"20px",colorScheme:"teal",variant:"outline",_focus:{boxShadow:"none!important"},_active:{boxShadow:"none!important"},type:"submit",isLoading:W,children:"C\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]})]}),(0,Z.jsxs)(g.u_,{isOpen:O,onClose:P,children:[(0,Z.jsx)(g.ZA,{backdropFilter:"blur(5px)"}),(0,Z.jsxs)(g.hz,{children:[(0,Z.jsx)(g.xB,{children:"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),(0,Z.jsx)(g.ol,{}),(0,Z.jsx)(g.fe,{children:(0,Z.jsxs)(m.xv,{children:["\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0441\u043e\u0437\u0434\u0430\u043d:",(0,Z.jsx)("br",{}),(0,Z.jsx)("br",{}),"Email: ",r,(0,Z.jsx)("br",{}),"\u041f\u0430\u0440\u043e\u043b\u044c: ",w]})})]})]})]})]})}}}]);