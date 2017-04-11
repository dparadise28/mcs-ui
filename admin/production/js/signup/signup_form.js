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
            <button class="btn btn-back-forth" @click="nextStep()" :disabled="laststep">Next</button>
            <button class="btn btn-back-forth" v-if="laststep">Submit</button>
        </div>`,

    props: ['step', 'stepcount', 'currentstep'],

    computed: {
        active: function() {
            return (this.step.id == this.currentstep)
        },

        firststep: function() {
            return (this.currentstep == 1)
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

new Vue({
    el: '#storeCreateApp',

    data: {
        currentstep : 1,
        indicatorclass: true,
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
                data_mode: user
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
        }
    }
});


var user = {
    user_name: "",
    email: "",
    password: "",
    store_categories: ""
};
var store = {};
var product = {};
var category = {
    name: "",
    products: []
};
var categories = [];
var payment = {};
