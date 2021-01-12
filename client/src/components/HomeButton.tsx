import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

// Interfaces
interface HomeButtonProps {
  setPosts: Function;
  posts: {[key: string]: string | number}[];
}

//Styled Components
const StyledLink = styled(Link)`
  display: inline;
  text-decoration: none;
`;

const StyledButton = styled.button`
  background-color: transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;

`

const HomeButton: React.FC<HomeButtonProps> = (props) => {

  const retrievePosts = () => {
    axios.get('/blog')
    .then((result) => props.setPosts(result.data))
    .catch(error => console.log(error))
  }

  return (
    <StyledLink to="/">
      <StyledButton onClick={retrievePosts}>View All Blog Posts</StyledButton>
    </StyledLink>
  );
};

export default HomeButton;
