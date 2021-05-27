import React from 'react';
import ProductImg from './ProductImg';

const ProductInfo = (props) => {
  const { productName, price } = props;
  return (
    <div className="tags">
      <h4 className="name">
        <span>{productName}</span>
      </h4>
      <h4 className="price">
        <span>{price}</span>
      </h4>
    </div>
  );
};

export default ProductInfo;
