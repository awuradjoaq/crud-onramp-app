import React from "react";

interface StateProps {
  name: string;
};

class Search extends React.Component <{}, StateProps>{
  constructor(props: {}) {
    super(props)
    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

export default Search;
