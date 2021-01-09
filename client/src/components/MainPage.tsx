import React from 'react';
import BlogPosts from './BlogPost';
import Search from './Search';
import { Link } from "react-router-dom";


interface MainPageProps {
  dummyData: {
    username_id: number;
    username: string;
    blog_post_id: number;
    title: string;
    post: string;
    date_posted: string;
  }[]
}

const MainPage: React.FC<MainPageProps> = (props) => {
  return (
    <div>
      <Search />
      {
        props.dummyData.map(post => (
        <BlogPosts post={post} key={post.blog_post_id}/>
      ))
    }
    </div>

  )

};

export default MainPage;