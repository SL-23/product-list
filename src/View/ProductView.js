import React from 'react';
import Header from './UIcomponents/Header';
import Footer from './UIcomponents/Footer';
import ProductCardBlock from './UIcomponents/ProductCardBlock';

class ProductView extends React.Component {
  state = {
    productList: []
  };

  componentDidMount() {
    this.setState({
      productList: this.props.productList
    });
  }

  handleFilter(e) {
    const filterType = e.target.value;
    let filteredList = [];
    // every time should gain the list from props, because list in state is already filtered
    const productList = this.props.productList;
    if (filterType === 'All') {
      filteredList = productList;
    } else {
      productList.map((product, i) => {
        if (product.type === filterType) filteredList.push(product);
        return filteredList;
      });
    }

    console.log(filteredList);

    this.setState({
      productList: filteredList
    });
  }

  render() {
    return (
        <div>
            <Header/>
            <div className='container'>
              <select
                style={{ marginTop: 100 }}
                onChange={e => this.handleFilter(e)}>
                <option value="All">All</option>
                <option value="Wine">Wine</option>
                <option value="Beer">Beer</option>
                <option value="Spirits">Spirits</option>
              </select>
              <ProductCardBlock productList={this.state.productList}/>
            </div>
            <Footer/>
        </div>
    );
  }
};

export default ProductView;
