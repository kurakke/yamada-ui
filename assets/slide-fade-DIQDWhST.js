import{j as l}from"./jsx-runtime-CKrituN3.js";import{u as p}from"./index-BH_-S3fu.js";import{A as R}from"./index-_tcQm2Fk.js";import{M as S}from"./motion-CQQhr11g.js";import{f as _}from"./forward-ref-DuAegr0M.js";import{c as h}from"./factory-Dr9dj2_3.js";import{t,a as v}from"./utils-Dw1cHWxn.js";const N={initial:({offsetX:c,offsetY:e,transition:f,transitionEnd:m,delay:x,duration:s,initial:o})=>({opacity:0,x:c,y:e,transition:t(f==null?void 0:f.exit)(x,s),transitionEnd:m==null?void 0:m.exit,...o}),enter:({transition:c,transitionEnd:e,delay:f,duration:m,enter:x}={})=>({opacity:1,x:0,y:0,transition:v(c==null?void 0:c.enter)(f,m),transitionEnd:e==null?void 0:e.enter,...x}),exit:({offsetX:c,offsetY:e,reverse:f,transition:m,transitionEnd:x,delay:s,duration:o,exit:r}={})=>({opacity:0,transition:t(m==null?void 0:m.exit)(s,o),...f?{x:c,y:e,transitionEnd:x==null?void 0:x.exit}:{transitionEnd:{x:c,y:e,...x==null?void 0:x.exit}},...r})},V={initial:"exit",animate:"enter",exit:"exit",variants:N},B=_(({unmountOnExit:c,isOpen:e,offsetX:f=0,offsetY:m=8,reverse:x=!0,transition:s,transitionEnd:o,delay:r,duration:y,className:u,...j},w)=>{const A=e||c?"enter":"exit",F=p(f),M=p(m),a={offsetX:F,offsetY:M,reverse:x,transition:s,transitionEnd:o,delay:r,duration:y};e=c?e&&c:!0;const P={w:"100%"};return l.jsx(R,{custom:a,children:e?l.jsx(S,{ref:w,className:h("ui-slide-fade",u),custom:a,...V,animate:A,__css:P,...j}):null})});export{B as S,V as s};
