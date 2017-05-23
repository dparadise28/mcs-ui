<template>
  <router-view></router-view>
</template>


<script>
/*
 * Root component
 * import CartPage from './components/CartPage.vue'
 */
import NavBar from './components/NavBar.vue'
import CartPage from './components/CartPage.vue'
import HeaderBar from './components/HeaderBar.vue'
export default {
  name: 'app',
  components: {
    NavBar,
    CartPage,
    HeaderBar
  }
}
</script>

<style>
  img{
    height:3rem;
  }
</style>
