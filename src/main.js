// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'
import vmodal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
import moment from 'moment'
import Cleave from 'vue-cleave'
import VuexForm from 'vuex-form'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/dist/vue-tabs.min.css'
Vue.use(VueTabs)
Vue.use(Quasar) // Install Quasar Framework
Vue.component('nav-bar', require('./components/NavBar.vue'))
Vue.component('cart-page', require('./components/CartPage.vue'))
Vue.component('header-bar', require('./components/HeaderBar.vue'))

Vue.use(vmodal)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(Cleave)
Vue.use(VuexForm, {store})
moment().format()

sync(store, router)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
