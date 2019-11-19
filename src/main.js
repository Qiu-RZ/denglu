import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入路由
import router from './router/router.js'

//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//use
Vue.use(ElementUI)


new Vue({
  render: h => h(App),
  //挂载vue实例
  router
}).$mount('#app')
