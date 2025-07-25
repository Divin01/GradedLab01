import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p style={{ textAlign: 'center', margin: '20px' }}>No products found.</p>;
  }

  return (
    <div className="product-list" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '10px',
      padding: '20px'
    }}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;