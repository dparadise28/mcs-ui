import axios from 'axios'
import { LocalStorage } from 'quasar'

const API_URL = 'http://mycorner.store:8080/api/'
const LOGIN_URL = API_URL + 'user/login'
const SIGNUP_URL = API_URL + 'user/create'
const USER_RETRIEVE = API_URL + 'user/retrieve'

const state = {
  user: {
    authenticated: false
  }
}

const actions = {
  login ({ commit }, creds) {
    axios.get(LOGIN_URL, {
      withCredentials: false,
      params: {
        // email: creds.email,
        // password: creds.password
        email: 'danielsiryakov@gmail.com',
        password: 'daniel12'
      }
    }).then(function (response) {
      // LocalStorage.set('id_token', response.data.user_id)
      // console.log(response.data)
      // console.log(response.status)
      // console.log(response.statusText)
      console.log('the header is: ' + response.headers)
      // console.log(response.config)
      // Redirect to a specified route
    }).catch(function (error) {
      console.log(error)
    })
  },
  retrieve ({ commit }) {
    axios.get(USER_RETRIEVE).then(function (response) {
      // LocalStorage.set('id_token', response.data.user_id)
      console.log(response.data)
      // console.log(response.status)
      // console.log(response.statusText)
      // console.log(response.headers)
      // console.log(response.config)
      commit('changeAuthentication')
      // Redirect to a specified route
    }).catch(function (error) {
      console.log(error)
    })
  },

  signup ({ commit }, creds) {
    axios.post(SIGNUP_URL, JSON.stringify(creds)).then(function (response) {
      LocalStorage.set('id_token', response.data.user_id)

      commit('changeAuthentication')
    }).catch(function (error) {
      console.log(error)
    })
  },

  logout ({ commit }) {
    LocalStorage.remove('id_token')
    commit('changeAuthentication')
  }
}

const mutations = {
  changeAuthentication (state) {
    state.user.authenticated = !state.user.authenticated
  }
}

export default {
  state,
  actions,
  mutations
}
