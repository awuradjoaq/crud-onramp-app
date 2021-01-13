import React, { useState } from "react";
import styled from "styled-components";
import UpdateBlog from "./UpdateBlog";

interface UpdateBlogPostProps {
  title: string;
  post: string;
  username_id: number;
  id: number;
  setPosts: Function;
  auth_id: string;
}

//Styled Components
const UpdateButton = styled.button`
  color: rgb(59, 65, 68);
  border-color: rgb(205, 209, 212);
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  overflow: hidden;
  font-family: "Amatic SC", cursive;
  font-size: 20px;
  &:hover {
    color: rgb(59, 65, 68);
    background-color: rgb(232, 233, 234);
    border-color: transparent;
  }
  &:active {
    color: rgb(255, 255, 255);
    background-color: rgb(134, 144, 153);
    border-color: transparent;
  }
`;

const UpdateBlogPost: React.FC<UpdateBlogPostProps> = (props) => {
  const [update, setUpdate] = useState(false);
  if (update) {
    return (
      <>
        <UpdateButton onClick={() => setUpdate(!update)}>
          Quit Editing
        </UpdateButton>
        <UpdateBlog
          title={props.title}
          post={props.post}
          username_id={props.username_id}
          id={props.id}
          setPosts={props.setPosts}
          auth_id={props.auth_id}
        />
      </>
    );
  }
  return (
    <UpdateButton onClick={() => setUpdate(!update)}>
      Edit Blog Post
    </UpdateButton>
  );
};

export default UpdateBlogPost;
