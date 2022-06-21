type Computed<T> = {
  [P in keyof T]: T[P] extends (args: any) => infer V ? V : never
}

type Options<D, C, M> = {
  data: (this: {}) => D,
  computed: ThisType<D & Computed<C> & M> & C
  methods: ThisType<D & Computed<C> & M> & M

}

declare function SimpleVue<D, C, M>(options: Options<D, C, M>): any
