import{j as s}from"./jsx-runtime-CKrituN3.js";import{u as te}from"./index-BkNYl02X.js";import{u as x}from"./index-DpwUyg2B.js";import{u as re}from"./index-BnMDVB4r.js";import{r as o}from"./index-CBqU2yxZ.js";import{A as se}from"./index-_tcQm2Fk.js";import{P as ne}from"./container-portal-BaYItYzY.js";import{m as ie}from"./motion-JgkBPv6g.js";import{s as f}from"./slide-fade-DVJLEYao.js";import{s as ce}from"./scale-fade-BadkkXn8.js";import{f as le}from"./forward-ref-DuAegr0M.js";import{a as ae}from"./use-component-style-DOSk5UmJ.js";import{o as ue}from"./theme-provider-C1GLE5Ir.js";import{y as F,z,w as me,h as m,o as I,u as A,a as fe}from"./factory-jQ8alorc.js";const pe=(l="scale",p)=>{const n={reverse:!0,duration:p,enter:{visibility:"visible"},transitionEnd:{exit:{visibility:"hidden"}}};switch(l){case"scale":return{...ce,custom:{...n,scale:.95}};case"top":return{...f,custom:{...n,offsetY:-16}};case"right":return{...f,custom:{...n,offsetX:16}};case"left":return{...f,custom:{...n,offsetX:-16}};case"bottom":return{...f,custom:{...n,offsetY:16}}}},Oe=le(({closeOnPointerDown:l,zIndex:p,portalProps:n,withPortal:N=!0,...W},B)=>{const[g,S]=ae("Tooltip",W),{className:X,children:h,label:b,placement:Y,modifiers:_,gutter:K,offset:L,openDelay:y=0,closeDelay:C=0,isDisabled:P,closeOnClick:T,closeOnScroll:M,closeOnMouseDown:q,closeOnEsc:G=!0,animation:k,duration:H,...w}=ue(S);l=q;const{isOpen:t,onOpen:D,onClose:E}=te(w),i=o.useRef(null),c=o.useRef(),a=o.useRef(),{referenceRef:O,getPopperProps:J,transformOrigin:Q}=re({enabled:t,placement:Y,modifiers:_,gutter:K,offset:L}),u=o.useCallback(()=>{a.current&&(clearTimeout(a.current),a.current=void 0),E()},[E]),d=o.useCallback(()=>{if(!P&&!c.current){t&&u();const e=F(i.current);c.current=e.setTimeout(D,y)}},[P,t,y,u,D]),r=o.useCallback(()=>{c.current&&(clearTimeout(c.current),c.current=void 0);const e=F(i.current);a.current=e.setTimeout(u,C)},[C,u]),j=o.useCallback(()=>t&&T?r():void 0,[t,T,r]),R=o.useCallback(()=>t&&l?r():void 0,[t,l,r]),U=o.useCallback(e=>t&&e.key==="Escape"?r():void 0,[t,r]);x(()=>z(i.current),"keydown",e=>G?U(e):void 0),x(()=>z(i.current),"scroll",()=>t&&M?u():void 0),x(()=>i.current,"pointerleave",r),o.useEffect(()=>()=>{clearTimeout(c.current),clearTimeout(a.current)},[]);const V=o.useCallback((e={},ee=null)=>({...e,ref:me(i,ee,O),onPointerEnter:m(e.onPointerEnter,oe=>oe.pointerType!=="touch"?d():void 0),onClick:m(e.onClick,j),onPointerDown:m(e.onPointerDown,R),onFocus:m(e.onFocus,d),onBlur:m(e.onBlur,r)}),[O,j,R,d,r]),v=o.Children.only(h),Z=o.cloneElement(v,V(v.props,v.ref)),$={position:"relative",...I(g,["zIndex"])};return b?s.jsxs(s.Fragment,{children:[Z,s.jsx(se,{children:t?s.jsx(ne,{isDisabled:!N,...n,children:s.jsx(A.div,{...J(),zIndex:p??g.zIndex,pointerEvents:"none",children:s.jsx(A.div,{as:ie.div,ref:B,className:fe("ui-tooltip",X),style:{transformOrigin:Q},...k!=="none"?pe(k,H):{},initial:"exit",animate:t?"enter":"exit",exit:"exit",__css:$,...I(w,["isOpen","defaultIsOpen","onOpen","onClose"]),children:b})})}):null})]}):s.jsx(s.Fragment,{children:h})});export{Oe as T};
