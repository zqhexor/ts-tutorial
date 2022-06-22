// 方法一
type First<T extends any[]> = T extends [] ? never: T[0];

// 方法二
type First2<T extends any[]> = T['length'] extends 0 ? never: T[0];
