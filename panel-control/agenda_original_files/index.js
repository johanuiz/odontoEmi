import{a as Se}from"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-YCS77FBD.js";import{a as ce,b as We,c as Vt,d as jt,e as Jt,f as Br,g as yn,h as B,j as ze,k as En,l as wn}from"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-MIFCXSNE.js";import{a as vn,b as bn,f as Sn}from"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-LPFK3UJM.js";import{a as hn}from"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-DEQ73A7U.js";import{c as H,d as $e,e as Gt,f as Q,g as qt,k as cn,m as dn,o as ln,q as un,s as pn,t as mn,u as gn,v as fn}from"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-IKTFION3.js";import{n as In,q as Cn}from"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-4UA7HNIE.js";import"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-AVOFOUXA.js";import{a as Yt,b as Zt,d as ee,e as Xt,h as de,i as te}from"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-DCAAW7B3.js";import"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-4PEOVDOI.js";import{a as Ut,b as Ft,c as He,d as Kt,e as Ht,f as Wt,i as $t,j as zt,k as Y}from"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-TNZRKNSZ.js";import"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-BMXFDFA7.js";import{a as st,c as ut,d as pt,f as mt,h as ft,j as ht,k as U,l as yt,m as ge,q as Qt,r as be}from"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-LO6TSHY5.js";import{a as ct,b as dt}from"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-TL3LMQG4.js";import{$ as z,$a as Lt,$b as an,Ca as _t,Da as At,Db as tn,E as vt,Ea as Mt,Eb as nn,F,Ga as Pt,Gb as rn,Ha as Nt,Ia as Ot,Ib as on,Ja as se,K as De,Kb as sn,Oa as q,P as Be,Pa as Ke,Q as bt,S as St,Sa as Dt,T as Et,Xa as ae,Y as Le,Za as Bt,_ as Re,aa as L,ab as ye,b as Dr,c as T,cb as Rt,d as x,db as ve,e as d,f as N,g as me,h as M,ha as wt,i as X,ia as K,j as at,k as w,l as lt,ma as Ue,n as gt,na as Fe,o as k,oa as J,pa as It,q as D,r as ie,ra as G,sa as Ct,sb as en,ta as Tt,ua as xt,va as fe,wa as he,ya as kt}from"./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-chunk-3ACI3WNS.js";d();d();(function(){try{var t=typeof window<"u"||typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="d12d0f91-d4a9-48e7-9f93-c69b685a64df",t._sentryDebugIdIdentifier="sentry-dbid-d12d0f91-d4a9-48e7-9f93-c69b685a64df")}catch(n){}})();d();var _r=T(N()),Ar=T(st());d();var Te=T(N());d();var v=T(N());d();if(typeof document<"u"){let t=document.createElement("style"),e=window.engagement,n=e&&e._configuration&&e._configuration.nonce;if(n)t.setAttribute("nonce",n);else{let r=document.querySelector("[nonce]");if(r){let o=r.nonce||r.getAttribute("nonce");o&&t.setAttribute("nonce",o)}}t.appendChild(document.createTextNode(`#engagement-wrapper *,
#engagement-wrapper *:before,
#engagement-wrapper *:after,
.engagement-nudge-modal *,
.engagement-nudge-modal *:before,
.engagement-nudge-modal *:after,
.engagement-nudge-modal-mock *,
.engagement-nudge-modal-mock *:before,
.engagement-nudge-modal-mock *:after {
  box-sizing: border-box;
}

.engagement-modal > .rc-dialog > .rc-dialog-content {
  background-color: transparent;
}

.engagement-tooltip {
  z-index: 2147483647 !important; /*make the tooltip the highest possible z index*/
}

/*** Hack: Hide this because it's less flexible (classnames can't be changes)
    Instead we only show its children, by translating its children ***/
.engagement-modal > .rc-dialog > .rc-dialog-content > .rc-dialog-header {
  max-height: 0px !important;
  padding: 0px !important;
}

.engagement-modal > .rc-dialog {
  left: 0px;
  transition: left 0.3s;
}

.engagement-modal > .rc-dialog > .rc-dialog-content > .rc-dialog-body {
  position: relative !important;
}

/* TestMode inline engagement */
.engagement-modal-inline.rc-dialog-wrap {
  position: relative;
  height: 100%;
}

#engagement-container > div {
  height: 100%;
}

#engagement-home > .rc-dialog-root {
  height: 100%;
}

#engagement-wrapper .rc-header-guidance {
  background: rgba(174, 177, 221, 1) !important;
  filter: brightness(135%);
  border-radius: 2px 2px 0px 0px !important;
  border-bottom: 0px !important;
  padding: 8px 30px 2px 30px !important;
  margin: 0px 10px 0px 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px !important;
  font-weight: 400;
  text-align: center;
}

@keyframes fontbulger {
  0% {
    font-size: 10px;
  }
  30% {
    font-size: 15px;
  }
  100% {
    font-size: 12px;
  }
}

@keyframes shimmer {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}

.engagement-category-collapse {
  transform: scale(1, -1);
  transition: 0.3s ease-in;
  cursor: pointer;
}

.engagement-category-expand {
  transition: 0.3s ease-in;
  cursor: pointer;
}

/* Nudges - modal */

.engagement-nudge-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2147483644 !important;
}

.engagement-nudge-modal-mock {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0;
  transition: margin-right cubic-bezier(0.78, 0.14, 0.15, 0.86) 0.3s;
  z-index: 2147483644 !important;
}

/* Nudges - media */

.engagement-help-doc-title::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 66.67%, gray 93.08%);
  content: '';
}

/* Recorder */
#engagement-recorder-mask {
  background: transparent;
}
`)),document.head.appendChild(t)}d();if(typeof document<"u"){let t=document.createElement("style"),e=window.engagement,n=e&&e._configuration&&e._configuration.nonce;if(n)t.setAttribute("nonce",n);else{let r=document.querySelector("[nonce]");if(r){let o=r.nonce||r.getAttribute("nonce");o&&t.setAttribute("nonce",o)}}t.appendChild(document.createTextNode(`/*** Guidance banner styling and animation ***/
@keyframes example {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-30px);
  }
}

.rc-header-guidance {
  animation: example 0.5s;
  animation-fill-mode: forwards;
}

/*** engagement entry animation ***/
/*** We can't do exit animation because rc-dialog makes display: none ***/
@keyframes onEntry {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.engagement-opened {
  animation: onEntry 0.1s;
  animation-fill-mode: forwards;
}

@keyframes onSelect {
  0% {
    transform: translate3d(0px, 0px, 0px);
  }
  50% {
    transform: translate3d(0px, 0px, -0.5px);
  }
  100% {
    transform: translate3d(0px, 0px, 0px);
  }
}

.engagement-selected {
  animation: onSelect 0.4s;
}

@keyframes ScaleEntry {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.engagement-scale-entry-animation {
  animation: ScaleEntry 0.3s;
  animation-fill-mode: forwards;
}

@keyframes onEntry {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.engagement-shortcut-tooltip {
  opacity: 0;
  animation: tagEntry 0.2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes tagExit {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.8);
    opacity: 0;
  }
}

.engagement-shortcut-tooltip-remove {
  animation: tagExit 0.2s;
  animation-fill-mode: forwards;
}

.engagement-shortcut-tooltip,
.engagement-shortcut-tooltip-remove {
  z-index: 99999999;
  position: absolute;
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: proxima-nova, sans-serif;
  color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  font-size: 13px;
}

.engagement-shortcut-tooltip-tag {
  margin-left: 10px;
  padding: 2px 5px;
  border-radius: 2px;
  background-color: grey;
}

#engagement-launcher {
  animation: 0.25s ease-out scaleIn;
}

@keyframes scaleIn {
  0% {
    transform: scale(0.06);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes growFromBottom {
  0% {
    transform: scale(1, 0.3);
  }

  100% {
    transform: scale(1, 1);
  }
}
`)),document.head.appendChild(t)}d();var Ve=class{constructor(){x(this,"organization")}getOrganization(){return this.organization}setOrganization(e){this.organization=e}},Tn=new Ve;d();var ne=T(N()),Lr=(t=document.body)=>{var o,s;let e=(0,ne.useRef)(null),n=(0,ne.useRef)(null),r=(0,ne.useRef)(null);return(0,ne.useEffect)(()=>()=>{var i,a;(i=n.current)==null||i.disconnect(),(a=e.current)==null||a.remove()},[]),(e.current===null||t!==r.current)&&((o=n.current)==null||o.disconnect(),(s=e.current)==null||s.remove(),r.current=t,e.current=document.createElement("div"),e.current.setAttribute("data-engagement-toplevel-styles",""),e.current.setAttribute("hidden",""),t.prepend(e.current),n.current=new MutationObserver(()=>{e.current&&e.current.querySelectorAll("style[data-emotion]:not([data-s])").forEach(i=>{i.setAttribute("data-s","")})}),n.current.observe(e.current,{childList:!0,subtree:!0})),e.current},xn=Lr;d();var le=T(N());var Rr=({nudgeActor:t})=>{var l;let e=k(),n=Q(t,({context:f})=>f.nudge),r=Q(t,({context:f})=>f.stepIndex),{animStyles:o}=be(),s=G(n,r);if(!s||!(he(s)&&s.formFactor.isShowingMask))return null;let{targetElement:i}=Jt(e,{step:s}),a=(l=i==null?void 0:i.getBoundingClientRect())!=null?l:new DOMRect,c=i?getComputedStyle(i).borderRadius:"0px";return a.width===0||a.height===0?null:le.default.createElement("div",{style:{position:"absolute",top:"0",left:"0",...ie.getZIndexStyles(s,"mask")}},le.default.createElement("div",{"data-testid":"engagement-nudge-mask",style:{width:`${document.documentElement.scrollWidth}px`,height:`${document.documentElement.scrollHeight}px`,clipPath:`polygon(0% 0%, 0% 100%,
                ${a.left+window.scrollX}px 100%,
                ${a.left+window.scrollX}px ${a.top+window.scrollY}px,
                ${a.left+window.scrollX+a.width}px ${a.top+window.scrollY}px,
                ${a.left+window.scrollX+a.width}px ${a.top+window.scrollY+a.height}px,
                0% ${a.top+window.scrollY+a.height}px,
                0% 100%, 100% 100%, 100% 0%)`,position:"absolute"}}),le.default.createElement("div",{"data-testid":"engagement-nudge-mask-inner",style:{pointerEvents:"none",position:"absolute",inset:`${a.top+window.scrollY}px ${a.left+window.scrollX}px`,width:`${a.width}px`,height:`${a.height}px`,padding:"4px",borderRadius:`${c}`,boxShadow:`0 0 0 ${Math.max(document.documentElement.scrollHeight,document.documentElement.scrollWidth)}px rgba(0, 0, 0, 0.1)`,overflow:"hidden",opacity:o.opacity,transitionProperty:"opacity",transitionDuration:o.transitionDuration,transitionTimingFunction:o.transitionTimingFunction}}))},kn=({nudgesManager:t})=>{let e=k(),n=Q(t,o=>o.context.activeNudge);if(!n)return null;let r=L(e,n==null?void 0:n.variantId);return r?le.default.createElement(Rr,{nudgeActor:r}):null};d();var _n=t=>{if(t.themeOverride&&t.themeOverride.theme&&t.themeOverride.mode)return t.themeOverride;let e=t.themeMode==="auto"?t.services.getDefaultUIMode():t.themeMode;return{theme:ht(t.themes),mode:e}};d();var W=T(N()),we=T(N());var V={state:{},subscribers:[],subscribe:t=>(V.subscribers.push(t),()=>{V.subscribers=V.subscribers.filter(e=>e!==t)})},Ur=(t,e)=>{switch(e.type){case"SHOW":return{...t,[e.id]:e.payload};case"HIDE":{let n={...t};return delete n[e.id],n}case"HIDE_ALL_MATCHING_PATTERN":if(e.idPattern){let n={...t};for(let r in n)r.match(e.idPattern)&&delete n[r];return n}return{};default:return t}},je=t=>{let e=Ur(V.state,t);V.state=e,V.subscribers.forEach(n=>n(e))},An=(t,e)=>{je({type:"SHOW",id:t,payload:e})},Mn=t=>{je({type:"HIDE_ALL_MATCHING_PATTERN",idPattern:t})},Ge=t=>{let e=document.querySelector(`[data-spacer-for="${t}"]`);e&&e.remove(),je({type:"HIDE",id:t})},Pn=({children:t})=>{let{isEditorPreview:e}=k(),[n,r]=(0,we.useState)(V.state);return(0,we.useEffect)(()=>V.subscribe(r),[]),W.default.createElement(W.default.Fragment,null,t,W.default.createElement("div",{id:"engagement-nudges-banner-sticky-container",style:{width:"100%",top:"0px",left:0,position:"fixed",pointerEvents:"none",height:"100%"}},Object.entries(n).filter(([,o])=>o.sticky).map(([o,s])=>W.default.createElement("div",{key:o,id:o},s.element))),W.default.createElement("div",{id:"engagement-nudges-banner-inline-container-top",style:{width:"100%",position:"absolute",top:e?"50%":"0",left:0,pointerEvents:"none"}},Object.entries(n).filter(([,o])=>!o.sticky&&o.position==="top").map(([o,s])=>W.default.createElement("div",{key:o,id:o},s.element))),W.default.createElement("div",{id:"engagement-nudges-banner-inline-container-bottom",style:{width:"100%",position:e?void 0:"relative",pointerEvents:"none"}},Object.entries(n).filter(([,o])=>!o.sticky&&o.position==="bottom").map(([o,s])=>W.default.createElement("div",{key:o,id:o},s.element))))};d();var Dn=T(Br()),Z=T(N());d();var A=T(N());var Fr=D.div`
  height: ${He}px;
  position: relative;
  z-index: 50;

  @media screen and (max-height: 820px) {
    transform: scale(0.9);
  }

  @media screen and (max-height: 760px) {
    transform: scale(0.8);
  }
`,Kr=D.div`
  width: ${Kt}px;
  height: ${He}px;
  position: relative;
  border-radius: 56px;
  box-shadow: 0px 0px 0px 7.5px #7d7e7d;
  border: 8px solid #000;
  background: linear-gradient(165deg, white, #ebf0ff 45%, #ebf0ff 55%, white);
  outline: 6px solid #2c2c2b;
  padding-top: 60px;
  padding-bottom: 34px;
  overflow: hidden;

  @media screen and (max-width: 670px) {
    height: 790px;
    width: 400px;
  }

  #engagement-nudge-container {
    overflow: auto;
  }
`,Hr=D.div`
  height: 100%;
  width: 100%;
  position: relative;
`,Wr=D.div`
  position: absolute;
  width: 100%;
  height: 60px;
  top: 0px;
  display: flex;
  justify-content: center;
  padding-top: 12px;
`,$r=D.div`
  height: 37px;
  width: 126px;
  border-radius: 24px;
  background-color: #000000;
  transition: height 0.5s cubic-bezier(0.075, 0.82, 0.165, 1), width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    height: 45px;
    width: 145px;
  }
`,zr=D.div`
  position: absolute;
  width: 100%;
  height: 34px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
`,Vr=D.div`
  height: 5px;
  width: 154px;
  border-radius: 24px;
  background-color: #000000;
`,jr=D.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  bottom: 0px;
`,Nn=D.div`
  position: absolute;
  top: 120px;
  display: flex;
  flex-direction: column;

  &.left {
    left: -12px;
  }

  &.right {
    right: -12px;
    top: 220px;
  }
