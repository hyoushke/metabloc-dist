import{r as s,j as e}from"./jsx-runtime-69245957.js";import{u as T,a as R,L as S}from"./app.component-6d006f2e.js";import{u as E,M as I,m as a,B as N}from"./messages-list.component-a450e2e7.js";import{c as r,I as C}from"./image.component-49f87f86.js";import"./index-a1d73baa.js";import"./index-05b9da0c.js";const k={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{staggerChildren:.1}}},D={hidden:{y:20,opacity:.5},visible:{y:[0,-5,0],opacity:1,transition:{duration:.5,repeat:Number.POSITIVE_INFINITY,repeatDelay:.5}}},H=64,L=184,P=()=>{const o={height:"40px",display:"block",backgroundColor:"#e9ffbc",color:"#a3a692",padding:"10px",minWidth:"200px",borderRadius:"5px 5px 0 0",textTransform:"uppercase",textAlign:"center"},g={backgroundColor:"#c9f64b",color:"#606358",fontWeight:"bold"},{loading:n,messages:c,isAuth:M}=T(),[l,d]=s.useState(""),{sendMessage:f}=E(),m=R(),u=!0,x=s.useRef(null),i=s.useRef(null);function y(){i.current&&(i.current.style.height="inherit",i.current.style.height=`${Math.max(i.current.scrollHeight,H)}px`)}function b(){localStorage.getItem(S.accessToken)||m("/auth")}function v(){setTimeout(()=>{var t,h;(h=x.current)==null||h.scrollTo({top:(t=x.current)==null?void 0:t.scrollHeight,behavior:"smooth"})},100)}function p(){l&&(f(l),d(""))}function j(t){t.preventDefault(),p()}function w(t){!t.shiftKey&&t.key==="Enter"&&(t.preventDefault(),p())}s.useEffect(b,[]),s.useEffect(v,[c]),s.useLayoutEffect(y,[l]);const A="assets/robot-sm.webp";return e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",gap:"10px",padding:"0 20px 20px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"126px",position:"relative"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"20px",marginLeft:"20px",bottom:"0"},children:[e.jsx("img",{src:"/assets/logo.png",alt:"Logo",style:{width:"120px",marginRight:"20px"}}),e.jsxs("div",{style:{display:"flex",gap:"4px",position:"relative",bottom:0},children:[e.jsx("a",{href:"#",style:o,children:"TASKS"}),e.jsx("a",{href:"#",style:{...o,...g},children:"MARKETING"}),e.jsx("a",{href:"#",style:o,children:"SALES"}),e.jsx("a",{href:"#",style:o,children:"ADVERTISEMENTS"})]})]}),e.jsx("div",{style:{display:"flex",alignItems:"center"},children:e.jsx("div",{style:{marginRight:"20px"},children:e.jsx("img",{src:"assets/profile.jpg",alt:"Profile",style:{width:"40px",borderRadius:"50%",marginRight:"10px"}})})})]}),e.jsxs("div",{id:"main",style:{flex:1,display:"flex",gap:"20px",paddingBottom:"20px",overflow:"hidden"},children:[e.jsx("div",{style:{flex:"66%",backgroundColor:"white",color:"black",borderRadius:"15px",marginLeft:"20px",boxShadow:"0 6px 8px rgba(0, 0, 0, 0.1)"},children:"Left Div (70%)"}),e.jsxs("div",{id:"chatbox",style:{flex:"34%",display:"flex",flexDirection:"column",backgroundColor:"white",color:"black",borderRadius:"15px",marginRight:"20px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",position:"relative",paddingBottom:"10%"},children:[e.jsx("div",{id:"header",style:{paddingTop:"10px",color:"#1a96e9",fontSize:"25px",textAlign:"center",fontWeight:"bolder"},children:"CHAT WITH BLOC"}),e.jsx("div",{id:"content",className:"scrollbar",style:{flex:"1",width:"100%",color:"#1a96e9",overflowY:"auto",overflowX:"hidden"},children:e.jsx("div",{style:{display:"flex",flexDirection:"row",width:"100%"},children:e.jsxs("div",{className:"flex flex-1 flex-col justify-end gap-4",children:[e.jsx(I,{messages:c}),n&&e.jsxs(a.div,{animate:{scale:[0,1],transition:{duration:.5}},className:r("flex w-fit flex-row"),children:[e.jsx(N,{}),e.jsx(a.article,{style:{backgroundColor:"#c8f74"},className:"rounded-2xl p-4 text-bot-msg-text",children:e.jsx(a.ul,{className:"flex flex-row gap-2",variants:k,initial:"hidden",animate:"visible",children:[0,1,2].map(t=>e.jsx(a.li,{variants:D,className:"h-3 w-3 rounded-full bg-primary"},t))})})]})]})})}),e.jsxs("div",{style:{paddingTop:"10px",height:"15%",width:"100%",color:"#1a96e9",position:"absolute",bottom:"0",overflow:"hidden"},children:[e.jsx("img",{style:{display:"block",height:"100%",width:"auto"},src:A,alt:"xxx"}),e.jsx("div",{style:{top:"0",right:"0",position:"absolute",zIndex:"99999999",height:"100%",width:"80%",display:"block",paddingRight:"14px",marginRight:"4px",marginBottom:"4px"},children:e.jsxs(a.form,{onSubmit:j,animate:{scaleX:[0,1]},className:r("w-70 relative mt-6 rounded-2xl bg-msg-input-bg",!u),children:[e.jsx("textarea",{ref:i,onKeyDown:w,value:l,onChange:t=>d(t.target.value),className:`w-full resize-none 
                    bg-transparent 
                    p-4 
                    pr-20 text-msg-input-text placeholder:text-msg-input-placeholder focus:outline-none`,placeholder:"Your message",rows:1,style:{maxHeight:L}}),e.jsx("button",{type:"submit",disabled:n,className:r("absolute right-6 top-0 flex h-full items-center active:opacity-50",{"opacity-80 pointer-events-none":n}),children:e.jsx(C,{name:"send",className:"h-10 w-10 rotate-45"})})]})})]})]})]})]})})};export{P as ChatPage};
