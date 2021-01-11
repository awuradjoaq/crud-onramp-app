import React, { useState } from "react";


interface SearchPageProps {
  posts: {
    [key: string]: string | number
  }[];
  setPosts?: Function;
}

const Search: React.FC<SearchPageProps> = (props) => {

  const [value, setValue] = useState('');
  const [field, setField] = useState('username');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
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

  return (
    <form onSubmit={handleSubmit}>
      Search By:
      <select value={field} onChange={e => setField(e.target.value)}>
        <option value="username">Username</option>
        <option value="title">Title</option>
      </select>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Search;
