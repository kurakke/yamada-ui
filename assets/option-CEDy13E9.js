import{j as y}from"./jsx-runtime-CKrituN3.js";import{u as De}from"./index-D14MGjlB.js";import{r as n}from"./index-CBqU2yxZ.js";import{c as Oe,a as je}from"./icon-BEP1qdzi.js";import{f as Q}from"./forward-ref-DuAegr0M.js";import{a as Re,R as Te,_ as _e,$ as ke,n as U,a4 as Ee,S as Le,l as Ae,e as Ne,J as Me,w as ce,h as Z,o as ye,M as q,L as ge,ae as He,Z as le,v as Be,u as V,c as $,f as Ge}from"./factory-Dr9dj2_3.js";import{b as Ke}from"./popover-content-gK4X-aUc.js";import{u as Ue}from"./index-BrWt32zn.js";import{c as Ve}from"./index-_TEmoDbG.js";import{u as We}from"./index-BdAshQZ6.js";import{u as $e}from"./index-Dy-Ysl8D.js";import{u as ze,g as Je}from"./form-control-Dowezunr.js";const Ye=s=>{var o;return He(s)&&!!((o=s==null?void 0:s.getAttribute("role"))!=null&&o.startsWith("select-item"))},{DescendantsContextProvider:Ct,useDescendantsContext:Se,useDescendants:Ze,useDescendant:qe}=Ve(),[bt,M]=Re({strict:!1,name:"SelectContext"}),ht=({placeholder:s,closeOnBlur:o=!0,closeOnEsc:a=!0,closeOnSelect:r=!0,placeholderInOptions:i=!0,omitSelectedValues:l=!1,maxSelectValues:u,isEmpty:f,placement:b="bottom-start",duration:h=.2,isOpen:S,defaultIsOpen:v,onOpen:_,onClose:I,optionProps:g,...d})=>{d=ze(d);const p=Te(d,Je({omit:["aria-readonly"]})),W=_e(d,ke),x=Ze(),[R,c]=n.useState(-1),[X,ee]=n.useState(!1),T=n.useRef(null),z=n.useRef(null),ae=n.useRef(null),H=n.useRef(new Set([])),[P,B]=Ue({value:d.value,defaultValue:d.defaultValue,onChange:d.onChange}),[K,E]=n.useState(void 0),A=R>-1,C=U(P),te=(C?!P.length:!P)&&!(s&&i),O=x.values(({node:e})=>C&&P.includes(e.dataset.value??"")).map(({index:e})=>e),L=x.enabledValues(({index:e})=>!O.includes(e)),se=n.useCallback(()=>{const e=setTimeout(()=>{const t=x.enabledFirstValue();if(t)if(!C||!l)c(t.index);else if(O.includes(t.index)){const k=L[0];c(k.index)}else c(t.index)});H.current.add(e)},[x,L,C,l,O]),ne=n.useCallback(()=>{const e=setTimeout(()=>{const t=x.enabledLastValue();if(t)if(!C||!l)c(t.index);else if(O.includes(t.index)){const k=L.reverse()[0];c(k.index)}else c(t.index)});H.current.add(e)},[x,L,C,l,O]),ie=n.useCallback(()=>{const e=setTimeout(()=>{const k=x.enabledValues().find(({node:j})=>C?P.includes(j.dataset.value??""):j.dataset.value===P);k&&c(k.index)});H.current.add(e)},[x,C,P]),J=n.useCallback(()=>{const e=setTimeout(()=>{const t=x.enabledNextValue(R);if(t)if(!C||!l)c(t.index);else if(O.includes(t.index)){const k=L.find(({index:j})=>t.index<j)??L[0];c(k.index)}else c(t.index)});H.current.add(e)},[x,L,R,C,l,O,c]),re=n.useCallback(()=>{const e=setTimeout(()=>{const t=x.enabledPrevValue(R);if(t)if(!C||!l)c(t.index);else if(O.includes(t.index)){const k=L.reverse().find(({index:j})=>j<t.index)??L[0];c(k.index)}else c(t.index)});H.current.add(e)},[x,L,R,C,l,O,c]),G=te||l?se:ie,xe=te||l?ne:ie,ue=n.useCallback((e,t=!0)=>{const j=x.values().filter(({node:F})=>F.dataset.value===e).map(({node:F,index:Y})=>{if(!(s&&i)||Y!==0){const oe=Array.from(F.children).find(pe=>pe.getAttribute("data-label")!==null);return(oe==null?void 0:oe.innerHTML)??""}else return});E(F=>C?(j.forEach(Y=>{U(F)&&F.includes(Y??"")?t&&(F=U(F)?F.filter(pe=>pe!==Y):void 0):F=[...U(F)?F:[],Y]}),F):j[0])},[x,C,s,i]),de=n.useCallback(e=>{B(t=>U(t)?t.includes(e)?t.filter(j=>j!==e):[...t,e]:e),ue(e)},[ue,B]),Pe=n.useCallback(e=>{e.stopPropagation(),B([]),E(void 0)},[E,B]),{isOpen:m,onOpen:me,onClose:w}=We({isOpen:S,defaultIsOpen:v,onOpen:_,onClose:I}),D=n.useCallback(()=>{p.disabled||p.readOnly||f||X||me()},[p,f,X,me]),fe=n.useCallback(()=>{let e=x.value(R);if("disabled"in((e==null?void 0:e.node.dataset)??{})&&(e=void 0),!e)return;const t=e.node.dataset.value??"";de(t),r&&w(),l&&J()},[r,x,R,l,de,w,J]),Ce=n.useCallback(()=>{m||(D(),G())},[m,G,D]),be=n.useCallback(()=>{m||(D(),G())},[m,G,D]),he=n.useCallback(e=>{const t=Ee(e);Le(T.current,t)||o&&m&&w()},[o,m,w]),ve=n.useCallback(e=>{if(e.key===" "&&(e.key=e.code),p.disabled||p.readOnly)return;const k={ArrowDown:A?()=>J():m?void 0:le(D,G),ArrowUp:A?()=>re():m?void 0:le(D,xe),Space:A?fe:m?void 0:le(D,G),Enter:A?fe:m?void 0:le(D,G),Home:m?se:void 0,End:m?ne:void 0,Escape:a?w:void 0}[e.key];k&&(e.preventDefault(),e.stopPropagation(),k())},[p.disabled,p.readOnly,A,m,D,G,xe,fe,se,ne,a,w,J,re]);$e({ref:T,handler:w,enabled:m&&o}),n.useEffect(()=>{if(!C||!l&&Ae(u))return;const e=P.length>0&&P.length===x.count(),t=P.length===u;e||t?(w(),ee(!0)):ee(!1)},[l,P,x,C,w,u]),Ne(()=>{m||c(-1)},[m]),Me(()=>{H.current.forEach(e=>clearTimeout(e)),H.current.clear()});const Ie=n.useCallback(e=>({matchWidth:!0,...d,...e,isOpen:m,onOpen:D,onClose:w,placement:b,duration:h,trigger:"never",closeOnButton:!1,closeOnBlur:o}),[h,o,w,D,b,d,m]),Fe=n.useCallback((e={},t=null)=>({ref:ce(T,t),...W[0],...e,...p,onClick:Z(e.onClick,d.onClick,Ce),onBlur:Z(e.onBlur,d.onBlur,he)}),[W,p,he,Ce,d]),we=n.useCallback((e={},t=null)=>({ref:ce(z,t),tabIndex:0,...ye(W[1],["value","defaultValue","onChange","aria-readonly"]),...e,"data-active":q(m),"data-placeholder":q(C?!(K!=null&&K.length):K===void 0),"aria-expanded":q(m),onFocus:Z(e.onFocus,d.onFocus,be),onKeyDown:Z(e.onKeyDown,d.onKeyDown,ve)}),[W,m,C,K,d,be,ve]);return{descendants:x,value:P,label:K,focusedIndex:R,placeholder:s,placeholderInOptions:i,omitSelectedValues:l,closeOnSelect:r,isOpen:m,containerRef:T,fieldRef:z,listRef:ae,optionProps:g,formControlProps:p,onChangeLabel:ue,onChange:de,onClear:Pe,onOpen:D,onClose:w,onFocusFirst:se,onFocusLast:ne,onFocusSelected:ie,onFocusNext:J,onFocusPrev:re,setFocusedIndex:c,getPopoverProps:Ie,getContainerProps:Fe,getFieldProps:we}},Qe=()=>{const{listRef:s,focusedIndex:o}=M(),a=Se(),r=n.useRef(-1),i=a.value(o);return n.useEffect(()=>{if(!s.current||!i||r.current===i.index)return;const u=s.current,f=i.node,b=u.clientHeight,h=u.scrollTop,S=h+b,v=f.clientHeight,_=f.offsetTop,I=_+v,g=h<=_&&I<=S,d=r.current<i.index;g||(I<=b?s.current.scrollTo({top:0}):d?s.current.scrollTo({top:I-b}):s.current.scrollTo({top:_+1})),r.current=i.index},[s,i]),{getListProps:n.useCallback((u={},f=null)=>({as:"ul",ref:ce(s,f),role:"select",tabIndex:-1,...u}),[s])}},Xe=({label:s,...o})=>{const{value:a,omitSelectedValues:r}=M(),i=U(a),l=Se(),u=l.values(),b=(i&&r?l.values(({node:g})=>a.includes(g.dataset.value??"")):[]).map(({index:g})=>g),S=!u.filter(({node:g,index:d})=>{var p;return((p=g.parentElement)==null?void 0:p.dataset.label)===s&&!b.includes(d)}).length,v=_e(o,ke),_=n.useCallback((g={},d=null)=>{const p={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};return{ref:d,...g,...v[0],style:S?p:void 0}},[v,S]),I=n.useCallback((g={},d=null)=>({ref:d,...g,...v[1],"data-label":s}),[v,s]);return{label:s,getContainerProps:_,getGroupProps:I}},et=(s,o)=>{const{fieldRef:a,value:r,placeholder:i,placeholderInOptions:l,omitSelectedValues:u,closeOnSelect:f,focusedIndex:b,optionProps:h,onChange:S,onChangeLabel:v,onFocusNext:_,onClose:I,setFocusedIndex:g}=M();let{icon:d,isDisabled:p,isFocusable:W,closeOnSelect:x,children:R,...c}={...h,...o};const X=!!p&&!W,ee=n.useRef(null),{index:T,register:z,descendants:ae}=qe({disabled:X}),P=ae.values().slice(0,T),B=U(r),E=!(B?!1:P.some(({node:N})=>N.dataset.value===(c.value??"")))&&(B?r.includes(c.value??""):(c.value??"")===r),A=T===b;i&&T>0&&l&&!c.value&&console.warn(`${B?"MultiSelect":"Select"}: If placeholders are present, All options must be set value. If want to set an empty value, either don't set the placeholder or set 'placeholderInOptions' to false.`);const C=n.useCallback(N=>{if(N.preventDefault(),N.stopPropagation(),p){a.current&&a.current.focus();return}if(!Ye(N.currentTarget)){a.current&&a.current.focus();return}g(T),S(c.value??""),a.current&&a.current.focus(),(x??f)&&I(),u&&_()},[p,g,T,S,c.value,a,x,f,I,u,_]);n.useEffect(()=>{E&&v(c.value??"",!1)},[c,E,v]);const te=n.useCallback((N={})=>{const O={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};return{ref:ce(ee,s,z),...ye(c,["value"]),...N,role:"select-item",tabIndex:-1,style:u&&E?O:void 0,"data-value":c.value??"","data-focus":q(A),"data-disabled":q(p),"aria-checked":ge(E),"aria-disabled":ge(p),onClick:Z(c.onClick,N.onClick,C)}},[c,p,A,E,u,C,s,z]);return{isSelected:E,isFocused:A,customIcon:d,children:R,getOptionProps:te}},tt=Q(({className:s,children:o,__css:a,...r},i)=>{const{styles:l}=M(),u={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",cursor:"pointer",...l.icon,...a},b=Be(o).map(h=>n.cloneElement(h,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return y.jsx(V.div,{ref:i,className:$("ui-select__icon",s),__css:u,...r,children:Ge(o)?b:y.jsx(Oe,{})})}),vt=({className:s,children:o,...a})=>{const r=n.useRef(null),{styles:i}=M(),l=a.disabled,u=De({ref:r,isDisabled:l,...a});return y.jsx(tt,{"aria-label":"Clear value",className:$("ui-select__clear-icon",s),__css:i.clearIcon,...u,children:o??y.jsx(je,{w:"0.5em",h:"0.5em"})})},gt=Q(({className:s,w:o,width:a,minW:r,minWidth:i,...l},u)=>{var S,v,_,I;const{styles:f}=M(),{getListProps:b}=Qe();o=o??a??((S=f.list)==null?void 0:S.w)??((v=f.list)==null?void 0:v.width),r=r??i??((_=f.list)==null?void 0:_.minW)??((I=f.list)==null?void 0:I.minWidth);const h={...f.list};return y.jsx(Ke,{className:$("ui-select__list",s),w:o,minW:r,__css:h,...b(l,u)})}),_t=Q(({className:s,color:o,h:a,height:r,minH:i,minHeight:l,children:u,...f},b)=>{const{styles:h}=M(),{label:S,getContainerProps:v,getGroupProps:_}=Xe(f);return a??(a=r),i??(i=l),y.jsxs(V.li,{className:$("ui-select__item","ui-select__item--group",s),__css:{w:"100%",h:"fit-content",color:o},...v(),children:[y.jsx(V.span,{className:"ui-select__item__group-label",__css:h.groupLabel,lineClamp:1,children:S}),y.jsx(V.ul,{..._({},b),className:"ui-select__item__group",__css:{h:a,minH:i,...h.group},children:u})]})}),kt=Q(({className:s,icon:o,...a},r)=>{const{styles:i}=M(),{isSelected:l,customIcon:u,children:f,getOptionProps:b}=et(r,a);o??(o=u);const h={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...i.item};return y.jsxs(V.li,{className:$("ui-select__item",s),__css:h,...b(),children:[o!==null?y.jsx(st,{opacity:l?1:0,children:o||y.jsx(nt,{})}):null,y.jsx(V.span,{style:{flex:1},"data-label":!0,children:f})]})}),st=Q(({className:s,...o},a)=>{const{styles:r}=M(),i={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...r.itemIcon};return y.jsx(V.span,{ref:a,className:$("ui-select__item__icon",s),__css:i,...o})}),nt=()=>y.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:y.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})});export{kt as O,Ct as S,_t as a,bt as b,tt as c,gt as d,M as e,vt as f,ht as u};
