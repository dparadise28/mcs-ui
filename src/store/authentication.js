import axios from 'axios'
// axios.defaults.withCredentials = true
// import Router from '../router'
import { Cookies } from 'quasar'
const API_URL = 'http://mycorner.store:8080/api/'
const LOGIN_URL = API_URL + 'user/login'
const SIGNUP_URL = API_URL + 'user/create'
const USER_RETRIEVE = API_URL + 'user/retrieve'

const state = {
  authenticated: false
}

const actions = {
  login ({ commit }, creds) {
    axios.get(LOGIN_URL, {
      params: {
        email: creds.email,
        password: creds.password
      }
    }).then(function (response) {
      console.log(response)
      console.log(response.data.login.userID)
      console.log(response.data.login.authtoken)

      Cookies.set('userID', response.data.login.userID, {path: '/api', expire: '10'})
      Cookies.set('authtoken', response.data.login.authtoken, {path: '/api', expire: '10'})

      commit('authenticationTrue')
      // Router.push('/')
    }).catch(function (error) {
      console.log(error)
    })
  },
  retrieve ({ commit }) {
    axios.get(USER_RETRIEVE).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  },

  signup ({ commit }, creds) {
    axios.post(SIGNUP_URL, JSON.stringify(creds)).then(function (response) {
      Cookies.set('userID', response.data.login.userID, {path: '/api', expire: '10'})
      Cookies.set('authtoken', response.data.login.authtoken, {path: '/api', expire: '10'})

      commit('authenticationTrue')
    }).catch(function (error) {
      console.log(error)
    })
  },

  logout ({ commit }) {
    Cookies.remove('userID')
    Cookies.remove('authtoken')
    commit('changeAuthentication')
  },
  checkAuth ({ commit }) {
    var jwt = Cookies.get('authtoken')
    var cookies = Cookies.all()
    console.log(cookies)
    console.log(jwt)
    if (jwt) {
      commit('authenticationTrue')
    }
    else {
      commit('authenticationFalse')
    }
  },
  authBasedRoute ({ dispatch }) {
    console.log('hello')
    dispatch('checkAuth')

    if (state.authenticated) {
      this.$router.push('/user/1')
    }
  }
}

const mutations = {
  authenticationTrue (state) {
    state.authenticated = true
  },
  authenticationFalse (state) {
    state.authenticated = false
  }
}

export default {
  state,
  actions,
  mutations
}
