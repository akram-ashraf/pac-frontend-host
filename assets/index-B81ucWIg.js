import{j as e,C as Q,d as q,B as n,T as r,h as u,G as t,F as f,o as g,I as X,x as E,y as k,z as Z,A as N,E as O,H as ee,J as se,K as W,D as te,b as h,c as D,ad as ne}from"./index-3yxb8THO.js";import{S as re,T as B,a as U,b as P,c as C,d as o,e as G,f as ae,C as Y}from"./Search-BBtLKYIv.js";import{M as i}from"./MenuItem-CukhlBwf.js";import{R as le,S as ie}from"./Settings-CNrzfM27.js";import{C as oe}from"./20943572-P2-rZDR-.js";import{a as ce}from"./axios-C6NQisi-.js";const F=({children:s,...a})=>e.jsx(Q,{...a,children:e.jsx(q,{children:s})}),de=s=>{if(isNaN(s))return console.error(`Invalid date: ${s}`),NaN;const a=new Date,c=new Date(s),x=a-c;return Math.floor(x/(1e3*60*60*24))},he={get:ee[500],lose:se[500]},xe={get:"YOU WILL GET",lose:"YOU WILL LOSE"},je=({data:s,page:a,rowsPerPage:c,handleChangePage:x,handleChangeRowsPerPage:v,handleRowClick:T,handleOpenAddCategoryForm:A,handleChange:m})=>{const y=s.slice(a*c,a*c+c);return console.log("category",y),e.jsxs(F,{children:[e.jsx(n,{children:e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsx(r,{variant:"h2",children:"Categorys"}),e.jsx(u,{variant:"contained",onClick:A,children:"Create Categorys"})]})}),e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,md:6,children:e.jsx(f,{fullWidth:!0,sx:{m:1},children:e.jsx(g,{variant:"outlined",placeholder:"Search by Categorys",InputProps:{startAdornment:e.jsx(X,{position:"start",children:e.jsx(re,{})})}})})}),e.jsx(t,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(f,{fullWidth:!0,sx:{m:1},children:[e.jsx(E,{id:"filter-by-label",children:"Filter By"}),e.jsxs(k,{labelId:"filter-by-label",id:"filter-by",value:"",label:"Filter By",children:[e.jsx(i,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(i,{value:10,children:"Ten"}),e.jsx(i,{value:20,children:"Twenty"}),e.jsx(i,{value:30,children:"Thirty"})]})]})}),e.jsx(t,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(f,{fullWidth:!0,sx:{m:1},children:[e.jsx(E,{id:"sort-by-label",children:"Sort By"}),e.jsxs(k,{labelId:"sort-by-label",id:"sort-by",value:"",label:"Sort By",onChange:m,children:[e.jsx(i,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(i,{value:10,children:"Ten"}),e.jsx(i,{value:20,children:"Twenty"}),e.jsx(i,{value:30,children:"Thirty"})]})]})}),e.jsxs(Z,{sx:{width:"100%",overflow:"hidden"},children:[e.jsx(B,{sx:{maxHeight:440},children:e.jsxs(U,{stickyHeader:!0,"aria-label":"customized table",children:[e.jsx(P,{children:e.jsxs(C,{children:[e.jsx(o,{children:"Name"}),e.jsx(o,{align:"right",children:"Quantity"})]})}),e.jsx(G,{children:y.map((d,j)=>e.jsxs(C,{hover:!0,onClick:()=>T(d),style:{cursor:"pointer"},children:[e.jsx(o,{children:e.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(N,{sx:{bgcolor:O[900],mr:2,fontWeight:"bold",color:"white"},children:d.Cat_Name.charAt(0)}),e.jsxs(n,{children:[e.jsx(r,{variant:"body1",children:d.Cat_Name}),e.jsxs(r,{variant:"body2",color:"textSecondary",children:[de(Date.parse(d.createdAt))," days ago"]})]})]})}),e.jsxs(o,{align:"right",children:[e.jsx(r,{variant:"body1",sx:{fontWeight:"bold"},children:"0"}),e.jsx(r,{variant:"body2",sx:{color:he[d.status]},children:xe[d.status]})]})]},j))})]})}),e.jsx(ae,{rowsPerPageOptions:[5,10,25],component:"div",count:s.length,rowsPerPage:c,page:a,onPageChange:x,onRowsPerPageChange:v})]})]})]})},ue=({selectedCategory:s,handleCloseDetails:a})=>e.jsxs(n,{children:[e.jsx(W,{onClick:a,sx:{float:"right"},children:e.jsx(Y,{})}),e.jsxs(n,{sx:{display:"flex",alignItems:"center",mb:2},children:[e.jsx(N,{sx:{bgcolor:O[900],mr:2,fontWeight:"bold",color:"white"},children:s.Cat_Name.charAt(0)}),e.jsxs(n,{children:[e.jsx(r,{variant:"h5",children:s.name}),e.jsx(r,{variant:"body2",children:"1234-678-256"})]})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsxs(r,{variant:"body2",children:[e.jsx("strong",{children:"Due Date: "}),"17 March 2024"]}),e.jsxs(r,{variant:"body2",children:[e.jsx("strong",{children:"Net Balance: "}),"YOU WILL GET: ₹ 12,000"]})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsx(u,{variant:"contained",startIcon:e.jsx(le,{}),children:"Report"}),e.jsx(u,{variant:"contained",startIcon:e.jsx(ie,{}),children:"Settings"})]}),e.jsx(te,{sx:{mb:2}}),e.jsx(B,{children:e.jsxs(U,{children:[e.jsx(P,{children:e.jsxs(C,{children:[e.jsx(o,{children:"ENTRY"}),e.jsx(o,{align:"right",children:"YOU GAVE"}),e.jsx(o,{align:"right",children:"YOU GET"})]})}),e.jsx(G,{children:Array.from({length:10}).map((c,x)=>e.jsxs(C,{children:[e.jsxs(o,{children:[e.jsx(r,{variant:"body2",children:"16 April 2023, 09:32 AM"}),e.jsx(r,{variant:"caption",color:"textSecondary",children:"Balance: 1,321"})]}),e.jsx(o,{align:"right",children:"-"}),e.jsx(o,{align:"right",children:"₹ 2,000"})]},x))})]})}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[e.jsx(u,{variant:"contained",children:"PAY"}),e.jsx(u,{variant:"contained",children:"GET"})]})]}),ge=({handleCloseAddCategoryForm:s})=>e.jsxs(n,{children:[e.jsx(W,{onClick:s,sx:{float:"right"},children:e.jsx(Y,{})}),e.jsx(r,{variant:"h5",gutterBottom:!0,children:"Add Category"}),e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(g,{fullWidth:!0,label:"Category Name",placeholder:"Enter Category Name"})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(g,{fullWidth:!0,label:"Phone Number",placeholder:"Enter Phone Number"})}),e.jsx(t,{item:!0,xs:6,children:e.jsx(g,{fullWidth:!0,label:"Opening Balance",placeholder:"₹ Amount"})}),e.jsx(t,{item:!0,xs:6,children:e.jsx(f,{fullWidth:!0,children:e.jsxs(k,{defaultValue:"YOU GAVE",children:[e.jsx(i,{value:"YOU GAVE",children:"YOU GAVE"}),e.jsx(i,{value:"YOU GOT",children:"YOU GOT"})]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(g,{fullWidth:!0,label:"Address",multiline:!0,rows:4,placeholder:"Enter Address"})})]}),e.jsx(n,{sx:{mt:2},children:e.jsx(u,{variant:"contained",fullWidth:!0,children:"Add Category"})})]}),Ae=()=>{const[s,a]=h.useState([]),[c,x]=h.useState(""),[v,T]=h.useState(""),[A,m]=h.useState(0),[y,d]=h.useState(5),[j,b]=h.useState(null),[w,p]=h.useState(!1),R=D(l=>l.authUser).auth.token,L=D(l=>l.selectCompany).token,M=l=>{T(l.target.value)},H=(l,S)=>{m(S)},V=l=>{d(parseInt(l.target.value,10)),m(0)},_=l=>{b(l),p(!1)},$=()=>{b(null),p(!1)},z=()=>{p(!0),b(null)},J=()=>{p(!1),b(null)};return h.useEffect(()=>{(async S=>{try{const K=await(await ce.get(`${ne.apiBaseUrl}/api/category/`,{headers:{"Content-Type":"application/json",Authorization:`pac ${R}`,"x-client-id":`${L}`}})).data;a(await K.data)}catch(I){console.error("Error fetching categories",I),x(I)}})()},[]),e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,md:12,lg:6,sx:{display:!j&&!w?{xs:"block",sm:"block",md:"block",lg:"block"}:{xs:"none",sm:"none",md:"none",lg:"block"}},children:e.jsx(je,{data:s,page:A,rowsPerPage:y,handleChangePage:H,handleChangeRowsPerPage:V,handleRowClick:_,handleOpenAddCategoryForm:z,handleChange:M})}),e.jsx(t,{item:!0,xs:12,md:12,lg:6,sx:{display:j||w?{xs:"block",sm:"block",md:"block",lg:"block"}:{xs:"none",sm:"none",md:"none",lg:"block"}},children:e.jsx(F,{p:10,sx:{minHeight:"1vh"},children:j?e.jsx(ue,{selectedCategory:j,handleCloseDetails:$}):w?e.jsx(ge,{handleCloseAddCategoryForm:J}):e.jsx("img",{src:oe,style:{maxWidth:"100%"}})})})]})};export{Ae as default};
