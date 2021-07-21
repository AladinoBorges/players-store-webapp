import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [globalState, setGlobalState] = useState({
    userName: '',
    listOfGames: {},
    filteredStatus: false,
    filteredListOfGames: {},
    filterBy: '',
    favoriteGames : {},
    gamesOnLocalStorage: false,
  });

  const context = { globalState, setGlobalState };

  // COMPONENT DID UPDATE?
  useEffect(() => {}, []);

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}.isRequired;
