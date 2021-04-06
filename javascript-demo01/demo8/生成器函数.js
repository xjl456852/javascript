/*
生成器函数是在普通的函数function后面加入* 类似于可以遍历的函数.
格式:
function* 函数名() {
    yield ...
    return ...;
}
通过yield暂停并返回值,通过next()调用下一次,获取返回值
返回的对象中value为返回值,done表示是否执行完成函数.false表示没执行完成.
如果已经调用完成了,接着调用next(),会返回{ value: undefined, done: true }

带参数的生成器函数:

 */

function* test(x) {
    yield x+1;
    yield x*5
    return x**2
}

console.log(test(10)) //Object [Generator] {}
let t = test(10);
console.log(t.next()) //{ value: 11, done: false }
console.log(t.next()) //{ value: 50, done: false }
console.log(t.next()) //{ value: 100, done: true }
console.log(t.next()) //{ value: 100, done: true }
console.log(t.next()) //{ value: undefined, done: true }

/*
带参数的生成器函数
 */
console.log("=====带参数生成器函数===")
function* param(x) {
    var y = 2* (yield(x+10))
    var z = yield((y+20)*10)
    return x+y+z;
}

var p = param(1)

//next(参数) 参数表示上次next()的返回值,会替换上次next()方法获取的真正返回值,如果上次没有next()方法,则这个参数没实际作用.

//3这个参数没用上,因为内有上次next()方法调用,无法替换上次调用返回的结果.这个参数写不写都行,或者写多少都行.
console.log(p.next(3)); //{ value: 11, done: false }

//用6这个参数代替上次next()方法执行后的结果,带入到表达式里计算,相当于代替表达式(yield(x+10))的结果.然后再进行一次next()计算.
// 此时计算出y的值为2*6=12,再计算yield((y+20)*10)为320,返回320
console.log(p.next(6)); //{ value: 320, done: false }

//此时用9替换上次next()返回的值,z=9,然后x=1,y=12 最后计算x+y+z=22
console.log(p.next(9)); //{ value: 22, done: true }


// 斐波那契数列
//输出斐波那契数列前n项
function feib(n) {
    let a=0;
    let b=1;
    let res = 0;
    for (let i=1; i<n; i++) {
        a = b;
        b = res;
        res = a + b
    }
    return res;
}

console.log(feib(10));

function* feib2(n) {
    let a=0;
    let b=1;
    let res = 0;
    for (let i=0; i<n; i++) {
        yield a;
        res = a + b;
        a = b;
        b = res;
    }
}
let f = feib2(10)

for (let number of f) {
    console.log(number)
}
