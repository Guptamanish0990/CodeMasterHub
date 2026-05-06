// /data/typescript/problems.js

export const problems = {
  fresher: [
    {
      id: 1,
      title: "Convert a simple JavaScript todo app to TypeScript with interfaces",
      problem: "Take a JavaScript todo application with add, complete, and delete functions and convert it to TypeScript with proper interfaces for Todo items.",
      answer: "Define an interface for Todo with id, text, and completed properties. Use type annotations for all function parameters and return types.",
      example: `// JavaScript version (before)
let todos = [];
function addTodo(text) {
  todos.push({ id: Date.now(), text, completed: false });
}

// TypeScript version (after)
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let todos: Todo[] = [];

function addTodo(text: string): void {
  todos.push({ id: Date.now(), text, completed: false });
}

function toggleTodo(id: number): void {
  todos = todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

function deleteTodo(id: number): void {
  todos = todos.filter(todo => todo.id !== id);
}

function getActiveTodos(): Todo[] {
  return todos.filter(todo => !todo.completed);
}`,
      output: "Type-safe todo list with interface Todo and typed functions",
      note: "Interfaces define the shape of data, catching type errors at compile time"
    },
    {
      id: 2,
      title: "Write a function that returns the sum of two numbers with proper types",
      problem: "Create a function that takes two numbers and returns their sum with proper TypeScript type annotations.",
      answer: "Use : number annotations for parameters and return type. Also demonstrate default parameters, optional parameters, arrow functions, and rest parameters.",
      example: `// Basic sum function
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(5, 3)); // 8
// sum('5', 3); // Error: Argument of type 'string' is not assignable

// With default parameters
function sumWithDefault(a: number, b: number = 0): number {
  return a + b;
}

// With optional parameter
function sumOptional(a: number, b?: number): number {
  return a + (b || 0);
}

// Arrow function with types
const sumArrow = (a: number, b: number): number => a + b;

// Generic sum for multiple numbers
function sumMultiple(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumMultiple(1, 2, 3, 4, 5)); // 15`,
      output: "sum(5,3) → 8, sumMultiple(1,2,3,4,5) → 15",
      note: "Type annotations prevent passing incorrect types to functions"
    },
    {
      id: 3,
      title: "Create an interface for a Car with brand, model, and year",
      problem: "Define an interface Car with properties brand, model, year, and optional color. Also create a function that displays car info.",
      answer: "Use interface keyword with properties, optional properties using ?, and readonly modifier. Implement the interface in objects and classes.",
      example: `// Basic Car interface
interface Car {
  brand: string;
  model: string;
  year: number;
  color?: string; // Optional property
  readonly vin?: string; // Read-only property
}

// Implementing Car interface
const myCar: Car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  color: 'Blue'
};

// Function that accepts Car interface
function displayCarInfo(car: Car): string {
  let info = car.brand + ' ' + car.model + ' (' + car.year + ')';
  if (car.color) info += ' - ' + car.color;
  return info;
}

// Class implementing Car interface
class Sedan implements Car {
  brand: string;
  model: string;
  year: number;
  color?: string;
  
  constructor(brand: string, model: string, year: number, color?: string) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  
  getInfo(): string {
    return this.brand + ' ' + this.model + ' (' + this.year + ')';
  }
}

// Extending interface
interface ElectricCar extends Car {
  batteryCapacity: number;
  chargingTime: number;
}

const tesla: ElectricCar = {
  brand: 'Tesla',
  model: 'Model 3',
  year: 2023,
  batteryCapacity: 75,
  chargingTime: 30,
  color: 'Red'
};`,
      output: "displayCarInfo(myCar) → 'Toyota Camry (2022) - Blue'",
      note: "Interfaces define contracts that objects must follow"
    },
    {
      id: 4,
      title: "Create a function that greets a user with optional title",
      problem: "Write a function greet that takes firstName, lastName, and optional title, returning a formatted greeting string.",
      answer: "Use ? for optional parameters, default values with =, and interfaces for complex parameter objects.",
      example: `// Basic greet function with optional title
function greet(firstName: string, lastName: string, title?: string): string {
  if (title) {
    return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  }
  return 'Hello, ' + firstName + ' ' + lastName + '!';
}

console.log(greet('John', 'Doe')); // Hello, John Doe!
console.log(greet('Jane', 'Smith', 'Dr.')); // Hello, Dr. Jane Smith!

// With default parameter
function greetWithDefault(firstName: string, lastName: string, title: string = 'Mr./Ms.'): string {
  return 'Welcome, ' + title + ' ' + firstName + ' ' + lastName;
}

// Arrow function with optional parameter
const greetArrow = (firstName: string, lastName: string, title?: string): string => {
  return title ? 'Greetings, ' + title + ' ' + firstName + ' ' + lastName : 'Greetings, ' + firstName + ' ' + lastName;
};

// Using interface for parameters
interface GreetingOptions {
  firstName: string;
  lastName: string;
  title?: string;
  emoji?: boolean;
}

function fancyGreeting(options: GreetingOptions): string {
  let greeting = 'Dear ';
  if (options.title) greeting += options.title + ' ';
  greeting += options.firstName + ' ' + options.lastName;
  return options.emoji ? greeting + ' 🎉' : greeting;
}`,
      output: "greet('John', 'Doe') → 'Hello, John Doe!', greet('Jane', 'Smith', 'Dr.') → 'Hello, Dr. Jane Smith!'",
      note: "Use ? for optional parameters; default values provide fallbacks"
    },
    {
      id: 5,
      title: "Create a type for a product with name, price, and optional discount",
      problem: "Define a type Product with name (string), price (number), and optional discount (number). Create a function that calculates final price.",
      answer: "Use type keyword for type aliases, add optional properties with ?, and demonstrate union types with literal types.",
      example: `// Type alias for Product
type Product = {
  name: string;
  price: number;
  discount?: number; // Optional discount percentage (0-100)
  category?: 'electronics' | 'clothing' | 'food';
};

// Calculate final price with discount
function getFinalPrice(product: Product): number {
  if (product.discount) {
    return product.price * (1 - product.discount / 100);
  }
  return product.price;
}

// Display product info
function displayProduct(product: Product): string {
  const originalPrice = product.price.toFixed(2);
  const finalPrice = getFinalPrice(product).toFixed(2);
  let discountText = '';
  if (product.discount) discountText = ' (-' + product.discount + '%)';
  return product.name + ': $' + originalPrice + discountText + ' → $' + finalPrice;
}

// Product array with type
const products: Product[] = [
  { name: 'Laptop', price: 999.99, discount: 10, category: 'electronics' },
  { name: 'T-Shirt', price: 29.99, category: 'clothing' },
  { name: 'Book', price: 19.99, discount: 5 }
];

// Calculate total for cart
function calculateTotal(items: Product[]): number {
  return items.reduce((total, item) => total + getFinalPrice(item), 0);
}

// Type alias with readonly properties
type ReadonlyProduct = {
  readonly name: string;
  readonly price: number;
  discount?: number;
};

// Extending type aliases
type DiscountedProduct = Product & {
  discountEndDate: Date;
  promoCode: string;
};`,
      output: "getFinalPrice({ name: 'Laptop', price: 999.99, discount: 10 }) → 899.99",
      note: "Use type aliases for primitive unions and complex type combinations"
    },
    {
      id: 6,
      title: "Create an array of numbers and write functions to find max, min, and sum",
      problem: "Write TypeScript functions that operate on number arrays with proper type annotations.",
      answer: "Use number[] syntax or Array<number> generic syntax. Demonstrate readonly arrays, tuple types, and generic array functions.",
      example: `// Basic array types
let numbers: number[] = [5, 2, 8, 1, 9, 3];
let moreNumbers: Array<number> = [10, 20, 30, 40, 50]; // Generic syntax

// Find maximum value
function findMax(arr: number[]): number | undefined {
  if (arr.length === 0) return undefined;
  return Math.max(...arr);
}

// Find minimum value
function findMin(arr: number[]): number | undefined {
  if (arr.length === 0) return undefined;
  return Math.min(...arr);
}

// Calculate sum
function sumArray(arr: number[]): number {
  return arr.reduce((total, num) => total + num, 0);
}

// Calculate average
function average(arr: number[]): number {
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
}

// Filter even numbers
function filterEven(arr: number[]): number[] {
  return arr.filter(num => num % 2 === 0);
}

// Map to double
function doubleArray(arr: number[]): number[] {
  return arr.map(num => num * 2);
}

// Generic array function with type parameter
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Readonly array
function processReadonly(numbers: readonly number[]): number {
  // numbers.push(10); // Error: Property 'push' does not exist on type 'readonly number[]'
  return numbers.reduce((a, b) => a + b, 0);
}

// Tuple types for fixed-length arrays
let person: [string, number] = ['John', 25];
let rgb: [number, number, number] = [255, 0, 128];

// Function returning tuple
function getMinMax(arr: number[]): [number, number] {
  return [Math.min(...arr), Math.max(...arr)];
}

const [min, max] = getMinMax(numbers);`,
      output: "findMax([5,2,8,1,9,3]) → 9, sumArray([1,2,3,4]) → 10, firstElement(['a','b','c']) → 'a'",
      note: "Use readonly modifier to prevent array mutation"
    },
    {
      id: 7,
      title: "Create a Student interface with name, age, and grades array",
      problem: "Define Student interface, create multiple students, and calculate average grade for each student.",
      answer: "Define interface with required and optional properties, use readonly for ID, implement in class with implements keyword.",
      example: `// Student interface
interface Student {
  name: string;
  age: number;
  grades: number[];
  email?: string; // optional
  readonly id: number; // read-only
}

// Calculate average grade for a student
function calculateAverageGrade(student: Student): number {
  if (student.grades.length === 0) return 0;
  const sum = student.grades.reduce((total, grade) => total + grade, 0);
  return sum / student.grades.length;
}

// Check if student is passing (average > 60)
function isPassing(student: Student): boolean {
  return calculateAverageGrade(student) >= 60;
}

// Get student summary
function getStudentSummary(student: Student): string {
  const avg = calculateAverageGrade(student).toFixed(2);
  const status = isPassing(student) ? 'Passing' : 'Failing';
  return student.name + ' (Age: ' + student.age + ') - Average: ' + avg + ' - Status: ' + status;
}

// Students array
const students: Student[] = [
  { id: 1, name: 'Alice', age: 20, grades: [85, 90, 88, 92], email: 'alice@school.com' },
  { id: 2, name: 'Bob', age: 22, grades: [75, 65, 70, 80] },
  { id: 3, name: 'Charlie', age: 21, grades: [45, 50, 55, 60] }
];

// Class implementing Student interface
class UniversityStudent implements Student {
  id: number;
  name: string;
  age: number;
  grades: number[];
  email?: string;
  major: string;
  
  constructor(id: number, name: string, age: number, major: string, grades: number[] = []) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.major = major;
    this.grades = grades;
  }
  
  addGrade(grade: number): void {
    this.grades.push(grade);
  }
  
  getAverage(): number {
    return calculateAverageGrade(this);
  }
}

// Function to get top performing students
function getTopStudents(students: Student[], topCount: number = 3): Student[] {
  return [...students]
    .sort((a, b) => calculateAverageGrade(b) - calculateAverageGrade(a))
    .slice(0, topCount);
}`,
      output: "getStudentSummary(Alice) → 'Alice (Age: 20) - Average: 88.75 - Status: Passing'",
      note: "Interfaces can be implemented by classes using the implements keyword"
    },
    {
      id: 8,
      title: "Write a function that accepts string or number and returns its length",
      problem: "Create a function that takes a value of type string or number and returns its length (string length or number of digits).",
      answer: "Use union type with | operator, narrow types using typeof, and use type predicates for custom type guards.",
      example: `// Union type function
function getLength(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  }
  // For numbers, convert to string and get length
  return Math.abs(value).toString().length;
}

console.log(getLength('hello')); // 5
console.log(getLength(12345)); // 5
console.log(getLength(-456)); // 3

// With type guard
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: string | number): string {
  if (isString(value)) {
    return 'String length: ' + value.length;
  }
  return 'Number digits: ' + Math.abs(value).toString().length;
}

// Union type with custom logic
type StringOrNumber = string | number;

function formatValue(value: StringOrNumber): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// Union with literal types
type Status = 'active' | 'inactive' | 'pending';
type UserId = string | number;

function getUserStatus(status: Status): string {
  switch (status) {
    case 'active': return 'User is active';
    case 'inactive': return 'User is inactive';
    case 'pending': return 'User is pending';
  }
}

// Union in array
let mixedArray: (string | number)[] = ['hello', 42, 'world', 100];

// Helper to count string elements
function countStrings(arr: (string | number)[]): number {
  return arr.filter(item => typeof item === 'string').length;
}`,
      output: "getLength('hello') → 5, getLength(12345) → 5",
      note: "Use union types when a value can be one of several types; always narrow with typeof"
    },
    {
      id: 9,
      title: "Create a type alias for User with id, name, and email",
      problem: "Define a User type and create functions to find user by id and update user email.",
      answer: "Use type keyword, demonstrate utility types like Partial, Pick, Omit for transforming existing types.",
      example: `// Type alias for User
type User = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  isActive: boolean;
};

// User database
const users: User[] = [
  { id: 1, name: 'John', email: 'john@email.com', createdAt: new Date('2023-01-01'), isActive: true },
  { id: 2, name: 'Jane', email: 'jane@email.com', createdAt: new Date('2023-02-15'), isActive: true },
  { id: 3, name: 'Bob', email: 'bob@email.com', createdAt: new Date('2023-03-10'), isActive: false }
];

// Find user by id
function findUserById(id: number): User | undefined {
  return users.find(user => user.id === id);
}

// Find user by email
function findUserByEmail(email: string): User | undefined {
  return users.find(user => user.email === email);
}

// Update user email
function updateUserEmail(id: number, newEmail: string): boolean {
  const user = findUserById(id);
  if (user) {
    user.email = newEmail;
    return true;
  }
  return false;
}

// Get active users
function getActiveUsers(): User[] {
  return users.filter(user => user.isActive);
}

// Partial update (using Partial utility type)
function partialUpdateUser(id: number, updates: Partial<User>): User | null {
  const user = findUserById(id);
  if (!user) return null;
  Object.assign(user, updates);
  return user;
}

// Pick utility type for user preview
type UserPreview = Pick<User, 'id' | 'name'>;

function getUserPreview(id: number): UserPreview | null {
  const user = findUserById(id);
  return user ? { id: user.id, name: user.name } : null;
}

// Omit utility type
type UserWithoutDates = Omit<User, 'createdAt'>;

function createUser(data: Omit<User, 'id' | 'createdAt'>): User {
  const newId = Math.max(...users.map(u => u.id)) + 1;
  return {
    id: newId,
    createdAt: new Date(),
    ...data
  };
}`,
      output: "findUserById(1) → { id:1, name:'John', email:'john@email.com', ... }",
      note: "Utility types like Partial, Pick, Omit help transform existing types"
    },
    {
      id: 10,
      title: "Write a function that handles both null and undefined safely",
      problem: "Create a function that safely accesses a nested property that might be null or undefined.",
      answer: "Use optional chaining ?. for safe property access and nullish coalescing ?? for default values.",
      example: `// Safe property access with null checking
interface Address {
  street: string;
  city: string;
  zipCode?: string;
}

interface User {
  name: string;
  address?: Address | null;
}

function getUserCity(user: User): string {
  if (user && user.address) {
    return user.address.city;
  }
  return 'Unknown';
}

// Using optional chaining (?.)
function getUserCityOptional(user: User): string {
  return user?.address?.city ?? 'Unknown';
}

// Using nullish coalescing (??)
function getZipCode(user: User): string {
  return user?.address?.zipCode ?? 'No zip code';
}

// Safe function with null/undefined handling
function safeLength(str: string | null | undefined): number {
  return str?.length ?? 0;
}

// Generic null check utility
function isNotNull<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

function processNonNullUsers(users: (User | null | undefined)[]): User[] {
  return users.filter(isNotNull);
}

// Default value for null/undefined
function getConfigValue<T>(value: T | null | undefined, defaultValue: T): T {
  return value ?? defaultValue;
}

// Optional function parameter
function greetUser(name?: string | null): string {
  const userName = name ?? 'Guest';
  return 'Hello, ' + userName + '!';
}

console.log(greetUser()); // Hello, Guest!
console.log(greetUser('John')); // Hello, John!
console.log(greetUser(null)); // Hello, Guest!

// Non-null assertion operator (use carefully)
function getFirstItem<T>(items: T[] | null | undefined): T {
  // ! tells TypeScript that items is not null/undefined
  return items![0];
}

// Better approach with proper checking
function getFirstItemSafe<T>(items: T[] | null | undefined): T | undefined {
  return items?.[0];
}`,
      output: "getUserCityOptional({ name:'John', address:{ city:'NYC' } }) → 'NYC', getUserCityOptional({ name:'John' }) → 'Unknown'",
      note: "Use optional chaining (?.) and nullish coalescing (??) for safe property access"
    },
    {
      id: 11,
      title: "Create a Rectangle class with width, height, and area method",
      problem: "Define a Rectangle class with private width and height properties, getters/setters, and a method to calculate area.",
      answer: "Use private access modifier, get and set keywords for properties, and static methods for utility creation.",
      example: `// Rectangle class with private properties
class Rectangle {
  private _width: number;
  private _height: number;
  
  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }
  
  // Getter for width
  get width(): number {
    return this._width;
  }
  
  // Setter for width with validation
  set width(value: number) {
    if (value <= 0) {
      throw new Error('Width must be positive');
    }
    this._width = value;
  }
  
  get height(): number {
    return this._height;
  }
  
  set height(value: number) {
    if (value <= 0) {
      throw new Error('Height must be positive');
    }
    this._height = value;
  }
  
  // Method to calculate area
  getArea(): number {
    return this._width * this._height;
  }
  
  // Method to calculate perimeter
  getPerimeter(): number {
    return 2 * (this._width + this._height);
  }
  
  // Method to check if square
  isSquare(): boolean {
    return this._width === this._height;
  }
  
  // Static method to create square
  static createSquare(side: number): Rectangle {
    return new Rectangle(side, side);
  }
}

// Inheritance example
class ColoredRectangle extends Rectangle {
  private color: string;
  
  constructor(width: number, height: number, color: string) {
    super(width, height);
    this.color = color;
  }
  
  getColor(): string {
    return this.color;
  }
  
  // Override area method to log
  getArea(): number {
    const area = super.getArea();
    console.log('Area of ' + this.color + ' rectangle: ' + area);
    return area;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.getArea()); // 50
console.log(rect.getPerimeter()); // 30
console.log(rect.isSquare()); // false

const square = Rectangle.createSquare(7);
console.log(square.getArea()); // 49

const coloredRect = new ColoredRectangle(4, 6, 'blue');
console.log(coloredRect.getColor()); // blue`,
      output: "new Rectangle(5,10).getArea() → 50, Rectangle.createSquare(7).getArea() → 49",
      note: "Use access modifiers (private, public, protected) for encapsulation"
    },
    {
      id: 12,
      title: "Create an enum for days of the week and use it in a function",
      problem: "Define an enum for weekdays and weekend, and create a function that returns whether a day is a weekday.",
      answer: "Use enum keyword for numeric or string enums, const enum for efficiency, and use in switch statements.",
      example: `// Numeric enum
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

// String enum
enum Weekday {
  MON = 'Monday',
  TUE = 'Tuesday',
  WED = 'Wednesday',
  THU = 'Thursday',
  FRI = 'Friday',
  SAT = 'Saturday',
  SUN = 'Sunday'
}

// Function using enum
function isWeekend(day: Days): boolean {
  return day === Days.Saturday || day === Days.Sunday;
}

function getDayName(day: Days): string {
  return Days[day];
}

// Function with enum parameter
function scheduleMeeting(day: Weekday, time: string): string {
  return 'Meeting scheduled on ' + day + ' at ' + time;
}

// Const enum (more efficient)
const enum WorkDay {
  MON = 1,
  TUE,
  WED,
  THU,
  FRI
}

// Enum with custom values
enum StatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500
}

function handleResponse(status: StatusCode): string {
  switch (status) {
    case StatusCode.OK: return 'Success';
    case StatusCode.BAD_REQUEST: return 'Bad request';
    case StatusCode.UNAUTHORIZED: return 'Unauthorized';
    case StatusCode.NOT_FOUND: return 'Not found';
    case StatusCode.INTERNAL_ERROR: return 'Server error';
    default: return 'Unknown status';
  }
}

// Using enum as type
let today: Days = Days.Monday;
let workDay: WorkDay = WorkDay.TUE;`,
      output: "isWeekend(Days.Saturday) → true, getDayName(Days.Monday) → 'Monday'",
      note: "Use string enums for better readability in debugging"
    }
  ],

  experienced: [
    {
      id: 13,
      title: "Write a function that swaps two values using generics",
      problem: "Create a generic swap function that can swap any two values of the same type.",
      answer: "Use <T> syntax for type parameters, use tuple return type for swapped values.",
      example: `function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}

let x = 5, y = 10;
[x, y] = swap(x, y);
console.log(x, y); // 10, 5

let firstName = 'John', lastName = 'Doe';
[firstName, lastName] = swap(firstName, lastName);
console.log(firstName, lastName); // 'Doe', 'John'

let active = true, pending = false;
[active, pending] = swap(active, pending);
console.log(active, pending); // false, true

// Generic swap for objects
interface Person {
  name: string;
  age: number;
}

const person1: Person = { name: 'Alice', age: 25 };
const person2: Person = { name: 'Bob', age: 30 };
const [swapped1, swapped2] = swap(person1, person2);
console.log(swapped1.name, swapped2.name); // 'Bob', 'Alice'`,
      output: "swap(5,10) → [10,5], swap('John','Doe') → ['Doe','John']",
      note: "Generics allow the function to work with any type while maintaining type safety"
    },
    {
      id: 14,
      title: "Create a function that returns the first element of an array using generics",
      problem: "Write a generic function that returns the first element of any array.",
      answer: "Use generic type parameter T, return type T | undefined for safety with empty arrays.",
      example: `function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numbers = [1, 2, 3, 4, 5];
const firstNumber = first(numbers); // Type: number | undefined
console.log(firstNumber); // 1

const names = ['Alice', 'Bob', 'Charlie'];
const firstName = first(names); // Type: string | undefined
console.log(firstName); // 'Alice'

const mixed = [1, 'hello', true];
const firstMixed = first(mixed); // Type: string | number | boolean | undefined

// With type constraint
function firstOrThrow<T>(arr: T[]): T {
  if (arr.length === 0) {
    throw new Error('Array is empty');
  }
  return arr[0];
}

// Generic with default value
function firstOrDefault<T>(arr: T[], defaultValue: T): T {
  return arr.length > 0 ? arr[0] : defaultValue;
}

const emptyArray: number[] = [];
const defaultValue = firstOrDefault(emptyArray, 0);
console.log(defaultValue); // 0`,
      output: "first([1,2,3]) → 1, first(['a','b','c']) → 'a'",
      note: "Generic functions preserve type information of the input and output"
    },
    {
      id: 15,
      title: "Implement a simple generic identity function",
      problem: "Create a generic identity function that returns whatever value is passed to it.",
      answer: "Use <T> type parameter, return the same type T, demonstrate type inference.",
      example: `function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
console.log(num); // 42

const str = identity<string>('hello');
console.log(str); // 'hello'

const bool = identity<boolean>(true);
console.log(bool); // true

// Type inference
const inferredString = identity('world'); // TypeScript infers string
const inferredNumber = identity(100); // TypeScript infers number

// With array
const arr = identity<number[]>([1, 2, 3]);
console.log(arr); // [1, 2, 3]

// With object
interface User {
  id: number;
  name: string;
}

const user = identity<User>({ id: 1, name: 'John' });
console.log(user.name); // 'John'

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair<string, number>('age', 25);
console.log(result); // ['age', 25]`,
      output: "identity(42) → 42, identity('hello') → 'hello', pair('age',25) → ['age',25]",
      note: "Type parameters are like variables for types; they capture the type provided by the caller"
    },
    {
      id: 16,
      title: "Create an interface for a Product with readonly properties",
      problem: "Define a Product interface with readonly id and optional description, and create a function to display product info.",
      answer: "Use readonly modifier for immutable properties, demonstrate that only readonly properties can't be changed after creation.",
      example: `interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
  readonly createdAt: Date;
}

function createProduct(id: number, name: string, price: number, description?: string): Product {
  return {
    id,
    name,
    price,
    description,
    createdAt: new Date()
  };
}

const product = createProduct(1, 'Laptop', 999.99, 'High performance laptop');
console.log(product.name); // 'Laptop'
// product.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
// product.createdAt = new Date(); // Error: Cannot assign to 'createdAt'

// Update allowed properties
product.name = 'Gaming Laptop';
product.price = 1299.99;

function getProductSummary(product: Product): string {
  let summary = 'ID: ' + product.id + ', Name: ' + product.name + ', Price: $' + product.price;
  if (product.description) {
    summary += ', Description: ' + product.description;
  }
  return summary;
}

console.log(getProductSummary(product));

// Readonly array of products
const productsList: readonly Product[] = [product];
// productsList.push(product); // Error: Property 'push' does not exist on type 'readonly Product[]'`,
      output: "getProductSummary(product) → 'ID: 1, Name: Laptop, Price: $999.99, Description: High performance laptop'",
      note: "Readonly properties can only be set during initialization"
    },
    {
      id: 17,
      title: "Create a function with a rest parameter for multiple numbers",
      problem: "Write a function that takes any number of numbers and returns their average, with proper typing.",
      answer: "Use rest parameter syntax ...numbers: number[], demonstrate generic rest parameters with join function.",
      example: `function average(...numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

console.log(average(10, 20, 30)); // 20
console.log(average(5, 15, 25, 35, 45)); // 25
console.log(average()); // 0

// With generic rest parameters
function join<T>(separator: string, ...items: T[]): string {
  return items.join(separator);
}

console.log(join(' - ', 1, 2, 3, 4, 5)); // '1 - 2 - 3 - 4 - 5'
console.log(join(', ', 'apple', 'banana', 'orange')); // 'apple, banana, orange'

// Rest parameters with type predicate
function areAllNumbers(...values: unknown[]): values is number[] {
  return values.every(value => typeof value === 'number');
}

function sumSafe(...values: unknown[]): number {
  if (areAllNumbers(...values)) {
    return values.reduce((sum, num) => sum + num, 0);
  }
  return 0;
}

console.log(sumSafe(1, 2, 3, 4)); // 10
console.log(sumSafe(1, '2', 3)); // 0`,
      output: "average(10,20,30) → 20, join(' - ',1,2,3,4,5) → '1 - 2 - 3 - 4 - 5'",
      note: "Rest parameters collect multiple arguments into an array"
    },
    {
      id: 18,
      title: "Create a type for a callback function",
      problem: "Define a type for a callback function that takes a number and returns void, and use it in a function.",
      answer: "Use type alias for function signature, demonstrate generic callback types and transformer functions.",
      example: `// Type alias for callback
type NumberCallback = (num: number) => void;

// Function that accepts callback
function processNumbers(numbers: number[], callback: NumberCallback): void {
  for (const num of numbers) {
    callback(num);
  }
}

// Using the functionprocessNumbers([1, 2, 3, 4, 5], (num) => {
  console.log('Processing: ' + num);
});

// Different callback implementations
const doubleAndLog: NumberCallback = (num) => {
  console.log('Double: ' + (num * 2));
};

const squareAndLog: NumberCallback = (num) => {
  console.log('Square: ' + (num * num));
};

processNumbers([1, 2, 3], doubleAndLog);
processNumbers([4, 5, 6], squareAndLog);

// Generic callback type
type Callback<T> = (value: T) => void;

function processArray<T>(items: T[], callback: Callback<T>): void {
  items.forEach(item => callback(item));
}

processArray<string>(['apple', 'banana', 'orange'], (fruit) => {
  console.log('Fruit: ' + fruit);
});

// Callback with return value
type Transformer<T, U> = (input: T) => U;

function mapArray<T, U>(items: T[], transformer: Transformer<T, U>): U[] {
  return items.map(transformer);
}

const strings = ['1', '2', '3'];
const numbers = mapArray(strings, (str) => parseInt(str));
console.log(numbers); // [1, 2, 3]`,
      output: "Callback functions are called for each element in the array",
      note: "Function types can be defined using type aliases or interfaces"
    },
    {
      id: 19,
      title: "Create an intersection type combining Person and Employee",
      problem: "Define Person and Employee types, then create an intersection type that combines both.",
      answer: "Use & operator for intersection types, combine multiple types, demonstrate with optional properties.",
      example: `// Base types
type Person = {
  name: string;
  age: number;
  email: string;
};

type Employee = {
  employeeId: number;
  department: string;
  salary: number;
};

// Intersection type
type EmployeePerson = Person & Employee;

// Using the intersection type
const worker: EmployeePerson = {
  name: 'John Doe',
  age: 30,
  email: 'john@company.com',
  employeeId: 12345,
  department: 'Engineering',
  salary: 75000
};

// Function that accepts intersection type
function getEmployeeInfo(employee: EmployeePerson): string {
  return employee.name + ' works in ' + employee.department + ' and earns $' + employee.salary;
}

console.log(getEmployeeInfo(worker));

// Intersection with more types
type Contact = {
  phone: string;
  address: string;
};

type FullEmployee = Person & Employee & Contact;

const fullEmployee: FullEmployee = {
  name: 'Jane Smith',
  age: 28,
  email: 'jane@company.com',
  employeeId: 67890,
  department: 'Marketing',
  salary: 65000,
  phone: '555-1234',
  address: '123 Main St'
};

// Combining intersection with optional properties
type Manager = EmployeePerson & {
  teamSize: number;
  bonus?: number;
};

const manager: Manager = {
  name: 'Bob Johnson',
  age: 45,
  email: 'bob@company.com',
  employeeId: 11111,
  department: 'IT',
  salary: 120000,
  teamSize: 10
};

console.log(manager.teamSize); // 10`,
      output: "getEmployeeInfo(worker) → 'John Doe works in Engineering and earns $75000'",
      note: "Intersection types combine multiple types using the & operator"
    },
    {
      id: 20,
      title: "Create a function overload for a reverse function",
      problem: "Implement function overloading for a reverse function that can reverse strings and arrays.",
      answer: "Write multiple function signatures before implementation, use union types in implementation signature.",
      example: `// Function overload signatures
function reverse(value: string): string;
function reverse<T>(value: T[]): T[];

// Implementation
function reverse(value: string | any[]): string | any[] {
  if (typeof value === 'string') {
    return value.split('').reverse().join('');
  }
  return [...value].reverse();
}

// Usage examples
const reversedString = reverse('hello');
console.log(reversedString); // 'olleh'

const reversedArray = reverse([1, 2, 3, 4, 5]);
console.log(reversedArray); // [5, 4, 3, 2, 1]

const reversedStringArray = reverse(['a', 'b', 'c']);
console.log(reversedStringArray); // ['c', 'b', 'a']

// TypeScript knows the return type based on the argument
const result: string = reverse('typescript');
console.log(result); // 'tpircsepyt'

// Multiple overloads with different parameter counts
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine('Hello, ', 'World!')); // 'Hello, World!'
console.log(combine(10, 20)); // 30`,
      output: "reverse('hello') → 'olleh', reverse([1,2,3,4,5]) → [5,4,3,2,1]",
      note: "Overloads allow a function to have different return types based on parameter types"
    },
    {
      id: 21,
      title: "Implement a generic Stack class with push, pop, and peek",
      problem: "Create a generic Stack class that works with any type and implements push, pop, peek, and isEmpty methods.",
      answer: "Use generic class Stack<T>, private items array, implement all stack operations with proper return types.",
      example: `// Generic Stack class
class Stack<T> {
  private items: T[] = [];
  
  push(item: T): void {
    this.items.push(item);
  }
  
  pop(): T | undefined {
    return this.items.pop();
  }
  
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
  
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  
  size(): number {
    return this.items.length;
  }
  
  clear(): void {
    this.items = [];
  }
  
  toArray(): T[] {
    return [...this.items];
  }
}

// Usage with different types
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop()); // 3
console.log(numberStack.peek()); // 2
console.log(numberStack.size()); // 2

const stringStack = new Stack<string>();
stringStack.push('hello');
stringStack.push('world');
console.log(stringStack.pop()); // 'world'
console.log(stringStack.isEmpty()); // false

// Stack with objects
interface Task {
  id: number;
  name: string;
  priority: 'high' | 'medium' | 'low';
}

const taskStack = new Stack<Task>();
taskStack.push({ id: 1, name: 'Task 1', priority: 'high' });
taskStack.push({ id: 2, name: 'Task 2', priority: 'medium' });
console.log(taskStack.pop()?.name); // 'Task 2'

// Generic constraint example
interface Comparable<T> {
  compareTo(other: T): number;
}

class ComparableStack<T extends Comparable<T>> {
  private items: T[] = [];
  
  push(item: T): void {
    this.items.push(item);
  }
  
  findMax(): T | undefined {
    if (this.items.length === 0) return undefined;
    return this.items.reduce((max, current) => 
      current.compareTo(max) > 0 ? current : max
    );
  }
}

// Class implementing compareTo
class Person implements Comparable<Person> {
  constructor(public name: string, public age: number) {}
  
  compareTo(other: Person): number {
    return this.age - other.age;
  }
}

const people = new ComparableStack<Person>();
people.push(new Person('Alice', 25));
people.push(new Person('Bob', 30));
people.push(new Person('Charlie', 20));
console.log(people.findMax()?.name); // 'Bob' (oldest)`,
      output: "numberStack.pop() → 3, numberStack.peek() → 2, stringStack.pop() → 'world'",
      note: "Generics provide type safety while allowing code reuse across different types"
    },
    {
      id: 22,
      title: "Create a mapped type that makes all properties of an object readonly",
      problem: "Implement a custom mapped type that converts all properties to readonly, including nested objects.",
      answer: "Use mapped type syntax [P in keyof T], readonly modifier, recursive DeepReadonly for nested objects.",
      example: `// Basic readonly mapped type
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

type ReadonlyUser = Readonly<User>;
// Result: { readonly name: string; readonly age: number; readonly address: { street: string; city: string; } }

// Deep readonly (recursive)
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type DeepReadonlyUser = DeepReadonly<User>;
// Now address properties are also readonly

// Mapped type with modifiers
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// Practical example
function freezeObject<T extends object>(obj: T): DeepReadonly<T> {
  Object.freeze(obj);
  return obj as DeepReadonly<T>;
}

const user = {
  name: 'John',
  age: 30,
  address: { street: 'Main St', city: 'NYC' }
};

const frozenUser = freezeObject(user);
// frozenUser.name = 'Jane'; // Error: Cannot assign to 'name' because it is a read-only property
// frozenUser.address.city = 'LA'; // Error: Cannot assign to 'city' because it is a read-only property

// Mapped type that picks specific properties
type PickProperties<T, K extends keyof T> = {
  [P in K]: T[P];
};

type UserNameAndAge = PickProperties<User, 'name' | 'age'>;

// Mapped type that omits properties
type OmitProperties<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type UserWithoutAddress = OmitProperties<User, 'address'>;`,
      output: "ReadonlyUser properties cannot be modified, DeepReadonlyUser nested properties also readonly",
      note: "Mapped types transform each property of a type using a formula"
    },
    {
      id: 23,
      title: "Write a type guard that checks if an object has a name property",
      problem: "Create a user-defined type guard to check if an object has a 'name' property of type string.",
      answer: "Use parameter is Type syntax, custom validation logic, return boolean with type predicate.",
      example: `// Basic type guard
interface Named {
  name: string;
}

function hasName(obj: any): obj is Named {
  return obj && typeof obj.name === 'string';
}

function processName(obj: unknown): string {
  if (hasName(obj)) {
    return 'Name: ' + obj.name;
  }
  return 'No name property';
}

// More generic type guard
function hasProperty<T, K extends string>(obj: T, prop: K): obj is T & Record<K, unknown> {
  return obj !== null && typeof obj === 'object' && prop in obj;
}

// Type guard for specific type
interface Person {
  name: string;
  age: number;
}

function isPerson(obj: any): obj is Person {
  return obj && typeof obj.name === 'string' && typeof obj.age === 'number';
}

function greetPerson(obj: unknown): string {
  if (isPerson(obj)) {
    return 'Hello ' + obj.name + ', you are ' + obj.age + ' years old';
  }
  return 'Not a person';
}

// Type guard with multiple properties
interface Car {
  brand: string;
  model: string;
  year: number;
}

function isCar(obj: any): obj is Car {
  return obj && 
    typeof obj.brand === 'string' &&
    typeof obj.model === 'string' &&
    typeof obj.year === 'number';
}

// Generic type guard for interface validation
type Validator<T> = (obj: any) => obj is T;

function createTypeGuard<T>(checks: { [K in keyof T]: (value: any) => boolean }): Validator<T> {
  return (obj: any): obj is T => {
    if (!obj || typeof obj !== 'object') return false;
    return Object.entries(checks).every(([key, check]) => check(obj[key]));
  };
}

const isProduct = createTypeGuard<{ name: string; price: number }>({
  name: (v) => typeof v === 'string',
  price: (v) => typeof v === 'number'
});

// Array filter with type guard
function filterByName<T extends { name?: string }>(items: T[], name: string): T[] {
  return items.filter(item => item.name === name);
}

// Using type guard in array filter
const items: unknown[] = [
  { name: 'Item 1', value: 10 },
  { name: 'Item 2', value: 20 },
  { age: 30 }
];

const namedItems = items.filter(hasName);
// namedItems type is Named[]`,
      output: "hasName({ name: 'John' }) → true, isPerson({ name: 'John', age: 25 }) → true",
      note: "Type predicates ('obj is Type') tell TypeScript to narrow the type after the check"
    },
    {
      id: 24,
      title: "Implement a generic debounce function with correct typing",
      problem: "Create a debounce function that delays execution and preserves type information of the original function.",
      answer: "Use Parameters<T>, ReturnType<T>, ThisParameterType utility types, preserve function signature.",
      example: `// Generic debounce function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  
  return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Throttle function
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  
  return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage examples
const handleSearch = (query: string) => {
  console.log('Searching for: ' + query);
};

const debouncedSearch = debounce(handleSearch, 500);
debouncedSearch('hello'); // Will only execute after 500ms of no calls

// With return value (using Promise)
function debouncePromise<T extends (...args: any[]) => Promise<any>>(
  func: T,
  delay: number
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  
  return function(this: ThisParameterType<T>, ...args: Parameters<T>): Promise<ReturnType<T>> {
    return new Promise((resolve, reject) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(async () => {
        try {
          const result = await func.apply(this, args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
}

// Immediate debounce (executes on leading edge)
function debounceImmediate<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  
  return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
    const callNow = !timeoutId;
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = undefined;
    }, delay);
    
    if (callNow) {
      func.apply(this, args);
    }
  };
}

// Type-safe event handler debouncing
interface InputEvent {
  target: { value: string };
}

const handleInput = (event: InputEvent) => {
  console.log(event.target.value);
};

const debouncedInput = debounce(handleInput, 300);

// With correct 'this' context
class SearchComponent {
  private query: string = '';
  
  search = debounce((term: string) => {
    this.query = term;
    console.log('Searching: ' + this.query);
  }, 500);
}

const searchComp = new SearchComponent();
searchComp.search('TypeScript');`,
      output: "debouncedSearch called multiple times in 500ms only executes once",
      note: "Generics preserve function parameter and return types through the debounced wrapper"
    },
    {
      id: 25,
      title: "Implement the Partial utility type yourself",
      problem: "Create your own implementation of the Partial<T> utility type using mapped types.",
      answer: "Use mapped type with ? modifier, demonstrate DeepPartial for nested objects, also show Required and Readonly.",
      example: `// Custom Partial implementation
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type PartialUser = MyPartial<User>;

function updateUser(id: number, updates: PartialUser): void {
  console.log('Updating user ' + id + ' with', updates);
}

updateUser(1, { name: 'New Name' });
updateUser(2, { email: 'new@email.com', age: 30 });

// Deep Partial (recursive)
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface NestedUser {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
  preferences: {
    theme: string;
    notifications: boolean;
  };
}

type DeepPartialUser = DeepPartial<NestedUser>;

const partialUpdate: DeepPartialUser = {
  name: 'John',
  address: {
    city: 'New York'
    // street and zipCode are optional
  }
};

// Required (opposite of Partial)
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

interface Config {
  url?: string;
  timeout?: number;
  retries?: number;
}

type RequiredConfig = MyRequired<Config>;
// All properties become required

// Readonly (another utility)
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadonlyUser = MyReadonly<User>;
// All properties become readonly`,
      output: "Partial allows partial updates without requiring all fields",
      note: "Understanding utility type implementation helps create custom ones"
    },
    {
      id: 26,
      title: "Implement a type-safe event emitter",
      problem: "Create an event emitter class that provides type safety for event names and payloads.",
      answer: "Use generic EventMap type, keyof constraints, mapped types for payload inference.",
      example: `// Event map definition
type EventMap = {
  'userLogin': { userId: string; timestamp: Date };
  'userLogout': { userId: string };
  'message': { text: string; sender: string };
  'error': { error: Error; context: string };
};

class TypedEventEmitter<TEvents extends Record<string, any>> {
  private listeners = new Map<keyof TEvents, Set<Function>>();

  on<K extends keyof TEvents>(
    event: K,
    callback: (data: TEvents[K]) => void
  ): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);
    
    // Return unsubscribe function
    return () => this.off(event, callback);
  }

  once<K extends keyof TEvents>(
    event: K,
    callback: (data: TEvents[K]) => void
  ): () => void {
    const wrapper = (data: TEvents[K]) => {
      callback(data);
      this.off(event, wrapper);
    };
    return this.on(event, wrapper);
  }

  emit<K extends keyof TEvents>(event: K, data: TEvents[K]): void {
    this.listeners.get(event)?.forEach(callback => callback(data));
  }

  off<K extends keyof TEvents>(event: K, callback: (data: TEvents[K]) => void): void {
    this.listeners.get(event)?.delete(callback);
  }

  clear(): void {
    this.listeners.clear();
  }

  hasListeners<K extends keyof TEvents>(event: K): boolean {
    return (this.listeners.get(event)?.size || 0) > 0;
  }

  listenerCount<K extends keyof TEvents>(event: K): number {
    return this.listeners.get(event)?.size || 0;
  }
}

// Usage
const eventBus = new TypedEventEmitter<EventMap>();

// Type-safe handlers
eventBus.on('userLogin', (data) => {
  console.log('User ' + data.userId + ' logged in at ' + data.timestamp);
});

const unsubscribe = eventBus.on('message', (data) => {
  console.log(data.sender + ': ' + data.text);
});

eventBus.once('error', (data) => {
  console.error('Error in ' + data.context + ': ' + data.error.message);
});

// Type-safe emit
eventBus.emit('userLogin', { userId: '123', timestamp: new Date() });
eventBus.emit('message', { text: 'Hello World', sender: 'Alice' });
eventBus.emit('error', { error: new Error('Something failed'), context: 'API' });

// Unsubscribe
unsubscribe();

// This would cause a type error:
// eventBus.emit('userLogin', { userId: '123' }); // Error: missing timestamp

// Async event emitter
class AsyncEventEmitter<TEvents extends Record<string, any>> extends TypedEventEmitter<TEvents> {
  async emitAsync<K extends keyof TEvents>(event: K, data: TEvents[K]): Promise<void> {
    const handlers = this.listeners.get(event);
    if (!handlers) return;
    
    await Promise.all([...handlers].map(handler => handler(data)));
  }
}`,
      output: "Event emitter enforces correct payload types for each event",
      note: "Generics provide compile-time safety for event subscriptions"
    }
  ]
};

export default problems;