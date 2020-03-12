import Vue from 'vue';
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/base.css';
// 引入axios
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './vuex/store';


Vue.prototype.axios = axios;

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
