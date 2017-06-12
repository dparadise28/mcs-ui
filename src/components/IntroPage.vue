<template>
  <div class="loginbackground" style="padding: 40px">
    <q-tabs
      class="justified text-bold"
      :refs="$refs"
      v-model="formTab"
    >
      <q-tab name="login">
        Log In
      </q-tab>
      <q-tab name="signup">
        Sign Up
      </q-tab>
    </q-tabs>
    <!-- Targets -->
    <div ref="signup"><sign-up class="text-light"></sign-up></div>
    <div ref="login"><login class="text-light" v-on:submitLogIn="$refs.logInSignUp.close()"></login></div>

  </div>
</template>

<script>
  import Login from './Login.vue'
  import SignUp from './Signup.vue'
  import { mapActions, mapState } from 'vuex'
  export default {
    data () {
      return {
        formTab: 'login'
      }
    },
    components: {
      Login,
      SignUp
    },
    computed: mapState({
      // map this.count to store.state.count
      userAuth: 'authenticated'
    }),
    methods: {
      ...mapActions([
        'authBasedRoute'
      ])
    },
    beforeMount () {
      this.authBasedRoute()
    }
  }
</script>

<style >
  body {
    background-color: #2ab982;
  }
  .loginbackground {

  }
</style>
