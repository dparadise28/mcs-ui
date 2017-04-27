// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'

import BootstrapVue from 'bootstrap-vue';
Vue.component('cart-page', require('./components/CartPage.vue'));
Vue.component('log-in', require('./components/LogInModal/Login.vue'));

sync(store, router)

Vue.config.productionTip = false
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
