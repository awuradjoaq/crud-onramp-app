import React from "react";
import { Link } from "react-router-dom";
import DeleteBlogPost from './DeleteBlogPost';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    username_id: number;
    username: string;
    date_created: string;
  }
  setPosts?: Function;
}

interface BlogViewState {
  postViewed: boolean;
}

const BlogPost: React.FC<BlogPostProps> = (props) => {
  return (
    <div>
      <DeleteBlogPost id={props.post.id} setPosts={props.setPosts} />
      <Link to={`/${props.post.id}`}>
        <h2>{props.post.title}</h2>
      </Link>
      <h3>{props.post.username}</h3>
      <h4>{props.post.date_created}</h4>
    </div>
  );
};

export default BlogPost;
