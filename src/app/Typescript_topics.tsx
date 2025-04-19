

let age: number = 25;
let name: string = "Alice";
let isStudent: boolean = true;

// 2. Arrays
let scores: number[] = [90, 85, 88];

// 3. Tuples
let user: [string, number] = ["Alice", 25];

// 4. Enums
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;

// 5. Interfaces
interface Person {
  name: string;
  age: number;
}
const p: Person = { name: "John", age: 30 };

// 6. Type Aliases
type ID = number | string;
let userId: ID = 101;

// 7. Union Types
let result: string | number = "Success";

// 8. Intersection Types
interface A { a: string; }
interface B { b: number; }
type AB = A & B;

// 9. Literal Types
let status: "success" | "error" = "success";

// 10. Optional Properties
interface Car {
  model: string;
  year?: number;
}

// 11. Readonly Properties
interface Point {
  readonly x: number;
  readonly y: number;
}

// 12. Functions with Types
function add(a: number, b: number): number {
  return a + b;
}

// 13. Function Types
let multiply: (x: number, y: number) => number = (x, y) => x * y;

// 14. Rest Parameters
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

// 15. Default Parameters
function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}

// 16. Classes
class Animal {
  constructor(public name: string) {}
  speak() {
    return `${this.name} makes a sound.`;
  }
}

// 17. Inheritance
class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

// 18. Abstract Classes
abstract class Shape {
  abstract getArea(): number;
}

// 19. Interfaces with Classes
interface Drawable {
  draw(): void;
}
class Circle implements Drawable {
  draw() {
    console.log("Drawing a circle");
  }
}

// 20. Generics
function identity<T>(arg: T): T {
  return arg;
}

// 21. Generic Constraints
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// 22. Type Assertions
let someValue: any = "Hello";
let strLength: number = (someValue as string).length;

// 23. keyof Type Operator
interface Product {
  id: number;
  name: string;
}
type ProductKeys = keyof Product;

// 24. typeof Type Operator
let newProduct = { id: 1, name: "Book" };
type ProductType = typeof newProduct;

// 25. Indexed Access Types
interface CarInfo {
  model: string;
  year: number;
}
type CarModel = CarInfo["model"];

// 26. Conditional Types
type IsString<T> = T extends string ? true : false;

// 27. Mapped Types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 28. Utility Types
interface Task {
  title: string;
  completed: boolean;
}
let todo: Partial<Task> = { title: "Learn TS" };

// 29. Infer Keyword
// Used inside conditional types

// 30. Discriminated Unions
interface Square { kind: "square"; size: number; }
interface Circle { kind: "circle"; radius: number; }
// type Shape = Square | Circle;

// 31. Never Type
function throwError(msg: string): never {
  throw new Error(msg);
}

// 32. Unknown Type
let data: unknown;
data = 10;
if (typeof data === "number") {
  console.log(data * 2);
}

// 33. Any Type
let random: any = "Could be anything";

// 34. Module Import/Export
// utils.ts
export function square(x: number): number {
  return x * x;
}
// main.ts
// import { square } from "./utils";

// 35. Namespaces
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

// 36. Declaration Merging
interface User {
  name: string;
}
interface User {
  age: number;
}
const newUser: User = { name: "Ali", age: 20 };
// 
// 37. Ambient Declarations
// declare let jQuery: any;

// 38. Triple-Slash Directives
/// <reference path="types.d.ts" />

// 39. Type Guards
function isString(value: any): value is string {
  return typeof value === "string";
}

// 40. Custom Type Predicates
function isNumber(x: any): x is number {
  return typeof x === "number";
}



