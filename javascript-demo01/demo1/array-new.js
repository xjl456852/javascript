//ES6中新增的数组方法
var arr = [10, 20, 30, 40, 30];
//indexOf 与字符串方法一致
console.log(arr.indexOf(30,3));

//map 方法, 跟java 1.8中的类似
//这三个参数分别是:
// value 当前值
// index是当前值所在数组的索引位置
// array 原始数组
let voids = arr.map(function(value, index, array) {
    console.log(value + " " + index + " " + array)
    return value+2
});
console.log(voids)

//reduce 方法
//pre 是上一个数据,current是当前数据
let number = arr.reduce(function (pre, current, index, array) {
    console.log(pre + " " + current)
    return pre + current;

});
console.log(number)

//filter 方法
let numbers = arr.filter(function (value, index, array) {
    return value >20;
});
console.log(numbers)

//some 判断内部return后面的条件是否有一个元素可以成立, 如果成立则返回true,否则返回false,不继续后续数据判断
let b = arr.some(function (value, index, array) {
    console.log(value)
    return value === 20
});
console.log(b)

//every  判断内部return后面的条件是否数组元素都成立, 如果都成立则返回true,否则返回false,不继续后续数据判断
let b1 = arr.every(function (value, index, array) {
    console.log(value)
    return value < 20
});
console.log(b1)