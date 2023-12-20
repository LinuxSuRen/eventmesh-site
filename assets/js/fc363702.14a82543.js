"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[7066],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(l,".").concat(m)]||c[m]||h[m]||s;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const s={title:"v1.6.0 Release",date:new Date("2022-08-31T16:23:00.000Z"),hide_table_of_contents:!1,author:"lixiaoshuang",author_url:"https://github.com/li-xiao-shuang",author_image_url:"https://avatars.githubusercontent.com/u/34903552?v=4",sidebar_position:8},i=void 0,o={unversionedId:"release-notes/v1.6.0",id:"release-notes/v1.6.0",title:"v1.6.0 Release",description:"Feature",source:"@site/events/release-notes/v1.6.0.md",sourceDirName:"release-notes",slug:"/release-notes/v1.6.0",permalink:"/events/release-notes/v1.6.0",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"v1.6.0 Release",date:"2022-08-31T16:23:00.000Z",hide_table_of_contents:!1,author:"lixiaoshuang",author_url:"https://github.com/li-xiao-shuang",author_image_url:"https://avatars.githubusercontent.com/u/34903552?v=4",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"v1.7.0 Release",permalink:"/events/release-notes/v1.7.0"},next:{title:"v1.5.0 Release",permalink:"/events/release-notes/v1.5.0"}},l={},u=[{value:"Feature",id:"feature",level:2},{value:"Enhancement",id:"enhancement",level:2},{value:"Bug",id:"bug",level:2},{value:"Document and code style improvement",id:"document-and-code-style-improvement",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/pull/866"},"Feature #866")," Support webhook"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/pull/901"},"Feature #901")," Support consul registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/pull/1029"},"Feature #1029")," Support etcd registry")),(0,r.kt)("h2",{id:"enhancement"},"Enhancement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/pull/1005"},"Enhancement #1005")," Remove some invalid imports"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/pull/1015"},"Enhancement #1015")," Made some fields are final")),(0,r.kt)("h2",{id:"bug"},"Bug"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/980"},"Bug #980")," The fields need to be made final"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/997"},"Bug #997")," ProducerGroupConf#equals doesn't work"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1021"},"Bug #1021")," Span is null when eventMeshServerTraceEnable is false"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1022"},"Bug #1022")," Two NPE problems with Tcp Protocol Resolver"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1035"},"Bug #1035")," Tcp UpStreamMsgContext retry infinite loop"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1036"},"Bug #1036")," The bug caused by the logical sequence of tcp closeSession"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1038"},"Bug #1038")," The result of validate target url method is opposite in http protocol"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1052"},"Bug #1052")," Only the first instance of the same consumer group receives the message in http protocol"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1056"},"Bug #1056")," Fix StringIndexOutOfBoundsException"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1059"},"Bug #1059")," NullPointException of Http Request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1064"},"Bug #1064")," NullPointException Of ClientManageControllerTest"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1074"},"Bug #1074")," Fix PrometheusConfigurationTest running test fail")),(0,r.kt)("h2",{id:"document-and-code-style-improvement"},"Document and code style improvement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1006"},"Document #1006")," Outdated instruction docs (CN)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1033"},"Document #1033")," Update docs of quick-start"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1068"},"Document #1068"),"  Translate the design document (cloudevents.md)")))}c.isMDXComponent=!0}}]);