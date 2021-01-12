import React, { useState } from "react";
import styled from 'styled-components';

// Interfaces
interface SearchPageProps {
  posts: {
    [key: string]: string | number
  }[];
  setPosts?: Function;
}

// Styled Components


const Search: React.FC<SearchPageProps> = (props) => {

  const [value, setValue] = useState('');
  const [field, setField] = useState('username');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (value === '') {
      alert('Cannot submit blank fields, please try again!')
    } else {
      let filteredPosts: Object[] = [];
      for (let post of props.posts) {
        if (typeof post[field] === 'string') {
          if (post[field] === value) {
            filteredPosts.push(post);
          }
        }
      }
      props.setPosts!(filteredPosts);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <select value={field} onChange={e => setField(e.target.value)}>
        <option value="username">Username</option>
        <option value="title">Title</option>
      </select>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
      <input type="submit" value="search" />
    </form>
  );
};

export default Search;
