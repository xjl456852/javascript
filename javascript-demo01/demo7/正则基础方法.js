/*
定义正则:
两种方式都可以定义
1.字面量定义
var reg = /正则表达式/修饰符
修饰符有:g 全局匹配,找到一个字串,会接着找下一个字串 i 忽略大小写
2.构造函数定义
var reg = new RegExp("正则表达式");

正则的方法:
test方法,不需要修饰符:
格式: 正则表达式.test(待测试的字符串)
功能: 用来检查待测试的字符串时候含有符合规则的子串, 如果有返回true,没有返回false.

match 方法.
格式: 待处理字符串.match(正则表达式)
功能: 返回可以匹配到的子串数组
需要使用修饰符,不使用g修饰符只返回第一个匹配的结果,并附带一些其它的索引位置等信息. :
加了g修饰符,返回所有可以匹配到的子字符串数组.如果没有则返回null.

search方法:
格式:待处理字符串.search(正则表达式)
功能: 查找符合规则的子串的位置,只返回第一个匹配的位置.执行几次的效果是一样的,无论加不加修饰符.所以这个方法不用加修饰符.

split方法:
格式: 待处理字符串.split(正则表达式)
功能: 分割字符串,大部分跟常规的java一样,稍有区别对于末尾匹配到的表达式,也会将这个空串加入到返回数组里.

replace方法:
格式: 待处理字符串.replace(正则表达式查找, "替换后的值")
功能: 替换字符串.如果加上g修饰符,跟java中的返回一致.
java中replace方法的查找字符串不是正则表达式.而replaceAll的查找字符串使用的是正则.
可以在替换值中使用分组标识符 $数字

replaceAll方法,这个不加g修饰符会报错.其它好像没啥区别.

exec方法
格式: 正则表达式.exec(待处理字符串)
功能: 将匹配成功的子字符串放到数组里返回,一次执行只返回第一个子字符串,多次执行返回从上次匹配位置之后的新匹配结果,如果没有匹配成功,则返回null.
如果不加g修饰符,执行多次每次返回的都一样.
加了g修饰符,执行多次,会从新的位置开始匹配.

分组输出:
RegExp.$数字 来输出最近一次的分组.
 */

// 测试正则 test方法
var reg1 = /abc/
console.log(reg1.test("hh abc ef"));//true

// match方法
var reg2 = /abc/    //如果不加g修饰符,match返回的是 [ 'abc', index: 3, input: '12 abc 32abc 23', groups: undefined ]
// var reg2 = /abc/g    //加了g修饰符,返回所有可以匹配到的子字符串数组.如果没有则返回null.
console.log("12 abc 32abc 23".match(reg2)); //[ 'abc', 'abc' ]
console.log("12 ab 32ab 23".match(reg2)); //null

//忽略大小写 修饰符
// var reg3 = /abc/i  //只加i修饰符, 返回:[ 'Abc', index: 2, input: '23Abc abcABC54', groups: undefined ]
var reg3 = /abc/gi  //加入全局匹配.
console.log("23Abc abcABC54".match(reg3)); //[ 'Abc', 'abc', 'ABC' ]

//search方法,加不加修饰符都一样.
var reg4 = /abc/
console.log("dd3abck23abc3abc".search(reg4)); //3
console.log("dd3abck23abc3abc".search(reg4)); //3

//split方法,和java中稍有区别.
var reg5 = /abc/
//在java中,下面的返回: [, 23dsd, 9203, 43]
console.log("abc23dsdabc9203abc43abc".split(reg5));//[ '', '23dsd', '9203', '43', '' ]

//replace方法
// var reg6 = /abc/  //如果不用g修饰符,只替换一个,js中返回: *Abc9ABC3abc  跟java中的不一样. java中返回: *Abc9ABC3*
var reg6 = /abc/g //如果使用了g和java中返回一样,返回:*Abc9ABC3*
console.log("abcAbc9ABC3abc".replace(reg6, "*")); //*Abc9ABC3*

//使用正则进行替换.
var reg61 = /(.*)\s(.*)/
console.log("xiejl name".replace(reg61, "$2 $1")); //name xiejl



//replaceAll方法
var reg7 = /abc/g
console.log("abcAbc9ABC3abc".replaceAll(reg7, "*"));

//exec方法
// var reg8 = /abc/  //如果不加g,执行多次每次都返回 [ 'abc', index: 0, input: 'abcAbc9ABC3abc', groups: undefined ]
var reg8 = /abc/g
console.log(reg8.exec("abcAbc9ABC3abc")); //[ 'abc', index: 0, input: 'abcAbc9ABC3abc', groups: undefined ]
console.log(reg8.exec("abcAbc9ABC3abc")); //[ 'abc', index: 11, input: 'abcAbc9ABC3abc', groups: undefined ]
console.log(reg8.exec("abcAbc9ABC3abc")); //null

// RegExp.$1返回离的最近的一组匹配的第一组. 得执行一次匹配方法,执行test方法也可以.
var reg9 = /(.+)\s(.+)\s(.+)/g
console.log("abc ef ges".match(reg9)); //[ 'abc ef ges' ]
console.log(RegExp.$1) //abc
