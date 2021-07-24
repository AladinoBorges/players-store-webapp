import { useContext } from 'react';
import { useHistory } from 'react-router';

import Button from '@material-ui/core/Button';

import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
      <Header page={ 'GAME DETAILS' } />
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
      <Button
        variant="outlined"
        onClick={ handleClick }
        >
        HOME
      </Button>
      <Footer />
    </div>
  );
}

export default Details;
