/**
 * ReturnType<T> 的作用是用于获取函数 T 的返回类型。
 * 实现:
      type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
 */

type RT0 = ReturnType<() =>string>; // string
type RT1 = ReturnType<(s: string) =>void>; // void
type RT2 = ReturnType<<T>() => T>; // {}
type RT3 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type RT4 = ReturnType<any>; // any
type RT5 = ReturnType<never>; // any
// type RT6 = ReturnType<string>; // Error
// type RT7 = ReturnType<Function>; // Error
