---
tags: [observability]
sidebar_position: 2
---

# Traces

Traces capture the full path through a system. Such a path is called a trace and contains a chain of spans. A span represents a unit of work or operation. In OpenTelemetry a span includes the following information

- Name
- Span ID unique id of the span
- Trace ID representing the trace that span is part of
- Parent span ID (empty for root span)
- Start and end timestamps
- Attributes
- [Span events](https://opentelemetry.io/docs/concepts/signals/traces/#span-events)
- [Span links](https://opentelemetry.io/docs/concepts/signals/traces/#span-links)
- [Span status](https://opentelemetry.io/docs/concepts/signals/traces/#span-status)
- [Span kind](https://opentelemetry.io/docs/concepts/signals/traces/#span-kind)

## Context propagation

With context propagation it is possible to perform distributed tracing and to correlate traces across services that are arbitrarily distributed across process and network boundaries.

The default OpenTelemetry propagator is using the headers specified by the [W3C TraceContext](https://www.w3.org/TR/trace-context/). 

## Tracing in SpringBoot apps with Micrometer

The [Micrometer Tracing project](https://docs.micrometer.io/tracing/reference/) provides a facade for popular tracer, similar how the main Micrometer projects provides a facade for observability systems. Micrometer is the default tracer for SpringBoot applications.

To use Micrometer Tracing with the OpenTelemetry Traces add the following dependency to your project:

```xml
<dependency>
  <groupId>io.micrometer</groupId>
  <artifactId>micrometer-tracing-bridge-otel</artifactId>
</dependency>
```

Alternatively if you want to use the [Brave tracer](https://github.com/openzipkin/brave) from the Zipkin project use `micrometer-tracing-bridge-brave`.

To export the traces to a tracing backend a compatible exporter or reporter must be added. The recommendation is to use the OpenTelemetry Protocol to stay vendor neutral. Nowadays most tracing backends support OpenTelemetry. Add the following dependency:

```xml
<dependency>
  <groupId>io.opentelemetry</groupId>
  <artifactId>opentelemetry-exporter-otlp</artifactId>
</dependency>
```
