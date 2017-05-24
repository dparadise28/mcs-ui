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


</style>
