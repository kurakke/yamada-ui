import{a as n,F as l,j as s}from"./jsx-runtime-b08f8875.js";import{c as p}from"./factory-2d442159.js";import{T as e}from"./text-c7eceae7.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./forward-ref-cf7188bd.js";import"./use-component-style-b6002d28.js";import"./theme-provider-78d359c6.js";const E={title:"Hooks / useAsync"},r=()=>{const{loading:c,error:o,value:m}=p(async()=>new Promise((d,u)=>{setTimeout(()=>{Math.random()>.5?d("✌️"):u(new Error("A pseudo random error occurred"))},3e3)}),[]);return n(l,{children:c?n(e,{children:"Loading..."}):o?s(e,{children:["Error: ",o.message]}):s(e,{children:["Value: ",m]})})};var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    loading,
    error,
    value
  } = useAsync(async () => new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("✌️");
      } else {
        reject(new Error("A pseudo random error occurred"));
      }
    }, 3000);
  }), []);
  return <>
      {loading ? <Text>Loading...</Text> : error ? <Text>Error: {error.message}</Text> : <Text>Value: {value}</Text>}
    </>;
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const w=["basic"];export{w as __namedExportsOrder,r as basic,E as default};
//# sourceMappingURL=use-async.stories-7079bd6e.js.map