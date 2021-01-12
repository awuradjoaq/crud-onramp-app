import React from "react";
import { Link } from "react-router-dom";
import DeleteBlogPost from "./DeleteBlogPost";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";
import moment from "moment";

// Interfaces
interface BlogPostProps {
  post: {
    id: number;
    title: string;
    username_id: number;
    username: string;
    date_created: string;
  };
  setPosts?: Function;
  userId?: {
    id: string;
    auth_id: string;
  };
}

// Styled Components
const BlogPostContainer = styled.div`
  border: 3px solid black;
  width: 80%;
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

const ArrowIcon = styled.i`
  display: inline;
`;

const BlogDisplayContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const BlogPost = styled.article`
  text-align: center;
`;

const PostDisplay: React.FC<BlogPostProps> = (props) => {
  let postTemplate = (element: any) => {
    return (
      <BlogPostContainer>
        <BlogPost>
          <StyledLink to={`/${props.post.id}`}>
            <Title>{props.post.title}</Title>
            <i className="fas fa-angle-double-right"></i>
          </StyledLink>
          <FavoriteButton userId={props.userId ?? null} id={props.post.id} />
          {element}
          <h3>{props.post.username}</h3>
          <h4>{props.post.date_created.slice(0, 10)}</h4>
        </BlogPost>
      </BlogPostContainer>
    );
  };

  if (+props.userId!.id === props.post.username_id) {
    return (
      <BlogDisplayContainer>
        {postTemplate(
          <DeleteBlogPost
            id={props.post.id}
            setPosts={props.setPosts}
            userId={props.userId}
          />
        )}
      </BlogDisplayContainer>
    );
  } else {
    return <BlogDisplayContainer>{postTemplate(null)}</BlogDisplayContainer>;
  }
};

export default PostDisplay;
