/**
 * 这是学习内置类型别名前的一个准备环节，需掌握以下知识
 *  1.type: 类型别名；
 *  2.typeof: 用来获取一个变量声明或对象的类型；
 *  3.keyof: 用来获取一个对象中的所有 key 值，返回的是一个所有对象的key的联合类型;
 *  4.in: 用来遍历枚举类型;
 *  5.infer: 在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用;
 *  6.extends: 泛型约束
 */

// keyof
interface Singer {
  name: string;
  age: number;
}
type K1 = keyof Singer; // "name" | "age"
type K2 = keyof Singer[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
type K3 = keyof { [x: string]: Person }; // string | number

// in
type Keys = "a" | "b" | "c";
type Obj = {
  [p in Keys]: any;
};
let someObject: Obj = {
  a: 1,
  b: 2,
  c: 1
};

// infer
type ReturnType1<T> = T extends (
  ...args: any[]
) => infer R ? R : any;
// 比如内置类型ReturnType的实现：以上代码中 infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。
