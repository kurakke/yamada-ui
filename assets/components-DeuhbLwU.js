import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as n}from"./index-CBqU2yxZ.js";import{u as i}from"./index-Bknck255.js";import{U as l}from"./ui-provider-BCiyXQbd.js";import{C as c}from"./container-C2BDaBtT.js";import{H as m,V as p}from"./stack-LIDZv1YA.js";import{B as d}from"./box-DTX5RwVd.js";import{T as a}from"./text-Dn1pavEi.js";import{j as x,n as f}from"./factory-jQ8alorc.js";const A=["primary","secondary","success","warning","danger","gray","neutral","red","rose","pink","flashy","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia"],E=({children:r})=>e.jsx(l,{children:e.jsx(g,{children:r})}),g=({children:r})=>{const{changeColorMode:s}=x(),o=i()?"dark":"light";return n.useEffect(()=>{s(o)},[o,s]),e.jsx(c,{children:r})},H=({name:r,colors:s})=>Object.entries(s[r]).map(([o,t])=>e.jsx(j,{name:r,hue:o,value:t},o)),j=({name:r,hue:s,value:o})=>{const t=i()?"dark":"light";return e.jsxs(m,{children:[e.jsx(d,{bg:s?`${r}.${s}`:r,minW:"12",minH:"12",rounded:"md",boxShadow:"inner"}),e.jsxs(p,{gap:"1",children:[e.jsxs(a,{m:"0",fontWeight:"semibold",lineClamp:1,children:[r.charAt(0).toUpperCase()+r.slice(1)," ",s]}),e.jsx(a,{m:"0",lineClamp:1,children:f(o)?t==="light"?o[0]:o[1]:o})]})]},s)};export{j as C,E as J,H as a,A as c};
