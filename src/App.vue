<template>
  <div id="q-app">
    <router-view></router-view>
    <q-ajax-bar></q-ajax-bar>
  </div>
</template>


<script>
//  import { mapActions } from 'vuex'
  export default {
    name: 'q-app'
//    methods: {
//      ...mapActions([
//        'checkAuth'
//      ])
//    },
//    created: function () {
//      this.checkAuth()
//    }
  }
</script>

<style lang="stylus">
</style>
