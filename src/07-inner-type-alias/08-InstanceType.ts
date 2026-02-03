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

/**
 * 深度对比：typeof Class vs Class
 * typeof Class：代表类本身的类型（也就是构造函数，包含静态属性和 prototype）
 * Class：代表实例的类型（也就是 new Person() 出来的东西）
 * 如果你手里只有 typeof Class（构造函数），想变回实例类型，就得靠 InstanceType：
 */

/**
 * 常见应用场景：Ref 引用 (React/Vue)
 * 假设这是一个组件定义的类型
 * import MyComponent from './MyComponent.vue';
 * 提取组件实例类型，用于模板引用的类型标注
 * type MyComponentInstance = InstanceType<typeof MyComponent>;
 *
 * 然后在 Vue 组件中使用：
 * <template>
 *   <div>
 *     <MyComponent ref="componentRef" />
 *   </div>
 * </template>
 *
 * <script setup lang="ts">
 * import { ref } from 'vue';
 * import MyComponent from './MyComponent.vue';
 *
 * const componentRef = ref<MyComponentInstance | null>(null);
 *
 * // 可以安全地调用组件实例的方法
 * componentRef.value?.someMethod();
 * </script>
 */
