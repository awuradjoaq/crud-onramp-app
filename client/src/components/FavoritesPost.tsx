import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Interfaces
interface FavoritesPostProps {
  post: {
    id: number;
    username_id: number;
    blog_post_id: number;
    title: string;
    username: string;
    date_created: string;
  };
  setPosts?: Function;
  userId?: {
    id: string;
  };
}

// Styled Components
const BlogPostContainer = styled.div`
  border: 3px solid black;
  width: 65%;
  position: relative;
  top: 90px;
  margin: 10px auto;
  padding: 20px 0px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Title = styled.h1`
  display: inline;
  margin-right: 10px;
  font-size: 40px;
`;

const FavoritePost = styled.article`
  text-align: center;
`;

const FavoritesPost: React.FC<FavoritesPostProps> = (props) => {
  return (
    <BlogPostContainer>
      <FavoritePost>
        <StyledLink to={`/${props.post.blog_post_id}`}>
          <Title>{props.post.title}</Title>
          <i className="fas fa-angle-double-right"></i>
        </StyledLink>
        <h3>{props.post.username}</h3>
        <h4>{props.post.date_created.slice(0, 10)}</h4>
      </FavoritePost>
    </BlogPostContainer>
  );
};

export default FavoritesPost;
