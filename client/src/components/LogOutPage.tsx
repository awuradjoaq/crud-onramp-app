import React from 'react';
import styled from 'styled-components';

import { useAuth0 } from '@auth0/auth0-react';

const LogOutButton = styled.button`
  color: rgb(59, 65, 68);
  border-color: rgb(205, 209, 212);
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  cursor:pointer;
  overflow: hidden;
  font-family: 'Amatic SC', cursive;
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

const LogOutPage: React.FC = () => {
  const { logout } = useAuth0();
  return(
    <LogOutButton onClick={() => logout()}>
      Log Out
    </LogOutButton>
  )
};

export default LogOutPage;