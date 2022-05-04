/**
 * 空间别名
 *  可以为命名空间或命名空间成员设置别名
 *  别名关键字为 import
 *  实际上，在当前的编译器版本中，import关键字完全可以替换为let或const
 */

namespace A {
  export namespace B {
    export namespace C {
      export let msg = "hello world";
    }
  }
}

// import为子命名空间C定义别名
import N = A.B.C;
// 输出: hello world
console.log(N.msg);

//import为子命名空间C的成员msg定义别名
import m = A.B.C.msg;
//输出：hello world
console.log(m);


// let为子命名空间C定义别名
let P = A.B.C;
// 输出: hello world
console.log(P.msg);

//const为子命名空间C的成员msg定义别名
const q = A.B.C.msg;
//输出：hello world
console.log(q);
