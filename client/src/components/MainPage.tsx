import React from 'react';
import BlogPosts from './BlogPost';
import Search from './Search';

interface MainPageProps {
  posts: {
    id: number;
    title: string;
    username_id: number;
    username: string;
    date_created: string;
  }[],
  setPosts?: Function
}

const MainPage: React.FC<MainPageProps> = (props) => {
  return (
    <div>
      <Search />
      {
        props.posts.map(post => (
        <BlogPosts post={post} key={post.id} setPosts={props.setPosts} />
      ))
    }
    </div>

  )

};

export default MainPage;