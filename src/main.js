import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入路由
import router from './router/router.js'


new Vue({
  render: h => h(App),
  //挂载vue实例
  router
}).$mount('#app')
