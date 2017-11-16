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