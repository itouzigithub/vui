<template>
  <section>
    <h3>新增数据</h3>
    <br>
    <button @click="showPicker">show picker</button>
    <div class="container">
      打开 console 查看 valueChanged 事件返回值
      <cascade-picker ref="picker" title="选择城市" :slots="slots" @valueChanged="handleValueChange" />
    </div>

<pre><code>// 参数
// slots { Array } required
// title { String } optional 默认值为“请选择”
// @valueChanged 自定义事件，选中项发生变化时触发

// 参数 slots 必须满足以下格式
slots: [
  {
    id: value,
    id: value
  }
]
</code></pre>

<pre><code>// 用法参考
&lt;cascade-picker ref="picker" 
  title="选择城市"
  :slots="slots" 
  @valueChanged="handleValueChange" />

export default {
  data () {
    return {
      slots: [{}, {}, {}] // 有多少列数据，就初始化多少个空对象
    }
  },
  methods: {
    showPicker () {
      if (Object.keys(this.slots[0]).length === 0) {
        // 初始化第一列数据
        this.slots[0] = {
          '1': 'A',
          '3': 'B',
          '5': 'C'
        }
      }
      this.$refs.picker.show = true
    },
    handleValueChange (values) {
      var len = values.length;
      if (len === 1) {
        // 获取第二列数据
        this.slots[1] = {
          '2': 'a',
          '4': 'b',
          '6': 'c'
        }
      }
      if (len === 2) {
        // 获取第三列数据
        this.slots[2] = {
          '10': '1',
          '20': '2',
          '30': '3'
        }
      }
      console.log(values)
    }
  }
}
</code></pre>
    
    <br>
    <h3>编辑数据</h3>
    <br>
    <p>级联选择组件提供了一个设置选项的接口，用于编辑地址时传入参数</p>
<pre><code>// 首先应通过 slots 传入列表数据，然后再调用该方法
this.$refs.picker.setValues(['A', 'b', '3'])
</code></pre>

    <button @click="showPicker2">show picker</button>
    <div class="container">
      打开 console 查看 valueChanged 事件返回值
      <cascade-picker ref="picker2" :slots="slots2" @valueChanged="handleValueChange" />
    </div>

  </section>
</template>

<script>
  import picker from '../../lib/widgets/cascade/cascade-picker.vue'
  export default {
    data () {
      return {
        slots: [{}, {}, {}],
        slots2: [{
          '1': 'A',
          '3': 'B',
          '5': 'C'
        }, {
          '2': 'a',
          '4': 'b',
          '6': 'c'
        }, {
          '10': '1',
          '20': '2',
          '30': '3'
        }]
      }
    },
    methods: {
      showPicker () {
        if (Object.keys(this.slots[0]).length === 0) {
          // 初始化第一列数据
          this.slots[0] = {
            '1': 'A',
            '3': 'B',
            '5': 'C'
          }
        }
        this.$refs.picker.show = true
      },
      showPicker2 () {
        this.$refs.picker2.setValues(['A', 'b', '3'])
        this.$refs.picker2.show = true
      },
      handleValueChange (values) {
        var len = values.length;
        if (len === 1) {
          // 获取第二列数据
          this.slots[1] = {
            '2': 'a',
            '4': 'b',
            '6': 'c'
          }
        }
        if (len === 2) {
          // 获取第三列数据
          this.slots[2] = {
            '10': '1',
            '20': '2',
            '30': '3'
          }
        }
        console.log(values)
      }
    },
    components: {
      'cascade-picker': picker
    }
  }
</script>

<style scoped>
  .container {
    position: relative;
    width: 375px;
    height: 667px;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    color: #ccc;
    padding-top: 50%;
    margin: 20px 0;
  }
</style>