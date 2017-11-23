<template>
  <div>
    <transition name="fade">
      <div class="picker-mask" v-show="show" @click="show = false"></div>
    </transition>

    <div class="picker-panel" :status="show ? 1 : 0">
	    <div class="picker-title">{{ title }}</div>

      <div class="hair-bottom picker-tab-wrap">
        <div class="picker-tab"
          v-for="(val, i) in tabValue"
          :class="{'picker-tab-active': tabIndex === i}"
          @click="tabIndex = i">
          {{ val }}
        </div>
      </div>

      <ul class="picker-options"
        v-for="(slot, i) in slots"
        v-show="tabIndex === i"
        @click="select($event, 0)">
        <li v-for="(item, i) in toArray(slot)" 
          :value="item"
          :key="i"
          :class="{'picker-option-checked': tabValue.indexOf(item) > -1}">
          {{ item }}
          <i class="picker-icon-check" v-show="tabValue.indexOf(item) > -1"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cascade',
    props: {
      slots: {
        required: true,
        type: Array
      },
      title: {
        type: String,
        default: '请选择'
      }
    },

    data () {
      return {
        show: false,
        tabIndex: 0,
        values: [],
        columns: this.slots.length
      }
    },

    computed: {
      tabValue () {
        var copy = this.values.slice(0);
        if (copy.length < this.columns) {
          copy.push('请选择');
        }
        return copy
      }
    },

    methods: {
      select (e) {
        var value = e.target.getAttribute('value');
        if (!value || this.values.indexOf(value) > -1) return;

        if (this.tabIndex < this.values.length) {
          this.values = this.values.slice(0, this.tabIndex)
        }

        this.values.push(value);

        var copy = this.values.slice(0);

        this.$emit('valueChanged', this.normalize(copy));

        if (this.tabIndex + 1 === this.columns) {
          this.show = false;
        }
      },

      normalize (values) {
      	var arr = [];
      	for (var i = 0; i < values.length; i++) {
      		var value = values[i];
      		arr.push({
      			id: this.findID(value, i),
      			value: value
      		})
      	}
      	return arr
      },

      findID (value, index) {
      	var obj = this.slots[index];
      	var key;
      	for (key in obj) {
      		if (value === obj[key]) {
      			return key
      		}
      	}
      },

      toArray (obj) {
      	var arr = [];
      	var key;
      	for (key in obj) {
      		arr.push(obj[key])
      	}
      	return arr
      },

      setValues (arr) {
      	this.values = arr
      }
    },

    watch: {
    	values (val) {
    		var len = val.length;
    		if (len === this.columns) {
    			this.tabIndex = len - 1
    		} else {
    			this.tabIndex = len;
    		}
    	}
    }
  }
</script>

<style>
  .picker-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
  }
  .picker-panel {
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #fff;
    transition: all .3s;
    z-index: 10;
    font-size: 14px;
    padding-top: 66px;
  }
  .picker-panel[status="0"] {
    transform: translateY(100%);
  }
  .picker-title {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%; 
    height: 30px; 
    line-height: 40px; 
    background-color: #fff;
    font-size: 15px;
  }
  .picker-tab-wrap {
    display: flex;
    width: 100%;
    height: 36px;
    line-height: 34px;
    position: absolute;
    left: 0;
    top: 30px;
    padding: 0 15px;
  }
  .picker-tab-wrap:after {
    z-index: -1;
  }
  .picker-tab {
    display: inline-block;
    height: 100%;
    margin-right: 20px;
    border-bottom: 2px solid transparent;
  }
  .picker-tab-active {
    color: #d1af5d;
    border-bottom-color: #d1af5d;
  }
  .picker-options {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    list-style: none;
    padding: 10px 0;
    text-align: left;
  }
  .picker-options li {
    line-height: 32px;
    padding: 0 15px;
  }
  .picker-options li:active {
    background-color: #f2f2f2;
  }
  .picker-option-checked {
    color: #d1af5d;
  }
  .picker-icon-check {
    display: inline-block;
    width: 12px;
    height: 9px;
    background: url('./icon-check.png') no-repeat center/100%;
    margin-left: 10px;
  }
  .fade-enter-active, 
  .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>