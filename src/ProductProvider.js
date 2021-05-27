import React from 'react';
import ProductModel from './Model/ProductModel';
import ProductViewModel from './ViewModel/ProductViewModel';
import ProductController from './Controller/ProductController';

class ProductProvider extends React.Component {
  constructor(props) {
    super(props);
    // get data stored in Model
    const productModel = new ProductModel();
    // transform model information into values that can be displayed on a view
    this.productViewModel = new ProductViewModel(productModel.data);
  }

  render() {
    // pass the view model to controller which communicates with view
    return <ProductController viewModel={this.productViewModel} />;
  }
}

export default ProductProvider;
