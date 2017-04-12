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

var user = {
    email: "",
    username: "",
    password: "",
    allow_next_step: false,
    store_categories: [],
    all_store_categories: [
        // TODO decide on categories and start populating some sample data for
        // later use in auto complete
        "Food",
        "Clothing",
        "Technology",
        "Entertainment",
        "Hardware",
        "Other"
    ],
    password_rules: `
        <div class="text-left">
            Password must have: <br>
            * at least 1 digit<br>
            * at least 1 special characters<br>
            * at least 1 alphabetic character<br>
            * no blank space<br>
            * 8-30 characters
        </div>`,
};
var store = {
    name: "",
    phone_number: "1-234-234-2341",
    location: "1234 w 112 ny, NY 10011",
    image: '',
    hovering:false,
    working_hours: [
        {sunday: ""}
    ],
    tax_rate: ""
    /*
        other things to put in place:

        keywords (auto filled in and add more if you like)
            description (not required but nice to have)
            in store
                reserve
                pickup
            delivery (y/n; required yes or no but no by default; :( would love a yes by default)
                delivery radius?
                minimum delivery amount (money)
                delivery fee*/
};
var product = {};
var category = {
    name: "",
    products: []
};
var categories = [];
var payment = {};

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

        allow_next_step: function(){
            // TODO fix so next button disabling works when validating if all fields are filled out properly
            this.steps[this.currentstep-1].validators.forEach(function(validator){
                console.log(validator);
                if (!validator()){
                    return
                }
            });
            this.allow_next_step = true;
        }
    }
});


// took out of computed for flexibility (maybe abstract them out to centralize all validation and pull in on page load)
function email_format_check(store) {
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegExp.test(store.data_models.user.email);
};
function username_format_check(data) {
    const usernameRegexp = /^[a-zA-Z0-9]+$/;
    return usernameRegexp.test(data);
};
function password_format_check(store) {
    /**
          * (?=.*\d)         should contain at least 1 digit
          * (?=(.*\W))       should contain at least 1 special characters
          * (?=.*[a-zA-Z])   should contain at least 1 alphabetic character
          * (?!.*\s)         should not contain any blank space
          * {8,30}           8 <= pw length <= 30
    */
    const pwRegexp = /^(?=.*\d)(?=(.*\W))(?=.*[a-zA-Z])(?!.*\s).{8,30}$/;
    return pwRegexp.test(store.data_models.user.password);
};
function categories_format_check(store) {
    if (store.data_models.user.store_categories.length > 0) {
      return true;
    }; return false
};
