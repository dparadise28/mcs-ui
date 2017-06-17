<template>
    <div class="layout-view">
      <div class="flex">
        <!--<img src="../assets/img/TheCornerShop.jpg" alt="" style="width: 125%">-->

        <div class="sm-width-1of1 md-width-1of1 bg-width-5of5 lg-width-3of5 lg-offset-1of5">
          <div id="cornerImage" class="window-height">
            <img src="../assets/fulllogo.png" style="max-height: 8%; max-width: 80%">


            <q-modal ref="logInSignUp" transition="fade" :content-css="{minWidth: '60vw', minHeight: '80vh'}">
              <div class="glass up window-height">
                <h4><i class="text-primary float-left" style="padding-left: 20px" @click="$refs.logInSignUp.close()">close</i></h4>
                <div class="layout-padding">
                  <br>
                  <q-tabs
                    class="justified"
                    :refs="$refs"
                    v-model="formTab"
                  >
                    <q-tab name="login">Log In</q-tab>
                    <q-tab name="signup">Sign Up</q-tab>
                  </q-tabs>
                  <!-- Targets -->
                  <div ref="signup"><sign-up class=""></sign-up></div>
                  <div ref="login"><login class=""></login></div>
                </div>
              </div>
            </q-modal>

            <div class="flex group" id="footer" style="padding: 20px">
              <button class=" primary grow-1" @click="formTab='login', $refs.logInSignUp.open()">Login</button>
              <button class="primary grow-1" @click="formTab='signup', $refs.logInSignUp.open()">Sign Up</button>
            </div>
          </div>
        </div>
        <div class="lg-width-1of5"></div>
      </div>
    </div>
</template>

<script>
  import Login from './Login.vue'
  import SignUp from './Signup.vue'
  import { mapActions, mapState } from 'vuex'
  export default {
    data () {
      return {
        formTab: 'login'
      }
    },
    components: {
      Login,
      SignUp
    },
    computed: mapState({
      // map this.count to store.state.count
      userAuth: 'authenticated'
    }),
    methods: {
      ...mapActions([
        'authBasedRoute'
      ]),
      toggle () {
        var button = document.querySelector('.toggle')
        var overlay = document.querySelector('.glass')
        if (overlay.className === 'glass down') {
          overlay.className = 'glass up'
          button.innerText = '-'
        }
        else {
          overlay.className = 'glass down'
          button.innerText = '+'
        }
      }
    },
    beforeMount () {
      this.authBasedRoute()
    }
  }
</script>

<style lang="scss">
  @import "compass/css3";
  
  #cornerImage {
    background-image: url("../assets/CornerShop.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  html, body, article, .glass::before {
    width: 100%;
    height: 100%;
    /*color= rgba(255,255,255,0.65);*/

    /*color = rgba(255,255,255,0.25)*/
    overflow: hidden;
  }

  .glass {
    position: relative;
  }

  .glass::before {
    z-index: -1;
    display: block;
    position: absolute;
    content: ' ';
  }
  .glass::before {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url('../assets/CornerShop.png');
    background-size: cover;
    content: ' ';
    opacity: 0.4;
  }


  /* transformations */
  .glass.down {
    transform: translateY(100%) translateY(-5em) translateZ(0);
  }

  .glass.down::before {
    transform: translateY(-100%) translateY(5em) translateZ(0);
  }

  .glass.up, .glass.up::before {
    transform: translateY(0) translateZ(0);
  }

  /* transitions */
  .glass, .glass::before {
    transition: transform 0.5s ease-out;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

  #footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
