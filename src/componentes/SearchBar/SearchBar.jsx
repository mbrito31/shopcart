import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fetchProdutos from '../../api/fetchProdutos';
import AppContext from '../../context/AppContext';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const {setProdutos, setLoading} = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    const products = await fetchProdutos(searchValue);
    setProdutos(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search-input"
        onChange={ ({target}) => setSearchValue(target.value)}
        required
      />
      
      <button type="submit" className="search-button">
        <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
