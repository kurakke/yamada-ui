import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as h}from"./index-CBqU2yxZ.js";import{f as _}from"./forward-ref-DuAegr0M.js";import{s as x,u as g,a as O}from"./factory-jQ8alorc.js";import{I as y}from"./image-BSxitxoW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./use-image-CVdKPe1A.js";const o=_(({className:n,ratio:l=4/3,children:d,...u},f)=>{const w=h.Children.only(d),j={position:"relative",_before:{content:'""',display:"block",h:0,pb:x(l,b=>`${1/b*100}%`)},"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",w:"100%",h:"100%"},"& > img, & > video":{objectFit:"cover"}};return e.jsx(g.div,{ref:f,className:O("ui-aspect-ratio",n),__css:j,...u,children:w})}),q={title:"Components / Layouts / AspectRatio",component:o},t=()=>e.jsx(o,{w:"md",children:e.jsx(y,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",alt:"ドラゴンボール"})}),s=()=>e.jsx(o,{w:"full",ratio:16/9,children:e.jsx("iframe",{title:"map",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12974.591815632506!2d139.6932331!3d35.6117497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b1a487a026f%3A0x16e7e351187c8216!2z5qCq5byP5Lya56S-IOOCouODkOODg-ODlw!5e0!3m2!1sja!2sjp!4v1674728815443!5m2!1sja!2sjp"})});var a,r,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <AspectRatio w="md">
      <Image src="https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg" alt="ドラゴンボール" />
    </AspectRatio>;
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var m,c,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <AspectRatio w="full" ratio={16 / 9}>
      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12974.591815632506!2d139.6932331!3d35.6117497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b1a487a026f%3A0x16e7e351187c8216!2z5qCq5byP5Lya56S-IOOCouODkOODg-ODlw!5e0!3m2!1sja!2sjp!4v1674728815443!5m2!1sja!2sjp" />
    </AspectRatio>;
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const B=["basic","withRatio"];export{B as __namedExportsOrder,t as basic,q as default,s as withRatio};
