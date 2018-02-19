import React from 'react'
import './style/style.scss'
import { ProductsSection, ProductsCard, Header } from './components';
import productsData from './assets/products';

const App = () => {

  let state = {
    data: productsData
  }

  // Pass this function to the filter components
  const filterProduct = (event) => {
    if(event.target.value==='') return
    const newProductData = state.data.filter(data => data.size.includes(event.target.value));
    this.setState({ data: newProductData });
  }

  const renderProductsSection = () =>
    (
      <ProductsSection>
        {renderProductsCard()}
      </ProductsSection>
    );

  const renderProductsCard = () => {
    return state.data.map((data, index) => {
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
      <Header filterProduct={filterProduct} />
      {renderProductsSection()}
    </div>
  );
}

export default App
