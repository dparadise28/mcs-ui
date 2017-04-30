
<template>
  <div id ="main-nav">
    <nav>
      <ul>
        <li class="hidden"><a href="#page-top"></a></li>
        <li><router-link to="/">Home</router-link></li>
        <li><a class="page-scroll" href="#portfolio">Trending</a></li>
        <li><a class="page-scroll" href="#team">Are You a Local Business</a></li>
        <li><a class="page-scroll" href="#about">About</a></li>
        <li><a class="page-scroll" href="#contact">Contact</a></li>
        <li>
          <div id="wrapper" class="container">
            <modal v-if="showModal"></modal>

            <button class="glyphicon glyphicon-log-in" @click="openModal()">Login</button>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import Modal from "@/components/LogInModal/LogIn";
  export default{
    components: {
      Modal
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

<style>
</style>
