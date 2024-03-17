---
tags: [javascript,performance]
---

# Object property order

Consider you want to model a 3D-vector in Javascript with an object having a `x`, `y` and `z` property. When creating a new vector you have 6 possible orders for the properties:

```js
const a1 = {x: 1, y: 2, z: 3};
const a2 = {x: 1, z: 3, y: 2};
const a3 = {y: 2, x: 1, z: 3};
const a4 = {y: 2, z: 3, x: 1};
const a5 = {z: 3, x: 1, y: 3};
const a6 = {z: 3, y: 3, x: 1};
```

When accessing the properties only using direct property access (e.g. `a.x` or `a.z`) there is no obvious difference between the 6 sorting. Of course `Object.keys()`, `Object.values()` or `Object.entries()` will return different values for the different sorting.

### HiddenClasses

But there is also a real performance implication when mixing the order of the properties. In V8 each Javascript object has a HiddenClass associated that keeps information about the object shape. Because of the dynamic nature of Javascript, these HiddenClasses are created on the fly and updated dynamically as objects change. Objects with the same structure (e.g. same named properties and same order) share the same HiddenClass. Therefore, one should always use the same ordering of properties, because then HiddenClasses can be reused and the property lookup can be more easily optimized.

## Benchmark

To demonstrate this I have created a [little benchmark on jsperf.app](https://jsperf.app/noqume). The benchmark tests adding 6 vectors. In one test case all vectors use the same property order and in the other test case all vectors have different properties sorting. The test case with equal property ordering is over 50% faster than the other.

<details>
<summary>Benchmark code</summary>

### Setup code
```js
const ordered = [];
const unordered = [];

for (let i = 0; i < 6; i++) {
	const x = Math.random();
	const y = Math.random();
	const z = Math.random();
	
	ordered.push({x, y, z});

	if (i === 0) {
		unordered.push({x, y, z});
	} else if (i === 1) {
		unordered.push({x, z, y});
	} else if (i === 2) {
		unordered.push({y, x, z});
	} else if (i === 3) {
		unordered.push({y, z, x});
	} else if (i === 4) {
		unordered.push({z, x, y});
	} else {
		unordered.push({z, y, x});
	}
}
```

### Test case 1: Ordered properties
```js
const result = ordered.reduce(
  (a, b) => ({x: a.x + b.x, y: a.y + b.y, z: a.z + b.z}),
  {x: 0, y: 0, z: 0}
)
```

### Test case 2: Unordered properties
```js
const result = unordered.reduce(
  (a, b) => ({x: a.x + b.x, y: a.y + b.y, z: a.z + b.z}),
  {x: 0, y: 0, z: 0}
)
```
</details>

## Resources
- V8 Blog Post: [Fast properties in V8](https://v8.dev/blog/fast-properties)
- Blog Post: [What's up with monomorphism?](https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html)
