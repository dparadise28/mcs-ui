<template>
  <q-layout>
    <div slot="header" class="toolbar inverted tertiary bg-light">
      <button v-go-back="'/'" class="within-iframe-hide">
        <i>arrow_back</i>
      </button>

      <q-toolbar-title :padding="1" class="" >
        Sign Up
      </q-toolbar-title>
    </div>
    <div class="layout-view">
      <div class ="layout-padding">
        <q-stepper @finish="finish()" ref="stepper" v-show="!finished">
          <q-step title="Sign Up" class="text-tertiary">
            <!--:ready="!this.$v.form.$invalid"-->
            <step-one></step-one>
                <!--sm md bg lg sm-width-1of3-->
                <!--<div class="sm-width-5of5 md-width-5of5 bg-width-5of5 lg-width-5of5">-->
          </q-step>
          <q-step title="Enter Store Info" class="text-tertiary">
            <step-two></step-two>
          </q-step>
          <q-step title="Create Categories and Add Products" class="text-tertiary">
            <step-three></step-three>
          </q-step>
        </q-stepper>
      </div>
    </div>
  </q-layout>
</template>


<script>
  import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
  import StepOne from '../Admin/StepOne.vue'
  import StepTwo from '../Admin/StepTwo.vue'
  import StepThree from '../Admin/StepThree.vue'
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
      StepTwo,
      StepThree
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
  .timeline-badge {
    box-shadow: none;
  }
</style>
