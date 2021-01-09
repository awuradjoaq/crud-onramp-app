import React from 'react';

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
const BlogPost: React.FC<BlogPostProps> = (props) => (
  <div>
    <h2>
      {props.post.title}
    </h2>
    <h3>
      {props.post.username}
    </h3>
  </div>
);

export default BlogPost;