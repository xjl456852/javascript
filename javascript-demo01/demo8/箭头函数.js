/*
箭头函数 =>
与java中的lambda表达式类似.
有一条,多条语句之分.
var 变量 = (形参1,形参2...) = 单条语句 / {多条语句}

解决this指向问题
箭头函数this默认指向也是window对象.
箭头函数的this指向,是指向定义时所在的作用域,而不是执行时所在的作用域.
如果不使用箭头函数时,对于一个对象,谁调用对象中的方法,这个方法中的this就指向谁.
 */

//传统声明函数
var foo = function (a) {
    return a*2+10
};
console.log(foo(10))

//箭头函数声明
var foo = (a) => a*2+10
console.log(foo(10))

//多条语句
var bar = (a) => {
    let b = 10;
    //指数运算
    return (a+b)**2
}
console.log(bar(10)) //400


/**
 * this指向问题
 */
console.log("-----this指向-----")

var baz = () => {
    console.log(this)
}
baz(); //在node执行输出{}, 浏览器执行输出window对象.

//传统方式
var name = "test window"
var obj1 = {
    "name": "xie",
    "process": function () {
        //谁调用这个方法,this就执行调用的对象.
        //这时this知道他指向的对象就是当前对象.
        console.log(this.name)
    }
}
obj1.process(); //xie

//箭头函数
var obj2 = {
    "name": "xie",
    "process":  () => {
        console.log(this.name)
    }
}
obj2.process(); //在浏览器中是输出 test window,而node执行为undefined.

// 上面的写法相当于:
/*
这时的this.name无法感知object中的name变量.
var obj2 = {}
obj2.name = "xie"
console.log(this.name)  //node这里输出undefined,浏览器这里出 test window, 所以箭头函数的this指向就是这里输出的this指向.
obj2.process = () => {
    console.log(this.name)
}
*/

console.log("=====")

var obj3 = {
    "name": "xie",
    "process":  function () {
        //这种setTimeout函数,在执行的时候已经脱离了对象本身的指向,所以this不指向对象,而是执行window
        setTimeout(function (){
            console.log("obj3:"+this.name) //node输出obj3:undefined, 浏览器输出 obj3:test window
        },200)
    }
}
obj3.process();

var obj4 = {
    "name": "xie",
    "process":  function () {
        console.log("obj4第一次:"+this.name)  //obj4第一次:xie, 这个方法定义的时候,已经知道了 name变量的存在.
        //下面的setTimeout中的箭头函数,他的this是定义时的this,相当于将语句写在上面的效果.
        setTimeout(() => {
            console.log("obj4:"+this.name)
        },200)
    }
}
obj4.process();  //xie


var obj5 = {
    "name": "xie",
    "process":  () => {
        //这个因为箭头函数不知道this.name就是obj5的name,所以下面一系列的操作都无法感知对象中的name.
        setTimeout(() => {
            console.log("obj5:"+this.name)
        },200)
    }
}
obj5.process();  //在node中为 obj5:undefined, 浏览器中为obj5:test window