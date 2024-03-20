import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as s}from"./index-CBqU2yxZ.js";import{u as de,C as pe}from"./index.esm-Dtxxx2aT.js";import{A as a}from"./alpha-slider-elOxtS1T.js";import{F as V}from"./form-control-BmY_7nGZ.js";import{T as t}from"./text-Dn1pavEi.js";import{C as he}from"./center-CDaMmzxb.js";import{B as j}from"./button-DKIDvKTK.js";import{V as Se}from"./stack-LIDZv1YA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-color-slider-CJDhgHKN.js";import"./index-C44IEXoh.js";import"./factory-jQ8alorc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-CN2YyMYN.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./theme-provider-C1GLE5Ir.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-DOSk5UmJ.js";import"./use-ripple-VGToOyRZ.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-BMD8dy6a.js";import"./loading-BXcVpft6.js";import"./index-NtJPCOwG.js";import"./index-cFajppJS.js";import"./index-BPVf-rP9.js";import"./icon-D5spqBhV.js";const Le={title:"Components / Forms / AlphaSlider",component:a},u=()=>e.jsx(a,{}),c=()=>e.jsx(a,{color:"#4387f4",defaultValue:.3}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"#4387f4",size:"sm",defaultValue:.3}),e.jsx(a,{color:"#895af6",size:"md",defaultValue:.6}),e.jsx(a,{color:"#3cc360",size:"lg",defaultValue:.9})]}),m=()=>{const[r,o]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",value:r,min:.3,max:.8,onChange:o})]})},d=()=>{const[r,o]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",value:r,step:.1,onChange:o})]})},p=()=>{const[r,o]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",value:r,step:.1,focusThumbOnChange:!1}),e.jsxs(he,{w:"full",gap:"md",children:[e.jsx(j,{isDisabled:r===0,onClick:()=>o(n=>n!==0?Math.round((n-.1)*10)/10:n),children:"-0.1"}),e.jsx(j,{isDisabled:r===1,colorScheme:"blue",onClick:()=>o(n=>n!==1?Math.round((n+.1)*10)/10:n),children:"+0.1"})]})]})},h=()=>e.jsx(a,{withShadow:!1}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"#4387f4",isDisabled:!0}),e.jsx(V,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(a,{color:"#4387f4"})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"#4387f4",isReadOnly:!0}),e.jsx(V,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(a,{color:"#4387f4"})})]}),f=()=>{const[r,o]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",value:r,onChange:o})]})},x=()=>{const[r,o]=s.useState(.5),[n,l]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r,", Start Value: ",n]}),e.jsx(a,{color:"#4387f4",value:r,onChange:o,onChangeStart:l})]})},C=()=>{const[r,o]=s.useState(.5),[n,l]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r,", End Value: ",n]}),e.jsx(a,{color:"#4387f4",value:r,onChange:o,onChangeEnd:l})]})},b=()=>{var w;const r={alphaSlider:.5},{control:o,handleSubmit:n,watch:l,formState:{errors:F}}=de({defaultValues:r}),me=v=>console.log("submit:",v);return console.log("watch:",l()),e.jsxs(Se,{as:"form",onSubmit:n(me),children:[e.jsx(V,{isInvalid:!!F.alphaSlider,label:"Pick color",errorMessage:(w=F.alphaSlider)==null?void 0:w.message,children:e.jsx(pe,{name:"alphaSlider",control:o,rules:{max:{value:.5,message:"The maximum value is 0.5."}},render:({field:v})=>e.jsx(a,{color:"#4387f4",...v})})}),e.jsx(j,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var A,T,D;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <AlphaSlider />;
}`,...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var k,M,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <AlphaSlider color="#4387f4" defaultValue={0.3} />;
}`,...(y=(M=c.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var E,P,O;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider color="#4387f4" size="sm" defaultValue={0.3} />
      <AlphaSlider color="#895af6" size="md" defaultValue={0.6} />
      <AlphaSlider color="#3cc360" size="lg" defaultValue={0.9} />
    </>;
}`,...(O=(P=i.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var z,B,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" value={value} min={0.3} max={0.8} onChange={onChange} />
    </>;
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var H,I,_;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" value={value} step={0.1} onChange={onChange} />
    </>;
}`,...(_=(I=d.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,G,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" value={value} step={0.1} focusThumbOnChange={false} />

      <Center w="full" gap="md">
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? Math.round((prev - 0.1) * 10) / 10 : prev)}>
          -0.1
        </Button>

        <Button isDisabled={value === 1} colorScheme="blue" onClick={() => setValue(prev => prev !== 1 ? Math.round((prev + 0.1) * 10) / 10 : prev)}>
          +0.1
        </Button>
      </Center>
    </>;
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,N;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <AlphaSlider withShadow={false} />;
}`,...(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var Q,U,W;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider color="#4387f4" isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <AlphaSlider color="#4387f4" />
      </FormControl>
    </>;
}`,...(W=(U=S.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider color="#4387f4" isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <AlphaSlider color="#4387f4" />
      </FormControl>
    </>;
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} />
    </>;
}`,...(re=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  const [startValue, onChangeStart] = useState<number>(0.5);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,te,le;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  const [endValue, onChangeEnd] = useState<number>(0.5);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(le=(te=C.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ue,ce,ie;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  type Data = {
    alphaSlider: number;
  };
  const defaultValues: Data = {
    alphaSlider: 0.5
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.alphaSlider} label="Pick color" errorMessage={errors.alphaSlider?.message}>
        <Controller name="alphaSlider" control={control} rules={{
        max: {
          value: 0.5,
          message: "The maximum value is 0.5."
        }
      }} render={({
        field
      }) => <AlphaSlider color="#4387f4" {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ie=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};const Ne=["basic","withDefaultValue","withSize","withMinMax","withStep","withFocusThumbOnChange","disabledShadow","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Ne as __namedExportsOrder,u as basic,f as customControl,Le as default,h as disabledShadow,S as isDisabled,g as isReadonly,C as onChangeEnd,x as onChangeStart,b as reactHookForm,c as withDefaultValue,p as withFocusThumbOnChange,m as withMinMax,i as withSize,d as withStep};
