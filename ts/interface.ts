/**
 * 定义一个FullName接口
 */
interface FullName {
  firstName: string;
  lastName: string;
  age?: number;
}

/**
 * 定义了一个getInfo方法，用FullName接口来约束该方法的参数
 * ? 为可选属性
 */
function getInfo (name: FullName): void {
  const { firstName, lastName, age } = name
  if (age) {
    alert(`我叫${firstName}${lastName}，今年${name.age}岁了！`);
  } else {
    alert(`我叫${firstName}${lastName}！`);
  }
}

// 这种方式调用getInfo 可以比接口多一些属性
const info = {
  firstName: '张',
  lastName: '三',
  age: 33,
  height: '180cm'
}
getInfo(info);

// 这种方式调用getInfo 比接口多一些属性会报错
getInfo({
  firstName: '李',
  lastName: '四',
  // height: '180cm'
})