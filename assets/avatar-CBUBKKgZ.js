import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as C}from"./index-CBqU2yxZ.js";import{b as I}from"./icon-D5spqBhV.js";import{u as k}from"./use-image-CVdKPe1A.js";import{u as g,c as w,a as F,K as E,h as P}from"./factory-jQ8alorc.js";import{f as S}from"./forward-ref-DuAegr0M.js";import{u as M}from"./use-component-style-DOSk5UmJ.js";import{o as R}from"./theme-provider-C1GLE5Ir.js";const T=t=>e.jsxs(I,{viewBox:"0 0 128 128",color:["white","black"],width:"100%",height:"100%",className:"ui-avatar__icon",...t,children:[e.jsx("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),e.jsx("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),$=t=>{const a=t.trim().split(" "),s=a[0]??"",r=a.length>1?a[a.length-1]:"";return s&&r?`${s.charAt(0)}${r.charAt(0)}`:s.charAt(0)},B=({name:t,format:a=$,...s})=>{const o={...O().name};return e.jsx(g.div,{className:"ui-avatar__name",role:"img","aria-label":t,__css:o,...s,children:t?a(t):null})},[K,O]=w({strict:!1,name:"AvatarContext"}),U=S((t,a)=>{const[s,r]=M("Avatar",t),{className:o,src:c,srcSet:l,name:m,loading:n,alt:d,icon:u,ignoreFallback:f,referrerPolicy:x,borderRadius:i="9999px",rounded:h="9999px",onError:p,onLoad:A,crossOrigin:v,format:j,children:_,...b}=R(r),[L,N]=C.useState(!1),y={position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",flexShrink:0,textAlign:"center",textTransform:"uppercase",fontWeight:"medium",...s.container};return e.jsx(K,{value:s,children:e.jsxs(g.span,{ref:a,className:F("ui-avatar",o),"data-loaded":E(L),borderRadius:i,rounded:h,__css:y,...b,children:[e.jsx(W,{src:c,alt:d,srcSet:l,loading:n,borderRadius:i,rounded:h,onLoad:P(A,()=>N(!0)),onError:p,crossOrigin:v,format:j,name:m,icon:u,ignoreFallback:f,referrerPolicy:x}),_]})})}),W=({src:t,alt:a,srcSet:s,onError:r,onLoad:o,format:c,borderRadius:l,rounded:m,name:n,loading:d,icon:u=e.jsx(T,{}),ignoreFallback:f,crossOrigin:x,referrerPolicy:i})=>{const p=k({src:t,onLoad:o,onError:r,crossOrigin:x,ignoreFallback:f})==="loaded";if(!t||!p)return n?e.jsx(B,{name:n,format:c}):C.cloneElement(u,{role:"img"});const v={width:"100%",height:"100%",objectFit:"cover"};return e.jsx(g.img,{className:"ui-avatar__image",src:t,srcSet:s,alt:a??n,loading:d,referrerPolicy:i,borderRadius:l,rounded:m,__css:v})};export{U as A,O as u};
