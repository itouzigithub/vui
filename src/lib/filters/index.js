
/* ------------------------------------------- 数字格式化 ------------------------------------------- */

export function addThousandSeparator (num) {
  var str = String(num);
  if (!str) return num;
  var arr = str.split('.');
  return arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (arr[1] ? ('.' + arr[1]) : '')
}

export function addSpace (num, position=4) {
  var str = String(num);
  if (!str || str.length <= position) return num;

  var mod = str.length % position;
  var init = str.slice(0, mod);
  return str.slice(mod).split('').reduce((pre, cur, index) => {
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
