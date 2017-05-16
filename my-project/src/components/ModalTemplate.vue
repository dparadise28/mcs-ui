<template>
  <div class="modal-mask" @click="close" v-show="show" transition="modal">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <h3>{{TitleHeader}}</h3>
      </div>

      <div class="modal-body">
        <label class="form-label">
          Title
          <input v-model="title" class="form-control">
        </label>
        <label class="form-label">
          Body
          <textarea v-model="body" rows="5" class="form-control"></textarea>
        </label>
      </div>

      <div class="modal-footer text-right">
        <button class="modal-default-button" @click="savePost()">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
  export default {
    props: ['show', 'onClose'],
    methods: {
      close: function () {
        this.show = false;
        this.title = '';
        this.body = '';
      },
      ready: function () {
        document.addEventListener("keydown", (e) => {
          if (this.show && e.keyCode == 27) {
            this.close();
          }
        })
      }
    },
    data: function () {
      return {
        title: '',
        body: ''
      }
    }
  }


</script>

<style></style>
