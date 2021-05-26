import React from 'react';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';

const ProductCard = (props) => {
  console.log(props.productName);
  return (
        <div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <ProductImg productImage='defaultImg.gif'/>
          <ProductInfo productName={props.productName} price={props.price}/>
        </div>
  );
};

export default ProductCard;
