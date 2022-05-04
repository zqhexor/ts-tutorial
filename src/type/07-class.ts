// 定义类
class TypeA {
  // ...
}
// 声明TypeA类型
let a: TypeA;
// 赋值TypeA类型
a = new TypeA();

class Team {
  // 类的成员属性必须赋初始值，要么在此赋值，要么在构造函
  name: string;
  // 私有变量只有类的内部能访问
  private age: number;
  // 受保护的变量不能被外部访问，能够被子类访问
  protected readonly rank: number = 1;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  aboutMe(): void {
    console.log(
      `Hi,我是${this.name}战队,建队${this.age}年了，世界排名${this.rank}`
    );
  }
}

class Club extends Team {
  // 不能被外部访问的构造函数
  private constructor(name: string, age: number) {
    super(name, age);
  }
  static create(name: string, age: number) {
    return new Club(name, age);
  }

  say(): void {
    console.log(this.rank);
  }
}

const team: Team = new Team("RNG", 5);
console.log(team.name);
// console.log(team.age) // error
// console.log(team.rank) // error
team.aboutMe();

const club: Club = Club.create("LGD", 6);
club.aboutMe();
club.say();

class Animal7 {
  // private修饰符用于构造器的name参数前
  constructor(private name: string) {}
}
const animal7: Animal7 = new Animal7("dog");
// animal7.name; // error
