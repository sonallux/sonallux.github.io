---
tags: [javascript, testing, rxjs, jest, reactive]
---

# RxJS

- [Interactive diagrams of Rx Observables and Operators](https://rxmarbles.com) - Unfortunately no longer maintained
- [Video: Hot vs Cold Observable](https://www.youtube.com/watch?v=PF3mFOZn3MQ)

## `shareReplay()` operator can cause memory leak

When not setting `refCount: true` for the `shareReplay()` operator, it will never unsubscribe to its upstream observable even if all downstream observable have unsubscribed.

```js
import { interval, tap, shareReplay, takeUntil } from 'rxjs';

const observable$ = interval(100).pipe(
  tap(() => console.log('tick')),
  // takeUntil(cancelEvent$), // Can also be added to cancel subscribtion
  // shareReplay({bufferSize: 1, refCount: true}) // shareReplay with refCount=true unsubscribes parent if no subscribers are left
  shareReplay(1) // even with unsubscribe tick is printed in console
)

const subscription = observable$.subscribe(console.log);

setTimeout(() => {subscription.unsubscribe()}, 500)
```

## High order operators with marbles

```ts
it('switchMap', marbles((m) => {
    const source = m.cold('ab', {a: 'a', b: 'b'});
    const dest = source.pipe(
      switchMap(query => m.cold('---c-d', {c: query + '1', d: query + '2'}))
    );

    m.expect(dest).toBeObservable('----g-h', {g: 'b1', h: 'b2'});
  })
);

it('mergeMap', marbles((m) => {
    const source = m.cold('ab', {a: 'a', b: 'b'});
    const dest = source.pipe(
      mergeMap(query => m.cold('---c-d', {c: query + '1', d: query + '2'}))
    );

    m.expect(dest).toBeObservable('---efgh', {e: 'a1', f: 'b1', g: 'a2', h: 'b2'});
  })
);

it('concatMap', marbles((m) => {
    const source = m.cold('ab', {a: 'a', b: 'b', c: 'c'});
    const dest = source.pipe(
      concatMap(query => m.cold('--c-d|', {c: query + '1', d: query + '2'}))
    );

    m.expect(dest).toBeObservable('--e-f--g-h', {e: 'a1', f: 'a2', g: 'b1', h: 'b2'});
  })
);

it('exhaustMap', marbles((m) => {
    const source = m.cold('ab', {a: 'a', b: 'b'});
    const dest = source.pipe(
      exhaustMap(query => m.cold('---c-d', {c: query + '1', d: query + '2'}))
    );

    m.expect(dest).toBeObservable('---g-h', {g: 'a1', h: 'a2'});
  })
);
```
