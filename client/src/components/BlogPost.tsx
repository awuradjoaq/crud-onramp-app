import React from "react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    username_id: number;
    username: string;
    date_created: string;
  };
}

interface BlogViewState {
  postViewed: boolean;
}

const BlogPost: React.FC<BlogPostProps> = (props) => {
  return (
    <div>
      <Link to={`/${props.post.id}`}>
        <h2>{props.post.title}</h2>
      </Link>
      <h3>{props.post.username}</h3>
      <h4>{props.post.date_created}</h4>
    </div>
  );
};

export default BlogPost;
