// console主要用于日志打印，基础方法不再调用

console.assert(false, "错误"); // 当条件不正确的时候，将输出对应的信息，但是不影响程序的继续执行
/*
Assertion failed: 错误
*/

// 用于统计特定label出现次数
console.count("系统异常");
console.count("系统异常");
console.count("系统异常");
console.countReset("系统异常");
// 重置指定label计数器
console.count("系统异常");
/*
系统异常: 1
系统异常: 2
系统异常: 3
系统异常: 1
*/

// 打印对象信息
const people = {
  name: "xyz",
  age: 12,
  son: {
    name: "dd",
    age: 13
  }
};
console.dir(people);
/*
{ name: 'xyz', age: 12, son: { name: 'dd', age: 13 } }
 */

const table = [
  {
    name: "da",
    age: 12,
    son: {
      name: "da",
      age: 12
    }
  },
  {
    name: "xs",
    age: 13
  }
];
// 将数组对象信息以表格格式打印，避免对对象类型的直接打印
console.table(table);
/*
┌─────────┬──────┬─────┬─────────────────────────┐
│ (index) │ name │ age │           son           │
├─────────┼──────┼─────┼─────────────────────────┤
│    0    │ 'da' │ 12  │ { name: 'da', age: 12 } │
│    1    │ 'xs' │ 13  │                         │
└─────────┴──────┴─────┴─────────────────────────┘
*/

console.time("test"); // 开启一个指定标签的计时器
console.timeLog("test", "输出结果"); // 输出时间和内容
console.timeEnd("test"); // 结束计时器
