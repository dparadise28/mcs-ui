<template>
  <div id="login" class="login_modal">
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
        <button type="login_modal_cancelbtn" class="btn btn-danger btn-default pull-left" data-dismiss="modal" onclick="document.getElementById('login').style.display='none'">
          <span onclick="document.getElementById('login').style.display='none'" ></span>Cancel</button>
        <p>Not a member? <a href="#">Sign Up</a></p>
        <p>Forgot <a href="#">Password?</a></p>
      </div>
    </form>
  </div>
</template>

<script src="./login_modal.js"></script>
<style src="./login_modal.css"></style>
