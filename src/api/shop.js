const _products = [
  {'id': 1, 'title': 'Cucumbers', 'price': 3.99, 'inventory': 2},
  {'id': 2, 'title': 'Spinach', 'price': 2.99, 'inventory': 10},
  {'id': 3, 'title': 'Carrots', 'price': 4.99, 'inventory': 5},
  {'id': 4, 'title': 'Potatoes', 'price': 2.99, 'inventory': 5},
  {'id': 5, 'title': 'Broccoli', 'price': 5.99, 'inventory': 5},
  {'id': 6, 'title': 'Tomatoes', 'price': 2.99, 'inventory': 5},
  {'id': 7, 'title': 'Cabbage', 'price': 3.95, 'inventory': 5},
  {'id': 8, 'title': 'Lettuce', 'price': 1.95, 'inventory': 5},
  {'id': 8, 'title': 'Asparagus', 'price': 5.99, 'inventory': 5},
  {'id': 8, 'title': 'Kale', 'price': 3.95, 'inventory': 5},
  {'id': 8, 'title': 'Brussels Sprouts', 'price': 4.95, 'inventory': 5}]
const _stores = [
  {'id': 1, 'name': 'Mah bitchin store #1', 'address1': '6969 abc town', 'address2': 'New York, NY 66666', 'categories': ['Vegetables', 'Dairy', 'Meat']},
  {'id': 2, 'name': 'Mah bitchin store #2', 'address1': '6969 abc town', 'address2': 'New York, NY 66666', 'categories': ['Vegetables', 'Dairy', 'Meat']},
  {'id': 3, 'name': 'Mah bitchin store #3', 'address1': '6969 abc town', 'address2': 'New York, NY 66666', 'categories': ['Vegetables', 'Dairy', 'Meat']},
  {'id': 4, 'name': 'Mah bitchin store #4', 'address1': '6969 abc town', 'address2': 'New York, NY 66666', 'categories': ['Vegetables', 'Dairy', 'Meat']},
  {'id': 5, 'name': 'Mah bitchin store #5', 'address1': '6969 abc town', 'address2': 'New York, NY 66666', 'categories': ['Vegetables', 'Dairy', 'Meat']},
  {'id': 6, 'name': 'Mah bitchin store #6', 'address1': '6969 abc town', 'address2': 'New York, NY 66666', 'categories': ['Vegetables', 'Dairy', 'Meat']},
  {'id': 7, 'name': 'Mah bitchin store #7', 'address1': '6969 abc town', 'address2': 'New York, NY 66666', 'categories': ['Vegetables', 'Dairy', 'Meat']}]
export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },
  getStores (cb) {
    setTimeout(() => cb(_stores), 100)
  }

//  buyProducts (products, cb, errorCb) {
//    setTimeout(() => {
//      // simulate random checkout failure.
//      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
//        ? cb()
//        : errorCb()
//    }, 100)
//  }
}
