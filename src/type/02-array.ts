/**
 * 数组类型
 *  T[] 或者 Array<T>
 */
const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];
const vec: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

// 元组类型（Tuple）[T0, T1, ...]
let x2: [string, number] = ["xxx", 10];

// 补充只读数组 ReadonlyArray<T>
let arr2: ReadonlyArray<number> = [1, 2, 3];
// error TS2542: Index signature in type 'readonly number[]' only permits reading
// arr2[0] = 11;
