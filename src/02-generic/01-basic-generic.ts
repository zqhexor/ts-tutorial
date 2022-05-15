/**
 * 泛型语法
 * 泛型可以为函数、接口、类定义类型变量，这些类型变量就像真实存在的类型一样，可以用于注解值的类型，它的语法形式为：
 *  名字<T1, T2, ...>
 *    名字一般表示函数名、接口名、类名，
 *    T1, T2, ... 表示一个或多个名字任意的类型变量，实际开发中常常以首字母大写的标识符作为类型变量名。
 * 泛型在使用时必须以真实类型替换类型变量
 */

function createArray<T>(length: number, value: T): T[] {
  return Array<T>(length).fill(value);
}
console.log(createArray(3, 8));
console.log(createArray(3, "sb"));

/**
 * 多个泛型参数的函数
 */
function getMsg<K, V>(value1: K, value2: V): [K, V] {
  return [value1, value2];
}

console.log(getMsg<number, string>(2, "good"));

/**
 * 泛型接口
 */
// 定义一个用户信息类
class User {
  id?: number;
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// 定义一个泛型接口
interface IBaseCRUD<T> {
  data: T[];
  add: (t: T) => number;
  getDetailById: (id: number) => T;
}

// 定义一个类，可以针对用户信息进行操作
class UserCRUD implements IBaseCRUD<User> {
  data: User[] = []

  add(user: User) {
    user.id = Date.now() + Math.random()
    this.data.push(user)
    return user.id
  }

  getDetailById(id:number):User {
    return this.data.find((user)=>user.id === id)! // 非空断言
  }
}

const userCRUD: UserCRUD = new UserCRUD()
userCRUD.add(new User('Ame', 20))
const userId: number = userCRUD.add(new User('maybe', 24))
userCRUD.add(new User('kaka', 22))

console.log(userCRUD)
const user: User = userCRUD.getDetailById(userId)
console.log(user)
