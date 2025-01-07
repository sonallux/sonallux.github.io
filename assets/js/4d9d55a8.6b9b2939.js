"use strict";(self.webpackChunksonallux_github_io=self.webpackChunksonallux_github_io||[]).push([[3709],{5835:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"observability/metrics","title":"Metrics","description":"Metric are measurement over the time, where for each measurement the measured value, the current timestamp and optional metadata are collected. Those measurement typically are not for one specific request or task. Instead they provide statistical information about the whole system, all requests/tasks or a specific type of requests. Typical metrics are:","source":"@site/docs/observability/metrics.mdx","sourceDirName":"observability","slug":"/observability/metrics","permalink":"/docs/observability/metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/sonallux/sonallux.github.io/tree/main/docs/observability/metrics.mdx","tags":[{"inline":true,"label":"observability","permalink":"/docs/tags/observability"}],"version":"current","sidebarPosition":1,"frontMatter":{"tags":["observability"],"sidebar_position":1},"sidebar":"defaultSidebar","previous":{"title":"Observability","permalink":"/docs/observability/"},"next":{"title":"Traces","permalink":"/docs/observability/traces"}}');var i=s(4848),a=s(8453),n=s(4731);s(7154);const o={tags:["observability"],sidebar_position:1},l="Metrics",c={},u=[{value:"Metric types",id:"metric-types",level:2},{value:"Counter",id:"counter",level:3},{value:"Gauge",id:"gauge",level:3},{value:"Histogram",id:"histogram",level:3}];function d(e){const t={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"metrics",children:"Metrics"})}),"\n",(0,i.jsx)(t.p,{children:"Metric are measurement over the time, where for each measurement the measured value, the current timestamp and optional metadata are collected. Those measurement typically are not for one specific request or task. Instead they provide statistical information about the whole system, all requests/tasks or a specific type of requests. Typical metrics are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Total number of bytes read/received/sent"}),"\n",(0,i.jsx)(t.li,{children:"Current CPU/Memory usage"}),"\n",(0,i.jsx)(t.li,{children:"Average duration of something"}),"\n",(0,i.jsx)(t.li,{children:"Number of occurred errors"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Metrics are typically stored in time series databases."}),"\n",(0,i.jsx)(t.h2,{id:"metric-types",children:"Metric types"}),"\n",(0,i.jsx)(t.p,{children:"One often distinguished the following metric types counter, gauge and histogram."}),"\n",(0,i.jsx)(t.h3,{id:"counter",children:"Counter"}),"\n",(0,i.jsx)(t.p,{children:"A counter measures a value which can only increase. Often just one exception to this rule is allowed: Resetting the counter to zero when the system restarts. With this exception the instrumentation must not store the counter in a place which survives restarts. Therefore, the absolute value of the counter is often not very useful and instead one often want to know how fast the counter has gone up over some defined recent time window."}),"\n",(0,i.jsx)(t.p,{children:"For example the total number of requests can be modelled as counters. From this metric one can easily calculate the requests per time range."}),"\n",(0,i.jsx)(n.t1,{type:"line",data:{labels:["10:00","10:01","10:02","10:03","10:04","10:05","10:06","10:07","10:08","10:09"],datasets:[{label:"Example counter",data:[0,0,1,2,2,4,5,0,1,3],borderWidth:1}]}}),"\n",(0,i.jsx)(t.h3,{id:"gauge",children:"Gauge"}),"\n",(0,i.jsx)(t.p,{children:"A gauge just measures a numeric value."}),"\n",(0,i.jsx)(t.p,{children:"For example the current CPU-Usage can be modelled as gauge."}),"\n",(0,i.jsx)(n.t1,{type:"line",data:{labels:["10:00","10:01","10:02","10:03","10:04","10:05","10:06","10:07"],datasets:[{label:"Example gauge",data:[.1,.2,.8,.7,.9,.4,.2,.4],borderWidth:1}]}}),"\n",(0,i.jsx)(t.h3,{id:"histogram",children:"Histogram"}),"\n",(0,i.jsx)(t.p,{children:"A Histogram is a client side aggregation of values. It is well suited to collect the distribution of values, such as request latencies."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);