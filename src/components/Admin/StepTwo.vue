<!--suppress ALL -->
<template>
  <div>
    <div class="list bg-inverted-light">
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">business</i>
        <div class="item-content">
           <label class ="text-primary">Enter Your Business Name</label>
            <input
              type="text"
              v-model ="name"
              required class="full-width"
              placeholder="Enter Business Name"
              @input="$v.StepTwoForm.businessname.$touch()"
              :value = "name"
            >
        </div>
        <i v-show="!$v.StepTwoForm.businessname.$invalid" class="item-secondary text-green">check</i>
      </div>
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">location_on</i>
        <div class="item-content">
           <label class ="text-primary">Enter Your Business Address</label>
            <vue-google-autocomplete
              id="map"
              classname="form-control"
              placeholder="Please type your address"
              v-on:placechanged="getAddressData"
              country="usa"
              @input="$v.StepTwoForm.address.$touch()"
            >
            </vue-google-autocomplete>
        </div>
        <i v-show="!$v.StepTwoForm.address.$invalid" class="item-secondary text-green">check</i>
      </div>
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">phone</i>
        <div class="item-content">
          <label class="text-primary">Enter Your Phone Number</label>
          <cleave :options='cleaveOptions' v-model.lazy='phoneNumber'
            placeholder="Enter Your Phone Number"
            class="full-width"
            @input="$v.StepTwoForm.phone.$touch()"
          ></cleave>
        </div>
        <i v-show="!$v.StepTwoForm.phone.$invalid" class="item-secondary text-green">check</i>
      </div>
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">image</i>
        <div class="item-content">
          <div v-if="!storeImage">
            <div class="dropzone-area"
                 drag-over="handleDragOver"
                 @dragenter="this.hovering=true"
                 @dragleave="this.hovering=false"
                 :class="{'hovered': this.hovering}">
              <div class="dropzone-text">
                <span class="dropzone-title">
                    Drop an image of your store here or click to select
                </span>
              </div>
              <input type="file" @change="onFileChange">
            </div>
          </div>
          <div class="dropzone-preview" v-if="storeImage">
            <img :src="storeImage">
            <button @click="removeImage" class="outline tertiary small">Remove</button>
          </div>
        </div>
      </div>
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">description</i>
        <div class="item-content">
           <label class="text-primary">Enter Store Description</label>
            <textarea v-model.lazy="description" required class="full-width" placeholder="Store Description"></textarea>
        </div>
      </div>
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">access_time</i>
        <div class="item-content row items-baseline">
          <div v-for="day_hours in StepTwoForm.working_hours" class="width-1of1">
            <span class="text-primary">{{ day_hours.day }}:</span> <br>
            <q-datetime-range class="full-width" type="time" v-model="day_hours.range" :min="min" :max="max"></q-datetime-range>
            <!--<q-datetime type="time" v-model="day_hours.range.from" :min="min" :max="max"></q-datetime>-->
          </div>
        </div>
      </div>
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">info</i>
        <div class="item-content">
          <span class="text-bold">Additional Information </span><br><br>
          <label class="item text-primary">
            <div class="item-content has-secondary">
             Pickup Offered?
            </div>
            <div class="item-secondary">
              <q-toggle v-model="StepTwoForm.pickup.service_offered"></q-toggle>
            </div>
          </label>
           <label class="item text-primary">
            <div class="item-content has-secondary">
             Delivery Offered?
            </div>
            <div class="item-secondary">
              <q-toggle v-model="StepTwoForm.delivery.service_offered"></q-toggle>
            </div>
          </label>
        </div>
      </div>
    </div><br>
    <div class="list bg-inverted-light" v-if="StepTwoForm.pickup.service_offered">
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">business</i>
        <div class="item-content">
          <label class ="text-secondary text-bold">Pick Up Details</label>
             <div class="item-content">
                <label class ="text-primary">Pick Up May Contain Up To: </label>
                <span class="label bg-secondary text-white">{{StepTwoForm.pickup.items}} items</span>
                <q-range v-model="StepTwoForm.pickup.items" :min="1" :max="50"></q-range>
            </div>
            <div class="item-content">
                <label class ="text-primary">Minimum Time for Pickup: </label>
                <span class="label bg-secondary text-white">{{StepTwoForm.pickup.minimum_time_to_pickup}} minutes</span>
                <q-range v-model="StepTwoForm.pickup.minimum_time_to_pickup" :min="0" :max="120"></q-range>
            </div>
        </div>
      </div>
    </div><br>
    <div class="list bg-inverted-light" v-if="StepTwoForm.delivery.service_offered">
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">business</i>
        <div class="item-content">
          <label class ="text-secondary text-bold">Delivery Details</label>
          <div class="item-content">
            <label class ="text-primary">Delivery May Contain Up To: </label>
            <span class="label bg-secondary text-white">{{StepTwoForm.delivery.items}} items</span>
            <q-range v-model="StepTwoForm.delivery.items" :min="1" :max="50"></q-range>
          </div>
          <div class="item-content">
            <label class ="text-primary">Minimum Time for Delivery: </label>
            <span class="label bg-secondary text-white">{{StepTwoForm.delivery.minimum_time_to_delivery}} minutes</span>
            <q-range v-model="StepTwoForm.delivery.minimum_time_to_delivery" :min="0" :max="120"></q-range>
          </div>
          <div class="item-content">
           <label class ="text-primary">Delivery Fee</label>
            <input
              type="number"
              v-model ="StepTwoForm.delivery.delivery_fee"
              required class="full-width"
              placeholder="Enter Delivery Fee"
            >
          </div>
          <div class="item-content">
           <label class ="text-primary">Delivery Minimum</label>
            <input
              type="number"
              prefix="$"
              v-model ="StepTwoForm.delivery.delivery_minimum"
              required class="full-width"
              placeholder="Enter Delivery Minimum"
            >
          </div>
          <div class="item-content">
           <label class ="text-primary">Delivery Distance Within: (Miles)</label>
            <input
              type="number"
              v-model ="StepTwoForm.delivery.delivery_distance"
              required class="full-width"
              placeholder="Enter Delivery Distance"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {required, minLength} from 'vuelidate/lib/validators'
  import Cleave from 'vue-cleave'
  import moment from 'moment'
  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        StepTwoForm: {
          businessname: '',
          description: '',
          working_hours: [
            {day: 'Sunday', range: {from: moment().hour(9).minute(0).format(), to: moment().hour(17).minute(0).format()}},
            {day: 'Monday', range: {from: moment().hour(9).minute(0).format(), to: moment().hour(17).minute(0).format()}},
            {day: 'Tuesday', range: {from: moment().hour(9).minute(0).format(), to: moment().hour(17).minute(0).format()}},
            {day: 'Wednesday', range: {from: moment().hour(9).minute(0).format(), to: moment().hour(17).minute(0).format()}},
            {day: 'Thursday', range: {from: moment().hour(9).minute(0).format(), to: moment().hour(17).minute(0).format()}},
            {day: 'Friday', range: {from: moment().hour(9).minute(0).format(), to: moment().hour(17).minute(0).format()}},
            {day: 'Saturday', range: {from: moment().hour(9).minute(0).format(), to: moment().hour(17).minute(0).format()}}],
          phone: '',
          address: '',
          pickup: {
            service_offered: false,
            items: 25,
            minimum_time_to_pickup: 90
          },
          delivery: {
            service_offered: false,
            items: 25,
            delivery_fee: '$0.00',
            delivery_minimum: '$10.00',
            delivery_distance: 2,
            minimum_time_to_delivery: 60
          }
        },
        hovering: false,
        pickUpChecked: false,
        deliveryChecked: false,
        min: moment().hour(0).minute(0).format(),
        max: moment().hour(24).minute(0).format(),
        cleaveOptions: {
          phone: true,
          phoneRegionCode: 'US'
        }
      }
    },
    validations: {
      StepTwoForm: {
        businessname: {required},
        address: {required},
        phone: {required, minLength: minLength(10)}
      }
    },
    components: {
      Cleave,
      VueGoogleAutocomplete
    },
    methods: {
      ...mapActions([
        'onFileChange',
        'removeImage',
        'setName'
      ]),
      ...mapMutations([
        'update_user'
      ]),
      /**
      * When the location found
      * @param {Object} addressData Data of the found location
      * @param {Object} placeResultData PlaceResult object
      */
      getAddressData: function (addressData, placeResultData) {
        this.address = addressData
      }
//      getItem: function (item) {
//        var state = this.$store.state.storeInfo.store
//        console.log('state is ', state[item])
//        return state[item]
//      }
    },
    computed: {
      ...mapGetters({
        storeImage: 'storeImage'
      }),
      name: {
        get () { return this.$store.state.storeInfo.store.name },
        set (value) {
          this.$store.commit('update_store', {name: value})
          this.StepTwoForm.businessname = value
        }
      },
      address: {
        get () { return this.$store.state.storeInfo.store.address },
        set (value) {
          this.$store.commit('update_store', {address: value})
          this.StepTwoForm.address = value
        }
      },
      description: {
        get () { return this.$store.state.storeInfo.store.description },
        set (value) { this.$store.commit('update_store', {description: value}) }
      },
      phoneNumber: {
        get () { return this.$store.state.storeInfo.store.phone },
        set (value) {
          this.$store.commit('update_store', {phone: value.trim()})
          this.StepTwoForm.phone = value
        }
      },
      pickUpItems: {
        get () { return this.$store.state.storeInfo.store.pickup.pickUpItems },
        set (value) { this.$store.commit('update_store', {pickUpItems: value}) }
      }
    }
  }
</script>

<style>
  .dropzone-area {
    width: 100% !important;
    height: 100px !important;
    position: relative;
    border: 2px dashed #CBCBCB;
  &.hovered {
     border: 2px dashed #2E94C4;
  .dropzone-title {
    color: #1975A0;
  }
  }
  }

  .dropzone-area input {
    position: absolute;
    cursor: pointer;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .dropzone-text {
    position: absolute;
    top: 50%;
    text-align: center;
    transform: translate(0, -50%);
    width: 100%;
  span {
    display: block;
    font-family: Arial, Helvetica;
    line-height: 1.9;
  }
  }

  .dropzone-title {
    font-size: 13px;
    color: #787878;
    letter-spacing: 0.4px;
  }
  .dropzone-info {
    font-size: 13px;
    font-size: 0.8125rem;
    color: #A8A8A8;
    letter-spacing: 0.4px;
  }

  .dropzone-button {
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
  }

  .dropzone-preview {
    width: 80% !important;
    position: relative;
  &:hover .dropzone-button {
     display: block;
   }
  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
  }

  div.timeline-content{
    margin-left: 0px;
  }


</style>
