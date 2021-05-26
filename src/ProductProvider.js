import React from 'react';
import ProductModel from './Model/ProductModel';
import ProductViewModel from './ViewModel/ProductViewModel';
import ProductController from './Controller/ProductController';

class ProductProvider extends React.Component {
  constructor(props) {
    super(props);
    // get data stored in Model
    const productModel = new ProductModel();
    this.productViewModel = new ProductViewModel(productModel.data);
    console.log(productModel.data);
  }

  render() {
    return (
            <ProductController viewModel={this.productViewModel}/>
    );
  }
}

export default ProductProvider;
