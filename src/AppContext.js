import React from 'react';

const AppContext = React.createContext ({
  searchTerm: '',
  results: [],
  updateSearchTerm: () => {}
});

export default AppContext;