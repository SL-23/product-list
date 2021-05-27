import React from 'react';
import Header from './UIcomponents/Header';
import Footer from './UIcomponents/Footer';
import ProductCardBlock from './UIcomponents/ProductCardBlock';
import { TextField } from '@material-ui/core';

class ProductView extends React.Component {
  state = {
    productList: [],
    filteredResList: [],
    searchResList: []
  };

  componentDidMount() {
    this.setState({
      productList: this.props.productList,
      filteredResList: this.props.productList,
      searchResList: this.props.productList
    });
  }

  handleFilter = (e) => {
    const filterType = e.target.value;
    let filteredList = [];
    // in case search is applied: the result list of this function should meet both search and filter condition
    const productList = this.state.searchResList;
    if (filterType === 'All') {
      filteredList = productList;
    } else {
      productList.map((product, i) => {
        if (product.type === filterType) filteredList.push(product);
        return filteredList;
      });
    }

    this.setState({
      productList: filteredList,
      filteredResList: filteredList
    });
  };

  handleSearch = (e) => {
    const keyword = e.target.value;
    const resultList = [];
    const productList = this.state.filteredResList;
    // use toLowerCase to enable capital insensitive search
    productList.map((product, i) => {
      const name = product.productName.toLowerCase();
      if (name.includes(keyword.toLowerCase())) resultList.push(product);
      return resultList;
    });

    this.setState({
      productList: resultList,
      searchResList: resultList
    });
  };

  render() {
    return (
      <div data-testid="product_view">
        <Header />
        <div className="container">
          <select
            className="container"
            style={{
              marginTop: 100,
              padding: '5px 0px 5px 0px'
            }}
            onChange={(e) => this.handleFilter(e)}
          >
            <option value="All">All</option>
            <option value="Wine">Wine</option>
            <option value="Beer">Beer</option>
            <option value="Spirits">Spirits</option>
            <option value="Cider">Cider</option>
          </select>
          <br></br>
          <br></br>
          <TextField className="container" placeholder="Search for something" name="keywords" variant="outlined" onChange={(e) => this.handleSearch(e)} />
          <ProductCardBlock productList={this.state.productList} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductView;
