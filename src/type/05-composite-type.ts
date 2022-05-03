interface Bird {
  fly(): void;
}

interface Dog {
  run(): void;
}

/**
 * 交叉类型
 *  T1 & T2 & ...
 * 交叉类型是将多个类型合并为一个总的类型，它包含了 `多个类型的所有特性`，类似于编程逻辑中的 `且` 操作
 */
class Animal {
  fly() {}
  run() {}
}

let animal: Bird & Dog = new Animal();

/**
 * 联合类型
 *  T1 | T2 | ...
 * 联合类型是取多个类型中的其中之一，只要满足了其中一个类型，就认为类型兼容。联合类型类似于编程逻辑中的 `或` 操作
 */
class Animal1 {
  fly() {}
}
class Animal2 {
  run() {}
}

// 正确，满足了Bird
let animal1: Bird | Dog = new Animal1();
// 正确，满足了Dog
let animal2: Bird | Dog = new Animal2();

/**
 * 高级联合
 * 联合类型非常神奇，构成联合类型的组合可以是以下三种方式的任意组合：
 *  - 值与类型
 *  - 值与值
 *  - 类型与类型
 */
// 值与类型混搭
let u5: 99 | string | boolean;
u5 = "a";
u5 = 99;
u5 = true;

/**
 * keyof 关键字
 *  keyof T （T代表类型）
 * keyof 关键字作用于类型，通过获取一个类型的所有属性名，生成一个新的字符串值的联合类型
 * 换句话说：keyof 关键字生成的是字符串值的联合，每个字符串值都是被获取类型 T 的键的索引名
 */
interface Person {
  name: string;
  age: number;
}

// 通过keyof关键字声明联合
let keyWord: keyof Person; //等价于 let keyWord: "name" | "age";
keyWord = "name";
keyWord = "age";
