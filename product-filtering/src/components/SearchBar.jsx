import React from 'react';

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  showInStockOnly,
  setShowInStockOnly,
  categories
}) => {
  return (
    <div className="search-bar" style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '5px',
      marginBottom: '20px'
    }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '8px',
            width: '100%',
            maxWidth: '400px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        >
          <option value="All">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={showInStockOnly}
            onChange={(e) => setShowInStockOnly(e.target.checked)}
          />
          Show only in-stock items
        </label>
      </div>
    </div>
  );
};

export default SearchBar;