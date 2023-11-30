---
tags: [frontend,angular]
---

# Signals

Since Angular 17 Signals are production ready. Only the `effect` function is still under developer preview

Signals can be used everywhere in Angular. 

```ts
class Service {
  private state = signal({
    from: '',
    to: '',
    flights: []
  });

  public readonly from = computed(() => this.state().from);
  public readonly to = computed(() => this.state().to);
}
```

## NGRX SignalStore

Standalone Store from the NGRX team built completely on top of Signals. It is lightweight and independent form the well known NGRX Store based on the Redux pattern.
Install using `npm i @ngrx/signals`.

- [The new NGRX Signal Store for Angular: 3 + 1 Flavors](https://www.angulararchitects.io/blog/the-new-ngrx-signal-store-for-angular-2-1-flavors/)
- [Custom Features](https://www.angulararchitects.io/blog/smarter-not-harder-simplifying-your-application-with-ngrx-signal-store-and-custom-features/)

## Debugging Signals

The Angular Team is planning to add debugging capabilities for signals into the Angular Dev Tools.
