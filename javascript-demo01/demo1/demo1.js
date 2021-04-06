console.log(1+null) //1 null转为0
console.log(typeof null) //object
console.log(Number(null)) //null转为0
console.log(Number(false)) //0
console.log(Number(true)) //1
console.log(typeof []); //object
//数据类型转化测试
/*

1.数字类型
总结: 数字类型与任何其他数据类型进行算数运算的时候,除了和字符串相加操作外,其他类型都会自动转为数字.如果不能转为数字的会转为NaN.
    false => 0
    true => 1
特殊类型中:
    null => 0
    undefined => NaN

用Number(待转换的数据) 来将数据转为数字类型.
    1. 纯数字字符串最后会转为数字.
    2.非纯数字字符串转为NaN
 parseInt() 兼容Number类型, 并进行取整或从头开始遇到非数字字符会进行截取(第一个字符不能是数字).
 parseFloat() 取浮点数 带小数的数字. 从头开始遇到非数字字符会进行截取(第一个字符不能是数字).

 1/0  Infinity  无穷大
 -1/0 -Infinity 负无穷大
*/
console.log("number 类型--")
console.log(1 * "1") //1
console.log(1 / "1") // 1
console.log(1 * "1a") //NaN
console.log(1 + true) //2
console.log(1 + false) //1
console.log(1 + undefined) //NaN
console.log(1 + null) //1
console.log(Number("23")) //23
console.log(parseInt("2.34")) //2
console.log(parseInt("235b")) //235
console.log(parseFloat("3.14")) //3.14
console.log(parseFloat("3.1456ab")) //3.145
console.log(1/0) //Infinity
console.log(-1/0) //-Infinity

console.log("--其它类型转化")
console.log(Number("")) //0
console.log(1 * "") //0


/*
通过方法进行强制类型转换.

Boolean() //通过方法将别的类型强制转为布尔值.
结论:
    1.数字0转为boolean为false,所有非0数字转为boolean都为true
    2.空字符串转boolean为false, 非空字符串转为boolean都为true
    3.null,undefined,NaN 转为boolean都为false.
    4. [] 转为boolean 为 true
 */
console.log("boolean type -------")
console.log(Boolean(1)) //true
console.log(Boolean(0)) //false
console.log(Boolean(-1)) //true
console.log(Boolean("ab")) //true
console.log(Boolean("")) //false
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(NaN)) //false
console.log("---特殊类型转boolean")
console.log(Boolean([]))  //true
console.log(!+[] ) // 相当于 !+"", 而 "" 与!运算会先将""转为boolean,其为false, !+false = true
console.log(!+true) //false, 相当于取反
console.log(!+true+!+true) //0, 相当于 false + false = 0
console.log(!+false)  //true 相当于取反
console.log(!false)  //true 相当于取反
console.log(!+[]+[]) //"true" 相当于true+"" = "true"
console.log(!+[]+[]+![]) //"truefalse" 相当于 "true"+false="truefalse"
/*
let obj = {
    valueOf: function () {
        console.log('valueOf');
        return {}; // object
    },
    toString: function () {
        console.log('toString');
        return 'obj'; // string
    }
}
console.log(1 + obj);  //valueOf -> toString -> '1obj'
console.log(+obj); //valueOf -> toString -> NaN
console.log('' + obj); //valueOf -> toString -> 'obj'
*/

console.log("关系运算符比较===")
console.log(5 > 3) //true
console.log(5 > "3") //true
console.log("a" > "b") //false
console.log("abc" > "abcd") //false,逐个比较字符ascii.
console.log(2>true) //true
console.log("关系运算符相等和不等的运算.")
console.log(1==true) //true
console.log(1=="1") //true
console.log(1==="1") //false 必须类型和值都相等才为true
console.log(NaN == NaN) //false
console.log(1 == "1a") //false,相当于1==NaN,结果为false.
console.log(20 === Number("20")) //true,因为Number("20")的结果就是数字,所以类型和数值都相等.
/*
逻辑非可以用于任何值,无论这个值是什么数据类型,这个运算符都会都会返回一个布尔值.他的流程是:先将这个值转成布尔值,然后取反
1.如果操作一个空字符串,则返回true
2.操作非空字符串,返回false
3.操作数是0返回,结果为true
4.操作数是任意非零0的数值(包括Infinity),结果为false
5.操作NaN结果为true,操作undefined结果为true
*/
console.log("逻辑非运算符===")
console.log(!"") //true
console.log(!null) //true
console.log(!"abc") //false
console.log(!0) //true
console.log(!Infinity)//false
console.log(!-Infinity)//false
console.log(!-NaN)//true
console.log(!-undefined)//true

