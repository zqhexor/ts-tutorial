/**
 * 抽象类：只能被继承
 * 抽象方法： 必须重写
 *
 * 一般情况下，抽象类和抽象方法是同时出现的，但也有例外:
 *  1.一个类包含抽象方法，那么这个类必须是抽象类
 *  2.抽象类可以没有抽象方法
 */

abstract class Shape {
  color: string = "white";

  fillColor(color: string): void {
    this.color = color;
  }

  abstract getArea(): number;
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rect: Rectangle = new Rectangle(10, 5);
console.log(rect.getArea());
console.log(rect.color);
rect.fillColor("red");
console.log(rect.color);
