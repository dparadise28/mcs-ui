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
    phone_number: "",
    address: "",

    image: '',
    hovering:false,

    working_hours : [
        {day: "Sunday",    from : '09:00', to : '17:00',},
        {day: "Monday",    from : '09:00', to : '17:00',},
        {day: "Tuesday",   from : '09:00', to : '17:00',},
        {day: "Wednesday", from : '09:00', to : '17:00',},
        {day: "Thursday",  from : '09:00', to : '17:00',},
        {day: "Friday",    from : '09:00', to : '17:00',},
        {day: "Saturday",  from : '09:00', to : '17:00',},
    ],
    tax_rate: "",
    keywords: [],
    description: "",
    pickup: {
        service_offered: false,
        minimum_time_to_pickup: 30,
        maximum_time_to_pickup: 90,
    },
    delivery: {
        service_offered: false,
        delivery_fee: "$0.00",
        delivery_minimum: "$10.00",
        delivery_distance: 2,
        minimum_time_to_delivery: 30*60,
    },
};


var product = {
    title: "",
    images: [], // leaving at top level for now (which means variants cant have imgs)
    category: "", // ? just one or list of cats it falls in (tempted to say list)
    keywords: [],
    description: "",
    dislplay_price: "", // different for variants but top level for product list view
    rating: {
        // not there yet, just throwing it in the code for not to not forget it in the models
        reviews: [],
        total_reviews: 0,
        review_percent: null,
    },
    variants: [],
    variant_product: [],
		new_variant_name: "",
};
var sample_suggested_products = [{
    title: "sample prod 1",
    images: ['http://placehold.it/800x400', 'http://placehold.it/800x400', 'http://placehold.it/800x400'], // leaving at top level for now (which means variants cant have imgs)
    category: "", // ? just one or list of cats it falls in (tempted to say list)
    keywords: [],
    add_to_category: false,
    description: "sample product description for sample product 1 ...",
    dislplay_price: "$xx.xx", // different for variants but top level for product list view
}, {
    title: "sample prod 2",
    images: ['http://placehold.it/800x400', 'http://placehold.it/800x400', 'http://placehold.it/800x400'], // leaving at top level for now (which means variants cant have imgs)
    category: "", // ? just one or list of cats it falls in (tempted to say list)
    keywords: [],
    add_to_category: false,
    description: "sample product description for sample product 2 ...",
    dislplay_price: "$xx.xx", // different for variants but top level for product list view
}, {
    title: "sample prod 3",
    images: ['http://placehold.it/800x400', 'http://placehold.it/800x400', 'http://placehold.it/800x400'], // leaving at top level for now (which means variants cant have imgs)
    category: "", // ? just one or list of cats it falls in (tempted to say list)
    keywords: [],
    add_to_category: false,
    description: "sample product description for sample product 3 ...",
    dislplay_price: "$xx.xx", // different for variants but top level for product list view
},]
var category = {
    // flat categories for now (ie no more then one level; not sure if this will change)
    products: [], // keep this here for orering
};
var categories = []; //container for all categories
var products = [];   // container for all prods


var payment = {
    cash: {
        accepted: false,
        minimum_order_amount: null,
        // not sure if we want to ask for a min amount required but this is fine for now
    },
    cc: {
        accepted: false,
        cc_number: null,
        cc_exp: null,
        ccv: null,
    }
};
