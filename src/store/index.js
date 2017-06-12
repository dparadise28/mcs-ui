import Vuex from 'vuex'
import Vue from 'vue'
import cart from './cart'
import products from './products'
import stores from './stores_list'
import storeInfo from './store_info'
import auth from './authentication'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products,
    stores,
    storeInfo,
    auth
  }
})
