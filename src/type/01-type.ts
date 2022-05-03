const a1: boolean = true;
const b1: string = 'hexor';

/**
 * Number类型可以是NaN、Infinity
 */
const c1: number = 3;
const d1: number = NaN;
const e1: number = Infinity;

/**
 * Symbol类型
 *  需要把target的标准库改为ES2015，或者把lib改为["ES2015","dom"]
 */
const sym: symbol = Symbol('');

/**
 *  strictNullChecks: true
 *      - null 只能赋值给 Null类型
 *      - undefined 只能赋值给 Undefined类型 和 Void类型
 *
 *  strictNullChecks: false
 *      - null 和 undefined 可以赋值给任意类型
 * 
 *  void类型严格模式下只能是undefined，非严格模式下可以是null
 */
const x1: void = undefined;
const y1: null = null;
const z1: undefined = undefined;

/**
 * Never类型代表不可能存在的类型，Never类型常常伴随着错误和异常出现
 */
function error(message: string): never {
  throw new Error(message)
}

function infiniteLoop(): never {
  while (true) {}
}
// let n: number& boolean 会被编译器推导为 never 类型
// let n: number& boolean = 1 // error

/**
 * 任意值的类型关键字为 any
 * 一个值，如果满足以下任何一个条件，会被判定为任意类型：
 *  1、显式指定类型 any
 *  2、未显式指定类型，且没有初始化或默认值
 */

 let m1: any = 10;
 let n1