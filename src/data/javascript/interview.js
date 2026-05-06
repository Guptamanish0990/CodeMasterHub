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
    }
  ]
};
