import{u as ue}from"./index-BrWt32zn.js";import{u as le,a as ie,b as me}from"./index-B5s4Fp6m.js";import{r}from"./index-CBqU2yxZ.js";import{u as fe,f as O,g as de}from"./form-control-Dowezunr.js";import{g as q,e as pe,o as be,w as R,R as I,M as ge,h as D}from"./factory-Dr9dj2_3.js";import{r as H,c as F,v as ve,p as Ce}from"./number-49BHn0Cl.js";const ye=({focusThumbOnChange:d=!0,...V})=>{d||(V.isReadOnly=!0);let{id:E,name:A,value:X,defaultValue:G,min:c=0,max:l,step:T=1,onChange:J,onChangeStart:Q,onChangeEnd:W,thumbColor:B,required:U,disabled:C,readOnly:h,...s}=fe(V);const Y=q(Q),S=q(W),[Z,w]=ue({value:X,defaultValue:G??c+(l-c)/2,onChange:J}),a=F(Z,c,l),$=ve(a,c,l),[K,j]=r.useState(!1),P=!(C||h),m=T||(l-c)/100,k=(l-c)/10,z=r.useRef(null),x=r.useRef(null),y=r.useRef(null),o=le({value:a,min:c,max:l,step:T,isInteractive:P,eventSource:null,focusThumbOnChange:d}),b=ie(y),_=r.useCallback(e=>{var N;if(!x.current)return;const{min:t,max:n,step:u}=o.current;o.current.eventSource="pointer";const{left:f,width:ae}=x.current.getBoundingClientRect(),{clientX:se}=((N=e.touches)==null?void 0:N[0])??e;let ce=(se-f)/ae,p=Ce(ce,t,n);return u&&(p=parseFloat(H(p,t,u))),p=F(p,t,n),p},[o]),L=e=>{const{value:t}=o.current,n=_(e);n!=null&&n!==t&&w(n)},ee=r.useCallback(()=>{const{focusThumbOnChange:e}=o.current;e&&setTimeout(()=>{var t;return(t=y.current)==null?void 0:t.focus()})},[o]),i=r.useCallback(e=>{const{isInteractive:t,min:n,max:u}=o.current;t&&(e=parseFloat(H(e,n,m)),e=F(e,n,u),w(e))},[w,o,m]),g=r.useCallback((e=m)=>i(a+e),[i,a,m]),v=r.useCallback((e=m)=>i(a-e),[i,a,m]),M=r.useCallback(e=>{const{min:t,max:n}=o.current,f={ArrowRight:()=>g(),ArrowUp:()=>g(),ArrowLeft:()=>v(),ArrowDown:()=>v(),PageUp:()=>g(k),PageDown:()=>v(k),Home:()=>i(t),End:()=>i(n)}[e.key];f&&(e.preventDefault(),e.stopPropagation(),f(e),o.current.eventSource="keyboard")},[i,o,v,g,k]);me(z,{onSessionStart:e=>{const{isInteractive:t,value:n}=o.current;t&&(j(!0),ee(),L(e),Y(n))},onSessionEnd:()=>{const{isInteractive:e,value:t}=o.current;e&&(j(!1),S(t))},onMove:e=>{const{isInteractive:t}=o.current;t&&L(e)}}),pe(()=>{const{eventSource:e,value:t}=o.current;e==="keyboard"&&S(t)},[a,S]);const te=r.useCallback((e={},t=null)=>{const{width:n}=b??{width:0},u={...e.style,...s.style,paddingInline:`${n/2}px`};return{...e,...be(s,["aria-readonly"]),ref:R(t,z),tabIndex:-1,style:u}},[s,b]),ne=r.useCallback((e={},t=null)=>({...I(s,O),...e,id:E,ref:t,type:"hidden",name:A,value:a,required:U,disabled:C,readOnly:h}),[C,E,A,h,U,s,a]),oe=r.useCallback((e={},t=null)=>({...I(s,de({omit:["aria-readonly"]})),...e,ref:R(t,x)}),[s]),re=r.useCallback((e={},t=null)=>{const n=$,{width:u}=b??{width:0},f={...e.style,position:"absolute",userSelect:"none",touchAction:"none",left:`calc(${n}% - ${u/2}px)`};return{"aria-label":"Slider thumb",bg:B??`hsl(${a}, 100%, 50%)`,...I(s,O),...e,ref:R(t,y),tabIndex:P&&d?0:void 0,role:"slider","aria-valuenow":a,"aria-valuemin":c,"aria-valuemax":l,"data-active":ge(K&&d),onKeyDown:D(e.onKeyDown,M),onFocus:D(e.onFocus,s.onFocus),onBlur:D(e.onBlur,s.onBlur),style:f}},[B,d,K,P,c,l,M,s,$,b,a]);return{value:a,getContainerProps:te,getTrackProps:oe,getInputProps:ne,getThumbProps:re}};export{ye as u};
