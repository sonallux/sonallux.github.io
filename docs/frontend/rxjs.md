---
tags: [frontend,testing,rxjs,jest]
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

## Testing with marbles

Testing reactive/asynchronous can be done by virtualize time. Marble diagrams provide a way to visualize the behavior of observables.
Both concepts can be used together to test RxJS code (example taken from [this RxJS guide](https://rxjs.dev/guide/testing/marble-testing)):

```js
import { TestScheduler } from 'rxjs/testing';
import { throttleTime } from 'rxjs';
 
const testScheduler = new TestScheduler((actual, expected) => {
  // asserting the two objects are equal - required for TestScheduler assertions to work via your test framework e.g. using chai.
  expect(actual).deep.equal(expected);
});
 
it('generates the stream correctly', () => {
  testScheduler.run((helpers) => {
    const { cold, time, expectObservable, expectSubscriptions } = helpers;
    const e1 = cold(' -a--b--c---|');
    const e1subs = '  ^----------!';
    const t = time('   ---|       '); // t = 3
    const expected = '-a-----c---|';
 
    expectObservable(e1.pipe(throttleTime(t))).toBe(expected);
    expectSubscriptions(e1.subscriptions).toBe(e1subs);
  });
});
```

As there is a lot of boilerplate code involved, the [rxjs-marbles](https://www.npmjs.com/package/rxjs-marbles) library has been created:

```js
import { marbles } from 'rxjs-marbles/jest';
import { throttleTime } from 'rxjs';

it('generates the stream correctly', marbles(({cold, time, expect}) => {
  const e1 = cold(' -a--b--c---|');
  const e1subs = '  ^----------!';
  const t = time('   ---|       '); // t = 3
  const expected = '-a-----c---|';

  const result = e1.pipe(throttleTime(t))

  expect(result).toBeObservable(expected);
  expect(e1).toHaveSubscriptions(e1subs);
}));
```

## Easier assertions on observables without marbles

The [@hirez_io/observer-spy](https://www.npmjs.com/package/@hirez_io/observer-spy) library provides a way to make assertions on observables without using marbles:

```ts
import { subscribeSpyTo } from '@hirez_io/observer-spy';

it('should filter even numbers and multiply each number by 10', () => {
  const result$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
    filter(n => n % 2 !== 0),
    map(x => x * 10)
  );

  const observerSpy = subscribeSpyTo(result$);

  expect(observerSpy.getValues()).toEqual([10, 30, 50, 70, 90]);
});
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
