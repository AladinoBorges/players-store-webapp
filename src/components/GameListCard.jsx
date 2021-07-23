import { useContext } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

import AppContext from '../context/AppContext';
import '../styles/cards.css';


function GameCard({ id, name, index, background_image, slug, released, rating, platforms }) {
  const { globalState, setGlobalState } = useContext(AppContext);
  const history = useHistory();

  const getGame = async (id, link) => {
    try {
      const URL = `https://api.rawg.io/api/games/${id}?key=af194e99a15a416d95b45fb57c7182f7`;
      
      const gameInfo = await axios.get(URL)
      .then(({ data }) => data);

      setGlobalState({ ...globalState, gameInfo });
      history.push(`/game/${link}`);

    } catch (error) { console.log(error) }
  };

  const handleClick = () => {
    const title = name.replace(/\W/g, '_').toLowerCase();

    getGame(id, title);
  }
  
  return (
    <div 
      key={ index }
      id={ id }
      className="cards"
      onClick={ handleClick }
    >
      <div className="card_img_container">
        <img className="card_img" src={ background_image } alt={ `${slug} cover` } />
      </div>
      <div className="card_text_container">
        <h2>{ name }</h2>
        <p>{ `Lançamento: ${released.replace(/-/g, ' - ')}` }</p>
        <p>{ `Avaliação: ${rating}` }</p>
        <div className="platforms_container">
          <h4>PLATAFORMAS:</h4>
          <p>
            { platforms.map(({platform: { name, slug }}) => (
              <span key={ slug }>{ `${name} ` }</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
