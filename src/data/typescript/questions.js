// /data/typescript/questions.js

export const questions = [
  // ========== BASIC TYPES (1-5) ==========
  {
    line: "let name: string = 'John';",
    explanation: "Explicit type annotation for string variable. TypeScript will enforce that only strings can be assigned to this variable.",
    example: "let city: string = 'New York';\nlet greeting: string = 'Hello World';",
    output: "Variable can only hold string values; assignment of number or boolean causes compile error",
    note: "TypeScript infers types when not specified, but explicit annotations improve readability"
  },
  {
    line: "let age: number = 25;",
    explanation: "Number type annotation for integers and floating-point numbers. Supports decimal, hexadecimal, binary, and octal literals.",
    example: "let count: number = 42;\nlet price: number = 19.99;\nlet hex: number = 0xf00d;",
    output: "Variable can only hold numeric values; arithmetic operations are type-safe",
    note: "TypeScript numbers are all floating-point, same as JavaScript"
  },
  {
    line: "let isActive: boolean = true;",
    explanation: "Boolean type annotation for true/false values. Used for flags, conditions, and toggle states.",
    example: "let isLoggedIn: boolean = false;\nlet hasPermission: boolean = true;",
    output: "Variable can only hold true or false; type checking prevents assignment of other values",
    note: "Use boolean for conditions; never use Boolean object type"
  },
  {
    line: "let numbers: number[] = [1, 2, 3];",
    explanation: "Array type annotation using square bracket syntax. All elements must be of the specified type.",
    example: "let names: string[] = ['Alice', 'Bob'];\nlet mixed: (string | number)[] = [1, 'two', 3];",
    output: "Type-safe array where all elements share the same type",
    note: "Alternative syntax: Array<number> for generic array type"
  },
  {
    line: "let tuple: [string, number] = ['John', 25];",
    explanation: "Tuple type defines an array with fixed length and specific types at each position.",
    example: "let person: [string, number] = ['Alice', 30];\nlet rgb: [number, number, number] = [255, 0, 128];",
    output: "Tuple elements have fixed types per index; TypeScript enforces length and type at each position",
    note: "Tuples are useful for returning multiple values from functions"
  },

  // ========== UNION & INTERSECTION (6-10) ==========
  {
    line: "let id: string | number;",
    explanation: "Union type – variable can be either string or number. Use the pipe (|) symbol to combine types.",
    example: "let userId: string | number = 'abc123';\nuserId = 456; // Also valid\n// userId = true; // Error",
    output: "Variable accepts multiple types; type narrowing required before type-specific operations",
    note: "Use typeof or instanceof to narrow union types before using type-specific methods"
  },
  {
    line: "type Status = 'active' | 'inactive' | 'pending';",
    explanation: "Literal type union – creates a type that can only be one of the specified literal values.",
    example: "let userStatus: Status = 'active';\n// userStatus = 'deleted'; // Error: not in union",
    output: "Variable limited to specific string or number literal values",
    note: "Literal types catch typos and provide excellent IDE autocomplete"
  },
  {
    line: "type EmployeePerson = Person & Employee;",
    explanation: "Intersection type – combines multiple types into one, requiring all properties from all types.",
    example: "type FullName = { first: string } & { last: string };\nlet name: FullName = { first: 'John', last: 'Doe' };",
    output: "Object must have all properties from all intersected types",
    note: "Use intersection for composition; use union for alternatives"
  },
  {
    line: "type NullableString = string | null;",
    explanation: "Union type including null – allows variable to be string or null.",
    example: "let text: string | null = 'Hello';\ntext = null; // Valid\n// text = undefined; // Error unless explicitly included",
    output: "Variable can hold null value, requiring null checks before string operations",
    note: "Enable strictNullChecks in tsconfig for better safety"
  },
  {
    line: "type OptionalNumber = number | undefined;",
    explanation: "Union type including undefined – allows variable to be number or undefined.",
    example: "let value: number | undefined = 42;\nvalue = undefined; // Valid",
    output: "Variable may be undefined; optional chaining (?.) or nullish coalescing (??) recommended",
    note: "undefined means variable declared but not assigned a value"
  },

  // ========== FUNCTIONS & TYPES (11-15) ==========
  {
    line: "function add(a: number, b: number): number { return a + b; }",
    explanation: "Function with typed parameters and return type. Parameters and return value are type-checked.",
    example: "function greet(name: string): string { return 'Hello ' + name; }\nfunction log(message: string): void { console.log(message); }",
    output: "TypeScript ensures function is called with correct argument types and return type",
    note: "Return type can be inferred but explicit annotation improves readability"
  },
  {
    line: "function greet(name: string, title?: string): string {",
    explanation: "Optional parameter – marked with ? and can be omitted when calling function.",
    example: "function buildName(first: string, last?: string): string {\n  return last ? first + ' ' + last : first;\n}",
    output: "Optional parameters can be undefined; must come after required parameters",
    note: "Use default parameters instead of optional when possible"
  },
  {
    line: "function sum(...numbers: number[]): number {",
    explanation: "Rest parameter – collects multiple arguments into an array. Must be last parameter.",
    example: "function multiply(factor: number, ...numbers: number[]): number[] {\n  return numbers.map(n => n * factor);\n}",
    output: "Rest parameter allows variable number of arguments, accessible as array",
    note: "Rest parameters replace the arguments object with type-safe array"
  },
  {
    line: "type MathOperation = (a: number, b: number) => number;",
    explanation: "Function type alias – defines the shape of a function including parameter and return types.",
    example: "const add: MathOperation = (a, b) => a + b;\nconst multiply: MathOperation = (a, b) => a * b;",
    output: "Function type ensures callbacks and function expressions match the expected signature",
    note: "Function types are useful for callback parameters and higher-order functions"
  },
  {
    line: "function overload(value: string): string;\nfunction overload(value: number): number[];",
    explanation: "Function overloads – multiple function signatures for different parameter types.",
    example: "function reverse(value: string): string;\nfunction reverse(value: number[]): number[];\nfunction reverse(value: any): any {\n  // Implementation\n}",
    output: "Function behaves differently based on parameter type while maintaining type safety",
    note: "Only one implementation signature; multiple overload signatures precede it"
  },

  // ========== INTERFACES & TYPE ALIASES (16-20) ==========
  {
    line: "interface Person { name: string; age: number; }",
    explanation: "Interface definition – describes the shape of an object with required properties.",
    example: "interface Car { brand: string; year: number; }\nconst myCar: Car = { brand: 'Toyota', year: 2022 };",
    output: "Object must have all required properties with correct types",
    note: "Interfaces can be extended and implemented by classes"
  },
  {
    line: "interface User { readonly id: number; name: string; email?: string; }",
    explanation: "Interface with readonly and optional properties. Readonly prevents reassignment after initialization.",
    example: "const user: User = { id: 1, name: 'John' };\n// user.id = 2; // Error: Cannot assign to readonly property",
    output: "Readonly properties immutable after creation; optional properties may be omitted",
    note: "Use readonly for IDs, timestamps, and configuration values"
  },
  {
    line: "interface Employee extends Person { salary: number; }",
    explanation: "Interface extension – inherits all properties from parent interface and adds new ones.",
    example: "interface Animal { name: string; }\ninterface Dog extends Animal { breed: string; }",
    output: "Extended interface includes parent properties plus its own",
    note: "Interfaces can extend multiple interfaces: interface C extends A, B"
  },
  {
    line: "interface StringArray { [index: number]: string; }",
    explanation: "Index signature – defines type for dynamic property names or array-like access.",
    example: "interface Dictionary { [key: string]: number; }\nconst scores: Dictionary = { alice: 95, bob: 87 };",
    output: "Allows any number of properties with the specified key and value types",
    note: "Index signature types must be string or number; can't mix both"
  },
  {
    line: "type Point = { x: number; y: number; };",
    explanation: "Type alias for object shape – similar to interface but cannot be extended or merged.",
    example: "type ID = string | number;\ntype Callback = (data: string) => void;",
    output: "Type alias creates a new name for any type, including primitives and unions",
    note: "Use interface for objects; use type for unions and complex types"
  },

  // ========== GENERICS (21-25) ==========
  {
    line: "function identity<T>(arg: T): T { return arg; }",
    explanation: "Generic function – works with any type while preserving type information.",
    example: "let result1 = identity<string>('hello');\nlet result2 = identity<number>(42);\nlet result3 = identity('world'); // Type inferred",
    output: "Function returns same type as argument, maintaining type safety",
    note: "Type parameter T can be named anything (T, U, Key, Value)"
  },
  {
    line: "interface Box<T> { value: T; get(): T; }",
    explanation: "Generic interface – defines a structure that works with any type parameter.",
    example: "const stringBox: Box<string> = { value: 'hello', get() { return this.value; } };\nconst numberBox: Box<number> = { value: 42, get() { return this.value; } };",
    output: "Interface adapts to the type specified when used",
    note: "Generic interfaces are reusable across different data types"
  },
  {
    line: "class Stack<T> { private items: T[] = []; push(item: T): void { this.items.push(item); } }",
    explanation: "Generic class – works with any type specified at instantiation.",
    example: "const numberStack = new Stack<number>();\nnumberStack.push(1);\nconst stringStack = new Stack<string>();\nstringStack.push('hello');",
    output: "Class methods and properties use the type parameter consistently",
    note: "Type parameter can be used throughout the class body"
  },
  {
    line: "function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }",
    explanation: "Generic constraint with keyof – ensures key is a valid property of the object.",
    example: "const person = { name: 'John', age: 30 };\nconst name = getProperty(person, 'name'); // string\n// getProperty(person, 'invalid'); // Error",
    output: "Key parameter restricted to actual keys of the object type",
    note: "keyof operator creates a union of all property names of a type"
  },
  {
    line: "function logLength<T extends { length: number }>(item: T): T { console.log(item.length); return item; }",
    explanation: "Generic constraint with extends – restricts T to types that have a length property.",
    example: "logLength('hello'); // OK - string has length\nlogLength([1, 2, 3]); // OK - array has length\n// logLength(123); // Error - number doesn't have length",
    output: "Generic only works with types satisfying the constraint",
    note: "Use constraints to access properties safely on generic types"
  },

  // ========== UTILITY TYPES (26-30) ==========
  {
    line: "type PartialTodo = Partial<Todo>;",
    explanation: "Partial utility type – makes all properties of a type optional.",
    example: "interface Todo { title: string; completed: boolean; }\nfunction updateTodo(todo: Todo, fields: Partial<Todo>) {\n  return { ...todo, ...fields };\n}",
    output: "Allows partial updates where any subset of properties can be provided",
    note: "Great for update operations and patch requests"
  },
  {
    line: "type ReadonlyPerson = Readonly<Person>;",
    explanation: "Readonly utility type – makes all properties of a type readonly.",
    example: "const person: Readonly<{ name: string; age: number }> = { name: 'John', age: 30 };\n// person.age = 31; // Error: Cannot assign to 'age' because it is a read-only property",
    output: "All properties become immutable after initialization",
    note: "Use for configuration objects and constants"
  },
  {
    line: "type UserPreview = Pick<User, 'id' | 'name'>;",
    explanation: "Pick utility type – creates a type by selecting specific properties from another type.",
    example: "interface Product { id: number; name: string; price: number; description: string; }\ntype ProductPreview = Pick<Product, 'id' | 'name' | 'price'>;",
    output: "New type contains only the selected properties",
    note: "Useful for API responses and view models"
  },
  {
    line: "type UserWithoutPassword = Omit<User, 'password'>;",
    explanation: "Omit utility type – creates a type by excluding specific properties from another type.",
    example: "interface User { id: number; name: string; email: string; password: string; }\ntype PublicUser = Omit<User, 'password'>;",
    output: "New type excludes the specified properties",
    note: "Useful for removing sensitive data from types"
  },
  {
    line: "type PageInfo = Record<'home' | 'about' | 'contact', { title: string; url: string }>;",
    explanation: "Record utility type – creates a type with specified keys and value type.",
    example: "const pages: Record<string, string> = { home: '/', about: '/about', contact: '/contact' };\nconst scores: Record<string, number> = { alice: 95, bob: 87 };",
    output: "Ensures all specified keys exist with correct value type",
    note: "Great for dictionaries and mapping objects"
  },

  // ========== ADVANCED TYPES (31-35) ==========
  {
    line: "type IsString<T> = T extends string ? true : false;",
    explanation: "Conditional type – selects one type or another based on a condition.",
    example: "type A = IsString<'hello'>; // true\ntype B = IsString<42>; // false",
    output: "Type resolves to different types based on condition evaluation",
    note: "Conditional types are evaluated at compile time, not runtime"
  },
  {
    line: "type ArrayElement<T> = T extends (infer U)[] ? U : never;",
    explanation: "Conditional type with infer – extracts the element type from an array type.",
    example: "type Element = ArrayElement<string[]>; // string\ntype NumberElement = ArrayElement<number[]>; // number",
    output: "Extracts the inner type from a generic type",
    note: "infer keyword creates temporary type variable within conditional type"
  },
  {
    line: "type ReadonlyProps<T> = { readonly [K in keyof T]: T[K]; };",
    explanation: "Mapped type – iterates over properties of T to create a transformed type.",
    example: "type Nullable<T> = { [K in keyof T]: T[K] | null; };\ntype Optional<T> = { [K in keyof T]?: T[K]; };",
    output: "Each property of original type is transformed according to the mapping",
    note: "Mapped types are the foundation for many utility types"
  },
  {
    line: "type EventName = `on${Capitalize<string>}`;",
    explanation: "Template literal type – creates string literal types by interpolating other types.",
    example: "type Color = 'red' | 'green' | 'blue';\ntype ColorClass = `bg-${Color}`; // 'bg-red' | 'bg-green' | 'bg-blue'",
    output: "Generates all possible string combinations from the interpolated types",
    note: "Great for CSS class names, event handlers, and naming conventions"
  },
  {
    line: "type NonNullable<T> = T extends null | undefined ? never : T;",
    explanation: "NonNullable utility type – removes null and undefined from a union type.",
    example: "type MaybeString = string | null | undefined;\ntype DefinitelyString = NonNullable<MaybeString>; // string",
    output: "Returns type without null and undefined",
    note: "Useful for cleaning up types after validation checks"
  },

  // ========== TYPE GUARDS & NARROWING (36-40) ==========
  {
    line: "if (typeof value === 'string') { value.toUpperCase(); }",
    explanation: "Type guard using typeof – narrows type to string within the conditional block.",
    example: "function process(value: string | number) {\n  if (typeof value === 'string') {\n    return value.toUpperCase(); // value is string here\n  }\n  return value.toFixed(2); // value is number here\n}",
    output: "TypeScript knows the exact type inside each branch",
    note: "typeof works with 'string', 'number', 'boolean', 'symbol', 'bigint'"
  },
  {
    line: "if (value instanceof Date) { value.getTime(); }",
    explanation: "Type guard using instanceof – narrows type to class instance within the block.",
    example: "function processDate(value: Date | string) {\n  if (value instanceof Date) {\n    return value.getTime(); // value is Date here\n  }\n  return new Date(value).getTime(); // value is string here\n}",
    output: "TypeScript knows the instance type after instanceof check",
    note: "instanceof works with any class, not just built-in types"
  },
  {
    line: "function isFish(pet: Fish | Bird): pet is Fish { return (pet as Fish).swim !== undefined; }",
    explanation: "Type predicate – user-defined type guard that tells TypeScript the narrowed type.",
    example: "function isString(value: unknown): value is string {\n  return typeof value === 'string';\n}\nif (isString(data)) { data.length; }",
    output: "TypeScript narrows type based on the predicate function's return",
    note: "Type predicates must use 'value is Type' syntax"
  },
  {
    line: "if ('swim' in animal) { animal.swim(); }",
    explanation: "Type guard using in operator – checks if property exists, narrowing to types with that property.",
    example: "interface Bird { fly(): void; }\ninterface Fish { swim(): void; }\nfunction move(animal: Bird | Fish) {\n  if ('swim' in animal) {\n    animal.swim(); // TypeScript knows it's Fish\n  } else {\n    animal.fly(); // TypeScript knows it's Bird\n  }\n}",
    output: "TypeScript narrows to types that have the checked property",
    note: "in operator works well for discriminated unions without a literal discriminant"
  },
  {
    line: "function assertIsNumber(value: unknown): asserts value is number { if (typeof value !== 'number') throw new Error('Not a number'); }",
    explanation: "Assertion function – tells TypeScript to treat value as the asserted type; throws if condition fails.",
    example: "function assertIsString(value: unknown): asserts value is string {\n  if (typeof value !== 'string') throw new Error('Not a string');\n}\nfunction process(value: unknown) {\n  assertIsString(value);\n  console.log(value.toUpperCase()); // value is string here\n}",
    output: "TypeScript assumes the asserted type after function call without return value",
    note: "Assertion functions don't return a value; they throw on failure"
  }
];

export default questions;