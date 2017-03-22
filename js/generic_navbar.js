document.body.innerHTML += `
	<header>
		<a href="#"><div id="logo"><img src="../img/myCornerlogo.jpg" alt="Homepage" height="50" width="50"></div></a>
		<div id="cd-hamburger-menu"><a class="cd-img-replace" href="#0">Menu</a></div>
		<div id="cd-cart-trigger"><a class="cd-img-replace" href="#0">Cart</a></div>
	</header>

	<!-- Navigation -->
	<nav id="main-nav">
		<ul>
			<li class="hidden"><a href="#page-top"></a></li>
			<li><a class="page-scroll" href="../index.html">Home</a></li>
			<li><a class="page-scroll" href="#portfolio">Trending</a></li>
			<li><a class="page-scroll" href="#team">Are You a Local Business</a></li>
			<li><a class="page-scroll" href="#about">About</a></li>
			<li><a class="page-scroll" href="#contact">Contact</a></li>
			<li>
				<a onclick="document.getElementById('id01').style.display='block'" style="width:auto;">
					<span class="glyphicon glyphicon-log-in"></span>&nbsp &nbsp Login
				</a>
			</li>
		</ul>
		<button type="button" class="navbar-toggle login" data-toggle="collapse" data-target="#myNavbar">
			<span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
		</button>
	</nav>

	<div id="cd-shadow-layer"></div>
	<div id="cd-cart">
		<h2>Cart</h2>
		<ul class="cd-cart-items">
			<li>
				<span class="cd-qty">1x</span> Product Name
				<div class="cd-price">$9.99</div>
				<a href="#0" class="cd-item-remove cd-img-replace">Remove</a>
			</li>

			<li>
				<span class="cd-qty">2x</span> Product Name
				<div class="cd-price">$19.98</div>
				<a href="#0" class="cd-item-remove cd-img-replace">Remove</a>
			</li>

			<li>
				<span class="cd-qty">1x</span> Product Name
				<div class="cd-price">$9.99</div>
				<a href="#0" class="cd-item-remove cd-img-replace">Remove</a>
			</li>
		</ul> <!-- cd-cart-items -->

		<div class="cd-cart-total">
			<p>Total <span>$39.96</span></p>
		</div> <!-- cd-cart-total -->

		<a href="#0" class="checkout-btn">Checkout</a>

		<p class="cd-go-to-cart"><a href="cart.html">Go to cart page</a></p>
	</div>
	<script src="../side-shopping-cart/js/main.js"></script>


	<div id="id01" class="login_modal">
	  <form class="login_modal_content login_modal_animate" action="cart.html">
	    <div class="login_modal_imgcontainer">
	      <span onclick="document.getElementById('id01').style.display='none'" class="login_modal_close" title="Close Modal">&times;</span>
	      <h3 style="color: darkgreen;"><span class="glyphicon glyphicon-lock"></span> Login<h3>
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
				<button type="login_modal_button" class="btn btn-danger btn-default pull-left" data-dismiss="modal" onclick="document.getElementById('id01').style.display='none'" class="login_modal_cancelbtn">
				<span class="glyphicon glyphicon-remove" onclick="document.getElementById('id01').style.display='none'" class="login_modal_cancelbtn"></span>Cancel</button>
				<p>Not a member? <a href="#">Sign Up</a></p>
				<p>Forgot <a href="#">Password?</a></p>
			</div>
	  </form>
	</div>`

$(window).on('resize', function () {
    $('body').css('padding-top', '13vh');
});

$(window).on('load', function () {
    $('body').css('padding-top', '13vh');
});
