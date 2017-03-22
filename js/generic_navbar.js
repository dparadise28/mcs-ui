document.body.innerHTML = `
	<header>

		<a href="#"><div id="logo"><img src="../img/myCornerlogo.jpg" alt="Homepage" height="50" width="50"></div></a>

		<div id="cd-hamburger-menu"><a class="cd-img-replace" href="#0">Menu</a></div>
		<div id="cd-cart-trigger"><a class="cd-img-replace" href="#0">Cart</a></div>
	</header>
	<!-- Navigation -->
	<nav id="main-nav">
		<!--<div class="container-fluid">-->
		<!--<div class="navbar-header">-->

		<ul>
			<li class="hidden"><a href="#page-top"></a></li>
			<li><a class="page-scroll" href="#portfolio">Trending</a></li>
			<li><a class="page-scroll" href="#team">Are You a Local Business</a></li>
			<li><a class="page-scroll" href="#about">About</a></li>
			<li><a class="page-scroll" href="#contact">Contact</a></li>
			<li><a data-toggle="modal" href="#myModal"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
		</ul>
		<button type="button" class="navbar-toggle login" data-toggle="collapse" data-target="#myNavbar">
			<span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
		</button>


		<!--</div>-->


		<!--</div>-->
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

		<p class="cd-go-to-cart"><a href="#0">Go to cart page</a></p>
	</div> <!-- cd-cart -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="../side-shopping-cart/js/main.js"></script>


	<!-----------Login Modal--------------------->
	<div class="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="lbOnoff">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header" style="padding:35px 50px;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4><span class="glyphicon glyphicon-lock"></span> Login</h4>
				</div>
				<div class="modal-body" style="padding:40px 50px;">
					<form role="form">
						<div class="form-group">
							<label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>
							<input type="text" class="form-control" id="usrname" placeholder="Enter email">
						</div>
						<div class="form-group">
							<label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
							<input type="text" class="form-control" id="psw" placeholder="Enter password">
						</div>
						<div class="checkbox">
							<label><input type="checkbox" value="" checked>Remember me</label>
						</div>
						<button type="submit" class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span> Login</button>
					</form>
				</div>
				<div class="modal-footer">
					<button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal">
					<span class="glyphicon glyphicon-remove"></span>Cancel</button>
					<p>Not a member? <a href="#">Sign Up</a></p>
					<p>Forgot <a href="#">Password?</a></p>
				</div>
			</div>
		</div>
	</div>`

$(window).resize(function () { 
    $('body').css('padding-top', parseInt($('#main-navbar').css("height"))+85);
});

$(window).load(function () { 
    $('body').css('padding-top', parseInt($('#main-navbar').css("height"))+85);        
});