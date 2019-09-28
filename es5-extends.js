/* 
 * 定义一个Person类
 */
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHi = function() {
    alert(`我叫${this.name}，我今年${this.age}岁了！`);
  }
}
// 往Person类的原型对象上添加属性和方法，多个Person类实例共享
Person.prototype.height = '180cm';
Person.prototype.getHeight = function() {
  alert(`我的身高是${this.height}`);
}

/* 
 * 定义一个Man类，使其继承自Person类
 */
function Man(name, age, county) {
  // 对象冒充，继承Person类构造函数里的属性和方法，不能继承到Person类原型上的属性和方法
  Person.call(this, name, age);

  this.sex = '男';
  this.county = county;
  this.getCounty = function() {
    alert(`我的国籍是${this.county}`);
  }
}

// 原型链继承，继承Person类原型对象的属性和方法
Man.prototype = Person.prototype;
Man.prototype.getSex = function() {
  alert(`我的性别是${this.sex}`);
}

/* 
 * 实例化Man类
 */
var m = new Man('李四', 30, '中国');

// 调用父类的方法
m.sayHi();
m.getHeight();

// 调用自身的方法
m.getCounty();
m.getSex();