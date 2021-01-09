import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    username_id: number;
    username: string;
    date_created: string;
    post: string;
  };
}

const PostDisplay: React.FC = (props: any) => {

  const [display, setDisplay] = useState([]);

  console.log(display);

  useEffect(() => {
    axios.get(`/blog/${props.match.params.id}`)
    .then(result => setDisplay(result.data[0]))
    .catch(error => console.log(error));
  },[]);
  return <span>{display.post}</span>;

};

export default PostDisplay;