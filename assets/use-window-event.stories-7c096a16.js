import{a as o,F as p,j as s}from"./jsx-runtime-29545a09.js";import{r as u}from"./index-76fb7be0.js";import{u as c}from"./index-ab460512.js";import{K as f}from"./kbd-0754a14b.js";import{I as d}from"./input-5a79a778.js";import{T as l}from"./text-a84a994c.js";import"./_commonjsHelpers-de833af9.js";import"./factory-0893e977.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-aad79748.js";import"./theme-53967a8a.js";import"./form-control-8de414a9.js";const k={title:"Hooks / useWindowEvent"},t=()=>{const r=u.useRef(null);return c("keydown",e=>{var n;e.code==="KeyK"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),(n=r.current)==null||n.focus())}),o(p,{children:[o(l,{children:["Focus: ",s(f,{children:"Ctrl + K"})]}),s(d,{ref:r})]})};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const inputRef = useRef<HTMLInputElement>(null);
  useWindowEvent('keydown', ev => {
    if (ev.code === 'KeyK' && (ev.ctrlKey || ev.metaKey)) {
      ev.preventDefault();
      inputRef.current?.focus();
    }
  });
  return <>
      <Text>
        Focus: <Kbd>Ctrl + K</Kbd>
      </Text>
      <Input ref={inputRef} />
    </>;
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const W=["basic"];export{W as __namedExportsOrder,t as basic,k as default};
//# sourceMappingURL=use-window-event.stories-7c096a16.js.map