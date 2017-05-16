<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
import NavBar from './components/NavBar.vue'
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style></style>
