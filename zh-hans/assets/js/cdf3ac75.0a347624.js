(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[156],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(a,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6542:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),s=["components"],c={},a="Quick start Instruction",u={unversionedId:"instructions/quickstart",id:"instructions/quickstart",isDocsHomePage:!1,title:"Quick start Instruction",description:"dependencies",source:"@site/docs/instructions/quickstart.md",sourceDirName:"instructions",slug:"/instructions/quickstart",permalink:"/zh-hans/docs/instructions/quickstart",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/instructions/quickstart.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Eventmesh-store Quick start Instruction",permalink:"/zh-hans/docs/instructions/eventmesh-store-quickstart"},next:{title:"Apache EventMesh (Incubating)",permalink:"/zh-hans/docs/intro"}},p=[{value:"dependencies",id:"dependencies",children:[]},{value:"Deploy eventmesh-store",id:"deploy-eventmesh-store",children:[]},{value:"Deploy eventmesh-runtime",id:"deploy-eventmesh-runtime",children:[]},{value:"Run eventmesh sdk demo",id:"run-eventmesh-sdk-demo",children:[]}],l={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start-instruction"},"Quick start Instruction"),(0,o.kt)("h3",{id:"dependencies"},"dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"64bit OS, Linux/Unix is recommended;\n64bit JDK 1.8+;\nGradle at least 5.6, eg 5.6.*\n")),(0,o.kt)("h3",{id:"deploy-eventmesh-store"},"Deploy eventmesh-store"),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"/zh-hans/docs/instructions/eventmesh-store-quickstart"},"here")),(0,o.kt)("h3",{id:"deploy-eventmesh-runtime"},"Deploy eventmesh-runtime"),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"/zh-hans/docs/instructions/eventmesh-runtime-quickstart"},"here")),(0,o.kt)("h3",{id:"run-eventmesh-sdk-demo"},"Run eventmesh sdk demo"),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"/zh-hans/docs/instructions/eventmesh-sdk-java-quickstart"},"here")))}d.isMDXComponent=!0}}]);