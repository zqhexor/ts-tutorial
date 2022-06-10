type MyOmit<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? never: T[P]
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;
