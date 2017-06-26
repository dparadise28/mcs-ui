<template>
  <div class="group" style="padding: 30px">
    <h3>Sign Up</h3>
    <p>Signup to your account to get some great quotes.</p>

    <div class="floating-label">
      <input
        type="text"
        required class="full-width"
        v-model="email"
      >
      <label class="text-primary">Enter Your email</label>
    </div>
    <div class="floating-label">
      <input
        type="password"
        v-model="password"
        required class="full-width"
        @keyup.enter="submit"
      >
      <label class="text-primary">Enter Your Password</label>
    </div>

    <button class="tertiary" @click="submit">Sign Up</button>
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
            'password': this.password,
            'email': this.email,
            'username': 'test1'
          })
        this.$emit('submit')
      }
    }
  }
</script>
