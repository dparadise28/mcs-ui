
<template>
  <div class="layout-view">
    <div class="">
       <div class="row group wrap big-gutter">
          <div v-for="s in allStores" class="sm-width-1of1 md-width-1of1 bg-width-1of1 lg-width-1of1">
            <router-link :to="{name: 'store', params: {id: s.id}}" class="" tag="div">
              <div class="card layout-padding">
                <h4 class="text-bold text-tertiary">{{ s.name }}</h4>
                  <p class="float-left">
                    {{ s.address2 }} <br>
                    {{ s.address1 }} <br>
                  </p>
                  <q-rating v-model="stars" :max="5" class="vertical-middle"></q-rating>
              </div>
            </router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import SingleStore from './SingleStoreTemplate.vue'
//  Vue.component('header-bar', require('./components/HeaderBar.vue'));

  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'allStores',
        'allProducts'
      ])
    },
    methods: {
      ...mapActions([
        'getAllStores',
        'getAllProducts'
      ])
    },
    components: {
      SingleStore
    },
    mounted () {
      this.getAllStores()
      this.getAllProducts()
    },
    data () {
      return {
        stars: 5
      }
    }
  }
</script>

<style>
  /*ListOfStores.vue css*/
  .item-block {
    margin-bottom: 1.5em;
    margin-top: 1.5em;
    float: left;
  }
  #logo a span {
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left: 0;
    /* edit: added z-index */
    z-index: 1;
  }
</style>
