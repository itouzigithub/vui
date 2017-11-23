<template>
  <section>
    <div class="wrap" v-translateX>
      <span class="item" v-for="val in list">{{ val }}</span>
    </div>
    <div class="init">初始位置</div>

    <br>
<pre v-pre><code>// 引入自定义指令 translateX 并注册
&lt;div class="wrap" v-translateX>
  &lt;span class="item" v-for="val in list">{{ val }}&lt;/span>
&lt;/div>

// 可以传入一个数值控制滑动的速度，这个值默认为 100，值越大速度越快
&lt;div class="wrap" v-translateX="200">
  &lt;span class="item" v-for="val in list">{{ val }}&lt;/span>
&lt;/div>

// 如需调整间距，可自行修改源码，默认间距为 20px

// CSS 参考
.wrap {
  width: 400px;
  height: 40px;
  position: relative;
  background-color: #f2f2f2;
  overflow: hidden;
}
// 初始定位应该设置在右端
.item {
  display: inline-block;
  position: absolute;
  height: 40px;
  line-height: 40px;
  top: 0;
  left: 100%;
  transition-timing-function: linear;
  white-space: nowrap;
}</code></pre>
  
  <br>
  <p>垂直轮播用法同上，只需将自定义指令名称改为 translateY，且滚动元素初始位置应置于底部</p>
  <div class="wrap2" v-translateY>
    <div class="item2" v-for="val in list">{{ val }}</div>
  </div>

  </section>
</template>

<script>
  import { translateX, translateY } from '../../directives'
  export default {
    data () {
      return {
        list: ['用户xxxx领取礼品一份', '用户xxxx领取礼品一份', '用户xxxx领取礼品一份', '用户xxxx领取礼品一份', '用户xxxx领取礼品一份']
      }
    },
    directives: {
      translateX,
      translateY
    }
  }
</script>

<style scoped>
  .wrap {
    width: 400px;
    height: 40px;
    position: relative;
    background-color: #f2f2f2;
    overflow: hidden;
    display: inline-block;
  }
  .init {
  	display: inline-block;
  	width: 180px;
  	height: 40px;
  	line-height: 40px;
  	color: #ccc;
  	border: 1px dashed #e5e5e5;
  	vertical-align: top;
  	text-align: center;
  	font-size: 14px;
  }
  .item {
    display: inline-block;
    position: absolute;
    height: 40px;
    line-height: 40px;
    top: 0;
    left: 100%;
    transition-timing-function: linear;
    white-space: nowrap;
  }
  .wrap2 {
    width: 400px;
    height: 200px;
    position: relative;
    background-color: #f2f2f2;
    overflow: hidden;
  }
  .item2 {
    position: absolute;
    width: 100%;
    height: 60px;
    top: 100%;
    left: 0;
    transition-timing-function: linear;
    text-align: center;
    line-height: 60px;
    border-top: 1px solid #e5e5e5;
  }
</style>