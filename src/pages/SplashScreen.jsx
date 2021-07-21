import { useContext, useEffect } from 'react';
import axios from 'axios';

import LoginForm from '../components/LoginForm';
import AppContext from '../context/AppContext';
import gamesURL from '../services/keysAndLinks';
import setLocalFunctions from '../services/setToLocalStorage';
import genericGetFromStorage from '../services/getFromLocalStorage';

function Splash() {
  const { globalState, setGlobalState } = useContext(AppContext);
  const { genericSetToStorage } = setLocalFunctions;

  // GLOBAL FUNCTIONS
  const setStorageAndState = (data) => {
    genericSetToStorage(data, 'gamesList');
    setGlobalState({ ...globalState, listOfGames: data });
  }

  const requestAPI = async (url) => {
    try {
      const result = await axios.get(url)
      .then(({ data }) => data);

      setStorageAndState(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // COMPONENT DID MOUNT?
  useEffect(() => {
    const checkStorage = genericGetFromStorage('gamesList');

    !checkStorage && requestAPI(gamesURL);
  }, []);

  return (
    <LoginForm />
  );
}

export default Splash;
