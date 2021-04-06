/*
let
用来声明变量.用法类似于var, 但声明的变量,只在let命令所在的代码块内有效.
存在块级作用域{}
不存在声明提升
不允许重复声明(包括普通变量和函数参数)

var 在函数内部定义的变量,在函数外部也不能访问.

var在非函数中定义的变量,如if中定义的变量,在if的大括号外部仍然能访问.

const 的使用:
用来声明常量,不能改变其值,否则报错,其余与let一样.

 */

{
    var a = 10;
}
console.log(a) //10

{
    let b = 10;
}
// console.log(b) //无法访问变量b.

function test1() {
    var a1 = 10;
}
test1();
// console.log(a1) //这函数内部var定义的变量外部也不能访问.

var a2 = 10;
if(a2>6) {
    var a3 = 5;
    let b4 = 5;
}
console.log(a3) //5
// console.log(b3) //无法访问

//这种如果a4的定义在log的下面,他会被提前进行声明而不进行赋值,相当于在这个前面定义了var a4; 所以它的输出为undefined
console.log(a4)
var a4 = 10;

// console.log(b4)  //let没有声明提升,所以会报错.Cannot access 'b4' before initialization
// let b4 = 10;

//重复声明不会报错.
var a5 = 10;
var a5 = 10;

//重复声明会报错. Identifier 'b5' has already been declared
// let b5 = 10;
// let b5 = 10;

const c1 = 10;
// c1 = 20; 常量无法重新赋值