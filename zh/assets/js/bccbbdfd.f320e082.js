"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[7587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},l="CNCF Serverlessworkflow offical recommends EventMesh as runtime impl",i={permalink:"/zh/blog/cncf-serverlessworkflow-official-recommends-eventmesh-as-runtime-impl",editUrl:"https://github.com/apache/eventmesh-site/edit/master/blog/blog/cncf-serverlessworkflow-official-recommends-eventmesh-as-runtime-impl.md",source:"@site/blog/cncf-serverlessworkflow-official-recommends-eventmesh-as-runtime-impl.md",title:"CNCF Serverlessworkflow offical recommends EventMesh as runtime impl",description:"CNCF Serverless Workflow defines a vendor-neutral, open-source, and fully community-driven ecosystem for defining and running DSL-based workflows that target the Serverless technology domain.",date:"2023-04-13T03:49:36.000Z",formattedDate:"2023\u5e744\u670813\u65e5",tags:[],readingTime:.61,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"THE APACHE SOFTWARE FOUNDATION ANNOUNCES NEW TOP-LEVEL PROJECT APACHE\xae EVENTMESH",permalink:"/zh/blog/the-apache-software-foundation-announces-new-top-level-project-apache-eventmesh"}},s={authorsImageUrls:[]},c=[{value:"CNCF Landscape",id:"cncf-landscape",level:2},{value:"Open-source workflow runtimes",id:"open-source-workflow-runtimes",level:2}],p={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about"},"About"),(0,o.kt)("p",null,"CNCF ",(0,o.kt)("a",{parentName:"p",href:"https://serverlessworkflow.io/"},"Serverless Workflow")," defines a vendor-neutral, open-source, and fully community-driven ecosystem for defining and running DSL-based workflows that target the Serverless technology domain."),(0,o.kt)("p",null,"This project is composed of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"specification.md"},"Specification")," for defining DSL-based workflows"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sdks"},"Developer SDKs")," for different programming languages"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#runtimes"},"Workflow runtimes")," supporting the specification"),(0,o.kt)("li",{parentName:"ul"},"Developer ",(0,o.kt)("a",{parentName:"li",href:"#tooling"},"tooling support")," for writing DSL-based workflows")),(0,o.kt)("p",null,"CNCF Serverless Workflow is hosted by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.cncf.io/"},"Cloud Native Computing Foundation (CNCF)")," and was approved as a\nCloud Native Sandbox level project on July 14, 2020."),(0,o.kt)("h2",{id:"cncf-landscape"},"CNCF Landscape"),(0,o.kt)("p",null,"Serverless Workflow project falls under the ",(0,o.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/card-mode?category=app-definition-and-development&grouping=category"},'CNCF "App Definition and Development"')," category."),(0,o.kt)("p",null,"It is a member project of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cncf/wg-serverless"},"CNCF Serverless Working Group"),"."),(0,o.kt)("h2",{id:"open-source-workflow-runtimes"},"Open-source workflow runtimes"),(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{href:"https://serverlessworkflow.io",target:"_blank"},(0,o.kt)("img",{src:"/images/serverlessworkflow-official.png",width:"700px",alt:"Serverlessworkflow"}))))}f.isMDXComponent=!0}}]);