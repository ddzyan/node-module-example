const t = require("tcomb");

const Person = t.struct(
  {
    name: t.String, // required string
    surname: t.maybe(t.String), // optional string
    age: t.Integer, // required integer
    tags: t.list(t.String) // a list of strings
  },
  "Person"
);

// methods are defined as usual
Person.prototype.getFullName = function() {
  return `${this.name} ${this.surname}`;
};

let person = Person({
  name: "李四",
  age: 10,
  tags: ["篮球"]
}); //

person = Person.update(person, {
  name: { $set: "Guido" }
});

// 实例创建后是不可改变的，你可以使用提供的函数更新不可变的实例
person.name = "张三";

console.log(person.getFullName());
