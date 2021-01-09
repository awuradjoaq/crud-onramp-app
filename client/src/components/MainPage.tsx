import React from 'react';
import BlogPost from './BlogPost';

// interface Test {
//   test: {id: number}[];
// }

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
      {
        props.dummyData.map(post => (
        <BlogPost post={post} key={post.blog_post_id}/>
      ))
    }
    </div>

  )

};

export default MainPage;