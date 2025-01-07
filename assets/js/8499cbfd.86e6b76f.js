"use strict";(self.webpackChunksonallux_github_io=self.webpackChunksonallux_github_io||[]).push([[9068],{5634:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>x,default:()=>v,frontMatter:()=>m,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"observability/prometheus","title":"Prometheus","description":"Prometheus is a time series database that is often used to store Metrics. It also offers the powerful query language PromQL to query and aggregate time series data.","source":"@site/docs/observability/prometheus.mdx","sourceDirName":"observability","slug":"/observability/prometheus","permalink":"/docs/observability/prometheus","draft":false,"unlisted":false,"editUrl":"https://github.com/sonallux/sonallux.github.io/tree/main/docs/observability/prometheus.mdx","tags":[{"inline":true,"label":"observability","permalink":"/docs/tags/observability"}],"version":"current","sidebarPosition":4,"frontMatter":{"tags":["observability"],"sidebar_position":4},"sidebar":"defaultSidebar","previous":{"title":"Logs","permalink":"/docs/observability/logs"},"next":{"title":"Eventual Consistency","permalink":"/docs/eventual-consistency"}}');var a=s(4848),n=s(8453),i=s(6540),o=(s(7154),s(6118)),l=s(5638),u=s(4731);const c={counterRate:"counterRate_Ddv1",row:"row_kE80",rawTimeSeriesInput:"rawTimeSeriesInput_FYf4"};function d(e){let{}=e;const[t,s]=(0,i.useState)("0, 1, 3, 6, 9, 10, 2, 3, 6, 11"),[r,n]=(0,i.useState)(2.5),[o,l]=(0,i.useState)(7.5),[d,m]=(0,i.useState)(!1),[x,y]=(0,i.useState)(!1),[b,g]=(0,i.useState)(!1),[v,f]=(0,i.useState)(""),j=t.split(",").map((e=>Number.parseInt(e.trim()))).map(((e,t)=>({x:t,y:e}))),w=function(e){let t=0;const s=[e[0]];for(let r=1;r<e.length;r++)e[r-1].y>e[r].y&&(t+=e[r-1].y),s.push({x:e[r].x,y:e[r].y+t});return s}(j.filter((e=>e.x>=r&&e.x<=o))),k=h(w[0],w[w.length-1]),M=h(w[w.length-2],w[w.length-1]),S={timeWindow:{type:"box",xMin:r,xMax:o,backgroundColor:"rgba(255,255,102,0.2)"},linearFunction:{type:"line",xMin:r,yMin:p(k,r),xMax:o,yMax:p(k,o),display:x},iRateFunction:{type:"line",xMin:r,yMin:p(M,r),xMax:o,yMax:p(M,o),display:b}};return(0,a.jsxs)("div",{className:c.counterRate,children:[(0,a.jsx)(u.Xl,{data:{datasets:[{label:"Fixed counter",data:w,hidden:!d},{label:"Counter",data:j}]},options:{scales:{x:{beginAtZero:!0,ticks:{stepSize:1},title:{text:"Seconds",display:!0}},y:{beginAtZero:!0}},plugins:{annotation:{annotations:S}}}}),(0,a.jsx)("input",{className:c.rawTimeSeriesInput,type:"text",value:t,onChange:e=>s(e.target.value)}),(0,a.jsxs)("div",{className:c.row,children:[(0,a.jsx)("span",{children:"Time Window"}),"Start",(0,a.jsx)("input",{type:"number",value:r,onChange:e=>n(Number.parseFloat(e.target.value))}),"End",(0,a.jsx)("input",{type:"number",value:o,onChange:e=>l(Number.parseFloat(e.target.value))})]}),(0,a.jsxs)("div",{className:c.row,children:[(0,a.jsx)("button",{className:"button button--primary",onClick:()=>m(!d),children:"Toggle fixed counter"}),(0,a.jsx)("button",{className:"button button--primary",onClick:()=>{w.length<2?f("Not enough data points"):(g(!1),y(!0),f(`rate(...) = ${k.m}`))},children:"Show rate()"}),(0,a.jsx)("button",{className:"button button--primary",onClick:()=>{if(w.length<2)return void f("Not enough data points");g(!1),y(!0);const e=p(k,o)-p(k,r);f(`increase(...) = ${e}`)},children:"Show increase()"}),(0,a.jsx)("button",{className:"button button--primary",onClick:()=>{y(!1),g(!0),f(`rate(...) = ${M.m}`)},children:"Show irate()"})]}),(0,a.jsx)("span",{children:v})]})}function h(e,t){if(!e||!t)return{m:0,y0:0};const s=(t.y-e.y)/(t.x-e.x);return{m:s,y0:e.y-e.x*s}}function p(e,t){return e.m*t+e.y0}o.t1.register(l.A);const m={tags:["observability"],sidebar_position:4},x="Prometheus",y={},b=[{value:"Metric types",id:"metric-types",level:2},{value:"PromQL",id:"promql",level:2},{value:"Counter rates and increases",id:"counter-rates-and-increases",level:2},{value:"<code>rate()</code>",id:"rate",level:3},{value:"<code>increase()</code>",id:"increase",level:3},{value:"<code>irate()</code>",id:"irate",level:3},{value:"Playground",id:"playground",level:2}];function g(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"prometheus",children:"Prometheus"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://prometheus.io",children:"Prometheus"})," is a time series database that is often used to store ",(0,a.jsx)(t.a,{href:"./metrics",children:"Metrics"}),". It also offers the powerful query language PromQL to query and aggregate time series data."]}),"\n",(0,a.jsx)(t.h2,{id:"metric-types",children:"Metric types"}),"\n",(0,a.jsx)(t.p,{children:"Prometheus uses has four main metric types"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://youtube.com/watch?v=fhx0ehppMGM&t=25s",children:"Gauge"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://youtube.com/watch?v=fhx0ehppMGM&t=138s",children:"Counter"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://youtube.com/watch?v=fhx0ehppMGM&t=293s",children:"Summaries"})," measure a distribution using percentile or quantiles. Do not average or aggregate quantiles from multiple service instances or other label dimensions because there is just no statistically valid way to average over percentile. If aggregation of percentiles is needed use Histograms instead."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://youtube.com/watch?v=fhx0ehppMGM&t=405s",children:"Histograms"})," can also track a distribution, but instead of outputting quantiles they count the input value into a set of ranged buckets to measure how many values are observed for each range bucket. In Prometheus the histograms are cumulative so each bucket also contains the count of the previous lower-ranged buckets."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"promql",children:"PromQL"}),"\n",(0,a.jsx)(t.h2,{id:"counter-rates-and-increases",children:"Counter rates and increases"}),"\n",(0,a.jsxs)(t.p,{children:["Prometheus offers three methods for calculating the rate of increase for a counter metric: ",(0,a.jsx)(t.code,{children:"rate()"}),", ",(0,a.jsx)(t.code,{children:"irate()"})," and ",(0,a.jsx)(t.code,{children:"increase()"}),". They all take a range vector full of counter time series as input and return the counters rate of increase under that window. They all require that at least two samples are present in the provided time window. The content of this section is mainly taken from ",(0,a.jsx)(t.a,{href:"https://youtube.com/watch?v=7uy_yovtyqw",children:"this nice YouTube Video"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"rate",children:(0,a.jsx)(t.code,{children:"rate()"})}),"\n",(0,a.jsx)(t.p,{children:"Computes a per second rate of increase that is smoothed or averaged over the entire input range window."}),"\n",(0,a.jsx)(t.h3,{id:"increase",children:(0,a.jsx)(t.code,{children:"increase()"})}),"\n",(0,a.jsxs)(t.p,{children:["Behaves like the ",(0,a.jsx)(t.code,{children:"rate()"})," function except that it returns an absolute value increase over the provided window instead of a per second value.\nNote that ",(0,a.jsx)(t.code,{children:"increase()"})," is not very well suited for counters that increase slowly."]}),"\n",(0,a.jsx)(t.h3,{id:"irate",children:(0,a.jsx)(t.code,{children:"irate()"})}),"\n",(0,a.jsxs)(t.p,{children:["Computes a much faster reacting instantaneous rate by only considering the last two samples under the provided window. Therefore ",(0,a.jsx)(t.code,{children:"irate()"})," will produce very spiky graphs and is only suited for super zoomed-in graphs where you want to see immediate changes in your system behaviour."]}),"\n",(0,a.jsx)(t.h2,{id:"playground",children:"Playground"}),"\n",(0,a.jsx)(d,{})]})}function v(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}}}]);