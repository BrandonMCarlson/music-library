import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './SearchBar.css'


function SearchBar(props) {
    return (
      
        <nav class="searchbar">
        <a class="navbar-brand">dCC Music</a>
        <form class="form-inline">
          <input value={props.event}
            onChange={props.handleChange}  class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn" type="submit">Search</button>
        </form>
      </nav> 
    )
}

export default SearchBar;