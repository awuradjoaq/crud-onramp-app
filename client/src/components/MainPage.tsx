import React from 'react';
import BlogPosts from './BlogPost';
import Search from './Search';
import { Link } from "react-router-dom";


interface MainPageProps {
  posts: {
    id: number;
    title: string;
    username_id: number;
    username: string;
    date_created: string;
  }[]
}

const MainPage: React.FC<MainPageProps> = (props) => {
  return (
    <div>
      <Search />
      {
        props.posts.map(post => (
        <BlogPosts post={post} key={post.id}/>
      ))
    }
    </div>

  )

};

export default MainPage;