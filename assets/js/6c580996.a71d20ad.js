"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"ios-appium-tests",title:"iOS Appium tests"},o=void 0,s={unversionedId:"ios-appium-tests",id:"ios-appium-tests",title:"iOS Appium tests",description:"Components needed:",source:"@site/docs/ios-appium-tests.md",sourceDirName:".",slug:"/ios-appium-tests",permalink:"/docs/docs/ios-appium-tests",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios-appium-tests.md",tags:[],version:"current",frontMatter:{id:"ios-appium-tests",title:"iOS Appium tests"},sidebar:"tutorialSidebar",previous:{title:"Smartdust CLI Client",permalink:"/docs/docs/cli-client"},next:{title:"iOS CI-CD pipeline with Jenkins and Appium",permalink:"/docs/docs/ios-appium"}},l={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Components needed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WDA running on the tested device (thankfully we already have that in the Lab)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Port forwarding from the iOS device to the test running client (Linux machine)"))),(0,r.kt)("p",null,"This can be done using iproxy or go-ios tools: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/danielpaulus/go-ios"},"https://github.com/danielpaulus/go-ios")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Appium installed on test machine ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Appium project set up with appropriate Capabilities, for example:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const opts = {\n  path: \'/wd/hub\',\n  port: 4723,\n  capabilities: {\n    deviceName: "blabla",\n    automationName: "XCUITest",\n    platformName: "iOS",\n    // browserName: "Safari",\n    udid: "auto",\n        usePrebuiltWDA: true,\n    startIWDP: true,\n        webDriverAgentUrl: "http://localhost:7777"\n  }\n};\n')),(0,r.kt)("p",null,"Supposedly, some of the Capabilities need to be set but their value doesn\u2019t matter (lol)."),(0,r.kt)("p",null,"Pay attention to the \u201cusePrebuiltWDA\u201d field. If it isn\u2019t set, Appium will probably try to interact with XCode to get WDA installed on the tested device, which is unnecessary, not to mention futile if you\u2019re on Linux."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the tests themselves, you can probably use a number of WebDriver implementations but you should keep in mind the limitations of WDA (not everything is implemented or behaves the same way as on Android).")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The tested app already installed on the tested devices. If you have a built and signed app file on a Mac computer, you might be able to copy it on a Linux machine and install it using ideviceinstaller.")),(0,r.kt)("p",null,"Further reading:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://daniel-paulus.medium.com/automate-ios-devices-the-almost-mac-free-way-973e8760f9df"},"https://daniel-paulus.medium.com/automate-ios-devices-the-almost-mac-free-way-973e8760f9df")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.eggplantsoftware.com/mobilegateway/"},"https://docs.eggplantsoftware.com/mobilegateway/")))}m.isMDXComponent=!0}}]);