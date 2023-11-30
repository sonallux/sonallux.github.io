

# Core Web Vitals

https://web.dev/articles/vitals?hl=de#core-web-vitals

## LCP - Largest Contentful Paint

How long does the loading take

1. Time to first byte
2. Resource load delay
3. Resource load time
4. Element render delay

- Use `Server-Timing` Header. [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing)
- Built in Angular performance profiler: `new CommonEngine({enablePerformanceProfiler: true})`
- [NgOptimizedImage](https://angular.dev/guide/image-optimization)

## INP - Interaction to Next Paint


## CLS - Cumulative Layout Shift

Amount of layout shifts

- Use `srcset`
- https://github.com/push-based/awesome-web-performance-snippets
- SVG Loading: https://github.com/push-based/ngx-fast-svg

