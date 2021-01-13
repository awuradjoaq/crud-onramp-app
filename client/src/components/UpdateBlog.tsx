import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

interface UpdateBlogProps {
  title: string;
  post: string;
  username_id: number;
  id: number;
  setPosts: Function;
  auth_id: string;
}

const PostBox = styled.textarea`
  font-family: Roboto, sans-serf;
  font-size: 18px;
  height: 300px;
  width: 70%;
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

const PostLabel = styled(TitleLabel)`
  display: block;
`;

const TitleInput = styled.input`
  width: 62%;
  margin-left: 20px;
  height: 20px;
  font-size: 18px;
  border: 3px solid black;
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

// allows for updates to blog posts created by current user signed in
const UpdateBlog: React.FC<UpdateBlogProps> = (props) => {
  const [title, setTitle] = useState(props.title);
  const [post, setPost] = useState(props.post);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (post === "" || title === "") {
      alert("Cannot submit blank fields, please try again!");
    } else {
      axios
        .patch(`/blog/${props.id}`, {
          title,
          post,
          username_id: props.username_id,
          auth_id: props.auth_id,
        })
        .then(() =>
          axios
            .get("/blog")
            .then((result) => props.setPosts(result.data))
            .catch((error) => console.log(error))
        )
        .catch((error) => console.log(error));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TitleLabel>
        Title:
        <TitleInput
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </TitleLabel>
      <PostLabel>
        Post:
        <PostBox
          rows={2}
          cols={25}
          placeholder="Speak your mind..."
          name="post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </PostLabel>
      <ButtonStyle type="submit" value="Submit" />
    </form>
  );
};

export default UpdateBlog;
