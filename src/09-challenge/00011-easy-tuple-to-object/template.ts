type TupleToObject<T extends ReadonlyArray<string | number>> = {
  [K in T[number]]: K
}
