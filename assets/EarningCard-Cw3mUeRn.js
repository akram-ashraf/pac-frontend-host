import{W as R,X as _,aC as b,s as $,_ as h,aD as S,aE as m,b as U,Z as E,$ as M,j as i,a0 as X,a1 as A,C as N,d as W,G as r}from"./index-3yxb8THO.js";function B(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function F(t){return parseFloat(t)}function G(t){return R("MuiSkeleton",t)}_("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const K=["animation","className","component","height","style","variant","width"];let d=t=>t,f,x,C,v;const P=t=>{const{classes:a,variant:e,animation:n,hasChildren:s,width:c,height:o}=t;return A({root:["root",e,n,s&&"withChildren",s&&!c&&"fitContent",s&&!o&&"heightAuto"]},G,a)},T=b(f||(f=d`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),D=b(x||(x=d`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),L=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=B(t.shape.borderRadius)||"px",n=F(t.shape.borderRadius);return h({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:S(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${e}/${Math.round(n/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&m(C||(C=d`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),T),({ownerState:t,theme:a})=>t.animation==="wave"&&m(v||(v=d`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),D,(a.vars||a).palette.action.hover)),l=U.forwardRef(function(a,e){const n=E({props:a,name:"MuiSkeleton"}),{animation:s="pulse",className:c,component:o="span",height:u,style:j,variant:k="text",width:w}=n,g=M(n,K),p=h({},n,{animation:s,component:o,variant:k,hasChildren:!!g.children}),y=P(p);return i.jsx(L,h({as:o,ref:e,className:X(y.root,c),ownerState:p},g,{style:h({width:w,height:u},j)}))}),V=()=>i.jsx(N,{children:i.jsx(W,{children:i.jsxs(r,{container:!0,direction:"column",children:[i.jsx(r,{item:!0,children:i.jsxs(r,{container:!0,justifyContent:"space-between",children:[i.jsx(r,{item:!0,children:i.jsx(l,{variant:"rectangular",width:44,height:44})}),i.jsx(r,{item:!0,children:i.jsx(l,{variant:"rectangular",width:34,height:34})})]})}),i.jsx(r,{item:!0,children:i.jsx(l,{variant:"rectangular",sx:{my:2},height:40})}),i.jsx(r,{item:!0,children:i.jsx(l,{variant:"rectangular",height:30})})]})})});export{V as E,l as S};
