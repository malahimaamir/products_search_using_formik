
// 1. Event Capturing Phase
document.body.addEventListener('click', () => console.log('Body Bubble'), false);
document.body.addEventListener('click', () => console.log('Body Capture'), true);

// 2. JavaScript Modules (import/export)
// export function greet() { console.log('Hello'); } // in greet.js
// import { greet } from './greet.js';

// 3. Service Workers
// navigator.serviceWorker.register('/sw.js');

// 4. Web Workers
// const worker = new Worker('worker.js');

// 5. Shared Workers
// const sharedWorker = new SharedWorker('sharedWorker.js');

// 6. Broadcast Channel API
const channel = new BroadcastChannel('chat');
channel.postMessage('Hello from tab 1');

// 7. JavaScript Iterators
const iterator = [1,2][Symbol.iterator]();
console.log(iterator.next().value);

// 8. JavaScript Generators
function* gen() { yield 1; yield 2; }
console.log([...gen()]);

// 9. Async Iteration
async function fetchAll(urls) {
  for await (let res of urls.map(url => fetch(url))) {
    console.log(await res.text());
  }
}

// 10. Promise.all vs Promise.allSettled
Promise.allSettled([Promise.resolve(1), Promise.reject('err')])
  .then(console.log);

// 11. BigInt Data Type
const big = 1234567890123456789012345678901234567890n;

// 12. Intl API
console.log(new Intl.NumberFormat('en-IN').format(1234567));

// 13. Optional Chaining
const user = {};
console.log(user?.profile?.email);

// 14. Nullish Coalescing
let name = null ?? 'Guest';

// 15. Object Destructuring
const {x, y} = {x: 10, y: 20};

// 16. Array Destructuring
const [c,d] = [1, 2];

// 17. Object.entries / Object.values
Object.entries({a: 1}).forEach(([k,v]) => console.log(k,v));

// 18. Dynamic Import
// import('./module.js').then(m => m.greet());

// 19. Private Class Fields
class Demo {
  #secret = 'hidden';
  reveal() { return this.#secret; }
}

// 20. Static Class Methods
class MathUtil {
  static add(a, b) { return a + b; }
}

// 21. Getters and Setters
class Person {
  get fullName() { return 'John Doe'; }
}

// 22. Tagged Template Literals
function tag(strings, ...vals) { return strings.join(''); }
tag`Hello ${"World"}`;

// 23. Template Literal Types
// TypeScript specific - skipped

// 24. Top-Level Await (in modules only)
// const res = await fetch('...');

// 25. Temporal API (proposal)
// Not fully supported - skipped

// 26. WeakRef & FinalizationRegistry
// const ref = new WeakRef(obj);

// 27. Structured Clone vs JSON Clone
const obj = {a:1};
const clone = structuredClone(obj);

// 28. Event Loop Starvation
setTimeout(() => console.log('Timeout'), 0);
while(true){} // Starves event loop

// 29. Closures with setTimeout in Loops
for (var i = 0; i < 3; i++) {
  ((j) => setTimeout(() => console.log(j), 100))(i);
}

// 30. Type Coercion Quirks
console.log([] + {}); // "[object Object]"

// 31. globalThis
console.log(globalThis);

// 32. Proxy and Reflect API
const proxy = new Proxy({}, {
  get: () => 'intercepted'
});

// 33. Object.freeze/seal
const frozen = Object.freeze({name: 'Frozen'});

// 34. Memory Leaks
// Referencing unused DOM nodes causes leaks

// 35. Function Composition
const compose = (f, g) => x => f(g(x));

// 36. eval() vs Function
const fn = new Function('a', 'return a*2');

// 37. The with statement
// with(obj) { console.log(name); } // Discouraged

// 38. Polyfill Object.create
Object.myCreate = function(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
};

// 39. Tail Call Optimization
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}

// 40. Labeled Statements
outer: for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    if (i === 1) break outer;
  }
}

// 41. Performance Optimization
// Use throttling, debouncing, and lazy loading

// 42. EventEmitter
// Node.js: const EventEmitter = require('events');

// 43. Composition vs Inheritance
// Use composition to combine functions

// 44. Method Chaining
class Chain {
  one() { console.log(1); return this; }
  two() { console.log(2); return this; }
}
new Chain().one().two();

// 45. Function Pipelining
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// 46. JavaScript Engine
// V8 uses JIT compilation, memory management, etc.

// 47. new Object() vs {}
const a = {}; const b = new Object();

// 48. Immutable vs In-Place
const arr = [1, 2]; const newArr = [...arr, 3];

// 49. Destructuring in Function Params
function show({name}) { console.log(name); }

// 50. JS Debugging (DevTools)
// Use breakpoints, console, debugger keyword


hoistedVariable = 3;
console.log(hoistedVariable); 
var hoistedVariable;

