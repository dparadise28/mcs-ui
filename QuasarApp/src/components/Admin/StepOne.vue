<template>
  <div>
    <div class="list bg-inverted-light">
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">perm_identity</i>
        <div class="item-content">
          <div class="floating-label">
            <input
              type="text"
              v-model="form.username"
              @input="$v.form.username.$touch()"
              required class="full-width"
            >
            <label>Enter Your Username</label>
          </div>
        </div>
        <i v-show="!$v.form.username.$invalid" class="item-secondary text-green">check</i>
      </div>
      <div class="item multiple-lines">
        <i class="item-primary text-secondary">email</i>
        <div class="item-content">
          <div class="floating-label">
            <input
              type="text"
              v-model="form.email"
              @input="$v.form.email.$touch()"
              required class="full-width"
            >
            <label>Enter Your email</label>
          </div>
        </div>
        <i v-show="!$v.form.email.$invalid" class="item-secondary text-green">check</i>
      </div>
      <div class="item multiple-lines">
        <i class="item-primary text-secondary">lock</i>
        <div class="item-content">
          <div class="floating-label">
            <input
              type="password"
              v-model="form.password"
              @input="$v.form.password.$touch()"
              required class="full-width"
            >
            <label>Enter Your Password</label>
          </div>
        </div>
        <i v-show="!$v.form.password.$invalid" class="item-secondary text-green">check</i>
      </div>
      <div class="item multiple-lines">
        <i class="item-primary text-secondary">lock</i>
        <div class="item-content">
          <div class="floating-label">
            <input
              type="password"
              v-model="form.repeatPassword"
              @input="$v.form.repeatPassword.$touch()"
              required class="full-width"
            >
            <label>Repeat Your Password</label>
          </div>
        </div>
        <i class="item-secondary text-green" v-show="!$v.form.repeatPassword.$invalid">check</i>
      </div>
    </div>
  </div>
</template>


<script>
  import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
        ready: false,
        finished: false,
        form: {
          username: '',
          email: '',
          password: '',
          repeatPassword: ''
        }
      }
    },
    validations: {
      form: {
        username: {required, minLength: minLength(6)},
        password: {required, minLength: minLength(6)},
        repeatPassword: {required, minLength: minLength(6), sameAsPassword: sameAs('password')},
        email: {required, email}
      }
    }
  }
</script>

<style>

</style>
