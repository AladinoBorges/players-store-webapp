import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

import LoginForm from '../components/LoginForm';
import AppContext from '../context/AppContext';
import gamesURL from '../services/keysAndLinks';
import setLocalFunctions from '../services/setToLocalStorage';
import genericGetFromStorage from '../services/getFromLocalStorage';

function Splash() {
  const { globalState, setGlobalState } = useContext(AppContext);
  const { genericSetToStorage } = setLocalFunctions;
  const history = useHistory();

  // GLOBAL FUNCTIONS
  const setStorageAndState = (data) => {
    genericSetToStorage(data, 'gamesList');
    genericSetToStorage('convidado', 'username');
    setGlobalState({ ...globalState, listOfGames: data.results });
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

    !checkStorage ? requestAPI(gamesURL) : history.push('/home');;
  }, []);

  return (
    <LoginForm />
  );
}

export default Splash;
