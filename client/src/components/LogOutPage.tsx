import React from 'react';
import styled from 'styled-components';

import { useAuth0 } from '@auth0/auth0-react';

const LogOutButton = styled.button`
  background-color: transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
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