"use strict";(self.webpackChunksonallux_github_io=self.webpackChunksonallux_github_io||[]).push([[2465],{5469:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(5893),a=t(1151);const s={tags:["frontend","angular"]},i="Signals",l={id:"frontend/angular/signals",title:"Signals",description:"Since Angular 17 Signals are production ready. Only the effect function is still under developer preview",source:"@site/docs/frontend/angular/signals.md",sourceDirName:"frontend/angular",slug:"/frontend/angular/signals",permalink:"/docs/frontend/angular/signals",draft:!1,unlisted:!1,editUrl:"https://github.com/sonallux/sonallux.github.io/tree/main/docs/frontend/angular/signals.md",tags:[{label:"frontend",permalink:"/docs/tags/frontend"},{label:"angular",permalink:"/docs/tags/angular"}],version:"current",frontMatter:{tags:["frontend","angular"]},sidebar:"defaultSidebar",previous:{title:"Microfrontend",permalink:"/docs/frontend/angular/microfrontends"},next:{title:"Core Web Vitals",permalink:"/docs/frontend/core-web-vitals"}},o={},d=[{value:"NGRX SignalStore",id:"ngrx-signalstore",level:2},{value:"Debugging Signals",id:"debugging-signals",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"signals",children:"Signals"}),"\n",(0,r.jsxs)(e.p,{children:["Since Angular 17 Signals are production ready. Only the ",(0,r.jsx)(e.code,{children:"effect"})," function is still under developer preview"]}),"\n",(0,r.jsx)(e.p,{children:"Signals can be used everywhere in Angular."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"class Service {\n  private state = signal({\n    from: '',\n    to: '',\n    flights: []\n  });\n\n  public readonly from = computed(() => this.state().from);\n  public readonly to = computed(() => this.state().to);\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"ngrx-signalstore",children:"NGRX SignalStore"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://www.angulararchitects.io/en/presentations/angular-architectures-with-signals-5",children:"EnterJS Angular Day Presentation from Manfred Steyer"})}),"\n",(0,r.jsxs)(e.p,{children:["Standalone Store from the NGRX team built completely on top of Signals. It is lightweight and independent form the well known NGRX Store based on the Redux pattern.\nInstall using ",(0,r.jsx)(e.code,{children:"npm i @ngrx/signals"}),"."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.angulararchitects.io/blog/the-new-ngrx-signal-store-for-angular-2-1-flavors/",children:"The new NGRX Signal Store for Angular: 3 + 1 Flavors"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.angulararchitects.io/blog/smarter-not-harder-simplifying-your-application-with-ngrx-signal-store-and-custom-features/",children:"Custom Features"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"debugging-signals",children:"Debugging Signals"}),"\n",(0,r.jsx)(e.p,{children:"The Angular Team is planning to add debugging capabilities for signals into the Angular Dev Tools."})]})}function g(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>i});var r=t(7294);const a={},s=r.createContext(a);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);