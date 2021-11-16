import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
// import api from './apis;'
import i18n from './common/plugins/vue-i18n';
import VueAxios from 'vue-axios';
import axios from 'axios';



import 'splitpanes/dist/splitpanes.css';

import 'bootstrap-vue/dist/bootstrap-vue.css';

import $ from 'jquery';
window.$ = $;



// Vue.prototype.$api = api; //掛載api到原型

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
