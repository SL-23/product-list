class ProductModel {
  // this is a class holds application data
  // in the feature it can be sourced from a json file or a get request

  constructor() {
    const data = require('../Resources/data/ProductData.json');
    const products = [];
    for (let i = 0; i < data.product.length; ++i) products.push(data.product[i]);
    this.data = products;
  }
}

export default ProductModel;
