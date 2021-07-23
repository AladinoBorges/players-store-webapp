import { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import AppContext from '../context/AppContext';
import Header from '../components/Header';
import GameCard from '../components/GameListCard';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

function Home() {
  const { globalState, setGlobalState } = useContext(AppContext);
  const [listToRender, setListToRender] = useState([]);
  const [loading, setLoading] = useState(true);

  const { listOfGames, next } = globalState;
  const loadTime = 4500; // 4500

  const requestAPI = async (url) => {
    try {
      const api = await axios.get(url)
      .then(({ data }) => data);

      const { next, results } = api;

      setGlobalState({ ...globalState, next, listOfGames: [...results] });
    
    } catch (error) { console.log(error) }
  };

  const handleLoading = ((status) => {
    setTimeout(() => setLoading(status), loadTime);
  })
  
  // COMPONENT DID MOUNT?
  useEffect(() => {
    listToRender.length === 0 && requestAPI(next);
    handleLoading(false);
  }, []);

  // COMPONENT DID UPDATE?
  useEffect(() => {
    const updatedList = (listToRender.length > 0)
      ? listToRender.concat(listOfGames)
      : listOfGames;

    setListToRender(updatedList);
  }, [listOfGames]);

  const handleClick = () => {
    requestAPI(next);
  };
  
  return (
    <>
      {loading ? <Loading />
        : (
        <div>
          <Header page={'HOME'} />
          <section className="cards_container">
            {listToRender.map(({ id, background_image, name, slug, released, rating, platforms }, index) => (
              <GameCard
                name={ name }
                id={ id }
                index={ index }
                background_image={ background_image }
                slug={ slug }
                released={ released }
                rating={ rating }
                platforms={ platforms }
              />))}
          <button
            type="button"
            onClick={ handleClick }
          >
            MORE GAMES
          </button>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
