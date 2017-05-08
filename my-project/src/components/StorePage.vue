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
    </div>
  <!--<a v-bind:href="'/job/'+ r.id">-->

    <!--<div class="row">-->
      <!--<div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 item-block">-->
        <!--<ul class="nav nav-tabs">-->
          <!--<li v-for="category in store.categories">-->
            <!--<a data-toggle="tab" v-bind:href="'#' + category">{{category}}</a>-->
          <!--</li>-->
        <!--</ul>-->


        <!--<div class="tab-content">-->
       <!--<div id="home" class="tab-pane fade in active">-->
        <!--<h3>HOME</h3>-->
      <!--</div>-->
      <!--<div id="menu1" class="tab-pane fade">-->
        <!--<h3>Menu 1</h3>-->

      <!--</div>-->
      <!--<div id="menu2" class="tab-pane fade">-->
        <!--<h3>Menu 2</h3>-->
      <!--</div>-->
      <!--<div id="menu3" class="tab-pane fade">-->
        <!--<h3>Menu 3</h3>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
  <!--<div class = "container">-->
      <!--<div class="col-md-8 col-md-offset-2">-->

        <!--<div id ="main-nav">-->

        <!--<button class="w3-bar-item w3-button w3-padding" onclick="openCity('Vegetables')">Vegetables</button>-->
          <!--<button class="w3-bar-item w3-button w3-padding" onclick="openCity('Dairy')">Dairy</button>-->
          <!--<button class="w3-bar-item w3-button w3-padding" onclick="openCity('Meats')">Meats</button>-->
        <!--</div>-->
        <!--<div id="Vegetables" class="w3-container city" style="display:none">-->
          <!--<span onclick="this.parentElement.style.display='none'" class="w3-button w3-large w3-display-topright">&times;</span>-->
          <!--<input class="w3-input w3-border w3-padding" type="text" placeholder="Search for names.." id="myInput" onkeyup="myFunction()">-->
          <!--<h2>Vegetables</h2>-->
          <!--<ul id="storeItems" class="w3-ul w3-hoverable">-->
            <!--<li w3-repeat="Products" class="w3-display-container">-->
              <!--<div class="w3-display-container">-->
                <!--<h3><b><div class= "w3-cell" id="productImage">{{ProductName}}</div></b></h3>-->
                <!--<div class = "w3-display-bottomright">${{Price}}</div>-->
                <!--<p>Description Description bla bla.</p>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div id="Dairy" class="w3-container w3-display-container city" style="display:none">-->
          <!--<span onclick="this.parentElement.style.display='none'" class="w3-button w3-large w3-display-topright">&times;</span>-->
          <!--<h2>Dairy</h2>-->
          <!--<p>Paris is the capital of France.</p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
  <!--<div>-->
    <!--<router-link to="/stores_result" class="back-link">BACK</router-link>-->
    <!--<div class="store-title">{{ store.name }}</div>-->
  <!--&lt;!&ndash;dfsdfsdf&ndash;&gt;-->
    <!--sdasdasdasdasd-->
  <!--</div>-->
</template>

<script>
  import SingleStore from "@/components/SingleStoreTemplate.vue"

  import { mapGetters, mapActions } from 'vuex'
  export default {
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
      ])
    },
    components: {
      SingleStore
    }
  }
</script>

<style>


</style>
