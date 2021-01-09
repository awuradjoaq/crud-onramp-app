import React from 'react';
import styled from 'styled-components';

const BackDropStyle = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(25px);
  padding: 50px;
  z-index: 3;
  transform: scale(1);
  transition-timing-function: ease-out;
  transition: 2s;
`;

const ModalStyle = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 75%;
  height: 75%;
  min-width: 500px;
  min-height: 550px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  transition-timing-function: ease;
  transition: 2s;
`;

interface NewBlogPostProps {
  show: boolean;
  onClose: () => void;
};

const NewBlogPost: React.FC<NewBlogPostProps> = (props) => {

  if (!props.show) {
    return null;
  }


  return(
    <BackDropStyle onClick={props.onClose}>
        <ModalStyle onClick={(e) => {e.stopPropagation()}}>
        </ModalStyle>
    </BackDropStyle>

  )
};

export default NewBlogPost;