import React from 'react'
import './style/style.scss'
import { ProductsSection, ProductsCard, Header } from './components';
import productsData from './assets/products';

const App = () => {

  this.state = {
    data: productsData
  }

  // Pass this function to the filter components
  const filterProduct = (size) => {
    const newProductData = this.state.data.filter(data => data.size.include(size));
    this.setState({ data: newProductData });
  }

  const renderProductsSection = () =>
    (
      <ProductsSection>
        {renderProductsCard()}
      </ProductsSection>
    );

  const renderProductsCard = () => {
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

  return (
    <div className="app">
      <Header filterProduct={this.filterProduct}/>
      {renderProductsSection()}
    </div>
  );
}

export default App
