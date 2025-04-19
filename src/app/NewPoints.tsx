// 1. Function Currying in TypeScript
function curry(a: number): (b: number) => number {
    return function(b: number): number {
      return a + b;
    };
  }
  
  
  // 2. Overload Signatures with Generics
  function wrap<T>(value: T): T[];
  function wrap<T>(value: T): T[] {
    return [value];
  }
  
  // 3. Generic Type Inference from Function Parameters
  function identity<T>(arg: T): T {
    return arg;
  }
  const result = identity("Hello");
  
  // 4. Using ReturnType<typeof fn> in Nested Functions
  function getData() {
    return { name: "TS", version: 5 };
  }
  type DataType = ReturnType<typeof getData>;
  
  // 5. Using Parameters<typeof fn> in HOFs
  function add(a: number, b: number): number {
    return a + b;
  }
  type AddParams = Parameters<typeof add>;
  
  // 6. Conditional Inference with infer and Tuples
  type Unpack<T> = T extends (infer U)[] ? U : T;
  type Example = Unpack<number[]>; // number
  
  // 7. Tuple Mapping & Transformation
  type ToStrings<T extends any[]> = {
    [K in keyof T]: string;
  };
  type Stringified = ToStrings<[1, 2, 3]>;
  
  // 8. Distributive Conditional Types
  type RemoveNull<T> = T extends null | undefined ? never : T;
  type Clean = RemoveNull<string | null | number>;
  
  // 9. Utility Type DeepReadonly
  type DeepReadonly<T> = {
    readonly [K in keyof T]: DeepReadonly<T[K]>;
  };
  
  // 10. Utility Type DeepPartial
  type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
  };
  
  // 11. Valueof Utility Type
  type ValueOf<T> = T[keyof T];
  
  // 12. Deep Record Types
  type DeepRecord<K extends string, T> = {
    [P in K]: { [key: string]: T };
  };
  
  // 13. Flatten Object Types
  type Flatten<T> = {
    [K in keyof T]: T[K];
  };
  
  // 14. Pluck Type From Object Array
  type Pluck<T, K extends keyof T> = T[K][];
  
  // 15. Transform Object Key Cases (camelCase, snake_case)
  type SnakeToCamel<S extends string> = S extends `${infer P}_${infer R}` ? `${P}${Capitalize<SnakeToCamel<R>>}` : S;
  
  // 16. Extending Interfaces with Constraints
  interface A<T extends string> {
    value: T;
  }
  
  // 17. Excluding Null/Undefined from Object Keys
  type NonNullableKeys<T> = {
    [K in keyof T]: NonNullable<T[K]>;
  };
  
  // 18. Recursive Partial with Nested Objects
  type RecursivePartial<T> = {
    [K in keyof T]?: RecursivePartial<T[K]>;
  };
  
  // 19. Safe Access with Optional Generic Chains
  type Safe<T> = T extends object ? { [K in keyof T]?: Safe<T[K]> } : T;
  
  // 20. Omitting Index Signature Keys
  type NoIndex<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
  };
  
  // 21. Function Factory Types
  function createAdder(a: number): (b: number) => number {
    return (b: number) => a + b;
  }
  
  // 22. Component Props Factory
  function createProps<T>() {
    return (props: T) => props;
  }
  
  // 23. Dynamic Keys Based on Generics
  type DynamicObject<K extends string, T> = {
    [P in K]: T;
  };
  
  // 24. Tagging Types with Metadata
  type Tagged<T, Tag extends string> = T & { __tag: Tag };
  
  // 25. Mapped Keys to Union Types
  type KeysToUnion<T> = keyof T;
  
  // 26. Typing React Children Props
  interface WithChildren {
    children: React.ReactNode;
  }
  
  // 27. Higher-Order Components with TypeScript
  // function withLogger<P>(Component: React.ComponentType<P>) {
  //   return (props: P) => {
  //     console.log("Rendering", Component.name);
  //     return <Component {...props} />;
  //   };
  // }
  
  // 28. Typing Ref with forwardRef
  // const Input = React.forwardRef<HTMLInputElement, { label: string }>((props, ref) => (
  //   <input ref={ref} placeholder={props.label} />
  // ));
  
  // 29. Typing useReducer State & Dispatch
  type State = { count: number };
  type Action = { type: "inc" } | { type: "dec" };
  
  // 30. Strictly Typing Event Handlers in React
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e.currentTarget);
  }
  
  // 31. Module Aliasing in tsconfig.json
  // "paths": { "@utils/*": ["src/utils/*"] }
  
  // 32. Custom Paths in TypeScript Projects
  // import { fn } from '@utils/helper';
  
  // 33. Compile-Time Constant Enums
  enum Status {
    SUCCESS = "success",
    ERROR = "error"
  }
  
  // 34. Strict Function Types with Type Safety
  const strictFn: (a: number, b: string) => void = (a, b) => {
    console.log(a, b);
  };
  
  // 35. Decorators with Metadata Reflection API
  function Log(target: any, key: string) {
    console.log(`Logging property: ${key}`);
  }
  
  // 36. Type-Safe Unit Testing with Jest & TS
  // test("adds", () => {
  //   const result = 1 + 1;
  //   expect(result).toBe(2);
  // });
  
  // 37. Type Checking Test Mocks
  // const fetchMock = jest.fn<() => Promise<string>>();
  
  // 38. Using tsd to Write Type-Only Tests
  // expectType<string>("Hello");
  
  // 39. Testing Utility Types
  type TestType<T> = T extends string ? true : false;
  
  // 40. Testing Components with @testing-library/react in TS
  // render(<MyComponent />);
  
  // 41. Using tsc with Watch Mode
  // tsc --watch
  
  // 42. Using ts-node for CLI tools
  // ts-node cli.ts
  
  // 43. Creating Typed CLI Apps (e.g., with Yargs)
  // import yargs from 'yargs';
  // yargs.command('say [msg]', 'Prints a message', {}, (argv) => {
  //   console.log(argv.msg);
  // }).argv;
  
  // 44. Generating .d.ts Files for Libraries
  // tsc --declaration
  
  // 45. Typed Code Generation with Templates
  const greeting = (name: string) => `Hello, ${name}`;
  
  // 46. GraphQL Type Inference with TypeScript
  // import { gql } from '@apollo/client';
  // gql`query { user { id name } }`;
  
  // 47. WebSocket Event Typing
  interface WSMsg {
    type: 'ping' | 'pong';
    data?: string;
  }
  
  // 48. gRPC Type-Safe APIs in TS
  // grpc.generate({ protoPath: 'file.proto' });
  
  // 49. Typed API Schemas with OpenAPI + TS
  // Use openapi-typescript npm package
  
  // 50. End-to-End Typesafety (client <-> backend)
  // Share common types across frontend/backend via packages
  