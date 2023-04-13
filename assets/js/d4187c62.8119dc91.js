"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[9377],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,l(l({ref:r},p),{},{components:t})):n.createElement(d,l({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[f]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7296:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={},l="CNCF Serverlessworkflow offical recommends EventMesh as runtime impl",i={permalink:"/blog/cncf-serverlessworkflow-official-recommends-eventmesh-as-runtime-impl",editUrl:"https://github.com/apache/eventmesh-site/edit/master/blog/blog/cncf-serverlessworkflow-official-recommends-eventmesh-as-runtime-impl.md",source:"@site/blog/cncf-serverlessworkflow-official-recommends-eventmesh-as-runtime-impl.md",title:"CNCF Serverlessworkflow offical recommends EventMesh as runtime impl",description:"CNCF Serverless Workflow defines a vendor-neutral, open-source, and fully community-driven ecosystem for defining and running DSL-based workflows that target the Serverless technology domain.",date:"2023-04-13T03:49:36.000Z",formattedDate:"April 13, 2023",tags:[],readingTime:.61,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"THE APACHE SOFTWARE FOUNDATION ANNOUNCES NEW TOP-LEVEL PROJECT APACHE\xae EVENTMESH",permalink:"/blog/the-apache-software-foundation-announces-new-top-level-project-apache-eventmesh"}},s={authorsImageUrls:[]},c=[{value:"CNCF Landscape",id:"cncf-landscape",level:2},{value:"Open-source workflow runtimes",id:"open-source-workflow-runtimes",level:2}],p={toc:c};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about"},"About"),(0,o.kt)("p",null,"CNCF ",(0,o.kt)("a",{parentName:"p",href:"https://serverlessworkflow.io/"},"Serverless Workflow")," defines a vendor-neutral, open-source, and fully community-driven ecosystem for defining and running DSL-based workflows that target the Serverless technology domain."),(0,o.kt)("p",null,"This project is composed of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"specification.md"},"Specification")," for defining DSL-based workflows"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sdks"},"Developer SDKs")," for different programming languages"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#runtimes"},"Workflow runtimes")," supporting the specification"),(0,o.kt)("li",{parentName:"ul"},"Developer ",(0,o.kt)("a",{parentName:"li",href:"#tooling"},"tooling support")," for writing DSL-based workflows")),(0,o.kt)("p",null,"CNCF Serverless Workflow is hosted by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.cncf.io/"},"Cloud Native Computing Foundation (CNCF)")," and was approved as a\nCloud Native Sandbox level project on July 14, 2020."),(0,o.kt)("h2",{id:"cncf-landscape"},"CNCF Landscape"),(0,o.kt)("p",null,"Serverless Workflow project falls under the ",(0,o.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/card-mode?category=app-definition-and-development&grouping=category"},'CNCF "App Definition and Development"')," category."),(0,o.kt)("p",null,"It is a member project of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cncf/wg-serverless"},"CNCF Serverless Working Group"),"."),(0,o.kt)("h2",{id:"open-source-workflow-runtimes"},"Open-source workflow runtimes"),(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{href:"https://serverlessworkflow.io",target:"_blank"},(0,o.kt)("img",{src:"/images/serverlessworkflow-official.png",width:"700px",alt:"Serverlessworkflow"}))))}f.isMDXComponent=!0}}]);