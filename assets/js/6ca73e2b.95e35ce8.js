"use strict";(self.webpackChunksonallux_github_io=self.webpackChunksonallux_github_io||[]).push([[4918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,f=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={tags:["frontend","testing"]},o="Testing",l={unversionedId:"frontend/testing/index",id:"frontend/testing/index",title:"Testing",description:"- Unit Tests",source:"@site/docs/frontend/testing/index.md",sourceDirName:"frontend/testing",slug:"/frontend/testing/",permalink:"/docs/frontend/testing/",draft:!1,editUrl:"https://github.com/sonallux/sonallux.github.io/tree/main/docs/frontend/testing/index.md",tags:[{label:"frontend",permalink:"/docs/tags/frontend"},{label:"testing",permalink:"/docs/tags/testing"}],version:"current",frontMatter:{tags:["frontend","testing"]},sidebar:"defaultSidebar",previous:{title:"RxJS",permalink:"/docs/frontend/rxjs"},next:{title:"Cypress",permalink:"/docs/frontend/testing/cypress"}},s={},p=[{value:"Mocking",id:"mocking",level:2},{value:"Angular",id:"angular",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing"},"Testing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unit Tests",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Jest"),(0,a.kt)("li",{parentName:"ul"},"Testing Library ",(0,a.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/queries/about#priority"},"https://testing-library.com/docs/queries/about#priority")))),(0,a.kt)("li",{parentName:"ul"},"Integration/e2e Tests",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"cypress"},"Cypress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://playwright.dev"},"Playwright")))),(0,a.kt)("li",{parentName:"ul"},"Other cool testing tools",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/vitest-dev/vitest"},"vitest"))))),(0,a.kt)("h2",{id:"mocking"},"Mocking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createMock(...)")," from ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@testing-library/angular"},"@testing-library/angular/jest-utils")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createSpyFromClass(...)")," from ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/jest-auto-spies"},"jest-auto-spies"))),(0,a.kt)("h2",{id:"angular"},"Angular"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ng-mocks.sudo.eu/"},"ng-mocks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MockComponent(Component)")," creates a mock of an Component. Good for testing individual components without needing to bootstrap all sub component"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MockPipe(Pipe, value => JSON.stringify(value))")," mock a pipe"),(0,a.kt)("li",{parentName:"ul"},"..."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@ngworker/spectacular"},"Spectacular")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ngneat/spectator"},"Spectator")," ngneat has other ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ngneat"},"cool libraries")," for Angular and JS/TS too")))}m.isMDXComponent=!0}}]);