import{j as n}from"./jsx-runtime-CKrituN3.js";import{u as A}from"./index-WRgVllkg.js";import{r as x}from"./index-CBqU2yxZ.js";import{U as d}from"./ui-provider-BehHG7Nc.js";import{e as l}from"./extend-config-EZk5uOvh.js";import{u as m}from"./loading-provider-C42Sy3Y8.js";import{C as p}from"./center-DifBSSB-.js";import{W as g}from"./flex-CB3lumw3.js";import{B as o}from"./button-Dx5nl3ZL.js";import{M as f}from"./motion-CvgaHKJY.js";import{L as P}from"./loading-CvwcjMtk.js";import{V as T}from"./stack-Y-4i-p3Z.js";import{T as h}from"./text-CocBWv30.js";import{g as U}from"./factory-BVMa8fXZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-qfwbxg5S.js";import"./theme-provider-BXaPRWNI.js";import"./environment-provider-DfVYCp7H.js";import"./motion-JgkBPv6g.js";import"./notice-CRlI_njf.js";import"./alert-CAvcd948.js";import"./use-component-style-DFx-AFMQ.js";import"./icon-BlEaeaZb.js";import"./index-BtoBQEmV.js";import"./forward-ref-DuAegr0M.js";import"./close-button-C6pcLWIT.js";import"./use-ripple-D6WSMWHz.js";import"./index-_tcQm2Fk.js";import"./container-portal-Noj2PZgk.js";import"./index-BtM5VmRH.js";import"./Combination-DlzjZhkT.js";import"./index-sakSwYJY.js";import"./index-CXM4NpVI.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";const fn={title:"System / Theme / Loading"},L=i=>new Promise(t=>{setTimeout(t,i)}),r=()=>{const i=l({loading:{screen:{icon:{variant:"grid"},duration:5e3},page:{icon:{variant:"grid"},duration:5e3},background:{icon:{variant:"grid"},duration:5e3}}});return n.jsx(d,{config:i,children:n.jsx(z,{})})},s=()=>{const i=l({loading:{screen:{initialState:!0,icon:{variant:"dots"}},page:{icon:{variant:"dots"}},background:{icon:{variant:"dots"}}}});return n.jsx(d,{config:i,children:n.jsx(E,{})})},c=()=>{const i=l({loading:{custom:{component:({initialState:t,message:a,duration:e,onFinish:u})=>(A(u,e),n.jsx(f,{initial:t?!1:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,transition:{duration:.4,ease:[.4,0,1,1]}}},sx:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:9999,bg:"blackAlpha.600",w:"100vw",h:"100vh",p:"md",display:"flex",justifyContent:"center",alignItems:"center"},children:n.jsxs(f,{initial:t?!1:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.95,transition:{duration:.4,ease:[.4,0,1,1]}}},sx:{bg:["white","black"],maxW:"md",p:"md",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"sm",rounded:"md",boxShadow:["lg","dark-lg"]},children:[n.jsx(P,{variant:"dots",size:"6xl"}),n.jsxs(T,{align:"center",mb:"md",gap:"sm",children:[n.jsx(h,{children:"Downloading files…"}),a?U(a)?a:n.jsx(h,{lineClamp:3,children:a}):null]}),n.jsx(o,{size:"sm",onClick:u,children:"Play to background"})]})}))}}});return n.jsx(d,{config:i,children:n.jsx(M,{})})},z=()=>{const{screen:i,page:t,background:a}=m();return n.jsx(p,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(g,{gap:"md",children:[n.jsx(o,{onClick:()=>i.start(),children:"Start screen loading"}),n.jsx(o,{onClick:()=>t.start(),children:"Start page loading"}),n.jsx(o,{onClick:()=>a.start(),children:"Start background loading"})]})})},E=()=>{const{screen:i,page:t,background:a}=m(),e=x.useCallback(async()=>{await L(5e3),i.finish()},[i]);return x.useEffect(()=>{e()},[e]),n.jsx(p,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(g,{gap:"md",children:[n.jsx(o,{onClick:()=>i.start(),children:"Start screen loading"}),n.jsx(o,{onClick:()=>t.start(),children:"Start page loading"}),n.jsx(o,{onClick:()=>a.start(),children:"Start background loading"})]})})},M=()=>{const{custom:i}=m();return n.jsx(p,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(g,{gap:"md",children:n.jsx(o,{onClick:()=>i.start({duration:1e4}),children:"Start custom loading"})})})};var v,j,k;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      screen: {
        icon: {
          variant: "grid"
        },
        duration: 5000
      },
      page: {
        icon: {
          variant: "grid"
        },
        duration: 5000
      },
      background: {
        icon: {
          variant: "grid"
        },
        duration: 5000
      }
    }
  });
  return <UIProvider config={config}>
      <App />
    </UIProvider>;
}`,...(k=(j=r.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var b,y,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      screen: {
        initialState: true,
        icon: {
          variant: "dots"
        }
      },
      page: {
        icon: {
          variant: "dots"
        }
      },
      background: {
        icon: {
          variant: "dots"
        }
      }
    }
  });
  return <UIProvider config={config}>
      <AsyncApp />
    </UIProvider>;
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,w,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      custom: {
        component: ({
          initialState,
          message,
          duration,
          onFinish
        }) => {
          useTimeout(onFinish, duration);
          return <Motion initial={!initialState ? "initial" : false} animate="animate" exit="exit" variants={{
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: [0.4, 0, 1, 1]
              }
            }
          }} sx={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 9999,
            bg: "blackAlpha.600",
            w: "100vw",
            h: "100vh",
            p: "md",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
              <Motion initial={!initialState ? "initial" : false} animate="animate" exit="exit" variants={{
              initial: {
                opacity: 0,
                scale: 0.95
              },
              animate: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }
              },
              exit: {
                opacity: 0,
                scale: 0.95,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 1, 1]
                }
              }
            }} sx={{
              bg: ["white", "black"],
              maxW: "md",
              p: "md",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "sm",
              rounded: "md",
              boxShadow: ["lg", "dark-lg"]
            }}>
                <Loading variant="dots" size="6xl" />

                <VStack align="center" mb="md" gap="sm">
                  <Text>Downloading files…</Text>
                  {message ? isValidElement(message) ? message : <Text lineClamp={3}>{message}</Text> : null}
                </VStack>

                <Button size="sm" onClick={onFinish}>
                  Play to background
                </Button>
              </Motion>
            </Motion>;
        }
      }
    }
  });
  return <UIProvider config={config}>
      <CustomApp />
    </UIProvider>;
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const hn=["basic","useInitialState","useCustomLoading"];export{hn as __namedExportsOrder,r as basic,fn as default,c as useCustomLoading,s as useInitialState};