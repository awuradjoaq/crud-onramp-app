import React from 'react';
import Favorites from './Favorites';
import axios from 'axios';

interface FavoriteButtonProps {
  userId: {
    id: string;
  } | null;
  id : number;
  saved?: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {

  const addFavorite = () => {
    axios.post(`/blog/favorites/${props.userId!.id}`, {
      blog_post_id: props.id
    })
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  return(
    <i className="far fa-heart" onClick={addFavorite}></i>
  )
};

export default FavoriteButton;