<template>
	<header>
      <div id="logo"><router-link to="/"><img src="../statics/myCornerlogo.jpg" alt="Homepage" height="50" width="50"></router-link></div>
		  <div id="cd-hamburger-menu"><a class="cd-img-replace" href="#0">Menu</a></div>
		  <div id="cd-cart-trigger"><a class="cd-img-replace" href="#0">Cart</a></div>



  </header>
</template>


<script src='./side-shopping-cart/js/main.js'>
  import './side-shopping-cart/js/modernizer.js'

  import { mapGetters } from 'vuex'
  export default {
    computed: {
    // mix the getters into the computed object
      ...mapGetters([
        'cartCount'
      ])
    }
}
</script>

<!--<style src="./side-shopping-cart/css/reset.css"></style>-->
