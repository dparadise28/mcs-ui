<template>
  <div class="" style="padding-left: 20px; padding-right: 20px">
    <h3>Sign Up</h3>
    <p>Signup to your account to get some great quotes.</p>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your username"
        v-model="username"
      >
    </div>
    <div class="form-group">
      <input
        type="email"
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
        @keyup.enter="submit"
      >
    </div>

    <button class="btn btn-primary" @click="submit">Access</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        username: '',
        password: '',
        email: ''
      }
    },
    methods: {
      ...mapActions([
        'signup'
      ]),
      submit () {
        this.signup(
          {
            'username': this.username,
            'password': this.password,
            'email': this.email
          })
        this.$emit('submit')
      }
    }
  }
</script>
