"use strict";(self.webpackChunksonallux_github_io=self.webpackChunksonallux_github_io||[]).push([[2465],{5469:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(5893),a=t(1151);const i={tags:["frontend","angular"]},r="Signals",l={id:"frontend/angular/signals",title:"Signals",description:"Since Angular 17 Signals are production ready. Only the effect function is still under developer preview.",source:"@site/docs/frontend/angular/signals.md",sourceDirName:"frontend/angular",slug:"/frontend/angular/signals",permalink:"/docs/frontend/angular/signals",draft:!1,unlisted:!1,editUrl:"https://github.com/sonallux/sonallux.github.io/tree/main/docs/frontend/angular/signals.md",tags:[{label:"frontend",permalink:"/docs/tags/frontend"},{label:"angular",permalink:"/docs/tags/angular"}],version:"current",frontMatter:{tags:["frontend","angular"]},sidebar:"defaultSidebar",previous:{title:"Microfrontend",permalink:"/docs/frontend/angular/microfrontends"},next:{title:"Core Web Vitals",permalink:"/docs/frontend/core-web-vitals"}},o={},c=[{value:"Signal Inputs",id:"signal-inputs",level:2},{value:"NGRX SignalStore",id:"ngrx-signalstore",level:2},{value:"Debugging Signals",id:"debugging-signals",level:2},{value:"Signal Forms",id:"signal-forms",level:2}];function g(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"signals",children:"Signals"}),"\n",(0,s.jsxs)(e.p,{children:["Since Angular 17 Signals are production ready. Only the ",(0,s.jsx)(e.code,{children:"effect"})," function is still under developer preview."]}),"\n",(0,s.jsx)(e.p,{children:"Signals can be used everywhere in Angular."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"class Service {\n  private state = signal({\n    from: '',\n    to: '',\n    flights: []\n  });\n\n  public readonly from = computed(() => this.state().from);\n  public readonly to = computed(() => this.state().to);\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["In depth ",(0,s.jsx)(e.a,{href:"https://www.youtube.com/watch?v=sbIlz-yuxQI",children:'Angular Signals Video "In-depth Angular Signals, mental models for reactive graph, push / pull, laziness and more! \ud83d\udea5"'})," by Tomas Trajan."]}),"\n",(0,s.jsxs)(e.p,{children:["Signals have an effect on change detection in Angular. Refer to the dedicated section about ",(0,s.jsx)(e.a,{href:"change-detection",children:"change detection"})," to learn more about this."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://dev.to/ducin/signals-are-values-not-events-10bn",children:'Blog Post "Signals are VALUES, not EVENTS"'})," by Tomasz Ducin"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"signal-inputs",children:"Signal Inputs"}),"\n",(0,s.jsx)(e.p,{children:"Since Angular 17.1 inputs can be signals, so components can react easily to input changes."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://justangular.com/blog/signal-inputs-are-here-to-change-the-game?s=09",children:'Blog Post "Angular Signal Inputs are here to change the game \ud83c\udfb2"'})," by Enea"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://angularexperts.io/blog/angular-signal-inputs",children:'Blog Post "Angular Signal Inputs"'})," by Kevin Kreuzer"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://www.angulararchitects.io/en/blog/component-communication-with-signals-inputs-two-way-bindings-and-content-view-queries",children:"Blog Post: Component Communication with Signals"})," by Manfred Steyer"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"ngrx-signalstore",children:"NGRX SignalStore"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://www.angulararchitects.io/en/presentations/angular-architectures-with-signals-5",children:"EnterJS Angular Day Presentation from Manfred Steyer"})}),"\n",(0,s.jsxs)(e.p,{children:["Standalone Store from the NGRX team built completely on top of Signals. It is lightweight and independent form the well known NGRX Store based on the Redux pattern.\nInstall using ",(0,s.jsx)(e.code,{children:"npm i @ngrx/signals"}),"."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.angulararchitects.io/blog/the-new-ngrx-signal-store-for-angular-2-1-flavors/",children:"The new NGRX Signal Store for Angular: 3 + 1 Flavors"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.angulararchitects.io/blog/smarter-not-harder-simplifying-your-application-with-ngrx-signal-store-and-custom-features/",children:"Custom Features"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"debugging-signals",children:"Debugging Signals"}),"\n",(0,s.jsx)(e.p,{children:"The Angular Team is planning to add debugging capabilities for signals into the Angular Dev Tools."}),"\n",(0,s.jsx)(e.h2,{id:"signal-forms",children:"Signal Forms"}),"\n",(0,s.jsxs)(e.p,{children:["Because there is currently no support for signals in Forms, the community created ",(0,s.jsx)(e.code,{children:"ng-signal-forms"}),". ",(0,s.jsx)(e.a,{href:"https://timdeschryver.dev/blog/bringing-the-power-of-signals-to-angular-forms-with-signal-forms?tldr=1",children:"This Blog Post"})," is a nice introduction into this library."]})]})}function d(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(g,{...n})}):g(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>r});var s=t(7294);const a={},i=s.createContext(a);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);