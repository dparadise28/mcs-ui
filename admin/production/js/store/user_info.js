var store = new Vue({
    el: '#userInfo',

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
    },

    methods: {},

    computed: {
        // user validation
        email_format_check: function() {return email_format_check(this);},
        username_format_check: function() {return username_format_check(this.data_models.user.username);},
        password_format_check: function() {return password_format_check(this);},
        categories_format_check: function() {return categories_format_check(this);},
    }
});
