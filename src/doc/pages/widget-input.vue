<template>
  <section>
    <p>输入框的宽高是高度不确定的，因此作为组件，宽高默认均为 100%，完全依赖于父节点的宽和高</p>
    <p>因为样式具有较高复用性，单独封装是不合算的，因此样式定义在 vui.common.css 公共组件样式文件中</p>
    <p>特定类型的输入框存在不同的内部逻辑，故应该分类单独封装。包括图标也应该封装在内部，而不是由外部配置</p>
    <p>非特定类型、纯样式性的输入框组件无需封装，参考按钮的方式自定义样式</p>
    <br>
    <h3>手机号输入框</h3>
    <div class="ipt-container hair-bottom">
      <ipt-phone v-model="phone" />
    </div>

<pre><code>&lt;div class="ipt-container">
  &lt;ipt-phone v-model="phone" />
&lt;/div>
</code></pre>
    
    <br>
    <h3>密码输入框</h3>
    <div class="ipt-container hair-bottom">
      <ipt-password v-model="password" />
    </div>

<pre><code>// 可选参数
// @maxlength { Number } 默认为 16
// @minlength { Number } 默认为 6
// @placeholder { String }
&lt;div class="ipt-container hair-bottom">
  &lt;ipt-password v-model="password" />
&lt;/div>
</code></pre>

    <br>
    <h3>有效性验证</h3>
    <p>每个特定输入框组件必须包含 isInvalid() 方法，父组件仅需调用下列方法，即可获得校验结果</p>

<pre><code>checkValidity () {
  var children = this.$children;
  var res;
  for (var i = 0; i < children.length; i++) {
    if (res = children[i].isInvalid()) {
      alert(res.type + ': ' + res.info);
      return false
    }
  }
  return true
}
</code></pre>

    <button @click="checkValidity">check validity</button>

    <br>
    <br>
    <br>
    <h3>数值输入框</h3>
    <p>原生的 number 类型输入框允许输入负号、e、小数点</p>
    <p>封装的 number 类型输入框仅仅允许输入数字</p>
    <div class="ipt-container hair-bottom">
      <ipt-number v-model="number" />
    </div>

<pre><code>// 可选参数
// @isInvalidFn { Function } 自定义有效性验证函数，默认函数总是返回 false
// @placeholder { String }
&lt;div class="ipt-container">
  &lt;ipt-number v-model="number" />
&lt;/div>
</code></pre>

    <br>
    <h3>搜索框</h3>
    <p>样式的封装，应该仅仅封装最稳定的部分，其他部分由外部配置。直接用 CSS 配置，而不是传参数</p>

    <div style="width: 375px;">
      <ipt-search v-model="search" />
    </div>

    <br>
    <br>
    <br>
  </section>
</template>

<script>
  import phone from '../../lib/widgets/input/ipt-phone.vue'
  import password from '../../lib/widgets/input/ipt-password.vue'
  import number from '../../lib/widgets/input/ipt-number.vue'
  import search from '../../lib/widgets/input/ipt-search.vue'
  export default {
    data () {
      return {
        phone: '',
        password: '',
        number: '',
        search: ''
      }
    },
    components: {
      'ipt-phone': phone,
      'ipt-password': password,
      'ipt-number': number,
      'ipt-search': search
    },
    methods: {
      checkValidity () {
        var children = this.$children;
        var res;
        for (var i = 0; i < children.length; i++) {
          if (res = children[i].isInvalid()) {
            alert(res.type + ': ' + res.info);
            return false
          }
        }
        return true
      }
    }
  }
</script>

<style>
  .ipt-container {
    width: 360px;
    height: 40px;
    margin-bottom: 15px;
    margin-top: 10px;
    position: relative;
  }
</style>