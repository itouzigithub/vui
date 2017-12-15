<template>
  <div class="ipt-search-container" @click="setFocus">
    <div class="ipt-search-wrap" :class="{'ipt-search-wrap--focus': focus}">
      <div class="ipt-search" :class="{'ipt-search--focus': focus}">
        <i class="ipt-search-icon fa fa-search"></i>
        <input type="text" ref="input" placeholder="搜索" 
          v-model="content"
          @input="update"
          @focus="focus = true"
          @blur="focus = false">
      </div>
    </div>
    <transition name="fade">
      <div class="ipt-search-cancel tc" v-show="focus" @click.stop="clear">取消</div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'search',
    props: {
      value: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        focus: false,
        content: this.text
      }
    },
    methods: {
      update (e) {
        this.$emit('input', this.content)
      },
      clear () {
        this.content = '';
        this.$emit('input', '');
        this.$refs.input.blur();
      },
      setFocus () {
        this.$refs.input.focus();
      }
    }
  }
</script>

<style>
  .ipt-search-container {
    position: relative;
    width: 100%;
    height: 38px;
    line-height: 38px;
  }
  .ipt-search-wrap {
    width: 100%;
    height: 100%;
    border-radius: 19px;
    overflow: hidden;
    transition: all .3s;
    background-color: #fff;
  }
  .ipt-search-wrap--focus {
    width: 88%;
  }
  .ipt-search {
    display: flex;
    float: right;
    width: 55%;
    height: 38px;
    transition: all .3s;
    align-items: center;
  }
  .ipt-search--focus {
    width: 95%;
  }
  .ipt-search input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 5px;
  }
  .ipt-search-icon {
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    flex-shrink: 0;
  }
  .ipt-search-cancel {
    position: absolute;
    top: 0;
    right: 0;
    width: 12%;
    height: 100%;
    text-align: right;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>