`,Ie=D.span`
  background-color: #1d1e1f;
  display: inline-block;
  width: 5px;
  min-height: 62px;
  border-radius: 2px;

  &.power {
    height: 102px;
  }

  &.volume-up {
    margin-top: 29px;
  }
  &.volume-down {
    margin-top: 16px;
  }

  &.lock {
    min-height: 32px;
  }
`,Gr=()=>A.default.createElement(jr,null,A.default.createElement(Nn,{className:"left"},A.default.createElement(Ie,{className:"lock"}),A.default.createElement(Ie,{className:"volume-up"}),A.default.createElement(Ie,{className:"volume-down"})),A.default.createElement(Nn,{className:"right"},A.default.createElement(Ie,{className:"power"}))),qr=()=>A.default.createElement(Wr,null,A.default.createElement($r,null)),On=({style:t,children:e})=>{let{isMobileDevice:n,isMobileNativePreview:r}=Y();return A.default.createElement(Fr,{style:t,"data-testid":"mobile-preview-device"},A.default.createElement(Gr,null),A.default.createElement(Kr,{isMobileWeb:n&&!r},A.default.createElement(qr,null),A.default.createElement(Hr,{id:"engagement-mobile-preview-wrapper"},A.default.createElement("div",{id:"engagement-mobile-nudge-mock-pin"}),e),A.default.createElement(zr,null,A.default.createElement(Vr,null))))};var Yr=({children:t})=>{let e=Z.default.useRef(null),{widgetTableauSelection:n,editorPreviewDevice:r}=k(),{mode:o}=U(),s=Z.default.useCallback(c=>{if(!c){e.current&&(e.current.dispose(),e.current=null);return}if(e.current=(0,Dn.default)(c,{maxZoom:1,minZoom:1,initialZoom:1,zoomDoubleClickSpeed:1,smoothScroll:!1,filterKey:function(){return!0}}),e.current.on("pan",function(){document.body.style.cursor="grab",c.style.pointerEvents="none"}),e.current.on("panend",function(){document.body.style.cursor="auto",c.style.removeProperty("pointer-events")}),!!c.children[0])return c.addEventListener("mousedown",i),c.addEventListener("wheel",a),()=>{c.removeEventListener("mousedown",i),c.removeEventListener("wheel",a)}},[n]),i=c=>{var h,g;let l=c.target;(l==null?void 0:l.id)==="panzoom-container"?(h=e.current)==null||h.resume():(g=e.current)==null||g.pause()},a=c=>{var h,g;let l=c.target;(l==null?void 0:l.id)==="panzoom-container"?(h=e.current)==null||h.resume():(g=e.current)==null||g.pause()};return Z.default.createElement("div",{style:{position:"absolute",inset:0,overflow:"clip",backgroundColor:o==="lightMode"?"#F9F9F9":"#3F424A",backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABZSURBVHgB7dG7DYBADANQJxexAiXSTXw9uyExBih34SOxQhr83Li2ASIiIiIiIvo7QbLW1jms1zijq9puSDaGLxhhuBPaqyKZTFK+/q6AZOJlg8shqv5ccAGZWRnaKiSy9QAAAABJRU5ErkJggg==)"}},Z.default.createElement("div",{id:"panzoom-container",style:{width:"100%",height:"100%"},ref:s},t,Z.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}},Z.default.createElement(On,{style:{visibility:r.startsWith("mobile")?"visible":"hidden"}}))))},Bn=Yr;d();var I=T(N()),qe=T(st());d();var re=T(N());d();var Ln=T(N());var Zr={display:"flex",width:"var(--popover-width)",flexDirection:"column",alignItems:"flex-start",pointerEvents:"all",maxWidth:"var(--tooltip-max-width)",position:"relative",borderRadius:"var(--layout-radius-card)",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--border-primary)",background:"var(--background-primary)",boxShadow:"var(--layout-shadow) var(--layout-shadow-color)",a:{color:"var(--content-link)",textDecoration:"none","&:hover":{color:"var(--content-link-hover)",textDecoration:"underline"}}},Xr={minWidth:"var(--popover-width)",width:"unset",maxWidth:"unset"},Jr=D.div``,Qr=Ln.default.forwardRef(({children:t,title:e,variant:n,theme:r,...o},s)=>mt(Jr,{ref:s,css:[Zr,n==="survey"&&Xr].filter(Boolean),...o},t)),Rn=Qr;var Un=({nudge:t,step:e,renderMode:n,handleLinkClick:r,stepIndex:o,isVisible:s=!0})=>{let i=k(),a=U(),c=n!==1?L(i,t.variantId):void 0,{isMobileDevice:l}=Y(),f=re.default.createElement(gn,{isDismissible:t.isDismissible,"data-testid":"engagement-nudge-tooltip-close"},re.default.createElement(an,null));return re.default.createElement(ge,{nudge:t},re.default.createElement(Rn,{variant:e.content.find(h=>h.type==="survey_rating")?"survey":"default",key:e.id,theme:a,style:{minHeight:44,pointerEvents:s?"auto":"none",...e.formFactor.layout==="horizontal"&&!l?{width:"auto",maxWidth:"calc(var(--tooltip-max-width) * 2)"}:{}}},re.default.createElement(Sn,{nudge:t,step:e,renderMode:n,handleLinkClick:r,stepIndex:o,actor:c,overrides:{close:f}})))};d();var Fn=T(N());var eo={bookClosed:en,helpCircle:tn,helpSquare:nn,infoCircle:rn,lightBulb:on,lightning:sn},Kn=({type:t})=>{let e=eo[t];return Fn.default.createElement(e,{color:"#3F424A",size:16})};d();var Ce=T(N());var Hn=Gt({types:{},guards:{shouldCenter:()=>!1,isInlineAligned:()=>!1},actions:{updatePosition:$e({marker:({context:t},e)=>({...t.marker,position:e.position})}),assignInlineWrapper:$e({inlineWrapperElement:(t,e)=>e.inlineWrapperElement}),removeTooltip:()=>{},trackMarkerInView:()=>{},handleHide:()=>{}},actors:{waitForTargetElement:H(()=>{}),trackTargetElement:H(()=>{}),wrapTargetElement:H(()=>{}),trackMarkerInView:H(()=>{})}}).createMachine({id:"Tooltip",initial:"idle",context:({input:t})=>({marker:{ref:t.markerRef,position:null,offset:t.offset,alignment:t.alignment},renderMode:t.renderMode,anchor:t.anchor}),states:{idle:{always:[{target:"centered",guard:"shouldCenter",description:"This is the case when we are editing a step in the studio and the target element is unavailable."},"waiting for target element"]},centered:{type:"final"},anchoring:{initial:"hidden",invoke:{src:"trackTargetElement",id:"trackTargetElement",input:({context:t,event:e})=>({marker:t.marker,targetElement:"targetElement"in e?e.targetElement:null})},states:{shown:{on:{HIDE:{target:"#Tooltip.anchoring.hidden"}},states:{visible:{entry:[{type:"trackMarkerInView"}],on:{OUT_OF_VIEW:"hidden"},exit:[{type:"handleHide"}]},hidden:{on:{IN_VIEW:"visible"}}},initial:"hidden",invoke:{src:"trackMarkerInView",id:"trackMarkerInView",input:({context:t})=>({markerRef:t.marker.ref})}},hidden:{on:{SHOW:"shown"}}},on:{POSITION:{actions:[{type:"updatePosition",params:({event:t})=>({position:t.position})}]},TARGET_ELEMENT_REMOVED:"waiting for target element"}},inlining:{invoke:{src:"wrapTargetElement",id:"wrapTargetElement",input:({context:t,event:e})=>({marker:t.marker,targetElement:"targetElement"in e?e.targetElement:null})},states:{idle:{on:{ASSIGN_WRAPPER:{target:"inlined",actions:[{type:"assignInlineWrapper",params:({event:t})=>({inlineWrapperElement:t.inlineWrapperElement})}]}}},inlined:{states:{hidden:{on:{IN_VIEW:"visible"}},visible:{entry:[{type:"trackMarkerInView"}],on:{OUT_OF_VIEW:"hidden"}}},initial:"hidden",invoke:{src:"trackMarkerInView",id:"trackMarkerInView",input:({context:t})=>({markerRef:t.marker.ref})}}},initial:"idle",on:{TARGET_ELEMENT_REMOVED:"waiting for target element"}},"waiting for target element":{on:{TARGET_ELEMENT_FOUND:[{target:"inlining",guard:"isInlineAligned"},"anchoring"]},invoke:{src:"waitForTargetElement",id:"waitForTargetElement"}}},on:{DESTROY:{actions:[{type:"removeTooltip"}]}}}),P=qt(Hn),Wn=({variantId:t,children:e,renderMode:n,offset:r,alignment:o,anchor:s,handleDestroy:i,onMarkerView:a,handleHide:c})=>{let{isEditorPreview:l}=k(),{showWidgetTableau:f,messageBus:h}=k(),g=(0,Ce.useRef)(null),p=Hn.provide({guards:{shouldCenter:({context:u})=>!f&&l||n===1&&!ee(u.anchor),isInlineAligned:()=>o==="inline_left"||o==="inline_right"},actions:{removeTooltip:i,trackMarkerInView:a,handleHide:c},actors:{waitForTargetElement:H(({sendBack:u})=>{let y=ee(s);if(de(y))return u({type:"TARGET_ELEMENT_FOUND",targetElement:y});let m=()=>{let b=ee(s);de(b)&&u({type:"TARGET_ELEMENT_FOUND",targetElement:b})};return h.subscribe("dom_mutation",m,`tooltip_wait_for_target_${t}`),()=>{h.unsubscribe("dom_mutation",`tooltip_wait_for_target_${t}`)}}),trackTargetElement:H(({sendBack:u,input:y})=>{let{marker:m,targetElement:b}=y;if(!b)return;let E=m.ref.current;if(!E)return;let{offset:S,alignment:C}=m,R=cn(b,E,()=>{var O,$,tt,nt,rt,ot;un(b,E,{placement:C==="left"?"left":"right",strategy:"fixed",middleware:[dn({mainAxis:B(S.x),crossAxis:B(S.y)}),ln({strategy:"escaped",padding:{top:B((O=S==null?void 0:S.y)!=null?O:"0"),bottom:-B(($=S==null?void 0:S.y)!=null?$:"0"),...C==="left"?{right:-B((tt=S==null?void 0:S.x)!=null?tt:"0"),left:B((nt=S==null?void 0:S.x)!=null?nt:"0")}:{right:B((rt=S==null?void 0:S.x)!=null?rt:"0"),left:-B((ot=S==null?void 0:S.x)!=null?ot:"0")}}})]}).then(({y:Pr,x:Nr,middlewareData:Or})=>{var it;u({type:"POSITION",position:{x:Nr,y:Pr}}),(it=Or.hide)!=null&&it.escaped?u({type:"HIDE"}):u({type:"SHOW"})})});return h.subscribe("dom_mutation",()=>{(!document.contains(b)||!de(b))&&u({type:"TARGET_ELEMENT_REMOVED"})},`tooltip_check_for_target_removal_${t}`),()=>{R(),h.unsubscribe("dom_mutation",`tooltip_check_for_target_removal_${t}`)}}),wrapTargetElement:H(({sendBack:u,input:y})=>{var S,C;let{marker:m,targetElement:b}=y;if(!b)return;let E=document.createElement("div");return E.setAttribute("data-testid","engagement-nudge-tooltip-wrapper"),E.style.position="relative",E.style.display="inline-flex",E.style.alignItems="baseline",E.style.width="fit-content",E.style.flexDirection=m.alignment==="inline_right"?"row":"row-reverse",(S=b.parentNode)==null||S.insertBefore(E,b),(C=b.parentNode)==null||C.removeChild(b),E.appendChild(b),u({type:"ASSIGN_WRAPPER",inlineWrapperElement:E}),h.subscribe("dom_mutation",()=>{(!document.contains(b)||!de(b))&&u({type:"TARGET_ELEMENT_REMOVED"})},`tooltip_check_for_target_removal_wrap_${t}`),()=>{let _=E.parentNode;document.contains(_)&&(_==null||_.insertBefore(b,E),_==null||_.removeChild(E)),h.unsubscribe("dom_mutation",`tooltip_check_for_target_removal_wrap_${t}`)}}),trackMarkerInView:H(({sendBack:u,input:y})=>{let m=new IntersectionObserver(([b])=>{b.isIntersecting?u({type:"IN_VIEW"}):u({type:"OUT_OF_VIEW"})});return y.markerRef.current&&m.observe(y.markerRef.current),()=>{m.disconnect()}})}});return Ce.default.createElement(P.Provider,{logic:p,options:{input:{markerRef:g,offset:r,alignment:o,renderMode:n,anchor:s}}},e)};var to=({source:t})=>{let e=t.startsWith("<svg");return I.default.createElement("div",{style:{pointerEvents:"auto"}},e?I.default.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):I.default.createElement("img",{alt:"Tooltip marker",src:t}))},no=({type:t})=>I.default.createElement("div",{"data-testid":"engagement-nudge-tooltip-icon",style:{border:"none",display:"flex",background:"none",padding:0,position:"relative",pointerEvents:"auto",width:"16px",height:"16px"}},I.default.createElement(Kn,{type:t})),ro=({marker:t})=>{let e=U();switch(t.type){case"image":return t.source?I.default.createElement(to,{source:t.source}):null;case"icon":return I.default.createElement(no,{type:t.icon});case"beacon":return I.default.createElement(yn,{theme:e});default:return null}},oo=({step:t})=>{let{isMobileDevice:e}=Y(),n=P.useSelector(u=>u.matches({anchoring:"shown"})||u.matches("centered")),r=P.useSelector(({context:u})=>u.marker.alignment),o=r==="inline_left"||r==="left",s={visibility:n?"visible":"hidden",top:"calc(40vh - 51px)",right:`calc(-${e?o?40:60:o?20:80}vw + 24px)`},i=P.useSelector(({context:u})=>{var y;return(y=u.marker.position)==null?void 0:y.y}),a=P.useSelector(({context:u})=>{var y;return(y=u.marker.position)==null?void 0:y.x}),c={visibility:n?"visible":"hidden",left:a,top:i},l={visibility:"visible"},f=P.useSelector(u=>u.matches({inlining:"inlined"})&&!!u.context.inlineWrapperElement),h=P.useSelector(u=>u.matches("centered")),g=()=>f?l:h?s:c,p=P.useSelector(({context:u})=>u.marker.ref);return I.default.createElement(pn,{ref:p,"data-testid":"engagement-nudge-tooltip-marker",style:{...g()}},I.default.createElement(ro,{marker:t.formFactor.marker}))},io=({nudge:t,step:e,popoverActor:n})=>{var p,u,y;let r=Q(n,m=>m.matches("open")),{onExit:o}=be(),{isStudioMobilePreview:s}=Y(),i=k(),a=P.useSelector(({context:m})=>m.renderMode),c=a!==1?L(i,t.variantId):void 0,l=(u=(p=c==null?void 0:c.getSnapshot())==null?void 0:p.context.stepIndex)!=null?u:0,f=(0,I.useCallback)(()=>o(()=>{var m,b;return(b=(m=c==null?void 0:c.getSnapshot())==null?void 0:m.context.popoverActor)==null?void 0:b.send({type:"CLOSE"})}),[c==null?void 0:c.getSnapshot,o]),h=vn(m=>se.nudge.engaged(t,l,{...c==null?void 0:c.getSnapshot().context,source:{type:"link",url:m},interactionState:K(i,t.variantId)}),f),g=P.useSelector(m=>m.matches({inlining:"inlined"})&&!!m.context.inlineWrapperElement);return(0,I.useEffect)(()=>{c==null||c.send({type:"ASSIGN_POPOVER_ACTOR",actor:n})},[n,c]),(0,I.useEffect)(()=>{a===1&&n.send({type:"OPEN"})},[a,e]),I.default.createElement(I.default.Fragment,null,I.default.createElement(oo,{step:e}),I.default.createElement(mn,{"data-testid":"engagement-nudge-tooltip-content",describedBy:"engagement-nudge-tooltip-content",labelledBy:"engagement-nudge-title",portalToId:s?"engagement-mobile-preview-wrapper":g?"engagement-toast-container":void 0,shouldStealFocus:a!==1,showArrow:((y=e.formFactor.pointer)==null?void 0:y.type)==="arrow",style:{borderRadius:"var(--layout-radius-card)",...ie.getZIndexStyles(e)}},I.default.createElement(bn,{actor:c,step:e},I.default.createElement(hn,null,I.default.createElement(Un,{nudge:t,step:e,renderMode:a,stepIndex:l,handleLinkClick:h,isVisible:r})))))},so=({nudge:t,step:e,onOpen:n,forceOpen:r=!1,autoPlacement:o=!0,root:s})=>{let i=P.useSelector(({context:m})=>m.renderMode),a=P.useSelector(m=>m.matches("idle")),c=P.useSelector(m=>m.matches({inlining:"inlined"})&&!!m.context.inlineWrapperElement),l=P.useSelector(({context:m})=>m.inlineWrapperElement),f=P.useSelector(({context:m})=>m.marker.offset),{generatedCSSClassname:h}=U();if(a)return null;let[g,p]=[B(f.x),B(f.y)],u=c?{display:"flex",position:"relative",[e.formFactor.marker.positioning.position==="inline_left"?"marginRight":"marginLeft"]:`${g}px`,marginTop:`${p}px`,zIndex:"auto"}:{...ie.getZIndexStyles(e)};if(!s)return null;let y=(0,qe.createPortal)(I.default.createElement(fn,{"data-testid":`engagement-tooltip-${t.variantId}-${String(e.id)}${i===1?"-mock":""}`,forceOpen:r,defaultOpen:i===1,triggerType:e.formFactor.showOn,style:u,className:h,autoPlacement:o,onOpen:n},m=>I.default.createElement(io,{nudge:t,step:e,popoverActor:m})),s);return c&&l?(0,qe.createPortal)(y,l):y},$n=({nudge:t,step:e,renderMode:n,forceOpen:r,anchorOverride:o,onMarkerView:s,onOpen:i,handleDestroy:a,autoPlacement:c})=>{var h;let l=k(),f=(0,I.useRef)(document.getElementById("engagement-tooltip-container-portal"));return f.current?I.default.createElement(ge,{nudge:t},I.default.createElement(Qt,{widget:"tooltip",keepMounted:!0,isOpenByDefault:n===1},I.default.createElement(Wn,{variantId:t.variantId,offset:e.formFactor.marker.positioning.offset,renderMode:n,alignment:e.formFactor.marker.positioning.position,anchor:(h=o!=null?o:e.formFactor.anchorSelector)!=null?h:e.formFactor.anchor,handleDestroy:a,onMarkerView:s,handleHide:()=>{var u;let g=L(l,t.variantId),p=(u=g==null?void 0:g.getSnapshot())==null?void 0:u.context.popoverActor;p==null||p.send({type:"CLOSE"})}},I.default.createElement(so,{onOpen:i,autoPlacement:c,forceOpen:r,nudge:t,step:e,root:f.current})))):null};var co=v.default.lazy(()=>import("./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-Checklist-LNLFH2HK.js")),lo=v.default.lazy(()=>import("./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-Nudges-2CV4BWAA.js")),uo=v.default.lazy(()=>import("./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-WidgetTableau-KHQ6HIAZ.js")),po=v.default.lazy(()=>import("./9bd3aeb651e6a7671cdc583bccbcd407d9376c97-ResourceCenterRoot-PP4ZSH3M.js")),mo=()=>{let t=k(),{generatedCSSClassname:e}=U(),n=()=>v.default.createElement(v.default.Fragment,null,v.default.createElement(v.Suspense,{fallback:null},v.default.createElement(lo,null)),t.nudgesManager&&v.default.createElement(kn,{nudgesManager:t.nudgesManager}),v.default.createElement(jt,{containerStyle:{marginTop:t.isEditorPreview?"51px":void 0}}),v.default.createElement("div",{id:"engagement-tooltip-container-portal"}),v.default.createElement(Pn,null)),r=()=>v.default.createElement(v.Suspense,{fallback:null},v.default.createElement(co,null)),o=s=>{var i,a;return t.resourceCenter?v.default.createElement(v.Suspense,{fallback:null},v.default.createElement(po,{isEnabled:!!t.resourceCenter.key&&!!((a=(i=t.decide)==null?void 0:i[t.resourceCenter.key])!=null&&a.value),isPreviewPane:s,isVisible:t.resourceCenter.visible,launcher:t.resourceCenter.desktopLauncher})):null};return v.default.createElement("div",{className:e,id:"engagement-theme-root",dir:"ltr"},t.showWidgetTableau?v.default.createElement(v.Suspense,{fallback:null},v.default.createElement(uo,null)):t.isEditorPreview?v.default.createElement(Bn,null,r(),n(),o(!0)):v.default.createElement(v.default.Fragment,null,r(),n(),o(!1)))},go=({children:t})=>{var a,c,l;let e=k(),{organization:n}=e,r=(0,v.useRef)(!!e.user),o=document.getElementById("engagement-wrapper"),s=xn(o!=null?o:document.head),i=(0,v.useMemo)(()=>{var g,p;let f=me(),h=(u,y,m,b,E,S,C,_)=>{if(u!==-1)return;let R="#engagement-wrapper",O=m[0];O&&O.includes(".")&&(m[0]=`${R} ${O}${O}`)};return ut({key:"engagement-toplevel",container:s,speedy:!((g=e.flags)!=null&&g["support-ruby-on-rails"]),nonce:(p=f[M])==null?void 0:p.nonce,stylisPlugins:[h]})},[s,(a=e.flags)==null?void 0:a["support-ruby-on-rails"]]);return(0,v.useEffect)(()=>{Tn.setOrganization(n)},[n]),v.default.useEffect(()=>{e.user&&(e.services.postMessageToDashboard("ENGAGEMENT_BOOTED"),r.current||(r.current=!0))},[(c=e.user)==null?void 0:c.device_id,(l=e.user)==null?void 0:l.user_id,n]),v.default.useEffect(()=>{let f=setTimeout(()=>{r.current||w.warn("\u{1F44B} Guides and Surveys are almost ready. You just need to call `boot()` to make them available in your app.")},15e3);return()=>clearTimeout(f)},[]),v.default.createElement(v.default.Fragment,null,v.default.createElement(pt,{value:i},e.user?v.default.createElement(mo,null):null,t))},fo=t=>{let e=k(),n=_n(e),r={container:document.getElementById("engagement-container"),root:document};return v.default.createElement(ft.Provider,{value:r},v.default.createElement(yt,{theme:n.theme,mode:n.mode},v.default.createElement(go,{...t})))},zn=fo;var Vn=t=>Te.default.createElement(dt,null,Te.default.createElement(lt,{store:t.store},Te.default.createElement(zn,null,t.children)));d();d();var xe=(t,e)=>{let n={};return Object.keys(e).forEach(r=>{n[r]=e[r].bind(null,t)}),n};var Ye={};Dr(Ye,{previewAutopilotKeywords:()=>Yn,previewContentItem:()=>Zn,previewRecSet:()=>Gn,previewResourceCenter:()=>qn,setInitialPage:()=>Xn,showResourceCenter:()=>jn});d();d();var jn=(t,e)=>{t.services.showResourceCenter(t,e)},Gn=(t,e)=>{t.services.previewRecSet(t,e)},qn=(t,e,n)=>{t.services.previewResourceCenter(t,e,n)},Yn=(t,e)=>{t.services.previewAutopilotKeywords(t,e)},Zn=(t,e)=>{t.services.setCurrentContentId(t,e)},Xn=(t,e)=>{t.resourceCenter.initialPage=e};d();var ho=t=>{var e,n,r,o;return typeof window>"u"||typeof document>"u"?t:{...t,event_properties:{...t.event_properties,"[Guides-Surveys] Page":{domain:(e=window.location)==null?void 0:e.hostname,hash:(n=window.location)==null?void 0:n.hash,path:(r=window.location)==null?void 0:r.pathname,query:(o=window.location)==null?void 0:o.search,title:document.title}}}},yo=t=>({...t,event_properties:{...t.event_properties,"[Guides-Surveys] Version":"1"}}),vo=t=>(t=yo(t),t=ho(t),t),ke=class{constructor(e){x(this,"hasBooted",!1);x(this,"integrations");this.integrations=e}trackEvent(e,n={}){this.track(e,n)}track(e,n={}){var o,s;let r={event_type:e,event_properties:n};if(!this.hasBooted){w.warn("Events cannot be tracked before `boot` is called");return}try{let i=vo(r);w.debug("Tracking event",JSON.stringify(i,null,2));try{this.integrations().forEach(a=>{var c;(c=a.track)==null||c.call(a,{event_type:i.event_type,event_properties:i.event_properties})})}catch(a){(o=F())==null||o.captureException(a)}}catch(i){w.error("Unexpected error logging event; ignoring",{error:i}),(s=F())==null||s.captureException(i)}}setBootStatus(e){this.hasBooted=e}};d();var bo=function(){function t(){}return t.prototype.getApplicationContext=function(){return{versionName:this.versionName,language:So(),platform:"Web",os:void 0,deviceModel:void 0}},t}(),So=function(){return typeof navigator<"u"&&(navigator.languages&&navigator.languages[0]||navigator.language)||""},Eo=function(){function t(){this.queue=[]}return t.prototype.logEvent=function(e){this.receiver?this.receiver(e):this.queue.length<512&&this.queue.push(e)},t.prototype.setEventReceiver=function(e){this.receiver=e,this.queue.length>0&&(this.queue.forEach(function(n){e(n)}),this.queue=[])},t}(),j=function(){return j=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},j.apply(this,arguments)};function _e(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Jn(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,s=[],i;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)s.push(o.value)}catch(a){i={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(i)throw i.error}}return s}var Ae=function(t,e){var n,r,o=["string","number","boolean","undefined"],s=typeof t,i=typeof e;if(s!==i)return!1;try{for(var a=_e(o),c=a.next();!c.done;c=a.next()){var l=c.value;if(l===s)return t===e}}catch(m){n={error:m}}finally{try{c&&!c.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}if(t==null&&e==null)return!0;if(t==null||e==null||t.length!==e.length)return!1;var f=Array.isArray(t),h=Array.isArray(e);if(f!==h)return!1;if(f&&h){for(var g=0;g<t.length;g++)if(!Ae(t[g],e[g]))return!1}else{var p=Object.keys(t).sort(),u=Object.keys(e).sort();if(!Ae(p,u))return!1;var y=!0;return Object.keys(t).forEach(function(m){Ae(t[m],e[m])||(y=!1)}),y}return!0},wo="$set",Io="$unset",Co="$clearAll";Object.entries||(Object.entries=function(t){for(var e=Object.keys(t),n=e.length,r=new Array(n);n--;)r[n]=[e[n],t[e[n]]];return r});var To=function(){function t(){this.identity={userProperties:{}},this.listeners=new Set}return t.prototype.editIdentity=function(){var e=this,n=j({},this.identity.userProperties),r=j(j({},this.identity),{userProperties:n});return{setUserId:function(o){return r.userId=o,this},setDeviceId:function(o){return r.deviceId=o,this},setUserProperties:function(o){return r.userProperties=o,this},setOptOut:function(o){return r.optOut=o,this},updateUserProperties:function(o){var s,i,a,c,l,f,h=r.userProperties||{};try{for(var g=_e(Object.entries(o)),p=g.next();!p.done;p=g.next()){var u=Jn(p.value,2),y=u[0],m=u[1];switch(y){case wo:try{for(var b=(a=void 0,_e(Object.entries(m))),E=b.next();!E.done;E=b.next()){var S=Jn(E.value,2),C=S[0],_=S[1];h[C]=_}}catch($){a={error:$}}finally{try{E&&!E.done&&(c=b.return)&&c.call(b)}finally{if(a)throw a.error}}break;case Io:try{for(var R=(l=void 0,_e(Object.keys(m))),O=R.next();!O.done;O=R.next()){var C=O.value;delete h[C]}}catch($){l={error:$}}finally{try{O&&!O.done&&(f=R.return)&&f.call(R)}finally{if(l)throw l.error}}break;case Co:h={};break}}}catch($){s={error:$}}finally{try{p&&!p.done&&(i=g.return)&&i.call(g)}finally{if(s)throw s.error}}return r.userProperties=h,this},commit:function(){return e.setIdentity(r),this}}},t.prototype.getIdentity=function(){return j({},this.identity)},t.prototype.setIdentity=function(e){var n=j({},this.identity);this.identity=j({},e),Ae(n,this.identity)||this.listeners.forEach(function(r){r(e)})},t.prototype.addIdentityListener=function(e){this.listeners.add(e)},t.prototype.removeIdentityListener=function(e){this.listeners.delete(e)},t}(),pe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:self,Me=function(){function t(){this.identityStore=new To,this.eventBridge=new Eo,this.applicationContextProvider=new bo}return t.getInstance=function(e){return pe.analyticsConnectorInstances||(pe.analyticsConnectorInstances={}),pe.analyticsConnectorInstances[e]||(pe.analyticsConnectorInstances[e]=new t),pe.analyticsConnectorInstances[e]},t}();d();var Pe=["boot"],Qn=["boot"],Ze="$default_instance";function er(t){var o,s,i,a,c,l,f;let e=window.engagement,n={_q:(o=e==null?void 0:e._q)!=null?o:[],_configuration:{apiKey:(i=(s=e==null?void 0:e._configuration)==null?void 0:s.apiKey)!=null?i:"",serverUrl:(a=e==null?void 0:e._configuration)==null?void 0:a.serverUrl,serverZone:(l=(c=e==null?void 0:e._configuration)==null?void 0:c.serverZone)!=null?l:"US",options:{...(f=e==null?void 0:e._configuration)==null?void 0:f.options}},_sentry:void 0,init(h,g){var b,E,S;if(n._configuration.apiKey){console.log("Engagement SDK has already been initialized. Ignoring additional init call.");return}n._configuration={...n._configuration,...g,apiKey:h,options:{splitting:!0,...n._configuration.options,...g==null?void 0:g.options}},(E=(b=n._configuration)==null?void 0:b.options)!=null&&E.logger&&n._configuration.options.logger.enable((S=n._configuration.options.logLevel)!=null?S:2);let p;if(g!=null&&g.cdnUrl)n._configuration.options.splitting?p=`${g.cdnUrl}/engagement-browser/prod/split/index.js`:p=g.cdnUrl+"/engagement-browser/prod/index.min.js.gz";else{let C=n._configuration.serverZone==="EU"?"https://cdn.eu.amplitude.com":"https://cdn.amplitude.com";n._configuration.options.splitting?p=`${C}/engagement-browser/prod/split/index.js`:p=`${C}/engagement-browser/prod/index.min.js.gz`}let u=null,y=()=>{if(u&&(clearTimeout(u),u=null),n._q&&n._q.length>0)for(console.warn(`Engagement SDK failed to load within ${m}ms. Resolving pending calls gracefully.`);n._q.length>0;){let C=n._q.shift();if(!C)continue;let _=C[0];if(Pe.includes(_)&&C[1]instanceof Function&&C[2]instanceof Function){let R=C[1];console.warn(`Engagement SDK method '${_}' resolved as no-op due to script loading failure`),R(void 0)}}};t(p,n._configuration.options.splitting?"module":void 0,g==null?void 0:g.nonce,y);let m=1e4;u=setTimeout(()=>{y()},m)},plugin(h){let g=n.init;return{name:"@amplitude/engagement-browser",type:"enrichment",async setup(p,u){var b,E;let y=(b=p.instanceName)!=null?b:Ze,m=Me.getInstance(y).identityStore;g(p.apiKey,{serverZone:p.serverZone,serverUrl:(E=p.serverUrl)!=null&&E.includes("amplitude.com")?void 0:p.serverUrl,...h,options:{logLevel:p.logLevel,logger:p.loggerProvider,...h==null?void 0:h.options}}),await window.engagement.boot({user:()=>{let S=m.getIdentity();return{user_id:u.getUserId(),device_id:u.getDeviceId(),user_properties:S.userProperties,getSessionId:u.getSessionId}},integrations:[{track:S=>{u.track(S)}}]}),m.addIdentityListener(S=>{window.engagement._setUserProperties(S.userProperties)})},async execute(p){return window.engagement.forwardEvent(p),p}}}},r=n;return new Proxy(n,{get:function(h,g){if(g in r)return r[g];if(g!=="then")return g==="gs"||g==="rc"?new Proxy({},{get:function(p,u){return function(){let y=Array.from(arguments),m=`${g}.${u}`;y.unshift(m),n._q.push(y)}}}):Pe.includes(g)?function(){let p=Array.prototype.slice.call(arguments);return new Promise((u,y)=>{p.unshift(g,u,y),n._q.push(p)})}:function(){let p=Array.prototype.slice.call(arguments);p.unshift(g),n._q.push(p)}}})}var xo=["reloadOrganization","reloadNudges","reloadThemes"],ko={},Ne=class{constructor(e,n){x(this,"_");x(this,"nudgeActions");x(this,"resourceCenterActions");x(this,"globalActions");x(this,"_analytics",new ke(()=>this._.integrations));x(this,"_configuration",{serverZone:"US",serverUrl:void 0,apiKey:"",options:{...ko}});x(this,"_initStarted",!1);x(this,"_isProxy",!1);x(this,"_fingerprint");x(this,"_sentry");x(this,"transformForHeadless",e=>e.map(n=>{var o,s,i,a,c,l,f,h,g,p,u;let r=JSON.parse(JSON.stringify(n));return(o=r.lifecycleConfig)!=null&&o.conditions&&delete r.lifecycleConfig.conditions,(s=r.pageTargeting)!=null&&s.conditions&&delete r.pageTargeting.conditions,(i=r.temporarilyHideTargeting)!=null&&i.conditions&&delete r.temporarilyHideTargeting.conditions,(c=(a=r.lifeCycleState)==null?void 0:a.checks)!=null&&c.sessionProperties&&delete r.lifeCycleState.checks.sessionProperties,(p=(g=(h=(f=(l=r.lifeCycleState)==null?void 0:l.checks)==null?void 0:f.limits)==null?void 0:h.detail)==null?void 0:g.limits)!=null&&p.conditions&&delete r.lifeCycleState.checks.limits.detail.limits.conditions,((u=r.lifeCycleState)==null?void 0:u.willRenderIfTriggered)!==void 0&&(r.lifeCycleState.passesAllChecks=r.lifeCycleState.willRenderIfTriggered,delete r.lifeCycleState.willRenderIfTriggered),r}));x(this,"gs",{reset:(e,n)=>{let r=Fe(this._,e);if(!r){w.warn(`gs.reset: Guide or survey with flagKey: ${e} not found`);return}this.nudgeActions.resetNudge(r==null?void 0:r.variantId,{step:n})},getAllGuidesAndSurveys:()=>{var r;let e=z(this._);if(!e)return[];let n=[];for(let o of e.values()){let s=o.getSnapshot().context.nudge,i=K(this._,s.variantId),a=o.getSnapshot().matches({Step:"Render Loop"}),c=!!(i!=null&&i.activelifeCycleUuid),l=ye(this._,s),f={activelifeCycleUuid:(i==null?void 0:i.activelifeCycleUuid)||"",currentStep:(i==null?void 0:i.currentStep)||0,isCompleted:(i==null?void 0:i.isCompleted)||!1,isDismissed:(i==null?void 0:i.isDismissed)||!1,isChecklistExpanded:(r=i==null?void 0:i.isChecklistExpanded)!=null?r:!0,steps:(i==null?void 0:i.steps)||{},shouldShow:a||c,checks:(l==null?void 0:l.checks)||{},willRenderIfTriggered:(l==null?void 0:l.willRenderIfTriggered)||!1};n.push({...s,lifeCycleState:f})}return this.transformForHeadless(n)},list:()=>{let e=[],n=z(this._);if(!n)return e;for(let r of n.values()){let o=r.getSnapshot().context.nudge,s=K(this._,o.variantId),i=r.getSnapshot().matches({Step:"Render Loop"});!(s!=null&&s.activelifeCycleUuid)&&!i||e.push({id:o.variantId,step:s==null?void 0:s.currentStep,title:o.title,status:i?"visible":"active"})}return e},show:(e,n=0)=>{let r=Fe(this._,e);r?(this.nudgeActions.closeAllNudgeMocks(),this.nudgeActions.forceTriggerSingleNudge(r,{source:{type:"sdk"},overrides:{stepIndex:n}})):w.error(`triggerNudge: Nudge with key: ${e} not found`)},closeAll:()=>{var e;(e=z(this._))==null||e.forEach(n=>{n==null||n.send({type:"DISMISS"})})}});x(this,"rc",{open:()=>{this.resourceCenterActions.showResourceCenter(!0)},close:()=>{this.resourceCenterActions.showResourceCenter(!1)},toggle:()=>{this.resourceCenterActions.showResourceCenter(!this._.resourceCenter.visible)}});var r,o;this._=e,this.nudgeActions=xe(e,ve),this.resourceCenterActions=xe(e,Ye),this.globalActions=xe(e,Nt),this.setRouter=this.setRouter.bind(this),this.boot=this.boot.bind(this),this._startNudgeDebug=this._startNudgeDebug.bind(this),this.forwardEvent=this.forwardEvent.bind(this),this.addIntegration=this.addIntegration.bind(this),this.setThemeMode=this.setThemeMode.bind(this),this.addCallback=this.addCallback.bind(this),this.setSessionProperty=this.setSessionProperty.bind(this),this._initStarted=((r=window.engagement)==null?void 0:r._initStarted)===!0,this._configuration={...this._configuration,...n,options:{...this._configuration.options,...n.options}},this._configuration.options.logger&&this._configuration.options.logger.enable((o=this._configuration.options.logLevel)!=null?o:2),this._sentry=vt("https://86e449af9e7145de4804c2143988499b@o13027.ingest.us.sentry.io/4508580659462144")}init(e,n){var r;if(this._configuration.apiKey){w.warn("Engagement SDK has already been initialized. Ignoring additional init call.");return}this._configuration={...this._configuration,apiKey:e,...n,options:{...this._configuration.options,...n==null?void 0:n.options}},this._configuration.options.logger&&this._configuration.options.logger.enable((r=this._configuration.options.logLevel)!=null?r:2)}plugin(e){return{name:"@amplitude/engagement-browser",type:"enrichment",setup:async(o,s)=>{var c;let i=(c=o.instanceName)!=null?c:Ze,a=Me.getInstance(i).identityStore;await this.boot({user:()=>{let l=a.getIdentity();return{user_id:s.getUserId(),device_id:s.getDeviceId(),user_properties:l.userProperties,getSessionId:s.getSessionId}},integrations:[{track:l=>{s.track(l)}}]}),a.addIdentityListener(l=>{this._setUserProperties(l.userProperties)})},execute:async o=>(this.forwardEvent(o),o)}}setRouter(e){this.globalActions.addCallbacks({"engagement-router":e})}async updateLanguage(e){var o;this._configuration&&(this._configuration.locale=e);let r=(await q(this._configuration.apiKey)).nudges;(o=z(this._))==null||o.forEach(s=>{let i=r.find(a=>a.variantId===s.getSnapshot().context.nudge.variantId);i&&(s==null||s.send({type:"REFRESH_NUDGE",nudge:i}))})}async boot(e){var n,r,o,s;if(typeof e.user=="function")try{this._.user=e.user()}catch(i){w.error("Failed to get user from provider function",i)}else typeof e=="string"?this._.user={user_id:e}:typeof e.user=="string"?this._.user={user_id:e.user}:this._.user=e.user;if(!this._.user||!this._.user.user_id&&!this._.user.device_id){w.error("User must specify at least a user_id or device_id"),this._.user=void 0;return}this._.integrations=[],(n=e.integrations)==null||n.forEach(i=>{this.addIntegration(i)}),w.log("booting...",JSON.stringify(this._.user,null,2));try{this._.decide=await Ot.decide(this._configuration.apiKey,this._.user,this._.isEditorPreview),w.debug("Decide data fetched successfully")}catch(i){w.error("Failed to fetch decide data",i),(r=F())==null||r.captureException(i)}try{await this._.endUserStore.fetchData(),this._.endUserStore.initializedSuccessfully&&(this._analytics.setBootStatus(!0),(o=this._.nudgesManager)==null||o.send({type:"END_USER_STORE_LOADED"}),w.debug("End user state loaded successfully"))}catch(i){w.error("Failed to fetch end user state",i),(s=F())==null||s.captureException(i)}}forwardEvent(e){typeof e=="string"&&(e={event_type:e}),w.debug(`Registering event ${e.event_type}`),Pt(this._,e.event_type,e.event_properties)}addIntegration(e){this._.integrations.push(e)}setThemeMode(e){["lightMode","darkMode","auto"].includes(e)&&(this._.themeMode=e)}addCallback(e,n){this.globalActions.addCallbacks({[e]:n})}setSessionProperty(e,n){if(!St(e)){console.error("Invalid session property key",e);return}if(!Et(n)){console.error("Invalid session property value",n);return}this.globalActions.setSessionProperties({[e]:n})}registerAction(e,n){let r=Ue(this._,e);if(!r){w.warn(`registerAction: Guide or survey with variantId: ${e} not found`);return}if(n.type==="show")this.nudgeActions.forceTriggerSingleNudge(r,{source:{type:"sdk"}});else if(n.type==="dismiss")ae(this._,r,0);else if(n.type==="snooze")Bt(this._,r,r.snoozeDuration,0);else if(n.type==="ctaClick"){let o=L(this._,e),s=K(this._,e),i=(s==null?void 0:s.currentStep)||0,a=r.steps[i];if(!a){w.error(`registerAction: Step ${i} not found for nudge ${e}`);return}let c=a.content.find(h=>{var g;return h.type==="button"&&((g=h.meta)==null?void 0:g.buttonType)===n.buttonType});if(!c){w.error(`registerAction: No button with type ${n.buttonType} found in step ${i}`);return}n.surveyResponse&&(o==null||o.send({type:"UPDATE_SURVEY_RESPONSE",surveyResponse:n.surveyResponse}));let l=c.meta,f=Ct(a,{buttonMeta:l,surveyResponse:n.surveyResponse});Rt(this._,f,l,0,o)}else w.error(`registerAction: Invalid action type "${n.type}". Must be "show", "dismiss", "snooze", or "ctaClick"`)}async _configUser(){var a;(a=F())==null||a.addBreadcrumb({level:"debug",category:"internal",message:"_configUser called"});let{organization:e,nudges:n,flags:r,themes:o,resourceCenters:s}=await q(this._configuration.apiKey,this._.isEditorPreview);this._.flags=r,this._.themes=o;let[i]=s;i&&(this._.resourceCenter={...this._.resourceCenter,...i}),this.globalActions.setOrganization(e),this.nudgeActions.initNudges(n||[]),this.nudgeActions.setupTimedTriggers([...n])}_updateEditorPreviewDevice(e){this._.editorPreviewDevice=e}_getEditorPreviewDevice(){return this._.editorPreviewDevice}async _reload(e=xo){let n=await q(this._configuration.apiKey,this._.isEditorPreview);for(let r of e){let s=this[r];s instanceof Function&&s(n)}}async _reloadOrganization(e){let{organization:n}=e||await q(this._configuration.apiKey,this._.isEditorPreview);this.globalActions.setOrganization(n)}async _reloadNudges(e){let{nudges:n}=e||await q(this._configuration.apiKey,this._.isEditorPreview);this.nudgeActions.initNudges(n||[])}async _reloadThemes(e){let{themes:n}=e||await q(this._configuration.apiKey,this._.isEditorPreview);this._.themes=n}_startNudgeDebug(e){let{nudge:n}=e;this.nudgeActions.closeAllNudgeMocks(),this.nudgeActions.startDebugSession(n,{refreshDecide:!0,toStepIndex:0})}async _stopNudgeDebug(){this.nudgeActions.stopDebugSession()}_showNudgeStepMock(e){var n;(n=z(this._))==null||n.forEach(r=>{r==null||r.send({type:"CLOSE"})}),this.nudgeActions.showStepMock(e.nudge,e.stepIndex,{forceOpen:e.forceOpen})}_closeNudgeMocks(){this.nudgeActions.closeAllNudgeMocks()}_setUserProperties(e){if(!this._.user){w.error("User is undefined, likely hasn't been booted yet");return}this._.user.user_properties={...this._.user.user_properties,...e}}_shareConfig(){return{organization:this._.organization||void 0,nudges:J(this._)}}_shareTrackedEvents(){return{trackedEvents:[...this._.trackedAppEvents]}}_startDebug(){X.set("debug:nudges","true"),w.log("Enabled debugging for nudges. Restart the application.")}_stopDebug(){X.remove("debug:nudges"),w.log("Disabled debugging for nudges. Restart the application.")}_showResourceCenter(e,n){this.resourceCenterActions.showResourceCenter(e),(n==null?void 0:n.recSet)!==void 0&&this.resourceCenterActions.previewRecSet(n.recSet),n!=null&&n.resourceCenter&&(n==null?void 0:n.quickLinks)!==void 0&&this.resourceCenterActions.previewResourceCenter(n.resourceCenter,n.quickLinks),(n==null?void 0:n.autopilotKeywords)!==void 0&&this.resourceCenterActions.previewAutopilotKeywords(n.autopilotKeywords),(n==null?void 0:n.contentItemId)!==void 0&&this.resourceCenterActions.previewContentItem(n.contentItemId)}_startChat(){this.resourceCenterActions.setInitialPage({item:{page:"chat",params:{}}}),this.resourceCenterActions.showResourceCenter(!0)}_getDebugSnapshot(e){if(e!=null&&e.variantId){if(typeof e.variantId=="number"){let r=Ue(this._,e.variantId);if(r){let o=typeof e.stepIndex=="number"?e.stepIndex:0,s=ye(this._,r,o),{name:i}=Le(r),a=`${i} debug snapshot: ${s.guideOrSurvey.title} - ${s.guideOrSurvey.variant}`;console.log(a,s)}}return}let n=J(this._);for(let r of n){let o=ye(this._,r),{name:s}=Le(r),i=`${s} debug snapshot: ${o.guideOrSurvey.title} - ${o.guideOrSurvey.variant}`;console.log(i,o)}}_debugStatus(){console.log({user:this._.user,apiKey:this._configuration.apiKey,stateInitialized:this._.endUserStore.initializedSuccessfully,decideSuccessful:this._.decide!=null,num_guides_surveys:J(this._).length,analyticsIntegrations:this._.integrations.length})}_setTheme(e,n){e||(this._.themeOverride=void 0),this._.themeOverride={theme:e,mode:n}}_showWidgetTableau(e,n){this._.widgetTableauSelection=n,this._.showWidgetTableau=e}_addCallback(e,n){this.globalActions.addCallbacks({[e]:n})}_clearNudgeInteractions(e){e?this._.endUserStore.data={nudgeInteractions:{...this._.endUserStore.data.nudgeInteractions,[e]:De()}}:this._.endUserStore.data={nudgeInteractions:Object.fromEntries(Object.keys(this._.endUserStore.data.nudgeInteractions).map(n=>[n,De()]))},this._.endUserStore.pushData()}};d();var tr=async(t,e)=>{let n=(a,c)=>{let l=c.split("."),f=a;for(let h of l){if(!(h in f)){w.warn(`Engagement SDK method ${c} is not defined.`);return}f=f[h]}return f},r=async a=>{let c=[...a],l=c.shift(),f=n(t,l);if(f)if(Pe.includes(l))if(c[0]instanceof Function){let h=c.shift(),g=c.shift();try{await f(...c).then(h,g)}catch(p){w.error(p)}}else await f(...c);else await f(...c)},s=(async a=>{do{let c=e.findIndex(f=>(f==null?void 0:f[0])===a);if(c===-1)break;let l=e.splice(c,1)[0];await r(l)}while(!0)})("boot"),i=[];for(;e.length>0;){let a=e.shift();if(!a)continue;let c=a[0];if(c==="boot"){i.push(a);continue}Qn.includes(c)?await r(a):r(a)}return e.length=0,s.then(async()=>{for(let a=0;a<i.length;a++){let c=i[a];await r(c)}}),t};d();var _o=4,Ao=500,Mo=500,nr=t=>{let e,n=0,r=0,o=()=>{let s=Date.now();s-r<=Mo&&(n+=1,clearTimeout(e),e=setTimeout(()=>n=0,Ao)),r=s,n>=_o&&(t.messageBus.publish("rage_click"),n=0,clearTimeout(e))};return document.body.addEventListener("click",o),()=>{document.body.removeEventListener("click",o)}};d();var rr=t=>{let s=0,i=-1,a=-1,c=-1,l,f=h=>{let{clientX:g,clientY:p,timeStamp:u}=h;if(i!==-1&&a!==-1&&c!==-1){let y=Math.abs(g-i),m=Math.abs(p-a);Math.sqrt(y**2+m**2)/(u-c)>5&&u-c<=100&&(s+=1,clearTimeout(l),l=setTimeout(()=>s=0,500)),s>=15&&(t.messageBus.publish("user_confusion"),s=0,clearTimeout(l))}i=g,a=p,c=u};return document.body.addEventListener("mousemove",f),()=>{document.body.removeEventListener("mousemove",f)}};d();var or=T(Cn()),Po=5e3,No=6e4,ir=t=>{let e=!1,n=()=>{e&&t.messageBus.publish("user_inactive")};setTimeout(()=>e=!0,No);let r=(0,or.default)(n,Po);return document.body.addEventListener("mousemove",r),document.body.addEventListener("keydown",r),()=>{document.body.removeEventListener("mousemove",r),document.body.removeEventListener("keydown",r)}};d();var sr=t=>{t.messageBus.subscribe("location_change",()=>{var n,r,o;(n=z(t))==null||n.forEach(s=>{let i=s.getSnapshot(),a=i.context.nudge;i.matches({Step:"Render Loop"})&&wt(t,a)&&(s==null||s.send({type:"CLOSE"}))});let e=bt(((r=t.organization)==null?void 0:r.shareLinkParam)||Be,t.location.search);if(e){let s=e.flagKey,i=J(t);if((o=t.nudgesManager)==null||o.send({type:"HANDLE_SHARE_LINK",flagKey:s}),i.find(a=>a.flagKey===s)){let a=new URL(window.location.href);a.searchParams.delete(Be);let c=a.toString();window.history.replaceState({},document.title,c)}}Ke(t,{trigger:{type:"active"},source:{type:"active"},overrides:{cooldown:!0,customThrottles:!0,page:!0}}),Ke(t,{trigger:{type:"immediately"},source:{type:"trigger",properties:{triggerType:"immediately"}}})})};d();var ar=t=>{let e=n=>{let r=n.data.action;if(r)r==="startDebugSession"?t.messageBus.publish("start_debug",{event:n}):r==="startRecorderSession"&&t.messageBus.publish("start_recorder",{event:n});else return};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}};d();d();var cr=T(Cn());var Oo={observerOptions:{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]},debounceMs:150},Oe=class{constructor(e,n,r=[],o={}){this.mutationObserver=null;this.processMutationsImmediately=()=>{if(this.mutationObserver)try{this.onMutations()}catch(e){w.error("Error processing mutations:",{error:e})}};this.handleMutations=e=>{try{e.some(r=>this.shouldProcessMutation(r))&&this.processMutationsDebounced()}catch(n){w.error("Error handling mutations:",{error:n,mutationCount:e.length})}};this.target=e,this.onMutations=n,this.filters=r,this.options={...Oo,...o},this.processMutationsDebounced=(0,cr.default)(this.processMutationsImmediately,this.options.debounceMs,{maxWait:this.options.debounceMs*2})}shouldProcessMutation(e){if(this.filters.length===0)return!0;try{return this.filters.every(n=>n(e))}catch(n){return w.error("Error in mutation filter:",{error:n,mutation:e}),!1}}cleanup(){var e;this.processMutationsDebounced.cancel(),(e=this.mutationObserver)==null||e.disconnect(),this.mutationObserver=null}observe(){return this.mutationObserver&&this.cleanup(),this.mutationObserver=new MutationObserver(this.handleMutations),this.mutationObserver.observe(this.target,this.options.observerOptions),()=>{this.cleanup()}}};var Do=t=>!(te(t.target)||Array.from(t.addedNodes).some(te)||Array.from(t.removedNodes).some(te)),dr=t=>new Oe(document.documentElement,()=>{t.messageBus.publish("dom_mutation")},[Do]).observe();d();d();var oe=T(N());var lr=(t,e,n,r={})=>{var c,l,f,h,g;if((f=(l=(c=me())==null?void 0:c[M])==null?void 0:l.options)!=null&&f.headless)return;let o=(h=r==null?void 0:r.renderMode)!=null?h:0;e=Mt(e,t);let s=It(e);if(fe(e)){t.activeChecklist={nudge:e,renderMode:o,defaultOpenIdx:o===1?n:void 0};return}if(Tt(e)){let[p]=e.steps,u=`${e.variantId}-${String(p.id)}${o===1?"-mock":""}`;ce(u,{asChild:!0,element:oe.default.createElement($n,{forceOpen:r==null?void 0:r.forceOpen,nudge:e,renderMode:o,step:p,anchorOverride:r==null?void 0:r.anchorOverride,handleDestroy:()=>ae(t,e,o),onMarkerView:()=>{if(o===1)return;let y=L(t,e.variantId);se.nudge.tooltipMarkerViewed(e,n,{...y==null?void 0:y.getSnapshot().context,interactionState:K(t,e.variantId)})},onOpen:()=>{o!==1&&se.nudge.viewed(e,n,{...r.context,interactionState:K(t,e.variantId)})}})});return}if(xt(e)){let[p]=e.steps,u=`${e.variantId}-${String(p.id)}${o===1?"-mock":""}`;An(u,{element:oe.default.createElement(wn,{nudge:e,stepIndex:n,renderMode:o}),sticky:p==null?void 0:p.formFactor.sticky,position:p==null?void 0:p.formFactor.position});return}let i=G(e,n),a=()=>{s&&ae(t,e,o)};switch(i==null?void 0:i.formFactor.type){case"popover":{let p=`${e.variantId}-${String(i.id)}${o===1?"-mock":""}`,u=i.formFactor.position==="center";ce(p,{element:oe.default.createElement(ze,{nudge:e,renderMode:o,stepIndex:n,center:u}),position:i.formFactor.position,duration:Number.POSITIVE_INFINITY,hasWideContent:Re(i),onEscapeKeyDown:a});break}case"modal":{t.currentModalNudge=gt({nudge:e,stepIndex:n,renderMode:o});break}case"pin":{he(i)&&ce(`${e.variantId}-${String(i.id)}${o===1?"-mock":""}`,{element:oe.default.createElement(En,{nudge:e,step:i,renderMode:o,stepIndex:n,anchorOverride:r==null?void 0:r.anchorOverride}),duration:Number.POSITIVE_INFINITY,onEscapeKeyDown:a,onEnterKeyDown:()=>Lt(t,e)});break}default:{(g=ct())==null||g.captureMessage(`Unknown form factor type: ${i==null?void 0:i.formFactor}`,"error",{captureContext:{tags:{product:"nudges"}}});let p=i&&Re(i);ce(`${e.variantId}-${String(i==null?void 0:i.id)}${o===1?"-mock":""}`,{element:oe.default.createElement(ze,{nudge:e,renderMode:o,stepIndex:n}),position:"top-right",duration:Number.POSITIVE_INFINITY,hasWideContent:p,onEscapeKeyDown:a})}}};d();var ur=(t,e)=>{let n=ee(t);if(!n)return;let r=()=>{e()};return n.addEventListener("click",r),()=>n.removeEventListener("click",r)};d();var pr=(t,e)=>{var n,r;for(let o=0;o<e.steps.length;o++){let s=G(e,o);((n=t.currentModalNudge)==null?void 0:n.renderMode)===1&&(t.currentModalNudge=null),((r=t.activeChecklist)==null?void 0:r.renderMode)===1&&(t.activeChecklist=null),We(`${e.variantId}-${String(s==null?void 0:s.id)}-mock`),Ge(`${e.variantId}-${String(s==null?void 0:s.id)}-mock`)}},mr=t=>{var e,n;Vt(/-mock$/),Mn(/-mock$/),((e=t.currentModalNudge)==null?void 0:e.renderMode)===1&&(t.currentModalNudge=null),((n=t.activeChecklist)==null?void 0:n.renderMode)===1&&(t.activeChecklist=null)},gr=(t,e,n)=>{var o;let r=G(e,n);if(fe(e)){if(!t.activeChecklist)return;t.activeChecklist=null}else kt(r)&&((o=t.currentModalNudge)==null?void 0:o.renderMode)!==1?t.currentModalNudge=null:(We(`${e.variantId}-${String(r==null?void 0:r.id)}`),Ge(`${e.variantId}-${String(r==null?void 0:r.id)}`))};d();var fr=(t,e)=>{In(t,e)},hr=(t,e)=>{t.resourceCenter.currentContentItemId=e?e.toString():null},yr=(t,e)=>{t.resourceCenter.previewedRecommendationSet=e},vr=(t,e,n)=>{t.resourceCenter={...t.resourceCenter,...e,previewedAdditionalResources:n}},br=(t,e)=>{t.resourceCenter.customAutopilotKeywords=e};d();var Sr=async(t,e)=>{var r,o;let n=()=>{};switch((r=e==null?void 0:e.meta)==null?void 0:r.type){case"intercom":n=()=>window.Intercom("showNewMessage");break;case"helpscout":n=()=>window.Beacon("open");break;case"freshdesk":n=()=>window.FreshworksWidget("open");break;case"freshchat":{n=async()=>window.fcWidget.open();break}case"gist":n=()=>window.gist.chat("open");break;case"crisp":n=()=>{window.$crisp.push(["do","chat:open"]),window.$crisp.push(["do","chat:show"])};break;case"talkdesk_v2":n=()=>{window.webchat.open()};break;case"zendesk":{n=()=>{try{window.zE("messenger","open")}catch(s){window.zE("webWidget","open"),window.zE("webWidget","show")}};break}case"liveChat":n=()=>window.LiveChatWidget.call("maximize");break;case"olark":n=()=>window.olark("api.box.expand");break;case"hubspot":n=()=>window.HubSpotConversations.widget.open();break;case"drift":n=()=>window.drift.api.openChat();break;case"pylon":n=()=>window.Pylon("show")}try{await n()}catch(s){(o=F())==null||o.captureException(s)}},Er=(t,e,n)=>{let r=At(e.value,t,!0);if(n){window.open(r,"_blank");return}switch(e.operation){case"router":{let o=t.callbacks["engagement-router"];if(o)o(r);else throw new _t("Link is of router type, but router is not defined.");break}case"self":window.open(r,"_self");break;case"blank":window.open(r,"_blank");break;default:window.open(r,"_blank");break}};var wr={renderNudge:lr,addClickListener:ur,clickElement:Zt,closeNudgeMock:pr,closeAllNudgeMocks:mr,closeStep:gr,onLocationChange:$t,postMessageToDashboard:Se,openChatExecutable:Sr,linkExecutable:Er,getDefaultUIMode:Ht,isElementVisible:Xt,matchesSelector:Yt,showResourceCenter:fr,setCurrentContentId:hr,previewRecSet:yr,previewResourceCenter:vr,previewAutopilotKeywords:br};d();var Xe=async(t,e)=>{let n=await fetch(t,{...e,body:e.body!=""?e.body:void 0});return{status:n.status,statusText:n.statusText,headers:Object.fromEntries(n.headers.entries()),data:await n.text(),ok:n.ok}};typeof window<"u"?window.simpleFetch=Xe:typeof globalThis<"u"?globalThis.simpleFetch=Xe:typeof window<"u"&&(window.simpleFetch=Xe);d();var Bo=t=>{let e=new TextEncoder().encode(t),n=Array.from(e,r=>String.fromCodePoint(r)).join("");return btoa(n)},Lo=t=>{let e=atob(t),n=new TextEncoder().encode(e);return JSON.parse(new TextDecoder().decode(n))};globalThis.base64Encode=Bo;globalThis.base64Decode=Lo;d();var Ro=t=>!t.target||!te(t.target),Ir=t=>{let e=n=>{Ro(n)&&t.messageBus.publish("click",{event:{type:n.type,target:n.target,currentTarget:n.currentTarget,preventDefault:()=>n.preventDefault(),stopPropagation:()=>n.stopPropagation()}})};return document.body.addEventListener("click",e),()=>{document.body.removeEventListener("click",e)}};d();var Uo=30,Fo=0,Cr=t=>{let e=null,n=()=>{t.messageBus.publish("exit_intent")},r=s=>{s.clientY>Uo||(e=setTimeout(n,Fo))},o=()=>{e&&(clearTimeout(e),e=null)};return document.documentElement.addEventListener("mouseleave",r),document.documentElement.addEventListener("mouseenter",o),()=>{document.body.removeEventListener("mouseleave",r),document.body.removeEventListener("mouseenter",o)}};d();var Tr="gs-debug-id",xr=t=>{t.messageBus.subscribe("location_change",()=>{let n=new URLSearchParams(t.location.search).get(Tr);if(n){let r=new URL(window.location.href);r.searchParams.delete(Tr);let o=r.toString();window.history.replaceState({},document.title,o),Dt(t,{variantId:Number(n)},{toStepIndex:0})}})};var Ko=()=>{let t=document.getElementById("engagement-wrapper"),e=document.getElementById("engagement-container");return t||(t=document.createElement("div"),t.setAttribute("id","engagement-wrapper"),t.setAttribute("data-engagement","1"),document.body.appendChild(t)),e||(e=document.createElement("div"),e.setAttribute("id","engagement-container"),e.setAttribute("data-engagement","1"),t.appendChild(e)),e},Ho=t=>{switch(t){case"US":return"https://gs.amplitude.com";case"EU":return"https://gs.eu.amplitude.com";default:return"http://localhost:10001"}},Je={local:"http://localhost:10002/index.js",staging:"https://cdn.amplitude.com/engagement-browser/staging/index.min.js.gz",stag:"https://cdn.amplitude.com/engagement-browser/staging/index.min.js.gz",stag2:"https://cdn.amplitude.com/engagement-browser/staging/index.min.js.gz",rc:"https://cdn.amplitude.com/engagement-browser/rc/index.min.js.gz",prod:"https://cdn.amplitude.com/engagement-browser/prod/index.min.js.gz",prodEu:"https://cdn.amplitude.com/engagement-browser/prod-eu/index.min.js.gz"},Qe={local:"http://localhost:10002/split/index.js",staging:"https://cdn.amplitude.com/engagement-browser/staging/split/index.js",stag:"https://cdn.amplitude.com/engagement-browser/staging/split/index.js",stag2:"https://cdn.amplitude.com/engagement-browser/staging/split/index.js",rc:"https://cdn.amplitude.com/engagement-browser/rc/split/index.js",prod:"https://cdn.amplitude.com/engagement-browser/prod/split/index.js",prodEu:"https://cdn.amplitude.com/engagement-browser/prod-eu/split/index.js"},et={local:"http://localhost:10001",staging:"https://gs.stag2.amplitude.com",stag:"https://gs.stag2.amplitude.com",stag2:"https://gs.stag2.amplitude.com",prod:"https://gs.amplitude.com",prodUs:"https://gs.amplitude.com",prodEu:"https://gs.eu.amplitude.com"};function Wo(t){let e={};return t.split(";").forEach(r=>{let[o,s]=r.split("=");o&&(e[o]=s)}),e}var kr=async()=>{var f,h,g,p,u,y;let t=localStorage.getItem("amplitude.engagement.launchCode");if(t){let m=Wo(t),b=document.currentScript||document.getElementById("engagement-sdk-bundle");if(b){let E=window.engagement[M].options.splitting&&(m==null?void 0:m.sdk)!=="local",S=E?Qe==null?void 0:Qe[m==null?void 0:m.sdk]:Je==null?void 0:Je[m==null?void 0:m.sdk];if(S&&b.src!==S){(f=b.parentNode)==null||f.removeChild(b);let C=document.createElement("script");C.src=S,C.id="engagement-sdk-bundle";let _=document.querySelector("[nonce]");_&&C.setAttribute("nonce",_.nonce||_.getAttribute("nonce")),E&&C.setAttribute("type","module"),document.getElementsByTagName("head")[0].appendChild(C);return}}if(m!=null&&m.server){let E=et==null?void 0:et[m==null?void 0:m.server];E&&(window.engagement[M].serverUrl=E)}}if(((h=window.engagement)==null?void 0:h._initStarted)===!0)return;window.engagement&&(window.engagement._initStarted=!0);let e=window.engagement,{apiKey:n,serverUrl:r,serverZone:o}=e._configuration,s=X.get("takeover","");if(!n)throw new Error("Organization `apiKey` has not been set on the global _configuration object. Make sure you've called `init` before loading this script");let i=X.get("localeOverride","");i&&(e[M].locale=i),e[M].serverUrl=r||Ho(o),e[M].apiKey=n,(g=e[M].options)!=null&&g.logger?console.log("Using custom logger",e[M].options.logger):(console.log("Using default logger"),e[M].options.logger=new at),(p=e[M].options)!=null&&p.logger&&e[M].options.logger.enable((y=(u=e[M].options)==null?void 0:u.logLevel)!=null?y:2),s&&(e[M].apiKey=s),w.log("initializing client SDK..."),zt();let a=document.getElementById("engagement-is-dashboard-preview-pane")!==null,c=Ut({isEditorPreview:a,platform:Wt(),location:{href:window.location.href,pathname:window.location.pathname,search:window.location.search},services:wr,persistResourceCenter:e._configuration.options.persistResourceCenter});Ft(c),e._configuration.options.headless||(nr(c),rr(c),ir(c),Cr(c),dr(c),Ir(c),sr(c),xr(c)),ar(c);let l=new Ne(c,e._configuration);if(await l._configUser(),l=await tr(l,e._q),Object.assign(window.engagement,l),Object.setPrototypeOf(window.engagement,l),e._configuration.options.headless)w.debug("Engagement bundle loaded in headless mode - no UI rendered");else{let m=Ko();Ar.default.render(_r.default.createElement(Vn,{store:c}),m),w.debug("Engagement bundle loaded and container rendered")}};Se("ENGAGEMENT_LOADED");window.engagement?kr().catch(console.error):window.engagement=er(kr);var Gd=void 0;export{Gd as default};
