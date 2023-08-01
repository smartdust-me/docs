"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="sd_remoteios - iOS Remote Connect tool",s={unversionedId:"sd_remoteios",id:"sd_remoteios",title:"sd_remoteios - iOS Remote Connect tool",description:"sd_remoteios is a program available for Mac OS and Linux that connects iOS devices from a remote Smartdust Lab so that they're visible on your PC as if they ware plugged in via USB.",source:"@site/docs/sd_remoteios.md",sourceDirName:".",slug:"/sd_remoteios",permalink:"/docs/docs/sd_remoteios",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sd_remoteios.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Libimobiledevice installation guide",permalink:"/docs/docs/libimobiledevice"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sd_remoteios---ios-remote-connect-tool"},(0,r.kt)("inlineCode",{parentName:"h1"},"sd_remoteios")," - iOS Remote Connect tool"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sd_remoteios")," is a program available for Mac OS and Linux that connects iOS devices from a remote Smartdust Lab so that they're visible on your PC as if they ware plugged in via USB.\nIn itself, it's not a feature rich tool, so for automation purposes for example, we recommend using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/cli-client"},"Smartdust CLI Client")," that utilizes ",(0,r.kt)("inlineCode",{parentName:"p"},"sd_remoteios")," under the hood."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Grab the appropriate binary for your OS and put it in a directory that's in your PATH so that you can call it everywhere.\nAlso, if your downloaded file contains an architectural postfix(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"x64"),"), rename it to ",(0,r.kt)("inlineCode",{parentName:"p"},"sd_remoteios"),".\n",(0,r.kt)("strong",{parentName:"p"},"After clicking the link, refresh the page to download")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sd_remoteios/sd_remoteios"},"Mac OS universal binary")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sd_remoteios/sd_remoteios_arm64"},"Mac OS ARM64 binary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sd_remoteios/sd_remoteios_x64"},"Linux x64 binary"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Linux"),": additionally, you need to install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libimobiledevice/usbmuxd"},"usbmuxd")," and make sure it works:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl start usbmuxd\nsudo systemctl status usbmuxd\n")),(0,r.kt)("p",null,"We also recommend for all users to install ",(0,r.kt)("inlineCode",{parentName:"p"},"libimobiledevice")," tools for easier debugging. More info ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/libimobiledevice"},"here"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Go to an iOS device on your Smartdust Lab instance and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Remote Debug")," section in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dashboard")," tab.\n",(0,r.kt)("img",{src:n(724).Z,width:"669",height:"228"})),(0,r.kt)("p",null,"If on Mac OS, copy the command and execute it. "),(0,r.kt)("p",null,"On Linux, you should first make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"usbmuxd")," service is working."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl enable usbmuxd\n")),(0,r.kt)("p",null,"In the command itself, delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"./")," characters before the executable name, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo sd_remoteios -c xxx.smartdust.me:12345 \n")),(0,r.kt)("p",null,"You can verify the connection by using programs from the ",(0,r.kt)("inlineCode",{parentName:"p"},"libimobiledevice")," toolchain, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"ideviceinfo")," should print a lot of data about one of the connected phones."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Due to the current connection mechanism, you get connected to all the iOS devices from one provider.\nAdditionally, as for now, ",(0,r.kt)("inlineCode",{parentName:"p"},"sd_remoteios"),' and consequently Smartdust CLI Client can only connect to one "connection string" at a time.')))}u.isMDXComponent=!0},724:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/remote-debug-96ea314431546380a0236092af32a0fe.png"}}]);