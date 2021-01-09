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

);