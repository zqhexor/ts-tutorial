// 方法一：
type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}

// 方法二：
type DeepReadonly2<T> = {
  readonly [k in keyof T]: T[k] extends Record<any, any>
  ? T[k] extends Function
    ? T[k]
    : DeepReadonly2<T[k]>
  : T[k]
}
