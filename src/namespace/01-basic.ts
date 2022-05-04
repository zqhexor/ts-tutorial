/**
 * 命名空间
 *  namespace 名字 {
      // ...
    }
 *
 * 命名空间之外访问命名空间之内的成员，必须使用 export 关键字导出
 *
 */

// 定义命名空间 ns
namespace ns {
  export let a = "hello world";
  let b = 1;

  // 正确，可以访问b，因为函数show和变量b在同一个命名空间之内
  function show() {
    console.log(b);
  }
}

// 正确，a被export，可以在ns之外访问
let nsc: string = ns.a;

// 错误，b不允许在ns之外访问
// error TS2339: Property 'b' does not exist on type 'typeof ns'
// let nsd: number = ns.b;
