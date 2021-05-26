class ProductModel {
  // this is a class holds application data
  // in the feature it can be sourced from a json file or a get request
  constructor() {
    this.data = [
      {
        index: 0,
        isSale: false,
        price: '$49.99',
        productImage: 'Product_1.jpeg',
        productName: 'Pure Blonde Crate',
        type: 'Beer'
      },
      {
        index: 1,
        isSale: true,
        price: '$14.99',
        productImage: 'Product_2.jpeg',
        productName: 'Victoria Bitter 4x6x375ml',
        type: 'Beer'
      }
    ];
  }
}

export default ProductModel;
