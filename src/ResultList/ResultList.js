import React, { Component } from 'react'
import ResultItem from '../ResultItem/ResultItem';
import AppContext from '../AppContext';

class ResultList extends Component {
  static contextType = AppContext;
  
  render() {
    const resultItems = this.context.results.map( (result, index) => {
      return (
        <li key={index}>
          <ResultItem name={result.name} />
        </li>
      );
    });

    return (
      <main>
        <ul>
          {resultItems}
        </ul>
      </main>
    );
  }
}

export default ResultList;
