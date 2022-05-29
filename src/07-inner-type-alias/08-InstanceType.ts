/**
 * InstanceType<T> 的作用是获取构造函数类型的实例类型。
 * 实现:
      type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;
 */
class C {
  x = 0;
  y = 0;
}

type IT0 = InstanceType<typeof C>; // C
type IT1 = InstanceType<any>; // any
type IT2 = InstanceType<never>; // never
// type IT3 = InstanceType<string>; // Error
// type IT4 = InstanceType<Function>; // Error

const it0: IT0 = new C()
