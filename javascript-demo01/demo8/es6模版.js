/*
模版字符串:
    使用 `模版语句` 将变量或表达式直接嵌入字符串,变量使用 ${变量名}
    `` 也可以拼接多行字符串
 */
// es5写法
var obj = {"name":"xiejl", "age":12}
console.log("姓名为:"+obj.name +" 年龄为:"+obj.age) //姓名为:xiejl 年龄为:12

// es6写法
console.log(`姓名为:${obj.name} 年龄为: ${obj.age}`) //姓名为:xiejl 年龄为: 12

//es5拼接多行字符串
var str = "<ul>\n" +
            "<li>\n"+
                obj.name+"\n"+
            "</li>\n"+
            "</ul>"
console.log(str)

//es6拼接字符串
var str1 =
`<ul>
    <li>
        ${obj.name}
    </li>
</ul>`;
console.log(str1)