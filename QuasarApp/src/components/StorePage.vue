<template>
  <div class="container">
    <div class="row store-row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 item-block">
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
    <div class="panel-group" id="accordion">

      <div class="panel panel-default" v-for="category in store.categories">
        <div data-toggle="collapse" v-bind:data-target="'#' + category" class="panel-heading">
          <br><h2 class =categoryTitle>{{category}}</h2>
        </div>thfgh
        <div :id="category" class="panel-collapse collapse in">
          <ul>
            <div >
            <li v-for="p in allProducts" class="StoreItem" @click="open(p)">
              <h3><b>{{p.ProductName}}</b></h3>
            </li>
              <!--<sweet-modal v-bind:title="p.ProductName" ref="modal"></sweet-modal>-->
            </div>
          </ul>
        </div>
      </div>

      <modal name="modal">
        <h2 class =categoryTitle>{{ProductObject.ProductName}}</h2>
        <!--{{ProductObject.ProductName}}-->

      </modal>
    </div>
  </div>
</template>

<script>
  import SingleStore from "./SingleStoreTemplate.vue"
  import ProductModal from './ProductPageModal.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      SingleStore,
      ProductModal,
    },
    data(){
      return {
        showModal: false,
        ProductObject: {}
      }
    },
    mounted () {
      this.getAllStores(),
        this.getAllProducts()
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
    },

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

   li{
     float: left;
   }
   @media (max-width: 991px){
     .StoreItem{
       width: 100%
     }
   }
  .categoryTitle{
    font-weight: bold;
    font-size: 25px;
    color: #1b9872;
    font-family: Helvetica;

  }
</style>
