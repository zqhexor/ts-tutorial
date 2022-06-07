/**
 * 分布式条件类型
 *  T extends U ? X : Y
 *  如果T被检查的类型是一个 “裸” 类型参数，即没有被数组、元组或 Promise 等包装过，则该条件类型被称为分布式条件类型
 *  对于分布式条件类型来说，当传入的被检查类型是联合类型的话，在运算过程中会被分解成多个分支
 */

type Naked<T> = T extends boolean ? "Y" : "N";
type WrappedTuple<T> = [T] extends [boolean] ? "Y" : "N";
type WrappedArray<T> = T[] extends boolean[] ? "Y" : "N";
type WrappedPromise<T> = Promise<T> extends Promise<boolean> ? "Y" : "N";
type T80 = Naked<number | boolean>; // "N" | "Y"
type T81 = WrappedTuple<number | boolean>; // "N"
type T82 = WrappedArray<number | boolean>; // "N"
type T83 = WrappedPromise<number | boolean>; // "N"

/**
 * 实现获取对象中的函数属性
 */
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

interface Teacher {
  id: number;
  name: string;
  age: number;
  updateName(newName: string): void;
}

type T21 = FunctionPropertyNames<Teacher>; // "updateName"
type T22 = FunctionProperties<Teacher>; // { updateName: (newName: string) => void; }

/**
 * 实现获取对象中的非函数属性
 */
type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

type T23 = NonFunctionPropertyNames<User>; // "id" | "name" | "age"
type T24 = NonFunctionProperties<User>; // { id: number; name: string; age: number; }
