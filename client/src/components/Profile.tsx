import React, { useState } from "react";
import styled from "styled-components";
import LogOutPage from "./LogOutPage";

interface ProfileProps {
  image: string;
  nickname: string;
}

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledSpan = styled.span`
  position: relative;
  right: 20px;
  bottom: 5px;
`;

// user profile
const Profile: React.FC<ProfileProps> = (props) => {
  const [open, setOpen] = useState(false);
  if (open) {
    return (
      <StyledSpan>
        <StyledImage
          src={props.image}
          onClick={() => setOpen(!open)}
        ></StyledImage>
        <h2>{props.nickname}</h2>
        <LogOutPage />
      </StyledSpan>
    );
  }
  return (
    <StyledSpan>
      <StyledImage
        src={props.image}
        onClick={() => setOpen(!open)}
      ></StyledImage>
    </StyledSpan>
  );
};

export default Profile;
