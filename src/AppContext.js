import React from 'react';

const AppContext = React.createContext ({
  searchTerm: '',
  results: []
});

export default AppContext;