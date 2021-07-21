import { useContext, useState, useEffect } from 'react';

import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Aside from '../components/Aside';
import genericGetFromStorage from '../services/getFromLocalStorage';

function Home() {
  const { globalState, setGlobalState } = useContext(AppContext);
  const [cardsInfo, setCardsInfo] = useState([]);
  const { listOfGames } = globalState;

    // COMPONENT DID MOUNT?
    useEffect(() => {
      const gamesList = genericGetFromStorage('gamesList').results;
      const info = !(listOfGames.length) ? gamesList : listOfGames;

      setCardsInfo([...info]);
    }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <section className="cards_container">
        { cardsInfo.map(({ background_image, name, slug, released, rating, platforms }, index) => (
          <div key={ index } className="cards">
            <div className="card_img_container">
              <img className="card_img" src={ background_image } alt={ `${slug} cover` } />
            </div>
            <div className="card_text_container">
              <h2>{ name }</h2>
              <p>{ `Lançamento: ${released.replace(/-/g, ' - ')}` }</p>
              <p>{ `Avaliação: ${rating}` }</p>
              <div className="platforms_container">
                <h4>
                  PLATAFORMAS:
                </h4>
                <p>
                  { platforms.map(({platform: { name, slug }}) => (
                    <span key={ slug }>{ `${name} ` }</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Aside />
      <Footer />
    </div>
  );
}

export default Home;
