metric_header = `
					<div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
						<span class="count_top"><i class="fa fa-money"></i> Total Revenue</span>
						<div class="count">$2,500</div>
						<span class="count_bottom"><i class="green">4% </i> From last Week</span>
					</div>
					<div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
						<span class="count_top"><i class="fa fa-tags"></i> Total Orders</span>
						<div class="count">367</div>
						<span class="count_bottom"><i class="red"><i class="fa fa-sort-desc"></i>12% </i> From last Week</span>
					</div>
					<div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
						<span class="count_top"><i class="glyphicon glyphicon-shopping-cart"></i> Average Cart Size</span>
						<div class="count green">20</div>
						<span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
					</div>
					<div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
						<span class="count_top"><i class="fa fa-users"></i> Total Customers</span>
						<div class="count">123</div>
						<span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>3% </i> From last Week</span>
					</div>
					<div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
						<span class="count_top"><i class="fa fa-user"></i> New Customers</span>
						<div class="count green">20</div>
						<span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
					</div>
					<div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
						<span class="count_top"><i class="fa fa-reply-all"></i> Returning Customers</span>
						<div class="count">123</div>
						<span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>3% </i> From last Week</span>
					</div>`

document.getElementById("metrics_header").innerHTML = metric_header + document.getElementById("metrics_header").innerHTML