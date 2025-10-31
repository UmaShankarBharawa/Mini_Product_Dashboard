import "./SearchBar.css"

function SearchBar({ handleSearch, handleFilter, handleSort, category }) {
  console.log(category)
  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="filter-sort-container">
        <select
          className="filter-select"
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="All">All Products</option>
          {category.map((cat, i) => (
            <option key={i} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        <select
          className="sort-select"
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  )
}

export default SearchBar