import React from 'react';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';

class ProductCard extends React.Component {
  render() {
    return (
        <div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <ProductImg productImage='defaultImg.gif'/>
          <ProductInfo productName='name' price='$4.99'/>
        </div>
    );
  }
};

export default ProductCard;
