var arr = []
var length = 5;
var count = 0;
for (var i=0; i<length; i++) {
    var newArr= []
    for(var j=0; j<length; j++) {
        newArr.push(++count);
    }
    arr.push(newArr)
}

console.log(arr)

//输出下三角.
var str = ""
for(var i=0; i<arr.length; i++) {
    for(j=0; j<=i; j++) {
        str += arr[i][j] + "\t"
    }
    str +="\n"
}
console.log(str)


