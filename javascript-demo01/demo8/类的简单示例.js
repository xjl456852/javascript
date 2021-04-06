/*
声明和创建类的简单机制
跟java中相似,ts才是更像java的类.
 */

class Person {
    constructor(name) {
        this.name = name;
    }
    process() {
        console.log(this.name)
    }
}
let p = new Person("xiejl")
console.log(p.name); //xiejl
p.process() //输出xiejl