import React from 'react';

// interface Test {
//   test: {id: number}[];
// }

interface BlogPostProps {
  dummyData: {
    username_id: number;
    username: string;
    blog_post_id: number;
    title: string;
    post: string;
    date_posted: string;
  }[]
}

const MainPage: React.FC<BlogPostProps> = (props: BlogPostProps) => (
  <h1>
    Hello, World!
  </h1>
);

export default MainPage;