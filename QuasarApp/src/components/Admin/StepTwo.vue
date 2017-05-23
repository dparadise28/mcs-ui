<!--suppress ALL -->
<template>
  <div>
    <div class="list bg-inverted-light">
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">business</i>
        <div class="item-content">
          <div class="floating-label">
            <input
              type="text"
              v-model="StepTwoForm.businessname"
              @input="$v.StepTwoForm.businessname.$touch()"
              required class="full-width"
            >
            <label>Enter Your Business Name</label>
          </div>
        </div>
        <i v-show="!$v.StepTwoForm.businessname.$invalid" class="item-secondary text-green">check</i>
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
            <button @click="removeImage">Remove</button>
          </div>
        </div>
      </div>
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">description</i>
        <div class="item-content">
          <div class="floating-label">
            <textarea v-model.lazy="StepTwoForm.description" required class="full-width"></textarea>
            <label>Enter Store Description</label>
          </div>
        </div>
      </div>
      <div class="item multiple-lines" >
        <i class="item-primary text-secondary">description</i>
        <div class="item-content row items-baseline">
          <div v-for="day_hours in StepTwoForm.working_hours" class="width-1of1">
            {{ day_hours.day }}: <br>
            <q-datetime-range type="time" v-model="day_hours.range" :min="min" :max="max"></q-datetime-range>
            <!--<q-datetime type="time" v-model="day_hours.range.from" :min="min" :max="max"></q-datetime>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {required} from 'vuelidate/lib/validators'
  import moment from 'moment'
  import { mapActions, mapGetters } from 'vuex'
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
            {day: 'Saturday', range: {from: moment().hour(9).minute(0).format(), to: moment().hour(17).minute(0).format()}}]
        },
        hovering: false,
        min: moment().hour(0).minute(0).format(),
        max: moment().hour(24).minute(0).format()
      }
    },
    validations: {
      StepTwoForm: {
        businessname: {required}
      }
    },
    methods: {
      ...mapActions([
        'onFileChange',
        'removeImage'
      ])
    },
    computed: {
      ...mapGetters({
        storeImage: 'storeImage'
      })
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


</style>
