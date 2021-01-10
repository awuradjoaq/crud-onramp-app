import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';
import { RouteComponentProps } from 'react-router-dom';

interface BlogPostProps {
    id: number;
    title: string;
    username_id: number;
    username: string;
    date_created: string;
    post: string;
};

const PostDisplay: React.FC<RouteComponentProps<{id:string}>> = (props) => {

  const [display, setDisplay] = useState<BlogPostProps | null>(null);

  console.log(props);

  useEffect(() => {
    axios.get(`/blog/${props.match.params.id}`)
    .then(result => setDisplay(result.data[0]))
    .catch(error => console.log(error));
  },[]);
  if (display) {
    return <span>{display.post}</span>;
  } else {
    return null;
  }

};

export default PostDisplay;