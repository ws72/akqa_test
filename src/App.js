import React, { Component } from 'react'
import './style/style.scss'
import { ProductsSection, ProductsCard, Header } from './components';
import productsData from './assets/products';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: productsData,
    };
    this.filterProduct = this.filterProduct.bind(this);
  }

  renderProductsSection() {
    return (
      <div>
      <Header filterProduct={this.filterProduct} />
        <ProductsSection>
          {this.renderProductsCard()}
        </ProductsSection>
      </div>
    );
  }

  filterProduct(event) {
    const newProductData = productsData.filter(data => data.size.includes(event.target.value));
    console.log(newProductData);
    this.setState({ data: newProductData });
  }

  renderProductsCard() {
    // change this line
    return this.state.data.map((data, index) => {
      const {
        isSale,
        isExclusive,
        price,
        productImage,
        productName,
        size
        } = data;
      return (
        <ProductsCard
          key={index}
          isSale={isSale}
          isExclusive={isExclusive}
          price={price}
          productImage={productImage}
          productName={productName}
          size={size}
        />
      );
    });
  };

  render() {
    return (
      <div className='app'>
        {this.renderProductsSection()}
      </div>
    );
  }
}

export default App