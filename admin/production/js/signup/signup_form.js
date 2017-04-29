Vue.component('step-navigation-step', {

    template: `
        <li :class="indicatorclass">
            <div class="step"><i :class="step.icon_class"></i></div>
            <div class="caption hidden-xs hidden-sm">
                Step {{ step.id }}: {{ step.title }}
            </div>
        </li>`,

    props: ['step', 'currentstep'],

    computed: {
        indicatorclass: function() {
            return {
                'active': (this.step.id == this.currentstep),
                'complete': (this.currentstep > this.step.id)
            }
        }
    }
});

Vue.component('step-navigation', {
    data: function () {
        return {
            indicatorclass: false
        }
    },
    template: `
        <ol class="step-indicator">
            <li
                v-for="step in steps"
                is="step-navigation-step"
                :step="step"
                :currentstep="currentstep">
            </li>
        </ol>`,

    props: ['steps', 'currentstep']
});

Vue.component('step-controls', {

    template: `
        <div class="step-wrapper" :class="{ 'active': active }">
            <button class="btn btn-back-forth" @click="lastStep()" :disabled="firststep">Back</button>
            <button class="btn btn-back-forth" @click="nextStep()" :disabled="laststep || !nextstep">Next</button>
            <button class="btn btn-back-forth" v-if="laststep">Submit</button>
        </div>`,

    props: ['step', 'stepcount', 'currentstep', 'allow_next_step'],

    computed: {
        active: function() {
            /*if (this.currentstep == 1){
                document.getElementById('store_locator_map').style.visibility = "visible";
                document.getElementById("store_locator_map").style.height = "240px";
            } else {
                document.getElementById('store_locator_map').style.visibility = "hidden";
                document.getElementById("store_locator_map").style.height = "20px";
            };*/
            return (this.step.id == this.currentstep)
        },
        firststep: function() {
            return (this.currentstep == 1)
        },
        nextstep: function(){
            return  true;
        },
        laststep: function() {
            return (this.currentstep == this.stepcount)
        }
    },

    methods: {
        nextStep: function() {
            this.$emit('step-change', this.currentstep + 1)
        },

        lastStep: function() {
            this.$emit('step-change', this.currentstep - 1)
        }
    }
});

