/**
 * Pick<T, K extends keyof T> 的作用是将某个类型 T 中的子属性挑出来，变成包含这个类型部分属性的子类型。
 * 实现:
      type Pick<T, K extends keyof T> = {
          [P in K]: T[P];
      };
 */
interface Cat {
  name: string;
  age: number;
  description: string;
}

type CatPick = Pick<Cat, "name" | "age">;
const catPick: CatPick = {
  name: "波斯猫",
  age: 3,
};

/**
 * Exclude<T, U> 的作用是排除一个 `联合类型` T 中指定的子类型U。
 * 实现:
      type Exclude<T, U> = T extends U ? never : T
 */
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

/**
 * Extract<T, U> 的作用是从 T 中提取出 U。
 * 实现:
      type Extract<T, U> = T extends U ? T : never;
 */
type T3 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T4 = Extract<string | number | (() => void), Function>; // () =>void

/**
 * Omit<T, K extends keyof any> 的作用是使用 T 类型中除了 K 类型的所有属性，来构造一个新的类型。
 * 实现:
      type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
 */
type CatOmit = Omit<Cat, "description">;

const CatOmit: CatOmit = {
  name: "加菲猫",
  age: 2
};
