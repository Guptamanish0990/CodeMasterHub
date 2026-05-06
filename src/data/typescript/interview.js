// /data/typescript/interview.js

export const interview = {
  fresher: [
    // ========== BASICS & TYPES (1-10) ==========
    {
      question: "What is TypeScript? Why use it over JavaScript?",
      answer: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It provides static typing, early error detection, better IDE support, and enhanced code maintainability.",
      example: "function add(a: number, b: number): number {\n  return a + b;\n}\n// This would cause a compile-time error\nadd('hello', 'world'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'",
      output: "Type error caught at compile time instead of runtime",
      note: "TypeScript compiles to JavaScript - any valid JS is valid TS"
    },
    {
      question: "What are the basic types in TypeScript?",
      answer: "Basic types include: string, number, boolean, array, tuple, enum, any, void, null, undefined, never, and unknown.",
      example: "let name: string = 'John';\nlet age: number = 25;\nlet isActive: boolean = true;\nlet hobbies: string[] = ['reading', 'coding'];\nlet tuple: [string, number] = ['age', 30];\nenum Color { Red, Green, Blue }\nlet color: Color = Color.Red;",
      output: "Variables with type checking enables catching type errors early",
      note: "TypeScript infers types when not explicitly specified"
    },
    {
      question: "What is the difference between 'let' and 'var' in TypeScript?",
      answer: "let is block-scoped, while var is function-scoped. TypeScript uses the same scoping rules as JavaScript ES6+.",
      example: "if (true) {\n  var x = 10;\n  let y = 20;\n}\nconsole.log(x); // 10 - accessible outside block\nconsole.log(y); // Error: y is not defined (block-scoped)",
      output: "let prevents access outside block, var allows it",
      note: "Always prefer 'let' and 'const' over 'var' for better scoping"
    },
    {
      question: "What are TypeScript arrays and tuples?",
      answer: "Arrays hold multiple values of same type. Tuples are fixed-length arrays where each position has specific type.",
      example: "let numbers: number[] = [1, 2, 3, 4];\nlet names: Array<string> = ['Alice', 'Bob'];\nlet person: [string, number] = ['John', 25];\nlet rgb: [number, number, number] = [255, 0, 128];",
      output: "Array elements all same type; tuple elements have specific types per position",
      note: "Use tuples for fixed-size arrays with known types per index"
    },
    {
      question: "What is the 'any' type and when to use it?",
      answer: "Any disables type checking for a variable, allowing it to hold any value. Use sparingly when migrating JS to TS or dealing with dynamic content.",
      example: "let dynamic: any = 'hello';\ndynamic = 42; // OK\ndynamic = true; // OK\ndynamic.toUpperCase(); // Might crash at runtime if not string",
      output: "any bypasses all type checking, providing no safety",
      note: "Avoid any when possible; use unknown for safer alternatives"
    },
    {
      question: "What is the 'unknown' type?",
      answer: "Unknown is type-safe alternative to any. You must perform type checking before using unknown values.",
      example: "let data: unknown = fetchData();\n// data.toUpperCase(); // Error: Object is of type 'unknown'\nif (typeof data === 'string') {\n  console.log(data.toUpperCase()); // OK after type narrowing\n}",
      output: "unknown requires type checking before usage, providing safety",
      note: "Prefer unknown over any when the type is truly uncertain"
    },
    {
      question: "What is the 'void' type in TypeScript?",
      answer: "Void represents absence of a return value, typically used for functions that don't return anything.",
      example: "function logMessage(message: string): void {\n  console.log(message);\n  // No return statement\n}\nlet unusable: void = undefined; // void variables can only be assigned undefined or null",
      output: "void functions don't return a value",
      note: "Declaring void variables is rarely useful in practice"
    },
    {
      question: "What is the 'never' type?",
      answer: "Never represents values that never occur, like functions that always throw errors or have infinite loops.",
      example: "function throwError(message: string): never {\n  throw new Error(message);\n}\nfunction infiniteLoop(): never {\n  while (true) {}\n}\n// never is useful for exhaustive checking in switch statements",
      output: "never indicates function never completes normally",
      note: "never is better than void for functions that always throw"
    },
    {
      question: "What is type inference in TypeScript?",
      answer: "TypeScript automatically infers types when not explicitly specified, based on the assigned value.",
      example: "let name = 'John'; // TypeScript infers string\nlet age = 25; // TypeScript infers number\nlet numbers = [1, 2, 3]; // TypeScript infers number[]\n// name = 42; // Error: Type 'number' is not assignable to type 'string'",
      output: "Variables have inferred types based on initial values",
      note: "Explicit types are optional when TypeScript can infer clearly"
    },
    {
      question: "What is union type in TypeScript?",
      answer: "Union types allow a value to be one of several types, using the pipe (|) symbol.",
      example: "let id: string | number;\nid = 'abc123'; // OK\nid = 456; // OK\n// id = true; // Error: Type 'boolean' is not assignable\ntype Status = 'active' | 'inactive' | 'pending';\nlet userStatus: Status = 'active';",
      output: "Variable can hold any of the specified types",
      note: "Use type narrowing (typeof, instanceof) to work with unions safely"
    },

    // ========== FUNCTIONS & INTERFACES (11-20) ==========
    {
      question: "How do you type function parameters and return values?",
      answer: "Specify parameter types after parameter names and return type after parentheses with colon.",
      example: "function add(a: number, b: number): number {\n  return a + b;\n}\nfunction greet(name: string, greeting?: string): string {\n  return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;\n}\nfunction multiply(a: number, b: number = 1): number {\n  return a * b;\n}",
      output: "Function parameters and return values are type-checked",
      note: "Optional parameters are marked with '?'"
    },
    {
      question: "What are optional and default parameters?",
      answer: "Optional parameters are marked with '?' and can be omitted. Default parameters have default values if not provided.",
      example: "function buildName(firstName: string, lastName?: string): string {\n  return lastName ? `${firstName} ${lastName}` : firstName;\n}\nfunction greet(name: string, greeting: string = 'Hello'): string {\n  return `${greeting}, ${name}`;\n}\nbuildName('John'); // OK\nbuildName('John', 'Doe'); // OK",
      output: "Optional parameters can be omitted; default parameters have fallback values",
      note: "Optional parameters must come after required parameters"
    },
    {
      question: "What are rest parameters in TypeScript?",
      answer: "Rest parameters allow functions to accept any number of arguments as an array, using the ... syntax.",
      example: "function sum(...numbers: number[]): number {\n  return numbers.reduce((total, num) => total + num, 0);\n}\nconsole.log(sum(1, 2, 3)); // 6\nconsole.log(sum(1, 2, 3, 4, 5)); // 15",
      output: "Rest parameters collect multiple arguments into an array",
      note: "Rest parameter must be last in the parameter list"
    },
    {
      question: "What is an interface in TypeScript?",
      answer: "Interface defines the structure that an object must follow, specifying properties and their types.",
      example: "interface Person {\n  name: string;\n  age: number;\n  email?: string; // optional property\n  readonly id: number; // read-only property\n}\nconst user: Person = {\n  name: 'John',\n  age: 25,\n  id: 1\n};\n// user.id = 2; // Error: Cannot assign to 'id' because it's read-only",
      output: "Interface defines object shape with required and optional properties",
      note: "Interfaces can be extended, implemented by classes"
    },
    {
      question: "What is the difference between interface and type alias?",
      answer: "Interfaces are extendable and can be merged through declaration merging. Type aliases can represent primitives, unions, and more but cannot be merged.",
      example: "// Interface can be extended\ninterface Animal { name: string; }\ninterface Dog extends Animal { breed: string; }\n\n// Type alias for primitive\ntype ID = string | number;\n\n// Declaration merging\ninterface User { name: string; }\ninterface User { age: number; } // Merges\n// type cannot be redeclared",
      output: "Interfaces merge; type aliases cannot merge",
      note: "Use interface for objects, type for unions/primitive aliases"
    },
    {
      question: "How do you make properties optional in an interface?",
      answer: "Use the '?' modifier after the property name to mark it as optional.",
      example: "interface Config {\n  url: string;\n  timeout?: number;\n  retries?: number;\n}\nconst config1: Config = { url: 'https://api.example.com' };\nconst config2: Config = { url: 'https://api.example.com', timeout: 5000 };",
      output: "Optional properties can be omitted when creating objects",
      note: "Optional properties are undefined when accessed if not provided"
    },
    {
      question: "What are read-only properties?",
      answer: "Read-only properties cannot be modified after they're initialized, marked with the 'readonly' keyword.",
      example: "interface Point {\n  readonly x: number;\n  readonly y: number;\n}\nlet point: Point = { x: 10, y: 20 };\n// point.x = 30; // Error: Cannot assign to 'x' because it's read-only\n\nclass Car {\n  readonly brand: string;\n  constructor(brand: string) {\n    this.brand = brand;\n  }\n}",
      output: "Read-only properties can only be set during initialization",
      note: "Use readonly for values that shouldn't change after creation"
    },
    {
      question: "What are function types in TypeScript?",
      answer: "Function types describe the shape of functions including parameter types and return type.",
      example: "type MathOperation = (a: number, b: number) => number;\nconst add: MathOperation = (a, b) => a + b;\nconst multiply: MathOperation = (a, b) => a * b;\n\n// Interface for function\ninterface StringTransformer {\n  (input: string): string;\n}\nconst toUpper: StringTransformer = (str) => str.toUpperCase();",
      output: "Function type defines parameter and return types",
      note: "Function types enable type-safe callbacks"
    },
    {
      question: "What is function overloading in TypeScript?",
      answer: "Function overloading allows multiple function signatures for the same function, with different parameter types.",
      example: "function reverse(value: string): string;\nfunction reverse(value: number[]): number[];\nfunction reverse(value: string | number[]): string | number[] {\n  if (typeof value === 'string') {\n    return value.split('').reverse().join('');\n  }\n  return [...value].reverse();\n}\nreverse('hello'); // Returns 'olleh'\nreverse([1, 2, 3]); // Returns [3, 2, 1]",
      output: "Same function behaves differently based on input type",
      note: "Only one implementation signature, multiple overload signatures"
    },
    {
      question: "What is type assertion?",
      answer: "Type assertion tells TypeScript to treat a value as a specific type when you know more about the type than TypeScript does.",
      example: "let someValue: unknown = 'Hello World';\nlet strLength: number = (someValue as string).length;\n// Alternative syntax (not allowed in JSX)\nlet anotherLength: number = (<string>someValue).length;\n\nconst myInput = document.getElementById('myInput') as HTMLInputElement;\nmyInput.value = 'New Value'; // TypeScript knows it's an input element",
      output: "TypeScript compiles without type errors, trusting the assertion",
      note: "Use 'as' syntax in React/JSX; angle brackets in pure TS"
    },

    // ========== CLASSES & OBJECTS (21-30) ==========
    {
      question: "How do you create a class in TypeScript?",
      answer: "Classes in TypeScript extend ES6 classes with type annotations for properties and parameters.",
      example: "class Person {\n  name: string;\n  age: number;\n  \n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  greet(): string {\n    return `Hello, I'm ${this.name}`;\n  }\n}\nconst john = new Person('John', 25);",
      output: "Class with typed properties and methods",
      note: "Properties must be declared before use in constructor"
    },
    {
      question: "What are access modifiers in TypeScript?",
      answer: "Access modifiers control visibility: public (default, accessible anywhere), private (only within class), protected (class and subclasses).",
      example: "class Animal {\n  public name: string;\n  private age: number;\n  protected species: string;\n  \n  constructor(name: string, age: number, species: string) {\n    this.name = name;\n    this.age = age;\n    this.species = species;\n  }\n}\nclass Dog extends Animal {\n  bark() {\n    console.log(this.name); // OK - public\n    // console.log(this.age); // Error - private\n    console.log(this.species); // OK - protected\n  }\n}",
      output: "Properties have different visibility levels",
      note: "Private members are not accessible in subclasses"
    },
    {
      question: "What are parameter properties in TypeScript?",
      answer: "Parameter properties allow creating and initializing class members in the constructor parameters with a single declaration.",
      example: "class Person {\n  constructor(\n    public name: string,\n    private age: number,\n    protected email: string\n  ) {}\n  \n  greet() {\n    console.log(`Hello, I'm ${this.name}`);\n  }\n}\nconst person = new Person('John', 25, 'john@email.com');\nconsole.log(person.name); // OK\n// console.log(person.age); // Error - private",
      output: "Properties are automatically created and initialized",
      note: "Parameter properties reduce boilerplate code significantly"
    },
    {
      question: "What is inheritance in TypeScript?",
      answer: "Inheritance allows a class to extend another class, inheriting its properties and methods using the 'extends' keyword.",
      example: "class Animal {\n  constructor(public name: string) {}\n  move(): void {\n    console.log(`${this.name} is moving`);\n  }\n}\nclass Dog extends Animal {\n  bark(): void {\n    console.log(`${this.name} says Woof!`);\n  }\n}\nconst dog = new Dog('Buddy');\ndog.move(); // Inherited method\ndog.bark(); // Own method",
      output: "Subclass inherits all properties and methods from parent",
      note: "Use 'super()' to call parent constructor in child class"
    },
    {
      question: "What is method overriding?",
      answer: "Method overriding allows a subclass to provide its own implementation of a method inherited from parent class.",
      example: "class Animal {\n  makeSound(): void {\n    console.log('Animal makes sound');\n  }\n}\nclass Cat extends Animal {\n  makeSound(): void {\n    console.log('Meow!');\n  }\n}\nconst animal = new Animal();\nconst cat = new Cat();\nanimal.makeSound(); // 'Animal makes sound'\ncat.makeSound(); // 'Meow!'",
      output: "Subclass method overrides parent method implementation",
      note: "Override must maintain same signature as parent method"
    },
    {
      question: "What are abstract classes?",
      answer: "Abstract classes cannot be instantiated and may contain abstract methods that must be implemented by subclasses.",
      example: "abstract class Shape {\n  abstract getArea(): number;\n  \n  getDescription(): string {\n    return `Area: ${this.getArea()}`;\n  }\n}\nclass Circle extends Shape {\n  constructor(private radius: number) {\n    super();\n  }\n  getArea(): number {\n    return Math.PI * this.radius ** 2;\n  }\n}\n// const shape = new Shape(); // Error: Cannot create instance of abstract class",
      output: "Abstract classes provide base functionality for inheritance",
      note: "Abstract methods have no implementation in base class"
    },
    {
      question: "What is the 'implements' keyword?",
      answer: "Implements forces a class to adhere to a specific interface structure.",
      example: "interface Drawable {\n  draw(): void;\n  color: string;\n}\nclass Circle implements Drawable {\n  color: string;\n  constructor(color: string) {\n    this.color = color;\n  }\n  draw(): void {\n    console.log(`Drawing a ${this.color} circle`);\n  }\n}\n// Must implement all properties and methods from interface",
      output: "Class must implement all members declared in the interface",
      note: "A class can implement multiple interfaces"
    },
    {
      question: "What are static properties and methods?",
      answer: "Static members belong to the class itself rather than instances, accessed using the class name.",
      example: "class MathUtils {\n  static PI: number = 3.14159;\n  \n  static calculateCircleArea(radius: number): number {\n    return this.PI * radius ** 2;\n  }\n}\nconsole.log(MathUtils.PI); // 3.14159\nconsole.log(MathUtils.calculateCircleArea(5)); // 78.53975\nconst utils = new MathUtils();\n// utils.PI; // Error: Property 'PI' does not exist on type 'MathUtils'",
      output: "Static members accessed via class name, not instances",
      note: "Use static for utility functions or constants"
    },
    {
      question: "What is the 'this' type in TypeScript?",
      answer: "The 'this' type represents the type of the current context and enables fluent interfaces.",
      example: "class Calculator {\n  value: number = 0;\n  \n  add(num: number): this {\n    this.value += num;\n    return this;\n  }\n  \n  multiply(num: number): this {\n    this.value *= num;\n    return this;\n  }\n}\nconst calc = new Calculator();\nconst result = calc.add(5).multiply(2).add(3).value;\nconsole.log(result); // 13",
      output: "Methods return 'this' enabling method chaining",
      note: "'this' type works correctly with inheritance"
    },
    {
      question: "What are getters and setters in TypeScript?",
      answer: "Getters and setters provide controlled access to class properties with additional logic.",
      example: "class Employee {\n  private _salary: number = 0;\n  \n  get salary(): number {\n    return this._salary;\n  }\n  \n  set salary(value: number) {\n    if (value < 0) {\n      throw new Error('Salary cannot be negative');\n    }\n    this._salary = value;\n  }\n}\nconst emp = new Employee();\nemp.salary = 50000; // Uses setter\nconsole.log(emp.salary); // Uses getter, outputs 50000",
      output: "Properties accessed like normal but with validation logic",
      note: "Getters appear as properties, not methods"
    },

    // ========== GENERICS & UTILITIES (31-40) ==========
    {
      question: "What are generics in TypeScript?",
      answer: "Generics create reusable components that work with multiple types while maintaining type safety.",
      example: "function identity<T>(arg: T): T {\n  return arg;\n}\nlet output1 = identity<string>('hello'); // Type: string\nlet output2 = identity<number>(42); // Type: number\n// With type inference\nlet output3 = identity('world'); // TypeScript infers string",
      output: "Function preserves type information through type parameter",
      note: "Generics work with functions, classes, and interfaces"
    },
    {
      question: "How do you create a generic interface?",
      answer: "Generic interfaces define structures that work with type parameters, providing flexibility.",
      example: "interface Box<T> {\n  value: T;\n  getValue(): T;\n  setValue(newValue: T): void;\n}\nconst stringBox: Box<string> = {\n  value: 'hello',\n  getValue() { return this.value; },\n  setValue(newValue) { this.value = newValue; }\n};\nconst numberBox: Box<number> = {\n  value: 42,\n  getValue() { return this.value; },\n  setValue(newValue) { this.value = newValue; }\n};",
      output: "Interface works with any type specified at usage",
      note: "Type parameter T can be named anything descriptive"
    },
    {
      question: "What is a generic class?",
      answer: "Generic classes have type parameters that can be used throughout the class, making them reusable for different types.",
      example: "class Stack<T> {\n  private items: T[] = [];\n  \n  push(item: T): void {\n    this.items.push(item);\n  }\n  \n  pop(): T | undefined {\n    return this.items.pop();\n  }\n  \n  peek(): T | undefined {\n    return this.items[this.items.length - 1];\n  }\n}\nconst numberStack = new Stack<number>();\nnumberStack.push(1);\nnumberStack.push(2);\nconst top = numberStack.pop(); // TypeScript knows it's number | undefined",
      output: "Class works with different types while maintaining type safety",
      note: "Type parameter is specified when creating instance"
    },
    {
      question: "What are generic constraints?",
      answer: "Generic constraints restrict the types that can be used with a generic to those that satisfy certain conditions.",
      example: "interface HasLength {\n  length: number;\n}\nfunction logLength<T extends HasLength>(item: T): T {\n  console.log(item.length);\n  return item;\n}\nlogLength('hello'); // OK - string has length\nlogLength([1, 2, 3]); // OK - array has length\n// logLength(123); // Error - number doesn't have length property",
      output: "Generic only accepts types that satisfy the constraint",
      note: "Use 'extends' keyword to add constraints to type parameters"
    },
    {
      question: "What is keyof operator in TypeScript?",
      answer: "Keyof operator creates a union type of all property keys of a type.",
      example: "interface Person {\n  name: string;\n  age: number;\n  email: string;\n}\ntype PersonKeys = keyof Person; // 'name' | 'age' | 'email'\n\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\nconst person: Person = { name: 'John', age: 25, email: 'john@email.com' };\nconst name = getProperty(person, 'name'); // Type: string\nconst age = getProperty(person, 'age'); // Type: number\n// getProperty(person, 'invalid'); // Error",
      output: "Keyof creates union of all property names",
      note: "Keyof is commonly used with generics for type-safe property access"
    },
    {
      question: "What is the 'in' operator in TypeScript?",
      answer: "The 'in' operator is used in mapped types to iterate over union of keys to create new types.",
      example: "type Options = 'width' | 'height' | 'color';\ntype OptionFlags = {\n  [K in Options]: boolean;\n};\n// Result type: { width: boolean; height: boolean; color: boolean; }\n\ninterface Person {\n  name: string;\n  age: number;\n}\ntype ReadonlyPerson = {\n  readonly [K in keyof Person]: Person[K];\n};",
      output: "Mapped type transforms each property in the union",
      note: "The 'in' operator iterates over keys in mapped types"
    },
    {
      question: "What is the 'typeof' operator in TypeScript?",
      answer: "The typeof operator captures the type of a variable or property for use in type annotations.",
      example: "const user = {\n  name: 'John',\n  age: 25,\n  email: 'john@email.com'\n};\ntype User = typeof user; // { name: string; age: number; email: string; }\n\nfunction greet(person: typeof user) {\n  console.log(`Hello ${person.name}`);\n}\n\n// Get return type of function\nfunction getConfig() {\n  return { api: 'https://api.com', timeout: 5000 };\n}\ntype Config = ReturnType<typeof getConfig>;",
      output: "typeof extracts type from JavaScript value",
      note: "typeof works on variables, not on types"
    },
    {
      question: "What are utility types? Give examples.",
      answer: "Built-in types that transform other types: Partial, Readonly, Pick, Omit, Record, Required, Exclude, Extract.",
      example: "interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\ntype PartialTodo = Partial<Todo>; // All optional\ntype ReadonlyTodo = Readonly<Todo>; // All readonly\ntype TodoPreview = Pick<Todo, 'title' | 'completed'>;\ntype WithoutDesc = Omit<Todo, 'description'>;\ntype RecordType = Record<'a' | 'b', number>; // { a: number; b: number; }",
      output: "Utility types create new types from existing ones",
      note: "Utility types save time writing repetitive type definitions"
    },
    {
      question: "What is the 'Partial' utility type?",
      answer: "Partial makes all properties of a type optional, useful for update operations.",
      example: "interface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\nfunction updateUser(id: number, updates: Partial<User>): void {\n  // Update only provided fields\n  console.log(`Updating user ${id} with`, updates);\n}\nupdateUser(1, { name: 'New Name' }); // Only name provided\nupdateUser(2, { email: 'new@email.com', age: 30 }); // Multiple fields",
      output: "Partial allows partial updates without requiring all fields",
      note: "ReturnType uses Partial for patch operations"
    },
    {
      question: "What is the 'Record' utility type?",
      answer: "Record constructs an object type with specified keys and value type.",
      example: "type Page = 'home' | 'about' | 'contact';\ntype PageInfo = {\n  title: string;\n  url: string;\n};\nconst pages: Record<Page, PageInfo> = {\n  home: { title: 'Home', url: '/' },\n  about: { title: 'About', url: '/about' },\n  contact: { title: 'Contact', url: '/contact' }\n};\n\n// With primitive value type\nconst scores: Record<string, number> = {\n  alice: 95,\n  bob: 87,\n  charlie: 92\n};",
      output: "Record ensures all specified keys exist with correct value type",
      note: "Record is great for dictionaries and index signatures"
    },

    // ========== ADVANCED FEATURES (41-50) ==========
    {
      question: "What are conditional types in TypeScript?",
      answer: "Conditional types select one of two possible types based on a condition test using the extends keyword.",
      example: "type IsString<T> = T extends string ? true : false;\ntype A = IsString<'hello'>; // true\ntype B = IsString<number>; // false\n\ntype TypeName<T> =\n  T extends string ? 'string' :\n  T extends number ? 'number' :\n  T extends boolean ? 'boolean' :\n  'object';\ntype Name1 = TypeName<string>; // 'string'\ntype Name2 = TypeName<42>; // 'number'",
      output: "Conditional type evaluates to different types based on condition",
      note: "Conditional types distribute over union types"
    },
    {
      question: "What is the 'infer' keyword in TypeScript?",
      answer: "Infer allows you to declare a type variable inside a conditional type to extract and reuse types.",
      example: "type ArrayElement<T> = T extends (infer U)[] ? U : never;\ntype Element = ArrayElement<string[]>; // string\n\nfunction getReturnType<T extends (...args: any[]) => any>(fn: T): T extends (...args: any[]) => infer R ? R : never {\n  return {} as any;\n}\n\n// Extract Promise resolve type\ntype UnwrapPromise<T> = T extends Promise<infer U> ? U : T;\ntype Result = UnwrapPromise<Promise<string>>; // string",
      output: "Infer extracts type information from larger types",
      note: "infer can only be used in conditional type extends clause"
    },
    {
      question: "What are mapped types in TypeScript?",
      answer: "Mapped types transform existing types by iterating over their properties using the in operator.",
      example: "type Readonly<T> = {\n  readonly [K in keyof T]: T[K];\n};\n\ntype Nullable<T> = {\n  [K in keyof T]: T[K] | null;\n};\n\ninterface User {\n  name: string;\n  age: number;\n  email: string;\n}\ntype ReadonlyUser = Readonly<User>;\ntype NullableUser = Nullable<User>;\n\ntype Mutable<T> = {\n  -readonly [K in keyof T]: T[K];\n};",
      output: "Mapped type transforms each property based on rules",
      note: "Use '+' or '-' modifiers to add or remove readonly/optional"
    },
    {
      question: "What are template literal types?",
      answer: "Template literal types create string types by interpolating other types into strings.",
      example: "type Color = 'red' | 'green' | 'blue';\ntype ColorClass = `bg-${Color}`; // 'bg-red' | 'bg-green' | 'bg-blue'\n\ntype Size = 'sm' | 'md' | 'lg';\ntype ButtonVariant = `${Size}-button`; // 'sm-button' | 'md-button' | 'lg-button'\n\ntype Margin = 'small' | 'medium' | 'large';\ntype Spacing = `margin-${Margin}`;\nconst margin: Spacing = 'margin-small'; // OK\n\n// Combining multiple unions\ntype Horizontal = 'left' | 'right';\ntype Vertical = 'top' | 'bottom';\ntype Position = `${Vertical}-${Horizontal}`; // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",
      output: "Template literal types generate all possible string combinations",
      note: "Great for generating CSS class names, event handlers, etc."
    },
    {
      question: "What are decorators in TypeScript?",
      answer: "Decorators are experimental features that add metadata and modify behavior of classes, methods, and properties.",
      example: "function Logger(target: Function) {\n  console.log(`Class ${target.name} was created`);\n}\n\n@Logger\nclass Person {\n  name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\nfunction Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n  const originalMethod = descriptor.value;\n  descriptor.value = function(...args: any[]) {\n    console.log(`Calling ${propertyKey} with`, args);\n    return originalMethod.apply(this, args);\n  };\n}\n\nclass Calculator {\n  @Log\n  add(a: number, b: number): number {\n    return a + b;\n  }\n}",
      output: "Decorators run at runtime and can modify class behavior",
      note: "Decorators are experimental and need 'experimentalDecorators' flag"
    },
    {
      question: "What is declaration merging in TypeScript?",
      answer: "Declaration merging combines multiple declarations with the same name into a single definition.",
      example: "// Interface merging\ninterface Box {\n  height: number;\n}\ninterface Box {\n  width: number;\n}\n// Result interface Box has both height and width\n\n// Namespace merging\nnamespace Animals {\n  export class Dog {}\n}\nnamespace Animals {\n  export class Cat {}\n}\n// Both Dog and Cat are in Animals namespace\n\n// Module augmentation\ndeclare module './person' {\n  interface Person {\n    age: number;\n  }\n}",
      output: "Types are merged from multiple declarations",
      note: "Declaration merging works for interfaces, namespaces, and modules"
    },
    {
      question: "What are ambient modules and declarations?",
      answer: "Ambient declarations describe the shape of existing JavaScript code without implementing it.",
      example: "// declaration file: my-library.d.ts\ndeclare module 'my-library' {\n  export function doSomething(): void;\n  export const version: string;\n  export interface Config {\n    apiUrl: string;\n    timeout: number;\n  }\n}\n\n// Using in TypeScript\nimport { doSomething, version } from 'my-library';\ndoSomething(); // Works without implementation\n\n// Ambient variable\ndeclare var process: {\n  env: {\n    NODE_ENV: string;\n  };\n};",
      output: "Types safely describe external JavaScript libraries",
      note: "Ambient declarations don't produce JavaScript output"
    },
    {
      question: "What is type narrowing in TypeScript?",
      answer: "Type narrowing reduces a union type to a more specific type through checks like typeof, instanceof, or custom type guards.",
      example: "function processValue(value: string | number | boolean) {\n  if (typeof value === 'string') {\n    return value.toUpperCase(); // Type is string\n  }\n  if (typeof value === 'number') {\n    return value.toFixed(2); // Type is number\n  }\n  return value ? 'Yes' : 'No'; // Type is boolean\n}\n\n// Using instanceof\nclass Dog { bark() {} }\nclass Cat { meow() {} }\nfunction makeSound(animal: Dog | Cat) {\n  if (animal instanceof Dog) {\n    animal.bark(); // Type is Dog\n  } else {\n    animal.meow(); // Type is Cat\n  }\n}",
      output: "TypeScript understands narrowed types within condition blocks",
      note: "Type narrowing is automatic with typeof, instanceof, and in"
    },
    {
      question: "What is a type predicate (user-defined type guard)?",
      answer: "A type predicate is a function that returns a boolean with syntax 'parameter is Type' to narrow types.",
      example: "interface Fish {\n  swim(): void;\n}\ninterface Bird {\n  fly(): void;\n}\n\nfunction isFish(pet: Fish | Bird): pet is Fish {\n  return (pet as Fish).swim !== undefined;\n}\n\nfunction move(pet: Fish | Bird) {\n  if (isFish(pet)) {\n    pet.swim(); // TypeScript knows it's Fish\n  } else {\n    pet.fly(); // TypeScript knows it's Bird\n  }\n}\n\n// With class instance check\nfunction isStringArray(value: unknown): value is string[] {\n  return Array.isArray(value) && value.every(item => typeof item === 'string');\n}",
      output: "Type predicate informs TypeScript about type after function execution",
      note: "Type predicates are more powerful than regular boolean returns"
    },
    {
      question: "What is the difference between 'type' and 'interface' when to use which?",
      answer: "Use interface for object shapes with declaration merging; use type for unions, primitives, and complex type operations.",
      example: "// Use interface for API contracts\ninterface ApiResponse {\n  data: unknown;\n  status: number;\n  message: string;\n}\n\n// Use type for unions\ntype Status = 'success' | 'error' | 'loading';\n\n// Use type for utility types\ntype Nullable<T> = T | null;\n\n// Interface for object extension\ninterface User {\n  name: string;\n}\ninterface User {\n  age: number; // Merges with above\n}\n\n// Type for functions\ntype MathFunction = (a: number, b: number) => number;",
      output: "Interface is easier to extend, type is more flexible for complex types",
      note: "Type aliases don't support declaration merging"
    }
  ],

  experienced: [
    // ========== ADVANCED GENERICS (51-60) ==========
    {
      question: "How to create recursive types in TypeScript?",
      answer: "Recursive types reference themselves, allowing definition of nested structures like JSON, trees, or linked lists.",
      example: "type JsonValue =\n  | string\n  | number\n  | boolean\n  | null\n  | JsonValue[]\n  | { [key: string]: JsonValue };\n\nconst data: JsonValue = {\n  name: 'John',\n  age: 30,\n  hobbies: ['reading', 'coding'],\n  address: {\n    city: 'NYC',\n    zip: 10001\n  }\n};\n\n// Linked list\ninterface ListNode<T> {\n  value: T;\n  next?: ListNode<T>;\n}\nconst list: ListNode<number> = {\n  value: 1,\n  next: { value: 2, next: { value: 3 } }\n};",
      output: "Type can represent infinitely nested structures",
      note: "Recursive types can cause performance issues if too deep"
    },
    {
      question: "What are conditional types with infer in depth?",
      answer: "Infer extracts type information from complex types within conditional type branches.",
      example: "// Extract array element type\ntype ArrayElementType<T> = T extends (infer U)[] ? U : never;\n\n// Extract function return type\ntype ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;\n\n// Extract Promise resolve type\ntype Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T;\ntype Result = Awaited<Promise<Promise<string>>>; // string\n\n// Extract parameters from function\ntype Parameters<T> = T extends (...args: infer P) => any ? P : never;\n\n// Advanced: Extract from tuple\ntype FirstElement<T extends any[]> = T extends [infer First, ...any[]] ? First : never;\ntype First = FirstElement<[1, 2, 3]>; // 1",
      output: "infer captures types to be used in transformed types",
      note: "infer creates temporary type variables only within conditional types"
    },
    {
      question: "How to implement the Partial utility type yourself?",
      answer: "Partial<T> makes all properties optional using mapped types and the '?' modifier.",
      example: "type MyPartial<T> = {\n  [K in keyof T]?: T[K];\n};\n\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\ntype PartialUser = MyPartial<User>;\n// Equivalent to: { id?: number; name?: string; email?: string; }\n\n// Advanced: DeepPartial (recursive)\ntype DeepPartial<T> = {\n  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];\n};\n\ninterface Nested {\n  user: {\n    name: string;\n    address: {\n      city: string;\n      zip: number;\n    };\n  };\n}\ntype DeepPartialNested = DeepPartial<Nested>;",
      output: "Custom Partial implementation works the same as built-in",
      note: "Understanding utility type implementation helps create custom ones"
    },
    {
      question: "How to implement the Pick utility type yourself?",
      answer: "Pick<T, K> selects specific properties from a type using mapped types with key constraints.",
      example: "type MyPick<T, K extends keyof T> = {\n  [P in K]: T[P];\n};\n\ninterface Product {\n  id: number;\n  name: string;\n  price: number;\n  description: string;\n  inStock: boolean;\n}\ntype ProductPreview = MyPick<Product, 'id' | 'name' | 'price'>;\n// Result: { id: number; name: string; price: number; }\n\n// With multiple keys\ntype ProductBasic = MyPick<Product, 'id' | 'name'>;\n\n// Using string literal union\ntype ProductKeys = 'id' | 'name';\ntype ProductBasic2 = MyPick<Product, ProductKeys>;",
      output: "Pick creates new type with only selected properties",
      note: "K extends keyof T ensures only valid property names are used"
    },
    {
      question: "How to implement the Omit utility type yourself?",
      answer: "Omit<T, K> removes specified properties using Exclude to filter out keys.",
      example: "type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;\n\ninterface Product {\n  id: number;\n  name: string;\n  price: number;\n  description: string;\n  createdAt: Date;\n}\ntype ProductWithoutMetadata = MyOmit<Product, 'createdAt' | 'description'>;\n// Result: { id: number; name: string; price: number; }\n\n// Alternative implementation\ntype MyOmit2<T, K extends keyof T> = {\n  [P in keyof T as P extends K ? never : P]: T[P];\n};\n\ntype WithoutId = MyOmit2<Product, 'id'>;",
      output: "Omit creates type excluding specific properties",
      note: "Key remapping (as clause) provides cleaner implementation"
    },
    {
      question: "What is key remapping in mapped types?",
      answer: "Key remapping allows transforming property names using the 'as' clause in mapped types.",
      example: "type Getters<T> = {\n  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n};\n\ninterface Person {\n  name: string;\n  age: number;\n}\ntype PersonGetters = Getters<Person>;\n// Result: { getName: () => string; getAge: () => number; }\n\ntype RemoveReadonly<T> = {\n  -readonly [K in keyof T]: T[K];\n};\n\ntype OptionalToRequired<T> = {\n  [K in keyof T]-?: T[K];\n};\n\ntype PrefixKeys<T, P extends string> = {\n  [K in keyof T as `${P}${string & K}`]: T[K];\n};\ntype PrefixedPerson = PrefixKeys<Person, 'user_'>;\n// Result: { user_name: string; user_age: number; }",
      output: "Key remapping transforms property names at type level",
      note: "Use 'as' clause for sophisticated type transformations"
    },
    {
      question: "What are variadic tuple types?",
      answer: "Variadic tuple types allow spreading elements in tuples and generic rest elements.",
      example: "type StringThenNumber = [string, ...number[]];\nconst arr1: StringThenNumber = ['hello', 1, 2, 3];\n\n// Generic spreading\ntype Concat<T extends any[], U extends any[]> = [...T, ...U];\ntype Result = Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]\n\n// Function with variadic tuple\ntype AnyFunction = (...args: any[]) => any;\nfunction curry<T extends any[], U extends any[], R>(\n  fn: (...args: [...T, ...U]) => R,\n  ...args: T\n): (...args: U) => R {\n  return (...rest: U) => fn(...args, ...rest);\n}\n\n// Prefix tuple\ntype PrefixTuple<T extends any[], Prefix extends any[]> = [...Prefix, ...T];\ntype WithId = PrefixTuple<[string, number], [number]>; // [number, string, number]",
      output: "Tuple types can have variable length with rest elements",
      note: "Variadic tuples enable type-safe function currying"
    },
    {
      question: "How to implement immutable data structures with TypeScript?",
      answer: "Use Readonly, ReadonlyArray, readonly modifier, and as const for immutability.",
      example: "// Readonly object\ninterface Config {\n  readonly apiUrl: string;\n  readonly timeout: number;\n}\nconst config: Config = { apiUrl: 'https://api.com', timeout: 5000 };\n// config.timeout = 10000; // Error\n\n// Readonly utility type\ntype ImmutablePoint = Readonly<{ x: number; y: number }>;\nconst point: ImmutablePoint = { x: 10, y: 20 };\n// point.x = 30; // Error\n\n// as const assertion\nconst colors = ['red', 'green', 'blue'] as const;\n// colors.push('yellow'); // Error: Property 'push' does not exist on type 'readonly [\"red\", \"green\", \"blue\"]'\n\n// Deep readonly using mapped types\ntype DeepReadonly<T> = {\n  readonly [K in keyof T]: DeepReadonly<T[K]>;\n};\ninterface Nested {\n  user: {\n    name: string;\n    address: { city: string };\n  };\n}\ntype ImmutableNested = DeepReadonly<Nested>;",
      output: "Immutable types prevent property assignment and mutation",
      note: "Use 'as const' for literal narrowest possible types"
    },
    {
      question: "What is the difference between 'as const' and 'readonly'?",
      answer: "'as const' makes entire object/array deeply readonly with literal types; 'readonly' is a shallow property modifier.",
      example: "// 'as const' for literal inference\nconst config = {\n  url: 'https://api.com',\n  method: 'GET',\n  headers: ['Content-Type'] as const\n} as const;\n// config.url = 'different'; // Error: cannot assign\n// config.headers.push('Accept'); // Error: push doesn't exist on readonly tuple\n\n// readonly modifier (shallow)\ninterface Options {\n  readonly url: string;\n  readonly headers: string[]; // Array itself is mutable\n}\nconst opts: Options = { url: 'https://api.com', headers: ['Content-Type'] };\n// opts.url = 'different'; // Error: cannot assign\nopts.headers.push('Accept'); // OK - array mutated, but reference stays same",
      output: "as const creates deeply immutable literal types; readonly only affects the property itself",
      note: "Use as const for literal values and their exact types"
    },
    {
      question: "How to use branded types for nominal typing?",
      answer: "Branded types simulate nominal typing (types distinguished by name, not just structure) using unique brand property.",
      example: "type UserId = string & { readonly __brand: unique symbol };\ntype ProductId = string & { readonly __brand: unique symbol };\n\nfunction createUserId(id: string): UserId {\n  return id as UserId;\n}\n\nfunction createProductId(id: string): ProductId {\n  return id as ProductId;\n}\n\nfunction getUserById(id: UserId) {\n  console.log(`Getting user: ${id}`);\n}\n\nconst userId = createUserId('123');\nconst productId = createProductId('456');\n\ngetUserById(userId); // OK\n// getUserById(productId); // Error: Type 'ProductId' is not assignable to type 'UserId'\n\n// With classes\nclass Tagged<Tag extends string> {\n  private __tag: Tag;\n  constructor(public value: string) {}\n}\ntype Email = Tagged<'Email'>;\ntype Phone = Tagged<'Phone'>;",
      output: "Branded types prevent mixing structurally compatible types",
      note: "Branded types add compile-time safety without runtime overhead"
    },

    // ========== ADVANCED PATTERNS (61-70) ==========
    {
      question: "What are discriminated unions and how do they work?",
      answer: "Discriminated unions combine union types with a common property (discriminant) for type narrowing.",
      example: "interface Square {\n  kind: 'square';\n  size: number;\n}\ninterface Rectangle {\n  kind: 'rectangle';\n  width: number;\n  height: number;\n}\ninterface Circle {\n  kind: 'circle';\n  radius: number;\n}\ntype Shape = Square | Rectangle | Circle;\n\nfunction getArea(shape: Shape): number {\n  switch (shape.kind) {\n    case 'square':\n      return shape.size ** 2; // shape is Square\n    case 'rectangle':\n      return shape.width * shape.height; // shape is Rectangle\n    case 'circle':\n      return Math.PI * shape.radius ** 2; // shape is Circle\n    default:\n      const exhaustive: never = shape; // Exhaustiveness check\n      return exhaustive;\n  }\n}\n\n// With discriminated union of string literals\ntype Event = \n  | { type: 'click'; x: number; y: number }\n  | { type: 'keypress'; key: string }\n  | { type: 'focus'; element: HTMLElement };\n\nfunction handleEvent(event: Event) {\n  if (event.type === 'click') {\n    console.log(`Click at ${event.x}, ${event.y}`);\n  } else if (event.type === 'keypress') {\n    console.log(`Key pressed: ${event.key}`);\n  }\n}",
      output: "Discriminant property enables precise type narrowing",
      note: "Discriminant should be literal type for best type inference"
    },
    {
      question: "What is the 'never' type's role in exhaustive checking?",
      answer: "Never ensures all possible union cases are handled; otherwise TypeScript complains about unhandled cases.",
      example: "type Color = 'red' | 'green' | 'blue';\n\nfunction getColorCode(color: Color): string {\n  switch (color) {\n    case 'red':\n      return '#FF0000';\n    case 'green':\n      return '#00FF00';\n    case 'blue':\n      return '#0000FF';\n    default:\n      const exhaustive: never = color; // If new color added, error here\n      return exhaustive;\n  }\n}\n\n// With exhaustive function\nfunction assertNever(x: never): never {\n  throw new Error(`Unexpected value: ${x}`);\n}\n\nfunction processStatus(status: 'active' | 'inactive' | 'pending'): string {\n  switch (status) {\n    case 'active': return 'User is active';\n    case 'inactive': return 'User is inactive';\n    case 'pending': return 'User is pending';\n    default: return assertNever(status);\n  }\n}",
      output: "Never ensures type safety when union types are extended",
      note: "Exhaustive checking prevents runtime errors from new enum values"
    },
    {
      question: "How to create type-safe event emitters?",
      answer: "Event emitters can be typed with generics to ensure event names match their payload types.",
      example: "type EventMap = {\n  userLogin: { userId: string; timestamp: Date };\n  userLogout: { userId: string };\n  message: { text: string; sender: string };\n};\n\nclass TypedEventEmitter<TEvents extends Record<string, any>> {\n  private listeners = new Map<keyof TEvents, Set<Function>>();\n\n  on<K extends keyof TEvents>(\n    event: K,\n    callback: (data: TEvents[K]) => void\n  ): void {\n    if (!this.listeners.has(event)) {\n      this.listeners.set(event, new Set());\n    }\n    this.listeners.get(event)!.add(callback);\n  }\n\n  emit<K extends keyof TEvents>(event: K, data: TEvents[K]): void {\n    this.listeners.get(event)?.forEach(callback => callback(data));\n  }\n\n  off<K extends keyof TEvents>(event: K, callback: (data: TEvents[K]) => void): void {\n    this.listeners.get(event)?.delete(callback);\n  }\n}\n\nconst emitter = new TypedEventEmitter<EventMap>();\nemitter.on('userLogin', (data) => {\n  console.log(`User ${data.userId} logged in at ${data.timestamp}`);\n});\nemitter.emit('userLogin', { userId: '123', timestamp: new Date() });\n// emitter.emit('userLogin', { userId: '123' }); // Error: missing timestamp",
      output: "Event emitters enforce correct payload types for each event",
      note: "Generics provide compile-time safety for event subscriptions"
    },
    {
      question: "How to implement the Builder pattern with TypeScript?",
      answer: "Builder pattern creates complex objects step by step, with TypeScript providing type safety at each step.",
      example: "class UserBuilder {\n  private user: Partial<User> = {};\n\n  setName(name: string): this {\n    this.user.name = name;\n    return this;\n  }\n\n  setAge(age: number): this {\n    this.user.age = age;\n    return this;\n  }\n\n  setEmail(email: string): this {\n    this.user.email = email;\n    return this;\n  }\n\n  build(): User {\n    if (!this.user.name || !this.user.age) {\n      throw new Error('Name and age are required');\n    }\n    return this.user as User;\n  }\n}\n\ninterface User {\n  name: string;\n  age: number;\n  email?: string;\n}\n\nconst user = new UserBuilder()\n  .setName('John')\n  .setAge(25)\n  .setEmail('john@email.com')\n  .build();\n\n// Type-safe builder with generics\ntype Builder<T> = {\n  [K in keyof T]: (value: T[K]) => Builder<T>;\n} & { build(): T };\n\nfunction createBuilder<T>(): Builder<T> {\n  let obj = {} as T;\n  const builder = {} as Builder<T>;\n  \n  for (const key of Object.keys(obj) as (keyof T)[]) {\n    builder[key] = (value: T[typeof key]) => {\n      obj[key] = value;\n      return builder;\n    };\n  }\n  \n  builder.build = () => obj;\n  return builder;\n}",
      output: "Builder pattern creates objects with fluent interface",
      note: "Method chaining requires returning 'this' from each method"
    },
    {
      question: "How to implement dependency injection with TypeScript?",
      answer: "Dependency injection provides dependencies to classes rather than creating them internally, improving testability.",
      example: "// Service interfaces\ninterface Logger {\n  log(message: string): void;\n}\n\ninterface UserRepository {\n  findById(id: number): Promise<User>;\n  save(user: User): Promise<void>;\n}\n\n// Container\nclass Container {\n  private services = new Map<string, any>();\n  private singletons = new Map<string, any>();\n\n  register<T>(token: string, factory: (container: Container) => T): void {\n    this.services.set(token, factory);\n  }\n\n  resolve<T>(token: string): T {\n    const factory = this.services.get(token);\n    if (!factory) throw new Error(`Service ${token} not registered`);\n    return factory(this);\n  }\n\n  resolveSingleton<T>(token: string): T {\n    if (this.singletons.has(token)) {\n      return this.singletons.get(token);\n    }\n    const instance = this.resolve<T>(token);\n    this.singletons.set(token, instance);\n    return instance;\n  }\n}\n\n// Service implementation\nclass ConsoleLogger implements Logger {\n  log(message: string): void {\n    console.log(`[LOG]: ${message}`);\n  }\n}\n\n// Class with injected dependencies\nclass UserService {\n  constructor(\n    private logger: Logger,\n    private userRepo: UserRepository\n  ) {}\n\n  async getUser(id: number): Promise<User | null> {\n    this.logger.log(`Fetching user ${id}`);\n    return this.userRepo.findById(id);\n  }\n}\n\n// Setup container\nconst container = new Container();\ncontainer.register('logger', () => new ConsoleLogger());\ncontainer.register('userRepo', () => new InMemoryUserRepository());\ncontainer.register('userService', (c) => new UserService(\n  c.resolve('logger'),\n  c.resolve('userRepo')\n));\n\nconst userService = container.resolve<UserService>('userService');",
      output: "Dependencies are injected, making components loosely coupled",
      note: "DI containers manage service lifetimes (singleton, transient)"
    },
    {
      question: "How to implement mixins in TypeScript?",
      answer: "Mixins combine multiple classes into one using constructor functions and type intersections.",
      example: "// Base class\nclass Animal {\n  name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n// Mixins\ntype Constructor<T = {}> = new (...args: any[]) => T;\n\nfunction Flyable<TBase extends Constructor>(Base: TBase) {\n  return class extends Base {\n    fly() {\n      console.log(`${this.name} is flying!`);\n    }\n  };\n}\n\nfunction Swimmable<TBase extends Constructor>(Base: TBase) {\n  return class extends Base {\n    swim() {\n      console.log(`${this.name} is swimming!`);\n    }\n  };\n}\n\nfunction Eatable<TBase extends Constructor>(Base: TBase) {\n  return class extends Base {\n    eat(food: string) {\n      console.log(`${this.name} is eating ${food}`);\n    }\n  };\n}\n\n// Apply multiple mixins\nclass Bird extends Flyable(Swimmable(Animal)) {\n  constructor(name: string) {\n    super(name);\n  }\n}\n\nclass Duck extends Flyable(Swimmable(Eatable(Animal))) {\n  constructor(name: string) {\n    super(name);\n  }\n}\n\nconst duck = new Duck('Donald');\nduck.fly();   // From Flyable\nduck.swim();  // From Swimmable\nduck.eat('bread'); // From Eatable\n\n// With generic constraints\nfunction Timestamped<TBase extends Constructor>(Base: TBase) {\n  return class extends Base {\n    timestamp = new Date();\n    getTimestamp() {\n      return this.timestamp;\n    }\n  };\n}\n\nconst timestampedAnimal = Timestamped(Animal);\nconst animal = new timestampedAnimal('Buddy');\nconsole.log(animal.getTimestamp());",
      output: "Mixins compose multiple behaviors into a single class",
      note: "Mixins provide alternative to multiple inheritance in TypeScript"
    },
    {
      question: "How to create higher-order types for function composition?",
      answer: "Higher-order types transform functions and types, enabling powerful functional programming patterns.",
      example: "// Function composition types\ntype Compose = <A, B, C>(\n  f: (b: B) => C,\n  g: (a: A) => B\n) => (a: A) => C;\n\nexport const compose: Compose = (f, g) => (a) => f(g(a));\n\n// Pipe (reverse composition)\ntype Pipe = <A, B, C>(\n  f: (a: A) => B,\n  g: (b: B) => C\n) => (a: A) => C;\n\nexport const pipe: Pipe = (f, g) => (a) => g(f(a));\n\n// Generic pipeline\ntype Pipeline<T> = {\n  pipe: <U>(fn: (value: T) => U) => Pipeline<U>;\n  execute: () => T;\n};\n\nfunction createPipeline<T>(initialValue: T): Pipeline<T> {\n  let value = initialValue;\n  \n  return {\n    pipe<U>(fn: (value: T) => U): Pipeline<U> {\n      value = fn(value) as unknown as T;\n      return this as unknown as Pipeline<U>;\n    },\n    execute() {\n      return value;\n    }\n  };\n}\n\n// Usage\nconst result = createPipeline(5)\n  .pipe(x => x * 2)\n  .pipe(x => x + 3)\n  .pipe(x => x.toString())\n  .execute(); // '13'\n\n// Type-safe currying\ntype Curried<T extends any[], R> = \n  T extends [infer First, ...infer Rest]\n    ? (arg: First) => Curried<Rest, R>\n    : R;\n\nfunction curry<T extends any[], R>(fn: (...args: T) => R): Curried<T, R> {\n  return ((...args: any[]) => {\n    if (args.length >= fn.length) {\n      return fn(...args as T);\n    }\n    return curry(fn.bind(null, ...args));\n  }) as any;\n}\n\nconst add = (a: number, b: number, c: number) => a + b + c;\nconst curriedAdd = curry(add);\nconst result2 = curriedAdd(1)(2)(3); // 6",
      output: "Higher-order types enable type-safe function composition and currying",
      note: "Higher-order types leverage conditional and recursive types"
    },
    {
      question: "How to implement type-safe localStorage wrapper?",
      answer: "Create a typed wrapper around localStorage that enforces schema validation.",
      example: "interface StorageSchema {\n  user: { id: number; name: string };\n  theme: 'light' | 'dark';\n  token: string;\n  preferences: {\n    notifications: boolean;\n    language: string;\n  };\n}\n\nclass TypedLocalStorage<T extends Record<string, any>> {\n  constructor(private prefix: string = '') {}\n\n  private getKey(key: keyof T): string {\n    return this.prefix ? \\`\\${this.prefix}.\\${String(key)}\\` : String(key);\n  }\n\n  set<K extends keyof T>(key: K, value: T[K]): void {\n    try {\n      localStorage.setItem(this.getKey(key), JSON.stringify(value));\n    } catch (error) {\n      console.error(\\`Failed to save \\${String(key)}:\\`, error);\n    }\n  }\n\n  get<K extends keyof T>(key: K): T[K] | null {\n    try {\n      const item = localStorage.getItem(this.getKey(key));\n      return item ? JSON.parse(item) : null;\n    } catch (error) {\n      console.error(\\`Failed to read \\${String(key)}:\\`, error);\n      return null;\n    }\n  }\n\n  remove<K extends keyof T>(key: K): void {\n    localStorage.removeItem(this.getKey(key));\n  }\n\n  has<K extends keyof T>(key: K): boolean {\n    return localStorage.getItem(this.getKey(key)) !== null;\n  }\n\n  clear(): void {\n    Object.keys(this.getKeys()).forEach(key => {\n      localStorage.removeItem(this.getKey(key as keyof T));\n    });\n  }\n\n  private getKeys(): Partial<Record<keyof T, boolean>> {\n    const keys: Partial<Record<keyof T, boolean>> = {};\n    for (let i = 0; i < localStorage.length; i++) {\n      const key = localStorage.key(i);\n      if (key?.startsWith(this.prefix)) {\n        const originalKey = key.replace(this.prefix, '').replace(/^\\\\.\\./, '');\n        keys[originalKey as keyof T] = true;\n      }\n    }\n    return keys;\n  }\n}\n\nconst storage = new TypedLocalStorage<StorageSchema>('app');\nstorage.set('user', { id: 1, name: 'John' });\nconst user = storage.get('user'); // Type: { id: number; name: string; } | null\nstorage.set('theme', 'dark');\n// storage.set('theme', 'invalid'); // Error: Type '\\\"invalid\\\"' is not assignable\nconst theme = storage.get('theme'); // Type: 'light' | 'dark' | null",
      output: "Type-safe localStorage with schema validation and autocomplete",
      note: "Prefix parameter prevents key collisions between different apps"
    },
    {
      question: "How to implement a type-safe Redux-like store?",
      answer: "Create a typed state management store with actions, reducers, and selectors.",
      example: "// Action types\ntype Action<T extends string = string, P = any> = {\n  type: T;\n  payload: P;\n};\n\n// State definition\ninterface AppState {\n  count: number;\n  user: { name: string; loggedIn: boolean } | null;\n  todos: string[];\n}\n\n// Action creators\ntype Actions =\n  | Action<'INCREMENT'>\n  | Action<'DECREMENT'>\n  | Action<'SET_USER', { name: string; loggedIn: boolean }>\n  | Action<'ADD_TODO', string>\n  | Action<'RESET'>;\n\n// Reducer\ntype Reducer<S = any, A extends Action = Action> = (state: S, action: A) => S;\n\nconst initialState: AppState = {\n  count: 0,\n  user: null,\n  todos: []\n};\n\nconst rootReducer: Reducer<AppState, Actions> = (state = initialState, action) => {\n  switch (action.type) {\n    case 'INCREMENT':\n      return { ...state, count: state.count + 1 };\n    case 'DECREMENT':\n      return { ...state, count: state.count - 1 };\n    case 'SET_USER':\n      return { ...state, user: action.payload };\n    case 'ADD_TODO':\n      return { ...state, todos: [...state.todos, action.payload] };\n    case 'RESET':\n      return initialState;\n    default:\n      return state;\n  }\n};\n\n// Store implementation\nclass Store<S, A extends Action> {\n  private state: S;\n  private listeners: Set<() => void> = new Set();\n\n  constructor(private reducer: Reducer<S, A>, initialState: S) {\n    this.state = initialState;\n  }\n\n  getState(): S {\n    return this.state;\n  }\n\n  dispatch(action: A): void {\n    this.state = this.reducer(this.state, action);\n    this.listeners.forEach(listener => listener());\n  }\n\n  subscribe(listener: () => void): () => void {\n    this.listeners.add(listener);\n    return () => this.listeners.delete(listener);\n  }\n}\n\nconst store = new Store(rootReducer, initialState);\n\n// Selectors with types\ntype Selector<T> = (state: AppState) => T;\n\nconst selectCount: Selector<number> = state => state.count;\nconst selectUser: Selector<AppState['user']> = state => state.user;\nconst selectTodos: Selector<string[]> = state => state.todos;\n\n// Usage\nstore.dispatch({ type: 'INCREMENT', payload: undefined });\nstore.dispatch({ type: 'SET_USER', payload: { name: 'John', loggedIn: true } });\nstore.dispatch({ type: 'ADD_TODO', payload: 'Learn TypeScript' });\n\n// store.dispatch({ type: 'INVALID', payload: {} }); // Type error",
      output: "Type-safe store with discriminated union actions",
      note: "Discriminated unions ensure action type and payload match"
    },
    {
      question: "How to implement a type-safe API client?",
      answer: "Create an API client that infers return types from endpoint definitions.",
      example: "// API endpoint definitions\ninterface ApiEndpoints {\n  '/users': {\n    GET: { response: User[]; params: { limit?: number } };\n    POST: { body: CreateUserDto; response: User };\n  };\n  '/users/:id': {\n    GET: { response: User; params: { id: number } };\n    PUT: { body: UpdateUserDto; response: User };\n    DELETE: { response: void };\n  };\n}\n\n// Type helpers\ntype ExtractParams<T> = T extends { params: infer P } ? P : never;\ntype ExtractBody<T> = T extends { body: infer B } ? B : never;\ntype ExtractResponse<T> = T extends { response: infer R } ? R : never;\n\ntype EndpointResponse<T extends keyof ApiEndpoints, M extends keyof ApiEndpoints[T]> =\n  ExtractResponse<ApiEndpoints[T][M]>;\n\ntype EndpointParams<T extends keyof ApiEndpoints, M extends keyof ApiEndpoints[T]> =\n  ExtractParams<ApiEndpoints[T][M]>;\n\ntype EndpointBody<T extends keyof ApiEndpoints, M extends keyof ApiEndpoints[T]> =\n  ExtractBody<ApiEndpoints[T][M]>;\n\n// API client class\nclass ApiClient {\n  private baseUrl: string;\n\n  constructor(baseUrl: string) {\n    this.baseUrl = baseUrl;\n  }\n\n  private interpolateUrl<T extends string>(url: T, params: Record<string, any>): string {\n    let result = url;\n    for (const [key, value] of Object.entries(params)) {\n      result = result.replace(`:${key}`, String(value));\n    }\n    return result;\n  }\n\n  async get<T extends keyof ApiEndpoints>(\n    endpoint: T,\n    params?: EndpointParams<T, 'GET'>\n  ): Promise<EndpointResponse<T, 'GET'>> {\n    let url = `${this.baseUrl}${endpoint}`;\n    if (params) {\n      url = this.interpolateUrl(url, params);\n    }\n    const response = await fetch(url);\n    return response.json();\n  }\n\n  async post<T extends keyof ApiEndpoints>(\n    endpoint: T,\n    body: EndpointBody<T, 'POST'>,\n    params?: EndpointParams<T, 'POST'>\n  ): Promise<EndpointResponse<T, 'POST'>> {\n    let url = `${this.baseUrl}${endpoint}`;\n    if (params) {\n      url = this.interpolateUrl(url, params);\n    }\n    const response = await fetch(url, {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify(body)\n    });\n    return response.json();\n  }\n\n  async put<T extends keyof ApiEndpoints>(\n    endpoint: T,\n    body: EndpointBody<T, 'PUT'>,\n    params: EndpointParams<T, 'PUT'>\n  ): Promise<EndpointResponse<T, 'PUT'>> {\n    let url = `${this.baseUrl}${endpoint}`;\n    url = this.interpolateUrl(url, params);\n    const response = await fetch(url, {\n      method: 'PUT',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify(body)\n    });\n    return response.json();\n  }\n\n  async delete<T extends keyof ApiEndpoints>(\n    endpoint: T,\n    params: EndpointParams<T, 'DELETE'>\n  ): Promise<EndpointResponse<T, 'DELETE'>> {\n    let url = `${this.baseUrl}${endpoint}`;\n    url = this.interpolateUrl(url, params);\n    await fetch(url, { method: 'DELETE' });\n  }\n}\n\nconst api = new ApiClient('https://api.example.com');\n\n// Type-safe API calls\nconst users = await api.get('/users', { limit: 10 }); // Type: User[]\nconst user = await api.get('/users/:id', { id: 1 }); // Type: User\nconst newUser = await api.post('/users', { name: 'John', email: 'john@email.com' }); // Type: User",
      output: "API client provides type-safe endpoints with autocomplete",
      note: "Type-safe API client catches endpoint and payload errors at compile time"
    },

    // ========== REAL-WORLD PATTERNS (71-80) ==========
    {
      question: "How to implement a type-safe event bus?",
      answer: "Event bus provides publish-subscribe pattern with typed events and payloads.",
      example: "type EventMap = {\n  'user:login': { userId: string; timestamp: Date };\n  'user:logout': { userId: string };\n  'data:update': { id: number; data: unknown };\n  'error:occurred': { error: Error; context: string };\n};\n\nclass EventBus<T extends Record<string, any>> {\n  private handlers = new Map<keyof T, Set<Function>>();\n\n  on<K extends keyof T>(event: K, handler: (payload: T[K]) => void): () => void {\n    if (!this.handlers.has(event)) {\n      this.handlers.set(event, new Set());\n    }\n    this.handlers.get(event)!.add(handler);\n    \n    return () => this.off(event, handler);\n  }\n\n  once<K extends keyof T>(event: K, handler: (payload: T[K]) => void): () => void {\n    const wrapper = (payload: T[K]) => {\n      handler(payload);\n      this.off(event, wrapper);\n    };\n    return this.on(event, wrapper);\n  }\n\n  emit<K extends keyof T>(event: K, payload: T[K]): void {\n    this.handlers.get(event)?.forEach(handler => handler(payload));\n  }\n\n  off<K extends keyof T>(event: K, handler: (payload: T[K]) => void): void {\n    this.handlers.get(event)?.delete(handler);\n  }\n\n  clear(): void {\n    this.handlers.clear();\n  }\n\n  hasListeners<K extends keyof T>(event: K): boolean {\n    return (this.handlers.get(event)?.size || 0) > 0;\n  }\n}\n\nconst eventBus = new EventBus<EventMap>();\n\n// Typed handlers\neventBus.on('user:login', (payload) => {\n  console.log(`User ${payload.userId} logged in at ${payload.timestamp}`);\n});\n\neventBus.on('error:occurred', ({ error, context }) => {\n  console.error(`Error in ${context}:`, error);\n});\n\n// Type-safe emit\neventBus.emit('user:login', { userId: '123', timestamp: new Date() });\n// eventBus.emit('user:login', { userId: '123' }); // Error: missing timestamp\n\n// With async handlers\ninterface AsyncEventMap {\n  'data:fetch': { id: number };\n  'data:save': { data: unknown };\n}\n\nclass AsyncEventBus<T extends Record<string, any>> extends EventBus<T> {\n  async emitAsync<K extends keyof T>(event: K, payload: T[K]): Promise<void> {\n    const handlers = this.handlers.get(event);\n    if (!handlers) return;\n    \n    await Promise.all([...handlers].map(handler => handler(payload)));\n  }\n}",
      output: "Event bus ensures event names and payloads match",
      note: "Type-safe event bus prevents runtime errors from mismatched events"
    },
    {
      question: "How to implement a type-safe configuration manager?",
      answer: "Configuration manager validates environment variables and provides typed access.",
      example: "// Config schema definition\ninterface ConfigSchema {\n  NODE_ENV: 'development' | 'production' | 'test';\n  PORT: number;\n  DATABASE_URL: string;\n  API_KEY: string;\n  DEBUG: boolean;\n  REDIS_HOST: string;\n  REDIS_PORT: number;\n}\n\n// Validation rules\ntype Validator<T> = (value: unknown) => T;\n\nconst validators: {\n  [K in keyof ConfigSchema]: Validator<ConfigSchema[K]>;\n} = {\n  NODE_ENV: (value) => {\n    if (value !== 'development' && value !== 'production' && value !== 'test') {\n      throw new Error(`NODE_ENV must be development, production, or test, got ${value}`);\n    }\n    return value;\n  },\n  PORT: (value) => {\n    const port = Number(value);\n    if (isNaN(port) || port < 1 || port > 65535) {\n      throw new Error(`PORT must be between 1 and 65535, got ${value}`);\n    }\n    return port;\n  },\n  DATABASE_URL: (value) => {\n    if (typeof value !== 'string' || !value.startsWith('postgresql://')) {\n      throw new Error(`DATABASE_URL must be a valid PostgreSQL connection string`);\n    }\n    return value;\n  },\n  API_KEY: (value) => {\n    if (typeof value !== 'string' || value.length < 32) {\n      throw new Error(`API_KEY must be at least 32 characters`);\n    }\n    return value;\n  },\n  DEBUG: (value) => {\n    return value === 'true' || value === '1';\n  },\n  REDIS_HOST: (value) => {\n    if (typeof value !== 'string') throw new Error('REDIS_HOST must be a string');\n    return value;\n  },\n  REDIS_PORT: (value) => {\n    const port = Number(value);\n    if (isNaN(port)) throw new Error('REDIS_PORT must be a number');\n    return port;\n  }\n};\n\nclass Config<T extends Record<string, any>> {\n  private config: T;\n\n  constructor() {\n    this.config = this.loadConfig();\n  }\n\n  private loadConfig(): T {\n    const config = {} as T;\n    \n    for (const key of Object.keys(validators) as (keyof T)[]) {\n      const envValue = process.env[key as string];\n      try {\n        config[key] = validators[key as keyof ConfigSchema](envValue);\n      } catch (error) {\n        throw new Error(`Configuration error for ${String(key)}: ${error.message}`);\n      }\n    }\n    \n    return config;\n  }\n\n  get<K extends keyof T>(key: K): T[K] {\n    return this.config[key];\n  }\n\n  getAll(): T {\n    return { ...this.config };\n  }\n\n  has<K extends keyof T>(key: K): boolean {\n    return key in this.config;\n  }\n}\n\nconst config = new Config<ConfigSchema>();\n\n// Type-safe access\nconst port = config.get('PORT'); // Type: number\nconst env = config.get('NODE_ENV'); // Type: 'development' | 'production' | 'test'\nconst debug = config.get('DEBUG'); // Type: boolean\n\n// Nested config\ntype DatabaseConfig = {\n  host: string;\n  port: number;\n  username: string;\n  password: string;\n};\n\ninterface AppConfig {\n  database: DatabaseConfig;\n  redis: {\n    host: string;\n    port: number;\n  };\n  app: {\n    name: string;\n    version: string;\n  };\n}\n\nclass NestedConfig<T> {\n  private config: T;\n\n  constructor(config: T) {\n    this.config = config;\n  }\n\n  get<K1 extends keyof T>(key: K1): T[K1];\n  get<K1 extends keyof T, K2 extends keyof T[K1]>(key1: K1, key2: K2): T[K1][K2];\n  get<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(\n    key1: K1,\n    key2: K2,\n    key3: K3\n  ): T[K1][K2][K3];\n  get(...keys: string[]): unknown {\n    let result: any = this.config;\n    for (const key of keys) {\n      result = result?.[key];\n    }\n    return result;\n  }\n}",
      output: "Configuration types are validated and provide autocomplete",
      note: "Environment variables are validated at startup, preventing runtime errors"
    },
    {
      question: "How to implement a type-safe state machine?",
      answer: "State machine defines states, events, and transitions with type safety.",
      example: "// State and event definitions\ninterface StateMachineDefinition<S extends string, E extends string, C = any> {\n  initial: S;\n  states: {\n    [K in S]: {\n      on: {\n        [Ev in E]?: {\n          target: S;\n          action?: (context: C, event: { type: Ev; payload?: any }) => C;\n        };\n      };\n    };\n  };\n}\n\n// Type helpers\ntype ExtractEvents<T extends StateMachineDefinition<any, any, any>> = \n  T extends StateMachineDefinition<any, infer E, any> ? E : never;\n\ntype ExtractStates<T extends StateMachineDefinition<any, any, any>> = \n  T extends StateMachineDefinition<infer S, any, any> ? S : never;\n\nclass StateMachine<TDef extends StateMachineDefinition<any, any, any>> {\n  private currentState: ExtractStates<TDef>;\n  private context: TDef extends StateMachineDefinition<any, any, infer C> ? C : never;\n\n  constructor(private definition: TDef) {\n    this.currentState = definition.initial;\n    this.context = {} as any;\n  }\n\n  getState(): ExtractStates<TDef> {\n    return this.currentState;\n  }\n\n  getContext(): TDef extends StateMachineDefinition<any, any, infer C> ? C : never {\n    return this.context;\n  }\n\n  send<E extends ExtractEvents<TDef>>(event: { type: E; payload?: any }): boolean {\n    const stateConfig = this.definition.states[this.currentState];\n    const transition = stateConfig.on[event.type as unknown as string];\n    \n    if (!transition) {\n      console.warn(`No transition from ${this.currentState} on ${event.type}`);\n      return false;\n    }\n    \n    if (transition.action) {\n      this.context = transition.action(this.context, event);\n    }\n    \n    this.currentState = transition.target;\n    return true;\n  }\n\n  canSend<E extends ExtractEvents<TDef>>(eventType: E): boolean {\n    const stateConfig = this.definition.states[this.currentState];\n    return !!stateConfig.on[eventType as unknown as string];\n  }\n}\n\n// Example: Payment state machine\ninterface PaymentContext {\n  amount: number;\n  transactionId?: string;\n  error?: string;\n  retryCount: number;\n}\n\nconst paymentMachine = {\n  initial: 'idle',\n  states: {\n    idle: {\n      on: {\n        PROCESS: { target: 'processing', action: (ctx, event) => ({ ...ctx, amount: event.payload.amount }) }\n      }\n    },\n    processing: {\n      on: {\n        SUCCESS: { target: 'completed', action: (ctx, event) => ({ ...ctx, transactionId: event.payload.transactionId }) },\n        FAIL: { target: 'failed', action: (ctx, event) => ({ ...ctx, error: event.payload.error, retryCount: ctx.retryCount + 1 }) },\n        RETRY: { target: 'processing' }\n      }\n    },\n    completed: { on: {} },\n    failed: {\n      on: {\n        RETRY: { target: 'processing' },\n        CANCEL: { target: 'cancelled' }\n      }\n    },\n    cancelled: { on: {} }\n  }\n} as const;\n\nconst paymentMachineTyped: StateMachineDefinition<'idle' | 'processing' | 'completed' | 'failed' | 'cancelled', \n  'PROCESS' | 'SUCCESS' | 'FAIL' | 'RETRY' | 'CANCEL', PaymentContext> = paymentMachine;\n\nconst machine = new StateMachine(paymentMachineTyped);\nmachine.send({ type: 'PROCESS', payload: { amount: 100 } });\nmachine.send({ type: 'SUCCESS', payload: { transactionId: 'tx_123' } });\n\nconsole.log(machine.getState()); // 'completed'",
      output: "State machine ensures valid state transitions at compile time",
      note: "State machines prevent invalid state transitions and bugs"
    },
    {
      question: "How to implement a type-safe ORM query builder?",
      answer: "Query builder provides type-safe database queries with autocomplete and validation.",
      example: "// Table definitions\ninterface UserTable {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n  createdAt: Date;\n}\n\ninterface PostTable {\n  id: number;\n  title: string;\n  content: string;\n  authorId: number;\n  published: boolean;\n}\n\ninterface Database {\n  users: UserTable;\n  posts: PostTable;\n}\n\n// Column types\ntype ColumnType = 'string' | 'number' | 'boolean' | 'date';\n\ntype TableSchema<T> = {\n  [K in keyof T]: ColumnType;\n};\n\n// Query builder\nclass QueryBuilder<T extends keyof Database, R = Database[T]> {\n  private conditions: string[] = [];\n  private selectedColumns: (keyof R)[] | null = null;\n  private orderByClause: { column: keyof R; direction: 'ASC' | 'DESC' } | null = null;\n  private limitValue: number | null = null;\n  private offsetValue: number | null = null;\n\n  constructor(private table: T) {}\n\n  select<K extends keyof R>(...columns: K[]): QueryBuilder<T, Pick<R, K>> {\n    this.selectedColumns = columns as (keyof R)[];\n    return this as unknown as QueryBuilder<T, Pick<R, K>>;\n  }\n\n  where<K extends keyof R>(column: K, operator: '=' | '>' | '<' | '>=' | '<=', value: R[K]): this {\n    this.conditions.push(`${String(column)} ${operator} ${this.formatValue(value)}`);\n    return this;\n  }\n\n  orderBy<K extends keyof R>(column: K, direction: 'ASC' | 'DESC' = 'ASC'): this {\n    this.orderByClause = { column, direction };\n    return this;\n  }\n\n  limit(limit: number): this {\n    this.limitValue = limit;\n    return this;\n  }\n\n  offset(offset: number): this {\n    this.offsetValue = offset;\n    return this;\n  }\n\n  private formatValue(value: any): string {\n    if (typeof value === 'string') return `'${value}'`;\n    if (value instanceof Date) return `'${value.toISOString()}'`;\n    return String(value);\n  }\n\n  toSQL(): string {\n    let sql = `SELECT ${this.selectedColumns ? this.selectedColumns.join(', ') : '*'} FROM ${String(this.table)}`;\n    \n    if (this.conditions.length > 0) {\n      sql += ` WHERE ${this.conditions.join(' AND ')}`;\n    }\n    \n    if (this.orderByClause) {\n      sql += ` ORDER BY ${String(this.orderByClause.column)} ${this.orderByClause.direction}`;\n    }\n    \n    if (this.limitValue !== null) {\n      sql += ` LIMIT ${this.limitValue}`;\n    }\n    \n    if (this.offsetValue !== null) {\n      sql += ` OFFSET ${this.offsetValue}`;\n    }\n    \n    return sql;\n  }\n}\n\n// Usage\nconst query = new QueryBuilder('users')\n  .select('id', 'name', 'email')\n  .where('age', '>', 18)\n  .where('name', '=', 'John')\n  .orderBy('createdAt', 'DESC')\n  .limit(10)\n  .offset(0)\n  .toSQL();\n\nconsole.log(query);\n// SELECT id, name, email FROM users WHERE age > 18 AND name = 'John' ORDER BY createdAt DESC LIMIT 10 OFFSET 0",
      output: "Query builder provides type-safe column selection and where clauses",
      note: "Type-safe query builder prevents column name typos and type mismatches"
    },
    {
      question: "How to implement a type-safe validation library?",
      answer: "Validation library provides schema validation with type inference for validated data.",
      example: "// Validator types\ntype Validator<T> = (value: unknown) => T;\ntype ValidationResult<T> = { success: true; data: T } | { success: false; errors: string[] };\n\n// Built-in validators\nconst string = (): Validator<string> => (value) => {\n  if (typeof value !== 'string') throw new Error('Expected string');\n  return value;\n};\n\nconst number = (): Validator<number> => (value) => {\n  if (typeof value !== 'number') throw new Error('Expected number');\n  return value;\n};\n\nconst boolean = (): Validator<boolean> => (value) => {\n  if (typeof value !== 'boolean') throw new Error('Expected boolean');\n  return value;\n};\n\nconst date = (): Validator<Date> => (value) => {\n  if (!(value instanceof Date)) throw new Error('Expected Date');\n  return value;\n};\n\n// String validators\nconst minLength = (min: number) => (validator: Validator<string>): Validator<string> => (value) => {\n  const str = validator(value);\n  if (str.length < min) throw new Error(`String must be at least ${min} characters`);\n  return str;\n};\n\nconst maxLength = (max: number) => (validator: Validator<string>): Validator<string> => (value) => {\n  const str = validator(value);\n  if (str.length > max) throw new Error(`String must be at most ${max} characters`);\n  return str;\n};\n\nconst email = (validator: Validator<string>): Validator<string> => (value) => {\n  const str = validator(value);\n  const emailRegex = /^[^\\s@]+@([^\\s@]+\\.)+[^\\s@]+$/;\n  if (!emailRegex.test(str)) throw new Error('Invalid email format');\n  return str;\n};\n\n// Number validators\nconst min = (minVal: number) => (validator: Validator<number>): Validator<number> => (value) => {\n  const num = validator(value);\n  if (num < minVal) throw new Error(`Number must be at least ${minVal}`);\n  return num;\n};\n\nconst max = (maxVal: number) => (validator: Validator<number>): Validator<number> => (value) => {\n  const num = validator(value);\n  if (num > maxVal) throw new Error(`Number must be at most ${maxVal}`);\n  return num;\n};\n\n// Object validator\nfunction object<T extends Record<string, Validator<any>>>(shape: T): Validator<{ [K in keyof T]: ReturnType<T[K]> }> {\n  return (value) => {\n    if (typeof value !== 'object' || value === null || Array.isArray(value)) {\n      throw new Error('Expected object');\n    }\n    \n    const result = {} as any;\n    for (const [key, validator] of Object.entries(shape)) {\n      result[key] = validator((value as any)[key]);\n    }\n    return result;\n  };\n}\n\n// Array validator\nfunction array<T>(itemValidator: Validator<T>): Validator<T[]> {\n  return (value) => {\n    if (!Array.isArray(value)) throw new Error('Expected array');\n    return value.map(item => itemValidator(item));\n  };\n}\n\n// Optional validator\nfunction optional<T>(validator: Validator<T>): Validator<T | undefined> {\n  return (value) => {\n    if (value === undefined) return undefined;\n    return validator(value);\n  };\n}\n\n// Validate function\ntype InferType<T extends Validator<any>> = T extends Validator<infer U> ? U : never;\n\nfunction validate<T extends Validator<any>>(validator: T, value: unknown): ValidationResult<InferType<T>> {\n  try {\n    const data = validator(value);\n    return { success: true, data };\n  } catch (error) {\n    return { success: false, errors: [error.message] };\n  }\n}\n\n// Schema definition\nconst userSchema = object({\n  name: minLength(2)(maxLength(50)(string())),\n  email: email(string()),\n  age: min(18)(max(120)(number())),\n  isActive: boolean(),\n  tags: optional(array(string())),\n  createdAt: date()\n});\n\n// Validation\ntype User = InferType<typeof userSchema>;\n// Type: { name: string; email: string; age: number; isActive: boolean; tags?: string[]; createdAt: Date; }\n\nconst result = validate(userSchema, {\n  name: 'John',\n  email: 'john@example.com',\n  age: 25,\n  isActive: true,\n  tags: ['developer', 'typescript'],\n  createdAt: new Date()\n});\n\nif (result.success) {\n  console.log(result.data); // Type-safe user object\n} else {\n  console.error(result.errors);\n}",
      output: "Validation library infers types from schemas and provides runtime validation",
      note: "Type-safe validation eliminates type assertion after validation"
    }
  ]
};

export default interview;
