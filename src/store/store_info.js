const state = {
  user: {
    user_id: '',
    email: '',
    username: '',
    password: '',
    store_categories: []
  },
  store: {
    store_id: '',
    name: '',
    image: '',
    phone: '',
    address: {
      administrative_area_level_1: '',
      country: '',
      latitude: '',
      longitude: '',
      postal_code: '',
      route: '',
      street_number: ''
    },
    hovering: false,
    working_hours: [
      {day: 'Sunday', from: '09:00', to: '17:00'},
      {day: 'Monday', from: '09:00', to: '17:00'},
      {day: 'Tuesday', from: '09:00', to: '17:00'},
      {day: 'Wednesday', from: '09:00', to: '17:00'},
      {day: 'Thursday', from: '09:00', to: '17:00'},
      {day: 'Friday', from: '09:00', to: '17:00'},
      {day: 'Saturday', from: '09:00', to: '17:00'}],
    tax_rate: '',
    keywords: [],
    description: '',
    pickup: {
      offered: false,
      pickUpItems: {
        min: 0,
        max: 100
      },
      minimum_time_to_pickup: 30,
      maximum_time_to_pickup: 90
    },
    delivery: {
      service_offered: false,
      delivery_fee: '$0.00',
      delivery_minimum: '$10.00',
      delivery_distance: 2,
      minimum_time_to_delivery: 30 * 60
    }
  },
  product: {
    title: '',
    images: [], // leaving at top level for now (which means variants cant have imgs)
    category: '', // ? just one or list of cats it falls in (tempted to say list)
    keywords: [],
    description: '',
    dislplay_price: '', // different for variants but top level for product list view
    rating: {
      // not there yet, just throwing it in the code for not to not forget it in the models
      reviews: [],
      total_reviews: 0,
      review_percent: null
    },
    variants: [],
    variant_product: [],
    new_variant_name: ''
  },
  payment: {
    cash: {
      accepted: false,
      minimum_order_amount: null
      // not sure if we want to ask for a min amount required but this is fine for now
    },
    cc: {
      accepted: false,
      cardName: '',
      cc_number: null,
      cc_exp: null,
      ccv: null
    }
  }
}

const actions = {
  onFileChange ({commit}, e) {
    var files = e.target.files || e.dataTransfer.files
    if (!files.length) return
    commit('createImage', files[0])
  },
  removeImage ({commit}) {
    commit('removeimage')
  },
  setName ({commit}, name) {
    commit('setname', name)
  },
  updateUser ({commit}, field) {
    commit('update_user', field)
  }
}

const mutations = {
  createImage (state, file) {
    // var image = new Image()
    var reader = new FileReader()
    reader.onload = (e) => {
      state.store.image = e.target.result
    }
    reader.readAsDataURL(file)
  },
  removeimage (state) {
    state.store.image = ''
  },
  update_user (state, field) {
    let keys = Object.keys(field),
      key
    for (let index = keys.length - 1; index > -1; index--) {
      key = keys[index]

      if (state.user.hasOwnProperty(key)) {
        state.user[key] = field[key]
      }
    }
  },
  update_store (state, field) {
    let keys = Object.keys(field),
      key
    for (let index = keys.length - 1; index > -1; index--) {
      key = keys[index]

      if (state.store.hasOwnProperty(key)) {
        state.store[key] = field[key]
      }
    }
  },
  update_cash (state, field) {
    let keys = Object.keys(field),
      key
    for (let index = keys.length - 1; index > -1; index--) {
      key = keys[index]

      if (state.payment.cash.hasOwnProperty(key)) {
        state.payment.cash[key] = field[key]
      }
    }
  },
  update_cc (state, field) {
    let keys = Object.keys(field),
      key
    for (let index = keys.length - 1; index > -1; index--) {
      key = keys[index]

      if (state.payment.cc.hasOwnProperty(key)) {
        state.payment.cc[key] = field[key]
      }
    }
  }
}

const getters = {
  storeImage (state) {
    return state.store.image
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
