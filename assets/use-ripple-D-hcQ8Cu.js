import{j as p}from"./jsx-runtime-CKrituN3.js";import{A as d}from"./index-_tcQm2Fk.js";import{M as y}from"./motion-CQQhr11g.js";import{c as C,h as f,Y as R}from"./factory-Dr9dj2_3.js";import{r as h}from"./index-CBqU2yxZ.js";const j=(e,r,i)=>Math.min(Math.max(e,r),i),E=({className:e,ripples:r,onAnimationComplete:i,onClear:m,color:s="currentColor",style:u,isDisabled:x,...n})=>{if(x)return null;const o={rounded:"9999px",zIndex:"9"};return p.jsx(p.Fragment,{children:r.map(({key:t,x:a,y:c,size:l})=>{const g=j(.01*l,.2,l>100?.75:.5);return p.jsx(d,{mode:"popLayout",children:p.jsx(y,{as:"span",className:C("ui-ripple",e),initial:{transform:"scale(0)",opacity:.35},animate:{transform:"scale(2)",opacity:0},exit:{opacity:0},transition:{duration:g},bgColor:s,style:{position:"absolute",transformOrigin:"center",pointerEvents:"none",left:a,top:c,width:`${l}px`,height:`${l}px`,...u},__css:o,...n,onAnimationComplete:f(i,()=>m(t))})},t)})})},b=({disabled:e,isDisabled:r,...i}={})=>{const[m,s]=h.useState([]),u=h.useCallback(n=>{if(e||r)return s([]);const o=n.currentTarget,t=Math.max(o.clientWidth,o.clientHeight),a=o.getBoundingClientRect();s(c=>[...c,{key:R(c.length.toString()),size:t,x:n.clientX-a.x-t/2,y:n.clientY-a.y-t/2}])},[e,r]),x=h.useCallback(n=>{s(o=>o.filter(t=>t.key!==n))},[]);return{ripples:m,onPointerDown:f(u,i.onPointerDown),onClear:x}};export{E as R,b as u};
