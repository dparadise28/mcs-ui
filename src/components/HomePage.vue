<template>
  <q-layout>


    <div slot="header" class="toolbar inverted primary">
      <button @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
      <router-link to="/" id="logo"><img src="../assets/fulllogo.jpg"></router-link>
      <!--<div id="logo"><img src="../assets/fulllogo.jpg" alt="Homepage" route="/"></div>-->

      <button class="big" @click="$refs.rightDrawer.open()">
        <i>shopping_cart</i>
      </button>
    </div>

    <div slot="header" class="toolbar inverted secondary">
      <q-search class="inverted secondary"></q-search>
    </div>


    <q-tabs class ="inverted primary mobile-only text-dark" slot="navigation">
      <q-tab icon="home" route="/"></q-tab>
      <q-tab icon="search" route="/stores_result" ></q-tab>
      <q-tab icon="view_day" route="/test" ></q-tab>
      <q-tab icon="input" route="/showcase/layout/drawer" ></q-tab>
    </q-tabs>

    <router-view class="layout-view"></router-view>

    <q-drawer class="left-side swipe-only" ref="leftDrawer">
      <div class="toolbar light">
          <button class="outline text-bold primary width-2of5" @click="formTab='login', $refs.logInSignUp.open()">Login</button>
          <button class="outline text-bold primary width-2of5" @click="formTab='signup', $refs.logInSignUp.open()">Sign Up</button>
      </div>

      <div class="list group highlight item-delimiter">
        <q-drawer-link icon="business" :to="{path: '/store-sign-up', exact: true}">Are you a local business?</q-drawer-link>
        <q-drawer-link icon="tab" to="/stores">About</q-drawer-link>
        <q-drawer-link icon="compare_arrows" to="/stores">Contact Us</q-drawer-link>
      </div>
    </q-drawer>

    <q-modal ref="logInSignUp" :content-css="{minWidth: '60vw', minHeight: '80vh'}">
      <h4><i class="text-primary float-left" style="padding-left: 20px" @click="$refs.logInSignUp.close()">close</i></h4>


      <q-tabs
        class="justified"
        :refs="$refs"
        v-model="formTab"
      >
        <q-tab name="login">
          Log In
        </q-tab>
        <q-tab name="signup">
          Sign Up
        </q-tab>
      </q-tabs>
      <!-- Targets -->
      <div ref="signup"><sign-up></sign-up></div>
      <div ref="login"><login v-on:submitLogIn="$refs.logInSignUp.close()"></login></div>

    </q-modal>

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
  import Login from './Login.vue'
  import SignUp from './Signup.vue'
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
    },
    components: {
      Login,
      SignUp
    },
    data () {
      return {
        formTab: 'login'
      }
    }
  }
</script>

<style>
  #logo {
    background-image: url("../assets/fulllogo.jpg");
    padding-top: 2px;
    height:3rem;
    /* delete this property if you don't want your logo to scale down on mobile devices */
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }
  .tab-group {
    list-style: none;
    padding: 0;
    margin: 0 0 40px 0;

  &
  :after {
    content: "";
    display: table;
    clear: both;
  }

  }

  .siginup {
    /*padding-left: 50px;*/
    /*padding-right: 50px;*/
    /*padding-bottom: 50px;*/
  }

</style>
