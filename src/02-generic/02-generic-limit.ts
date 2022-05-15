/**
 * 泛型约束
 *  类型变量 extends 类型
 */
// 定义一个接口，用来约束将来的某个类型中必须要有length这个属性
interface ILength {
  length: number;
}

function getLength<T extends ILength>(t: T): number {
  return t.length;
}

console.log(getLength<string>('what are you doing'))
// console.log(getLength<number>(3)) // error


// 默认类型
interface MyType<T = string> {
  value: T;
}

// error
// let t2: MyType = {
//   value: 123
// }
//

// right
let t2: MyType<number> = {
  value: 123
}
