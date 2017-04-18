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
            if (this.currentstep == 1){
                console.log('listening');
                document.getElementById('store_locator_map').style.visibility = "visible";
                document.getElementById("store_locator_map").style.height = "240px";
            } else {
                console.log('listening');
                document.getElementById('store_locator_map').style.visibility = "hidden";
                document.getElementById("store_locator_map").style.height = "20px";
            };
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

var store = new Vue({
    el: '#storeCreateApp',

    data: {
        currentstep : 1,
        indicatorclass: true,
        allow_next_step: false,
        step: 1,
        active: 1,
        firststep: true,
        nextStep:"",
        lastStep: "",
        laststep: false,
        data_models: {
            user: user,
            store: store,
            category: category,
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
        stepChanged: function(step) {
            this.currentstep = step;
        },
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
        ////////////////////////
        /*addNewDate: function (day) {
            var elementIdFrom = "datepicker_from_" + day;
            var elementIdTo = "datepicker_to_" + day;
            this.initClocl(elementIdFrom);
            this.initClocl(elementIdTo);
            return {
                day: day,
                from: '09:00',
                to: '17:00',
            };
        },*/
        removeThisDate: function(index){
            this.dates.splice(index, 1);
        },
        /*initClocl: function(id){
            setTimeout(function(){
                $('#'+id).clockpicker('minutes');
            },500);
        }*/
        //////////////////////
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


/*function addNewDate(day) {
    var elementIdFrom = "datepicker_from_" + day;
    var elementIdTo = "datepicker_to_" + day;
    this.initClocl(elementIdFrom);
    this.initClocl(elementIdTo);
    return {
        day: day,
        from: '09:00',
        to: '17:00',
    };
};
function initClocl(id){
    setTimeout(function(){
        $('#'+id).clockpicker('minutes');
    },500);
};*/
