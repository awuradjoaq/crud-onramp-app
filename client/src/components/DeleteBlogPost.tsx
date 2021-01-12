import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Interface
interface DeleteBlogProps {
  id: number;
  setPosts?: Function;
}

// Styled Components
const DeleteButton = styled.i`
  position: relative;
  right: 10px;
  bottom: 1px;
`

const DeleteBlogPost: React.FC<DeleteBlogProps> = (props) => {

  const removeBlogPost  = () => {
    axios.delete(`/blog/${props.id}`)
    .then(() => axios.get('/blog/')
    .then(result => props.setPosts? props.setPosts(result.data) : null)
    .catch(error => console.log(error)))
    .catch(error => console.log(error));

}
  return(
    <DeleteButton onClick={removeBlogPost} className="far fa-trash-alt"></DeleteButton>
  )
};

export default DeleteBlogPost;
