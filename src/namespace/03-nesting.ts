/**
 * 空间嵌套
 * namespace A {
      namespace B {
        namespace C {
          // ...
        }
      }
    }
 *
 * 嵌套的命名空间遵循普通成员一样的规则，要在外面访问被嵌套的命名空间，必须使用关键字 export
 * 命名空间前也要加修饰符 export
 */

 namespace A {
  export namespace B {
    export let msg = 'hello world';
  }
}

console.log(A.B.msg);
