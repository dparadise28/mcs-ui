<template>
  <div>

  <div class="background-image"></div>
  <div class="background-blur"></div>

  <!-----------Search box---------------------->

    <div class="search_container">
      <div class="intro-heading">
        <strong>
          My Corner
        </strong>
      </div>
      <h2>Step Outside</h2>
      <hr class="green-fade">
      <div class="search_box">
        <div class="input-group address-box">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Where to?">
            <span class="input-group-btn submit_button_container">
              <router-link to="/stores_result"><button class="btn btn-default dropdown-toggle" type="button" a-action="Find Stores!" ua-label="" >
                <span class="glyphicon glyphicon-map-marker"></span>
              </button></router-link>
							<router-link to="/stores_result"><button class="btn btn-default dropdown-toggle" type="button" a-action="Find Stores!" ua-label="">
								Find a store!
              </button></router-link>
						</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    mounted () {
      this.getAllProducts()
    },
    computed: {
      ...mapGetters([
        'allProducts'
      ])
    },
    methods: {
      ...mapActions([
        'getAllProducts'
      ])
    }
  }
</script>

<style>
  /*HomePage.vue css*/
  .product {
    padding: 10px 0px;
    border-bottom: 1px solid #eee;
    width: 400px;
  }
  .title {
    color: #312377;
  }
  .price {
    float: right;
  }
  .product-container {
    margin-bottom: 50px;
  }

  * {
    z-index: 2;
  }
  html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
    webkit-tap-highlight-color: #fed136;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .corner-store {
    max-width: 43px;
    max-height: 43px;
    padding: 6px 4px 4px 4px;
  }
  .nav-opacity {
    background: rgba(23, 25, 25, 0.8);
  }
  .nav-li-txt .nav li a {
    font-family: Cambria, Georgia, serif;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
    color: #21ce99;
    opacity: 1;
    font-size: 12px;
  }
  .login {
    font-family: Cambria, Georgia, serif;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
    color: #21ce99;
    opacity: 0.8;
    font-size: 12px;
  }
  .nav-li-txt .nav li a:hover,
  .nav-li-txt .nav li a:focus {
    background: rgba(10, 30, 0, 0.5);
  }
  .background-image {
    background-image: url('../assets/img/mycornerstore.jpg');
    background-size: cover;
    display: flex;
    filter: blur(4px);
    -webkit-filter: blur(2px);
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    z-index: -1;
  }
  .background-blur {
    background-size: cover;
    display: flex;
    background: rgba(0, 90, 20, 0.23);
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1;
  }
  .search_box {
    padding: 1.5% 1.5% 1.5% 1.5%;
    margin: 20px 0;
    horizontal-align:center;
    text-align: center;
    display: inline-block;
    max-width: 95%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.6);
  }
  .search_container {
    text-align:center;
  }
  .address-box, .search {
    display:inline-block;
    width: 100%;
  }
  .scrollable-menu {
    height: auto;
    max-height: 150px;
    max-width: 150px;
    overflow-x: hidden;
  }
  .scrollable-menu::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }
  .scrollable-menu::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: lightgray;
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.75);
  }



  .intro-heading {
    padding-bottom: 4.3%;
    padding-top: 200px;
    text-align: center;
    font-weight: 500;
    font-size: 400%;
    color: rgba(33, 206, 153, 0.82);
    font-family: Cambria, Georgia, serif;

    letter-spacing: .05em;
    text-shadow:
      3px 3px 0px rgba(0, 8, 0, 0),
      4px 3px 0px rgba(10, 30, 0, 0.52);
  }
  hr.green-fade {
    border: 0;
    height: 3px;
    width: 60%;
    background-image: linear-gradient(to right, rgba(30, 60, 0, 0), rgba(30, 60, 0, 0.85), rgba(60, 80, 0, 0));
  }

  section {
    padding: 100px 0;
  }
  section#contact {
    background-color: #222222;
    color: white;
    background-image: url('../assets/img/map-image.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  section h2.section-heading {
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 15px;
  }
  section h3.section-subheading {
    font-size: 16px;
    font-family: Cambria, Georgia, serif;
    text-transform: none;
    font-style: italic;
    font-weight: 400;
    margin-bottom: 75px;
  }
  @media (min-width: 768px) {
    section {
      padding: 150px 0;
    }
  }
  .input-group {
    /* position: relative; */
    display: block;
  }

</style>
