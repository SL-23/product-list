class ProductModel {
  // this is a class holds application data
  // in the feature it can be sourced from a json file or a get request
  constructor() {
    this.data = [
      {
        index: 0,
        isSale: false,
        price: '$49.99',
        productImage: '0.gif',
        productName: 'Pure Blonde Crate',
        type: 'Beer'
      },
      {
        index: 1,
        isSale: true,
        price: '$14.99',
        productImage: '1.gif',
        productName: 'Victoria Bitter 4x6x375ml',
        type: 'Beer'
      },
      {
        index: 2,
        isSale: false,
        price: '$24.99',
        productImage: '2.gif',
        productName: 'Kirin Megumi 4x6x330ml',
        type: 'Beer'
      },
      {
        index: 3,
        isSale: true,
        price: '$4.99',
        productImage: '3.gif',
        productName: 'Panhead CH Johnny Octane Can',
        type: 'Beer'
      },
      {
        index: 4,
        isSale: false,
        price: '$25.99',
        productImage: '4.gif',
        productName: 'Aquila Spark SauvB Bottle',
        type: 'Wine'
      },
      {
        index: 5,
        isSale: true,
        price: '$29.99',
        productImage: '5.gif',
        productName: 'Bernadino Spumante Bottle',
        type: 'Wine'
      },
      {
        index: 6,
        isSale: true,
        price: '$69.99',
        productImage: '6.gif',
        productName: 'Grey Goose Orginal 10x12x50ml',
        type: 'Spirits'
      }
    ];
  }
}

export default ProductModel;
