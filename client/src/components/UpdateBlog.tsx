import React, { useState } from 'react';
import axios from 'axios';

interface UpdateBlogProps {
  title: string;
  post: string;
  username_id: number;
  id: number;
  setPosts: Function;
  auth_id: string;
}

const UpdateBlog: React.FC<UpdateBlogProps> = (props) => {
  const [title, setTitle] = useState(props.title);
  const [post, setPost] = useState(props.post);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (post === '' || title === '') {
      alert('Cannot submit blank fields, please try again!')
    } else {
      axios.patch(`/blog/${props.id}`, {
        title,
        post,
        username_id: props.username_id,
        auth_id: props.auth_id

      })
      .then(() => axios.get('/blog')
      .then(result => props.setPosts(result.data))
      .catch(error => console.log(error)))
      .catch(error => console.log(error))
    }
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <label>
        Post:
        <input type="text" name="post" value={post} onChange={(e) => setPost(e.target.value)}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
};

export default UpdateBlog;