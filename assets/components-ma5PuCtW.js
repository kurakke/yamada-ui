import{j as s,a}from"./jsx-runtime-TtYKBvr-.js";import{r as l}from"./index-IybTgENJ.js";import{u as n}from"./index-TmpB6G8N.js";import{U as c}from"./ui-provider-0EaMHHa0.js";import{C as m}from"./container-Q4P1AfUn.js";import{H as d,V as p}from"./stack-zD0uDDLM.js";import{B as f}from"./box-aVe7Qm1R.js";import{T as i}from"./text-pQ1s1BAG.js";import{j as g,n as h}from"./factory-APG2CWDq.js";const H=["primary","secondary","success","warning","danger","gray","neutral","red","rose","pink","flashy","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia"],P=({children:r})=>s(c,{children:s(C,{children:r})}),C=({children:r})=>{const{changeColorMode:e}=g(),o=n()?"dark":"light";return l.useEffect(()=>{e(o)},[o,e]),s(m,{children:r})},U=({name:r,colors:e})=>Object.entries(e[r]).map(([o,t])=>s(y,{name:r,hue:o,value:t},o)),y=({name:r,hue:e,value:o})=>{const t=n()?"dark":"light";return a(d,{children:[s(f,{bg:e?`${r}.${e}`:r,minW:"12",minH:"12",rounded:"md",boxShadow:"inner"}),a(p,{gap:"1",children:[a(i,{m:"0",fontWeight:"semibold",lineClamp:1,children:[r.charAt(0).toUpperCase()+r.slice(1)," ",e]}),s(i,{m:"0",lineClamp:1,children:h(o)?t==="light"?o[0]:o[1]:o})]})]},e)};export{y as C,P as J,U as a,H as c};