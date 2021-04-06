//日期对象创建的方式
// 1. Date("yyyy-MM-dd")
// 2. Date("yyyy/MM/dd") //这种方式有问题,会有时差,8小时.日期也不对
// 3. Date(yyyy,MM,dd,HH,mm,ss)
// var d = new Date("2020-10-10")
var d = new Date(2020,10,10,19,20,58);

var dd = new Date(1000);
console.log(d)
console.log(dd)

//返回月中的第几天,从1-31
let date = d.getDate();
console.log(date)
//修改日期
d.setDate(8);
console.log(d.getDate())

// 获取一周中的某一天, 0-6, 0为星期天
//获取星期的与java中的不同:
// 都是使用 星期日,星期一,...星期六的顺序.
// js是从0-6赋值, java是1-7赋值. 所以js中星期三返回3, java返回4.
let day = d.getDay();
console.log(day) //2020年11月8日就是星期日,星期日就是0
//获取月份 0-11月 与真实的1-12月对应.
//获取月份的与java中的效果相同
let month = d.getMonth();
console.log(month) //返回10,  2020年11月8日 月返回10.


let parse = Date.parse("1970-01-02"); //返回据1970-01-01 0时的毫秒数
console.log(parse);

//返回毫秒
let time = d.getTime();
console.log(time)



var dNew = new Date("2021-01-01")
console.log(dNew.getDay())

console.log(dNew.valueOf());



