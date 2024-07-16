import{j as e,B as n,K as A,T as a,G as l,o as u,F as b,y as B,h as x,A as T,E as I,D,C as H,d as M,I as V,x as C,z,H as K,J,b as j}from"./index-3yxb8THO.js";import{C as S,T as O,a as W,b as E,c as g,d,e as w,S as Q,f as X}from"./Search-BBtLKYIv.js";import{M as i}from"./MenuItem-CukhlBwf.js";import{R as _,S as q}from"./Settings-CNrzfM27.js";const Z=({handleCloseAddBankForm:s})=>e.jsxs(n,{children:[e.jsx(A,{onClick:s,sx:{float:"right"},children:e.jsx(S,{})}),e.jsx(a,{variant:"h5",gutterBottom:!0,children:"Add Bank"}),e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xs:12,children:e.jsx(u,{fullWidth:!0,label:"Bank Name",placeholder:"Enter Bank Name"})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(u,{fullWidth:!0,label:"Phone Number",placeholder:"Enter Phone Number"})}),e.jsx(l,{item:!0,xs:6,children:e.jsx(u,{fullWidth:!0,label:"Opening Balance",placeholder:"₹ Amount"})}),e.jsx(l,{item:!0,xs:6,children:e.jsx(b,{fullWidth:!0,children:e.jsxs(B,{defaultValue:"YOU GAVE",children:[e.jsx(i,{value:"YOU GAVE",children:"YOU GAVE"}),e.jsx(i,{value:"YOU GOT",children:"YOU GOT"})]})})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(u,{fullWidth:!0,label:"Address",multiline:!0,rows:4,placeholder:"Enter Address"})})]}),e.jsx(n,{sx:{mt:2},children:e.jsx(x,{variant:"contained",fullWidth:!0,children:"Add Bank"})})]}),$=({selectedBank:s,handleCloseDetails:t})=>e.jsxs(n,{children:[e.jsx(A,{onClick:t,sx:{float:"right"},children:e.jsx(S,{})}),e.jsxs(n,{sx:{display:"flex",alignItems:"center",mb:2},children:[e.jsx(T,{sx:{bgcolor:I[900],mr:2,fontWeight:"bold",color:"white"},children:s.name.charAt(0)}),e.jsxs(n,{children:[e.jsx(a,{variant:"h5",children:s.name}),e.jsx(a,{variant:"body2",children:"1234-678-256"})]})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsxs(a,{variant:"body2",children:[e.jsx("strong",{children:"Due Date: "}),"17 March 2024"]}),e.jsxs(a,{variant:"body2",children:[e.jsx("strong",{children:"Net Balance: "}),"YOU WILL GET: ₹ 12,000"]})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsx(x,{variant:"contained",startIcon:e.jsx(_,{}),children:"Report"}),e.jsx(x,{variant:"contained",startIcon:e.jsx(q,{}),children:"Settings"})]}),e.jsx(D,{sx:{mb:2}}),e.jsx(O,{children:e.jsxs(W,{children:[e.jsx(E,{children:e.jsxs(g,{children:[e.jsx(d,{children:"ENTRY"}),e.jsx(d,{align:"right",children:"YOU GAVE"}),e.jsx(d,{align:"right",children:"YOU GET"})]})}),e.jsx(w,{children:Array.from({length:10}).map((r,c)=>e.jsxs(g,{children:[e.jsxs(d,{children:[e.jsx(a,{variant:"body2",children:"16 April 2023, 09:32 AM"}),e.jsx(a,{variant:"caption",color:"textSecondary",children:"Balance: 1,321"})]}),e.jsx(d,{align:"right",children:"-"}),e.jsx(d,{align:"right",children:"₹ 2,000"})]},c))})]})}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[e.jsx(x,{variant:"contained",children:"PAY"}),e.jsx(x,{variant:"contained",children:"GET"})]})]}),P=({children:s,...t})=>e.jsx(H,{...t,children:e.jsx(M,{children:s})}),ee={get:K[500],lose:J[500]},se={get:"YOU WILL GET",lose:"YOU WILL LOSE"},ne=({data:s,page:t,rowsPerPage:r,handleChangePage:c,handleChangeRowsPerPage:p,handleRowClick:m,handleOpenAddBankForm:y,handleChange:f})=>{const v=s.slice(t*r,t*r+r);return e.jsxs(P,{children:[e.jsx(n,{children:e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsx(a,{variant:"h2",children:"Banks"}),e.jsx(x,{variant:"contained",onClick:y,children:"Create Bank"})]})}),e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(b,{fullWidth:!0,sx:{m:1},children:e.jsx(u,{variant:"outlined",placeholder:"Search by banks",InputProps:{startAdornment:e.jsx(V,{position:"start",children:e.jsx(Q,{})})}})})}),e.jsx(l,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(b,{fullWidth:!0,sx:{m:1},children:[e.jsx(C,{id:"filter-by-label",children:"Filter By"}),e.jsxs(B,{labelId:"filter-by-label",id:"filter-by",value:"",label:"Filter By",children:[e.jsx(i,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(i,{value:10,children:"Ten"}),e.jsx(i,{value:20,children:"Twenty"}),e.jsx(i,{value:30,children:"Thirty"})]})]})}),e.jsx(l,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(b,{fullWidth:!0,sx:{m:1},children:[e.jsx(C,{id:"sort-by-label",children:"Sort By"}),e.jsxs(B,{labelId:"sort-by-label",id:"sort-by",value:"",label:"Sort By",onChange:f,children:[e.jsx(i,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(i,{value:10,children:"Ten"}),e.jsx(i,{value:20,children:"Twenty"}),e.jsx(i,{value:30,children:"Thirty"})]})]})}),e.jsxs(z,{sx:{width:"100%",overflow:"hidden"},children:[e.jsx(O,{sx:{maxHeight:440},children:e.jsxs(W,{stickyHeader:!0,"aria-label":"customized table",children:[e.jsx(E,{children:e.jsxs(g,{children:[e.jsx(d,{children:"Name"}),e.jsx(d,{align:"right",children:"Amount"})]})}),e.jsx(w,{children:v.map((o,k)=>e.jsxs(g,{hover:!0,onClick:()=>m(o),style:{cursor:"pointer"},children:[e.jsx(d,{children:e.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(T,{sx:{bgcolor:I[900],mr:2,fontWeight:"bold",color:"white"},children:o.name.charAt(0)}),e.jsxs(n,{children:[e.jsx(a,{variant:"body1",children:o.name}),e.jsxs(a,{variant:"body2",color:"textSecondary",children:[o.daysAgo," days ago"]})]})]})}),e.jsx(d,{align:"right",children:e.jsx(n,{children:e.jsxs(a,{variant:"body1",sx:{color:ee[o.status],fontWeight:"bold"},children:[se[o.status],": ",o.amount]})})})]},k))})]})}),e.jsx(X,{rowsPerPageOptions:[5,10,25],component:"div",count:s.length,rowsPerPage:r,page:t,onPageChange:c,onRowsPerPageChange:p})]})]})]})},le="/assets/8953258-onHWXQNK.jpg",de=()=>{const[s,t]=j.useState(!1),[r,c]=j.useState(null),[p,m]=j.useState(0),[y,f]=j.useState(5),[v,o]=j.useState([{name:"Bank 1",amount:"₹ 12,000",status:"get",daysAgo:2},{name:"Bank 2",amount:"₹ 6,000",status:"lose",daysAgo:5}]),k=()=>{t(!0),c(null)},G=()=>{t(!1),c(null)},Y=h=>{c(h),t(!1)},F=()=>{c(null),t(!1)},N=(h,L)=>{m(L)},R=h=>{f(parseInt(h.target.value,10)),m(0)},U=h=>{};return e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xs:12,md:12,lg:6,sx:{display:!r&&!s?{xs:"block",sm:"block",md:"block",lg:"block"}:{xs:"none",sm:"none",md:"none",lg:"block"}},children:e.jsx(ne,{data:v,page:p,rowsPerPage:y,handleChangePage:N,handleChangeRowsPerPage:R,handleRowClick:Y,handleOpenAddBankForm:k,handleChange:U})}),e.jsx(l,{item:!0,xs:12,md:12,lg:6,sx:{display:r||s?{xs:"block",sm:"block",md:"block",lg:"block"}:{xs:"none",sm:"none",md:"none",lg:"block"}},children:e.jsx(P,{p:10,sx:{minHeight:"1vh"},children:r?e.jsx($,{selectedBank:r,handleCloseDetails:F}):s?e.jsx(Z,{handleCloseAddBankForm:G}):e.jsx("img",{src:le,style:{maxWidth:"100%"}})})})]})};export{de as default};
