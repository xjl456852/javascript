// 数组自带排序方法,使用的比较少.
//通过字符串ascii的码进行比较,排列数字有问题.
// reverse();//逆序排序,按当前顺序的逆序排序,不是按大小的逆序.

// sort(); //顺序排序

var arr = [7, 2, 1, 8];

console.log(arr.reverse());//[ 8, 1, 2, 7 ]

console.log(arr.sort()); //[ 1, 2, 7, 8 ]

var arr1 = [1, 16, 14, 5];
console.log(arr1.sort()); //[ 1, 14, 16, 5 ]  这个结果就有问题.不是按数字大小排序的

//冒泡排序

var arr1 = [3, 1, 4, 10, 15, 6, 9];
console.log("未排序:"+arr1)
for(var i=0; i<arr1.length;  i++) {
    for(var j=0; j<arr1.length-i-1; j++) {
        if(arr1[j] > arr1[j+1]) {
            var temp = arr1[j+1]
            arr1[j+1] =arr1[j]
            arr1[j] = temp;
        }
    }
}

console.log("已排序:"+arr1)

//选择排序
var arr2 = [3, 1, 7, 10, 15, 6, 9];
for(var i=0; i<arr2.length-1; i++) {
    var temp = i;
    for(var j=i+1; j<arr2.length; j++) {
        if(arr2[temp] > arr2[j]) {
            temp = j;
        }
    }
    if(temp != i) {
        var t = arr2[i];
        arr2[i] = arr2[temp];
        arr2[temp] = t;
    }
}
console.log(arr2)