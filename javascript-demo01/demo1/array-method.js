/*
数组的方法:
    数组.concat(另一个数组)
    功能:合并两个数组为一个新数组,原数组数据保持不变
    参数:要合并的数组
    返回值:合并后的数组

    数组.slice(start, end)
   功能:基于当前数组获取指定区域的元素,并创建一个新数组, 原数组保持不变
   参数: start数组的起始位置,end数组的结束位置,左开右闭
   返回值: 指定区域元素生成的新数组

   数组.splice(start, length, 元素...)
   功能:可以完成数组的插入,删除,替换操作
   参数:
    参数1: 截取的起始下标
    参数2: 截取的长度
    参数3: 截取的起始下标位置,插入我们要插入的元素,插入元素个数随意, 原下标位置元素整体后移
    返回值:截取掉的元素组成的数组.
    [注]:会对原始数组进行修改

    数组.join(拼接福)
    功能:使用拼接符将数组中的元素拼接为字符串. array的默认toString()方法就是用逗号作为拼接符连接数组元素.
    参数:拼接符
    返回值:拼接后的字符串


 */
console.log("concat-----")
var arr1 = ["a", "b", "c"]
var arr2 = ["1", "2", "3"]
let strings = arr1.concat(arr2);
console.log(arr1)
console.log(arr2)
console.log(strings)
console.log("slice-------")
var arr3 = ["a", "b", "c", "d"];
const strings1 = arr3.slice(1,3);
console.log(arr3)
console.log(strings1)
console.log("splice----------")
var arr4 = ["a", "b", "c", "d"];
//插入
console.log("splice----------insert")
let strings2 = arr4.splice(2,0, "xiejl", "ha");
console.log(arr4)
console.log(strings2)
//删除
console.log("splice----------delete")
const strings3 = arr4.splice(1,2);
console.log(arr4)
console.log(strings3)
//替换,相当于先删除,再插入
console.log("splice----------update")
let strings4 = arr4.splice(2,1,"x");
console.log(arr4)
console.log(strings4)
console.log("join----------")
var arr5 = ["a", "b", "c"]
let s = arr5.join("--");
console.log(arr5);
console.log(s)

