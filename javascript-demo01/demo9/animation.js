/*
手动写一个动画组件
 */

/*
封装一个函数,兼容ie和高级浏览器
获取一个对象的属性.
 */
function getProperty(ele, attr) {
    return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele)[attr];
}


/**
 * 变化速度由快变慢,到目标值时,速度为0.使其兼容px,opacity.
 * @param ele 需要变化的目标对象
 * @param property 目标对象的属性
 * @param target 属性需要变化的目标值,变化的可能是位置,颜色,透明度等等.
 */
function animateDetail(ele, property, target) {
    clearInterval(ele[property+"inter"])
    ele[property+"inter"] = setInterval(() => {
        //如果是透明度,先扩大100倍.
        let tar = property == 'opacity' ? target *100 : parseInt(target);
//需要将这个目标属性值变为数字,否则可能会有px这种文字在里面
        let propertyValue;
        if(property == 'opacity') {
            propertyValue = parseFloat(getProperty(ele, property)) * 100;
        } else {
            propertyValue = parseInt(getProperty(ele, property));
        }

        //设置速度,随着不断调佣此函数,速度会由大变小.
        //这种在出现小数时上面获取的数值就会变成0,但是数值还没有变化到目标值.所以需要对变化值进行处理
        let speed = (tar - propertyValue)/ 30;
        //如果是改变位置的话,可能目标位置在其负方向位置或者正方向位置,有可能会产生正负两种效果.
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if(tar != propertyValue) {
            if (property == 'opacity') {
                ele.style[property] = (propertyValue + speed)/100;
            } else {

                ele.style[property] = propertyValue + speed + "px";
            }
        } else {
            clearInterval(ele[property+"inter"]);
        }
    },50)
}

/**
 * 对包装的对象进行遍历处理
 * @param ele
 * @param properties
 */
function animate(ele, properties) {
    for(let key in properties) {
        let value = properties[key];
        animateDetail(ele, key, value);
    }
}

