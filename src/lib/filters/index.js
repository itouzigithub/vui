
/* ------------------------------------------- 数字格式化 ------------------------------------------- */
// '10000000.00' => '10,000,000.00'
export function addThousandSeparator (num) {
  var str = String(num);
  if (!str) return num;
  var arr = str.split('.');
  return arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (arr[1] ? ('.' + arr[1]) : '')
}

/**
 * 给字符串等间距的添加空格
 * 例如 '10241023102210' => '1024 1023 1022 10'
 *
 * @text { String } 
 * @postion { Number } 每隔多少位增加空格，默认为 4
 * @prefix { Boolean } 前置（默认） '10241023102210' => '10 2410 2310 2210' | 后置：'10241023102210' => '1024 1023 1022 10'  
 */
export function addSpace (text, position, prefix) {
  var position = position || 4;
  prefix = prefix === undefined ? true : prefix;
  var str = String(text);
  if (!str || str.length <= position) return text;

  var mod = str.length % position;
  var init = prefix ? str.slice(0, mod) : '';
  var arr = prefix ? str.slice(mod).split('') : str.split('');
  return arr.reduce((pre, cur, index) => {
    return pre + (index % position === 0 ? " " + cur : cur)
  }, init)
}

export function hideNumber (num) {
  var str = String(num);
  if (!str || str.length < 8) return num;
  return str.replace(/(\d{3})\d*(\d{4})/, '$1****$2');
}


/* ------------------------------------------- 日期格式化 ------------------------------------------- */

export function formatDate (stamp) {
  stamp = stamp < 1e10 ? stamp * 1000 : stamp
  var date = new Date(stamp);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d
}

export function formatTime (stamp) {
  stamp = stamp < 1e10 ? stamp * 1000 : stamp
  var date = new Date(stamp);
  var h = date.getHours();
  var min = date.getMinutes();
  var s = date.getSeconds();
  h = h < 10 ? '0' + h : h;
  min = min < 10 ? '0' + min : min;
  s = s < 10 ? '0' + s : s;
  return h + ':' + min + ':' + s
}

export function formatDateTime (stamp) {
  stamp = stamp < 1e10 ? stamp * 1000 : stamp
  var date = new Date(stamp);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var min = date.getMinutes();
  var s = date.getSeconds();
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  h = h < 10 ? '0' + h : h;
  min = min < 10 ? '0' + min : min;
  s = s < 10 ? '0' + s : s;
  return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s
}
