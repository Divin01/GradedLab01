import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item" style={{
      border: '1px solid #ddd',
      padding: '10px',
      margin: '10px',
      borderRadius: '5px',
      backgroundColor: product.inStock ? '#f8fff8' : '#fff8f8'
    }}>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductItem;