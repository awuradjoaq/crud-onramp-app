import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';
import { RouteComponentProps } from 'react-router-dom';
import UpdateBlogPost from './UpdateBlogPost';

interface BlogPostProps {
    id: number;
    title: string;
    username_id: number;
    username: string;
    date_created: string;
    post: string;
};
// RouteComponentProps<{id:string}>
// FIX TYPE

const PostDisplay: React.FC<any> = (props) => {

  const [display, setDisplay] = useState<BlogPostProps | null>(null);


  useEffect(() => {
    axios.get(`/blog/${props.match.params.id}`)
    .then(result => setDisplay(result.data[0]))
    .catch(error => console.log(error));
  },[]);
  if (display) {
    return (
      <>
      <span>{display.post}</span>
      <UpdateBlogPost title={display.title} post={display.post} username_id={display.username_id} id={display.id} setPosts={props.setPosts}/>
    </>);
  } else {
    return null;
  }

};

export default PostDisplay;