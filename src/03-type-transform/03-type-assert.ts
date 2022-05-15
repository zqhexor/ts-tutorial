/**
 * 类型断言用来明确告诉编译器一个值的类型，相当于类型转换，断言有两种语法格式：
 *  1、尖括号语法：<类型表达式>值
 *  2、as语法：值 as 类型表达式
 *
 * 为了避免和 JSX 语法产生冲突，尖括号语法只能在 tsx 文件中使用
 * 尖括号 <> 的运算符优先级低于点号 . ，因而必须用括号将断言表达式扩起来，直接这样写是错误
 */

 let someValue: any = "this is a string";

 // 1、尖括号语法
 let strLength1: number = (<string>someValue).length;
 // 2、as语法
 let strLength2: number = (someValue as string).length

 /**
 * 非空断言
 *  值!
 */
function myFuncs(maybeString: string | undefined | null) {
  // Type 'string | null | undefined' is not assignable to type 'string'.
  // Type 'undefined' is not assignable to type 'string'.
  // const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
  console.log(ignoreUndefinedAndNull)
}
myFuncs('abc')
myFuncs(undefined)

/**
 * 确定赋值断言
 * 在 TypeScript 2.7 版本中引入了确定赋值断言，
 * 即允许在实例属性和变量声明后面放置一个 ! 号，从而告诉 TypeScript 该属性会被明确地赋值
 */
 let numberAb!: number // 确定赋值断言
 initialize()
 console.log(2 * numberAb) // 如果没有确定赋值断言，会Error
 function initialize() {
   numberAb = 10
 }
