<template>
  <div>
  <div class="layout-padding">
    <div class="row">
      <div class="width-1of1">
        <div class="fh5co-property">
          <single-store>
                <h2 slot="storeName"><strong>{{ store.name }}</strong></h2>
                <p slot="storeAddress">
                  {{ store.address2 }} <br>
                  {{ store.address1 }} <br>
                </p>
          </single-store>
        </div>
      </div>
    </div>
    <div class="list" v-for="category in store.categories">
      <q-collapsible :label="category">
        <div class ="row">
          <ul v-for="p in allProducts">
            <li class="wrap" @click="open(p)">
              <h3><b>{{p.ProductName}}</b></h3>
            </li>
          </ul>
        </div>
      </q-collapsible>
    </div>
    <modal name="modal">
    <h2 class =categoryTitle>{{ProductObject.ProductName}}</h2>
    <!--{{ProductObject.ProductName}}-->

    </modal>
    <!--<div class="panel-group" id="accordion">-->
      <!--<div class="panel panel-default" v-for="category in store.categories">-->
        <!--<div data-toggle="collapse" v-bind:data-target="'#' + category" class="panel-heading">-->
          <!--<br><h2 class =categoryTitle>{{category}}</h2>-->
        <!--</div>-->
        <!--<div :id="category" class="panel-collapse collapse in">-->
          <!--<div class ="row">-->
            <!--<ul v-for="p in allProducts">-->
              <!--<li class="wrap" @click="open(p)">-->
                <!--<h3><b>{{p.ProductName}}</b></h3>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->

      <!--<modal name="modal">-->
        <!--<h2 class =categoryTitle>{{ProductObject.ProductName}}</h2>-->
        <!--&lt;!&ndash;{{ProductObject.ProductName}}&ndash;&gt;-->

      <!--</modal>-->
    <!--</div>-->
  </div>
  </div>
</template>

<script>
  import SingleStore from './SingleStoreTemplate.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      SingleStore
    },
    data () {
      return {
        showModal: false,
        ProductObject: {}
      }
    },
    computed: {
      ...mapGetters([
        'allStores',
        'allProducts'
      ]),
      store () {
        let id = parseInt(this.$route.params.id)
        return this.allStores.find((s) => s.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'getAllStores',
        'getAllProducts'
      ]),

      showProductModal: function (Product) {
        this.ProductObject = Product
        this.showModal = true
      },
      open: function (Product) {
        this.ProductObject = Product
        this.$modal.show('modal')
      }
    }
//    mounted () {
//      getAllStores
//      getAllProducts
//    }
  }
</script>

<style scoped>
  /*StorePage.vue css*/

  container{
    padding-top: 10px;
  }
  .panel {
    margin-bottom: 20px;
    background-color: #eeeff7;
    border: 1px solid transparent;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
  }
  .panel-group {
    text-align: left;
    margin-bottom: 20px;
  }
  .panel-group .panel {
     margin-bottom: 10px;
     /* border-radius: 4px; */
  }
  .panel-heading {
    padding-top: 10px;
    padding-right: 15px;
    padding-left: 0px;
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    /* border-top-left-radius: 3px; */
    border-top-right-radius: 3px;
  }
  .panel-default>.panel-heading {
      color: #333;
      background-color: #eeeff7;
      /* border-color: #ddd; */
      text-align: left;
    }
  .panel-default {
       border-color: #eeeff7;
     }
  .panel-default>.panel-heading {
        color: #333;
        background-color: #eeeff7;
        /* border-color: #ddd; */
        text-align: left;
      }
   .StoreItem {
     padding-top: 15px;
     padding-right: 16px;
     padding-left: 16px;
     padding-bottom: 15px;
     border-bottom-width: 1px;
     border-bottom-style: groove;
     border-bottom-color: #1b9872;
     font-weight: bold;
     color: #1b9872;
     background-color: #fff;
     width: 50%
   }

   /*li{*/
     /*float: left;*/
   /*}*/
   /*@media (max-width: 991px){*/
     /*.StoreItem{*/
       /*width: 100%*/
     /*}*/
   /*}*/
  .categoryTitle{
    font-weight: bold;
    font-size: 25px;
    color: #1b9872;
    font-family: Helvetica;

  }
</style>
