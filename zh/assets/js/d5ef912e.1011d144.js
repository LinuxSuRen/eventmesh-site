"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[809],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},l="Setp 1: Store",i={unversionedId:"installation/store",id:"installation/store",title:"Setp 1: Store",description:"Dependencies",source:"@site/docs/installation/01-store.md",sourceDirName:"installation",slug:"/installation/store",permalink:"/zh/docs/installation/store",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/installation/01-store.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Development Roadmap",permalink:"/zh/docs/roadmap"},next:{title:"Step 1: Store (Docker)",permalink:"/zh/docs/installation/store-with-docker"}},s={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"Download",id:"download",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Reference",id:"reference",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setp-1-store"},"Setp 1: Store"),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*\n4g+ available disk to deploy eventmesh-store\nIf you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.\n")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"Download the Binary code (recommended: 4.9.*) from ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/dowloading/releases/"},"RocketMQ Official"),". Here we take 4.9.2 as an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unzip rocketmq-all-4.9.2-bin-release.zip\ncd rocketmq-4.9.2/\n")),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"start-name-server"},"Start Name Server"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nohup sh bin/mqnamesrv &\ntail -f ~/logs/rocketmqlogs/namesrv.log\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"start-broker"},"Start Broker"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nohup sh bin/mqbroker -n localhost:9876 &\ntail -f ~/logs/rocketmqlogs/broker.log\n")),(0,o.kt)("p",null,"The deployment of eventmesh-store has finished, please go to the next step: ",(0,o.kt)("a",{parentName:"p",href:"docs/en/instruction/02-runtime.md"},"Start Eventmesh-Runtime")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"For more details about RocketMQ\uff0cplease refer to ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/docs/quick-start/"},"https://rocketmq.apache.org/docs/quick-start/")))}d.isMDXComponent=!0}}]);