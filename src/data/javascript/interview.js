export const interview = {
  // ====================== 80 BASIC INTERVIEW QUESTIONS ======================
  fresher: [
    {
      question: "What is JavaScript?",
      answer: "JavaScript is a high-level, interpreted programming language that makes web pages interactive. It runs in browsers and on servers (Node.js), supporting both object-oriented and functional programming.",
      example: "console.log('Hello World');\nfunction greet(name) { return 'Hello ' + name; }\nconsole.log(greet('John'));",
      output: "Hello World\nHello John",
      note: "JavaScript is the programming language of the web."
    },
    {
      question: "What is the difference between let, const, and var?",
      answer: "var is function-scoped, can be redeclared, and hoisted with undefined. let is block-scoped, cannot be redeclared, but can be reassigned. const is block-scoped, cannot be redeclared or reassigned. Use const by default.",
      example: "var a = 1; var a = 2; // allowed\nlet b = 1; // let b = 2; // Error\nconst c = 3; // c = 4; // Error\nif(true) { var x = 10; let y = 20; }\nconsole.log(x); // 10\n// console.log(y); // Error",
      output: "var accessible outside block, let/const not accessible",
      note: "const objects can have their properties modified, just cannot be reassigned."
    },
    {
      question: "Explain hoisting in JavaScript.",
      answer: "Hoisting moves declarations to the top of their scope during compilation. var variables are hoisted with undefined; let/const are hoisted but not initialized (Temporal Dead Zone); function declarations are fully hoisted.",
      example: "console.log(x); // undefined\nvar x = 5;\nconsole.log(y); // ReferenceError\nlet y = 10;\nsayHello(); // Works\nfunction sayHello() { console.log('Hi'); }",
      output: "undefined, ReferenceError, Hi",
      note: "Always declare variables at the top of their scope."
    },
    {
      question: "What is the difference between undefined and null?",
      answer: "undefined means variable declared but not assigned a value (default). null means intentional absence of value (assigned by programmer). undefined == null is true, but undefined === null is false.",
      example: "let a; // undefined\nlet b = null; // null\nconsole.log(a == b); // true\nconsole.log(a === b); // false\ntypeof null; // 'object' (bug)",
      output: "undefined, null, true, false",
      note: "Use null when you explicitly want to indicate 'no value'."
    },
    {
      question: "What is the difference between == and ===?",
      answer: "== performs type coercion before comparison, converting values to same type. === compares both value and type without any coercion. Always use === to avoid unexpected bugs.",
      example: "5 == '5' // true (coerces string to number)\n5 === '5' // false\nnull == undefined // true\nnull === undefined // false\n0 == false // true\n0 === false // false",
      output: "true, false, true, false, true, false",
      note: "Use === for all comparisons unless you specifically need type coercion."
    },
    {
      question: "What are the data types in JavaScript?",
      answer: "7 primitives: string, number, boolean, null, undefined, symbol, bigint. 1 non-primitive: object (includes arrays, functions, dates, regex). Primitives are immutable, objects are mutable.",
      example: "typeof 'hello' // 'string'\ntypeof 42 // 'number'\ntypeof true // 'boolean'\ntypeof null // 'object' (bug)\ntypeof undefined // 'undefined'\ntypeof Symbol() // 'symbol'\ntypeof 123n // 'bigint'\ntypeof {} // 'object'\nArray.isArray([]) // true",
      output: "'string', 'number', 'boolean', 'object', 'undefined', 'symbol', 'bigint', 'object', true",
      note: "Use Array.isArray() to check arrays, not typeof."
    },
    {
      question: "What is type coercion?",
      answer: "Type coercion is automatic/implicit conversion between data types by JavaScript. String + number converts number to string. String - number converts string to number.",
      example: "'5' + 3 // '53' (number to string)\n'5' - 3 // 2 (string to number)\ntrue + true // 2 (true becomes 1)\n'5' * '2' // 10\n5 + null // 5 (null becomes 0)",
      output: "'53', 2, 2, 10, 5",
      note: "Use explicit conversion (Number(), String()) to avoid surprises."
    },
    {
      question: "What is a closure? Give an example.",
      answer: "A closure is a function that remembers its lexical scope even when executed outside that scope. Inner function has access to outer function's variables after outer function returns.",
      example: "function counter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst c = counter();\nconsole.log(c()); // 1\nconsole.log(c()); // 2\n\nfunction createBank(initial) {\n  let balance = initial;\n  return {\n    deposit: amt => balance += amt,\n    withdraw: amt => balance -= amt,\n    getBalance: () => balance\n  };\n}\nconst acc = createBank(100);\nacc.deposit(50);\nconsole.log(acc.getBalance()); // 150",
      output: "1, 2, 150",
      note: "Closures are used for data privacy, factory functions, and module pattern."
    },
    {
      question: "What is the event loop?",
      answer: "Event loop handles asynchronous operations by checking call stack and task queues. Synchronous code runs first, then microtasks (Promises), then macrotasks (setTimeout).",
      example: "console.log('1');\nsetTimeout(() => console.log('4'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('2');\n// Output: 1,2,3,4",
      output: "1, 2, 3, 4",
      note: "Never block the event loop with heavy synchronous operations."
    },
    {
      question: "What is the difference between call, apply, and bind?",
      answer: "call() invokes function with given this and arguments (comma-separated). apply() same but takes array of arguments. bind() returns new function with this bound permanently.",
      example: "function greet(greeting, punctuation) {\n  console.log(`${greeting}, ${this.name}${punctuation}`);\n}\nconst user = { name: 'John' };\ngreet.call(user, 'Hello', '!');   // Hello, John!\ngreet.apply(user, ['Hi', '?']);    // Hi, John?\nconst bound = greet.bind(user, 'Hey');\nbound('!!');                        // Hey, John!!",
      output: "Hello, John!, Hi, John?, Hey, John!!",
      note: "bind returns a new function, call/apply execute immediately."
    },
    {
      question: "What is a Promise?",
      answer: "Promise represents future value of async operation. Three states: pending, fulfilled (success), rejected (failure). Once settled, state cannot change.",
      example: "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Done'), 1000);\n});\npromise\n  .then(data => console.log(data))\n  .catch(err => console.error(err))\n  .finally(() => console.log('Complete'));\nPromise.resolve('Immediate').then(console.log);\nPromise.reject('Error').catch(console.log);",
      output: "Immediate, Error, Done (after 1s), Complete",
      note: "Always handle promise rejections with .catch() or try/catch."
    },
    {
      question: "What is async/await?",
      answer: "async/await is syntactic sugar over Promises, making async code look synchronous. async functions always return Promise. await pauses execution until Promise resolves.",
      example: "async function fetchData() {\n  try {\n    const data = await new Promise(resolve => {\n      setTimeout(() => resolve('Data loaded'), 1000);\n    });\n    console.log(data);\n  } catch(error) {\n    console.error(error);\n  }\n}\nfetchData(); // 'Data loaded' after 1s\n\nasync function getValue() {\n  return 42;\n}\ngetValue().then(console.log); // 42",
      output: "Data loaded, 42",
      note: "await only works inside async functions."
    },
    {
      question: "What is the difference between map, filter, and reduce?",
      answer: "map() transforms each element, returns new array same length. filter() returns elements that pass test. reduce() accumulates values into single result.",
      example: "const nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(x => x * 2);\nconsole.log(doubled); // [2,4,6,8,10]\nconst evens = nums.filter(x => x % 2 === 0);\nconsole.log(evens); // [2,4]\nconst sum = nums.reduce((acc, x) => acc + x, 0);\nconsole.log(sum); // 15\nconst result = nums.filter(x => x > 2).map(x => x * 3).reduce((a,b) => a+b, 0);\nconsole.log(result); // 36",
      output: "[2,4,6,8,10], [2,4], 15, 36",
      note: "These methods are immutable (don't change original array)."
    },
    {
      question: "What is the spread operator?",
      answer: "Spread operator (...) expands iterable into individual elements. Used for copying arrays/objects, merging, and function arguments.",
      example: "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\nconsole.log(combined); // [1,2,3,4,5,6]\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { c: 3, d: 4 };\nconst merged = { ...obj1, ...obj2 };\nconsole.log(merged); // { a:1, b:2, c:3, d:4 }\nconst numbers = [1, 5, 3, 9, 2];\nconsole.log(Math.max(...numbers)); // 9\nconst chars = [...'hello'];\nconsole.log(chars); // ['h','e','l','l','o']",
      output: "[1,2,3,4,5,6], { a:1,b:2,c:3,d:4 }, 9, ['h','e','l','l','o']",
      note: "Spread creates shallow copies (nested objects still referenced)."
    },
    {
      question: "What is the rest parameter?",
      answer: "Rest parameter (...args) collects remaining arguments into an array. Must be the last parameter. Opposite of spread (spread expands, rest collects).",
      example: "function sum(...numbers) {\n  return numbers.reduce((a,b) => a+b, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // 10\nfunction greet(greeting, ...names) {\n  return names.map(name => `${greeting}, ${name}`);\n}\nconsole.log(greet('Hello', 'John', 'Jane'));\n// ['Hello, John', 'Hello, Jane']\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconsole.log(first, second, rest); // 1 2 [3,4,5]",
      output: "10, ['Hello, John', 'Hello, Jane'], 1 2 [3,4,5]",
      note: "Rest parameters are preferred over arguments object."
    },
    {
      question: "What is destructuring?",
      answer: "Destructuring extracts values from arrays or properties from objects into distinct variables using pattern matching.",
      example: "// Array destructuring\nconst colors = ['red', 'green', 'blue'];\nconst [first, second, third] = colors;\nconsole.log(first, second, third); // red green blue\nconst [, , last] = colors;\nconsole.log(last); // blue\nconst [primary, ...secondary] = colors;\nconsole.log(primary, secondary); // red ['green', 'blue']\n\n// Object destructuring\nconst user = { name: 'John', age: 25, city: 'NYC' };\nconst { name, age } = user;\nconsole.log(name, age); // John 25\nconst { name: userName, city } = user;\nconsole.log(userName, city); // John NYC\nconst { role = 'user' } = user;\nconsole.log(role); // user",
      output: "red green blue, blue, red ['green','blue'], John 25, John NYC, user",
      note: "Use default values: const { role = 'user' } = data;"
    },
    {
      question: "What is the difference between slice and splice?",
      answer: "slice() returns new array without modifying original. splice() modifies original array by removing/replacing elements.",
      example: "const arr = [1, 2, 3, 4, 5];\nconst sliced = arr.slice(1, 4);\nconsole.log(sliced); // [2,3,4]\nconsole.log(arr);    // [1,2,3,4,5]\nconst removed = arr.splice(2, 2);\nconsole.log(removed); // [3,4]\nconsole.log(arr);     // [1,2,5]\narr.splice(2, 0, 3, 4);\nconsole.log(arr); // [1,2,3,4,5]\narr.splice(1, 1, 'two');\nconsole.log(arr); // [1,'two',3,4,5]",
      output: "[2,3,4], [1,2,3,4,5], [3,4], [1,2,5], [1,2,3,4,5], [1,'two',3,4,5]",
      note: "slice = safe copy, splice = destructive modification."
    },
    {
      question: "What is the difference between for...in and for...of?",
      answer: "for...in iterates over enumerable property keys (including prototype). for...of iterates over iterable values.",
      example: "const arr = ['a', 'b', 'c'];\narr.custom = 'hello';\nfor(let key in arr) {\n  console.log(key); // 0,1,2,'custom'\n}\nfor(let val of arr) {\n  console.log(val); // 'a','b','c'\n}\nconst str = 'hello';\nfor(let char of str) {\n  console.log(char); // 'h','e','l','l','o'\n}\nconst obj = { a: 1, b: 2 };\nfor(let key in obj) {\n  console.log(key); // 'a','b'\n}",
      output: "0,1,2,custom, a,b,c, h,e,l,l,o, a,b",
      note: "Use hasOwnProperty with for...in to filter prototype properties."
    },
    {
      question: "What is event delegation?",
      answer: "Event delegation attaches single event listener to parent instead of individual children. Uses event bubbling to handle events on dynamically added elements.",
      example: "document.getElementById('parent').addEventListener('click', (e) => {\n  if(e.target && e.target.matches('.btn')) {\n    console.log('Button clicked:', e.target.textContent);\n  }\n});\n// Works for dynamically added buttons",
      output: "Button clicked: [button text]",
      note: "Essential for dynamic lists and infinite scroll."
    },
    {
      question: "What is the difference between localStorage, sessionStorage, and cookies?",
      answer: "localStorage persists until cleared (10MB, never expires). sessionStorage clears on tab close (5MB). cookies sent to server with every request (4KB, can set expiry).",
      example: "localStorage.setItem('theme', 'dark');\nconst theme = localStorage.getItem('theme');\nsessionStorage.setItem('temp', 'data');\ndocument.cookie = 'user=John; max-age=3600; path=/';",
      output: "Data stored in different storage mechanisms",
      note: "Cookies with HttpOnly flag are more secure for authentication."
    },
    {
      question: "What is the difference between Object.freeze() and Object.seal()?",
      answer: "Object.freeze() makes object immutable (no changes allowed). Object.seal() prevents adding/deleting properties but allows modifying existing ones.",
      example: "const frozen = Object.freeze({ a: 1 });\nfrozen.a = 2; // Fails silently\nconsole.log(frozen.a); // 1\n\nconst sealed = Object.seal({ b: 1 });\nsealed.b = 2; // Works\nsealed.c = 3; // Cannot add\nconsole.log(sealed.b); // 2\nconsole.log(sealed.c); // undefined",
      output: "1, 2, undefined",
      note: "Use Object.isFrozen() and Object.isSealed() to check."
    },
    {
      question: "What is NaN? How to check for NaN?",
      answer: "NaN stands for 'Not a Number'. It's the only value not equal to itself. Use Number.isNaN() to reliably check.",
      example: "console.log(NaN === NaN); // false\nconsole.log(Number.isNaN(NaN)); // true\nconsole.log(isNaN('abc')); // true (coerces)\nconsole.log(Number.isNaN('abc')); // false",
      output: "false, true, true, false",
      note: "Always prefer Number.isNaN() over global isNaN()."
    },
    {
      question: "What is the output of typeof null?",
      answer: "typeof null returns 'object'. This is a historical bug in JavaScript that remains for backward compatibility.",
      example: "console.log(typeof null); // 'object'\nconsole.log(null === null); // true",
      output: "'object'",
      note: "Use value === null to check for null, not typeof."
    },
    {
      question: "What are Object.keys(), Object.values(), and Object.entries()?",
      answer: "Object.keys() returns array of property names. Object.values() returns array of property values. Object.entries() returns array of [key, value] pairs.",
      example: "const obj = { a: 1, b: 2, c: 3 };\nconsole.log(Object.keys(obj));   // ['a','b','c']\nconsole.log(Object.values(obj)); // [1,2,3]\nconsole.log(Object.entries(obj)); // [['a',1],['b',2],['c',3]]",
      output: "['a','b','c'], [1,2,3], [['a',1],['b',2],['c',3]]",
      note: "Only includes enumerable own properties, not prototype chain."
    },
    {
      question: "What is a callback function?",
      answer: "Callback is a function passed as argument to another function, executed later. Used for async operations and event handlers.",
      example: "function fetchData(callback) {\n  setTimeout(() => {\n    callback('Data loaded');\n  }, 1000);\n}\nfetchData((data) => {\n  console.log(data); // 'Data loaded' after 1s\n});\n\n[1, 2, 3].map(x => x * 2); // map uses callback",
      output: "Data loaded (after 1 second)",
      note: "Callback hell can be avoided with Promises or async/await."
    },
    {
      question: "What is the 'arguments' object?",
      answer: "arguments is array-like object accessible inside regular functions (not arrow) containing arguments passed.",
      example: "function sum() {\n  let total = 0;\n  for(let i = 0; i < arguments.length; i++) {\n    total += arguments[i];\n  }\n  return total;\n}\nconsole.log(sum(1, 2, 3, 4)); // 10",
      output: "10",
      note: "Rest parameters (...args) are preferred over arguments object."
    },
    {
      question: "What is the difference between primitive and reference types?",
      answer: "Primitives store values directly (immutable), compared by value. Reference types store memory addresses (mutable), compared by reference.",
      example: "let a = 5;\nlet b = a;\nb = 10;\nconsole.log(a); // 5 (unchanged)\n\nlet obj1 = { value: 5 };\nlet obj2 = obj1;\nobj2.value = 10;\nconsole.log(obj1.value); // 10 (changed!)",
      output: "5, 10",
      note: "Objects are passed by reference, primitives by value."
    },
    {
      question: "What is a higher-order function?",
      answer: "Higher-order function either takes other functions as arguments or returns a function. Examples: map, filter, reduce.",
      example: "function multiplyBy(factor) {\n  return function(number) {\n    return number * factor;\n  };\n}\nconst double = multiplyBy(2);\nconsole.log(double(5)); // 10\n\n[1, 2, 3].map(x => x * 2); // map is higher-order",
      output: "10",
      note: "Essential for functional programming patterns."
    },
    {
      question: "What is the difference between map and forEach?",
      answer: "map() returns a new array with transformed values. forEach() executes function for each element, returns undefined.",
      example: "const arr = [1, 2, 3];\nconst doubled = arr.map(x => x * 2);\nconsole.log(doubled); // [2,4,6]\n\narr.forEach(x => console.log(x)); // 1,2,3\nconst result = arr.forEach(x => x * 2);\nconsole.log(result); // undefined",
      output: "[2,4,6], 1,2,3, undefined",
      note: "Use map for transformation, forEach for side effects."
    },
    {
      question: "What is the difference between some and every?",
      answer: "some() returns true if at least one element passes test. every() returns true only if all elements pass test.",
      example: "const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.some(x => x > 4)); // true (5 > 4)\nconsole.log(arr.every(x => x > 0)); // true (all > 0)\nconsole.log(arr.every(x => x > 2)); // false (1,2 not > 2)",
      output: "true, true, false",
      note: "some = OR condition, every = AND condition."
    },
    {
      question: "What is the difference between find and filter?",
      answer: "find() returns first element that matches condition. filter() returns array of all matching elements.",
      example: "const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.find(x => x > 2)); // 3\nconsole.log(arr.filter(x => x > 2)); // [3,4,5]",
      output: "3, [3,4,5]",
      note: "Use find for single item, filter for multiple items."
    },
    {
      question: "What is the difference between includes and indexOf?",
      answer: "includes() returns boolean if value exists. indexOf() returns index of value (-1 if not found).",
      example: "const arr = [1, 2, 3];\nconsole.log(arr.includes(2)); // true\nconsole.log(arr.indexOf(2)); // 1\nconsole.log(arr.includes(5)); // false\nconsole.log(arr.indexOf(5)); // -1",
      output: "true, 1, false, -1",
      note: "Use includes for existence, indexOf for position."
    },
    {
      question: "What is the difference between push, pop, shift, and unshift?",
      answer: "push() adds to end, pop() removes from end, shift() removes from start, unshift() adds to start.",
      example: "const arr = [1, 2, 3];\narr.push(4); // [1,2,3,4]\narr.pop();   // [1,2,3]\narr.unshift(0); // [0,1,2,3]\narr.shift(); // [1,2,3]",
      output: "Array modified accordingly",
      note: "shift/unshift are slower than push/pop (re-indexes array)."
    },
    {
      question: "What is the difference between join and concat?",
      answer: "join() combines array elements into string with separator. concat() merges arrays into new array.",
      example: "const arr = [1, 2, 3];\nconsole.log(arr.join('-')); // '1-2-3'\nconsole.log(arr.concat([4, 5, 6])); // [1,2,3,4,5,6]",
      output: "'1-2-3', [1,2,3,4,5,6]",
      note: "join returns string, concat returns array. Both non-mutating."
    },
    {
      question: "What is the difference between reverse and sort?",
      answer: "reverse() reverses array order. sort() sorts array elements (as strings by default).",
      example: "const arr = [3, 1, 4, 2, 5];\nconsole.log(arr.reverse()); // [5,2,4,1,3]\nconsole.log(arr.sort()); // [1,2,3,4,5]\nconsole.log(arr.sort((a,b) => b - a)); // [5,4,3,2,1]",
      output: "[5,2,4,1,3], [1,2,3,4,5], [5,4,3,2,1]",
      note: "Always provide compare function for numeric sort."
    },
    {
      question: "What is the difference between parseInt and parseFloat?",
      answer: "parseInt() parses integer from string (stops at non-digit). parseFloat() parses decimal number.",
      example: "console.log(parseInt('123px')); // 123\nconsole.log(parseFloat('12.34em')); // 12.34\nconsole.log(parseInt('12.34')); // 12\nconsole.log(parseFloat('12.34')); // 12.34",
      output: "123, 12.34, 12, 12.34",
      note: "Always specify radix (10) in parseInt to avoid octal issues."
    },
    {
      question: "What is the difference between toFixed and toPrecision?",
      answer: "toFixed() formats number with fixed decimal places. toPrecision() formats with specified significant digits.",
      example: "const num = 123.456;\nconsole.log(num.toFixed(2)); // '123.46'\nconsole.log(num.toPrecision(4)); // '123.5'",
      output: "'123.46', '123.5'",
      note: "Both return strings, not numbers."
    },
    {
      question: "What is the difference between Math.floor, Math.ceil, and Math.round?",
      answer: "Math.floor() rounds down. Math.ceil() rounds up. Math.round() rounds to nearest integer.",
      example: "console.log(Math.floor(4.9)); // 4\nconsole.log(Math.ceil(4.1)); // 5\nconsole.log(Math.round(4.5)); // 5\nconsole.log(Math.round(4.4)); // 4",
      output: "4, 5, 5, 4",
      note: "Math.floor for integer division: Math.floor(10/3) // 3"
    },
    {
      question: "What is the difference between Math.random() and generating random integers?",
      answer: "Math.random() returns random decimal between 0 (inclusive) and 1 (exclusive). Use formula for integer range.",
      example: "console.log(Math.random()); // 0.123...\nconst randomInt = Math.floor(Math.random() * 10) + 1; // 1-10\nconst randomRange = Math.floor(Math.random() * (max - min + 1)) + min;",
      output: "Random decimal, random integer",
      note: "Not cryptographically secure; use crypto.getRandomValues() for security."
    },
    {
      question: "What is the difference between Date.now() and new Date().getTime()?",
      answer: "Both return milliseconds since Unix epoch (Jan 1, 1970). Date.now() is static method, slightly faster.",
      example: "console.log(Date.now()); // 1678901234567\nconsole.log(new Date().getTime()); // 1678901234567",
      output: "Same timestamp value",
      note: "Date.now() is preferred for performance."
    },
    {
      question: "What is the difference between console.log, console.error, and console.warn?",
      answer: "console.log() for general logging. console.error() for errors (red text). console.warn() for warnings (yellow text).",
      example: "console.log('Info message');\nconsole.error('Error message');\nconsole.warn('Warning message');",
      output: "Messages with different colors/styles in console",
      note: "Use appropriate methods for log levels."
    },
    {
      question: "What is the difference between alert, confirm, and prompt?",
      answer: "alert() shows message with OK button. confirm() shows OK/Cancel, returns boolean. prompt() shows input field, returns entered string.",
      example: "alert('Message');\nconst result = confirm('Continue?');\nconst name = prompt('Enter name:');",
      output: "Dialog boxes with user interaction",
      note: "Avoid in production; use custom modals instead."
    },
    {
      question: "What is the difference between window and document?",
      answer: "window is global object representing browser window. document is property of window representing DOM tree.",
      example: "window.innerWidth; // browser width\ndocument.getElementById('id'); // DOM element",
      output: "window for browser, document for page content",
      note: "window is global, document is for DOM manipulation."
    },
    {
      question: "What is the difference between innerHTML, innerText, and textContent?",
      answer: "innerHTML parses HTML tags. innerText respects CSS styling (slower). textContent gets raw text (fastest).",
      example: "element.innerHTML = '<b>bold</b>';\nelement.innerText; // 'bold'\nelement.textContent; // 'bold'",
      output: "Different ways to get/set element content",
      note: "Avoid innerHTML with user input (XSS risk)."
    },
    {
      question: "What is the difference between getElementById and querySelector?",
      answer: "getElementById() selects by ID (fastest). querySelector() uses CSS selector (slower but flexible).",
      example: "document.getElementById('myId');\ndocument.querySelector('.myClass');\ndocument.querySelector('#myId');",
      output: "DOM elements",
      note: "Use getElementById for ID, querySelector for complex selectors."
    },
    {
      question: "What is the difference between getElementsByClassName and querySelectorAll?",
      answer: "getElementsByClassName() returns live HTMLCollection. querySelectorAll() returns static NodeList.",
      example: "const live = document.getElementsByClassName('class'); // updates automatically\nconst static = document.querySelectorAll('.class'); // snapshot",
      output: "HTMLCollection vs NodeList",
      note: "Live collections can cause performance issues in loops."
    },
    {
      question: "What is the difference between parentNode and parentElement?",
      answer: "parentNode returns parent node (could be DocumentFragment). parentElement returns parent element (null if parent not element).",
      example: "element.parentNode;\nelement.parentElement;",
      output: "Parent node or element",
      note: "parentElement returns null for documents without parent element."
    },
    {
      question: "What is the difference between children and childNodes?",
      answer: "children returns HTMLCollection of element nodes only. childNodes returns NodeList of all nodes (including text/comments).",
      example: "element.children; // only elements\nelement.childNodes; // includes text nodes",
      output: "Different collections of child nodes",
      note: "childNodes includes whitespace text nodes, children does not."
    },
    {
      question: "What is the difference between classList and className?",
      answer: "classList provides methods: add, remove, toggle, contains. className gets/sets complete class string.",
      example: "element.classList.add('new');\nelement.classList.remove('old');\nelement.classList.toggle('active');\nelement.className = 'class1 class2';",
      output: "Class manipulation",
      note: "Use classList for individual class operations."
    },
    {
      question: "What is the difference between setAttribute and direct property assignment?",
      answer: "setAttribute() sets HTML attribute. Direct property assignment sets DOM property (different from attribute).",
      example: "element.setAttribute('data-id', 5);\nelement.id = 'myId';\nelement.className = 'myClass';",
      output: "Attribute/property set",
      note: "Use property for standard, setAttribute for custom attributes."
    },
    {
      question: "What is the difference between addEventListener and onclick?",
      answer: "addEventListener allows multiple listeners. onclick allows single listener (overwrites previous).",
      example: "element.addEventListener('click', handler1);\nelement.addEventListener('click', handler2); // both fire\nelement.onclick = handler1; // overwrites previous\nelement.onclick = handler2; // only handler2 fires",
      output: "Multiple vs single event handlers",
      note: "Always use addEventListener for non-conflicting handlers."
    },
    {
      question: "What is the difference between target and currentTarget?",
      answer: "target is element that triggered event. currentTarget is element that listener is attached to.",
      example: "parent.addEventListener('click', (e) => {\n  console.log(e.target); // clicked element\n  console.log(e.currentTarget); // parent element\n});",
      output: "Different event targets",
      note: "Event delegation uses e.target to identify clicked element."
    },
    {
      question: "What is the difference between load and DOMContentLoaded events?",
      answer: "DOMContentLoaded fires when DOM is parsed (doesn't wait for images). load fires when all resources loaded.",
      example: "document.addEventListener('DOMContentLoaded', () => {\n  // DOM ready, images may not be loaded\n});\nwindow.addEventListener('load', () => {\n  // Everything loaded\n});",
      output: "Different timing of events",
      note: "DOMContentLoaded is earlier than load."
    },
    {
      question: "What is the difference between setTimeout and setInterval?",
      answer: "setTimeout executes once after delay. setInterval executes repeatedly every delay interval.",
      example: "setTimeout(() => console.log('once'), 1000);\nsetInterval(() => console.log('repeated'), 1000);",
      output: "Single vs repeated execution",
      note: "Use recursive setTimeout instead of setInterval for precise timing."
    },
    {
      question: "What is requestAnimationFrame? When to use it?",
      answer: "requestAnimationFrame schedules callback before next repaint (60fps). Used for smooth animations. Pauses when tab inactive.",
      example: "function animate() {\n  // update animation\n  requestAnimationFrame(animate);\n}\nrequestAnimationFrame(animate);",
      output: "Smooth animation at 60fps",
      note: "Always use requestAnimationFrame for animations, not setTimeout."
    },
    {
      question: "What are template literals?",
      answer: "Template literals use backticks (`) for strings with embedded expressions ${}. Support multi-line strings.",
      example: "const name = 'John';\nconst age = 25;\nconst message = `Hello ${name}, you are ${age} years old`;\nconst multiLine = `\n  Line 1\n  Line 2\n`;",
      output: "String with variables, multi-line support",
      note: "Always use template literals over string concatenation."
    },
    {
      question: "What is the ternary operator?",
      answer: "Ternary operator is shorthand for if-else: condition ? valueIfTrue : valueIfFalse.",
      example: "const age = 18;\nconst status = age >= 18 ? 'Adult' : 'Minor';\nconsole.log(status); // 'Adult'",
      output: "'Adult'",
      note: "Use for simple conditions, avoid nesting."
    },
    {
      question: "What is short-circuit evaluation?",
      answer: "Logical operators && and || short-circuit: && returns first falsy, || returns first truthy.",
      example: "console.log(0 && 'hello'); // 0 (falsy)\nconsole.log(5 && 'hello'); // 'hello' (truthy)\nconsole.log(0 || 'default'); // 'default'\nconsole.log(5 || 'default'); // 5",
      output: "0, 'hello', 'default', 5",
      note: "Useful for default values: const name = userInput || 'Guest';"
    },
    {
      question: "What is nullish coalescing operator (??)?",
      answer: "?? returns right side only for null or undefined (not for other falsy values like 0, '', false).",
      example: "console.log(0 ?? 'default'); // 0\nconsole.log(null ?? 'default'); // 'default'\nconsole.log('' ?? 'default'); // ''\nconsole.log(undefined ?? 'default'); // 'default'",
      output: "0, 'default', '', 'default'",
      note: "Use ?? when 0 or '' are valid values."
    },
    {
      question: "What is optional chaining (?. )?",
      answer: "Optional chaining safely accesses nested properties without error if intermediate property is null/undefined.",
      example: "const user = { profile: { name: 'John' } };\nconsole.log(user?.profile?.name); // 'John'\nconsole.log(user?.address?.city); // undefined (no error)\n// Without optional chaining: user.address.city would throw error",
      output: "'John', undefined",
      note: "Prevents 'Cannot read property of undefined' errors."
    },
    {
      question: "What is the difference between try, catch, finally, and throw?",
      answer: "try contains code that may throw error. catch handles error. finally always executes. throw creates custom error.",
      example: "try {\n  throw new Error('Something went wrong');\n} catch (error) {\n  console.log('Caught:', error.message);\n} finally {\n  console.log('Cleanup');\n}",
      output: "Caught: Something went wrong, Cleanup",
      note: "finally executes even if there's return in try/catch."
    },
    {
      question: "What is the 'use strict' directive?",
      answer: "Strict mode catches common coding errors, prevents unsafe actions (assigning to undeclared variables, deleting variables).",
      example: "'use strict';\nx = 5; // ReferenceError (x not declared)\ndelete Object.prototype; // TypeError",
      output: "Errors instead of silent failures",
      note: "Modules and classes are strict mode by default."
    },
    {
      question: "What is the difference between globalThis, window, and global?",
      answer: "globalThis works in any environment. window works only in browsers. global works only in Node.js.",
      example: "console.log(globalThis); // window in browser, global in Node\n// Use globalThis for cross-platform code",
      output: "Global object in current environment",
      note: "Use globalThis for cross-platform compatibility."
    },
    {
      question: "What is the difference between isNaN and Number.isNaN?",
      answer: "isNaN() coerces value to number first. Number.isNaN() doesn't coerce, returns true only for NaN.",
      example: "console.log(isNaN('abc')); // true (coerces to NaN)\nconsole.log(Number.isNaN('abc')); // false\nconsole.log(Number.isNaN(NaN)); // true",
      output: "true, false, true",
      note: "Always prefer Number.isNaN() over global isNaN()."
    },
    {
      question: "What is JSON? How do you parse and stringify?",
      answer: "JSON (JavaScript Object Notation) is lightweight data format. JSON.parse() converts string to object. JSON.stringify() converts object to string.",
      example: "const obj = { name: 'John', age: 25 };\nconst jsonStr = JSON.stringify(obj);\nconsole.log(jsonStr); // '{\"name\":\"John\",\"age\":25}'\nconst parsed = JSON.parse(jsonStr);\nconsole.log(parsed.name); // 'John'",
      output: "'{\"name\":\"John\",\"age\":25}', 'John'",
      note: "JSON methods have limitations (no functions, undefined, symbols)."
    },
    {
      question: "What is the difference between deep copy and shallow copy?",
      answer: "Shallow copy copies only first-level properties (nested objects referenced). Deep copy recursively copies all levels.",
      example: "const original = { a: 1, b: { c: 2 } };\nconst shallow = { ...original };\nshallow.b.c = 99;\nconsole.log(original.b.c); // 99 (changed!)\nconst deep = structuredClone(original);\ndeep.b.c = 100;\nconsole.log(original.b.c); // 99 (unchanged)",
      output: "99, 99",
      note: "structuredClone() is the modern standard for deep copying."
    },
    {
      question: "What is memoization?",
      answer: "Memoization caches function results based on arguments to avoid redundant computation. Improves performance for pure functions.",
      example: "const memoize = fn => {\n  const cache = new Map();\n  return (...args) => {\n    const key = JSON.stringify(args);\n    if(cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n};",
      output: "Cached results on repeated calls",
      note: "Memoization trades memory for speed."
    },
    {
      question: "What is debouncing?",
      answer: "Debouncing limits function execution to once after a pause in events. Uses setTimeout to delay execution.",
      example: "function debounce(func, delay) {\n  let timeout;\n  return (...args) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func(...args), delay);\n  };\n}",
      output: "Function executes only after pause in events",
      note: "Essential for search inputs, resize handlers."
    },
    {
      question: "What is throttling?",
      answer: "Throttling limits function execution to once per interval. Uses flag to ensure execution at most once every limit milliseconds.",
      example: "function throttle(func, limit) {\n  let inThrottle;\n  return (...args) => {\n    if(!inThrottle) {\n      func(...args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}",
      output: "Function executes at most once per interval",
      note: "Useful for scroll events, game loops."
    },
    {
      question: "What are Symbols in JavaScript?",
      answer: "Symbol is primitive type for unique identifiers. Each symbol is unique even with same description. Used for private-like properties.",
      example: "const sym1 = Symbol('id');\nconst sym2 = Symbol('id');\nconsole.log(sym1 === sym2); // false\nconst obj = { [sym1]: 'secret' };\nconsole.log(obj[sym1]); // 'secret'\nconsole.log(Object.keys(obj)); // [] (symbols not enumerated)",
      output: "false, 'secret', []",
      note: "Symbol.for() creates symbols in global registry."
    },
    {
      question: "What is the difference between Map and Object?",
      answer: "Map allows any key type (objects, functions), preserves insertion order, has size property, is iterable.",
      example: "const map = new Map();\nmap.set({}, 'value');\nmap.set(123, 'number');\nconsole.log(map.size); // 2\nfor(const [key, value] of map) {\n  console.log(key, value);\n}",
      output: "2, { } 'value', 123 'number'",
      note: "Use Map when keys are dynamic, Object for JSON serialization."
    },
    {
      question: "What are Sets? How are they different from Arrays?",
      answer: "Set stores unique values of any type, automatically removes duplicates. Has O(1) lookup, preserves insertion order.",
      example: "const set = new Set([1, 2, 2, 3]);\nconsole.log(set); // Set {1,2,3}\nset.add(4);\nconsole.log(set.has(3)); // true\nconst unique = [...new Set([1,2,2,3])]; // [1,2,3]",
      output: "Set {1,2,3}, true, [1,2,3]",
      note: "Set.has() is faster than Array.includes() for large datasets."
    },
    {
      question: "What are WeakMap and WeakSet?",
      answer: "WeakMap/WeakSet hold weak references to objects, allowing garbage collection. Keys must be objects, not iterable.",
      example: "let obj = {};\nconst wm = new WeakMap();\nwm.set(obj, 'value');\nobj = null; // entry can be garbage collected",
      output: "Entry removed when object no longer referenced",
      note: "Perfect for storing private data without preventing garbage collection."
    },
    {
      question: "What is prototypal inheritance?",
      answer: "Objects inherit properties from other objects via prototype chain. Each object has internal [[Prototype]] link.",
      example: "const parent = { greet: () => 'Hello' };\nconst child = Object.create(parent);\nconsole.log(child.greet()); // 'Hello'\nconsole.log(child.toString()); // inherited from Object",
      output: "'Hello', [object Object]",
      note: "hasOwnProperty() checks own properties, not inherited."
    },
    {
      question: "What are ES6 classes?",
      answer: "ES6 classes are syntactic sugar over prototype-based inheritance. Provide cleaner OOP syntax with constructor, methods, extends, super.",
      example: "class Animal {\n  constructor(name) { this.name = name; }\n  speak() { return `${this.name} makes a sound`; }\n}\nclass Dog extends Animal {\n  speak() { return `${super.speak()} and barks`; }\n}\nconst dog = new Dog('Buddy');\nconsole.log(dog.speak()); // Buddy makes a sound and barks",
      output: "Buddy makes a sound and barks",
      note: "Classes are not hoisted like function declarations."
    },
    {
      question: "What is the `super` keyword?",
      answer: "super calls parent class constructor or methods. Must be called in child constructor before using 'this'.",
      example: "class Parent {\n  constructor(name) { this.name = name; }\n  greet() { return `Hello ${this.name}`; }\n}\nclass Child extends Parent {\n  constructor(name) {\n    super(name); // calls parent constructor\n  }\n  greet() { return `${super.greet()}!`; }\n}",
      output: "Hello John!",
      note: "super must be called before accessing 'this' in child constructor."
    },
    {
      question: "What are getters and setters?",
      answer: "Getters and setters control access to object properties. Define computed properties or add validation.",
      example: "class Person {\n  constructor(first, last) {\n    this.first = first;\n    this.last = last;\n  }\n  get fullName() { return `${this.first} ${this.last}`; }\n  set fullName(value) {\n    [this.first, this.last] = value.split(' ');\n  }\n}\nconst p = new Person('John', 'Doe');\nconsole.log(p.fullName); // John Doe\np.fullName = 'Jane Smith';\nconsole.log(p.first); // Jane",
      output: "John Doe, Jane",
      note: "Getters/setters don't require parentheses when accessed."
    },
    {
      question: "What are static methods and properties?",
      answer: "Static methods/properties belong to class itself, not instances. Called on class directly.",
      example: "class MathUtils {\n  static PI = 3.14159;\n  static add(a, b) { return a + b; }\n}\nconsole.log(MathUtils.PI); // 3.14159\nconsole.log(MathUtils.add(2, 3)); // 5\nconst utils = new MathUtils();\n// utils.add(2,3); // TypeError!",
      output: "3.14159, 5",
      note: "Static methods can't access instance properties (no 'this')."
    },
    {
      question: "What are generators?",
      answer: "Generators are functions that can pause and resume using yield. Return iterator with next() method.",
      example: "function* generator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst gen = generator();\nconsole.log(gen.next()); // { value: 1, done: false }\nconsole.log(gen.next()); // { value: 2, done: false }\nconsole.log(gen.next()); // { value: 3, done: false }\nconsole.log(gen.next()); // { value: undefined, done: true }",
      output: "1,2,3,undefined",
      note: "Great for lazy evaluation and infinite sequences."
    },
    {
      question: "What are iterators and iterables?",
      answer: "Iterable objects implement [Symbol.iterator]() method returning iterator. Iterator has next() method.",
      example: "const iterable = {\n  *[Symbol.iterator]() {\n    yield 1;\n    yield 2;\n    yield 3;\n  }\n};\nfor(const val of iterable) {\n  console.log(val); // 1,2,3\n}",
      output: "1,2,3",
      note: "Arrays, strings, maps, sets are built-in iterables."
    },
// ==================== FRESHER INTERVIEW QUESTIONS (181-230) ====================
      {
        question: "What is the difference between synchronous and asynchronous code?",
        answer: "Synchronous code executes line by line, blocking further execution until the current operation completes. The next line waits for the previous to finish. Asynchronous code starts an operation and moves to the next line without waiting, preventing UI freezing. Asynchronous operations use callbacks, Promises, or async/await. Async code is non-blocking while sync code is blocking.",
        example: "// Synchronous - blocks execution\nconsole.log('Start');\nfor(let i = 0; i < 1000000000; i++) {} // long loop - blocks!\nconsole.log('End'); // waits for loop\n\n// Asynchronous - non-blocking\nconsole.log('Start');\nsetTimeout(() => console.log('Async'), 1000); // doesn't block\nconsole.log('End'); // runs immediately\n// Output: Start, End, (after 1 sec) Async",
        output: "Start\nEnd\nAsync",
        note: "Use async/await or Promises for async code. Never do heavy computations synchronously as they freeze the UI."
      },
      {
        question: "What is a Promise in JavaScript?",
        answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled (resolved), and rejected. Promises solve callback hell by allowing chaining with .then() and .catch(). You can also use async/await syntax which makes promise code look synchronous.",
        example: "// Creating a Promise\nlet promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    let success = true;\n    if(success) {\n      resolve('Data loaded!');\n    } else {\n      reject('Error occurred');\n    }\n  }, 1000);\n});\n\n// Using the Promise\nconsole.log('Waiting...');\npromise\n  .then(result => console.log(result))\n  .catch(error => console.log(error))\n  .finally(() => console.log('Done'));",
        output: "Waiting...\nData loaded!\nDone",
        note: "Promises avoid callback hell. Always handle errors with .catch(). Use async/await for cleaner syntax."
      },
      {
        question: "What are the three states of a Promise?",
        answer: "A Promise has three states: PENDING - initial state, operation hasn't completed yet. FULFILLED (or resolved) - operation completed successfully, .then() callbacks will run. REJECTED - operation failed, .catch() callbacks will run. Once a Promise is settled (fulfilled or rejected), it cannot change state again.",
        example: "let pending = new Promise(() => {});\nconsole.log(pending); // Promise {<pending>}\n\nlet fulfilled = Promise.resolve('Success');\nfulfilled.then(v => console.log(v)); // Success\n\nlet rejected = Promise.reject('Error');\nrejected.catch(e => console.log(e)); // Error\n\n// State changes only once\nlet promise = new Promise((resolve, reject) => {\n  resolve('First');\n  reject('Second'); // ignored - already resolved\n});\npromise.then(v => console.log(v)); // First",
        output: "Promise {<pending>}\nSuccess\nError\nFirst",
        note: "Once settled (fulfilled/rejected), promise cannot change state. Always handle rejections with .catch()."
      },
      {
        question: "What is Promise.all() and when to use it?",
        answer: "Promise.all() takes an array of promises and returns a single promise that resolves when ALL input promises have resolved. It returns an array of results in the same order. If ANY promise rejects, Promise.all() immediately rejects with that error. Perfect for parallel independent operations like fetching multiple API endpoints concurrently.",
        example: "let p1 = Promise.resolve(1);\nlet p2 = Promise.resolve(2);\nlet p3 = Promise.resolve(3);\n\nPromise.all([p1, p2, p3])\n  .then(results => console.log(results)) // [1,2,3]\n  .catch(error => console.log(error));\n\n// If one rejects, all fail\nlet p4 = Promise.reject('Error!');\nPromise.all([p1, p4, p3])\n  .then(results => console.log(results))\n  .catch(error => console.log(error)); // 'Error!'",
        output: "[1,2,3]\nError!",
        note: "Use Promise.all() for parallel independent operations. Use Promise.allSettled() if you need all results regardless of failures."
      },
      {
        question: "What is Promise.race() and when to use it?",
        answer: "Promise.race() returns a promise that resolves or rejects as soon as the FIRST input promise settles. The fastest promise wins. This is useful for implementing timeouts - race your actual operation against a timeout promise. If the timeout finishes first, you know the operation took too long.",
        example: "let fast = new Promise(resolve => setTimeout(() => resolve('Fast'), 500));\nlet slow = new Promise(resolve => setTimeout(() => resolve('Slow'), 2000));\n\nPromise.race([fast, slow])\n  .then(result => console.log(result)); // 'Fast'\n\n// Timeout implementation\nlet data = fetch('/api/data');\nlet timeout = new Promise((_, reject) => \n  setTimeout(() => reject('Timeout!'), 5000)\n);\n\nPromise.race([data, timeout])\n  .then(result => console.log(result))\n  .catch(error => console.log(error));",
        output: "Fast",
        note: "Promise.race() resolves/rejects with the first settled promise. Great for timeout implementation."
      },
      {
        question: "What is async/await in JavaScript?",
        answer: "async/await is modern syntax for working with Promises, making asynchronous code look like synchronous code. The 'async' keyword before a function means the function returns a promise. The 'await' keyword pauses the function execution until the promise resolves. You can only use 'await' inside 'async' functions. Error handling is done with try/catch blocks.",
        example: "// Using async/await\nasync function fetchUser() {\n  try {\n    const response = await fetch('/api/user');\n    const data = await response.json();\n    console.log(data);\n  } catch(err) {\n    console.log('Error:', err);\n  }\n}\n\n// Multiple awaits run sequentially\nasync function loadData() {\n  const user = await getUser();     // waits for this\n  const posts = await getPosts();   // then runs this\n  return { user, posts };\n}\n\n// Parallel with Promise.all\nasync function loadParallel() {\n  const [user, posts] = await Promise.all([getUser(), getPosts()]);\n  return { user, posts };\n}",
        output: "Data loads, errors caught with try/catch",
        note: "async/await makes async code readable. Always use try/catch for error handling."
      },
      {
        question: "What is the difference between try/catch and .catch()?",
        answer: "try/catch is used with async/await to handle errors in synchronous-looking async code. .catch() is used with Promise chains. try/catch can also catch synchronous errors inside the try block. Both handle promise rejections but syntax differs. try/catch is more readable for complex async flows, while .catch() is used with promise chaining.",
        example: "// Promise style with .catch()\nfetch('/api/data')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.log('Promise error:', err));\n\n// Async/await style with try/catch\nasync function getData() {\n  try {\n    const res = await fetch('/api/data');\n    const data = await res.json();\n    console.log(data);\n  } catch(err) {\n    console.log('Async error:', err);\n  }\n}\n\n// try/catch also catches synchronous errors\ntry {\n  JSON.parse('invalid json');\n} catch(err) {\n  console.log('Sync error caught');\n}",
        output: "Both handle promise rejections. try/catch also catches sync errors.",
        note: "Use try/catch with async/await, .catch() with Promise chains. Both handle async errors."
      },
      {
        question: "What are the different HTTP methods?",
        answer: "HTTP methods define the action to perform on a resource. GET: retrieve data (read-only, can be cached). POST: send data to create new resource (not idempotent). PUT: update entire resource (idempotent). PATCH: partial update. DELETE: remove resource. Idempotent means multiple identical requests have same effect as one request.",
        example: "// GET - retrieve data\nfetch('/api/users');\n\n// POST - create new resource\nfetch('/api/users', {\n  method: 'POST',\n  body: JSON.stringify({ name: 'John' }),\n  headers: { 'Content-Type': 'application/json' }\n});\n\n// PUT - full update\nfetch('/api/users/1', {\n  method: 'PUT',\n  body: JSON.stringify({ name: 'John', age: 25 })\n});\n\n// PATCH - partial update\nfetch('/api/users/1', {\n  method: 'PATCH',\n  body: JSON.stringify({ age: 26 })\n});\n\n// DELETE - remove\nfetch('/api/users/1', { method: 'DELETE' });",
        output: "Requests sent to server with specified methods",
        note: "GET for retrieving, POST for creating, PUT/PATCH for updating, DELETE for removing."
      },
      {
        question: "What are HTTP status codes?",
        answer: "HTTP status codes indicate the result of a request. 200-299: SUCCESS (200 OK, 201 Created). 300-399: REDIRECTION (301 Moved). 400-499: CLIENT ERROR (400 Bad Request, 401 Unauthorized, 404 Not Found). 500-599: SERVER ERROR (500 Internal Server Error). Always check response.ok (true for 200-299).",
        example: "fetch('/api/users')\n  .then(response => {\n    if(!response.ok) {\n      if(response.status === 404) {\n        console.log('Resource not found');\n      } else if(response.status === 401) {\n        console.log('Unauthorized - please login');\n      } else if(response.status === 500) {\n        console.log('Server error - try again later');\n      }\n      throw new Error(`HTTP ${response.status}`);\n    }\n    return response.json();\n  })\n  .catch(err => console.log(err));",
        output: "Handle different status codes appropriately",
        note: "Always check response.ok. Handle 401 by redirecting to login, 404 by showing not found message."
      },
      {
        question: "What is the difference between GET and POST?",
        answer: "GET requests retrieve data and can be cached, bookmarked, and remain in browser history. GET has URL length limitations and should NEVER be used for sensitive data because data is visible in URL. POST requests send data to server, are not cached, not bookmarked, have no length restrictions, and are more secure for sensitive data because data is in request body.",
        example: "// GET - data in URL (visible, length limited)\nfetch('/api/users?name=John&age=25', { method: 'GET' });\n\n// POST - data in body (hidden, no length limit)\nfetch('/api/users', {\n  method: 'POST',\n  body: JSON.stringify({ name: 'John', age: 25 }),\n  headers: { 'Content-Type': 'application/json' }\n});",
        output: "GET visible in URL, POST data in body",
        note: "Use GET for retrieving, POST for creating. POST is more secure for sensitive data like passwords."
      },
      {
        question: "What is localStorage and sessionStorage?",
        answer: "localStorage and sessionStorage are web storage APIs for storing key-value pairs in the browser. localStorage persists until manually deleted (no expiration). Data survives browser restart. sessionStorage clears when you close the tab or browser. Both store up to 5-10MB. Only strings can be stored (use JSON.stringify for objects).",
        example: "// Store data\nlocalStorage.setItem('theme', 'dark');\nsessionStorage.setItem('token', 'abc123');\n\n// Store object (must stringify)\nconst user = { name: 'John', age: 25 };\nlocalStorage.setItem('user', JSON.stringify(user));\n\n// Retrieve data\nconst theme = localStorage.getItem('theme');\nconsole.log(theme); // 'dark'\n\n// Retrieve object (must parse)\nconst storedUser = JSON.parse(localStorage.getItem('user'));\nconsole.log(storedUser.name); // 'John'\n\n// Remove item\nlocalStorage.removeItem('theme');\n\n// Clear all\nlocalStorage.clear();",
        output: "dark\nJohn",
        note: "localStorage persists forever, sessionStorage clears on tab close. Both store only strings."
      },
      {
        question: "What is the difference between localStorage and sessionStorage?",
        answer: "localStorage data persists indefinitely until manually cleared. Data survives browser restart, computer restart, and tab closure. sessionStorage data clears when the tab or browser window is closed. sessionStorage is useful for temporary data that shouldn't persist between sessions. Both have the same API (setItem, getItem, removeItem, clear) and storage limit (5-10MB).",
        example: "// localStorage - persists forever\nlocalStorage.setItem('userPref', 'dark');\n// Data still there after browser restart\n\n// sessionStorage - clears on tab close\nsessionStorage.setItem('tempData', 'not saved');\n// Data lost when tab closes\n\n// Check if storage is available\nif(typeof(Storage) !== 'undefined') {\n  console.log('Web storage supported');\n}\n\n// Storage event (fires in other tabs)\nwindow.addEventListener('storage', (e) => {\n  console.log(`Key ${e.key} changed from ${e.oldValue} to ${e.newValue}`);\n});",
        output: "Web storage supported",
        note: "Use localStorage for user preferences, sessionStorage for temporary data like form drafts."
      },
      {
        question: "What are cookies in JavaScript?",
        answer: "Cookies are small pieces of data stored in the browser, sent to the server with every HTTP request. They have expiration dates and size limit (4KB). Unlike localStorage, cookies are automatically sent to the server. Used for session management, user tracking, and authentication. Can be set with document.cookie and have attributes like HttpOnly (not accessible via JS) and Secure (HTTPS only).",
        example: "// Set a cookie\ndocument.cookie = \"username=John; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/\";\n\n// Set cookie with options\ndocument.cookie = \"theme=dark; max-age=86400; path=/; Secure; SameSite=Strict\";\n\n// Read all cookies\nconsole.log(document.cookie); // \"username=John; theme=dark\"\n\n// Function to get specific cookie\nfunction getCookie(name) {\n  let value = `; ${document.cookie}`;\n  let parts = value.split(`; ${name}=`);\n  if(parts.length === 2) return parts.pop().split(';').shift();\n}\nconsole.log(getCookie('username')); // 'John'\n\n// Delete cookie (set expiry in past)\ndocument.cookie = \"username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/\";",
        output: "username=John; theme=dark\nJohn",
        note: "Cookies are sent to server automatically. Use localStorage for client-only data, cookies for authentication."
      },
      {
        question: "What is the difference between localStorage, sessionStorage, and cookies?",
        answer: "localStorage: 5-10MB, persists forever, not sent to server, accessible via JS. sessionStorage: 5-10MB, clears on tab close, not sent to server. Cookies: 4KB, can have expiration, sent to server with every request. Cookies are the only option for authentication tokens that need to be sent automatically to the server.",
        example: "// localStorage - large, persists, client-side only\nlocalStorage.setItem('preferences', JSON.stringify({ theme: 'dark' }));\n\n// sessionStorage - same tab only\nsessionStorage.setItem('draft', 'Unsaved form data');\n\n// Cookies - small, sent to server\ndocument.cookie = \"sessionId=abc123; Secure; HttpOnly; SameSite=Strict\";\n\n// Comparison\nconsole.log('localStorage size: ~10MB');\nconsole.log('sessionStorage size: ~10MB');\nconsole.log('Cookies size: 4KB');",
        output: "localStorage size: ~10MB\nsessionStorage size: ~10MB\nCookies size: 4KB",
        note: "Use localStorage for large client data, sessionStorage for temporary data, cookies for authentication."
      },
      {
        question: "What is the Fetch API?",
        answer: "Fetch API provides a modern interface for making HTTP requests. It returns Promises, making it easier to work with asynchronous requests. Fetch replaces the older XMLHttpRequest. It supports all HTTP methods and works with requests and responses as objects. Fetch does not reject on HTTP error status (404, 500) - you need to check response.ok.",
        example: "// Basic GET request\nfetch('https://api.example.com/users')\n  .then(response => {\n    if(!response.ok) throw new Error('Network response was not ok');\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));\n\n// POST request with headers\nfetch('https://api.example.com/users', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n    'Authorization': 'Bearer token123'\n  },\n  body: JSON.stringify({ name: 'John', email: 'john@example.com' })\n})\n.then(res => res.json())\n.then(data => console.log(data));\n\n// Using async/await\nasync function getUsers() {\n  try {\n    const response = await fetch('/api/users');\n    const data = await response.json();\n    console.log(data);\n  } catch(error) {\n    console.error('Error:', error);\n  }\n}",
        output: "User data fetched from API",
        note: "Fetch returns Promises, not actual data. Always check response.ok for HTTP errors (404, 500)."
      },
      {
        question: "What is the difference between Fetch API and Axios?",
        answer: "Fetch is built into browsers, Axios is a third-party library. Axios automatically transforms JSON data, while Fetch requires manual .json() call. Axios rejects promise on HTTP errors (404, 500), Fetch only rejects on network errors. Axios has better error handling, request/response interceptors, and supports request cancellation. Fetch is lighter but needs more code for error handling.",
        example: "// Fetch (built-in)\nfetch('/api/users')\n  .then(res => {\n    if(!res.ok) throw new Error(`HTTP ${res.status}`);\n    return res.json();\n  })\n  .catch(err => console.log(err));\n\n// Axios (third-party)\naxios.get('/api/users')\n  .then(res => console.log(res.data))\n  .catch(err => console.log(err)); // Auto rejects on 404\n\n// Axios features\naxios.post('/api/users', { name: 'John' }, {\n  headers: { 'Authorization': 'Bearer token' }\n});\n\n// Fetch equivalent\nfetch('/api/users', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer token' },\n  body: JSON.stringify({ name: 'John' })\n});",
        output: "Both make HTTP requests, Axios has more features",
        note: "Use Fetch for simple requests, Axios for complex apps requiring interceptors and better error handling."
      },
      {
        question: "What is the difference between null and undefined?",
        answer: "undefined means a variable has been declared but not assigned a value. It is the default value for uninitialized variables. null is an intentional assignment representing 'empty' or 'no value'. null is explicitly set by the developer. typeof null returns 'object' (historical bug), typeof undefined returns 'undefined'.",
        example: "let a; // undefined (not assigned)\nlet b = null; // null (intentionally empty)\n\nconsole.log(a); // undefined\nconsole.log(b); // null\n\nconsole.log(typeof a); // 'undefined'\nconsole.log(typeof b); // 'object' (bug!)\n\nconsole.log(a == b);  // true (loose equality)\nconsole.log(a === b); // false (strict equality)\n\nfunction test(param) {\n  console.log(param); // undefined if not passed\n}\ntest();\n\nlet obj = { name: 'John' };\nconsole.log(obj.age); // undefined (property doesn't exist)",
        output: "undefined\nnull\nundefined\nobject\ntrue\nfalse\nundefined\nundefined",
        note: "Use undefined for missing values, null for intentionally empty values."
      },
      {
        question: "What is NaN in JavaScript?",
        answer: "NaN stands for 'Not a Number'. It is returned when mathematical operations fail (e.g., parsing invalid number, Math.sqrt(-1)). NaN is the only value in JavaScript that is not equal to itself. NaN === NaN returns false. Use isNaN() or Number.isNaN() to check for NaN. Number.isNaN() is stricter and doesn't coerce values.",
        example: "console.log(parseInt('abc')); // NaN\nconsole.log(Math.sqrt(-1)); // NaN\nconsole.log(0 / 0); // NaN\nconsole.log('abc' * 2); // NaN\n\nconsole.log(NaN === NaN); // false (unique!)\nconsole.log(NaN == NaN); // false\n\nconsole.log(isNaN(NaN)); // true\nconsole.log(isNaN('abc')); // true (coerces to NaN)\nconsole.log(Number.isNaN(NaN)); // true\nconsole.log(Number.isNaN('abc')); // false (no coercion)\n\n// Safe check\nfunction isReallyNaN(value) {\n  return value !== value;\n}\nconsole.log(isReallyNaN(NaN)); // true",
        output: "NaN\nNaN\nNaN\nNaN\nfalse\nfalse\ntrue\ntrue\ntrue\nfalse\ntrue",
        note: "NaN is the only value not equal to itself. Use Number.isNaN() for reliable checks."
      },
      {
        question: "What is the difference between == and === operators?",
        answer: "== (loose equality) compares values after type conversion. It converts operands to the same type before comparing. === (strict equality) compares both value and type without conversion. Always use === to avoid unexpected type coercion bugs. == can cause confusing results like '0' == false being true.",
        example: "// Loose equality (==) - converts types\nconsole.log(5 == '5');     // true (string to number)\nconsole.log(false == 0);   // true (boolean to number)\nconsole.log(null == undefined); // true\nconsole.log('' == 0);      // true\n\n// Strict equality (===) - checks type and value\nconsole.log(5 === '5');    // false (number vs string)\nconsole.log(false === 0);  // false (boolean vs number)\nconsole.log(null === undefined); // false\nconsole.log('' === 0);     // false\n\n// Confusing results with ==\nconsole.log('0' == false); // true\nconsole.log([1] == 1);     // true\nconsole.log([1] == '1');   // true\n\n// Always use === for predictability\nconsole.log('0' === false); // false\nconsole.log([1] === 1);    // false",
        output: "true\ntrue\ntrue\ntrue\nfalse\nfalse\nfalse\nfalse\ntrue\ntrue\ntrue\nfalse\nfalse",
        note: "Always use === and !==. Never use == or != unless you really understand type coercion."
      },
      {
        question: "What is type coercion in JavaScript?",
        answer: "Type coercion is the automatic conversion of values from one data type to another. It happens when operators are used with mismatched types. For example, + with a string causes number to string conversion. - with a string causes string to number conversion. Understanding coercion helps prevent bugs. Always use explicit conversion (Number(), String()) to avoid surprises.",
        example: "// String coercion (+) - converts to string\nconsole.log('5' + 3);      // '53'\nconsole.log('Hello' + 5);   // 'Hello5'\n\n// Number coercion (-, *, /) - converts to number\nconsole.log('10' - 5);      // 5\nconsole.log('5' * '2');      // 10\nconsole.log('10' / '2');     // 5\n\n// Boolean coercion\nconsole.log(Boolean(0));     // false\nconsole.log(Boolean('hello')); // true\n\n// Comparison coercion\nconsole.log(5 == '5');       // true (string to number)\nconsole.log(false == 0);     // true (boolean to number)\n\n// Explicit conversion (avoid coercion bugs)\nlet str = '123';\nlet num = Number(str);       // explicit\nlet str2 = String(456);      // explicit\nconsole.log(num, str2);",
        output: "53\nHello5\n5\n10\n5\nfalse\ntrue\ntrue\ntrue\n123 456",
        note: "Use explicit conversion (Number(), String()) to avoid unexpected coercion bugs."
      },
      {
        question: "What are template literals?",
        answer: "Template literals are string literals using backticks (`) instead of quotes. They support multi-line strings and variable interpolation with ${expression} syntax. They can contain any JavaScript expression, not just variables. Template literals make string concatenation cleaner and more readable.",
        example: "let name = 'John';\nlet age = 25;\n\n// Multi-line string\nlet multiLine = `This is\n  a multi-line\n  string`;\n\n// Variable interpolation\nlet greeting = `Hello ${name}, you are ${age} years old.`;\nconsole.log(greeting);\n\n// Expression interpolation\nlet math = `2 + 3 = ${2 + 3}`;\nconsole.log(math);\n\n// Function call in template\nlet upper = `Uppercase: ${name.toUpperCase()}`;\nconsole.log(upper);\n\n// Template literals inside template literals\nlet nested = `Hello ${`${name}`}`;\nconsole.log(nested);\n\n// Tagged templates\nfunction tag(strings, ...values) {\n  console.log(strings);\n  console.log(values);\n  return 'Tagged result';\n}\nlet result = tag`Hello ${name}, age ${age}`;\nconsole.log(result);",
        output: "Hello John, you are 25 years old.\n2 + 3 = 5\nUppercase: JOHN\nHello John\n['Hello ', ', age ', '']\n['John', 25]\nTagged result",
        note: "Always use template literals for string concatenation and multi-line strings."
      },
      {
        question: "What are the different ways to create objects in JavaScript?",
        answer: "There are multiple ways to create objects: object literal ({}) - most common; new Object() constructor; Object.create() for prototype inheritance; constructor functions; ES6 classes; and factory functions. Object literal is preferred for simple objects, classes for reusable structures.",
        example: "// 1. Object literal (most common)\nlet user1 = { name: 'John', age: 25 };\n\n// 2. new Object()\nlet user2 = new Object();\nuser2.name = 'Jane';\nuser2.age = 30;\n\n// 3. Object.create()\nlet proto = { greet() { return 'Hello'; } };\nlet user3 = Object.create(proto);\nuser3.name = 'Bob';\n\n// 4. Constructor function\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nlet user4 = new Person('Alice', 28);\n\n// 5. ES6 Class\nclass User {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\nlet user5 = new User('Charlie', 35);\n\n// 6. Factory function\nfunction createUser(name, age) {\n  return { name, age };\n}\nlet user6 = createUser('David', 40);\n\nconsole.log(user1, user2, user3, user4, user5, user6);",
        output: "All create valid objects with properties",
        note: "Use object literal for simple objects, classes for reusable structures with methods."
      },
      {
        question: "What is the difference between Object.freeze() and Object.seal()?",
        answer: "Object.freeze() makes an object immutable - cannot add, remove, or modify existing properties. Object.seal() prevents adding or removing properties but allows modifying existing properties. Both prevent property addition and deletion. freeze is stronger - it also prevents property modification.",
        example: "let obj1 = { name: 'John', age: 25 };\nlet obj2 = { name: 'Jane', age: 30 };\n\n// Object.freeze() - completely immutable\nObject.freeze(obj1);\nobj1.name = 'Jim';     // ignored (strict mode throws error)\nobj1.city = 'NYC';     // ignored\ndelete obj1.age;       // ignored\nconsole.log(obj1);     // { name: 'John', age: 25 }\n\n// Object.seal() - can modify existing properties\nObject.seal(obj2);\nobj2.name = 'Janet';   // allowed\nobj2.city = 'LA';      // ignored\ndelete obj2.age;       // ignored\nconsole.log(obj2);     // { name: 'Janet', age: 30 }\n\n// Check status\nconsole.log(Object.isFrozen(obj1)); // true\nconsole.log(Object.isSealed(obj2)); // true\nconsole.log(Object.isSealed(obj1)); // true (frozen also sealed)",
        output: "{ name: 'John', age: 25 }\n{ name: 'Janet', age: 30 }\ntrue\ntrue\ntrue",
        note: "Use freeze for constants, seal for objects with fixed structure but mutable values."
      },
      {
        question: "What is the difference between Object.keys(), Object.values(), and Object.entries()?",
        answer: "Object.keys() returns array of property names (keys). Object.values() returns array of property values. Object.entries() returns array of [key, value] pairs. All return own enumerable properties only (not inherited). These methods are useful for iterating over objects.",
        example: "let user = { name: 'John', age: 25, city: 'NYC' };\n\n// Object.keys() - get property names\nconsole.log(Object.keys(user));   // ['name', 'age', 'city']\n\n// Object.values() - get property values\nconsole.log(Object.values(user)); // ['John', 25, 'NYC']\n\n// Object.entries() - get key-value pairs\nconsole.log(Object.entries(user)); // [['name','John'], ['age',25], ['city','NYC']]\n\n// Iterating with entries\nfor(let [key, value] of Object.entries(user)) {\n  console.log(`${key}: ${value}`);\n}\n\n// Converting back from entries\nlet entries = Object.entries(user);\nlet newObj = Object.fromEntries(entries);\nconsole.log(newObj); // { name: 'John', age: 25, city: 'NYC' }",
        output: "['name','age','city']\n['John',25,'NYC']\n[['name','John'],['age',25],['city','NYC']]\nname: John\nage: 25\ncity: NYC\n{ name: 'John', age: 25, city: 'NYC' }",
        note: "Use keys() for iteration, values() for data extraction, entries() for both."
      }

  ],

  // ====================== 80 ADVANCED INTERVIEW QUESTIONS ======================
  experienced: [
    {
      question: "What is the difference between synchronous and asynchronous code?",
      answer: "Synchronous executes line by line, blocking further execution. Asynchronous executes later, non-blocking.",
      example: "console.log('1');\nsetTimeout(() => console.log('2'), 0);\nconsole.log('3');\n// Output: 1,3,2",
      output: "1, 3, 2",
      note: "Async prevents UI freezing and enables concurrent operations."
    },
    {
      question: "What is the difference between Promise.all, Promise.race, and Promise.allSettled?",
      answer: "Promise.all waits for all (rejects if any fails). Promise.race resolves/rejects with first settled. Promise.allSettled waits for all, never rejects.",
      example: "const p1 = Promise.resolve(1);\nconst p2 = Promise.reject('error');\nPromise.all([p1, p1]).then(console.log); // [1,1]\nPromise.race([p1, p2]).then(console.log); // 1\nPromise.allSettled([p1, p2]).then(console.log);\n// [{status:'fulfilled',value:1}, {status:'rejected',reason:'error'}]",
      output: "[1,1], 1, array of results",
      note: "Use Promise.allSettled when you need all results regardless of success."
    },
    {
      question: "What is the event loop priority order?",
      answer: "Priority: Synchronous > Microtasks (Promises, queueMicrotask) > Macrotasks (setTimeout, setInterval, I/O).",
      example: "setTimeout(() => console.log('macro'), 0);\nPromise.resolve().then(() => console.log('micro'));\nconsole.log('sync');\n// Output: sync, micro, macro",
      output: "sync, micro, macro",
      note: "Microtasks have higher priority than macrotasks."
    },
    {
      question: "What is the difference between queueMicrotask and Promise.resolve().then()?",
      answer: "queueMicrotask is direct API for adding microtasks. Promise.resolve().then() does same but creates unused promise.",
      example: "queueMicrotask(() => console.log('micro'));\nPromise.resolve().then(() => console.log('also micro'));",
      output: "micro, also micro",
      note: "queueMicrotask is cleaner when you don't need promise value."
    },
    {
      question: "What is the difference between process.nextTick and setImmediate?",
      answer: "process.nextTick executes after current operation (microtask-like). setImmediate executes in check phase (macrotask).",
      example: "process.nextTick(() => console.log('nextTick'));\nsetImmediate(() => console.log('setImmediate'));\nconsole.log('sync');\n// Output: sync, nextTick, setImmediate",
      output: "sync, nextTick, setImmediate",
      note: "nextTick has higher priority and can starve I/O."
    },
    {
      question: "What are Web Workers?",
      answer: "Web Workers run JavaScript in background threads, preventing UI blocking. Used for heavy computations.",
      example: "const worker = new Worker('worker.js');\nworker.postMessage(data);\nworker.onmessage = (e) => console.log(e.data);",
      output: "Heavy computation without freezing UI",
      note: "Workers cannot access DOM, window, or document."
    },
    {
      question: "What are Service Workers?",
      answer: "Service Worker is network proxy that intercepts requests and manages cache. Enables offline functionality.",
      example: "self.addEventListener('fetch', (event) => {\n  event.respondWith(caches.match(event.request));\n});",
      output: "Offline support, cached responses",
      note: "Service Workers are key for Progressive Web Apps (PWAs)."
    },
    {
      question: "What are Proxies in JavaScript?",
      answer: "Proxy wraps object and intercepts operations (get, set, deleteProperty, etc.). Enables validation and reactivity.",
      example: "const handler = {\n  get: (obj, prop) => prop in obj ? obj[prop] : 'default'\n};\nconst proxy = new Proxy({}, handler);\nproxy.a = 1;\nconsole.log(proxy.a); // 1\nconsole.log(proxy.b); // 'default'",
      output: "1, 'default'",
      note: "Proxies have performance overhead; use sparingly."
    },
    {
      question: "What are Reflect API?",
      answer: "Reflect provides methods for interceptable JavaScript operations (same as Proxy traps). Used inside Proxy handlers.",
      example: "const handler = {\n  set: (obj, prop, value) => {\n    return Reflect.set(obj, prop, value);\n  }\n};",
      output: "Default behavior preserved",
      note: "Always use Reflect inside Proxy handlers for correct behavior."
    },
    {
      question: "What is the difference between Object.create() and new keyword?",
      answer: "Object.create() creates object with specified prototype, doesn't run constructor. new creates instance, runs constructor.",
      example: "const obj = Object.create(proto);\nconst instance = new Constructor();\nconst nullProto = Object.create(null); // no prototype",
      output: "Objects with different prototypes",
      note: "Object.create(null) creates pure dictionary (no Object.prototype)."
    },
    {
      question: "What is the difference between __proto__, prototype, and Object.getPrototypeOf()?",
      answer: "__proto__ is deprecated getter/setter. prototype is property on functions. Object.getPrototypeOf() is standard method.",
      example: "function F() {}\nconst obj = new F();\nconsole.log(Object.getPrototypeOf(obj) === F.prototype); // true\nconsole.log(F.prototype); // { constructor: F }",
      output: "true, { constructor: F }",
      note: "Avoid __proto__, use Object.getPrototypeOf() instead."
    },
    {
      question: "What is the difference between callable and constructable?",
      answer: "Callable functions can be invoked with (). Constructable functions can be used with new.",
      example: "const arrow = () => {};\narrow(); // works\nnew arrow(); // TypeError\nfunction regular() {}\nregular(); // works\nnew regular(); // works",
      output: "Arrow functions are callable only, regular functions are both",
      note: "Arrow functions cannot be used as constructors."
    },
    {
      question: "What is the new.target meta property?",
      answer: "new.target identifies if function called with new and which constructor was used.",
      example: "function Person() {\n  if(!new.target) throw new Error('Use new');\n}\nPerson(); // Error\nnew Person(); // Works",
      output: "Error when called without new",
      note: "Useful for enforcing 'new' usage and abstract classes."
    },
    {
      question: "What is the difference between Object.assign and spread operator?",
      answer: "Both create shallow copies. Object.assign mutates target object. Spread creates new object.",
      example: "const obj = { a: 1 };\nconst copy1 = Object.assign({}, obj);\nconst copy2 = { ...obj };\nconst target = { b: 2 };\nObject.assign(target, obj); // mutates target",
      output: "Same result, different approach",
      note: "Spread is preferred for simplicity unless mutation needed."
    },
    {
      question: "What is the difference between Object.is and ===?",
      answer: "Object.is handles special cases: -0 vs +0 are false, NaN vs NaN are true.",
      example: "console.log(Object.is(NaN, NaN)); // true\nconsole.log(NaN === NaN); // false\nconsole.log(Object.is(-0, +0)); // false\nconsole.log(-0 === +0); // true",
      output: "true, false, false, true",
      note: "Use === for general equality, Object.is for special numeric cases."
    },
    {
      question: "What is the difference between shallow equality and deep equality?",
      answer: "Shallow equality compares only first-level properties. Deep equality recursively compares all levels.",
      example: "const a = { x: { y: 1 } };\nconst b = { x: { y: 1 } };\nconsole.log(a === b); // false (different references)\n// Deep equality would compare a.x.y === b.x.y",
      output: "false",
      note: "Use libraries like lodash's isEqual for deep equality."
    },
    {
      question: "What is tree shaking?",
      answer: "Tree shaking eliminates dead code (unused exports) during bundling. Relies on ES6 module static structure.",
      example: "import { usedFunc } from './module.js';\n// only usedFunc included, unused exports removed",
      output: "Smaller bundle size",
      note: "CommonJS modules cannot be tree-shaken (dynamic requires)."
    },
    {
      question: "What are dynamic imports?",
      answer: "Dynamic imports load modules asynchronously on demand. Returns Promise. Useful for code splitting.",
      example: "const module = await import(`./${language}.js`);",
      output: "Module loaded only when needed",
      note: "Enables route-based code splitting in SPAs."
    },
    {
      question: "What are tagged template literals?",
      answer: "Tagged template literals parse template with function. Used for escaping, localization, DSL creation.",
      example: "function tag(strings, ...values) {\n  return strings[0] + values[0].toUpperCase() + strings[1];\n}\nconst name = 'John';\nconst result = tag`Hello ${name}!`;\nconsole.log(result); // 'Hello JOHN!'",
      output: "Hello JOHN!",
      note: "Used in styled-components, graphql-tag libraries."
    },
    {
      question: "What is the difference between import and require?",
      answer: "import is ES6 module syntax (static, hoisted, supports tree-shaking). require is CommonJS (dynamic, synchronous).",
      example: "import { func } from './module.js'; // static\nconst module = require('./module.js'); // dynamic",
      output: "Different module systems",
      note: "Modern code uses import/export over require/module.exports."
    },
    {
      question: "What is the event loop? Explain with microtasks and macrotasks.",
      answer: "The event loop handles asynchronous operations. It continuously checks if the call stack is empty, then processes microtasks (Promises, queueMicrotask) first, then takes one macrotask (setTimeout, setInterval, I/O) from the task queue. All microtasks are processed before the next macrotask.",
      example: "console.log('1');\nsetTimeout(() => console.log('4'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('2');\n// Output: 1,2,3,4",
      output: "1, 2, 3, 4",
      note: "Microtasks have higher priority than macrotasks. Recursive microtasks can starve macrotasks."
    },
    {
      question: "What is the difference between microtasks and macrotasks?",
      answer: "Microtasks include Promise callbacks, queueMicrotask, MutationObserver. They run immediately after current execution and before next macrotask. Macrotasks include setTimeout, setInterval, setImmediate, I/O, UI rendering. They run one at a time between microtask checks.",
      example: "Promise.resolve().then(() => console.log('micro'));\nsetTimeout(() => console.log('macro'), 0);\nconsole.log('sync');\n// Output: sync, micro, macro",
      output: "sync, micro, macro",
      note: "All microtasks are executed before any macrotask is taken from the queue."
    },
    {
      question: "What is the difference between `process.nextTick` and `setImmediate` (Node.js)?",
      answer: "process.nextTick() executes after current operation before next event loop phase (microtask-like). setImmediate() executes in the check phase of event loop (macrotask). nextTick has higher priority and can starve I/O if used recursively.",
      example: "process.nextTick(() => console.log('nextTick'));\nsetImmediate(() => console.log('setImmediate'));\nsetTimeout(() => console.log('timeout'), 0);\nconsole.log('sync');\n// Output: sync, nextTick, timeout, setImmediate (order may vary)",
      output: "sync, nextTick, timeout, setImmediate",
      note: "Use setImmediate for I/O operations, process.nextTick for immediate callbacks."
    },
    {
      question: "What is the difference between `queueMicrotask` and `Promise.resolve().then()`?",
      answer: "Both schedule microtasks. queueMicrotask is a direct API without creating an unused Promise. Promise.resolve().then() creates a resolved promise just to schedule the callback. queueMicrotask is more efficient when you don't need the promise value.",
      example: "queueMicrotask(() => console.log('micro'));\nPromise.resolve().then(() => console.log('also micro'));\nconsole.log('sync');\n// Output: sync, micro, also micro",
      output: "sync, micro, also micro",
      note: "queueMicrotask is cleaner when you don't need promise chaining."
    },
    {
      question: "What is the event loop phases? (Node.js specific)",
      answer: "Node.js event loop has phases: timers (setTimeout/setInterval), pending callbacks (I/O), idle/prepare (internal), poll (retrieve new I/O), check (setImmediate), close callbacks. Each phase has a queue of callbacks.",
      example: "setImmediate(() => console.log('check phase'));\nsetTimeout(() => console.log('timers phase'), 0);\n// Order depends on event loop timing",
      output: "May vary, often timers then check",
      note: "Understanding phases helps debug async behavior in Node.js."
    },
    {
      question: "What are Web Workers? How do they work?",
      answer: "Web Workers run JavaScript in background threads, preventing UI blocking. They communicate via postMessage(). Cannot access DOM, window, or document. Workers are created using Worker() constructor.",
      example: "// main.js\nconst worker = new Worker('worker.js');\nworker.postMessage({ data: [1,2,3,4,5] });\nworker.onmessage = (e) => console.log('Result:', e.data);\n\n// worker.js\nself.onmessage = (e) => {\n  const sum = e.data.data.reduce((a,b) => a+b, 0);\n  self.postMessage(sum);\n};",
      output: "Result: 15",
      note: "Workers are expensive to create; reuse when possible."
    },
    {
      question: "What is the difference between Web Workers and Service Workers?",
      answer: "Web Workers run background threads for heavy computations. Service Workers act as network proxies, intercepting fetch requests for offline caching, push notifications, background sync. Service Workers have a different lifecycle (install, activate, fetch).",
      example: "// Service Worker\nself.addEventListener('fetch', (event) => {\n  event.respondWith(caches.match(event.request));\n});",
      output: "Offline support and network interception",
      note: "Service Workers are key for PWAs; Web Workers for CPU-intensive tasks."
    },
    {
      question: "What are Shared Workers?",
      answer: "Shared Workers are Web Workers that can be accessed by multiple tabs/windows of the same origin. They communicate via ports and stay alive as long as any connection exists. Useful for cross-tab communication and shared state.",
      example: "// main.js (tab1)\nconst worker = new SharedWorker('shared.js');\nworker.port.start();\nworker.port.postMessage('Hello from tab1');\n\n// shared.js\nself.onconnect = (e) => {\n  const port = e.ports[0];\n  port.onmessage = (msg) => console.log(msg.data);\n  port.start();\n};",
      output: "Cross-tab communication",
      note: "SharedWorkers are less common but useful for shared state."
    },
    {
      question: "What is the difference between `requestAnimationFrame` and `setTimeout`?",
      answer: "requestAnimationFrame schedules callback before next repaint (60fps), optimized for animations, pauses when tab inactive. setTimeout runs after minimum delay regardless of repaint, may cause jank. Always use requestAnimationFrame for animations.",
      example: "function animate() {\n  // update animation\n  requestAnimationFrame(animate);\n}\nrequestAnimationFrame(animate);",
      output: "Smooth 60fps animation",
      note: "requestAnimationFrame also batches DOM updates for better performance."
    },
    {
      question: "What is `requestIdleCallback`? When to use it?",
      answer: "requestIdleCallback schedules callback during idle periods, when event loop is not busy. Used for non-urgent background tasks like analytics, prefetching, or large data processing that shouldn't impact user experience.",
      example: "requestIdleCallback(() => {\n  // Analytics tracking, prefetching, etc.\n  console.log('Idle time');\n}, { timeout: 2000 });",
      output: "Executes when browser is idle or after timeout",
      note: "Callback may never run if page is busy; provide timeout as fallback."
    },
    {
      question: "What is the difference between `beforeunload` and `unload` events?",
      answer: "beforeunload fires before page unload, allows showing confirmation dialog to prevent navigation. unload fires after page unload, cannot cancel navigation. Use beforeunload for unsaved changes warning, unload for cleanup.",
      example: "window.addEventListener('beforeunload', (e) => {\n  e.preventDefault();\n  e.returnValue = '';\n});\nwindow.addEventListener('unload', () => {\n  localStorage.clear(); // cleanup\n});",
      output: "Confirmation dialog before leaving page",
      note: "Modern browsers restrict custom messages in beforeunload."
    },
    {
      question: "What is the `pagehide` and `pageshow` events?",
      answer: "pageshow fires when page is displayed (including bfcache restoration). pagehide fires when page is hidden (including bfcache). Useful for detecting bfcache (back-forward cache) restorations which don't fire load events.",
      example: "window.addEventListener('pageshow', (e) => {\n  if(e.persisted) console.log('Restored from bfcache');\n});\nwindow.addEventListener('pagehide', () => console.log('Page hidden'));",
      output: "Detects bfcache restoration",
      note: "Essential for handling back/forward navigation in single-page apps."
    },
    {
      question: "What is the `visibilitychange` event?",
      answer: "visibilitychange fires when page visibility changes (tab becomes visible/hidden). Used for pausing video, stopping animations, or reducing resource usage when tab is inactive.",
      example: "document.addEventListener('visibilitychange', () => {\n  if(document.hidden) {\n    console.log('Tab hidden - pause video');\n  } else {\n    console.log('Tab visible - resume');\n  }\n});",
      output: "Pauses/resumes when tab visibility changes",
      note: "Improves performance and user experience."
    },
    {
      question: "What is the `resize` observer?",
      answer: "ResizeObserver watches element size changes (width, height), even when window isn't resized. Useful for responsive layouts, charts, and iframes. More efficient than listening to window resize events.",
      example: "const observer = new ResizeObserver(entries => {\n  for(const entry of entries) {\n    console.log(entry.contentRect.width, entry.contentRect.height);\n  }\n});\nobserver.observe(document.querySelector('.element'));",
      output: "Detects element size changes",
      note: "ResizeObserver is performant and handles any size change reason."
    },
    {
      question: "What is the `Intersection Observer` API?",
      answer: "Intersection Observer detects when an element enters or exits the viewport. Used for lazy loading images, infinite scroll, analytics tracking, and triggering animations when elements come into view.",
      example: "const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if(entry.isIntersecting) {\n      console.log('Element visible');\n      observer.unobserve(entry.target);\n    }\n  });\n});\nobserver.observe(document.querySelector('.lazy-load'));",
      output: "Triggers when element enters viewport",
      note: "More performant than scroll event listeners."
    },
    {
      question: "What is the `Mutation Observer` API?",
      answer: "Mutation Observer watches DOM changes (child addition/removal, attribute changes, text changes). Used for reacting to DOM mutations from other scripts, implementing custom elements, or auto-updating UI.",
      example: "const observer = new MutationObserver((mutations) => {\n  mutations.forEach((mutation) => {\n    console.log(mutation.type, mutation.target);\n  });\n});\nobserver.observe(document.body, { childList: true, subtree: true });",
      output: "Detects DOM changes",
      note: "More efficient than deprecated Mutation Events."
    },
    {
      question: "What is the `Performance` API?",
      answer: "Performance API measures page and resource performance. Provides timing data (navigation timing, resource timing, paint timing). Used for performance monitoring and optimization.",
      example: "console.log(performance.timing);\nconst start = performance.now();\n// code to measure\nconst end = performance.now();\nconsole.log(`Time: ${end - start}ms`);",
      output: "Performance metrics",
      note: "Essential for Core Web Vitals measurement."
    },
    {
      question: "What is the `Navigation Timing` API?",
      answer: "Navigation Timing API provides detailed timing information about page load (DNS, TCP, request, response, DOM loading). Helps analyze performance bottlenecks.",
      example: "const timing = performance.getEntriesByType('navigation')[0];\nconsole.log(`DNS: ${timing.domainLookupEnd - timing.domainLookupStart}ms`);\nconsole.log(`TTFB: ${timing.responseStart - timing.requestStart}ms`);",
      output: "Navigation timing metrics",
      note: "Use for performance monitoring and optimization."
    },
    {
      question: "What is the `Resource Timing` API?",
      answer: "Resource Timing API provides timing for individual resources (images, scripts, stylesheets, fonts). Helps identify slow-loading assets.",
      example: "const resources = performance.getEntriesByType('resource');\nresources.forEach(resource => {\n  if(resource.duration > 500) {\n    console.log(`Slow resource: ${resource.name}`);\n  }\n});",
      output: "Individual resource timing data",
      note: "Use to optimize specific slow assets."
    },
    {
      question: "What are Proxies? How to use them?",
      answer: "Proxy wraps an object and intercepts operations like property access, assignment, deletion, function calls. Used for validation, logging, reactivity, access control, and virtual properties.",
      example: "const handler = {\n  get: (obj, prop) => {\n    if(prop in obj) return obj[prop];\n    return 'Property not found';\n  },\n  set: (obj, prop, value) => {\n    if(prop === 'age' && value < 0) {\n      throw new Error('Age cannot be negative');\n    }\n    obj[prop] = value;\n    return true;\n  }\n};\nconst user = new Proxy({ name: 'John' }, handler);\nconsole.log(user.age); // 'Property not found'\nuser.age = 25; // works\n// user.age = -5; // throws error",
      output: "Intercepted property access with validation",
      note: "Proxies enable powerful meta-programming but have performance overhead."
    },
    {
      question: "What are Reflect API methods?",
      answer: "Reflect provides methods matching Proxy traps (get, set, has, deleteProperty, construct, apply). Used inside Proxy handlers to invoke default behavior, ensuring proper 'this' binding.",
      example: "const handler = {\n  set: (obj, prop, value) => {\n    // Validate before setting\n    if(prop === 'age' && value < 0) return false;\n    return Reflect.set(obj, prop, value); // default behavior\n  }\n};",
      output: "Default behavior preserved",
      note: "Always use Reflect inside Proxy handlers for consistent behavior."
    },
    {
      question: "What is the difference between Proxy and Object.defineProperty?",
      answer: "Proxy can intercept ALL operations (get, set, delete, etc.) on objects, including arrays. Object.defineProperty only defines individual properties and can't intercept array methods or deletions.",
      example: "// Proxy can detect array push\nconst arr = new Proxy([], {\n  set(target, prop, value) {\n    console.log(`Setting ${prop} to ${value}`);\n    return Reflect.set(target, prop, value);\n  }\n});\narr.push(1); // logs \"Setting 0 to 1\" and \"Setting length to 1\"",
      output: "Proxy intercepts all operations",
      note: "Proxy is more powerful but has performance overhead."
    },
    {
      question: "What are the different Proxy traps?",
      answer: "Traps: get, set, has, deleteProperty, ownKeys, getOwnPropertyDescriptor, defineProperty, preventExtensions, isExtensible, getPrototypeOf, setPrototypeOf, apply, construct.",
      example: "const handler = {\n  get: (obj, prop) => obj[prop],\n  set: (obj, prop, val) => { obj[prop] = val; return true; },\n  has: (obj, prop) => prop in obj,\n  deleteProperty: (obj, prop) => delete obj[prop],\n  apply: (target, thisArg, args) => target.apply(thisArg, args)\n};",
      output: "Custom behavior for different operations",
      note: "This enables complete control over object behavior."
    },
    {
      question: "What is the `revocable` proxy?",
      answer: "Proxy.revocable() creates a proxy that can be revoked (disabled) later. Once revoked, any operation on the proxy throws an error. Useful for temporary access or resource cleanup.",
      example: "const target = { data: 'secret' };\nconst { proxy, revoke } = Proxy.revocable(target, {});\nconsole.log(proxy.data); // 'secret'\nrevoke();\nconsole.log(proxy.data); // throws TypeError",
      output: "Proxy becomes unusable after revoke",
      note: "Useful for managing temporary access tokens."
    },
    {
      question: "What are WeakMap and WeakSet use cases?",
      answer: "WeakMap/WeakSet hold weak references, allowing garbage collection. Use cases: storing private data, DOM element metadata, caching without memory leaks, tracking objects without preventing GC.",
      example: "const privateData = new WeakMap();\nclass Person {\n  constructor(name) {\n    privateData.set(this, { name });\n  }\n  getName() { return privateData.get(this).name; }\n}",
      output: "Private data without preventing garbage collection",
      note: "Ideal for storing data tied to DOM elements."
    },
    {
      question: "What is the difference between `Map` and `WeakMap`?",
      answer: "Map keys can be any type, holds strong references (prevents GC), size property, iterable. WeakMap keys must be objects, holds weak references (allows GC), no size property, not iterable.",
      example: "let obj = {};\nconst weakMap = new WeakMap();\nweakMap.set(obj, 'value');\nobj = null; // entry can be GC'd\n\nconst map = new Map();\nmap.set(obj, 'value');\nobj = null; // entry stays (memory leak)",
      output: "WeakMap allows garbage collection, Map does not",
      note: "Use WeakMap to prevent memory leaks in caches."
    },
    {
      question: "What is the difference between `Set` and `WeakSet`?",
      answer: "Set stores unique values (any type), strong references, iterable, size property. WeakSet stores unique objects only, weak references, not iterable, no size property.",
      example: "let obj = {};\nconst weakSet = new WeakSet();\nweakSet.add(obj);\nobj = null; // obj can be GC'd\n\nconst set = new Set();\nset.add(obj);\nobj = null; // entry stays",
      output: "WeakSet allows GC, Set does not",
      note: "Use WeakSet to mark objects without preventing GC."
    },
    {
      question: "What are typed arrays in JavaScript?",
      answer: "Typed arrays (Int8Array, Uint8Array, Float32Array, etc.) provide array-like views of binary data buffers. Used for WebGL, audio processing, file handling, and performance-critical operations.",
      example: "const buffer = new ArrayBuffer(16);\nconst int32View = new Int32Array(buffer);\nint32View[0] = 5;\nconsole.log(int32View[0]); // 5\nconst uint8View = new Uint8Array(buffer);\nconsole.log(uint8View[0]); // 5 (first byte)",
      output: "Binary data manipulation",
      note: "Essential for WebAssembly, canvas operations, and binary protocols."
    },
    {
      question: "What is `ArrayBuffer` and `SharedArrayBuffer`?",
      answer: "ArrayBuffer represents raw binary data buffer. SharedArrayBuffer allows sharing memory between Web Workers (requires cross-origin isolated headers). Used for high-performance concurrent operations.",
      example: "const buffer = new ArrayBuffer(1024);\nconst view = new Uint8Array(buffer);\nview[0] = 42;\n\n// SharedArrayBuffer\nconst sharedBuffer = new SharedArrayBuffer(1024);\nconst sharedView = new Uint8Array(sharedBuffer);",
      output: "Shared memory between workers",
      note: "SharedArrayBuffer requires special headers (COOP, COEP)."
    },
    {
      question: "What are `DataView` objects?",
      answer: "DataView provides low-level read/write of multiple number types from ArrayBuffer, handling endianness. More flexible than typed arrays for mixed data formats.",
      example: "const buffer = new ArrayBuffer(8);\nconst view = new DataView(buffer);\nview.setInt16(0, 42, true); // little-endian\nview.setFloat32(2, 3.14);\nconsole.log(view.getInt16(0, true)); // 42\nconsole.log(view.getFloat32(2)); // 3.14",
      output: "Read/write different data types",
      note: "Useful for parsing binary file formats and network protocols."
    },
    {
      question: "What is `fetch` API abort controller?",
      answer: "AbortController allows canceling fetch requests. Useful for user-triggered cancellations, timeouts, or when components unmount.",
      example: "const controller = new AbortController();\nconst { signal } = controller;\n\nfetch('/api/data', { signal })\n  .then(res => res.json())\n  .catch(err => {\n    if(err.name === 'AbortError') {\n      console.log('Request cancelled');\n    }\n  });\n// Cancel request after 5 seconds\nsetTimeout(() => controller.abort(), 5000);",
      output: "Cancels ongoing fetch request",
      note: "Works with fetch, streams, and other abortable APIs."
    },
    {
      question: "What are `streams` API? (ReadableStream, WritableStream)",
      answer: "Streams API allows processing data piece by piece (chunks) without loading entire data into memory. Used for large file uploads/downloads, video streaming, and real-time data processing.",
      example: "fetch('/large-file')\n  .then(response => response.body)\n  .then(stream => {\n    const reader = stream.getReader();\n    function read() {\n      reader.read().then(({ done, value }) => {\n        if(done) return;\n        console.log('Chunk:', value);\n        read();\n      });\n    }\n    read();\n  });",
      output: "Process data incrementally",
      note: "Essential for handling large datasets efficiently."
    },
    {
      question: "What is `TextEncoder` and `TextDecoder`?",
      answer: "TextEncoder converts strings to Uint8Array (UTF-8). TextDecoder converts Uint8Array back to strings. Used for handling binary data, network protocols, and file processing.",
      example: "const encoder = new TextEncoder();\nconst decoder = new TextDecoder();\nconst bytes = encoder.encode('Hello');\nconsole.log(bytes); // Uint8Array [72, 101, 108, 108, 111]\nconst str = decoder.decode(bytes);\nconsole.log(str); // 'Hello'",
      output: "String to bytes and bytes to string conversion",
      note: "Essential for binary data manipulation."
    },
    {
      question: "What is `Blob` in JavaScript?",
      answer: "Blob represents immutable raw data (binary). Used for file handling, image processing, and creating object URLs for download.",
      example: "const blob = new Blob(['Hello World'], { type: 'text/plain' });\nconst url = URL.createObjectURL(blob);\nconst link = document.createElement('a');\nlink.href = url;\nlink.download = 'hello.txt';\nlink.click();\nURL.revokeObjectURL(url);",
      output: "Creates downloadable file",
      note: "Blobs are immutable; create new blobs for modifications."
    },
    {
      question: "What is `File` API and `FileReader`?",
      answer: "File API provides access to files from file input or drag-drop. FileReader reads file contents as text, data URL, or ArrayBuffer.",
      example: "const fileInput = document.getElementById('file');\nfileInput.addEventListener('change', (e) => {\n  const file = e.target.files[0];\n  const reader = new FileReader();\n  reader.onload = (event) => {\n    console.log(event.target.result);\n  };\n  reader.readAsText(file);\n});",
      output: "Reads local file contents",
      note: "Use FileReader for async file reading without blocking."
    },
    {
      question: "What is `URL` API and `URLSearchParams`?",
      answer: "URL API parses and constructs URLs. URLSearchParams handles query string parameters. Provides methods to modify URL components easily.",
      example: "const url = new URL('https://example.com/path?name=John&age=25');\nconsole.log(url.pathname); // '/path'\nconsole.log(url.searchParams.get('name')); // 'John'\nurl.searchParams.set('city', 'NYC');\nconsole.log(url.toString()); // 'https://example.com/path?name=John&age=25&city=NYC'",
      output: "URL manipulation",
      note: "Safer than string concatenation for building URLs."
    },
    {
      question: "What is `Selection` API?",
      answer: "Selection API provides access to user's text selection on the page. Used for text highlighting, copy-enhanced features, or selection-based actions.",
      example: "document.addEventListener('mouseup', () => {\n  const selection = window.getSelection();\n  const selectedText = selection.toString();\n  if(selectedText) {\n    console.log('Selected:', selectedText);\n    // Show toolbar at selection position\n  }\n});",
      output: "Access selected text on page",
      note: "Works with ranges for complex selection operations."
    },
    {
      question: "What is `Clipboard` API?",
      answer: "Clipboard API provides async read/write access to system clipboard. Used for copy-paste functionality with rich content (text, HTML, images).",
      example: "async function copyText(text) {\n  try {\n    await navigator.clipboard.writeText(text);\n    console.log('Copied!');\n  } catch(err) {\n    console.error('Copy failed:', err);\n  }\n}\n\nasync function pasteText() {\n  const text = await navigator.clipboard.readText();\n  console.log('Pasted:', text);\n}",
      output: "Copy/paste to clipboard",
      note: "Requires user interaction (click event) for security."
    },
    {
      question: "What is `BroadcastChannel` API?",
      answer: "BroadcastChannel allows communication between different browser contexts (tabs, windows, iframes, workers) of same origin.",
      example: "// Tab 1\nconst channel = new BroadcastChannel('my-channel');\nchannel.postMessage({ type: 'MESSAGE', data: 'Hello' });\n\n// Tab 2\nconst channel = new BroadcastChannel('my-channel');\nchannel.onmessage = (e) => {\n  console.log('Received:', e.data);\n};",
      output: "Cross-tab communication",
      note: "Useful for syncing state across tabs (logout, theme changes)."
    },
    {
      question: "What is `MessageChannel` API?",
      answer: "MessageChannel creates two-way communication channel between two contexts (e.g., main thread and worker). Provides port1 and port2 for bidirectional messaging.",
      example: "const channel = new MessageChannel();\nconst worker = new Worker('worker.js');\nworker.postMessage({ port: channel.port2 }, [channel.port2]);\nchannel.port1.onmessage = (e) => console.log('Received:', e.data);\nchannel.port1.postMessage('Hello worker');",
      output: "Direct communication between contexts",
      note: "Useful for efficient worker communication without copying data (transferable objects)."
    },
    {
      question: "What is the difference between `postMessage` and `BroadcastChannel`?",
      answer: "postMessage sends to specific target (iframe, worker, window) with target origin security. BroadcastChannel broadcasts to all same-origin contexts listening on same channel name.",
      example: "// postMessage: targeted\niframe.contentWindow.postMessage('data', 'https://example.com');\n\n// BroadcastChannel: broadcast\nconst channel = new BroadcastChannel('my-channel');\nchannel.postMessage('data'); // all tabs receive",
      output: "Targeted vs broadcast communication",
      note: "Use postMessage for cross-origin, BroadcastChannel for same-origin broadcasting."
    },
    {
      question: "What are `Transferable` objects?",
      answer: "Transferable objects (ArrayBuffer, MessagePort, ImageBitmap) can be transferred between contexts (main thread to worker) without copying, improving performance. Ownership transfers, original becomes unusable.",
      example: "const buffer = new ArrayBuffer(1024);\nworker.postMessage({ buffer }, [buffer]);\n// buffer is now neutered (cannot be used in main thread)",
      output: "Zero-copy data transfer",
      note: "Essential for high-performance data sharing between threads."
    },
    {
      question: "What is `structuredClone` for deep copying?",
      answer: "structuredClone creates deep copy of objects, handling cyclic references, Dates, Maps, Sets, RegExps, ArrayBuffers, and more. Better than JSON methods (which fail with cycles and special types).",
      example: "const original = { a: 1, b: { c: 2 }, date: new Date() };\noriginal.self = original; // circular reference\nconst clone = structuredClone(original);\nconsole.log(clone.a === original.a); // true (values)\nconsole.log(clone.b !== original.b); // true (different objects)\nconsole.log(clone.date !== original.date); // true (different Date objects)",
      output: "Deep copy with circular reference support",
      note: "structuredClone is the modern standard for deep copying."
    },
    {
      question: "What is the difference between `structuredClone` and `JSON.parse(JSON.stringify())`?",
      answer: "structuredClone handles Dates, Maps, Sets, RegExps, ArrayBuffers, and circular references. JSON methods lose these types (convert Dates to strings, omit undefined/functions, error on cycles).",
      example: "const obj = { date: new Date(), map: new Map(), undef: undefined };\nconst clone = structuredClone(obj); // works\nconst jsonClone = JSON.parse(JSON.stringify(obj)); // date becomes string, map becomes {}, undef omitted",
      output: "structuredClone preserves more types",
      note: "Use structuredClone for complex objects, JSON methods for simple data."
    },
    {
      question: " What are `Atomics` object in JavaScript?",
      answer: "Atomics provides atomic operations for SharedArrayBuffer, ensuring thread-safe access across workers. Methods: add, sub, load, store, compareExchange, wait, notify.",
      example: "const buffer = new SharedArrayBuffer(4);\nconst view = new Int32Array(buffer);\nAtomics.store(view, 0, 10);\nAtomics.add(view, 0, 5);\nconsole.log(Atomics.load(view, 0)); // 15\nAtomics.wait(view, 0, 15); // waits for change\n// In another worker:\nAtomics.notify(view, 0, 1); // wakes waiter",
      output: "Thread-safe shared memory operations",
      note: "Advanced feature for parallel processing."
    },
    {
      question: " What is the `FinalizationRegistry` API?",
      answer: "FinalizationRegistry allows registering callbacks when objects are garbage collected. Useful for cleanup of external resources (file handles, network connections, DOM references).",
      example: "const registry = new FinalizationRegistry((heldValue) => {\n  console.log(`Object with ${heldValue} was GC'd`);\n});\n{\n  let obj = { data: 'some data' };\n  registry.register(obj, 'identifier');\n  obj = null; // obj eligible for GC\n}",
      output: "Callback runs when object garbage collected",
      note: "Use for cleanup, not for critical logic (GC timing uncertain)."
    },
    {
      question: " What is the `WeakRef` API?",
      answer: "WeakRef holds weak reference to object, allowing garbage collection. Use .deref() to access object if still alive. Used with FinalizationRegistry for caching without memory leaks.",
      example: "let obj = { data: 'important' };\nconst weakRef = new WeakRef(obj);\nconsole.log(weakRef.deref()); // { data: 'important' }\nobj = null; // object can be GC'd\n// Later:\nconst recovered = weakRef.deref();\nif(recovered) {\n  console.log('Object still alive');\n} else {\n  console.log('Object was collected');\n}",
      output: "Weak reference to object",
      note: "Use sparingly; GC timing is non-deterministic."
    },
    {
      question: " What is the `Intl` API for internationalization?",
      answer: "Intl API provides language-sensitive formatting for dates, numbers, and strings. Includes DateTimeFormat, NumberFormat, RelativeTimeFormat, ListFormat, and Collator.",
      example: "const date = new Date();\nconsole.log(new Intl.DateTimeFormat('en-US').format(date)); // '4/24/2024'\nconsole.log(new Intl.DateTimeFormat('de-DE').format(date)); // '24.4.2024'\nconst number = 1234567.89;\nconsole.log(new Intl.NumberFormat('en-US').format(number)); // '1,234,567.89'\nconsole.log(new Intl.NumberFormat('de-DE').format(number)); // '1.234.567,89'",
      output: "Localized formatting",
      note: "Essential for international applications."
    },
    {
      question: "What is the `RelativeTimeFormat` API?",
      answer: "RelativeTimeFormat formats relative time strings (yesterday, tomorrow, in 2 days) based on locale. Useful for timestamps, comment dates, and activity logs.",
      example: "const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });\nconsole.log(rtf.format(-1, 'day')); // 'yesterday'\nconsole.log(rtf.format(2, 'day')); // 'in 2 days'\nconsole.log(rtf.format(-3, 'week')); // '3 weeks ago'\n\nconst rtf2 = new Intl.RelativeTimeFormat('es');\nconsole.log(rtf2.format(-1, 'day')); // 'hace 1 día'",
      output: "Localized relative time strings",
      note: "Better than manual string concatenation for internationalization."
    },
    {
      question: " What is the `ListFormat` API?",
      answer: "ListFormat creates localized lists (A, B, and C) based on locale and style. Handles conjunctions (and, or) and punctuation automatically.",
      example: "const lf = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });\nconsole.log(lf.format(['Apple', 'Banana', 'Orange'])); // 'Apple, Banana, and Orange'\n\nconst lfShort = new Intl.ListFormat('en', { style: 'short', type: 'disjunction' });\nconsole.log(lfShort.format(['Red', 'Green', 'Blue'])); // 'Red, Green, or Blue'",
      output: "Properly formatted lists",
      note: "Eliminates manual comma and conjunction handling."
    },
    {
      question: " What is `PluralRules` API?",
      answer: "PluralRules determines which plural form to use for numbers in different languages (zero, one, two, few, many, other). Essential for internationalized pluralization.",
      example: "const pr = new Intl.PluralRules('en');\nconsole.log(pr.select(0)); // 'other'\nconsole.log(pr.select(1)); // 'one'\nconsole.log(pr.select(2)); // 'other'\n\nconst prRu = new Intl.PluralRules('ru');\nconsole.log(prRu.select(1)); // 'one'\nconsole.log(prRu.select(2)); // 'few'\nconsole.log(prRu.select(5)); // 'many'",
      output: "Language-specific plural categories",
      note: "Essential for proper pluralization in translations."
    },
    {
      question: " What is the `DisplayNames` API?",
      answer: "DisplayNames returns localized names for languages, regions, scripts, and currencies. Useful for language selectors and region displays.",
      example: "const dn = new Intl.DisplayNames('en', { type: 'language' });\nconsole.log(dn.of('fr')); // 'French'\nconsole.log(dn.of('de')); // 'German'\n\nconst dnRegion = new Intl.DisplayNames('en', { type: 'region' });\nconsole.log(dnRegion.of('US')); // 'United States'\nconsole.log(dnRegion.of('JP')); // 'Japan'",
      output: "Localized display names",
      note: "Eliminates hardcoded language/region mappings."
    },
    {
      question: " What is the `DurationFormat` API?",
      answer: "DurationFormat (proposal) formats time durations (hours, minutes, seconds) in human-readable, localized strings.",
      example: "const df = new Intl.DurationFormat('en', { style: 'long' });\nconsole.log(df.format({ hours: 2, minutes: 30 })); // '2 hours, 30 minutes'\nconst dfShort = new Intl.DurationFormat('en', { style: 'short' });\nconsole.log(dfShort.format({ hours: 1, minutes: 15 })); // '1 hr, 15 min'",
      output: "Localized duration strings",
      note: "Stage 3 proposal, not yet fully supported."
    },
    {
      question: "What is the `Segmenter` API for string segmentation?",
      answer: "Segmenter splits strings into graphemes, words, or sentences, respecting Unicode and language boundaries. Essential for counting characters, words, or sentences in international text.",
      example: "const segmenter = new Intl.Segmenter('en', { granularity: 'word' });\nconst text = 'Hello world, how are you?';\nconst segments = segmenter.segment(text);\nfor(const segment of segments) {\n  if(segment.isWordLike) {\n    console.log(segment.segment);\n  }\n}\n// Output: 'Hello', 'world', 'how', 'are', 'you'",
      output: "Proper word segmentation",
      note: "Better than regex for international text."
    },
    {
      question: " What is the `Temporal` API?",
      answer: "Temporal API provides modern date/time handling (replacing Date object). Includes PlainDate, PlainTime, ZonedDateTime, Duration, and more. Handles time zones, calendars, and arithmetic correctly.",
      example: "const date = Temporal.PlainDate.from('2024-04-24');\nconst tomorrow = date.add({ days: 1 });\nconsole.log(tomorrow.toString()); // '2024-04-25'\nconst now = Temporal.Now.zonedDateTimeISO();\nconsole.log(now.toLocaleString()); // localized with timezone",
      output: "Proper date/time operations",
      note: "Stage 3 proposal, polyfills available."
    },
    {
      question: " What are `Decorators` in JavaScript?",
      answer: "Decorators are functions that modify classes, methods, or properties at design time. Used for logging, validation, dependency injection, and meta-programming. Stage 3 proposal.",
      example: "function log(target, name, descriptor) {\n  const original = descriptor.value;\n  descriptor.value = function(...args) {\n    console.log(`Calling ${name} with`, args);\n    return original.apply(this, args);\n  };\n}\n\nclass Example {\n  @log\n  greet(name) {\n    return `Hello ${name}`;\n  }\n}",
      output: "Method call logging",
      note: "Experimental; use Babel or TypeScript for production."
    },
    {
      question: " What are `Record` and `Tuple` proposals?",
      answer: "Record (deeply immutable object) and Tuple (deeply immutable array) proposals add immutable data structures. Records use #{} syntax, Tuples use #[] syntax. Stage 2 proposal.",
      example: "const record = #{ a: 1, b: 2 }; // deeply immutable\nconst tuple = #[1, 2, 3];\n// record.a = 5; // TypeError\n// tuple[0] = 5; // TypeError\nconst newRecord = #{ ...record, c: 3 }; // creates new record",
      output: "Immutable data structures",
      note: "Use for state management and value comparison."
    },
    {
      question: "What is the `Pipeline Operator` (|>)?",
      answer: "Pipeline operator (|>) passes the result of left expression as argument to right expression. Improves readability for chained function calls. Stage 2 proposal.",
      example: "// Without pipeline\nconst result = capitalize(trim(lowercase(input)));\n\n// With pipeline\nconst result = input |> lowercase |> trim |> capitalize;\n\nfunction double(x) { return x * 2; }\nfunction addOne(x) { return x + 1; }\nconst value = 5 |> double |> addOne; // 11",
      output: "Clean function composition",
      note: "Improves readability for nested function calls."
    },
    {
      question: " What are `Pattern Matching` proposals?",
      answer: "Pattern matching allows matching values against patterns, similar to switch but more powerful. Can match object shapes, arrays, and destructure with conditions. Stage 1 proposal.",
      example: "const result = match(value) {\n  when { type: 'success', data } => `Success: ${data}`,\n  when { type: 'error', message } => `Error: ${message}`,\n  when [] => 'Empty array',\n  when [x, y, ...rest] => `First two: ${x}, ${y}`,\n  when _ => 'default'\n}",
      output: "Pattern-based conditional logic",
      note: "Experimental; use libraries like ts-pattern for now."
    },
    {
      question: " What is the `Error` cause property?",
      answer: "Error cause property allows attaching original error when throwing new error. Helps preserve error chain for debugging.",
      example: "try {\n  await fetch('/api/data');\n} catch(err) {\n  throw new Error('API call failed', { cause: err });\n}\n// Later:\ntry {\n  // operation\n} catch(err) {\n  console.log(err.message); // 'API call failed'\n  console.log(err.cause); // original fetch error\n}",
      output: "Preserves error chain",
      note: "Supported in modern browsers and Node.js 16+."
    },// ==================== EXPERIENCED INTERVIEW QUESTIONS (231-280) ====================
      {
        question: "What is the Error cause property (ES2022)?",
        answer: "The Error cause property allows attaching the original error when throwing a new error. This preserves the full error chain for debugging without losing the original stack trace. It's especially useful when you need to add context to errors in middleware, API layers, or error boundaries. The cause property is accessed via error.cause.",
        example: "// Without cause (losing original error)\ntry {\n  await fetch('/api/user');\n} catch(err) {\n  throw new Error('Failed to fetch user'); // Original err lost!\n}\n\n// With cause (preserves chain)\ntry {\n  await fetch('/api/user');\n} catch(err) {\n  throw new Error('Failed to fetch user', { cause: err });\n}\n\n// Later debugging\nasync function getData() {\n  try {\n    await processRequest();\n  } catch(err) {\n    console.log('Message:', err.message);\n    console.log('Cause:', err.cause);\n    console.log('Cause Stack:', err.cause?.stack);\n  }\n}\n\n// Multiple layers of cause\nclass AppError extends Error {\n  constructor(message, options) {\n    super(message, options);\n    this.name = 'AppError';\n  }\n}\n\ntry {\n  try {\n    JSON.parse('invalid');\n  } catch(err) {\n    throw new AppError('Parsing failed', { cause: err });\n  }\n} catch(err) {\n  throw new Error('Request failed', { cause: err });\n}",
        output: "Complete error chain preserved. err.cause contains previous error.",
        note: "Supported in Node.js 16.9+, modern browsers (Chrome 93+, Firefox 91+, Safari 15+)."
      },
      {
        question: "What is the difference between deep copy using structuredClone() vs JSON.parse(JSON.stringify())?",
        answer: "structuredClone() is a native deep clone method (ES2021) that handles more data types than JSON methods: Dates, RegExps, Maps, Sets, Arrays, Blobs, ImageData, and circular references. JSON methods cannot handle Dates (convert to strings), RegExps (become empty objects), Maps/Sets (become empty objects), or circular references (throw error). structuredClone() is faster and safer for complex objects.",
        example: "let obj = {\n  name: 'John',\n  date: new Date(),\n  regex: /test/g,\n  map: new Map([['key', 'value']]),\n  set: new Set([1, 2, 3]),\n  circular: null\n};\nobj.circular = obj; // circular reference\n\n// JSON method - FAILS with circular\ntry {\n  let jsonClone = JSON.parse(JSON.stringify(obj));\n  console.log(jsonClone.date); // string, not Date!\n  console.log(jsonClone.regex); // {} empty!\n} catch(err) {\n  console.log('JSON fails with circular');\n}\n\n// structuredClone - WORKS\nlet clone = structuredClone(obj);\nconsole.log(clone.date instanceof Date); // true\nconsole.log(clone.regex instanceof RegExp); // true\nconsole.log(clone.map instanceof Map); // true\nconsole.log(clone.set instanceof Set); // true\nconsole.log(clone.circular === obj); // false (different)\nconsole.log(clone.circular.circular === clone); // true (circular preserved)\n\n// Performance comparison\nconsole.time('JSON');\nfor(let i = 0; i < 1000; i++) {\n  JSON.parse(JSON.stringify(simpleObj));\n}\nconsole.timeEnd('JSON');\n\nconsole.time('structuredClone');\nfor(let i = 0; i < 1000; i++) {\n  structuredClone(simpleObj);\n}\nconsole.timeEnd('structuredClone');",
        output: "structuredClone handles more data types and circular references correctly.",
        note: "Always use structuredClone() over JSON methods for deep cloning when available. Support: Node 17+, Chrome 98+, Firefox 94+, Safari 15.4+."
      },
      {
        question: "What is the Temporal proposal for date/time handling?",
        answer: "Temporal is a modern Date/Time API proposal (Stage 3) that fixes JavaScript Date problems: mutable, confusing APIs, timezone handling, parsing issues. Temporal provides separate classes: PlainDateTime, ZonedDateTime, Duration, PlainDate, PlainTime, Instant. It's immutable, has proper timezone support, and intuitive APIs. Expected to be built-in in future ES versions.",
        example: "// Current Date issues\nlet date = new Date();\ndate.setMonth(date.getMonth() + 1); // Mutable - changes original\nconsole.log(new Date('2024-01-01')); // Can be off by timezone\n\n// Temporal (proposal) - not yet native, use polyfill\n// Install: npm install @js-temporal/polyfill\n\nconst { Temporal } = require('@js-temporal/polyfill');\n\n// Plain date (no timezone)\nlet birthday = Temporal.PlainDate.from('1990-01-15');\nconsole.log(birthday.year); // 1990\nconsole.log(birthday.month); // 1\nconsole.log(birthday.day); // 15\n\n// Date arithmetic\nlet nextMonth = birthday.add({ months: 1 });\nconsole.log(nextMonth.toString()); // 1990-02-15\n\n// Duration\nlet duration = Temporal.Duration.from({ days: 5, hours: 3 });\nconsole.log(duration.total('hours')); // 123\n\n// Zoned date/time\nlet zoned = Temporal.ZonedDateTime.from('2024-01-15T10:30:00[America/New_York]');\nconsole.log(zoned.timeZoneId); // America/New_York\n\n// Compare dates\nlet date1 = Temporal.PlainDate.from('2024-01-01');\nlet date2 = Temporal.PlainDate.from('2024-12-31');\nconsole.log(Temporal.PlainDate.compare(date1, date2)); // -1 (date1 earlier)\n\n// Human-readable differences\nlet diff = date2.since(date1);\nconsole.log(diff.months); // 11\nconsole.log(diff.days); // 365",
        output: "Temporal provides immutable, timezone-aware date handling.",
        note: "Temporal is Stage 3 proposal. Use @js-temporal/polyfill for now. Much better than legacy Date API."
      },
      {
        question: "What is the difference between Object.is() and ===?",
        answer: "Object.is() is similar to === but handles special cases differently. Object.is(NaN, NaN) returns true (=== returns false). Object.is(-0, +0) returns false (=== returns true). For all other values, Object.is() behaves like ===. Object.is() is used internally by React for state comparison and some testing frameworks.",
        example: "// NaN comparison\nconsole.log(NaN === NaN);     // false\nconsole.log(Object.is(NaN, NaN)); // true\n\n// Zero comparison\nconsole.log(-0 === +0);        // true\nconsole.log(Object.is(-0, +0)); // false\n\n// Other values - same as ===\nconsole.log(Object.is(5, 5));      // true\nconsole.log(Object.is('a', 'a'));   // true\nconsole.log(Object.is({}, {}));      // false\n\n// Practical use in React\nfunction shouldUpdate(prevState, nextState) {\n  return !Object.is(prevState, nextState);\n}\n\n// Testing frameworks use Object.is for assertions\nexpect(Object.is(NaN, NaN)).toBe(true);\n\n// Polyfill for Object.is\nif(!Object.is) {\n  Object.is = function(x, y) {\n    if(x === y) {\n      return x !== 0 || 1 / x === 1 / y;\n    }\n    return x !== x && y !== y;\n  };\n}",
        output: "Object.is() treats NaN and -0/+0 differently than ===.",
        note: "Use Object.is() for equality checks in functional programming, React, and testing frameworks."
      },
      {
        question: "What is the difference between `null` and `undefined` in depth?",
        answer: "undefined means a variable has been declared but never assigned a value. It's the default state for uninitialized variables. null is an intentional assignment representing 'no value' or 'empty'. undefined is set by JavaScript engine, null is set by developers. typeof undefined returns 'undefined', typeof null returns 'object' (historical bug). Object.prototype.toString.call(null) returns '[object Null]'.",
        example: "let a;                  // undefined (engine sets)\nlet b = null;           // null (developer sets)\n\nconsole.log(a); // undefined\nconsole.log(b); // null\n\nconsole.log(typeof a); // 'undefined'\nconsole.log(typeof b); // 'object' (bug!)\n\nconsole.log(Object.prototype.toString.call(a)); // '[object Undefined]'\nconsole.log(Object.prototype.toString.call(b)); // '[object Null]'\n\n// Comparison\nconsole.log(a == b);  // true (loose equality)\nconsole.log(a === b); // false (strict)\n\n// Functions return undefined by default\nfunction test() {}\nconsole.log(test()); // undefined\n\n// Missing object properties return undefined\nlet obj = { name: 'John' };\nconsole.log(obj.age); // undefined\n\n// JSON behavior\nconsole.log(JSON.stringify({ a: undefined, b: null })); // '{\"b\":null}' (undefined omitted)\n\n// Default parameter works only with undefined\nfunction greet(name = 'Guest') {\n  console.log(name);\n}\ngreet(undefined); // 'Guest'\ngreet(null);      // null (not default)\n\n// Void operator returns undefined\nconsole.log(void 0); // undefined",
        output: "undefined is default unassigned, null is intentional empty.",
        note: "Use undefined for missing values, null for intentionally empty values. Never set anything to undefined manually."
      },
      {
        question: "What are the different ways to handle async operations in JavaScript?",
        answer: "Five main ways: 1) Callbacks (error-first pattern) - basic but leads to callback hell. 2) Promises - chainable with .then()/.catch(). 3) Async/Await - synchronous-looking async code. 4) Observables (RxJS) - streams for multiple values. 5) Generators with yield - pause/resume functions. Modern development prefers async/await with try/catch. Promises are foundation. Observables for real-time data streams.",
        example: "// 1. Callbacks (callback hell)\nfunction getUser(id, callback) {\n  setTimeout(() => callback(null, { id, name: 'John' }), 1000);\n}\ngetUser(1, (err, user) => {\n  if(err) return console.error(err);\n  getPosts(user.id, (err, posts) => {\n    if(err) return console.error(err);\n    getComments(posts[0].id, (err, comments) => {\n      // callback hell continues...\n    });\n  });\n});\n\n// 2. Promises\ngetUser(1)\n  .then(user => getPosts(user.id))\n  .then(posts => getComments(posts[0].id))\n  .catch(err => console.error(err));\n\n// 3. Async/Await (recommended)\nasync function getUserData(id) {\n  try {\n    const user = await getUser(id);\n    const posts = await getPosts(user.id);\n    const comments = await getComments(posts[0].id);\n    return { user, posts, comments };\n  } catch(err) {\n    console.error(err);\n  }\n}\n\n// 4. Observables (RxJS)\nimport { from } from 'rxjs';\nimport { map, filter } from 'rxjs/operators';\n\nfrom(fetch('/api/users'))\n  .pipe(\n    map(res => res.json()),\n    filter(users => users.length > 0)\n  )\n  .subscribe(users => console.log(users));\n\n// 5. Generators\nfunction* asyncGenerator() {\n  const user = yield getUser(1);\n  const posts = yield getPosts(user.id);\n  return posts;\n}\n\nfunction runGenerator(gen) {\n  const iterator = gen();\n  function iterate({ value, done }) {\n    if(done) return value;\n    value.then(res => iterate(iterator.next(res)));\n  }\n  iterate(iterator.next());\n}",
        output: "Async/Await is most readable for sequential async operations.",
        note: "Use async/await for sequential operations, Promise.all for parallel, Observables for event streams."
      },
      {
        question: "What is the event loop execution order? (Microtasks vs Macrotasks)",
        answer: "Event loop runs phases: 1) Execute all synchronous code. 2) Run ALL microtasks (Promise callbacks, queueMicrotask, process.nextTick in Node). 3) Take ONE macrotask from queue (setTimeout, setInterval, I/O). 4) Render (browser). 5) Repeat. Microtasks have higher priority and ALL are processed before next macrotask. This ensures promises resolve immediately before next timer.",
        example: "console.log('1');\n\nsetTimeout(() => console.log('2'), 0); // Macrotask\n\nPromise.resolve().then(() => {\n  console.log('3');\n  Promise.resolve().then(() => console.log('4'));\n});\n\nqueueMicrotask(() => console.log('5'));\n\nconsole.log('6');\n\n// Output: 1,6,3,5,4,2\n\n// Microtasks are processed completely before macrotasks\nsetTimeout(() => console.log('Timeout'), 0);\n\nPromise.resolve().then(() => {\n  console.log('Promise 1');\n  Promise.resolve().then(() => console.log('Promise 2'));\n  setTimeout(() => console.log('Inner Timeout'), 0);\n});\n\n// Output: Promise 1, Promise 2, Timeout, Inner Timeout\n\n// process.nextTick (Node.js specific) runs before Promise microtasks\nif(typeof process !== 'undefined') {\n  process.nextTick(() => console.log('nextTick'));\n  Promise.resolve().then(() => console.log('Promise'));\n  // Node: nextTick, Promise\n}",
        output: "All microtasks run before any macrotask. Microtasks: Promises, nextTick, queueMicrotask. Macrotasks: setTimeout, setInterval, I/O.",
        note: "Understanding microtask/macrotask priority is critical for debugging async race conditions."
      },
      {
        question: "What is the difference between `queueMicrotask` and `Promise.resolve().then()`?",
        answer: "Both schedule microtasks, but queueMicrotask is slightly faster and more direct. Promise.resolve().then() creates a promise unnecessarily. queueMicrotask is a standard API (ES2020) specifically for adding microtasks. Both execute before the next macrotask. Use queueMicrotask when you need to schedule work without creating a promise.",
        example: "// Using Promise (creates unnecessary promise)\nPromise.resolve().then(() => {\n  console.log('Microtask from Promise');\n});\n\n// Using queueMicrotask (direct, no promise overhead)\nqueueMicrotask(() => {\n  console.log('Microtask from queueMicrotask');\n});\n\nconsole.log('Synchronous');\n// Output: Synchronous, Microtask from queueMicrotask, Microtask from Promise\n\n// Practical use: deferring work without blocking\nfunction processData(data) {\n  // Process synchronously first\n  const validated = validate(data);\n  \n  // Defer non-critical work\n  queueMicrotask(() => {\n    analytics.track(data);\n    updateCache(data);\n  });\n  \n  return validated;\n}\n\n// Avoiding stack overflow with recursion\nlet counter = 0;\nfunction safeRecursion() {\n  counter++;\n  if(counter < 10000) {\n    // Use microtask instead of direct recursion to avoid stack overflow\n    queueMicrotask(safeRecursion);\n  }\n}\n\n// Performance comparison\nconsole.time('Promise');\nfor(let i = 0; i < 100000; i++) {\n  Promise.resolve().then(() => {});\n}\nconsole.timeEnd('Promise');\n\nconsole.time('queueMicrotask');\nfor(let i = 0; i < 100000; i++) {\n  queueMicrotask(() => {});\n}\nconsole.timeEnd('queueMicrotask'); // ~30% faster",
        output: "queueMicrotask is more direct and slightly faster than Promise.resolve().then()",
        note: "Use queueMicrotask when you need microtask scheduling without promise overhead. Both execute before next macrotask."
      },
      {
        question: "What are WeakMap and WeakSet and when to use them?",
        answer: "WeakMap and WeakSet hold references to objects weakly, meaning they don't prevent garbage collection. Keys must be objects (not primitives). WeakMap keys are weakly referenced - if no other references exist, entry is removed automatically. WeakSet values are weakly referenced. Useful for caching, metadata storage, and avoiding memory leaks. They are not enumerable (no size, forEach, keys, values methods).",
        example: "// WeakMap - keys are objects, weakly referenced\nlet weakMap = new WeakMap();\nlet obj = { id: 1 };\nweakMap.set(obj, 'metadata');\nconsole.log(weakMap.get(obj)); // 'metadata'\n\n// When obj is no longer referenced, entry is auto-removed\nobj = null;\n// The entry is now garbage collected (can't verify directly)\n\n// Practical: DOM element metadata\nconst domMetadata = new WeakMap();\nconst button = document.getElementById('myButton');\ndomMetadata.set(button, { clicks: 0, handler: null });\n// When button removed from DOM, metadata auto-cleaned\n\n// WeakSet - values are objects, weakly referenced\nlet weakSet = new WeakSet();\nlet user = { name: 'John' };\nweakSet.add(user);\nconsole.log(weakSet.has(user)); // true\nuser = null; // entry removed automatically\n\n// Practical: Tracking without memory leaks\nconst visited = new WeakSet();\nfunction trackVisit(node) {\n  if(visited.has(node)) return;\n  visited.add(node);\n  console.log('First visit:', node);\n}\n\n// What they CAN'T do (not iterable)\nconsole.log(weakMap.size); // undefined\n// weakMap.forEach(() => {}) // Error!\n// for(let [k,v] of weakMap) // Error!\n\n// Map vs WeakMap memory comparison\nfunction createLargeMap() {\n  let map = new Map();\n  for(let i = 0; i < 100000; i++) {\n    let obj = { id: i };\n    map.set(obj, `data ${i}`);\n  }\n  // Memory stays high even after obj unreachable\n}\n\nfunction createWeakMap() {\n  let wm = new WeakMap();\n  for(let i = 0; i < 100000; i++) {\n    let obj = { id: i };\n    wm.set(obj, `data ${i}`);\n  }\n  // Memory freed when loop ends (obj unreachable)\n}",
        output: "WeakMap/WeakSet allow garbage collection, prevent memory leaks. Not enumerable.",
        note: "Use WeakMap for DOM metadata, private data, caching where entries should auto-clean. Never use WeakMap when you need iteration."
      },
      {
        question: "What is the difference between Map and WeakMap?",
        answer: "Map keys can be any type (objects, primitives). WeakMap keys must be objects. Map is iterable (has size, forEach, keys, values, entries). WeakMap is not iterable. Map holds strong references (prevents garbage collection). WeakMap holds weak references (doesn't prevent GC). Use Map for general key-value storage. Use WeakMap when keys are temporary objects to avoid memory leaks.",
        example: "// Map - any keys, strong references, iterable\nlet map = new Map();\nmap.set('key', 'value');  // string key\nmap.set(123, 'number');    // number key\nmap.set({}, 'object');     // object key\n\nconsole.log(map.size); // 3\nmap.forEach((v,k) => console.log(k, v)); // iterable\n\nlet objKey = { id: 1 };\nmap.set(objKey, 'data');\nobjKey = null; // Map still holds reference - memory leak!\nconsole.log(map.size); // Still 4, entry not removed\n\n// WeakMap - object keys only, weak references, not iterable\nlet weakMap = new WeakMap();\n// weakMap.set('key', 'value'); // Error! keys must be objects\n\nlet user = { name: 'John' };\nweakMap.set(user, 'metadata');\nuser = null; // Entry auto-removed (garbage collected)\n\n// Not iterable\nconsole.log(weakMap.size); // undefined\n// weakMap.forEach(() => {}) // Error!\n\n// Use cases\n// Map: Caches, configuration, any key-value where keys persist\nconst userCache = new Map();\nfunction getUser(id) {\n  if(userCache.has(id)) return userCache.get(id);\n  const user = fetchUser(id);\n  userCache.set(id, user);\n  return user;\n}\n\n// WeakMap: DOM metadata, private data for objects\nconst privateData = new WeakMap();\nclass Person {\n  constructor(name) {\n    privateData.set(this, { name });\n  }\n  getName() {\n    return privateData.get(this).name;\n  }\n}\n\n// Memory comparison\nlet mapObj = { id: 1 };\nlet mapCache = new Map();\nmapCache.set(mapObj, 'data');\nmapObj = null; // Leak! Entry stays\n\nlet wmObj = { id: 1 };\nlet wmCache = new WeakMap();\nwmCache.set(wmObj, 'data');\nwmObj = null; // Auto-cleaned",
        output: "Map is iterable with strong references. WeakMap is non-iterable with weak references (auto-GC).",
        note: "Use WeakMap for temporary object metadata to avoid memory leaks. Use Map for persistent caches."
      },
      {
        question: "What is the difference between `Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()`?",
        answer: "Object.preventExtensions(): prevents adding new properties (existing can be deleted/modified). Object.seal(): prevents adding/deleting properties (existing can be modified). Object.freeze(): prevents adding/deleting/modifying properties (completely immutable). Freeze is strongest, seal is medium, preventExtensions is weakest.",
        example: "let obj = { name: 'John', age: 25 };\n\n// Object.preventExtensions() - can't add, can delete/modify\nObject.preventExtensions(obj);\nobj.city = 'NYC';     // ignored\nobj.age = 26;         // allowed (modify)\ndelete obj.name;      // allowed (delete)\nconsole.log(obj);     // { age: 26 }\n\n// Object.seal() - can't add/delete, can modify\nlet sealed = { name: 'Jane', age: 30 };\nObject.seal(sealed);\nsealed.city = 'LA';   // ignored\nsealed.age = 31;      // allowed (modify)\ndelete sealed.name;   // ignored\nconsole.log(sealed);  // { name: 'Jane', age: 31 }\n\n// Object.freeze() - can't add/delete/modify\nlet frozen = { name: 'Bob', age: 35 };\nObject.freeze(frozen);\nfrozen.city = 'CHI';  // ignored\nfrozen.age = 36;      // ignored (strict mode throws)\ndelete frozen.name;   // ignored\nconsole.log(frozen);  // { name: 'Bob', age: 35 }\n\n// Check status\nconsole.log(Object.isExtensible(obj));   // false\nconsole.log(Object.isSealed(sealed));    // true\nconsole.log(Object.isFrozen(frozen));    // true\n\n// Nested objects are NOT affected\nlet nested = { user: { name: 'John' } };\nObject.freeze(nested);\nnested.user.name = 'Jane'; // ALLOWED! (nested not frozen)\nnested.user = {};          // ignored\nconsole.log(nested.user.name); // 'Jane'\n\n// Deep freeze\nfunction deepFreeze(obj) {\n  Object.freeze(obj);\n  Object.values(obj).forEach(value => {\n    if(value && typeof value === 'object') deepFreeze(value);\n  });\n  return obj;\n}",
        output: "preventExtensions: no add. Seal: no add/delete. Freeze: no add/delete/modify.",
        note: "Freeze for constants, Seal for fixed structure APIs, preventExtensions for growing objects."
      },
      {
        question: "What is the difference between `Array.prototype.flat()` and `Array.prototype.flatMap()`?",
        answer: "flat() flattens nested arrays to specified depth. flatMap() first maps each element, then flattens result by one level. flatMap is equivalent to map().flat(1) but more efficient (doesn't create intermediate array). flatMap is great for mapping to multiple values, filtering while mapping, and one-to-many transformations.",
        example: "// flat() - flattens nested arrays\nlet nested = [1, [2, 3], [4, [5, 6]]];\nconsole.log(nested.flat());      // [1,2,3,4,[5,6]]\nconsole.log(nested.flat(2));     // [1,2,3,4,5,6]\nconsole.log(nested.flat(Infinity)); // [1,2,3,4,5,6]\n\n// flatMap() - map then flatten by 1 level\nlet arr = [1, 2, 3, 4];\n\n// Map to multiple values\nlet result = arr.flatMap(x => [x, x * 2]);\nconsole.log(result); // [1,2,2,4,3,6,4,8]\n\n// Filter while mapping (remove falsy)\nlet words = ['hello', '', 'world', '', '!'];\nlet filtered = words.flatMap(w => w ? [w.toUpperCase()] : []);\nconsole.log(filtered); // ['HELLO', 'WORLD', '!']\n\n// Split and flatten\nlet sentences = ['Hello world', 'How are you'];\nlet words2 = sentences.flatMap(s => s.split(' '));\nconsole.log(words2); // ['Hello', 'world', 'How', 'are', 'you']\n\n// Conditional mapping\nlet numbers = [1, 2, 3, 4, 5];\nlet process = numbers.flatMap(n => n % 2 === 0 ? [n, n*2] : [n]);\nconsole.log(process); // [1, 2,4, 3, 4,8, 5]\n\n// Performance vs map().flat()\nconsole.time('map+flat');\narr.map(x => [x, x*2]).flat();\nconsole.timeEnd('map+flat');\n\nconsole.time('flatMap');\narr.flatMap(x => [x, x*2]);\nconsole.timeEnd('flatMap'); // ~30% faster\n\n// Practical: API data transformation\nlet orders = [\n  { id: 1, items: ['item1', 'item2'] },\n  { id: 2, items: ['item3'] },\n  { id: 3, items: ['item4', 'item5', 'item6'] }\n];\nlet allItems = orders.flatMap(order => order.items);\nconsole.log(allItems); // ['item1','item2','item3','item4','item5','item6']",
        output: "flat() flattens arrays. flatMap() maps then flattens.",
        note: "Use flatMap for one-to-many transformations and filtering while mapping."
      },
      {
        question: "What is the difference between `Array.prototype.reduce()` and `Array.prototype.reduceRight()`?",
        answer: "reduce() processes array from left to right (index 0 to n-1). reduceRight() processes from right to left (n-1 to 0). Both accumulate values but direction differs. For operations that are not commutative (subtraction, division, string concatenation in specific order), the direction matters. For addition and multiplication and most operations, result is same.",
        example: "// Basic reduce\nlet arr = [1, 2, 3, 4];\nlet sum = arr.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum); // 10\n\n// reduceRight - works from right to left\nlet subtract = arr.reduce((acc, curr) => acc - curr, 0);\nconsole.log(subtract); // 0-1-2-3-4 = -10\n\nlet subtractRight = arr.reduceRight((acc, curr) => acc - curr, 0);\nconsole.log(subtractRight); // 0-4-3-2-1 = -10 (different order, same result)\n\n// Where order matters - string concatenation\nlet words = ['Hello', ' ', 'World', '!'];\nlet leftToRight = words.reduce((acc, w) => acc + w, '');\nconsole.log(leftToRight); // 'Hello World!'\n\nlet rightToLeft = words.reduceRight((acc, w) => acc + w, '');\nconsole.log(rightToLeft); // '!World Hello' (reversed order)\n\n// Power operation (order matters)\nlet powers = [2, 3, 4];\n// (2^3)^4 = 4096\nlet leftPower = powers.reduce((acc, curr) => Math.pow(acc, curr), 2);\nconsole.log(leftPower); // 4096\n\n// 2^(3^4) = 2^81 = huge\nlet rightPower = powers.reduceRight((acc, curr) => Math.pow(curr, acc), 2);\nconsole.log(rightPower); // 2^(3^4) different result\n\n// Practical: Parsing nested data\nlet nested = [[1,2], [3,4], [5,6]];\nlet flattened = nested.reduce((acc, curr) => [...acc, ...curr], []);\nconsole.log(flattened); // [1,2,3,4,5,6]\n\n// Building object from right\nlet pairs = [['a',1], ['b',2], ['c',3]];\nlet objLeft = pairs.reduce((acc, [k,v]) => ({ ...acc, [k]: v }), {});\nlet objRight = pairs.reduceRight((acc, [k,v]) => ({ ...acc, [k]: v }), {});\nconsole.log(objLeft, objRight); // Both {a:1,b:2,c:3} (order doesn't matter)\n\n// Performance difference (negligible for most cases)\nlet large = Array(1000000).fill(1);\nconsole.time('reduce');\nlarge.reduce((a,b) => a+b, 0);\nconsole.timeEnd('reduce');\n\nconsole.time('reduceRight');\nlarge.reduceRight((a,b) => a+b, 0);\nconsole.timeEnd('reduceRight');",
        output: "reduce() left-to-right, reduceRight() right-to-left. Order matters for non-commutative operations.",
        note: "Use reduceRight() when processing order matters (string concatenation, power operations, parser combinators)."
      },
      {
        question: "What is the difference between `Array.prototype.some()` and `Array.prototype.includes()`?",
        answer: "includes() checks for strict equality (===) of a single value. some() can use any condition (callback function). includes() is simpler for primitive value checks. some() is more flexible for complex conditions and object property checks. includes() is slightly faster for simple value checks.",
        example: "let arr = [1, 2, 3, 4, 5];\n\n// includes() - strict equality check\nconsole.log(arr.includes(3));    // true\nconsole.log(arr.includes(10));   // false\nconsole.log(arr.includes('3'));  // false (type matters)\n\n// some() - condition-based\nconsole.log(arr.some(x => x > 3));     // true\nconsole.log(arr.some(x => x === 3));   // true (same as includes)\nconsole.log(arr.some(x => x % 2 === 0)); // true (even numbers)\n\n// Objects comparison\nlet users = [\n  { id: 1, name: 'John' },\n  { id: 2, name: 'Jane' }\n];\n\n// includes() doesn't work for objects (different references)\nlet searchUser = { id: 1, name: 'John' };\nconsole.log(users.includes(searchUser)); // false (different object)\n\n// some() works for object properties\nconsole.log(users.some(u => u.id === 1)); // true\n\n// Performance comparison\nlet large = Array(1000000).fill(1);\nconsole.time('includes');\nlarge.includes(1);\nconsole.timeEnd('includes');\n\nconsole.time('some');\nlarge.some(x => x === 1);\nconsole.timeEnd('some'); // includes slightly faster\n\n// Use cases\n// includes: Check if primitive exists\nlet colors = ['red', 'green', 'blue'];\nif(colors.includes('green')) {\n  console.log('Green found');\n}\n\n// some: Complex conditions\nlet products = [\n  { name: 'Laptop', price: 999, inStock: true },\n  { name: 'Mouse', price: 25, inStock: false },\n  { name: 'Keyboard', price: 79, inStock: true }\n];\nlet hasInStock = products.some(p => p.inStock);\nlet hasExpensive = products.some(p => p.price > 500);\n\n// some with index\nlet hasDuplicate = arr.some((x, i) => arr.indexOf(x) !== i);",
        output: "includes() for primitive value check. some() for complex conditions.",
        note: "Use includes() for simple value existence, some() for conditional checks and object properties."
      },
      {
        question: "What is the difference between `Array.prototype.every()` and `Array.prototype.some()`?",
        answer: "every() returns true ONLY if ALL elements pass the test. some() returns true if ANY element passes the test. every() stops at first false, some() stops at first true. every() is like logical AND, some() is like logical OR. Use every() for validation (all fields valid), some() for existence (any field filled).",
        example: "let numbers = [2, 4, 6, 8, 10];\n\n// every() - all must pass\nlet allEven = numbers.every(n => n % 2 === 0);\nconsole.log(allEven); // true\n\nlet allGreater = numbers.every(n => n > 5);\nconsole.log(allGreater); // false (2,4 fail)\n\n// some() - at least one passes\nlet hasEven = numbers.some(n => n % 2 === 0);\nconsole.log(hasEven); // true\n\nlet hasGreater = numbers.some(n => n > 5);\nconsole.log(hasGreater); // true\n\n// Empty array behavior\nlet empty = [];\nconsole.log(empty.every(x => x > 0)); // true (vacuously true)\nconsole.log(empty.some(x => x > 0)); // false\n\n// Practical: Form validation\nlet form = {\n  name: 'John',\n  email: 'john@example.com',\n  age: 25\n};\nlet allFieldsFilled = Object.values(form).every(val => val !== '');\nconsole.log(allFieldsFilled); // true\n\n// Permission checks\nlet permissions = ['read', 'write'];\nlet canRead = permissions.some(p => p === 'read');\nlet canWrite = permissions.some(p => p === 'write');\nlet canDelete = permissions.some(p => p === 'delete');\n\n// Input validation\nlet inputs = [10, 20, 30];\nlet allValid = inputs.every(input => input > 0 && input < 100);\n\n// Array equality check\nlet arr1 = [1, 2, 3];\nlet arr2 = [1, 2, 3];\nlet isEqual = arr1.length === arr2.length && arr1.every((v,i) => v === arr2[i]);\nconsole.log(isEqual); // true\n\n// Performance\nconsole.time('every');\n[1,2,3,4,5].every(x => x > 0);\nconsole.timeEnd('every');\n\nconsole.time('some');\n[1,2,3,4,5].some(x => x < 0);\nconsole.timeEnd('some');",
        output: "every() requires all elements to pass, some() requires at least one.",
        note: "Use every() for validation, some() for existence checks. Empty array: every() returns true, some() returns false."
      },
      {
        question: "What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()` performance?",
        answer: "Object.keys() and Object.values() are similar in performance. Object.entries() is slightly slower because it creates both key and value pairs. All iterate own enumerable properties. For large objects, using for...in with hasOwnProperty might be slower than these built-in methods due to prototype chain checks. Modern JS engines optimize these methods well.",
        example: "let largeObj = {};\nfor(let i = 0; i < 100000; i++) {\n  largeObj[`key${i}`] = i;\n}\n\n// Performance comparison\nconsole.time('Object.keys');\nlet keys = Object.keys(largeObj);\nconsole.timeEnd('Object.keys');\n\nconsole.time('Object.values');\nlet values = Object.values(largeObj);\nconsole.timeEnd('Object.values');\n\nconsole.time('Object.entries');\nlet entries = Object.entries(largeObj);\nconsole.timeEnd('Object.entries'); // ~10-20% slower\n\n// Memory usage\nconsole.log('Keys length:', keys.length);\nconsole.log('Values length:', values.length);\nconsole.log('Entries length:', entries.length);\n\n// Use case optimization\n// When you need keys only\nlet users = { id1: 'John', id2: 'Jane', id3: 'Bob' };\nlet userIds = Object.keys(users);\n\n// When you need values only\nlet userNames = Object.values(users);\n\n// When you need both\nlet userEntries = Object.entries(users);\nfor(let [id, name] of userEntries) {\n  console.log(`${id}: ${name}`);\n}\n\n// Using for...in vs Object.keys\nconsole.time('for-in');\nlet arr1 = [];\nfor(let key in largeObj) {\n  if(largeObj.hasOwnProperty(key)) {\n    arr1.push(key);\n  }\n}\nconsole.timeEnd('for-in');\n\nconsole.time('Object.keys');\nlet arr2 = Object.keys(largeObj);\nconsole.timeEnd('Object.keys'); // faster than for...in\n\n// Creating object from arrays\nlet fromKeys = Object.fromEntries(userEntries);\nconsole.log(fromKeys); // { id1: 'John', id2: 'Jane', id3: 'Bob' }",
        output: "keys() and values() have similar performance. entries() is slightly slower.",
        note: "Use keys() for iteration, values() for data extraction, entries() when both needed."
      },
      {
        question: "What is the difference between `Object.assign()` and spread operator for object copying?",
        answer: "Both create shallow copies. Object.assign(target, ...sources) modifies the target object (first argument). Spread operator {...obj} creates a new object without modifying any source. Spread is syntactic sugar for Object.assign({}, obj). Object.assign is useful when you already have a target object (mutation allowed). Spread is preferred for functional programming (immutable).",
        example: "let source = { a: 1, b: { c: 2 } };\n\n// Spread operator (creates new object, immutable)\nlet spreadCopy = { ...source };\nspreadCopy.a = 99;\nconsole.log(source.a); // 1 (unchanged)\n\n// Object.assign (can mutate target)\nlet target = { d: 4 };\nlet assignCopy = Object.assign(target, source);\nconsole.log(target); // { d: 4, a: 1, b: { c: 2 } }\nconsole.log(assignCopy === target); // true (same object)\n\n// Shallow copy issue (both same)\nspreadCopy.b.c = 99;\nconsole.log(source.b.c); // 99 (nested still shared)\nassignCopy.b.c = 100;\nconsole.log(source.b.c); // 100\n\n// Multiple sources (spread)\nlet combined = { ...source, ...{ e: 5 }, f: 6 };\n\n// Multiple sources (assign)\nlet merged = Object.assign({}, source, { e: 5 }, { f: 6 });\n\n// Order matters (later properties override)\nlet result = { ...{ a: 1, b: 2 }, ...{ b: 3, c: 4 } };\nconsole.log(result); // { a: 1, b: 3, c: 4 }\n\n// Performance\nlet sourceObj = {};\nfor(let i = 0; i < 10000; i++) sourceObj[`key${i}`] = i;\n\nconsole.time('spread');\nfor(let i = 0; i < 1000; i++) {\n  let copy = { ...sourceObj };\n}\nconsole.timeEnd('spread');\n\nconsole.time('assign');\nfor(let i = 0; i < 1000; i++) {\n  let copy = Object.assign({}, sourceObj);\n}\nconsole.timeEnd('assign'); // Similar performance\n\n// Object.assign features\nclass MyClass {\n  constructor(data) {\n    Object.assign(this, data); // Merge into instance\n  }\n}\nlet obj = new MyClass({ name: 'John', age: 25 });\n\n// Spread in function parameters\nfunction updateUser(oldUser, newData) {\n  return { ...oldUser, ...newData }; // immutable update\n}",
        output: "Both create shallow copies. Spread is immutable, Object.assign can mutate.",
        note: "Use spread for immutable updates (React state). Use Object.assign when you need to mutate existing object."
      },
// ==================== OOP CONCEPTS INTERVIEW QUESTIONS (251-280) ====================
      {
        question: "What is Object-Oriented Programming (OOP) in JavaScript?",
        answer: "OOP is a programming paradigm that organizes code using objects containing data (properties) and behavior (methods). JavaScript supports OOP through prototypes and ES6 classes. Four main pillars: Encapsulation (bundling data and methods), Abstraction (hiding complexity), Inheritance (reusing code), Polymorphism (many forms). JavaScript is prototype-based but also supports classical OOP patterns.",
        example: "// Object literal (basic object)\nlet user = {\n  name: 'John',\n  greet() {\n    return `Hello, I'm ${this.name}`;\n  }\n};\n\n// Factory function\nfunction createUser(name, age) {\n  return {\n    name,\n    age,\n    greet() {\n      return `Hello, I'm ${this.name}`;\n    }\n  };\n}\n\n// Constructor function (pre-ES6)\nfunction User(name, age) {\n  this.name = name;\n  this.age = age;\n}\nUser.prototype.greet = function() {\n  return `Hello, I'm ${this.name}`;\n};\n\n// ES6 Class (modern)\nclass Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  greet() {\n    return `Hello, I'm ${this.name}`;\n  }\n  \n  static createAnonymous() {\n    return new Person('Anonymous', 0);\n  }\n}\n\nlet john = new Person('John', 25);\nconsole.log(john.greet()); // Hello, I'm John",
        output: "Objects created with properties and methods",
        note: "JavaScript is prototype-based. ES6 classes are syntactic sugar over prototypes."
      },
      {
        question: "What are the four pillars of OOP? Explain with examples.",
        answer: "Four pillars: 1) Encapsulation: bundling data and methods within an object, hiding internal state. 2) Abstraction: hiding complex implementation details, exposing simple interface. 3) Inheritance: creating new classes based on existing ones, reusing code. 4) Polymorphism: same method name, different implementations in different classes.",
        example: "// 1. ENCAPSULATION - hiding internal data\nclass BankAccount {\n  #balance = 0;  // private field (ES2022)\n  \n  deposit(amount) {\n    if(amount > 0) this.#balance += amount;\n    return this;\n  }\n  \n  getBalance() {\n    return this.#balance;\n  }\n}\n\nlet account = new BankAccount();\naccount.deposit(100);\nconsole.log(account.getBalance()); // 100\n// console.log(account.#balance); // Error! private\n\n// 2. ABSTRACTION - hiding complexity\nclass CoffeeMachine {\n  #waterAmount = 0;\n  \n  #boilWater() {\n    console.log('Boiling water...');\n  }\n  \n  makeCoffee() {\n    this.#boilWater();\n    console.log('Making coffee...');\n    return 'Coffee ready!';\n  }\n}\n\nlet machine = new CoffeeMachine();\nconsole.log(machine.makeCoffee()); // User only calls makeCoffee()\n\n// 3. INHERITANCE - reusing code\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  speak() {\n    console.log(`${this.name} makes a sound`);\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    console.log(`${this.name} barks`);\n  }\n  \n  wagTail() {\n    console.log(`${this.name} wags tail`);\n  }\n}\n\nlet dog = new Dog('Buddy');\ndog.speak(); // Buddy barks\ndog.wagTail(); // Buddy wags tail\n\n// 4. POLYMORPHISM - same method, different behavior\nclass Bird {\n  fly() {\n    return 'Flying high';\n  }\n}\n\nclass Penguin extends Bird {\n  fly() {\n    return 'Cannot fly, but swims';\n  }\n}\n\nclass Eagle extends Bird {\n  fly() {\n    return 'Soaring in sky';\n  }\n}\n\nlet birds = [new Bird(), new Penguin(), new Eagle()];\nbirds.forEach(b => console.log(b.fly()));\n// Flying high\n// Cannot fly, but swims\n// Soaring in sky",
        output: "Encapsulation hides data, abstraction hides complexity, inheritance reuses code, polymorphism provides multiple forms.",
        note: "All four pillars are implemented in JavaScript via classes and prototypes."
      },
      {
        question: "What is the difference between classical inheritance and prototypal inheritance?",
        answer: "Classical inheritance (classes) uses blueprints to create objects. Classes inherit from other classes. Prototypal inheritance uses objects to inherit directly from other objects via prototypes. JavaScript supports both: ES6 classes are syntactic sugar over prototypes. Classical is more familiar for Java/C# developers. Prototypal is more flexible and memory-efficient. prototypal allows adding methods at runtime.",
        example: "// Classical inheritance (using classes)\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log(`${this.name} speaks`);\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    console.log(`${this.name} barks`);\n  }\n}\n\nlet dog = new Dog('Buddy');\ndog.speak(); // Buddy barks\n\n// Prototypal inheritance (without classes)\nlet animal = {\n  init(name) {\n    this.name = name;\n    return this;\n  },\n  speak() {\n    console.log(`${this.name} speaks`);\n  }\n};\n\nlet dogProto = Object.create(animal);\ndogProto.speak = function() {\n  console.log(`${this.name} barks`);\n};\n\nlet dog2 = Object.create(dogProto).init('Buddy');\ndog2.speak(); // Buddy barks\n\n// Dynamic inheritance - can change at runtime (prototypal advantage)\nlet car = { wheels: 4 };\nlet electricCar = { battery: '100kWh' };\nObject.setPrototypeOf(electricCar, car);\nconsole.log(electricCar.wheels); // 4 (inherited)\n\n// Classical - cannot change inheritance at runtime\n// dog.__proto__ = {}; // Works but not recommended\n\n// Object.create() for prototypal inheritance\nlet parent = { name: 'Parent', greet() { return `Hello from ${this.name}`; } };\nlet child = Object.create(parent);\nchild.name = 'Child';\nconsole.log(child.greet()); // Hello from Child\n\n// Multiple inheritance via mixins (prototypal)\nlet flyable = { fly() { return 'Flying'; } };\nlet swimable = { swim() { return 'Swimming'; } };\nlet duck = { ...flyable, ...swimable };\nconsole.log(duck.fly()); // Flying",
        output: "Classical uses class blueprints, prototypal uses object-to-object inheritance.",
        note: "ES6 classes are preferred for classical OOP, Object.create() for prototypal."
      },
      {
        question: "What is the `prototype` property in JavaScript?",
        answer: "Every JavaScript function has a prototype property, which is an object used when the function is used as a constructor with 'new'. The prototype property is NOT the prototype of the function itself, but the prototype for objects created by that constructor. All instances share the prototype object, saving memory. The __proto__ property (deprecated) or Object.getPrototypeOf() accesses the actual prototype.",
        example: "function Person(name) {\n  this.name = name;\n}\n\n// Adding method to prototype (shared across instances)\nPerson.prototype.greet = function() {\n  return `Hello, I'm ${this.name}`;\n};\n\nlet john = new Person('John');\nlet jane = new Person('Jane');\n\nconsole.log(john.greet()); // Hello, I'm John\nconsole.log(jane.greet()); // Hello, I'm Jane\nconsole.log(john.greet === jane.greet); // true (shared)\n\n// Prototype chain\nconsole.log(john.__proto__ === Person.prototype); // true\nconsole.log(Person.prototype.__proto__ === Object.prototype); // true\nconsole.log(Object.prototype.__proto__); // null\n\n// instanceof operator\nconsole.log(john instanceof Person); // true\nconsole.log(john instanceof Object); // true\n\n// Adding properties to prototype affects all instances\nPerson.prototype.species = 'Human';\nconsole.log(john.species); // Human\nconsole.log(jane.species); // Human\n\n// Shadowing prototype property\njohn.species = 'Alien';\nconsole.log(john.species); // Alien (own property)\nconsole.log(jane.species); // Human (prototype property)\n\n// Checking own vs prototype properties\nconsole.log(john.hasOwnProperty('name')); // true\nconsole.log(john.hasOwnProperty('greet')); // false\nconsole.log('greet' in john); // true (from prototype)\n\n// Modern ways to access prototype\nconsole.log(Object.getPrototypeOf(john) === Person.prototype); // true\nconsole.log(Reflect.getPrototypeOf(john) === Person.prototype); // true\n\n// Setting prototype\nObject.setPrototypeOf(john, {});",
        output: "prototype is an object shared by all instances created by a constructor function.",
        note: "Use Object.getPrototypeOf() instead of __proto__ for accessing prototype."
      },
      {
        question: "What is prototypal inheritance chain?",
        answer: "Prototypal inheritance chain is the linking of objects through their prototypes. When you access a property on an object, JavaScript looks for it on the object itself, then on its prototype, then on prototype's prototype, until it finds it or reaches null (end of chain). This allows objects to inherit properties and methods from other objects. The chain ends at Object.prototype which has null as its prototype.",
        example: "// Creating prototype chain\nlet animal = {\n  eat() {\n    console.log('Eating...');\n  }\n};\n\nlet dog = Object.create(animal);\ndog.bark = function() {\n  console.log('Barking...');\n};\n\nlet puppy = Object.create(dog);\npuppy.play = function() {\n  console.log('Playing...');\n};\n\n// Property lookup follows chain\npuppy.play(); // Playing... (found on puppy)\npuppy.bark(); // Barking... (found on dog)\npuppy.eat();  // Eating... (found on animal)\n\n// The chain visually\nconsole.log(Object.getPrototypeOf(puppy) === dog);      // true\nconsole.log(Object.getPrototypeOf(dog) === animal);     // true\nconsole.log(Object.getPrototypeOf(animal) === Object.prototype); // true\nconsole.log(Object.getPrototypeOf(Object.prototype));   // null (end)\n\n// Method overriding\npuppy.bark = function() {\n  console.log('Puppy yapping...');\n};\npuppy.bark(); // Puppy yapping... (own property overrides prototype)\n\n// Property shadowing\npuppy.name = 'Buddy';\ndog.name = 'Parent';\nconsole.log(puppy.name); // Buddy (own property, not parent's)\n\n// instanceof checks prototype chain\nconsole.log(puppy instanceof Object); // true\nconsole.log(puppy instanceof animal); // Error (animal not constructor)\n\n// Constructor-based chain\nfunction Animal() {}\nfunction Dog() {}\nfunction Puppy() {}\n\nDog.prototype = Object.create(Animal.prototype);\nPuppy.prototype = Object.create(Dog.prototype);\n\nlet myPuppy = new Puppy();\nconsole.log(myPuppy instanceof Puppy); // true\nconsole.log(myPuppy instanceof Dog);   // true\nconsole.log(myPuppy instanceof Animal); // true\n\n// isPrototypeOf()\nconsole.log(animal.isPrototypeOf(puppy)); // true",
        output: "Objects inherit from other objects through prototype links, forming a chain.",
        note: "The prototype chain stops at Object.prototype which has null as its prototype."
      },
      {
        question: "What is the difference between `__proto__` and `prototype`?",
        answer: "__proto__ is an actual property that points to an object's prototype (used for inheritance). It exists on all objects. prototype is a property that exists only on functions (constructors). It defines what prototype new instances will have. __proto__ is deprecated in favor of Object.getPrototypeOf(). prototype is used when defining inheritance for constructors.",
        example: "function Person(name) {\n  this.name = name;\n}\n\n// prototype property on constructor function\nconsole.log(typeof Person.prototype); // 'object'\nconsole.log(Person.prototype.constructor === Person); // true\n\n// Adding to prototype (affects all instances)\nPerson.prototype.greet = function() {\n  return `Hello, I'm ${this.name}`;\n};\n\nlet john = new Person('John');\n\n// __proto__ (deprecated) points to prototype\nconsole.log(john.__proto__ === Person.prototype); // true\nconsole.log(john.__proto__.greet === john.greet); // true\n\n// Modern way\nconsole.log(Object.getPrototypeOf(john) === Person.prototype); // true\n\n// Object without constructor\nlet obj = { name: 'John' };\nconsole.log(obj.prototype); // undefined (no prototype property)\nconsole.log(obj.__proto__); // { ... } (has __proto__)\nconsole.log(Object.getPrototypeOf(obj)); // { ... }\n\n// Setting prototype\nlet animal = { eat() {} };\nlet dog = { bark() {} };\nObject.setPrototypeOf(dog, animal);\n\n// Difference summary\n// prototype: Exists on constructor functions, used when using 'new'\n// __proto__: Exists on all objects, points to actual prototype\n\n// Function vs Instance\nfunction MyClass() {}\nlet instance = new MyClass();\n\nconsole.log(MyClass.prototype);     // { constructor: MyClass }\nconsole.log(instance.prototype);    // undefined (instances don't have prototype)\nconsole.log(instance.__proto__);    // MyClass.prototype\nconsole.log(Object.getPrototypeOf(instance)); // MyClass.prototype",
        output: "prototype is on functions, __proto__ is on objects (deprecated).",
        note: "Never use __proto__ directly. Use Object.getPrototypeOf() and Object.setPrototypeOf()."
      },
      {
        question: "What is the difference between `Object.create()` and `new` operator?",
        answer: "Object.create() creates a new object with specified prototype object. It doesn't run any constructor code. 'new' operator creates object using constructor function, runs the constructor code, and sets prototype to constructor's prototype. Object.create() is more flexible for prototypal inheritance without constructors. 'new' is for classical constructor pattern.",
        example: "// Object.create() - pure prototypal\nlet animal = {\n  eat() { console.log('Eating'); },\n  init(name) { this.name = name; return this; }\n};\n\nlet dog = Object.create(animal);\ndog.bark = function() { console.log('Barking'); };\nlet puppy = Object.create(dog, {\n  color: { value: 'brown', writable: true }\n});\n\nconsole.log(Object.getPrototypeOf(puppy) === dog); // true\n\n// 'new' operator - classical\nfunction Animal(name) {\n  this.name = name;\n}\nAnimal.prototype.eat = function() { console.log('Eating'); };\n\nlet myAnimal = new Animal('Buddy');\nconsole.log(myAnimal.name); // Buddy\n\n// Comparison\n// Object.create\nlet obj1 = Object.create(null); // No prototype chain\nconsole.log(Object.getPrototypeOf(obj1)); // null\n\n// 'new'\nfunction Empty() {}\nlet obj2 = new Empty();\nconsole.log(Object.getPrototypeOf(obj2) === Empty.prototype); // true\n\n// Object.create with null (no prototypal inheritance)\nlet noProto = Object.create(null);\nnoProto.key = 'value';\nconsole.log(noProto.toString); // undefined (no Object.prototype)\n\n// Object.create polyfill\nif(!Object.create) {\n  Object.create = function(proto) {\n    function F() {}\n    F.prototype = proto;\n    return new F();\n  };\n}\n\n// Performance\nconsole.time('Object.create');\nfor(let i = 0; i < 1000000; i++) {\n  Object.create(animal);\n}\nconsole.timeEnd('Object.create');\n\nconsole.time('new');\nfunction Temp() {}\nfor(let i = 0; i < 1000000; i++) {\n  new Temp();\n}\nconsole.timeEnd('new'); // Usually faster",
        output: "Object.create() sets prototype directly. 'new' runs constructor and sets prototype.",
        note: "Use Object.create() for prototypal inheritance, 'new' for classical OOP with constructors."
      },
      {
        question: "What are ES6 classes? How do they differ from constructor functions?",
        answer: "ES6 classes are syntactic sugar over constructor functions and prototypes. They provide a cleaner, more familiar syntax for classical OOP. Key differences: class declarations are not hoisted (unlike function declarations), class body is always in strict mode, methods are non-enumerable, classes can have static methods, getters/setters, and private fields (#). Classes also support extends for inheritance and super for calling parent.",
        example: "// Constructor function (old way)\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.greet = function() {\n  return `Hello, I'm ${this.name}`;\n};\nPerson.species = 'Human'; // Static property\n\n// ES6 Class (new way)\nclass Person {\n  #privateField = 'secret'; // Private field (ES2022)\n  static species = 'Human'; // Static property\n  \n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  // Instance method (non-enumerable)\n  greet() {\n    return `Hello, I'm ${this.name}`;\n  }\n  \n  // Getter\n  get birthYear() {\n    return new Date().getFullYear() - this.age;\n  }\n  \n  // Setter\n  set birthYear(year) {\n    this.age = new Date().getFullYear() - year;\n  }\n  \n  // Static method\n  static createAnonymous() {\n    return new Person('Anonymous', 0);\n  }\n  \n  // Private method\n  #validateAge() {\n    return this.age > 0;\n  }\n}\n\n// Inheritance\nclass Student extends Person {\n  constructor(name, age, grade) {\n    super(name, age); // Call parent constructor\n    this.grade = grade;\n  }\n  \n  study() {\n    return `${this.name} is studying`;\n  }\n  \n  // Override method\n  greet() {\n    return `${super.greet()} and I'm in grade ${this.grade}`;\n  }\n}\n\nlet student = new Student('John', 18, 'A');\nconsole.log(student.greet()); // Hello, I'm John and I'm in grade A\nconsole.log(student.birthYear); // ~2006\n\n// Class expression\nlet Animal = class {\n  constructor(name) { this.name = name; }\n};\n\n// Class is not hoisted\n// const animal = new Animal(); // Error if before class definition\n\n// Methods are non-enumerable\nconsole.log(Object.keys(Person.prototype)); // [] (methods not enumerable)",
        output: "Classes provide cleaner syntax for classical OOP with features like private fields, static methods.",
        note: "ES6 classes are syntactic sugar but add features like private fields and static blocks."
      },
      {
        question: "What are private fields in JavaScript classes?",
        answer: "Private fields (ES2022) are properties that are only accessible within the class itself. They are declared with # prefix. Private fields cannot be accessed from outside the class, even by subclasses. This provides true encapsulation. Private methods also work similarly. Before ES2022, closures were used to simulate privacy. Private fields are harder than TypeScript's private (which is compile-time only).",
        example: "class BankAccount {\n  #balance = 0;        // Private field\n  #accountNumber;      // Private field declaration\n  #transactions = [];  // Private array\n  \n  constructor(owner, initialBalance) {\n    this.owner = owner;           // Public field\n    this.#accountNumber = this.#generateAccountNumber();\n    this.#balance = initialBalance;\n  }\n  \n  // Private method\n  #generateAccountNumber() {\n    return Math.random().toString(36).slice(2);\n  }\n  \n  #logTransaction(type, amount) {\n    this.#transactions.push({ type, amount, date: new Date() });\n  }\n  \n  // Public methods to access private data\n  deposit(amount) {\n    if(amount > 0) {\n      this.#balance += amount;\n      this.#logTransaction('deposit', amount);\n    }\n    return this;\n  }\n  \n  withdraw(amount) {\n    if(amount <= this.#balance) {\n      this.#balance -= amount;\n      this.#logTransaction('withdraw', amount);\n    }\n    return this;\n  }\n  \n  getBalance() {\n    return this.#balance;\n  }\n  \n  getTransactions() {\n    return [...this.#transactions]; // Return copy\n  }\n}\n\nlet account = new BankAccount('John', 1000);\naccount.deposit(500);\nconsole.log(account.getBalance()); // 1500\n\n// Cannot access private fields\n// console.log(account.#balance); // SyntaxError\n// console.log(account.#generateAccountNumber()); // Error\n\n// Subclass cannot access parent's private fields\nclass SavingsAccount extends BankAccount {\n  addInterest() {\n    // this.#balance += interest; // Error! Cannot access private\n    // Must use public method\n    let balance = this.getBalance();\n    // ...\n  }\n}\n\n// Private methods are also private\nclass Example {\n  #privateMethod() { return 'secret'; }\n  publicMethod() { return this.#privateMethod(); }\n}\n\nlet ex = new Example();\nconsole.log(ex.publicMethod()); // 'secret'\n// console.log(ex.#privateMethod()); // Error\n\n// Private static fields (Class-level privacy)\nclass Config {\n  static #apiKey = 'abc123';\n  static getApiKey() { return this.#apiKey; }\n}\nconsole.log(Config.getApiKey()); // 'abc123'\n// console.log(Config.#apiKey); // Error",
        output: "Private fields are only accessible within the class, providing true encapsulation.",
        note: "Private fields are runtime-enforced (not just TypeScript compile-time). Use # prefix."
      },
      {
        question: "What is the `super` keyword in classes?",
        answer: "super keyword is used to call parent class's constructor, methods, and static methods. In constructor, super() must be called before using 'this'. In methods, super.methodName() calls parent method. super can also access parent's static methods. super() calls the parent constructor. Without super, 'this' is not initialized in derived class.",
        example: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  speak() {\n    console.log(`${this.name} makes a sound`);\n  }\n  \n  static create(name) {\n    return new this(name);\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);  // MUST call super before using this\n    this.breed = breed;\n  }\n  \n  speak() {\n    super.speak();  // Call parent method\n    console.log(`${this.name} barks`);\n  }\n  \n  static createDog(name, breed) {\n    const dog = super.create(name); // Call parent static method\n    dog.breed = breed;\n    return dog;\n  }\n}\n\nlet dog = new Dog('Buddy', 'Golden');\ndog.speak();\n// Buddy makes a sound\n// Buddy barks\n\n// super in object literals\nlet parent = {\n  greet() { return 'Hello from parent'; }\n};\n\nlet child = {\n  greet() {\n    return super.greet(); // super works in object methods too\n  }\n};\n\nObject.setPrototypeOf(child, parent);\nconsole.log(child.greet()); // Hello from parent\n\n// super in static methods\nclass Parent {\n  static staticMethod() {\n    return 'Parent static';\n  }\n}\n\nclass Child extends Parent {\n  static staticMethod() {\n    return super.staticMethod() + ' + Child static';\n  }\n}\n\nconsole.log(Child.staticMethod()); // Parent static + Child static\n\n// Error cases\n// class Bad extends Animal {\n//   constructor() {\n//     console.log(this); // Error! this not initialized before super\n//     super();\n//   }\n// }\n\n// super in arrow functions (can't use)\nclass Test {\n  method() {\n    const arrow = () => {\n      // super works because arrow inherits this\n      return super.toString();\n    };\n    return arrow();\n  }\n}",
        output: "super calls parent constructor/methods. super() must be called before using this.",
        note: "Always call super() in derived class constructor before accessing this."
      },
      {
        question: "What are static methods and properties in classes?",
        answer: "Static methods and properties belong to the class itself, not to instances. They are called on the class directly (ClassName.method()). Common use: utility functions, factory methods, constants, caching. Static properties can be initialized with values. Static methods cannot access instance properties (no 'this' binding to instance). They are inherited by subclasses.",
        example: "class MathUtils {\n  // Static property\n  static PI = 3.14159;\n  static E = 2.71828;\n  \n  // Static method\n  static add(a, b) {\n    return a + b;\n  }\n  \n  static multiply(a, b) {\n    return a * b;\n  }\n  \n  // Static factory method\n  static createPoint(x, y) {\n    return { x, y };\n  }\n  \n  // Static private\n  static #cache = new Map();\n  \n  static getCached(key) {\n    return this.#cache.get(key);\n  }\n  \n  static setCached(key, value) {\n    this.#cache.set(key, value);\n  }\n}\n\n// Calling static methods\nconsole.log(MathUtils.PI);        // 3.14159\nconsole.log(MathUtils.add(5, 3)); // 8\nconsole.log(MathUtils.createPoint(10, 20)); // { x: 10, y: 20 }\n\n// Static methods are inherited\nclass AdvancedMath extends MathUtils {\n  static power(a, b) {\n    return a ** b;\n  }\n}\n\nconsole.log(AdvancedMath.PI);        // 3.14159 (inherited)\nconsole.log(AdvancedMath.add(10, 5)); // 15\n\n// Static vs Instance\nclass Counter {\n  static count = 0;      // Shared across all instances\n  instanceCount = 0;     // Each instance has its own\n  \n  constructor() {\n    Counter.count++;\n    this.instanceCount++;\n  }\n  \n  static getTotalCount() {\n    return Counter.count;\n  }\n  \n  getInstanceCount() {\n    return this.instanceCount;\n  }\n}\n\nlet c1 = new Counter();\nlet c2 = new Counter();\nconsole.log(Counter.getTotalCount()); // 2 (shared)\nconsole.log(c1.getInstanceCount());    // 1 (own)\n\n// Use cases\nclass API {\n  static baseURL = 'https://api.example.com';\n  static headers = { 'Content-Type': 'application/json' };\n  \n  static async get(endpoint) {\n    const res = await fetch(this.baseURL + endpoint, { headers: this.headers });\n    return res.json();\n  }\n  \n  static async post(endpoint, data) {\n    const res = await fetch(this.baseURL + endpoint, {\n      method: 'POST',\n      headers: this.headers,\n      body: JSON.stringify(data)\n    });\n    return res.json();\n  }\n}\n\n// Usage\n// const users = await API.get('/users');",
        output: "Static members belong to class, not instances. Called on class directly.",
        note: "Use static for utility functions, constants, factory methods, and shared state."
      },
      {
        question: "What is method overriding and method overloading in JavaScript?",
        answer: "Method overriding is when a subclass provides its own implementation of a method already defined in parent class. JavaScript supports overriding via prototype chain or class inheritance. Method overloading (multiple methods with same name but different parameters) is not directly supported in JavaScript. Instead, use default parameters, rest parameters, or check arguments.length inside the method.",
        example: "// METHOD OVERRIDING\nclass Animal {\n  speak() {\n    return 'Animal sound';\n  }\n  \n  move() {\n    return 'Animal moves';\n  }\n}\n\nclass Dog extends Animal {\n  // Override speak method\n  speak() {\n    return 'Woof!';\n  }\n  \n  // Not overriding, extending\n  move() {\n    return super.move() + ' - Dog runs';\n  }\n}\n\nlet dog = new Dog();\nconsole.log(dog.speak()); // Woof! (overridden)\nconsole.log(dog.move());   // Animal moves - Dog runs\n\n// METHOD OVERLOADING (simulated)\nclass Calculator {\n  // Single method that handles different arguments\n  add(...args) {\n    if(args.length === 1) return args[0];\n    if(args.length === 2) return args[0] + args[1];\n    return args.reduce((a,b) => a + b, 0);\n  }\n  \n  // Using default parameters\n  multiply(a, b = 1, c = 1) {\n    return a * b * c;\n  }\n  \n  // Using type checking\n  process(value) {\n    if(typeof value === 'string') {\n      return value.toUpperCase();\n    } else if(typeof value === 'number') {\n      return value * 2;\n    } else if(Array.isArray(value)) {\n      return value.length;\n    }\n    return value;\n  }\n}\n\nlet calc = new Calculator();\nconsole.log(calc.add(5));        // 5\nconsole.log(calc.add(5, 3));     // 8\nconsole.log(calc.add(1, 2, 3, 4)); // 10\nconsole.log(calc.multiply(2));    // 2 (b,c default to 1)\nconsole.log(calc.multiply(2, 3)); // 6\nconsole.log(calc.process('hello')); // 'HELLO'\nconsole.log(calc.process(10));      // 20\n\n// Overriding in prototype chain\nfunction Parent() {}\nParent.prototype.method = function() { return 'Parent'; };\n\nfunction Child() {}\nChild.prototype = Object.create(Parent.prototype);\nChild.prototype.method = function() { return 'Child overriding parent'; };\n\nlet child = new Child();\nconsole.log(child.method()); // Child overriding parent\n\n// Overloading with rest parameters\nfunction format(formatString, ...args) {\n  return formatString.replace(/\\{(\\d+)\\}/g, (match, num) => {\n    return args[num] !== undefined ? args[num] : match;\n  });\n}\n\nconsole.log(format('Hello {0}, you are {1} years old', 'John', 25));\n// Hello John, you are 25 years old\n\n// Overriding getters/setters\nclass User {\n  get name() {\n    return this._name || 'Anonymous';\n  }\n  \n  set name(value) {\n    this._name = value.trim();\n  }\n}\n\nclass Admin extends User {\n  get name() {\n    return `Admin: ${super.name}`;\n  }\n}\n\nlet admin = new Admin();\nadmin.name = 'John';\nconsole.log(admin.name); // Admin: John",
        output: "JavaScript supports overriding (same method name, different implementation). Overloading simulated via argument checking.",
        note: "Use default parameters and argument checking to simulate method overloading."
      },
      {
        question: "What are getters and setters in JavaScript classes?",
        answer: "Getters and setters are special methods that allow defining properties that are computed or validated when accessed or modified. Getters are accessed like properties (no parentheses), setters are assigned like properties. They provide encapsulation for computed properties and validation. Create using 'get' and 'set' keywords. Can be used in object literals and classes.",
        example: "class Person {\n  constructor(firstName, lastName) {\n    this._firstName = firstName;\n    this._lastName = lastName;\n    this._age = 0;\n  }\n  \n  // Getter - computed property\n  get fullName() {\n    return `${this._firstName} ${this._lastName}`;\n  }\n  \n  // Setter - validates input\n  set fullName(value) {\n    const [first, last] = value.split(' ');\n    this._firstName = first;\n    this._lastName = last;\n  }\n  \n  // Getter with validation\n  get age() {\n    return this._age;\n  }\n  \n  // Setter with validation\n  set age(value) {\n    if(value < 0) throw new Error('Age cannot be negative');\n    if(value > 150) throw new Error('Age cannot exceed 150');\n    this._age = value;\n  }\n  \n  // Getter returning derived data\n  get canVote() {\n    return this._age >= 18;\n  }\n}\n\nlet person = new Person('John', 'Doe');\nconsole.log(person.fullName); // John Doe (looks like property)\nperson.fullName = 'Jane Smith';\nconsole.log(person.firstName); // (can access directly if needed)\n\nperson.age = 25;\nconsole.log(person.age);      // 25\nconsole.log(person.canVote);  // true\n\n// Getter/setter in object literals\nlet user = {\n  firstName: 'John',\n  lastName: 'Doe',\n  \n  get fullName() {\n    return `${this.firstName} ${this.lastName}`;\n  },\n  \n  set fullName(value) {\n    [this.firstName, this.lastName] = value.split(' ');\n  }\n};\n\nconsole.log(user.fullName); // John Doe\n\n// Computed getters\nclass Circle {\n  constructor(radius) {\n    this.radius = radius;\n  }\n  \n  get area() {\n    return Math.PI * this.radius ** 2;\n  }\n  \n  get circumference() {\n    return 2 * Math.PI * this.radius;\n  }\n  \n  get diameter() {\n    return this.radius * 2;\n  }\n}\n\nlet circle = new Circle(5);\nconsole.log(circle.area);          // 78.53981633974483\nconsole.log(circle.circumference); // 31.41592653589793\n\n// Private backing field (using #)\nclass Temperature {\n  #celsius = 0;\n  \n  get celsius() {\n    return this.#celsius;\n  }\n  \n  set celsius(value) {\n    if(value < -273.15) throw new Error('Below absolute zero');\n    this.#celsius = value;\n  }\n  \n  get fahrenheit() {\n    return (this.#celsius * 9/5) + 32;\n  }\n  \n  set fahrenheit(value) {\n    this.#celsius = (value - 32) * 5/9;\n  }\n}\n\nlet temp = new Temperature();\ntemp.celsius = 25;\nconsole.log(temp.fahrenheit); // 77\n\n// Getter/setter vs method\nclass Timer {\n  #startTime = 0;\n  \n  get elapsed() {  // Getter - no parentheses\n    return Date.now() - this.#startTime;\n  }\n  \n  start() {\n    this.#startTime = Date.now();\n  }\n}\n\nlet timer = new Timer();\ntimer.start();\nsetTimeout(() => {\n  console.log(timer.elapsed); // 1000 (no parentheses!)\n}, 1000);",
        output: "Getters/setters allow computed properties and input validation with property syntax.",
        note: "Use getters for derived/computed values, setters for validation and side effects."
      },
      {
        question: "What is class inheritance and how to implement it?",
        answer: "Class inheritance allows a class (child) to inherit properties and methods from another class (parent). In JavaScript, use 'extends' keyword for inheritance. Child class can override parent methods using same name. Use 'super' to call parent constructor and methods. JavaScript supports single inheritance (one parent), but multiple inheritance can be achieved via mixins.",
        example: "// Simple inheritance\nclass Vehicle {\n  constructor(make, model) {\n    this.make = make;\n    this.model = model;\n  }\n  \n  start() {\n    return `${this.make} ${this.model} engine started`;\n  }\n  \n  stop() {\n    return `${this.make} ${this.model} engine stopped`;\n  }\n}\n\nclass Car extends Vehicle {\n  constructor(make, model, doors) {\n    super(make, model); // Call parent constructor\n    this.doors = doors;\n  }\n  \n  // Override method\n  start() {\n    return `${super.start()} - Vroom Vroom!`;\n  }\n  \n  // New method\n  honk() {\n    return 'Beep beep!';\n  }\n}\n\nlet car = new Car('Toyota', 'Camry', 4);\nconsole.log(car.start()); // Toyota Camry engine started - Vroom Vroom!\nconsole.log(car.honk());  // Beep beep!\nconsole.log(car instanceof Car);     // true\nconsole.log(car instanceof Vehicle); // true\n\n// Inheritance chain\nclass ElectricCar extends Car {\n  constructor(make, model, doors, batteryCapacity) {\n    super(make, model, doors);\n    this.batteryCapacity = batteryCapacity;\n  }\n  \n  start() {\n    return `${super.start()} (Silent electric mode)`;\n  }\n  \n  charge() {\n    return `Charging battery...`;\n  }\n}\n\nlet tesla = new ElectricCar('Tesla', 'Model 3', 4, '75kWh');\nconsole.log(tesla.start()); // Toyota Camry engine started - Vroom Vroom! (Silent electric mode)\nconsole.log(tesla.charge()); // Charging battery...\n\n// Abstract class pattern (no official abstract, but can simulate)\nclass Shape {\n  constructor() {\n    if(this.constructor === Shape) {\n      throw new Error('Abstract class cannot be instantiated');\n    }\n  }\n  \n  area() {\n    throw new Error('Abstract method must be implemented');\n  }\n}\n\nclass Rectangle extends Shape {\n  constructor(width, height) {\n    super();\n    this.width = width;\n    this.height = height;\n  }\n  \n  area() {\n    return this.width * this.height;\n  }\n}\n\nlet rect = new Rectangle(10, 5);\nconsole.log(rect.area()); // 50\n\n// instanceof operator\nconsole.log(car instanceof Vehicle);          // true\nconsole.log(car instanceof Car);             // true\nconsole.log(car instanceof ElectricCar);     // false\nconsole.log(tesla instanceof ElectricCar);   // true\nconsole.log(tesla instanceof Car);           // true\nconsole.log(tesla instanceof Vehicle);       // true\n\n// Checking inheritance\nconsole.log(Object.getPrototypeOf(Car) === Vehicle); // true (class inheritance)",
        output: "Classes inherit properties and methods using 'extends' keyword.",
        note: "JavaScript classes support single inheritance. Use super() to call parent constructor."
      },
      {
        question: "What is method chaining and how to implement it?",
        answer: "Method chaining is a technique where methods return the object instance (this), allowing multiple methods to be called in sequence on the same object. This creates fluent interfaces. Common in jQuery, lodash, and many libraries. To implement, each method that changes state returns this. Method chaining improves readability and reduces code repetition.",
        example: "// Basic method chaining\nclass Calculator {\n  constructor(value = 0) {\n    this.value = value;\n  }\n  \n  add(num) {\n    this.value += num;\n    return this;  // Return instance for chaining\n  }\n  \n  subtract(num) {\n    this.value -= num;\n    return this;\n  }\n  \n  multiply(num) {\n    this.value *= num;\n    return this;\n  }\n  \n  divide(num) {\n    this.value /= num;\n    return this;\n  }\n  \n  getValue() {\n    return this.value;\n  }\n}\n\nlet result = new Calculator(10)\n  .add(5)\n  .multiply(2)\n  .subtract(3)\n  .divide(4)\n  .getValue();\n\nconsole.log(result); // ((10+5)*2-3)/4 = 5.5\n\n// String builder\nclass StringBuilder {\n  constructor() {\n    this.parts = [];\n  }\n  \n  append(text) {\n    this.parts.push(text);\n    return this;\n  }\n  \n  appendLine(text) {\n    this.parts.push(text, '\\n');\n    return this;\n  }\n  \n  indent(level = 1) {\n    this.parts.push('  '.repeat(level));\n    return this;\n  }\n  \n  clear() {\n    this.parts = [];\n    return this;\n  }\n  \n  toString() {\n    return this.parts.join('');\n  }\n}\n\nlet html = new StringBuilder()\n  .append('<div>')\n  .indent()\n  .appendLine('<h1>Hello</h1>')\n  .indent()\n  .appendLine('<p>World</p>')\n  .append('</div>')\n  .toString();\n\nconsole.log(html);\n\n// Query builder (database-like)\nclass QueryBuilder {\n  constructor() {\n    this.query = { select: [], from: '', where: [], orderBy: [] };\n  }\n  \n  select(...fields) {\n    this.query.select = fields;\n    return this;\n  }\n  \n  from(table) {\n    this.query.from = table;\n    return this;\n  }\n  \n  where(condition) {\n    this.query.where.push(condition);\n    return this;\n  }\n  \n  orderBy(field, direction = 'ASC') {\n    this.query.orderBy.push({ field, direction });\n    return this;\n  }\n  \n  build() {\n    let sql = `SELECT ${this.query.select.join(', ')} `;\n    sql += `FROM ${this.query.from} `;\n    if(this.query.where.length) {\n      sql += `WHERE ${this.query.where.join(' AND ')} `;\n    }\n    if(this.query.orderBy.length) {\n      sql += `ORDER BY ${this.query.orderBy.map(o => `${o.field} ${o.direction}`).join(', ')}`;\n    }\n    return sql;\n  }\n}\n\nlet query = new QueryBuilder()\n  .select('id', 'name', 'email')\n  .from('users')\n  .where('age > 18')\n  .where('active = true')\n  .orderBy('name', 'ASC')\n  .build();\n\nconsole.log(query); \n// SELECT id, name, email FROM users WHERE age > 18 AND active = true ORDER BY name ASC\n\n// DOM element builder\nclass ElementBuilder {\n  constructor(tag) {\n    this.element = document.createElement(tag);\n  }\n  \n  attr(name, value) {\n    this.element.setAttribute(name, value);\n    return this;\n  }\n  \n  text(content) {\n    this.element.textContent = content;\n    return this;\n  }\n  \n  html(content) {\n    this.element.innerHTML = content;\n    return this;\n  }\n  \n  class(className) {\n    this.element.classList.add(className);\n    return this;\n  }\n  \n  on(event, handler) {\n    this.element.addEventListener(event, handler);\n    return this;\n  }\n  \n  appendTo(parent) {\n    parent.appendChild(this.element);\n    return this;\n  }\n}\n\n// Usage\n// new ElementBuilder('div')\n//   .class('container')\n//   .attr('id', 'main')\n//   .html('<h1>Hello</h1>')\n//   .on('click', () => console.log('Clicked'))\n//   .appendTo(document.body);",
        output: "Method chaining allows multiple method calls in sequence on same object.",
        note: "Return 'this' in methods that modify object state to enable chaining."
      }
    ]
  };
