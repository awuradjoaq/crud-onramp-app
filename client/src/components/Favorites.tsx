import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MainPage from './MainPage';

const Favorites: React.FC = (props: any) => {
  const [favorites, setFavorites] = useState([]);

  console.log(props.match.params.id);
  useEffect(() => {
    axios.get(`/blog/favorites/${props.match.params.id}`)
    .then(result => setFavorites(result.data))
    .catch(error => console.log(error))
  }, []);

  if (favorites) {
    return <MainPage posts={favorites}/>
  } else {
    return null;
  }
};

export default Favorites;
