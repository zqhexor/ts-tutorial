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
  c: 1,
};

// infer
// infer 只能在 extends 的右边使用，infer XXX 的 XXX 也只能在条件类型为 True 的一边使用
type ReturnType1<T> = T extends (...args: any[]) => infer R ? R : any;
// 比如内置类型ReturnType的实现：以上代码中 infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。

// A 是 B 的子类型，那么类型为 A 的变量就可以赋给类型为 B 的变量了
// A | B -> A or B -> A & B（父 -> 子 -> 孙）

/**
 * 协变(co-variant)：类型推导到其子类型的过程，类型收敛
 * 逆变(contra-variant)：类型推导到其超类型的过程，类型发散
 *
 * 在 TypeScript 中，对象、类、数组和函数的返回值类型都是协变关系，而函数的参数类型是逆变关系
 */

//  例如：Cat => Cat 代表一个函数，它的参数是猫，返回值也是猫，请问以下哪个选项，是函数的子类型即能保证ts的类型安全？
// Animal => Garfield // 动物 => 加菲猫

type TestType<T> = T extends (a: infer P, b: infer P) => void ? P : never;
// 提问AnswerType是什么类型，是联合类型呢还是交叉类型呢
type AnswerType = TestType<(a: { name: string }, b: { age: number }) => void>;

// (a: infer P,b: infer P) => void -> 子类型是(a: {name: string}, b: {age: number})=> void
// 所以(a: infer P,b: infer P)逆变到(a: {name: string}, b: {age: number})
// 为了求P，可以反推(a: {name: string}, b: {age: number})协变到P即推子类型
// 所以子类型是他们的交叉类型，答案是{name: string} & {age: number}

const answer: AnswerType = {
  name: "hexor",
  age: 123,
};

/**
 *
 * P 只在一个位置占位：直接推出类型
 * P 都在协变位置占位：推出占位类型的联合
 * P 都在逆变位置占位：推出占位类型的交叉（目前只有参数是逆变）
 * P 既在顺变位置又在逆变位置：只有占位类型相同才能使 extends 为 true，且推出这个占位类型
 */
