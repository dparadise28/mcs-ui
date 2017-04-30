var store = new Vue({
    el: '#storeInfo',

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
            store: store,
        },
    },

    methods: {
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
    },

    computed: {
        // store validation
        store_name_format_check: function() {return username_format_check(this.data_models.store.name);},
        store_address_format_check: function() {return store_address_format_check(this.data_models.store);},
        check_phone_number: function() {return check_phone_number(this.data_models.store.phone_number);},

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
