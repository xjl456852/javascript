/*var arr = [1,2,3]
arr.length=2
console.log(arr[2]) //undefined
arr.length=3
console.log(arr[2]) //undefined,变回长度也不行

for(var i in arr) {
    console.log(arr[i])
}*/

/*
数组的栈和队列结构:
    数组的方法:
    栈:
    数组.push(元素...)
    功能:给数组末尾添加元素
    参数:需要添加的元素,个数任意,
    返回值:添加完元素后的长度

    数组.pop()
    功能:移除栈顶的元素,并返回:
    返回值: 栈顶元素


    队列:
    数组.shift()
    功能:从数组的头部取出一个元素
    返回值:取出的头部元素

    数组.unshift(元素...)
    功能:从数组头部插入元素,元素个数不限.
    参数:要插入的元素
    返回值:插入元素后数组的长度
 */

var arr = ["xiejl", "abc", "hh"];
let length = arr.push("xixi");
console.log(arr)
console.log(length)

let string = arr.pop();
console.log(string)
console.log(arr)

let string1 = arr.shift();
console.log(string1)
console.log(arr)

let number = arr.unshift("a","b","c");
console.log(number)
console.log(arr)