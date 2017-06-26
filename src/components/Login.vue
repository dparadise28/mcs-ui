<template>
  <div class="group" style="padding: 30px">
    <h3>Log In</h3>
    <p>Log in to your account and access your corner!</p>
      <div class="floating-label">
        <input
          type="text"
          v-model="email"
          required class="full-width"
        >
        <label class="text-primary">Enter Your email</label>
      </div>
      <div class="floating-label">
        <input
          type="password"
          v-model="password"
          required class="full-width"
          @keyup.enter="submitLogIn"
        >
        <label class="text-primary">Enter Your Password</label>
      </div>
    <br>
    <button class="tertiary" @click="submitLogIn">Log In</button>
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
      }
    }
  }
</script>
