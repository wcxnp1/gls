import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(BaiduMap, {
  ak: 'hjwFVZbdOtsH1FiXZfdZktdfABzGhgfY'  //这个地方是官方提供的ak密钥
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
