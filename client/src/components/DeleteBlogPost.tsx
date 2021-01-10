import React from 'react';
import axios from 'axios';

interface DeleteBlogProps {
  id: number;
  setPosts?: Function;
}

const DeleteBlogPost: React.FC<DeleteBlogProps> = (props) => {

  const removeBlogPost  = () => {
    axios.delete(`/blog/${props.id}`)
    .then(() => axios.get('/blog/')
    .then(result => props.setPosts? props.setPosts(result.data) : null)
    .catch(error => console.log(error)))
    .catch(error => console.log(error));

}
  return(
    <div onClick={removeBlogPost}>
      X
    </div>
  )
};

export default DeleteBlogPost;
