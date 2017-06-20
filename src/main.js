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
import Vuelidate from 'vuelidate'
import moment from 'moment'
import Cleave from 'vue-cleave'
import VueLazyImage from 'vue-lazy-images'
Vue.use(VueLazyImage)
Vue.use(Quasar) // Install Quasar Framework
Vue.component('cart-page', require('./components/CartPage.vue'))

Vue.use(Vuelidate)
Vue.use(Cleave)
moment().format()

sync(store, router)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
