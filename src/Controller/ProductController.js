import React from 'react';
import ProductView from '../View/ProductView';

class ProductController extends React.Component {
  render() {
    return <ProductView productList={this.props.viewModel.productList}/>;
  }
};

export default ProductController;
