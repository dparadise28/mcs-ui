var vm = new Vue({
    el: '#productEntry',
    name: 'mfgActivity',
    data: {
    	variants: [
      	{
        	name: "color",
          id: 1,
          options: [
          	{option_name: "black"},
            {option_name: "green"},
            {option_name: "blue"}
          ]
        }, {
        	name: "size",
          id: 2,
          options: [
          	{option_name: "11"},
            {option_name: "13"},
            {option_name: "15"}
          ]
        }
      ]
    },
    methods: {
  		removeOption: function(variantId, optionName, options, index) {
      	// Remove job from GUI
        jobs.splice(index, 1);
      }
    }
})
