import { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

function LoginForm() {
  const [userInput, setUserInput] = useState('');
  const { globalState, setGlobalState } = useContext(AppContext);

  // HANDLERS
  const handleChange = ({ target: { value }}) => {
    setUserInput(value);
  }

  const handleClick = () => {
    setGlobalState({ ...globalState, userName: userInput });
  }

  return (
    <header className="App-header">
      <label htmlFor="username_input">
        { 'Insira o seu nome ' }
        <input
          data-testid="username_input"
          id="username_input"
          name="username"
          type="text"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
      >
        ENTRAR
      </button>
    </header>
  );
}

export default LoginForm;
