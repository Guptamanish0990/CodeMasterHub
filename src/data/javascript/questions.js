export const questions = [
  {
    line: "const sum = (a, b) => a + b;",
    explanation: "Arrow function that returns the sum of parameters a and b. Implicit return (no curly braces needed for single expression).",
    example: "sum(5, 3)",
    output: "8"
  },
  {
    line: "setTimeout(() => console.log('Done'), 1000);",
    explanation: "Schedules a function to execute after 1000ms (1 second). The callback is added to the macrotask queue.",
    example: "Runs after 1 second delay",
    output: "Done (after 1 sec)"
  },
  {
    line: "const [first, second] = [10, 20];",
    explanation: "Array destructuring unpacks values from array into variables. first gets 10, second gets 20.",
    example: "console.log(first, second);",
    output: "10 20"
  },
  {
    line: "const { name, age } = { name: 'John', age: 25 };",
    explanation: "Object destructuring extracts properties into variables with same names.",
    example: "console.log(name, age);",
    output: "John 25"
  },
  {
    line: "const doubled = [1, 2, 3].map(x => x * 2);",
    explanation: "map() creates new array by applying callback to each element. Returns [2, 4, 6].",
    example: "console.log(doubled);",
    output: "[2, 4, 6]"
  },
  {
    line: "const evens = [1, 2, 3, 4].filter(x => x % 2 === 0);",
    explanation: "filter() returns new array with elements that pass the test (even numbers).",
    example: "console.log(evens);",
    output: "[2, 4]"
  },
  {
    line: "const sum = [1, 2, 3].reduce((acc, x) => acc + x, 0);",
    explanation: "reduce() accumulates values. Start with 0, add each element: 0+1=1, 1+2=3, 3+3=6.",
    example: "console.log(sum);",
    output: "6"
  },
  {
    line: "const greeting = `Hello ${name}!`;",
    explanation: "Template literals allow embedding expressions using ${}. Supports multi-line strings.",
    example: "const name = 'John'; console.log(greeting);",
    output: "Hello John!"
  },
  {
    line: "const isEven = num => num % 2 === 0;",
    explanation: "Arrow function with single parameter (parentheses optional). Returns boolean.",
    example: "isEven(4)",
    output: "true"
  },
  {
    line: "const result = a ?? 'default';",
    explanation: "Nullish coalescing operator returns right side only for null or undefined. 0 and '' are valid.",
    example: "const a = null; console.log(result);",
    output: "default"
  },
  {
    line: "const value = obj?.property?.nested;",
    explanation: "Optional chaining safely accesses nested properties without error if intermediate is null/undefined.",
    example: "const obj = {}; console.log(value);",
    output: "undefined"
  },
  {
    line: "const unique = [...new Set([1, 2, 2, 3])];",
    explanation: "Set removes duplicates. Spread operator converts Set back to array.",
    example: "console.log(unique);",
    output: "[1, 2, 3]"
  },
  {
    line: "const merged = { ...obj1, ...obj2 };",
    explanation: "Spread operator merges objects. Later properties override earlier ones.",
    example: "const obj1 = {a:1}, obj2 = {b:2}; console.log(merged);",
    output: "{a: 1, b: 2}"
  },
  {
    line: "const clone = { ...original };",
    explanation: "Creates shallow copy of object. Nested objects are still referenced.",
    example: "const original = {a:1, b:{c:2}}; const clone = {...original};",
    output: "Shallow copy created"
  },
  {
    line: "function* generator() { yield 1; yield 2; }",
    explanation: "Generator function returns iterator. Pauses at each yield statement.",
    example: "const gen = generator(); gen.next().value;",
    output: "1"
  },
  {
    line: "const promise = new Promise((resolve, reject) => { resolve('Done'); });",
    explanation: "Promise constructor takes executor with resolve and reject functions.",
    example: "promise.then(data => console.log(data));",
    output: "Done"
  },
  {
    line: "await fetch('https://api.example.com/data');",
    explanation: "await pauses async function execution until Promise resolves. Returns response.",
    example: "async function getData() { const res = await fetch(url); }",
    output: "Response object"
  },
  {
    line: "Promise.all([promise1, promise2]).then(results => {});",
    explanation: "Waits for all promises to resolve. Rejects if any promise rejects.",
    example: "Promise.all([Promise.resolve(1), Promise.resolve(2)])",
    output: "[1, 2]"
  },
  {
    line: "Promise.race([promise1, promise2]).then(result => {});",
    explanation: "Resolves/rejects with first settled promise (fastest one).",
    example: "Promise.race([delay(100,'slow'), delay(50,'fast')])",
    output: "fast"
  },
  {
    line: "const cache = new Map(); cache.set('key', 'value');",
    explanation: "Map stores key-value pairs. Keys can be any type (objects, functions).",
    example: "cache.get('key')",
    output: "value"
  },
  {
    line: "const set = new Set([1, 2, 2, 3]);",
    explanation: "Set stores unique values. Automatically removes duplicates.",
    example: "console.log([...set]);",
    output: "[1, 2, 3]"
  },
  {
    line: "localStorage.setItem('theme', 'dark');",
    explanation: "Stores data persistently in browser (no expiration, up to 10MB).",
    example: "localStorage.getItem('theme')",
    output: "dark"
  },
  {
    line: "sessionStorage.setItem('temp', 'data');",
    explanation: "Stores data for current session only (cleared when tab closes).",
    example: "sessionStorage.getItem('temp')",
    output: "data"
  },
  {
    line: "document.cookie = 'user=John; max-age=3600';",
    explanation: "Sets cookie sent to server with requests. Can set expiration.",
    example: "console.log(document.cookie);",
    output: "user=John"
  },
  {
    line: "JSON.stringify({ name: 'John' });",
    explanation: "Converts JavaScript object to JSON string.",
    example: "JSON.stringify({name:'John', age:25})",
    output: '{"name":"John","age":25}'
  },
  {
    line: "JSON.parse('{\"name\":\"John\"}');",
    explanation: "Parses JSON string into JavaScript object.",
    example: "JSON.parse('{\"name\":\"John\"}').name",
    output: "John"
  },
  {
    line: "Object.freeze(obj);",
    explanation: "Makes object immutable - cannot add, delete, or change properties.",
    example: "const obj = Object.freeze({a:1}); obj.a = 2;",
    output: "1 (unchanged)"
  },
  {
    line: "Object.seal(obj);",
    explanation: "Prevents adding/deleting properties but allows modifying existing ones.",
    example: "const obj = Object.seal({a:1}); obj.a = 2; obj.b = 3;",
    output: "obj = {a: 2}"
  },
  {
    line: "Object.keys(obj).forEach(key => {});",
    explanation: "Returns array of object's own enumerable property names.",
    example: "Object.keys({a:1, b:2})",
    output: "['a', 'b']"
  },
  {
    line: "Object.values(obj).forEach(value => {});",
    explanation: "Returns array of object's own enumerable property values.",
    example: "Object.values({a:1, b:2})",
    output: "[1, 2]"
  },
  {
    line: "Object.entries(obj).forEach(([key, value]) => {});",
    explanation: "Returns array of [key, value] pairs for enumerable properties.",
    example: "Object.entries({a:1, b:2})",
    output: "[['a',1], ['b',2]]"
  },
  {
    line: "const proxy = new Proxy(target, handler);",
    explanation: "Proxy wraps object to intercept operations like get, set, delete.",
    example: "const handler = { get: (obj, prop) => prop in obj ? obj[prop] : 'default' };",
    output: "Intercepted property access"
  },
  {
    line: "Reflect.get(obj, 'property');",
    explanation: "Reflect API provides methods for interceptable operations (used with Proxy).",
    example: "Reflect.get({name:'John'}, 'name')",
    output: "John"
  },
  {
    line: "const symbol = Symbol('unique');",
    explanation: "Symbol creates unique identifier. Every symbol is unique even with same description.",
    example: "Symbol('id') === Symbol('id')",
    output: "false"
  },
  {
    line: "Array.from('hello');",
    explanation: "Creates array from iterable or array-like object.",
    example: "Array.from('hello')",
    output: "['h','e','l','l','o']"
  },
  {
    line: "Array.isArray([]);",
    explanation: "Checks if value is an array (more reliable than typeof).",
    example: "Array.isArray({})",
    output: "false"
  },
  {
    line: "element.addEventListener('click', handler);",
    explanation: "Attaches event listener without overwriting existing listeners.",
    example: "Multiple handlers can be added to same event",
    output: "All handlers execute"
  },
  {
    line: "element.classList.toggle('active');",
    explanation: "Adds class if missing, removes if present. Returns boolean.",
    example: "element.classList.toggle('hidden')",
    output: "true if added, false if removed"
  },
  {
    line: "requestAnimationFrame(callback);",
    explanation: "Schedules callback before next repaint (60fps). Used for animations.",
    example: "function animate() { requestAnimationFrame(animate); }",
    output: "Smooth 60fps animation"
  },
  {
    line: "Math.random() * (max - min) + min;",
    explanation: "Generates random number between min (inclusive) and max (exclusive).",
    example: "Math.random() * 10 + 1",
    output: "Random number 1-10.999"
  },
  {
    line: "Number.isNaN(value);",
    explanation: "Checks if value is NaN (doesn't coerce, unlike global isNaN).",
    example: "Number.isNaN('abc')",
    output: "false"
  },
  {
    line: "parseInt('123px', 10);",
    explanation: "Parses integer from string, stops at non-digit. Radix 10 for decimal.",
    example: "parseInt('123px')",
    output: "123"
  },
  {
    line: "parseFloat('12.34em');",
    explanation: "Parses floating point number from string.",
    example: "parseFloat('12.34em')",
    output: "12.34"
  },
  {
    line: "encodeURIComponent('name=John&age=25');",
    explanation: "Encodes URI component (encodes special characters like & and =).",
    example: "encodeURIComponent('hello world!')",
    output: "hello%20world%21"
  },
  {
    line: "decodeURIComponent('hello%20world');",
    explanation: "Decodes URI component back to original string.",
    example: "decodeURIComponent('hello%20world')",
    output: "hello world"
  },
  {
    line: "new URL('https://example.com/path?name=John');",
    explanation: "URL API parses and provides access to URL components.",
    example: "url.searchParams.get('name')",
    output: "John"
  },
  {
    line: "performance.now();",
    explanation: "Returns high-resolution timestamp in milliseconds (floating point).",
    example: "const start = performance.now();",
    output: "1234.567 (current time)"
  },
  {
    line: "console.table([{a:1}, {b:2}]);",
    explanation: "Displays array/object as table in browser console (for debugging).",
    example: "console.table(users)",
    output: "Table view in console"
  },
  {
    line: "debugger;",
    explanation: "Pauses JavaScript execution and opens browser debugger at that line.",
    example: "debugger; // Code stops here in devtools",
    output: "Execution paused"
  },
  {
    line: "'use strict';",
    explanation: "Enables strict mode - catches common errors and prevents unsafe actions.",
    example: "'use strict'; x = 5; // ReferenceError",
    output: "Error (x not declared)"
  }
];