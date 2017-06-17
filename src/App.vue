<template>
  <div id="q-app">
    <router-view></router-view>
    <q-ajax-bar :color="'#2ab982'"></q-ajax-bar>
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

<style>

</style>
