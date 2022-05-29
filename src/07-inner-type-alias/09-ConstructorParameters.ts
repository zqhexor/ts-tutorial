/**
 * ConstructorParameters<T> 的作用是提取构造函数类型的所有参数类型。它会生成具有所有参数类型的元组类型（如果 T 不是函数，则返回的是 never 类型）。
 * 实现:
      type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
 */
type A9 = ConstructorParameters<ErrorConstructor>; // [(string | undefined)?]
type B9 = ConstructorParameters<FunctionConstructor>; // string[]
type C9 = ConstructorParameters<RegExpConstructor>; // [string | RegExp, (string | undefined)?]

const a9: A9 = [undefined];
const b9: B9 = ["1", "2"];
const c9: C9 = [/r/,'1'];
