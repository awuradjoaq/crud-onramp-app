import React from "react";
import axios from "axios";
import styled from "styled-components";

// Interfaces
interface FavoriteButtonProps {
  userId: {
    id: string;
    auth_id: string;
  } | null;
  id: number;
  saved?: boolean;
}

// Styled Components
const HeartButton = styled.i`
  margin: 0px 30px;
`;

const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {
  const addFavorite = () => {
    axios
      .post(`/blog/favorites/${props.userId!.id}`, {
        blog_post_id: props.id,
        auth_id: props.userId!.auth_id
      })
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <HeartButton className="far fa-heart" onClick={addFavorite}></HeartButton>
  );
};

export default FavoriteButton;
