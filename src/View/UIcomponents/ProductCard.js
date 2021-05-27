import React from 'react';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';
import SaleIcon from './SaleIcon';

const ProductCard = (props) => {
  return (
    <div className='card_item_wrapper'>
      {props.isSale ? <SaleIcon /> : null}
      <ProductImg productImage={props.productImage} />
      <ProductInfo productName={props.productName} price={props.price} />
    </div>
  );
};

export default ProductCard;
