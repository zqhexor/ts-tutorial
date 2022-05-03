/**
 * 交叉类型
 *  T1 & T2 & ...
 * 交叉类型是将多个类型合并为一个总的类型，它包含了 `多个类型的所有特性`，类似于编程逻辑中的 `且` 操作
 */
interface Bird {
  fly(): void;
}

interface Dog {
  run(): void;
}

class Animal {
  fly() {}
  run() {}
}

let animal: Bird & Dog = new Animal();
