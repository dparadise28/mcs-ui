<template>
	<div>
    <div slot="header" class="toolbar primary">
      <button @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>

      <q-toolbar-title :padding="1">
        myCorner
      </q-toolbar-title>

      <button class="big" @click="$refs.rightDrawer.open()">
        <i>shopping_cart</i>
      </button>
    </div>

    <div slot="header" class="toolbar primary">
      <q-search class="primary"></q-search>
    </div>

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
        <q-drawer-link icon="business" to="/showcase/layout/toolbar">
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
  </div>
</template>


<script>
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
