import React from 'react';
import ProductImg from './ProductImg';

class ProductInfo extends React.Component {
  render() {
    const { productName, price } = this.props;
    return (
        <div>
            <h4><span>{productName}</span></h4>
            <h4><span>{price}</span></h4>
        </div>
    );
  }
};

export default ProductInfo;
