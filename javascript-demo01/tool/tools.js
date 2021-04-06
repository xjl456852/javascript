//封装为类似jquery的函数
function $(attr) {
    switch (attr[0]){
        case "#" :
            return document.getElementById(attr.substring(1));
            break;
        case ".":
            return document.getElementsByClassName(attr.substring(1));
            break;
        default:
            if(attr.substring(0,5) == "name=") {
                return document.getElementsByName(attr.substring(5))
            } else {
                return document.getElementsByTagName(attr);
            }
            break;
    }

}

/**
 * 从父节点中删除子节点中的空白元素, 删除后作用于原父节点下的子节点数量,子节点会发生变化
 * 删除需要倒着删除,否则会跳过一些节点,跟java中一样
 * @param node
 */
function removeSpaceNode2(node) {
    let childNodes = node.childNodes;
    for (let i=childNodes.length-1; i>=0; i--) {
        if (childNodes[i].nodeType == 3 && /^\s+$/.test(childNodes[i].nodeValue)) {
            //删除子节点
            node.removeChild(childNodes[i]);
        }
    }
}

/**
 * 封装函数创建一个节点并增加元素中的文本
 */
function createElementWithText(elementName, text) {
    return document.createElement(elementName).appendChild(document.createTextNode(text));
}
/**
 * 给一个节点的后面节点插入元素
 * @param newNode
 * @param oldNode
 */
function insertAfter(newNode, oldNode ) {
    let parentNode = oldNode.parentNode;
    removeSpaceNode2(parentNode)
    if(oldNode == parentNode.lastChild) {
        parentNode.appendChild(newNode);
    } else {
        parentNode.insertBefore(newNode,oldNode.nextSibling)
    }
}


/**
 *查询cookie
 */
function getCookie(name) {
    let newCookie = getNewCookie();
    for (let string of newCookie) {
        let strings = string.split("=");
        if (strings[0] == name) {
            return strings[1];
        }
    }
}

/**
 * 设置cookie,并设置过期时间.
 */
function setCookie(name, newValue, addDay) {
    var d = new Date();
    d.setDate(d.getDate()+addDay)
    document.cookie = name+"="+newValue+";expires="+d;
}
/**
 * 移除cookie
 */
function removeCookie(name) {
    setCookie(name,1,-1)
}

/**
 * 获取最新cookie数组,分号后面必须加空格，否则有问题
 * @returns {string[]}
 */
function getNewCookie() {
    let cookie = document.cookie;
    return cookie.split("; ");
}
