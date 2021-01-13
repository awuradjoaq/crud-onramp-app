import React, { useState } from "react";
import styled from "styled-components";

// Interfaces
interface SearchPageProps {
  posts: {
    [key: string]: any;
  }[];
  setPosts?: Function;
}

// Styled Components
const StyledForm = styled.form`
  border-radius: 5px;
`;

const StyledSelect = styled.select`
  font-size: 20px;
  font-family: "Amatic SC", cursive;
`;

const StyledInput = styled.input`
  font-size: 20px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
`;

// allows users to search by username or title
const Search: React.FC<SearchPageProps> = (props) => {
  const [value, setValue] = useState("");
  const [field, setField] = useState("username");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value === "") {
      alert("Cannot submit blank fields, please try again!");
    } else {
      let filteredPosts: Object[] = [];
      for (let post of props.posts) {
        if (typeof post[field] === "string") {
          if (post[field].includes(value)) {
            filteredPosts.push(post);
          }
        }
      }
      props.setPosts!(filteredPosts);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledSelect value={field} onChange={(e) => setField(e.target.value)}>
        <option value="username">Username</option>
        <option value="title">Title</option>
      </StyledSelect>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></StyledInput>
      <StyledButton type="submit">
        <i className="fas fa-search"></i>
      </StyledButton>
    </StyledForm>
  );
};

export default Search;
