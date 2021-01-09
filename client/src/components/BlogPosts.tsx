import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

interface BlogPostProps {
  post: {
    username_id: number;
    username: string;
    blog_post_id: number;
    title: string;
    post: string;
    date_posted: string;
  }
}
const BlogPosts: React.FC<BlogPostProps> = (props) => (
  <div>
    <h2>
      {props.post.title}
    </h2>
    <h3>
      {props.post.username}
    </h3>
    <h4>
      {props.post.date_posted}
    </h4>
  </div>
);

export default BlogPost;