<template>
  <div>
    <div>
      <h4 class="text-dark text-bold">Enter Products</h4>
      <button class="outline tertiary" @click="create_product_modal_view=true">
        New Product
      </button>
      <br><br>
      <div class="list full-width" v-if="create_product_modal_view">
        <div class="item two-lines">
          <div class="item-content">
            <label class="text-primary">Product Name</label>
            <i v-show="!new_product.title" class="text-red">*</i>
            <i v-show="new_product.title" class="text-green">check</i>
            <input placeholder="Product Name" v-model="new_product.title" class="full-width">
          </div>
        </div>
        <div class="item two-lines">
          <div class="item-content">
            <label class="text-primary">Product Name</label>
            <span v-show="!new_product.dislplay_price" class="text-red">$</span>
            <span v-show="new_product.dislplay_price" class="text-green">$</span>
            <input placeholder="$xx.xx"
               type="number" min="0.01" step="0.01"
               v-model="new_product.dislplay_price"
               class="full-width">
          </div>
        </div>
        <!--<br>-->
        <!--<div class="item multiple-lines" v-if="!new_product.images.length">-->
          <!--<div class="dropzone-area"-->
             <!--drag-over="handleDragOver"-->
             <!--@dragenter="new_product.hovering=true"-->
             <!--@dragleave="new_product.hovering=false"-->
             <!--:class="{'hovered': new_product.hovering}">-->
            <!--<div class="dropzone-text">-->
              <!--<span class="dropzone-title">-->
                <!--Drop an image of your store here or click to select-->
              <!--</span>-->
            <!--</div>-->
            <!--<input type="file" @change="onFileChange">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="item multiple-lines" style="display: table; margin: 0 auto;" v-if="new_product.images.length">-->
          <!--<img :src="new_product.images[0]" style="width:auto; height:auto; max-width:100%; max-height:100%;"/>-->
          <!--<button @click="removeImage" v-if="new_product.images[0]" class="small outline tertiary">Remove Image</button>-->
        <!--</div>-->
        <div class="item two-lines">
          <div class="item-content">
            <label class="text-primary">Item Description</label>
            <i v-show="!new_product.short_description" class="text-red">*</i>
            <i v-show="new_product.short_description" class="text-green">check</i>
            <textarea class="full-width" v-model="new_product.short_description" placeholder="Short Description"></textarea>
          </div>
        </div>
        <br>
        <div class="item">
          <div class="item-content">
          <button class="primary" @click="add_product()">Add Product</button>
          <button class="outline negative float-right" @click="reset_temp_product()">Cancel</button>
          </div>
        </div>
        <br>
      </div>
          <!--&lt;!&ndash;Suggested products&ndash;&gt;-->
          <!--<div style="height: 95%; overflow-y: scroll; border-style: outset;"-->
               <!--class="col-lg-6 col-md-6 col-sm-6 col-xs-12"-->
               <!--v-if="!create_product_modal_view">-->
            <!--<h2>Suggested Products</h2><br><br>-->
            <!--<button class="modal-default-button" @click="create_product_modal_view=true">-->
              <!--create new product-->
            <!--</button>-->
            <!--<br><br>-->

            <!--<div v-for="(product, p_index) in sample_suggested_products"-->
                 <!--class="col-lg-11 col-md-11 col-sm-11 col-xs-11-->
                              <!--col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1-->
                              <!--fh5co-property">-->
              <!--<div class="col-lg-4 col-md-4 col-sm-4 col-ms-4 product_image">-->
                <!--<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">-->
                  <!--&lt;!&ndash; Indicators &ndash;&gt;-->
                  <!--<ol class="carousel-indicators" v-for="(image, i_index) in product.images">-->
                    <!--<li data-target="#carousel-example-generic"-->
                        <!--:data-slide-to="i_index"-->
                        <!--v-bind:class="{'active': i_index == 0, 'product_image': true}"></li>-->
                  <!--</ol>-->

                  <!--&lt;!&ndash; Wrapper for slides &ndash;&gt;-->
                  <!--<div class="carousel-inner" v-for="(image, i_index) in product.images">-->
                    <!--<div v-bind:class="{'active': i_index == 0, 'item': true, 'product_image': true}">-->
                      <!--<img :src="image" alt="...">-->
                    <!--</div>-->
                  <!--</div>-->

                  <!--&lt;!&ndash; Controls &ndash;&gt;-->
                  <!--<a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">-->
                    <!--<span class="glyphicon glyphicon-chevron-left"></span>-->
                  <!--</a>-->
                  <!--<a class="right carousel-control" href="#carousel-example-generic" data-slide="next">-->
                    <!--<span class="glyphicon glyphicon-chevron-right"></span>-->
                  <!--</a>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="col-lg-6 col-md-6 col-sm-6">-->
                <!--<h2>{{product.title}}</h2>-->
                <!--{{product.short_description}}-->
              <!--</div>-->
              <!--<div class="col-lg-2 col-md-2 col-sm-2">-->
                <!--{{product.dislplay_price}}-->
                <!--<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">-->
                  <!--<label>add</label>-->
                  <!--<input type="checkbox"-->
                         <!--:id="p_index" class="cbx hidden"-->
                         <!--v-on:click="product.add_to_category=true; temp_category_prods.push(product)"/>-->
                  <!--<label :for="p_index" class="lbl"></label>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->

          <!--Category products-->
            <h5 class="text-dark text-bold">Category Products</h5>
            <div v-if="temp_category_prods.length==0">No products added :/ Please add some products!</div>
            <div v-if="!temp_category_prods.length==0">Edit, remove, and finalize category products.</div>
      <div v-for="(product, p_index) in temp_category_prods" class="list highlight">
                <!--<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">-->
                  <!--&lt;!&ndash; Indicators &ndash;&gt;-->
                  <!--<ol class="carousel-indicators" v-for="(image, i_index) in product.images">-->
                    <!--<li data-target="#carousel-example-generic"-->
                        <!--:data-slide-to="i_index"-->
                        <!--v-bind:class="{'active': i_index == 0, 'product_image': true}"></li>-->
                  <!--</ol>-->

                  <!--&lt;!&ndash; Wrapper for slides &ndash;&gt;-->
                  <!--<div class="carousel-inner" v-for="(image, i_index) in product.images">-->
                    <!--<div v-bind:class="{'active': i_index == 0, 'item': true, 'product_image': true}">-->
                      <!--<img :src="image" alt="...">-->
                    <!--</div>-->
                  <!--</div>-->

                  <!--&lt;!&ndash; Controls &ndash;&gt;-->
                  <!--<a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">-->
                    <!--<span class="glyphicon glyphicon-chevron-left"></span>-->
                  <!--</a>-->
                  <!--<a class="right carousel-control" href="#carousel-example-generic" data-slide="next">-->
                    <!--<span class="glyphicon glyphicon-chevron-right"></span>-->
                  <!--</a>-->
                <!--</div>-->
              <div class="item multiple-lines">
                <div class="item-primary">
                  <q-checkbox :id="p_index" v-model="product.checked" @input="product.add_to_category=true"></q-checkbox>
                </div>
                <div class="item-content has-secondary">
                  <big class="">{{product.title}}</big><br>
                  $ {{product.dislplay_price}}<br>
                  {{product.short_description}}
                </div>
                <div class="item-secondary">
                  <input type="checkbox" :id="p_index" class="cbx hidden" v-on:click="product.add_to_category=true"/>
                  <i class ="text-negative" @click="removeProduct(p_index)">delete</i>
                  <label :for="p_index" class="lbl"></label>
                </div>
              </div>
            </div>
        </div>
  </div>
