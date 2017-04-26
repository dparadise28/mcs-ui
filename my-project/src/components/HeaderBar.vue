<template>
	<header>
		<div>
      <div id="logo"><router-link to="/"><img src="/static/myCornerlogo.jpg" alt="Homepage" height="50" width="50"></router-link></div>

		  <div id="cd-hamburger-menu"><a class="cd-img-replace" href="#0">Menu</a></div>
		  <div id="cd-cart-trigger"><a class="cd-img-replace" href="#0">Cart</a></div>
	  </div>
	  <div>
	    <nav id="main-nav">
		    <ul>
          <li class="hidden"><a href="#page-top"></a></li>

          <li><router-link to="/">Home</router-link></li>
          <li><a class="page-scroll" href="#portfolio">Trending</a></li>
          <li><a class="page-scroll" href="#team">Are You a Local Business</a></li>
          <li><a class="page-scroll" href="#about">About</a></li>
          <li><a class="page-scroll" href="#contact">Contact</a></li>

    		</ul>

	    </nav>
	  </div>
	  <div id="cd-shadow-layer"></div>

	  <div id="cd-cart">
      <h1>Cart</h1>
      <cart-page></cart-page>
    </div> <!-- cd-cart -->
	</header>

</template>


<script src="./side-shopping-cart/js/main.js">
  import "./side-shopping-cart/js/modernizer.js"
  import CartPage from "@/components/CartPage"
  import { mapGetters } from 'vuex'
  module.exports= {
      components: {
          CartPage
      },
  computed: {
    // mix the getters into the computed object
    ...mapGetters([
      'cartCount'
    ])
  }
}

</script>

<style src="../components/side-shopping-cart/css/style.css">
</style>
