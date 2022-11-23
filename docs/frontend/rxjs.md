---
tags: [frontend,testing,rxjs]
---

# RxJS

- [Interactive diagrams of Rx Observables and Operators](https://rxmarbles.com) - Unfortunatly no longer maintained


## Testing with marbles

Testing reactive/asynchronous can be done by virtualize time. Marble diagramms provide a way to visualize the behaviour of observables.
Both conzepts can be used together to test RxJS code (example taken from [this RxJS guide](https://rxjs.dev/guide/testing/marble-testing)):

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

As this is has a lot of boilerplate code the [rxjs-marbles](https://www.npmjs.com/package/rxjs-marbles) library exists:

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