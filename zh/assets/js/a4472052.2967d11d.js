"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=m(n),k=l,d=u["".concat(o,".").concat(k)]||u[k]||i[k]||r;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:l,s[1]=p;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},44552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={},s="\u8fd0\u884c eventmesh-sdk-java demo",p={unversionedId:"instruction/demo",id:"version-v1.10.0/instruction/demo",title:"\u8fd0\u884c eventmesh-sdk-java demo",description:"Maven Central",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.10.0/instruction/05-demo.md",sourceDirName:"instruction",slug:"/instruction/demo",permalink:"/zh/docs/instruction/demo",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/instruction/05-demo.md",tags:[],version:"v1.10.0",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Docker \u5feb\u901f\u5165\u95e8 EventMesh\uff08\u6682\u65f6\u53ea\u652f\u6301\u52301.4.0\u7248\u672c\uff09",permalink:"/zh/docs/instruction/runtime-with-docker"},next:{title:"TCP \u534f\u8bae\u6587\u6863",permalink:"/zh/docs/design-document/event-handling-and-integration/runtime-protocol"}},o={},m=[{value:"1. TCP",id:"1-tcp",level:2},{value:"1.1 \u5f02\u6b65\u6d88\u606f",id:"11-\u5f02\u6b65\u6d88\u606f",level:3},{value:"1.2 \u5e7f\u64ad\u6d88\u606f",id:"12-\u5e7f\u64ad\u6d88\u606f",level:3},{value:"2. HTTP",id:"2-http",level:2},{value:"2.1 \u5f02\u6b65\u4e8b\u4ef6",id:"21-\u5f02\u6b65\u4e8b\u4ef6",level:3},{value:"3. GRPC",id:"3-grpc",level:2},{value:"3.1 \u5f02\u6b65\u4e8b\u4ef6\u53d1\u9001 \u548c webhook\u8ba2\u9605",id:"31-\u5f02\u6b65\u4e8b\u4ef6\u53d1\u9001-\u548c-webhook\u8ba2\u9605",level:3},{value:"3.2 \u540c\u6b65\u4e8b\u4ef6\u53d1\u9001\u548c\u4e8b\u4ef6\u6d41\u8ba2\u9605",id:"32-\u540c\u6b65\u4e8b\u4ef6\u53d1\u9001\u548c\u4e8b\u4ef6\u6d41\u8ba2\u9605",level:3},{value:"3.3 \u6279\u91cf\u4e8b\u4ef6\u53d1\u5e03",id:"33-\u6279\u91cf\u4e8b\u4ef6\u53d1\u5e03",level:3},{value:"4. \u6d4b\u8bd5",id:"4-\u6d4b\u8bd5",level:2},{value:"4.1 TCP",id:"41-tcp",level:3},{value:"4.2 TCP Broadcast",id:"42-tcp-broadcast",level:3},{value:"4.3 HTTP",id:"43-http",level:3}],c={toc:m};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8fd0\u884c-eventmesh-sdk-java-demo"},"\u8fd0\u884c eventmesh-sdk-java demo"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java"},(0,l.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg",alt:"Maven Central"}))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"EventMesh-sdk-java\u4f5c\u4e3a\u5ba2\u6237\u7aef\uff0c\u4e0eeventmesh-runtime\u901a\u4fe1\uff0c\u7528\u4e8e\u5b8c\u6210\u6d88\u606f\u7684\u53d1\u9001\u548c\u63a5\u6536\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"EventMesh-sdk-java\u652f\u6301\u5f02\u6b65\u6d88\u606f\u548c\u5e7f\u64ad\u6d88\u606f\u3002\u5f02\u6b65\u6d88\u606f\u8868\u793a\u751f\u4ea7\u8005\u53ea\u53d1\u9001\u6d88\u606f\uff0c\u4e0d\u5173\u5fc3\u56de\u590d\u6d88\u606f\u3002\u5e7f\u64ad\u6d88\u606f\u8868\u793a\u751f\u4ea7\u8005\u53d1\u9001\u4e00\u6b21\u6d88\u606f\uff0c\u6240\u6709\u8ba2\u9605\u5e7f\u64ad\u4e3b\u9898\u7684\u6d88\u8d39\u8005\u90fd\u5c06\u6536\u5230\u6d88\u606f"),(0,l.kt)("p",{parentName:"blockquote"},"EventMesh-sdk-java\u652f\u6301HTTP\uff0cTCP \u548c GRPC \u534f\u8bae\u3002")),(0,l.kt)("p",null,"TCP, HTTP \u548c GRPC \u793a\u4f8b\u90fd\u5728",(0,l.kt)("strong",{parentName:"p"},"eventmesh-examples"),"\u6a21\u5757\u4e0b"),(0,l.kt)("h2",{id:"1-tcp"},"1. TCP"),(0,l.kt)("h3",{id:"11-\u5f02\u6b65\u6d88\u606f"},"1.1 \u5f02\u6b65\u6d88\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e3b\u9898TEST-TOPIC-TCP-ASYNC\uff0c\u53ef\u4ee5\u901a\u8fc7 rocketmq-console \u6216\u8005 rocketmq tools \u547d\u4ee4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u542f\u52a8\u6d88\u8d39\u8005\uff0c\u8ba2\u9605\u4e0a\u4e00\u6b65\u9aa4\u5df2\u7ecf\u521b\u5efa\u7684Topic"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribe \u7684main\u65b9\u6cd5\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u53d1\u9001\u7aef\uff0c\u53d1\u9001\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublish \u7684main\u65b9\u6cd5\n")),(0,l.kt)("h3",{id:"12-\u5e7f\u64ad\u6d88\u606f"},"1.2 \u5e7f\u64ad\u6d88\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e3b\u9898TEST-TOPIC-TCP-BROADCAST\uff0c\u53ef\u4ee5\u901a\u8fc7 rocketmq-console \u6216\u8005 rocketmq tools \u547d\u4ee4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u542f\u52a8\u6d88\u8d39\u7aef\uff0c\u8ba2\u9605\u4e0a\u4e00\u6b65\u9aa4\u5df2\u7ecf\u521b\u5efa\u7684Topic"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribeBroadcast \u7684main\u65b9\u6cd5\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u53d1\u9001\u7aef\uff0c\u53d1\u9001\u5e7f\u64ad\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublishBroadcast \u7684main\u65b9\u6cd5\n")),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8eTCP\u90e8\u5206\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/sdk-java/tcp"},"EventMesh TCP")),(0,l.kt)("h2",{id:"2-http"},"2. HTTP"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8eHTTP\uff0ceventmesh-sdk-java\u5bf9\u5bf9\u4e8e\u5f02\u6b65\u4e8b\u4ef6\u5b9e\u73b0\u4e86\u53d1\u9001\u4e0e\u8ba2\u9605"),(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u6f14\u793a\u4e2d\uff0cJava\u7c7b",(0,l.kt)("inlineCode",{parentName:"p"},"LiteMessage"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"content"),"\u5b57\u6bb5\u8868\u793a\u4e00\u4e2a\u7279\u6b8a\u7684\u534f\u8bae\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u8981\u4f7f\u7528eventmesh-sdk-java\u7684http-client\uff0c\u5219\u53ea\u9700\u8bbe\u8ba1\u534f\u8bae\u7684\u5185\u5bb9\u5e76\u5728\u540c\u4e00\u65f6\u95f4\u63d0\u4f9b\u6d88\u8d39\u8005\u7684\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,l.kt)("h3",{id:"21-\u5f02\u6b65\u4e8b\u4ef6"},"2.1 \u5f02\u6b65\u4e8b\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u751f\u4ea7\u8005\u5c06\u4e8b\u4ef6\u53d1\u9001\u7ed9\u4e0b\u6e38\u5373\u53ef\uff0c\u65e0\u9700\u7b49\u5f85\u54cd\u5e94")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e3b\u9898TEST-TOPIC-HTTP-ASYNC\uff0c\u53ef\u4ee5\u901a\u8fc7rocketmq-console\u6216\u8005rocketmq tools \u547d\u4ee4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u542f\u52a8\u6d88\u8d39\u7aef\uff0c\u8ba2\u9605Topic"),(0,l.kt)("p",{parentName:"li"},"\u5f02\u6b65\u4e8b\u4ef6\u6d88\u8d39\u7aef\u4e3aspring boot demo\uff0c\u8fd0\u884cdemo\u5373\u53ef\u542f\u52a8\u670d\u52a1\u5e76\u5b8c\u6210Topic\u8ba2\u9605"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.http.demo.sub.SpringBootDemoApplication \u7684main\u65b9\u6cd5\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u53d1\u9001\u7aef\uff0c\u53d1\u9001\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.http.demo.pub.eventmeshmessage.AsyncPublishInstance \u7684main\u65b9\u6cd5\n")),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8eHTTP\u90e8\u5206\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/sdk-java/http"},"EventMesh HTTP")),(0,l.kt)("h2",{id:"3-grpc"},"3. GRPC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"eventmesh-sdk-java \u5b9e\u73b0\u4e86 gRPC \u534f\u8bae. \u5b83\u80fd\u5f02\u6b65\u548c\u540c\u6b65\u53d1\u9001\u4e8b\u4ef6\u5230 eventmesh-runtime.\n\u5b83\u53ef\u4ee5\u901a\u8fc7webhook\u548c\u4e8b\u4ef6\u6d41\u65b9\u5f0f\u8ba2\u9605\u6d88\u8d39\u4e8b\u4ef6\uff0c \u540c\u65f6\u4e5f\u652f\u6301 CNCF CloudEvents \u534f\u8bae.")),(0,l.kt)("h3",{id:"31-\u5f02\u6b65\u4e8b\u4ef6\u53d1\u9001-\u548c-webhook\u8ba2\u9605"},"3.1 \u5f02\u6b65\u4e8b\u4ef6\u53d1\u9001 \u548c webhook\u8ba2\u9605"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Async\u751f\u4ea7\u8005 \u5f02\u6b65\u53d1\u9001\u4e8b\u4ef6\u5230 eventmesh-runtime, \u4e0d\u9700\u8981\u7b49\u5f85\u4e8b\u4ef6\u50a8\u5b58\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"event-store"),"\n\u5728webhook \u6d88\u8d39\u8005, \u4e8b\u4ef6\u63a8\u9001\u5230\u6d88\u8d39\u8005\u7684http endpoint url\u3002\u8fd9\u4e2aURL\u5728\u6d88\u8d39\u8005\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Subscription")," \u6a21\u578b\u5b9a\u4e8e. \u8fd9\u65b9\u6cd5\u8ddf\u524d\u9762\u7684Http eventmsh client\u7c7b\u4f3c\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728rocketmq \u521b\u5efa\u4e3b\u9898 TEST-TOPIC-GRPC-ASYNC"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 publisher \u53d1\u9001\u4e8b\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.grpc.pub.eventmeshmessage.AsyncPublishInstance \u7684main\u65b9\u6cd5\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 webhook \u6d88\u8d39\u8005")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.grpc.sub.app.SpringBootDemoApplication \u7684main\u65b9\u6cd5\n")),(0,l.kt)("h3",{id:"32-\u540c\u6b65\u4e8b\u4ef6\u53d1\u9001\u548c\u4e8b\u4ef6\u6d41\u8ba2\u9605"},"3.2 \u540c\u6b65\u4e8b\u4ef6\u53d1\u9001\u548c\u4e8b\u4ef6\u6d41\u8ba2\u9605"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u540c\u6b65\u751f\u4ea7\u8005 \u53d1\u9001\u4e8b\u4ef6\u5230 eventmesh-runtime, \u540c\u65f6\u7b49\u5f85\u4e8b\u4ef6\u50a8\u5b58\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"event-store"),"\n\u5728\u4e8b\u4ef6\u6d41\u6d88\u8d39\u8005\uff0c\u4e8b\u4ef6\u4ee5\u6d41\u7684\u5f62\u5f0f\u63a8\u9001\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReceiveMsgHook")," \u5ba2\u6237\u7aef\u3002 \u8fd9\u65b9\u6cd5\u7c7b\u4f3c eventmesh client.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728rocketmq \u521b\u5efa\u4e3b\u9898 TEST-TOPIC-GRPC-RR"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 Request-Reply publisher \u53d1\u9001\u4e8b\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.grpc.pub.eventmeshmessage.RequestReplyInstance \u7684main\u65b9\u6cd5\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 stream subscriber")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.grpc.sub.EventmeshAsyncSubscribe \u7684main\u65b9\u6cd5\n")),(0,l.kt)("h3",{id:"33-\u6279\u91cf\u4e8b\u4ef6\u53d1\u5e03"},"3.3 \u6279\u91cf\u4e8b\u4ef6\u53d1\u5e03"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6279\u91cf\u53d1\u5e03\u591a\u4e2a\u4e8b\u4ef6\u5230 eventmesh-runtime. \u8fd9\u662f\u5f02\u6b65\u64cd\u4f5c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728rocketmq \u521b\u5efa\u4e3b\u9898 TEST-TOPIC-GRPC-ASYNC"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 publisher \u6765\u6279\u91cf\u53d1\u5e03\u4e8b\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.grpc.pub.eventmeshmessage.BatchPublishInstance \u7684main\u65b9\u6cd5\n")),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8e gRPC \u90e8\u5206\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/sdk-java/grpc"},"EventMesh gRPC")),(0,l.kt)("h2",{id:"4-\u6d4b\u8bd5"},"4. \u6d4b\u8bd5"),(0,l.kt)("p",null,"\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/instruction/store"},"EventMesh Store")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/instruction/runtime"},"EventMesh Runtime")," \u5b8c\u6210\u8fd0\u884c\u73af\u5883\u7684\u90e8\u7f72"),(0,l.kt)("p",null,"\u5b8c\u6210 store \u548c runtime \u7684\u90e8\u7f72\u540e\uff0c\u5c31\u53ef\u4ee5\u5728 eventmesh-examples \u6a21\u5757\u4e0b\u8fd0\u884c\u6211\u4eec\u7684 demo \u6765\u4f53\u9a8c eventmesh \u4e86\uff1a"),(0,l.kt)("p",null,"gradle\u7f16\u8bd1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd apache-eventmesh-1.9.0-src/eventmesh-examples\ngradle clean dist\n\ncd ./dist/bin\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_1",src:n(51019).Z,width:"1674",height:"1814"})),(0,l.kt)("h3",{id:"41-tcp"},"4.1 TCP"),(0,l.kt)("p",null,"TCP Sub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bash tcp_eventmeshmessage_sub.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94log\u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_pub.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_2",src:n(88752).Z,width:"3360",height:"608"})),(0,l.kt)("p",null,"TCP Pub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bash tcp_pub_eventmeshmessage.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94log\u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_sub.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_3",src:n(49037).Z,width:"3360",height:"938"})),(0,l.kt)("h3",{id:"42-tcp-broadcast"},"4.2 TCP Broadcast"),(0,l.kt)("p",null,"TCP Sub Broadcast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sh tcp_sub_eventmeshmessage_broadcast.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94log\u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_sub_broadcast.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_4",src:n(49037).Z,width:"3360",height:"938"})),(0,l.kt)("p",null,"TCP Pub Broadcast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sh tcp_pub_eventmeshmessage_broadcast.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94log\u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_pub_broadcast.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_5",src:n(45599).Z,width:"1674",height:"712"})),(0,l.kt)("h3",{id:"43-http"},"4.3 HTTP"),(0,l.kt)("p",null,"HTTP Sub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sh http_sub.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94log\u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_http_sub.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_6",src:n(7068).Z,width:"1676",height:"1602"})),(0,l.kt)("p",null,"HTTP Pub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sh http_pub_eventmeshmessage.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94log\u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_http_pub.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_7",src:n(3588).Z,width:"1678",height:"1358"})),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/logs")," \u76ee\u5f55\u4e0b\u9762\u770b\u5230\u4e0d\u540c\u6a21\u5f0f\u7684\u8fd0\u884c\u65e5\u5fd7\u3002"))}u.isMDXComponent=!0},51019:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_1-b291f31a55c282cc6775f5f581787295.png"},88752:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_2-b61900f597947956b537e7152a515d08.png"},49037:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_3-1371c099695cba603d6fb92bc386f769.png"},45599:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_5-fcc659377a2ba205aea8a61ea71807d8.png"},7068:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_6-9bac3a1ffcbd2bb5a655c4272b95dd69.png"},3588:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_7-b9e8974276045974d66075f3de722268.png"}}]);