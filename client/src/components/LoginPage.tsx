import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  margin: 0 auto;
  white-space: nowrap;
  position: relative;
  color: rgb(59, 65, 68);
  border-color: rgb(205, 209, 212);
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  cursor:pointer;
  overflow: hidden;
  font-family: 'Amatic SC', cursive;
  font-size: 30px;
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
const ButtonContainer = styled.div`
  width: 20%;
  margin: 0 auto;
  position: relative;
  top: 250px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const LogInPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <ButtonContainer>
      <Title>Blog It Up!</Title>
      <ButtonStyle onClick={() => loginWithRedirect()}>
        Sign Up or Log In
      </ButtonStyle>
    </ButtonContainer>
  );
};

export default LogInPage;
