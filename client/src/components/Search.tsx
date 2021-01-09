import React, { useState } from "react";


const Search: React.FC = () => {
  const [name, setName] = useState('');
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Search;
