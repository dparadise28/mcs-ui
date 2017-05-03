const _products = [
  {'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2},
  {'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10},
  {'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5}
]

const _stores = [
  {'id': 1, 'name': 'Mah bitchin store', 'address1': '6969 abc town', 'address2': 'New York, NY 66666'},
  {'id': 2, 'name': 'Mah bitchin store', 'address1': '6969 abc town', 'address2': 'New York, NY 66666'},
  {'id': 3, 'name': 'Mah bitchin store', 'address1': '6969 abc town', 'address2': 'New York, NY 66666'},
  {'id': 4, 'name': 'Mah bitchin store', 'address1': '6969 abc town', 'address2': 'New York, NY 66666'},
  {'id': 5, 'name': 'Mah bitchin store', 'address1': '6969 abc town', 'address2': 'New York, NY 66666'},
  {'id': 6, 'name': 'Mah bitchin store', 'address1': '6969 abc town', 'address2': 'New York, NY 66666'},
  {'id': 7, 'name': 'Mah bitchin store', 'address1': '6969 abc town', 'address2': 'New York, NY 66666'}
]
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
