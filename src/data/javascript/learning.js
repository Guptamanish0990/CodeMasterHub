// /data/javascript/learning.js

export const learning = {
  basic: {
    title: "🌱 JavaScript Basics - Complete Beginner's Guide",
    topics: [
      // ========== VARIABLES & DATA TYPES (1-5) ==========
      {
        name: "1. Variables (var, let, const)",
        description: "var = function-scoped (old), let = block-scoped (can reassign), const = block-scoped (cannot reassign). Use const by default, let when needed, avoid var.",
        code: `let myName = 'John';
const myAge = 25;
var oldWay = 'not recommended';

myName = 'Jane'; // allowed
// myAge = 26; // Error! const cannot be reassigned

console.log(myName, myAge);`,
        lineByLine: [
          "Line 1: let myName = 'John' - Block-scoped variable that can be reassigned later",
          "Line 2: const myAge = 25 - Block-scoped variable that CANNOT be reassigned (constant)",
          "Line 3: var oldWay = 'not recommended' - Function-scoped old way (avoid using)",
          "Line 5: myName = 'Jane' - Reassigning let variable is allowed",
          "Line 6: // myAge = 26 - Const cannot be reassigned (would cause error)",
          "Line 8: console.log(myName, myAge) - Logs current values to console"
        ],
        simpleMeaning: "let = can change later, const = cannot change, var = old way (avoid it)",
        output: "Jane 25",
        note: "const doesn't mean immutable - object properties can still change. Use let for counters, const for everything else."
      },
      {
        name: "2. Data Types - Primitive",
        description: "Seven primitive types: string, number, boolean, null, undefined, symbol, bigint. Each holds a single value and is immutable.",
        code: `let str = 'Hello';        // string
let num = 42;               // number
let bool = true;            // boolean
let empty = null;           // null (intentional absence)
let notDefined;             // undefined (unassigned)
let sym = Symbol('id');     // symbol (unique identifier)
let big = 9007199254740991n; // bigint (very large numbers)

console.log(typeof str, typeof num, typeof bool);`,
        lineByLine: [
          "Line 1: let str = 'Hello' - String type (text in quotes)",
          "Line 2: let num = 42 - Number type (integers and decimals)",
          "Line 3: let bool = true - Boolean type (true or false)",
          "Line 4: let empty = null - Null type (intentionally empty/nothing)",
          "Line 5: let notDefined - Undefined type (declared but not assigned)",
          "Line 6: let sym = Symbol('id') - Symbol type (unique identifier)",
          "Line 7: let big = 9007199254740991n - BigInt type (numbers beyond safe limit)",
          "Line 9: typeof operator - Checks the data type of a value"
        ],
        simpleMeaning: "Primitive types hold single values: strings (text), numbers, booleans (true/false), and special types like null/undefined.",
        output: "string number boolean",
        note: "Use typeof to check type. typeof null returns 'object' (historical bug). Primitive are immutable."
      },
      {
        name: "3. Data Types - Reference (Objects)",
        description: "Objects store collections of data and more complex entities. Arrays and functions are also objects. Remember: objects are passed by reference, not value.",
        code: `// Object literal
const person = {
  firstName: 'John',
  personAge: 25,
  greet() { return 'Hello'; }
};

// Array (also an object)
const colors = ['red', 'green', 'blue'];

console.log(person.firstName);
console.log(colors[0]);

// Reference behavior
const original = { value: 10 };
const copy = original;
copy.value = 20;
console.log(original.value); // 20 (reference!)`,
        lineByLine: [
          "Line 2-6: const person = { ... } - Object literal with properties and method",
          "Line 3: firstName: 'John' - Property with string value",
          "Line 4: personAge: 25 - Property with number value",
          "Line 5: greet() { return 'Hello' } - Method (function inside object)",
          "Line 9: const colors = ['red', 'green', 'blue'] - Array literal (type of object)",
          "Line 11: person.firstName - Accessing object property with dot notation",
          "Line 12: colors[0] - Accessing array element at index 0",
          "Line 15-18: Reference behavior - copy references same object, not creates new one"
        ],
        simpleMeaning: "Objects hold collections of data. Arrays and functions are also objects. Objects are passed by reference (changing one affects all references).",
        output: "John\nred\n20",
        note: "Objects are passed by reference, not value. Changing a copied object affects the original."
      },
      {
        name: "4. Type Conversion & Coercion",
        description: "Converting between data types explicitly (type conversion) or implicitly (coercion happens automatically).",
        code: `// Explicit conversion
let strNum = '123';
let convertedNum = Number(strNum);     // 123
let convertedStr = String(456);         // '456'
let convertedBool = Boolean(1);         // true

// Implicit coercion
let result = '5' + 3;          // '53' (string concatenation)
let subtraction = '10' - 5;    // 5 (number subtraction)

console.log(result, subtraction);

// Falsy values (convert to false)
console.log(Boolean(0));     // false
console.log(Boolean(''));    // false
console.log(Boolean(null));  // false
console.log(Boolean(undefined)); // false`,
        lineByLine: [
          "Line 2: let strNum = '123' - String containing digits",
          "Line 3: Number(strNum) - Explicitly converts string to number",
          "Line 4: String(456) - Explicitly converts number to string",
          "Line 5: Boolean(1) - Explicitly converts to boolean (true)",
          "Line 8: '5' + 3 - String + number = string concatenation (coercion)",
          "Line 9: '10' - 5 - String - number = number subtraction (coercion)",
          "Line 14-17: Falsy values - Values that become false when converted to boolean"
        ],
        simpleMeaning: "Type conversion = manually changing type. Coercion = JavaScript automatically changing type.",
        output: "53 5\nfalse\nfalse\nfalse\nfalse",
        note: "Use explicit conversion to avoid unexpected coercion bugs. + with string concatenates, - with string converts to number."
      },
      {
        name: "5. Template Literals",
        description: "String literals with embedded expressions using backticks (`). Supports multi-line strings and variable interpolation with ${}.",
        code: `const userName = 'John';
const userAge = 25;

// Multi-line and interpolation
const message = \`Hello \${userName},
You are \${userAge} years old.
Next year you'll be \${userAge + 1}.\`;

console.log(message);`,
        lineByLine: [
          "Line 1: const userName = 'John' - Variable for name",
          "Line 2: const userAge = 25 - Variable for age",
          "Line 5: const message = \\`Hello \${userName}, - Template literal starts with backtick",
          "Line 5: \${userName} - Embedding variable value inside string",
          "Line 6-7: Multi-line text - Template literals preserve line breaks",
          "Line 7: \${userAge + 1} - Can embed expressions, not just variables",
          "Line 9: console.log(message) - Outputs the formatted string"
        ],
        simpleMeaning: "Template literals let you embed variables directly in strings and write multi-line text easily.",
        output: "Hello John,\nYou are 25 years old.\nNext year you'll be 26.",
        note: "Use template literals instead of string concatenation for cleaner, more readable code."
      },

      // ========== OPERATORS & CONTROL FLOW (6-12) ==========
      {
        name: "6. Arithmetic Operators",
        description: "Basic math operations: addition (+), subtraction (-), multiplication (*), division (/), modulus (%), exponentiation (**). Increment/Decrement (++, --).",
        code: `let a = 10, b = 3;
console.log('Addition:', a + b);      // 13
console.log('Subtraction:', a - b);   // 7
console.log('Multiplication:', a * b); // 30
console.log('Division:', a / b);       // 3.333...
console.log('Modulus:', a % b);        // 1 (remainder)
console.log('Exponent:', a ** b);      // 1000 (10³)

// Increment/Decrement
let counter = 5;
counter++; // 6 (post-increment)
++counter; // 7 (pre-increment)
console.log(counter);`,
        lineByLine: [
          "Line 1: let a = 10, b = 3 - Declaring two number variables",
          "Line 2: a + b - Addition operator (adds values)",
          "Line 3: a - b - Subtraction operator",
          "Line 4: a * b - Multiplication operator",
          "Line 5: a / b - Division operator (result can be decimal)",
          "Line 6: a % b - Modulus/Remainder operator (remainder after division)",
          "Line 7: a ** b - Exponentiation operator (a raised to power b)",
          "Line 10: let counter = 5 - Variable for demonstration",
          "Line 11: counter++ - Post-increment (returns value THEN increments)",
          "Line 12: ++counter - Pre-increment (increments THEN returns value)"
        ],
        simpleMeaning: "Arithmetic operators do math: + - * / % **. ++ and -- increase/decrease by 1.",
        output: "Addition: 13\nSubtraction: 7\nMultiplication: 30\nDivision: 3.333...\nModulus: 1\nExponent: 1000\n7",
        note: "Be careful with increment operators - ++x returns value after increment, x++ returns value before increment."
      },
      {
        name: "7. Comparison Operators",
        description: "Compare values: == (loose equality - converts types), === (strict equality - checks type), !=, !==, >, <, >=, <=.",
        code: `console.log(5 == '5');    // true (loose, converts types)
console.log(5 === '5');   // false (strict, checks type)
console.log(5 != '5');     // false
console.log(5 !== '5');    // true
console.log(10 > 5);        // true
console.log(3 <= 3);        // true

// Object comparison (by reference)
const obj1 = { firstName: 'John' };
const obj2 = { firstName: 'John' };
console.log(obj1 === obj2);  // false (different references)

// Same reference
const obj3 = obj1;
console.log(obj1 === obj3);  // true`,
        lineByLine: [
          "Line 1: 5 == '5' - Loose equality: converts '5' to number, compares values (true)",
          "Line 2: 5 === '5' - Strict equality: checks type first (number vs string, false)",
          "Line 3: 5 != '5' - Loose inequality (false because values equal after conversion)",
          "Line 4: 5 !== '5' - Strict inequality (true because types differ)",
          "Line 5: 10 > 5 - Greater than operator (true)",
          "Line 6: 3 <= 3 - Less than or equal (true)",
          "Line 9-10: obj1 and obj2 - Same values but different objects",
          "Line 11: obj1 === obj2 - false because different references (memory locations)",
          "Line 14: obj3 = obj1 - Assigns same reference",
          "Line 15: obj1 === obj3 - true because same reference"
        ],
        simpleMeaning: "Comparison operators check relationships: equality (== vs ===), inequality, greater/less than.",
        output: "true\nfalse\nfalse\ntrue\ntrue\ntrue\nfalse\ntrue",
        note: "Always use === and !== for comparisons to avoid unexpected type coercion bugs."
      },
      {
        name: "8. Logical Operators",
        description: "Combine conditions: && (AND - all must be true), || (OR - at least one true), ! (NOT - inverts). Short-circuit evaluation returns first truthy/falsy value.",
        code: `let personAge = 25;
let hasLicense = true;

// AND - both must be true
console.log(personAge >= 18 && hasLicense);  // true

// OR - at least one true
console.log(personAge >= 18 || personAge < 16);    // true

// NOT - inverts boolean
console.log(!hasLicense);                // false

// Short-circuit (returns first truthy or last value)
console.log(0 && 'Hello');     // 0
console.log(5 || 'Default');    // 5

// Nullish coalescing (??) - only null/undefined trigger default
let emptyValue = null;
console.log(emptyValue ?? 'Default'); // 'Default'

let zeroValue = 0;
console.log(zeroValue ?? 'Default');   // 0 (0 is not nullish)`,
        lineByLine: [
          "Line 1-2: personAge = 25, hasLicense = true - Test values",
          "Line 5: && operator - Both conditions must be true",
          "Line 8: || operator - At least one condition must be true",
          "Line 11: ! operator - Inverts true to false / false to true",
          "Line 14: 0 && 'Hello' - && returns first falsy value (0)",
          "Line 15: 5 || 'Default' - || returns first truthy value (5)",
          "Line 18: null ?? 'Default' - ?? returns right side only for null/undefined",
          "Line 21: 0 ?? 'Default' - 0 is not null/undefined, so returns 0"
        ],
        simpleMeaning: "&& = all conditions true, || = at least one true, ! = opposite. ?? gives default only for null/undefined.",
        output: "true\ntrue\nfalse\n0\n5\nDefault\n0",
        note: "Use && for guard conditions, || for defaults, ?? for null/undefined defaults only."
      },
      {
        name: "9. If/Else Conditional Statements",
        description: "Execute different code blocks based on conditions. else if for multiple conditions, else for fallback.",
        code: `let testScore = 85;

if (testScore >= 90) {
  console.log('Grade: A');
} else if (testScore >= 80) {
  console.log('Grade: B');
} else if (testScore >= 70) {
  console.log('Grade: C');
} else {
  console.log('Grade: F');
}

// Ternary operator (shorthand if/else)
let status = testScore >= 60 ? 'Pass' : 'Fail';
console.log('Status:', status);

// Nested ternary (use sparingly)
let result = testScore >= 90 ? 'Excellent' : testScore >= 80 ? 'Good' : 'Average';`,
        lineByLine: [
          "Line 1: let testScore = 85 - Variable to test",
          "Line 3: if (testScore >= 90) - First condition check",
          "Line 4: console.log('Grade: A') - Executes if condition true",
          "Line 5: else if (testScore >= 80) - Second condition (if first false)",
          "Line 6: console.log('Grade: B') - Executes if second condition true",
          "Line 9: else - Default block if all conditions false",
          "Line 10: console.log('Grade: F') - Executes if none match",
          "Line 14: let status = testScore >= 60 ? 'Pass' : 'Fail' - Ternary operator: condition ? trueValue : falseValue",
          "Line 18: Nested ternary - Multiple conditions in one line"
        ],
        simpleMeaning: "if/else runs different code based on conditions. Ternary is a shorter way for simple if/else.",
        output: "Grade: B\nStatus: Pass",
        note: "Use ternary for simple conditions, if/else for complex logic. Avoid nested ternaries."
      },
      {
        name: "10. Switch Statement",
        description: "Execute code based on multiple matching cases. More readable than multiple if/else for many values.",
        code: `let dayNumber = 3;
let dayName;

switch(dayNumber) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  default:
    dayName = 'Weekend';
}
console.log(dayName); // Wednesday

// Fall-through (no break runs next case)
let switchValue = 2;
switch(switchValue) {
  case 1:
  case 2:
    console.log('First or second');
    break;
  case 3:
    console.log('Third');
    break;
}`,
        lineByLine: [
          "Line 1-2: let dayNumber = 3, dayName - Variable to test and result variable",
          "Line 4: switch(dayNumber) - Start switch with expression to match",
          "Line 5: case 1: - First case (matches if dayNumber === 1)",
          "Line 6: dayName = 'Monday' - Action for this case",
          "Line 7: break - Exit switch (prevents fall-through)",
          "Line 10: case 3: - Matches when dayNumber === 3",
          "Line 11: dayName = 'Wednesday' - Sets result",
          "Line 17: default: - Runs if no cases match",
          "Line 22-28: Fall-through example - Multiple cases share same code",
          "Line 23-24: case 1: case 2: - Both fall through to same block"
        ],
        simpleMeaning: "Switch checks a value against multiple cases. Use break to stop, default as fallback.",
        output: "Wednesday\nFirst or second",
        note: "Always include break unless you intentionally want fall-through behavior."
      },
      {
        name: "11. For Loop",
        description: "Repeat code a specific number of times. Syntax: for(initialization; condition; increment/decrement).",
        code: `// Basic for loop
for(let i = 1; i <= 5; i++) {
  console.log(\`Count: \${i}\`);
}

// Loop through array
const fruitList = ['Apple', 'Banana', 'Orange'];
for(let i = 0; i < fruitList.length; i++) {
  console.log(fruitList[i]);
}

// Nested loop
for(let outer = 1; outer <= 3; outer++) {
  for(let inner = 1; inner <= 2; inner++) {
    console.log(\`outer=\${outer}, inner=\${inner}\`);
  }
}

// for...of (iterates values)
for(const fruit of fruitList) {
  console.log(fruit);
}

// for...in (iterates property names)
for(const index in fruitList) {
  console.log(index, fruitList[index]);
}`,
        lineByLine: [
          "Line 2: for(let i = 1; i <= 5; i++) - Initialize i=1, condition i<=5, increment i++",
          "Line 3: console.log(`Count: ${i}`) - Body executes each iteration",
          "Line 7: const fruitList = [...] - Array to loop through",
          "Line 8: for(let i = 0; i < fruitList.length; i++) - Standard array iteration",
          "Line 9: console.log(fruitList[i]) - Access element by index",
          "Line 13-16: Nested loop - Outer loop runs 3 times, inner runs 2 times each",
          "Line 20: for(const fruit of fruitList) - For...of iterates values directly",
          "Line 25: for(const index in fruitList) - For...in iterates property names/indices"
        ],
        simpleMeaning: "For loop repeats code a set number of times. Use for arrays to go through each item.",
        output: "Count: 1\nCount: 2\nCount: 3\nCount: 4\nCount: 5\nApple\nBanana\nOrange\nouter=1,inner=1\nouter=1,inner=2\nouter=2,inner=1\nouter=2,inner=2\nouter=3,inner=1\nouter=3,inner=2\nApple\nBanana\nOrange\n0 Apple\n1 Banana\n2 Orange",
        note: "Use let for loop counter, avoid var which doesn't have block scope."
      },
      {
        name: "12. While & Do-While Loops",
        description: "while = checks condition BEFORE execution. do-while = executes at least once, checks AFTER.",
        code: `// While loop (check first)
let whileCounter = 1;
while(whileCounter <= 3) {
  console.log(\`While: \${whileCounter}\`);
  whileCounter++;
}

// Do-while loop (executes at least once)
let doCounter = 5;
do {
  console.log(\`Do-while: \${doCounter}\`);
  doCounter++;
} while(doCounter <= 3);

// While with break
let breakCounter = 1;
while(true) {
  console.log(\`Break at \${breakCounter}\`);
  if(breakCounter >= 3) break;
  breakCounter++;
}

// While with continue
let continueCounter = 0;
while(continueCounter < 5) {
  continueCounter++;
  if(continueCounter === 3) continue;  // skip 3
  console.log(\`Continue: \${continueCounter}\`);
}`,
        lineByLine: [
          "Line 2: let whileCounter = 1 - Initialize counter",
          "Line 3: while(whileCounter <= 3) - Check condition BEFORE loop body",
          "Line 4: console.log(`While: ${whileCounter}`) - Executes if condition true",
          "Line 5: whileCounter++ - Increment counter",
          "Line 9: let doCounter = 5 - Initialize",
          "Line 10: do { - Start do-while (executes at least once)",
          "Line 11: console.log(`Do-while: ${doCounter}`) - Runs before condition check",
          "Line 13: } while(doCounter <= 3) - Check condition AFTER execution",
          "Line 16-21: while(true) - Infinite loop with break",
          "Line 20: break - Exits loop immediately",
          "Line 24-29: continue - Skips rest of current iteration"
        ],
        simpleMeaning: "while checks condition first. do-while runs at least once. break exits loop, continue skips iteration.",
        output: "While: 1\nWhile: 2\nWhile: 3\nDo-while: 5\nBreak at 1\nBreak at 2\nBreak at 3\nContinue: 1\nContinue: 2\nContinue: 4\nContinue: 5",
        note: "Use while when number of iterations unknown, for when known. Ensure loop condition eventually becomes false."
      },

      // ========== FUNCTIONS (13-18) ==========
      {
        name: "13. Function Declarations",
        description: "Function declarations using 'function' keyword. Hoisted - can be called before definition. Can have default parameters.",
        code: `// Function declaration (hoisted)
sayHelloToUser('John');

function sayHelloToUser(userName) {
  console.log(\`Hello, \${userName}!\`);
}

// Function with return value
function addNumbers(x, y) {
  return x + y;
}
const sumResult = addNumbers(5, 3);
console.log('Sum:', sumResult);

// Default parameters
function greetUser(personName = 'Guest') {
  console.log(\`Welcome, \${personName}\`);
}
greetUser('John');    // Welcome, John
greetUser();          // Welcome, Guest

// Multiple returns
function getLetterGrade(score) {
  if(score >= 90) return 'A';
  if(score >= 80) return 'B';
  if(score >= 70) return 'C';
  return 'F';
}
console.log(getLetterGrade(85)); // B`,
        lineByLine: [
          "Line 2: sayHelloToUser('John') - Function called BEFORE declaration (works due to hoisting)",
          "Line 4: function sayHelloToUser(userName) - Function declaration with parameter",
          "Line 5: console.log(`Hello, ${userName}!`) - Body of function",
          "Line 9: function addNumbers(x, y) - Function that returns a value",
          "Line 10: return x + y - Returns result to caller",
          "Line 12: const sumResult = addNumbers(5, 3) - Calling function and storing result",
          "Line 16: function greetUser(personName = 'Guest') - Default parameter value",
          "Line 17: console.log(`Welcome, ${personName}`) - Uses default if argument missing",
          "Line 22-26: Multiple return statements - Function exits at first return"
        ],
        simpleMeaning: "Functions are reusable blocks of code. Function declarations are hoisted (can be used before defined).",
        output: "Hello, John!\nSum: 8\nWelcome, John\nWelcome, Guest\nB",
        note: "Function declarations are hoisted, function expressions are not. Use declarations for global functions."
      },
      {
        name: "14. Function Expressions",
        description: "Functions assigned to variables. Not hoisted - must be defined before use. Useful for callbacks and IIFEs.",
        code: `// Function expression (anonymous)
const multiplyNumbers = function(x, y) {
  return x * y;
};
console.log(multiplyNumbers(4, 5)); // 20

// Named function expression (better debugging)
const divideNumbers = function divideNumbers(x, y) {
  return x / y;
};
console.log(divideNumbers(10, 2)); // 5

// Function as argument (callback)
function processValue(num, callback) {
  return callback(num);
}
const doubleValue = function(val) { return val * 2; };
console.log(processValue(5, doubleValue)); // 10

// Immediately Invoked Function Expression (IIFE)
(function() {
  const privateMessage = 'I am private';
  console.log('IIFE runs immediately');
})();
// console.log(privateMessage); // Error - not accessible`,
        lineByLine: [
          "Line 2: const multiplyNumbers = function(x, y) { - Function expression (anonymous)",
          "Line 3: return x * y - Function body",
          "Line 4: }; - End of function expression",
          "Line 5: multiplyNumbers(4, 5) - Calling function stored in variable",
          "Line 8: const divideNumbers = function divideNumbers(x, y) { - Named function expression",
          "Line 13: function processValue(num, callback) - Higher-order function",
          "Line 14: return callback(num) - Calls the passed function",
          "Line 16: const doubleValue = function(val) { return val * 2; } - Function expression as callback",
          "Line 19-22: IIFE - Defined and immediately invoked",
          "Line 20: const privateMessage - Variable scoped to IIFE (not accessible outside)"
        ],
        simpleMeaning: "Function expressions store functions in variables. They are not hoisted (must be defined before use).",
        output: "20\n5\n10\nIIFE runs immediately",
        note: "Function expressions are useful for callbacks, IIFEs, and dynamic function creation."
      },
      {
        name: "15. Arrow Functions",
        description: "Concise function syntax using =>. Lexical 'this' binding. Cannot be used as constructors.",
        code: `// Basic arrow function
const addArrow = (x, y) => x + y;
console.log(addArrow(5, 3)); // 8

// Single parameter (parentheses optional)
const squareNumber = x => x * x;
console.log(squareNumber(4)); // 16

// No parameters (empty parentheses)
const greetArrow = () => 'Hello';
console.log(greetArrow()); // Hello

// Multi-line body requires braces and return
const multiplyNumbers = (x, y) => {
  const product = x * y;
  return product;
};
console.log(multiplyNumbers(3, 4)); // 12

// Returning object (needs parentheses)
const createUserObject = userName => ({ name: userName, active: true });
console.log(createUserObject('John'));

// Arrow function in callbacks
const numberList = [1, 2, 3];
const doubledNumbers = numberList.map(n => n * 2);
console.log(doubledNumbers); // [2,4,6]`,
        lineByLine: [
          "Line 2: const addArrow = (x, y) => x + y - Arrow function with implicit return",
          "Line 3: addArrow(5, 3) - Calling arrow function",
          "Line 6: const squareNumber = x => x * x - Single parameter: parentheses optional",
          "Line 9: const greetArrow = () => 'Hello' - No parameters: parentheses required",
          "Line 13: const multiplyNumbers = (x, y) => { - Multi-line needs braces",
          "Line 14: const product = x * y - Multiple statements require return keyword",
          "Line 15: return product - Explicit return needed",
          "Line 19: const createUserObject = userName => ({ name: userName, active: true }) - Return object needs parentheses",
          "Line 23: numberList.map(n => n * 2) - Arrow functions great for array methods"
        ],
        simpleMeaning: "Arrow functions are shorter syntax. They don't have their own 'this' - they inherit from surrounding scope.",
        output: "8\n16\nHello\n12\n{ name: 'John', active: true }\n[2,4,6]",
        note: "Arrow functions don't have their own 'this' - they inherit from surrounding scope."
      },
      {
        name: "16. Parameters & Arguments",
        description: "Rest parameters (...rest) collect remaining arguments into array. Spread operator expands iterables.",
        code: `// Rest parameters (collects into array)
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Rest must be last parameter
function logMessages(prefix, ...messages) {
  messages.forEach(msg => console.log(\`\${prefix} \${msg}\`));
}
logMessages('INFO:', 'Started', 'Processing', 'Done');

// Spread operator (expands iterable)
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1,2,3,4,5,6]

// Spread with function calls
const numberArray = [10, 20, 30];
console.log(Math.max(...numberArray)); // 30

// Spread with objects
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // { a:1, b:2, c:3, d:4 }

// Copy array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray.push(4);
console.log(originalArray, copiedArray); // [1,2,3] [1,2,3,4]`,
        lineByLine: [
          "Line 2: function sumAll(...numbers) - Rest parameter collects all arguments into array",
          "Line 3: numbers.reduce(...) - numbers is an array containing all arguments",
          "Line 7: function logMessages(prefix, ...messages) - Rest must be last parameter",
          "Line 8: messages.forEach(...) - messages collects remaining arguments",
          "Line 13: const combinedArray = [...array1, ...array2] - Spread expands array elements",
          "Line 17: Math.max(...numberArray) - Spread expands array as arguments",
          "Line 21: const mergedObject = { ...object1, ...object2 } - Spread copies object properties",
          "Line 25: const copiedArray = [...originalArray] - Spread creates shallow copy of array"
        ],
        simpleMeaning: "Rest parameters collect arguments into array. Spread expands arrays/objects into individual elements.",
        output: "10\nINFO: Started\nINFO: Processing\nINFO: Done\n[1,2,3,4,5,6]\n30\n{ a:1, b:2, c:3, d:4 }\n[1,2,3] [1,2,3,4]",
        note: "Use rest parameters for variable arguments, spread for copying/combining arrays."
      },
      {
        name: "17. Scope (Global, Function, Block)",
        description: "Global = accessible everywhere, Function = inside function, Block = inside {} (let/const).",
        code: `// Global scope
let globalVariable = 'I am global';

function scopeExample() {
  // Function scope
  let functionVariable = 'I am function-scoped';
  var oldStyleVar = 'Also function-scoped';
  
  if (true) {
    // Block scope
    let blockVariable = 'I am block-scoped';
    const constVariable = 'Also block-scoped';
    var leakedVariable = 'I leak out!'; // var ignores block
    
    console.log(blockVariable);     // Works
    console.log(functionVariable);   // Works
  }
  
  console.log(leakedVariable);      // Works (var leaked!)
  // console.log(blockVariable);     // Error! blockVariable not accessible
}

scopeExample();
console.log(globalVariable);         // Works
// console.log(functionVariable);     // Error! not accessible

// Temporal Dead Zone (TDZ)
// console.log(tdzVar); // ReferenceError
let tdzVar = 'No TDZ after declaration';`,
        lineByLine: [
          "Line 2: let globalVariable = 'I am global' - Global scope (accessible anywhere)",
          "Line 5: let functionVariable - Function scope (accessible inside function only)",
          "Line 6: var oldStyleVar - Function-scoped var (not block-scoped)",
          "Line 9: let blockVariable - Block scope (inside {} only)",
          "Line 11: var leakedVariable - var leaks out of block (accessible outside)",
          "Line 13: console.log(blockVariable) - Works inside block",
          "Line 14: console.log(functionVariable) - Works (function scope)",
          "Line 17: console.log(leakedVariable) - Works (var leaked)",
          "Line 18: // console.log(blockVariable) - Error outside block",
          "Line 22: console.log(globalVariable) - Works (global)",
          "Line 25-26: Temporal Dead Zone - let/const not accessible before declaration"
        ],
        simpleMeaning: "Scope determines where variables are accessible. Global = everywhere, Function = inside function, Block = inside {}.",
        output: "I am block-scoped\nI am function-scoped\nI leak out!\nI am global",
        note: "Use let/const for block scope, avoid var which ignores block scoping."
      },
      {
        name: "18. Hoisting",
        description: "JavaScript moves declarations to top of scope during compilation. var and function declarations hoisted.",
        code: `// Function declaration (fully hoisted)
sayHello('John'); // Works!

function sayHello(name) {
  console.log(\`Hello \${name}\`);
}

// var hoisting (hoisted but undefined)
console.log(myVar); // undefined (not error)
var myVar = 10;
console.log(myVar); // 10

// let/const hoisted but not initialized (Temporal Dead Zone)
// console.log(myLet); // ReferenceError!
let myLet = 20;

// Function expression (not hoisted)
// sayGoodbye('John'); // TypeError!
const sayGoodbye = function(name) {
  console.log(\`Goodbye \${name}\`);
};

// Hoisting order
// 1. Function declarations
// 2. var declarations
// 3. Assignments stay in place`,
        lineByLine: [
          "Line 2: sayHello('John') - Called before function declaration (works due to hoisting)",
          "Line 4-6: function sayHello(name) - Function declaration hoisted to top",
          "Line 9: console.log(myVar) - var is hoisted, value is undefined at this point",
          "Line 10: var myVar = 10 - Declaration hoisted, assignment stays here",
          "Line 14: // console.log(myLet) - let/const in Temporal Dead Zone",
          "Line 15: let myLet = 20 - Declaration hoisted but not initialized",
          "Line 18: // sayGoodbye('John') - Function expression not hoisted",
          "Line 19: const sayGoodbye = function(name) - Assignment happens here"
        ],
        simpleMeaning: "Hoisting moves declarations to top of scope. var is undefined, let/const in TDZ, functions fully hoisted.",
        output: "Hello John\nundefined\n10",
        note: "Declare variables at top of scope to avoid confusion. Use let/const to catch TDZ errors."
      },

      // ========== ARRAYS & OBJECTS (19-25) ==========
      {
        name: "19. Array Basics",
        description: "Ordered collections that can hold mixed types. Zero-indexed, dynamic length. Arrays are objects.",
        code: `// Creating arrays
const fruits = ['Apple', 'Banana', 'Orange'];
const mixed = [1, 'text', true, null, { name: 'John' }];
const empty = [];

// Accessing elements
console.log(fruits[0]);        // Apple
console.log(fruits.length);     // 3

// Modifying arrays
fruits[1] = 'Blueberry';
fruits[3] = 'Mango';           // Add at index
console.log(fruits);            // ['Apple', 'Blueberry', 'Orange', 'Mango']

// Array methods
fruits.push('Grape');          // Add to end
fruits.pop();                   // Remove from end
fruits.unshift('Kiwi');        // Add to beginning
fruits.shift();                 // Remove from beginning
console.log(fruits);            // ['Blueberry', 'Orange', 'Mango']

// Check if array
console.log(Array.isArray(fruits)); // true
console.log(fruits instanceof Array); // true`,
        lineByLine: [
          "Line 2: const fruits = ['Apple', 'Banana', 'Orange'] - Array literal",
          "Line 3: const mixed = [1, 'text', true, null, { name: 'John' }] - Mixed types allowed",
          "Line 7: fruits[0] - Access element at index 0",
          "Line 8: fruits.length - Get array length",
          "Line 11: fruits[1] = 'Blueberry' - Modify element at index",
          "Line 12: fruits[3] = 'Mango' - Add element at new index",
          "Line 15: fruits.push('Grape') - Add to end",
          "Line 16: fruits.pop() - Remove last element",
          "Line 17: fruits.unshift('Kiwi') - Add to beginning",
          "Line 18: fruits.shift() - Remove first element",
          "Line 22: Array.isArray(fruits) - Check if value is array"
        ],
        simpleMeaning: "Arrays hold ordered lists of values. Access by index (starting at 0). Length is number of items.",
        output: "Apple\n3\n['Apple', 'Blueberry', 'Orange', 'Mango']\n['Blueberry', 'Orange', 'Mango']\ntrue\ntrue",
        note: "Arrays are objects, so const arrays can be modified (elements can change, just not reassignment)."
      },
      {
        name: "20. Array Methods - Iteration",
        description: "forEach, map, filter, reduce - powerful functional methods for array manipulation.",
        code: `const numbers = [1, 2, 3, 4, 5];

// forEach - executes function for each element
numbers.forEach(num => console.log(num * 2)); // 2,4,6,8,10

// map - creates new array with transformed values
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2,4,6,8,10]

// filter - creates array with elements passing test
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2,4]

// reduce - accumulates values
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// reduce with initial value
const product = numbers.reduce((total, num) => total * num, 1);
console.log(product); // 120

// Chaining methods
const result = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .reduce((sum, num) => sum + num, 0);
console.log(result); // (3+4+5)*3 = 36

// find (first matching)
const found = numbers.find(num => num > 3);
console.log(found); // 4`,
        lineByLine: [
          "Line 4: numbers.forEach(num => console.log(num * 2)) - Executes for each element",
          "Line 7: numbers.map(num => num * 2) - Creates new array with transformed values",
          "Line 10: numbers.filter(num => num % 2 === 0) - Creates new array with passing elements",
          "Line 13: numbers.reduce((total, num) => total + num, 0) - Accumulates values, starts at 0",
          "Line 17: numbers.reduce((total, num) => total * num, 1) - Multiply all values, start at 1",
          "Line 21-24: Method chaining - filter, then map, then reduce in sequence",
          "Line 27: numbers.find(num => num > 3) - Returns first matching element"
        ],
        simpleMeaning: "forEach = loop, map = transform all, filter = keep matching, reduce = combine to one value.",
        output: "2\n4\n6\n8\n10\n[2,4,6,8,10]\n[2,4]\n15\n120\n36\n4",
        note: "map/filter/reduce are immutable (don't change original array). Chain them for clean data transformations."
      },
      {
        name: "21. Array Methods - Search & Transform",
        description: "find, findIndex, some, every, includes, sort, reverse, slice, splice.",
        code: `const numbers = [5, 2, 8, 1, 9, 2];

// find - returns first matching element
const found = numbers.find(num => num > 5);
console.log(found); // 8

// findIndex - returns index of first match
const index = numbers.findIndex(num => num > 5);
console.log(index); // 2

// some - checks if any element passes test
console.log(numbers.some(num => num > 10)); // false
console.log(numbers.every(num => num > 0));  // true
console.log(numbers.includes(8));            // true

// sort (modifies original!)
const sorted = [...numbers].sort((a, b) => a - b);
console.log(sorted); // [1,2,2,5,8,9]

// slice (returns new array, doesn't modify)
const sliced = numbers.slice(1, 4);
console.log(sliced); // [2,8,1]

// splice (modifies original! removes/replaces elements)
const removed = numbers.splice(2, 2); // remove 2 elements at index 2
console.log(removed); // [8,1]
console.log(numbers); // [5,2,2,9]

// reverse (modifies original)
const reversed = [...numbers].reverse();
console.log(reversed); // [9,2,2,5]`,
        lineByLine: [
          "Line 4: numbers.find(num => num > 5) - Returns first element >5",
          "Line 8: numbers.findIndex(num => num > 5) - Returns index of first match",
          "Line 12: numbers.some(num => num > 10) - Checks if ANY element passes",
          "Line 13: numbers.every(num => num > 0) - Checks if ALL elements pass",
          "Line 14: numbers.includes(8) - Checks if value exists in array",
          "Line 17: [...numbers].sort((a, b) => a - b) - Sort copies array first",
          "Line 20: numbers.slice(1, 4) - Returns elements from index 1 to 4 (excluding 4)",
          "Line 24: numbers.splice(2, 2) - Removes 2 elements starting at index 2",
          "Line 28: [...numbers].reverse() - Copies then reverses order"
        ],
        simpleMeaning: "find = get matching item, some = any match, every = all match, sort = order, slice = copy part, splice = remove/add.",
        output: "8\n2\nfalse\ntrue\ntrue\n[1,2,2,5,8,9]\n[2,8,1]\n[8,1]\n[5,2,2,9]\n[9,2,2,5]",
        note: "sort() sorts as strings by default - always provide compare function for numbers."
      },
      {
        name: "22. Object Basics",
        description: "Collections of key-value pairs. Keys are strings, values can be any type. Objects are mutable.",
        code: `// Object literal
const person = {
  name: 'John',
  age: 25,
  'has-job': true,      // quotes for hyphenated keys
  greet() {               // method shorthand
    return \`Hello, I'm \${this.name}\`;
  }
};

// Accessing properties
console.log(person.name);        // John (dot notation)
console.log(person['age']);      // 25 (bracket notation)
console.log(person['has-job']);  // true

// Adding/modifying properties
person.city = 'New York';
person['email'] = 'john@example.com';
person.age = 26;

// Deleting properties
delete person.city;

// Checking property existence
console.log('name' in person);      // true
console.log(person.hasOwnProperty('age')); // true

// Object.keys, values, entries
console.log(Object.keys(person));   // ['name', 'age', 'has-job', 'email']
console.log(Object.values(person)); // ['John', 26, true, 'john@example.com']`,
        lineByLine: [
          "Line 2-8: const person = { ... } - Object literal with properties",
          "Line 3: name: 'John' - Property with string value",
          "Line 4: age: 25 - Property with number value",
          "Line 5: 'has-job': true - Quotes needed for hyphenated key",
          "Line 6: greet() { ... } - Method shorthand (function inside object)",
          "Line 12: person.name - Dot notation (works for valid identifiers)",
          "Line 13: person['age'] - Bracket notation (works for any string)",
          "Line 14: person['has-job'] - Bracket needed for hyphenated keys",
          "Line 17-19: Adding properties - person.newProp = value",
          "Line 22: delete person.city - Removes property from object",
          "Line 25: 'name' in person - Checks if property exists",
          "Line 26: person.hasOwnProperty('age') - Checks own property (not inherited)"
        ],
        simpleMeaning: "Objects store data in key-value pairs. Access with dot (.) or brackets ([]). Can add/delete properties anytime.",
        output: "John\n25\ntrue\nNew York\njohn@example.com\ntrue\ntrue\n['name', 'age', 'has-job', 'email']\n['John', 26, true, 'john@example.com']",
        note: "Use dot notation for valid identifiers, bracket notation for dynamic or special keys."
      },
      {
        name: "23. Object Methods & Operations",
        description: "Object.keys, Object.values, Object.entries, Object.assign, spread operator, destructuring.",
        code: `const person = { name: 'John', age: 25, city: 'NYC' };

// Get keys, values, entries
console.log(Object.keys(person));     // ['name', 'age', 'city']
console.log(Object.values(person));   // ['John', 25, 'NYC']
console.log(Object.entries(person));  // [['name','John'], ['age',25], ['city','NYC']]

// Iterating objects
for (let key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// Object.assign (copy properties)
const copy = Object.assign({}, person);
console.log(copy); // { name: 'John', age: 25, city: 'NYC' }

// Spread operator
const clone = { ...person, country: 'USA' };
console.log(clone); // { name: 'John', age: 25, city: 'NYC', country: 'USA' }

// Object destructuring
const { name, age } = person;
console.log(name, age); // John 25

// Renaming during destructuring
const { name: userName, city: userCity } = person;
console.log(userName, userCity); // John NYC

// Default values in destructuring
const { role = 'user' } = person;
console.log(role); // user

// Nested destructuring
const user = { address: { street: 'Main St', zip: '10001' } };
const { address: { street, zip } } = user;
console.log(street, zip); // Main St 10001`,
        lineByLine: [
          "Line 4: Object.keys(person) - Returns array of property names",
          "Line 5: Object.values(person) - Returns array of property values",
          "Line 6: Object.entries(person) - Returns array of [key, value] pairs",
          "Line 9: for (let key in person) - Iterates over enumerable properties",
          "Line 13: Object.assign({}, person) - Copies properties to new object",
          "Line 17: { ...person, country: 'USA' } - Spread operator copies and adds",
          "Line 21: const { name, age } = person - Object destructuring",
          "Line 25: const { name: userName, city: userCity } - Renaming during destructuring",
          "Line 29: const { role = 'user' } = person - Default value if property missing",
          "Line 33-34: Nested destructuring - Extracts nested properties"
        ],
        simpleMeaning: "Object methods let you get keys, values, and entries. Spread and destructuring make working with objects easier.",
        output: "['name', 'age', 'city']\n['John', 25, 'NYC']\n[['name','John'], ['age',25], ['city','NYC']]\nname: John\nage: 25\ncity: NYC\n{ name: 'John', age: 25, city: 'NYC' }\n{ name: 'John', age: 25, city: 'NYC', country: 'USA' }\nJohn 25\nJohn NYC\nuser\nMain St 10001",
        note: "for...in iterates enumerable properties including prototype chain - use hasOwnProperty to filter."
      },
      {
        name: "24. Array Destructuring",
        description: "Extract array values into variables using pattern matching. Can skip elements, set defaults, use rest.",
        code: `const colors = ['red', 'green', 'blue'];

// Basic destructuring
const [first, second, third] = colors;
console.log(first, second, third); // red green blue

// Skip elements
const [, , last] = colors;
console.log(last); // blue

// Default values
const [a, b, c, d = 'yellow'] = colors;
console.log(d); // yellow

// Rest operator (collect remaining)
const [primary, ...secondary] = colors;
console.log(primary);   // red
console.log(secondary); // ['green', 'blue']

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2,1

// Nested destructuring
const nested = [1, [2, 3], 4];
const [one, [two, three], four] = nested;
console.log(one, two, three, four); // 1 2 3 4

// Function returning array
function getCoordinates() {
  return [10, 20];
}
const [xCoord, yCoord] = getCoordinates();
console.log(xCoord, yCoord); // 10 20`,
        lineByLine: [
          "Line 4: const [first, second, third] = colors - Destructures array into variables",
          "Line 8: const [, , last] = colors - Skips first two elements, gets third",
          "Line 12: const [a, b, c, d = 'yellow'] = colors - Default value if element missing",
          "Line 16: const [primary, ...secondary] = colors - Rest collects remaining elements",
          "Line 21: [x, y] = [y, x] - Swapping variables using destructuring",
          "Line 25: const [one, [two, three], four] = nested - Nested array destructuring",
          "Line 30: const [xCoord, yCoord] = getCoordinates() - Destructuring function return"
        ],
        simpleMeaning: "Array destructuring unpacks array values into variables in one line. Great for swapping and function returns.",
        output: "red green blue\nblue\nyellow\nred\n['green', 'blue']\n2 1\n1 2 3 4\n10 20",
        note: "Destructuring makes working with arrays cleaner, especially for function return values."
      },
      {
        name: "25. Object Destructuring",
        description: "Extract object properties into variables with matching names. Can rename, set defaults, nest.",
        code: `const user = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
  address: { city: 'NYC', zip: '10001' }
};

// Basic destructuring
const { name, age } = user;
console.log(name, age); // John 25

// Renaming variables
const { name: userName, email: userEmail } = user;
console.log(userName, userEmail); // John john@example.com

// Default values
const { role = 'user' } = user;
console.log(role); // user

// Rest operator
const { name: n, ...rest } = user;
console.log(rest); // { age: 25, email: 'john@example.com', address: {...} }

// Nested destructuring
const { address: { city, zip } } = user;
console.log(city, zip); // NYC 10001

// Function parameter destructuring
function printUser({ name, age, email }) {
  console.log(\`\${name} (\${age}) - \${email}\`);
}
printUser(user); // John (25) - john@example.com

// Multiple returns with destructuring
function getDimensions() {
  return { width: 100, height: 200 };
}
const { width, height } = getDimensions();
console.log(width, height); // 100 200`,
        lineByLine: [
          "Line 2-7: const user = { ... } - Object with various properties",
          "Line 10: const { name, age } = user - Destructures matching property names",
          "Line 14: const { name: userName, email: userEmail } - Renames name to userName, email to userEmail",
          "Line 18: const { role = 'user' } - Provides default value if property missing",
          "Line 22: const { name: n, ...rest } - Rest collects remaining properties",
          "Line 26: const { address: { city, zip } } - Nested destructuring",
          "Line 30: function printUser({ name, age, email }) - Destructures parameter object",
          "Line 37-39: getDimensions() - Returns object, destructured directly"
        ],
        simpleMeaning: "Object destructuring extracts properties into variables. Great for function parameters and multiple returns.",
        output: "John 25\nJohn john@example.com\nuser\n{ age: 25, email: 'john@example.com', address: { city: 'NYC', zip: '10001' } }\nNYC 10001\nJohn (25) - john@example.com\n100 200",
        note: "Object destructuring is great for function parameters with many options."
      },

      // ========== STRINGS & NUMBERS (26-30) ==========
      {
        name: "26. String Methods",
        description: "Common string manipulation methods: length, toUpperCase, toLowerCase, slice, split, replace, includes, trim.",
        code: `const str = 'Hello, World!';

// Length
console.log(str.length); // 13

// Case conversion
console.log(str.toUpperCase()); // HELLO, WORLD!
console.log(str.toLowerCase()); // hello, world!

// Extracting parts
console.log(str.slice(0, 5));      // Hello
console.log(str.substring(7, 12));   // World
console.log(str.slice(-6));          // World! (from end)

// Splitting into array
const words = str.split(' ');
console.log(words); // ['Hello,', 'World!']

// Replacing
console.log(str.replace('World', 'JavaScript')); // Hello, JavaScript!
console.log(str.replaceAll('l', 'L'));          // HeLLo, WorLd!

// Searching
console.log(str.indexOf('World'));     // 7
console.log(str.includes('Hello'));    // true
console.log(str.startsWith('Hello'));  // true
console.log(str.endsWith('!'));        // true

// Trimming whitespace
const padded = '  text  ';
console.log(padded.trim());      // 'text'
console.log(padded.trimStart()); // 'text  '
console.log(padded.trimEnd());   // '  text'

// Character access
console.log(str.charAt(0));  // H
console.log(str[0]);          // H

// Repeat
console.log('abc'.repeat(3)); // abcabcabc

// Template literal with method
const name = 'John';
console.log(\`Hello \${name.toUpperCase()}\`); // Hello JOHN`,
        lineByLine: [
          "Line 4: str.length - Returns number of characters in string",
          "Line 7: str.toUpperCase() - Converts entire string to uppercase",
          "Line 8: str.toLowerCase() - Converts entire string to lowercase",
          "Line 11: str.slice(0, 5) - Extracts from index 0 to 5 (excluding 5)",
          "Line 12: str.substring(7, 12) - Extracts from index 7 to 12",
          "Line 13: str.slice(-6) - Negative index counts from end",
          "Line 16: str.split(' ') - Splits string into array by space delimiter",
          "Line 19: str.replace('World', 'JavaScript') - Replaces first occurrence",
          "Line 20: str.replaceAll('l', 'L') - Replaces all occurrences",
          "Line 23: str.indexOf('World') - Returns index of first occurrence (or -1)",
          "Line 24: str.includes('Hello') - Returns true if substring exists",
          "Line 25: str.startsWith('Hello') - Checks if starts with substring",
          "Line 26: str.endsWith('!') - Checks if ends with substring",
          "Line 29-31: trim(), trimStart(), trimEnd() - Removes whitespace",
          "Line 34-35: charAt(0) and str[0] - Access character by index",
          "Line 38: 'abc'.repeat(3) - Repeats string 3 times"
        ],
        simpleMeaning: "String methods let you measure, change case, extract parts, search, replace, and clean up strings.",
        output: "13\nHELLO, WORLD!\nhello, world!\nHello\nWorld\nWorld!\n['Hello,', 'World!']\nHello, JavaScript!\nHeLLo, WorLd!\n7\ntrue\ntrue\ntrue\ntext\ntext  \n  text\nH\nH\nabcabcabc\nHello JOHN",
        note: "Strings are immutable - methods return new strings, don't modify original."
      },
      {
        name: "27. Number Methods & Math Object",
        description: "Working with numbers: parseInt, parseFloat, toFixed, Math methods for calculations.",
        code: `// Parsing numbers from strings
console.log(parseInt('123px'));    // 123
console.log(parseFloat('12.34em')); // 12.34
console.log(Number('456'));          // 456
console.log(+'789');                 // 789 (unary plus)

// Checking if number is valid
console.log(isNaN('abc'));    // true
console.log(Number.isNaN(NaN)); // true
console.log(Number.isFinite(10)); // true

// Formatting
const num = 123.456;
console.log(num.toFixed(2));      // 123.46 (rounds to 2 decimals)
console.log(num.toPrecision(4));   // 123.5 (4 significant digits)

// Math object - constants
console.log(Math.PI);               // 3.141592653589793
console.log(Math.E);                // 2.718281828459045

// Math - rounding
console.log(Math.round(4.6));      // 5 (rounds to nearest)
console.log(Math.ceil(4.2));       // 5 (rounds up)
console.log(Math.floor(4.9));      // 4 (rounds down)
console.log(Math.trunc(4.9));      // 4 (removes decimal)

// Math - absolute value
console.log(Math.abs(-5));         // 5

// Math - min, max
console.log(Math.max(1, 5, 3, 9, 2)); // 9
console.log(Math.min(1, 5, 3, 9, 2)); // 1

// Math - power and root
console.log(Math.pow(2, 3));       // 8 (2³)
console.log(2 ** 3);                // 8 (exponentiation operator)
console.log(Math.sqrt(16));        // 4 (square root)
console.log(Math.cbrt(27));        // 3 (cube root)

// Math - random numbers
console.log(Math.random());        // random between 0 (inclusive) and 1 (exclusive)
console.log(Math.floor(Math.random() * 10)); // random integer 0-9
console.log(Math.floor(Math.random() * 10) + 1); // random 1-10

// Safe integers
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.isSafeInteger(10)); // true`,
        lineByLine: [
          "Line 2: parseInt('123px') - Parses integer, stops at first non-digit",
          "Line 3: parseFloat('12.34em') - Parses decimal number",
          "Line 4: Number('456') - Converts string to number",
          "Line 5: +'789' - Unary plus converts to number",
          "Line 8: isNaN('abc') - Checks if value is NaN (coerces)",
          "Line 9: Number.isNaN(NaN) - Strict NaN check (no coercion)",
          "Line 10: Number.isFinite(10) - Checks if finite number",
          "Line 14: num.toFixed(2) - Rounds to 2 decimal places",
          "Line 15: num.toPrecision(4) - Formats to 4 significant digits",
          "Line 18-19: Math.PI, Math.E - Mathematical constants",
          "Line 22-25: Math.round/ceil/floor/trunc - Different rounding methods",
          "Line 28: Math.abs(-5) - Absolute value (distance from zero)",
          "Line 31-32: Math.max/min - Largest/smallest of arguments",
          "Line 35-37: Math.pow, **, Math.sqrt - Power and root operations",
          "Line 41-42: Math.random() - Random number between 0 and 1",
          "Line 45-46: MAX_SAFE_INTEGER - Largest safe integer in JavaScript"
        ],
        simpleMeaning: "Number methods parse strings to numbers. Math object provides mathematical operations and constants.",
        output: "123\n12.34\n456\n789\ntrue\ntrue\ntrue\n123.46\n123.5\n3.141592653589793\n2.718281828459045\n5\n5\n4\n4\n5\n9\n1\n8\n8\n4\n3\n0.xxx\nrandom number\nrandom 1-10\n9007199254740991\n-9007199254740991\ntrue",
        note: "Use Number.isNaN() instead of global isNaN() which coerces values."
      },
      {
        name: "28. Date Object",
        description: "Working with dates and times: creating dates, getting/setting components, formatting, calculations.",
        code: `// Creating dates
const now = new Date();                    // Current date/time
const specific = new Date(2024, 0, 15);    // Jan 15, 2024 (month 0-indexed)
const fromString = new Date('2024-01-15'); // From ISO string
const fromTimestamp = new Date(1705276800000); // From milliseconds

console.log(now); // Current date/time

// Getting components
console.log(now.getFullYear());   // 2024 (4-digit year)
console.log(now.getMonth());      // 0-11 (0 = January)
console.log(now.getDate());       // 1-31 (day of month)
console.log(now.getDay());        // 0-6 (0 = Sunday)
console.log(now.getHours());      // 0-23
console.log(now.getMinutes());    // 0-59
console.log(now.getSeconds());    // 0-59
console.log(now.getMilliseconds()); // 0-999

// UTC versions
console.log(now.getUTCFullYear()); // UTC year

// Setting components
const date = new Date();
date.setFullYear(2025);
date.setMonth(5); // June
date.setDate(15);
console.log(date); // June 15, 2025

// Timestamps (milliseconds since Jan 1, 1970)
console.log(now.getTime());           // Milliseconds since epoch
console.log(Date.now());               // Current timestamp (static)

// Formatting
console.log(now.toString());           // Full date string
console.log(now.toDateString());      // Date portion only
console.log(now.toISOString());        // ISO format (for APIs)
console.log(now.toLocaleDateString()); // Local date format
console.log(now.toLocaleTimeString()); // Local time format

// Date calculations
const start = new Date('2024-01-01');
const end = new Date('2024-12-31');
const diffMs = end - start;               // Difference in milliseconds
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(diffDays); // ~365 days

// Comparing dates
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-12-31');
console.log(date1 < date2); // true

// Adding days
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
console.log(addDays(new Date(), 7)); // Date + 7 days`,
        lineByLine: [
          "Line 2: new Date() - Creates date object for current moment",
          "Line 3: new Date(2024, 0, 15) - Month is 0-indexed (0=January)",
          "Line 4: new Date('2024-01-15') - Parses ISO date string",
          "Line 5: new Date(1705276800000) - Date from milliseconds since epoch",
          "Line 9: now.getFullYear() - Returns 4-digit year",
          "Line 10: now.getMonth() - Returns month (0-11)",
          "Line 11: now.getDate() - Returns day of month (1-31)",
          "Line 12: now.getDay() - Returns day of week (0-6, 0=Sunday)",
          "Line 13-15: getHours, getMinutes, getSeconds - Time components",
          "Line 21-23: setFullYear, setMonth, setDate - Modify date components",
          "Line 27-28: getTime(), Date.now() - Milliseconds since epoch",
          "Line 31-34: Various formatting methods - toString, toISOString, etc.",
          "Line 37-40: Date calculation - Subtracting dates gives milliseconds",
          "Line 43-44: Date comparison - Uses timestamps internally",
          "Line 47-51: addDays function - Adding/subtracting days using setDate"
        ],
        simpleMeaning: "Date object handles dates and times. Can create, modify, compare, and calculate differences between dates.",
        output: "Current date/time\n2024\n0\n15\n3\n14\n30\n0\n0\n2024\nJune 15, 2025\n1705276800000\n1705276800000\nFull string\nDate string\nISO string\nLocal date\nLocal time\n365\ntrue\nDate + 7 days",
        note: "Month is zero-indexed (0 = January). Be careful when working with dates from user input."
      },
      {
        name: "29. JSON (JavaScript Object Notation)",
        description: "Lightweight data format for storing and transporting data. JSON.stringify() converts object to string, JSON.parse() converts string back to object.",
        code: `// Object to JSON string
const user = {
  name: 'John',
  age: 25,
  isAdmin: false,
  hobbies: ['reading', 'coding'],
  address: { city: 'NYC', zip: '10001' }
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
// {"name":"John","age":25,"isAdmin":false,"hobbies":["reading","coding"],"address":{"city":"NYC","zip":"10001"}}

// JSON string to object
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // John
console.log(parsedUser.hobbies[0]); // reading

// Pretty print (with indentation)
const pretty = JSON.stringify(user, null, 2);
console.log(pretty);
/* {
  "name": "John",
  "age": 25,
  "isAdmin": false,
  "hobbies": ["reading", "coding"],
  "address": { "city": "NYC", "zip": "10001" }
} */

// Using replacer function (filter/transform)
const filtered = JSON.stringify(user, (key, value) => {
  if (key === 'password') return undefined; // exclude
  if (typeof value === 'number') return value * 2; // transform
  return value;
}, 2);

// Using reviver in parse
const dateString = '{"date":"2024-01-15T00:00:00.000Z"}';
const withDate = JSON.parse(dateString, (key, value) => {
  if (key === 'date') return new Date(value);
  return value;
});
console.log(withDate.date.getFullYear()); // 2024

// What JSON can't handle (functions, undefined, symbols are omitted)
const complex = {
  fn: function() { return 42; },
  undef: undefined,
  sym: Symbol('id'),
  date: new Date()
};
console.log(JSON.stringify(complex));
// { "date": "2024-01-15T00:00:00.000Z" } (functions and undefined omitted, date becomes string)

// Deep clone using JSON (limitations: no functions, no circular references)
const original = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(original));
clone.b.c = 99;
console.log(original.b.c); // 2 (unchanged - deep copy)`,
        lineByLine: [
          "Line 2-7: const user = { ... } - JavaScript object",
          "Line 10: JSON.stringify(user) - Converts object to JSON string",
          "Line 15: JSON.parse(jsonString) - Converts JSON string back to object",
          "Line 19: JSON.stringify(user, null, 2) - Pretty print with 2-space indentation",
          "Line 25-29: Replacer function - Filters/transforms values during stringification",
          "Line 32-35: Reviver function - Transforms values during parsing (restores Date objects)",
          "Line 38-42: Limitations - Functions, undefined, symbols are omitted",
          "Line 45-48: Deep clone - JSON methods can deep clone simple objects"
        ],
        simpleMeaning: "JSON.stringify converts object to string for storage/transfer. JSON.parse converts string back to object.",
        output: "{\"name\":\"John\",\"age\":25,\"isAdmin\":false,\"hobbies\":[\"reading\",\"coding\"],\"address\":{\"city\":\"NYC\",\"zip\":\"10001\"}}\nJohn\nreading\nPretty printed JSON\n2024\n{ \"date\": \"2024-01-15T00:00:00.000Z\" }\n2",
        note: "JSON doesn't support functions, undefined, or circular references. Use for simple data only."
      },
      {
        name: "30. Error Handling (try/catch/finally)",
        description: "Handle runtime errors gracefully. try contains code that might throw, catch handles errors, finally always executes.",
        code: `// Basic try/catch
try {
  let result = 10 / 0;
  console.log(result); // Infinity
  
  // Throw custom error
  if (result === Infinity) {
    throw new Error('Division by zero not allowed');
  }
} catch (error) {
  console.log('Caught:', error.message);
}

// Accessing error properties
try {
  JSON.parse('invalid json');
} catch (error) {
  console.log(error.name);    // SyntaxError
  console.log(error.message); // Unexpected token i in JSON at position 0
  console.log(error.stack);   // Stack trace
}

// finally (always executes)
function processData(data) {
  let connection;
  try {
    connection = openConnection();
    if (!data) throw new Error('No data');
    return process(connection, data);
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  } finally {
    if (connection) closeConnection(connection);
    console.log('Cleanup complete');
  }
}

// Throwing custom error
function validateAge(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  if (age < 18) {
    throw new Error('Must be 18 or older');
  }
  return true;
}

try {
  validateAge(-5);
} catch (error) {
  console.log(error.message); // Age cannot be negative
}

// Creating custom error types
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

try {
  throw new ValidationError('Invalid email', 'email');
} catch (error) {
  console.log(error.name, error.field); // ValidationError email
}

// Rethrowing errors
try {
  try {
    throw new Error('Original error');
  } catch (error) {
    console.log('Inner caught:', error.message);
    throw error; // Re-throw
  }
} catch (error) {
  console.log('Outer caught:', error.message);
}

// Promise error handling
Promise.resolve()
  .then(() => { throw new Error('Promise error'); })
  .catch(error => console.log('Promise caught:', error.message));

// Async/await error handling
async function fetchData() {
  try {
    const response = await fetch('https://invalid.url');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch failed:', error.message);
    return null;
 }
}`,
        lineByLine: [
          "Line 2: try { - Start of try block (code that might throw)",
          "Line 8: throw new Error('Division by zero not allowed') - Throws custom error",
          "Line 10: catch (error) { - Catches any error in try block",
          "Line 11: error.message - Access error message",
          "Line 16-17: error.name, error.stack - Standard error properties",
          "Line 21-29: finally block - Always executes, even after return",
          "Line 24: closeConnection(connection) - Cleanup resources",
          "Line 33-37: validateAge - Function with multiple error checks",
          "Line 43-48: class ValidationError - Custom error type extending Error",
          "Line 55-61: Rethrowing errors - Catch, log, then throw again",
          "Line 64-66: Promise error handling - catch method",
          "Line 69-73: Async/await error handling - try/catch with async"
        ],
        simpleMeaning: "try/catch handles errors without crashing. finally always runs. throw creates custom errors.",
        output: "Caught: Division by zero not allowed\nSyntaxError\nUnexpected token i in JSON at position 0\n[stack trace]\nCleanup complete\nAge cannot be negative\nValidationError email\nInner caught: Original error\nOuter caught: Original error\nPromise caught: Promise error\nFetch failed: Failed to fetch",
        note: "Always use finally to clean up resources (close files, close connections, clear timeouts)."
      }
    ]
  },
  advanced: {
    title: "🚀 JavaScript Advanced - Expert Level",
    topics: [
      // ========== CLOSURES & SCOPE (1-5) ==========
      {
        name: "1. Closures",
        description: "Function that remembers its lexical scope even when executed outside that scope. Useful for data privacy and factory functions.",
        code: `// Basic closure
function outer(x) {
  let y = 10;
  return function inner(z) {
    return x + y + z;
  };
}
const add5 = outer(5);
console.log(add5(3)); // 5 + 10 + 3 = 18

// Practical: Counter with private variable
function createCounter() {
  let count = 0;
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getCount() { return count; }
  };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());   // 2

// Practical: Private variables
function createPerson(name) {
  let _name = name;
  return {
    getName() { return _name; },
    setName(newName) { _name = newName; }
  };
}
const person = createPerson('John');
console.log(person.getName()); // John
person.setName('Jane');
console.log(person.getName()); // Jane

// Closure with loop (classic problem and solution)
for(var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log('var:', i); // 3,3,3 (all same!)
  }, 100);
}

for(let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log('let:', i); // 0,1,2 (block-scoped!)
  }, 100);
}

// Fix using closure (pre-let)
for(var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log('closure:', j); // 0,1,2
    }, 100);
  })(i);
}

// Memoization using closure
function memoize(fn) {
  const cache = {};
  return function(arg) {
    if (cache[arg] !== undefined) {
      console.log('Cache hit:', arg);
      return cache[arg];
    }
    console.log('Computing:', arg);
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}
const square = memoize(x => x * x);
console.log(square(5)); // Computing: 5, 25
console.log(square(5)); // Cache hit: 5, 25`,
        lineByLine: [
          "Line 2-6: function outer(x) { ... } - Outer function with parameter",
          "Line 3: let y = 10 - Local variable in outer",
          "Line 4: return function inner(z) { - Returns inner function (closure)",
          "Line 5: return x + y + z - inner has access to x and y (closure)",
          "Line 8: const add5 = outer(5) - add5 remembers x=5",
          "Line 9: add5(3) - Still has access to y=10 (closure)",
          "Line 14-22: createCounter - Uses closure to hide count variable",
          "Line 16-18: Returns object with methods that access private count",
          "Line 23: counter.increment() - Updates private count via closure",
          "Line 31-36: createPerson - Private variable _name only accessible via methods",
          "Line 41-44: Loop closure problem - var has function scope, all share same i",
          "Line 46-48: let solves it because it has block scope",
          "Line 51-55: IIFE closure solution - Creates new scope for each iteration",
          "Line 59-71: memoize - Caches results using closure, returns same value for same argument"
        ],
        simpleMeaning: "Closure = function + its surrounding state. Inner functions remember outer variables even after outer finishes.",
        output: "18\n1\n2\n2\nJohn\nJane\n3\n3\n3\n0\n1\n2\n0\n1\n2\nComputing: 5\n25\nCache hit: 5\n25",
        note: "Closures are created every time a function is defined. They capture variables by reference, not value."
      },
      {
        name: "2. IIFE (Immediately Invoked Function Expression)",
        description: "Function that runs as soon as it's defined. Creates private scope and avoids global pollution.",
        code: `// Basic IIFE
(function() {
  const privateVar = 'I am private';
  console.log(privateVar);
})(); // I am private
// console.log(privateVar); // ReferenceError

// IIFE with parameters
(function(name) {
  console.log(\`Hello, \${name}!\`);
})('John'); // Hello, John!

// Arrow function IIFE
(() => {
  console.log('Arrow IIFE');
})();

// IIFE returning value
const result = (function(a, b) {
  return a + b;
})(5, 3);
console.log(result); // 8

// IIFE for module pattern (pre-ES6)
const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count
  };
})();
console.log(counter.increment()); // 1
console.log(counter.value());      // 1

// IIFE with async/await
(async function() {
  const data = await fetch('/api/data');
  console.log(data);
})();

// IIFE for captured variables in loops (pre-let)
for(var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100);
  })(i);
}
// Output: 0,1,2

// IIFE for initialization
const app = (function() {
  const config = { apiUrl: '/api', timeout: 5000 };
  let initialized = false;
  
  function init() {
    if (!initialized) {
      console.log('Initializing app...');
      initialized = true;
    }
  }
  
  return { init, config };
})();
app.init(); // Initializing app...
console.log(app.config.apiUrl); // /api

// IIFE with conditional (not common but possible)
const value = (() => {
  if (Math.random() > 0.5) {
    return 'Heads';
  }
  return 'Tails';
})();
console.log(value); // 'Heads' or 'Tails'`,
        lineByLine: [
          "Line 2: (function() { ... })() - Wrapped function with immediate call",
          "Line 3: const privateVar - Variable scoped to IIFE (not global)",
          "Line 6: }); - Closing parenthesis calls the function immediately",
          "Line 9: IIFE with parameter - Passes argument to function",
          "Line 15: Arrow function IIFE - Same but with arrow syntax",
          "Line 20: IIFE returning value - Function's return value assigned to variable",
          "Line 25-31: Module pattern - Creates private state with public methods",
          "Line 26: let count = 0 - Private variable (not accessible outside)",
          "Line 27-29: Returns object with methods that access private count",
          "Line 35: Async IIFE - Allows using await at top level",
          "Line 39-42: Loop closure fix - Creates new scope for each iteration",
          "Line 45-55: Initialization IIFE - Runs setup code once, returns API"
        ],
        simpleMeaning: "IIFE runs immediately when defined, creating a private scope to avoid polluting global namespace.",
        output: "I am private\nHello, John!\nArrow IIFE\n8\n1\n1\n0\n1\n2\nInitializing app...\n/api\nHeads/Tails",
        note: "IIFEs were used before ES6 modules for creating private scope. Now use block scope with let/const."
      },
      {
        name: "3. Lexical Scoping & Scope Chain",
        description: "Inner functions have access to variables of outer functions. Scope chain is resolved at definition time (lexical), not call time.",
        code: `let global = 'global';

function outer() {
  let outerVar = 'outer';
  
  function middle() {
    let middleVar = 'middle';
    
    function inner() {
      let innerVar = 'inner';
      console.log(innerVar, middleVar, outerVar, global);
    }
    inner();
  }
  middle();
}
outer(); // inner middle outer global

// Scope chain demonstration (variable shadowing)
let x = 10;
function level1() {
  let x = 20;
  function level2() {
    let x = 30;
    console.log('level2 x:', x); // 30 (own scope)
  }
  level2();
  console.log('level1 x:', x); // 20 (outer scope)
}
level1();
console.log('global x:', x); // 10 (global)

// Dynamic vs Lexical scope
let name = 'Global';
function sayName() { console.log(name); }
function callSayName() {
  let name = 'Local';
  sayName(); // Uses lexical scope (Global, not Local)
}
callSayName(); // Global

// Scope chain with multiple levels
const a = 1;
function first() {
  const b = 2;
  function second() {
    const c = 3;
    function third() {
      const d = 4;
      console.log(a, b, c, d); // 1 2 3 4
    }
    third();
  }
  second();
}
first();

// Block scope with let/const
if (true) {
  let blockLet = 'I am block-scoped';
  const blockConst = 'Also block-scoped';
  var functionScoped = 'I leak out!';
  console.log(blockLet); // Works
}
console.log(functionScoped); // Works (var leaked)
// console.log(blockLet); // Error! not accessible

// Temporal Dead Zone (TDZ)
// console.log(tdzVar); // ReferenceError (TDZ)
let tdzVar = 'declared';
console.log(tdzVar); // Works

// Scope with try/catch
try {
  throw new Error('error');
} catch (error) {
  console.log(error.message); // error (scoped to catch block)
}
// console.log(error); // ReferenceError: error not defined here`,
        lineByLine: [
          "Line 1: let global = 'global' - Global scope variable",
          "Line 3-15: Nested functions - Each has access to its own and outer scopes",
          "Line 5: let outerVar - Function scope variable",
          "Line 7: let middleVar - Middle function scope",
          "Line 10: let innerVar - Inner function scope",
          "Line 11: inner accesses innerVar, middleVar, outerVar, global - Scope chain",
          "Line 21-29: Variable shadowing - Inner variables override outer ones",
          "Line 22: let x = 20 - Shadows global x=10 inside level1",
          "Line 24: let x = 30 - Shadows level1 x inside level2",
          "Line 33-38: Lexical vs Dynamic scope - Function uses where DEFINED, not where CALLED",
          "Line 34: function sayName() { console.log(name) } - Uses name from definition scope",
          "Line 35: let name = 'Local' - Local variable (NOT used by sayName)",
          "Line 41-48: Multiple scope levels - Chain up to global",
          "Line 52-56: Block scope with let/const - Not accessible outside {}",
          "Line 54: var functionScoped - var ignores block scope, available outside",
          "Line 61: Temporal Dead Zone - let/const not accessible before declaration"
        ],
        simpleMeaning: "Scope determines where variables are visible. Inner functions can access outer variables (lexical scoping).",
        output: "inner middle outer global\nlevel2 x: 30\nlevel1 x: 20\nglobal x: 10\nGlobal\n1 2 3 4\nI am block-scoped\nI leak out!\nerror\ndeclared",
        note: "JavaScript uses lexical (static) scoping, not dynamic scoping. Scope is determined by where functions are defined, not called."
      },
      {
        name: "4. Higher-Order Functions",
        description: "Functions that take other functions as arguments or return functions. Core functional programming concept.",
        code: `// Function as argument (callback)
function map(arr, transform) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    result.push(transform(arr[i]));
  }
  return result;
}
const doubled = map([1, 2, 3], x => x * 2);
console.log(doubled); // [2,4,6]

// Function returning function
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Built-in higher-order functions
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(n => n % 2 === 0);
const squared = numbers.map(n => n ** 2);
const sum = numbers.reduce((a, b) => a + b, 0);
console.log(even, squared, sum); // [2,4] [1,4,9,16,25] 15

// Function composition
const compose = (f, g) => x => f(g(x));
const add1 = x => x + 1;
const multiply2 = x => x * 2;
const add1ThenMultiply2 = compose(multiply2, add1);
console.log(add1ThenMultiply2(5)); // (5+1)*2 = 12

// Pipe (reverse composition)
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const process = pipe(
  x => x * 2,
  x => x + 3,
  x => x ** 2
);
console.log(process(5)); // ((5*2)+3)^2 = 169

// Partial application with bind
function multiply(a, b, c) {
  return a * b * c;
}
const multiplyBy2 = multiply.bind(null, 2);
console.log(multiplyBy2(3, 4)); // 2*3*4 = 24

// Curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...more) => curried(...args, ...more);
  };
}
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24

// Filter with custom predicate
function filter(arr, predicate) {
  const result = [];
  for(let item of arr) {
    if (predicate(item)) result.push(item);
  }
  return result;
}
const adults = filter([12, 18, 21, 15], age => age >= 18);
console.log(adults); // [18, 21]

// Reduce implementation
function reduce(arr, reducer, initial) {
  let accumulator = initial;
  for(let item of arr) {
    accumulator = reducer(accumulator, item);
  }
  return accumulator;
}
const total = reduce([1, 2, 3, 4], (sum, num) => sum + num, 0);
console.log(total); // 10`,
        lineByLine: [
          "Line 2-8: map function - Takes function as argument (callback)",
          "Line 3: transform(arr[i]) - Calls the passed function on each element",
          "Line 10-15: multiplyBy - Returns a function (closure)",
          "Line 11: return function(number) { - Creates and returns new function",
          "Line 17-18: double and triple - Specialized functions from generic one",
          "Line 22-24: filter, map, reduce - Built-in higher-order functions",
          "Line 27-29: compose - Combines two functions (f ∘ g)",
          "Line 30: x => f(g(x)) - Returns new function that applies g then f",
          "Line 34-37: pipe - Composes functions left to right",
          "Line 43-45: Partial application with bind - Fixes first argument",
          "Line 48-54: curry - Transforms multi-argument function into sequence of single-arg functions"
        ],
        simpleMeaning: "Higher-order functions work with other functions: take them as arguments or return them.",
        output: "[2,4,6]\n10\n15\n[2,4] [1,4,9,16,25] 15\n12\n169\n24\n24\n24\n[18,21]\n10",
        note: "Higher-order functions enable functional programming patterns like composition, currying, and callbacks."
      },
      {
        name: "5. Currying",
        description: "Transforming function with multiple arguments into sequence of functions each taking single argument.",
        code: `// Regular function
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6

// Manual currying
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curryAdd(1)(2)(3)); // 6

// Using arrow functions
const curryAddArrow = a => b => c => a + b + c;
console.log(curryAddArrow(1)(2)(3)); // 6

// Generic curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...more) => curried(...args, ...more);
  };
}
const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6

// Practical: Logger with prefix
const log = prefix => message => console.log(\`[\${prefix}] \${message}\`);
const info = log('INFO');
const error = log('ERROR');
const debug = log('DEBUG');
info('Application started');   // [INFO] Application started
error('Something failed');     // [ERROR] Something failed
debug('Debugging info');       // [DEBUG] Debugging info

// Practical: API request builder
const apiRequest = method => url => body => {
  console.log(\`Sending \${method} request to \${url}\`);
  if (body) console.log('With body:', body);
  return fetch(url, { method, body: JSON.stringify(body) });
};
const get = apiRequest('GET');
const post = apiRequest('POST');
const put = apiRequest('PUT');
const getUser = get('/api/users/1');
const createUser = post('/api/users');
// getUser = GET request to /api/users/1
// createUser = POST request to /api/users

// Practical: Discount calculator
const applyDiscount = discount => price => price - (price * discount);
const tenPercentOff = applyDiscount(0.1);
const twentyPercentOff = applyDiscount(0.2);
const fiftyPercentOff = applyDiscount(0.5);
console.log(tenPercentOff(100));   // 90
console.log(twentyPercentOff(100)); // 80
console.log(fiftyPercentOff(100));  // 50

// Curry with placeholder (advanced)
function curryPlaceholder(fn) {
  return function curried(...args) {
    const complete = args.length >= fn.length && !args.slice(0, fn.length).includes(curryPlaceholder._);
    if (complete) return fn(...args);
    return (...more) => {
      const merged = args.map(arg => arg === curryPlaceholder._ && more.length ? more.shift() : arg)
                         .concat(more);
      return curried(...merged);
    };
  };
}
curryPlaceholder._ = Symbol('_');
const greet = (greeting, name, punctuation) => \`\${greeting}, \${name}\${punctuation}\`;
const curriedGreet = curryPlaceholder(greet);
const sayHello = curriedGreet('Hello', curryPlaceholder._, '!');
console.log(sayHello('John')); // Hello, John!`,
        lineByLine: [
          "Line 2-4: Regular function - Takes 3 arguments",
          "Line 8-14: Manual currying - Each function takes one argument",
          "Line 9: function(b) { - Returns function waiting for b",
          "Line 10: function(c) { - Returns function waiting for c",
          "Line 17: a => b => c => a + b + c - Arrow function curry",
          "Line 20-27: Generic curry - Works with any function",
          "Line 21: function curried(...args) { - Accumulates arguments",
          "Line 22: if (args.length >= fn.length) - When enough arguments, call fn",
          "Line 25: return (...more) => curried(...args, ...more) - Otherwise return function waiting for more",
          "Line 30-32: Logger example - Creates specialized loggers",
          "Line 31: const info = log('INFO') - INFO prefix fixed in closure",
          "Line 36-40: API request builder - Creates specialized request functions",
          "Line 41: const get = apiRequest('GET') - GET method fixed",
          "Line 42: const post = apiRequest('POST') - POST method fixed",
          "Line 46-48: Discount calculator - Creates discount functions",
          "Line 49-51: tenPercentOff, twentyPercentOff, fiftyPercentOff - Specialized discount functions"
        ],
        simpleMeaning: "Currying transforms a function that takes multiple arguments into a chain of functions each taking one argument.",
        output: "6\n6\n6\n6\n6\n6\n[INFO] Application started\n[ERROR] Something failed\n[DEBUG] Debugging info\n90\n80\n50\nHello, John!",
        note: "Currying enables partial application, creating specialized functions from generic ones."
      }
    ]
  }
};