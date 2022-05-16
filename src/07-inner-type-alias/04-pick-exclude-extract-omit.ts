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
  age: 3
};


/**
 * Exclude<T, U> 的作用是排除一个 `联合类型` T 中指定的子类型U。
 * 实现:
      type Pick<T, K extends keyof T> = {
          [P in K]: T[P];
      };
 */
      type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
const t0: T0 = 'c'

type A = 'x';
type B = 'x' & 'y';

type Y = A extends B ? true : false; // true
