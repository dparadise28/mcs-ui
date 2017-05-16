function cartesianProduct(...arrays) {
	function _inner(...args) {
		if (arguments.length > 1) {
			let arr2 = args.pop(); // arr of arrs of elems
			let arr1 = args.pop(); // arr of elems
			return _inner(...args,
				arr1.map(e1 => arr2.map(e2 => [e1, ...e2]))
				    .reduce((arr, e) => arr.concat(e), [])
			);
		} else {
			return args[0];
		}
	};
	return _inner(...arrays, [[]]);
};

var vm = new Vue({
	el: '#productEntry',
	name: 'mfgActivity',
	data: {
		product: {
			variant_product: [],
			new_variant_name: "",
			variants: []
		}
	},
	methods: {
		removeVariant: function(v_index) {
			// Remove job from GUI
			this.product.variants.splice(v_index, 1);
		},
		removeOption: function(v_index, o_index) {
			// Remove job from GUI
			this.product.variants[v_index].options.splice(o_index, 1);
		},
		addVariant: function() {
			this.product.variants.push({
				name: this.product.new_variant_name,
				id: this.product.variants.length+1,
				new_option_name: "",
				options: []
			});
			this.product.new_variant_name = "";
		},
		addOption: function(v_index) {
      this.product.variants[v_index].options.push({
				option_name: this.product.variants[v_index].new_option_name
			});
			this.product.variants[v_index].new_option_name = "";
    }
	},
	computed: {
		c_prod: function() {
			var option_matrix = []; option_set = [];
			//iterate through object keys
			this.product.variants.forEach(function(variant) {
				variant.options.forEach(function(option){
					option_set.push(option.option_name)
				});
				option_matrix.push(option_set);
				option_set = [];
			});
			this.product.variant_product = cartesianProduct(...option_matrix);
			console.log(JSON.stringify(option_matrix));
			return this.product
		}
	}
})
