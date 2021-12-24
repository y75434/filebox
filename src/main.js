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
import VueCompositionAPI from '@vue/composition-api'
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import TW from 'vee-validate/dist/locale/zh_TW.json'
import 'splitpanes/dist/splitpanes.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import $ from 'jquery';
import picture from '@/common/images';


Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

localize('zh_TW', TW)


window.$ = $;

window.picture = picture;

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)


Vue.use(VueCompositionAPI)
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  i18n,
  picture,
  render: h => h(App)
}).$mount('#app')
