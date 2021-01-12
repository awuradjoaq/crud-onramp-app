import React, { useState } from 'react';
import UpdateBlog from './UpdateBlog';

interface UpdateBlogPostProps {
  title: string;
  post: string;
  username_id: number;
  id: number;
  setPosts: Function;
  auth_id: string;
}

const UpdateBlogPost: React.FC<UpdateBlogPostProps> = (props) => {
  const [update,setUpdate] = useState(false);
  if (update) {
    return (
      <>
        <button onClick={() => setUpdate(!update)}>
          Quit Editing
        </button>
        <UpdateBlog title={props.title} post={props.post} username_id={props.username_id} id={props.id} setPosts={props.setPosts} auth_id={props.auth_id}/>
      </>
    )
  }
  return(
    <button onClick={() => setUpdate(!update)}>
      Edit Blog Post
    </button>
  )
};

export default UpdateBlogPost;