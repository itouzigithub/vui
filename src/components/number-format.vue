<template>
	<section>
		<h3>千分位逗号</h3>
		<p>{{ 10000000 | addThousandSeparator }}</p>
		<p>对于小数，务必使用字符串，避免小数位中的零被舍掉</p>
		<p>{{ '10000000.00' | addThousandSeparator }}</p>

<pre><code v-pre>&lt;p>{{ '10000000.00' | addThousandSeparator }}&lt;/p></code></pre>
	
		<br>
		<h3>增加空格</h3>
		<p>可以给任意数字或字符串增加等间距的空格</p>
		<p>{{ 102410241024 | addSpace }}</p>
		<p>{{ 10241024102400 | addSpace }}</p>

<pre><code v-pre>&lt;p>{{ 102410241024 | addSpace }}&lt;/p></code></pre>
		
		<p>通过参数指定间隔多少位，默认间隔为 4</p>
		<p>{{ 123123123123 | addSpace(3) }}</p>
		<p>{{ 1123123123 | addSpace(3) }}</p>

<pre><code v-pre>&lt;p>{{ 123123123123 | addSpace(3) }}&lt;/p></code></pre>
		
		<br>
		<h3>隐藏号码</h3>
		<p>保留前 3 个与后 4 个数，中间的数用 4 个 * 替代</p>
		<p>{{ 13588888888 | hideNumber }}</p>

<pre><code v-pre>&lt;p>{{ 13588888888 | hideNumber }}&lt;/p></code></pre>

	</section>
</template>

<script>
	import { addThousandSeparator, addSpace, hideNumber } from '../filters'
	export default {
		filters: {
			addThousandSeparator,
			addSpace,
			hideNumber
		}
	}
</script>