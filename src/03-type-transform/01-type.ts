/**
 * 类型别名
 *  type 别名 = 类型
 */
// 联合类型别名
type StringOrNumber = string | number;
// 通过类型查询定义别名
type ObjectStatics = typeof Object;
// 泛型函数别名
type Callback<T> = (data: T) => void;
