import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

interface HomeButtonProps {
  setPosts: Function;
  posts: {[key: string]: string | number}[];
}

const HomeButton: React.FC<HomeButtonProps> = (props) => {

  const retrievePosts = () => {
    axios.get('/blog')
    .then((result) => props.setPosts(result.data))
    .catch(error => console.log(error))
  }

  return (
    <Link to="/">
      <button onClick={retrievePosts}>View All Blog Posts</button>
    </Link>
  );
};

export default HomeButton;
