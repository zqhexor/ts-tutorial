/**
 * 类型声明
 *  : 类型
 * 冒号加类型构成了类型注解，冒号前后可以包含任意空格
 */

const a1: boolean = true;
const b1: string = "hexor";

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
  throw new Error(message);
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
let n1;

/**
 * any类型 和 unknown类型
 * 所有类型都可以赋值给 any类型和unknown类型
 * unknown 类型只能被赋值给 any 类型和 unknown 类型本身
 * 将 value 变量类型设置为 unknown 后，这些操作都不再被认为是类型正确的
 */
 let value1: any = '123'
 let vaule2: unknown = true
 let value3: string = value1
 // let value4: string = vaule2 // Error
 console.log(value3)
 value1.trim()
 // value2.trim() // Error

/**
 * 类型查询
 *  : typeof 值
 * 类型查询是一条语句，相当于一个独立类型。代码中任何需要显式注解类型的地方，都可以使用类型查询代替
 */
let g1: number;

let h1: typeof g1; // 等价于 let h1: number;
