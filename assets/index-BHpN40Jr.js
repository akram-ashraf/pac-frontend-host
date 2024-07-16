import{j as e,C as D,d as M,B as n,T as a,h as j,G as s,F as b,o as g,I as H,x as C,y as S,z as V,A as T,E as I,H as z,J as K,K as E,D as J,b as p}from"./index-3yxb8THO.js";import{S as Q,T as k,a as w,b as O,c as y,d as i,e as G,f as X,C as W}from"./Search-BBtLKYIv.js";import{M as r}from"./MenuItem-CukhlBwf.js";import{R as Z,S as _}from"./Settings-CNrzfM27.js";const P=({children:l,...o})=>e.jsx(D,{...o,children:e.jsx(M,{children:l})}),q={get:z[500],lose:K[500]},$={get:"YOU WILL GET",lose:"YOU WILL LOSE"},ee=({data:l,page:o,rowsPerPage:d,handleChangePage:c,handleChangeRowsPerPage:A,handleRowClick:v,handleOpenAddSupplierForm:x,handleChange:h})=>{const m=l.slice(o*d,o*d+d);return e.jsxs(P,{children:[e.jsx(n,{children:e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsx(a,{variant:"h2",children:"Suppliers"}),e.jsx(j,{variant:"contained",onClick:x,children:"Create Supplier"})]})}),e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:12,md:6,children:e.jsx(b,{fullWidth:!0,sx:{m:1},children:e.jsx(g,{variant:"outlined",placeholder:"Search by suppliers",InputProps:{startAdornment:e.jsx(H,{position:"start",children:e.jsx(Q,{})})}})})}),e.jsx(s,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(b,{fullWidth:!0,sx:{m:1},children:[e.jsx(C,{id:"filter-by-label",children:"Filter By"}),e.jsxs(S,{labelId:"filter-by-label",id:"filter-by",value:"",label:"Filter By",children:[e.jsx(r,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(r,{value:10,children:"Ten"}),e.jsx(r,{value:20,children:"Twenty"}),e.jsx(r,{value:30,children:"Thirty"})]})]})}),e.jsx(s,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(b,{fullWidth:!0,sx:{m:1},children:[e.jsx(C,{id:"sort-by-label",children:"Sort By"}),e.jsxs(S,{labelId:"sort-by-label",id:"sort-by",value:"",label:"Sort By",onChange:h,children:[e.jsx(r,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(r,{value:10,children:"Ten"}),e.jsx(r,{value:20,children:"Twenty"}),e.jsx(r,{value:30,children:"Thirty"})]})]})}),e.jsxs(V,{sx:{width:"100%",overflow:"hidden"},children:[e.jsx(k,{sx:{maxHeight:440},children:e.jsxs(w,{stickyHeader:!0,"aria-label":"customized table",children:[e.jsx(O,{children:e.jsxs(y,{children:[e.jsx(i,{children:"Name"}),e.jsx(i,{align:"right",children:"Amount"})]})}),e.jsx(G,{children:m.map((t,f)=>e.jsxs(y,{hover:!0,onClick:()=>v(t),style:{cursor:"pointer"},children:[e.jsx(i,{children:e.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(T,{sx:{bgcolor:I[900],mr:2,fontWeight:"bold",color:"white"},children:t.name.charAt(0)}),e.jsxs(n,{children:[e.jsx(a,{variant:"body1",children:t.name}),e.jsxs(a,{variant:"body2",color:"textSecondary",children:[t.daysAgo," days ago"]})]})]})}),e.jsxs(i,{align:"right",children:[e.jsxs(a,{variant:"body1",sx:{fontWeight:"bold"},children:["₹ ",t.amount]}),e.jsx(a,{variant:"body2",sx:{color:q[t.status]},children:$[t.status]})]})]},f))})]})}),e.jsx(X,{rowsPerPageOptions:[5,10,25],component:"div",count:l.length,rowsPerPage:d,page:o,onPageChange:c,onRowsPerPageChange:A})]})]})]})},se=({selectedSupplier:l,handleCloseDetails:o})=>e.jsxs(n,{children:[e.jsx(E,{onClick:o,sx:{float:"right"},children:e.jsx(W,{})}),e.jsxs(n,{sx:{display:"flex",alignItems:"center",mb:2},children:[e.jsx(T,{sx:{bgcolor:I[900],mr:2,fontWeight:"bold",color:"white"},children:l.name.charAt(0)}),e.jsxs(n,{children:[e.jsx(a,{variant:"h5",children:l.name}),e.jsx(a,{variant:"body2",children:"1234-678-256"})]})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsxs(a,{variant:"body2",children:[e.jsx("strong",{children:"Due Date: "}),"17 March 2024"]}),e.jsxs(a,{variant:"body2",children:[e.jsx("strong",{children:"Net Balance: "}),"YOU WILL GET: ₹ 12,000"]})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsx(j,{variant:"contained",startIcon:e.jsx(Z,{}),children:"Report"}),e.jsx(j,{variant:"contained",startIcon:e.jsx(_,{}),children:"Settings"})]}),e.jsx(J,{sx:{mb:2}}),e.jsx(k,{children:e.jsxs(w,{children:[e.jsx(O,{children:e.jsxs(y,{children:[e.jsx(i,{children:"ENTRY"}),e.jsx(i,{align:"right",children:"YOU GAVE"}),e.jsx(i,{align:"right",children:"YOU GET"})]})}),e.jsx(G,{children:Array.from({length:10}).map((d,c)=>e.jsxs(y,{children:[e.jsxs(i,{children:[e.jsx(a,{variant:"body2",children:"16 April 2023, 09:32 AM"}),e.jsx(a,{variant:"caption",color:"textSecondary",children:"Balance: 1,321"})]}),e.jsx(i,{align:"right",children:"-"}),e.jsx(i,{align:"right",children:"₹ 2,000"})]},c))})]})}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[e.jsx(j,{variant:"contained",children:"PAY"}),e.jsx(j,{variant:"contained",children:"GET"})]})]}),te=({handleCloseAddSupplierForm:l})=>e.jsxs(n,{children:[e.jsx(E,{onClick:l,sx:{float:"right"},children:e.jsx(W,{})}),e.jsx(a,{variant:"h5",gutterBottom:!0,children:"Add Supplier"}),e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(g,{fullWidth:!0,label:"Supplier Name",placeholder:"Enter Supplier Name"})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(g,{fullWidth:!0,label:"Phone Number",placeholder:"Enter Phone Number"})}),e.jsx(s,{item:!0,xs:6,children:e.jsx(g,{fullWidth:!0,label:"Opening Balance",placeholder:"₹ Amount"})}),e.jsx(s,{item:!0,xs:6,children:e.jsx(b,{fullWidth:!0,children:e.jsxs(S,{defaultValue:"YOU GAVE",children:[e.jsx(r,{value:"YOU GAVE",children:"YOU GAVE"}),e.jsx(r,{value:"YOU GOT",children:"YOU GOT"})]})})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(g,{fullWidth:!0,label:"Address",multiline:!0,rows:4,placeholder:"Enter Address"})})]}),e.jsx(n,{sx:{mt:2},children:e.jsx(j,{variant:"contained",fullWidth:!0,children:"Add Supplier"})})]}),ne="/assets/20945983-CtEQrukv.jpg",ae=[{name:"Alpha Supplies",daysAgo:5,amount:1500,status:"get"},{name:"Beta Trading",daysAgo:3,amount:1500,status:"lose"},{name:"Gamma Goods",daysAgo:10,amount:1500,status:"get"},{name:"Delta Enterprises",daysAgo:7,amount:2e3,status:"get"},{name:"Epsilon Imports",daysAgo:2,amount:1800,status:"lose"},{name:"Zeta Products",daysAgo:9,amount:1700,status:"get"},{name:"Eta Supplies",daysAgo:4,amount:2200,status:"lose"},{name:"Theta Goods",daysAgo:6,amount:1900,status:"get"},{name:"Iota Enterprises",daysAgo:8,amount:1600,status:"lose"},{name:"Kappa Trading",daysAgo:3,amount:2100,status:"get"},{name:"Lambda Imports",daysAgo:11,amount:2300,status:"lose"},{name:"Mu Products",daysAgo:5,amount:2400,status:"get"},{name:"Nu Supplies",daysAgo:7,amount:2600,status:"lose"},{name:"Xi Goods",daysAgo:9,amount:1800,status:"get"},{name:"Omicron Enterprises",daysAgo:4,amount:2e3,status:"lose"}],de=()=>{const[l,o]=p.useState(""),[d,c]=p.useState(0),[A,v]=p.useState(5),[x,h]=p.useState(null),[m,t]=p.useState(!1),f=u=>{o(u.target.value)},B=(u,U)=>{c(U)},Y=u=>{v(parseInt(u.target.value,10)),c(0)},F=u=>{h(u),t(!1)},L=()=>{h(null),t(!1)},N=()=>{t(!0),h(null)},R=()=>{t(!1),h(null)};return e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:12,md:12,lg:6,sx:{display:!x&&!m?{xs:"block",sm:"block",md:"block",lg:"block"}:{xs:"none",sm:"none",md:"none",lg:"block"}},children:e.jsx(ee,{data:ae,page:d,rowsPerPage:A,handleChangePage:B,handleChangeRowsPerPage:Y,handleRowClick:F,handleOpenAddSupplierForm:N,handleChange:f})}),e.jsx(s,{item:!0,xs:12,md:12,lg:6,sx:{display:x||m?{xs:"block",sm:"block",md:"block",lg:"block"}:{xs:"none",sm:"none",md:"none",lg:"block"}},children:e.jsx(P,{p:10,sx:{minHeight:"1vh"},children:x?e.jsx(se,{selectedSupplier:x,handleCloseDetails:L}):m?e.jsx(te,{handleCloseAddSupplierForm:R}):e.jsx("img",{src:ne,style:{maxWidth:"100%"}})})})]})};export{de as default};
