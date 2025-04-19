// Advanced TypeScript Examples

// 1. Structural Typing
interface Point {
    x: number;
    y: number;
  }
  
  function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
  
  const point = { x: 10, y: 20 };
  logPoint(point);
  
  // 2. Declaration Merging
  interface User {
    name: string;
  }
  
  interface User {
    age: number;
  }
  
  const user: User = { name: 'Alice', age: 25 };
  
  // 3. Ambient Declarations
  // declare var GLOBAL_VAR: string; // used in .d.ts files
  
  // 4. Triple-Slash Directives
  /// <reference path="./types.d.ts" />
  
  // 5. Module Augmentation
  // declare module 'express' {
  //   interface Request {
  //     user?: string;
  //   }
  // }
  
  // 6. Type Compatibility
  let a: number = 5;
  let b: any = a;
  
  // 7. Recursive Types
  type NestedArray<T> = T | NestedArray<T>[];
  
  const values: NestedArray<number> = [1, [2, [3]]];
  
  // 8. Discriminated Unions
  type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'square'; side: number };
  
  function area(shape: Shape) {
    switch (shape.kind) {
      case 'circle': return Math.PI * shape.radius ** 2;
      case 'square': return shape.side ** 2;
    }
  }
  
  // 9. Template Literal Types
  type Events = `on${Capitalize<'click' | 'hover'>}`;
  
  // 10. Variance in Generics
  class Animal {}
  class Dog extends Animal {}
  function getAnimal<T extends Animal>(animal: T): T {
    return animal;
  }
  
  // 11. Branded Types
  type UserId = string & { readonly brand: unique symbol };
  function createUserId(id: string): UserId {
    return id as UserId;
  }
  
  // 12. This Parameter Types
  function sayHello(this: { name: string }) {
    return `Hello, ${this.name}`;
  }
  
  // 13. Inferred Tuple Types
  const tuple = [10, 'hello'] as const;
  
  // 14. ReturnType Utility Type
  function getId() {
    return 123;
  }
  type IdReturn = ReturnType<typeof getId>;
  
  // 15. Parameters Utility Type
  type GetIdParams = Parameters<typeof getId>;
  
  // 16. ConstructorParameters Utility Type
  class Foo {
    constructor(public name: string, public age: number) {}
  }
  type FooConstructorParams = ConstructorParameters<typeof Foo>;
  
  // 17. InstanceType Utility Type
  type FooInstance = InstanceType<typeof Foo>;
  
  // 18. Awaited Utility Type
  async function fetchData() {
    return 'data';
  }
  type Fetched = Awaited<ReturnType<typeof fetchData>>;
  
  // 19. Assert Function Types
  function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== 'string') throw new Error('Not a string');
  }
  
  // 20. Intrinsic String Manipulation Types
  type Greeting = `Hello, ${Uppercase<'world'>}`;
  
  // 21. infer Keyword in Conditional Types
  type ElementType<T> = T extends (infer U)[] ? U : T;
  
  // 22. Optional Chaining with Type Narrowing
  const obj = { user: { name: 'Ali' } };
  const userName = obj.user?.name;
  
  // 23. Nullish Coalescing with Type Checks
  const input = null;
  const value = input ?? 'default';
  
  // 24. Exhaustiveness Checking
  function handleShape(shape: Shape) {
    switch (shape.kind) {
      case 'circle': return 'Circle';
      case 'square': return 'Square';
      default: const _exhaustive: never = shape; return _exhaustive;
    }
  }
  
  // 25. Function Overloads
  function combine(a: string, b: string): string;
  function combine(a: number, b: number): number;
  function combine(a: any, b: any): any {
    return a + b;
  }
  
  // 26. Module Resolution Strategies
  // Set in tsconfig.json: "moduleResolution": "node"
  
  // 27. Isolated Modules
  // Ensure each file can be transpiled independently
  
  // 28. Strict Null Checks
  let userNameStrict: string | null = null;
  
  // 29. Strict Property Initialization
  class StrictClass {
    name!: string;
  }
  
  // 30. No Implicit Any
  function greet(name: string) {
    return `Hello, ${name}`;
  }
  
  // 31. No Unused Locals
  const used = 'used';
  console.log(used);
  
  // 32. No Fallthrough Cases in Switch
  function describe(value: number) {
    switch (value) {
      case 1: return 'One';
      case 2: return 'Two';
      default: return 'Other';
    }
  }
  
  // 33. Use Define for JSX in TSConfig
  // tsconfig: "jsx": "react-jsx"
  
  // 34. Working with JSX in TypeScript
  // const element = <h1>Hello</h1>;
  
  // 35. React with TypeScript – Props Typing
  // interface Props { name: string; }
  // const Greet = ({ name }: Props) => <h1>Hello {name}</h1>;
  
  // 36. React with TypeScript – useState & useEffect Typing
  // const [count, setCount] = useState<number>(0);
  
  // 37. Redux with TypeScript
  // type Action = { type: 'ADD'; payload: number };
  
  // 38. Context API with TypeScript
  // const ThemeContext = createContext<string>('light');
  
  // 39. Custom Hooks with TypeScript
  // function useToggle(initial: boolean): [boolean, () => void] {
  //   const [value, setValue] = useState(initial);
  //   return [value, () => setValue(!value)];
  // }
  
  // 40. TypeScript with Node.js
  // import * as fs from 'fs';
  
  // 41. Express Middleware Typing
  // app.use((req: Request, res: Response, next: NextFunction) => { next(); });
  
  // 42. Type-safe API Calls with Axios
  // axios.get<User>('/api/user');
  
  // 43. Type-safe Forms
  // interface FormData { name: string; age: number; }
  
  // 44. Using Zod for Runtime Type Validation
  // const schema = z.object({ name: z.string() });
  
  // 45. tsx vs ts – When to Use Each
  // .tsx for React with JSX, .ts for others
  
  // 46. Working with Third-Party Type Definitions (@types)
  // npm install @types/lodash
  
  // 47. Generating Type Definitions with JSDoc
  // /** @typedef {{ name: string }} User */
  
  // 48. Monorepo Projects with TypeScript
  // yarn workspaces / pnpm workspaces
  
  // 49. tsconfig.json – Important Options
  // "strict": true, "target": "ESNext"
  
  // 50. Project References in TypeScript
  // tsconfig.json: { "references": [{ "path": "./core" }] }
  