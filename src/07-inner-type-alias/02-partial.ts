/**
 * Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?
 * 实现:
      type Partial<T> = {
        [P in keyof T]?: T[P];
      };
 */

interface Todo {
  title: string;
  description: string;
}

type Todo1 = Partial<Todo>;

const todo1: Todo1 = {
  description: '描述'
};
