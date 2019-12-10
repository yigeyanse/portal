import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import 'animate.css'
import 'reset-css'
import '@/assets/css/iconfont.css'
import '@/assets/css/icons.min.css'
import '@/assets/css/bootstrap.min.css'
import $ from 'jquery'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

