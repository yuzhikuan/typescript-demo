/**
 * 定义一个Person类
 * 
 * 修饰符：
 * public     公有    当前类、子类、实例对象都可访问
 * protected  受保护  当前类、子类里可访问
 * private    私有    只在当前类访问
 * 
 */
class Person {
  public name: string;
  protected age: number;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  run (): void {
    alert(`${this.name}在运动`);
  }

  getInfo (): void {
    alert(`我叫${this.name}，今年${this.age}岁了!`);
  }
}

/**
 * 定义一个Man类，使其继承自Person类
 * 
 * 继承：
 * extends，super
 * 
 */
class Man extends Person {
  private sex: string = '男';

  constructor (name: string, age: number) {
    super(name, age);
  }

  // 覆盖父类的同名方法 -- 访问父类public属性 name
  run (): void {
    alert(`${this.name}在运动--子类`);
  }

  // 子类新增自身的方法 -- 访问父类protected属性 age
  getAge (): void {
    alert(`我的年龄是${this.age}`);
  }

  // 子类新增自身的方法 -- 访问自身private属性 sex
  getSex (): void {
    alert(`我的性别是${this.sex}`);
  }
}

/**
 * 实例化Man类
 */
const m = new Man('李四', 20);

// 可以访问Person类中public属性 name
m.name; // ==> '李四'

// 不能访问Person类中protected属性 age
// m.age; // ==> 报错

// 调用父类的方法
m.getInfo();

// 不能访问Man类中private属性 sex
// m.sex; // ==> 报错

// 调用子类的方法
m.run();
m.getAge();
m.getSex();