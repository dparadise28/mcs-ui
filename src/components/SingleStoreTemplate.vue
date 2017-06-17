<template>
  <div class="card">
    <slot name="storeName">store name</slot>
        <div class="row">
          <slot name="storeAddress">put store address 1 and store address 2 here</slot>
          <q-rating :max="5"></q-rating>
        </div>

  </div>
</template>

<script>
export default{

}
</script>

<style>
  /*SingleStoreTemplate.vue css*/
  #logo a span {
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left: 0;
    /* edit: added z-index */
    z-index: 1;
  }

</style>
