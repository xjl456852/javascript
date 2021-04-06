//使用示例, 返回格式化后的日期

function formatDate(date) {
    if(null == date) {
        //如果没传入日期就使用当前日期
        date = new Date();
    }
    let fullYear = date.getFullYear();
    let mouth = date.getMonth()+1;
    let date1 = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();
    if(day == 0) {
        day = "日"
    }
    return fullYear + "年" + mouth + "月" + date1 + "日 星期" + day + " "+ hours + ":" + minutes + ":" + seconds
}

let s = formatDate();
console.log(s) //2021年1月30日 星期6 19:46:41

//获取几天后的日期,参数可以为负数
function addDate(num) {
    var day = new Date();
    let date = day.getDate();
    day.setDate(date + num);
    return day;
}

console.log(formatDate(addDate(10)));

//定时器,返回一个定时器的id,可以用于清除定时器
var i = 0;
let interval = setInterval(function() {
    i++;
    console.log(i)
    if(i >=3) {
        clearInterval(interval);
    }
},1000);

//innerHtml; 这个没什么好说的,返回html中标签内容,也可以设置.
// let elementById = document.getElementById("abc2021年1月30日 星期6 19:46:41");
// let innerHTML = elementById.innerHTML;
// elementById.innerHTML = "<div></div>"