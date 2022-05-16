/**
 * NonNullable<T> 的作用是用来过滤类型中的 null 及 undefined 类型。
 * 实现:
      type NonNullable<T> = T extends null | undefined ? never : T;
 */
type T6 = NonNullable<string | number | undefined>; // string | number
type T7 = NonNullable<string[] | null | undefined>; // string[]
