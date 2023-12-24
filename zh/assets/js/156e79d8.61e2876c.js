"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[803],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(r),u=n,v=h["".concat(l,".").concat(u)]||h[u]||m[u]||o;return r?a.createElement(v,s(s({ref:t},c),{},{components:r})):a.createElement(v,s({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:0},s="Apache EventMesh",i={unversionedId:"introduction",id:"version-v1.9.0/introduction",title:"Apache EventMesh",description:"CI status",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.9.0/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/zh/docs/v1.9.0/introduction",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.9.0/introduction.md",tags:[],version:"v1.9.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"EventMesh\u4ea7\u54c1\u8def\u7ebf\u56fe",permalink:"/zh/docs/v1.9.0/roadmap"}},l={},p=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2}],c={toc:p};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"apache-eventmesh"},"Apache EventMesh"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/actions/workflows/ci.yml"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/actions/workflow/status/apache/eventmesh/ci.yml?logo=github&style=for-the-badge",alt:"CI status"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://codecov.io/gh/apache/eventmesh"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/codecov/c/gh/apache/eventmesh/master?logo=codecov&style=for-the-badge",alt:"CodeCov"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0.html"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/apache/eventmesh?style=for-the-badge",alt:"License"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/releases"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/apache/eventmesh?style=for-the-badge",alt:"GitHub Release"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://join.slack.com/t/the-asf/shared_invite/zt-1y375qcox-UW1898e4kZE_pqrNsrBM2g"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/slack-join_chat-blue.svg?logo=slack&style=for-the-badge",alt:"Slack Status"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Apache EventMesh")," \u662f\u4e00\u4e2a\u52a8\u6001\u7684\u4e91\u539f\u751f\u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784\u57fa\u7840\u8bbe\u65bd\uff0c\u7528\u4e8e\u5206\u79bb\u5e94\u7528\u7a0b\u5e8f\u548c\u540e\u7aef\u4e2d\u95f4\u4ef6\u5c42\uff0c\u5b83\u652f\u6301\u5e7f\u6cdb\u7684\u7528\u4f8b\uff0c\u5305\u62ec\u590d\u6742\u7684\u6df7\u5408\u4e91\u3001\u4f7f\u7528\u4e86\u4e0d\u540c\u6280\u672f\u6808\u7684\u5206\u5e03\u5f0f\u67b6\u6784\u3002"),(0,n.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u901a\u4fe1\u534f\u8bae"),"\uff1a EventMesh \u53ef\u4ee5\u4f7f\u7528 TCP\u3001HTTP \u6216 gRPC \u4e0e\u5ba2\u6237\u7aef\u901a\u4fe1\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CloudEvents"),": EventMesh \u652f\u6301",(0,n.kt)("a",{parentName:"li",href:"https://cloudevents.io"},"CloudEvents")," \u89c4\u8303\u4f5c\u4e3a\u4e8b\u4ef6\u7684\u683c\u5f0f\u3002CloudEvents \u662f\u4e00\u79cd\u63cf\u8ff0\u4e8b\u4ef6\u6570\u636e\u7684\u516c\u5171\u683c\u5f0f\u7684\u89c4\u8303\uff0c\u7528\u4e8e\u5728\u670d\u52a1\u3001\u5e73\u53f0\u548c\u7cfb\u7edf\u4e4b\u95f4\u63d0\u4f9b\u4e92\u64cd\u4f5c\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Schema \u6ce8\u518c"),": EventMesh \u5b9e\u73b0\u4e86schema\u6ce8\u518c\uff0c\u8be5schema\u6ce8\u518c\u53ef\u4ee5\u63a5\u6536\u5e76\u5b58\u50a8\u6765\u81ea\u5ba2\u6237\u7aef\u7684\u6a21\u5f0f\uff0c\u5e76\u63d0\u4f9b\u5176\u4ed6\u5ba2\u6237\u7aef\u68c0\u7d22\u6a21\u5f0f\u7684\u63a5\u53e3\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u53ef\u89c2\u5bdf\u6027"),": EventMesh \u66b4\u9732\u4e86\u4e00\u7cfb\u5217metrics\uff0c\u4f8b\u5982 HTTP \u534f\u8bae\u7684\u5e73\u5747\u5ef6\u8fdf\u548c\u4f20\u9012\u6d88\u606f\u6570\u3002\u8fd9\u4e9bmetrics\u53ef\u4ee5\u4f7f\u7528 Prometheus \u6216 OpenTelemetry \u6536\u96c6\u548c\u5206\u6790\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4e8b\u4ef6\u5de5\u4f5c\u6d41\u7a0b\u7f16\u6392"),"\uff1aEventMesh Workflow \u53ef\u4ee5\u63a5\u6536\u4e8b\u4ef6\uff0c\u5e76\u6839\u636e\u5de5\u4f5c\u6d41\u5b9a\u4e49\u548c\u5f53\u524d\u5de5\u4f5c\u6d41\u72b6\u6001\u51b3\u5b9a\u89e6\u53d1\u54ea\u4e2a\u547d\u4ee4\u3002\u5de5\u4f5c\u6d41\u5b9a\u4e49\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"https://serverlessworkflow.io"},"Serverless Workflow")," DSL \u7f16\u5199\u3002")),(0,n.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,n.kt)("p",null,"Apache EventMesh \u7531\u591a\u4e2a\u7ec4\u4ef6\u7ec4\u6210\uff0c\u8fd9\u4e9b\u7ec4\u4ef6\u96c6\u6210\u4e86\u4e0d\u540c\u7684\u4e2d\u95f4\u4ef6\u548c\u6d88\u606f\u534f\u8bae\uff0c\u4ee5\u589e\u5f3a\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u65f6\u7684\u529f\u80fd\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"eventmesh-runtime"),"\uff1a\u4e2d\u95f4\u4ef6\uff0c\u5728\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u4e4b\u95f4\u4f20\u8f93\u4e8b\u4ef6\uff0c\u652f\u6301\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u548c\u5fae\u670d\u52a1\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"eventmesh-sdk-java"),"\uff1a\u652f\u6301HTTP\uff0cTCP\u548c",(0,n.kt)("a",{parentName:"li",href:"https://grpc.io/"},"gRPC"),"\u534f\u8bae\u7684Java SDK\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"eventmesh-connector-plugin"),"\uff1a\u63d2\u4ef6\u96c6\u5408\uff0c\u8fde\u63a5\u4e2d\u95f4\u4ef6\uff0c\u4f8b\u5982",(0,n.kt)("a",{parentName:"li",href:"https://kafka.apache.org/"},"Apache Kafka"),"\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/"},"Apache RocketMQ"),"\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/"},"Apache Pulsar"),"\u548c",(0,n.kt)("a",{parentName:"li",href:"https://redis.io/"},"Redis"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"eventmesh-registry-plugin"),"\uff1a\u63d2\u4ef6\u96c6\u5408\uff0c\u96c6\u6210\u670d\u52a1\u6ce8\u518c\u8868\uff0c\u4f8b\u5982",(0,n.kt)("a",{parentName:"li",href:"https://nacos.io/"},"Nacos"),"\u548c",(0,n.kt)("a",{parentName:"li",href:"https://etcd.io/"},"etcd"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"eventmesh-security-plugin"),"\uff1a\u63d2\u4ef6\u96c6\u5408\uff0c\u5b9e\u73b0\u5b89\u5168\u673a\u5236\uff0c\u4f8b\u5982ACL\uff08\u8bbf\u95ee\u63a7\u5236\u5217\u8868\uff09\uff0c\u8eab\u4efd\u9a8c\u8bc1\u548c\u6388\u6743\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"eventmesh-protocol-plugin"),"\uff1a\u63d2\u4ef6\u96c6\u5408\uff0c\u5b9e\u73b0\u6d88\u606f\u534f\u8bae\uff0c\u4f8b\u5982",(0,n.kt)("a",{parentName:"li",href:"https://cloudevents.io/"},"CloudEvents"),"\u548c",(0,n.kt)("a",{parentName:"li",href:"https://mqtt.org/"},"MQTT"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"eventmesh-admin"),"\uff1a\u63a7\u5236\u9762\u677f\uff0c\u7ba1\u7406\u5ba2\u6237\u7aef\uff0c\u4e3b\u9898\u548c\u8ba2\u9605\u3002")))}h.isMDXComponent=!0}}]);