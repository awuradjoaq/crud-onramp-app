import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import FavoritesPage from './FavoritesPage';

const Favorites: React.FC<RouteComponentProps<{id:string}>> = (props) => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get(`/blog/favorites/${props.match.params.id}`)
    .then(result => setFavorites(result.data))
    .catch(error => console.log(error))
  }, []);

  if (favorites) {
    return <FavoritesPage posts={favorites} userId={props.match.params}/>
  } else {
    return null;
  }
};

export default Favorites;
