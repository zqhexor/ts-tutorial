/**
 * 接口类型
 * 对象类型是匿名的接口类型，对象类型没有名字，接口类型有名字
 */
interface Post {
  title: string;
  content: string;
  subtitle?: string; // 可选参数
  readonly summary: string; // 只读参数
}

let post: Post = {
  title: "Ti10",
  content: "final",
  summary: "dead game",
};

/**
 * 动态参数
 */
interface CacheStore {
  [prop: string]: number;
}

const cache: CacheStore = {};
cache.foo = 1;
cache.moo = 2;

// 接口的应用
/**
 * 1.描述对象
 * 对象字面量在直接赋值的时候，编译器会检查字面量类型是否完全匹配
 */
interface Person {
  name: string;
  age: number;
}
// 错误，对象字面量直接赋值检查所有属性的兼容性
// let man: Person = {
//   name: '萧瑟',
//   age: 20,
//   gender: '男'
// }

let male = {
  name: "萧瑟",
  age: 20,
  gender: "男",
};

// 在上面的例子中，对象字面量 male 被编译器推导为匿名接口类型;匿名接口类型包含了 Person 接口的所有属性 name、age，编译器认为类型匹配，通过类型检查
// 正确，male包含Person接口的所有属性
let man: Person = male;

/**
 *2.描述函数
 */
interface MyFunc1 {
  (name: string, age: number): string;
}

let fn: MyFunc1; //
// let fn: { (name: string, age: number): string; } // 匿名接口
// let fn: (name: string, age: number) => string;

fn = function (name: string, age: number): string {
  return `${name}, ${age}`;
};

// 定义myFunc 函数
function myFunc() {}
// myFunc具有静态属性 `test`
myFunc.test = "hello world";

// 声明接口类型描述函数 myFunc
interface MyFunc {
  // 这条语句描述函数定义
  (): void;
  // 这条语句描述静态属性 `test`
  test: string;
}

// 正确，类型匹配
let newFunc: MyFunc = myFunc;

/**
 * 4.描述类
 */
class NewClass {}
// 用接口来描述这个类类型
interface MyClass {
  new (): NewClass;
}

// 声明一个变量为描述这个类的接口类型并初始化
let myClass: MyClass = NewClass;
console.log(typeof NewClass);
// 等价于
// let myClass: typeof NewClass = NewClass;

// 在实际使用中我们很少直接用接口来声明一个函数或数组

/**
 * 用类来实现接口
 */
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

// 实现接口
class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

/**
 * 接口继承
 */
interface Shape6 {
  color: string;
}
interface Square6 extends Shape6 {
  sideLength: number;
}

// 正确，color 属性来自父接口
let square: Square6 = {
  color: "blue",
  sideLength: 4,
};
