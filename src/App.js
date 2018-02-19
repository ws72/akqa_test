import React from 'react'
import './style/style.scss'
import { ProductsSection, ProductsCard } from './components';
import * as productsData from './assets/products';

const App = () => {

  const renderProductsSection = () =>
    (
      <ProductsSection>
        {renderProductsCard()}
      </ProductsSection>
    );

  const renderProductsCard = () => {
    return productsData.default.map((data,index) => {
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
    <div>
      {renderProductsSection()}
    </div>
  );
}

export default App
