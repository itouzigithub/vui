<template>
  <section>
    <h3>轮播图</h3>
    <br>
<pre><code>// 基本用法
&lt;banner :pics="pics" height="350px" />

// pics { Array } required
// auto { Boolean } optional 控制是否自动轮播，默认为 true
// height { String } optional 默认高度为 100%，要么定义包含块，
   要么通过 height 传入高度

// 参数格式
pics: [{
  link_url: '',
  pic_url: ''
}]
</code></pre>
    
    <banner :pics="pics" height="350px" />

    <br>
    <br>
    <h3>自定义焦点图形</h3>
    <br>
    <p>slot 可接收两个参数：length-图片数量，order-当前图片是第几张图，从 1 算起</p>
    <p>可利用这两个参数控制焦点的展示</p>
    <p>注意：需使用<a href="https://cn.vuejs.org/v2/guide/components.html#作用域插槽" target="_blank">作用域插槽</a></p>
    <p>注意：需加上 v-if="pics.length > 1" 的条件</p>
    <p>注意：Vue2.5+ 中 scope="props" 应写为 slot-scope="props"！！！</p>

<pre><code>&lt;banner :pics="pics" height="350px">
  &lt;template scope="props" v-if="pics.length > 1">
    &lt;div class="slot">
      &lt;i :style="{
        width: 1 / props.length * 100 + '%', 
        left: (props.order - 1) / props.length * 100 + '%'
      }">
      &lt;/i>
    &lt;/div>
  &lt;/template>
&lt;/banner>
</code></pre>
    
    <banner :pics="pics" height="350px">
      <template scope="props">
        <div class="slot">
          <i :style="{width: 1 / props.length * 100 + '%', left: (props.order - 1) / props.length * 100 + '%'}"></i>
        </div>
      </template>
    </banner>
  </section>
</template>

<script>
  import banner from '../../lib/widgets/banner/banner.vue'
  export default {
    data () {
      return {
        pics: [{
          link_url: '',
          pic_url: 'http://img1.3lian.com/2015/a1/84/d/94.jpg'
        }, {
          link_url: '',
          pic_url: 'http://img1.3lian.com/2015/a1/84/d/98.jpg'
        }, {
          link_url: '',
          pic_url: 'http://img1.3lian.com/2015/a1/84/d/102.jpg'
        }]
      }
    },

    components: {
      banner
    }
  }
</script>

<style scoped>
  .slot {
    width: 30%;
    height: 3px;
    border-radius: 1.5px;
    text-align: center;
    position: absolute;
    left: 35%;
    bottom: 20px;
    background: rgba(255, 255, 255, .2);
    z-index: 3;
  }
  i {
    display: block;
    height: 100%;
    border-radius: 1.5px;
    background-color: #fff;
    position: absolute;
    top: 0;
    transition: all .3s;
  }
  .active {
    background-color: rgba(255, 255, 255, .8);
  }
</style>