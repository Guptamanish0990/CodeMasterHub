// /data/typescript/learning.js

export const learning = {
  basic: {
    title: "📘 TypeScript Basics - Complete Beginner's Guide",
    topics: [
      {
        name: "1. Type Annotations - Primitives",
        description: "TypeScript allows you to explicitly declare the type of variables, function parameters, and return values. Primitive types include string, number, boolean, null, undefined, symbol, and bigint.",
        code: `// Basic primitive type annotations
let username: string = 'John Doe';
let userAge: number = 25;
let isActive: boolean = true;
let notAssigned: undefined = undefined;
let emptyValue: null = null;

// Type inference (TypeScript guesses the type)
let inferredString = 'Hello'; // TypeScript knows this is a string
let inferredNumber = 42; // TypeScript knows this is a number

// Union types (can be multiple types)
let userId: string | number = 'abc123';
userId = 12345; // Also valid

// Any type (avoid when possible - disables type checking)
let dynamicValue: any = 'anything';
dynamicValue = 42;
dynamicValue = true;`,
        lineByLine: [
          "Line 1: let username: string = 'John Doe' - Declares a string variable with explicit type annotation",
          "Line 2: let userAge: number = 25 - Number type for integers and decimals",
          "Line 3: let isActive: boolean = true - Boolean type for true/false values",
          "Line 4-5: undefined and null - Special primitive types for empty values",
          "Line 8-9: Type inference - TypeScript automatically detects types from values",
          "Line 12-14: Union types - Variable can hold multiple specified types using | operator",
          "Line 17-19: Any type - Disables type checking (use sparingly)"
        ],
        simpleMeaning: "Type annotations tell TypeScript what kind of data a variable can hold, helping catch errors before running the code.",
        output: "Variables are type-checked at compile time, preventing invalid assignments",
        note: "Use type inference when possible, explicit annotations when needed. Avoid 'any' type as it defeats TypeScript's purpose."
      },
      {
        name: "2. Type Annotations - Arrays & Tuples",
        description: "Arrays can be typed in two ways: type[] or Array<type>. Tuples are fixed-length arrays where each position has a specific type.",
        code: `// Arrays - two syntaxes
let numbers1: number[] = [1, 2, 3, 4, 5];
let numbers2: Array<number> = [6, 7, 8, 9, 10];
let mixedArray: (string | number)[] = ['hello', 42, 'world', 100];

// Readonly arrays (cannot be modified)
let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); // Error!

// Tuples (fixed length with specific types)
let person: [string, number, boolean] = ['John', 25, true];
let rgb: [number, number, number] = [255, 128, 0];

// Tuple with optional elements
let optionalTuple: [string, number?] = ['hello']; // Second element optional

// Tuple with rest elements
let stringNumberBooleans: [string, ...number[]] = ['hello', 1, 2, 3];`,
        lineByLine: [
          "Line 2: numbers1: number[] - Array of numbers using bracket syntax",
          "Line 3: numbers2: Array<number> - Array of numbers using generic syntax",
          "Line 4: (string | number)[] - Array that can contain both strings and numbers",
          "Line 7: readonly number[] - Array that cannot be modified after creation",
          "Line 11: [string, number, boolean] - Tuple with exactly 3 elements of specific types",
          "Line 12: [number, number, number] - RGB color tuple with 3 numbers",
          "Line 15: [string, number?] - Tuple with optional second element",
          "Line 18: [string, ...number[]] - Tuple with string first, then any number of numbers"
        ],
        simpleMeaning: "Arrays hold lists of same-type values. Tuples hold fixed-length lists where each position has a specific type.",
        output: "Arrays can hold multiple values; tuples ensure exact position-specific types",
        note: "Use tuples when you need a fixed structure with specific types at each index."
      },
      {
        name: "3. Enums",
        description: "Enums allow you to define a set of named constants, making code more readable and self-documenting.",
        code: `// Numeric enum (auto-incrementing values)
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}
let move: Direction = Direction.Up;

// Numeric enum with custom values
enum Status {
  Pending = 1,
  Approved = 2,
  Rejected = 3
}

// String enum (more readable for debugging)
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}
let myColor: Color = Color.Green;

// Heterogeneous enum (mix of strings and numbers)
enum Mixed {
  No = 0,
  Yes = 'YES'
}

// Const enum (more efficient - inlined at compile time)
const enum Weekday {
  Monday,
  Tuesday,
  Wednesday
}
let day: Weekday = Weekday.Monday;`,
        lineByLine: [
          "Line 2-8: enum Direction - Creates numeric enum with auto-incrementing values starting at 0",
          "Line 11-14: enum Status - Numeric enum with custom starting values",
          "Line 17-21: enum Color - String enum where each value is a string literal",
          "Line 24-27: enum Mixed - Heterogeneous enum mixing strings and numbers",
          "Line 30-34: const enum - More efficient as values are inlined at compile time"
        ],
        simpleMeaning: "Enums create a set of named constants, making code more readable than using raw numbers or strings.",
        output: "Direction.Up → 0, Color.Green → 'GREEN'",
        note: "Use string enums for better debugging. Const enums are more efficient but can't be used with dynamic values."
      },
      {
        name: "4. Interfaces - Basic",
        description: "Interfaces define the shape of objects, specifying required properties and their types.",
        code: `// Basic interface
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: 'John',
  age: 25,
  email: 'john@example.com'
};

// Optional properties (using ?)
interface Product {
  name: string;
  price: number;
  description?: string; // Optional
}

// Readonly properties (cannot be changed after creation)
interface Config {
  readonly apiUrl: string;
  timeout: number;
}

const config: Config = { apiUrl: 'https://api.com', timeout: 5000 };
// config.apiUrl = 'new-url'; // Error! Cannot modify readonly property

// Index signatures (for dynamic property names)
interface Dictionary {
  [key: string]: string;
}
const colors: Dictionary = { red: '#ff0000', blue: '#0000ff' };`,
        lineByLine: [
          "Line 2-6: interface User - Defines object structure with three required properties",
          "Line 8-12: user object - Must match exact shape defined in User interface",
          "Line 15-19: Product interface - description is optional (can be omitted)",
          "Line 22-25: Config interface - apiUrl is readonly, cannot be modified after creation",
          "Line 30: Index signature - Allows any number of string properties with string values"
        ],
        simpleMeaning: "Interfaces define what properties an object should have, like a blueprint or contract.",
        output: "Object must match interface shape; TypeScript errors if properties are missing or wrong type",
        note: "Use optional properties (?) when a property might not exist. Use readonly to prevent modifications."
      },
      {
        name: "5. Interfaces - Advanced Features",
        description: "Interfaces can extend other interfaces, be used for function types, and support excess property checks.",
        code: `// Extending interfaces (inheritance)
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

const myDog: Dog = {
  name: 'Buddy',
  age: 3,
  breed: 'Golden Retriever',
  bark() { console.log('Woof!'); }
};

// Interface for function types
interface MathFunction {
  (a: number, b: number): number;
}

const add: MathFunction = (a, b) => a + b;
const multiply: MathFunction = (a, b) => a * b;

// Interface for classes (implementation contracts)
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
}

// Excess property checks
interface Point {
  x: number;
  y: number;
}

// This would cause error (extra property 'z')
// const point: Point = { x: 10, y: 20, z: 30 };

// Workaround - type assertion
const point2: Point = { x: 10, y: 20, z: 30 } as Point;`,
        lineByLine: [
          "Line 2-5: Animal interface - Base interface with name and age",
          "Line 7-10: Dog extends Animal - Inherits all properties from Animal plus adds breed and bark method",
          "Line 12-18: myDog object - Must include properties from both Animal and Dog",
          "Line 21-23: MathFunction interface - Describes a function signature (two numbers, returns number)",
          "Line 25-26: add and multiply - Both functions match the MathFunction signature",
          "Line 29-32: ClockInterface - Describes what a class must implement",
          "Line 34-39: Clock class - Implements ClockInterface, must have both properties defined",
          "Line 45-46: Excess property check - TypeScript prevents extra properties not defined in interface"
        ],
        simpleMeaning: "Interfaces can inherit from other interfaces, describe functions, and enforce class structures.",
        output: "Dog interface includes all Animal properties plus its own; MathFunction ensures correct function signature",
        note: "Use interface extension for code reuse. Implement interfaces in classes to enforce contracts."
      },
      {
        name: "6. Types vs Interfaces",
        description: "Type aliases can do everything interfaces can, plus more (unions, primitives, tuples). Interfaces are generally preferred for object shapes.",
        code: `// Type alias for primitive
type UserId = string | number;

// Type alias for union
type Status = 'pending' | 'approved' | 'rejected';

// Type alias for tuple
type RGB = [number, number, number];

// Type alias for object (similar to interface)
type Person = {
  name: string;
  age: number;
  email?: string;
};

// Interface (similar but different)
interface PersonInterface {
  name: string;
  age: number;
  email?: string;
}

// Key differences:
// 1. Interfaces can be merged (declaration merging)
interface Merged {
  name: string;
}
interface Merged {
  age: number; // Merged interface now has both name and age
}

// Types cannot be merged (error if redeclared)
// type MergedType = { name: string; };
// type MergedType = { age: number; }; // Error!

// 2. Interfaces can extend types and vice versa
type Address = {
  street: string;
  city: string;
};

interface UserWithAddress extends Address {
  name: string;
}

// 3. Types can use unions, interfaces cannot
type Result = { success: true; data: any } | { success: false; error: string };`,
        lineByLine: [
          "Line 2-3: type UserId - Type alias for union of string and number",
          "Line 5-7: type Status - Union of specific string literals",
          "Line 9-11: type RGB - Type alias for a tuple",
          "Line 13-17: type Person - Type alias for object shape (similar to interface)",
          "Line 19-23: interface PersonInterface - Interface with same shape",
          "Line 26-32: Declaration merging - Interfaces can be merged, types cannot",
          "Line 35-39: type Address - Can be extended by interface",
          "Line 41-43: interface extends type - Interfaces can extend types",
          "Line 46-48: Union type - Types can define unions, interfaces cannot"
        ],
        simpleMeaning: "Types and interfaces are similar but interfaces are better for objects and can be extended; types are better for unions and primitives.",
        output: "Use interface for object shapes, type for unions, tuples, and complex type operations",
        note: "Prefer interface for object shapes that might be extended. Use type for unions, tuples, and primitives."
      },
      {
        name: "7. Functions with Types",
        description: "TypeScript allows you to type function parameters and return values, ensuring type safety.",
        code: `// Basic function with typed parameters and return
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Void return (function doesn't return anything)
function logMessage(message: string): void {
  console.log(message);
}

// Optional parameters (must be last)
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return \`\${firstName} \${lastName}\`;
  }
  return firstName;
}

// Default parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Arrow functions with types
const divide = (a: number, b: number): number => a / b;

// Function overloads (multiple call signatures)
function process(input: string): string;
function process(input: number): number;
function process(input: string | number): string | number {
  if (typeof input === 'string') {
    return input.toUpperCase();
  }
  return input * 2;
}

console.log(process('hello')); // 'HELLO'
console.log(process(5)); // 10`,
        lineByLine: [
          "Line 2: function greet(name: string): string - Parameter type and return type annotation",
          "Line 7: function logMessage(message: string): void - Void return means nothing is returned",
          "Line 11-16: lastName?: string - Optional parameter (must appear after required parameters)",
          "Line 19-21: b: number = 1 - Default parameter value when argument not provided",
          "Line 24-26: ...numbers: number[] - Rest parameter collects multiple arguments into array",
          "Line 29: Arrow function with explicit return type",
          "Line 32-38: Function overloads - Multiple ways to call the same function with different types",
          "Line 33: string overload - When called with string, returns string",
          "Line 34: number overload - When called with number, returns number",
          "Line 35-38: Implementation - Must handle all overload cases"
        ],
        simpleMeaning: "Functions can specify what types they accept and what they return, preventing incorrect usage.",
        output: "greet('John') → 'Hello, John!', sum(1,2,3) → 6",
        note: "Always type function parameters and return values. Use optional parameters sparingly."
      },
      {
        name: "8. Classes in TypeScript",
        description: "TypeScript adds type annotations, access modifiers (public, private, protected), and other OOP features to JavaScript classes.",
        code: `// Basic class with properties and constructor
class Person {
  name: string;
  private age: number;
  protected email: string;
  
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  // Public method (default)
  greet(): string {
    return \`Hello, I'm \${this.name}\`;
  }
  
  // Private method (only accessible within class)
  private getBirthYear(): number {
    return new Date().getFullYear() - this.age;
  }
  
  // Protected method (accessible in subclasses)
  protected getEmail(): string {
    return this.email;
  }
}

// Inheritance
class Student extends Person {
  studentId: number;
  
  constructor(name: string, age: number, email: string, studentId: number) {
    super(name, age, email); // Call parent constructor
    this.studentId = studentId;
  }
  
  // Override method
  greet(): string {
    return \`Hello, I'm student \${this.name}\`;
  }
  
  // Access protected member
  getStudentInfo(): string {
    return \`\${this.name} (\${this.getEmail()})\`;
  }
}

// Abstract class (cannot be instantiated directly)
abstract class Shape {
  abstract getArea(): number; // Abstract method (must be implemented)
  
  getDescription(): string {
    return 'This is a shape';
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Parameter properties (shorthand)
class Product {
  constructor(
    public name: string,
    private price: number,
    readonly id: number
  ) {}
  
  getPrice(): number {
    return this.price;
  }
}

const product = new Product('Laptop', 999, 1);
console.log(product.name); // 'Laptop'
// product.id = 2; // Error! readonly property`,
        lineByLine: [
          "Line 2-5: class Person - Class with typed properties",
          "Line 4: public name - Public property (accessible anywhere, default)",
          "Line 5: private age - Private property (only accessible within class)",
          "Line 6: protected email - Protected property (accessible in class and subclasses)",
          "Line 8-12: constructor - Initializes class properties with type annotations",
          "Line 15-17: greet() - Public method with return type",
          "Line 20-22: private getBirthYear() - Private method, only usable inside class",
          "Line 25-27: protected getEmail() - Protected method, accessible in subclasses",
          "Line 30-40: Student extends Person - Inheritance with super() call",
          "Line 43-45: greet() override - Overrides parent method",
          "Line 48-50: getStudentInfo() - Accessing protected parent method",
          "Line 53-60: abstract class - Cannot be instantiated directly",
          "Line 55: abstract getArea() - Abstract method requiring implementation",
          "Line 62-69: Circle extends Shape - Implements abstract method",
          "Line 72-79: Parameter properties - Shorthand for declaring and initializing properties"
        ],
        simpleMeaning: "TypeScript classes add type safety and OOP features like access modifiers and abstract classes.",
        output: "Person instance has public name, private age; Circle implements required getArea method",
        note: "Use private for internal implementation, protected for inheritance, public for API. Prefer parameter properties for cleaner code."
      },
      {
        name: "9. Type Assertions & Type Guards",
        description: "Type assertions tell TypeScript to treat a value as a specific type. Type guards narrow down types conditionally.",
        code: `// Type assertions (as syntax)
let someValue: unknown = 'Hello World';
let strLength: number = (someValue as string).length;

// Alternative syntax (angle brackets) - not in JSX
let strLength2: number = (<string>someValue).length;

// Type guards - typeof
function processValue(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return value * 2;
  }
}

// Type guards - instanceof
class Dog {
  bark() { console.log('Woof!'); }
}
class Cat {
  meow() { console.log('Meow!'); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Custom type guard (user-defined)
interface Car {
  type: 'car';
  drive(): void;
}

interface Bike {
  type: 'bike';
  ride(): void;
}

function isCar(vehicle: Car | Bike): vehicle is Car {
  return vehicle.type === 'car';
}

function useVehicle(vehicle: Car | Bike) {
  if (isCar(vehicle)) {
    vehicle.drive(); // TypeScript knows this is Car
  } else {
    vehicle.ride(); // TypeScript knows this is Bike
  }
}

// Non-null assertion operator (!)
function getElement(id: string): HTMLElement | null {
  return document.getElementById(id);
}

const element = getElement('myId')!; // Asserts value is not null/undefined
element.innerHTML = 'Hello'; // No error

// Double assertion (rarely needed)
const x = 'hello' as any as number; // Force conversion`,
        lineByLine: [
          "Line 2-3: as string - Type assertion telling TypeScript to treat unknown as string",
          "Line 6: <string>someValue.length - Alternative syntax (not for JSX)",
          "Line 9-14: typeof guard - Differentiates between string and number types",
          "Line 17-28: instanceof guard - Checks if object is instance of specific class",
          "Line 31-43: Custom type guard - Function with 'value is Type' return type",
          "Line 33: type: 'car' - Discriminated union property",
          "Line 39: vehicle is Car - Return type predicate for type guard",
          "Line 45-50: Non-null assertion (!) - Asserts value is not null or undefined",
          "Line 53: as any as number - Double assertion (avoid when possible)"
        ],
        simpleMeaning: "Type assertions override TypeScript's inference; type guards narrow types conditionally for safe operations.",
        output: "typeof guard handles string/number differently; custom guard identifies Car vs Bike",
        note: "Prefer type guards over assertions. Non-null assertion (!) should be used carefully."
      },
      {
        name: "10. Generics - Basic",
        description: "Generics allow creating reusable components that work with multiple types while maintaining type safety.",
        code: `// Basic generic function
function identity<T>(arg: T): T {
  return arg;
}

// Usage with explicit type
let output1 = identity<string>('hello');
// Usage with type inference
let output2 = identity(42); // TypeScript infers T as number

// Generic with multiple types
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const person = merge({ name: 'John' }, { age: 25 });
// person has both name and age properties

// Generic interface
interface Box<T> {
  value: T;
  getValue(): T;
}

const stringBox: Box<string> = {
  value: 'hello',
  getValue() { return this.value; }
};

// Generic class
class Queue<T> {
  private data: T[] = [];
  
  push(item: T): void {
    this.data.push(item);
  }
  
  pop(): T | undefined {
    return this.data.shift();
  }
}

const numberQueue = new Queue<number>();
numberQueue.push(1);
numberQueue.push(2);
console.log(numberQueue.pop()); // 1

// Generic constraint
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): T {
  console.log(item.length);
  return item;
}

logLength('hello'); // Works (string has length)
logLength([1, 2, 3]); // Works (array has length)
// logLength(123); // Error! number doesn't have length property

// Default generic type
interface ApiResponse<T = any> {
  data: T;
  status: number;
}

const response: ApiResponse = { data: null, status: 200 }; // T defaults to any`,
        lineByLine: [
          "Line 2-4: identity<T> - Generic function that returns same type as input",
          "Line 7-8: Explicit type usage - Specifying T as string",
          "Line 9-10: Type inference - TypeScript automatically determines T as number",
          "Line 13-16: merge<T, U> - Function with two generic types",
          "Line 18-19: Return type T & U - Intersection type combining both objects",
          "Line 22-26: Generic interface Box<T> - Interface that works with any type",
          "Line 28-32: stringBox - Box interface used with string type",
          "Line 35-44: Queue<T> - Generic class for type-safe queue",
          "Line 47-51: Generic constraint extends HasLength - Requires item to have length property",
          "Line 54-57: logLength usage - Works with string and array (both have length)",
          "Line 60-63: Default generic type - T = any if type not specified"
        ],
        simpleMeaning: "Generics let you create functions and classes that work with any type while keeping type safety.",
        output: "identity<string>('hello') → 'hello', Queue<number> only accepts numbers",
        note: "Use generics for reusable components. Add constraints (extends) when you need specific properties."
      }
    ]
  },
  advanced: {
    title: "🚀 Advanced TypeScript",
    topics: [
      {
        name: "1. Generics - Advanced Patterns",
        description: "Advanced generic patterns including keyof, mapped types, and conditional types within generics.",
        code: `// keyof operator - gets keys of a type
interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; // 'id' | 'name' | 'email'

// Generic with keyof constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: 'John', email: 'john@example.com' };
const userName = getProperty(user, 'name'); // string
// const invalid = getProperty(user, 'age'); // Error! 'age' is not a key

// Mapped types
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

type OptionalUser = {
  [K in keyof User]?: User[K];
};

// Generic mapped type
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Conditional types
type IsString<T> = T extends string ? true : false;
type A = IsString<'hello'>; // true
type B = IsString<42>; // false

// Extract and Exclude (utility types)
type ExtractString<T> = T extends string ? T : never;
type StringsOnly = ExtractString<'a' | 1 | 'b' | 2>; // 'a' | 'b'

// Infer keyword (extract return type)
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getData() {
  return { id: 1, name: 'John' };
}
type DataType = ReturnType<typeof getData>; // { id: number; name: string; }`,
        lineByLine: [
          "Line 2-6: keyof User - Gets union of all property names in User interface",
          "Line 9-11: getProperty<T, K extends keyof T> - Generic ensuring key exists on object",
          "Line 13: T[K] - Indexed access type (type of the property value)",
          "Line 18-20: Mapped type ReadonlyUser - Makes all properties readonly",
          "Line 22-24: Mapped type OptionalUser - Makes all properties optional",
          "Line 27-29: Generic Readonly<T> - Reusable readonly mapped type",
          "Line 31-33: Generic Partial<T> - Makes all properties optional",
          "Line 36-38: Conditional type IsString<T> - Returns true if T extends string",
          "Line 42-43: ExtractString<T> - Extracts only string types from union",
          "Line 46-47: ReturnType<T> - Extracts return type using infer keyword",
          "Line 49-52: Using ReturnType - Gets return type of getData function"
        ],
        simpleMeaning: "Advanced generics enable type transformations, property access constraints, and conditional type logic.",
        output: "getProperty only allows valid keys; Readonly makes all properties immutable",
        note: "keyof and mapped types are powerful for creating type-safe utilities. Use infer for extracting types."
      },
      {
        name: "2. Utility Types",
        description: "TypeScript provides built-in utility types for common type transformations.",
        code: `interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  tags: string[];
}

// Partial - makes all properties optional
type PartialTodo = Partial<Todo>;
const partialTodo: PartialTodo = { title: 'Learn TS' };

// Required - makes all properties required
type RequiredTodo = Required<PartialTodo>;
// Must have all Todo properties now

// Readonly - makes all properties read-only
type ReadonlyTodo = Readonly<Todo>;
const readonlyTodo: ReadonlyTodo = { id: 1, title: 'Read', completed: false, createdAt: new Date(), tags: [] };
// readonlyTodo.id = 2; // Error!

// Pick - select specific properties
type TodoPreview = Pick<Todo, 'id' | 'title'>;
const preview: TodoPreview = { id: 1, title: 'My Todo' };

// Omit - exclude specific properties
type TodoWithoutDates = Omit<Todo, 'createdAt'>;
const noDateTodo: TodoWithoutDates = { id: 1, title: 'Todo', completed: false, tags: [] };

// Record - create object type with specific key and value types
type UserRole = 'admin' | 'user' | 'guest';
type RolePermissions = Record<UserRole, string[]>;
const permissions: RolePermissions = {
  admin: ['read', 'write', 'delete'],
  user: ['read', 'write'],
  guest: ['read']
};

// Exclude - exclude types from union
type Numbers = 1 | 2 | 3 | 4 | 5;
type OddNumbers = Exclude<Numbers, 2 | 4>; // 1 | 3 | 5

// Extract - extract types from union
type EvenNumbers = Extract<Numbers, 2 | 4 | 6>; // 2 | 4

// NonNullable - remove null and undefined from type
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>; // string

// Parameters - get tuple of function parameter types
function greet(name: string, age: number): string {
  return \`\${name} is \${age}\`;
}
type GreetParams = Parameters<typeof greet>; // [string, number]

// ReturnType - get return type of function
type GreetReturn = ReturnType<typeof greet>; // string

// Awaited - unwrap Promise type
type AsyncData = Promise<string>;
type Data = Awaited<AsyncData>; // string`,
        lineByLine: [
          "Line 2-8: Todo interface - Base interface for examples",
          "Line 11-13: Partial<T> - Makes all properties optional",
          "Line 16: Required<T> - Makes all properties required",
          "Line 19-21: Readonly<T> - Makes all properties immutable",
          "Line 24-26: Pick<T, K> - Selects only specified properties",
          "Line 29-31: Omit<T, K> - Removes specified properties",
          "Line 34-38: Record<K, T> - Creates object with specific key and value types",
          "Line 41-42: Exclude<T, U> - Removes types from union",
          "Line 45-46: Extract<T, U> - Extracts types from union",
          "Line 49-50: NonNullable<T> - Removes null and undefined",
          "Line 53-56: Parameters<T> - Gets tuple of function parameter types",
          "Line 59: ReturnType<T> - Gets function return type",
          "Line 62-63: Awaited<T> - Unwraps Promise type"
        ],
        simpleMeaning: "Utility types are built-in tools that transform existing types in common ways.",
        output: "Partial makes all fields optional; Pick selects specific fields; Record creates dictionaries",
        note: "Learn these utility types - they're used frequently in real TypeScript code."
      },
      {
        name: "3. Discriminated Unions",
        description: "Discriminated unions combine union types with a common discriminant property for type-safe handling.",
        code: `// Discriminated union with 'type' property
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Triangle {
  kind: 'triangle';
  base: number;
  height: number;
}

type Shape = Circle | Square | Triangle;

// Type-safe area calculation
function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    case 'triangle':
      return (shape.base * shape.height) / 2;
    default:
      // Exhaustiveness checking
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// Example usage
const circle: Circle = { kind: 'circle', radius: 5 };
const square: Square = { kind: 'square', sideLength: 4 };
const triangle: Triangle = { kind: 'triangle', base: 3, height: 6 };

console.log(getArea(circle)); // 78.54
console.log(getArea(square)); // 16
console.log(getArea(triangle)); // 9

// Adding a new shape (Pentagon) will cause error in getArea
// because exhaustiveness checking catches unhandled case

// Discriminated union with different discriminant property
interface SuccessResponse {
  status: 'success';
  data: any;
}

interface ErrorResponse {
  status: 'error';
  error: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
  if (response.status === 'success') {
    console.log('Data:', response.data); // TypeScript knows data exists
  } else {
    console.log('Error:', response.error); // TypeScript knows error exists
  }
}`,
        lineByLine: [
          "Line 2-4: Circle interface - Has discriminant property 'kind' with value 'circle'",
          "Line 6-8: Square interface - Discriminant 'kind' with value 'square'",
          "Line 10-13: Triangle interface - Discriminant 'kind' with value 'triangle'",
          "Line 15: Shape type - Union of all shape types",
          "Line 18-32: getArea function - Uses switch statement on discriminant property",
          "Line 20-21: Circle case - TypeScript knows shape has radius property",
          "Line 22-23: Square case - TypeScript knows shape has sideLength",
          "Line 24-25: Triangle case - TypeScript knows shape has base and height",
          "Line 27-29: Exhaustiveness checking - Using 'never' type to ensure all cases handled",
          "Line 44-47: SuccessResponse - Uses 'status' as discriminant",
          "Line 49-52: ErrorResponse - Uses 'status' as discriminant",
          "Line 55-62: handleResponse - Different properties based on status value"
        ],
        simpleMeaning: "Discriminated unions use a common property to differentiate between union members, enabling type-safe handling.",
        output: "getArea correctly calculates area for each shape type; adding new shape breaks compilation",
        note: "Always include exhaustiveness checking (never type) to catch unhandled cases when adding new union members."
      },
      {
        name: "4. Conditional Types & Infer",
        description: "Conditional types select types based on conditions. Infer keyword extracts types within conditions.",
        code: `// Basic conditional type
type IsArray<T> = T extends any[] ? true : false;
type A = IsArray<string[]>; // true
type B = IsArray<number>; // false

// Conditional type with inference
type ElementType<T> = T extends (infer U)[] ? U : never;
type C = ElementType<string[]>; // string
type D = ElementType<number[]>; // number

// Extract function return type
type ReturnTypeAdvanced<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
  return { id: 1, name: 'John' };
}
type UserType = ReturnTypeAdvanced<typeof getUser>; // { id: number; name: string; }

// Extract promise resolved type
type AwaitedType<T> = T extends Promise<infer U> ? U : never;
type AsyncData = AwaitedType<Promise<string>>; // string

// Deep partial (recursive conditional type)
type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

interface ComplexObject {
  user: {
    name: string;
    address: {
      street: string;
      city: string;
    };
  };
  settings: {
    theme: string;
  };
}

type PartialComplex = DeepPartial<ComplexObject>;
// All properties become optional recursively

// Conditional type with multiple branches
type TypeName<T> = 
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends null ? 'null' :
  T extends Function ? 'function' :
  'object';

type StringType = TypeName<'hello'>; // 'string'
type NumberType = TypeName<42>; // 'number'
type ObjectType = TypeName<{}>; // 'object'

// Distributive conditional types
type ToArray<T> = T extends any ? T[] : never;
type StringOrNumber = ToArray<string | number>; // string[] | number[]
// Note: This distributes over the union, producing string[] | number[]`,
        lineByLine: [
          "Line 2-4: IsArray<T> - Returns true if T is an array",
          "Line 7-9: ElementType<T> - Extracts element type from array using infer",
          "Line 12-14: ReturnTypeAdvanced<T> - Extracts return type of function",
          "Line 16-18: AwaitedType<T> - Unwraps Promise type",
          "Line 21-29: DeepPartial<T> - Recursive conditional type for nested objects",
          "Line 32-37: ComplexObject - Nested object for demonstration",
          "Line 40-42: DeepPartial usage - Makes all properties optional at every level",
          "Line 45-52: TypeName<T> - Multiple conditional branches",
          "Line 55-57: ToArray<T> - Distributive conditional type over union"
        ],
        simpleMeaning: "Conditional types choose types based on conditions. Infer extracts types from within other types.",
        output: "ElementType extracts array element type; ReturnType gets function return type",
        note: "Conditional types are powerful for creating type-safe utilities. Use infer to capture types."
      },
      {
        name: "5. Template Literal Types",
        description: "Template literal types create new string types by combining strings and unions.",
        code: `// Basic template literal type
type Greeting = \`Hello, \${string}\`;
let greet: Greeting = 'Hello, World'; // Valid
// let invalid: Greeting = 'Hi there'; // Error

// Template literal with unions
type Color = 'red' | 'green' | 'blue';
type Size = 'small' | 'medium' | 'large';
type ColorSize = \`\${Color}-\${Size}\`;
// Result: 'red-small' | 'red-medium' | 'red-large' | 'green-small' | ...

// Infer patterns with template literals
type ExtractId<T extends string> = T extends \`user-\${infer Id}\` ? Id : never;
type UserId = ExtractId<'user-123'>; // '123'
type NotUserId = ExtractId<'post-456'>; // never

// Build URL patterns
type ApiRoute<Resource extends string> = \`/api/\${Resource}\`;
type UserRoute = ApiRoute<'users'>; // '/api/users'
type ProductRoute = ApiRoute<'products'>; // '/api/products'

// Event handler names
type EventType = 'click' | 'hover' | 'focus';
type EventHandlerName = \`on\${Capitalize<EventType>}\`;
// Result: 'onClick' | 'onHover' | 'onFocus'

// Uppercase, Lowercase, Capitalize helpers
type Lower = Lowercase<'HELLO'>; // 'hello'
type Upper = Uppercase<'world'>; // 'WORLD'
type Capital = Capitalize<'hello'>; // 'Hello'
type Uncapital = Uncapitalize<'World'>; // 'world'

// Combine with generics
type CreateGetter<T extends string> = \`get\${Capitalize<T>}\`;
type GetterName = CreateGetter<'user'>; // 'getUser'

// HTTP method combinations
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type APIEndpoint<Resource extends string> = \`\${HTTPMethod} /api/\${Resource}\`;
type Endpoints = APIEndpoint<'users'>;
// 'GET /api/users' | 'POST /api/users' | 'PUT /api/users' | 'DELETE /api/users'

// Advanced: Parse string patterns
type ParseRoute<T extends string> = 
  T extends \`/api/\${infer Resource}/\${infer Id}\` ? { resource: Resource; id: Id } :
  T extends \`/api/\${infer Resource}\` ? { resource: Resource } :
  never;

type Route1 = ParseRoute<'/api/users/123'>; // { resource: 'users', id: '123' }
type Route2 = ParseRoute<'/api/products'>; // { resource: 'products' }`,
        lineByLine: [
          "Line 2-3: Greeting type - Template literal with string placeholder",
          "Line 7-11: Color and Size unions - Combine with template literals",
          "Line 12: ColorSize - All combinations of Color and Size",
          "Line 15-17: ExtractId<T> - Extracts ID from pattern using infer",
          "Line 20-22: ApiRoute<Resource> - Creates API URL pattern",
          "Line 25-27: EventHandlerName - Uses Capitalize helper with union",
          "Line 30-33: String manipulation helpers - Uppercase, Lowercase, Capitalize",
          "Line 36-38: CreateGetter<T> - Combines generics with template literals",
          "Line 41-44: APIEndpoint with HTTP methods - Creates combinations of methods and routes",
          "Line 47-52: ParseRoute<T> - Advanced pattern parsing with multiple infer clauses"
        ],
        simpleMeaning: "Template literal types create new string types by combining strings, unions, and inferred parts.",
        output: "ColorSize creates all color-size combinations; ParseRoute extracts parts from URL patterns",
        note: "Template literal types are powerful for string validation and transformation utilities."
      },
      {
        name: "6. Decorators",
        description: "Decorators provide a way to add annotations and meta-programming syntax for class declarations and members. They are a stage 2 proposal for JavaScript and available as an experimental feature in TypeScript.",
        code: `// Enable decorators in tsconfig.json:
// {
//   "compilerOptions": {
//     "experimentalDecorators": true,
//     "emitDecoratorMetadata": true
//   }
// }

// 1. Class decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

// 2. Method decorator
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  
  @enumerable(false)
  getName() {
    return this.name;
  }
}

// 3. Property decorator
function format(formatString: string) {
  return function (target: any, propertyKey: string) {
    let value = target[propertyKey];
    
    const getter = function () {
      return \`\${formatString} \${value}\`;
    };
    
    const setter = function (newVal: any) {
      value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}

class User {
  @format("Mr.")
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}

// 4. Parameter decorator
function required(target: any, propertyKey: string, parameterIndex: number) {
  console.log(\`Parameter \${parameterIndex} of \${propertyKey} is required\`);
}

class Example {
  greet(@required name: string) {
    return \`Hello \${name}\`;
  }
}

// 5. Decorator factory with parameters
function log(prefix: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
      console.log(\`\${prefix} Calling \${propertyKey} with args: \${JSON.stringify(args)}\`);
      const result = originalMethod.apply(this, args);
      console.log(\`\${prefix} Result: \${result}\`);
      return result;
    };
    
    return descriptor;
  };
}

class Calculator {
  @log("DEBUG")
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(5, 3); // Logs the call and result`,
        lineByLine: [
          "Line 2-7: tsconfig.json - Enable experimentalDecorators",
          "Line 10-15: Class decorator - Seals the class constructor and prototype",
          "Line 17-22: @sealed - Applies class decorator",
          "Line 25-30: Method decorator - Changes enumerable property of a method",
          "Line 33-38: @enumerable - Applies method decorator",
          "Line 41-57: Property decorator - Formats property value with getter/setter",
          "Line 60-66: @format - Applies property decorator",
          "Line 69-75: Parameter decorator - Logs parameter index",
          "Line 78-92: Decorator factory - Logs method calls with custom prefix",
          "Line 95-99: @log - Applies method decorator factory"
        ],
        simpleMeaning: "Decorators are special declarations that can be attached to classes, methods, properties, or parameters to modify their behavior.",
        output: "Class can be sealed; method can be hidden from enumeration; property can be formatted; method calls can be logged.",
        note: "Decorators are experimental and may change in future ECMAScript versions. They are heavily used in frameworks like Angular and NestJS."
      },
      {
        name: "7. Declaration Merging",
        description: "Declaration merging allows multiple declarations with the same name to be combined into a single definition. This is most powerful for interfaces and namespaces.",
        code: `// ========== INTERFACE MERGING ==========
interface Box {
  height: number;
  width: number;
}

// Second declaration merges with the first
interface Box {
  scale: number;
}

const box: Box = { height: 10, width: 20, scale: 0.5 };

// Interface merging with function overloading
interface Document {
  createElement(tagName: any): Element;
}

interface Document {
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
}

// ========== NAMESPACE MERGING ==========
namespace Validators {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}

namespace Validators {
  export const numberRegexp = /^[0-9]+$/;
  
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

// ========== NAMESPACE WITH CLASS MERGING ==========
class Album {
  label: string;
}

namespace Album {
  export const defaultAlbum = new Album();
}
Album.defaultAlbum.label = "Greatest Hits";

// ========== NAMESPACE WITH FUNCTION MERGING ==========
function buildLabel(name: string): string {
  return buildLabel.prefix + name;
}

namespace buildLabel {
  export const prefix = "Hello, ";
}

console.log(buildLabel("John")); // "Hello, John"

// ========== NAMESPACE WITH ENUM MERGING ==========
enum Color {
  Red = 1,
  Green = 2,
}

namespace Color {
  export function mix(color1: Color, color2: Color): Color {
    return color1 + color2;
  }
}

// Now you can use Color.mix along with enum values

// ========== GLOBAL AUGMENTATION ==========
// Augmenting global types (e.g., adding a property to Window)
interface Window {
  myCustomProperty: string;
}

// Now you can assign: window.myCustomProperty = "value";

// ========== MODULE AUGMENTATION ==========
// Given a module './observable' that exports Observable<T>
// You can augment it:
declare module './observable' {
  interface Observable<T> {
    map<U>(f: (x: T) => U): Observable<U>;
  }
}

// Then import and use the augmented method`,
        lineByLine: [
          "Line 2-6: First Box interface - Defines height and width",
          "Line 9-11: Second Box interface - Adds scale property, merged with first",
          "Line 13: box object - Must include all properties from merged interface",
          "Line 16-20: Function overload merging - Adds more specific overloads",
          "Line 23-37: Namespace merging - Extends Validators namespace with new types",
          "Line 40-45: Class + namespace merging - Adds static property to class",
          "Line 48-55: Function + namespace merging - Adds static property to function",
          "Line 58-67: Enum + namespace merging - Adds static method to enum",
          "Line 70-77: Global augmentation - Adding properties to global interfaces",
          "Line 80-88: Module augmentation - Extending module types externally"
        ],
        simpleMeaning: "Declaration merging lets you combine multiple declarations of the same name into one. This is how TypeScript extends built-in types and libraries.",
        output: "Interfaces automatically merge; namespaces can be spread across files; you can augment existing modules.",
        note: "Declaration merging is mostly used for augmenting third-party libraries or splitting large interfaces across files."
      },
      {
        name: "8. Modules & Namespaces",
        description: "TypeScript modules (ES modules) and namespaces provide different ways to organize code. Modules are preferred for modern applications.",
        code: `// ========== ES MODULES (Recommended) ==========
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14159;

export interface Calculator {
  multiply(a: number, b: number): number;
}

export default class MathUtils {
  static subtract(a: number, b: number): number {
    return a - b;
  }
}

// app.ts - Importing
import MathUtils, { add, PI, Calculator } from './math.js';

class MyCalc implements Calculator {
  multiply(a: number, b: number): number {
    return a * b;
  }
}

console.log(add(2, 3)); // 5
console.log(PI); // 3.14159

// ========== NAMESPACES (Legacy, mainly for global code) ==========
namespace Geometry {
  export interface Point {
    x: number;
    y: number;
  }
  
  export function distance(a: Point, b: Point): number {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  export namespace Utils {
    export function midpoint(p1: Point, p2: Point): Point {
      return {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2
      };
    }
  }
}

// Using namespace
const p1: Geometry.Point = { x: 0, y: 0 };
const p2: Geometry.Point = { x: 3, y: 4 };
const dist = Geometry.distance(p1, p2);
const mid = Geometry.Utils.midpoint(p1, p2);

// ========== AMBIENT MODULES (declare module) ==========
// For third-party libraries without types
declare module 'some-library' {
  export function doSomething(param: string): number;
}

// Then you can import it (even without actual types)
// import { doSomething } from 'some-library';

// ========== PATH MAPPING (tsconfig.json) ==========
// {
//   "compilerOptions": {
//     "baseUrl": ".",
//     "paths": {
//       "@utils/*": ["src/utils/*"],
//       "@models/*": ["src/models/*"]
//     }
//   }
// }

// Then you can import using the alias:
// import { helper } from '@utils/helper';

// ========== RE-EXPORTING ==========
// features/index.ts
export * from './feature1.js';
export { specialFunction } from './feature2.js';

// ========== DYNAMIC IMPORTS ==========
async function loadModule() {
  const module = await import('./heavyModule.js');
  module.heavyFunction();
}`,
        lineByLine: [
          "Line 2-14: ES module exports - Named exports and default export",
          "Line 17-23: ES module imports - Default, named, and namespace imports",
          "Line 26-44: Namespace - Legacy way to organize code, can be nested",
          "Line 47-52: Ambient module declaration - For libraries without type definitions",
          "Line 55-64: Path mapping - Configuring import aliases in tsconfig.json",
          "Line 67-69: Re-exporting - Aggregating exports from multiple files",
          "Line 72-76: Dynamic imports - Lazy loading modules at runtime"
        ],
        simpleMeaning: "Modules are the modern way to organize TypeScript code. Use 'export' and 'import' keywords. Namespaces are older but still useful for global scripts.",
        output: "Code can be split into multiple files; aliases simplify imports; dynamic imports enable code splitting.",
        note: "Use ES modules for all new code. Avoid namespaces unless you are working with legacy global code. Configure path aliases for cleaner imports."
      },
      {
        name: "9. TypeScript with React",
        description: "Using TypeScript with React provides type safety for props, state, hooks, and event handlers.",
        code: `// ========== BASIC FUNCTIONAL COMPONENT ==========
// components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// ========== COMPONENT WITH CHILDREN ==========
interface CardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactElement;
}

const Card: React.FC<CardProps> = ({ title, children, footer }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

// ========== USESTATE WITH TYPES ==========
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  
  // TypeScript infers the type of 'count' as number
  const [count, setCount] = useState(0);
  
  return <div>{user?.name}</div>;
};

// ========== USEEFFECT WITH TYPES ==========
useEffect(() => {
  let isMounted = true;
  
  fetchUser()
    .then(data => {
      if (isMounted) setUser(data);
    })
    .catch(err => setError(err.message));
    
  return () => { isMounted = false };
}, []); // Empty dependency array

// ========== USECALLBACK / USEMEMO ==========
const handleLogin = useCallback((email: string, password: string) => {
  // login logic
}, []);

const memoizedValue = useMemo(() => expensiveCalculation(user), [user]);

// ========== USECONTEXT WITH TYPES ==========
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

// ========== EVENT HANDLERS ==========
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log('clicked');
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // form submission
};

// ========== FORWARDING REFS ==========
interface FancyInputProps {
  placeholder?: string;
}

const FancyInput = React.forwardRef<HTMLInputElement, FancyInputProps>(
  (props, ref) => {
    return <input ref={ref} {...props} />;
  }
);

// ========== CUSTOM HOOK WITH TYPES ==========
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });
  
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage:
const [token, setToken] = useLocalStorage<string>('auth-token', '');

// ========== GENERIC COMPONENT ==========
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}

// Usage:
<List items={[{ id: 1, name: 'John' }]} renderItem={(user) => <li key={user.id}>{user.name}</li>} />`,
        lineByLine: [
          "Line 4-12: ButtonProps interface - Defines props with optional variants",
          "Line 15-25: Button component - React.FC with typed props",
          "Line 28-40: Card with children - React.ReactNode type for children",
          "Line 43-58: useState - Union types and optional types for state",
          "Line 61-70: useEffect - Cleanup function and error handling",
          "Line 73-86: useCallback/useMemo - Preserving function identity",
          "Line 89-114: Context - Creating typed context with custom hook",
          "Line 117-125: Event handlers - React.ChangeEvent, MouseEvent, FormEvent",
          "Line 128-135: forwardRef - Typing refs in React",
          "Line 138-158: Custom hook - Generic useLocalStorage hook",
          "Line 161-171: Generic component - List component that works with any type"
        ],
        simpleMeaning: "TypeScript with React ensures type safety for component props, state, hooks, and event handlers, catching errors early.",
        output: "Fully typed React components with autocompletion and compile-time type checking for props, state, and events.",
        note: "Always type component props. Use React.FC for components with children. For custom hooks, use generics when needed."
      },
      {
        name: "10. Advanced Compiler Configuration",
        description: "Fine-tuning the tsconfig.json file to control type checking, module resolution, output, and strictness.",
        code: `{
  "compilerOptions": {
    // Basic Options
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "outDir": "./dist",
    "rootDir": "./src",
    "removeComments": true,
    "noEmit": false,
    "importHelpers": true,
    "downlevelIteration": true,
    "isolatedModules": true,
    
    // Strict Type-Checking Options
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "useUnknownInCatchVariables": true,
    "alwaysStrict": true,
    
    // Additional Checks
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noPropertyAccessFromIndexSignature": true,
    "exactOptionalPropertyTypes": true,
    
    // Module Resolution
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@utils/*": ["./src/utils/*"]
    },
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    
    // Source Maps
    "sourceMap": true,
    "inlineSourceMap": false,
    "sourceRoot": "/",
    
    // Experimental
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    
    // Advanced
    "skipLibCheck": true,
    "declaration": true,
    "declarationMap": true,
    "composite": true,
    "incremental": true,
    "tsBuildInfoFile": ".tsbuildinfo",
    "preserveConstEnums": false
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"],
  "references": [
    { "path": "../shared" }
  ]
}`,
        lineByLine: [
          "Line 2-13: Basic Options - Target, module, output directories",
          "Line 16-27: Strict Options - Enables full type safety",
          "Line 30-37: Additional Checks - Catch common mistakes",
          "Line 40-50: Module Resolution - Path aliases, interop",
          "Line 53-55: Source Maps - Debugging support",
          "Line 58-59: Experimental Features - Decorators",
          "Line 62-69: Advanced Options - Declaration files, incremental builds",
          "Line 72-74: Project References - Multi-project builds"
        ],
        simpleMeaning: "tsconfig.json controls how TypeScript compiles your code. Adjust strictness, module resolution, output, and more.",
        output: "Fine-tuned compilation settings for production, development, or library publishing.",
        note: "Start with 'strict': true. Use 'paths' for cleaner imports. Enable 'noUncheckedIndexedAccess' for safer array access."
      },
      {
        name: "11. Advanced Type Guards & Assertion Functions",
        description: "User-defined type guards and assertion functions allow you to narrow types in complex ways.",
        code: `// ========== SIMPLE CUSTOM TYPE GUARD ==========
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: string | number) {
  if (isString(value)) {
    // value is string here
    console.log(value.toUpperCase());
  } else {
    // value is number here
    console.log(value.toFixed(2));
  }
}

// ========== TYPE GUARD WITH OBJECT SHAPE ==========
interface Dog {
  bark(): void;
  name: string;
}

interface Cat {
  meow(): void;
  name: string;
}

function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}

function playWithPet(pet: Dog | Cat) {
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}

// ========== ASSERTION FUNCTIONS ==========
function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

function processString(value: unknown) {
  assert(typeof value === 'string', 'Value must be a string');
  // TypeScript now knows 'value' is string
  console.log(value.toLowerCase());
}

// ========== ASSERTION WITH GENERIC ==========
function assertIsNumber(val: unknown): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error(\`Expected number, got \${typeof val}\`);
  }
}

function doubleValue(x: unknown) {
  assertIsNumber(x);
  // x is number here
  return x * 2;
}

// ========== ASSERT EXACT TYPE ==========
class MyError extends Error {
  code: number;
  constructor(msg: string, code: number) {
    super(msg);
    this.code = code;
  }
}

function isMyError(error: Error): error is MyError {
  return error instanceof MyError;
}

function handleError(error: Error) {
  if (isMyError(error)) {
    console.log(\`Custom error code: \${error.code}\`);
  } else {
    console.log(error.message);
  }
}

// ========== TYPE GUARD FOR DISCRIMINATED UNIONS ==========
interface Square {
  kind: 'square';
  size: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Circle;

function isSquare(shape: Shape): shape is Square {
  return shape.kind === 'square';
}

function area(shape: Shape) {
  if (isSquare(shape)) {
    return shape.size * shape.size;
  } else {
    return Math.PI * shape.radius ** 2;
  }
}

// ========== ASSERTION FUNCTION FOR NON-NULL ==========
function assertNonNullish<T>(value: T, message?: string): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error(message || 'Value is null or undefined');
  }
}

let maybeString: string | null = 'hello';
assertNonNullish(maybeString);
// maybeString is now string
console.log(maybeString.length);`,
        lineByLine: [
          "Line 2-5: isString - Type guard using 'value is string' syntax",
          "Line 8-14: processValue - Uses type guard to narrow union",
          "Line 17-27: Dog/Cat interfaces - Discriminated by method presence",
          "Line 29-31: isDog - Type guard checking for bark method",
          "Line 38-41: assert - Simple assertion function",
          "Line 44-48: processString - Assertion narrows type",
          "Line 51-54: assertIsNumber - Generic assertion with type predicate",
          "Line 57-61: doubleValue - Correctly narrows after assertion",
          "Line 64-70: MyError - Custom error class",
          "Line 72-74: isMyError - Type guard for custom error",
          "Line 81-96: Discriminated union guard - Using 'kind' property",
          "Line 99-104: assertNonNullish - Asserts value is not null/undefined"
        ],
        simpleMeaning: "Advanced type guards and assertion functions let you teach TypeScript about your runtime checks, narrowing types more precisely.",
        output: "Custom validation functions that both throw errors and inform TypeScript about the resulting type.",
        note: "Use assertion functions for validation that throws. Use type guards for conditional narrowing. They are invaluable for parsing unknown data."
      }
    ]
  }
};

// Also export as problems for backward compatibility
export const typescript = learning;