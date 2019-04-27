import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ResultList from './ResultList/ResultList';
import AppContext from './AppContext';
// import dummyResponse from './dummy-response';

class App extends Component {
  state = {
    searchTerm: '',
    results: []
  };

  componentDidMount() {
    const BASE_URL = 'https://swapi.co/api';

    fetch(BASE_URL + '/people')
      .then(res => res.json())
      .then(data => {
        const results = data.results.map(result => {
          return { name: result.name };
        });

        this.setState({
          results
        });
      })
      .catch( err => console.log(err));
  }

  handleSearchApi() {

  }

  handleSearch() {
    
  }

  render() {
    const context = {
      results: this.state.results
    };

    return (
      <AppContext.Provider value={context}>
        <div className="App">
          <header>
            <h1>StarWars: Search the Force</h1>
            <SearchBar />
          </header>
          <ResultList />
        </div>
      </AppContext.Provider>
    );
  };
}

export default App;
