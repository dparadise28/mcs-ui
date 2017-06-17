import router from '../router'
const state = {
  searchValue: ''
}

const actions = {
  searchForStores ({ commit }) {
    router.push('/stores_result')
  }
}

const mutations = {
  newSearch (state, value) {
    state.searchValue = value
  }
}

const getters = {
  allProducts (state) {
    return state.all
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
