// 创建对象的方法
// 1. 通过new关键字创建
// var person = new Object();
// 2.省略new关键字创建对象
// var person =  Object();
// 3.通过{}创建对象:
var person = {}
//添加属性
person.name = "xiejl";
person.age = 12;
//添加方法,方法为匿名方法.
person.showName = function () {
    console.log(person.name);
}

person.showName();

//在对象中添加属性/方法,也可以通过 对象名["属性名/方法名"] 来创建. 效果与 对象.属性名一样.
person["addr"] = "beijing"
person["showAddr"] = function () {
    console.log(person["addr"])
};
person["showAddr"]();

//删除对象或属性:
// 通过 delete 对象.属性名/方法名 删除
console.log(person.addr);
delete person.addr
console.log(person.addr);