<template>
  <div class="layout-padding">
    <h3>{{ product.title }}</h3>
    <div class="product-details">
      <div class="inventory">In Stock: {{ product.inventory }}</div>
      <button class="add-button" :disabled="!product.inventory"
        @click="addToCart(product)">{{ product.inventory > 0 ? "Add to cart" : "Out Of Stock" }}</button>
    </div>
  </div>
</template>

<!--this.new_product = {-->
<!--title: '',-->
<!--images: [], // leaving at top level for now (which means variants cant have imgs)-->
<!--category: '', // ? just one or list of cats it falls in (tempted to say list)-->
<!--keywords: [],-->
<!--add_to_category: false,-->
<!--checked: false,-->
<!--long_description: '',-->
<!--short_description: '',-->
<!--dislplay_price: '' // different for variants but top level for product list-->
<!--}-->
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    mounted () {
      this.getAllProducts()
    },
    props: ['product'],
    computed: {
      ...mapGetters([
        'allProducts'
      ]),
      product () {
        let id = parseInt(this.$route.params.id)
        return this.allProducts.find((p) => p.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'getAllProducts',
        'addToCart'
      ])
    }
  }
</script>

<style>
.product-item {
  margin: 10px 10px;
  width: 500px;
  height: 400px;
  border-bottom: 1px solid #aaa;
}
.back-link {
  font-size: 20px;
}
.product-title {
  padding-top: 120px;
  text-align: center;
  margin: 0 auto;
  font-size: 26px;
}
.product-details {
  margin-top: 120px;
}
.inventory {
  float: left;
  font-size: 20px;
  margin-top: 15px;
}
.add-button {
  float: right;
  width: 140px;
  height: 50px;
}
</style>
