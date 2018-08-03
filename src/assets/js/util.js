import number from './number'
let util = {

};
/**
 * 对字符串进行Unicode编码
 * @param str
 * @returns {string}
 */
util.decodeStr = function (str) {
    var res = []
    for (var i = 0; i < str.length; i++)
      res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4);
    return '\\u' + res.join('\\u')
}
/**
 * 对unicode编码格式的字符串进行解码
 * @param str
 * @returns {string}
 */
util.undecodeStr = function  (str) {
    var result = []
    var strArr = str.split('\\u')//根据 \u 分割
    var len = strArr.length
    for (var i = 0; i < len; i++) {
      if (strArr[i]) {
        result.push(String.fromCharCode(parseInt(strArr[i], 16)))//16 转 10
      }
    }
    return result.join('')
}
/**
 * 判断传入对象的数据类型
 * @param {*} obj 
 */
util.getObjectType = function(obj) {
  let objType = Object.prototype.toString.call(obj)
  return objType
}
/**
 * 数组去重，
 * @param {*} obj 
 */
util.uniqueArray = function(arr) {
  return Array.from(new Set(array));
}
/**
 * 将对象元素转换成字符串以作比较
 * @param {*} obj 
 */
util.obj2key = function(obj, keys){
  var n = keys.length,
      key = [];
  while(n--){
      key.push(obj[keys[n]]);
  }
  return key.join('|');
}
/**
 * 数组去重，可去除重复对象
 * @param {*} obj 
 */
util.uniqueArrayObj = function(array,keys) {
  var arr = [];
    var hash = {};
    for (var i = 0, j = array.length; i < j; i++) {
        var k = this.obj2key(array[i], keys);
        if (!(k in hash)) {
            hash[k] = true;
            arr.push(array[i]);
        }
    }
    return arr ;
}
/**
 * 传入一个数组和一个key，返回该数组中key列的合计
 * @param {*} array 
 * @param {*} key 
 */
util.sumArrayObj = function(array,key){
  let count = 0;
  array.forEach(item =>{
      count = count + parseFloat(item[key].toString().replace(',',''))
  })
  return count.toFixed(2) //保留小数点后两位
}
/**
 * 返回包含某字符串的过滤数组
 * @param {*} arr 
 * @param {*} value 
 */
util.arrayFilter = function(arr,value) {
    let newArr = new Array()
    arr.forEach(item =>{
        let flag = false
        for(let key in item){
            if(item[key].length > 0){
                if(item[key].toString().toLowerCase().indexOf(value.toLowerCase()) != -1){
                    newArr.push(item)
                    break;
                }
            }
        }
    })
    return newArr
}
/**
 * 计算当前历时
 * @param {*} num 
 */
util.formatNumToDate = function(num) {
  var ihour = num
  if(!number.isNumber(num)) return num
  if ( num== '-1') {
      ihour = '刚刚'
  } else if (num / 24 >= 1) {
      ihour = parseInt( num / 24) + '天';
  } else {
      ihour = num + '小时'
  }
  return ihour
}
/**
 * 获取设备ID
 */
util.getUuid = function() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}
/**
 * 获取url中"?"符后的字串
 */
util.getRequest = function () {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
/**
 * 判断某DOM是否存在某样式
 * @param {*} el
 * @param {*} cls
 */
util.hasClass = function(el, cls) {
    if (!el || !cls) {
      return false
    }
  
    if (cls.indexOf(' ') !== -1) {
      throw new Error('className should not contain space.')
    }
  
    if (el.classList) {
      return el.classList.contains(cls)
    }
    else {
      return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
    }
  }
   /**
   *
   * @param {*} el
   * @param {*} cls
   */
  util.removeClass = function(el, cls) {
    if (!el) {
      return
    }
  
    let curClass = el.className
  
    const classes = (cls || '').split(' ')
  
    for (let i = 0, j = classes.length; i < j; i++) {
      const clsName = classes[i]
      if (!clsName) {
        continue
      }
  
      if (el.classList) {
        el.classList.add(clsName)
      }
      else {
        if (hasClass(el, clsName)) {
          curClass += curClass.replace(clsName,'')
        }
      }
    }
    if (!el.classList) {
      el.className = curClass
    }
  }
  util.strlen  = function(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        //单字节加1 
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        }
        else {
            len += 2;
        }
    }
    return len;
  }
  /**
   *
   * @param {*} el
   * @param {*} cls
   */
  util.addClass = function(el, cls) {
    if (!el) {
      return
    }
  
    let curClass = el.className
  
    const classes = (cls || '').split(' ')
  
    for (let i = 0, j = classes.length; i < j; i++) {
      const clsName = classes[i]
      if (!clsName) {
        continue
      }
  
      if (el.classList) {
        el.classList.add(clsName)
      }
      else {
        if (!hasClass(el, clsName)) {
          curClass += ' ' + clsName
        }
      }
    }
    if (!el.classList) {
      el.className = curClass
    }
  }
  /**
 * 获取某个元素的style样式值
 * @param {*} element
 * @param {*} styleName
 */
util.getStyle = function(element, styleName) {
    if (!element || !styleName) {
      return null
    }
    styleName = camelCase(styleName)
    if (styleName === 'float') {
      styleName = 'cssFloat'
    }
    try {
      const computed = document.defaultView.getComputedStyle(element, '')
      return element.style[styleName] || computed ? computed[styleName] : null
    }
    catch (e) {
      return element.style[styleName]
    }
  }
export default util;
