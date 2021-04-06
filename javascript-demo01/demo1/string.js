//字符串都是常量,不能被改变.跟java中一样,不过js字符串,也可以用单引号引起来
//创建字符串方式
//方式一: 通过new 关键字创建
var str1 = new String(1234);
//方式二,可以省略new关键字
var str2 = String(1234);
//方式三,直接创建:
var str3 = "1234";

//访问方式,无法修改其中一个char来修改字符串数据.
//方式一: 通过charAt(下标)访问

var a = str1.charAt(0);
console.log(a)
//方式二: 跟数组的访问方式一样,通过[下标访问]
var b = str1[0];
console.log(b)


//写一些在java中没有的方法
//字符串.charCodeAt(下标) //返回字符串下标字母所在的Unicode 编码,汉字
console.log("he天下".charCodeAt(3)) //19979

//String.fromCharCode(unicode编码,unicode编码...) 从unicode码转为文字
console.log(String.fromCharCode(19979))//下

//字符串连接的方法
// 字符串1.concat(字符串2)


//字符串正则匹配, 正则表达式用 /正则/ 来进行表示 后面可以加上ig, i表示忽略大小写,g表示全局匹配,search方法不支持g参数.
// "".search(普通字符串或正则表达式)

console.log("Abcabcesfabcd".search("abc")); //3 //普通的字符串搜素,返回索引位置
console.log("bAbcabcesfabcd".search(/abc/i));//1

//javascript的语法标准.
// ECMAjavascript是js的语法标准
// ECMA5 是第五版
//ECMS6 是当前最新版本

//严格模式
// 通过 "use strict" 来声明哪个作用域下使用严格模式,使用了严格模式,一些未声明的变量,超出作用域的变量被使用到都会报错.

// 非严格模式下不会报错
//如果给变量赋值的时候,变量没有用var声明,则会将变量直接变为全局变量处理
/*function m1() {
    max = 10;
}
m1();
console.log(max)  //10*/
//可以在部分作用域中使用严格模式,也可以全局使用.
//严格模式下,变量必须声明,声明后,也不能在非作用域中访问这个变量.
function m1() {
    "use strict"
    var max = 10;
}
m1();
// console.log(max)  //这里也不能访问.
