import{a as t}from"./jsx-runtime-03b4ddbf.js";import{A as v}from"./index-033cf86e.js";import{m as d}from"./motion-90200a2f.js";import{f as u}from"./forward-ref-8b7d2a6f.js";import{d as w,e as y}from"./factory-0b90ba06.js";import{a as A,t as F}from"./utils-ee8488cc.js";const P={enter:({transition:a,transitionEnd:e,delay:r,duration:m,enter:c}={})=>({opacity:1,transition:A(a==null?void 0:a.enter)(r,m),transitionEnd:e==null?void 0:e.enter,...c}),exit:({transition:a,transitionEnd:e,delay:r,duration:m,exit:c}={})=>({opacity:0,transition:F(a==null?void 0:a.exit)(r,m),transitionEnd:e==null?void 0:e.exit,...c})},_={initial:"exit",animate:"enter",exit:"exit",variants:P},k=u(({unmountOnExit:a,isOpen:e,transition:r,transitionEnd:m,delay:c,duration:o,className:f,...x},p)=>{const l=e||a?"enter":"exit",s={transition:r,transitionEnd:m,delay:c,duration:o};e=a?e&&a:!0;const i={w:"100%"};return t(v,{custom:s,children:e?t(w.div,{as:d.div,ref:p,className:y("ui-fade",f),custom:s,..._,animate:l,__css:i,...x}):null})});export{k as F,_ as f};
//# sourceMappingURL=fade-1fb4fbf5.js.map