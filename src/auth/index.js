import axios from 'axios'
import Router from '../router'
const API_URL = 'http://mycorner.store:8001/api/'
const LOGIN_URL = API_URL + 'user/create/'
const SIGNUP_URL = API_URL + 'user/create/'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login (context, creds, redirect) {
    axios.post(LOGIN_URL, creds).then(function (response) {
      localStorage.setItem('id_token', response.id_token)
      localStorage.setItem('access_token', response.access_token)
      this.user.authenticated = true
      // Redirect to a specified route
      if (redirect) {
        Router.go(redirect)
      }
    }).catch(function (error) {
      console.log(error)
    })
  },

  signup (creds, redirect) {
    axios.post(SIGNUP_URL, creds).then(function (response) {
      localStorage.setItem('id_token', response.id_token)
      localStorage.setItem('access_token', response.access_token)

      this.user.authenticated = true

      if (redirect) {
        Router.go(redirect)
      }
    }).catch(function (error) {
      console.log(error)
    })
  },

  // To log out, we just need to remove the token
  logout () {
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    this.user.authenticated = false
  },

  checkAuth () {
    var jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }
}
