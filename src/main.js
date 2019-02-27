import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import 'reset-css/reset.css';
import 'chartist/dist/scss/chartist.scss';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(require('vue-chartist'));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
