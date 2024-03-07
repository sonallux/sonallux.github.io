---
tags: [frontend,angular]
---

# Signals

A signal is a wrapper around a value that can notify interested consumers when that value changes. Because Angular Signals granularly track how and where your state is used throughout an application, the framework can optimize rendering updates.

As Angular must be able to detect changes of the signal value, it must be immutable.

- Video [In-depth Angular Signals, mental models for reactive graph, push / pull, laziness and more! 🚥](https://www.youtube.com/watch?v=sbIlz-yuxQI) by Tomas Trajan.
- Signals have an effect on change detection in Angular. Refer to the dedicated section about [change detection](change-detection) to learn more about this.
- Blog Post [Signals are VALUES, not EVENTS](https://dev.to/ducin/signals-are-values-not-events-10bn) by Tomasz Ducin
- Blog Post [Component Communication with Signals](https://www.angulararchitects.io/en/blog/component-communication-with-signals-inputs-two-way-bindings-and-content-view-queries) by Manfred Steyer

## Signal functions

### `signal()` - stable since 17.0

Creates a writeable signal, that can be updated using `x.set()` or `x.update()` methods.

```ts
const counter = signal(0);

counter.set(2);
counter.update(count => count + 1);
```

### `computed()` - stable since 17.0

Memoizing signal, which calculates its value from the values of other signals. A computed signal is not writable. Note that it is not allowed writing to signals in a `computed` by default. This is a safety facility that no cycles are created.

```ts
const counter = signal(0);

// Automatically updates when `counter` changes:
const isEven = computed(() => counter() % 2 === 0);
```

### `effect()` - developer preview since 17.0

Get notified when signals have changed their value. The `effect()` function can only be used in an injection context. Note that it is not allowed writing to signals in a `effect` by default. This is a safety facility that no cycles are created. If you really want to write signals, set `allowSignalWrites` in the `CreateEffectOptions`.

````ts
const counter = signal(0);
effect(() => console.log('The counter is:', counter()));
// The counter is: 0

counter.set(1);
// The counter is: 1
````

### `input()` - developer preview - since 17.1

Signal input is a signal-based alternative to the traditional `@Input` decorator

```ts
@Component({
  template: `<h1>Counter value: {{ value() }}</h1>`,
})
export class Component {
  // returns Signal<number>
  value = input(0);
  
  // returns Signal<string>
  firstName = input.required<string>();

  // returns Signal<string | undefined>
  lastName = input<string>();
}
```

- Angular Blog Post [Signal Input is now available in developer preview](https://blog.angular.io/signal-inputs-available-in-developer-preview-6a7ff1941823) by Paul Gschwendtner
- Blog Post [Angular Signal Inputs are here to change the game 🎲](https://justangular.com/blog/signal-inputs-are-here-to-change-the-game?s=09) by Enea
- Blog Post [Angular Signal Inputs](https://angularexperts.io/blog/angular-signal-inputs) by Kevin Kreuzer

### Signal queries - developer preview since 17.2

Signal queries are a signal-based alternative to the traditional `@ViewChild`, `@ViewChildren`, `@ContentChild` or `@ContentChildren` decorator

```ts
import {contentChild, contentChildren, viewChild, viewChildren} from '@angular/core';

@Component({
  template: `
  <div #el>element to query</div>
  <ng-content></ng-content>
  `
})
export class Component {
  // returns Signal<ElementRef<HTMLDivElement> | undefined>
  divEl = viewChild<ElementRef<HTMLDivElement>>('el');

  // returns Signal<ElementRef<HTMLDivElement>>
  divElRequired = viewChild.required<ElementRef<HTMLDivElement>>('el');

  // returns Signal<ReadonlyArray<ElementRef<HTMLDivElement>>>
  divEls = viewChildren<ElementRef<HTMLDivElement>>('el');

  // returns Signal<TestComponent | undefined>
  testComponent = contentChild(TestComponent);

  // returns Signal<TestComponent>
  testComponentRequired = contentChild.required(TestComponent);
  
  // returns Signal<ReadonlyArray<TestComponent>>
  testComponents = contentChildren(TestComponent)
}
```

### `model()` signals - developer preview since 17.2

Model signals are exposed as input/output pair to be used by the parent component.

```ts
@Component({
  selector: 'custom-checkbox',
  template: `
    <div class="cool-checkbox-treatment">
      <input type="checkbox" (click)="toggle()" [value]="checked()">
    </div>
  `
})
export class CustomCheckbox {
  protected checked = model(false);

  toggle() {
    this.checked.set(!this.checked());
  }
}
```

- Blog Post [Model Inputs: Reactive Two-Way Binding](https://itnext.io/model-inputs-reactive-two-way-binding-29a40c7626f2)

## NGRX SignalStore

[EnterJS Angular Day Presentation from Manfred Steyer](https://www.angulararchitects.io/en/presentations/angular-architectures-with-signals-5)

Standalone Store from the NGRX team built completely on top of Signals. It is lightweight and independent form the well known NGRX Store based on the Redux pattern.
Install using `npm i @ngrx/signals`.

- [The new NGRX Signal Store for Angular: 3 + 1 Flavors](https://www.angulararchitects.io/blog/the-new-ngrx-signal-store-for-angular-2-1-flavors/)
- [Custom Features](https://www.angulararchitects.io/blog/smarter-not-harder-simplifying-your-application-with-ngrx-signal-store-and-custom-features/)

## Debugging Signals

The Angular Team is planning to add debugging capabilities for signals into the Angular Dev Tools.

## Signal Forms

Because there is currently no support for signals in Forms, the community created `ng-signal-forms`. [This Blog Post](https://timdeschryver.dev/blog/bringing-the-power-of-signals-to-angular-forms-with-signal-forms?tldr=1) is a nice introduction into this library.
