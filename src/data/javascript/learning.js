// /data/javascript/learning.js - COMPLETE VERSION (180+ Topics)

export const learning = {
  basic: {
    title: "🌱 JavaScript Basics - Complete Beginner's Guide",
    description: "JavaScript is the programming language of the web. It makes websites interactive - buttons that work, forms that validate, animations, games, and much more. This guide covers everything from basics to advanced.",
    
    topics: [
      // ==================== SECTION 1: JAVASCRIPT BASICS (1-7) ====================
      {
        name: "1. What is JavaScript",
        description: "JavaScript is a client-side scripting language that runs in web browsers. It adds interactivity to websites - handling clicks, validating forms, creating animations, updating content without page reload. It's the programming language of the web.",
        code: "console.log('Hello World!');\nalert('Welcome to JavaScript!');\nlet button = document.querySelector('button');\nbutton?.addEventListener('click', () => {\n  console.log('Button clicked!');\n});",
        simpleMeaning: "JavaScript makes websites interactive and dynamic.",
        output: "Hello World! (in console)\nAlert popup shows 'Welcome to JavaScript!'",
        note: "JavaScript runs in browser, no installation needed. Open console (F12) to test."
      },
      {
        name: "2. JS History & Versions",
        description: "JS created in 1995 by Brendan Eich. ES6 (2015) was major update with let/const, arrows, classes, modules. ES2020 added optional chaining, nullish coalescing. ES2023 added findLast, toSorted, toReversed. Regular updates every year.",
        code: "// ES6 (2015)\nlet name = 'John';\nconst greet = () => console.log('Hello');\nclass Person {}\n// ES2020\nconst value = obj?.prop ?? 'default';\n// ES2023\nconst arr = [1,2,3];\nconst newArr = arr.toReversed();",
        simpleMeaning: "JavaScript keeps getting new features every year. ES6 (2015) was the biggest update.",
        output: "Modern JS code works in all recent browsers.",
        note: "Check caniuse.com for browser support. Babel can convert modern JS to older JS."
      },
      {
        name: "3. Setting Up JS",
        description: "Three ways to run JavaScript: 1) Browser console (F12 > Console) for testing. 2) Inline script in HTML (<script> tag). 3) External .js file linked to HTML. Node.js for server-side JS. VS Code is best editor with live server.",
        code: "// 1. Browser Console\nconsole.log('Test in F12 console');\n// 2. Inline HTML\n<script> console.log('Inside HTML'); </script>\n// 3. External file\n<script src=\"app.js\"></script>\n// 4. Node.js\n// console.log('Run with: node app.js')",
        simpleMeaning: "You can run JS in browser console, HTML script tag, or external file.",
        output: "Code runs and outputs to console or affects webpage.",
        note: "Use browser console for quick testing. Use external JS files for projects."
      },
      {
        name: "4. JS Syntax",
        description: "JavaScript syntax rules: statements end with semicolon (optional but recommended). Code inside curly braces {}. Case-sensitive (myVar ≠ myvar). Comments for explanations. Whitespace ignored. Use camelCase for variables.",
        code: "// Statements end with semicolon\nlet x = 10;\nlet y = 20;\n// Curly braces for blocks\nif (x > 5) {\n  console.log('x is greater');\n}\n// Case-sensitive\nlet myVar = 10;\nlet myvar = 20;\n// camelCase convention\nlet firstName = 'John';\nlet userAge = 25;",
        simpleMeaning: "JS syntax rules: semicolons end statements, {} group code, case-sensitive, camelCase naming.",
        output: "x is greater",
        note: "Semicolons are optional but recommended. Use camelCase for variable names."
      },
      {
        name: "5. console.log()",
        description: "console.log() outputs messages to browser developer console. Used for debugging, testing, checking values. Press F12 to open console. Also: console.error(), console.warn(), console.table() for objects, console.time() for performance.",
        code: "// Basic logging\nconsole.log('Hello World');\nconsole.log(42);\nconsole.log(true);\n// Multiple values\nconsole.log('Value:', 100, 'items');\n// Different types\nconsole.error('Error message');\nconsole.warn('Warning message');\n// Objects as table\nconst user = { name: 'John', age: 25 };\nconsole.table(user);\n// Performance timing\nconsole.time('loop');\nfor(let i = 0; i < 100000; i++) {}\nconsole.timeEnd('loop');",
        simpleMeaning: "console.log() prints messages to browser console for debugging.",
        output: "Hello World\n42\ntrue\nError message\nWarning message\nloop: 0.5ms",
        note: "F12 opens console. Use console.table for objects, console.time for performance."
      },
      {
        name: "6. Comments",
        description: "Comments are ignored by JavaScript. Use for explanations, documentation, or disabling code. Single-line //, multi-line /* */. Comments help others (and yourself) understand code.",
        code: "// This is a single-line comment\nlet x = 10;  // Comment after code\n/* This is a\n   multi-line comment\n   spanning multiple lines */\nlet y = 20;\n/*\n * Function to add numbers\n * @param {number} a\n * @param {number} b\n * @returns {number}\n */\nfunction add(a, b) { return a + b; }",
        simpleMeaning: "Comments explain code. Single-line //, multi-line /* */. Comments don't run.",
        output: "(Nothing - comments are ignored by JavaScript)",
        note: "Use comments to explain 'why', not 'what'. JSDoc comments for documentation."
      },
      {
        name: "7. Strict Mode",
        description: "Strict mode catches common coding mistakes and prevents unsafe actions. 'use strict' at top of file or function. It makes debugging easier and JavaScript more secure. Always use strict mode.",
        code: "// File-level strict mode\n'use strict';\nx = 10;  // Error! x not declared\n// Function-level strict mode\nfunction myFunction() {\n  'use strict';\n  y = 20;  // Error!\n}\n// Strict mode prevents:\n// - Using undeclared variables\n// - Deleting variables\n// - Duplicate parameter names\n// - Using reserved keywords as names",
        simpleMeaning: "Strict mode catches errors and makes JS safer. Always use 'use strict'.",
        output: "Error: x is not defined",
        note: "Always use 'use strict' at top of your files. Modern JS modules have strict mode by default."
      },
      
      // ==================== SECTION 2: VARIABLES & DATA TYPES (8-27) ====================
      {
        name: "8. var Keyword",
        description: "var is the old way to declare variables (pre-2015). Function-scoped, not block-scoped. Hoisted and initialized as undefined. Can be redeclared. Avoid var in modern JavaScript - use let/const instead.",
        code: "var name = 'John';\nconsole.log(name);\nvar name = 'Jane';\nconsole.log(name);\nfunction test() {\n  var x = 10;\n  if(true) {\n    var y = 20;\n  }\n  console.log(x, y);\n}\ntest();\nconsole.log(hoistedVar);\nvar hoistedVar = 5;\nconsole.log(hoistedVar);",
        simpleMeaning: "var is old-style variable declaration. Function-scoped, can be redeclared, hoisted. Avoid using.",
        output: "John\nJane\n10 20\nundefined\n5",
        note: "Don't use var in modern JavaScript. Use let for changing values, const for constants."
      },
      {
        name: "9. let Keyword",
        description: "let declares block-scoped variables (ES6+). Can be reassigned. Not hoisted (Temporal Dead Zone). Cannot be redeclared in same scope. Use let when value needs to change. Preferred over var.",
        code: "let name = 'John';\nconsole.log(name);\nname = 'Jane';\nconsole.log(name);\n// let name = 'Bob';  // Error!\nif(true) {\n  let blockVar = 'Inside block';\n  console.log(blockVar);\n}\n// console.log(blockVar);  // Error!\nfor(let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
        simpleMeaning: "let declares block-scoped variable that can be changed later. Cannot be redeclared.",
        output: "John\nJane\nInside block\n0\n1\n2",
        note: "Use let when variable value will change (counters, accumulators). Never use var."
      },
      {
        name: "10. const Keyword",
        description: "const declares block-scoped constants (ES6+). Cannot be reassigned after declaration. Must be initialized when declared. Object properties CAN change (const prevents reassignment, not object mutation). Use const by default.",
        code: "const PI = 3.14159;\nconsole.log(PI);\n// PI = 3.14;  // Error!\nconst user = { name: 'John', age: 25 };\nuser.age = 26;\n// user = {};  // Error!\nconst colors = ['red', 'blue'];\ncolors.push('green');\n// colors = [];  // Error!\nif(true) {\n  const temp = 'temporary';\n  console.log(temp);\n}",
        simpleMeaning: "const declares constant that cannot be reassigned. Must be initialized. Use by default.",
        output: "3.14159\ntemporary",
        note: "Always use const by default. Use let only when you need to reassign."
      },
      {
        name: "11. Variable Naming Rules",
        description: "Rules: can contain letters, digits, $, _; cannot start with digit; case-sensitive; cannot use reserved keywords. Best practices: use camelCase, descriptive names, start with letter, avoid $ and _.",
        code: "// Valid names\nlet firstName = 'John';\nlet _private = 'private';\nlet $price = 99.99;\nlet name1 = 'John';\nlet NAME = 'JOHN';\n// Invalid names (will error)\n// let 1stName = 'John';\n// let my-name = 'John';\n// let let = 'test';\n// Best practices\nlet userAge = 25;\nlet isLoggedIn = true;\nlet MAX_SIZE = 100;",
        simpleMeaning: "Variable names can have letters, numbers, $, _. Start with letter, use camelCase, be descriptive.",
        output: "Valid names work, invalid names cause errors.",
        note: "Use camelCase (firstName). Names should be descriptive but not too long (userAge, not ua)."
      },
      {
        name: "12. Hoisting",
        description: "Hoisting moves declarations to top of scope before execution. var hoisted as undefined, let/const hoisted but in TDZ, function declarations fully hoisted.",
        code: "console.log(myVar);\nvar myVar = 10;\nconsole.log(myVar);\n// console.log(myLet);  // ReferenceError!\nlet myLet = 20;\nsayHello('John');\nfunction sayHello(name) {\n  console.log(`Hello ${name}`);\n}\n// sayGoodbye('John');  // TypeError!\nconst sayGoodbye = function(name) {\n  console.log(`Goodbye ${name}`);\n};",
        simpleMeaning: "Hoisting moves declarations to top. var = undefined, let/const = TDZ, functions = fully hoisted.",
        output: "undefined\n10\nHello John",
        note: "Declare variables at top of scope. Use let/const to catch TDZ errors."
      },
      {
        name: "13. Temporal Dead Zone (TDZ)",
        description: "TDZ is period from entering scope until variable declaration. let and const variables are in TDZ and cannot be accessed. Access throws ReferenceError. Helps catch bugs. var doesn't have TDZ.",
        code: "{\n  // console.log(x);  // ReferenceError!\n  let x = 10;\n  console.log(x);\n}\n{\n  // console.log(y);  // ReferenceError!\n  const y = 20;\n  console.log(y);\n}\n{\n  console.log(z);\n  var z = 30;\n  console.log(z);\n}\ntypeof undeclaredVar;\nfunction test2(x = 5, t = x) {\n  console.log(x, t);\n}\ntest2();",
        simpleMeaning: "TDZ is period before let/const declaration where variable cannot be accessed.",
        output: "10\n20\nundefined\n30\n5 5",
        note: "Always declare variables at top of scope to avoid TDZ issues."
      },
      {
        name: "14. String",
        description: "String represents text data. Created with quotes: '', \"\", or backticks. Strings are immutable and zero-indexed. Methods return new strings. Where used? User names, messages, addresses, JSON data.",
        code: "let single = 'Hello';\nlet double = \"World\";\nlet template = `Hello ${single}`;\nconsole.log(single.length);\nconsole.log(single[0]);\nlet str = 'Hello';\nstr[0] = 'J';\nconsole.log(str);\nconsole.log(str.toUpperCase());\nconsole.log('  text  '.trim());\nconsole.log(str.includes('ell'));\nlet escaped = 'Don\\'t';\nlet name = 'John';\nlet age = 25;\nlet message = `Name: ${name}, Age: ${age + 1}`;\nconsole.log(message);",
        simpleMeaning: "String holds text. Can use quotes or backticks. Strings are immutable.",
        output: "5\nH\nHello\nHELLO\ntext\ntrue\nDon't\nName: John, Age: 26",
        note: "Use template literals (`string`) for variable interpolation and multi-line strings."
      },
      {
        name: "15. Number",
        description: "Number represents both integers and floating-point numbers. JavaScript uses 64-bit floating point. Special values: NaN, Infinity. Where used? Prices, ages, scores, counts, calculations.",
        code: "let integer = 42;\nlet decimal = 3.14;\nlet negative = -10;\nconsole.log(1 / 0);\nconsole.log(-1 / 0);\nconsole.log('abc' * 2);\nlet num = 123.456;\nconsole.log(num.toFixed(2));\nconsole.log(parseInt('123px'));\nconsole.log(parseFloat('12.34em'));\nconsole.log(Number('456'));\nconsole.log(isNaN(NaN));\nconsole.log(Number.MAX_SAFE_INTEGER);\nconsole.log(0.1 + 0.2);",
        simpleMeaning: "Number holds numbers (integers and decimals). Special values: NaN, Infinity.",
        output: "Infinity\n-Infinity\nNaN\n123.46\n123\n12.34\n456\ntrue\n9007199254740991\n0.30000000000000004",
        note: "Use isNaN() to check if value is NaN. Be careful with floating-point precision."
      },
      {
        name: "16. BigInt",
        description: "BigInt handles integers beyond safe limit (larger than 2⁵³-1). Created by appending 'n' or BigInt(). Cannot mix with regular numbers without conversion. Where used? Large IDs, timestamps, cryptography.",
        code: "let bigInt1 = 9007199254740991n;\nlet bigInt2 = BigInt(9007199254740991);\nconsole.log(Number.MAX_SAFE_INTEGER);\nlet huge = 9007199254740992n;\nconsole.log(10n + 20n);\nconsole.log(10n * 5n);\n// console.log(10n + 5);  // TypeError!\nlet result = 10n + BigInt(5);\nconsole.log(10n > 5);\nconsole.log(10n == 10);\nconsole.log(10n === 10);\nconsole.log(typeof 10n);",
        simpleMeaning: "BigInt stores very large integers (beyond safe limit). Add 'n' at the end.",
        output: "9007199254740991\n9007199254740992n\n30n\n50n\n15n\ntrue\ntrue\nfalse\nbigint",
        note: "Use BigInt for large numbers like timestamps, IDs. Cannot mix with Number without conversion."
      },
      {
        name: "17. Boolean",
        description: "Boolean represents true/false values. Used for conditions, flags, toggles. Truthy values become true in boolean context. Falsy values: false, 0, '', null, undefined, NaN. Where used? Login status, feature toggles, validation results.",
        code: "let isLoggedIn = true;\nlet hasPermission = false;\nconsole.log(isLoggedIn);\nconsole.log(hasPermission);\n// Truthy values\nconsole.log(Boolean(1));\nconsole.log(Boolean('hello'));\nconsole.log(Boolean([]));\n// Falsy values\nconsole.log(Boolean(0));\nconsole.log(Boolean(''));\nconsole.log(Boolean(null));\nconsole.log(Boolean(undefined));\nconsole.log(Boolean(NaN));\n// Comparison results\nlet isAdult = 18 >= 18;\nlet isMatch = 'hello' === 'hello';\nconsole.log(isAdult, isMatch);",
        simpleMeaning: "Boolean is true or false. Used for conditions and flags.",
        output: "true\nfalse\ntrue\ntrue\ntrue\nfalse\nfalse\nfalse\nfalse\nfalse\ntrue true",
        note: "Falsy values: 0, '', null, undefined, NaN, false. Everything else is truthy."
      },
      {
        name: "18. Undefined",
        description: "Undefined means variable declared but not assigned a value. JavaScript automatically sets undefined. Also returned from functions with no return. Check with typeof. Where used? Checking if variable exists, optional parameters.",
        code: "let x;\nconsole.log(x);\nlet user = { name: 'John' };\nconsole.log(user.age);\nfunction test() {}\nconsole.log(test());\nlet arr = [1, 2];\nconsole.log(arr[5]);\n// Checking undefined\nif (x === undefined) {\n  console.log('x is undefined');\n}\nconsole.log(typeof x);\nconsole.log(typeof undeclaredVar);\n// undefined vs null\nconsole.log(undefined == null);\nconsole.log(undefined === null);",
        simpleMeaning: "Undefined means variable exists but has no value (not set yet).",
        output: "undefined\nundefined\nundefined\nundefined\nx is undefined\nundefined\nundefined\ntrue\nfalse",
        note: "Undefined means the variable was never assigned. null means intentionally empty."
      },
      {
        name: "19. Null",
        description: "Null is intentional empty value. Developer sets null to indicate 'nothing'. typeof null returns 'object' (historical bug). Use null when you want to clear a value. Where used? Resetting variables, initializing empty references.",
        code: "let user = null;\nconsole.log(user);\nconsole.log(typeof user);\n// Null for resetting\nlet data = { name: 'John' };\ndata = null;\nconsole.log(data);\n// Null vs undefined\nlet a = null;\nlet b;\nconsole.log(a === b);\nconsole.log(a == b);\n// Checking for null\nif (user === null) {\n  console.log('No user data');\n}\n// API response\nlet apiResponse = null;\nif (apiResponse === null) {\n  console.log('Waiting for response');\n}",
        simpleMeaning: "Null is intentionally empty value set by developer. 'Nothing here'.",
        output: "null\nobject\nnull\nfalse\ntrue\nNo user data\nWaiting for response",
        note: "Use null to intentionally clear a value. undefined means not set, null means empty."
      },
      {
        name: "20. Symbol",
        description: "Symbol creates unique identifier. Every Symbol is unique. Used for object property keys to avoid name collisions. Not enumerable in for...in. Where used? Library internals, avoiding property name conflicts, well-known symbols (Symbol.iterator).",
        code: "let sym1 = Symbol('id');\nlet sym2 = Symbol('id');\nconsole.log(sym1 === sym2);\nconsole.log(typeof sym1);\n// Symbol as property key\nconst user = {\n  name: 'John',\n  [sym1]: 12345\n};\nconsole.log(user[sym1]);\nconsole.log(Object.keys(user));\nconsole.log(Object.getOwnPropertySymbols(user));\n// Well-known symbols\nlet arr = [1, 2, 3];\nlet iterator = arr[Symbol.iterator]();\nconsole.log(iterator.next());\n// Global symbols\nlet globalSym = Symbol.for('app.id');\nlet sameSym = Symbol.for('app.id');\nconsole.log(globalSym === sameSym);\nconsole.log(Symbol.keyFor(globalSym));",
        simpleMeaning: "Symbol creates unique identifiers. Every Symbol is different, even with same description.",
        output: "false\nsymbol\n12345\n['name']\n[ Symbol(id) ]\n{ value: 1, done: false }\ntrue\napp.id",
        note: "Symbols are great for unique property keys. Every Symbol() is unique."
      },
      {
        name: "21. Object",
        description: "Objects store collections of key-value pairs. Keys are strings or Symbols, values can be any type. Created with {}. Objects are mutable and passed by reference. Where used? User profiles, configuration, API responses.",
        code: "let user = {\n  name: 'John',\n  age: 25,\n  isActive: true,\n  greet: function() {\n    return `Hello, I'm ${this.name}`;\n  }\n};\nconsole.log(user.name);\nconsole.log(user['age']);\nconsole.log(user.greet());\nuser.city = 'NYC';\nuser['email'] = 'john@example.com';\ndelete user.isActive;\nconsole.log(user);\nconsole.log('name' in user);\nconsole.log(user.hasOwnProperty('age'));",
        simpleMeaning: "Objects store data in key-value pairs. Access with dot (.) or brackets ([]).",
        output: "John\n25\nHello, I'm John\n{ name: 'John', age: 25, greet: [Function: greet], city: 'NYC', email: 'john@example.com' }\ntrue\ntrue",
        note: "Objects are passed by reference. Use dot notation for valid identifiers, brackets for special keys."
      },
      {
        name: "22. Array",
        description: "Arrays store ordered lists of values. Zero-indexed, dynamic length. Can hold mixed types. Arrays are objects with special methods. Where used? Lists of items, collections, sequences.",
        code: "let fruits = ['Apple', 'Banana', 'Orange'];\nlet mixed = [1, 'text', true, null, { name: 'John' }];\nconsole.log(fruits[0]);\nconsole.log(fruits.length);\nfruits[1] = 'Blueberry';\nfruits[3] = 'Mango';\nconsole.log(fruits);\nfruits.push('Grape');\nfruits.pop();\nfruits.unshift('Kiwi');\nfruits.shift();\nconsole.log(fruits);\nconsole.log(Array.isArray(fruits));\nconsole.log(fruits instanceof Array);",
        simpleMeaning: "Arrays hold ordered lists of values. Access by index (starting at 0).",
        output: "Apple\n3\n['Apple', 'Blueberry', 'Orange', 'Mango']\n['Blueberry', 'Orange', 'Mango']\ntrue\ntrue",
        note: "Arrays are objects, so const arrays can be modified (elements can change)."
      },
      {
        name: "23. Function",
        description: "Functions are reusable blocks of code. Can take inputs (parameters) and return outputs. Functions are first-class citizens (can be assigned to variables, passed as arguments). Where used? Code reuse, callbacks, modules.",
        code: "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(5, 3));\nconst multiply = function(a, b) {\n  return a * b;\n};\nconsole.log(multiply(4, 5));\nconst greet = name => `Hello ${name}`;\nconsole.log(greet('John'));\nfunction greetUser(name = 'Guest') {\n  console.log(`Welcome ${name}`);\n}\ngreetUser('John');\ngreetUser();\nfunction getGrade(score) {\n  if(score >= 90) return 'A';\n  if(score >= 80) return 'B';\n  return 'C';\n}\nconsole.log(getGrade(85));",
        simpleMeaning: "Functions are reusable code blocks. Input through parameters, output with return.",
        output: "8\n20\nHello John\nWelcome John\nWelcome Guest\nB",
        note: "Use function declarations for hoisting, arrow functions for callbacks and preserving 'this'."
      },
      {
        name: "24. typeof Operator",
        description: "typeof returns string indicating data type. Useful for type checking. null returns 'object' (historical bug). function returns 'function'. typeof undeclared returns 'undefined' (safe).",
        code: "console.log(typeof 'hello');\nconsole.log(typeof 42);\nconsole.log(typeof true);\nconsole.log(typeof undefined);\nconsole.log(typeof null);\nconsole.log(typeof {});\nconsole.log(typeof []);\nconsole.log(typeof function(){});\nconsole.log(typeof Symbol());\nconsole.log(typeof 10n);\nconsole.log(typeof undeclaredVar);\nconsole.log(typeof typeof 42);",
        simpleMeaning: "typeof tells you the data type of a value.",
        output: "string\nnumber\nboolean\nundefined\nobject\nobject\nobject\nfunction\nsymbol\nbigint\nundefined\nstring",
        note: "typeof null returns 'object' (bug). Use Array.isArray() for arrays, null === null for null."
      },
      {
        name: "25. instanceof Operator",
        description: "instanceof checks if object is instance of a constructor (or class). Checks prototype chain. Used for custom types, arrays, dates, regex. Where used? Type checking for objects, inheritance verification.",
        code: "let arr = [1, 2, 3];\nconsole.log(arr instanceof Array);\nconsole.log(arr instanceof Object);\nlet date = new Date();\nconsole.log(date instanceof Date);\nconsole.log(date instanceof Object);\nlet regex = /hello/;\nconsole.log(regex instanceof RegExp);\nfunction Person(name) {\n  this.name = name;\n}\nlet john = new Person('John');\nconsole.log(john instanceof Person);\nconsole.log(john instanceof Object);\nlet num = 5;\nconsole.log(num instanceof Number);\nconsole.log('hello' instanceof String);\nclass Animal {}\nclass Dog extends Animal {}\nlet dog = new Dog();\nconsole.log(dog instanceof Dog);\nconsole.log(dog instanceof Animal);",
        simpleMeaning: "instanceof checks if an object is created from a specific class or constructor.",
        output: "true\ntrue\ntrue\ntrue\ntrue\ntrue\ntrue\ntrue\nfalse\nfalse\ntrue\ntrue",
        note: "instanceof works with prototype chain. For primitives, use typeof instead."
      },
      {
        name: "26. Type Conversion",
        description: "Explicit conversion of values from one type to another. Use String(), Number(), Boolean(), parseInt(), parseFloat(). Important for form inputs (always strings). Where used? Form data, API responses, calculations.",
        code: "// String conversion\nconsole.log(String(123));\nconsole.log(String(true));\nconsole.log((456).toString());\n// Number conversion\nconsole.log(Number('123'));\nconsole.log(Number('123px'));\nconsole.log(parseInt('123px'));\nconsole.log(parseFloat('12.34em'));\nconsole.log(+'789');\n// Boolean conversion\nconsole.log(Boolean(1));\nconsole.log(Boolean(0));\nconsole.log(Boolean('hello'));\nconsole.log(Boolean(''));\nconsole.log(!!'hello');\n// Array conversion\nconsole.log(String([1, 2, 3]));\n// Date conversion\nconsole.log(Number(new Date()));",
        simpleMeaning: "Type conversion = manually changing data type using functions like Number(), String().",
        output: "123\ntrue\n456\n123\nNaN\n123\n12.34\n789\ntrue\nfalse\ntrue\nfalse\ntrue\n1,2,3\n1705276800000",
        note: "Use parseInt() for integers, parseFloat() for decimals. Number() for exact conversion."
      },
      {
        name: "27. Type Coercion",
        description: "Coercion is automatic type conversion by JavaScript. Happens with operators (+, -, ==). Can cause bugs. Use explicit conversion to avoid surprises. Where used? String concatenation, loose equality, arithmetic.",
        code: "// String coercion\nconsole.log('5' + 3);\nconsole.log('5' + true);\n// Number coercion\nconsole.log('10' - 5);\nconsole.log('5' * '2');\nconsole.log('10' / '2');\nconsole.log('hello' - 1);\n// Boolean coercion\nconsole.log(Boolean(0));\nconsole.log(Boolean(''));\nif('hello') {\n  console.log('truthy');\n}\n// Loose equality coercion\nconsole.log(5 == '5');\nconsole.log(false == 0);\nconsole.log(null == undefined);\n// Comparison coercion\nconsole.log('10' > 5);\nconsole.log('apple' > 'banana');\n// Avoid coercion confusion\nconsole.log(5 === '5');\nconsole.log(false === 0);",
        simpleMeaning: "Type coercion = JavaScript automatically changes types during operations.",
        output: "53\n5true\n5\n10\n5\nNaN\nfalse\nfalse\ntruthy\ntrue\ntrue\ntrue\ntrue\nfalse\nfalse\nfalse",
        note: "Always use === and !== for comparisons to avoid unexpected coercion bugs."
      },
      
      // ==================== SECTION 3: OPERATORS (28-44) ====================
      {
        name: "28. Arithmetic Operators",
        description: "Basic math operations: + addition, - subtraction, * multiplication, / division, % remainder, ** exponentiation. Where used? Calculations, game scores, shopping cart totals, discounts.",
        code: "let a = 10, b = 3;\nconsole.log(a + b);\nconsole.log(a - b);\nconsole.log(a * b);\nconsole.log(a / b);\nconsole.log(a % b);\nconsole.log(a ** b);\nlet price = 100;\nlet discount = 20;\nlet final = price - (price * discount / 100);\nconsole.log(final);\nlet number = 7;\nif(number % 2 === 0) {\n  console.log('Even');\n} else {\n  console.log('Odd');\n}",
        simpleMeaning: "Arithmetic operators do math: + - * / for basics, % for remainders, ** for powers.",
        output: "13\n7\n30\n3.333...\n1\n1000\n80\nOdd",
        note: "Modulus (%) gives remainder. Use ** for exponentiation (2 ** 3 = 8)."
      },
      {
        name: "29. Increment/Decrement",
        description: "++ adds 1, -- subtracts 1. Pre-increment (++x) increments then returns value. Post-increment (x++) returns value then increments. Where used? Loop counters, game scores, iteration.",
        code: "let x = 5;\nconsole.log(x++);\nconsole.log(x);\nlet y = 5;\nconsole.log(++y);\nconsole.log(y);\nlet count = 0;\ncount++;\n++count;\nconsole.log(count);\nlet i = 0;\nconsole.log(i--);\nconsole.log(i);\nlet arr = [1, 2, 3];\nlet index = 0;\nwhile(index < arr.length) {\n  console.log(arr[index++]);\n}",
        simpleMeaning: "++ adds 1, -- subtracts 1. ++x increments first, x++ returns then increments.",
        output: "5\n6\n6\n6\n2\n0\n-1\n1\n2\n3",
        note: "Be careful with pre vs post - ++x returns new value, x++ returns old value."
      },
      {
        name: "30. Assignment Operators",
        description: "Assignment operators assign values to variables. = assigns, += adds and assigns, -= subtracts and assigns, *= multiplies and assigns, /= divides and assigns, %= modulus and assigns.",
        code: "let x = 10;\nconsole.log(x);\nx += 5;\nconsole.log(x);\nx -= 3;\nconsole.log(x);\nx *= 2;\nconsole.log(x);\nx /= 4;\nconsole.log(x);\nx %= 3;\nconsole.log(x);\nlet str = 'Hello';\nstr += ' World';\nconsole.log(str);\nlet num = 5;\nnum **= 2;\nconsole.log(num);\nlet total = 0;\ntotal += 25;\ntotal += 15;\ntotal += 10;\nconsole.log(total);",
        simpleMeaning: "Assignment operators do operation and assign in one step: +=, -=, *=, /=, %=.",
        output: "10\n15\n12\n24\n6\n0\nHello World\n25\n50",
        note: "Shorthand assignment makes code cleaner: total += 5 instead of total = total + 5."
      },
      {
        name: "31. Comparison Operators",
        description: "Compare values and return boolean. == loose equality (converts types), === strict equality (checks type), !=, !==, >, <, >=, <=. Where used? Age verification, password checks, sorting.",
        code: "console.log(5 == '5');\nconsole.log(5 === '5');\nconsole.log(5 != '5');\nconsole.log(5 !== '5');\nconsole.log(10 > 5);\nconsole.log(10 < 5);\nconsole.log(10 >= 10);\nconsole.log(10 <= 5);\nconsole.log('10' > 5);\nconsole.log('apple' > 'banana');\nlet age = 18;\nlet canVote = age >= 18;\nconsole.log(canVote);\nlet pass = 'secret123';\nlet correct = 'secret123';\nlet match = pass === correct;\nconsole.log(match);",
        simpleMeaning: "=== checks value AND type (recommended). == converts types before comparing.",
        output: "true\nfalse\nfalse\ntrue\ntrue\nfalse\ntrue\nfalse\ntrue\nfalse\ntrue\ntrue",
        note: "Always use === and !== to avoid type coercion bugs."
      },
      {
        name: "32. Logical Operators",
        description: "Combine conditions. && (AND) all must be true, || (OR) at least one true, ! (NOT) reverses boolean. Short-circuit evaluation stops early. Where used? Form validation, permission checks, default values.",
        code: "let age = 25;\nlet hasLicense = true;\nconsole.log(age >= 18 && hasLicense);\nconsole.log(age >= 18 || age < 16);\nconsole.log(!hasLicense);\nconsole.log(0 && 'Hello');\nconsole.log(5 || 'Default');\nlet name = null;\nlet display = name || 'Guest';\nconsole.log(display);\nlet email = 'user@example.com';\nlet password = 'secret';\nlet isValid = email && password;\nconsole.log(isValid);\nlet apiData = null;\nlet data = apiData || { default: true };\nconsole.log(data.default);\nfunction greet(user) {\n  if(!user) return 'No user';\n  return `Hello ${user.name}`;\n}\nconsole.log(greet(null));",
        simpleMeaning: "&& = all true, || = at least one true, ! = opposite. || is great for defaults.",
        output: "true\ntrue\nfalse\n0\n5\nGuest\nsecret\ntrue\nNo user",
        note: "&& returns first falsy, || returns first truthy. Excellent for guard clauses and defaults."
      },
      {
        name: "33. Nullish Coalescing (??)",
        description: "?? returns right side ONLY when left side is null or undefined. Unlike || which returns for any falsy value (0, '', false). Where used? Default values for numbers, preserving falsy values.",
        code: "let value = null;\nconsole.log(value ?? 'default');\nlet value2 = undefined;\nconsole.log(value2 ?? 'default');\nlet zero = 0;\nconsole.log(zero ?? 'default');\nlet empty = '';\nconsole.log(empty ?? 'default');\nlet falseVal = false;\nconsole.log(falseVal ?? 'default');\nlet config = { timeout: 0 };\nlet timeout = config.timeout ?? 5000;\nconsole.log(timeout);\nlet settings = { theme: '' };\nlet theme = settings.theme ?? 'dark';\nconsole.log(theme);\nlet user = { name: 'John', age: null };\nlet userAge = user.age ?? 18;\nconsole.log(userAge);",
        simpleMeaning: "?? returns right side only for null/undefined. Keeps 0, '' as is.",
        output: "default\ndefault\n0\n\ntrue\n0\n\n18",
        note: "Use ?? for numeric defaults (0, NaN are valid). Use || for string defaults."
      },
      {
        name: "34. Optional Chaining (?.)",
        description: "?. safely accesses nested properties without error if intermediate property is null/undefined. Returns undefined instead of throwing error. Where used? API responses, optional config, deep object access.",
        code: "let user = { name: 'John', address: { city: 'NYC' } };\nconsole.log(user?.address?.city);\nconsole.log(user?.contact?.phone);\nlet data = null;\nconsole.log(data?.name);\nlet arr = [1, 2, 3];\nconsole.log(arr?.[5]);\nlet obj = { getName: () => 'John' };\nconsole.log(obj.getName?.());\nlet config = { settings: { theme: 'dark' } };\nlet theme = config?.settings?.theme ?? 'light';\nconsole.log(theme);\nlet apiResponse = { data: { user: { id: 1 } } };\nlet userId = apiResponse?.data?.user?.id;\nconsole.log(userId);\n// Without optional chaining would throw error\n// console.log(user.contact.phone);  // Error!\nconsole.log(user?.contact?.phone);",
        simpleMeaning: "?. safely accesses nested properties. Returns undefined if anything is null/undefined.",
        output: "NYC\nundefined\nundefined\nundefined\nundefined\ndark\n1\nundefined",
        note: "Always use ?. for optional properties. Combine with ?? for defaults."
      },
      {
        name: "35. Ternary Operator (?:)",
        description: "Ternary is shorthand for if/else: condition ? valueIfTrue : valueIfFalse. One line decision making. Where used? Conditional assignments, React conditional rendering, class names.",
        code: "let age = 18;\nlet status = age >= 18 ? 'Adult' : 'Minor';\nconsole.log(status);\nlet score = 85;\nlet grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';\nconsole.log(grade);\nlet purchase = 150;\nlet discount = purchase > 100 ? 20 : 10;\nconsole.log(discount);\nlet isActive = true;\nlet btnClass = isActive ? 'active' : 'disabled';\nconsole.log(btnClass);\nlet loggedIn = false;\nlet message = loggedIn ? 'Welcome back!' : 'Please login';\nconsole.log(message);\nlet input = '';\nlet display = input ? input : 'Default';\nconsole.log(display);\nlet temp = 30;\nlet weather = temp > 30 ? 'Hot' : temp > 20 ? 'Warm' : 'Cold';\nconsole.log(weather);\nlet isEven = num => num % 2 === 0 ? 'Even' : 'Odd';\nconsole.log(isEven(5));",
        simpleMeaning: "Ternary is one-line if/else: condition ? trueValue : falseValue. Great for simple decisions.",
        output: "Adult\nB\n20\nactive\nPlease login\nDefault\nWarm\nOdd",
        note: "Use ternary for simple conditions. Use if/else for complex logic. Avoid nested ternaries."
      },
      {
        name: "36. Bitwise Operators",
        description: "Bitwise operators work on binary representations (32-bit integers). & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift), >>> (zero-fill). Where used? Flags, permissions, performance-critical code.",
        code: "// Bitwise AND (&) - both bits 1 = 1\nconsole.log(5 & 3);\n// Bitwise OR (|) - at least one bit 1 = 1\nconsole.log(5 | 3);\n// Bitwise XOR (^) - bits different = 1\nconsole.log(5 ^ 3);\n// Bitwise NOT (~) - flips bits\nconsole.log(~5);\n// Left shift (<<) - multiplies by 2\nconsole.log(5 << 1);\n// Right shift (>>) - divides by 2\nconsole.log(5 >> 1);\n// Zero-fill right shift (>>>)\nconsole.log(-5 >>> 1);\n// Common use: permission flags\nconst READ = 1 << 0;\nconst WRITE = 1 << 1;\nconst EXECUTE = 1 << 2;\nlet permissions = READ | WRITE;\nconsole.log(permissions & READ);\nconsole.log(permissions & EXECUTE);",
        simpleMeaning: "Bitwise operators work with binary bits. Rarely used in everyday JavaScript.",
        output: "1\n7\n6\n-6\n10\n2\n2147483645\n1\n0",
        note: "Usually not needed. Use for low-level operations, flags, permissions."
      },
      {
        name: "37. typeof Operator",
        description: "typeof returns string indicating data type. Useful for type checking. null returns 'object' (bug). function returns 'function'. Safe for undeclared variables.",
        code: "console.log(typeof 'hello');\nconsole.log(typeof 42);\nconsole.log(typeof true);\nconsole.log(typeof undefined);\nconsole.log(typeof null);\nconsole.log(typeof {});\nconsole.log(typeof []);\nconsole.log(typeof function(){});\nconsole.log(typeof Symbol());\nconsole.log(typeof 10n);\nconsole.log(typeof undeclaredVar);\nconsole.log(typeof typeof 42);\nif(typeof name === 'undefined') {\n  console.log('name not defined');\n}",
        simpleMeaning: "typeof tells you the data type of a value.",
        output: "string\nnumber\nboolean\nundefined\nobject\nobject\nobject\nfunction\nsymbol\nbigint\nundefined\nstring\nname not defined",
        note: "typeof null returns 'object' (bug). Use Array.isArray() for arrays."
      },
      {
        name: "38. instanceof Operator",
        description: "instanceof checks if object is instance of a constructor/class. Checks prototype chain. Used for custom types, arrays, dates.",
        code: "let arr = [1, 2, 3];\nconsole.log(arr instanceof Array);\nconsole.log(arr instanceof Object);\nlet date = new Date();\nconsole.log(date instanceof Date);\nlet regex = /hello/;\nconsole.log(regex instanceof RegExp);\nfunction Person(name) {\n  this.name = name;\n}\nlet john = new Person('John');\nconsole.log(john instanceof Person);\nclass Animal {}\nclass Dog extends Animal {}\nlet dog = new Dog();\nconsole.log(dog instanceof Dog);\nconsole.log(dog instanceof Animal);\nlet num = 5;\nconsole.log(num instanceof Number);\nconsole.log('hello' instanceof String);",
        simpleMeaning: "instanceof checks if object was created from a specific class/constructor.",
        output: "true\ntrue\ntrue\ntrue\ntrue\ntrue\ntrue\nfalse\nfalse",
        note: "instanceof works with prototype chain. For primitives, use typeof."
      },
      {
        name: "39. in Operator",
        description: "in operator checks if property exists in object or its prototype chain. Returns boolean. For arrays, checks index existence. Where used? Checking property existence, safe object access.",
        code: "let user = { name: 'John', age: 25 };\nconsole.log('name' in user);\nconsole.log('email' in user);\nconsole.log('toString' in user);\nlet arr = [1, 2, 3];\nconsole.log(0 in arr);\nconsole.log(3 in arr);\nconsole.log('length' in arr);\nlet colors = ['red', 'green'];\nconsole.log(1 in colors);\nconsole.log(5 in colors);\n// Check without prototype chain\nconsole.log(user.hasOwnProperty('name'));\nconsole.log(user.hasOwnProperty('toString'));\n// Loop with in\nfor(let key in user) {\n  if(user.hasOwnProperty(key)) {\n    console.log(key);\n  }\n}",
        simpleMeaning: "in checks if property exists in object or its prototype chain.",
        output: "true\nfalse\ntrue\ntrue\nfalse\ntrue\ntrue\nfalse\ntrue\nfalse\nname\nage",
        note: "Use hasOwnProperty to check only own properties (not inherited)."
      },
      {
        name: "40. delete Operator",
        description: "delete removes property from object. Returns true if successful. Cannot delete variables or function (returns false). With arrays, leaves empty slot (not reindex).",
        code: "let user = { name: 'John', age: 25, city: 'NYC' };\nconsole.log(delete user.age);\nconsole.log(user);\ndelete user.city;\nconsole.log(user);\nlet arr = [1, 2, 3];\ndelete arr[1];\nconsole.log(arr);\nconsole.log(arr[1]);\nconsole.log(arr.length);\nlet x = 10;\nconsole.log(delete x);\nlet obj = Object.freeze({ prop: 10 });\nconsole.log(delete obj.prop);\nlet person = { name: 'John', address: { city: 'NYC' } };\ndelete person.address.city;\nconsole.log(person);\ndelete person.address;\nconsole.log(person);",
        simpleMeaning: "delete removes properties from objects. Returns true if successful.",
        output: "true\n{ name: 'John', city: 'NYC' }\n{ name: 'John' }\n[1, empty, 3]\nundefined\n3\nfalse\nfalse\n{ name: 'John', address: {} }\n{ name: 'John' }",
        note: "delete leaves empty slots in arrays. Use splice() for arrays instead."
      },
      {
        name: "41. new Operator",
        description: "new creates instance of constructor function or class. Creates new object, binds this, returns object. Where used? Creating objects, instances of built-in constructors (Date, Object, Array).",
        code: "let date = new Date();\nconsole.log(date instanceof Date);\nlet obj = new Object();\nobj.name = 'John';\nconsole.log(obj);\nlet arr = new Array(1, 2, 3);\nconsole.log(arr);\nfunction Person(name) {\n  this.name = name;\n  this.greet = function() {\n    return `Hello ${this.name}`;\n  };\n}\nlet john = new Person('John');\nconsole.log(john.name);\nconsole.log(john.greet());\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n}\nlet dog = new Animal('Rex');\nconsole.log(dog.name);\nlet str = new String('hello');\nconsole.log(typeof str);\nconsole.log(str instanceof String);\nlet num = new Number(5);\nconsole.log(typeof num);",
        simpleMeaning: "new creates an instance of a class or constructor function.",
        output: "true\n{ name: 'John' }\n[1,2,3]\nJohn\nHello John\nRex\nobject\ntrue\nobject",
        note: "For primitives, prefer literals (let str = 'hello') over constructors."
      },
      {
        name: "42. Spread Operator (...) - Arrays",
        description: "Spread ... expands iterable (array, string) into individual elements. Used for copying, merging, spreading as function arguments. Where used? Copying arrays, merging, Math.max, creating new arrays.",
        code: "let arr1 = [1, 2, 3];\nlet arr2 = [4, 5, 6];\nlet combined = [...arr1, ...arr2];\nconsole.log(combined);\nlet copy = [...arr1];\ncopy.push(4);\nconsole.log(arr1, copy);\nlet numbers = [5, 2, 8, 1, 9];\nconsole.log(Math.max(...numbers));\nlet str = 'hello';\nlet chars = [...str];\nconsole.log(chars);\nlet arr = [1, 2, 3];\nlet newArr = [...arr, 4, 5];\nconsole.log(newArr);\nlet first = [1, 2];\nlet second = [3, 4];\nlet merged = [...first, ...second];\nconsole.log(merged);\nfunction sum(a, b, c) {\n  return a + b + c;\n}\nlet nums = [1, 2, 3];\nconsole.log(sum(...nums));",
        simpleMeaning: "Spread expands array into individual elements. Great for copying, merging.",
        output: "[1,2,3,4,5,6]\n[1,2,3] [1,2,3,4]\n9\n['h','e','l','l','o']\n[1,2,3,4,5]\n[1,2,3,4]\n6",
        note: "Spread creates shallow copy. Use for combining arrays, passing array as arguments."
      },
      {
        name: "43. Rest Operator (...)",
        description: "Rest collects remaining arguments into array. Used in function parameters and destructuring. Opposite of spread. Where used? Variable arguments, function with indefinite parameters, destructuring.",
        code: "function sumAll(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nconsole.log(sumAll(1, 2, 3, 4, 5));\nfunction log(prefix, ...messages) {\n  messages.forEach(m => console.log(`${prefix}: ${m}`));\n}\nlog('INFO', 'Started', 'Processing', 'Done');\nlet [first, second, ...rest] = [10, 20, 30, 40, 50];\nconsole.log(first, second, rest);\nfunction multiply(multiplier, ...numbers) {\n  return numbers.map(n => n * multiplier);\n}\nconsole.log(multiply(2, 1, 2, 3, 4));\nlet { name, ...others } = { name: 'John', age: 25, city: 'NYC' };\nconsole.log(name, others);\nfunction greet(greeting, ...names) {\n  return names.map(n => `${greeting}, ${n}`);\n}\nconsole.log(greet('Hello', 'John', 'Jane', 'Bob'));",
        simpleMeaning: "Rest collects remaining arguments into array. Use ... in parameters and destructuring.",
        output: "15\nINFO: Started\nINFO: Processing\nINFO: Done\n10 20 [30,40,50]\n[2,4,6,8]\nJohn { age: 25, city: 'NYC' }\n['Hello, John', 'Hello, Jane', 'Hello, Bob']",
        note: "Rest must be last parameter. Opposite of spread - collects into array."
      },
      {
        name: "44. Operator Precedence",
        description: "Operator precedence determines order of operations. Higher precedence evaluated first. Parentheses () override precedence. Where used? Complex expressions, math formulas, logical conditions.",
        code: "// Multiplication before addition\nlet result1 = 2 + 3 * 4;\nconsole.log(result1);\nlet result2 = (2 + 3) * 4;\nconsole.log(result2);\n// Logical AND before OR\nlet result3 = true || false && false;\nconsole.log(result3);\nlet result4 = (true || false) && false;\nconsole.log(result4);\n// Comparison before logical\nlet age = 25;\nlet result5 = age > 18 && age < 65;\nconsole.log(result5);\n// Precedence table (higher to lower)\n// 1. () Grouping\n// 2. ++ -- ! typeof new\n// 3. * / %\n// 4. + -\n// 5. < <= > >=\n// 6. == != === !==\n// 7. &&\n// 8. ||\n// 9. = += -= *= (assignment)\nlet x = 5;\nlet y = 10;\nlet result6 = x + y * 2;\nconsole.log(result6);\nlet result7 = (x + y) * 2;\nconsole.log(result7);",
        simpleMeaning: "Operator precedence determines which operation runs first. Use () to control order.",
        output: "14\n20\ntrue\nfalse\ntrue\n25\n30",
        note: "When in doubt, use parentheses () to make order explicit and code readable."
      },
      
      // ==================== SECTION 4: CONTROL FLOW (45-51) ====================
      {
        name: "45. if Statement",
        description: "if executes code block only when condition is true. Condition must evaluate to boolean or truthy/falsy. Where used? Conditional logic, validation, feature flags, game conditions.",
        code: "let age = 18;\nif(age >= 18) {\n  console.log('Adult');\n}\nlet score = 85;\nif(score >= 90) {\n  console.log('A');\n} else if(score >= 80) {\n  console.log('B');\n} else if(score >= 70) {\n  console.log('C');\n} else {\n  console.log('F');\n}\nlet isLoggedIn = true;\nif(isLoggedIn) {\n  console.log('Welcome back!');\n}\nlet user = null;\nif(!user) {\n  console.log('No user found');\n}\nlet count = 0;\nif(count) {\n  console.log('Has items');\n} else {\n  console.log('Empty cart');\n}",
        simpleMeaning: "if runs code block when condition is true. else if for more conditions, else for default.",
        output: "Adult\nB\nWelcome back!\nNo user found\nEmpty cart",
        note: "Use else for default case. Order matters - most specific conditions first."
      },
      {
        name: "46. else Statement",
        description: "else runs code when if condition is false. Always paired with if. Provides fallback behavior. Where used? Default values, error handling, alternative flows.",
        code: "let hour = 14;\nif(hour < 12) {\n  console.log('Good morning');\n} else {\n  console.log('Good afternoon');\n}\nlet isActive = false;\nif(isActive) {\n  console.log('Active');\n} else {\n  console.log('Inactive');\n}\nlet score = 65;\nif(score >= 60) {\n  console.log('Pass');\n} else {\n  console.log('Fail');\n}\nlet user = { name: 'John' };\nif(user.age) {\n  console.log(`Age: ${user.age}`);\n} else {\n  console.log('Age not provided');\n}\nlet isValid = false;\nlet message = isValid ? 'Valid' : 'Invalid';\nconsole.log(message);",
        simpleMeaning: "else provides alternative code when if condition is false. Always paired with if.",
        output: "Good afternoon\nInactive\nPass\nAge not provided\nInvalid",
        note: "else is optional. Use else for default/fallback behavior."
      },
      {
        name: "47. else if Statement",
        description: "else if adds multiple conditions. Checked in order, executes first true block, skips rest. Where used? Multiple possible branches, grade calculation, status checks.",
        code: "let score = 85;\nif(score >= 90) {\n  console.log('A');\n} else if(score >= 80) {\n  console.log('B');\n} else if(score >= 70) {\n  console.log('C');\n} else {\n  console.log('F');\n}\nlet day = 4;\nif(day === 1) {\n  console.log('Monday');\n} else if(day === 2) {\n  console.log('Tuesday');\n} else if(day === 3) {\n  console.log('Wednesday');\n} else if(day === 4) {\n  console.log('Thursday');\n} else {\n  console.log('Weekend');\n}\nlet status = 'pending';\nif(status === 'approved') {\n  console.log('Payment processed');\n} else if(status === 'pending') {\n  console.log('Waiting for approval');\n} else if(status === 'rejected') {\n  console.log('Payment rejected');\n} else {\n  console.log('Unknown status');\n}",
        simpleMeaning: "else if checks additional conditions. First true block executes, then skips rest.",
        output: "B\nThursday\nWaiting for approval",
        note: "Order matters - put most specific conditions first. For many values, consider switch."
      },
      {
        name: "48. switch Statement",
        description: "switch compares value against multiple cases. Cleaner than many if/else. break exits switch, default runs if no match. Where used? Menu selection, day of week, status codes.",
        code: "let day = 3;\nlet dayName;\nswitch(day) {\n  case 1:\n    dayName = 'Monday';\n    break;\n  case 2:\n    dayName = 'Tuesday';\n    break;\n  case 3:\n    dayName = 'Wednesday';\n    break;\n  case 4:\n    dayName = 'Thursday';\n    break;\n  case 5:\n    dayName = 'Friday';\n    break;\n  default:\n    dayName = 'Weekend';\n}\nconsole.log(dayName);\nlet grade = 'B';\nlet points;\nswitch(grade) {\n  case 'A': points = 4.0; break;\n  case 'B':\n  case 'C': points = 3.0; break;\n  default: points = 0;\n}\nconsole.log(points);\nlet statusCode = 404;\nlet statusMessage;\nswitch(statusCode) {\n  case 200: statusMessage = 'OK'; break;\n  case 404: statusMessage = 'Not Found'; break;\n  case 500: statusMessage = 'Server Error'; break;\n  default: statusMessage = 'Unknown';\n}\nconsole.log(statusMessage);",
        simpleMeaning: "switch checks one value against multiple cases. Use break to stop, default as fallback.",
        output: "Wednesday\n3.0\nNot Found",
        note: "Always include break unless you want fall-through. Use default for unexpected values."
      },
      {
        name: "49. Case Fallthrough",
        description: "Fallthrough happens when no break in case. Execution continues to next case. Can be intentional for multiple cases sharing same code. Where used? Common handlers for multiple values.",
        code: "let grade = 'B';\nlet points;\nswitch(grade) {\n  case 'A':\n    points = 4.0;\n    break;\n  case 'B':\n  case 'C':\n    points = 3.0;\n    console.log('Good job');\n    break;\n  default:\n    points = 0;\n}\nconsole.log(points);\nlet category = 'fruit';\nlet type;\nswitch(category) {\n  case 'fruit':\n  case 'vegetable':\n    type = 'produce';\n    // Intentional fall-through\n  case 'snack':\n    console.log('Food item');\n    break;\n  default:\n    type = 'unknown';\n}\nconsole.log(type);\nlet month = 2;\nlet days;\nswitch(month) {\n  case 1: case 3: case 5: case 7: case 8: case 10: case 12:\n    days = 31;\n    break;\n  case 4: case 6: case 9: case 11:\n    days = 30;\n    break;\n  case 2:\n    days = 28;\n    break;\n  default:\n    days = 0;\n}\nconsole.log(days);",
        simpleMeaning: "Without break, execution 'falls through' to next case. Use intentionally for shared code.",
        output: "Good job\n3.0\nFood item\nproduce\n28",
        note: "Document intentional fall-through with comments. Unintentional fall-through is a bug."
      },
      {
        name: "50. Default Case in Switch",
        description: "default case runs when no other case matches. Like else in if/else. Always put at end (break not needed). Where used? Fallback for unexpected values.",
        code: "let day = 6;\nlet dayType;\nswitch(day) {\n  case 1:\n  case 2:\n  case 3:\n  case 4:\n  case 5:\n    dayType = 'Weekday';\n    break;\n  case 6:\n  case 7:\n    dayType = 'Weekend';\n    break;\n  default:\n    dayType = 'Invalid day';\n}\nconsole.log(dayType);\nlet color = 'purple';\nlet hex;\nswitch(color) {\n  case 'red': hex = '#FF0000'; break;\n  case 'green': hex = '#00FF00'; break;\n  case 'blue': hex = '#0000FF'; break;\n  default: hex = '#000000';\n}\nconsole.log(hex);\nlet operation = 'divide';\nlet result;\nswitch(operation) {\n  case 'add': result = 10 + 5; break;\n  case 'subtract': result = 10 - 5; break;\n  case 'multiply': result = 10 * 5; break;\n  case 'divide': result = 10 / 5; break;\n  default: result = 'Invalid operation';\n}\nconsole.log(result);",
        simpleMeaning: "default case runs when no case matches. Always include for error handling.",
        output: "Weekend\n#000000\n2",
        note: "default doesn't need break. Put it last for clarity."
      },
      {
        name: "51. Ternary Operator (?:)",
        description: "Ternary is shorthand for if/else: condition ? valueIfTrue : valueIfFalse. One line decision making. Where used? Conditional assignments, React conditional rendering, class names.",
        code: "let age = 18;\nlet status = age >= 18 ? 'Adult' : 'Minor';\nconsole.log(status);\nlet score = 85;\nlet grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';\nconsole.log(grade);\nlet purchase = 150;\nlet discount = purchase > 100 ? 20 : 10;\nconsole.log(discount);\nlet isActive = true;\nlet btnClass = isActive ? 'active' : 'disabled';\nconsole.log(btnClass);\nlet loggedIn = false;\nlet message = loggedIn ? 'Welcome back!' : 'Please login';\nconsole.log(message);\nlet input = '';\nlet display = input ? input : 'Default';\nconsole.log(display);\nlet temp = 30;\nlet weather = temp > 30 ? 'Hot' : temp > 20 ? 'Warm' : 'Cold';\nconsole.log(weather);\nlet isEven = num => num % 2 === 0 ? 'Even' : 'Odd';\nconsole.log(isEven(5));",
        simpleMeaning: "Ternary is one-line if/else: condition ? trueValue : falseValue. Great for simple decisions.",
        output: "Adult\nB\n20\nactive\nPlease login\nDefault\nWarm\nOdd",
        note: "Use ternary for simple conditions. Use if/else for complex logic. Avoid nested ternaries."
      },
      
      // ==================== SECTION 5: LOOPS & ITERATIONS (52-65) ====================
      {
        name: "52. for Loop",
        description: "for loop repeats code specific number of times. Three parts: initialization, condition, increment. Where used? Array iteration, counting, repeated operations.",
        code: "for(let i = 1; i <= 5; i++) {\n  console.log(`Count: ${i}`);\n}\nlet fruits = ['Apple', 'Banana', 'Orange'];\nfor(let i = 0; i < fruits.length; i++) {\n  console.log(`${i}: ${fruits[i]}`);\n}\nfor(let i = fruits.length - 1; i >= 0; i--) {\n  console.log(fruits[i]);\n}\nlet sum = 0;\nfor(let i = 1; i <= 10; i++) {\n  sum += i;\n}\nconsole.log(sum);\nlet evenSum = 0;\nfor(let i = 2; i <= 10; i += 2) {\n  evenSum += i;\n}\nconsole.log(evenSum);\nlet nested = '';\nfor(let i = 1; i <= 3; i++) {\n  for(let j = 1; j <= 3; j++) {\n    nested += `${i},${j} `;\n  }\n}\nconsole.log(nested);",
        simpleMeaning: "for loop repeats code specific number of times. Use for arrays and counting.",
        output: "Count:1,2,3,4,5\n0:Apple\n1:Banana\n2:Orange\nMango,Orange,Banana,Apple\n55\n30\n1,1 1,2 1,3 2,1 2,2 2,3 3,1 3,2 3,3",
        note: "Use let for counter. for loop is best when you know number of iterations."
      },
      {
        name: "53. for...in Loop",
        description: "for...in iterates over enumerable property keys (including prototype). Used for objects, not recommended for arrays. Where used? Object property iteration, debugging.",
        code: "let user = { name: 'John', age: 25, city: 'NYC' };\nfor(let key in user) {\n  console.log(`${key}: ${user[key]}`);\n}\nlet arr = ['a', 'b', 'c'];\nfor(let index in arr) {\n  console.log(index, arr[index]);\n}\nlet person = { name: 'John' };\nlet employee = Object.create(person);\nemployee.role = 'Developer';\nfor(let key in employee) {\n  if(employee.hasOwnProperty(key)) {\n    console.log(`Own: ${key}`);\n  } else {\n    console.log(`Inherited: ${key}`);\n  }\n}\nlet colors = ['red', 'green', 'blue'];\n// Adding property to array prototype\nArray.prototype.custom = 'custom';\nfor(let i in colors) {\n  console.log(colors[i]);\n}\n// Better for arrays: for...of or forEach",
        simpleMeaning: "for...in iterates over object property names. Includes prototype chain.",
        output: "name: John\nage: 25\ncity: NYC\n0 a\n1 b\n2 c\nOwn: role\nInherited: name\nred\ngreen\nblue\ncustom",
        note: "Use hasOwnProperty to filter inherited properties. Use for...of for arrays."
      },
      {
        name: "54. for...of Loop",
        description: "for...of iterates over iterable values (arrays, strings, maps, sets). Direct values, not indices. ES6+ feature. Where used? Array iteration, string characters, Set/Map iteration.",
        code: "let fruits = ['Apple', 'Banana', 'Orange'];\nfor(let fruit of fruits) {\n  console.log(fruit);\n}\nlet str = 'hello';\nfor(let char of str) {\n  console.log(char);\n}\nlet numbers = [1, 2, 3, 4, 5];\nfor(let num of numbers) {\n  console.log(num * 2);\n}\nlet set = new Set([1, 2, 3, 2, 1]);\nfor(let val of set) {\n  console.log(val);\n}\nlet map = new Map([['a', 1], ['b', 2]]);\nfor(let [key, val] of map) {\n  console.log(`${key}: ${val}`);\n}\nlet arr = [10, 20, 30];\nfor(let val of arr) {\n  if(val === 20) break;\n  console.log(val);\n}\nlet items = ['a', 'b', 'c'];\nfor(let [index, item] of items.entries()) {\n  console.log(index, item);\n}",
        simpleMeaning: "for...of iterates over values directly. Perfect for arrays, strings, maps, sets.",
        output: "Apple\nBanana\nOrange\nh\ne\nl\nl\no\n2\n4\n6\n8\n10\n1\n2\n3\na:1\nb:2\n10\n0 a\n1 b\n2 c",
        note: "Use for...of for arrays, for...in for objects. for...of uses iterator protocol."
      },
      {
        name: "55. while Loop",
        description: "while loop repeats code while condition is true. Condition checked BEFORE each iteration. Use when number of iterations unknown. Where used? Game loops, input validation, retry logic.",
        code: "let count = 1;\nwhile(count <= 3) {\n  console.log(`Count: ${count}`);\n  count++;\n}\nlet numbers = [1, 2, 3, 4, 5];\nlet i = 0;\nwhile(i < numbers.length) {\n  console.log(numbers[i]);\n  i++;\n}\nlet random;\nlet attempts = 0;\nwhile(random !== 7) {\n  random = Math.floor(Math.random() * 10) + 1;\n  attempts++;\n  console.log(`Attempt ${attempts}: ${random}`);\n}\nconsole.log(`Found 7 after ${attempts} attempts`);\nlet sum = 0;\nlet n = 1;\nwhile(n <= 10) {\n  sum += n;\n  n++;\n}\nconsole.log(sum);\nlet valid = false;\nlet input;\nwhile(!valid) {\n  input = prompt('Enter yes/no');\n  if(input === 'yes' || input === 'no') valid = true;\n}",
        simpleMeaning: "while checks condition before each iteration. Use when iterations unknown.",
        output: "Count:1,2,3\n1,2,3,4,5\nAttempt1: X...\nFound 7 after Y attempts\n55",
        note: "Always ensure loop condition eventually becomes false to avoid infinite loop."
      },
      {
        name: "56. do...while Loop",
        description: "do...while executes code once, THEN checks condition. Always runs at least once. Where used? User input (at least one prompt), menu display, initial setup.",
        code: "let count = 1;\ndo {\n  console.log(`Count: ${count}`);\n  count++;\n} while(count <= 3);\nlet num = 5;\ndo {\n  console.log(`Do-while: ${num}`);\n  num++;\n} while(num <= 3);\nlet input;\ndo {\n  input = prompt('Enter yes or no');\n} while(input !== 'yes' && input !== 'no');\nconsole.log(`You entered: ${input}`);\nlet attempts = 0;\nlet random;\ndo {\n  random = Math.floor(Math.random() * 10);\n  attempts++;\n  console.log(`Attempt ${attempts}: ${random}`);\n} while(random !== 7);\nconsole.log(`Found 7 after ${attempts} attempts`);\nlet menu;\ndo {\n  menu = prompt('1. Start 2. Settings 3. Exit');\n  if(menu === '1') console.log('Starting game');\n  else if(menu === '2') console.log('Opening settings');\n} while(menu !== '3');",
        simpleMeaning: "do...while runs code once, then checks condition. Always executes at least once.",
        output: "Count:1,2,3\nDo-while:5\nYou entered: yes\nAttempt1: X...\nFound 7 after Y attempts",
        note: "Use do...while when code must run at least once before condition check."
      }
    ]
  },
  
  advanced: {
    title: "🚀 JavaScript Advanced - Professional Features",
    description: "Master professional JavaScript concepts: closures, promises, async/await, classes, modules, error handling, functional programming, and modern ES6+ features.",
    
    topics: [
      // ==================== CONTINUING LOOPS (57-65) ====================
      {
        name: "57. break Statement",
        description: "break exits loop or switch immediately. Stops current iteration and loop entirely. Where used? Early loop exit, search found condition, switch cases.",
        code: "for(let i = 1; i <= 10; i++) {\n  if(i === 5) break;\n  console.log(i);\n}\nlet numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8];\nlet target = 2;\nfor(let i = 0; i < numbers.length; i++) {\n  if(numbers[i] === target) {\n    console.log(`Found at index ${i}`);\n    break;\n  }\n}\nlet i = 0;\nwhile(i < 10) {\n  if(i === 3) break;\n  console.log(i);\n  i++;\n}\nouter: for(let i = 1; i <= 3; i++) {\n  for(let j = 1; j <= 3; j++) {\n    if(j === 2) break outer;\n    console.log(`${i},${j}`);\n  }\n}",
        simpleMeaning: "break exits loop or switch immediately. Stops all further iterations.",
        output: "1,2,3,4\nFound at index 5\n0,1,2\n1,1",
        note: "break with label breaks outer nested loop. Use for early termination when found."
      },
      {
        name: "58. continue Statement",
        description: "continue skips current iteration and moves to next. Does not exit loop. Where used? Skip invalid values, filter within loop, ignore specific iterations.",
        code: "for(let i = 1; i <= 5; i++) {\n  if(i === 3) continue;\n  console.log(i);\n}\nlet numbers = [1, 2, 3, 4, 5, 6];\nfor(let num of numbers) {\n  if(num % 2 !== 0) continue;\n  console.log(num);\n}\nlet i = 0;\nwhile(i < 5) {\n  i++;\n  if(i === 3) continue;\n  console.log(i);\n}\nlet text = 'hello world';\nlet vowels = '';\nfor(let char of text) {\n  if(!'aeiou'.includes(char)) continue;\n  vowels += char;\n}\nconsole.log(vowels);\nlet products = [10, -5, 20, -10, 30];\nlet total = 0;\nfor(let price of products) {\n  if(price < 0) continue;\n  total += price;\n}\nconsole.log(total);",
        simpleMeaning: "continue skips current iteration, moves to next. Doesn't exit loop.",
        output: "1,2,4,5\n2,4,6\n1,2,4,5\neo\n60",
        note: "Use continue to skip invalid or unwanted values without breaking the loop."
      },
      {
        name: "59. Labeled Statements",
        description: "Labels identify statements for break/continue to target. Useful for breaking outer loops. Rarely used. Where used? Nested loops, complex iterations.",
        code: "outer: for(let i = 1; i <= 3; i++) {\n  for(let j = 1; j <= 3; j++) {\n    if(i === 2 && j === 2) break outer;\n    console.log(`${i},${j}`);\n  }\n}\nconsole.log('---');\nouterLoop: for(let i = 1; i <= 3; i++) {\n  innerLoop: for(let j = 1; j <= 3; j++) {\n    if(j === 2) continue outerLoop;\n    console.log(`${i},${j}`);\n  }\n}\nlet matrix = [\n  [1, 2, 3],\n  [4, 5, 6],\n  [7, 8, 9]\n];\nsearch: for(let i = 0; i < matrix.length; i++) {\n  for(let j = 0; j < matrix[i].length; j++) {\n    if(matrix[i][j] === 5) {\n      console.log(`Found at ${i},${j}`);\n      break search;\n    }\n  }\n}\nlet found = false;\nfor(let i of matrix) {\n  for(let val of i) {\n    if(val === 5) {\n      found = true;\n      break;\n    }\n  }\n  if(found) break;\n}",
        simpleMeaning: "Labels let break/continue target outer loops. Rarely needed but useful for nested loops.",
        output: "1,1\n1,2\n1,3\n2,1\n3,1\n3,2\n3,3\n---\n1,1\n1,3\n2,1\n2,3\n3,1\n3,3\nFound at 1,1",
        note: "Use descriptive labels. Often can be avoided with better logic or functions."
      },
      {
        name: "60. forEach Method",
        description: "forEach executes callback for each array element. Returns undefined (not chainable). Where used? Side effects, logging, DOM updates, array iteration without transformation.",
        code: "let fruits = ['Apple', 'Banana', 'Orange'];\nfruits.forEach(function(fruit, index) {\n  console.log(`${index}: ${fruit}`);\n});\nlet numbers = [1, 2, 3, 4, 5];\nlet sum = 0;\nnumbers.forEach(num => sum += num);\nconsole.log(sum);\nlet users = [\n  { name: 'John', age: 25 },\n  { name: 'Jane', age: 30 },\n  { name: 'Bob', age: 20 }\n];\nusers.forEach(user => {\n  console.log(`${user.name} is ${user.age} years old`);\n});\nlet doubled = [];\nnumbers.forEach(num => doubled.push(num * 2));\nconsole.log(doubled);\nlet matrix = [[1,2], [3,4], [5,6]];\nmatrix.forEach(row => {\n  row.forEach(cell => {\n    console.log(cell);\n  });\n});\nlet letters = ['a', 'b', 'c'];\nletters.forEach((letter, index, arr) => {\n  arr[index] = letter.toUpperCase();\n});\nconsole.log(letters);",
        simpleMeaning: "forEach runs a function for each array element. Great for side effects.",
        output: "0: Apple,1: Banana,2: Orange\n15\nJohn is 25, Jane is 30, Bob is 20\n[2,4,6,8,10]\n1,2,3,4,5,6\n['A','B','C']",
        note: "forEach doesn't return value (use map for transformations). Cannot break early."
      },
      {
        name: "61. map Method",
        description: "map creates new array by transforming each element. Returns new array (same length). Where used? Data transformation, formatting, converting types, React lists.",
        code: "let numbers = [1, 2, 3, 4, 5];\nlet doubled = numbers.map(num => num * 2);\nconsole.log(doubled);\nlet names = ['john', 'jane', 'bob'];\nlet capitalized = names.map(name => \n  name.charAt(0).toUpperCase() + name.slice(1));\nconsole.log(capitalized);\nlet users = [\n  { name: 'John', age: 25 },\n  { name: 'Jane', age: 30 }\n];\nlet namesOnly = users.map(user => user.name);\nconsole.log(namesOnly);\nlet prices = [10, 20, 30];\nlet withTax = prices.map(price => price * 1.1);\nconsole.log(withTax);\nlet numbers2 = [1, 4, 9, 16];\nlet sqrt = numbers2.map(Math.sqrt);\nconsole.log(sqrt);\nlet items = ['a', 'b', 'c'];\nlet indexed = items.map((item, i) => `${i}: ${item}`);\nconsole.log(indexed);\nlet obj = { multiplier: 2 };\nlet nums = [1, 2, 3];\nlet multiplied = nums.map(function(num) {\n  return num * this.multiplier;\n}, obj);\nconsole.log(multiplied);",
        simpleMeaning: "map transforms each array element and returns new array of same length.",
        output: "[2,4,6,8,10]\n['John','Jane','Bob']\n['John','Jane']\n[11,22,33]\n[1,2,3,4]\n['0: a','1: b','2: c']\n[2,4,6]",
        note: "map returns new array, doesn't modify original. Chain maps for multiple transformations."
      },
      {
        name: "62. filter Method",
        description: "filter creates new array with elements that pass test (callback returns true). Where used? Search, filtering lists, removing invalid items, data cleaning.",
        code: "let numbers = [1, 2, 3, 4, 5, 6, 7, 8];\nlet evens = numbers.filter(num => num % 2 === 0);\nconsole.log(evens);\nlet words = ['apple', 'banana', 'grape', 'kiwi'];\nlet longWords = words.filter(word => word.length > 4);\nconsole.log(longWords);\nlet users = [\n  { name: 'John', age: 25 },\n  { name: 'Jane', age: 16 },\n  { name: 'Bob', age: 30 }\n];\nlet adults = users.filter(user => user.age >= 18);\nconsole.log(adults);\nlet numbers2 = [5, 12, 8, 130, 44];\nlet large = numbers2.filter(num => num > 10);\nconsole.log(large);\nlet items = [null, 'a', undefined, 'b', 0, 'c'];\nlet truthy = items.filter(Boolean);\nconsole.log(truthy);\nlet products = [\n  { name: 'Laptop', inStock: true },\n  { name: 'Mouse', inStock: false },\n  { name: 'Keyboard', inStock: true }\n];\nlet available = products.filter(p => p.inStock);\nconsole.log(available.map(p => p.name));\nlet ages = [12, 18, 21, 15, 30];\nlet canVote = ages.filter(age => age >= 18);\nconsole.log(canVote);",
        simpleMeaning: "filter creates new array with elements that pass the test function.",
        output: "[2,4,6,8]\n['apple', 'banana']\n[{name:'John',age:25},{name:'Bob',age:30}]\n[12,130,44]\n['a','b','c']\n['Laptop','Keyboard']\n[18,21,30]",
        note: "filter doesn't modify original array. Use for search, search results, data cleaning."
      },
      {
        name: "63. reduce Method",
        description: "reduce accumulates array into single value. Returns anything (number, object, array). Where used? Sum, average, max/min, object building, flatten arrays.",
        code: "let numbers = [1, 2, 3, 4, 5];\nlet sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);\nlet product = numbers.reduce((acc, curr) => acc * curr, 1);\nconsole.log(product);\nlet words = ['Hello', ' ', 'World', '!'];\nlet sentence = words.reduce((acc, word) => acc + word, '');\nconsole.log(sentence);\nlet nested = [[1,2], [3,4], [5,6]];\nlet flat = nested.reduce((acc, curr) => acc.concat(curr), []);\nconsole.log(flat);\nlet users = [\n  { name: 'John', age: 25 },\n  { name: 'Jane', age: 30 },\n  { name: 'Bob', age: 25 }\n];\nlet grouped = users.reduce((acc, user) => {\n  acc[user.age] = acc[user.age] || [];\n  acc[user.age].push(user.name);\n  return acc;\n}, {});\nconsole.log(grouped);\nlet max = numbers.reduce((acc, curr) => Math.max(acc, curr));\nconsole.log(max);\nlet items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];\nlet count = items.reduce((acc, item) => {\n  acc[item] = (acc[item] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(count);",
        simpleMeaning: "reduce combines array elements into single value. Very powerful for aggregations.",
        output: "15\n120\nHello World!\n[1,2,3,4,5,6]\n{ '25': ['John','Bob'], '30': ['Jane'] }\n5\n{ apple:3, banana:2, orange:1 }",
        note: "Always provide initial value. reduceRight goes right-to-left."
      },
      {
        name: "64. some Method",
        description: "some checks if ANY element passes test. Returns boolean. Stops on first true. Where used? Validation, permission checks, existence checks.",
        code: "let numbers = [1, 2, 3, 4, 5];\nlet hasEven = numbers.some(num => num % 2 === 0);\nconsole.log(hasEven);\nlet hasNegative = numbers.some(num => num < 0);\nconsole.log(hasNegative);\nlet users = [\n  { name: 'John', isAdmin: false },\n  { name: 'Jane', isAdmin: true },\n  { name: 'Bob', isAdmin: false }\n];\nlet hasAdmin = users.some(user => user.isAdmin);\nconsole.log(hasAdmin);\nlet words = ['apple', 'banana', 'grape'];\nlet hasLong = words.some(word => word.length > 6);\nconsole.log(hasLong);\nlet ages = [12, 15, 18, 21];\nlet canVote = ages.some(age => age >= 18);\nconsole.log(canVote);\nlet empty = [];\nconsole.log(empty.some(x => x > 0));\nlet numbers2 = [10, 20, 30];\nlet greaterThan25 = numbers2.some(num => num > 25);\nconsole.log(greaterThan25);\nlet items = [{ stock: 0 }, { stock: 5 }, { stock: 0 }];\nlet hasStock = items.some(item => item.stock > 0);\nconsole.log(hasStock);",
        simpleMeaning: "some checks if at least one element passes test. Returns true if any passes.",
        output: "true\nfalse\ntrue\nfalse\ntrue\nfalse\ntrue\ntrue",
        note: "Use some for 'OR' logic across array. Stops at first true for performance."
      },// ==================== SECTION 5: LOOPS & ITERATIONS (65-75) ====================
      {
        name: "65. every Method",
        description: "every checks if ALL elements pass test. Returns boolean. Stops on first false. Where used? Validation (all fields valid), permission checks (all admins), game win conditions.",
        code: "let numbers = [2, 4, 6, 8, 10];\nlet allEven = numbers.every(num => num % 2 === 0);\nconsole.log(allEven);\nlet mixed = [2, 4, 5, 8];\nlet allEvenMixed = mixed.every(num => num % 2 === 0);\nconsole.log(allEvenMixed);\nlet users = [\n  { name: 'John', age: 25 },\n  { name: 'Jane', age: 30 },\n  { name: 'Bob', age: 20 }\n];\nlet allAdults = users.every(user => user.age >= 18);\nconsole.log(allAdults);\nlet words = ['apple', 'banana', 'grape'];\nlet allLong = words.every(word => word.length > 3);\nconsole.log(allLong);\nlet empty = [];\nconsole.log(empty.every(x => x > 0));\nlet scores = [85, 90, 88, 92];\nlet allPass = scores.every(score => score >= 60);\nconsole.log(allPass);\nlet items = [{ stock: 5 }, { stock: 3 }, { stock: 0 }];\nlet allInStock = items.every(item => item.stock > 0);\nconsole.log(allInStock);\nlet passwords = ['pass123', 'word456', 'secret789'];\nlet allValid = passwords.every(pwd => pwd.length >= 6);\nconsole.log(allValid);",
        simpleMeaning: "every checks if all elements pass test. Returns true only if every one passes.",
        output: "true\nfalse\ntrue\ntrue\ntrue\ntrue\nfalse\nfalse\ntrue",
        note: "Use every for 'AND' logic across array. Stops at first false for performance."
      },
      {
        name: "66. find Method",
        description: "find returns first element that passes test. Returns undefined if none found. Where used? Search by ID, find specific item, get matching object.",
        code: "let users = [\n  { id: 1, name: 'John' },\n  { id: 2, name: 'Jane' },\n  { id: 3, name: 'Bob' }\n];\nlet user = users.find(u => u.id === 2);\nconsole.log(user);\nlet numbers = [5, 12, 8, 130, 44];\nlet found = numbers.find(num => num > 10);\nconsole.log(found);\nlet names = ['Alice', 'Bob', 'Charlie'];\nlet nameStartingWithB = names.find(n => n[0] === 'B');\nconsole.log(nameStartingWithB);\nlet products = [\n  { name: 'Laptop', price: 999 },\n  { name: 'Mouse', price: 25 },\n  { name: 'Keyboard', price: 79 }\n];\nlet cheap = products.find(p => p.price < 50);\nconsole.log(cheap);\nlet items = [10, 20, 30];\nlet result = items.find(x => x > 100);\nconsole.log(result);\nlet cars = ['BMW', 'Audi', 'Mercedes'];\nlet car = cars.find(c => c === 'Audi');\nconsole.log(car);\nlet ages = [12, 15, 18, 21];\nlet adult = ages.find(age => age >= 18);\nconsole.log(adult);",
        simpleMeaning: "find returns first matching element. Returns undefined if no match.",
        output: "{ id: 2, name: 'Jane' }\n12\nBob\n{ name: 'Mouse', price: 25 }\nundefined\nAudi\n18",
        note: "Use find for single item search. Use filter for multiple matches."
      },
      {
        name: "67. findIndex Method",
        description: "findIndex returns index of first element that passes test. Returns -1 if none found. Where used? Find position for update, find for deletion, locate element index.",
        code: "let numbers = [5, 12, 8, 130, 44];\nlet index = numbers.findIndex(num => num > 10);\nconsole.log(index);\nlet users = [\n  { id: 1, name: 'John' },\n  { id: 2, name: 'Jane' },\n  { id: 3, name: 'Bob' }\n];\nlet userIndex = users.findIndex(u => u.id === 2);\nconsole.log(userIndex);\nlet names = ['Alice', 'Bob', 'Charlie'];\nlet indexB = names.findIndex(n => n[0] === 'B');\nconsole.log(indexB);\nlet products = [\n  { name: 'Laptop', price: 999 },\n  { name: 'Mouse', price: 25 },\n  { name: 'Keyboard', price: 79 }\n];\nlet cheapIndex = products.findIndex(p => p.price < 50);\nconsole.log(cheapIndex);\nlet scores = [85, 90, 88, 92];\nlet highScore = scores.findIndex(score => score > 95);\nconsole.log(highScore);\nlet letters = ['a', 'b', 'c', 'd'];\nlet indexC = letters.findIndex(l => l === 'c');\nconsole.log(indexC);\nlet empty = [];\nlet notFound = empty.findIndex(x => x > 0);\nconsole.log(notFound);",
        simpleMeaning: "findIndex returns index of first matching element. Returns -1 if not found.",
        output: "1\n1\n1\n1\n-1\n2\n-1",
        note: "Use findIndex when you need the position, not the element itself."
      },
      {
        name: "68. findLast Method",
        description: "findLast returns last element that passes test (ES2023). Searches from end. Where used? Last matching item, latest entry, reverse search.",
        code: "let numbers = [5, 12, 8, 130, 44, 12];\nlet last = numbers.findLast(num => num > 10);\nconsole.log(last);\nlet users = [\n  { id: 1, name: 'John', active: true },\n  { id: 2, name: 'Jane', active: false },\n  { id: 3, name: 'Bob', active: true }\n];\nlet lastActive = users.findLast(u => u.active === true);\nconsole.log(lastActive);\nlet scores = [85, 90, 92, 88, 95];\nlet lastHigh = scores.findLast(score => score > 90);\nconsole.log(lastHigh);\nlet words = ['apple', 'banana', 'grape', 'kiwi'];\nlet lastLong = words.findLast(w => w.length > 4);\nconsole.log(lastLong);\nlet prices = [10, 20, 30, 25, 15];\nlet lastCheap = prices.findLast(p => p < 20);\nconsole.log(lastCheap);\nlet items = [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 2 }];\nlet lastTwo = items.findLast(item => item.val === 2);\nconsole.log(lastTwo);",
        simpleMeaning: "findLast returns last matching element (searches from end).",
        output: "12\n{ id: 3, name: 'Bob', active: true }\n95\ngrape\n15\n{ val: 2 }",
        note: "findLast is ES2023. Use for finding last occurrence efficiently."
      },
      {
        name: "69. findLastIndex Method",
        description: "findLastIndex returns index of last element that passes test (ES2023). Searches from end. Where used? Last position, reverse search index.",
        code: "let numbers = [5, 12, 8, 130, 44, 12];\nlet lastIndex = numbers.findLastIndex(num => num > 10);\nconsole.log(lastIndex);\nlet users = [\n  { id: 1, name: 'John', active: true },\n  { id: 2, name: 'Jane', active: false },\n  { id: 3, name: 'Bob', active: true }\n];\nlet lastActiveIndex = users.findLastIndex(u => u.active === true);\nconsole.log(lastActiveIndex);\nlet scores = [85, 90, 92, 88, 95];\nlet lastHighIndex = scores.findLastIndex(score => score > 90);\nconsole.log(lastHighIndex);\nlet words = ['apple', 'banana', 'grape', 'kiwi'];\nlet lastLongIndex = words.findLastIndex(w => w.length > 4);\nconsole.log(lastLongIndex);\nlet prices = [10, 20, 30, 25, 15];\nlet lastCheapIndex = prices.findLastIndex(p => p < 20);\nconsole.log(lastCheapIndex);\nlet items = [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 2 }];\nlet lastTwoIndex = items.findLastIndex(item => item.val === 2);\nconsole.log(lastTwoIndex);",
        simpleMeaning: "findLastIndex returns index of last matching element (searches from end).",
        output: "5\n2\n4\n2\n4\n3",
        note: "findLastIndex is ES2023. Use with findLast for complete reverse search."
      },
      {
        name: "70. sort Method",
        description: "sort sorts array elements in place. Default sort converts to strings. Use compare function for numbers. Where used? Sorting lists, ordering products, ranking scores.",
        code: "let fruits = ['banana', 'apple', 'cherry', 'date'];\nfruits.sort();\nconsole.log(fruits);\nlet numbers = [10, 5, 100, 2, 1000];\nnumbers.sort();\nconsole.log(numbers);\nlet nums = [10, 5, 100, 2, 1000];\nnums.sort((a, b) => a - b);\nconsole.log(nums);\nnums.sort((a, b) => b - a);\nconsole.log(nums);\nlet users = [\n  { name: 'John', age: 30 },\n  { name: 'Jane', age: 25 },\n  { name: 'Bob', age: 35 }\n];\nusers.sort((a, b) => a.age - b.age);\nconsole.log(users);\nusers.sort((a, b) => a.name.localeCompare(b.name));\nconsole.log(users);\nlet words = ['banana', 'apple', 'cherry'];\nwords.sort((a, b) => b.length - a.length);\nconsole.log(words);\nlet items = [1, 2, 3, 4, 5];\nitems.sort(() => Math.random() - 0.5);\nconsole.log(items);",
        simpleMeaning: "sort arranges array elements in order. Default is string order. Use compare function for numbers.",
        output: "['apple','banana','cherry','date']\n[10,100,1000,2,5]\n[2,5,10,100,1000]\n[1000,100,10,5,2]\n[{name:'Jane',age:25},{name:'John',age:30},{name:'Bob',age:35}]\n[{name:'Bob',age:35},{name:'Jane',age:25},{name:'John',age:30}]\n['banana','cherry','apple']\n[random order]",
        note: "sort modifies original array. For numbers, always provide compare function (a,b) => a-b."
      },
      {
        name: "71. reverse Method",
        description: "reverse reverses array order in place. First becomes last, last becomes first. Where used? Reverse display, undo operations, newest first display.",
        code: "let fruits = ['apple', 'banana', 'cherry'];\nfruits.reverse();\nconsole.log(fruits);\nlet numbers = [1, 2, 3, 4, 5];\nnumbers.reverse();\nconsole.log(numbers);\nlet str = 'hello';\nlet reversed = str.split('').reverse().join('');\nconsole.log(reversed);\nlet users = ['John', 'Jane', 'Bob'];\nusers.reverse();\nconsole.log(users);\nlet scores = [85, 90, 88, 92];\nlet reversedScores = [...scores].reverse();\nconsole.log(reversedScores);\nlet letters = ['a', 'b', 'c'];\nletters.reverse();\nconsole.log(letters);\nlet nested = [[1,2], [3,4], [5,6]];\nnested.reverse();\nconsole.log(nested);\nlet dates = ['2024-01-01', '2024-02-01', '2024-03-01'];\ndates.reverse();\nconsole.log(dates);",
        simpleMeaning: "reverse flips array order. First element becomes last, last becomes first.",
        output: "['cherry','banana','apple']\n[5,4,3,2,1]\nolleh\n['Bob','Jane','John']\n[92,88,90,85]\n['c','b','a']\n[[5,6],[3,4],[1,2]]\n['2024-03-01','2024-02-01','2024-01-01']",
        note: "reverse modifies original array. Use spread [...arr].reverse() for copy."
      },
      {
        name: "72. join Method",
        description: "join combines array elements into string with separator. Default separator is comma. Where used? URL building, CSV creation, display formatting, query strings.",
        code: "let fruits = ['apple', 'banana', 'cherry'];\nconsole.log(fruits.join());\nconsole.log(fruits.join(', '));\nconsole.log(fruits.join(' - '));\nconsole.log(fruits.join(''));\nlet numbers = [1, 2, 3];\nconsole.log(numbers.join('+'));\nlet words = ['Hello', 'World'];\nlet sentence = words.join(' ');\nconsole.log(sentence);\nlet path = ['users', 'john', 'profile'];\nlet url = '/' + path.join('/');\nconsole.log(url);\nlet csv = [['name', 'age'], ['John', 25], ['Jane', 30]];\nlet csvString = csv.map(row => row.join(',')).join('\\n');\nconsole.log(csvString);\nlet items = ['a', 'b', 'c'];\nconsole.log(items.join('|'));\nlet empty = [];\nconsole.log(empty.join('-'));\nlet single = ['only'];\nconsole.log(single.join(','));",
        simpleMeaning: "join combines array into string with separator between elements.",
        output: "apple,banana,cherry\napple, banana, cherry\napple - banana - cherry\napplebananacherry\n1+2+3\nHello World\n/users/john/profile\nname,age\\nJohn,25\\nJane,30\na|b|c\n\nonly",
        note: "join doesn't modify original array. Default separator is comma."
      },
      {
        name: "73. toString Method",
        description: "toString converts array to string with commas. Same as join(',') without separator option. Where used? Debugging, display, implicit conversion.",
        code: "let fruits = ['apple', 'banana', 'cherry'];\nconsole.log(fruits.toString());\nlet numbers = [1, 2, 3, 4];\nconsole.log(numbers.toString());\nlet mixed = [1, 'hello', true, null];\nconsole.log(mixed.toString());\nlet nested = [[1,2], [3,4]];\nconsole.log(nested.toString());\nlet empty = [];\nconsole.log(empty.toString());\nlet single = ['only'];\nconsole.log(single.toString());\nlet arr = [10, 20, 30];\nlet str = arr.toString();\nconsole.log(str + ' is a string');\nconsole.log(typeof str);\nlet items = ['a', 'b', 'c'];\nconsole.log(items + '');\nlet withNull = [1, null, 3];\nconsole.log(withNull.toString());",
        simpleMeaning: "toString converts array to comma-separated string.",
        output: "apple,banana,cherry\n1,2,3,4\n1,hello,true,\n1,2,3,4\n\nonly\n10,20,30 is a string\nstring\na,b,c\n1,,3",
        note: "toString is automatically called when array is used in string context."
      },
      {
        name: "74. flat Method",
        description: "flat flattens nested arrays to specified depth. Returns new array. Default depth 1. Where used? Flatten API responses, matrix to list, data normalization.",
        code: "let nested = [1, [2, 3], [4, [5, 6]]];\nconsole.log(nested.flat());\nconsole.log(nested.flat(2));\nconsole.log(nested.flat(3));\nlet arr = [1, [2, [3, [4]]]];\nconsole.log(arr.flat(Infinity));\nlet matrix = [[1,2], [3,4], [5,6]];\nlet flatMatrix = matrix.flat();\nconsole.log(flatMatrix);\nlet deep = [1, [2, [3, [4, [5]]]]];\nconsole.log(deep.flat(3));\nlet multiple = [1, [2, 3], 4, [5, [6, 7]]];\nconsole.log(multiple.flat(2));\nlet empty = [1, [], 2, [3, []]];\nconsole.log(empty.flat());\nlet arrWithHoles = [1, , 2, [3, , 4]];\nconsole.log(arrWithHoles.flat());\nlet strings = [['a', 'b'], ['c', 'd']];\nlet flatStrings = strings.flat();\nconsole.log(flatStrings);",
        simpleMeaning: "flat flattens nested arrays to specified depth.",
        output: "[1,2,3,[4,[5,6]]]\n[1,2,3,4,5,6]\n[1,2,3,4,5,6]\n[1,2,3,4]\n[1,2,3,4,5,6]\n[1,2,3,4,5]\n[1,2,3,4,6,7]\n[1,2,3]\n[1,2,3,4]\n['a','b','c','d']",
        note: "flat doesn't modify original. Use Infinity for any depth."
      },
      {
        name: "75. flatMap Method",
        description: "flatMap maps then flattens by one level. Combine map() and flat() in one pass. Where used? Mapping to arrays, generating multiple results, data transformation.",
        code: "let phrases = ['hello world', 'good morning'];\nlet words = phrases.flatMap(p => p.split(' '));\nconsole.log(words);\nlet numbers = [1, 2, 3];\nlet doubledAndFlatten = numbers.flatMap(n => [n, n * 2]);\nconsole.log(doubledAndFlatten);\nlet arr = [1, 2, 3, 4];\nlet result = arr.flatMap(x => x % 2 === 0 ? [x, x] : [x]);\nconsole.log(result);\nlet sentences = ['Hello!', 'How are you?', 'Good'];\nlet allWords = sentences.flatMap(s => s.split(' '));\nconsole.log(allWords);\nlet carts = [[1,2], [3,4], [5,6]];\nlet flatCart = carts.flatMap(c => c);\nconsole.log(flatCart);\nlet nested = [[1], [2,3], [4,5,6]];\nlet flattened = nested.flatMap(x => x);\nconsole.log(flattened);\nlet text = 'The quick brown fox';\nlet chars = text.split(' ').flatMap(word => word.split(''));\nconsole.log(chars);\nlet data = [1, 2, 3, 4];\nlet processed = data.flatMap(x => x > 2 ? [x, x*2] : [x]);\nconsole.log(processed);",
        simpleMeaning: "flatMap maps each element then flattens result by one level.",
        output: "['hello','world','good','morning']\n[1,2,2,4,3,6]\n[1,2,2,4,3,4]\n['Hello!','How','are','you?','Good']\n[1,2,3,4,5,6]\n[1,2,3,4,5,6]\n['T','h','e','q','u','i','c','k','b','r','o','w','n','f','o','x']\n[1,2,3,6,4,8]",
        note: "flatMap is more efficient than map().flat() for one level flattening."
      },
      
      // ==================== SECTION 6: ARRAY ADDITIONAL METHODS (76-85) ====================
      {
        name: "76. fill Method",
        description: "fill changes all array elements to static value. Modifies original array. Can specify start/end index. Where used? Reset array, initialize with default, clear values.",
        code: "let arr = [1, 2, 3, 4, 5];\narr.fill(0);\nconsole.log(arr);\nlet arr2 = [1, 2, 3, 4, 5];\narr2.fill(9, 1, 3);\nconsole.log(arr2);\nlet matrix = new Array(3).fill([]);\nconsole.log(matrix);\nlet zeros = new Array(5).fill(0);\nconsole.log(zeros);\nlet items = ['a', 'b', 'c', 'd', 'e'];\nitems.fill('x', 2);\nconsole.log(items);\nitems.fill('y', 0, 2);\nconsole.log(items);\nlet range = [1, 2, 3, 4, 5];\nrange.fill(100, -3);\nconsole.log(range);\nlet counts = [0, 0, 0, 0, 0];\ncounts.fill(1, 1, -1);\nconsole.log(counts);\nlet empty = [];\nempty.fill(5);\nconsole.log(empty);",
        simpleMeaning: "fill sets all array elements to a static value.",
        output: "[0,0,0,0,0]\n[1,9,9,4,5]\n[[],[],[]]\n[0,0,0,0,0]\n['a','b','x','x','x']\n['y','y','x','x','x']\n[1,2,100,100,100]\n[0,1,1,1,0]\n[]",
        note: "fill modifies original array. Be careful with reference types (objects/arrays)."
      },
      {
        name: "77. copyWithin Method",
        description: "copyWithin copies array elements to another position. Modifies original array. Negative indices count from end. Where used? Shift elements, rotate array, in-place rearrangement.",
        code: "let arr = [1, 2, 3, 4, 5];\narr.copyWithin(0, 3);\nconsole.log(arr);\nlet arr2 = [1, 2, 3, 4, 5];\narr2.copyWithin(1, 0, 2);\nconsole.log(arr2);\nlet arr3 = [1, 2, 3, 4, 5];\narr3.copyWithin(-2, -3);\nconsole.log(arr3);\nlet letters = ['a', 'b', 'c', 'd', 'e'];\nletters.copyWithin(2, 4);\nconsole.log(letters);\nlet nums = [1, 2, 3, 4, 5];\nnums.copyWithin(0, -2);\nconsole.log(nums);\nlet colors = ['red', 'green', 'blue', 'yellow'];\ncolors.copyWithin(1, 2, 3);\nconsole.log(colors);\nlet numbers = [10, 20, 30, 40, 50];\nnumbers.copyWithin(2, 0, 2);\nconsole.log(numbers);\nlet items = [1, 2, 3, 4, 5, 6];\nitems.copyWithin(3, 0, 2);\nconsole.log(items);",
        simpleMeaning: "copyWithin copies array elements to another position in same array.",
        output: "[4,5,3,4,5]\n[1,1,2,4,5]\n[1,2,3,1,2]\n['a','b','e','d','e']\n[4,5,3,4,5]\n['red','blue','blue','yellow']\n[10,20,10,20,50]\n[1,2,3,1,2,6]",
        note: "copyWithin modifies original array. Length stays same."
      },
      {
        name: "78. Array.from()",
        description: "Array.from creates array from iterable or array-like object. Maps elements optionally. Where used? Convert NodeList to array, create array from string, generate sequences.",
        code: "let str = 'hello';\nlet arr = Array.from(str);\nconsole.log(arr);\nlet set = new Set([1, 2, 3, 2, 1]);\nlet arrFromSet = Array.from(set);\nconsole.log(arrFromSet);\nlet map = new Map([[1, 'a'], [2, 'b']]);\nlet arrFromMap = Array.from(map);\nconsole.log(arrFromMap);\nlet nodeList = document.querySelectorAll('div');\nlet divs = Array.from(nodeList);\nconsole.log(divs);\nlet range = Array.from({ length: 5 }, (_, i) => i + 1);\nconsole.log(range);\nlet squares = Array.from([1, 2, 3], x => x * x);\nconsole.log(squares);\nlet argumentsObj = (function() { return Array.from(arguments); })(1, 2, 3);\nconsole.log(argumentsObj);\nlet arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };\nlet fromLike = Array.from(arrayLike);\nconsole.log(fromLike);\nlet evens = Array.from({ length: 5 }, (_, i) => (i + 1) * 2);\nconsole.log(evens);",
        simpleMeaning: "Array.from creates array from array-like or iterable objects.",
        output: "['h','e','l','l','o']\n[1,2,3]\n[[1,'a'],[2,'b']]\n[...divs]\n[1,2,3,4,5]\n[1,4,9]\n[1,2,3]\n['a','b','c']\n[2,4,6,8,10]",
        note: "Excellent for converting NodeList, arguments, strings to arrays."
      },
      {
        name: "79. Array.of()",
        description: "Array.of creates array from arguments. Unlike Array() constructor which behaves differently with single number. Where used? Creating arrays with numeric elements, consistent array creation.",
        code: "let arr1 = Array.of(1, 2, 3);\nconsole.log(arr1);\nlet arr2 = Array.of(5);\nconsole.log(arr2);\nlet arr3 = new Array(5);\nconsole.log(arr3);\nlet arr4 = Array.of('hello');\nconsole.log(arr4);\nlet arr5 = Array.of(1, 'a', true, { name: 'John' });\nconsole.log(arr5);\nlet nums = Array.of(...[1, 2, 3]);\nconsole.log(nums);\nlet empty = Array.of();\nconsole.log(empty);\nlet withNull = Array.of(null, undefined);\nconsole.log(withNull);\nlet sequence = Array.of(10, 20, 30);\nconsole.log(sequence);",
        simpleMeaning: "Array.of creates array from its arguments, handling single number correctly.",
        output: "[1,2,3]\n[5]\n[empty × 5]\n['hello']\n[1,'a',true,{name:'John'}]\n[1,2,3]\n[]\n[null,undefined]\n[10,20,30]",
        note: "Use Array.of instead of Array() to avoid confusion with single number."
      },
      {
        name: "80. entries() Method",
        description: "entries returns iterator of [index, value] pairs. Used with for...of. Where used? Need both index and value, debugging, conversion to Map.",
        code: "let fruits = ['apple', 'banana', 'cherry'];\nfor(let [index, value] of fruits.entries()) {\n  console.log(`${index}: ${value}`);\n}\nlet entries = fruits.entries();\nconsole.log(entries.next().value);\nconsole.log(entries.next().value);\nlet arr = [10, 20, 30];\nlet mapFromEntries = new Map(arr.entries());\nconsole.log(mapFromEntries);\nlet colors = ['red', 'green', 'blue'];\nlet entriesArray = Array.from(colors.entries());\nconsole.log(entriesArray);\nlet numbers = [100, 200, 300];\nfor(let entry of numbers.entries()) {\n  console.log(entry);\n}\nlet data = ['a', 'b', 'c'];\nlet entriesCopy = [...data.entries()];\nconsole.log(entriesCopy);\nlet sparse = [1, , 3];\nfor(let entry of sparse.entries()) {\n  console.log(entry);\n}",
        simpleMeaning: "entries returns iterator of [index, value] pairs for array.",
        output: "0: apple,1: banana,2: cherry\n[0,'apple']\n[1,'banana']\nMap {0=>10,1=>20,2=>30}\n[[0,'red'],[1,'green'],[2,'blue']]\n[0,100],[1,200],[2,300]\n[[0,'a'],[1,'b'],[2,'c']]\n[0,1],[1,undefined],[2,3]",
        note: "Use with for...of for index/value iteration. Convert to Map with new Map(arr.entries())."
      },
      {
        name: "81. keys() Method",
        description: "keys returns iterator of array indices. Where used? Need only indices, sparse array iteration, parallel iteration with values.",
        code: "let fruits = ['apple', 'banana', 'cherry'];\nfor(let key of fruits.keys()) {\n  console.log(key);\n}\nlet arr = [10, 20, 30];\nlet keys = arr.keys();\nconsole.log(keys.next().value);\nconsole.log(keys.next().value);\nlet colors = ['red', 'green', 'blue'];\nlet keysArray = Array.from(colors.keys());\nconsole.log(keysArray);\nlet numbers = [100, 200, 300];\nfor(let i of numbers.keys()) {\n  console.log(numbers[i]);\n}\nlet sparse = [1, , 3];\nfor(let i of sparse.keys()) {\n  console.log(i);\n}\nlet values = ['a', 'b', 'c'];\nlet indices = [...values.keys()];\nconsole.log(indices);\nlet empty = [];\nfor(let i of empty.keys()) {\n  console.log(i);\n}",
        simpleMeaning: "keys returns iterator of array indices (0, 1, 2...).",
        output: "0,1,2\n0\n1\n[0,1,2]\n100,200,300\n0,1,2\n[0,1,2]\n(nothing)",
        note: "Use keys for index iteration when you don't need the values."
      },
      {
        name: "82. values() Method",
        description: "values returns iterator of array values. Where used? Need only values, same as default iteration, compatibility with entries/keys.",
        code: "let fruits = ['apple', 'banana', 'cherry'];\nfor(let value of fruits.values()) {\n  console.log(value);\n}\nlet arr = [10, 20, 30];\nlet values = arr.values();\nconsole.log(values.next().value);\nconsole.log(values.next().value);\nlet colors = ['red', 'green', 'blue'];\nlet valuesArray = Array.from(colors.values());\nconsole.log(valuesArray);\nlet numbers = [100, 200, 300];\nlet valuesArr = [...numbers.values()];\nconsole.log(valuesArr);\nlet sparse = [1, , 3];\nfor(let v of sparse.values()) {\n  console.log(v);\n}\nlet letters = ['a', 'b', 'c'];\nlet iterator = letters.values();\nconsole.log(iterator.next().value);\nconsole.log(iterator.next().value);\nconsole.log(iterator.next().value);",
        simpleMeaning: "values returns iterator of array values.",
        output: "apple,banana,cherry\n10\n20\n['red','green','blue']\n[100,200,300]\n1,undefined,3\na\nb\nc",
        note: "values is the default iteration method for arrays (for...of uses values)."
      },
      {
        name: "83. at() Method",
        description: "at accesses element at position. Supports negative indices (count from end). Where used? Last element access, safe indexing, cleaner than arr[arr.length - 1].",
        code: "let fruits = ['apple', 'banana', 'cherry', 'date'];\nconsole.log(fruits.at(0));\nconsole.log(fruits.at(2));\nconsole.log(fruits.at(-1));\nconsole.log(fruits.at(-2));\nlet arr = [1, 2, 3, 4, 5];\nconsole.log(arr.at(-1));\nconsole.log(arr.at(-3));\nlet empty = [];\nconsole.log(empty.at(0));\nconsole.log(empty.at(-1));\nlet str = 'hello';\nconsole.log(str.at(1));\nconsole.log(str.at(-1));\nlet numbers = [10, 20, 30, 40, 50];\nlet last = numbers.at(-1);\nlet first = numbers.at(0);\nconsole.log(first, last);\nlet items = ['a', 'b', 'c'];\nconsole.log(items.at(5));\nlet data = [100, 200, 300, 400];\nlet secondLast = data.at(-2);\nconsole.log(secondLast);",
        simpleMeaning: "at gets element by index, supports negative indices (from end).",
        output: "apple\ncherry\ndate\ncherry\n5\n3\nundefined\nundefined\ne\no\n10 50\nundefined\n300",
        note: "at is cleaner than arr[arr.length - 1] for last element. Works on strings too."
      },
      {
        name: "84. toReversed() Method",
        description: "toReversed returns new reversed array (ES2023). Does NOT modify original. Where used? Immutable operations, functional programming, React state.",
        code: "let fruits = ['apple', 'banana', 'cherry'];\nlet reversed = fruits.toReversed();\nconsole.log(reversed);\nconsole.log(fruits);\nlet numbers = [1, 2, 3, 4, 5];\nlet revNumbers = numbers.toReversed();\nconsole.log(revNumbers);\nlet arr = [10, 20, 30];\nlet revArr = arr.toReversed();\nconsole.log(revArr);\nlet letters = ['a', 'b', 'c', 'd'];\nlet revLetters = letters.toReversed();\nconsole.log(revLetters);\nlet nested = [[1,2], [3,4]];\nlet revNested = nested.toReversed();\nconsole.log(revNested);\nlet single = [42];\nlet revSingle = single.toReversed();\nconsole.log(revSingle);\nlet empty = [];\nconsole.log(empty.toReversed());\nlet colors = ['red', 'green', 'blue'];\ncolors.toReversed();\nconsole.log(colors);",
        simpleMeaning: "toReversed returns new reversed array without modifying original.",
        output: "['cherry','banana','apple']\n['apple','banana','cherry']\n[5,4,3,2,1]\n[30,20,10]\n['d','c','b','a']\n[[3,4],[1,2]]\n[42]\n[]\n['red','green','blue']",
        note: "toReversed is ES2023. Use for immutable operations where you need reversed copy."
      },
      {
        name: "85. toSorted() Method",
        description: "toSorted returns new sorted array (ES2023). Does NOT modify original. Where used? Immutable sorting, React state, preserving original data.",
        code: "let numbers = [3, 1, 4, 1, 5];\nlet sorted = numbers.toSorted();\nconsole.log(sorted);\nconsole.log(numbers);\nlet nums = [10, 2, 30, 4, 50];\nlet numSorted = nums.toSorted((a, b) => a - b);\nconsole.log(numSorted);\nlet fruits = ['banana', 'apple', 'cherry'];\nlet fruitSorted = fruits.toSorted();\nconsole.log(fruitSorted);\nlet users = [\n  { name: 'John', age: 30 },\n  { name: 'Jane', age: 25 },\n  { name: 'Bob', age: 35 }\n];\nlet sortedByAge = users.toSorted((a, b) => a.age - b.age);\nconsole.log(sortedByAge);\nlet letters = ['c', 'a', 'b'];\nlet sortedLetters = letters.toSorted();\nconsole.log(sortedLetters);\nlet words = ['hello', 'hi', 'hey'];\nlet sortedByLength = words.toSorted((a, b) => a.length - b.length);\nconsole.log(sortedByLength);\nlet original = [3, 2, 1];\nlet copySorted = original.toSorted();\nconsole.log(original, copySorted);\nlet mixed = [5, 'a', 2, 'b'];\nlet mixedSorted = mixed.toSorted();\nconsole.log(mixedSorted);",
        simpleMeaning: "toSorted returns new sorted array without modifying original.",
        output: "[1,1,3,4,5]\n[3,1,4,1,5]\n[2,4,10,30,50]\n['apple','banana','cherry']\n[{name:'Jane',age:25},{name:'John',age:30},{name:'Bob',age:35}]\n['a','b','c']\n['hi','hey','hello']\n[3,2,1] [1,2,3]\n[2,5,'a','b']",
        note: "toSorted is ES2023. Use with compare function for numbers."
      },
      
      // ==================== SECTION 7: STRING METHODS (86-100) ====================
      {
        name: "86. String length Property",
        description: "length returns number of characters in string. Counts each character (including spaces). Where used? Validation, truncation, display limits.",
        code: "let str = 'Hello World';\nconsole.log(str.length);\nlet empty = '';\nconsole.log(empty.length);\nlet spaces = '   ';\nconsole.log(spaces.length);\nlet emoji = '😊';\nconsole.log(emoji.length);\nlet mixed = 'abc123!@#';\nconsole.log(mixed.length);\nlet text = 'The quick brown fox';\nif(text.length > 20) {\n  console.log('Too long');\n}\nlet userName = 'JohnDoe';\nlet maxLength = 10;\nif(userName.length > maxLength) {\n  console.log('Username too long');\n}\nlet password = 'secret';\nif(password.length < 6) {\n  console.log('Password too short');\n}\nlet multiline = `Line1\nLine2\nLine3`;\nconsole.log(multiline.length);",
        simpleMeaning: "length tells how many characters in a string.",
        output: "11\n0\n3\n2\n9\n20\n5\n11",
        note: "Emojis may count as 2. Use Array.from(str).length for accurate Unicode count."
      },
      {
        name: "87. charAt() Method",
        description: "charAt returns character at specified index. Returns empty string if index invalid. Where used? Access single character, parse string, character checking.",
        code: "let str = 'Hello';\nconsole.log(str.charAt(0));\nconsole.log(str.charAt(1));\nconsole.log(str.charAt(4));\nconsole.log(str.charAt(10));\nlet text = 'JavaScript';\nlet firstChar = text.charAt(0);\nconsole.log(firstChar);\nlet lastChar = text.charAt(text.length - 1);\nconsole.log(lastChar);\nlet word = 'World';\nfor(let i = 0; i < word.length; i++) {\n  console.log(word.charAt(i));\n}\nlet email = 'user@example.com';\nif(email.charAt(0) === '@') {\n  console.log('Invalid email');\n}\nlet str2 = 'abc';\nconsole.log(str2.charAt(0));\nconsole.log(str2.charAt(1));\nconsole.log(str2.charAt(2));\nlet empty = '';\nconsole.log(empty.charAt(0));",
        simpleMeaning: "charAt returns character at given index position.",
        output: "H\ne\no\n\nJ\nt\nW\no\nr\nl\nd\na\nb\nc\n",
        note: "str[index] is shorter but charAt handles out-of-range gracefully."
      },
      {
        name: "88. charCodeAt() Method",
        description: "charCodeAt returns Unicode (UTF-16) code of character at index. Returns NaN for invalid index. Where used? Character codes, encryption, sorting, ASCII operations.",
        code: "let str = 'ABC';\nconsole.log(str.charCodeAt(0));\nconsole.log(str.charCodeAt(1));\nconsole.log(str.charCodeAt(2));\nlet lower = 'a';\nconsole.log(lower.charCodeAt(0));\nlet digit = '5';\nconsole.log(digit.charCodeAt(0));\nlet text = 'Hello';\nlet codes = [];\nfor(let i = 0; i < text.length; i++) {\n  codes.push(text.charCodeAt(i));\n}\nconsole.log(codes);\nlet str2 = '😊';\nconsole.log(str2.charCodeAt(0));\nconsole.log(str2.charCodeAt(1));\nlet char = 'Z';\nlet isUppercase = char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;\nconsole.log(isUppercase);\nlet isDigit = '7';\nlet isNum = isDigit.charCodeAt(0) >= 48 && isDigit.charCodeAt(0) <= 57;\nconsole.log(isNum);\nlet space = ' ';\nconsole.log(space.charCodeAt(0));",
        simpleMeaning: "charCodeAt returns Unicode number of character at index.",
        output: "65\n66\n67\n97\n53\n[72,101,108,108,111]\n55357\n56842\ntrue\ntrue\n32",
        note: "For emojis, use codePointAt() which handles full Unicode."
      },
      {
        name: "89. codePointAt() Method",
        description: "codePointAt returns full Unicode code point (handles emojis, rare characters). Where used? Emoji handling, international text, full Unicode support.",
        code: "let str = '😊';\nconsole.log(str.codePointAt(0));\nlet ascii = 'A';\nconsole.log(ascii.codePointAt(0));\nlet emoji = '🌟';\nconsole.log(emoji.codePointAt(0));\nlet text = 'abc';\nconsole.log(text.codePointAt(0));\nlet combined = '👨‍👩‍👧';\nconsole.log(combined.codePointAt(0));\nlet str2 = 'Hello';\nfor(let i = 0; i < str2.length; i++) {\n  console.log(str2.codePointAt(i));\n}\nlet flag = '🇮🇳';\nconsole.log(flag.codePointAt(0));\nlet heart = '❤️';\nconsole.log(heart.codePointAt(0));\nlet vs = 'VS';\nconsole.log(vs.codePointAt(0));\nlet numbers = '123';\nlet digits = [];\nfor(let char of numbers) {\n  digits.push(char.codePointAt(0) - 48);\n}\nconsole.log(digits);",
        simpleMeaning: "codePointAt returns full Unicode number (handles emojis correctly).",
        output: "128522\n65\n127775\n97\n128104\n72,101,108,108,111\n127470\n10084\n86\n[1,2,3]",
        note: "Use codePointAt instead of charCodeAt for emojis and rare characters."
      },
      {
        name: "90. fromCharCode() Method",
        description: "fromCharCode creates string from Unicode values. Static method. Where used? Generate characters, decode ASCII, create strings from codes.",
        code: "let str = String.fromCharCode(65, 66, 67);\nconsole.log(str);\nlet hello = String.fromCharCode(72, 101, 108, 108, 111);\nconsole.log(hello);\nlet uppercase = '';\nfor(let i = 65; i <= 90; i++) {\n  uppercase += String.fromCharCode(i);\n}\nconsole.log(uppercase);\nlet lowercase = '';\nfor(let i = 97; i <= 122; i++) {\n  lowercase += String.fromCharCode(i);\n}\nconsole.log(lowercase);\nlet digits = '';\nfor(let i = 48; i <= 57; i++) {\n  digits += String.fromCharCode(i);\n}\nconsole.log(digits);\nlet symbol = String.fromCharCode(64);\nconsole.log(symbol);\nlet newline = String.fromCharCode(10);\nconsole.log('Line1' + newline + 'Line2');\nlet emoji = String.fromCharCode(128522);\nconsole.log(emoji);\nlet space = String.fromCharCode(32);\nconsole.log('Hello' + space + 'World');",
        simpleMeaning: "fromCharCode creates string from Unicode values.",
        output: "ABC\nHello\nABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n0123456789\n@\nLine1\nLine2\n😊\nHello World",
        note: "static method, called on String itself, not string instance."
      },
      {
        name: "91. fromCodePoint() Method",
        description: "fromCodePoint creates string from Unicode code points (handles emojis). ES6+. Where used? Emoji generation, full Unicode support.",
        code: "let smiley = String.fromCodePoint(128522);\nconsole.log(smiley);\nlet star = String.fromCodePoint(127775);\nconsole.log(star);\nlet heart = String.fromCodePoint(10084);\nconsole.log(heart);\nlet flag = String.fromCodePoint(127470, 127475);\nconsole.log(flag);\nlet text = String.fromCodePoint(72, 101, 108, 108, 111);\nconsole.log(text);\nlet symbols = String.fromCodePoint(0x1F600, 0x1F601, 0x1F602);\nconsole.log(symbols);\nlet numbers = '';\nfor(let i = 48; i <= 57; i++) {\n  numbers += String.fromCodePoint(i);\n}\nconsole.log(numbers);\nlet combined = String.fromCodePoint(128104, 8205, 128105, 8205, 128103);\nconsole.log(combined);\nlet ascii = String.fromCodePoint(65, 66, 67);\nconsole.log(ascii);",
        simpleMeaning: "fromCodePoint creates string from Unicode code points (handles emojis).",
        output: "😊\n🌟\n❤️\n??\nHello\n😀😁😂\n0123456789\n👨‍👩‍👧\nABC",
        note: "fromCodePoint handles full Unicode; fromCharCode doesn't handle emojis correctly."
      },
      {
        name: "92. includes() Method",
        description: "includes checks if string contains substring. Returns boolean. Case-sensitive. Where used? Search, validation, content checking.",
        code: "let str = 'Hello World';\nconsole.log(str.includes('World'));\nconsole.log(str.includes('world'));\nconsole.log(str.includes('Hello'));\nconsole.log(str.includes('xyz'));\nlet email = 'user@example.com';\nif(email.includes('@')) {\n  console.log('Valid email format');\n}\nlet sentence = 'The quick brown fox';\nif(sentence.includes('quick')) {\n  console.log('Found quick');\n}\nlet text = 'JavaScript is awesome';\nlet hasJS = text.includes('JavaScript');\nconsole.log(hasJS);\nlet filename = 'document.pdf';\nif(filename.includes('.pdf')) {\n  console.log('PDF file');\n}\nlet search = 'hello';\nlet result = search.includes('lo');\nconsole.log(result);\nlet url = 'https://example.com';\nif(url.includes('https')) {\n  console.log('Secure connection');\n}\nlet code = 'const x = 10;';\nlet hasConst = code.includes('const');\nconsole.log(hasConst);",
        simpleMeaning: "includes checks if string contains given substring. Returns true/false.",
        output: "true\nfalse\ntrue\nfalse\nValid email format\nFound quick\ntrue\nPDF file\ntrue\nSecure connection\ntrue",
        note: "Case-sensitive. Use toLowerCase() for case-insensitive search."
      },
      {
        name: "93. startsWith() Method",
        description: "startsWith checks if string starts with given characters. Case-sensitive. Optional position to start checking. Where used? URL checking, prefix validation, file extension.",
        code: "let str = 'Hello World';\nconsole.log(str.startsWith('Hello'));\nconsole.log(str.startsWith('hello'));\nconsole.log(str.startsWith('World'));\nconsole.log(str.startsWith('Hell'));\nlet url = 'https://example.com';\nif(url.startsWith('https')) {\n  console.log('Secure URL');\n}\nlet filename = 'image.jpg';\nif(filename.startsWith('image')) {\n  console.log('Image file');\n}\nlet code = 'function test() {}';\nif(code.startsWith('function')) {\n  console.log('Function declaration');\n}\nlet text = 'JavaScript';\nconsole.log(text.startsWith('Script', 4));\nlet phone = '+1234567890';\nif(phone.startsWith('+')) {\n  console.log('International format');\n}\nlet path = '/users/john/profile';\nif(path.startsWith('/users')) {\n  console.log('User path');\n}\nlet email = 'user@example.com';\nif(email.startsWith('user')) {\n  console.log('Starts with user');\n}",
        simpleMeaning: "startsWith checks if string begins with specified characters.",
        output: "true\nfalse\nfalse\ntrue\nSecure URL\nImage file\nFunction declaration\ntrue\nInternational format\nUser path\nStarts with user",
        note: "Use startsWith for prefix checking. Second parameter is position to start from."
      },
      {
        name: "94. endsWith() Method",
        description: "endsWith checks if string ends with given characters. Case-sensitive. Optional length parameter. Where used? File extension, URL suffix, format validation.",
        code: "let str = 'Hello World';\nconsole.log(str.endsWith('World'));\nconsole.log(str.endsWith('world'));\nconsole.log(str.endsWith('Hello'));\nconsole.log(str.endsWith('rld'));\nlet filename = 'document.pdf';\nif(filename.endsWith('.pdf')) {\n  console.log('PDF document');\n}\nlet image = 'photo.jpg';\nif(image.endsWith('.jpg') || image.endsWith('.png')) {\n  console.log('Image file');\n}\nlet url = 'https://example.com/api';\nif(url.endsWith('/api')) {\n  console.log('API endpoint');\n}\nlet email = 'user@gmail.com';\nif(email.endsWith('@gmail.com')) {\n  console.log('Gmail user');\n}\nlet text = 'Hello World!';\nconsole.log(text.endsWith('World', 11));\nlet code = 'const x = 10;';\nif(code.endsWith(';')) {\n  console.log('Statement ends correctly');\n}\nlet path = '/users/john/';\nif(path.endsWith('/')) {\n  console.log('Directory path');\n}",
        simpleMeaning: "endsWith checks if string ends with specified characters.",
        output: "true\nfalse\nfalse\ntrue\nPDF document\nImage file\nAPI endpoint\nGmail user\ntrue\nStatement ends correctly\nDirectory path",
        note: "Use endsWith for suffix checking (file extensions, URL patterns)."
      },
      {
        name: "95. indexOf() Method",
        description: "indexOf returns first index of substring. Returns -1 if not found. Where used? Find position, check existence, substring location.",
        code: "let str = 'Hello World World';\nconsole.log(str.indexOf('World'));\nconsole.log(str.indexOf('world'));\nconsole.log(str.indexOf('o'));\nconsole.log(str.indexOf('xyz'));\nlet email = 'user@example.com';\nlet atIndex = email.indexOf('@');\nconsole.log(atIndex);\nif(atIndex !== -1) {\n  let username = email.slice(0, atIndex);\n  console.log(username);\n}\nlet text = 'JavaScript is awesome';\nlet spaceIndex = text.indexOf(' ');\nconsole.log(spaceIndex);\nlet url = 'https://example.com';\nlet colonIndex = url.indexOf(':');\nconsole.log(colonIndex);\nlet csv = 'apple,banana,orange';\nlet firstComma = csv.indexOf(',');\nconsole.log(firstComma);\nlet filename = 'image.jpg.jpg';\nlet lastDot = filename.lastIndexOf('.');\nconsole.log(lastDot);\nlet str2 = 'hello hello';\nlet firstHello = str2.indexOf('hello');\nlet secondHello = str2.indexOf('hello', firstHello + 1);\nconsole.log(firstHello, secondHello);",
        simpleMeaning: "indexOf finds first occurrence index of substring. Returns -1 if not found.",
        output: "6\n-1\n4\n-1\n4\nuser\n10\n5\n5\n9\n0 6",
        note: "Use lastIndexOf for last occurrence. Use includes for boolean check."
      },
      {
        name: "96. lastIndexOf() Method",
        description: "lastIndexOf returns last index of substring. Searches from end. Returns -1 if not found. Where used? File extension, last occurrence, reverse search.",
        code: "let str = 'Hello World World';\nconsole.log(str.lastIndexOf('World'));\nconsole.log(str.lastIndexOf('world'));\nconsole.log(str.lastIndexOf('o'));\nlet filename = 'image.jpg.png';\nlet lastDot = filename.lastIndexOf('.');\nlet extension = filename.slice(lastDot + 1);\nconsole.log(extension);\nlet text = 'apple banana apple';\nlet lastApple = text.lastIndexOf('apple');\nconsole.log(lastApple);\nlet path = '/users/john/documents/file.txt';\nlet lastSlash = path.lastIndexOf('/');\nlet fileName = path.slice(lastSlash + 1);\nconsole.log(fileName);\nlet str2 = 'abc abc abc';\nconsole.log(str2.lastIndexOf('abc'));\nlet email = 'john.doe@example.com';\nlet lastDotIndex = email.lastIndexOf('.');\nlet domain = email.slice(lastDotIndex + 1);\nconsole.log(domain);\nlet sentence = 'The cat and the dog';\nlet lastThe = sentence.lastIndexOf('the');\nconsole.log(lastThe);\nlet numbers = '1,2,3,4,5';\nlet lastComma = numbers.lastIndexOf(',');\nconsole.log(lastComma);",
        simpleMeaning: "lastIndexOf finds last occurrence index of substring.",
        output: "12\n-1\n7\npng\n14\nfile.txt\n8\ncom\n14\n7",
        note: "Use lastIndexOf to find last occurrence (like file extension)."
      },
      {
        name: "97. slice() Method",
        description: "slice extracts part of string. Returns new string. Start index (inclusive), end index (exclusive). Negative indices count from end. Where used? Extract substring, remove parts, get domain.",
        code: "let str = 'Hello World';\nconsole.log(str.slice(0, 5));\nconsole.log(str.slice(6));\nconsole.log(str.slice(6, 11));\nconsole.log(str.slice(-5));\nconsole.log(str.slice(-5, -1));\nlet email = 'user@example.com';\nlet username = email.slice(0, email.indexOf('@'));\nlet domain = email.slice(email.indexOf('@') + 1);\nconsole.log(username, domain);\nlet filename = 'document.pdf';\nlet name = filename.slice(0, filename.lastIndexOf('.'));\nlet ext = filename.slice(filename.lastIndexOf('.') + 1);\nconsole.log(name, ext);\nlet text = 'JavaScript';\nconsole.log(text.slice(0, 4));\nconsole.log(text.slice(4));\nlet path = '/users/john';\nlet parent = path.slice(0, path.lastIndexOf('/'));\nconsole.log(parent || '/');\nlet str2 = 'Hello';\nconsole.log(str2.slice(10));\nlet str3 = 'abcdef';\nconsole.log(str3.slice(1, -1));",
        simpleMeaning: "slice extracts part of string from start to end (end exclusive).",
        output: "Hello\nWorld\nWorld\nWorld\nWorl\nuser example.com\ndocument pdf\nJava\nScript\n/users\n\nbcde",
        note: "slice doesn't modify original. Negative indices count from end."
      },
      {
        name: "98. substring() Method",
        description: "substring extracts part of string. Similar to slice but cannot use negative indices (treats as 0). Where used? Extract substring when indices may be invalid.",
        code: "let str = 'Hello World';\nconsole.log(str.substring(0, 5));\nconsole.log(str.substring(6));\nconsole.log(str.substring(6, 11));\nconsole.log(str.substring(5, 0));\nlet email = 'user@example.com';\nlet at = email.indexOf('@');\nlet username = email.substring(0, at);\nconsole.log(username);\nlet text = 'JavaScript';\nconsole.log(text.substring(4, 10));\nlet str2 = 'abcdef';\nconsole.log(str2.substring(2, 4));\nconsole.log(str2.substring(4, 2));\nlet filename = 'document.pdf';\nlet dot = filename.lastIndexOf('.');\nlet name = filename.substring(0, dot);\nconsole.log(name);\nlet str3 = 'Hello';\nconsole.log(str3.substring(-3));\nconsole.log(str3.substring(-3, 2));\nlet str4 = 'World';\nconsole.log(str4.substring(1, -2));\nconsole.log(str4.substring(-2, 1));",
        simpleMeaning: "substring extracts part. Negative indices become 0. Swaps if start > end.",
        output: "Hello\nWorld\nWorld\nHello\nuser\nScript\ncd\ncd\ndocument\nHello\nHe\nW\nW",
        note: "substring is safer with invalid indices. slice is more predictable with negatives."
      },
      {
        name: "99. substr() Method (Deprecated)",
        description: "substr extracts substring. First param = start, second = length. Deprecated, use slice/substring instead. Where used? Legacy code only.",
        code: "let str = 'Hello World';\nconsole.log(str.substr(0, 5));\nconsole.log(str.substr(6));\nconsole.log(str.substr(6, 5));\nconsole.log(str.substr(-5));\nconsole.log(str.substr(-5, 3));\nlet text = 'JavaScript';\nconsole.log(text.substr(4, 6));\nlet email = 'user@example.com';\nlet at = email.indexOf('@');\nlet domain = email.substr(at + 1);\nconsole.log(domain);\nlet filename = 'document.pdf';\nlet dot = filename.lastIndexOf('.');\nlet ext = filename.substr(dot + 1);\nconsole.log(ext);\nlet str2 = 'abcdef';\nconsole.log(str2.substr(1, 3));\nconsole.log(str2.substr(-3, 2));\nconsole.log(str2.substr(-2));\nlet str3 = 'Hello';\n// console.log(str3.substr(10));\nlet oldCode = 'Hello World'.substr(6, 5);\nconsole.log(oldCode);",
        simpleMeaning: "substr extracts by start and length. Deprecated - use slice instead.",
        output: "Hello\nWorld\nWorld\nWorld\nWor\nScript\nexample.com\npdf\nbcd\ncd\nef\nWorld",
        note: "substr is deprecated. Use slice(start, end) or substring(start, end) instead."
      },
      {
        name: "100. split() Method",
        description: "split divides string into array by separator. Can limit array length. Where used? CSV parsing, sentence to words, URL parameters, tokenization.",
        code: "let str = 'apple,banana,orange';\nlet fruits = str.split(',');\nconsole.log(fruits);\nlet sentence = 'Hello World from JavaScript';\nlet words = sentence.split(' ');\nconsole.log(words);\nlet csv = 'name,age,city\\nJohn,25,NYC\\nJane,30,LA';\nlet rows = csv.split('\\n');\nconsole.log(rows);\nlet str2 = 'a,b,c,d,e';\nlet limited = str2.split(',', 3);\nconsole.log(limited);\nlet text = 'Hello';\nlet chars = text.split('');\nconsole.log(chars);\nlet url = 'https://example.com/path?query=1';\nlet parts = url.split('/');\nconsole.log(parts);\nlet data = 'name=John&age=25&city=NYC';\nlet params = data.split('&');\nparams.forEach(p => {\n  let [key, value] = p.split('=');\n  console.log(`${key}: ${value}`);\n});\nlet str3 = 'Hello   World';\nlet splitBySpace = str3.split(' ');\nconsole.log(splitBySpace);\nlet splitByRegex = str3.split(/\\s+/);\nconsole.log(splitByRegex);\nlet str4 = 'a,b,c';\nlet result = str4.split(',');\nconsole.log(result);",
        simpleMeaning: "split divides string into array using separator.",
        output: "['apple','banana','orange']\n['Hello','World','from','JavaScript']\n['name,age,city','John,25,NYC','Jane,30,LA']\n['a','b','c']\n['H','e','l','l','o']\n['https:','','example.com','path?query=1']\nname: John, age: 25, city: NYC\n['Hello','','','World']\n['Hello','World']\n['a','b','c']",
        note: "Use regex /\\s+/ for multiple spaces. Empty separator splits into characters."
      },// ==================== SECTION 7: STRING METHODS (101-115) ====================
      {
        name: "101. replace() Method",
        description: "replace replaces first occurrence of pattern with replacement. Uses string or regex. Where used? Text formatting, find and replace, string manipulation.",
        code: "let str = 'Hello World World';\nconsole.log(str.replace('World', 'JavaScript'));\nconsole.log(str.replace(/World/, 'JS'));\nconsole.log(str.replace(/World/g, 'JS'));\nlet text = 'The cat sat on the mat';\nconsole.log(text.replace('cat', 'dog'));\nlet phone = '123-456-7890';\nlet noHyphen = phone.replace(/-/g, '');\nconsole.log(noHyphen);\nlet name = 'John Doe';\nlet initials = name.replace(/(\\w)\\w*\\s(\\w)\\w*/, '$1.$2');\nconsole.log(initials);\nlet price = '$10.50';\nlet number = price.replace('$', '');\nconsole.log(number);\nlet msg = 'Hello %name%, welcome!';\nlet greeting = msg.replace('%name%', 'John');\nconsole.log(greeting);\nlet str2 = 'abc123def456';\nlet onlyLetters = str2.replace(/[0-9]/g, '');\nconsole.log(onlyLetters);\nlet multi = 'a1b2c3';\nlet replaced = multi.replace(/\\d/g, m => parseInt(m) * 2);\nconsole.log(replaced);",
        simpleMeaning: "replace replaces first match with new string. Use g flag for all matches.",
        output: "Hello JavaScript World\nHello JS World\nHello JS JS\nThe dog sat on the mat\n1234567890\nJ.D\n10.50\nHello John, welcome!\nabcdef\na2b4c6",
        note: "Use replaceAll (ES2021) for replacing all without regex. Use /g flag for global replace."
      },
      {
        name: "102. replaceAll() Method",
        description: "replaceAll replaces all occurrences of pattern (string or regex with g flag). ES2021. Where used? Global find/replace, text cleanup, data normalization.",
        code: "let str = 'Hello World World';\nconsole.log(str.replaceAll('World', 'JavaScript'));\nlet text = 'a b c a b c';\nconsole.log(text.replaceAll('a', 'x'));\nlet email = 'user@example.com';\nconsole.log(email.replaceAll('.', '-'));\nlet phone = '123-456-7890';\nconsole.log(phone.replaceAll('-', ''));\nlet sentence = 'The cat and the hat';\nconsole.log(sentence.replaceAll('the', 'a'));\nlet str2 = 'Hello Hello Hello';\nconsole.log(str2.replaceAll('Hello', 'Hi'));\nlet messy = '  spaced   out  ';\nlet clean = messy.replaceAll(' ', '');\nconsole.log(clean);\nlet csv = 'a,b,c,a,b,c';\nlet replaced = csv.replaceAll('a', 'z');\nconsole.log(replaced);\nlet template = 'Hello {name}, welcome to {city}';\nlet result = template.replaceAll('{name}', 'John').replaceAll('{city}', 'NYC');\nconsole.log(result);\nlet html = '<div>text</div><div>more</div>';\nlet stripped = html.replaceAll(/<\\/?div>/g, '');\nconsole.log(stripped);",
        simpleMeaning: "replaceAll replaces all occurrences of pattern. ES2021 feature.",
        output: "Hello JavaScript JavaScript\na b c x b c\nuser@example-com\n1234567890\nThe cat and the hat\nHi Hi Hi\nspacedout\nz,b,c,z,b,c\nHello John, welcome to NYC\ntextmore",
        note: "replaceAll is ES2021. For older browsers, use regex with /g flag."
      },
      {
        name: "103. trim() Method",
        description: "trim removes whitespace from both ends of string. Spaces, tabs, newlines. Where used? Form input cleanup, data sanitization, text processing.",
        code: "let str = '  Hello World  ';\nconsole.log(str.trim());\nlet text = '\\n\\tHello\\t\\n';\nconsole.log(text.trim());\nlet userInput = '  John Doe  ';\nlet cleaned = userInput.trim();\nconsole.log(cleaned);\nlet spaces = '   ';\nconsole.log(spaces.trim());\nlet mixed = ' Hello\\n World\\t ';\nconsole.log(mixed.trim());\nlet password = '  secret123  ';\nconsole.log(password.trim());\nlet email = ' user@example.com ';\nlet cleanEmail = email.trim();\nconsole.log(cleanEmail);\nlet textarea = '\\n\\nHello World\\n\\n';\nconsole.log(textarea.trim());\nlet str2 = 'No spaces';\nconsole.log(str2.trim());\nlet multiline = '\\n  Line1\\n  Line2  \\n';\nconsole.log(multiline.trim());",
        simpleMeaning: "trim removes whitespace from start and end of string.",
        output: "Hello World\nHello\nJohn Doe\n\nHello World\nsecret123\nuser@example.com\nHello World\nNo spaces\nLine1\n  Line2",
        note: "Use trimStart() for start only, trimEnd() for end only."
      },
      {
        name: "104. trimStart() / trimLeft()",
        description: "trimStart removes whitespace from beginning only. trimLeft is alias. Where used? Left padding removal, clean start of string.",
        code: "let str = '  Hello World  ';\nconsole.log(str.trimStart());\nlet text = '\\n\\tHello';\nconsole.log(text.trimStart());\nlet spaces = '   text   ';\nconsole.log(spaces.trimStart());\nlet userInput = '  John Doe';\nlet cleaned = userInput.trimStart();\nconsole.log(cleaned);\nlet leftOnly = '   left spaced';\nconsole.log(leftOnly.trimStart());\nlet str2 = 'Hello  ';\nconsole.log(str2.trimStart());\nlet multiline = '\\n  Line1\\n  Line2';\nconsole.log(multiline.trimStart());\nlet mixed = ' \\t Hello';\nconsole.log(mixed.trimStart());\nlet numbers = '   123';\nconsole.log(numbers.trimStart());\nlet str3 = 'text   ';\nconsole.log(str3.trimStart());",
        simpleMeaning: "trimStart removes whitespace from start only.",
        output: "Hello World  \nHello\ntext   \nJohn Doe\nleft spaced\nHello  \nLine1\n  Line2\nHello\n123\ntext   ",
        note: "trimStart is ES2019. trimLeft is alias for backward compatibility."
      },
      {
        name: "105. trimEnd() / trimRight()",
        description: "trimEnd removes whitespace from end only. trimRight is alias. Where used? Right padding removal, clean end of string.",
        code: "let str = '  Hello World  ';\nconsole.log(str.trimEnd());\nlet text = 'Hello\\t\\n';\nconsole.log(text.trimEnd());\nlet spaces = '   text   ';\nconsole.log(spaces.trimEnd());\nlet userInput = 'John Doe  ';\nlet cleaned = userInput.trimEnd();\nconsole.log(cleaned);\nlet rightOnly = 'right spaced   ';\nconsole.log(rightOnly.trimEnd());\nlet str2 = '  Hello';\nconsole.log(str2.trimEnd());\nlet multiline = 'Line1\\n  Line2  \\n';\nconsole.log(multiline.trimEnd());\nlet mixed = 'Hello \\t ';\nconsole.log(mixed.trimEnd());\nlet numbers = '123   ';\nconsole.log(numbers.trimEnd());\nlet str3 = '   text';\nconsole.log(str3.trimEnd());",
        simpleMeaning: "trimEnd removes whitespace from end only.",
        output: "  Hello World\nHello\n   text\nJohn Doe\nright spaced\n  Hello\nLine1\\n  Line2\nHello\n123\n   text",
        note: "trimEnd is ES2019. trimRight is alias for backward compatibility."
      },
      {
        name: "106. padStart() Method",
        description: "padStart pads string from start to target length. Where used? Zero padding, alignment, ID formatting, time formatting.",
        code: "let num = '5';\nconsole.log(num.padStart(3, '0'));\nlet str = '123';\nconsole.log(str.padStart(5, 'x'));\nlet hour = '9';\nconsole.log(hour.padStart(2, '0'));\nlet code = '42';\nconsole.log(code.padStart(6, '#'));\nlet text = 'hi';\nconsole.log(text.padStart(5, ' '));\nlet id = '7';\nconsole.log(id.padStart(4, '0'));\nlet binary = '101';\nconsole.log(binary.padStart(8, '0'));\nlet price = '99';\nconsole.log(price.padStart(5, '$'));\nlet month = '3';\nconsole.log(month.padStart(2, '0'));\nlet str2 = 'abc';\nconsole.log(str2.padStart(3, 'z'));\nconsole.log(str2.padStart(2, 'z'));\nlet time = '7:30';\nconsole.log(time.padStart(8, '0'));",
        simpleMeaning: "padStart adds characters to beginning until string reaches target length.",
        output: "005\nxx123\n09\n####42\n  hi\n0007\n00000101\n$$$99\n03\nabc\nabc\n00:7:30",
        note: "If target length <= string length, returns original string unchanged."
      },
      {
        name: "107. padEnd() Method",
        description: "padEnd pads string from end to target length. Where used? Right alignment, table formatting, spacing, logging.",
        code: "let num = '5';\nconsole.log(num.padEnd(3, '0'));\nlet str = '123';\nconsole.log(str.padEnd(5, 'x'));\nlet name = 'John';\nconsole.log(name.padEnd(10, '.'));\nlet price = '$99';\nconsole.log(price.padEnd(8, ' '));\nlet text = 'Hi';\nconsole.log(text.padEnd(6, '!'));\nlet status = 'OK';\nconsole.log(status.padEnd(5, ' '));\nlet code = 'ABC';\nconsole.log(code.padEnd(6, '-'));\nlet col1 = 'Name';\nlet col2 = 'Age';\nlet formatted = `${col1.padEnd(10)}${col2.padEnd(5)}`;\nconsole.log(formatted);\nlet str2 = 'hello';\nconsole.log(str2.padEnd(8, '?'));\nlet binary = '101';\nconsole.log(binary.padEnd(8, '0'));\nlet spaces = 'text';\nconsole.log(spaces.padEnd(10));",
        simpleMeaning: "padEnd adds characters to end until string reaches target length.",
        output: "500\n123xx\nJohn......\n$99     \nHi!!!!\nOK   \nABC---\nName      Age \nhello???\n10100000\ntext      ",
        note: "UsepadEnd for table formatting and text alignment."
      },
      {
        name: "108. repeat() Method",
        description: "repeat returns string repeated specified number of times. Where used? Create separators, generate patterns, test data, padding.",
        code: "let str = 'Hi';\nconsole.log(str.repeat(3));\nlet line = '-';\nconsole.log(line.repeat(20));\nlet star = '*';\nconsole.log(star.repeat(5));\nlet space = ' ';\nlet indent = space.repeat(4);\nconsole.log(indent + 'text');\nlet pattern = 'abc';\nconsole.log(pattern.repeat(2));\nlet zero = '0';\nconsole.log(zero.repeat(3));\nlet arrow = '=>';\nconsole.log(arrow.repeat(5));\nlet dot = '.';\nconsole.log(dot.repeat(10));\nlet str2 = 'x';\nconsole.log(str2.repeat(0));\nlet str3 = 'Hello';\nconsole.log(str3.repeat(2));\nlet table = '+' + '-'.repeat(10) + '+';\nconsole.log(table);\nlet repeat = 'NA'.repeat(3);\nconsole.log(repeat);",
        simpleMeaning: "repeat returns string repeated n times.",
        output: "HiHiHi\n--------------------\n*****\n    text\nabcabc\n000\n=>=>=>=>=>\n..........\n\nHelloHello\n+----------+\nNANANA",
        note: "repeat throws error for negative or infinite count. Count is floored to integer."
      },
      {
        name: "109. toLowerCase() Method",
        description: "toLowerCase converts entire string to lowercase. Where used? Case-insensitive comparison, normalization, search standardization.",
        code: "let str = 'Hello World';\nconsole.log(str.toLowerCase());\nlet text = 'JavaScript';\nconsole.log(text.toLowerCase());\nlet userInput = 'JOHN';\nlet normalized = userInput.toLowerCase();\nconsole.log(normalized);\nlet email = 'User@Example.COM';\nlet cleanEmail = email.toLowerCase();\nconsole.log(cleanEmail);\nlet str2 = 'ABC123';\nconsole.log(str2.toLowerCase());\nlet mixed = 'HeLLo WoRLd';\nconsole.log(mixed.toLowerCase());\nlet search = 'JAVA';\nlet text2 = 'JavaScript is great';\nif(text2.toLowerCase().includes(search.toLowerCase())) {\n  console.log('Found');\n}\nlet special = 'ÄÖÜ';\nconsole.log(special.toLowerCase());\nlet str3 = '  HELLO  ';\nconsole.log(str3.toLowerCase());\nlet code = 'CLASS_NAME';\nconsole.log(code.toLowerCase());",
        simpleMeaning: "toLowerCase converts all characters to lowercase.",
        output: "hello world\njavascript\njohn\nuser@example.com\nabc123\nhello world\nFound\näöü\n  hello  \nclass_name",
        note: "Use for case-insensitive string comparison. Works with Unicode."
      },
      {
        name: "110. toUpperCase() Method",
        description: "toUpperCase converts entire string to uppercase. Where used? Standardization, display formatting, shouting text.",
        code: "let str = 'Hello World';\nconsole.log(str.toUpperCase());\nlet text = 'JavaScript';\nconsole.log(text.toUpperCase());\nlet userInput = 'john';\nlet normalized = userInput.toUpperCase();\nconsole.log(normalized);\nlet email = 'user@example.com';\nconsole.log(email.toUpperCase());\nlet str2 = 'abc123';\nconsole.log(str2.toUpperCase());\nlet mixed = 'HeLLo WoRLd';\nconsole.log(mixed.toUpperCase());\nlet name = 'john doe';\nlet formatted = name.split(' ').map(n => n[0].toUpperCase() + n.slice(1)).join(' ');\nconsole.log(formatted);\nlet special = 'äöü';\nconsole.log(special.toUpperCase());\nlet str3 = '  hello  ';\nconsole.log(str3.toUpperCase());\nlet code = 'class_name';\nconsole.log(code.toUpperCase());",
        simpleMeaning: "toUpperCase converts all characters to uppercase.",
        output: "HELLO WORLD\nJAVASCRIPT\nJOHN\nUSER@EXAMPLE.COM\nABC123\nHELLO WORLD\nJohn Doe\nÄÖÜ\n  HELLO  \nCLASS_NAME",
        note: "Use for standardizing text for comparison. Works with Unicode."
      },
      {
        name: "111. match() Method",
        description: "match searches string for regex match. Returns array of matches or null. Where used? Pattern matching, extracting data, validation.",
        code: "let str = 'The rain in Spain';\nlet matches = str.match(/ain/g);\nconsole.log(matches);\nlet text = 'Hello 123 World 456';\nlet numbers = text.match(/\\d+/g);\nconsole.log(numbers);\nlet email = 'user@example.com';\nlet emailMatch = email.match(/^[^@]+@[^@]+\\.[^@]+$/);\nconsole.log(emailMatch);\nlet str2 = 'abc123def456';\nlet digits = str2.match(/\\d+/g);\nconsole.log(digits);\nlet colors = 'red, green, blue';\nlet colorMatches = colors.match(/\\w+/g);\nconsole.log(colorMatches);\nlet phone = '123-456-7890';\nlet phoneParts = phone.match(/(\\d{3})-(\\d{3})-(\\d{4})/);\nconsole.log(phoneParts);\nlet html = '<div>text</div><span>more</span>';\nlet tags = html.match(/<\\/?\\w+>/g);\nconsole.log(tags);\nlet str3 = 'No matches here';\nlet noMatch = str3.match(/\\d+/g);\nconsole.log(noMatch);\nlet url = 'https://example.com/path?q=1';\nlet protocol = url.match(/^https?:/);\nconsole.log(protocol);",
        simpleMeaning: "match finds regex matches in string. Returns array or null.",
        output: "['ain','ain']\n['123','456']\n['user@example.com']\n['123','456']\n['red','green','blue']\n['123-456-7890','123','456','7890']\n['<div>','</div>','<span>','</span>']\nnull\n['https:']",
        note: "Use /g flag for all matches, without returns first match with capture groups."
      },
      {
        name: "112. matchAll() Method",
        description: "matchAll returns iterator of all regex matches (ES2020). Includes capture groups. Where used? Extract multiple matches with groups, parsing.",
        code: "let str = 'Price: $10, $20, $30';\nlet regex = /\\$(\\d+)/g;\nlet matches = str.matchAll(regex);\nfor(let match of matches) {\n  console.log(`Full: ${match[0]}, Number: ${match[1]}`);\n}\nlet text = 'John:25, Jane:30, Bob:35';\nlet personRegex = /(\\w+):(\\d+)/g;\nlet persons = text.matchAll(personRegex);\nfor(let p of persons) {\n  console.log(`Name: ${p[1]}, Age: ${p[2]}`);\n}\nlet html = '<div id=\"main\">content</div><div id=\"side\">menu</div>';\nlet tagRegex = /<div id=\"(\\w+)\">(.*?)<\\/div>/g;\nlet divs = html.matchAll(tagRegex);\nfor(let div of divs) {\n  console.log(`ID: ${div[1]}, Content: ${div[2]}`);\n}\nlet str2 = 'a1b2c3';\nlet digitRegex = /(\\w)(\\d)/g;\nlet pairs = str2.matchAll(digitRegex);\nlet result = [...pairs];\nconsole.log(result);\nlet colors = 'red:FF0000, green:00FF00, blue:0000FF';\nlet colorRegex = /(\\w+):([A-F0-9]{6})/g;\nlet colorMatches = colors.matchAll(colorRegex);\nfor(let c of colorMatches) {\n  console.log(c[1], c[2]);\n}",
        simpleMeaning: "matchAll returns iterator of all regex matches with capture groups.",
        output: "Full: $10, Number: 10\nFull: $20, Number: 20\nFull: $30, Number: 30\nName: John, Age: 25\nName: Jane, Age: 30\nName: Bob, Age: 35\nID: main, Content: content\nID: side, Content: menu\n[[...]]\nred FF0000\ngreen 00FF00\nblue 0000FF",
        note: "matchAll is ES2020. Use with /g flag. Returns iterator, spread to array."
      },
      {
        name: "113. search() Method",
        description: "search finds regex match index. Returns first match index or -1. Where used? Find position, check pattern existence.",
        code: "let str = 'Hello World';\nconsole.log(str.search('World'));\nconsole.log(str.search('world'));\nconsole.log(str.search(/world/i));\nconsole.log(str.search(/\\d+/));\nlet text = 'The year is 2024';\nlet yearIndex = text.search(/\\d+/);\nconsole.log(yearIndex);\nlet email = 'user@example.com';\nlet atIndex = email.search('@');\nconsole.log(atIndex);\nlet phone = '123-456-7890';\nlet firstDigit = phone.search(/\\d/);\nconsole.log(firstDigit);\nlet str2 = 'abc123def';\nlet digitIndex = str2.search(/\\d/);\nconsole.log(digitIndex);\nlet url = 'https://example.com';\nlet colonIndex = url.search(':');\nconsole.log(colonIndex);\nlet sentence = 'The quick brown fox';\nlet wordIndex = sentence.search('quick');\nconsole.log(wordIndex);\nlet notFound = sentence.search('xyz');\nconsole.log(notFound);\nlet pattern = 'Hello';\nlet index = pattern.search('l');\nconsole.log(index);",
        simpleMeaning: "search returns index of first regex match or -1.",
        output: "6\n-1\n6\n-1\n12\n4\n0\n3\n5\n4\n-1\n2",
        note: "search doesn't support /g flag. Use indexOf for simple strings, search for regex."
      },
      {
        name: "114. localeCompare() Method",
        description: "localeCompare compares strings in current locale. Returns negative, zero, positive. Where used? Sorting in different languages, custom ordering.",
        code: "let a = 'apple';\nlet b = 'banana';\nconsole.log(a.localeCompare(b));\nconsole.log(b.localeCompare(a));\nconsole.log(a.localeCompare(a));\nlet str1 = 'résumé';\nlet str2 = 'resume';\nconsole.log(str1.localeCompare(str2));\nlet words = ['banana', 'apple', 'cherry', 'date'];\nwords.sort((a, b) => a.localeCompare(b));\nconsole.log(words);\nlet names = ['Zoë', 'Adam', 'Émile'];\nnames.sort((a, b) => a.localeCompare(b));\nconsole.log(names);\nlet items = ['Item 10', 'Item 2', 'Item 1'];\nitems.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));\nconsole.log(items);\nlet a1 = 'a';\nlet a2 = 'A';\nconsole.log(a1.localeCompare(a2));\nconsole.log(a1.localeCompare(a2, undefined, { sensitivity: 'base' }));\nlet str3 = 'hello';\nlet str4 = 'HELLO';\nconsole.log(str3.localeCompare(str4, undefined, { sensitivity: 'base' }));\nlet numbers = ['10', '2', '1', '20'];\nnumbers.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));\nconsole.log(numbers);",
        simpleMeaning: "localeCompare compares strings in current language order.",
        output: "-1\n1\n0\n-1\n['apple','banana','cherry','date']\n['Adam','Émile','Zoë']\n['Item 1','Item 2','Item 10']\n1\n0\n0\n['1','2','10','20']",
        note: "Use for sorting non-English text. Options: sensitivity, numeric, caseFirst."
      },
      {
        name: "115. normalize() Method",
        description: "normalize standardizes Unicode string representation. NFC, NFD, NFKC, NFKD forms. Where used? Unicode normalization, text comparison.",
        code: "let str1 = 'café';\nlet str2 = 'café';\nconsole.log(str1.length);\nconsole.log(str2.length);\nconsole.log(str1 === str2);\nconsole.log(str1.normalize() === str2.normalize());\nlet text1 = 'é';\nlet text2 = 'é';\nconsole.log(text1.normalize('NFC') === text2.normalize('NFC'));\nlet text3 = 'ﬀ';\nlet text4 = 'ff';\nconsole.log(text3.normalize('NFKC') === text4.normalize('NFKC'));\nlet str = 'ä';\nconsole.log(str.normalize('NFD').length);\nconsole.log(str.normalize('NFC').length);\nlet names = ['José', 'José'];\nlet normalized = names.map(n => n.normalize());\nconsole.log(normalized[0] === normalized[1]);\nlet search = 'café';\nlet target = 'café';\nif(search.normalize() === target.normalize()) {\n  console.log('Matched');\n}\nlet text = 'ﬁ';\nconsole.log(text.normalize('NFKC'));",
        simpleMeaning: "normalize standardizes Unicode for consistent comparison.",
        output: "4\n5\nfalse\ntrue\ntrue\ntrue\n3\n2\ntrue\nMatched\nfi",
        note: "Important for comparing user input with database values. NFC is most common."
      },
      
      // ==================== SECTION 8: MATH OBJECT (116-125) ====================
      {
        name: "116. Math.PI",
        description: "Math.PI is mathematical constant π (3.14159...). Where used? Circle calculations, trigonometry, geometry.",
        code: "console.log(Math.PI);\nlet radius = 5;\nlet circumference = 2 * Math.PI * radius;\nconsole.log(circumference);\nlet area = Math.PI * radius ** 2;\nconsole.log(area);\nlet diameter = 10;\nlet circleArea = Math.PI * (diameter / 2) ** 2;\nconsole.log(circleArea);\nlet radians = Math.PI / 2;\nlet degrees = 180;\nlet radiansFromDeg = degrees * Math.PI / 180;\nconsole.log(radiansFromDeg);\nlet circle = Math.PI.toFixed(5);\nconsole.log(circle);\nlet tau = Math.PI * 2;\nconsole.log(tau);\nlet halfPi = Math.PI / 2;\nconsole.log(halfPi);\nlet quarterPi = Math.PI / 4;\nconsole.log(quarterPi);\nlet sin90 = Math.sin(Math.PI / 2);\nconsole.log(sin90);",
        simpleMeaning: "Math.PI is the mathematical constant π (3.14159).",
        output: "3.141592653589793\n31.41592653589793\n78.53981633974483\n78.53981633974483\n3.141592653589793\n3.14159\n6.283185307179586\n1.5707963267948966\n0.7853981633974483\n1",
        note: "Use Math.PI for any circle-related calculations."
      },
      {
        name: "117. Math.E",
        description: "Math.E is Euler's number (2.71828...). Where used? Exponential growth, compound interest, natural logarithm.",
        code: "console.log(Math.E);\nlet exponential = Math.exp(1);\nconsole.log(exponential);\nlet compoundInterest = 1000 * Math.pow(Math.E, 0.05 * 3);\nconsole.log(compoundInterest);\nlet naturalLog = Math.log(Math.E);\nconsole.log(naturalLog);\nlet eSquared = Math.pow(Math.E, 2);\nconsole.log(eSquared);\nlet eToTheX = Math.exp(2);\nconsole.log(eToTheX);\nlet eValue = Math.E.toFixed(5);\nconsole.log(eValue);\nlet growth = 1 * Math.pow(Math.E, 0.1);\nconsole.log(growth);\nlet continuousDecay = 100 * Math.pow(Math.E, -0.05 * 10);\nconsole.log(continuousDecay);\nlet euler = Math.E;\nconsole.log(euler);",
        simpleMeaning: "Math.E is Euler's number (2.71828) for exponential calculations.",
        output: "2.718281828459045\n2.718281828459045\n1161.834242728283\n1\n7.38905609893065\n7.38905609893065\n2.71828\n1.1051709180756477\n60.65306597126334\n2.718281828459045",
        note: "Use Math.E with exponential growth/decay formulas."
      },
      {
        name: "118. Math.LN2",
        description: "Math.LN2 is natural logarithm of 2 (0.693...). Where used? Logarithm calculations, binary logarithm, complexity analysis.",
        code: "console.log(Math.LN2);\nlet log2of8 = Math.log(8) / Math.LN2;\nconsole.log(log2of8);\nlet bits = 10;\nlet combinations = Math.pow(2, bits);\nlet logCombinations = Math.log(combinations) / Math.LN2;\nconsole.log(logCombinations);\nlet logBase2 = (x) => Math.log(x) / Math.LN2;\nconsole.log(logBase2(16));\nconsole.log(logBase2(32));\nlet ln2 = Math.LN2;\nconsole.log(ln2.toFixed(5));\nlet halfLife = Math.log(2) / 0.1;\nconsole.log(halfLife);\nlet log2 = Math.LN2;\nconsole.log(log2);\nlet logOf2 = Math.log(2);\nconsole.log(logOf2);\nlet log2e = 1 / Math.LN2;\nconsole.log(log2e);",
        simpleMeaning: "Math.LN2 is natural log of 2 (ln 2).",
        output: "0.6931471805599453\n3\n10\n4\n5\n0.69315\n6.931471805599453\n0.6931471805599453\n0.6931471805599453\n1.4426950408889634",
        note: "Use ln(2) for binary logarithm calculations."
      },
      {
        name: "119. Math.LN10",
        description: "Math.LN10 is natural logarithm of 10 (2.302585...). Where used? Logarithm calculations, decibels, Richter scale.",
        code: "console.log(Math.LN10);\nlet log10of1000 = Math.log(1000) / Math.LN10;\nconsole.log(log10of1000);\nlet magnitude = 6;\nlet energyRatio = Math.pow(10, 1.5 * magnitude);\nlet logEnergy = Math.log(energyRatio) / Math.LN10;\nconsole.log(logEnergy);\nlet decibels = 100;\nlet powerRatio = Math.pow(10, decibels / 10);\nlet logPower = Math.log(powerRatio) / Math.LN10;\nconsole.log(logPower);\nlet ln10 = Math.LN10;\nconsole.log(ln10.toFixed(5));\nlet logBase10 = (x) => Math.log(x) / Math.LN10;\nconsole.log(logBase10(100));\nconsole.log(logBase10(1000));\nlet pH = -Math.log10(0.0001);\nconsole.log(pH);\nlet logOf10 = Math.log(10);\nconsole.log(logOf10);",
        simpleMeaning: "Math.LN10 is natural log of 10 (ln 10).",
        output: "2.302585092994046\n3\n9\n10\n2.30259\n2\n3\n4\n2.302585092994046",
        note: "Use for base-10 logarithm calculations."
      },
      {
        name: "120. Math.LOG2E",
        description: "Math.LOG2E is base-2 logarithm of e (1.44269...). Where used? Information theory, bit calculations, binary logs.",
        code: "console.log(Math.LOG2E);\nlet bitsFromNats = 5 * Math.LOG2E;\nconsole.log(bitsFromNats);\nlet log2E = Math.LOG2E;\nconsole.log(log2E.toFixed(5));\nlet shannon = 1 / Math.LOG2E;\nconsole.log(shannon);\nlet entropy = 2.3;\nlet bits = entropy * Math.LOG2E;\nconsole.log(bits);\nlet log2 = Math.LOG2E;\nconsole.log(log2);\nlet logBase2OfE = Math.LOG2E;\nconsole.log(logBase2OfE);\nlet binaryEntropy = 3 * Math.LOG2E;\nconsole.log(binaryEntropy);\nlet log2e = Math.LOG2E;\nlet eValue = Math.E;\nconsole.log(Math.pow(2, log2e));",
        simpleMeaning: "Math.LOG2E is log base 2 of e.",
        output: "1.4426950408889634\n7.213475204444817\n1.44270\n0.6931471805599453\n3.318198594044616\n1.4426950408889634\n1.4426950408889634\n4.32808512266689\n2.718281828459045",
        note: "Use for converting between natural and binary logs."
      },// ==================== SECTION 8: MATH OBJECT (121-130) ====================
      {
        name: "121. Math.LOG10E",
        description: "Math.LOG10E is base-10 logarithm of e (0.43429...). Where used? Common logarithms, decibel conversion, pH calculations.",
        code: "console.log(Math.LOG10E);\nlet commonLog = 5 * Math.LOG10E;\nconsole.log(commonLog);\nlet log10E = Math.LOG10E;\nconsole.log(log10E.toFixed(5));\nlet lnToLog10 = Math.LOG10E;\nconsole.log(lnToLog10);\nlet natural = 2.302585;\nlet common = natural * Math.LOG10E;\nconsole.log(common);\nlet decibels = 100;\nlet nepers = decibels / (10 * Math.LOG10E);\nconsole.log(nepers);\nlet logBase10OfE = Math.LOG10E;\nconsole.log(logBase10OfE);\nlet conversion = 1 / Math.LOG10E;\nconsole.log(conversion);\nlet log10e = Math.LOG10E;\nlet eValue = Math.E;\nconsole.log(Math.pow(10, log10e));",
        simpleMeaning: "Math.LOG10E is log base 10 of e (0.43429).",
        output: "0.4342944819032518\n2.171472409516259\n0.43429\n0.4342944819032518\n1.000000\n23.0\n0.4342944819032518\n2.302585092994046\n2.718281828459045",
        note: "Use for converting between natural log and common log."
      },
      {
        name: "122. Math.SQRT1_2",
        description: "Math.SQRT1_2 is square root of 1/2 (0.707106...). Where used? Standard deviation, normalization, geometry.",
        code: "console.log(Math.SQRT1_2);\nlet normalized = 10 * Math.SQRT1_2;\nconsole.log(normalized);\nlet sqrtHalf = Math.SQRT1_2;\nconsole.log(sqrtHalf.toFixed(5));\nlet diagonal = 5 * Math.SQRT1_2;\nconsole.log(diagonal);\nlet rms = 100 * Math.SQRT1_2;\nconsole.log(rms);\nlet variance = 25;\nlet stdDev = Math.sqrt(variance) * Math.SQRT1_2;\nconsole.log(stdDev);\nlet cos45 = Math.SQRT1_2;\nconsole.log(cos45);\nlet sin45 = Math.SQRT1_2;\nconsole.log(sin45);\nlet sqrtHalfValue = Math.SQRT1_2;\nconsole.log(sqrtHalfValue);\nlet halfRoot = Math.SQRT1_2;\nconsole.log(halfRoot * halfRoot);",
        simpleMeaning: "Math.SQRT1_2 is √(1/2) = 0.7071.",
        output: "0.7071067811865475\n7.071067811865475\n0.70711\n3.5355339059327373\n70.71067811865475\n3.5355339059327373\n0.7071067811865475\n0.7071067811865475\n0.7071067811865475\n0.5",
        note: "Use for 45-degree calculations, standard deviation normalization."
      },
      {
        name: "123. Math.SQRT2",
        description: "Math.SQRT2 is square root of 2 (1.414213...). Where used? Diagonal length, Pythagorean theorem, geometry.",
        code: "console.log(Math.SQRT2);\nlet diagonal = 5 * Math.SQRT2;\nconsole.log(diagonal);\nlet sqrt2 = Math.SQRT2;\nconsole.log(sqrt2.toFixed(5));\nlet ratio = Math.SQRT2;\nconsole.log(ratio);\nlet a4Ratio = Math.SQRT2;\nconsole.log(a4Ratio);\nlet sideSquare = 10;\nlet diagonalSquare = sideSquare * Math.SQRT2;\nconsole.log(diagonalSquare);\nlet hypotenuse = 10;\nlet leg = hypotenuse / Math.SQRT2;\nconsole.log(leg);\nlet sqrt2Value = Math.SQRT2;\nconsole.log(sqrt2Value);\nlet areaRatio = Math.pow(Math.SQRT2, 2);\nconsole.log(areaRatio);\nlet root2 = Math.SQRT2;\nconsole.log(root2 * root2);",
        simpleMeaning: "Math.SQRT2 is √2 = 1.41421.",
        output: "1.4142135623730951\n7.071067811865475\n1.41421\n1.4142135623730951\n1.4142135623730951\n14.142135623730951\n7.071067811865475\n1.4142135623730951\n2\n2.0000000000000004",
        note: "Use for diagonal calculations, A4 paper ratio (√2:1)."
      },
      {
        name: "124. Math.abs()",
        description: "Math.abs returns absolute (positive) value of number. Where used? Distance calculation, difference, error margin.",
        code: "console.log(Math.abs(-5));\nconsole.log(Math.abs(5));\nconsole.log(Math.abs(0));\nlet a = 10, b = 7;\nlet difference = Math.abs(a - b);\nconsole.log(difference);\nlet temperature = -5;\nlet absoluteTemp = Math.abs(temperature);\nconsole.log(absoluteTemp);\nlet error = -0.05;\nlet margin = Math.abs(error);\nconsole.log(margin);\nlet coordinates = [[1, 4], [4, 8]];\nlet distance = Math.abs(coordinates[1][0] - coordinates[0][0]) + Math.abs(coordinates[1][1] - coordinates[0][1]);\nconsole.log(distance);\nlet negativeZero = -0;\nconsole.log(Math.abs(negativeZero));\nlet str = '-123';\nconsole.log(Math.abs(parseInt(str)));\nlet array = [-2, -5, 3, -1, 8];\nlet maxAbs = Math.max(...array.map(Math.abs));\nconsole.log(maxAbs);",
        simpleMeaning: "Math.abs makes negative numbers positive.",
        output: "5\n5\n0\n3\n5\n0.05\n7\n0\n123\n8",
        note: "Math.abs returns a number, not a string. Works on both integers and floats."
      },
      {
        name: "125. Math.acos()",
        description: "Math.acos returns arccosine in radians (0 to π). Where used? Angle calculations, trigonometry, 3D graphics.",
        code: "console.log(Math.acos(1));\nconsole.log(Math.acos(0));\nconsole.log(Math.acos(-1));\nlet x = 0.5;\nlet angle = Math.acos(x);\nconsole.log(angle);\nlet adjacent = 3;\nlet hypotenuse = 5;\nlet cosTheta = adjacent / hypotenuse;\nlet theta = Math.acos(cosTheta);\nconsole.log(theta);\nlet radians = Math.acos(0.7071);\nlet degrees = radians * 180 / Math.PI;\nconsole.log(degrees);\nlet value = 0.866;\nlet acosValue = Math.acos(value);\nconsole.log(acosValue);\nlet domain = Math.acos(1.5);\nconsole.log(domain);\nlet limit = Math.acos(-0.5);\nconsole.log(limit);\nlet angleDeg = 60;\nlet angleRad = angleDeg * Math.PI / 180;\nconsole.log(Math.acos(Math.cos(angleRad)));",
        simpleMeaning: "Math.acos returns arccosine (inverse cosine) in radians.",
        output: "0\n1.5707963267948966\n3.141592653589793\n1.0471975511965979\n0.9272952180016122\n45.000\n0.5236\nNaN\n2.0943951023931957\n60",
        note: "Input range must be -1 to 1, returns 0 to π radians."
      },
      {
        name: "126. Math.acosh()",
        description: "Math.acosh returns hyperbolic arccosine (inverse hyperbolic cosine). Where used? Hyperbolic geometry, special functions.",
        code: "console.log(Math.acosh(1));\nconsole.log(Math.acosh(2));\nconsole.log(Math.acosh(10));\nlet x = 5;\nlet acoshX = Math.acosh(x);\nconsole.log(acoshX);\nlet value = 3.2;\nlet result = Math.acosh(value);\nconsole.log(result);\nlet large = 100;\nconsole.log(Math.acosh(large));\nlet domain = Math.acosh(0.5);\nconsole.log(domain);\nlet numbers = [1.5, 2.5, 3.5];\nlet acoshValues = numbers.map(n => Math.acosh(n));\nconsole.log(acoshValues);\nlet identity = Math.acosh(1);\nconsole.log(identity);\nlet inverse = Math.cosh(2);\nconsole.log(Math.acosh(inverse));\nlet coshVal = 1.543;\nconsole.log(Math.acosh(coshVal));",
        simpleMeaning: "Math.acosh returns inverse hyperbolic cosine (x ≥ 1).",
        output: "0\n1.3169578969248166\n2.993222846126381\n2.2924316695611777\n1.848\n5.293\nNaN\n[0.962,1.566,1.924]\n0\n2\n0",
        note: "Valid for x ≥ 1 only. Returns NaN for x < 1."
      },
      {
        name: "127. Math.asin()",
        description: "Math.asin returns arcsine in radians (-π/2 to π/2). Where used? Angle calculations, trigonometry, physics.",
        code: "console.log(Math.asin(0));\nconsole.log(Math.asin(1));\nconsole.log(Math.asin(-1));\nlet x = 0.5;\nlet angle = Math.asin(x);\nconsole.log(angle);\nlet opposite = 3;\nlet hypotenuse = 5;\nlet sinTheta = opposite / hypotenuse;\nlet theta = Math.asin(sinTheta);\nconsole.log(theta);\nlet radians = Math.asin(0.7071);\nlet degrees = radians * 180 / Math.PI;\nconsole.log(degrees);\nlet value = 0.866;\nlet asinValue = Math.asin(value);\nconsole.log(asinValue);\nlet domain = Math.asin(1.5);\nconsole.log(domain);\nlet angleRad = Math.PI / 6;\nconsole.log(Math.asin(Math.sin(angleRad)));\nlet small = 0.2;\nconsole.log(Math.asin(small));",
        simpleMeaning: "Math.asin returns arcsine (inverse sine) in radians.",
        output: "0\n1.5707963267948966\n-1.5707963267948966\n0.5235987755982989\n0.6435011087932844\n45.0\n1.047\nNaN\n30\n0.201",
        note: "Input range -1 to 1, returns -π/2 to π/2."
      },
      {
        name: "128. Math.asinh()",
        description: "Math.asinh returns hyperbolic arcsine (inverse hyperbolic sine). Where used? Hyperbolic functions, signal processing.",
        code: "console.log(Math.asinh(0));\nconsole.log(Math.asinh(1));\nconsole.log(Math.asinh(2));\nlet x = 5;\nlet asinhX = Math.asinh(x);\nconsole.log(asinhX);\nlet value = 3.2;\nlet result = Math.asinh(value);\nconsole.log(result);\nlet large = 100;\nconsole.log(Math.asinh(large));\nlet negative = -5;\nconsole.log(Math.asinh(negative));\nlet numbers = [0.5, 1.5, 2.5];\nlet asinhValues = numbers.map(n => Math.asinh(n));\nconsole.log(asinhValues);\nlet identity = Math.asinh(0);\nconsole.log(identity);\nlet sinhVal = Math.sinh(2);\nconsole.log(Math.asinh(sinhVal));\nlet small = 0.1;\nconsole.log(Math.asinh(small));",
        simpleMeaning: "Math.asinh returns inverse hyperbolic sine.",
        output: "0\n0.881373587019543\n1.4436354751788103\n2.3124383412727525\n1.86\n5.298\n-2.312\n[0.481,1.194,1.647]\n0\n2\n0.0998",
        note: "Works for all real numbers (no domain restrictions)."
      },
      {
        name: "129. Math.atan()",
        description: "Math.atan returns arctangent in radians (-π/2 to π/2). Where used? Angle from slope, coordinate conversion.",
        code: "console.log(Math.atan(0));\nconsole.log(Math.atan(1));\nconsole.log(Math.atan(-1));\nlet slope = 1;\nlet angle = Math.atan(slope);\nconsole.log(angle);\nlet opposite = 3;\nlet adjacent = 4;\nlet tanTheta = opposite / adjacent;\nlet theta = Math.atan(tanTheta);\nconsole.log(theta);\nlet radians = Math.atan(1);\nlet degrees = radians * 180 / Math.PI;\nconsole.log(degrees);\nlet value = 1.732;\nlet atanValue = Math.atan(value);\nconsole.log(atanValue);\nlet large = 100;\nconsole.log(Math.atan(large));\nlet negative = -2;\nconsole.log(Math.atan(negative));\nlet angleRad = Math.PI / 4;\nconsole.log(Math.atan(Math.tan(angleRad)));\nlet small = 0.5;\nconsole.log(Math.atan(small));",
        simpleMeaning: "Math.atan returns arctangent (inverse tangent) in radians.",
        output: "0\n0.7853981633974483\n-0.7853981633974483\n0.7853981633974483\n0.6435011087932844\n45\n1.047\n1.5607966601082315\n-1.1071487177940904\n45\n0.4636476090008061",
        note: "Use Math.atan2(y, x) for full quadrant angle (-π to π)."
      },
      {
        name: "130. Math.atan2()",
        description: "Math.atan2 returns angle from positive X axis (-π to π). Uses y,x coordinates. Where used? Direction, rotation, pointer angles.",
        code: "console.log(Math.atan2(0, 1));\nconsole.log(Math.atan2(1, 0));\nconsole.log(Math.atan2(1, 1));\nconsole.log(Math.atan2(-1, -1));\nlet x = 5, y = 5;\nlet angle = Math.atan2(y, x);\nconsole.log(angle);\nlet mouseX = 100, mouseY = 50;\nlet centerX = 50, centerY = 50;\nlet angleToMouse = Math.atan2(mouseY - centerY, mouseX - centerX);\nconsole.log(angleToMouse);\nlet degrees = Math.atan2(1, 0) * 180 / Math.PI;\nconsole.log(degrees);\nlet vector1 = { x: 3, y: 4 };\nlet vector2 = { x: 6, y: 8 };\nlet angle1 = Math.atan2(vector1.y, vector1.x);\nlet angle2 = Math.atan2(vector2.y, vector2.x);\nconsole.log(angle1, angle2);\nlet point = { x: -3, y: 4 };\nconsole.log(Math.atan2(point.y, point.x));\nlet negativeX = Math.atan2(1, -1);\nconsole.log(negativeX);\nlet zero = Math.atan2(0, 0);\nconsole.log(zero);",
        simpleMeaning: "Math.atan2(y, x) returns angle from X axis in radians.",
        output: "0\n1.5707963267948966\n0.7853981633974483\n-2.356194490192345\n0.7853981633974483\n0.7853981633974483\n90\n0.927,0.927\n2.2143\n2.356\nNaN",
        note: "Use atan2 instead of atan for correct quadrant determination."
      },
      
      // ==================== SECTION 9: MATH METHODS (131-140) ====================
      {
        name: "131. Math.atanh()",
        description: "Math.atanh returns inverse hyperbolic tangent. Where used? Special functions, probability, statistics.",
        code: "console.log(Math.atanh(0));\nconsole.log(Math.atanh(0.5));\nconsole.log(Math.atanh(0.9));\nlet x = 0.3;\nlet atanhX = Math.atanh(x);\nconsole.log(atanhX);\nlet value = 0.8;\nlet result = Math.atanh(value);\nconsole.log(result);\nlet domain = Math.atanh(1.5);\nconsole.log(domain);\nlet negative = -0.5;\nconsole.log(Math.atanh(negative));\nlet numbers = [0.2, 0.4, 0.6];\nlet atanhValues = numbers.map(n => Math.atanh(n));\nconsole.log(atanhValues);\nlet identity = Math.atanh(0);\nconsole.log(identity);\nlet tanhVal = Math.tanh(1);\nconsole.log(Math.atanh(tanhVal));\nlet small = 0.1;\nconsole.log(Math.atanh(small));",
        simpleMeaning: "Math.atanh returns inverse hyperbolic tangent.",
        output: "0\n0.5493061443340549\n1.4722194895834604\n0.3095196042031118\n1.0986122886681098\nNaN\n-0.5493061443340549\n[0.2027,0.4236,0.6931]\n0\n1\n0.1003",
        note: "Valid for |x| < 1 only. Returns NaN for |x| ≥ 1."
      },
      {
        name: "132. Math.cbrt()",
        description: "Math.cbrt returns cube root of number. Where used? Volume calculations, 3D scaling, root finding.",
        code: "console.log(Math.cbrt(8));\nconsole.log(Math.cbrt(27));\nconsole.log(Math.cbrt(64));\nlet volume = 125;\nlet side = Math.cbrt(volume);\nconsole.log(side);\nlet negative = Math.cbrt(-8);\nconsole.log(negative);\nlet value = 1000;\nconsole.log(Math.cbrt(value));\nlet numbers = [1, 8, 27, 64, 125];\nlet cubeRoots = numbers.map(n => Math.cbrt(n));\nconsole.log(cubeRoots);\nlet cube = 216;\nlet root = Math.cbrt(cube);\nconsole.log(root);\nlet fraction = 0.125;\nconsole.log(Math.cbrt(fraction));\nlet large = 1000000;\nconsole.log(Math.cbrt(large));\nlet zero = Math.cbrt(0);\nconsole.log(zero);",
        simpleMeaning: "Math.cbrt returns cube root (∛x).",
        output: "2\n3\n4\n5\n-2\n10\n[1,2,3,4,5]\n6\n0.5\n100\n0",
        note: "Works with negative numbers (returns negative cube root)."
      },
      {
        name: "133. Math.ceil()",
        description: "Math.ceil rounds UP to nearest integer. Where used? Pagination, item count, minimum needed.",
        code: "console.log(Math.ceil(4.2));\nconsole.log(Math.ceil(4.9));\nconsole.log(Math.ceil(4.0));\nconsole.log(Math.ceil(-4.2));\nconsole.log(Math.ceil(-4.9));\nlet items = 23;\nlet perPage = 10;\nlet pages = Math.ceil(items / perPage);\nconsole.log(pages);\nlet price = 9.99;\nlet roundedUp = Math.ceil(price);\nconsole.log(roundedUp);\nlet people = 100;\nlet seatsPerCar = 6;\nlet carsNeeded = Math.ceil(people / seatsPerCar);\nconsole.log(carsNeeded);\nlet minimum = Math.ceil(5.01);\nconsole.log(minimum);\nlet negative = Math.ceil(-1.2);\nconsole.log(negative);\nlet fractions = [1.1, 2.2, 3.3, 4.4];\nlet ceilings = fractions.map(n => Math.ceil(n));\nconsole.log(ceilings);\nlet exact = Math.ceil(7);\nconsole.log(exact);",
        simpleMeaning: "Math.ceil rounds number UP to next integer.",
        output: "5\n5\n4\n-4\n-4\n3\n10\n17\n6\n-1\n[2,3,4,5]\n7",
        note: "Use for calculating pages, containers needed, minimum requirements."
      },
      {
        name: "134. Math.clz32()",
        description: "Math.clz32 returns number of leading zero bits in 32-bit binary representation. Where used? Bit manipulation, algorithm optimization.",
        code: "console.log(Math.clz32(1));\nconsole.log(Math.clz32(2));\nconsole.log(Math.clz32(0));\nconsole.log(Math.clz32(255));\nconsole.log(Math.clz32(256));\nlet num = 8;\nlet leadingZeros = Math.clz32(num);\nconsole.log(leadingZeros);\nlet power = 1;\nfor(let i = 0; i <= 31; i++) {\n  console.log(`${power}: ${Math.clz32(power)}`);\n  power *= 2;\n}\nlet value = 0x80000000;\nconsole.log(Math.clz32(value));\nlet max = Math.clz32(0xFFFFFFFF);\nconsole.log(max);\nlet allOnes = Math.clz32(~0);\nconsole.log(allOnes);\nlet random = 12345;\nconsole.log(Math.clz32(random));\nlet zeroCount = Math.clz32(0);\nconsole.log(zeroCount);",
        simpleMeaning: "Math.clz32 counts leading zero bits in 32-bit number.",
        output: "31\n30\n32\n24\n23\n28\n1:31,2:30,4:29,8:28,16:27,32:26\n1\n0\n0\n17\n32",
        note: "Use for bit-level operations and optimization."
      },
      {
        name: "135. Math.cos()",
        description: "Math.cos returns cosine of angle in radians. Where used? Waves, oscillations, circular motion, graphics.",
        code: "console.log(Math.cos(0));\nconsole.log(Math.cos(Math.PI / 2));\nconsole.log(Math.cos(Math.PI));\nlet angle = 60 * Math.PI / 180;\nlet cosValue = Math.cos(angle);\nconsole.log(cosValue);\nlet x = 5;\nlet y = 5;\nlet radius = Math.hypot(x, y);\nlet cosTheta = x / radius;\nconsole.log(cosTheta);\nlet radians = Math.PI / 3;\nconsole.log(Math.cos(radians));\nlet degrees = 45;\nlet rad = degrees * Math.PI / 180;\nconsole.log(Math.cos(rad));\nlet values = [0, 30, 45, 60, 90];\nlet cosValues = values.map(v => Math.cos(v * Math.PI / 180));\nconsole.log(cosValues);\nlet large = 10;\nconsole.log(Math.cos(large));\nlet negative = Math.cos(-Math.PI / 3);\nconsole.log(negative);\nlet period = Math.cos(Math.PI * 2);\nconsole.log(period);",
        simpleMeaning: "Math.cos returns cosine of angle (in radians).",
        output: "1\n0\n-1\n0.5\n0.7071\n0.5\n0.7071\n[1,0.866,0.707,0.5,0]\n-0.839\n0.5\n1",
        note: "Convert degrees to radians: radians = degrees * Math.PI / 180."
      },
      {
        name: "136. Math.cosh()",
        description: "Math.cosh returns hyperbolic cosine. Where used? Hyperbolic functions, physics, engineering.",
        code: "console.log(Math.cosh(0));\nconsole.log(Math.cosh(1));\nconsole.log(Math.cosh(2));\nlet x = 1.5;\nlet coshX = Math.cosh(x);\nconsole.log(coshX);\nlet value = 2.5;\nlet result = Math.cosh(value);\nconsole.log(result);\nlet large = 5;\nconsole.log(Math.cosh(large));\nlet negative = Math.cosh(-2);\nconsole.log(negative);\nlet numbers = [0.5, 1, 1.5, 2];\nlet coshValues = numbers.map(n => Math.cosh(n));\nconsole.log(coshValues);\nlet identity = Math.cosh(0);\nconsole.log(identity);\nlet relation = Math.cosh(1);\nconsole.log(relation);\nlet definition = (Math.exp(1) + Math.exp(-1)) / 2;\nconsole.log(definition);",
        simpleMeaning: "Math.cosh returns hyperbolic cosine (cosh).",
        output: "1\n1.5430806348152437\n3.7621956910836314\n2.352409615243247\n6.132289479663686\n74.20994852478785\n3.7621956910836314\n[1.127,1.543,2.352,3.762]\n1\n1.543\n1.543",
        note: "cosh(x) = (e^x + e^(-x))/2. Always ≥ 1."
      },
      {
        name: "137. Math.exp()",
        description: "Math.exp returns e raised to power (e^x). Where used? Exponential growth, compound interest, probability.",
        code: "console.log(Math.exp(0));\nconsole.log(Math.exp(1));\nconsole.log(Math.exp(2));\nlet rate = 0.05;\nlet years = 10;\nlet growth = Math.exp(rate * years);\nconsole.log(growth);\nlet principal = 1000;\nlet continuousInterest = principal * Math.exp(0.08 * 5);\nconsole.log(continuousInterest);\nlet probability = 1 - Math.exp(-2);\nconsole.log(probability);\nlet negative = Math.exp(-2);\nconsole.log(negative);\nlet large = Math.exp(5);\nconsole.log(large);\nlet decay = 100 * Math.exp(-0.1 * 10);\nconsole.log(decay);\nlet numbers = [0, 1, 2, 3];\nlet expValues = numbers.map(n => Math.exp(n));\nconsole.log(expValues);\nlet inverse = Math.log(Math.exp(5));\nconsole.log(inverse);\nlet zero = Math.exp(0);\nconsole.log(zero);",
        simpleMeaning: "Math.exp returns e raised to power (e^x).",
        output: "1\n2.718281828459045\n7.38905609893065\n1.6487212707001282\n1491.8246976353333\n0.8646647167633873\n0.1353352832366127\n148.4131591025766\n36.787944117144235\n[1,2.718,7.389,20.085]\n5\n1",
        note: "Use for continuous compound interest, exponential growth/decay."
      },
      {
        name: "138. Math.expm1()",
        description: "Math.expm1 returns e^x - 1 (more accurate for small x). Where used? Financial calculations, precise small number computations.",
        code: "console.log(Math.expm1(0));\nconsole.log(Math.expm1(1));\nconsole.log(Math.expm1(0.001));\nconsole.log(Math.exp(0.001) - 1);\nlet small = 0.0001;\nlet exact = Math.expm1(small);\nconsole.log(exact);\nlet rate = 0.01;\nlet growth = Math.expm1(rate);\nconsole.log(growth);\nlet probability = 1 - Math.exp(-0.5);\nconsole.log(probability);\nlet interest = 1000 * Math.expm1(0.02 * 3);\nconsole.log(interest);\nlet negative = Math.expm1(-0.5);\nconsole.log(negative);\nlet numbers = [0.1, 0.2, 0.3];\nlet expm1Values = numbers.map(n => Math.expm1(n));\nconsole.log(expm1Values);\nlet smallValue = Math.expm1(1e-8);\nconsole.log(smallValue);\nlet precise = 1e-10;\nconsole.log(Math.expm1(precise));",
        simpleMeaning: "Math.expm1 returns e^x - 1, more accurate for small x.",
        output: "0\n1.718281828459045\n0.0010005001667083846\n0.0010005001667083846\n0.00010000500016667085\n0.010050167084168057\n0.3934693402873666\n61.836\n-0.3934693402873666\n[0.1052,0.2214,0.3499]\n1.000000005e-8\n1e-10",
        note: "More accurate than Math.exp(x) - 1 for very small x values."
      },
      {
        name: "139. Math.floor()",
        description: "Math.floor rounds DOWN to nearest integer. Where used? Pagination, array indices, integer division.",
        code: "console.log(Math.floor(4.2));\nconsole.log(Math.floor(4.9));\nconsole.log(Math.floor(4.0));\nconsole.log(Math.floor(-4.2));\nconsole.log(Math.floor(-4.9));\nlet random = Math.random() * 10;\nlet randomInt = Math.floor(random);\nconsole.log(randomInt);\nlet items = 23;\nlet perPage = 10;\nlet lastPageItems = items - Math.floor(items / perPage) * perPage;\nconsole.log(lastPageItems);\nlet price = 9.99;\nlet dollars = Math.floor(price);\nconsole.log(dollars);\nlet negative = Math.floor(-1.2);\nconsole.log(negative);\nlet numbers = [1.1, 2.2, 3.3, 4.4];\nlet floors = numbers.map(n => Math.floor(n));\nconsole.log(floors);\nlet division = Math.floor(17 / 5);\nconsole.log(division);\nlet age = 18.9;\nlet ageInt = Math.floor(age);\nconsole.log(ageInt);\nlet exact = Math.floor(7);\nconsole.log(exact);",
        simpleMeaning: "Math.floor rounds number DOWN to nearest integer.",
        output: "4\n4\n4\n-5\n-5\n0-9\n3\n9\n-2\n[1,2,3,4]\n3\n18\n7",
        note: "Use for integer division, random integers, array indices."
      },
      {
        name: "140. Math.fround()",
        description: "Math.fround returns nearest 32-bit float representation. Where used? Precision control, WebGL, performance.",
        code: "console.log(Math.fround(1.5));\nconsole.log(Math.fround(1.337));\nconsole.log(Math.fround(1.23456789));\nlet large = Math.fround(123456789.123);\nconsole.log(large);\nlet pi = Math.fround(Math.PI);\nconsole.log(pi);\nlet small = 0.1 + 0.2;\nconsole.log(small);\nlet froundSmall = Math.fround(0.1) + Math.fround(0.2);\nconsole.log(froundSmall);\nlet exact = Math.fround(5);\nconsole.log(exact);\nlet numbers = [1.1, 2.2, 3.3];\nlet froundValues = numbers.map(n => Math.fround(n));\nconsole.log(froundValues);\nlet max = Math.fround(Number.MAX_VALUE);\nconsole.log(max);\nlet min = Math.fround(Number.MIN_VALUE);\nconsole.log(min);\nlet negative = Math.fround(-1.234);\nconsole.log(negative);",
        simpleMeaning: "Math.fround converts to nearest 32-bit float.",
        output: "1.5\n1.3370000123977661\n1.2345678806304932\n123456792\n3.1415927410125732\n0.30000000000000004\n0.30000001192092896\n5\n[1.100000023841858,2.200000047683716,3.299999952316284]\nInfinity\n5e-324\n-1.234000027179718",
        note: "Use for precise float control in graphics and performance-critical code."
      },
      
      // ==================== SECTION 10: MATH METHODS (141-150) ====================
      {
        name: "141. Math.hypot()",
        description: "Math.hypot returns Euclidean distance (√(x² + y² + ...)). Where used? Distance calculations, vector magnitude, geometry.",
        code: "console.log(Math.hypot(3, 4));\nconsole.log(Math.hypot(5, 12));\nconsole.log(Math.hypot(1, 1, 1));\nlet x = 3, y = 4;\nlet distance = Math.hypot(x, y);\nconsole.log(distance);\nlet points = [[0,0], [3,4], [6,8]];\nlet distances = points.map(p => Math.hypot(p[0], p[1]));\nconsole.log(distances);\nlet vector = { x: 5, y: 5, z: 5 };\nlet magnitude = Math.hypot(vector.x, vector.y, vector.z);\nconsole.log(magnitude);\nlet large = Math.hypot(1000, 1000, 1000);\nconsole.log(large);\nlet coords = [10, 20, 30, 40];\nlet total = Math.hypot(...coords);\nconsole.log(total);\nlet zero = Math.hypot(0, 0);\nconsole.log(zero);\nlet negative = Math.hypot(-3, -4);\nconsole.log(negative);\nlet single = Math.hypot(7);\nconsole.log(single);\nlet overflow = Math.hypot(1e200, 1e200);\nconsole.log(overflow);",
        simpleMeaning: "Math.hypot returns √(x² + y² + ...) for Euclidean distance.",
        output: "5\n13\n1.732\n5\n[0,5,10]\n8.660\n1732.05\n54.77\n0\n5\n7\n1.414e200",
        note: "More accurate than Math.sqrt(x*x + y*y), prevents overflow/underflow."
      },
      {
        name: "142. Math.imul()",
        description: "Math.imul returns 32-bit integer multiplication. Where used? Bit operations, cryptography, high-performance math.",
        code: "console.log(Math.imul(2, 3));\nconsole.log(Math.imul(0xffffffff, 5));\nconsole.log(Math.imul(0x80000000, 2));\nlet a = 123456, b = 789012;\nlet normal = a * b;\nlet imul = Math.imul(a, b);\nconsole.log(normal, imul);\nlet large = Math.imul(1e9, 1e9);\nconsole.log(large);\nlet numbers = [[2,3], [4,5], [6,7]];\nlet products = numbers.map(([a,b]) => Math.imul(a, b));\nconsole.log(products);\nlet negative = Math.imul(-5, 6);\nconsole.log(negative);\nlet zero = Math.imul(100, 0);\nconsole.log(zero);\nlet overflow = Math.imul(0x12345678, 0x87654321);\nconsole.log(overflow);\nlet max32 = Math.imul(0x7FFFFFFF, 2);\nconsole.log(max32);\nlet edge = Math.imul(0xFFFFFFFF, 0xFFFFFFFF);\nconsole.log(edge);",
        simpleMeaning: "Math.imul returns result of 32-bit integer multiplication.",
        output: "6\n5\n0\n97415309112 9739397348\n-1486618624\n[6,20,42]\n-30\n0\n-1961366048\n-2\n1",
        note: "Use when you need true 32-bit integer multiplication results."
      },
      {
        name: "143. Math.log()",
        description: "Math.log returns natural logarithm (base e). Where used? Growth rates, complexity, decay calculations.",
        code: "console.log(Math.log(1));\nconsole.log(Math.log(Math.E));\nconsole.log(Math.log(10));\nlet value = 100;\nlet logValue = Math.log(value);\nconsole.log(logValue);\nlet growth = 1.5;\nlet time = Math.log(growth) / 0.05;\nconsole.log(time);\nlet investment = 1000;\nlet target = 2000;\nlet yearsNeeded = Math.log(target / investment) / Math.log(1 + 0.07);\nconsole.log(yearsNeeded);\nlet numbers = [1, 2, 3, 4, 5];\nlet logs = numbers.map(n => Math.log(n));\nconsole.log(logs);\nlet e = Math.log(Math.E);\nconsole.log(e);\nlet large = Math.log(1e100);\nconsole.log(large);\nlet zero = Math.log(0);\nconsole.log(zero);\nlet negative = Math.log(-1);\nconsole.log(negative);\nlet product = Math.log(2 * 3);\nlet sum = Math.log(2) + Math.log(3);\nconsole.log(product, sum);",
        simpleMeaning: "Math.log returns natural logarithm (ln).",
        output: "0\n1\n2.302585092994046\n4.605170185988092\n8.11\n10.24\n[0,0.693,1.099,1.386,1.609]\n1\n230.258\n-Infinity\nNaN\n1.791,1.791",
        note: "Use Math.log10 for base-10, Math.log2 for base-2."
      },
      {
        name: "144. Math.log10()",
        description: "Math.log10 returns base-10 logarithm. Where used? Scientific notation, decibels, pH scale, order of magnitude.",
        code: "console.log(Math.log10(1));\nconsole.log(Math.log10(10));\nconsole.log(Math.log10(100));\nlet number = 1000;\nlet order = Math.log10(number);\nconsole.log(order);\nlet pH = -Math.log10(0.0001);\nconsole.log(pH);\nlet decibels = 10 * Math.log10(100);\nconsole.log(decibels);\nlet magnitude = 7;\nlet energy = Math.pow(10, 1.5 * magnitude + 4.8);\nlet logEnergy = Math.log10(energy);\nconsole.log(logEnergy);\nlet numbers = [1, 10, 100, 1000, 10000];\nlet log10s = numbers.map(n => Math.log10(n));\nconsole.log(log10s);\nlet small = Math.log10(0.001);\nconsole.log(small);\nlet large = Math.log10(1e100);\nconsole.log(large);\nlet zero = Math.log10(0);\nconsole.log(zero);\nlet negative = Math.log10(-5);\nconsole.log(negative);",
        simpleMeaning: "Math.log10 returns base-10 logarithm (log₁₀).",
        output: "0\n1\n2\n3\n4\n20\n15.3\n[0,1,2,3,4]\n-3\n100\n-Infinity\nNaN",
        note: "Use for magnitude, scientific notation, decibel calculations."
      },
      {
        name: "145. Math.log1p()",
        description: "Math.log1p returns ln(1 + x) (more accurate for small x). Where used? Financial math, probability, precise calculations.",
        code: "console.log(Math.log1p(0));\nconsole.log(Math.log1p(1));\nconsole.log(Math.log1p(0.001));\nconsole.log(Math.log(1.001));\nlet small = 1e-10;\nlet exact = Math.log1p(small);\nconsole.log(exact);\nlet rate = 0.01;\nlet continuousReturn = Math.log1p(rate);\nconsole.log(continuousReturn);\nlet probability = Math.log1p(-0.5);\nconsole.log(probability);\nlet numbers = [0.1, 0.2, 0.3, 0.4];\nlet log1pValues = numbers.map(n => Math.log1p(n));\nconsole.log(log1pValues);\nlet smallValue = Math.log1p(1e-8);\nconsole.log(smallValue);\nlet precise = 1e-12;\nconsole.log(Math.log1p(precise));\nlet negative = Math.log1p(-0.9);\nconsole.log(negative);\nlet large = Math.log1p(100);\nconsole.log(large);",
        simpleMeaning: "Math.log1p returns ln(1 + x), accurate for small x.",
        output: "0\n0.6931471805599453\n0.0009995003330835331\n0.0009995003330835331\n9.999999950000001e-11\n0.009950330853168092\n-0.6931471805599453\n[0.0953,0.1823,0.2624,0.3365]\n9.999999950000001e-9\n9.99999999999999e-13\n-2.3025850929940455\n4.61512051684226",
        note: "More accurate than Math.log(1 + x) for very small x values."
      },
      {
        name: "146. Math.log2()",
        description: "Math.log2 returns base-2 logarithm. Where used? Binary trees, information theory, bit length, complexity.",
        code: "console.log(Math.log2(1));\nconsole.log(Math.log2(2));\nconsole.log(Math.log2(8));\nlet number = 64;\nlet bitsNeeded = Math.log2(number);\nconsole.log(bitsNeeded);\nlet information = 256;\nlet bits = Math.log2(information);\nconsole.log(bits);\nlet n = 1000;\nlet log2N = Math.log2(n);\nconsole.log(log2N);\nlet numbers = [1, 2, 4, 8, 16, 32, 64];\nlet log2s = numbers.map(n => Math.log2(n));\nconsole.log(log2s);\nlet fraction = Math.log2(0.5);\nconsole.log(fraction);\nlet large = Math.log2(1e100);\nconsole.log(large);\nlet zero = Math.log2(0);\nconsole.log(zero);\nlet negative = Math.log2(-2);\nconsole.log(negative);\nlet power = 1024;\nlet exponent = Math.log2(power);\nconsole.log(exponent);",
        simpleMeaning: "Math.log2 returns base-2 logarithm (log₂).",
        output: "0\n1\n3\n6\n8\n9.97\n[0,1,2,3,4,5,6]\n-1\n332.19\n-Infinity\nNaN\n10",
        note: "Use for binary tree depth, information theory (bits needed)."
      },
      {
        name: "147. Math.max()",
        description: "Math.max returns largest number from arguments. Where used? Highest score, max value, peak detection.",
        code: "console.log(Math.max(1, 2, 3));\nconsole.log(Math.max(10, 5, 20, 15));\nconsole.log(Math.max(-5, -2, -10));\nlet numbers = [5, 2, 9, 1, 7];\nlet max = Math.max(...numbers);\nconsole.log(max);\nlet scores = [85, 92, 78, 96, 88];\nlet highest = Math.max(...scores);\nconsole.log(highest);\nlet values = [100, 200, 300];\nlet maxValue = Math.max.apply(null, values);\nconsole.log(maxValue);\nlet empty = Math.max();\nconsole.log(empty);\nlet prices = [99, 129, 79, 149];\nlet highestPrice = Math.max(...prices);\nconsole.log(highestPrice);\nlet temps = [23, 25, 22, 28, 24];\nlet maxTemp = Math.max(...temps);\nconsole.log(maxTemp);\nlet ages = [18, 25, 30, 22, 28];\nlet oldest = Math.max(...ages);\nconsole.log(oldest);\nlet mixed = Math.max(5, '10', 8);\nconsole.log(mixed);",
        simpleMeaning: "Math.max returns largest number from arguments.",
        output: "3\n20\n-2\n9\n96\n300\n-Infinity\n149\n28\n30\n10",
        note: "Use spread operator (...) with arrays. Returns -Infinity with no arguments."
      },
      {
        name: "148. Math.min()",
        description: "Math.min returns smallest number from arguments. Where used? Lowest score, minimum value, best price.",
        code: "console.log(Math.min(1, 2, 3));\nconsole.log(Math.min(10, 5, 20, 15));\nconsole.log(Math.min(-5, -2, -10));\nlet numbers = [5, 2, 9, 1, 7];\nlet min = Math.min(...numbers);\nconsole.log(min);\nlet scores = [85, 92, 78, 96, 88];\nlet lowest = Math.min(...scores);\nconsole.log(lowest);\nlet values = [100, 200, 300];\nlet minValue = Math.min.apply(null, values);\nconsole.log(minValue);\nlet empty = Math.min();\nconsole.log(empty);\nlet prices = [99, 129, 79, 149];\nlet lowestPrice = Math.min(...prices);\nconsole.log(lowestPrice);\nlet temps = [23, 25, 22, 28, 24];\nlet minTemp = Math.min(...temps);\nconsole.log(minTemp);\nlet ages = [18, 25, 30, 22, 28];\nlet youngest = Math.min(...ages);\nconsole.log(youngest);\nlet mixed = Math.min(5, '10', 8);\nconsole.log(mixed);",
        simpleMeaning: "Math.min returns smallest number from arguments.",
        output: "1\n5\n-10\n1\n78\n100\nInfinity\n79\n22\n18\n5",
        note: "Use spread operator (...) with arrays. Returns Infinity with no arguments."
      },
      {
        name: "149. Math.pow()",
        description: "Math.pow returns base raised to exponent (base^exponent). Where used? Exponential growth, area, volume, compound interest.",
        code: "console.log(Math.pow(2, 3));\nconsole.log(Math.pow(5, 2));\nconsole.log(Math.pow(10, -2));\nlet base = 2;\nlet exponent = 10;\nlet result = Math.pow(base, exponent);\nconsole.log(result);\nlet area = Math.pow(5, 2) * Math.PI;\nconsole.log(area);\nlet volume = Math.pow(3, 3);\nconsole.log(volume);\nlet principal = 1000;\nlet rate = 0.05;\nlet years = 5;\nlet amount = principal * Math.pow(1 + rate, years);\nconsole.log(amount);\nlet squares = [1, 2, 3, 4, 5].map(n => Math.pow(n, 2));\nconsole.log(squares);\nlet cubes = [1, 2, 3, 4, 5].map(n => Math.pow(n, 3));\nconsole.log(cubes);\nlet sqrt = Math.pow(16, 0.5);\nconsole.log(sqrt);\nlet negative = Math.pow(2, -3);\nconsole.log(negative);\nlet zero = Math.pow(0, 5);\nconsole.log(zero);\nlet special = Math.pow(0, 0);\nconsole.log(special);",
        simpleMeaning: "Math.pow returns base raised to exponent (power).",
        output: "8\n25\n0.01\n1024\n78.53981633974483\n27\n1276.2815625\n[1,4,9,16,25]\n[1,8,27,64,125]\n4\n0.125\n0\n1",
        note: "Use ** operator (ES2016) as alternative: 2 ** 3 = 8."
      },
      {
        name: "150. Math.random()",
        description: "Math.random returns random number between 0 (inclusive) and 1 (exclusive). Where used? Games, simulations, random selection, shuffling.",
        code: "let rand = Math.random();\nconsole.log(rand);\nlet randomInt = Math.floor(Math.random() * 10);\nconsole.log(randomInt);\nlet diceRoll = Math.floor(Math.random() * 6) + 1;\nconsole.log(diceRoll);\nlet randomBetween = (min, max) => Math.random() * (max - min) + min;\nlet randomDecimal = randomBetween(5, 10);\nconsole.log(randomDecimal);\nlet randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;\nlet dice = randomIntBetween(1, 6);\nconsole.log(dice);\nlet items = ['apple', 'banana', 'cherry', 'date'];\nlet randomItem = items[Math.floor(Math.random() * items.length)];\nconsole.log(randomItem);\nshuffle = (arr) => {\n  for(let i = arr.length - 1; i > 0; i--) {\n    let j = Math.floor(Math.random() * (i + 1));\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n  return arr;\n};\nlet shuffled = shuffle([1, 2, 3, 4, 5]);\nconsole.log(shuffled);\nlet coin = Math.random() < 0.5 ? 'Heads' : 'Tails';\nconsole.log(coin);\nlet randomPercent = Math.random() * 100;\nconsole.log(randomPercent);\nlet zeroToOne = Math.random();\nconsole.log(zeroToOne);",
        simpleMeaning: "Math.random returns random number 0-1 (1 exclusive).",
        output: "0.123456\n0-9\n1-6\n5.67\n1-6\nrandom fruit\n[shuffled array]\nHeads/Tails\n0-100\n0.123",
        note: "Not cryptographically secure. Use crypto.getRandomValues for security."
      },// ==================== SECTION 10: MATH METHODS CONTINUED (151-160) ====================
      {
        name: "151. Math.round()",
        description: "Math.round rounds to nearest integer. .5 rounds UP. Where used? Rounding prices, scores, approximations.",
        code: "console.log(Math.round(4.2));\nconsole.log(Math.round(4.6));\nconsole.log(Math.round(4.5));\nconsole.log(Math.round(-4.2));\nconsole.log(Math.round(-4.6));\nconsole.log(Math.round(-4.5));\nlet price = 19.99;\nlet rounded = Math.round(price);\nconsole.log(rounded);\nlet score = 84.6;\nlet grade = Math.round(score);\nconsole.log(grade);\nlet numbers = [1.2, 2.5, 3.7, 4.4, 5.6];\nlet roundedNums = numbers.map(n => Math.round(n));\nconsole.log(roundedNums);\nlet average = 83.49;\nlet roundedAvg = Math.round(average);\nconsole.log(roundedAvg);\nlet negativeHalf = Math.round(-0.5);\nconsole.log(negativeHalf);\nlet positiveHalf = Math.round(0.5);\nconsole.log(positiveHalf);\nlet large = Math.round(12345.67);\nconsole.log(large);",
        simpleMeaning: "Math.round rounds to nearest integer (.5 rounds up).",
        output: "4\n5\n5\n-4\n-5\n-4\n20\n85\n[1,3,4,4,6]\n83\n-0\n1\n12346",
        note: "For rounding to specific decimals, use toFixed() or custom function."
      },
      {
        name: "152. Math.sign()",
        description: "Math.sign returns sign of number: 1 (positive), -1 (negative), 0 (zero), NaN (not number). Where used? Sign detection, direction checks.",
        code: "console.log(Math.sign(5));\nconsole.log(Math.sign(-5));\nconsole.log(Math.sign(0));\nconsole.log(Math.sign(-0));\nconsole.log(Math.sign('abc'));\nlet x = -10;\nlet direction = Math.sign(x);\nconsole.log(direction);\nlet numbers = [5, -3, 0, -8, 2];\nlet signs = numbers.map(n => Math.sign(n));\nconsole.log(signs);\nlet positive = Math.sign(0.001);\nconsole.log(positive);\nlet negative = Math.sign(-0.001);\nconsole.log(negative);\nlet str = Math.sign('50');\nconsole.log(str);\nlet infinity = Math.sign(Infinity);\nconsole.log(infinity);\nlet negInfinity = Math.sign(-Infinity);\nconsole.log(negInfinity);\nlet nan = Math.sign(NaN);\nconsole.log(nan);",
        simpleMeaning: "Math.sign returns 1 for positive, -1 for negative, 0 for zero.",
        output: "1\n-1\n0\n-0\nNaN\n-1\n[1,-1,0,-1,1]\n1\n-1\n1\n1\n-1\nNaN",
        note: "Very useful for checking if number is positive/negative/zero."
      },
      {
        name: "153. Math.sin()",
        description: "Math.sin returns sine of angle in radians. Where used? Waves, oscillations, circular motion, audio processing.",
        code: "console.log(Math.sin(0));\nconsole.log(Math.sin(Math.PI / 2));\nconsole.log(Math.sin(Math.PI));\nlet angle = 30 * Math.PI / 180;\nlet sinValue = Math.sin(angle);\nconsole.log(sinValue);\nlet opposite = 3;\nlet hypotenuse = 5;\nlet sinTheta = opposite / hypotenuse;\nlet theta = Math.asin(sinTheta);\nconsole.log(theta);\nlet radians = Math.PI / 6;\nconsole.log(Math.sin(radians));\nlet degrees = 90;\nlet rad = degrees * Math.PI / 180;\nconsole.log(Math.sin(rad));\nlet values = [0, 30, 45, 60, 90];\nlet sinValues = values.map(v => Math.sin(v * Math.PI / 180));\nconsole.log(sinValues);\nlet large = Math.sin(10);\nconsole.log(large);\nlet negative = Math.sin(-Math.PI / 2);\nconsole.log(negative);\nlet period = Math.sin(Math.PI * 2);\nconsole.log(period);",
        simpleMeaning: "Math.sin returns sine of angle (radians).",
        output: "0\n1\n0\n0.5\n0.6435\n0.5\n1\n[0,0.5,0.707,0.866,1]\n-0.544\n-1\n-2.449e-16",
        note: "Convert degrees to radians: radians = degrees * Math.PI / 180."
      },
      {
        name: "154. Math.sinh()",
        description: "Math.sinh returns hyperbolic sine. Where used? Hyperbolic geometry, physics, engineering.",
        code: "console.log(Math.sinh(0));\nconsole.log(Math.sinh(1));\nconsole.log(Math.sinh(2));\nlet x = 1.5;\nlet sinhX = Math.sinh(x);\nconsole.log(sinhX);\nlet value = 2.5;\nlet result = Math.sinh(value);\nconsole.log(result);\nlet large = 5;\nconsole.log(Math.sinh(large));\nlet negative = Math.sinh(-2);\nconsole.log(negative);\nlet numbers = [0.5, 1, 1.5, 2];\nlet sinhValues = numbers.map(n => Math.sinh(n));\nconsole.log(sinhValues);\nlet identity = Math.sinh(0);\nconsole.log(identity);\nlet relation = Math.sinh(1);\nconsole.log(relation);\nlet definition = (Math.exp(1) - Math.exp(-1)) / 2;\nconsole.log(definition);",
        simpleMeaning: "Math.sinh returns hyperbolic sine (sinh).",
        output: "0\n1.1752011936438014\n3.626860407847019\n2.1292794550948173\n6.050204481722787\n74.20321057778875\n-3.626860407847019\n[0.521,1.175,2.129,3.627]\n0\n1.175\n1.175",
        note: "sinh(x) = (e^x - e^(-x))/2"
      },
      {
        name: "155. Math.sqrt()",
        description: "Math.sqrt returns square root of number. Where used? Distance, standard deviation, hypotenuse, geometry.",
        code: "console.log(Math.sqrt(4));\nconsole.log(Math.sqrt(9));\nconsole.log(Math.sqrt(2));\nlet number = 25;\nlet root = Math.sqrt(number);\nconsole.log(root);\nlet a = 3, b = 4;\nlet c = Math.sqrt(a * a + b * b);\nconsole.log(c);\nlet variance = 16;\nlet stdDev = Math.sqrt(variance);\nconsole.log(stdDev);\nlet numbers = [1, 4, 9, 16, 25, 36];\nlet sqrtValues = numbers.map(n => Math.sqrt(n));\nconsole.log(sqrtValues);\nlet area = 100;\nlet side = Math.sqrt(area);\nconsole.log(side);\nlet distance = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));\nconsole.log(distance);\nlet negative = Math.sqrt(-4);\nconsole.log(negative);\nlet zero = Math.sqrt(0);\nconsole.log(zero);\nlet large = Math.sqrt(1e100);\nconsole.log(large);",
        simpleMeaning: "Math.sqrt returns square root (√x).",
        output: "2\n3\n1.414\n5\n5\n4\n[1,2,3,4,5,6]\n10\n5\nNaN\n0\n1e50",
        note: "Use Math.hypot for multiple arguments distance calculation."
      },
      {
        name: "156. Math.tan()",
        description: "Math.tan returns tangent of angle in radians. Where used? Slope, angle calculations, trigonometry.",
        code: "console.log(Math.tan(0));\nconsole.log(Math.tan(Math.PI / 4));\nconsole.log(Math.tan(Math.PI / 3));\nlet angle = 45 * Math.PI / 180;\nlet tanValue = Math.tan(angle);\nconsole.log(tanValue);\nlet opposite = 3;\nlet adjacent = 4;\nlet tanTheta = opposite / adjacent;\nlet theta = Math.atan(tanTheta);\nconsole.log(theta);\nlet radians = Math.PI / 6;\nconsole.log(Math.tan(radians));\nlet degrees = 60;\nlet rad = degrees * Math.PI / 180;\nconsole.log(Math.tan(rad));\nlet values = [0, 30, 45, 60, 90];\nlet tanValues = values.map(v => Math.tan(v * Math.PI / 180));\nconsole.log(tanValues);\nlet large = Math.tan(1.5);\nconsole.log(large);\nlet negative = Math.tan(-Math.PI / 4);\nconsole.log(negative);\nlet period = Math.tan(Math.PI);\nconsole.log(period);",
        simpleMeaning: "Math.tan returns tangent of angle (radians).",
        output: "0\n1\n1.732\n1\n0.6435\n0.577\n1.732\n[0,0.577,1,1.732,16331239353195370]\n14.101\n-1\n-1.224",
        note: "Tan 90° is infinite (returns very large number)."
      },
      {
        name: "157. Math.tanh()",
        description: "Math.tanh returns hyperbolic tangent. Where used? Neural networks, sigmoid functions, hyperbolic geometry.",
        code: "console.log(Math.tanh(0));\nconsole.log(Math.tanh(1));\nconsole.log(Math.tanh(2));\nlet x = 1.5;\nlet tanhX = Math.tanh(x);\nconsole.log(tanhX);\nlet value = 2.5;\nlet result = Math.tanh(value);\nconsole.log(result);\nlet large = 10;\nconsole.log(Math.tanh(large));\nlet negative = Math.tanh(-2);\nconsole.log(negative);\nlet numbers = [0.5, 1, 1.5, 2];\nlet tanhValues = numbers.map(n => Math.tanh(n));\nconsole.log(tanhValues);\nlet identity = Math.tanh(0);\nconsole.log(identity);\nlet asymptote = Math.tanh(100);\nconsole.log(asymptote);\nlet definition = (Math.exp(2) - 1) / (Math.exp(2) + 1);\nconsole.log(definition);",
        simpleMeaning: "Math.tanh returns hyperbolic tangent (tanh).",
        output: "0\n0.7615941559557649\n0.9640275800758169\n0.9051482536448664\n0.9866142981514303\n0.9999999958776927\n-0.9640275800758169\n[0.462,0.762,0.905,0.964]\n0\n1\n0.761",
        note: "Output range is -1 to 1. Used in activation functions."
      },
      {
        name: "158. Math.trunc()",
        description: "Math.trunc removes decimal part (towards zero). Where used? Integer extraction, floor for positive numbers.",
        code: "console.log(Math.trunc(4.2));\nconsole.log(Math.trunc(4.9));\nconsole.log(Math.trunc(4.0));\nconsole.log(Math.trunc(-4.2));\nconsole.log(Math.trunc(-4.9));\nlet price = 19.99;\nlet dollars = Math.trunc(price);\nconsole.log(dollars);\nlet numbers = [1.2, 2.5, 3.7, 4.4, 5.6];\nlet truncNums = numbers.map(n => Math.trunc(n));\nconsole.log(truncNums);\nlet positive = Math.trunc(123.456);\nconsole.log(positive);\nlet zero = Math.trunc(0.99);\nconsole.log(zero);\nlet negative = Math.trunc(-123.456);\nconsole.log(negative);\nlet large = Math.trunc(1e20);\nconsole.log(large);\nlet string = Math.trunc('123.456');\nconsole.log(string);\nlet nan = Math.trunc('abc');\nconsole.log(nan);",
        simpleMeaning: "Math.trunc removes decimal part (towards zero).",
        output: "4\n4\n4\n-4\n-4\n19\n[1,2,3,4,5]\n123\n0\n-123\n1e20\n123\nNaN",
        note: "Difference from floor: floor(-4.2) = -5, trunc(-4.2) = -4."
      },
      {
        name: "159. Number.EPSILON",
        description: "Number.EPSILON is smallest difference between representable numbers (2.22e-16). Where used? Floating-point comparison, precision check.",
        code: "console.log(Number.EPSILON);\nlet a = 0.1 + 0.2;\nlet b = 0.3;\nconsole.log(a === b);\nconsole.log(Math.abs(a - b) < Number.EPSILON);\nlet x = 1.0000000000000001;\nlet y = 1.0000000000000002;\nconsole.log(x === y);\nconsole.log(Math.abs(x - y) < Number.EPSILON);\nlet epsilon = Number.EPSILON;\nconsole.log(1 + epsilon !== 1);\nlet compare = (a, b) => Math.abs(a - b) < Number.EPSILON;\nconsole.log(compare(0.1 + 0.2, 0.3));\nlet small = Number.EPSILON;\nconsole.log(small.toFixed(20));\nlet notEqual = 0.1 + 0.2 !== 0.3;\nconsole.log(notEqual);\nlet safe = Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;\nconsole.log(safe);",
        simpleMeaning: "Number.EPSILON is smallest difference between floating-point numbers.",
        output: "2.220446049250313e-16\nfalse\ntrue\nfalse\ntrue\ntrue\ntrue\n0.00000000000000022204\ntrue\ntrue",
        note: "Use for safe floating-point comparisons instead of ===."
      },
      {
        name: "160. Number.MAX_SAFE_INTEGER",
        description: "Number.MAX_SAFE_INTEGER is largest safe integer (2⁵³ - 1 = 9,007,199,254,740,991). Where used? Large ID handling, safe integer check.",
        code: "console.log(Number.MAX_SAFE_INTEGER);\nlet max = Number.MAX_SAFE_INTEGER;\nconsole.log(max + 1 === max + 2);\nlet safe = Number.isSafeInteger(max);\nconsole.log(safe);\nlet unsafe = max + 1;\nconsole.log(Number.isSafeInteger(unsafe));\nlet id = 9007199254740992;\nconsole.log(Number.isSafeInteger(id));\nlet bigNumber = 1e16;\nconsole.log(Number.isSafeInteger(bigNumber));\nlet sum = 9007199254740991 + 1;\nconsole.log(sum);\nlet diff = 9007199254740991 - 1;\nconsole.log(diff);\nlet maxSafe = Number.MAX_SAFE_INTEGER;\nlet minSafe = Number.MIN_SAFE_INTEGER;\nconsole.log(maxSafe, minSafe);\nlet withinRange = (n) => n <= Number.MAX_SAFE_INTEGER && n >= Number.MIN_SAFE_INTEGER;\nconsole.log(withinRange(1e15));\nconsole.log(withinRange(1e16));",
        simpleMeaning: "MAX_SAFE_INTEGER is largest integer that can be represented exactly.",
        output: "9007199254740991\ntrue\ntrue\nfalse\nfalse\nfalse\n9007199254740992\n9007199254740990\n9007199254740991 -9007199254740991\ntrue\nfalse",
        note: "Use BigInt for numbers beyond safe integer range."
      },
      
      // ==================== SECTION 11: NUMBER PROPERTIES (161-165) ====================
      {
        name: "161. Number.MIN_SAFE_INTEGER",
        description: "Number.MIN_SAFE_INTEGER is smallest safe integer (-2⁵³ + 1). Where used? Safe integer range, negative ID validation.",
        code: "console.log(Number.MIN_SAFE_INTEGER);\nlet min = Number.MIN_SAFE_INTEGER;\nconsole.log(min - 1 === min - 2);\nlet safe = Number.isSafeInteger(min);\nconsole.log(safe);\nlet unsafe = min - 1;\nconsole.log(Number.isSafeInteger(unsafe));\nlet negative = -9007199254740992;\nconsole.log(Number.isSafeInteger(negative));\nlet range = (n) => n >= Number.MIN_SAFE_INTEGER && n <= Number.MAX_SAFE_INTEGER;\nconsole.log(range(0));\nconsole.log(range(-1e15));\nconsole.log(range(-1e16));\nlet minSafe = Number.MIN_SAFE_INTEGER;\nconsole.log(minSafe.toLocaleString());\nlet below = minSafe - 5;\nconsole.log(below);\nlet above = minSafe + 5;\nconsole.log(above);\nlet safeSum = Number.MIN_SAFE_INTEGER + Number.MAX_SAFE_INTEGER;\nconsole.log(safeSum);",
        simpleMeaning: "MIN_SAFE_INTEGER is smallest safe integer (-9,007,199,254,740,991).",
        output: "-9007199254740991\ntrue\ntrue\nfalse\nfalse\ntrue\ntrue\nfalse\n-9,007,199,254,740,991\n-9007199254740996\n-9007199254740986\n0",
        note: "Use BigInt for numbers below MIN_SAFE_INTEGER."
      },
      {
        name: "162. Number.MAX_VALUE",
        description: "Number.MAX_VALUE is largest positive number (≈1.79e308). Where used? Maximum limit checks, overflow detection.",
        code: "console.log(Number.MAX_VALUE);\nlet max = Number.MAX_VALUE;\nconsole.log(max * 1.1);\nconsole.log(max === Infinity);\nlet overflow = max * 2;\nconsole.log(overflow);\nlet large = 1e308;\nconsole.log(large < Number.MAX_VALUE);\nlet tooLarge = 1e309;\nconsole.log(tooLarge);\nconsole.log(Number.MAX_VALUE.toExponential());\nlet isFinite = (n) => n <= Number.MAX_VALUE && n >= -Number.MAX_VALUE;\nconsole.log(isFinite(1e300));\nconsole.log(isFinite(1e400));\nlet maxNumber = Number.MAX_VALUE;\nconsole.log(maxNumber.toFixed(0));\nlet half = Number.MAX_VALUE / 2;\nconsole.log(half);\nlet double = Number.MAX_VALUE * 2;\nconsole.log(double);",
        simpleMeaning: "MAX_VALUE is largest representable positive number (~1.79e308).",
        output: "1.7976931348623157e+308\nInfinity\nfalse\nInfinity\ntrue\nInfinity\n1.7976931348623157e+308\ntrue\nfalse\n1.7976931348623157e+308\n8.988465674311579e+307\nInfinity",
        note: "Numbers larger than MAX_VALUE become Infinity."
      },
      {
        name: "163. Number.MIN_VALUE",
        description: "Number.MIN_VALUE is smallest positive number (~5e-324). Not negative. Where used? Precision limits, underflow detection.",
        code: "console.log(Number.MIN_VALUE);\nlet min = Number.MIN_VALUE;\nconsole.log(min > 0);\nconsole.log(min / 2);\nlet underflow = min / 2;\nconsole.log(underflow);\nlet smaller = 5e-324;\nconsole.log(smaller === Number.MIN_VALUE);\nlet tooSmall = 1e-325;\nconsole.log(tooSmall);\nconsole.log(Number.MIN_VALUE.toExponential());\nlet isPositive = (n) => n >= Number.MIN_VALUE || n === 0;\nconsole.log(isPositive(Number.MIN_VALUE));\nconsole.log(isPositive(Number.MIN_VALUE / 2));\nlet half = Number.MIN_VALUE / 2;\nconsole.log(half);\nlet double = Number.MIN_VALUE * 2;\nconsole.log(double);\nlet epsilon = Number.MIN_VALUE;\nconsole.log(epsilon);",
        simpleMeaning: "MIN_VALUE is smallest positive number (~5e-324).",
        output: "5e-324\ntrue\n0\n0\nfalse\n0\n5e-324\ntrue\nfalse\n0\n1e-323\n5e-324",
        note: "MIN_VALUE is positive, not negative. Smaller values become 0."
      },
      {
        name: "164. Number.NEGATIVE_INFINITY",
        description: "Number.NEGATIVE_INFINITY is negative infinity (-Infinity). Where used? Overflow detection, minimum value, edge cases.",
        code: "console.log(Number.NEGATIVE_INFINITY);\nconsole.log(-1/0);\nlet negativeInf = Number.NEGATIVE_INFINITY;\nconsole.log(negativeInf < -1e300);\nconsole.log(negativeInf + 5);\nconsole.log(negativeInf * 2);\nconsole.log(negativeInf / 2);\nconsole.log(negativeInf === -Infinity);\nlet isNegativeInfinity = (n) => n === Number.NEGATIVE_INFINITY;\nconsole.log(isNegativeInfinity(-Infinity));\nconsole.log(isNegativeInfinity(-1e308));\nlet arr = [1, 2, 3];\nlet min = Math.min(...arr, Number.NEGATIVE_INFINITY);\nconsole.log(min);\nlet negative = Number.NEGATIVE_INFINITY;\nconsole.log(negative.toFixed(2));\nconsole.log(typeof negative);",
        simpleMeaning: "NEGATIVE_INFINITY is -Infinity, less than any number.",
        output: "-Infinity\n-Infinity\ntrue\n-Infinity\n-Infinity\n-Infinity\ntrue\ntrue\nfalse\n-Infinity\n-Infinity\nnumber",
        note: "Use isFinite() to check if number is finite (not infinite)."
      },
      {
        name: "165. Number.POSITIVE_INFINITY",
        description: "Number.POSITIVE_INFINITY is positive infinity (Infinity). Where used? Overflow detection, maximum value, initialization.",
        code: "console.log(Number.POSITIVE_INFINITY);\nconsole.log(1/0);\nlet positiveInf = Number.POSITIVE_INFINITY;\nconsole.log(positiveInf > 1e300);\nconsole.log(positiveInf + 5);\nconsole.log(positiveInf * 2);\nconsole.log(positiveInf / 2);\nconsole.log(positiveInf === Infinity);\nlet isInfinite = (n) => n === Number.POSITIVE_INFINITY;\nconsole.log(isInfinite(Infinity));\nconsole.log(isInfinite(1e308));\nlet arr = [1, 2, 3];\nlet max = Math.max(...arr, Number.POSITIVE_INFINITY);\nconsole.log(max);\nlet positive = Number.POSITIVE_INFINITY;\nconsole.log(positive.toFixed(2));\nconsole.log(typeof positive);",
        simpleMeaning: "POSITIVE_INFINITY is Infinity, greater than any number.",
        output: "Infinity\nInfinity\ntrue\nInfinity\nInfinity\nInfinity\ntrue\ntrue\nfalse\nInfinity\nInfinity\nnumber",
        note: "Use Number.isFinite() to check for finite numbers."
      },
      
      // ==================== SECTION 12: GLOBAL OBJECTS (166-175) ====================
      {
        name: "166. globalThis",
        description: "globalThis provides universal access to global object across environments (browser window, Node global). Where used? Cross-platform code, libraries, polyfills.",
        code: "console.log(globalThis);\nconsole.log(globalThis === window);\nconsole.log(globalThis === global);\nglobalThis.myVar = 'Hello';\nconsole.log(globalThis.myVar);\nlet isBrowser = typeof window !== 'undefined' && window === globalThis;\nconsole.log(isBrowser);\nlet isNode = typeof global !== 'undefined' && global === globalThis;\nconsole.log(isNode);\nif(globalThis.console) {\n  globalThis.console.log('Console exists');\n}\nlet env = globalThis;\nenv.myGlobalFunction = () => 'works';\nconsole.log(globalThis.myGlobalFunction());\nlet isGlobal = (typeof window !== 'undefined' ? window : global) === globalThis;\nconsole.log(isGlobal);\nlet history = globalThis.history;\nconsole.log(history);\nlet location = globalThis.location;\nconsole.log(location);",
        simpleMeaning: "globalThis works in all JavaScript environments (browser, Node, workers).",
        output: "[object Window]/[object global]\ntrue/false\ntrue\nHello\ntrue/false\ntrue/false\nConsole exists\nworks\ntrue\n[object History]\n[object Location]",
        note: "Use globalThis instead of window or global for cross-platform code."
      },
      {
        name: "167. isFinite()",
        description: "isFinite checks if value is finite number (not Infinity, -Infinity, NaN). Where used? Input validation, number checking.",
        code: "console.log(isFinite(10));\nconsole.log(isFinite(Infinity));\nconsole.log(isFinite(-Infinity));\nconsole.log(isFinite(NaN));\nconsole.log(isFinite('123'));\nconsole.log(isFinite('abc'));\nlet numbers = [5, Infinity, '10', NaN, 'hello'];\nlet finite = numbers.filter(isFinite);\nconsole.log(finite);\nlet validateNumber = (n) => isFinite(n) && n !== '';\nconsole.log(validateNumber(100));\nconsole.log(validateNumber(Infinity));\nconsole.log(validateNumber(NaN));\nlet safe = (n) => Number.isFinite(parseFloat(n));\nconsole.log(safe('123'));\nconsole.log(safe('abc'));\nlet infinite = Infinity;\nconsole.log(isFinite(infinite));\nlet negativeInf = -Infinity;\nconsole.log(isFinite(negativeInf));",
        simpleMeaning: "isFinite checks if value is finite (not Infinity or NaN).",
        output: "true\nfalse\nfalse\nfalse\ntrue\nfalse\n[5,10]\ntrue\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse",
        note: "Use Number.isFinite for no type coercion (stricter)."
      },
      {
        name: "168. isNaN()",
        description: "isNaN checks if value is NaN (Not a Number). Converts value to number first. Where used? Validation, error checking.",
        code: "console.log(isNaN(NaN));\nconsole.log(isNaN('abc'));\nconsole.log(isNaN(123));\nconsole.log(isNaN('123'));\nconsole.log(isNaN(undefined));\nconsole.log(isNaN({}));\nconsole.log(isNaN([]));\nlet numbers = [1, NaN, 2, 'abc', 3];\nlet nanValues = numbers.filter(isNaN);\nconsole.log(nanValues);\nlet checkNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);\nconsole.log(checkNumber('123'));\nconsole.log(checkNumber('abc'));\nconsole.log(checkNumber(NaN));\nlet strictCheck = (n) => Number.isNaN(n);\nconsole.log(strictCheck(NaN));\nconsole.log(strictCheck('abc'));\nlet value = NaN;\nconsole.log(isNaN(value));\nlet notNumber = 'text';\nconsole.log(isNaN(notNumber));",
        simpleMeaning: "isNaN checks if value is NaN (Not a Number).",
        output: "true\ntrue\nfalse\nfalse\ntrue\ntrue\nfalse\n[NaN]\ntrue\nfalse\nfalse\ntrue\nfalse\ntrue\ntrue",
        note: "Use Number.isNaN for strict check without type coercion."
      },
      {
        name: "169. parseFloat()",
        description: "parseFloat parses string to float (decimal number). Stops at first non-digit. Where used? Form input parsing, CSS value parsing.",
        code: "console.log(parseFloat('3.14'));\nconsole.log(parseFloat('10.5px'));\nconsole.log(parseFloat('  12.34  '));\nconsole.log(parseFloat('abc123'));\nconsole.log(parseFloat('10.5.6'));\nlet prices = ['$19.99', '$24.50', '$9.99'];\nlet numbers = prices.map(p => parseFloat(p.slice(1)));\nconsole.log(numbers);\nlet cssValue = '150.5px';\nlet numeric = parseFloat(cssValue);\nconsole.log(numeric);\nlet percentages = ['45.5%', '78.3%', '12.8%'];\nlet values = percentages.map(p => parseFloat(p));\nconsole.log(values);\nlet str = '123.456abc';\nconsole.log(parseFloat(str));\nlet negative = '-98.7';\nconsole.log(parseFloat(negative));\nlet scientific = '1.23e4';\nconsole.log(parseFloat(scientific));\nlet hex = '0xFF';\nconsole.log(parseFloat(hex));",
        simpleMeaning: "parseFloat extracts float number from string start.",
        output: "3.14\n10.5\n12.34\nNaN\n10.5\n[19.99,24.5,9.99]\n150.5\n[45.5,78.3,12.8]\n123.456\n-98.7\n12300\n0",
        note: "Stops at first invalid character. Returns NaN if no number found."
      },
      {
        name: "170. parseInt()",
        description: "parseInt parses string to integer. Stops at first non-digit. Can specify radix (base). Where used? Form input, color parsing, base conversion.",
        code: "console.log(parseInt('123'));\nconsole.log(parseInt('123px'));\nconsole.log(parseInt('  45  '));\nconsole.log(parseInt('abc'));\nconsole.log(parseInt('10.5'));\nlet sizes = ['200px', '150px', '100px'];\nlet pixels = sizes.map(s => parseInt(s));\nconsole.log(pixels);\nconsole.log(parseInt('FF', 16));\nconsole.log(parseInt('1010', 2));\nconsole.log(parseInt('77', 8));\nlet hexColor = '#FF5733';\nlet red = parseInt(hexColor.slice(1,3), 16);\nconsole.log(red);\nlet binary = '1101';\nconsole.log(parseInt(binary, 2));\nlet octal = '755';\nconsole.log(parseInt(octal, 8));\nlet differentBases = (num, base) => parseInt(num, base);\nconsole.log(differentBases('100', 10));\nconsole.log(differentBases('100', 16));\nconsole.log(parseInt('0x10'));\nconsole.log(parseInt('10', 10));",
        simpleMeaning: "parseInt extracts integer from string start.",
        output: "123\n123\n45\nNaN\n10\n[200,150,100]\n255\n10\n63\n255\n13\n493\n100\n256\n16\n10",
        note: "Always specify radix (base) for predictable results: parseInt(str, 10)."
      },
      {
        name: "171. decodeURI()",
        description: "decodeURI decodes URI (URL) encoded characters. Reverses encodeURI(). Where used? URL handling, parameter parsing.",
        code: "let encoded = 'https%3A%2F%2Fexample.com%2Fpath%3Fq%3Dhello%20world';\nlet decoded = decodeURI(encoded);\nconsole.log(decoded);\nlet url = 'https://example.com/?name=John%20Doe&city=New%20York';\nlet decodedUrl = decodeURI(url);\nconsole.log(decodedUrl);\nlet japanese = '%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF';\nconsole.log(decodeURI(japanese));\nlet emoji = '%F0%9F%98%80';\nconsole.log(decodeURI(emoji));\nlet space = 'hello%20world';\nconsole.log(decodeURI(space));\nlet plus = 'hello+world';\nconsole.log(decodeURI(plus));\nlet special = '%24%26%3C%3E%3F';\nconsole.log(decodeURI(special));\nlet path = 'my%20folder%2Ffile.txt';\nconsole.log(decodeURI(path));\nlet encodedOnce = encodeURI('hello world');\nconsole.log(decodeURI(encodedOnce));\nlet nested = decodeURI('%25');\nconsole.log(nested);\nlet component = decodeURIComponent('%2F%3F%23');\nconsole.log(component);",
        simpleMeaning: "decodeURI decodes URL-encoded characters.",
        output: "https://example.com/path?q=hello world\nhttps://example.com/?name=John Doe&city=New York\nこんにちは\n😀\nhello world\nhello+world\n$&<>?\nmy folder/file.txt\nhello world\n%\n/?",
        note: "Use decodeURIComponent for query string parameters."
      },
      {
        name: "172. decodeURIComponent()",
        description: "decodeURIComponent decodes URI component (query parameters). Decodes more characters than decodeURI. Where used? Form data, API parameters.",
        code: "let encoded = 'hello%20world%26foo%3Dbar';\nlet decoded = decodeURIComponent(encoded);\nconsole.log(decoded);\nlet query = 'name=John%20Doe&city=New%20York&age=25';\nlet params = query.split('&').map(p => decodeURIComponent(p));\nconsole.log(params);\nlet special = '%2F%3F%23%26%3D%2B';\nconsole.log(decodeURIComponent(special));\nlet japanese = '%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF';\nconsole.log(decodeURIComponent(japanese));\nlet emoji = '%F0%9F%98%80%F0%9F%98%8D';\nconsole.log(decodeURIComponent(emoji));\nlet plusSign = 'hello+world';\nconsole.log(decodeURIComponent(plusSign));\nlet nested = decodeURIComponent('%25')\nconsole.log(nested);\nlet space = decodeURIComponent('%20');\nconsole.log(space);\nlet email = 'user%40example.com';\nconsole.log(decodeURIComponent(email));\nlet url = 'https%3A%2F%2Fexample.com%2Fpath';\nconsole.log(decodeURIComponent(url));\nlet mixed = '%E2%82%AC';\nconsole.log(decodeURIComponent(mixed));",
        simpleMeaning: "decodeURIComponent decodes URI component (query parameters).",
        output: "hello world&foo=bar\n['name=John Doe','city=New York','age=25']\n/?&=+\nこんにちは\n😀😍\nhello+world\n%\n \nuser@example.com\nhttps://example.com/path\n€",
        note: "Use for decoding query string parameters from URLs."
      },
      {
        name: "173. encodeURI()",
        description: "encodeURI encodes URI (URL) by escaping special characters. Preserves: / ? # : @ & = + $ , - _ . ! ~ * ' ( ). Where used? URL encoding, link generation.",
        code: "let url = 'https://example.com/path?name=John Doe&city=New York';\nlet encoded = encodeURI(url);\nconsole.log(encoded);\nlet japanese = 'こんにちは';\nconsole.log(encodeURI(japanese));\nlet emoji = '😀';\nconsole.log(encodeURI(emoji));\nlet special = 'hello world & foo=bar';\nconsole.log(encodeURI(special));\nlet reserved = '/?#:@&=+$,;-_.!~*\\'()';\nconsole.log(encodeURI(reserved));\nlet space = 'hello world';\nconsole.log(encodeURI(space));\nlet percent = '100%';\nconsole.log(encodeURI(percent));\nlet plus = '1+2=3';\nconsole.log(encodeURI(plus));\nlet multiple = 'a b c d e';\nconsole.log(encodeURI(multiple));\nlet path = 'my folder/file.txt';\nconsole.log(encodeURI(path));\nlet query = 'q=hello world&filter=active';\nconsole.log(encodeURI(query));",
        simpleMeaning: "encodeURI encodes URI by escaping special characters.",
        output: "https://example.com/path?name=John%20Doe&city=New%20York\n%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF\n%F0%9F%98%80\nhello%20world%20&%20foo=bar\n/?#:@&=+$,;-_.!~*'()\nhello%20world\n100%25\n1%2B2%3D3\na%20b%20c%20d%20e\nmy%20folder/file.txt\nq=hello%20world&filter=active",
        note: "Preserves URL structure (/ ? #). Use encodeURIComponent for parameters."
      },
      {
        name: "174. encodeURIComponent()",
        description: "encodeURIComponent encodes URI component (escapes most characters). Use for query parameters. Where used? Form data encoding, API parameter encoding.",
        code: "let param = 'John Doe & Co.';\nlet encoded = encodeURIComponent(param);\nconsole.log(encoded);\nlet query = 'name=John Doe&city=New York';\nlet encodedQuery = encodeURIComponent(query);\nconsole.log(encodedQuery);\nlet special = 'hello/world?foo=bar#section';\nconsole.log(encodeURIComponent(special));\nlet japanese = 'こんにちは';\nconsole.log(encodeURIComponent(japanese));\nlet emoji = '😀😍🎉';\nconsole.log(encodeURIComponent(emoji));\nlet email = 'user@example.com';\nconsole.log(encodeURIComponent(email));\nlet space = 'hello world';\nconsole.log(encodeURIComponent(space));\nlet plus = '1+2=3';\nconsole.log(encodeURIComponent(plus));\nlet url = 'https://example.com/path';\nconsole.log(encodeURIComponent(url));\nlet multiple = 'a:b,c;d$e';\nconsole.log(encodeURIComponent(multiple));\nlet percent = '100%';\nconsole.log(encodeURIComponent(percent));\nlet apostrophe = \"John's book\";\nconsole.log(encodeURIComponent(apostrophe));",
        simpleMeaning: "encodeURIComponent encodes URI component (most characters escaped).",
        output: "John%20Doe%20%26%20Co.\nname%3DJohn%20Doe%26city%3DNew%20York\nhello%2Fworld%3Ffoo%3Dbar%23section\n%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF\n%F0%9F%98%80%F0%9F%98%8D%F0%9F%8E%89\nuser%40example.com\nhello%20world\n1%2B2%3D3\nhttps%3A%2F%2Fexample.com%2Fpath\na%3Ab%2Cc%3Bd%24e\n100%25\nJohn%27s%20book",
        note: "Use for encoding query parameter values, not whole URLs."
      },
      {
        name: "175. escape() / unescape() (Deprecated)",
        description: "escape/unescape are deprecated. Old encoding functions. Use encodeURI/decodeURI instead. Where used? Legacy code only.",
        code: "let text = 'Hello World!';\nlet escaped = escape(text);\nconsole.log(escaped);\nlet unescaped = unescape(escaped);\nconsole.log(unescaped);\nlet special = '!@#$%^&*()';\nconsole.log(escape(special));\nlet unicode = 'こんにちは';\nconsole.log(escape(unicode));\nlet modern = encodeURIComponent('Hello World!');\nconsole.log(modern);\nlet old = escape('Hello World!');\nconsole.log(old);\nlet compare = escape('a b c') === encodeURIComponent('a b c');\nconsole.log(compare);\nlet space = escape(' ');\nconsole.log(space);\nlet plus = escape('+');\nconsole.log(plus);\nlet deprecated = escape('http://example.com');\nconsole.log(deprecated);\nlet modernVersion = encodeURI('http://example.com');\nconsole.log(modernVersion);",
        simpleMeaning: "escape/unescape are old encoding methods (deprecated). Use encodeURI instead.",
        output: "Hello%20World%21\nHello World!\n%21%40%23%24%25%5E%26%2A%28%29\n%u3053%u3093%u306B%u3061%u306F\nHello%20World%21\nHello%20World%21\nfalse\n%20\n%2B\nhttp%3A//example.com\nhttp://example.com",
        note: "Do not use escape/unescape. Use encodeURI/decodeURI or encodeURIComponent."
      },
      
      // ==================== SECTION 13: FINAL TOPICS (176-180) ====================
      {
        name: "176. eval()",
        description: "eval executes string as JavaScript code. Dangerous - avoid using. Security risk, performance issue. Where used? Almost never (legacy).",
        code: "let x = 10;\nlet result = eval('x + 5');\nconsole.log(result);\nlet code = 'console.log(\"Hello\")';\neval(code);\nlet expression = '2 + 2';\nconsole.log(eval(expression));\nlet dynamic = 'let y = 20; y * 2';\nconsole.log(eval(dynamic));\nlet obj = eval('({ name: \"John\", age: 25 })');\nconsole.log(obj);\nlet dangerous = eval('1 + 1');\nconsole.log(dangerous);\nlet withVar = eval('var z = 30; z');\nconsole.log(z);\nlet sum = eval('10 + 20');\nconsole.log(sum);\nlet json = '{\"name\":\"John\"}';\nlet parsed = eval('(' + json + ')');\nconsole.log(parsed);\nlet security = 'alert(\"XSS\")';\n// eval(security);  // Dangerous!\nconsole.log('eval is dangerous');",
        simpleMeaning: "eval executes string as code. Avoid using (security risk).",
        output: "15\nHello\n4\n40\n{ name: 'John', age: 25 }\n2\n30\n30\n{ name: 'John' }\neval is dangerous",
        note: "Never use eval on user input. Use JSON.parse for JSON, Function constructor for dynamic functions."
      },
      {
        name: "177. Function Constructor",
        description: "Function constructor creates function from string. Alternative to eval. More contained but still caution. Where used? Dynamic function generation, templates.",
        code: "let add = new Function('a', 'b', 'return a + b');\nconsole.log(add(5, 3));\nlet multiply = new Function('x', 'y', 'return x * y');\nconsole.log(multiply(4, 5));\nlet greet = new Function('name', 'return \"Hello \" + name');\nconsole.log(greet('John'));\nlet square = new Function('n', 'return n * n');\nconsole.log(square(6));\nlet dynamic = (op) => new Function('a', 'b', `return a ${op} b`);\nlet addDynamic = dynamic('+');\nconsole.log(addDynamic(10, 20));\nlet subtractDynamic = dynamic('-');\nconsole.log(subtractDynamic(30, 10));\nlet math = new Function('a', 'b', 'c', 'return a + b * c');\nconsole.log(math(2, 3, 4));\nlet noArgs = new Function('return \"No arguments\"');\nconsole.log(noArgs());\nlet closure = (() => { let x = 10; return new Function('return x'); })();\nconsole.log(closure());\nlet safe = new Function('a', 'b', 'if(typeof a === \"number\" && typeof b === \"number\") return a + b; return NaN');\nconsole.log(safe(5, 'text'));",
        simpleMeaning: "Function constructor creates function from string code.",
        output: "8\n20\nHello John\n36\n30\n20\n14\nNo arguments\n10\nNaN",
        note: "Still dangerous with user input. Prefer normal function definitions."
      },
      {
        name: "178. void Operator",
        description: "void evaluates expression and returns undefined. Used with javascript: URLs. Where used? Hyperlinks that should do nothing, fixing undefined issues.",
        code: "console.log(void 0);\nconsole.log(void(0));\nlet result = void(5 + 5);\nconsole.log(result);\nlet x = 10;\nlet y = void(x++);\nconsole.log(x, y);\nlet link = 'javascript:void(0)';\nconsole.log(link);\nlet value = void 42;\nconsole.log(value);\nlet expression = void 'hello';\nconsole.log(expression);\nlet comparison = undefined === void 0;\nconsole.log(comparison);\nlet returned = (function(){ return void 0; })();\nconsole.log(returned);\nlet async = 'javascript:void(async function() { await fetch(\"/api\") })()';\nconsole.log(async);\nlet linkClick = `<a href=\"javascript:void(0)\" onclick=\"console.log('clicked')\">Click</a>`;\nconsole.log('void used in links');",
        simpleMeaning: "void evaluates expression and returns undefined.",
        output: "undefined\nundefined\nundefined\n11 undefined\njavascript:void(0)\nundefined\nundefined\ntrue\nundefined\njavascript:void(async function() { await fetch(\"/api\") })()\nvoid used in links",
        note: "Historically used in href='javascript:void(0)' to prevent navigation."
      },
      {
        name: "179. Infinity",
        description: "Infinity represents mathematical infinity. Greater than any finite number. Where used? Maximum values, overflow detection.",
        code: "console.log(Infinity);\nconsole.log(1 / 0);\nconsole.log(Number.POSITIVE_INFINITY);\nconsole.log(Infinity > 1e308);\nconsole.log(Infinity + 100);\nconsole.log(Infinity * 2);\nconsole.log(Infinity / 2);\nconsole.log(Infinity === Infinity);\nconsole.log(Infinity - Infinity);\nconsole.log(Infinity / Infinity);\nlet numbers = [10, 20, Infinity, 30];\nlet max = Math.max(...numbers);\nconsole.log(max);\nlet isInfinite = (n) => n === Infinity || n === -Infinity;\nconsole.log(isInfinite(Infinity));\nconsole.log(isInfinite(100));\nlet compare = Infinity > 1e1000;\nconsole.log(compare);\nlet operations = Infinity + Infinity;\nconsole.log(operations);",
        simpleMeaning: "Infinity is greater than any finite number.",
        output: "Infinity\nInfinity\nInfinity\ntrue\nInfinity\nInfinity\nInfinity\ntrue\nNaN\nNaN\nInfinity\ntrue\nfalse\ntrue\nInfinity",
        note: "Operations with Infinity can produce Infinity, NaN, or -Infinity."
      },
      {
        name: "180. NaN (Not a Number)",
        description: "NaN represents invalid number result. NaN is not equal to itself. Use isNaN() to check. Where used? Error handling, validation.",
        code: "console.log(NaN);\nconsole.log(parseInt('abc'));\nconsole.log(0 / 0);\nconsole.log(Math.sqrt(-1));\nconsole.log(Infinity - Infinity);\nconsole.log('abc' * 2);\nconsole.log(NaN === NaN);\nconsole.log(NaN == NaN);\nconsole.log(isNaN(NaN));\nconsole.log(Number.isNaN(NaN));\nlet numbers = [1, 2, NaN, 4, NaN];\nlet nanCount = numbers.filter(n => isNaN(n)).length;\nconsole.log(nanCount);\nlet check = (n) => isNaN(n) ? 'Invalid' : 'Valid';\nconsole.log(check(10));\nconsole.log(check(NaN));\nlet compare = (a, b) => isNaN(a) || isNaN(b) ? NaN : a + b;\nconsole.log(compare(5, NaN));\nconsole.log(compare(10, 20));\nlet object = NaN;\nconsole.log(typeof NaN);\nlet notEqual = NaN !== NaN;\nconsole.log(notEqual);",
        simpleMeaning: "NaN means Not a Number, result of invalid math operation.",
        output: "NaN\nNaN\nNaN\nNaN\nNaN\nNaN\nfalse\nfalse\ntrue\ntrue\n2\nValid\nInvalid\nNaN\n30\nnumber\ntrue",
        note: "NaN is the only value not equal to itself. Use isNaN() or Number.isNaN() to check."
      }
    ]
  }
};

export default learning;