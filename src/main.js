import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 接口服务
import Api from './service'

import './plugins/element.js'

// 全局$api调用
Vue.prototype.$api = Api

Vue.config.productionTip = false

// 自定义返回路由
Vue.prototype.back = name => router.push({
  name: name
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
