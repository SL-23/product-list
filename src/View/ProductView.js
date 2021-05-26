import React from 'react';
import Header from './UIcomponents/Header';
import Footer from './UIcomponents/Footer';
import ProductCard from './UIcomponents/ProductCard';

const ProdcutView = (props) => {
  console.log(props);
  const renderCards = (productList) => (
    productList
      ? productList.map((product, i) => (
        <ProductCard key={i}/>
      ))
      : null
  );
  return (
      <div>
          <Header/>
          {
            renderCards(props.productList)
          }
          <Footer/>
      </div>
  );
};

export default ProdcutView;
