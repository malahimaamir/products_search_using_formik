// 1. Structural Typing
interface User {
    name: string;
  }
  const person = { name: 'Alice', age: 30 };
  const user: User = person; // allowed due to structural typing
  
  // 2. Declaration Merging
  interface Car {
    brand: string;
  }
  interface Car {
    model: string;
  }
  const myCar: Car = { brand: 'Toyota', model: 'Corolla' };
  
  // 3. Ambient Declarations
  declare const GLOBAL_CONSTANT: string;
  
  // 4. Triple-Slash Directives
  /// <reference path="./types.d.ts" />
  
  // 5. Module Augmentation
  // types.d.ts
  // declare module "lodash" {
  //   export function customFunction(): void;
  // }
  
  // 6. Type Compatibility
  let x: number;
  let y: 5;
  x = y; // valid due to compatibility
  
  // 7. Recursive Types
  type Nested<T> = T | Nested<T>[];
  const example: Nested<number> = [1, [2, [3]]];
  
  // 8. Discriminated Unions
  type Shape = { kind: 'circle'; radius: number } | { kind: 'square'; size: number };
  function area(shape: Shape) {
    if (shape.kind === 'circle') return Math.PI * shape.radius ** 2;
    return shape.size ** 2;
  }
  
  // 9. Template Literal Types
  type EventType = `on${Capitalize<string>}`;
  
  // 10. Variance in Generics
  class Animal {}
  class Dog extends Animal {}
  let dogs: Array<Dog> = [new Dog()];
  let animals: Array<Animal> = dogs;
  
  // 11. Branded Types
  type UserId = string & { readonly brand: unique symbol };
  function createUserId(id: string): UserId {
    return id as UserId;
  }
  
  // 12. This Parameter Types
  function say(this: { name: string }) {
    console.log(this.name);
  }
  
  // 13. Inferred Tuple Types
  function pair<T, U>(a: T, b: U) {
    return [a, b];
  }
  const result = pair(1, 'a'); // inferred as [number, string]
  
  // 14. ReturnType Utility Type
  function greet() {
    return 'Hello';
  }
  type Greeting = ReturnType<typeof greet>;
  
  // 15. Parameters Utility Type
  function fn(a: number, b: string) {}
  type Params = Parameters<typeof fn>;
  
  // 16. ConstructorParameters Utility Type
  class MyClass {
    constructor(public name: string, public age: number) {}
  }
  type CParams = ConstructorParameters<typeof MyClass>;
  
  // 17. InstanceType Utility Type
  type Instance = InstanceType<typeof MyClass>;
  
  // 18. Awaited Utility Type
  async function asyncFn() {
    return 42;
  }
  type AwaitedType = Awaited<ReturnType<typeof asyncFn>>;
  
  // 19. Assert Function Types
  function assertString(val: unknown): asserts val is string {
    if (typeof val !== 'string') throw new Error('Not a string');
  }
  
  // 20. Intrinsic String Manipulation Types
  type Capital = Capitalize<'hello'>;
  
  // 21. infer Keyword in Conditional Types
  type GetReturn<T> = T extends (...args: any[]) => infer R ? R : never;
  
  // 22. Optional Chaining with Type Narrowing
  function printName(user?: { name: string }) {
    console.log(user?.name);
  }
  
  // 23. Nullish Coalescing with Type Checks
  function getName(name?: string | null) {
    return name ?? 'Default';
  }
  
  // 24. Exhaustiveness Checking
  function checkType(value: 'a' | 'b') {
    switch (value) {
      case 'a': return 1;
      case 'b': return 2;
      default: const _exhaustive: never = value;
    }
  }
  
  // 25. Function Overloads
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: any, b: any): any {
    return a + b;
  }
  
  // 26. Module Resolution Strategies
  // Set in tsconfig.json using "moduleResolution": "node" | "classic"
  
  // 27. Isolated Modules
  // Required for compatibility with Babel and transpilers
  
  // 28. Strict Null Checks
  let name1: string | null = null;
  
  // 29. Strict Property Initialization
  class Person {
    name!: string; // definite assignment assertion
  }
  
  // 30. No Implicit Any
  function multiply(a: number, b: number) {
    return a * b;
  }
  
  // 31. No Unused Locals
  let active = true; // unused locals will throw error with strict rules
  
  // 32. No Fallthrough Cases in Switch
  function fallThrough(val: string) {
    switch (val) {
      case 'a': break;
      case 'b': break;
      // missing default will throw if fallthrough not handled
    }
  }
  
  // 33. Use Define for JSX in TSConfig
  // tsconfig.json: "jsx": "react-jsx"
  
  // 34. Working with JSX in TypeScript
  const Hello = () => <h1>Hello</h1>;
  
  // 35. React with TypeScript – Props Typing
  type Props = { message: string };
  const Greet: React.FC<Props> = ({ message }) => <p>{message}</p>;
  
  // 36. React with TypeScript – useState & useEffect Typing
  const [count, setCount] = useState<number>(0);
  
  // 37. Redux with TypeScript
  interface Action {
    type: 'ADD';
    payload: number;
  }
  
  // 38. Context API with TypeScript
  const ThemeContext = React.createContext<string>('light');
  
  // 39. Custom Hooks with TypeScript
  function useToggle(initial: boolean): [boolean, () => void] {
    const [state, setState] = useState(initial);
    const toggle = () => setState(!state);
    return [state, toggle];
  }
  
  // 40. TypeScript with Node.js
  import fs from 'fs';
  fs.readFileSync('file.txt');
  
  // 41. Express Middleware Typing
  import { Request, Response } from 'express';
  function logger(req: Request, res: Response, next: () => void) {
    console.log(req.url);
    next();
  }
  
  // 42. Type-safe API Calls with Axios
  import axios from 'axios';
  async function fetchData() {
    const res = await axios.get<{ data: string }>('api/url');
    return res.data;
  }
  
  // 43. Type-safe Forms
  interface FormData {
    name: string;
    email: string;
  }
  
  // 44. Using Zod for Runtime Type Validation
  import { z } from 'zod';
  const schema = z.object({ name: z.string() });
  const parsed = schema.parse({ name: 'Alice' });
  
  // 45. tsx vs ts – When to Use Each
  // .ts is for logic, .tsx includes JSX (React components)
  
  // 46. Working with Third-Party Type Definitions (@types)
  // npm i --save-dev @types/lodash
  
  // 47. Generating Type Definitions with JSDoc
  /** @param {number} x */
  function square(x: number) { return x * x; }
  
  // 48. Monorepo Projects with TypeScript
  // Use project references and workspaces for shared TS config
  
  // 49. tsconfig.json – Important Options
  // include, exclude, compilerOptions like strict, target, module
  
  // 50. Project References in TypeScript
  // tsconfig.json: { "references": [{ "path": "../project-b" }] }
  