// register modal component
Vue.component('modal', {
    template: `
        <!-- template for the modal component -->
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">

              <div class="modal-container" style="overflow-y: scroll; border-style: outset;">

                <!--Product Creation Form-->
                <div style="height: 95%; overflow-y: scroll; border-style: outset;"
                     class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                     v-if="create_product_modal_view">
                    <h2>Create Product</h2><br><br>
                    <div class="row input-group">
                      <br>
                      <span class="bg-white input-group-addon">
                        <span v-show="!new_product.title" class="red">*</span>
                        <span v-show="new_product.title" class="small glyphicon glyphicon-ok green"></span>
                      </span>
                      <input style="display: table; margin: 0 auto; width: 90%;" placeholder="Name" v-model="new_product.title">
                    </div>
                    <div class="input-group">
                      <br>
                      <span class="bg-white input-group-addon">
                        <span v-show="!new_product.dislplay_price" class="red">$</span>
                        <span v-show="new_product.dislplay_price" class="green">$</span>
                      </span>
                      <input style="display: table; margin: 0 auto; width: 90%;" placeholder="$xx.xx"
                             type="number" min="0.01" step="0.01"
                             v-model="new_product.dislplay_price">
                    </div>


                    <div class="row" v-if="!new_product.images.length">
                      <div class="dropzone-area"
                           drag-over="handleDragOver"
                           @dragenter="new_product.hovering=true"
                           @dragleave="new_product.hovering=false"
                           :class="{'hovered': new_product.hovering}">
                          <div class="dropzone-text">
                              <span class="dropzone-title">
                                  Drop an image of your store here or click to select
                              </span>
                          </div>
                          <input type="file" @change="onFileChange">
                      </div>
                    </div>
                    <div class="row" style="display: table; margin: 0 auto;" v-if="new_product.images.length">
                      <img :src="new_product.images[0]" style="width:auto; height:auto; max-width:100%; max-height:100%;"/>
                      <button @click="removeImage"
                              v-if="new_product.images[0]"
                              style="display: table; margin: 0 auto;">Remove Image</button>
                    </div>
                    <div class="row input-group">
                      <br>
                      <textarea style="display: table; margin: 0 auto;" v-model="new_product.short_description" placeholder="Short Description"></textarea>
                      <span class="bg-white input-group-addon">
                        <span v-show="!new_product.short_description" class="red">*</span>
                        <span v-show="new_product.short_description" class="small glyphicon glyphicon-ok green"></span>
                      </span>
                    </div>
                    <textarea style="width: 100%;" v-model="new_product.long_description" placeholder="Long Description"></textarea>

                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div id="editor-container" style="height: 185px;"></div>
                  </div>
                  <button class="modal-default-button" @click="add_product()">
                    Add Product
                  </button>
                  <button class="modal-default-button" @click="reset_temp_product()">
                    Cancel
                  </button>
                </div>

                <!--Suggested products-->
                <div style="height: 95%; overflow-y: scroll; border-style: outset;"
                     class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                     v-if="!create_product_modal_view">
                  <h2>Suggested Products</h2><br><br>
                  <button class="modal-default-button" @click="create_product_modal_view=true">
                    create new product
                  </button>
                  <br><br>

                  <div v-for="(product, p_index) in sample_suggested_products">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-4 col-ms-4 product_image">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                          <!-- Indicators -->
                          <ol class="carousel-indicators" v-for="(image, i_index) in product.images">
                            <li data-target="#carousel-example-generic"
                                :data-slide-to="i_index"
                                v-bind:class="{'active': i_index == 0, 'product_image': true}"></li>
                          </ol>

                          <!-- Wrapper for slides -->
                          <div class="carousel-inner" v-for="(image, i_index) in product.images">
                            <div v-bind:class="{'active': i_index == 0, 'item': true, 'product_image': true}">
                              <img :src="image" alt="...">
                            </div>
                          </div>

                          <!-- Controls -->
                          <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                          </a>
                          <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <h2>{{product.title}}</h2>
                        {{product.short_description}}
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-2">
                        {{product.dislplay_price}}
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <label>add</label>
                            <input type="checkbox"
                                   :id="p_index" class="cbx hidden"
                                   v-on:click="product.add_to_category=true; temp_category_prods.push(product)"/>
                            <label :for="p_index" class="lbl"></label>
                        </div>
                      </div>
                    </div>
                    <br><br>
                  </div>
                </div>

                <!--Category products-->
                <div style="height: 95%; overflow-y: scroll; border-style: outset;"
                     class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <h2>Products</h2><br><br>
                  <div v-for="(product, p_index) in temp_category_prods">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-4 product_image">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                          <!-- Indicators -->
                          <ol class="carousel-indicators" v-for="(image, i_index) in product.images">
                            <li data-target="#carousel-example-generic"
                                :data-slide-to="i_index"
                                v-bind:class="{'active': i_index == 0, 'product_image': true}"></li>
                          </ol>

                          <!-- Wrapper for slides -->
                          <div class="carousel-inner" v-for="(image, i_index) in product.images">
                            <div v-bind:class="{'active': i_index == 0, 'item': true, 'product_image': true}">
                              <img :src="image" alt="...">
                            </div>
                          </div>

                          <!-- Controls -->
                          <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                          </a>
                          <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <h2>{{product.title}}</h2>
                        {{product.short_description}}
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-2">
                        {{product.dislplay_price}}
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <label>add</label>
                            <input type="checkbox" :id="p_index" class="cbx hidden" v-on:click="product.add_to_category=true"/>
                            <label :for="p_index" class="lbl"></label>
                        </div>
                      </div>
                    </div>
                    <br><br>
                  </div>
                </div>

                <div style="height: 20%;" class="modal-footer">
                  <slot name="footer">
                    <button class="modal-default-button" @click="$emit('close')">
                      OK
                    </button>
                  </slot>
                </div>

              </div>

            </div>
          </div>
        </transition>
    `,
    props: ['current_category'],
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                this.new_product.images.push(e.target.result);
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.new_product.images = [];
        },
        reset_temp_product: function() {
            this.new_product = {
                title: "",
                images: [], // leaving at top level for now (which means variants cant have imgs)
                category: "", // ? just one or list of cats it falls in (tempted to say list)
                keywords: [],
                add_to_category: false,
                long_description: "",
                short_description: "",
                dislplay_price: "", // different for variants but top level for product list
            };
            this.create_product_modal_view=false;
        },
        add_product: function() {
            this.create_product_modal_view=false;
            // ajax call to verify and queue storing
            this.temp_category_prods.push(this.new_product);
            // reset product template
            this.new_product = {
                title: "",
                images: [], // leaving at top level for now (which means variants cant have imgs)
                category: "", // ? just one or list of cats it falls in (tempted to say list)
                keywords: [],
                add_to_category: false,
                long_description: "",
                short_description: "",
                dislplay_price: "", // different for variants but top level for product list
            };
        },
    },
    data: function() {
        data = {
            create_product_modal_view: false,
            temp_category_prods: [],
            new_product: {
                title: "",
                images: [], // leaving at top level for now (which means variants cant have imgs)
                category: "", // ? just one or list of cats it falls in (tempted to say list)
                keywords: [],
                add_to_category: false,
                long_description: "",
                short_description: "",
                dislplay_price: "", // different for variants but top level for product list
            },
            sample_suggested_products: [{
                title: "sample prod 1",
                images: ['http://placehold.it/800x400', 'http://placehold.it/800x400', 'http://placehold.it/800x400'], // leaving at top level for now (which means variants cant have imgs)
                category: "", // ? just one or list of cats it falls in (tempted to say list)
                keywords: [],
                add_to_category: false,
                long_description: "",
                short_description: "sample product description for sample product 1 ...",
                dislplay_price: "$xx.xx", // different for variants but top level for product list view
            }, {
                title: "sample prod 2",
                images: ['http://placehold.it/800x400', 'http://placehold.it/800x400', 'http://placehold.it/800x400'], // leaving at top level for now (which means variants cant have imgs)
                category: "", // ? just one or list of cats it falls in (tempted to say list)
                keywords: [],
                add_to_category: false,
                long_description: "",
                short_description: "sample product description for sample product 2 ...",
                dislplay_price: "$xx.xx", // different for variants but top level for product list view
            }, {
                title: "sample prod 3",
                images: ['http://placehold.it/800x400', 'http://placehold.it/800x400', 'http://placehold.it/800x400'], // leaving at top level for now (which means variants cant have imgs)
                category: "", // ? just one or list of cats it falls in (tempted to say list)
                keywords: [],
                add_to_category: false,
                long_description: "",
                short_description: "sample product description for sample product 3 ...",
                dislplay_price: "$xx.xx", // different for variants but top level for product list view
            },],
        }
        return data
    }
})

