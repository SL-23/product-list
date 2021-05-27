import React from 'react';
import ProductCard from './ProductCard';

const ProductCardBlock = (props) => {
  console.log(props);
  const renderCards = (productList) => (productList ? productList.map((product, i) => <ProductCard className="card_item_wrapper" key={i} {...product} />) : null);
  return (
    <div className="card_block">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {renderCards(props.productList)}
      </div>
    </div>
  );
};

export default ProductCardBlock;
