var myApp = angular.module('myApp', []);

myApp.filter('optionFilter', function() {
  return function(items, parent, self) {
    var result = [];
    if (parent) {
      for (var i = 0; i < items.length; i++) {
        if (parent.selectedOption !== null && items[i].parentValue === parent.selectedOption.value) {
          result.push(items[i]);
        }
      }
      if (self.selectedOption === null) {
        self.selectedOption = result[0];
      }
      if (self.selectedOption && self.selectedOption.hasOwnProperty('price')) {
        document.getElementById('price_display_container').innerHTML = self.selectedOption.price;
      }
      else {
        document.getElementById('price_display_container').innerHTML = "Not Availible"
      }
      return result;
    } else {
      return items;
    }
  }
});


myApp.controller("MyCtrl", function($scope) {

  this.update = function(item) {
    console.log(item);
    if (item.selectedOption === null) {
      item.selectedOption = item.availableOptions[0];
    }
  };

  this.data = {
    Color: {
      parent: "None",
      availableOptions: [
        {value: "Black",  parentValue: "None", id: 1},
        {value: "Silver", parentValue: "None", id: 2},
        {value: "Blue",   parentValue: "None", id: 3}
      ],
      selectedOption: {value: "Silver", parentValue: "None", id: 2}
    },
    Size: {
      parent: "Color",
      availableOptions: [
        {value: "13\"",   parentValue: "Black",  id: 1},
        {value: "14.5\"", parentValue: "Black",  id: 2},
        {value: "15\"",   parentValue: "Black",  id: 3},
        {value: "17\"",   parentValue: "Black",  id: 4},
        {value: "13\"",   parentValue: "Blue",   id: 5},
        {value: "14.5\"", parentValue: "Blue",   id: 6},
        {value: "15\"",   parentValue: "Blue",   id: 7},
        {value: "15.6\"", parentValue: "Blue",   id: 8},
        {value: "13\"",   parentValue: "Silver", id: 9},
        {value: "15\"",   parentValue: "Silver", id: 10},
        {value: "17\"",   parentValue: "Silver", id: 11}
      ],
      selectedOption: {value: "13\"", parentValue: "Silver", id: 9}
    },
    CPU: {
      parent: "Size",
      availableOptions: [
        {value: "1.5-GHz Intel Core i3-540",   parentValue: "13\"",   id: 1},
        {value: "1.7-GHz Intel Core i3-760",   parentValue: "13\"",   id: 2},
        {value: "2.5-GHz Intel Core i5-7200",  parentValue: "13\"",   id: 3},
        {value: "3.1-GHz Intel Core i5-7200U", parentValue: "13\"",   id: 4},
        {value: "1.7-GHz Intel Core i3-760",   parentValue: "14.5\"", id: 5},
        {value: "2.5-GHz Intel Core i5-7200",  parentValue: "14.5\"", id: 6},
        {value: "3.1-GHz Intel Core i5-7200U", parentValue: "14.5\"", id: 7},
        {value: "2.5-GHz Intel Core i5-7200",  parentValue: "15\"",   id: 8},
        {value: "3.1-GHz Intel Core i5-7200U", parentValue: "15\"",   id: 9},
        {value: "3.1-GHz Intel Core i7-7200U", parentValue: "15\"",   id: 10},
        {value: "3.1-GHz Intel Core i7-7200U", parentValue: "15.6\"", id: 11},
        {value: "2.5-GHz Intel Core i5-7200",  parentValue: "17\"",   id: 12},
        {value: "3.1-GHz Intel Core i5-7200U", parentValue: "17\"",   id: 13},
        {value: "3.1-GHz Intel Core i7-7200U", parentValue: "17\"",   id: 14},
        {value: "3.6-GHz Intel Core i7-7200U", parentValue: "17\"",   id: 14}
      ],
      selectedOption: {value: "2.5-GHz Intel Core i5-7200", parentValue: "13\"", id: 1}
    },
    RAM: {
      parent: "CPU",
      availableOptions: [
        {value: "2gb", parentValue: "1.5-GHz Intel Core i3-540",    id: 1},
        {value: "4gb", parentValue: "1.5-GHz Intel Core i3-540",    id: 2},
        {value: "4gb", parentValue: "1.7-GHz Intel Core i3-760",    id: 3},
        {value: "8gb", parentValue: "1.7-GHz Intel Core i3-760",    id: 4},
        {value: "4gb", parentValue: "2.5-GHz Intel Core i5-7200",   id: 5},
        {value: "8gb", parentValue: "2.5-GHz Intel Core i5-7200",   id: 6},
        {value: "16gb", parentValue: "2.5-GHz Intel Core i5-7200",  id: 7},
        {value: "4gb", parentValue: "3.1-GHz Intel Core i5-7200U",  id: 8},
        {value: "8gb", parentValue: "3.1-GHz Intel Core i5-7200U",  id: 9},
        {value: "16gb", parentValue: "3.1-GHz Intel Core i5-7200U", id: 10},
        {value: "32gb", parentValue: "3.1-GHz Intel Core i5-7200U", id: 11},
        {value: "4gb", parentValue: "3.1-GHz Intel Core i7-7200U",  id: 12},
        {value: "8gb", parentValue: "3.1-GHz Intel Core i7-7200U",  id: 13},
        {value: "16gb", parentValue: "3.1-GHz Intel Core i7-7200U", id: 14},
        {value: "32gb", parentValue: "3.1-GHz Intel Core i7-7200U", id: 15},
        {value: "64gb", parentValue: "3.6-GHz Intel Core i7-7200U", id: 16}
      ],
      selectedOption: {value: "4gb", parentValue: "2.5-GHz Intel Core i5-7200", id: 6}
    },
    HD: {
      parent: "RAM",
      availableOptions: [
        {value: "250gb HD",  parentValue: "4gb",  id: 1,  price: '$340'},
        {value: "500gb HD",  parentValue: "4gb",  id: 2,  price: '$400'},
        {value: "1TB HD",    parentValue: "4gb",  id: 3,  price: '$500'},
        {value: "500gb HD",  parentValue: "8gb",  id: 4,  price: '$400'},
        {value: "1TB HD",    parentValue: "8gb",  id: 5,  price: '$600'},
        {value: "256gb SSD", parentValue: "8gb",  id: 6,  price: '$600'},
        {value: "512gb SSD", parentValue: "8gb",  id: 7,  price: '$700'},
        {value: "1TB HD",    parentValue: "16gb", id: 8,  price: '$830'},
        {value: "256gb SSD", parentValue: "16gb", id: 9,  price: '$600'},
        {value: "512gb SSD", parentValue: "16gb", id: 10, price: '$900'},
        {value: "1TB SSD",   parentValue: "16gb", id: 11, price: '$1,200'},
        {value: "1TB HD",    parentValue: "32gb", id: 12, price: '$700'},
        {value: "256gb SSD", parentValue: "32gb", id: 13, price: '$700'},
        {value: "512gb SSD", parentValue: "32gb", id: 14, price: '$1,000'},
        {value: "1TB SSD",   parentValue: "32gb", id: 15, price: '$1,400'},
        {value: "1TB HD",    parentValue: "64gb", id: 16, price: '$900'},
        {value: "256gb SSD", parentValue: "64gb", id: 17, price: '$1,200'},
        {value: "512gb SSD", parentValue: "64gb", id: 18, price: '$1,600'},
        {value: "1TB SSD",   parentValue: "64gb", id: 19, price: '$2,200'},
        {value: "1.5TB SSD", parentValue: "64gb", id: 20, price: '$2,400'},
        {value: "2TB SSD",   parentValue: "64gb", id: 21, price: '$2,700'}
      ],
      selectedOption: {value: "1TB HD", parentValue: "4gb", id: 1, price: '$500'}
    }
  };
});


// TODO change parentValue to parentValues and update to include all parent
// variants for a given variant **by id and not by name**
// this speeds things up at run time and avoids data duplication
