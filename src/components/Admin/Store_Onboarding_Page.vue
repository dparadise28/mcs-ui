<template>
  <q-layout>

    <div slot="header" class="toolbar tertiary text-white">
      <button v-go-back="'/'" class="within-iframe-hide">
        <i>arrow_back</i>
      </button>

      <q-toolbar-title :padding="1" class="" >
        Sign Up
      </q-toolbar-title>
    </div>
    <div class="layout-view">
      <div class ="layout-padding">
        <q-stepper @finish="createStore" ref="stepper" v-show="!finished">
          <!--<q-step title="Sign Up">-->
            <!--&lt;!&ndash;:ready="!this.$v.form.$invalid"&ndash;&gt;-->
            <!--<step-one></step-one>-->
                <!--&lt;!&ndash;sm md bg lg sm-width-1of3&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="sm-width-5of5 md-width-5of5 bg-width-5of5 lg-width-5of5">&ndash;&gt;-->
          <!--</q-step>-->
          <q-step title="Enter Store Info">
            <step-two></step-two>
          </q-step>
          <q-step title="Create Categories and Add Products">
            <step-three></step-three>
          </q-step>
          <q-step title="Enter Payment Information">
            <step-four></step-four>
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
  import StepFour from '../Admin/StepFour.vue'
  import { mapActions } from 'vuex'

  //  import StepFour from '../Admin/StripeTest.vue'
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
      StepThree,
      StepFour
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
      },
      ...mapActions([
        'createStore'
      ])
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
