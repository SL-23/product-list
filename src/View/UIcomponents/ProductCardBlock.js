import React from 'react';
import ProductCard from './ProductCard';

const ProductCardBlock = (props) => {
  const renderCards = (productList) => (productList ? productList.map((product, i) => <ProductCard key={i} {...product} />) : null);
  return (
    <div className="card_block">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'top'
        }}
      >
        {renderCards(props.productList)}
      </div>
    </div>
  );
};

export default ProductCardBlock;
