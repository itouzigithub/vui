import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 代码高亮
Vue.directive('hl', function(el) {
  hljs.highlightBlock(el);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
