<template>
  <div class="bn-container"
    v-if="pics.length > 1"
    :style="{height: height}"
    @touchstart="handletouchstart"
    @touchmove="handletouchmove"
    @touchend="handletouchend">
    <div class="bn-wrap"
      :class="{trans: loosed}"
      :style="{width: W + 'px', transform: 'translate3d(' + x + 'px, 0, 0)'}">
      <div class="bn-item"
        :style="{width: w + 'px', backgroundImage: 'url(' + pics[pics.length - 1].pic_url + ')'}">
      </div>
      <a class="bn-item" 
        v-for="(val, i) in pics"
        :href="val.link_url || 'javascript:void(0)'"
        :style="{width: w + 'px', backgroundImage: 'url(' + val.pic_url + ')'}">
      </a>
      <div class="bn-item"
        :style="{width: w + 'px', backgroundImage: 'url(' + pics[0].pic_url + ')'}">
      </div>
    </div>
    <slot :length="length" :order="order"></slot>
  </div>
  <!-- single picture -->
  <div v-else class="bn-container">
    <a class="bn-item"
      :style="{backgroundImage: 'url(' + pics[0].pic_url + ')'}" 
      :href="pics[0].link_url || 'javascript:void(0)'">
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      pics: {
        type: Array,
        required: true
      },
      height: {
        type: String,
        required: true
      },
      auto: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        W: 0,             // 包含块宽度
        w: 0,             // 图片宽度
        x: 0,             // 包含块位移
        base: 0,          // 滑动位移的基数
        start: 0,         // touchstart 横坐标
        distance: 0,      // 触点滑动距离
        loosed: true,     // touch 是否结束
        timer: '',        // 自动轮播计时器 id
        index: 1,         // 当前图片索引
        length: 0         // 图片数组长度 
      }
    },

    computed: {
      order () {
        if (this.index === 0) {
          return this.length;
        }
        if (this.index === this.length + 1) {
          return 1
        }
        return this.index
      }
    },

    created () {
      this.w = window.innerWidth;
      this.length = this.pics.length;
      this.W = this.w * (this.length + 2);
      this.x = -this.w;
      if (this.length > 1 && this.auto) {
        this.autoPlay();
      }
    },

    methods: {
      handletouchstart (event) {
        // 停止自动轮播
        clearInterval(this.timer);

        this.loosed = false;
        this.start = event.touches[0].clientX;
        this.distance = 0;
        this.base = this.x;

        // 如果触碰的是伪造的首、尾图，立即切换到真的首、尾图
        if (this.index === 0) {
          this.index = this.length;
          this.base = -this.index * this.w;
        }
        if (this.index === this.length + 1) {
          this.index = 1;
          this.base = -this.w;
        }
      },

      handletouchmove (event) {
        event.preventDefault();
        this.distance = event.touches[0].clientX - this.start;
        this.x = this.base + this.distance;
      },

      handletouchend () {
        if (Math.abs(this.distance) <= 50) {
          this.x = this.base;
        } else {
          this.index += this.distance > 0 ? -1 : 1;
        }

        this.loosed = true;
        this.autoPlay();
      },

      autoPlay () {
        this.timer = setInterval(() => {
          if (this.index === this.length + 1) {
          	// 立即切换到首图
            this.loosed = false;
            this.index = 1;

            setTimeout(() => {
              this.loosed = true;
              this.index += 1;
            }, 0)
          } else {
            this.index += 1;
          }
        }, 3000)
      }
    },

    watch: {
    	index (val) {
    		this.x = -val * this.w
    	}
    }
  }
</script>

<style>
  .bn-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    transform-style: preserve-3d;
  }
  .bn-wrap {
    height: 100%;
    backface-visibility: hidden;
    position: absolute; top: 0; left: 0;
    z-index: 2;
  }
  .bn-item {
    display: block;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    float: left;
  }
  .trans {
    transition: all .3s;
  }
</style>