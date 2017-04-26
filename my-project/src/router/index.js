import Vue from 'vue'
import Router from 'vue-router'
import CartPage from '@/components/CartPage'
import HomePage from '@/components/HomePage'
import ProductPage from '@/components/ProductPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },{
      path: '/product/:id',
      name: 'product',
      component: ProductPage
    }
    
  ]
})