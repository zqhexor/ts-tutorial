/**
 * Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?
 * 实现:
      type Partial<T> = {
        [P in keyof T]?: T[P];
      };
 */

interface TodoItem {
  title: string;
  description: string;
}

const todo1: Partial<TodoItem> = {
  description: "描述",
};

/**
 * Required<T> 的作用就是将某个类型里的属性全部变为必选项
 * 实现:
      type Required<T> = {
        [P in keyof T]-?: T[P];
      };
 * 以上代码中，-? 的作用就是移除可选项 ?
 */

interface Props {
  a?: number;
  b?: string;
}

const props1: Props = { a: 5 }; // 正确
// const props2: Required<Props> = { a: 5 }; // 错误

/**
 * Readonly<T> 的的作用是将某个类型所有属性变为只读属性
 * 实现:
      type Readonly<T> = {
        readonly [P in keyof T]: T[P];
      };
 */

const todo3: Readonly<TodoItem> = {
  title:"名字",
  description: "描述"
}

// todo3.title = "标题" // 错误
