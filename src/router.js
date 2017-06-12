import Vue from 'vue'
import Router from 'vue-router'
import CartPage from './components/CartPage'
import HomePage from './components/HomePage'
import ProductPage from './components/ProductPage'
import StoresListPage from './components/List_Of_Stores'
import StorePage from './components/StorePage'
import StoreOnboard from './components/Admin/Store_Onboarding_Page.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: '/stores_result',
          name: 'stores_result',
          component: StoresListPage
        }]
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage
    },
    {
      path: '/store/:id',
      name: 'store',
      component: StorePage
    },
    {
      path: '/store-sign-up',
      name: 'StoreOnboard',
      component: StoreOnboard
    }],
  redirect: ({
    '*': '/home'
  })
})
