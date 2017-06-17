
<template>
  <div class="layout-view">
  <div class="layout-padding">
     <div class="row store-row wrap">
        <div v-for="s in allStores" class="sm-width-1of1 md-width-1of1 bg-width-1of2 lg-width-1of3">
          <router-link :to="{name: 'store', params: {id: s.id}}" class="fh5co-property" tag="div">
            <single-store>
              <h2 slot="storeName"><strong>{{ s.name }}</strong></h2>
              <p slot="storeAddress">
                {{ s.address2 }} <br>
                {{ s.address1 }} <br>
              </p>
            </single-store>
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


  .fh5co-property {
    background: rgb(255, 255, 255);
    text-align: left;
    width: 100%;
    float: left;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.498039) 4px 8px 25px -14px;
  }

  .fh5co-property .fh5co-property-specification {
    border-top: 1px solid rgb(240, 240, 240);
    background: rgb(255, 255, 255);
    padding: 15px 30px;
    font-size: 13px;
    margin-bottom: 0px;
  }
  .fh5co-property .fh5co-property-specification>span {
    margin-right: 5px;
  }
  .fh5co-property .fh5co-property-specification>span strong {
    color: green;
  }

  .fh5co-property .fh5co-property-innter {
    padding: 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    height: 270px;
    background-image: linear-gradient(
      rgba(47, 49, 49, 0.8),
      rgba(23, 25, 25, 0.6)
    ),url('../assets/img/hardware_store.jpg');
    z-index: 1;
    background-size: cover !important;
  }
  .fh5co-property .fh5co-property-innter p {
    color: #21c28e;
    font-size: 12px;
    font-weight: 700;
  }
  .fh5co-property .fh5co-property-innter p:last-child {
    margin-bottom: 0px;
  }
  .fh5co-property .fh5co-property-innter h3 {
    margin-bottom: 5px;
  }
  .fh5co-property .fh5co-property-innter h3 a:hover, .fh5co-property .fh5co-property-innter h3 a:active, .fh5co-property .fh5co-property-innter h3 a:focus {
    text-decoration: none;
  }
</style>
