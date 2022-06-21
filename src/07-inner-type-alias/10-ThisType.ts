/**
 * 默认情况下可以理解成typescript将函数中的this as any，而noImplicitThis:true的情况下，必须去声明this的类型，才能在函数或者对象中使用this
 * ThisType 我们可以在对象字面量中键入 this，并提供通过上下文类型控制 this 类型的便捷方式。它只有在 --noImplicitThis 的选项下才有效
 */

//  如果这个方法显式指定了 this 参数，那么 this 具有该参数的类型
let bar = {
  x: 'hello',
  f(this: { message: string }) {
    this; // { message: string }
  }
};

// 否则，如果方法由带 this 参数的签名进行上下文键入，那么 this 具有该参数的类型
let foo = {
  x: 'hello',
  f(n: number) {
    this; // { x: string, f(n: number): void }
  }
};

// 否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中包含由 ThisType<T> 键入的上下文类型，那么 this 的类型为 T
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj10 = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    }
  }
});

obj10.x = 10;
obj10.y = 20;
obj10.moveBy(5, 5);

// 否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中不包含由 ThisType<T> 键入的上下文类型，那么 this 的类型为该上下文类型。
type Point10 = {
  x: number;
  y: number;
  moveBy(dx: number, dy: number): void;
};

let p: Point10 = {
  x: 10,
  y: 20,
  moveBy(dx, dy) {
    this.x += dx; // this has type Point
    this.y += dy; // this has type Point
  }
};

// 否则，如果 --noImplicitThis 选项已经启用，this 具有该对象字面量的类型。
// 否则，this 的类型为 any。
