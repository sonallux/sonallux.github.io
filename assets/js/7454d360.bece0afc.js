"use strict";(self.webpackChunksonallux_github_io=self.webpackChunksonallux_github_io||[]).push([[152],{8697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(4848),i=t(8453);const o={tags:["development","ide"]},a="GitHub Codespaces",r={id:"github-codespaces",title:"GitHub Codespaces",description:"With GitHub Codespaces you can run your development environment fully managed in the cloud.",source:"@site/docs/github-codespaces.md",sourceDirName:".",slug:"/github-codespaces",permalink:"/docs/github-codespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/sonallux/sonallux.github.io/tree/main/docs/github-codespaces.md",tags:[{inline:!0,label:"development",permalink:"/docs/tags/development"},{inline:!0,label:"ide",permalink:"/docs/tags/ide"}],version:"current",frontMatter:{tags:["development","ide"]},sidebar:"defaultSidebar",previous:{title:"Eventual Consistency",permalink:"/docs/eventual-consistency"},next:{title:"OpenAPI",permalink:"/docs/openapi"}},c={},d=[{value:"Development Containers (dev containers)",id:"development-containers-dev-containers",level:2},{value:"GitHub Codespaces with JetBrains IDEs",id:"github-codespaces-with-jetbrains-ides",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"github-codespaces",children:"GitHub Codespaces"})}),"\n",(0,s.jsx)(n.p,{children:"With GitHub Codespaces you can run your development environment fully managed in the cloud."}),"\n",(0,s.jsx)(n.h2,{id:"development-containers-dev-containers",children:"Development Containers (dev containers)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://containers.dev/",children:"Development Containers"})," is an open specification for enriching containers with development specific content and settings. It is used by GitHub Codespaces to define the development environment. By default dev containes are configured by a ",(0,s.jsx)(n.code,{children:".devcontainer.json"})," file in a ",(0,s.jsx)(n.code,{children:".devcontainer"})," folder. An Example ",(0,s.jsx)(n.code,{children:".devcontainer.json"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Node.js",\n  "image": "mcr.microsoft.com/devcontainers/base:debian",\n  \n  "features": {\n    "ghcr.io/devcontainers/features/node:1": {"version": "18"}\n  },\n  \n  "forwardPorts": [3000], \n  "postCreateCommand": "npm install"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Important properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": display name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"image"})," optional: The base image to build the dev container from. If omitted a default image will be used. Github Codesapces uses the ",(0,s.jsx)(n.a,{href:"https://github.com/devcontainers/images/tree/main/src/universal",children:"universal"})," image. All available images can be found in the ",(0,s.jsx)(n.a,{href:"https://github.com/devcontainers/images/tree/main/src",children:"devcontainers/images"})," repo."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"features"}),": dev containers can be enhanced with features, like tools, runtimes, or libraries. All available features can be browsed on the ",(0,s.jsx)(n.a,{href:"https://containers.dev/features",children:"containers.dev/features"})," or in the ",(0,s.jsx)(n.a,{href:"https://github.com/devcontainers/features/tree/main/src",children:"devcontainers/features"})," repo"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"forwardPorts"}),": make a list of ports inside the container available locally"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"postCreateCommand"}),": run commands after the container is created"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Other Ressources:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Templates can be found on ",(0,s.jsx)(n.a,{href:"https://containers.dev/templates",children:"containers.dev/templates"})," or in the ",(0,s.jsx)(n.a,{href:"https://github.com/devcontainers/templates/tree/main/src",children:"devcontainers/templates"})," repo."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers",children:"GitHub Docs: Introduction to dev containers"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces",children:"GitHub Docs: Add a dev container configuration to your repository"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file",children:"GitHub Docs: Adding features to a devcontainer.json file"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"github-codespaces-with-jetbrains-ides",children:"GitHub Codespaces with JetBrains IDEs"}),"\n",(0,s.jsxs)(n.p,{children:["As announced in ",(0,s.jsx)(n.a,{href:"https://github.blog/changelog/2022-11-09-github-codespaces-with-jetbrains-ides-public-beta/",children:"this blog post"})," GitHub now supports the use of GitHub Codespaces with JetBrains IDEs via the ",(0,s.jsx)(n.a,{href:"https://www.jetbrains.com/remote-development/gateway/",children:"JetBrains Gateway"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Setup instructions (mainly taken from the ",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide",children:"Github Docs"}),"):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Install ",(0,s.jsx)(n.a,{href:"https://www.jetbrains.com/remote-development/gateway/",children:"JetBrains Gateway"})]}),"\n",(0,s.jsxs)(n.li,{children:["Start JetBrains Gateway and select ",(0,s.jsx)(n.code,{children:"GitHub Codespaces"})]}),"\n",(0,s.jsx)(n.li,{children:"Follow the instructions to authenticate with your GitHub account"}),"\n",(0,s.jsx)(n.li,{children:"Select the Codespace you want to open and choose your prefered JetBrains IDE"}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Connect"})," which will download and install the IDE Backend into the remote machine. This will only happen at the first launch."]}),"\n",(0,s.jsx)(n.li,{children:"Your IDE will open with everything setup"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The codespace you connect to must be running an SSH server. The default container image includes an SSH server, which is started automatically. If your codespaces are not created from the default image, you can install and start an SSH server by adding the following to the ",(0,s.jsx)(n.code,{children:"features"})," object in your ",(0,s.jsx)(n.code,{children:"devcontainer.json"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "features": {\n    "ghcr.io/devcontainers/features/sshd:1": {}\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);