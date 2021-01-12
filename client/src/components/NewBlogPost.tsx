import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const BackDropStyle = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(25px);
  padding: 50px;
  z-index: 3;
  transform: scale(1);
  transition-timing-function: ease-out;
  transition: 2s;
`;

const ModalStyle = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 75%;
  height: 75%;
  min-width: 500px;
  min-height: 550px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  transition-timing-function: ease;
  transition: 2s;
  box-sizing: border-box;
`;

const PostBox = styled.textarea`
  font-family: Roboto, sans-serf;
  font-size: 18px;
  height: 300px;
  width: 90%;
  resize: none;
  display: block;
  padding: 10px;
  border: 3px solid black;
`;

const TitleLabel = styled.label`
  font-family: "Amatic SC", cursive;
  font-size: 40px;
  margin-right: 30px;
`;

const TitleInput = styled.input`
  width: 75%;
  margin-left: 20px;
  height: 20px;
  font-size: 18px;
  border: 3px solid black;
`;

const PostLabel = styled(TitleLabel)`
  display: block;
`;

const NewBlogForm = styled.form`
  padding: 10px 40px;
  width: 100%;
  height: 100%;
`;

const ButtonStyle = styled.input`
  font-family: "Amatic SC", cursive;
  margin: 20px 0px;
  background-color: #4caf50;
  border: none;
  border-radius: 16px;
  padding: 5px 10px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    background-color: rgb(0, 153, 0);
  }
`;

const CloseButtonStyle = styled.button`
  font-family: "Amatic SC", cursive;
  margin: 10px;
  background-color: rgb(255,0,0);
  border: none;
  border-radius: 16px;
  padding: 5px 12px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    background-color: rgb(204,0,0);
  }
  &:active {
    outline: none;
  }
`;

interface NewBlogPostProps {
  show: boolean;
  setPosts: Function;
  onClose: () => void;
  userId:
    | {
        id: string;
        auth_id: string;
      }
    | undefined;
}

const NewBlogPost: React.FC<NewBlogPostProps> = (props) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (title === "" || post === "") {
      alert("Cannot submit blank fields, please try again!");
    } else {
      axios
        .post("/blog", {
          title,
          post,
          username_id: props.userId!.id,
          auth_id: props.userId!.auth_id,
        })
        .then(() =>
          axios
            .get("/blog")
            .then((result) => props.setPosts(result.data))
            .catch((error) => console.log(error))
        );
        props.onClose()
    }
  };

  if (!props.show) {
    return null;
  }

  return (
    <BackDropStyle onClick={props.onClose}>
      <ModalStyle
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <NewBlogForm onSubmit={handleSubmit}>
          <TitleLabel>
            Title
            <TitleInput
              type="text"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </TitleLabel>
          <PostLabel>
            Post
            <PostBox
              rows={2}
              cols={25}
              placeholder="Speak your mind..."
              value={post}
              name="post"
              onChange={(e) => setPost(e.target.value)}
            />
          </PostLabel>
          <ButtonStyle type="submit" value="Submit" />
          <CloseButtonStyle onClick={props.onClose}>Close</CloseButtonStyle>
        </NewBlogForm>
      </ModalStyle>
    </BackDropStyle>
  );
};

export default NewBlogPost;
