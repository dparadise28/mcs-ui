import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from './components/CartPage'
import IntroPage from './components/IntroPage.vue'
import HomePage from './components/HomePage'
import ProductPage from './components/ProductPage'
import StoresListPage from './components/List_Of_Stores'
import StorePage from './components/StorePage'
import StoreOnboard from './components/Admin/Store_Onboarding_Page.vue'
// import { Cookies } from 'quasar'
import store from './store/index'
Vue.use(VueRouter)

const Router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { Auth: true },
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
    },
    {
      path: '/api',
      name: 'test',
      component: HomePage
    },
    {
      path: '/login',
      name: 'intro',
      meta: { Auth: false },
      component: IntroPage
    }]
})
// var jwt = Cookies.get('authtoken')
//
Router.beforeEach((to, from, next) => {
  console.log('commiting check auth')
  store.commit('checkAuth')
  if (to.meta.Auth && !store.state.auth.authenticated) {
    next({path: '/login', replace: true})
  }
  else {
    console.log('the user has an auth token')
    next()
  }
})

export default Router
