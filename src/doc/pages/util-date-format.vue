<template>
	<section>
		<p>使用自定义过滤器实现格式化，要求传入的值为时间戳，秒或毫秒皆可</p>
		<h3>格式化日期</h3>
		<p>{{ Date.now() | formatDate }}</p>

<pre><code v-pre>&lt;p>{{ Date.now() | formatDate }}&lt;/p>
</code></pre>
		
		<br>
		<h3>格式化时间</h3>
		<p>{{ Date.now() | formatTime }}</p>

<pre><code v-pre>&lt;p>{{ Date.now() | formatTime }}&lt;/p>
</code></pre>
		
		<br>
		<h3>格式化日期时间</h3>
		<p>{{ Date.now() | formatDateTime }}</p>

<pre><code v-pre>&lt;p>{{ Date.now() | formatDateTime }}&lt;/p>
</code></pre>

	</section>
</template>

<script>
	import { formatDate, formatTime, formatDateTime } from '../../lib/filters'
	export default {
		filters: {
			formatDate,
			formatTime,
			formatDateTime
		}
	}
</script>