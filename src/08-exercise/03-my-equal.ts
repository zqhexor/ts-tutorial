type MyEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false


type TestMyEqual = MyEqual<string, string>

/**
 * 解析：
 * 1.普通的 extends 为什么会骗人？
 *  - any 的干扰：any extends string 是 true，string extends any 也是 true。所以没法用 extends 区分 any 和其他类型。
 *  - 字面量宽泛化：1 extends number 是 true，但 number extends 1 是 false
 *  - 只读属性：{ a: 1 } 和 { readonly a: 1 } 互相 extends 都是 true。
 *
 * 2.这个高阶函数构造是什么意思？
 *  关键在于：T 是一个没有被指定的泛型。
 *  当 TS 看到这两个函数在对比时，它不会去尝试运行它们，它会进入一种**“实验室对比模式”**：
 *  - 它发现这两个函数都是 () => 返回值
 *  - 它开始对比两边的返回值：T extends X ? 1 : 2 和 T extends Y ? 1 : 2
 *  - 因为 T 是未知的，编译器无法通过简单的赋值规则来判断它们是否兼容。为了安全起见，编译器内部规定：只有当 X 和 Y 是“完全相同的类型标识”时，这两个函数才被认为是兼容的
 *
 * 3.为什么它能防住 any？
 *  TS 源码中，针对这种“泛型函数条件类型”的比较，有一段专门的 C++ 代码逻辑
 *  - 如果左边标记是 any，右边标记是 number。编译器会说：“虽然从逻辑上 any 能代表 number，但作为类型定义，这两个函数的内部构造是不一样的！”于是，它返回 false
 */
