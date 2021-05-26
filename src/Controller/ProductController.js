import React from 'react';
import ProdcutView from '../View/ProductView';

const ProductController = (props) => {
  console.log(props);
  return <ProdcutView productList={props.viewModel.productList}/>;
};

export default ProductController;
