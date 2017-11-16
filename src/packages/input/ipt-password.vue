<template>
  <div class="ipt-row">
    <div class="ipt-icon">
      <i class="fa fa-lock"></i>
    </div>

    <div class="ipt-wrap">
      <input v-if="!showPassword"
        type="password"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :value="value"
        @input="update">
      <input v-else
        type="text"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :value="value"
        @input="update">
    </div>

    <div class="ipt-icon">
      <i class="fa fa-times" @click="clear" v-show="value.length !== 0"></i>
    </div>

    <div class="ipt-icon">
      <i class="fa"
        :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" 
        @click="showPassword = !showPassword">
      </i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      'value': {
        required: true
      },
      'maxlength': {
        default: 16,
        type: Number
      },
      'minlength': {
        default: 6,
        type: Number
      },
      'placeholder': {
        default: '请输入密码'
      }
    },

    data () {
      return {
        showPassword: false
      }
    },

    methods: {
      update (e) {
        this.$emit('input', e.target.value)
      },
      clear () {
        this.$emit('input', '')
      },
      isInvalid () {
        var p = this.value;
        if (p.length < this.minlength || p.length > this.maxlength) {
          return {
            type: 'password',
            info: '密码格式错误'
          }
        } else {
          return false
        }
      }
    }
  }
</script>

