type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? MyAwaited<R>
    : R
  : never;


  /**
   * infer + 递归 + Promise
   * 对于普通的类型，例如type X = Promise，用T extends Promise 即可判断出。
   * 但是对于嵌套类型，例如type Z = Promise<Promise<string | number>>，需要再判断一下P是否为Promise类型，若是的话，递归判断。
   */
