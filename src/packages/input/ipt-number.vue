<template>
  <div class="ipt-row">
    <div class="ipt-wrap">
      <input type="text" :placeholder="placeholder" v-model="number" @input="update">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        required: true
      },
      placeholder: {
        type: String
      },
      isInvalidFn: {
        type: Function,
        default: function () { return false }
      }
    },
    data () {
      return {
        number: this.value,
        nonnumericRE: /\D/g,
      }
    },
    methods: {
      update (e) {
        var value = e.target.value;
        value = value 
          ? value.replace(this.nonnumericRE, '')
          : ''
        this.number = value
        this.$emit('input', value)
      },

      isInvalid () {
        this.isInvalidFn(this.value)
      }
    }
  }
</script>