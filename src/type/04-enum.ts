/**
 * 枚举类型
 *  enum T { ... }
 * 如果没有对枚举值显式初始化，那么枚举值默认为数字类型，第一个出场的元素默认为数字 0，后续未显式初始化的枚举值会在前一个数字值的基础上自动 +1
 */

enum Direction {
  Up, // 值默认为 0
  Down, // 值默认为 1
  Left = 3.3, // 值为3.3
  Right, // 3.3 + 1 = 4.3
}
let d4: Direction = Direction.Right;
console.log(d4);

let x4: string = Direction[4.3]
console.log(x4);

enum Direction1 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
