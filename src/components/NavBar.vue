<template>

  <div>
  <header-bar></header-bar>

  <div id ="main-nav">
    <nav>
      <ul>
        <li class="hidden"><a href="#page-top"></a></li>
        <li><router-link to="/">Home</router-link></li>
        <li><a class="page-scroll" href="#team">Are You a Local Business</a></li>
        <li><a class="page-scroll" href="#about">About</a></li>
        <li><a class="page-scroll" href="#contact">Contact</a></li>
        <!--<li>-->
          <!--&lt;!&ndash;<div id="wrapper" class="container">&ndash;&gt;-->
            <!--&lt;!&ndash;<modal v-if="showModal"></modal>&ndash;&gt;-->

            <!--&lt;!&ndash;<button class="glyphicon glyphicon-log-in" @click="openModal()">Login</button>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</li>-->
      </ul>
    </nav>
  </div>


  <div id="cd-shadow-layer"></div>

  <div id="cd-cart">
    <cart-page></cart-page>
  </div> <!-- cd-cart -->
  </div>
</template>

<script>
//  import Modal from "@/components/logInModal/LogIn";
import HeaderBar from '../components/HeaderBar.vue'
import CartPage from '../components/CartPage.vue'
export default{
  components: {
//      Modal
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    openModal () {
      this.showModal = true
    }
  },
  component: {
    CartPage,
    HeaderBar
  }
}
</script>

<style>
  main-nav{
    padding-bottom: 10px;
  }
</style>
