"use strict";(self.webpackChunksonallux_github_io=self.webpackChunksonallux_github_io||[]).push([[6709],{8389:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=r(5893),s=r(1151);const a={tags:["frontend","testing","rxjs","jest"]},o="RxJS",c={id:"frontend/rxjs",title:"RxJS",description:"- Interactive diagrams of Rx Observables and Operators - Unfortunately no longer maintained",source:"@site/docs/frontend/rxjs.md",sourceDirName:"frontend",slug:"/frontend/rxjs",permalink:"/docs/frontend/rxjs",draft:!1,unlisted:!1,editUrl:"https://github.com/sonallux/sonallux.github.io/tree/main/docs/frontend/rxjs.md",tags:[{label:"frontend",permalink:"/docs/tags/frontend"},{label:"testing",permalink:"/docs/tags/testing"},{label:"rxjs",permalink:"/docs/tags/rxjs"},{label:"jest",permalink:"/docs/tags/jest"}],version:"current",frontMatter:{tags:["frontend","testing","rxjs","jest"]},sidebar:"defaultSidebar",previous:{title:"Core Web Vitals",permalink:"/docs/frontend/core-web-vitals"},next:{title:"State Management",permalink:"/docs/frontend/state-management"}},l={},i=[{value:"<code>shareReplay()</code> operator can cause memory leak",id:"sharereplay-operator-can-cause-memory-leak",level:2},{value:"High order operators with marbles",id:"high-order-operators-with-marbles",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rxjs",children:"RxJS"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://rxmarbles.com",children:"Interactive diagrams of Rx Observables and Operators"})," - Unfortunately no longer maintained"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=PF3mFOZn3MQ",children:"Video: Hot vs Cold Observable"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"sharereplay-operator-can-cause-memory-leak",children:[(0,t.jsx)(n.code,{children:"shareReplay()"})," operator can cause memory leak"]}),"\n",(0,t.jsxs)(n.p,{children:["When not setting ",(0,t.jsx)(n.code,{children:"refCount: true"})," for the ",(0,t.jsx)(n.code,{children:"shareReplay()"})," operator, it will never unsubscribe to its upstream observable even if all downstream observable have unsubscribed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { interval, tap, shareReplay, takeUntil } from 'rxjs';\n\nconst observable$ = interval(100).pipe(\n  tap(() => console.log('tick')),\n  // takeUntil(cancelEvent$), // Can also be added to cancel subscribtion\n  // shareReplay({bufferSize: 1, refCount: true}) // shareReplay with refCount=true unsubscribes parent if no subscribers are left\n  shareReplay(1) // even with unsubscribe tick is printed in console\n)\n\nconst subscription = observable$.subscribe(console.log);\n\nsetTimeout(() => {subscription.unsubscribe()}, 500)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"high-order-operators-with-marbles",children:"High order operators with marbles"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"it('switchMap', marbles((m) => {\n    const source = m.cold('ab', {a: 'a', b: 'b'});\n    const dest = source.pipe(\n      switchMap(query => m.cold('---c-d', {c: query + '1', d: query + '2'}))\n    );\n\n    m.expect(dest).toBeObservable('----g-h', {g: 'b1', h: 'b2'});\n  })\n);\n\nit('mergeMap', marbles((m) => {\n    const source = m.cold('ab', {a: 'a', b: 'b'});\n    const dest = source.pipe(\n      mergeMap(query => m.cold('---c-d', {c: query + '1', d: query + '2'}))\n    );\n\n    m.expect(dest).toBeObservable('---efgh', {e: 'a1', f: 'b1', g: 'a2', h: 'b2'});\n  })\n);\n\nit('concatMap', marbles((m) => {\n    const source = m.cold('ab', {a: 'a', b: 'b', c: 'c'});\n    const dest = source.pipe(\n      concatMap(query => m.cold('--c-d|', {c: query + '1', d: query + '2'}))\n    );\n\n    m.expect(dest).toBeObservable('--e-f--g-h', {e: 'a1', f: 'a2', g: 'b1', h: 'b2'});\n  })\n);\n\nit('exhaustMap', marbles((m) => {\n    const source = m.cold('ab', {a: 'a', b: 'b'});\n    const dest = source.pipe(\n      exhaustMap(query => m.cold('---c-d', {c: query + '1', d: query + '2'}))\n    );\n\n    m.expect(dest).toBeObservable('---g-h', {g: 'a1', h: 'a2'});\n  })\n);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var t=r(7294);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);