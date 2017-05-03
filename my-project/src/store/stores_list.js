import shop from '@/api/shop'

const state = {
  all: []
};

const actions = {

  getAllStores ({commit}) {
    shop.getStores(stores => {
      commit('receive_stores', stores)
    })
  }
};

const mutations = {
  receive_stores (state, stores) {
    state.all = stores
  }
};

const getters = {
  allStores (state) {
    return state.all
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
