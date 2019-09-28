"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 定义一个Person类
 */
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    // 实例方法能访问所有属性，包括static属性
    People.prototype.getInfo = function () {
        alert("\u540D\u5B57\uFF1A" + this.name + "\uFF0C\u5E74\u9F84\uFF1A" + this.age + "\uFF0C\u8840\u6DB2\u989C\u8272\uFF1A" + People.blood + "!");
    };
    // static方法只能访问static属性
    People.getBlood = function () {
        alert("\u4EBA\u7C7B\u8840\u6DB2\u989C\u8272\u662F" + People.blood);
    };
    People.blood = '红色';
    return People;
}());
// 实例化People类
var p = new People('王五', 33);
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
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.sayHi = function () {
        alert(this.name + "\u4ECA\u5E74" + this.age + "\u5C81\u4E86\uFF01");
    };
    return Animal;
}());
/**
 * 定义一个Dog类，继承自Animal
 *
 * 必须实现被继承abstract类的abstract方法
 *
 */
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name, age) || this;
    }
    Dog.prototype.eat = function () {
        alert(this.name + "\u7231\u5403\u9AA8\u5934\uFF01");
    };
    return Dog;
}(Animal));
/**
 * 实例化Dog类
 */
var d = new Dog('小八', 5);
// 可以给public属性name赋值
d.name = '小汪';
// 不能给readonly属性age 赋值
// d.age = 8; // ==> 报错
// 调用父类的sayHi方法
d.sayHi();
// 调用子类实现的eat方法
d.eat();