</template>
<script>
  import {Toast} from 'quasar'
  export default {
    props: ['current_category'],
    methods: {
      productAddedToast () {
        Toast.create('New Product Added')
      },
      onFileChange (e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.createImage(files[0])
      },
      createImage (file) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.new_product.images.push(e.target.result)
        }
        reader.readAsDataURL(file)
      },
      removeImage: function (e) {
        this.new_product.images = []
      },
      reset_temp_product: function () {
        this.new_product = {
          title: '',
          images: [], // leaving at top level for now (which means variants cant have imgs)
          category: '', // ? just one or list of cats it falls in (tempted to say list)
          keywords: [],
          checked: false,
          add_to_category: false,
          long_description: '',
          short_description: '',
          dislplay_price: '--' // different for variants but top level for product list
        }
        this.create_product_modal_view = false
      },
      add_product: function () {
        this.productAddedToast()
        this.create_product_modal_view = false
        // ajax call to verify and queue storing
        this.temp_category_prods.push(this.new_product)
        // reset product template
        this.new_product = {
          title: '',
          images: [], // leaving at top level for now (which means variants cant have imgs)
          category: '', // ? just one or list of cats it falls in (tempted to say list)
          keywords: [],
          add_to_category: false,
          checked: true,
          long_description: '',
          short_description: '',
          dislplay_price: '--' // different for variants but top level for product list
        }
      },
      removeProduct: function (pindex) {
        this.temp_category_prods.splice(pindex, 1)
      }
    },
    data () {
      return {
        newProduct: false,
        checked: false,
        create_product_modal_view: false,
        temp_category_prods: [],
        new_product: {
          title: '',
          images: [], // leaving at top level for now (which means variants cant have imgs)
          category: '', // ? just one or list of cats it falls in (tempted to say list)
          keywords: [],
          checked: false,
          add_to_category: false,
          long_description: '',
          short_description: '',
          dislplay_price: '--' // different for variants but top level for product list
        },
        sample_suggested_products: [{
          title: 'sample prod 1',
          images: ['http://placehold.it/800x400', 'http://placehold.it/800x400', 'http://placehold.it/800x400'], // leaving at top level for now (which means variants cant have imgs)
          category: '', // ? just one or list of cats it falls in (tempted to say list)
          keywords: [],
          add_to_category: false,
          long_description: '',
          short_description: 'sample product description for sample product 1 ...',
          dislplay_price: '$xx.xx' // different for variants but top level for product list view
        }, {
          title: 'sample prod 2',
          images: ['http://placehold.it/800x400', 'http://placehold.it/800x400', 'http://placehold.it/800x400'], // leaving at top level for now (which means variants cant have imgs)
          category: '', // ? just one or list of cats it falls in (tempted to say list)
          keywords: [],
          add_to_category: false,
          long_description: '',
          short_description: 'sample product description for sample product 2 ...',
          dislplay_price: '$xx.xx' // different for variants but top level for product list view
        }, {
          title: 'sample prod 3',
          images: ['http://placehold.it/800x400', 'http://placehold.it/800x400', 'http://placehold.it/800x400'], // leaving at top level for now (which means variants cant have imgs)
          category: '', // ? just one or list of cats it falls in (tempted to say list)
          keywords: [],
          add_to_category: false,
          long_description: '',
          short_description: 'sample product description for sample product 3 ...',
          dislplay_price: '$xx.xx' // different for variants but top level for product list view
        }]
      }
    }
  }
</script>

<style>
  .modal-content.scroll{
    padding: 10px;
  }
</style>
