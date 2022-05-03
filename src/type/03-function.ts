/**
 * 函数类型：
 *  语法：(p1: T1, p2: T2, ...) => T
 */

let fn1: (a: number) => void;

// 居然返回值可以声明任意类型??????
fn1 = () => 3;

// 直接定义的函数有自己的隐式函数类型,编译器会推导出 sum 函数具有类型(a: number, b: number) => number
function sum(a: number, b: number): number {
  return a + b;
}
// 通过typeof关键字获取函数sum的类型
let fn2: typeof sum;

fn2 = (c: number, d: number): number => c + d;

// 少一个参数居然可以？？？？？？ 但是调用会提示必须传两个参数
fn2 = (a: number): number => a;

/**
 * 可选参数在调用时可以不必传参
 * 可选参数必须位于必选参数之后
 */

function test(a: number, b?: number, ...c: string[]): void {
    console.log(arguments)
  // ...
}
// test(); // 错误，必选参数a未传递
test(1); // 正确，忽略可选参数
test(1, 2); // 正确，传递可选参数
test(1, 2, '4');
