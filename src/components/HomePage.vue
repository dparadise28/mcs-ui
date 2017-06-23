<template>
  <q-layout>
    <div slot="header" class="toolbar tertiary">
      <button @click="$refs.leftDrawer.open()" class="text-white">
        <i>menu</i>
      </button>
      <router-link to="/"><img src="../assets/fulllogo.png" id="logo"></router-link>
      <button class="text-white" @click="$refs.rightDrawer.open()" >
        <i>shopping_cart</i>
      </button>
    </div>

    <!--<div v-if="$store.state.route.path=='/store_search'" slot="header" class="toolbar">-->
        <!--<button class="text-tertiary text-bold group"><i>location_on</i><br>location</button>-->
        <!--<button class="text-tertiary text-bold group"><i>dashboard</i><br>filter</button>-->
        <!--<q-search :debounce="0" class="inverted primary width-3of4" v-model="searchValue" @enter="searchForStores"></q-search>-->
    <!--</div>-->
    <div v-if="$store.state.route.path!='/store_search'" slot="header" class="toolbar">
      <q-search :debounce="0" class="inverted primary" v-model="searchValue" @enter="searchForStores"></q-search>
    </div>

    <q-tabs class ="mobile-only text-tertiary" slot="navigation">
      <q-tab icon="home" route="/"></q-tab>
      <q-tab icon="search" route="/store_search" ></q-tab>
      <q-tab icon="store" route="/store/:id" ></q-tab>
      <q-tab icon="shopping_cart" route="/showcase/layout/drawer" ></q-tab>
    </q-tabs>
    <!--<product-card></product-card>-->
    <router-view class="layout-view"></router-view>

    <q-drawer class="left-side swipe-only" ref="leftDrawer">
      <div class="toolbar tertiary"></div>
      <br>
      <div class="list group highlight item-delimiter text-tertiary bg-light">
        <q-drawer-link icon="business" :to="{path: '/store-sign-up', exact: true}">Are you a local business?</q-drawer-link>
        <q-drawer-link icon="tab" to="/stores">About</q-drawer-link>
        <q-drawer-link icon="compare_arrows" to="/stores">Contact Us</q-drawer-link>
      </div>
      <br>
      <button class="round primary full-width generic-margin" @click="logout">Log out</button>
    </q-drawer>

    <q-modal ref="logInSignUp" :content-css="{minWidth: '60vw', minHeight: '80vh'}" @close="$refs.leftDrawer.close()">
      <h4><i class="text-primary float-left" style="padding-left: 20px" @click="$refs.logInSignUp.close()">close</i></h4>
      <q-tabs
        class="justified"
        :refs="$refs"
        v-model="formTab"
      >
        <q-tab name="login">Log In</q-tab>
        <q-tab name="signup">Sign Up</q-tab>
      </q-tabs>
      <!-- Targets -->
      <div ref="signup"><sign-up></sign-up></div>
      <div ref="login"><login v-on:submitLogIn="$refs.logInSignUp.close()"></login></div>
    </q-modal>

    <q-drawer right-side swipe-only ref="rightDrawer">
      <div class="toolbar tertiary">
        <q-toolbar-title :padding="1">
          <h5 class="text-primary">Cart</h5>
        </q-toolbar-title>
      </div>
      <cartpage class="layout-padding"></cartpage>
    </q-drawer>

  </q-layout>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Login from './Login.vue'
  import SignUp from './Signup.vue'
  import cartpage from './CartPage.vue'
  import ProductCard from './ProductCard.vue'
  export default {
    mounted () {
      this.getAllProducts()
//      if ($store.state.route ==)
      console.log(this.$store.state.route.path)
    },
    computed: {
      ...mapGetters([
        'allProducts'
      ]),
      searchValue: {
        get () { return this.$store.state.storeSearch.searchValue },
        set (value) { this.$store.commit('newSearch', value) }
      }
    },
    methods: {
      ...mapActions([
        'getAllProducts',
        'logout',
        'searchForStores'
      ])
    },
    components: {
      Login,
      SignUp,
      cartpage,
      ProductCard
    },
    data () {
      return {
        formTab: 'login',
        isSearchPage: false
      }
    }
  }
</script>

<style>
  .layout-footer {
    border-top: 1px solid hsla(0, 0%, 0%, 0.27);
  }
  .layout-header {
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.27);
  }
  #logo {
      /*background-image: url("../assets/fulllogo.png");*/
      padding-top: 0px;
      height:2.19rem;
      /* delete this property if you don't want your logo to scale down on mobile devices */
      -webkit-transorm: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }


  .siginup {
    /*padding-left: 50px;*/
    /*padding-right: 50px;*/
    /*padding-bottom: 50px;*/
  }

</style>
