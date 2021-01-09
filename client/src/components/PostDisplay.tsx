import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';

interface BlogPostProps {
    id: number;
    title: string;
    username_id: number;
    username: string;
    date_created: string;
    post: string;
};

const PostDisplay: React.FC = (props: any) => {

  const [display, setDisplay] = useState<BlogPostProps | null>(null);

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