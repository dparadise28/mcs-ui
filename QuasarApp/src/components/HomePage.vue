<template>
  <q-layout>


    <div slot="header" class="toolbar inverted primary">
      <button @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>

      <div id="logo"><img src="../assets/fulllogo.jpg" alt="Homepage" ></div>

      <button class="big" @click="$refs.rightDrawer.open()">
        <i>shopping_cart</i>
      </button>
    </div>

    <div slot="header" class="toolbar inverted secondary">
      <q-search class="inverted secondary"></q-search>
    </div>


    <q-tabs class ="inverted primary mobile-only" slot="navigation">
      <q-tab icon="home" route="/"></q-tab>
      <q-tab icon="search" route="/stores_result" ></q-tab>
      <q-tab icon="view_day" route="/showcase/layout/tabs" ></q-tab>
      <q-tab icon="input" route="/showcase/layout/drawer" ></q-tab>
    </q-tabs>

    <router-view class="layout-view"></router-view>

    <q-drawer class="left-side swipe-only" ref="leftDrawer">
      <div class="toolbar light">
        <q-toolbar-title :padding="1">
          MyCorner
        </q-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <q-drawer-link icon="home" to="/" exact>
          Home
        </q-drawer-link>
        <hr>
        <div class="list-label">Other Tools</div>
        <q-drawer-link icon="business" :to="{path: '/store-sign-up', exact: true}">
          Are you a local business?
        </q-drawer-link>
        <q-drawer-link icon="tab" to="/showcase/layout/tabs">
          Tabs
        </q-drawer-link>
        <q-drawer-link icon="compare_arrows" to="/showcase/layout/drawer">
          Layout Drawer
        </q-drawer-link>
      </div>
    </q-drawer>
    <q-drawer right-side swipe-only ref="rightDrawer">
      <div class="toolbar light">
        <q-toolbar-title :padding="1">
          <h5 class="text-primary">Cart</h5>
        </q-toolbar-title>
      </div>
      <cart-page></cart-page>
    </q-drawer>

  </q-layout>
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
  #logo {
    padding-top: 2px;
    height:3rem;
    /* delete this property if you don't want your logo to scale down on mobile devices */
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }
  @media only screen and (min-width: 1200px) {
    #logo {
      padding-top: 10px;
      position: absolute;
      /* logo left margin on Dekstop */
      left: 2.4em;
      height: 3rem;
      top: 0;
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }
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
    height: 50%;
    left: 0;
    position: fixed;
    right: 0;
    z-index: -1;
  }
  .background-blur {
    background-size: cover;
    display: flex;
    background: rgba(0, 90, 20, 0.23);
    height: 50%;
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
