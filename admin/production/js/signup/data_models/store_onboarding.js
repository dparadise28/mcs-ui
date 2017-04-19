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


var product = {};
var category = {
    name: "",
    products: []
};
var categories = [];
var payment = {};
