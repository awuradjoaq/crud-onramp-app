import React from 'react';
import FavoritesPost from './FavoritesPost';

interface FavoritesPageProps {
  posts: {
    id: number;
    username_id: number;
    blog_post_id: number;
    title: string;
    username: string;
    date_created: string;
  }[];
  setPosts?: Function;
  userId?: {
    id: string;
  };
}

const FavoritesPage: React.FC<FavoritesPageProps> = (props) => {
  return(
    <div>
      {
        props.posts.map(post => (
          <FavoritesPost post={post} key={post.id} setPosts={props.setPosts} userId={props.userId}/>
        ))
      }
    </div>

  )
};

export default FavoritesPage;