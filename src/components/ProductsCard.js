import React from 'react';
import Flag from './Flag';

const ProductsCard = ({
  // id,
  isSale,
  isExclusive,
  price,
  productImage,
  productName,
  size
}) =>
  (
    <div className="col col-md-3 col-sm-6">
      <div><img src={`img//${productImage}`} /></div>
      <div><Flag isSale={isSale} isExclusive={isExclusive} /></div>
      <div className="products-card__footer"><div className="products-card__text">{productName}</div><div className="products-card__price">{price}</div></div>
    </div>
  );


export default ProductsCard;
