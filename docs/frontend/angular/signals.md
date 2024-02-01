---
tags: [frontend,angular]
---

# Signals

Since Angular 17 Signals are production ready. Only the `effect` function is still under developer preview.

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

In depth [Angular Signals Video "In-depth Angular Signals, mental models for reactive graph, push / pull, laziness and more! 🚥"](https://www.youtube.com/watch?v=sbIlz-yuxQI) by Tomas Trajan.

Signals have an effect on change detection in Angular. Refer to the dedicated section about [change detection](change-detection) to learn more about this.

- [Blog Post "Signals are VALUES, not EVENTS"](https://dev.to/ducin/signals-are-values-not-events-10bn) by Tomasz Ducin

## Signal Inputs

Since Angular 17.1 inputs can be signals, so components can react easily to input changes.

- [Blog Post "Angular Signal Inputs are here to change the game 🎲"](https://justangular.com/blog/signal-inputs-are-here-to-change-the-game?s=09) by Enea
- [Blog Post "Angular Signal Inputs"](https://angularexperts.io/blog/angular-signal-inputs) by Kevin Kreuzer

## NGRX SignalStore

[EnterJS Angular Day Presentation from Manfred Steyer](https://www.angulararchitects.io/en/presentations/angular-architectures-with-signals-5)

Standalone Store from the NGRX team built completely on top of Signals. It is lightweight and independent form the well known NGRX Store based on the Redux pattern.
Install using `npm i @ngrx/signals`.

- [The new NGRX Signal Store for Angular: 3 + 1 Flavors](https://www.angulararchitects.io/blog/the-new-ngrx-signal-store-for-angular-2-1-flavors/)
- [Custom Features](https://www.angulararchitects.io/blog/smarter-not-harder-simplifying-your-application-with-ngrx-signal-store-and-custom-features/)

## Debugging Signals

The Angular Team is planning to add debugging capabilities for signals into the Angular Dev Tools.
