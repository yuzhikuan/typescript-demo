/**
 * 定义一个Person类
 */
class People {
  private name: string;
  private age: number;
  static blood: string = '红色';

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 实例方法能访问所有属性，包括static属性
  getInfo (): void {
    alert(`名字：${this.name}，年龄：${this.age}，血液颜色：${People.blood}!`);
  }

  // static方法只能访问static属性
  static getBlood (): void {
    alert(`人类血液颜色是${People.blood}`);
  }
}

// 实例化People类
const p = new People('王五', 33);
p.getInfo();

// 调用People类的static方法 getBlood
People.getBlood();


/**
 * 定义一个抽象类Animal
 * 
 * 抽象类不能被实例化，只能被其他类继承
 * 抽象类可以有实例属性和方法及构造函数
 * 
 */
abstract class Animal {
  public name: string;
  public readonly age: number;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHi (): void {
    alert(`${this.name}今年${this.age}岁了！`);
  }

  abstract eat (): void;
}

/**
 * 定义一个Dog类，继承自Animal
 * 
 * 必须实现被继承abstract类的abstract方法
 * 
 */
class Dog extends Animal {
  constructor (name: string, age: number) {
    super(name, age);
  }

  eat(): void {
    alert(`${this.name}爱吃骨头！`);
  }
}

/**
 * 实例化Dog类
 */
const d = new Dog('小八', 5);

// 可以给public属性name赋值
d.name = '小汪';

// 不能给readonly属性age 赋值
// d.age = 8; // ==> 报错

// 调用父类的sayHi方法
d.sayHi();

// 调用子类实现的eat方法
d.eat();