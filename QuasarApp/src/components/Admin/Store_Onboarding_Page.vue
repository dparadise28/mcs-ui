<template>
    <q-layout>
      <div slot="header" class="toolbar inverted primary">
        <button v-go-back="'/'" class="within-iframe-hide">
          <i>arrow_back</i>
        </button>

        <q-toolbar-title :padding="1" class="text-secondary" >
          Sign Up
        </q-toolbar-title>
      </div>

      <q-stepper @finish="finish()" ref="stepper" v-show="!finished">
        <q-step title="Sign Up" class="text-secondary">
          <!--:ready="!this.$v.form.$invalid"-->
          <step-one></step-one>
              <!--sm md bg lg sm-width-1of3-->
              <!--<div class="sm-width-5of5 md-width-5of5 bg-width-5of5 lg-width-5of5">-->
        </q-step>
        <q-step title="Enter Store Info" :ready="ready">
          <step-two></step-two>
        </q-step>
        <q-step title="Create an ad">
          Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.
        </q-step>
      </q-stepper>
  </q-layout>
</template>

<script>
  import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
  import StepOne from '../Admin/StepOne.vue'
  import StepTwo from '../Admin/StepTwo.vue'
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
    components: {
      StepOne,
      StepTwo
    },
    validations: {
      form: {
        username: {required, minLength: minLength(6)},
        password: {required, minLength: minLength(6)},
        repeatPassword: {required, minLength: minLength(6), sameAsPassword: sameAs('password')},
        email: {required, email}
      }
    },
    methods: {
      submit () {
        this.$v.form.$touch()
        if (this.$v.form.$error) {
        }
      },
      finish () {
        this.finished = true
      },
      reset () {
        this.$refs.stepper.reset()
        this.finished = false
      }
    }
  }
</script>
<style>
  .item > .item-primary ~ .item-content {
    margin-left: 48px;
  }
  .timeline{
    overflow: auto;
  }
</style>
