import React, { useState, useEffect } from 'react';
import { products } from './data/products';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const categories = [...new Set(products.map(product => product.category))];
  
  useEffect(() => {
    const filtered = products.filter(product => {
      // Filter by search query
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by category
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      // Filter by stock status
      const matchesStock = !showInStockOnly || product.inStock;
      
      return matchesSearch && matchesCategory && matchesStock;
    });
    
    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, showInStockOnly]);

  return (
    <div className="app" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>ShopEasy Product Catalog</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showInStockOnly={showInStockOnly}
        setShowInStockOnly={setShowInStockOnly}
        categories={categories}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;