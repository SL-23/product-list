import React from 'react';

class ProductImg extends React.Component {
  render() {
    console.log(this.props);
    return this.props.image
      ? <img
        src={require(`../../Resources/images/${this.props.image}`).default}
        alt="Item"/>
      : <img
        src={require('../../Resources/images/defaultImg.gif').default}
        alt="Item"/>;
  }
};

export default ProductImg;
