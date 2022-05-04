/**
 * 空间拆分
 * ns1 被拆分成两个代码块了，但这两个代码块之间的成员无法互相访问
 * 要想访问被拆分的命名空间成员，必须用 export 导出需要被其他块访问的成员
 */

// 拆分成第一块
namespace ns1 {
  export let a = 1;
}
// 拆分成第二块
namespace ns1 {
  let b = a + 1;
}
