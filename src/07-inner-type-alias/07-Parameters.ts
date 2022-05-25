/**
 * Parameters<T> 的作用是用于获得函数的参数类型组成的元组类型。
 * 实现:
      type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
 */
declare function f1(arg: { a: number; b: string }): void;

type Pa0 = Parameters<() => string>; // []

type Pa1 = Parameters<(s: string) => void>; // [s: string]

type Pa2 = Parameters<<T>(arg: T) => T>; // [arg: unknown]

type Pa3 = Parameters<typeof f1>; // [arg: {a: number, b: string}]

type Pa4 = Parameters<any>; // unknown[]

type Pa5 = Parameters<never>; // never

// type Pa6 = Parameters<string>; // error

// type Pa7 = Parameters<Function>; // error

const pa0: Pa0 = [];
const pa1: Pa1 = ["1"];
const pa2: Pa2 = [6];
const pa3: Pa3 = [{ a: 1, b: "1" }];
const pa4: Pa4 = [1];
const pa5: Pa5 = (function (message) {
  throw new Error(message);
})("123");
