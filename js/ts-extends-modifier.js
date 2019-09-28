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
 *
 * 修饰符：
 * public     公有    当前类、子类、实例对象都可访问
 * protected  受保护  当前类、子类里可访问
 * private    私有    只在当前类访问
 *
 */
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.run = function () {
        alert(this.name + "\u5728\u8FD0\u52A8");
    };
    Person.prototype.getInfo = function () {
        alert("\u6211\u53EB" + this.name + "\uFF0C\u4ECA\u5E74" + this.age + "\u5C81\u4E86!");
    };
    return Person;
}());
/**
 * 定义一个Man类，使其继承自Person类
 *
 * 继承：
 * extends，super
 *
 */
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.sex = '男';
        return _this;
    }
    // 覆盖父类的同名方法 -- 访问父类public属性 name
    Man.prototype.run = function () {
        alert(this.name + "\u5728\u8FD0\u52A8--\u5B50\u7C7B");
    };
    // 子类新增自身的方法 -- 访问父类protected属性 age
    Man.prototype.getAge = function () {
        alert("\u6211\u7684\u5E74\u9F84\u662F" + this.age);
    };
    // 子类新增自身的方法 -- 访问自身private属性 sex
    Man.prototype.getSex = function () {
        alert("\u6211\u7684\u6027\u522B\u662F" + this.sex);
    };
    return Man;
}(Person));
/**
 * 实例化Man类
 */
var m = new Man('李四', 20);
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
