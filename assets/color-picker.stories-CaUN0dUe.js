import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as To,f as Ao}from"./fontawesome-icon-2vEb-bEa.js";import{r as s}from"./index-CBqU2yxZ.js";import{u as Go,C as Uo}from"./index.esm-Dtxxx2aT.js";import{u as Wo,C as Yo,E as Qo}from"./color-selector-DapIwzJR.js";import{C as Zo}from"./color-swatch-D0FzyVez.js";import{u as qo}from"./index-C44IEXoh.js";import{u as Jo}from"./index-BkNYl02X.js";import{u as Xo}from"./index-CZ22AcQ5.js";import{u as $o,g as es,F as Ee}from"./form-control-BmY_7nGZ.js";import{p as rs,P as os,a as ss,b as as}from"./popover-content-CCZCCddn.js";import{c as ts,Q as ns,Z as ls,_ as cs,o as Oo,a3 as is,R as us,e as Ye,w as Qe,h as x,K as Ze,u as je,a as ye,v as ps,f as ds}from"./factory-jQ8alorc.js";import{d as ms,c as qe,o as fs}from"./theme-provider-C1GLE5Ir.js";import{P as hs}from"./container-portal-BaYItYzY.js";import{f as ve}from"./forward-ref-DuAegr0M.js";import{u as Cs}from"./use-component-style-DOSk5UmJ.js";import{B as _e}from"./button-DKIDvKTK.js";import{V as bs}from"./stack-LIDZv1YA.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-D5spqBhV.js";import"./index-NtJPCOwG.js";import"./icon-button-DhtUz69D.js";import"./alpha-slider-elOxtS1T.js";import"./use-color-slider-CJDhgHKN.js";import"./index-CN2YyMYN.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./hue-slider-DlBltcHV.js";import"./input-D1IXIEew.js";import"./saturation-slider-CqS9w4B5.js";import"./index-BBGn-3wb.js";import"./index-rYLD436_.js";import"./index-DpwUyg2B.js";import"./index-BZtlHmlQ.js";import"./index-BnMDVB4r.js";import"./index-cFajppJS.js";import"./index-BPVf-rP9.js";import"./motion-JgkBPv6g.js";import"./slide-fade-DVJLEYao.js";import"./index-_tcQm2Fk.js";import"./motion-BMD8dy6a.js";import"./utils-E22qp_mS.js";import"./scale-fade-BadkkXn8.js";import"./close-button-BQItQjbS.js";import"./use-ripple-VGToOyRZ.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./loading-BXcVpft6.js";const[Ps,Re]=ts({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),Ss=({value:a,defaultValue:i,fallbackValue:c,defaultColor:l,onChange:p,onChangeStart:d,onChangeEnd:f,onSwatchClick:h,formatInput:m=C=>C,closeOnBlur:v=!0,closeOnEsc:E=!0,placement:F="bottom-start",duration:R=.2,isOpen:De,defaultIsOpen:Fe,onOpen:ze,onClose:Ie,allowInput:D=!0,closeOnSelectSwatch:O,format:w,swatchesLabel:V,swatches:B,swatchesColumns:N,withPicker:M,withChannel:H,withResult:L=!1,withColorSelectorEyeDropper:K=!1,colorSelectorVariant:T,colorSelectorSize:z,colorSelectorColorScheme:A,...u})=>{u=$o(u);const C=ns(u,es({omit:["aria-readonly"]})),{disabled:k,readOnly:g}=C,[G,U]=ls(Oo(u,[...rs]),[...cs,"aria-readonly"]),I=s.useRef(null),Vo=s.useRef(null),{supported:Bo,onOpen:Oe}=Wo(),[b,j]=qo({value:a,defaultValue:i,onChange:p}),_=s.useRef(w??ms(b??l??"")),W=s.useRef(!1),[Ve,y]=s.useState(b??""),{isOpen:t,onOpen:Be,onClose:Ne}=Jo({isOpen:De,defaultIsOpen:Fe,onOpen:ze,onClose:Ie}),Me=z==="full",P=s.useCallback(()=>{k||g||Be()},[Be,k,g]),S=s.useCallback(()=>{if(!t)return;const o=qe(b,c)(_.current);j(n=>!o||n===o?n:o),y(m(o??"")),Ne()},[_,t,j,Ne,b,m,y,c]),He=s.useCallback(()=>{t||P()},[t,P]),Le=s.useCallback(()=>{W.current=!0,!t&&P()},[t,P]),Ke=s.useCallback(()=>{W.current=!1},[]),Te=s.useCallback(o=>{const n=is(o);us(I.current,n)||v&&t&&S()},[v,t,S]),Ae=s.useCallback(o=>{if(o.key===" "&&(o.key=o.code),k||g)return;const We={Space:t?void 0:P,Enter:t?void 0:P,Escape:E?S:void 0}[o.key];We&&(o.preventDefault(),o.stopPropagation(),We())},[k,g,t,P,E,S]),Ge=s.useCallback(o=>{const n=o.target.value;y(m(n)),j(n)},[y,m,j]),Y=s.useCallback(o=>{j(o),setTimeout(()=>{W.current||y(m(o))})},[j,m]),Ue=s.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:n}=await Oe()??{};if(!n)return;Y(n)}catch{}},[Oe,Y]);Xo({ref:I,handler:S,enabled:t&&v}),Ye(()=>{if(!w||!b)return;_.current=w;const o=qe(b,c)(w);o&&(y(m(o)),j(o))},[w]),Ye(()=>{W.current||!a||y(m(a))},[a]);const No=s.useCallback(o=>({matchWidth:Me,...u,...o,isOpen:t,onOpen:P,onClose:S,placement:F,duration:R,trigger:"never",closeOnButton:!1}),[Me,R,S,P,F,u,t]),Mo=s.useCallback((o={},n=null)=>({ref:Qe(I,n),...G,...o,...C,onClick:x(o.onClick,u.onClick,He),onBlur:x(o.onBlur,u.onBlur,Te)}),[G,C,Te,He,u]),Ho=s.useCallback((o={},n=null)=>({ref:Qe(Vo,n),tabIndex:D?0:-1,...U,...o,style:{...o.style,...D?{}:{pointerEvents:"none"}},value:Ve,"data-active":Ze(t),"aria-expanded":Ze(t),onFocus:x(o.onFocus,u.onFocus,Le),onKeyDown:x(o.onKeyDown,u.onKeyDown,Ae),onChange:x(o.onChange,Ge),onBlur:x(o.onFocus,Ke)}),[D,U,Ve,t,u,Le,Ae,Ge,Ke]),Lo=s.useCallback((o={},n=null)=>({disabled:k,"aria-label":"Pick a color",...o,ref:n,style:{...o.style,pointerEvents:g?"none":void 0},onClick:x(o.onClick,Ue)}),[k,Ue,g]),Ko=s.useCallback(o=>({...C,...o,value:b,defaultValue:l,fallbackValue:c,onChange:Y,onChangeStart:d,onChangeEnd:f,onSwatchClick:x(h,O?S:void 0),format:_.current,withPicker:M,withChannel:H,withResult:L,withEyeDropper:K,swatchesLabel:V,swatches:B,swatchesColumns:N,variant:T,size:z,colorScheme:A}),[C,b,c,l,Y,d,f,h,S,O,_,M,H,L,K,V,B,N,A,z,T]);return{value:b,eyeDropperSupported:Bo,allowInput:D,getPopoverProps:No,getContainerProps:Mo,getFieldProps:Ho,getSelectorProps:Ko,getEyeDropperProps:Lo}},r=ve(({withSwatch:a=!0,...i},c)=>{const[l,p]=Cs("ColorPicker",{withSwatch:a,...i});let{className:d,children:f,withEyeDropper:h=!0,color:m,h:v,height:E,minH:F,minHeight:R,containerProps:De,inputProps:Fe,swatchProps:ze,eyeDropperProps:Ie,saturationSliderRef:D,saturationSliderProps:O,swatchesProps:w,hueSliderRef:V,hueSliderProps:B,alphaSliderRef:N,alphaSliderProps:M,channelsProps:H,channelProps:L,portalProps:K={isDisabled:!0},...T}=fs(Oo(p,["withSwatch"]));const{allowInput:z,eyeDropperSupported:A,getPopoverProps:u,getContainerProps:C,getFieldProps:k,getSelectorProps:g,getEyeDropperProps:G,...U}=Ss(T);v??(v=E),F??(F=R);const I={w:"100%",h:"fit-content",color:m,...l.container};return e.jsx(Ps,{value:{styles:l,...U},children:e.jsx(os,{...u(),children:e.jsxs(je.div,{className:ye("ui-color-picker",d),__css:I,...C(De),children:[e.jsxs(je.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:z?void 0:"pointer",...l.inner},children:[a?e.jsx(gs,{...ze}):null,e.jsx(ss,{children:e.jsx(ks,{h:v,minH:F,...k(Fe,c)})}),A&&h?e.jsx(xs,{...G(Ie)}):null]}),e.jsx(hs,{...K,children:e.jsx(as,{className:"ui-color-picker__popover",__css:{...l.list},children:e.jsx(Yo,{className:"ui-color-picker__picker",...g({saturationSliderRef:D,saturationSliderProps:O,swatchesProps:w,hueSliderRef:V,hueSliderProps:B,alphaSliderRef:N,alphaSliderProps:M,channelsProps:H,channelProps:L}),children:f})})})]})})})}),ks=ve(({className:a,h:i,minH:c,...l},p)=>{const{styles:d}=Re(),f={ps:"2rem",pe:"2rem",h:i,minH:c,display:"flex",alignItems:"center",...d.field};return e.jsx(je.input,{ref:p,className:ye("ui-color-picker__field",a),__css:f,...l})}),gs=ve(({className:a,...i},c)=>{const{value:l,styles:p}=Re(),d={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...p.swatch};return e.jsx(Zo,{ref:c,className:ye("ui-color-picker__swatch",a),__css:d,color:l,isRounded:!0,...i})}),xs=ve(({className:a,children:i,...c},l)=>{const{styles:p}=Re(),d={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...p.eyeDropper},h=ps(i).map(m=>s.cloneElement(m,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e.jsx(je.button,{ref:l,className:ye("ui-color-picker__eye-dropper",a),__css:d,...c,children:ds(i)?h:e.jsx(Qo,{className:"ui-color-picker__eye-dropper__icon"})})}),Pa={title:"Components / Forms / ColorPicker",component:r},Q=()=>e.jsx(r,{placeholder:"#4387f4"}),Z=()=>e.jsx(r,{defaultValue:"#4387f4ff"}),q=()=>e.jsx(r,{fallbackValue:"#000000"}),J=()=>e.jsx(r,{defaultColor:"#4387f4ff"}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"#4387f4",children:e.jsx(_e,{children:"Submit"})}),e.jsx(r,{placeholder:"#4387f4",children:({value:a})=>e.jsxs(_e,{children:["Submit ",a]})})]}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"small size",colorSelectorSize:"sm"}),e.jsx(r,{placeholder:"medium size",colorSelectorSize:"md"}),e.jsx(r,{placeholder:"large size",colorSelectorSize:"lg"}),e.jsx(r,{placeholder:"full size",colorSelectorSize:"full"})]}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),oe=()=>e.jsx(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),se=()=>e.jsx(r,{placeholder:"#4387F4FF",formatInput:a=>a.toUpperCase()}),ae=()=>e.jsx(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),te=()=>e.jsx(r,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ne=()=>e.jsx(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),le=()=>e.jsx(r,{placeholder:"#4387f4ff",allowInput:!1}),ce=()=>e.jsx(r,{withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ie=()=>e.jsx(r,{withChannel:!1}),ue=()=>e.jsx(r,{withSwatch:!1}),pe=()=>e.jsx(r,{withEyeDropper:!1}),de=()=>e.jsx(r,{withColorSelectorEyeDropper:!0}),me=()=>e.jsx(r,{withResult:!0}),fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),he=()=>e.jsx(r,{placeholder:"#4387f4",placement:"bottom-end"}),Ce=()=>e.jsx(r,{placeholder:"#4387f4",offset:[16,16]}),be=()=>e.jsx(r,{placeholder:"#4387f4",gutter:32}),Pe=()=>e.jsx(r,{placeholder:"#4387f4",duration:.4}),Se=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"#4387f4",isDisabled:!0}),e.jsx(Ee,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:"#4387f4"})})]}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"#4387f4",isReadOnly:!0}),e.jsx(Ee,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:"#4387f4"})})]}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{eyeDropperProps:{color:"primary"}}),e.jsx(r,{eyeDropperProps:{children:e.jsx(To,{icon:Ao})}})]}),xe=()=>{const[a,i]=s.useState("#4387f4ff");return e.jsx(r,{value:a,onChange:i})},we=()=>{var f;const a={colorInput:"#4387f4ff"},{control:i,handleSubmit:c,watch:l,formState:{errors:p}}=Go({defaultValues:a}),d=h=>console.log("submit:",h);return console.log("watch:",l()),e.jsxs(bs,{as:"form",onSubmit:c(d),children:[e.jsx(Ee,{isInvalid:!!p.colorInput,label:"Pick color",errorMessage:(f=p.colorInput)==null?void 0:f.message,children:e.jsx(Uo,{name:"colorInput",control:i,render:({field:h})=>e.jsx(r,{...h})})}),e.jsx(_e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Je,Xe,$e;Q.parameters={...Q.parameters,docs:{...(Je=Q.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...($e=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:$e.source}}};var er,rr,or;Z.parameters={...Z.parameters,docs:{...(er=Z.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" />;
}`,...(or=(rr=Z.parameters)==null?void 0:rr.docs)==null?void 0:or.source}}};var sr,ar,tr;q.parameters={...q.parameters,docs:{...(sr=q.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" />;
}`,...(tr=(ar=q.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var nr,lr,cr;J.parameters={...J.parameters,docs:{...(nr=J.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" />;
}`,...(cr=(lr=J.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var ir,ur,pr;X.parameters={...X.parameters,docs:{...(ir=X.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4">
        <Button>Submit</Button>
      </ColorPicker>

      <ColorPicker placeholder="#4387f4">
        {({
        value
      }) => <Button>Submit {value}</Button>}
      </ColorPicker>
    </>;
}`,...(pr=(ur=X.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var dr,mr,fr;$.parameters={...$.parameters,docs:{...(dr=$.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(fr=(mr=$.parameters)==null?void 0:mr.docs)==null?void 0:fr.source}}};var hr,Cr,br;ee.parameters={...ee.parameters,docs:{...(hr=ee.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(br=(Cr=ee.parameters)==null?void 0:Cr.docs)==null?void 0:br.source}}};var Pr,Sr,kr;re.parameters={...re.parameters,docs:{...(Pr=re.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(kr=(Sr=re.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source}}};var gr,xr,wr;oe.parameters={...oe.parameters,docs:{...(gr=oe.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(wr=(xr=oe.parameters)==null?void 0:xr.docs)==null?void 0:wr.source}}};var jr,yr,vr;se.parameters={...se.parameters,docs:{...(jr=se.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(vr=(yr=se.parameters)==null?void 0:yr.docs)==null?void 0:vr.source}}};var Dr,Fr,zr;ae.parameters={...ae.parameters,docs:{...(Dr=ae.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(zr=(Fr=ae.parameters)==null?void 0:Fr.docs)==null?void 0:zr.source}}};var Ir,_r,Er;te.parameters={...te.parameters,docs:{...(Ir=te.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Er=(_r=te.parameters)==null?void 0:_r.docs)==null?void 0:Er.source}}};var Rr,Or,Vr;ne.parameters={...ne.parameters,docs:{...(Rr=ne.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Vr=(Or=ne.parameters)==null?void 0:Or.docs)==null?void 0:Vr.source}}};var Br,Nr,Mr;le.parameters={...le.parameters,docs:{...(Br=le.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4ff" allowInput={false} />;
}`,...(Mr=(Nr=le.parameters)==null?void 0:Nr.docs)==null?void 0:Mr.source}}};var Hr,Lr,Kr;ce.parameters={...ce.parameters,docs:{...(Hr=ce.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  return <ColorPicker withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Kr=(Lr=ce.parameters)==null?void 0:Lr.docs)==null?void 0:Kr.source}}};var Tr,Ar,Gr;ie.parameters={...ie.parameters,docs:{...(Tr=ie.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <ColorPicker withChannel={false} />;
}`,...(Gr=(Ar=ie.parameters)==null?void 0:Ar.docs)==null?void 0:Gr.source}}};var Ur,Wr,Yr;ue.parameters={...ue.parameters,docs:{...(Ur=ue.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <ColorPicker withSwatch={false} />;
}`,...(Yr=(Wr=ue.parameters)==null?void 0:Wr.docs)==null?void 0:Yr.source}}};var Qr,Zr,qr;pe.parameters={...pe.parameters,docs:{...(Qr=pe.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <ColorPicker withEyeDropper={false} />;
}`,...(qr=(Zr=pe.parameters)==null?void 0:Zr.docs)==null?void 0:qr.source}}};var Jr,Xr,$r;de.parameters={...de.parameters,docs:{...(Jr=de.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <ColorPicker withColorSelectorEyeDropper />;
}`,...($r=(Xr=de.parameters)==null?void 0:Xr.docs)==null?void 0:$r.source}}};var eo,ro,oo;me.parameters={...me.parameters,docs:{...(eo=me.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <ColorPicker withResult />;
}`,...(oo=(ro=me.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var so,ao,to;fe.parameters={...fe.parameters,docs:{...(so=fe.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(to=(ao=fe.parameters)==null?void 0:ao.docs)==null?void 0:to.source}}};var no,lo,co;he.parameters={...he.parameters,docs:{...(no=he.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" placement="bottom-end" />;
}`,...(co=(lo=he.parameters)==null?void 0:lo.docs)==null?void 0:co.source}}};var io,uo,po;Ce.parameters={...Ce.parameters,docs:{...(io=Ce.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" offset={[16, 16]} />;
}`,...(po=(uo=Ce.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,fo,ho;be.parameters={...be.parameters,docs:{...(mo=be.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" gutter={32} />;
}`,...(ho=(fo=be.parameters)==null?void 0:fo.docs)==null?void 0:ho.source}}};var Co,bo,Po;Pe.parameters={...Pe.parameters,docs:{...(Co=Pe.parameters)==null?void 0:Co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" duration={0.4} />;
}`,...(Po=(bo=Pe.parameters)==null?void 0:bo.docs)==null?void 0:Po.source}}};var So,ko,go;Se.parameters={...Se.parameters,docs:{...(So=Se.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(go=(ko=Se.parameters)==null?void 0:ko.docs)==null?void 0:go.source}}};var xo,wo,jo;ke.parameters={...ke.parameters,docs:{...(xo=ke.parameters)==null?void 0:xo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(jo=(wo=ke.parameters)==null?void 0:wo.docs)==null?void 0:jo.source}}};var yo,vo,Do;ge.parameters={...ge.parameters,docs:{...(yo=ge.parameters)==null?void 0:yo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker eyeDropperProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(Do=(vo=ge.parameters)==null?void 0:vo.docs)==null?void 0:Do.source}}};var Fo,zo,Io;xe.parameters={...xe.parameters,docs:{...(Fo=xe.parameters)==null?void 0:Fo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker value={value} onChange={onChange} />;
}`,...(Io=(zo=xe.parameters)==null?void 0:zo.docs)==null?void 0:Io.source}}};var _o,Eo,Ro;we.parameters={...we.parameters,docs:{...(_o=we.parameters)==null?void 0:_o.docs,source:{originalSource:`() => {
  type Data = {
    colorInput: string;
  };
  const defaultValues: Data = {
    colorInput: "#4387f4ff"
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
      <FormControl isInvalid={!!errors.colorInput} label="Pick color" errorMessage={errors.colorInput?.message}>
        <Controller name="colorInput" control={control} render={({
        field
      }) => <ColorPicker {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ro=(Eo=we.parameters)==null?void 0:Eo.docs)==null?void 0:Ro.source}}};const Sa=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{Sa as __namedExportsOrder,Q as basic,xe as customControl,ge as customEyeDropperIcon,Pa as default,le as disabledAllowInput,ie as disabledChannel,pe as disabledEyeDropper,ce as disabledPicker,ue as disabledSwatch,de as enabledColorPickerEyeDropper,me as enabledResult,Se as isDisabled,ke as isReadonly,we as reactHookForm,fe as withBorderColor,X as withChildren,ne as withCloseOnSelectSwatch,ee as withColorSelectorSize,J as withDefaultColor,Z as withDefaultValue,Pe as withDuration,q as withFallbackValue,oe as withFormat,se as withFormatInput,be as withGutter,Ce as withOffset,he as withPlacement,$ as withSize,ae as withSwatches,te as withSwatchesColumns,re as withVariant};
