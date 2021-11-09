import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './SearchBar.css'


function SearchBar(props) {
    return (
      
      <nav class="searchbar">
      <div class="container-fluid">
        <form class="d-flex">
          <input value={props.ui}
            onChange={props.handleChange} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn" type="submit">Search</button>
        </form>
      </div>
    </nav>
    )
}

export default SearchBar;