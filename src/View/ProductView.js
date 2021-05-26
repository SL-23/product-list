import React from 'react';
import Header from './UIcomponents/Header';
import Footer from './UIcomponents/Footer';
import ProductCard from './UIcomponents/ProductCard';

class ProdcutView extends React.Component {
  render() {
    return (
            <div>
                <Header/>
                <ProductCard className="the_team_container"></ProductCard>
                <Footer/>
            </div>
    );
  }
}

export default ProdcutView;
