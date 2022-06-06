import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import i18n from './common/plugins/vue-i18n';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueCompositionAPI from '@vue/composition-api'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
// import TW from 'vee-validate/dist/locale/zh_TW.json'
import 'splitpanes/dist/splitpanes.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import $ from 'jquery';
import picture from '@/common/images';
import VueSweetalert2 from 'vue-sweetalert2';


// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

// localize('zh_TW', TW)


window.$ = $;

window.picture = picture;

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)


Vue.use(VueCompositionAPI)
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueAxios, axios);
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  i18n,
  picture,
  render: h => h(App)
}).$mount('#app')
