---
tags: [frontend,testing,jest,rxjs]
---

# Testing Asynchronous code with jest

Assertion is performed in asynchronous code and therefore assertion errors are not visible to jest

```ts
it('should use window.setTimeout', () => {
  let a = 1
  window.setTimeout(() => {
    a++;
    expect(a).toBe(1) // Test passes
  })
});

it('should use Promise', () => {
  let a = 1
  Promise.resolve().then(() => {
    a++;
    expect(a).toBe(1) // Test passes, but console has "Unhandled Promise rejection" error
  })
});
```

Use done callback provided by jest

```ts
it('should use window.setTimeout', done => {
  let a = 1
  window.setTimeout(() => {
    a++;
    expect(a).toBe(2)
    done()
  })
});

it('should use Promise', done => {
  let a = 1
  Promise.resolve().then(() => {
    a++;
    expect(a).toBe(2)
  }).then(done, done) // Call done on Promise.resolve and Promise.reject
});
```

Or return a Promise:

```ts
it('should use Promise', () => {
  let a = 1
  return Promise.resolve().then(() => {
    a++;
    expect(a).toBe(2)
  })
});
```

Or use async/await:

```ts
it('should use Promise', async () => {
  let a = 1
  await Promise.resolve().then(() => a++)
  expect(a).toBe(2)
});
```

## With Angular testing utility functions

´waitForAsync()´ waits for all async tasks to be completed even async tasks from other tests!

```ts
it('should use waitForAsync', waitForAsync(() => {
  let a = 1
  Promise.resolve().then(() => {
    a++;
    expect(a).toBe(2)
  })
}));
```

`fakeAsync()` does not influence other tests. It will execute all microtasks, but not macrotask. It will throw an error if there are pending macrotasks after finishing the test. Use `tick()` to advance the specified amount of time or `flush()` to advance till every microtask is finished. `flush()` does not handle/wait for periodic tasks

```ts
class Incrementer {
  private _a = 1

  get a() {
    return this._a;
  }

  increment() {
    window.setTimeout(() => this._a++, 100)

    // periodic task
    //const intervalId = window.setInterval(() => {
    //  this._a++;
    //  //window.clearInterval(intervalId)
    //}, 100)
  }
}

it('should test the incrementer', fakeAsync(() => {
  const incrementer = new Incrementer();
  expect(incrementer.a).toBe(1)
  incrementer.increment()
  tick(100)
  //flush()
  expect(incrementer.a).toBe(2)
}));
```

## Testing Observables

Pay attention whether an Observables emits synchronously or asynchronoulsy:

```ts
it('should test with of()', () => {
  let a = 1
  of(1)// of() emits is synchronous
    .subscribe(n => a += n)
  expect(a).toBe(2)
});

it('should test with Observable constructor', () => {
  let a = 1
  new Observable<number>(subscriber => subscriber.next(1)) // still synchronous
    .subscribe(n => a += n) // still synchronous
  expect(a).toBe(2)
});

it('should test with Observable constructor asynchronous', () => {
  let a = 1
  new Observable<number>(subscriber => {
    window.setTimeout( () => subscriber.next(1))
  }) // asynchronous because of setTimeout
    .subscribe(n => a += n)
  expect(a).toBe(1)
});
```

## Using `fakeAsync()` with `Observables`

```ts
it('should assert in subscribe', fakeAsync( () => {
  let a = 1
  of(1).subscribe(n => {
    a += n
    expect(a).toBe(1) // assertion error is caught by subscribe() and rethrown asynchronously
  })
  expect(a).toBe(2)

  tick() // This will make the thrown error visible
}));
```

```ts
it('should subject', fakeAsync(async () => {
  let a = 1;

  const nPromise = firstValueFrom(of(1).pipe(delay(0))) // macrotask
  //const nPromise = firstValueFrom(scheduled([1], asyncScheduler)) // macrotask
  //const nPromise = firstValueFrom(scheduled([1], asapScheduler)) // microtask

  tick() // needed for macrotask (asyncScheduler), but not for asapScheduler. Because microtask is awaited by await
  //flush() // does only flush microtask

  a += await nPromise

  expect(a).toBe(2)
}));
```
