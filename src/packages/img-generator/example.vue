<template>
  <section>
    <p>utils/img-generator 方法用于在图片上添加其它图片或文本，并返回生成的新图片</p>
    <p>请确保请求的图片是同域的，如果是跨域的图片，需要在服务端设置</p>
    <p>Access-Control-Allow-Origin: *</p>

    <pre v-pre><code>/**
 * @src { String } 源图的 url，生成的图片尺寸和源图一致
 * @options { Array } 要添加的图片或文本，参见示例
 *
 * @return { Promise } 解析完成后会 resolve base64 格式的图片数据
 */

// 示例
import generator from '../../utils/img-generator'

generator(url, [{
  type: 'image',  // 必须指明类型
  src: url,       // 图片 url，确保同域
  x: 180,         // 图片在源图上的横坐标
  y: 20,          // 图片在源图上的纵坐标
  w: 50,          // 图片的宽度
  h: 50           // 图片的高度
}, {
  type: 'text',
  text: '这是一段文字',
  fill: 'white',
  font: '20px Arial',
  x: 240,
  y: 50
}])
.then(base64 => {
  // 上传给服务器，获得图片的 url 地址
  // 直接使用 POST 上传，后端 PHP 可以通过 base64_decode 方法解码
})</code></pre>

    <br>
    <img :src="src">
  </section>
</template>

<script>
  import generator from '../../utils/img-generator'
  export default {
    data () {
      return {
        src: '',
        img1: require('../../assets/band.png'),
        img2: require('../../assets/icon-1.png')
      }
    },
    mounted () {
      generator(this.img1, [{
        type: 'image',
        src: this.img2,
        x: 180,
        y: 20,
        w: 50,
        h: 50
      }, {
        type: 'text',
        text: '这是一段文字',
        fill: 'white',
        x: 240,
        y: 50,
        font: '20px Arial'
      }]).then(data => {
        this.src = data;
      })
    }
  }
</script>