import{j as u,F as j,a as oe}from"./jsx-runtime-29545a09.js";import{u as te}from"./index-8946f17c.js";import{a as g}from"./index-9451f140.js";import{u as re}from"./index-9ba5351a.js";import{r as o}from"./index-76fb7be0.js";import{A as se}from"./index-033cf86e.js";import{P as ne}from"./container-portal-ebea413f.js";import{m as ie}from"./motion-90200a2f.js";import{s as f}from"./slide-fade-d0484666.js";import{s as ce}from"./scale-fade-b8499830.js";import{f as le}from"./forward-ref-8b7d2a6f.js";import{u as ae}from"./use-component-style-fb710021.js";import{o as ue,j as I,g as z}from"./theme-f3d0af46.js";import{w as me,v as m,y as A,d as N,e as fe}from"./factory-3e6420ff.js";const pe=(c="scale",p)=>{const s={reverse:!0,duration:p,enter:{visibility:"visible"},transitionEnd:{exit:{visibility:"hidden"}}};switch(c){case"scale":return{...ce,custom:{...s,scale:.95}};case"top":return{...f,custom:{...s,offsetY:-16}};case"right":return{...f,custom:{...s,offsetX:16}};case"left":return{...f,custom:{...s,offsetX:-16}};case"bottom":return{...f,custom:{...s,offsetY:16}}}},Ee=le(({closeOnPointerDown:c,zIndex:p,...s},W)=>{const[h,B]=ae("Tooltip",s),{className:S,children:b,label:y,placement:X,modifiers:Y,gutter:_,offset:K,openDelay:C=0,closeDelay:P=0,isDisabled:T,closeOnClick:k=!0,closeOnScroll:L,closeOnMouseDown:M,closeOnEsc:q=!0,animation:w,duration:G,...x}=ue(B);c=M;const{isOpen:t,onOpen:O,onClose:D}=te(x),n=o.useRef(null),i=o.useRef(),l=o.useRef(),{referenceRef:E,getPopperProps:H,transformOrigin:J}=re({enabled:t,placement:X,modifiers:Y,gutter:_,offset:K}),a=o.useCallback(()=>{l.current&&(clearTimeout(l.current),l.current=void 0),D()},[D]),d=o.useCallback(()=>{if(!T&&!i.current){a();const e=I(n.current);i.current=e.setTimeout(O,C)}},[T,C,a,O]),r=o.useCallback(()=>{i.current&&(clearTimeout(i.current),i.current=void 0);const e=I(n.current);l.current=e.setTimeout(a,P)},[P,a]),R=o.useCallback(()=>t&&k?r():void 0,[t,k,r]),F=o.useCallback(()=>t&&c?r():void 0,[t,c,r]),Q=o.useCallback(e=>t&&e.key==="Escape"?r():void 0,[t,r]);g(()=>z(n.current),"keydown",e=>q?Q(e):void 0),g(()=>z(n.current),"scroll",()=>t&&L?a():void 0),g(()=>n.current,"pointerleave",r),o.useEffect(()=>()=>{clearTimeout(i.current),clearTimeout(l.current)},[]);const U=o.useCallback((e={},$=null)=>({...e,ref:me(n,$,E),onPointerEnter:m(e.onPointerEnter,ee=>ee.pointerType!=="touch"?d():void 0),onClick:m(e.onClick,R),onPointerDown:m(e.onPointerDown,F),onFocus:m(e.onFocus,d),onBlur:m(e.onBlur,r)}),[E,R,F,d,r]),v=o.Children.only(b),V=o.cloneElement(v,U(v.props,v.ref)),Z={position:"relative",...A(h,["zIndex"])};return y?oe(j,{children:[V,u(se,{children:t?u(ne,{children:u(N.div,{...H(),zIndex:p??h.zIndex,pointerEvents:"none",children:u(N.div,{as:ie.div,ref:W,className:fe("ui-tooltip",S),style:{transformOrigin:J},...w!=="none"?pe(w,G):{},initial:"exit",animate:t?"enter":"exit",exit:"exit",__css:Z,...A(x,["isOpen","defaultIsOpen","onOpen","onClose"]),children:y})})}):null})]}):u(j,{children:b})});export{Ee as T};
//# sourceMappingURL=tooltip-d5c6986c.js.map