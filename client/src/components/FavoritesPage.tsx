import React from "react";
import styled from "styled-components";
import FavoritesPost from "./FavoritesPost";

interface FavoritesPageProps {
  posts: {
    id: number;
    username_id: number;
    blog_post_id: number;
    title: string;
    username: string;
    date_created: string;
  }[];
  setPosts?: Function;
  userId?: {
    id: string;
  };
}

const FavoritesPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const FavoritesPostsContainer = styled.div``;

// returns users favorites page
const FavoritesPage: React.FC<FavoritesPageProps> = (props) => {
  return (
    <FavoritesPageContainer>
      <FavoritesPostsContainer>
        {props.posts.map((post) => (
          <FavoritesPost
            post={post}
            key={post.id}
            setPosts={props.setPosts}
            userId={props.userId}
          />
        ))}
      </FavoritesPostsContainer>
    </FavoritesPageContainer>
  );
};

export default FavoritesPage;
