type MyOmit<T, K extends keyof T> = Pick<
  T,
  {
    [P in keyof T]: P extends K ? never : P;
  }[keyof T]
>;

// 其他方式
type MyOmit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type MyOmit3<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
type MyOmit4<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;
