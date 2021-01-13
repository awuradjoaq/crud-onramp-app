import React, { useState, useEffect } from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";
import FavoritesPage from "./FavoritesPage";
import styled from "styled-components";

// Styled Components
const FavoritesPageContainer = styled.div``;

const Favorites: React.FC<RouteComponentProps<{ id: string }>> = (props) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    axios
      .get(`/blog/favorites/${props.match.params.id}`)
      .then((result) => setFavorites(result.data))
      .catch((error) => console.log(error));
  }, [props.match.params.id]);

  if (favorites) {
    return (
      <FavoritesPageContainer>
        <FavoritesPage posts={favorites} userId={props.match.params} />
      </FavoritesPageContainer>
    );
  } else {
    return null;
  }
};

export default Favorites;
