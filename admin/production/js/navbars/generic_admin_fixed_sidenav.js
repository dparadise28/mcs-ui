fixed_sidenav = `
	<div class="col-md-3 left_col menu_fixed">
		<div class="left_col scroll-view">
			<br>
			<!--div class="navbar" style="border: 0;">
				<a href="index.html" class="site_title" style="background: rgb(10, 27, 14);">
					<img src="images/myCornerlogo.jpg" style="width: 40%; height: 70%;">
				</a>
			</div-->
			<div class="clearfix"></div>
			<!-- menu profile quick info -->
			<div class="profile clearfix">
				<div class="profile_pic">
					<img src="images/img.jpg" alt="..." class="img-circle profile_img">
				</div>
				<div class="profile_info">
					<span>Welcome,</span>
					<h2>John Doe</h2>
				</div>
			</div>
			<!-- /menu profile quick info -->
			<br /> <br />
			<!-- sidebar menu -->
			<div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
				<div class="menu_section">
					<h3>Store Name</h3>
					<ul class="nav side-menu">
						<li>
							<a>
								<i class="fa fa-home"></i> Home
								<span class="fa fa-chevron-down"></span>
							</a>
							<ul class="nav child_menu">
								<li>
									<a href="dashboards.html">Dashboards</a>
								</li>
							</ul>
						</li>
					</ul>
					<ul class="nav side-menu">
						<li>
							<a>
								<i class="fa fa-barcode"></i> Store
								<span class="fa fa-chevron-down"></span>
							</a>
							<ul class="nav child_menu">
								<li>
									<a href="store_info.html">Store Info</a>
								</li>
								<li>
									<a href="user_info.html">User Info</a>
								</li>
								<li>
									<a href="user_groups.html">User Groups</a>
								</li>
							</ul>
						</li>
					</ul>
					<ul class="nav side-menu">
						<li>
							<a>
								<i class="fa fa-list"></i> Products
								<span class="fa fa-chevron-down"></span>
							</a>
							<ul class="nav child_menu">
								<li>
									<a href="categories.html">Categories</a>
								</li>
								<li>
									<a href="create_product.html">Create</a>
								</li>
								<li>
									<a href="update_product.html">Update</a>
								</li>
							</ul>
						</li>
					</ul>
					<ul class="nav side-menu">
						<li>
							<a>
								<i class="fa fa-money"></i> Orders
								<span class="fa fa-chevron-down"></span>
							</a>
							<ul class="nav child_menu">
								<li>
									<a href="order_history.html">Order History</a>
								</li>
								<li>
									<a href="current_orders.html">Current Orders</a>
								</li>
							</ul>
						</li>
					</ul>
					<ul class="nav side-menu">
						<li>
							<a>
								<i class="fa fa-credit-card"></i> Payment
								<span class="fa fa-chevron-down"></span>
							</a>
							<ul class="nav child_menu">
								<li>
									<a href="payment.html">Payment Info</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<!-- /menu footer buttons -->
		</div>
	</div>
	<!-- top navigation -->
	<div class="top_nav">
		<div class="nav_menu">
			<nav>
				<div class="nav toggle">
					<a id="menu_toggle">
						<i class="fa fa-bars"></i>
					</a>
				</div>
				<ul class="nav navbar-nav navbar-right">
					<li class="">
						<a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
							<img src="images/img.jpg" alt="">John Doe
							<span class=" fa fa-angle-down"></span>
						</a>
						<ul class="dropdown-menu dropdown-usermenu pull-right">
							<li>
								<a href="javascript:;"> Profile</a>
							</li>
							<li>
								<a href="javascript:;">
									<span class="badge bg-red pull-right">50%</span>
									<span>Settings</span>
								</a>
							</li>
							<li>
								<a href="javascript:;">Help</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-sign-out pull-right"></i> Log Out
								</a>
							</li>
						</ul>
					</li>
					<li role="presentation" class="dropdown">
						<a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
							<i class="fa fa-envelope-o"></i>
							<span class="badge bg-green">6</span>
						</a>
						<ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
							<li>
								<a>
									<span class="image">
										<img src="images/img.jpg" alt="Profile Image" />
									</span>
									<span>
										<span>John Smith</span>
										<span class="time">3 mins ago</span>
									</span>
										<span class="message">
										Film festivals used to be do-or-die moments for movie makers. They were where...
									</span>
								</a>
							</li>
							<li>
								<a>
									<span class="image">
										<img src="images/img.jpg" alt="Profile Image" />
									</span>
									<span>
										<span>John Smith</span>
										<span class="time">3 mins ago</span>
									</span>
									<span class="message">
										Film festivals used to be do-or-die moments for movie makers. They were where...
									</span>
								</a>
							</li>
							<li>
								<a>
									<span class="image">
										<img src="images/img.jpg" alt="Profile Image" />
									</span>
									<span>
										<span>John Smith</span>
									<span class="time">3 mins ago</span>
									</span>
									<span class="message">
										Film festivals used to be do-or-die moments for movie makers. They were where...
									</span>
								</a>
							</li>
							<li>
								<a>
									<span class="image">
										<img src="images/img.jpg" alt="Profile Image" />
									</span>
									<span>
										<span>John Smith</span>
									<span class="time">3 mins ago</span>
									</span>
									<span class="message">
										Film festivals used to be do-or-die moments for movie makers. They were where...
									</span>
								</a>
							</li>
							<li>
								<div class="text-center">
									<a>
										<strong>See All Alerts</strong>
										<i class="fa fa-angle-right"></i>
									</a>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	</div>
	<!-- /top navigation -->`

document.getElementById("main_content_container").innerHTML = fixed_sidenav + document.getElementById("main_content_container").innerHTML
