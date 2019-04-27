import React, { Component } from 'react'
import AppContext from '../AppContext';

export default class SearchBar extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.context.updateSearchTerm(this.state.searchTerm);
  }
  
  render () {
    return (
      // <div className="search-bar">
      <form className="search-form" onSubmit={this.handleSearch}>
        <label htmlFor="search-input" />
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
        <button type="submit">
          Search
        </button>
      </form>
      // </div>
    );
  }
}
