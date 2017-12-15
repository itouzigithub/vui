<template>
  <div class="ipt-row">
    <div class="ipt-icon">
      <i class="fa fa-phone"></i>
    </div>
    <div class="ipt-wrap">
      <input type="phone" maxlength="11" placeholder="请输入手机号码" v-model="number" @input="update">
    </div>
    <div class="ipt-icon">
      <i class="fa fa-times" v-show="number.length !== 0" @click="clear"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        required: true
      },
    },
    data () {
      return {
        nonnumericRE: /\D/g,
        number: this.value
      }
    },
    methods: {
      update (e) {
        var value = e.target.value.replace(this.nonnumericRE, '');
        this.number = value;
        this.$emit('input', value);
      },
      clear () {
        this.number = '';
        this.$emit('input', '')
      },
      isInvalid () {
        var p = this.value;
        if (p.length === 0) {
          return {
            type: 'phone',
            info: '手机号不可为空'
          }
        }
        if (p.length < 11 || !/^1[34578]\d{9}$/.test(p)) {
          return {
            type: 'phone',
            info: '手机号格式错误'
          }
        }
        return false
      }
    }
  }
</script>