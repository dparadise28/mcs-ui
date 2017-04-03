var vm = new Vue({
	el: '#productEntry',
	name: 'mfgActivity',
	data: {
		product: {
			variants: [
				{
					name: "color",
					id: 1,
					options: [
						{option_name: "black"},
						{option_name: "green"},
						{option_name: "blue "}
					]
				}, {
					name: "size",
					id: 2,
					options: [
						{option_name: "11   "},
						{option_name: "13   "},
						{option_name: "15   "}
					]
				}
			]
		}
	},
	methods: {
		removeOption: function(v_index, o_index) {
			// Remove job from GUI
			this.variants[v_index].options.splice(o_index, 1);
		}
	}
})
