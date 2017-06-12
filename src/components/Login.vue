<template>
  <div class="" style="padding-left: 20px; padding-right: 20px">
    <h3>Log In</h3>
    <p>Log in to your account to get some great quotes.</p>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your email"
        v-model="email"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="password"
        @keyup.enter="submitLogIn"
      >
    </div>
    <button class="btn btn-primary" @click="submitLogIn">Access</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        password: '',
        email: ''
      }
    },
    methods: {
      ...mapActions([
        'login',
        'retrieve'
      ]),
      submitLogIn () {
        this.login(
          {
            'password': this.password,
            'email': this.email
          })
//        this.retrieve()
        this.$emit('submitLogIn')
      }
    }
  }
</script>
