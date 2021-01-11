import React from 'react';
import Favorites from './Favorites';
interface FavoriteButtonProps {
  userId: {
    id: number
  } | null;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {
  const addFavorite = () => {

  }
  return(
    <i className="far fa-heart"></i>
  )
};

export default FavoriteButton;