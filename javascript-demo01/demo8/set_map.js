/*
新增set 和map 结构
set 是有顺序的,跟插入顺序保持一致.元素不重复
key和value是一致的,都是set中的元素本身.

将数组转为set
let set = new Set(数组对象)
将set转为数组
let arr = [...set]

for of遍历
set.size //长度
添加元素
set.add(元素)
删除元素
set.delete(元素怒)
是否包含
set.has(元素)
清空
set.clear()


keys() 返回键名集合

遍历;
for in这种遍历不能遍历set,map,可以遍历数组,但是得到是数组的索引
for of遍历集合,遍历数组,得到的都是里面的元素.
for(let key of set.keys()) {
    console.log(key)
}
values() 返回键值集合
entries() 返回键值对集合
for (let [key, value] of set.entries()) {
    console.log(key, value)
}
forEach(): 使用回调韩式遍历每个成员
set.forEach((value,key) => console.log(value))



map集合对象.跟java中的差不多.
let map = new Map([["key1","value1"],["key2","value2"]])

添加元素:
map.set(key,value)

map.size//长度
获取value
map.get(key)
map.has(key)
map.delete(key)
map.clear()
同样有下面的方法
keys(),values(),entries(),forEach()
 */

let set = new Set([7,2,3,4,5,2,5])
console.log(set) //Set(5) { 7, 2, 3, 4, 5 }

let  arr = [...set]
console.log(arr) //[ 7, 2, 3, 4, 5 ]

//长度
console.log(set.size); //5

set.add(1);
console.log(set);//Set(6) { 7, 2, 3, 4, 5, 1 }

set.delete(2)
console.log(set) //Set(5) { 7, 3, 4, 5, 1 }

console.log(set.has(5));//true

// set.clear();
// console.log(set)//Set(0) {}

/*
7
3
4
5
1
和values()返回是一样的.
 */
for (let key of set.keys()) {
    console.log(key)
}

/*
7 7
3 3
4 4
5 5
1 1
 */
for (let [key, value] of set.entries()) {
    console.log(key, value)
}

/*
7
2
3
4
5
 */
// in这种遍历不能遍历set,map,可以遍历数组,但是得到是数组的索引
for (let key in arr) {
    console.log(arr[key])
}

console.log("--------map------")
let map = new Map([["name", "xiejl"], ["age",10]])
console.log(map) //Map(2) { 'name' => 'xiejl', 'age' => 10 }

map.set("addr", "beijing")
console.log(map.size); //3
console.log(map) //Map(3) { 'name' => 'xiejl', 'age' => 10, 'addr' => 'beijing' }

console.log(map.get("addr")); //beijing
console.log("-----map 遍历---")
/*
name xiejl
age 10
addr beijing
 */
for (let [key, value] of map) {
    console.log(key,value)
}