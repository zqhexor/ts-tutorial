type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

const fn123 = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type AB = MyReturnType<typeof fn123>;
