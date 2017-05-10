<template>
  <div class="fh5co-property-innter">
    <slot name="storeName">store name</slot>
    <br><br><br><br>
      <div class="price-status">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="star-ratings-css">
              <div class="star-ratings-css-top" style="width: 84%"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <p class="ratings-count">291 ratings</p>
            </div>
          </div>
          <div class="store-address col-md-6 col-sm-6 col-xs-6">
            <slot name="storeAddress">put store address 1 and store address 2 here</slot>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default{

}
</script>

<style>
  #logo a span {
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left: 0;
    /* edit: added z-index */
    z-index: 1;
  }
  .store-address {
    float: right;
  }
  .ratings-count {
    font-size: 12px;
  }
  .star-ratings-css {
    unicode-bidi: bidi-override;
    color: rgb(197, 197, 197);
    font-size: 25px;
    height: 25px;
    width: 100px;
    position: relative;
    padding: 0px;
    text-shadow: rgb(162, 162, 162) 0px 1px 0px;
  }
  .star-ratings-css-top {
    color: rgb(255, 227, 15);
    padding: 0px;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .star-ratings-css-bottom {
    padding: 0px;
    z-index: 0;
  }
  .store-row {
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
  }
  .fh5co-property .fh5co-property-specification {
    border-top: 1px solid rgb(240, 240, 240);
    background: rgb(247, 247, 247);
    padding: 15px 30px;
    font-size: 13px;
    margin-bottom: 0px;
  }
  .fh5co-property .fh5co-property-specification>span {
    margin-right: 5px;
  }
  .fh5co-property .fh5co-property-specification>span strong {
    color: green;
  }
  .fh5co-property .fh5co-property-innter>h2 strong {
    z-index: 2;
    color: #21ce99;
    font-weight: bold;
    font-size: 35px;
    font-family: Helvetica;

  }
  .fh5co-property .fh5co-property-innter {
    padding: 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    height: 270px;
    background-image: linear-gradient(
      rgba(47, 49, 49, 0.8),
      rgba(99, 136, 175, 0.6)
    ),url('../assets/img/hardware_store.jpg');
    z-index: 1;
    background-size: cover !important;
  }
  .fh5co-property .fh5co-property-innter p {
    color: #21c28e;
    font-size: 12px;
    font-weight: 700;
  }
  .fh5co-property .fh5co-property-innter p:last-child {
    margin-bottom: 0px;
  }
  .fh5co-property .fh5co-property-innter h3 {
    margin-bottom: 5px;
  }
  .fh5co-property .fh5co-property-innter h3 a:hover, .fh5co-property .fh5co-property-innter h3 a:active, .fh5co-property .fh5co-property-innter h3 a:focus {
    text-decoration: none;
  }
  .fh5co-property .price-status {
    margin-bottom: 5px;
    color: #21ce99;
  }
  .pagination a {
    background: none;
    border: none !important;
    color: gray !important;
  }
  .pagination a:hover, .pagination a:focus, .pagination a:active {
    background: none !important;
  }
  .pagination>li>a {
    margin: 0px 2px;
    font-size: 18px;
    background: none;
    height: 50px;
    width: 50px;
    line-height: 50px;
    display: table-cell;
    vertical-align: middle;
    padding: 0px !important;
    border-radius: 50% !important;
  }
  .pagination>li>a:hover {
    color: rgb(0, 0, 0);
    background: rgb(230, 230, 230) !important;
  }
  .pagination>li.disabled>a {
    background: none;
  }
  .pagination>li.active>a {
    box-shadow: rgba(0, 0, 0, 0.498039) 4px 11px 35px -14px;
    background: #1b9872 !important;
    color: rgb(255, 255, 255) !important;
  }
  .pagination>li.active>a:hover {
    cursor: pointer;
    background: rgb(65, 164, 243) !important;}
</style>
