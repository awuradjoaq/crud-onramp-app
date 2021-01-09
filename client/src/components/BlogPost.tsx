import React from "react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  post: {
    username_id: number;
    username: string;
    blog_post_id: number;
    title: string;
    post: string;
    date_posted: string;
  };
}

interface BlogViewState {
  postViewed: boolean;
}

const BlogPost: React.FC<BlogPostProps> = (props) => {
  return (
    <div>
      <Link to="blogpost/:id">
        <h2>{props.post.title}</h2>
      </Link>
      <h3>{props.post.username}</h3>
      <h4>{props.post.date_posted}</h4>
    </div>
  );
};

export default BlogPost;
