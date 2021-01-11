import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MainPage from './MainPage';
import { RouteComponentProps } from 'react-router-dom';

const Favorites: React.FC<RouteComponentProps<{id:string}>> = (props) => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get(`/blog/favorites/${props.match.params.id}`)
    .then(result => setFavorites(result.data))
    .catch(error => console.log(error))
  }, []);

  if (favorites) {
    return <MainPage posts={favorites} />
  } else {
    return null;
  }
};

export default Favorites;
