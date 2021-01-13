import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateBlogPost from "./UpdateBlogPost";
import styled from "styled-components";

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
    auth_id: string;
  };
}

// Styled Components
const PostDisplayStyle = styled.div`
  position: relative;
  top: 100px;
  width: 50%;
  height: 90%;
  margin: 20px auto;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Paragraph = styled.p`
  font-size: 25px;
`;

// displays body of post whose title was clicked on
const PostDisplay: React.FC<any> = (props) => {
  const [display, setDisplay] = useState<BlogPostProps | null>(null);
  // calls back to API to retrieve body of post
  useEffect(() => {
    axios
      .get(`/blog/${props.match.params.id}`)
      .then((result) => setDisplay(result.data[0]))
      .catch((error) => console.log(error));
  }, [props.match.params.id]);
  if (display && props.userId.id === display.username_id) {
    return (
      <PostDisplayStyle>
        <Title>{display.title}</Title>
        <h2>{display.username}</h2>
        <h4>{display.date_created.slice(0, 10)}</h4>
        <Paragraph>{display.post}</Paragraph>
        <UpdateBlogPost
          title={display.title}
          post={display.post}
          username_id={display.username_id}
          auth_id={props.userId.auth_id}
          id={display.id}
          setPosts={props.setPosts}
        />
      </PostDisplayStyle>
    );
  } else if (display) {
    return (
      <PostDisplayStyle>
        <Title>{display.title}</Title>
        <h2>{display.username}</h2>
        <Paragraph>{display.post}</Paragraph>
        <h4>{display.date_created.slice(0, 10)}</h4>
      </PostDisplayStyle>
    );
  } else {
    return null;
  }
};

export default PostDisplay;
