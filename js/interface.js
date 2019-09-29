"use strict";
/**
 * 定义了一个getInfo方法，用FullName接口来约束该方法的参数
 * ? 为可选属性
 */
function getInfo(name) {
    var firstName = name.firstName, lastName = name.lastName, age = name.age;
    if (age) {
        alert("\u6211\u53EB" + firstName + lastName + "\uFF0C\u4ECA\u5E74" + name.age + "\u5C81\u4E86\uFF01");
    }
    else {
        alert("\u6211\u53EB" + firstName + lastName + "\uFF01");
    }
}
// 这种方式调用getInfo 可以比接口多一些属性
var info = {
    firstName: '张',
    lastName: '三',
    age: 33,
    height: '180cm'
};
getInfo(info);
// 这种方式调用getInfo 比接口多一些属性会报错
getInfo({
    firstName: '李',
    lastName: '四',
});
