/**
 * 外部声明的特点：
 *  - 必须使用 declare 修饰外部声明
 *  - 不能包含实现或初始化信息（内部声明可以在声明的时候包含实现或初始化）
 *
 * 一般自带类型声明模块，如'query-string'；
 * 否则，则安装类型声明模块，如'lodash'，需安装"npm install @type/lodash --dev"
 * 否则，用declare
 */

// 声明a为一个数字
declare let numberA: number;
// 错误，外部声明不能初始化
// error TS1039: Initializers are not allowed in ambient contexts
// declare let numberB: number = 2;

// 声明fn为一个函数
// 正确，不包含函数体实现
declare function fn12(): void;
// 错误，声明包含了函数实现
// error TS1183: An implementation cannot be declared in ambient contexts
// declare function fn11() {};

// 外部声明还可以用于声明一个模块，如果一个外部模块的成员要被外部访问，模块成员应该用 export 声明导出：
declare module 'io' {
  export function read(file: string): string;
  export function write(file: string, data: string): void;
}
