var vm = new Vue({
	el: '#productEntry',
	name: 'mfgActivity',
	data: {
		product: {
			new_variant_name: "",
			variants: [
			]
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
				options: [
				]
			});
			this.product.variants.new_variant_name = "";
		},
		addOption: function(v_index) {
      this.product.variants[v_index].options.push({
				option_name: this.product.variants[v_index].new_option_name
			});
			this.product.variants[v_index].new_option_name = "";
    }
	}
})
