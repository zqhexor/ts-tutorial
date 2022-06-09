/**
 * 我们可以用const关键字来断言常量
 *  方法一： <const> T
 *  方法二： T as const
 */

const constant1 = <const>{
  foo: "one",
  bar: "aaa",
};

type Constant1 = typeof constant1;

const constant2 = {
  foo: "one",
  bar: "aaa",
} as const

type Constant2 = typeof constant2;

const constArray = ["foo", "bar", "baz"] as const;
type ConstArray = typeof constArray; //  readonly ["foo", "bar", "baz"]

// 使用字符串数组的值创建联合
const arr = <const>["foo", "bar", "baz"];
type Keys1 = typeof arr[number];  // "foo" | "bar" | "baz"

// 使用对象的键创建联合
const obj1 = {
  foo: 1,
  bar: 2,
  baz: 3,
};
type Keys2 = keyof typeof obj1;  // "foo" | "bar" | "baz"

// 使用对象的值作为联合
const obj = {
  k1: "foo",
  k2: "bar",
  k3: "baz",
} as const;
type Keys3 = typeof obj[keyof typeof obj]; // "foo" | "bar" | "baz"
