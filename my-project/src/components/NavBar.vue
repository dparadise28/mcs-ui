<template>
  <div id ="main-nav">
    <nav>
      <ul>
        <li class="hidden"><a href="#page-top"></a></li>
        <li><router-link to="/">Home</router-link></li>
        <li><a class="page-scroll" href="#team">Are You a Local Business</a></li>
        <li><a class="page-scroll" href="#about">About</a></li>
        <li><a class="page-scroll" href="#contact">Contact</a></li>
        <!--<li>-->
          <!--&lt;!&ndash;<div id="wrapper" class="container">&ndash;&gt;-->
            <!--&lt;!&ndash;<modal v-if="showModal"></modal>&ndash;&gt;-->

            <!--&lt;!&ndash;<button class="glyphicon glyphicon-log-in" @click="openModal()">Login</button>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</li>-->
      </ul>
    </nav>
  </div>
</template>

<script>
//  import Modal from "@/components/logInModal/LogIn";
  export default{
    components: {
//      Modal
    },
    data(){
        return{
            showModal: false
        }
    },
    methods: {
        openModal(){
            this.showModal = true;
        }
    }
  }
</script>

<style src="./side-shopping-cart/css/reset.css"></style>