var store = new Vue({
    el: '#storeCreateApp',

    data: {
        currentstep : 1,
        indicatorclass: true,
        current_category: null,
        step: 1,
        active: 1,
        firststep: true,
        nextStep:"",
        lastStep: "",
        laststep: false,
        new_category_name: "",
        new_category_i_name: "",
        data_models: {
            user: user,
            store: store,
            categories: categories,
            payment: payment
        },
        steps: [
            {
                id: 1,
                title: 'Register',
                icon_class: "fa fa-pencil-square-o",
                data_mode: user,
                validators: [
                    email_format_check,
                    username_format_check,
                    password_format_check,
                    categories_format_check
                ]
            }, {
                id: 2,
                title: 'Store Info',
                icon_class: "fa fa-info",
                data_model: store
            }, {
                id: 3,
                title: 'Categories',
                icon_class: "fa fa-list-ul",
                data_model: categories
            }, {
                id: 4,
                title: 'Payment Info',
                icon_class: "fa fa-credit-card",
                data_model: payment
            }
        ]
    },

    methods: {
        // components
        stepChanged: function(step) {
            this.currentstep = step;
        },

        // images
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                this.data_models.store.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.data_models.store.image = '';
        },

        // store info
        pickup_offered: function() {
            this.data_models.store.pickup.service_offered = !this.data_models.store.pickup.service_offered
        },
        delivery_offered: function() {
            this.data_models.store.delivery.service_offered = !this.data_models.store.delivery.service_offered
        },

        // categories
        removeCategory: function(c_index) {
            categories.splice(c_index, 1);
        },
        addCategory: function() {
            // add in for category state (false because done editing)
            // when clicking edit on the category you would like to update
            // the state of the respective bool in the category_states
            // will be true for input rendering until done editing
            this.data_models.categories.push({
                name: this.new_category_name,
                edit: false,
                new_c_name: this.new_category_name,
                showNewPostModal: false,
                products: [],
            });
            this.new_category_name = "";
        },
        prepCategoryUpdateState: function(c_index){
            this.data_models.categories[c_index].edit = true;
        },
        updateCategory: function(c_index) {
            this.data_models.categories[c_index].name = this.data_models.categories[c_index].new_c_name;
            this.data_models.categories[c_index].edit = false;
        },

        // products
        removeVariant: function(v_index) {
            // Remove job from GUI
            this.product.variants.splice(v_index, 1);
        },
        removeOption: function(v_index, o_index) {
            // Remove job from GUI
            this.product.variants[v_index].options.splice(o_index, 1);
        },
        addVariant: function() {
            this.product.variants.push({
                name: this.product.new_variant_name,
                id: this.product.variants.length+1,
                new_option_name: "",
                options: []
            });
            this.product.new_variant_name = "";
        },
        addOption: function(v_index) {
            this.product.variants[v_index].options.push({
              option_name: this.product.variants[v_index].new_option_name
            });
            this.product.variants[v_index].new_option_name = "";
        }
    },

    computed: {
        // user validation
        email_format_check: function() {return email_format_check(this);},
        username_format_check: function() {return username_format_check(this.data_models.user.username);},
        password_format_check: function() {return password_format_check(this);},
        categories_format_check: function() {return categories_format_check(this);},

        // store validation
        store_name_format_check: function() {return username_format_check(this.data_models.store.name);},
        store_address_format_check: function() {return store_address_format_check(this.data_models.store);},
        check_phone_number: function() {return check_phone_number(this.data_models.store.phone_number);},

        allow_next_step: function(){
            // TODO fix so next button disabling works when validating if all fields are filled out properly
            this.steps[this.currentstep-1].validators.forEach(function(validator){
                console.log(validator);
                if (!validator()){
                    return
                }
            });
            this.allow_next_step = true;
        },

        formatted_phone_number: {
          	get () {
                fmatted_number = String(this.data_models.store.phone_number).replace(/\D/g,'');
                if (fmatted_number.length > 0) {
                    fmatted_number = '(' + fmatted_number.substring(0, 3) + ')' +
                                     ' ' + fmatted_number.substring(3, 6) + ' -' +
                                     ' ' + fmatted_number.substring(6, 10);
                }
                return fmatted_number;
            },

            set (value) {
                if (String(value).replace(/\D/g,'').length < 11) {
                    this.data_models.store.phone_number = String(value).replace(/\D/g,'');
                };
            }
        }
    }
});
