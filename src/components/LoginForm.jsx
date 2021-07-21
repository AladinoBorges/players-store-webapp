import { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';
import setLocalFunctions from '../services/setToLocalStorage';

function LoginForm() {
  const [userInput, setUserInput] = useState('');
  const { globalState, setGlobalState } = useContext(AppContext);
  const { genericSetToStorage } = setLocalFunctions;
  const history = useHistory();

  // HANDLERS
  const handleChange = ({ target: { value }}) => {
    setUserInput(value);
  }

  const handleClick = () => {
    genericSetToStorage(userInput, 'username');
    setGlobalState({ ...globalState, userName: userInput });
    history.push('/home')
  }

  return (
    <div className="App-header">
      <label htmlFor="username_input">
        { 'Insira o seu nome ' }
        <input
          data-testid="username_input"
          id="username_input"
          name="username"
          type="text"
          minLength="2"
          maxLength="16"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        disabled={ !(userInput.length >= 2) }
        onClick={ handleClick }
      >
        ENTRAR
      </button>
    </div>
  );
}

export default LoginForm;
