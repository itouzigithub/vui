import { addThousandSeparator } from '../filters'
/*
 * 数字递增展示，需要在固定时间内递增展示任意大小的数字
 *
 * value { Number | String } 数字
 * arg { Int } 以毫秒为单位的时长，默认值为 1500
 */
export var increase = {
  inserted (el, binding) {
    var number = binding.value;
    var separate = binding.modifiers.separate;

    if (!isFinite(number) || number <= 0) {
    	el.textContent = separate ? addThousandSeparator(number) : number;
    	return;
    }

    var str = String(number);
    var duration = binding.arg || 1500;
    var match = str.match(/\.(\d+)/);
    var decimalPlace = match ? match[1].length : 0;
    // 20ms per tick => 50Hz
    var minUnit = +(number / (duration / 1000 * 50)).toFixed(decimalPlace);
    var value = minUnit;

    function tick () {
      if (value > number) {
        el.textContent = separate ? addThousandSeparator(number) : number;
        return;
      }
      value += minUnit;
      // why toFixed => 0.1 + 0.2 = 0.30000000000000004
      el.textContent = separate 
      	? addThousandSeparator(value.toFixed(decimalPlace)) 
      	: value.toFixed(decimalPlace);
      setTimeout(tick, 20)
    }
    setTimeout(tick, 20)
  }
}

export var translateX = {
  inserted (el, binding) {
    var width = el.getBoundingClientRect().width;
    var speed = binding.value || 100;
    
    function tick (node) {
      if (!node) {
        node = el.firstElementChild;
      }
      // style 存在说明仍然在运行中
      if (node.style.transform) {
        setTimeout(function () {
          tick(node);
        }, 1000)
        return;
      }
      var w = node.getBoundingClientRect().width + 20;
      var W = width + w;
      var t1 = w / speed;
      var t2 = W / speed;
      node.style = 'transform: translateX(-' + W + 'px);' + 'webkitTransform: translateX(-' + W + 'px);transition-duration: ' + t2 + 's';
      setTimeout(function () {
        tick(node.nextElementSibling)
      }, t1 * 1000);
      setTimeout(function () {
        node.style = '';
      }, t2 * 1000);
    }

    tick()
  }
}

export var translateY = {
  inserted (el, binding) {
    var height = el.getBoundingClientRect().height;
    var speed = binding.value || 100;
    
    function tick (node) {
      if (!node) {
        node = el.firstElementChild;
      }
      // style 存在说明仍然在运行中
      if (node.style.transform) {
        setTimeout(function () {
          tick(node);
        }, 1000)
        return;
      }
      var h = node.getBoundingClientRect().height;
      var H = height + h;
      var t1 = h / speed;
      var t2 = H / speed;
      node.style = 'transform: translateY(-' + H + 'px);' + 'webkitTransform: translateY(-' + H + 'px);transition-duration: ' + t2 + 's';
      setTimeout(function () {
        tick(node.nextElementSibling)
      }, t1 * 1000);
      setTimeout(function () {
        node.style = '';
      }, t2 * 1000);
    }

    tick()
  }
}