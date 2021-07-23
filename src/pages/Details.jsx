import { useContext } from 'react';
import { useHistory } from 'react-router';

import AppContext from '../context/AppContext';
import '../styles/detailsPage.css';

function Details() {
  const { globalState, setGlobalState } = useContext(AppContext);
  const history = useHistory();

  const { gameInfo: {
    name,
    background_image,
    genres,
    platforms,
    developers,
    description_raw
  } } = globalState;
  
  const handleClick = () => {
    setGlobalState({ ...globalState, gameInfo: [] });
    history.push('/');
  }

  return (
    <div>
      <main className="game_details">
        <div className="details_cover_image_container">
          <img
            className="details_cover"
            src={ background_image }
            alt={ `${name} official cover`}
          />
        </div>
        <div className="details_info_container">
          <h2 className="details_heading">{ name }</h2>
          <p>
            {developers.map(({ name }, index) => (
              <span className="spans" key={ index }>{ name }</span>))}.
          </p>
          <p>
            {genres.map(({ name }, index) => (
              <span className="spans" key={ index }>{ name }</span>
            ))}.
          </p>
          <p>
            {platforms.map(({ platform: { name } }, index) => (
              <span className="spans" key={ index }>{ name }</span>))}.
          </p>
        </div>
        <article className="game_description">
          <p>{ description_raw.replace(/###/g, ' ') }</p>
        </article>
      </main>
      <button
        onClick={ handleClick }
        >
        HOME
      </button>
    </div>
  );
}

export default Details;
