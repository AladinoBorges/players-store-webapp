import { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import gamesURL from '../services/service';

export default function AppProvider({ children }) {
  const [globalState, setGlobalState] = useState({
    listOfGames: [],
    next: gamesURL,
    gameInfo: []
  });
  const context = { globalState, setGlobalState };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}.isRequired;
