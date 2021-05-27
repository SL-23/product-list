import React from 'react';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';
import SaleIcon from './SaleIcon';

const ProductCard = (props) => {
  console.log(props.productName);
  return (
        <div>
          {
            props.isSale
              ? <SaleIcon/>
              : null
          }
          <ProductImg className='image' productImage='defaultImg.gif'/>
          <ProductInfo className='tags' productName={props.productName} price={props.price}/>
        </div>
  );
};

export default ProductCard;
