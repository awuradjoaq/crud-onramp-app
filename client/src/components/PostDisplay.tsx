import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogPost from "./BlogPost";
import { RouteComponentProps } from "react-router-dom";
import UpdateBlogPost from "./UpdateBlogPost";
import styled from 'styled-components';

// Interfaces
interface BlogPostProps {
  id: number;
  title: string;
  username_id: number;
  username: string;
  date_created: string;
  post: string;
  userId: {
    id: number;
  };
}

// Styled Components
const PostDisplayStyle = styled.div`
  position: relative;
  top: 300px;
  left: 300px;
  margin: 0 auto;
`;
// RouteComponentProps<{id:string}>
// FIX TYPE

const PostDisplay: React.FC<any> = (props) => {
  const [display, setDisplay] = useState<BlogPostProps | null>(null);

  useEffect(() => {
    axios
      .get(`/blog/${props.match.params.id}`)
      .then((result) => setDisplay(result.data[0]))
      .catch((error) => console.log(error));
  }, []);
  if (display && props.userId.id === display.username_id) {
    return (
      <PostDisplayStyle>
        <h1>{display.title}</h1>
        <h2>{display.username}</h2>
        <p>{display.post}</p>
        <UpdateBlogPost
          title={display.title}
          post={display.post}
          username_id={display.username_id}
          id={display.id}
          setPosts={props.setPosts}
        />
      </PostDisplayStyle>
    );
  } else if (display) {
    return (
      <PostDisplayStyle>
        <h1>{display.title}</h1>
        <h2>{display.username}</h2>
        <p>{display.post}</p>
      </PostDisplayStyle>
    );
  } else {
    return null;
  }
};

export default PostDisplay;
