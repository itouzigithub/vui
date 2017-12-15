<template>
  <section>
    <h3>传入整数</h3>
    <p v-increase="123"></p>

<pre><code>&lt;div v-increase="123">&lt;/div>
</code></pre>

    <br>
    <h3>传入小数</h3>
    <p>传入小数时，务必确保传入的数据类型为字符串，因为传入数字可能导致小数位最后的零被舍去</p>
    <p v-increase="'3485.00'"></p>

<pre><code>&lt;div v-increase="'3485.00'">&lt;/div>
</code></pre>

    <p>对小于等于 0 的数无效</p>
    <p v-increase="'0.0000'"></p>
    
    <br>
    <h3>指定时长</h3>
    <p>接收以毫秒为单位的整数型参数，默认值为 1500</p>
    <p v-increase:3000="'2048.24'"></p>

<pre><code>&lt;div v-increase:3000="'2048.24'">&lt;/div>
</code></pre>

	<br>
	<h3>修饰符</h3>
	<p>可传入修饰符 separate 表示返回的数应该用千分位分隔符</p>
	<p v-increase.separate="'10000000.00'"></p>

<pre><code>&lt;div v-increase.separate="'10000000.00'">&lt;/div>
</code></pre>

  </section>
</template>

<script>
  import { increase } from '../../lib/directives'
  export default {
    directives: {
      increase
    }
  }
</script>