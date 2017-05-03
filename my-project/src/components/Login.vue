<template>
  <transition name="loginModal">
    <div class="login_modal" style="display: block">
      <form class="login_modal_content login_modal_animate">
        <div class="login_modal_imgcontainer">
          <span onclick="document.getElementById('login').style.display='none'" class="login_modal_close" title="Close Modal">&times;</span>
          <h3 style="color: darkgreen;"><span class="glyphicon glyphicon-lock"></span> Login</h3>
        </div>

        <div class="login_modal_container">
          <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>
          <input type="text" class="form-control" id="usrname" placeholder="Enter Username" name="uname" required>

          <label form="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
          <input type="password" class="form-control" id="psw" placeholder="Enter password" name="psw" required>


          <div class="checkbox">
            <label><input type="checkbox" value="" checked>Remember me</label>
          </div>
          <button type="submit" class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span> Login</button>

        </div>

        <div class="modal-footer">
          <button type="login_modal_button" class="btn btn-danger btn-default pull-left" data-dismiss="modal" @click="savePost()" class="login_modal_cancelbtn">
            <span class="glyphicon glyphicon-remove" @click="savePost()" class="login_modal_cancelbtn"></span>Cancel</button>
          <p>Not a member? <a href="#">Sign Up</a></p>
          <p>Forgot <a href="#">Password?</a></p>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
  // Get the modal
  data: {
      showModal: false
  }

//  var login_modal = document.getElementById('login');
//
//  // When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//    if (event.target == login_modal) {
//      login_modal.style.display = "none";
//    }


</script>

<style>
  /*!* Full-width input fields *!*/
  /*input[type=text], input[type=password] {*/
    /*width: 100%;*/
    /*padding: 12px 20px;*/
    /*margin: 8px 0;*/
    /*display: inline-block;*/
    /*border: 1px solid #ccc;*/
    /*box-sizing: border-box;*/
  /*}*/

  /*!* Set a style for all buttons *!*/
  /*.login_modal_button {*/
    /*background-color: #4CAF50;*/
    /*color: white;*/
    /*padding: 14px 20px;*/
    /*margin: 8px 0;*/
    /*border: none;*/
    /*cursor: pointer;*/
    /*width: 100%;*/
  /*}*/

  /*.login_modal_button:hover {*/
    /*opacity: 0.8;*/
  /*}*/

  /*!* Extra styles for the cancel button *!*/
  /*.login_modal_cancelbtn {*/
    /*width: auto;*/
    /*padding: 10px 18px;*/
    /*background-color: #f44336;*/
  /*}*/

  /*!* Center the image and position the close button *!*/
  /*.login_modal_imgcontainer {*/
    /*text-align: center;*/
    /*margin: 24px 0 12px 0;*/
    /*position: relative;*/
  /*}*/

  /*img.login_modal_avatar {*/
    /*width: 40%;*/
    /*border-radius: 50%;*/
  /*}*/

  /*.login_modal_container {*/
    /*padding: 16px;*/
  /*}*/

  /*span.login_modal_psw {*/
    /*float: right;*/
    /*padding-top: 16px;*/
  /*}*/

  /*!* The Modal (background) *!*/
  /*.login_modal {*/
    /*display: none; !* Hidden by default *!*/
    /*position: fixed; !* Stay in place *!*/
    /*z-index: 9999; !* Sit on top *!*/
    /*left: 0;*/
    /*top: 0;*/
    /*width: 100%; !* Full width *!*/
    /*height: 100%; !* Full height *!*/
    /*overflow: auto; !* Enable scroll if needed *!*/
    /*background-color: rgb(33, 194, 142); !* Fallback color *!*/
    /*background-color: rgba(0, 55, 0, 0.2); !* Black w/ opacity *!*/
    /*padding-top: 60px;*/
  /*}*/

  /*!* Modal Content/Box *!*/
  /*.login_modal_content {*/
    /*background-color: #fefefe;*/
    /*margin: 5% auto 15% auto; !* 5% from the top, 15% from the bottom and centered *!*/
    /*border: 1px solid white;*/
    /*width: 80%; !* Could be more or less, depending on screen size *!*/
    /*max-width: 500px;*/
  /*}*/

  /*!* The Close Button (x) *!*/
  /*.login_modal_close {*/
    /*position: absolute;*/
    /*right: 25px;*/
    /*top: 0;*/
    /*color: #000;*/
    /*font-size: 35px;*/
    /*font-weight: bold;*/
  /*}*/

  /*.login_modal_close:hover,*/
  /*.login_modal_close:focus {*/
    /*color: #21c28e;*/
    /*cursor: pointer;*/
  /*}*/

  /*!* Add Zoom Animation *!*/
  /*.login_modal_animate {*/
    /*-webkit-animation: animatezoom 0.6s;*/
    /*animation: animatezoom 0.6s*/
  /*}*/

  /*@-webkit-keyframes animatezoom {*/
    /*from {-webkit-transform: scale(0)}*/
    /*to {-webkit-transform: scale(1)}*/
  /*}*/

  /*@keyframes animatezoom {*/
    /*from {transform: scale(0)}*/
    /*to {transform: scale(1)}*/
  /*}*/

  /*!* Change styles for span and cancel button on extra small screens *!*/
  /*@media screen and (max-width: 300px) {*/
    /*span.login_modal_psw {*/
      /*display: block;*/
      /*float: none;*/
    /*}*/
    /*.login_modal_cancelbtn {*/
      /*width: 100%;*/
    /*}*/
  /*}*/

</style>
