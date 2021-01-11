import React, { useState } from 'react';
import FavoriteButton from './FavoriteButton';
import { Link }  from 'react-router-dom';

interface FavoritesPostProps {
  post: {
    id: number;
    username_id: number;
    blog_post_id: number;
    title: string;
    username: string;
    date_created: string;
  };
  setPosts?: Function;
  userId?: {
    id: string;
  };
}

const FavoritesPost: React.FC<FavoritesPostProps> = (props) => {
  const [saved, setSaved] = useState(true);

  return(
    <div>
      <FavoriteButton userId={props.userId ?? null} id={props.post.blog_post_id} saved={saved}/>
      <Link to={`/${props.post.blog_post_id}`}>
        <h2>{props.post.title}</h2>
      </Link>
      <h3>{props.post.username}</h3>
      <h4>{props.post.date_created}</h4>
    </div>
  );
};

export default FavoritesPost;