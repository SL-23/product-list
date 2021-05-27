import React from 'react';
import ProductView from '../View/ProductView';

const ProductController = (props) => {
  return <ProductView productList={props.viewModel.productList} />;
};

export default ProductController;
