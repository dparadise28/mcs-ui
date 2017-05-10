<template>
  <div class="container">
    <div class="row store-row">

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
    <div class="panel-group" id="accordion">
      <div class="panel panel-default" v-for="category in store.categories">
        <div data-toggle="collapse" v-bind:data-target="'#' + category" class="panel-heading">
          <h2 class="panel-title">
            {{category}}
          </h2>
        </div>
        <div :id="category" class="panel-collapse collapse in">
          <ul>
            <div v-for="p in allProducts" >
            <li class="StoreItem">
              <h3><b>{{p.ProductName}}</b></h3>
            </li><br>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SingleStore from "@/components/SingleStoreTemplate.vue"

  import { mapGetters, mapActions } from 'vuex'
  export default {
    data(){
      return {
        contentVisible: false,
        accordionLike: true,
        items: [0, 1, 2, 3, 4, 5]
      }
    },
    mounted () {
      this.getAllStores(),
        this.getAllProducts()
    },
    created: function () {
      this.$on('content-visible', function (item) {
        //console.log("content-visible event received");
        if (this.accordionLike) {
          var items = this.$.items;
          for (i = 0; i < items.length; i++) {
            var tempItem = items[i];
            if (tempItem !== item && tempItem.contentVisible) tempItem.contentVisible = false;
          }
        }
      })
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
      toggleContent: function () {
        //console.log('toggle content');
        this.contentVisible = !this.contentVisible;
        if (this.contentVisible) this.$dispatch('content-visible', this);
      }
    },
    components: {
      SingleStore
    }
  }
</script>

<style scoped>
  h2 {
    font-size: 30px;
    font-weight: bold;
    z-index: 2;
    color: #21c28e;
    font-family: Helvetica;
  }
  container{
    padding-top: 10px;
  }
  .panel {
    margin-bottom: 20px;
    background-color: #eeeff7;
    border: 1px solid transparent;
    border-radius: 4px;
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
   }
</style>
